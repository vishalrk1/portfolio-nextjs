"use client";
import React, { useEffect, useRef, useState } from "react";
import { Project } from "@/utils/types";
import ImageCarousel from "../ImageCarousel/imageCarousel";

import { motion, useAnimation, useInView } from "framer-motion";
import ProjectDialog from "../ProjectDialog/ProjectDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
        // onClick={() => setIsOpen(true)}
        // className="flex flex-col w-full md:w-[380px] h-max rounded-lg bg-gradient-to-t from-slate-700 to-slate-800 p-2"
      >
        <Card className="w-full md:w-[380px] h-max rounded-lg bg-gradient-to-t from-slate-700 to-slate-800 border-0">
          <CardHeader>
            <Tooltip>
              <TooltipTrigger>
                <CardTitle
                  onClick={() => setIsOpen(true)}
                  className="text-white font-semibold text-lg cursor-pointer text-start"
                >
                  {projectItem.name}
                </CardTitle>
              </TooltipTrigger>
              <TooltipContent align="start" side="bottom">
                <p>Explore Project Details</p>
              </TooltipContent>
            </Tooltip>
            <CardDescription className="text-gray-400 md:line-clamp-4">
              {projectItem.description}
            </CardDescription>
            <Accordion
              type="single"
              collapsible
              className="hidden md:block border-0"
            >
              <AccordionItem value="images" className="border-0">
                <AccordionTrigger className="w-full text-white">
                  Demo Images
                </AccordionTrigger>
                <AccordionContent>
                  <ImageCarousel
                    images={projectItem.images}
                    className="h-[100px] md:h-[200px]"
                    autoplay={imagesAutoPlay}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardHeader>
          <CardFooter className="space-x-2">
            {projectItem.liveLink && (
              <Button
                onClick={() => openInNewTab(projectItem.liveLink)}
                variant="default"
              >
                Live Demo
              </Button>
            )}
            {projectItem.githubLink && (
              <Button
                variant="outline"
                className="bg-transparent text-white"
                onClick={() => openInNewTab(projectItem.githubLink)}
              >
                Github
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

export default ProjectCard;
