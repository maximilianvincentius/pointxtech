import { motion } from 'framer-motion'
import React from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Explore',
    description: 'Dive into something interesting. Figure out what the problem is and what would be cool to build.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Turn the idea into a focused scope. Pick the right tools and figure out a practical approach.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our senior engineers ship working software in short, reviewable increments with you along the way.',
  },
  {
    number: '04',
    title: 'Ship',
    description: 'We orchestrate a smooth, monitored release and hand over with documentation and confidence.',
  },
  {
    number: '05',
    title: 'Evolve',
    description: 'Post-launch, we optimize, iterate, and grow the product as your business evolves.',
  },
]

export const ProcessSection = () => (
  <section id="process" className="bg-bg py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="HOW I BUILD"
        heading="My Approach"
        variant="large"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-5">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative"
          >
            <span className="mb-6 block h-1 w-full bg-accent/20 rounded-full">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="block h-full origin-left bg-accent rounded-full"
              />
            </span>
            <span className="mb-3 block text-accent font-bold text-sm">
              {step.number}
            </span>
            <h3 className="mb-2 font-bold text-lg tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)