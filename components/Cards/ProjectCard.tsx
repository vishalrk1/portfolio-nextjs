"use client";
import React, { useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";
import { Project } from "@/utils/types";
import ImageCarousel from "../ImageCarousel/imageCarousel";

import { motion, useAnimation, useInView } from "framer-motion";
import ProjectDialog from "../ProjectDialog/ProjectDialog";

interface ProjectCardProps {
  projectItem: Project;
  imagesAutoPlay: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectItem,
  index,
  imagesAutoPlay,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const control = useAnimation();
  const projectRef = useRef(null);
  const isInView = useInView(projectRef);

  useEffect(() => {
    if (isInView) {
      control.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: 0.5 * index,
          duration: 0.5,
          ease: "easeOut",
        },
      });
    }
  }, [control, isInView]);

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <ProjectDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        project={projectItem}
        onConfirm={() => {}}
      />
      <motion.div
        ref={projectRef}
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={control}
        whileHover={{
          scale: 1.05,
          transition: {
            duration: 0.25,
          },
        }}
        onClick={() => setIsOpen(true)}
        className="flex flex-col w-full md:w-[380px] h-max rounded-lg bg-gradient-to-t from-slate-700 to-slate-800 p-2"
      >
        <ImageCarousel
          images={projectItem.images}
          className="h-[100px] md:h-[200px]"
          autoplay={imagesAutoPlay}
        />
        <div className="flex flex-row justify-between">
          <p className="flex-1 text-left text-white font-semibold text-lg m-2 mb-0">
            {projectItem.name}
          </p>
        </div>
        <p className="text-left text-white text-xs m-2 mt-3 mb-0 text-ellipsis line-clamp-2 md:line-clamp-3">
          {projectItem.description}
        </p>
        <div className="flex flex-row items-center mt-1 mb-0">
          {projectItem.liveLink && (
            <button
              onClick={() => openInNewTab(projectItem.liveLink)}
              className="flex flex-row items-center justify-center w-max text-left bg-primary text-CustomGrey font-semibold text-xs rounded-md m-2 mb-0 p-2 px-6"
            >
              <p className="text-sm text-white">Live Project</p>
            </button>
          )}
          {projectItem.githubLink && (
            <button
              onClick={() => openInNewTab(projectItem.githubLink)}
              className="flex flex-row items-center justify-center w-max text-left text-CustomGrey font-semibold text-xs border-primary border-2 rounded-md m-2 mb-0 p-2 px-4"
            >
              <Github className="inline-block mr-2" size={18} color="white" />
              <p className="text-sm text-white">Github</p>
            </button>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
