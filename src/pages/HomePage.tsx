import React, { lazy, Suspense } from "react"
import { Navigation } from "@/components/navigation/Navbar"
import { Hero } from "@/components/sections/Hero"

const TrustSection = lazy(() => import("@/components/sections/TrustSection").then(m => ({ default: m.TrustSection })))
const ValuesSection = lazy(() => import("@/components/sections/ValuesSection").then(m => ({ default: m.ValuesSection })))
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection").then(m => ({ default: m.ServicesSection })))
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
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <TrustSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ValuesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
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
      </main>
    </>
  )
}

export default HomePage
