import React from "react";
import AboutmeButton from "../Buttons/aboutme-button";
import ProjectButton from "../Buttons/project-button";

import {
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";
import Link from "next/link";
import { IconCloudDemo } from "../IconCloud";

const Info: React.FC = () => {
  return (
    <section
      id="info"
      className="flex md:flex-row flex-col items-center justify-center bg-secondary w-full px-4 lg:px-28 xl:px-60 py-5"
    >
      <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-16 mb-10">
        <p
          data-aos="fade-up"
          data-aos-delay="20"
          className="text-2xl md:text-[30px] text-white font-poppins font-semibold align-top tracking-wider mb-4"
        >
          Hello, I&apos;m
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="40"
          className="text-4xl md:text-[44px] text-white font-poppins font-semibold align-top tracking-wider mb-4"
        >
          Vishal Karangale
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="60"
          className="text-base md:text-[16px] text-white  font-light align-top tracking-wider"
        >
          I&apos;m a software developer specializing in building and developing
          softwares with remarkable user experience. Having experience in React,
          React Native and Next JS, I build applications that are scalable and
          flexible.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="80"
          className="flex flex-row mt-4 md:mt-10 gap-2 md:gap-5"
        >
          <AboutmeButton />
          <ProjectButton />
        </div>
        <div className="flex flex-row items-center mt-6 gap-4">
          <Link
            data-aos="fade-up"
            data-aos-delay="100"
            href="https://linkedin.com/in/vishal-karangale"
            target="_"
          >
            <FaLinkedin size={28} color="white" />
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-delay="150"
            href="https://twitter.com/KarangaleVishal"
            target="_"
          >
            <FaSquareXTwitter size={28} color="white" />
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            href="https://www.instagram.com/vishal_rk1/"
            target="_"
          >
            <FaSquareInstagram size={28} color="white" />
          </Link>
        </div>
      </div>
      <div className="flex md:justify-end items-center w-full md:w-1/2 md:mt-24 mb-10 gap-4">
        {/* <Image
          src={pfpImage}
          alt=""
          className="hidden md:block w-72 h-96 rounded-lg object-cover"
        /> */}
        <IconCloudDemo />
      </div>
    </section>
  );
};

export default Info;
