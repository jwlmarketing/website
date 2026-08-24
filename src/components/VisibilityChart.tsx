"use client";

const TOP_POINTS = [
  { x: 20, y: 60 },
  { x: 90, y: 95 },
  { x: 160, y: 100 },
  { x: 230, y: 150 },
  { x: 300, y: 140 },
  { x: 370, y: 110 },
  { x: 440, y: 190 },
];

const BOTTOM_POINTS = [
  { x: 20, y: 260 },
  { x: 90, y: 210 },
  { x: 160, y: 215 },
  { x: 230, y: 180 },
  { x: 300, y: 205 },
  { x: 370, y: 165 },
  { x: 440, y: 235 },
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
        @keyframes jwl-chart-cycle {
          0%, 100% { stop-color: #c9846f; }
          50% { stop-color: #c9a84c; }
        }
        @keyframes jwl-chart-cycle-b {
          0%, 100% { stop-color: #c9a84c; }
          50% { stop-color: #c9846f; }
        }
        .jwl-chart-stop-a { animation: jwl-chart-cycle 6s ease-in-out infinite; }
        .jwl-chart-stop-b { animation: jwl-chart-cycle-b 6s ease-in-out infinite; }
        .jwl-chart-dot {
          animation: jwl-chart-cycle 6s ease-in-out infinite;
        }
        .jwl-chart-dot-alt {
          animation: jwl-chart-cycle-b 6s ease-in-out infinite;
        }
      `}</style>
      <svg viewBox="0 0 470 300" className="h-auto w-full">
        <defs>
          <linearGradient id="jwl-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="jwl-chart-stop-a" stopOpacity="0.35" />
            <stop offset="100%" className="jwl-chart-stop-a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jwl-line-top" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" className="jwl-chart-stop-a" />
            <stop offset="100%" className="jwl-chart-stop-b" />
          </linearGradient>
          <linearGradient id="jwl-line-bottom" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" className="jwl-chart-stop-b" />
            <stop offset="100%" className="jwl-chart-stop-a" />
          </linearGradient>
        </defs>

        {/* Axes */}
        <line x1="20" y1="280" x2="440" y2="280" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="440" y1="10" x2="440" y2="280" stroke="#1a1a1a" strokeWidth="2" />

        {/* Area fill under top line */}
        <path d={areaPath} fill="url(#jwl-area)" />

        {/* Bottom line */}
        <path d={bottomPath} fill="none" stroke="url(#jwl-line-bottom)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {BOTTOM_POINTS.map((p, i) => (
          <circle key={`b${i}`} cx={p.x} cy={p.y} r="9" className="jwl-chart-dot-alt" />
        ))}

        {/* Top line */}
        <path d={topPath} fill="none" stroke="url(#jwl-line-top)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {TOP_POINTS.map((p, i) => (
          <circle key={`t${i}`} cx={p.x} cy={p.y} r="9" className="jwl-chart-dot" />
        ))}
      </svg>
    </div>
  );
}
