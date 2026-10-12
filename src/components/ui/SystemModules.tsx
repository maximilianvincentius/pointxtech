import { motion, useReducedMotion } from 'framer-motion'
import { Cloud, Cpu, CreditCard, Database, Webhook } from 'lucide-react'
import { useEffect, useState, type ComponentType } from 'react'

type ModuleDef = {
  id: string
  label: string
  icon: ComponentType<{ className?: string }>
  primary?: boolean
  place: string
  hold: number
}

/** Cycle order: API -> CORE -> CLOUD -> DB -> PAYMENT */
const MODULES: ModuleDef[] = [
  { id: 'api', label: 'API', icon: Webhook, place: 'order-1 sm:col-start-1 sm:row-start-1', hold: 1900 },
  { id: 'core', label: 'CORE', icon: Cpu, primary: true, place: 'order-3 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-2', hold: 2400 },
  { id: 'cloud', label: 'CLOUD', icon: Cloud, place: 'order-2 sm:col-start-3 sm:row-start-1', hold: 1700 },
  { id: 'db', label: 'DB', icon: Database, place: 'order-4 sm:col-start-1 sm:row-start-3', hold: 2100 },
  { id: 'payment', label: 'PAYMENT', icon: CreditCard, place: 'order-5 sm:col-start-3 sm:row-start-3', hold: 1800 },
]

const Module = ({ module, active, animated }: { module: ModuleDef; active: boolean; animated: boolean }) => {
  const { icon: Icon, label, primary, place } = module

  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center rounded-lg border bg-surface/40 ${primary ? 'px-4 py-4' : 'px-3 py-3'} ${place} ${active ? 'border-accent/70' : 'border-line'} transition-colors duration-500`}
      animate={{ scale: active ? 1.03 : 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-lg bg-accent"
        initial={false}
        animate={{ opacity: active ? 0.1 : 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />

      {animated && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-lg border border-accent"
          initial={false}
          animate={active ? { opacity: [0.45, 0], scale: [1, 1.16] } : { opacity: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
      )}

      {primary && animated && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute h-9 w-9 rounded-full border border-accent"
          initial={false}
          animate={{ opacity: active ? 0.5 : 0.12, rotate: active ? 120 : 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      )}

      <Icon className={`relative ${primary ? 'h-5 w-5' : 'h-4 w-4'} ${active ? 'text-accent' : 'text-muted'} transition-colors duration-500`} />
      <span className={`relative mt-1.5 text-[9px] font-medium uppercase tracking-[0.14em] ${active ? 'text-ink' : 'text-muted'} transition-colors duration-500`}>
        {label}
      </span>
      <motion.span
        aria-hidden="true"
        className="relative mt-1.5 h-1 w-1 rounded-full bg-accent"
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

export const SystemModules = () => {
  const reduced = useReducedMotion()
  const animated = !reduced
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!animated) return
    const id = setTimeout(() => setIndex((i) => (i + 1) % MODULES.length), MODULES[index].hold)
    return () => clearTimeout(id)
  }, [animated, index])

  return (
    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center p-8 sm:p-10">
      <div className="grid w-full max-w-[240px] grid-cols-2 gap-3 sm:max-w-[320px] sm:grid-cols-3 sm:gap-4">
        {MODULES.map((m, i) => (
          <Module key={m.id} module={m} active={animated && i === index} animated={animated} />
        ))}
      </div>
    </div>
  )
}
