import { Project } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "../ui/badge";

interface AllProjectCardProps {
  item: Project;
  index: number;
  once: boolean;
}

const AllProjectCard: React.FC<AllProjectCardProps> = ({
  item,
  index,
  once,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once, amount: 0.2 });
  const isFlipped = index % 2 !== 0;

  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  const detailsVariants: Variants = {
    offscreen: {
      x: 0,
      y: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      animate={isInView ? "onscreen" : "offscreen"}
      variants={cardVariants}
      className={`flex items-center ${
        isFlipped ? `flex-col md:flex-row-reverse` : `flex-col md:flex-row`
      }`}
    >
      <motion.div
        className={`relative aspect-video max-w-[700px] w-full max-h-[450px] h-1/2 top-12 md:top-0 ${
          isFlipped ? `md:right-12` : `md:left-12`
        }`}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <Image
          src={item.images[0].url}
          alt={item.images[0].alt}
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>
      <motion.div
        variants={detailsVariants}
        className={`relative flex flex-col justify-start gap-4 ${
          isFlipped ? `md:left-24 items-start` : `md:right-24 items-end`
        } md:[--x-direction:${isFlipped ? "-50px" : "50px"}]`}
        style={
          {
            "--y-direction": "50px",
            "--x-direction": "0px",
          } as React.CSSProperties
        }
      >
        <h1 className="hidden md:block text-xl lg:text-2xl 2xl:text-3xl font-bold px-2 text-white">
          {item.name}
        </h1>
        <motion.div
          className={`bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden flex h-max w-full`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className="p-6">
            <h1 className="block md:hidden text-lg mb-2 font-bold text-white">
              {item.name}
            </h1>
            <p className="mb-4 text-sm xl:text-base">{item.description}</p>
            <div className="flex items-center space-x-3">
              {item.liveLink && (
                <Link
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="default"
                    className="flex items-center gap-2 bg-black text-white hover:bg-[#101010] text-sm md:text-base"
                  >
                    <Globe size={16} className="hidden md:block" />
                    Website
                  </Button>
                </Link>
              )}
              <Link
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  className="flex items-center gap-2 bg-black text-white hover:bg-[#101010] text-sm md:text-base"
                >
                  <FaGithub size={16} className="hidden md:block" />
                  Github
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-2 w-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {item.skills.map((tech, index) => (
            <Badge
              key={index}
              variant="default"
              className="bg-gray-800 text-xs font-normal text-white hover:bg-gray-800"
            >
              {tech.name}
            </Badge>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AllProjectCard;
