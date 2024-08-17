import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectButton: React.FC = () => {
  return (
    <Link href="https://github.com/vishalrk1" target="_">
      <button className="flex border-primary border-2 justify-center items-center rounded-md px-6 py-2 gap-2 hover:bg-primary transition-all">
        <p className="font-semibold text-sm md:text-[16px] text-white tracking-wider">
          Github
        </p>
        <FaGithub size={22} color="white" />
      </button>
    </Link>
  );
};

export default ProjectButton;
