import { ProjectsData } from "@/utils/projectsData";
import React from "react";
import AllProjectCard from "../Cards/AllProjectCard";
import ViewProjectsButton from "../Buttons/ViewProjectsButton";

const FeaturedProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col gap-8 justify-center bg-secondary w-full px-6 md:px-12 xl:px-40 py-8"
    >
      <div className="flex flex-col md:flex-row items-start gap-3 md:items-center md:justify-between mt-8 py-2">
        <h1 className="font-semibold text-3xl md:text-4xl font-poppins">
          Featured Projects
        </h1>
        <ViewProjectsButton animate={true} />
      </div>
      {ProjectsData.filter((item) => item.isFeatured).map((item, index) => (
        <AllProjectCard
          key={`${item.name}-${index}`}
          item={item}
          index={index}
          once={false}
        />
      ))}
      <div className="py-12 flex items-center justify-center w-full">
        <ViewProjectsButton animate={true} className="hover:scale-110"/>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
