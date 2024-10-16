import React from "react";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-6">
      <div className="flex justify-between items-center">
        <Link href="https://www.linkedin.com/in/vishal-karangale/" target="_">
          <p className="text-white text-sm font-poppins cursor-pointer">
            @vishal karangale
          </p>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="https://www.linkedin.com/in/vishal-karangale/" target="_">
            <FaLinkedinIn color="white" size={18} />
          </Link>
          <Link href="https://github.com/vishalrk1" target="_">
            <FaGithub color="white" size={18} />
          </Link>
          <Link href="https://twitter.com/KarangaleVishal" target="_">
            <FaXTwitter color="white" size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
