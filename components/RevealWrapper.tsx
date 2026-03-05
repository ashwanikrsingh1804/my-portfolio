"use client";
import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Reveal({
  children, delay = 0, direction = "up",
}: { children: ReactNode; delay?: number; direction?: "up" | "left" | "right" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  const initial = {
    up: { opacity: 0, y: 30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
  }[direction];

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, x: 0 });
  }, [inView, controls]);

  return (
    <motion.div ref={ref} initial={initial} animate={controls}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}>
      {children}
    </motion.div>
  );
}
