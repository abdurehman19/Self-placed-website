import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import content from "../data/content.js";
import "./Rates.css";

export default function Rates() {
  const [active, setActive] = useState("Sab");

  const filtered = useMemo(() => {
    if (active === "Sab") return content.rates;
    return content.rates.filter((r) => r.category === active);
  }, [active]);

  const grouped = useMemo(() => {
    const map = new Map();
    filtered.forEach((r) => {
      if (!map.has(r.category)) map.set(r.category, []);
      map.get(r.category).push(r);
    });
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <div>
      <section className="section section--tight">
        <div className="container">
          <span className="eyebrow mono">Rates</span>
          <h1 className="rates__title">Andaza rate list</h1>
          <p className="rates__note">{content.ratesNote}</p>
        </div>
      </section>

      <section className="section section--top-tight">
        <div className="container">
          <div className="rates__filters" role="tablist" aria-label="Category filter">
            {content.rateCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={`rates__filter ${active === c ? "is-active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {grouped.map(([cat, items]) => (
            <div className="rates__group" key={cat}>
              <h2 className="rates__group-title">{cat}</h2>
              <div className="rates-grid">
                {items.map((r) => (
                  <div className="rate-tag" key={r.item}>
                    <span className="rate-tag__hole" aria-hidden="true" />
                    <h3 className="rate-tag__item">{r.item}</h3>
                    <p className="rate-tag__price mono">
                      Rs {r.price}
                      <span className="rate-tag__unit"> {r.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="rates__cta">
            <p>Sahi rate jaanne ke liye ghar par visit zaroori hai — bilkul muft, koi obligation nahi.</p>
            <Link className="btn btn--primary" to="/contact">
              Rabta karein
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
