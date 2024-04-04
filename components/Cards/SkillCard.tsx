"use client"
import { Skill } from "@/utils/types";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface SkillCardProps {
  item: Skill;
  idx: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ idx, item }) => {
  const control = useAnimation();
  const skillRef = useRef(null);
  const isInView = useInView(skillRef);

  useEffect(() => {
    if (isInView) {
      control.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: 0.2 * idx,
          duration: 0.3,
          ease: "easeOut",
        },
      });
    }
  }, [isInView, control]);
  return (
    <motion.div
      ref={skillRef}
      initial={{
        x: -100,
        opacity: 0,
      }}
      animate={control}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.25,
        },
      }}
      title={item.name}
      className="flex flex-col items-center justify-center bg-slate-900 p-2 rounded-xl"
      key={idx}
    >
      <Image src={item.icon} alt={item.name} className="w-12 h-12" />
    </motion.div>
  );
};

export default SkillCard;
