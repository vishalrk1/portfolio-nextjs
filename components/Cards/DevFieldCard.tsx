"use client"
import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
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
  const control = useAnimation();
  const devFieldRef = React.useRef(null);
  const inView = useInView(devFieldRef);

  useEffect(() => {
    if (inView) {
      control.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: 0.5 * index,
          duration: 0.75,
          ease: "easeOut",
        },
      });
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={devFieldRef}
      initial={{
        x: -100,
        opacity: 0,
      }}
      animate={control}
      whileHover={{
        scale: 1.08,
        transition: {
          duration: 0.25,
        },
      }}
    >
      <Card className="bg-primary border-none pt-6 md:pt-12 w-[150px] md:w-[200px] h-44 md:h-52">
        <CardFooter className="flex flex-col justify-center items-start mt-8">
          {devFieldItem.icon}
          <p className="text-white font-poppins tracking-wide text-base md:text-xl mt-2 font-semibold">
            {devFieldItem.title_line1}
          </p>
          <p className="text-white font-poppins tracking-wide text-base md:text-xl mt-0 font-semibold">
            {devFieldItem.title_line2}
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DevFieldCard;
