"use client";

import { useRef, useEffect, useState } from "react";
import Accordion from "./Accordion";

interface AccordionItem {
  heading: string;
  body: string;
}

interface StatCallout {
  value: string;
  label: string;
}

interface StatsGroup {
  stats: StatCallout[];
  afterAccordion: number; // show after this accordion index (0-based)
}

interface SectionProps {
  index: number;
  title: string;
  subtitle: string;
  accordions: AccordionItem[];
  takeaway: string;
  id: string;
  statsGroups?: StatsGroup[];
}

function StatsBlock({ stats }: { stats: StatCallout[] }) {
  return (
    <div className="flex flex-wrap gap-3 my-5">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex-1 min-w-[120px] rounded-lg px-4 py-3 text-center"
          style={{
            background: "rgba(59,130,246,0.06)",
            border: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          <div
            className="text-2xl sm:text-3xl font-bold font-mono"
            style={{ color: "#3B82F6" }}
          >
            {stat.value}
          </div>
          <div className="text-xs mt-1" style={{ color: "#888" }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Section({
  index,
  title,
  subtitle,
  accordions,
  takeaway,
  id,
  statsGroups,
}: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Build a map of accordion index -> stats to show after it
  const statsAfterMap = new Map<number, StatCallout[]>();
  if (statsGroups) {
    for (const group of statsGroups) {
      statsAfterMap.set(group.afterAccordion, group.stats);
    }
  }

  return (
    <section
      id={id}
      ref={ref}
      className="snap-section flex items-center justify-center px-4 sm:px-6 md:px-8 py-20"
    >
      <div
        className="w-full max-w-2xl transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
        }}
      >
        {/* Number */}
        <div
          className="text-7xl sm:text-8xl font-black mb-2 font-mono leading-none"
          style={{ color: "#3B82F6", opacity: 0.25 }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight"
          style={{ color: "#ededed" }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg mb-8 leading-relaxed italic"
          style={{ color: "#999" }}
        >
          &ldquo;{subtitle}&rdquo;
        </p>

        {/* Accordions with optional inline stats */}
        <div className="mb-8">
          {accordions.map((item, i) => (
            <div key={i}>
              <Accordion heading={item.heading} body={item.body} />
              {statsAfterMap.has(i) && (
                <StatsBlock stats={statsAfterMap.get(i)!} />
              )}
            </div>
          ))}
        </div>

        {/* Action Item */}
        <div
          className="rounded-lg px-5 py-4 text-sm leading-relaxed"
          style={{
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <span
            className="font-semibold text-xs uppercase tracking-wider block mb-1.5"
            style={{ color: "#3B82F6" }}
          >
            Action Item
          </span>
          <span style={{ color: "#ccc" }}>{takeaway}</span>
        </div>
      </div>
    </section>
  );
}
