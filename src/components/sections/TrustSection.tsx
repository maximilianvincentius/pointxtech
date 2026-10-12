import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const logos = ["Phyxhub", "Fractals of Entropy", "Metro Circuit"];

export const TrustSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const setRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const pausedRef = useRef(false);
  const widthRef = useRef(0);
  const x = useMotionValue(0);
  const [isReady, setIsReady] = useState(false);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  // ponytail: width auto-remount logic skipped; ResizeObserver covers responsive reflow.
  useEffect(() => {
    const set = setRef.current;
    if (!set) return;

    const updateWidth = () => {
      widthRef.current = set.getBoundingClientRect().width;
      setIsReady(widthRef.current > 0);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(set);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    const width = widthRef.current;
    if (prefersReducedMotion || pausedRef.current || !width || !inView) return;

    const next = x.get() - (delta / 1000) * 24;
    x.set(next <= -width ? next + width : next);
  });

  return (
    <section ref={sectionRef} className="border-t border-line bg-bg py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-sm uppercase tracking-widest text-muted"
        >
          Technologies I enjoy working with
        </motion.p>

        <div
          className="overflow-hidden"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onFocus={() => {
            pausedRef.current = true;
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              pausedRef.current = false;
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ x }}
            className={`flex w-max items-center ${isReady ? "" : "invisible"}`}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                ref={setRef}
                className="flex shrink-0 items-center"
              >
                {logos.map((name) => (
                  <span
                    key={name}
                    tabIndex={0}
                    className="mr-8 cursor-default whitespace-nowrap text-lg font-bold tracking-wider text-subtle opacity-60 transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100 md:mr-14"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
