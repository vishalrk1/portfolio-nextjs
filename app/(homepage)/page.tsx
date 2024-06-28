"use client";
import { DevFieldsData } from "@/utils/DevFiledsData";
import DevFieldCard from "@/components/Cards/DevFieldCard";

import Info from "@/components/myInfo/Info";
import SpaceSection from "@/components/spaceSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { ExperienceData } from "@/utils/experienceData";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { useEffect, useState } from "react";
import ContactSection from "@/components/sections/ContactSection";

const Homepage = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="flex flex-col justify-center text-primary min-h-screen">
      <Info />
      <SpaceSection />
      <AboutSection />
      <section className="flex flex-wrap items-center justify-center md:justify-start bg-secondary w-full px-6 lg:px-60 gap-4 md:gap-6">
        {DevFieldsData.map((item, index) => {
          return <DevFieldCard devFieldItem={item} index={index} key={index} />;
        })}
      </section>
      <SkillsSection />
      <ProjectsSection />
      <section
        id="experience"
        className="flex flex-col justify-center bg-secondary w-full px-6 md:px-30 lg:px-60"
      >
        <h1 className="font-semibold text-4xl font-poppins my-8">
          Work Experience
        </h1>
        <div className="md:mx-10">
          {ExperienceData.map((item, index) => (
            <ExperienceSection experience={item} key={index} />
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
  );
};

export default Homepage;
