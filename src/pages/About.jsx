import { Link } from "react-router-dom";
import content from "../data/content.js";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <section className="section">
        <div className="container about__head">
          <span className="eyebrow mono">Hamare Baare Mein</span>
          <h1 className="about__title">{content.name}</h1>
          <p className="about__role mono">
            {content.title} · {content.experienceYears}+ saal ka tajurba · {content.city}
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container about__body">
          {content.aboutBody.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">Kaam ka usool</h2>
          <div className="values">
            {content.aboutValues.map((v) => (
              <div className="values__item" key={v.title}>
                <span className="values__mark" aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container about__skills-wrap">
          <h2 className="section__title">Kis kis kaam mein mahir hain</h2>
          <ul className="about__skills">
            {content.aboutSkills.map((s) => (
              <li key={s}>
                <span aria-hidden="true">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container cta">
          <div>
            <h2 className="section__title">Kaam ke bare mein baat karni hai?</h2>
            <p className="cta__sub">Rate janne ke liye rabta karein — pehli visit mein hi sahi andaza mil jayega.</p>
          </div>
          <div className="hero__actions">
            <a className="btn btn--primary" href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noreferrer">
              WhatsApp karein
            </a>
            <Link className="btn btn--ghost" to="/contact">
              Rabta karein
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
