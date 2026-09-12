import { useState, useMemo } from "react";
import content from "../data/content.js";
import SheetSwatch from "./SheetSwatch.jsx";
import "./SheetColorBook.css";

export default function SheetColorBook() {
  const [family, setFamily] = useState("Sab");
  const [selectedCode, setSelectedCode] = useState(content.sheetColors[0].code);

  const filtered = useMemo(() => {
    if (family === "Sab") return content.sheetColors;
    return content.sheetColors.filter((c) => c.family === family);
  }, [family]);

  const selected =
    content.sheetColors.find((c) => c.code === selectedCode) || filtered[0] || content.sheetColors[0];

  function pick(code) {
    setSelectedCode(code);
  }

  return (
    <div className="sheet-book">
      <div className="sheet-book__filters" role="tablist" aria-label="Colour family filter">
        {content.sheetColorFamilies.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={family === f}
            className={`sheet-book__filter ${family === f ? "is-active" : ""}`}
            onClick={() => setFamily(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="sheet-book__layout">
        {/* ---- Colour grid: the "book" of swatches ---- */}
        <div className="sheet-book__grid" role="listbox" aria-label="Sheet colours">
          {filtered.map((c) => (
            <button
              key={c.code}
              role="option"
              aria-selected={selected.code === c.code}
              className={`sheet-book__cell ${selected.code === c.code ? "is-selected" : ""}`}
              onClick={() => pick(c.code)}
              title={c.name}
            >
              <SheetSwatch item={c} size="small" />
              <span className="sheet-book__cell-name">{c.name}</span>
            </button>
          ))}
        </div>

        {/* ---- Detail panel for the selected colour ---- */}
        <div className="sheet-book__detail">
          <SheetSwatch item={selected} size="large" />
          <div className="sheet-book__detail-body">
            <span className="sheet-book__code mono">{selected.code}</span>
            <h3>{selected.name}</h3>
            <p className="sheet-book__meta mono">
              {selected.finish} finish · {selected.family}
            </p>
            <p className="sheet-book__price mono">
              Rs {selected.price} <span>per 8x4 ft sheet</span>
            </p>
            <p className="sheet-book__best-for">{selected.bestFor}</p>
            <a
              className="btn btn--primary sheet-book__cta"
              href={`https://wa.me/${content.whatsapp}?text=${encodeURIComponent(
                `Assalam-o-Alaikum, I'm interested in the "${selected.name}" (${selected.code}) sheet colour. Please share more details.`
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Ask About This Colour
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}