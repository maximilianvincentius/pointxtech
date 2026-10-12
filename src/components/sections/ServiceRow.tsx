import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface ServiceRowProps {
  number: string;
  title: string;
  description: string;
  href?: string;
}

export const ServiceRow = ({
  number,
  title,
  description,
  href,
}: ServiceRowProps) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -20, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: "easeOut",
      }}
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-line
        bg-surface/50
        px-4
        py-6
        transition-all
        duration-300
        ease-out
        hover:scale-[1.02]
        hover:bg-surface/80
      "
    >
      <div className="flex items-start gap-4">
        {/* Number */}
        <motion.span
          className="
            self-center
            text-3xl
            font-bold
            text-accent
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
          "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {number}
        </motion.span>

        {/* Content */}
        <div className="flex-1 pt-1">
          <motion.h3
            className="
              mb-1
              text-2xl
              font-bold
              tracking-tight
              transition-colors
              duration-300
              md:text-3xl
              group-hover:text-accent
            "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: "easeOut",
            }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="
              text-sm
              leading-relaxed
              text-muted
            "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.16,
              ease: "easeOut",
            }}
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Accent line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-0.5
          w-full
          origin-left
          scale-x-0
          bg-accent
          transition-transform
          duration-500
          ease-out
          group-hover:scale-x-100
        "
      />
    </motion.div>
  );

  return content;
};
