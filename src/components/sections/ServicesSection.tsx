import { motion } from "framer-motion";
import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceRow } from "./ServiceRow";
import { services } from "@/data/services";

export const ServicesSection = () => (
  <section id="services" className="bg-bg py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="WHAT I BUILD"
        heading="Areas of Interest"
        paragraph="From web apps to simulations to games, these are the kinds of projects I enjoy building and exploring."
        variant="large"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-16 space-y-4"
      >
        {services.map((service, i) => (
          <ServiceRow
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
          />
        ))}
      </motion.div>
    </div>
  </section>
);
