"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { articles, readingTime } from "@/content/insights";
import { Art } from "./art";

export function InsightList() {
  const [topic, setTopic] = useState("All insights");
  const topics = ["All insights", ...new Set(articles.map((a) => a.category))];
  const visible =
    topic === "All insights"
      ? articles
      : articles.filter((a) => a.category === topic);
  return (
    <>
      <div className="insight-filters" aria-label="Filter insights by topic">
        {topics.map((t) => (
          <button
            key={t}
            aria-pressed={topic === t}
            onClick={() => setTopic(t)}
            className={topic === t ? "selected" : ""}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} insights shown
      </p>
      <div className="insight-grid">
        {visible.map((a) => (
          <Link
            className="insight-card"
            key={a.slug}
            href={`/insights/${a.slug}/`}
          >
            <Art kind={a.visual} />
            <div className="insight-meta">
              <span>{a.category}</span>
              <span>{readingTime(a)} min read</span>
            </div>
            <h2>
              {a.title}
              <ArrowUpRight size={22} />
            </h2>
            <p>{a.excerpt}</p>
            <time dateTime={a.date}>24 October 2026</time>
          </Link>
        ))}
      </div>
    </>
  );
}
