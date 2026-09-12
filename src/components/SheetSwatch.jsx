// Renders one colour swatch for the sheet colour book — solid, wood-grain,
// marble, or metallic — all drawn in CSS/SVG (no scraped product photos).

function marbleGradient(dark) {
  const base = dark ? "#6b6a66" : "#e9e6e0";
  const vein = dark ? "#3f3e3b" : "#b9b4a9";
  return `linear-gradient(120deg, ${base} 0%, ${base} 38%, ${vein} 40%, ${base} 42%, ${base} 60%, ${vein} 63%, ${base} 65%, ${base} 100%)`;
}

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

  if (item.swatch === "marble-light") {
    return <div className={cls} style={{ backgroundImage: marbleGradient(false) }} />;
  }

  if (item.swatch === "marble-dark") {
    return <div className={cls} style={{ backgroundImage: marbleGradient(true) }} />;
  }

  if (item.swatch === "metallic") {
    return (
      <div
        className={cls}
        style={{
          backgroundImage:
            "linear-gradient(135deg, #9a9a9a 0%, #d8d8d8 25%, #8f8f8f 45%, #eaeaea 60%, #949494 80%, #cfcfcf 100%)",
        }}
      />
    );
  }

  return <div className={cls} style={{ background: item.hex }} />;
}