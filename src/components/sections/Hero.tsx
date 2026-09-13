import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

const EarthGlobe = lazy(() => import('@/components/ui/EarthGlobe').then(m => ({ default: m.EarthGlobe })))

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
  const [shouldMountGlobe, setShouldMountGlobe] = useState(false)

  useEffect(() => {
    const id = requestIdleCallback(() => setShouldMountGlobe(true), { timeout: 500 })
    return () => cancelIdleCallback(id)
  }, [])

  return (
    <motion.section
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[85vh] md:min-h-screen flex items-end md:items-center lg:min-h-[95vh] overflow-hidden bg-bg"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-12 md:pt-40 md:pb-24">
        <div className="grid items-end gap-12 md:grid-cols-2">
          {/* Left side: headline and copy */}
          <div className="w-full max-w-2xl">
            <motion.p
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="mb-6 text-muted uppercase tracking-widest text-sm"
            >
              SOFTWARE ENGINEERING STUDIO
            </motion.p>

            <h1 className="mb-4 font-bold tracking-tight text-ink leading-[110%] text-[48px] md:text-[72px]">
              WE BUILD SOFTWARE THAT MOVES BUSINESS FORWARD.
            </h1>

            <p className="mt-6 max-w-xl text-[16px] text-muted">
              We design and engineer scalable digital products, web applications, and internal platforms that help ambitious businesses operate better.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" onClick={() => { window.location.href = '#contact' }}>
                Start a Project ↗
              </Button>
              <Button variant="secondary" size="lg" onClick={() => { window.location.href = '#projects' }}>
                {secondaryLabel}
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] md:aspect-[5/4] w-full overflow-hidden rounded-2xl border border-line bg-surface/50"
          >
            {shouldMountGlobe ? (
              <Suspense fallback={
                <div className="h-full w-full flex items-center justify-center text-muted text-sm">
                  Loading...
                </div>
              }>
                <EarthGlobe />
              </Suspense>
            ) : (
              <div className="h-full w-full flex items-center justify-center text-muted text-sm">
                Initializing...
              </div>
            )}

            <div aria-hidden="true" className="absolute bottom-6 right-6 w-12 h-12 rounded bg-accent/10 backdrop-blur-sm flex items-center justify-center">
              <Zap className="h-5 w-5 text-accent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}