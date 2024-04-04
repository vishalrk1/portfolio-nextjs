"use client";
import React, { useEffect, useState } from "react";
import { Route, navRoutes } from "./routes";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const location = "/"; // window.location.pathname;
  const pathname = usePathname()

  useEffect(() => {
    navRoutes.forEach((route) => {
      if (route.path === location) {
        route.isActive = true;
      } else {
        route.isActive = false;
      }
    });
  }, [location]);

  return (
    <nav className="sticky top-0 left-0 bg-[#181824] flex justify-between md:justify-center items-center tracking-wider h-[80px] px-4 md:px-40 py-5 md:space-x-52">
      <h1 className="text-base md:text-[28px] font-semibold text-primary">Vishal</h1>
      <div className="flex space-x-3 md:space-x-10">
        {navRoutes.map((item, index) => (
          <Link href={item.path} key={index}>
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
