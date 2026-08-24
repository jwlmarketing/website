"use client";

const TERRACOTTA = "#c9846f";
const GOLD = "#c9a84c";

const TOP_POINTS = [
  { x: 20, y: 90 },
  { x: 90, y: 40 },
  { x: 160, y: 100 },
  { x: 230, y: 60 },
  { x: 300, y: 130 },
  { x: 370, y: 70 },
  { x: 440, y: 150 },
];

const BOTTOM_POINTS = [
  { x: 20, y: 260 },
  { x: 90, y: 190 },
  { x: 160, y: 240 },
  { x: 230, y: 170 },
  { x: 300, y: 230 },
  { x: 370, y: 180 },
  { x: 440, y: 240 },
];

function pathFor(points: { x: number; y: number }[]) {
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
}

export default function VisibilityChart() {
  const topPath = pathFor(TOP_POINTS);
  const bottomPath = pathFor(BOTTOM_POINTS);
  const areaPath = `${topPath} L440,280 L20,280 Z`;

  return (
    <div className="mx-auto mb-4 w-full max-w-[500px]">
      <style>{`
        @keyframes jwl-dot-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .jwl-dot-top { animation: jwl-dot-bob 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        .jwl-dot-bottom { animation: jwl-dot-bob 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
      `}</style>
      <svg viewBox="0 0 470 300" className="h-auto w-full">
        <defs>
          <linearGradient id="jwl-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={TERRACOTTA} stopOpacity="0.35" />
            <stop offset="100%" stopColor={TERRACOTTA} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Axes */}
        <line x1="20" y1="280" x2="440" y2="280" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="440" y1="10" x2="440" y2="280" stroke="#1a1a1a" strokeWidth="2" />

        {/* Area fill under top line */}
        <path d={areaPath} fill="url(#jwl-area)" />

        {/* Bottom line — gold */}
        <path d={bottomPath} fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {BOTTOM_POINTS.map((p, i) => (
          <circle
            key={`b${i}`}
            cx={p.x}
            cy={p.y}
            r="9"
            fill={GOLD}
            className="jwl-dot-bottom"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}

        {/* Top line — terracotta */}
        <path d={topPath} fill="none" stroke={TERRACOTTA} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {TOP_POINTS.map((p, i) => (
          <circle
            key={`t${i}`}
            cx={p.x}
            cy={p.y}
            r="9"
            fill={TERRACOTTA}
            className="jwl-dot-top"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
