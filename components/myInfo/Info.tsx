import React from "react";
import AboutmeButton from "../Buttons/aboutme-button";
import ProjectButton from "../Buttons/project-button";
import Image from "next/image";

import pfpImage from "../../assets/pfp.jpg";

import {
  FaLinkedin,
  FaSquareGithub,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";
import Link from "next/link";

const Info: React.FC = () => {
  return (
    <section
      id="info"
      className="flex md:flex-row flex-col items-center justify-center bg-secondary w-full px-8 md:px-60 py-5"
    >
      <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-32 mb-10">
        <p className="text-2xl md:text-[32px] text-white font-semibold align-top tracking-wider mb-4">
          Hello, I'm
        </p>
        <p className="text-4xl md:text-[52px] text-white font-semibold align-top tracking-wider mb-4">
          Vishal Karangale
        </p>
        <p className="text-base md:text-[18px] text-white font-medium align-top tracking-wider">
          Freelance Fullstack developer, & AI/ML enthusiast. I create seamless
          web experiences and AI applications for end-users.
        </p>
        <div className="flex flex-row mt-4 md:mt-10 gap-5">
          <AboutmeButton />
          <ProjectButton />
        </div>
      </div>
      <div className="flex md:justify-end items-center w-full md:w-1/2 md:mt-24 mb-10 gap-4">
        <div className="flex flex-row md:flex-col items-center justify-center gap-4">
          <Link href="https://linkedin.com/in/vishal-karangale" target="_">
            <FaLinkedin size={28} color="white" />
          </Link>
          <Link href="https://github.com/vishalrk1" target="_">
            <FaSquareGithub size={28} color="white" />
          </Link>
          <Link href="https://twitter.com/KarangaleVishal" target="_">
            <FaSquareXTwitter size={28} color="white" />
          </Link>
          <Link href="https://www.instagram.com/vishal_rk1/" target="_">
            <FaSquareInstagram size={28} color="white" />
          </Link>
        </div>
        <Image
          src={pfpImage}
          alt=""
          className="hidden md:block w-72 h-96 rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Info;
