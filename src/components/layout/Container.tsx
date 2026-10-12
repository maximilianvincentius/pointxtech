import { motion } from 'framer-motion'
import React from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
}

/**
 * Simple centered container with max width and responsive padding
 */
export const Container = ({ children, className = '' }: Props) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className={`mx-auto max-w-7xl px-6 py-12 ${className}`}
  >
    {children}
  </motion.section>
)