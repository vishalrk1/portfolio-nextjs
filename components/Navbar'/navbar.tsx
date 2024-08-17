"use client";
import React, { useEffect, useState } from "react";
import { Route, navRoutes } from "./routes";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

const Navbar = () => {
  const updateActiveRoute = (sectionId: string) => {
    navRoutes.forEach((route) => {
      if (route.sectionId === sectionId) {
        route.isActive = true;
      } else {
        route.isActive = false;
      }
    });
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSectionId = section.id;
        }
      });

      if (activeSection !== currentSectionId) {
        setActiveSection(currentSectionId);
        updateActiveRoute(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 left-0 bg-[#181824] flex justify-between md:justify-center items-center tracking-wider h-[80px] px-4 md:px-40 py-5 md:space-x-52 z-10">
      <h1 className="hidden md:block text-base md:text-[28px] font-semibold text-primary">
        vishal
      </h1>
      <div className="flex space-x-3 md:space-x-10">
        {navRoutes.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            onClick={() => updateActiveRoute(item.path)}
          >
            <p
              className={twMerge(
                "text-sm md:text-[18px] font-semibold tracking-wide cursor-pointer",
                item.isActive ? "text-primary" : "text-white"
              )}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
