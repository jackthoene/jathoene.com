import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 Description",
    image: "/Images/Projects/Me_sitting.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 Description",
    image: "/Images/Projects/Me_sitting.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Real Time Payment Application",
    description: "Project 3 Description",
    image: "/Images/Projects/Me_sitting.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Smartwatch Website",
    description: "Project 4 Description",
    image: "/Images/Projects/Me_sitting.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Lab Website",
    description: "Project 5 Description",
    image: "/Images/Projects/Me_sitting.jpg",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="grid md:grid-cold-3 gap-8 md:gap-12">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
