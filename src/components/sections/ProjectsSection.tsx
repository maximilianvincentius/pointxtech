import { motion } from 'framer-motion'
import React from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectShowcase } from '@/components/projects/ProjectShowcase'

export const ProjectsSection = () => (
  <section id="projects" className="bg-bg py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="THINGS I'VE BUILT"
        heading="Projects & Experiments"
        paragraph="Independent projects started from curiosity. Some are experiments, others grew into larger builds. All still evolving."
        variant="large"
      />
      <div className="mt-16">
        <ProjectShowcase />
      </div>
    </div>
  </section>
)