import { motion } from 'framer-motion'
import React from 'react'
import { Navigation } from '@/components/navigation/Navbar'
import { Hero } from '@/components/sections/Hero'
import { TrustSection } from '@/components/sections/TrustSection'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { MetricsSection } from '@/components/sections/MetricsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FooterSection } from '@/components/sections/FooterSection'

const HomePage = () => {
  return (
    <>
      <Navigation />
      <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Hero />
        <TrustSection />
        <ValuesSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <MetricsSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <FinalCTASection />
        <ContactSection />
        <FooterSection />
      </motion.main>
    </>
  )
}

export default HomePage