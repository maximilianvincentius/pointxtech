import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

interface Props {
  id: string
  question: string
  answer: string
}

export const FaqItem = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-line last:border-0"
    >
      <motion.button
        whileTap={{ scale: 0.99 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 px-4 flex items-center justify-between text-ink hover:text-accent transition-colors"
      >
        <span className="font-medium text-lg pr-6">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0 text-accent"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4 text-muted leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}