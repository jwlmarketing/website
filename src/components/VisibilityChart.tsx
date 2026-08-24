"use client";

const TERRACOTTA = "#c9846f";
const GOLD = "#c9a84c";

// Three keyframe shapes the chart morphs between (matches the 3-frame Canva animation)
const TOP_FRAMES = [
  "20,90 90,40 160,100 230,60 300,130 370,70 440,150",
  "20,60 90,50 160,110 230,150 300,140 370,190 440,230",
  "20,140 90,60 160,50 230,110 300,80 370,60 440,150",
];

const BOTTOM_FRAMES = [
  "20,260 90,190 160,240 230,170 300,230 370,180 440,240",
  "20,220 90,240 160,190 230,230 300,180 370,220 440,260",
  "20,190 90,230 160,260 230,200 300,240 370,210 440,250",
];

function pointsToPath(points: string) {
  return points
    .split(" ")
    .map((p, i) => `${i === 0 ? "M" : "L"}${p}`)
    .join(" ");
}

export default function VisibilityChart() {
  const areaPath = `${pointsToPath(TOP_FRAMES[0])} L440,280 L20,280 Z`;

  return (
    <div className="mx-auto mb-4 w-full max-w-[500px]">
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
        <path fill="url(#jwl-area)">
          <animate
            attributeName="d"
            dur="7s"
            repeatCount="indefinite"
            values={TOP_FRAMES.map((f) => `${pointsToPath(f)} L440,280 L20,280 Z`).join(";") + `;${pointsToPath(TOP_FRAMES[0])} L440,280 L20,280 Z`}
          />
        </path>

        {/* Bottom line — gold */}
        <polyline points={BOTTOM_FRAMES[0]} fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <animate
            attributeName="points"
            dur="7s"
            repeatCount="indefinite"
            values={BOTTOM_FRAMES.join(";") + `;${BOTTOM_FRAMES[0]}`}
          />
        </polyline>
        {BOTTOM_FRAMES[0].split(" ").map((p, i) => {
          const [cx, cy] = p.split(",");
          return (
            <circle key={`b${i}`} cx={cx} cy={cy} r="9" fill={GOLD}>
              <animate
                attributeName="cx"
                dur="7s"
                repeatCount="indefinite"
                values={BOTTOM_FRAMES.map((f) => f.split(" ")[i].split(",")[0]).join(";") + `;${cx}`}
              />
              <animate
                attributeName="cy"
                dur="7s"
                repeatCount="indefinite"
                values={BOTTOM_FRAMES.map((f) => f.split(" ")[i].split(",")[1]).join(";") + `;${cy}`}
              />
            </circle>
          );
        })}

        {/* Top line — terracotta */}
        <polyline points={TOP_FRAMES[0]} fill="none" stroke={TERRACOTTA} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <animate
            attributeName="points"
            dur="7s"
            repeatCount="indefinite"
            values={TOP_FRAMES.join(";") + `;${TOP_FRAMES[0]}`}
          />
        </polyline>
        {TOP_FRAMES[0].split(" ").map((p, i) => {
          const [cx, cy] = p.split(",");
          return (
            <circle key={`t${i}`} cx={cx} cy={cy} r="9" fill={TERRACOTTA}>
              <animate
                attributeName="cx"
                dur="7s"
                repeatCount="indefinite"
                values={TOP_FRAMES.map((f) => f.split(" ")[i].split(",")[0]).join(";") + `;${cx}`}
              />
              <animate
                attributeName="cy"
                dur="7s"
                repeatCount="indefinite"
                values={TOP_FRAMES.map((f) => f.split(" ")[i].split(",")[1]).join(";") + `;${cy}`}
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
}
