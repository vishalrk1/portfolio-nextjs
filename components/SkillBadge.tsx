import React from "react";
import { Skill } from "../utils/types";
import Image from "next/image";

interface SkillBadgeProps {
  data: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ data }) => {
  return (
    <div className="flex h-[40px] w-[150px] md:w-[200px] bg-gray-600 rounded-md items-center justify-center p-4 space-x-2">
      {data.icon ? (
        <Image src={data.icon} alt={data.name} className="w-8 h-8" />
      ) : null}
      <p className="text-sm md:text-lg text-CustomGrey">{data.name}</p>
    </div>
  );
};

export default SkillBadge;
