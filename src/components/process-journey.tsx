"use client";
import { useId, useState, useRef, type KeyboardEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Compass,
  ListChecks,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  Check,
  ArrowRight,
} from "lucide-react";
import { deliveryDetails } from "@/content/studio";
const icons = [Compass, ListChecks, PenTool, Code2, ShieldCheck, Rocket];
export function ProcessJourney() {
  const [active, setActive] = useState(0);
  const id = useId().replace(/:/g, "");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const current = deliveryDetails[active];
  const Icon = icons[active];
  function key(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % 6;
    else if (e.key === "ArrowLeft") next = (i + 5) % 6;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = 5;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  return (
    <div className="process-journey">
      <div
        className="journey-tabs"
        role="tablist"
        aria-label="Our delivery process"
      >
        {deliveryDetails.map((step, i) => {
          const StepIcon = icons[i];
          return (
            <button
              ref={(el) => {
                tabs.current[i] = el;
              }}
              key={step.label}
              id={`${id}-tab-${i}`}
              role="tab"
              aria-selected={active === i}
              aria-controls={`${id}-panel`}
              tabIndex={active === i ? 0 : -1}
              onKeyDown={(e) => key(e, i)}
              onClick={() => setActive(i)}
              className={active === i ? "selected" : ""}
            >
              <span className="journey-tab-number">0{i + 1}</span>
              <StepIcon size={21} />
              <span>{step.label}</span>
              <span className="journey-tab-line" />
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        tabIndex={0}
        className="journey-panel"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="journey-panel-inner"
          >
            <div className="journey-main">
              <span className="journey-icon">
                <Icon size={30} />
              </span>
              <p className="eyebrow">
                PHASE 0{active + 1} / {current.label}
              </p>
              <h3>{current.heading}</h3>
              <p>{current.text}</p>
            </div>
            <div className="journey-output">
              <span className="journey-output-label">
                WHAT THIS MAKES CLEAR
              </span>
              {current.outputs.map((o) => (
                <p key={o}>
                  <Check size={16} />
                  {o}
                </p>
              ))}
              <blockquote>{current.note}</blockquote>
              {active < 5 && (
                <button onClick={() => setActive(active + 1)}>
                  Next: {deliveryDetails[active + 1].label}
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
