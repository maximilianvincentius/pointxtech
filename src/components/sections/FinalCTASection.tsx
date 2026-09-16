import { motion } from 'framer-motion'
import React from 'react'
import { Button } from '@/components/ui/Button'

export const FinalCTASection = () => (
  <section id="final-cta" className="bg-surface/80 py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="mb-4 text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-ink">
          Projects still evolving.
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-muted">
          These are independent projects I keep building and exploring. Each one teaches me something new.
        </p>
        <Button variant="primary" size="lg" onClick={() => { window.location.hash = 'projects' }}>
          Explore Projects
        </Button>
      </motion.div>
    </div>
  </section>
)