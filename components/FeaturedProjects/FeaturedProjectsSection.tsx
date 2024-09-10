import { ProjectsData } from "@/utils/projectsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col gap-8 justify-center bg-secondary w-full px-6 md:px-12 xl:px-40 py-8"
    >
      <h1 className="font-semibold text-3xl md:text-4xl font-poppins mt-8">
        Featured Projects
      </h1>
      {ProjectsData.filter((item) => item.isFeatured).map((item, index) => (
        <div
          data-aos="fade-up"
          key={`${item.name}-${index}`}
          data-aos-delay="50"
          className={`flex items-center  ${
            item.isFlipped
              ? `flex-col md:flex-row-reverse`
              : `flex-col md:flex-row`
          }`}
        >
          <div
            className={`relative aspect-video max-w-[700px] w-full max-h-[450px] h-1/2 top-12 md:top-0 ${
              item.isFlipped ? `md:right-12` : `md:left-12`
            }`}
          >
            <Image
              src={item.images[0].url}
              alt={item.images[0].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div
            className={`relative flex flex-col justify-start gap-4 ${
              item.isFlipped
                ? `md:left-24 items-start`
                : `md:right-24 items-end`
            }`}
          >
            <h1 className="hidden md:block text-3xl font-bold px-2 text-white">
              {item.name}
            </h1>
            <div
              className={`bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden flex h-max w-full`}
            >
              <div className="p-6">
                <h1 className="block md:hidden text-lg mb-2 font-bold text-white">
                  {item.name}
                </h1>
                <p className="mb-4 text-sm md:text-base">{item.description}</p>
                <div className="flex items-center space-x-3">
                  {item.liveLink && (
                    <Link
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 text-sm md:text-base hover:underline md:mb-2 inline-block"
                    >
                      View Project
                    </Link>
                  )}
                  <Link
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm md:text-base hover:underline md:mb-2 inline-block"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-xs text-white py-1 px-2 rounded-full"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProjectsSection;
