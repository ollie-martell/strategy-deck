"use client";

import { useState } from "react";

interface AccordionProps {
  heading: string;
  body: string;
}

export default function Accordion({ heading, body }: AccordionProps) {
  const [open, setOpen] = useState(false);

  // Split body into paragraphs and detect bullet lines
  const renderBody = (text: string) => {
    const lines = text.split("\n").filter((l) => l.trim() !== "");
    return lines.map((line, i) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("• ") || trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        const content = trimmed.replace(/^[•*\-]\s*/, "");
        return (
          <div key={i} className="flex gap-2 mt-1.5">
            <span style={{ color: "#3B82F6" }} className="flex-shrink-0">
              •
            </span>
            <span>{content}</span>
          </div>
        );
      }
      // Numbered lines (e.g. "1. Block 2 full days...")
      const numberedMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
      if (numberedMatch) {
        return (
          <div key={i} className="flex gap-2 mt-1.5">
            <span
              style={{ color: "#3B82F6" }}
              className="flex-shrink-0 font-mono text-xs mt-0.5"
            >
              {numberedMatch[1]}.
            </span>
            <span>{numberedMatch[2]}</span>
          </div>
        );
      }
      return (
        <p key={i} className={i > 0 ? "mt-2" : ""}>
          {line}
        </p>
      );
    });
  };

  return (
    <div
      className="border rounded-lg mb-3 overflow-hidden"
      style={{ borderColor: open ? "#3B82F6" : "#222" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors cursor-pointer"
        style={{ background: open ? "#111" : "transparent" }}
      >
        <span className="text-sm font-medium" style={{ color: "#ededed" }}>
          {heading}
        </span>
        <svg
          className="flex-shrink-0 ml-3 transition-transform duration-300"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: "#3B82F6",
          }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <div className="accordion-inner">
          <div
            className="px-5 pb-4 text-sm leading-relaxed"
            style={{ color: "#888" }}
          >
            {renderBody(body)}
          </div>
        </div>
      </div>
    </div>
  );
}
