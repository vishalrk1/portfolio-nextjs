import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center bg-secondary w-full px-10 md:px-60 pb-10"
    >
      <h1 className="font-semibold text-4xl font-poppins mt-8">
        Connect With Me
      </h1>
      <div className="flex justify-between">
        <p className="text-white text-base font-poppins m-2 w-1/2">
          Hii, If you like my profile and want to connect with me please drop a
          message. i will get back to u lets build someting crazy
        </p>
        <div className="w-1/2 flex flex-col gap-2">
          <Input
            type="text"
            placeholder="Your Name"
            className="w-full text-base p-4 py-6 rounded-lg border-1 bg-[#181824]"
          />
          <Input
            type="text"
            placeholder="Your Email"
            className="w-full p-4 py-6 rounded-lg border-1 bg-[#181824]"
          />
          <Textarea
            placeholder="Your Message here...."
            className="w-full resize-none h-52 p-4 py-6 rounded-lg border-1 bg-[#181824]"
          />
          <Button className="bg-primary my-2 w-max">Send Message</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
