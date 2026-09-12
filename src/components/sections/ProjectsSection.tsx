import { motion } from 'framer-motion'
import React from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectShowcase } from '@/components/projects/ProjectShowcase'

export const ProjectsSection = () => (
  <section id="projects" className="bg-bg py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="SELECTED WORK"
        heading="Projects"
        paragraph="A selection of platforms and products we have designed, engineered, and shipped."
        variant="large"
      />
      <div className="mt-16">
        <ProjectShowcase />
      </div>
    </div>
  </section>
)