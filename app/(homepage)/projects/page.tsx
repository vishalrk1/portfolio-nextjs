"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featuredProjects, ProjectsData } from "@/utils/projectsData";
import { Project } from "@/utils/types";
import AllProjectCard from "@/components/Cards/AllProjectCard";

interface Tab {
  id: number;
  title: "Web Development" | "Android Development" | "AI/ML";
  data: Project[];
}

const ProjectScreen = () => {
  const tabs: Tab[] = [
    { id: 1, title: "Web Development", data: ProjectsData },
    { id: 2, title: "Android Development", data: featuredProjects },
    { id: 3, title: "AI/ML", data: [] },
  ];
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const [sliderWidth, setSliderWidth] = useState<number>(0);
  const [sliderOffset, setSliderOffset] = useState<number>(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const setTabRef = (index: number) => (el: HTMLButtonElement | null) => {
    tabRefs.current[index] = el;
  };

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab - 1];
    if (activeTabElement) {
      setSliderWidth(activeTabElement.offsetWidth);
      setSliderOffset(activeTabElement.offsetLeft);
    }
  }, [activeTab]);

  return (
    <main className="text-primary min-h-screen">
      <h1 className="text-3xl text-white font-semibold px-6 md:px-12 xl:px-40 py-8 mb-2 md:mb-6">
        All Projects
      </h1>
      <div className="w-full overflow-hidden my-4 px-4 md:px-6 xl:px-20">
        <div className="relative w-full">
          <div className="w-full flex rounded-t-xl">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={setTabRef(index)}
                className={`flex-1 py-2 px-4 text-base md:text-xl font-medium ${
                  activeTab === tab.id ? "text-white" : "text-primary"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <motion.div
            className="absolute bottom-0 h-0.5 bg-white"
            initial={false}
            animate={{
              width: sliderWidth,
              x: sliderOffset,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col gap-10 p-4 my-4"
          >
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.data.map((item, index) => (
                <AllProjectCard item={item} index={index} key={item.name} />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default ProjectScreen;
