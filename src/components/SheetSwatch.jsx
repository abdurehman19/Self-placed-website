// Renders one colour swatch for the sheet colour book — solid, wood-grain,
// marble/stone, metallic, or textured/fabric — all drawn in CSS/SVG
// (no scraped or branded product photography).

function marbleGradient(base, vein) {
  return `linear-gradient(120deg, ${base} 0%, ${base} 38%, ${vein} 40%, ${base} 42%, ${base} 60%, ${vein} 63%, ${base} 65%, ${base} 100%)`;
}

function metallicGradient(tint) {
  return `linear-gradient(135deg, ${tint.dark} 0%, ${tint.light} 25%, ${tint.dark} 45%, ${tint.light} 60%, ${tint.dark} 80%, ${tint.light} 100%)`;
}

const marbleVariants = {
  "marble-light": ["#e9e6e0", "#b9b4a9"],
  "marble-dark": ["#6b6a66", "#3f3e3b"],
  "marble-black": ["#2a2825", "#0e0d0c"],
  "marble-beige": ["#e6d9bd", "#bfa878"],
};

const metallicVariants = {
  "metallic-silver": { dark: "#8f8f8f", light: "#eaeaea" },
  "metallic-gold": { dark: "#8a6a1f", light: "#e8c766" },
  "metallic-copper": { dark: "#8a4a30", light: "#e0a179" },
  "metallic-bronze": { dark: "#6e4a24", light: "#c99a5c" },
};

export default function SheetSwatch({ item, size = "small" }) {
  const cls = `sheet-swatch sheet-swatch--${size}`;

  if (item.swatch === "wood") {
    const [a, b, c] = item.tones;
    return (
      <div
        className={cls}
        style={{ backgroundImage: `repeating-linear-gradient(58deg, ${a} 0px, ${a} 7px, ${b} 7px, ${b} 14px, ${c} 14px, ${c} 21px)` }}
      />
    );
  }

  if (marbleVariants[item.swatch]) {
    const [base, vein] = marbleVariants[item.swatch];
    return <div className={cls} style={{ backgroundImage: marbleGradient(base, vein) }} />;
  }

  if (metallicVariants[item.swatch]) {
    return <div className={cls} style={{ backgroundImage: metallicGradient(metallicVariants[item.swatch]) }} />;
  }

  if (item.swatch === "concrete") {
    return (
      <div
        className={cls}
        style={{
          background: "#b7b3ab",
          backgroundImage:
            "radial-gradient(rgba(60,58,52,0.18) 1px, transparent 1.5px), radial-gradient(rgba(60,58,52,0.12) 1px, transparent 1.5px)",
          backgroundSize: "10px 10px, 15px 15px",
          backgroundPosition: "0 0, 6px 7px",
        }}
      />
    );
  }

  if (item.swatch === "fabric-grey" || item.swatch === "fabric-white") {
    const base = item.swatch === "fabric-grey" ? "#9a978f" : "#efe9db";
    const line = item.swatch === "fabric-grey" ? "rgba(36,22,9,0.14)" : "rgba(36,22,9,0.08)";
    return (
      <div
        className={cls}
        style={{
          background: base,
          backgroundImage: `repeating-linear-gradient(0deg, ${line} 0px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, ${line} 0px, transparent 1px, transparent 4px)`,
        }}
      />
    );
  }

  if (item.swatch === "leather") {
    return (
      <div
        className={cls}
        style={{
          background: "#6b3a24",
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.16) 1.5px, transparent 2px), radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1.5px)",
          backgroundSize: "12px 12px, 8px 8px",
          backgroundPosition: "0 0, 4px 4px",
        }}
      />
    );
  }

  return <div className={cls} style={{ background: item.hex }} />;
}