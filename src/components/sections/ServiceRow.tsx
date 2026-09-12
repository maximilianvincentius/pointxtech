import { ArrowRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

export interface ServiceRowProps {
  number: string
  title: string
  description: string
  href?: string
}

export const ServiceRow = ({
  number,
  title,
  description,
  href,
}: ServiceRowProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20, scale: 0.98 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="relative flex flex-col py-6 px-4 bg-surface/50 rounded-2xl border border-line transition-colors duration-500 hover:scale-[1.02] hover:bg-surface/80"
  >
    <div className="flex items-start gap-4">
      {/* Number */}
      <motion.span
        className="self-center left-0 text-accent font-bold text-3xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {number}
      </motion.span>

      {/* Content */}
      <div className="flex-1 pt-1">
        <motion.h3
          className="font-bold text-2xl md:text-3xl tracking-tight mb-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-muted text-sm leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Arrow */}
      <div className="ml-6 flex-shrink-0">
        <motion.span
          className="inline-flex items-center gap-1 text-muted hover:text-accent transition-colors"
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
        </motion.span>
      </div>
    </div>

    {/* Accent line that appears on hover */}
    <motion.div
      whileHover={{ width: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 17 }}
      className="absolute bottom-0 left-0 h-0.5 bg-accent transition-width duration-500"
    />
  </motion.div>
)