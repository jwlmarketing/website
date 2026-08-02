export default function HeroBadge() {
  return (
    <a
      href="https://www.entrepreneurielles.com/parcours-des-creatrices/"
      target="_blank"
      rel="noopener"
      className="absolute bottom-0 right-[5%] z-10 h-[140px] w-[140px] transition-transform duration-300 [filter:drop-shadow(0_4px_12px_rgba(0,0,0,0.15))] hover:scale-[1.08] hover:rotate-3"
    >
      <svg viewBox="0 0 300 300" width="100%" height="100%">
        <polygon
          points="150,12 288,150 150,288 12,150"
          fill="#ffffff"
          stroke="#E8940A"
          strokeWidth="3.5"
        />
        <text
          x="150"
          y="85"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="20"
          fontWeight="bold"
          fill="#E8940A"
          letterSpacing="1"
        >
          MEMBRE
        </text>
        <line x1="95" y1="92" x2="205" y2="92" stroke="#E8940A" strokeWidth="0.8" opacity="0.5" />
        <text
          x="150"
          y="124"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="18"
          fill="#555555"
          fontWeight="400"
          letterSpacing="0.5"
        >
          Entrepreneuri
        </text>
        <text
          x="150"
          y="146"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="20"
          fill="#E8940A"
          fontStyle="italic"
          fontWeight="700"
        >
          &apos;elles
        </text>
      </svg>
    </a>
  );
}
