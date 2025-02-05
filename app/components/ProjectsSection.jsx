"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 11,
    title: "Running Doom on a Polycom",
    description: "Project In Progress. ETA: March 2025",
    image: "/Images/coming-soon.png",
    tag: ["All", "Cybersecurity"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Transparent display from a recycled monitor",
    description: "Publishing Soon!",
    image: "/Images/coming-soon.png",
    tag: ["All", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Supercomputer from repurposed stack of Playstation 3s",
    description: "Publishing Soon!",
    image: "/Images/coming-soon.png",
    tag: ["All", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Home Network VPN Server from repurposed Playstation 3",
    description: "Project In Progress. ETA: March 2025",
    image: "/Images/coming-soon.png",
    tag: ["All", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 19,
    title: "React & Next.js Portfolio Website",
    description: "This personal website. Clone it on GitHub.",
    image: "/Images/Portfolio.png",
    tag: ["All", "Software"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 20,
    title: "Photography Portfolio",
    description: "A collection of my best works",
    image: "/Images/Photography.JPG",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 21,
    title: "Tig Welded Machining Table",
    description: "Completed 5 Feb 2025. Project Writeup Coming Soon!",
    image: "/Images/Welding.jpg",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 22,
    title: "Inexpensive, Locally Sourced, 1Kg lift quadcopter",
    description: "In-progress: ETA July 2025",
    image: "/Images/coming-soon.png",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All"); // Default to show all projects
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-12 bg-[#121212]">
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
        Personal Projects
      </h2>

      {/* Tag Filters */}
      <div className="text-white flex flex-wrap justify-center items-center gap-4 mb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cybersecurity"
          isSelected={tag === "Cybersecurity"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>

      {/* Responsive Grid */}
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-16 mb-12"
        style={{ gridAutoRows: "1fr" }} // Ensures equal row heights
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            className="flex flex-col h-full" // Ensures consistent height
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.15 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
