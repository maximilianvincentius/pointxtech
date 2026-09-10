import { motion } from "framer-motion";
import React from "react";
import { ProjectType } from "../../constants/index.ts";
import { ProjectCard } from "./ProjectCard";

export const ProjectShowcase = () => {
  const projects = [
    {
      id: "phyxhub",
      number: "01",
      title: "PhyxHub",
      subtitle: "Interactive Physics Learning Platform",
      description:
        "A simulation-first platform that lets students manipulate variables and watch physics come alive in real time.",
      industry: ["Education", "Interactive Web", "Simulation"],
      technologies: ["React", "Tailwind CSS", "Express", "MongoDB"],
      image: "src/assets/phyxhub.png",
      href: "https://phyxhub.com",
      type: ProjectType.APP,
    },
    {
      id: "fractals-of-entropy",
      number: "02",
      title: "Fractals of Entropy",
      subtitle: "Top-Down Survival Shooter",
      description:
        "A stylized Android survival shooter focused on fast-paced combat, resource collection, mission progression, and customizable weapon loadouts.",
      industry: ["Gaming", "Mobile", "Action"],
      technologies: ["C#", "Unity", "Android", "Autodesk Maya"],
      image: "src/assets/fractals-of-entropy.jpg",
      href: "https://github.com/maximilianvincentius/fractals-of-entropy",
      type: ProjectType.REPOSITORY,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pb-16"
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};
