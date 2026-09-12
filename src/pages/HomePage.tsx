import { motion } from "framer-motion"
import React, { lazy, Suspense } from "react"
import { Navigation } from "@/components/navigation/Navbar"
import { Hero } from "@/components/sections/Hero"
import { TrustSection } from "@/components/sections/TrustSection"
import { ValuesSection } from "@/components/sections/ValuesSection"
import { ServicesSection } from "@/components/sections/ServicesSection"

const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection").then(m => ({ default: m.ProjectsSection })))
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection").then(m => ({ default: m.ProcessSection })))
const MetricsSection = lazy(() => import("@/components/sections/MetricsSection").then(m => ({ default: m.MetricsSection })))
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })))
const AboutSection = lazy(() => import("@/components/sections/AboutSection").then(m => ({ default: m.AboutSection })))
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })))
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })))
const ContactSection = lazy(() => import("@/components/sections/ContactSection").then(m => ({ default: m.ContactSection })))
const FooterSection = lazy(() => import("@/components/sections/FooterSection").then(m => ({ default: m.FooterSection })))

const SectionFallback = () => (
  <div className="py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="h-8 w-48 bg-surface/50 rounded animate-pulse mb-8" />
      <div className="space-y-4">
        <div className="h-4 bg-surface/50 rounded animate-pulse" />
        <div className="h-4 bg-surface/50 rounded animate-pulse w-5/6" />
        <div className="h-4 bg-surface/50 rounded animate-pulse w-4/6" />
      </div>
    </div>
  </div>
)

const HomePage = () => {
  return (
    <>
      <Navigation />
      <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Hero />
        <TrustSection />
        <ValuesSection />
        <ServicesSection />
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProcessSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <MetricsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FinalCTASection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FooterSection />
        </Suspense>
      </motion.main>
    </>
  )
}

export default HomePage
