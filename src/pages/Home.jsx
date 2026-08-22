import { Link } from "react-router-dom";
import content from "../data/content.js";
import JointDivider from "../components/JointDivider.jsx";
import Hero from '../assets/hero.jpeg'
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
              WhatsApp par baat karein
            </a>
            <Link className="btn btn--ghost" to="/rates">
              Rates dekhein
            </Link>
          </div>

          <div className="hero__stats">
            {content.heroStats.map((s) => (
              <div className="hero__stat" key={s.label}>
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

      {/* ---- Meet the craftsman ---- */}
      <section className="section">
        <div className="container craftsman">
          <figure className="craftsman__portrait">
            <span className="craftsman__frame">
              <img src={Hero} alt={`${content.name}, wood craftsman, apni workshop mein`} />
            </span>
          </figure>

          <div className="craftsman__body">
            <span className="eyebrow mono">Karigar Se Milein</span>
            <h2 className="craftsman__title">{content.name}</h2>
            <p className="craftsman__role mono">
              {content.title} · {content.experienceYears}+ saal ka tajurba
            </p>
            <p className="craftsman__desc">{content.aboutBody[0]}</p>
            <Link className="section__link" to="/about">
              Puri kahani padhein →
            </Link>
          </div>
        </div>
      </section>

      <JointDivider tone="walnut" flip />

      {/* ---- How it works ---- */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Kaam kaise hota hai</h2>
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
            <h2 className="section__title section__title--light">Kaam ke daaire</h2>
            <Link className="section__link" to="/rates">
              Poori rate list dekhein →
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
          <h2 className="section__title">Lakri ki quality</h2>
          <p className="section__sub">
            Kaam ki nature aur budget ke hisaab se sahi lakri chuni jaati hai — ghar par visit ke waqt saath mil kar tay karte hain.
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
          <h2 className="section__title">{content.city} mein kahan kaam karte hain</h2>
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
            <h2 className="section__title">Kaam shuru karwana hai?</h2>
            <p className="cta__sub">Rate janne ke liye call ya WhatsApp karein — koi obligation nahi.</p>
          </div>
          <div className="hero__actions">
            <a className="btn btn--primary" href={`tel:${content.phone.replace(/-/g, "")}`}>
              Call karein
            </a>
            <Link className="btn btn--ghost" to="/gallery">
              Kaam dekhein
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}