"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Signal,
  Wifi,
  BatteryFull,
  CalendarDays,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export function BookingDemo() {
  const [day, setDay] = useState(14);
  const [slot, setSlot] = useState("10:30 AM");
  const [confirmed, setConfirmed] = useState(false);
  const [month, setMonth] = useState(0);
  const months = ["November", "December"];
  const dates = month === 0 ? 30 : 31;
  return (
    <div className="booking-composition">
      <div className="phone-orbit" aria-hidden="true" />
      <div className="phone-side-note">
        <span className="tiny-index">INTERFACE STUDY / 01</span>
        <span>
          Considered at
          <br />
          every touchpoint.
        </span>
      </div>
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
            <span className="demo-logo">a</span>
            <span>Appointment studio</span>
            <span className="demo-avatar">JD</span>
          </div>
          <span className="phone-kicker">MAKE TIME FOR WHAT MATTERS</span>
          <h3>
            A little space
            <br />
            for your next idea.
          </h3>
          <p className="phone-desc">Choose a time. We’ll take it from there.</p>
          <div className="demo-calendar-head">
            <strong>{months[month]} 2026</strong>
            <div>
              <button
                aria-label="Previous demo month"
                disabled={month === 0}
                onClick={() => {
                  setMonth(0);
                  setConfirmed(false);
                }}
              >
                <ChevronLeft size={14} />
              </button>
              <button
                aria-label="Next demo month"
                disabled={month === 1}
                onClick={() => {
                  setMonth(1);
                  setConfirmed(false);
                }}
              >
                <ChevronRight size={14} />
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
              <button
                key={i}
                type="button"
                aria-label={`${months[month]} ${i + 1}, 2026`}
                aria-pressed={day === i + 1}
                className={day === i + 1 ? "selected" : ""}
                onClick={() => {
                  setDay(i + 1);
                  setConfirmed(false);
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <p className="slot-label">
            Available times <span>30 MIN · DEMO</span>
          </p>
          <div className="demo-slots">
            {["09:00 AM", "10:30 AM", "02:00 PM"].map((s) => (
              <button
                key={s}
                aria-pressed={slot === s}
                className={slot === s ? "selected" : ""}
                onClick={() => {
                  setSlot(s);
                  setConfirmed(false);
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <button className="demo-book" onClick={() => setConfirmed(true)}>
            {confirmed ? (
              <>
                <Check size={15} />
                Demo selection saved
              </>
            ) : (
              <>
                Confirm time
                <ArrowUpRight size={15} />
              </>
            )}
          </button>
          <p className="phone-demo-note" aria-live="polite">
            {confirmed
              ? `${months[month]} ${day} · ${slot}. No appointment was booked.`
              : "Interactive concept · No real booking is made."}
          </p>
        </div>
        <div className="phone-home" />
      </div>
      <div className="floating-demo-card">
        <span className="floating-icon">
          <CalendarDays size={20} />
        </span>
        <div>
          <strong>Your time. Beautifully organized.</strong>
          <span>Thoughtful software, down to the details.</span>
        </div>
        <Check size={16} />
      </div>
    </div>
  );
}

export function DashboardDemo() {
  const [view, setView] = useState("Week");
  const vals =
    view === "Week" ? [35, 58, 47, 73, 65, 91, 80] : [47, 69, 56, 85];
  return (
    <div className="dashboard-demo">
      <div className="dashboard-top">
        <div className="dashboard-brand">
          <span className="demo-logo">a</span> Clarity / workspace
        </div>
        <span className="demo-pill">Illustrative demo</span>
      </div>
      <div className="dashboard-body">
        <aside aria-hidden="true">
          <span className="dashboard-nav-active">Overview</span>
          <span>Activity</span>
          <span>Workflows</span>
          <span>Reports</span>
          <span>Settings</span>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-title">
            <div>
              <span className="small">THE BIG PICTURE</span>
              <h3>A clearer view of your business.</h3>
            </div>
            <span className="dashboard-avatar">A</span>
          </div>
          <div className="dashboard-stats">
            <div>
              <span>Workflow health</span>
              <strong>
                On track <TrendingUp size={18} />
              </strong>
            </div>
            <div>
              <span>Review queue</span>
              <strong>
                12 <span>Demo records</span>
              </strong>
            </div>
          </div>
          <div className="chart-head">
            <strong>Activity overview</strong>
            <div className="segmented" aria-label="Chart period">
              {["Week", "Month"].map((v) => (
                <button
                  key={v}
                  aria-pressed={view === v}
                  className={view === v ? "selected" : ""}
                  onClick={() => setView(v)}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div
            className="bar-chart"
            role="img"
            aria-label={`Illustrative ${view.toLowerCase()} activity: ${vals.join(", ")} demo units.`}
          >
            {vals.map((v, i) => (
              <div key={i}>
                <span style={{ height: `${v}%` }} />
                <small>
                  {view === "Week"
                    ? ["M", "T", "W", "T", "F", "S", "S"][i]
                    : `W${i + 1}`}
                </small>
              </div>
            ))}
          </div>
          <div className="dashboard-bottom">
            <Sparkles size={16} />
            <span>One connected view. Fewer disconnected decisions.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
