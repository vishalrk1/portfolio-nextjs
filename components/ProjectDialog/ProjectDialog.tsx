"use client";
import { Project } from "@/utils/types";
import React from "react";
import Modal from "../ui/modal";
import ImageCarousel from "../ImageCarousel/imageCarousel";
import SkillBadge from "../SkillBadge";

interface ProjectDialogProps {
  project: Project;
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  project,
  isOpen,
  onConfirm,
  onClose,
}) => {
  return (
    <Modal
      title={project.name}
      description={project.description}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4">
        <ImageCarousel
          images={project?.images}
          autoplay={true}
          className="w-100 h-100 w-3/4"
        />
        <h1 className="text-lg md:text-2xl text-white font-semibold mt-6">
          Technologies Used
        </h1>
        {project.skills.length === 0 && (
          <p className="text-lg text-center text-gray-300 mt-6">
            No skills Added
          </p>
        )}
        {project.skills.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            {project.skills.map((item, index) => {
              return <SkillBadge data={item} key={index} />;
            })}
          </div>
        )}
        <h1 className="text-lg md:text-2xl text-white font-semibold mt-6">
          Features
        </h1>
        {project.projectFeatures.length > 0 && (
          <ul className="list-disc mx-10 my-3 space-y-3">
            {project.projectFeatures.map((item, index) => {
              return (
                <li key={index} className="text-gray-300 text-sm md:text-base">
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Modal>
  );
};

export default ProjectDialog;
