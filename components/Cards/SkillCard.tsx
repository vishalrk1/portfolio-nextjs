"use client"
import { Skill } from "@/utils/types";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface SkillCardProps {
  item: Skill;
  idx: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ idx, item }) => {
  return (
    <div
      title={item.name}
      className="flex flex-col items-center justify-center bg-slate-900 p-2 rounded-xl"
      key={idx}
    >
      <Image src={item.icon} alt={item.name} className="w-12 h-12" />
    </div>
  );
};

export default SkillCard;
