import { User } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const AboutmeButton: React.FC = () => {
  return (
    // <Button variant="default" className="flex bg-primary justify-center items-center rounded-md px-6 py-2 gap-2 hover:bg-transparent hover:border-primary hover:border-2">
    //   <p className="font-semibold text-[16px] text-white tracking-wider">
    //     About Me
    //   </p>
    //   <User size={24} color="white" fill="white" />
    // </Button>
    <button className="flex bg-primary justify-center items-center rounded-md px-6 py-2 gap-2 hover:bg-transparent hover:border-primary hover:border-2">
      <p className="font-semibold text-sm md:text-[16px] text-white tracking-wider">
        About Me
      </p>
      <User size={24} color="white" fill="white" />
    </button>
  );
};

export default AboutmeButton;
