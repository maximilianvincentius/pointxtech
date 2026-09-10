import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

import { ProjectType } from "../../constants/index.ts";
interface Props {
  project: Project;
  index?: number;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

export const ProjectCard = ({ project, index = 0 }: Props) => (
  <motion.article
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
      amount: 0.15,
    }}
    whileHover={{
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }}
    className="group relative overflow-hidden rounded-2xl border border-line bg-surface/30 transition-colors duration-300 hover:border-accent/30 hover:bg-surface/50"
  >
    {/* Image */}
    <div className="relative aspect-[16/10] overflow-hidden">
      {project.image ? (
        <motion.img
          src={project.image}
          alt={project.title}
          initial={false}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-surface/50 to-surface/70" />
      )}
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Metadata */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold tracking-wider text-accent">
          PROJECT {project.number}
        </span>

        {project.industry.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-2 py-0.5 text-xs text-subtle"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="mb-4 text-base text-muted">{project.subtitle}</p>

      {/* Description */}
      <p className="mb-6 line-clamp-3 text-sm text-muted">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded border border-line px-2 py-1 text-xs text-subtle"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={false}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-ink"
      >
        {project.type === ProjectType.REPOSITORY ? "View Repository" : "View Live Demo"}
        <ArrowUpRight className="h-4 w-4" />
      </motion.a>
    </div>
  </motion.article>
);
