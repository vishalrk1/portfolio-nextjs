"use client"
import ProjectCard from "@/components/Cards/ProjectCard";
import { ProjectsData } from "@/utils/projectsData";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="show"
      // viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col justify-center bg-secondary w-full px-60 py-8"
    >
      <h1 className="font-semibold text-4xl font-poppins mt-8">
        Featured Projects
      </h1>
      <p className="font-normal font-poppins text-lg text-white mt-2">
        I have worked on many projects over the course of being developer, here
        are a few of my live, real world projects.
      </p>
      <div className="flex flex-wrap justify-evenly gap-6 mt-6">
        {ProjectsData.filter((item) => item.isFeatured).map((item, index) => {
          return (
            <ProjectCard
              projectItem={item}
              imagesAutoPlay={true}
              onClick={() => {}}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
