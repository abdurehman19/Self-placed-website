// Visual swatches drawn in CSS/SVG to represent each material's look —
// avoids using scraped/branded product photography while still giving
// a clear sense of colour, grain, and finish for every catalog item.

const woodTones = {
  "wood-sheesham": ["#5a2e1a", "#7c4527", "#4a2414"],
  "wood-deodar": ["#c99a5b", "#dcb374", "#b98a4a"],
  "wood-pine": ["#e8c98f", "#f0d9a8", "#dcbb7c"],
  veneer: ["#8a5a34", "#a06a37", "#6f4526"],
};

const boardColors = {
  "board-ply": "#d9c6a3",
  "board-marine": "#c7d0c5",
  "board-mdf": "#e8ded0",
};

const chipColors = ["#f5f0e6", "#2b2118", "#8c8b86", "#7c4f27", "#a6432f", "#4c5940"];

function WoodGrain({ colors }) {
  const stripes = colors
    .map((c, i) => `${c} ${i * 14}px, ${c} ${i * 14 + 7}px`)
    .join(", ");
  return (
    <div
      className="swatch swatch--wood"
      style={{ backgroundImage: `repeating-linear-gradient(58deg, ${stripes}, ${colors[0]} 100%)` }}
    />
  );
}

function BoardBlock() {
  return (
    <div className="swatch swatch--board-block" aria-hidden="true">
      {["#caa06b", "#e0c48e", "#b78957", "#d4ad78", "#c79a63"].map((c, i) => (
        <span key={i} style={{ background: c }} />
      ))}
    </div>
  );
}

function BoardParticle() {
  return <div className="swatch swatch--particle" aria-hidden="true" />;
}

function FlatBoard({ color }) {
  return (
    <div className="swatch swatch--board" style={{ background: color }}>
      <span className="swatch__edge" />
    </div>
  );
}

function ChipRow() {
  return (
    <div className="swatch swatch--chips" aria-hidden="true">
      {chipColors.map((c, i) => (
        <span key={i} style={{ background: c }} />
      ))}
    </div>
  );
}

function Gloss() {
  return (
    <div className="swatch swatch--gloss" aria-hidden="true">
      <span className="swatch__shine" />
    </div>
  );
}

function HardwareIcon() {
  return (
    <div className="swatch swatch--icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none">
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.4" />
        <path
          d="M24 6v6M24 36v6M42 24h-6M12 24H6M35.8 12.2l-4.2 4.2M16.4 31.4l-4.2 4.2M35.8 35.8l-4.2-4.2M16.4 16.6l-4.2-4.2"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function LiquidIcon() {
  return (
    <div className="swatch swatch--icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
        <path
          d="M18 6h12v7l6 9v14a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V22l6-9V6z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M14 28h20" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    </div>
  );
}

export default function MaterialSwatch({ swatch }) {
  if (woodTones[swatch]) return <WoodGrain colors={woodTones[swatch]} />;
  if (boardColors[swatch]) return <FlatBoard color={boardColors[swatch]} />;
  if (swatch === "board-block") return <BoardBlock />;
  if (swatch === "board-particle") return <BoardParticle />;
  if (swatch === "laminate-swatches") return <ChipRow />;
  if (swatch === "acrylic") return <Gloss />;
  if (swatch?.startsWith("hardware")) return <HardwareIcon />;
  if (swatch === "adhesive" || swatch === "polish") return <LiquidIcon />;
  return <div className="swatch swatch--board" style={{ background: "var(--line)" }} />;
}