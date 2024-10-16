import React from "react";
import dayjs from "dayjs";
import Image from "next/image";

import { Experience } from "@/utils/types";
import "aos/dist/aos.css";

interface ExperienceSectionProps {
  experience: Experience;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => {
  const endDate = experience.isCurrent ? dayjs() : dayjs(experience.endDate);
  const totalMonths = endDate.diff(experience.startDate, "months");

  let displayDuration;

  if (totalMonths > 12) {
    const years = totalMonths / 12;
    displayDuration = `${years.toFixed(1)} ${years === 1 ? "year" : "years"}`;
  } else {
    displayDuration = `${totalMonths} ${
      totalMonths === 1 ? "month" : "months"
    }`;
  }

  return (
    <div
      className="experience-timeline relative py-8 pl-8 before:absolute before:top-0 before:left-4 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-secondary"
      data-aos="fade-up"
    >
      <div className="experience-card p-6 transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="company-logo-wrapper absolute -left-3 z-10">
            <Image
              src={experience.companyLogo}
              alt={`${experience.company} logo`}
              width={60}
              height={60}
              className="rounded-full border-4 border-background"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-primary">
              {experience.position}
            </h3>
            <h3 className="text-lg font-semibold text-slate-400">
              {experience.company} • {experience.jobType}
            </h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <p className="font-medium text-slate-400">
            {`${dayjs(experience.startDate).format("MMM YYYY")} - ${
              experience.isCurrent ? "Present" : endDate.format("MMM YYYY")
            }`}
          </p>
          <span className="text-sm font-medium text-slate-400 mt-2 md:mt-0">
            {displayDuration}
          </span>
        </div>
        <ul className="space-y-3 mt-4">
          {experience.description.map((txt, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p className="text-white text-sm md:text-base">{txt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
