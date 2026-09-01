import { motion } from 'framer-motion'
import React from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We map your business, users, and constraints to define what success actually looks like.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'We turn that clarity into a focused scope, technical architecture, and pragmatic roadmap.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our senior engineers ship working software in short, reviewable increments with you along the way.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We orchestrate a smooth, monitored release and hand over with documentation and confidence.',
  },
  {
    number: '05',
    title: 'Scale',
    description: 'Post-launch, we optimize, iterate, and grow the product as your business evolves.',
  },
]

export const ProcessSection = () => (
  <section id="process" className="bg-bg py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="HOW WE WORK"
        heading="The Process"
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
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="block h-full bg-accent rounded-full"
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