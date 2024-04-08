import { Calendar } from "lucide-react";
import React from "react";
import dayjs from "dayjs";
import { Experience } from "@/utils/types";

import logo from "../../assets/jio-logo.png";
import Image from "next/image";

interface ExperienceSectionProps {
  experience: Experience;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => {
  const endDate = experience.isCurrent ? dayjs() : dayjs(experience.endDate);
  const totalMonths = experience.isCurrent
    ? endDate.diff(experience.startDate, "months")
    : endDate.diff(experience.startDate, "months");

  return (
    <>
      <ul
        aria-label="experience feed"
        role="feed"
        className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
      >
        <li role="article" className="relative pl-8 ">
          <div className="flex flex-col flex-1 gap-4">
            <a
              href="#"
              className="absolute z-10 inline-flex items-center justify-center w-12 h-12 border-0 text-white rounded-lg p-2 bg-background -left-4 ring-0"
            >
              <Image
                src={experience.companyLogo}
                alt="user name"
                width="60"
                height="60"
                className="max-w-full rounded-lg"
              />
            </a>
            <h4 className="flex flex-col mt-2 ml-2 items-start text-lg font-medium leading-8 text-slate-700 md:flex-row lg:items-center">
              <span className="flex-1 text-xl text-primary font-semibold font-poppins">
                {experience.company}
                <span className="mx-4 text-base font-normal font-poppins text-slate-500">
                  {" "}
                  {`${dayjs(experience.startDate).format("MMM YYYY")} - ${
                    experience.isCurrent
                      ? "Present"
                      : endDate.format("MMM YYYY")
                  }`}
                </span>
              </span>
              <span className="text-sm font-normal text-slate-400 font-poppins">
                {" "}
                {`${totalMonths} months`}
              </span>
            </h4>
            <ul className="list-disc mx-4 my-3 space-y-3">
              {experience.description.map((txt, index) => (
                <li
                  key={index}
                  className="font-light text-xs md:text-base text-white font-poppins"
                >
                  {txt}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ExperienceSection;
