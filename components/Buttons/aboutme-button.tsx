import { User } from "lucide-react";
import React from "react";

const AboutmeButton: React.FC = () => {
  return (
    <button className="flex bg-primary justify-center items-center rounded-md px-6 py-2 gap-2 hover:bg-transparent hover:border-primary hover:border-2">
      <p className="font-semibold text-xs md:text-[16px] text-white tracking-wider">
        About Me
      </p>
      <User size={24} color="white" fill="white" />
    </button>
  );
};

export default AboutmeButton;
