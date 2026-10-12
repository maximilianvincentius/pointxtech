import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { metrics } from '@/data/metrics'

const parseMetricNumber = (value: string) => {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { hasNumber: false, prefix: '', target: 0, suffix: value, decimals: 0 }
  const decimals = (match[2].split('.')[1] ?? '').length
  return {
    hasNumber: true,
    prefix: match[1],
    target: parseFloat(match[2]),
    suffix: match[3],
    decimals,
  }
}

const LINE_HEIGHT = 1.2
const DIGIT_WIDTH = 0.65

interface RollingDigitProps {
  digit: number
  inView: boolean
  reduceMotion: boolean
  delay: number
  duration: number
}

const RollingDigit = ({ digit, inView, reduceMotion, delay, duration }: RollingDigitProps) => {
  const progress = useMotionValue(reduceMotion ? digit : 0)
  const y = useTransform(progress, (v) => `-${v * LINE_HEIGHT}em`)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const controls = animate(progress, digit, { duration, ease: 'easeOut', delay })
    return () => controls.stop()
  }, [inView, reduceMotion, digit, delay, duration, progress])

  const strip = Array.from({ length: 40 }, (_, i) => i % 10)

  return (
    <span
      className="relative inline-block overflow-hidden align-middle"
      style={{ height: `${LINE_HEIGHT}em`, width: `${DIGIT_WIDTH}em` }}
    >
      <motion.span style={{ y }} className="absolute top-0 left-0">
        {strip.map((n, i) => (
          <div key={i} style={{ height: `${LINE_HEIGHT}em`, lineHeight: `${LINE_HEIGHT}em` }}>
            {n}
          </div>
        ))}
      </motion.span>
    </span>
  )
}

interface OdometerNumberProps {
  value: string
  delay?: number
  duration?: number
}

const OdometerNumber = ({ value, delay = 0, duration = 1.8 }: OdometerNumberProps) => {
  const parsed = parseMetricNumber(value)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const reduceMotion = useReducedMotion()

  if (!parsed.hasNumber) return <span>{value}</span>

  const digits = parsed.target.toString().split('').map(Number)

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {parsed.prefix}
        {digits.map((d, i) => (
          <RollingDigit
            key={i}
            digit={d}
            inView={inView}
            reduceMotion={reduceMotion}
            delay={delay + i * 0.05}
            duration={duration}
          />
        ))}
        {parsed.suffix}
      </span>
    </span>
  )
}

export const MetricsSection = () => (
  <section id="metrics" className="bg-bg py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map((metric, i) => (
          <motion.li
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-bg p-10"
          >
            <p className="mb-3 font-bold tracking-tight text-accent text-5xl md:text-6xl">
              <OdometerNumber value={metric.number} delay={i * 0.1} />
            </p>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-ink">
              {metric.label}
            </p>
            {metric.description && (
              <p className="text-sm text-muted">{metric.description}</p>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
)