import { ChevronRight } from "lucide-react";
import React, { useRef } from "react";

import { motion, useInView, Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface ViewProjectsButtonProps {
  animate: boolean;
  className?: string;
}

const ViewProjectsButton: React.FC<ViewProjectsButtonProps> = ({
  animate,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const varients: Variants = {
    Offscreen: {
      y: 50,
      opacity: 0,
    },
    Onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <motion.a
      ref={ref}
      initial="Offscreen"
      animate={isInView && animate ? "Onscreen" : "Offscreen"}
      variants={varients}
      href="/projects"
      className={twMerge(
        "flex gap-1 items-center text-white text-base md:text-lg font-normal hover:text-primary cursor-pointer group",
        className
      )}
      whileHover={{ scale: 1.10 }}
    >
      View All Projects
      <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300" />
    </motion.a>
  );
};

export default ViewProjectsButton;
