"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 11,
    title: "Running Doom on a Polycom",
    description: "Publishing Soon!",
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
    description: "Publishing Soon!",
    image: "/Images/coming-soon.png",
    tag: ["All", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 19,
    title: "React & Next.js Portfolio Website",
    description: "This personal website. Clone it on git",
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
    title: "Tig Welded Coffee Table",
    description: "Publishing Soon!",
    image: "/Images/coming-soon.png",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 22,
    title: "Inexpensive, Locally Sourced, 1Kg lift quadcopter",
    description: "Publishing Soon!",
    image: "/Images/coming-soon.png",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Personal Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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
