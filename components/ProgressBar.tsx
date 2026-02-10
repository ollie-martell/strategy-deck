"use client";

interface ProgressBarProps {
  progress: number; // 0 to 1
  visible: boolean;
}

export default function ProgressBar({ progress, visible }: ProgressBarProps) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[3px]"
      style={{
        background: "#111",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div
        className="h-full transition-all duration-300 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(90deg, #3B82F6, #60a5fa)",
        }}
      />
    </div>
  );
}
