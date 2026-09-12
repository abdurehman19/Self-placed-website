import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import content from "../data/content.js";
import MaterialSwatch from "../components/MaterialSwatch.jsx";
import SheetColorBook from "../components/SheetColorBook.jsx";
import "./Materials.css";

export default function Materials() {
  const [active, setActive] = useState("Sab");

  const filtered = useMemo(() => {
    if (active === "Sab") return content.materialCatalog;
    return content.materialCatalog.filter((m) => m.category === active);
  }, [active]);

  const grouped = useMemo(() => {
    const map = new Map();
    filtered.forEach((m) => {
      if (!map.has(m.category)) map.set(m.category, []);
      map.get(m.category).push(m);
    });
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <div>
      <section className="section section--tight">
        <div className="container">
          <span className="eyebrow mono">Materials</span>
          <h1 className="materials-page__title">Everything Used in Woodwork</h1>
          <p className="materials-page__note">{content.materialsNote}</p>
        </div>
      </section>

      {/* ---- Where materials come from ---- */}
      <section className="section section--top-tight">
        <div className="container">
          <div className="sources">
            {content.materialSources.map((s) => (
              <div className="sources__item" key={s.name}>
                <span className="sources__dot" aria-hidden="true" />
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Filterable catalog ---- */}
      <section className="section section--top-tight">
        <div className="container">
          <div className="materials-page__filters" role="tablist" aria-label="Category filter">
            {content.materialCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={`materials-page__filter ${active === c ? "is-active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {grouped.map(([cat, items]) => (
            <div className="materials-page__group" key={cat}>
              <h2 className="materials-page__group-title">{cat}</h2>
              <div className="material-grid">
                {items.map((m) => (
                  <div className="material-card" key={m.name}>
                    <MaterialSwatch swatch={m.swatch} />
                    <div className="material-card__body">
                      <h3>{m.name}</h3>
                      <p className="material-card__desc">{m.desc}</p>
                      <p className="material-card__price mono">
                        Rs {m.price} <span>{m.unit}</span>
                      </p>
                      <p className="material-card__where">
                        <span aria-hidden="true">📍</span> {m.where}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Sheet colour book: click a colour to see its details ---- */}
      <section className="section section--muted">
        <div className="container">
          <span className="eyebrow mono">Sheet Colour Book</span>
          <h2 className="materials-page__title materials-page__title--small">Pick a Colour, See the Sheet</h2>
          <p className="materials-page__note">
            {content.sheetColors.length} laminate/sunmica colours used on Karachi wardrobes, kitchens, and doors — tap
            any swatch to see its finish, price, and best use.
          </p>
          <div className="sheet-book-wrap">
            <SheetColorBook />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rates__cta">
            <p>Not sure which material fits your budget and needs? Ask during your free home visit.</p>
            <Link className="btn btn--primary" to="/contact">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}