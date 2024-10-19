import { StaticImageData } from "next/image";
import React from "react";

export interface Skill {
  name: string;
  icon: string;
}

export type ProjectType =
  | "Web Development"
  | "Android Development"
  | "AI/ML"
  | "Data Science"
  | "Backend Development"
  | "Game Development";

export interface Project {
  name: string;
  description: string;
  liveLink: string;
  githubLink: string;
  isFeatured: boolean;
  isFlipped: boolean;
  images: Image[];
  skills: Skill[];
  projectFeatures: String[];
  projectTypes: ProjectType[];
}

export interface Experience {
  company: string;
  position: string;
  companyLogo: StaticImageData;
  startDate: string;
  endDate?: string;
  description: string[];
  isCurrent: boolean;
  jobType: "Full Time" | "Part Time" | "Internship";
}

export interface Image {
  url: string;
  alt: string;
}

export interface Social {
  name: string;
  url: string;
  icon: React.ReactElement;
}

export interface Contact {
  name: string;
  url: string;
  icon: React.ReactElement;
}
