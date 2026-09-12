import { useState, useMemo } from "react";
import content from "../data/content.js";
import GalleryIcon from "./Galleryicon.jsx";
import "./Gallery.css";

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
                    <GalleryIcon category={g.category} />
                    <span>Photo coming soon</span>
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