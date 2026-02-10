"use client";

interface NavDotsProps {
  total: number;
  active: number;
  onNavigate: (index: number) => void;
  visible: boolean;
  labels: string[];
}

export default function NavDots({ total, active, onNavigate, visible, labels }: NavDotsProps) {
  return (
    <nav
      className={`nav-wrapper fixed top-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full px-2 py-1.5 ${
        visible ? "" : "hidden-present"
      }`}
      style={{ background: "rgba(17,17,17,0.85)", backdropFilter: "blur(12px)", border: "1px solid #222" }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className="relative group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200"
            style={{
              background: isActive ? "#3B82F6" : "transparent",
              color: isActive ? "#fff" : "#888",
            }}
            title={labels[i]}
          >
            <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
            <span
              className="hidden md:inline max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300"
              style={{
                maxWidth: isActive ? "160px" : "0px",
                opacity: isActive ? 1 : 0,
              }}
            >
              {labels[i]}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
