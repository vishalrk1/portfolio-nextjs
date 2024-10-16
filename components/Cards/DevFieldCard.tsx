"use client";
import React from "react";
import { Card, CardFooter } from "../ui/card";

interface DevFieldCardProps {
  index: number;
  devFieldItem: {
    icon: JSX.Element;
    title_line1: string;
    title_line2: string;
  };
}

const DevFieldCard: React.FC<DevFieldCardProps> = ({ index, devFieldItem }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay={500 * index}
      data-aos-duration={150}
      data-aos-once="true"
    >
      <Card className="bg-primary border-none px-0 pt-6 md:pt-12 w-[150px] md:w-[200px] h-44 md:h-52 hover:scale-110 transition-all cursor-pointer duration-200">
        <CardFooter className="flex px-2 md:px-6 flex-col justify-center items-start mt-8">
          {devFieldItem.icon}
          <p className="text-white font-poppins tracking-wide text-base md:text-xl mt-2 font-semibold">
            {devFieldItem.title_line1}
          </p>
          <p className="text-white font-poppins tracking-wide text-base md:text-xl mt-0 font-semibold">
            {devFieldItem.title_line2}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DevFieldCard;
