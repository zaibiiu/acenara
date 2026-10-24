"use client";
import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Signal,
  Wifi,
  BatteryFull,
  CalendarDays,
  Sparkles,
  LayoutDashboard,
  Workflow,
  BarChart3,
  CircleCheck,
  Bell,
  Clock3,
} from "lucide-react";
import { Count } from "./motion";

export function BookingDemo() {
  const [day, setDay] = useState(14);
  const [slot, setSlot] = useState("10:30 AM");
  const [confirmed, setConfirmed] = useState(false);
  const [month, setMonth] = useState(0);
  const months = ["November", "December"];
  const dates = month === 0 ? 30 : 31;
  const id = useId();
  const reduce = useReducedMotion();
  return (
    <div className="booking-composition">
      <div className="phone-orbit" aria-hidden="true" />
      <div className="phone-device">
        <div className="phone-status">
          <span>9:41</span>
          <span className="phone-island" />
          <span>
            <Signal size={12} />
            <Wifi size={12} />
            <BatteryFull size={16} />
          </span>
        </div>
        <div className="phone-content">
          <div className="demo-app-brand">
            <img src="/brand/icon.svg" alt="" width="22" height="22" />
            <span>Acenara / appointments</span>
            <span className="demo-avatar">JD</span>
          </div>
          <div className="phone-welcome">
            <span className="phone-kicker">A LITTLE TIME FOR WHAT’S NEXT</span>
            <h3>
              Your next idea.
              <br />
              <span>Let’s make time.</span>
            </h3>
            <p className="phone-desc">
              <Clock3 size={10} />
              30-minute discovery · Interface concept
            </p>
          </div>
          <div className="demo-calendar-head">
            <strong>{months[month]} 2026</strong>
            <div>
              <button
                aria-label="Previous demo month"
                disabled={month === 0}
                onClick={() => {
                  setMonth(0);
                  setDay(Math.min(day, 30));
                  setConfirmed(false);
                }}
              >
                <ChevronLeft size={15} />
              </button>
              <button
                aria-label="Next demo month"
                disabled={month === 1}
                onClick={() => {
                  setMonth(1);
                  setConfirmed(false);
                }}
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
          <div
            className="demo-calendar"
            aria-label="Select a demonstration date"
          >
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span className="weekday" key={i}>
                {d}
              </span>
            ))}
            {Array.from({ length: month === 0 ? 6 : 1 }, (_, i) => (
              <span key={`blank-${i}`} />
            ))}
            {Array.from({ length: dates }, (_, i) => (
              <motion.button
                type="button"
                key={i}
                aria-label={`${months[month]} ${i + 1}, 2026`}
                aria-pressed={day === i + 1}
                className={day === i + 1 ? "selected" : ""}
                onClick={() => {
                  setDay(i + 1);
                  setConfirmed(false);
                }}
                whileTap={reduce ? {} : { scale: 0.88 }}
              >
                {day === i + 1 && (
                  <motion.span
                    className="calendar-selection"
                    layoutId={`${id}-selected-day`}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 480, damping: 34 }
                    }
                  />
                )}
                <span className="calendar-date-number">{i + 1}</span>
              </motion.button>
            ))}
          </div>
          <p className="slot-label">
            Choose your time<span>30 MIN</span>
          </p>
          <div className="demo-slots">
            {["09:00 AM", "10:30 AM", "02:00 PM"].map((s) => (
              <motion.button
                key={s}
                aria-pressed={slot === s}
                className={slot === s ? "selected" : ""}
                onClick={() => {
                  setSlot(s);
                  setConfirmed(false);
                }}
                whileTap={reduce ? {} : { scale: 0.96 }}
              >
                {slot === s && <Check size={9} />}
                <span>{s}</span>
              </motion.button>
            ))}
          </div>
          <button className="demo-book" onClick={() => setConfirmed(true)}>
            {confirmed ? (
              <>
                <CircleCheck size={15} />
                Demo selection saved
              </>
            ) : (
              <>
                Confirm time
                <ArrowRight size={15} />
              </>
            )}
          </button>
          <p className="phone-demo-note" aria-live="polite">
            {confirmed
              ? `${months[month]} ${day} · ${slot}. No appointment was booked.`
              : `Selected: ${months[month]} ${day} · ${slot}. Interactive demo only.`}
          </p>
        </div>
        <div className="phone-home" />
      </div>
      <div className="floating-demo-card">
        <span className="floating-icon">
          <CalendarDays size={21} />
        </span>
        <div>
          <strong>
            {confirmed
              ? "A little time, set aside."
              : "Your time. Clearly organized."}
          </strong>
          <span>
            {months[month]} {day} · {slot} · Demo selection
          </span>
        </div>
        <CircleCheck size={18} />
      </div>
      <div className="phone-mini-card">
        <span>
          <Check size={13} />
        </span>
        <div>
          <strong>Every detail, considered.</strong>
          <small>From first touch to final confirmation.</small>
        </div>
      </div>
    </div>
  );
}

const views = ["Overview", "Workflows", "Reports"];
const navIcons = [LayoutDashboard, Workflow, BarChart3];
export function DashboardDemo() {
  const [period, setPeriod] = useState("Week");
  const [view, setView] = useState("Overview");
  const [hovered, setHovered] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const values =
    period === "Week"
      ? view === "Overview"
        ? [35, 58, 47, 73, 65, 91, 80]
        : view === "Workflows"
          ? [42, 66, 39, 81, 72, 88, 62]
          : [50, 41, 63, 76, 84, 69, 93]
      : view === "Overview"
        ? [47, 69, 56, 85]
        : view === "Workflows"
          ? [61, 77, 54, 91]
          : [52, 68, 79, 94];
  const labels =
    period === "Week"
      ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      : ["Week 1", "Week 2", "Week 3", "Week 4"];
  return (
    <div className="dashboard-demo">
      <div className="dashboard-top">
        <div className="dashboard-brand">
          <img src="/brand/icon.svg" alt="" width="26" height="26" />
          <span>
            <strong>Clarity</strong> / workspace
          </span>
        </div>
        <div className="dashboard-top-right">
          <span className="demo-pill">
            <span />
            Interactive concept
          </span>
          <Bell size={15} />
          <span className="dashboard-avatar">A</span>
        </div>
      </div>
      <div className="dashboard-body">
        <aside>
          <span className="dashboard-sidebar-label">WORKSPACE</span>
          <nav aria-label="Demo workspace views">
            {views.map((v, i) => {
              const Icon = navIcons[i];
              return (
                <button
                  key={v}
                  aria-pressed={view === v}
                  className={view === v ? "dashboard-nav-active" : ""}
                  onClick={() => {
                    setView(v);
                    setHovered(null);
                  }}
                >
                  <Icon size={16} />
                  {v}
                </button>
              );
            })}
          </nav>
          <div className="dashboard-sidebar-bottom">
            <span>
              <CircleCheck size={17} />
            </span>
            <strong>Everything, connected.</strong>
            <small>A more useful view of your work.</small>
          </div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-title">
            <div>
              <span className="small">YOUR WORK, IN PERSPECTIVE</span>
              <h3>
                {view === "Overview"
                  ? "The bigger picture. At a glance."
                  : view === "Workflows"
                    ? "From one step to the next."
                    : "See the pattern behind the work."}
              </h3>
              <p>Illustrative workspace · All values are demo data</p>
            </div>
          </div>
          <div className="dashboard-stats">
            <div>
              <span>
                <Workflow size={14} />
                Activity total
              </span>
              <strong>
                <Count value={values.reduce((a, b) => a + b, 0)} />
                <span>demo units</span>
              </strong>
              <div className="mini-sparkline" aria-hidden="true">
                {values.map((v, i) => (
                  <i key={i} style={{ height: `${v / 4}px` }} />
                ))}
              </div>
            </div>
            <div>
              <span>
                <CircleCheck size={14} />
                Workspace status
              </span>
              <strong>
                Connected
                <span className="dashboard-status-dot" />
              </strong>
              <small>Conceptual product view</small>
            </div>
          </div>
          <div className="chart-head">
            <div>
              <strong>
                {view === "Workflows"
                  ? "Workflow activity"
                  : view === "Reports"
                    ? "Reporting overview"
                    : "Activity overview"}
              </strong>
              <span>
                {hovered !== null
                  ? `${labels[hovered]} · ${values[hovered]} demo units`
                  : "Hover or focus a bar to inspect"}
              </span>
            </div>
            <div className="segmented" aria-label="Chart period">
              {["Week", "Month"].map((p) => (
                <button
                  key={p}
                  aria-pressed={period === p}
                  className={period === p ? "selected" : ""}
                  onClick={() => {
                    setPeriod(p);
                    setHovered(null);
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div
            className="bar-chart"
            role="group"
            aria-label={`Illustrative ${period.toLowerCase()} activity chart`}
          >
            {values.map((value, i) => (
              <button
                type="button"
                className={`chart-bar ${hovered === i ? "is-hovered" : ""}`}
                key={`${period}-${i}`}
                aria-label={`${labels[i]}: ${value} demo units`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                onClick={() => setHovered(i)}
              >
                <motion.span
                  className="chart-bar-fill"
                  style={{ height: `${value}%` }}
                  initial={reduce ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduce ? 0 : 0.75,
                    delay: reduce ? 0 : i * 0.055,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <span className="chart-bar-tooltip" aria-hidden="true">
                  {value}
                </span>
                <small>{labels[i]}</small>
              </button>
            ))}
          </div>
          <div className="dashboard-bottom">
            <Sparkles size={15} />
            <span>Useful information. A clearer next decision.</span>
            <span className="dashboard-demo-label">DEMO DATA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
