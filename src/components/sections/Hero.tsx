import { motion } from 'framer-motion'
import { Cpu, Zap } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/Button'

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
              We design and engineer scalable digital products, internal platforms, and experiences that help ambitious businesses operate better.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button variant="primary" size="lg">
                Start a Project ↗
              </Button>
              <Button variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            </motion.div>
          </div>

          {/* Right side: product visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/3] md:aspect-[5/4] w-full overflow-hidden rounded-2xl border border-line bg-surface/50"
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Product UI"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-surface/50 to-surface/70" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0z' stroke='%23ffffff' stroke-opacity='0.05'/%3E%3C/svg%3E\")",
                    opacity: 0.4,
                  }}
                />
              </>
            )}

            {/* Subtle UI elements */}
            <div className="absolute top-6 left-6 w-14 h-14 rounded bg-accent/10 backdrop-blur-sm flex items-center justify-center">
              <Cpu className="h-6 w-6 text-accent" />
            </div>
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded bg-accent/10 backdrop-blur-sm flex items-center justify-center">
              <Zap className="h-5 w-5 text-accent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}