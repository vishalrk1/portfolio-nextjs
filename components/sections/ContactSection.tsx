import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactSection = () => {
  const serviceId = process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID as string;
  const templeteId = process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID as string;
  const publicId = process.env.NEXT_PUBLIC_MAILJS_PUBLIC_ID as string;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Fill all the fields 😢");
      setLoading(false)
      return;
    }
    emailjs.send(serviceId, templeteId, formData, publicId).then(
      (_) => {
        toast.success("Message sent successfully 😎");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
      },
      (_) => {
        toast.error("Message Not sent, please try again 😔😓");
        setLoading(false);
      }
    );
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center bg-secondary w-full px-6 md:px-12 xl:px-40 pb-10"
    >
      <h1 className="font-semibold text-3xl md:text-4xl font-poppins mt-8">
        Connect With Me
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <p className="text-white text-sm md:text-base font-poppins m-2 w-full lg:w-1/2">
          Hii, If you like my profile and want to connect with me please drop a
          message. i will get back to you lets build something crazy
        </p>
        <div className="w-full lg:w-1/2 flex flex-col gap-2 mt-2">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full text-base p-4 py-6 rounded-lg border-1 bg-[#181824]"
          />
          <Input
            type="text"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 py-6 rounded-lg border-1 bg-[#181824]"
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message here...."
            className="w-full resize-none h-52 p-4 py-6 rounded-lg border-1 bg-[#181824]"
          />
          <Button
            className="bg-primary my-2 w-max"
            onClick={handleSubmit}
            disabled={loading}
          >
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
