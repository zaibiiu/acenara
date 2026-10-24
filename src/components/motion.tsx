"use client";
import { motion, useReducedMotion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduce ? {} : { opacity: [0.4, 1], y: [28, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function Count({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(value);
  useEffect(() => {
    if (!visible || reduce) return;
    let frame = 0;
    const start = performance.now();
    function tick(now: number) {
      const p = Math.min((now - start) / 950, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, reduce, value]);
  return (
    <span ref={ref} aria-label={String(value)}>
      {count}
    </span>
  );
}
