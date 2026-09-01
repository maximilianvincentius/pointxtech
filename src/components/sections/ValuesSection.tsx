import { motion } from "framer-motion";
import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    number: "01",
    title: "Clarity Over Complexity",
    description:
      "We translate ambiguous business problems into clear technical direction. No jargon, no confusion.",
  },
  {
    number: "02",
    title: "Speed Without Sacrifice",
    description:
      "We move fast because we make good decisions early. Clean architecture, pragmatic choices, working software.",
  },
  {
    number: "03",
    title: "Build for Scale",
    description:
      "Every system we ship is designed to grow with your business. We solve today's problem without creating tomorrow's.",
  },
];

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
      ease: "easeOut",
    },
  }),
};

export const ValuesSection = () => (
  <section id="values" className="bg-bg py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="WHY POINTX"
        heading="Engineering Built on Principles"
        variant="large"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {values.map((value, i) => (
          <motion.div
            key={value.number}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="group relative rounded-2xl border border-line bg-surface/30 p-8 transition-colors duration-300 hover:border-white/20 hover:bg-surface/50"
          >
            <span className="mb-4 block text-sm font-bold tracking-wider text-accent">
              {value.number}
            </span>

            <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">
              {value.title}
            </h3>

            <p className="text-sm leading-relaxed text-muted">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
