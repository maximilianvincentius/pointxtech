import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface Props {
  className?: string
}

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export const Navigation = ({ className = '' }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll lock + Escape key + focus trap when mobile menu open
  useEffect(() => {
    if (!isOpen) return
    
    document.body.classList.add('menu-open')
    
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
      
      // Focus trap
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    
    window.addEventListener('keydown', onKey)
    
    // Focus first item on open
    const timer = setTimeout(() => {
      const firstLink = menuRef.current?.querySelector<HTMLElement>('a')
      firstLink?.focus()
    }, 100)
    
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
      clearTimeout(timer)
    }
  }, [isOpen])

  const bg = scrolled
    ? 'bg-bg/80 backdrop-blur-md shadow-[0_1px_0_var(--color-line-actual)]'
    : 'bg-bg/50 backdrop-blur-sm'

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed z-50 top-0 left-0 right-0 flex h-14 items-center justify-between px-4 sm:px-6 pt-[env(safe-area-inset-top)] border-b border-line transition-colors duration-500 ${bg} ${className}`}
      >
        <div className="flex items-center gap-3">
          <a href="/" className="text-lg font-bold text-ink tracking-tight transition-colors hover:text-accent">
            PointX
          </a>
          <nav aria-label="Primary" className="hidden lg:flex items-center space-x-6 text-muted font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="primary" size="md" className="hidden lg:inline-flex" aria-label="Let's Talk — start a conversation" onClick={() => { window.location = '#contact' }}>
            Let's Talk
          </Button>
          <button
            ref={buttonRef}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex min-h-11 min-w-11 items-center justify-center p-2 rounded-lg hover:bg-surface/40 transition-colors"
          >
            {isOpen ? (
              <X className="h-5 w-5 stroke-ink" />
            ) : (
              <Menu className="h-5 w-5 stroke-ink" />
            )}
          </button>
        </div>
      </motion.header>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg/95 backdrop-blur-lg lg:hidden pt-14 pb-[env(safe-area-inset-bottom)]"
          >
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 min-h-11 min-w-11 flex items-center justify-center p-2 rounded-lg hover:bg-surface/40 transition-colors"
            >
              <X className="h-5 w-5 stroke-ink" />
            </button>
            
            <motion.ul
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="flex-1 items-center justify-center space-y-6 text-center text-2xl font-bold px-6 overflow-y-auto"
            >
              {[...links, { label: "Let's Talk", href: '#contact' }].map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 min-h-11 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}