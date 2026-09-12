import { motion } from 'framer-motion'
import { AlertCircle, Check, Send } from 'lucide-react'
import React, { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { submitContact, type ContactPayload } from '@/services/contact'

type Status = 'idle' | 'submitting' | 'success' | 'error'
const inputBase = 'w-full rounded-lg border border-line bg-surface/50 px-4 py-3 text-ink placeholder:text-muted/60 transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
const ErrorMsg = ({ children }: { children: React.ReactNode }) => <p className="mt-1.5 text-sm text-red-400">{children}</p>
const Field = ({ label, required, optional, id, children }: { label: string; required?: boolean; optional?: boolean; id: string; children: React.ReactNode }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
      {label}{' '}
      {required && <span className="text-muted">*</span>}
      {optional && <span className="text-muted">(optional)</span>}
    </label>
    {children}
  </div>
)

export const ContactSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const valid = name.trim() !== '' && emailValid && message.trim() !== ''
  const touch = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!valid || status === 'submitting') return
    setStatus('submitting')
    setErrorMsg('')
    const payload: ContactPayload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      message: message.trim(),
    }
    const result = await submitContact(payload)
    if (result.success) {
      setStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setTouched({})
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="LET'S TALK"
          heading="Start Your Project"
          paragraph="Have a project in mind? Tell us what you're building — we'll get back to you within one business day."
          variant="large"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 max-w-2xl"
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface/50 p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-ink">Message sent</h3>
              <p className="text-muted leading-relaxed">
                Thanks for reaching out. We'll review your project details and get back to you within one business day.
              </p>
              <Button variant="secondary" size="md" onClick={() => setStatus('idle')}>
                Send another message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <Field label="Name" required id="contact-name">
                <input id="contact-name" type="text" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} onBlur={() => touch('name')} placeholder="Your name" className={inputBase} />
                {touched.name && !name.trim() && <ErrorMsg>Name is required.</ErrorMsg>}
              </Field>
              <Field label="Email" required id="contact-email">
                <input id="contact-email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => touch('email')} placeholder="you@company.com" className={inputBase} />
                {touched.email && !email.trim() && <ErrorMsg>Email is required.</ErrorMsg>}
                {touched.email && email.trim() && !emailValid && <ErrorMsg>Enter a valid email address.</ErrorMsg>}
              </Field>
              <Field label="Phone" optional id="contact-phone">
                <input id="contact-phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 000-0000" className={inputBase} />
              </Field>
              <Field label="Message" required id="contact-message">
                <textarea id="contact-message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} onBlur={() => touch('message')} placeholder="Tell us about your project — goals, timeline, budget range..." className={inputBase + ' resize-y'} />
                {touched.message && !message.trim() && <ErrorMsg>Message is required.</ErrorMsg>}
              </Field>
              {status === 'error' && (
                <div role="alert" className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-900/20 px-4 py-3">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
                  <p className="text-sm text-red-300">{errorMsg}</p>
                </div>
              )}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === 'submitting'}
                icon={status === 'submitting' ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-bg/30 border-t-bg" /> : <Send className="h-4 w-4" />}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
