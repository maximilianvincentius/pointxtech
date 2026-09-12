import React from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FaqItem } from '@/components/ui/FaqItem'
import { faqs } from '@/data/faq'

export const FAQSection = () => (
  <section id="faq" className="bg-bg py-24 md:py-32">
    <div className="mx-auto max-w-3xl px-6">
      <SectionHeading
        eyebrow="COMMON QUESTIONS"
        heading="Frequently Asked Questions"
        variant="large"
      />

      <div className="mt-16 space-y-2">
        {faqs.map((faq) => (
          <FaqItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  </section>
)