import { motion, type HTMLMotionProps } from 'framer-motion'
import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface Props extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref,
  ) => {
    const base =
      'inline-flex min-h-11 items-center justify-center gap-2 font-medium transition-colors duration-300 ' +
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ' +
      (fullWidth ? 'w-full ' : '') +
      (disabled ? 'opacity-40 pointer-events-none ' : '')

    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-accent text-bg px-6 py-3 hover:bg-accent/90 rounded-lg',
      secondary: 'border border-line bg-surface/50 text-ink px-6 py-3 hover:bg-surface hover:border-line/60 rounded-lg',
      ghost: 'text-muted px-4 py-2 hover:text-ink rounded-lg',
    }

    const sizes: Record<'sm' | 'md' | 'lg', string> = {
      sm: 'text-sm px-4 py-2',
      md: 'text-base px-6 py-3',
      lg: 'text-lg px-8 py-4',
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={base + variants[variant] + ' ' + sizes[size] + ' ' + className}
        disabled={disabled}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <motion.span
            className="flex-shrink-0"
            aria-hidden="true"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            {icon}
          </motion.span>
        )}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'
