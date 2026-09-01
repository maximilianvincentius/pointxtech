import { motion } from 'framer-motion'
import React from 'react'
import type { Project } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export const ProjectShowcase = () => {
  const projects = [
    {
      id: 'phyxhub',
      number: '01',
      title: 'PhyxHub',
      subtitle: 'Interactive Physics Learning Platform',
      description:
        'A simulation-first platform that lets students manipulate variables and watch physics come alive in real time.',
      industry: ['Education', 'Interactive Web', 'Simulation'],
      technologies: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
      image: 'src/assets/phyxhub.png',
      href: 'https://phyxhub.com',
    },
  ]

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
  )
}