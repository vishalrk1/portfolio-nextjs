"use client";
import React, { useEffect, useState, useCallback } from "react";
import { navRoutes, Route } from "./routes";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  let routes: Route[] = pathname === "/" ? navRoutes : navRoutes.slice(0,2)

  const updateActiveRoute = useCallback(
    (sectionId: string) => {
      routes.forEach((route) => {
        route.isActive =
          route.sectionId === sectionId || route.path === pathname;
      });
    },
    [pathname]
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = useCallback(
    (path: string, sectionId: string) => {
      if (path.startsWith("#")) {
        scrollToSection(sectionId);
      } else {
        router.push(path);
      }
      updateActiveRoute(sectionId);
      setActiveSection(sectionId);
    },
    [router, updateActiveRoute]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionBottom
        ) {
          currentSectionId = section.id;
        }
      });

      if (activeSection !== currentSectionId) {
        setActiveSection(currentSectionId);
        updateActiveRoute(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, updateActiveRoute]);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-[#181824] flex justify-between md:justify-start items-center tracking-wider h-20 px-4 md:px-40 py-5 md:space-x-52 z-30">
      <Link href="/" className="hidden md:block">
        <h1 className="text-base md:text-[28px] font-semibold text-primary">
          VISHAL
        </h1>
      </Link>
      <div className="flex gap-6">
        {pathname !== "/" && (
          <a
            href={"/"}
            className={twMerge(
              "text-sm md:text-lg font-semibold tracking-wide cursor-pointer transition-colors duration-200",
              "text-white hover:text-primary"
            )}
          >
            Home
          </a>
        )}
        {routes.map((item) => (
          <a
            href={item.path}
            key={item.sectionId}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.path, item.sectionId);
            }}
            className={twMerge(
              "text-sm md:text-lg font-semibold tracking-wide cursor-pointer transition-colors duration-200",
              item.isActive ? "text-primary" : "text-white hover:text-primary"
            )}
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
