import { motion } from 'framer-motion'
import React from 'react'

export type SectionHeadingVariant = 'hero' | 'large' | 'small'

interface Props {
  /** Optional short label displayed above the heading (e.g. "SOFTWARE ENGINEERING STUDIO") */
  eyebrow?: string
  /** Main heading text */
  heading: string
  /** Optional supporting paragraph */
  paragraph?: string
  /** Variant controls typography scale */
  variant?: SectionHeadingVariant
  /** Additional className */
  className?: string
}

/**
 * Premium section heading with optional eyebrow label.
 */
export const SectionHeading = ({
  eyebrow,
  heading,
  paragraph,
  variant = 'large',
  className = '',
}: Props) => {
  const sizes: Record<SectionHeadingVariant, { heading: string; eyebrow: string }> = {
    hero: {
      heading: 'text-[110px] leading-[120%] mb-4 md:text-[96px] md:leading-[110%]',
      eyebrow: 'mb-6 text-muted uppercase tracking-widest',
    },
    large: {
      heading: 'text-[80px] leading-[100%] mb-6 md:text-[64px] md:leading-[110%]',
      eyebrow: 'mb-6 text-muted uppercase tracking-widest',
    },
    small: {
      heading: 'text-[40px] leading-[1.4] mb-4 md:text-[32px]',
      eyebrow: 'mb-4 text-muted uppercase tracking-wider',
    },
  }

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={sizes[variant].heading + ' font-bold tracking-tight text-ink ' + className}
      >
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={sizes[variant].eyebrow + ' block'}
          >
            {eyebrow}
          </motion.span>
        )}
        {heading}
      </motion.h2>
      {paragraph && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base text-muted"
        >
          {paragraph}
        </motion.p>
      )}
    </div>
  )
}