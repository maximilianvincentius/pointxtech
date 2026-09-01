import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

interface Props {
  className?: string
}

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#faq' },
]

export const Navigation = ({ className = '' }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bg = scrolled
    ? 'bg-bg/80 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.10)]'
    : 'bg-bg/50 backdrop-blur-sm'

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed z-50 top-0 left-0 right-0 flex h-14 items-center justify-between px-6 border-b border-line transition-all duration-500 ${bg} ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold text-ink tracking-tight">
          PointX
        </span>
        <div className="hidden md:flex items-center space-x-6 text-muted font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <Button variant="primary" size="md" className="hidden md:block">
        Let's Talk
      </Button>
      <button
        aria-label="Open menu"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-surface/40 transition-colors"
      >
        {isOpen ? (
          <X className="h-5 w-5 stroke-ink" />
        ) : (
          <Menu className="h-5 w-5 stroke-ink" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-bg/90 backdrop-blur-lg"
        >
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, staggerChildren: 0.08 }}
            className="space-y-6 text-center text-2xl font-bold"
          >
            {[...links, { label: "Let's Talk", href: '#contact' }].map((link) => (
              <motion.li
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </motion.nav>
  )
}