import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";

interface ExpandableTextProps {
  text: string;
  limit?: number;
}

const DEFAULT_LIMIT = 200;

export const ExpandableText = ({ text, limit = DEFAULT_LIMIT }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  const tooLong = text.length > limit;
  const collapsedText = tooLong ? `${text.slice(0, limit).trim()}...` : text;

  // Measure synchronously after DOM update so motion.div always has correct height
  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [expanded, text]);

  // Re-measure on resize (responsive text reflow)
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setHeight(el.scrollHeight);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (!tooLong) {
    return (
      <p className="text-sm leading-relaxed text-muted">
        {text}
      </p>
    );
  }

  return (
    <motion.div
      animate={{ height: height ?? "auto" }}
      initial={false}
      transition={{
        duration: 0.45,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative overflow-hidden"
    >
      <div
        ref={contentRef}
        className="text-sm leading-relaxed text-muted"
      >
        {expanded ? text : collapsedText}

        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="ml-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
        >
          {expanded ? "less" : "more"}
        </button>
      </div>
    </motion.div>
  );
};