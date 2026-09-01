import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'
import type { Testimonial } from '@/data/testimonials'

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: 'easeOut',
    },
  }),
}

export const TestimonialsSection = () => {
  const visible = testimonials.slice(0, 3)

  return (
    <section id="testimonials" className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="WHAT OUR CLIENTS SAY"
          heading="Outcomes Speak Louder"
          variant="large"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {visible.map((testimonial: Testimonial, i: number) => (
            <motion.blockquote
              key={testimonial.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative rounded-2xl border border-line bg-surface/30 p-8 transition-colors duration-300 hover:bg-surface/50"
            >
              <p className="mb-6 text-lg italic leading-relaxed text-ink">
                “{testimonial.quote}”
              </p>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <span className="block font-bold text-ink">
                    {testimonial.author}
                  </span>

                  <span className="text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}