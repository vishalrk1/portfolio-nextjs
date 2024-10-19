"use client";
import { DevFieldsData } from "@/utils/DevFiledsData";
import { useEffect, useState } from "react";

import Info from "@/components/myInfo/Info";
import SpaceSection from "@/components/spaceSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import DevFieldCard from "@/components/Cards/DevFieldCard";
import ContactSection from "@/components/sections/ContactSection";
import FeaturedProjectsSection from "@/components/FeaturedProjects/FeaturedProjectsSection";

import { ExperienceData } from "@/utils/experienceData";

import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
      <main className="flex flex-col justify-center text-primary min-h-screen">
        <Info />
        <SpaceSection />
        <AboutSection />
        <section className="flex flex-wrap items-center justify-center md:justify-start bg-secondary w-full md:px-12 xl:px-60 gap-2 md:gap-6">
          {DevFieldsData.map((item, index) => {
            return (
              <DevFieldCard devFieldItem={item} index={index} key={index} />
            );
          })}
        </section>
        <FeaturedProjectsSection />
        <section
          id="experience"
          className="flex flex-col justify-center bg-secondary w-full px-6 md:px-12 xl:px-40"
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
        <SkillsSection />
        <ContactSection />
      </main>
  );
};

export default Homepage;
