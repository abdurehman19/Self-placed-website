import { useState, useMemo } from "react";
import content from "../data/content.js";
import "./Gallery.css";

function WoodIcon() {
  return (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M6 18h36M6 26h36M16 10v28M32 10v28" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
    </svg>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("Sab");

  const filtered = useMemo(() => {
    if (active === "Sab") return content.gallery;
    return content.gallery.filter((g) => g.category === active);
  }, [active]);

  return (
    <div>
      <section className="section section--tight">
        <div className="container">
          <span className="eyebrow mono">Gallery</span>
          <h1 className="gallery__title">Pehle ka kaam</h1>
          <p className="gallery__note">
            Yahan {content.name} ke banaye hue kaam ki tasveerein lagengi. Apni photos{" "}
            <code className="mono">public/gallery/</code> folder mein daal kar{" "}
            <code className="mono">src/data/content.js</code> mein file ka naam likh dein.
          </p>
        </div>
      </section>

      <section className="section section--top-tight">
        <div className="container">
          <div className="gallery__filters" role="tablist" aria-label="Category filter">
            {content.galleryCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={`gallery__filter ${active === c ? "is-active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((g, i) => (
              <figure className="gallery-tile" key={i}>
                {g.src ? (
                  <img src={g.src} alt={g.label} loading="lazy" />
                ) : (
                  <div className="gallery-tile__placeholder">
                    <WoodIcon />
                    <span>Photo add karein</span>
                  </div>
                )}
                <figcaption>
                  <span className="gallery-tile__label">{g.label}</span>
                  <span className="gallery-tile__cat mono">{g.category}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
