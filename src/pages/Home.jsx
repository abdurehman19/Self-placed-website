import { Link } from "react-router-dom";
import content from "../data/content.js";
import JointDivider from "../components/JointDivider.jsx";
import Hero from "../assets/hero.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <div>
      {/* ---- Hero ---- */}
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow mono">{content.eyebrow}</span>
          <h1 className="hero__title">
            {content.heroLine1}
            <br />
            <em>{content.heroLine2}</em>
          </h1>
          <p className="hero__sub">{content.heroSub}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
            <Link className="btn btn--ghost" to="/rates">
              View Rates
            </Link>
          </div>

          <div className="hero__stats">
            {content.heroStats.map((s) => (
              <div className={`hero__stat ${s.featured ? "hero__stat--featured" : ""}`} key={s.label}>
                <span className="hero__stat-value mono">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* signature: measuring-tape rule, literal to the craft */}
        <div className="hero__ruler mono" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i}>{i % 2 === 0 ? "|" : "'"}</span>
          ))}
        </div>
      </section>

      <JointDivider tone="cream" />

      {/* ---- Meet the craftsman: text left, portrait right ---- */}
      <section className="section">
        <div className="container craftsman">
          <div className="craftsman__body">
            <span className="eyebrow mono">{content.craftsmanEyebrow}</span>
            <h2 className="craftsman__title">{content.name}</h2>
            <p className="craftsman__role mono">
              {content.title} · {content.experienceYears}+ years of experience
            </p>
            <p className="craftsman__desc">{content.craftsmanDesc}</p>
            <Link className="section__link" to="/about">
              Read more about {content.name} →
            </Link>
          </div>

          <figure className="craftsman__portrait">
            <span className="craftsman__frame">
              <img src={Hero} alt={`${content.name}, wood craftsman`} />
            </span>
          </figure>
        </div>
      </section>

      {/* ---- Signature quote strip ---- */}
      <section className="quote-strip">
        <div className="container quote-strip__inner">
          <span className="quote-strip__mark" aria-hidden="true">
            &ldquo;
          </span>
          <p className="quote-strip__text">{content.craftsmanQuote}</p>
          <span className="quote-strip__by mono">— {content.name}</span>
        </div>
      </section>

      <JointDivider tone="walnut" />

      {/* ---- How it works ---- */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">How It Works</h2>
          <div className="process">
            {content.process.map((p) => (
              <div className="process__item" key={p.step}>
                <span className="process__step mono">{p.step}</span>
                <h3 className="process__title">{p.title}</h3>
                <p className="process__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JointDivider tone="walnut" flip />

      {/* ---- Services ---- */}
      <section className="section section--dark">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title section__title--light">What We Build</h2>
            <Link className="section__link" to="/rates">
              See full price list →
            </Link>
          </div>
          <div className="services">
            {content.services.map((s) => (
              <div className="services__item" key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JointDivider tone="walnut" />

      {/* ---- Materials ---- */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Wood Quality</h2>
          <p className="section__sub">
            The right wood is chosen based on the job and your budget — decided together during the home visit.
          </p>
          <div className="materials">
            {content.materials.map((m) => (
              <div className="materials__item" key={m.name}>
                <span className="materials__dot" aria-hidden="true" />
                <div>
                  <h3>{m.name}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Service areas ---- */}
      <section className="section section--muted">
        <div className="container">
          <h2 className="section__title">Areas We Serve in {content.city}</h2>
          <div className="areas">
            {content.areas.map((a) => (
              <span className="areas__pill mono" key={a}>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section">
        <div className="container cta">
          <div>
            <h2 className="section__title">Ready to Get Started?</h2>
            <p className="cta__sub">Call or message on WhatsApp to get your quote — no obligation.</p>
          </div>
          <div className="hero__actions">
            <a className="btn btn--primary" href={`tel:${content.phone.replace(/-/g, "")}`}>
              Call Now
            </a>
            <Link className="btn btn--ghost" to="/gallery">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}