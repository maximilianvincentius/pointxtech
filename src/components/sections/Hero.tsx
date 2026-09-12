import { motion } from 'framer-motion'
import { Cpu, Zap } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/Button'
import { EarthGlobe } from '@/components/ui/EarthGlobe'

interface Props {
  /** Optional product image src */
  imageSrc?: string
  /** Optional CTA label for secondary button */
  secondaryLabel?: string
}

/**
 * Hero section following DESIGN.md structure:
 * - Small eyebrow label
 * - Large headline
 * - Short paragraph
 * - Two CTA buttons
 * - Product visual (right / bottom)
 */
export const Hero = ({
  imageSrc,
  secondaryLabel = 'View Our Work',
}: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-[85vh] md:min-h-screen flex items-end md:items-center lg:min-h-[95vh] overflow-hidden bg-bg"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-12 md:pt-40 md:pb-24">
        <div className="grid items-end gap-12 md:grid-cols-2">
          {/* Left side: headline and copy */}
          <div className="w-full max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 text-muted uppercase tracking-widest text-sm"
            >
              SOFTWARE ENGINEERING STUDIO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 font-bold tracking-tight text-ink leading-[110%] text-[48px] md:text-[72px]"
            >
              WE BUILD SOFTWARE THAT MOVES BUSINESS FORWARD.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-xl text-[16px] text-muted"
            >
              We design and engineer scalable digital products, web applications, and internal platforms that help ambitious businesses operate better.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button variant="primary" size="lg" onClick={() => { window.location.href = '#contact' }}>
                Start a Project ↗
              </Button>
              <Button variant="secondary" size="lg" onClick={() => { window.location.href = '#projects' }}>
                {secondaryLabel}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/3] md:aspect-[5/4] w-full overflow-hidden rounded-2xl border border-line bg-surface/50"
          >
            <EarthGlobe />

            <div aria-hidden="true" className="absolute bottom-6 right-6 w-12 h-12 rounded bg-accent/10 backdrop-blur-sm flex items-center justify-center">
              <Zap className="h-5 w-5 text-accent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}