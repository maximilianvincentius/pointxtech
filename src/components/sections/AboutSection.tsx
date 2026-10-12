import { motion } from 'framer-motion'
import React from 'react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const AboutSection = () => (
  <section id="about" className="bg-bg py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="ABOUT ME"
        heading="Building Out of Curiosity"
        variant="large"
      />

      <div className="mt-16 max-w-xl text-muted leading-relaxed">
        <p>
          PointXTech is a focused team of senior engineers who build custom software platforms and internal tools for ambitious founders and established product teams. We ship production-ready MVPs in 8–12 weeks, then scale them with the architecture and monitoring to support real growth.
        </p>
        <p className="mt-4">
          Founded by{' '}
          <a
            href="https://maximilianvincentius.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink transition-colors hover:text-accent"
          >
            Maximilian Vincentius
          </a>
          , software engineer and product builder.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
        <Button variant="primary" size="md" onClick={() => { window.location = '#contact' }}>
          Start a Project
        </Button>
        <Button variant="secondary" size="md" onClick={() => { window.location = '#projects' }}>
          View Our Work
        </Button>
      </div>
    </div>
  </section>
)