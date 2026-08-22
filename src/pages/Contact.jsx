import { useState } from "react";
import content from "../data/content.js";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", service: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: null }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Apna naam likhein";
    if (!form.service.trim()) next.service = "Kaam ki qisam batayein";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function sendOnWhatsApp(e) {
    e.preventDefault();
    if (!validate()) return;

    const text = `Assalam-o-Alaikum, mera naam ${form.name} hai.%0AKaam: ${form.service}%0A${
      form.message ? "Tafseel: " + form.message : ""
    }`;
    window.open(`https://wa.me/${content.whatsapp}?text=${text}`, "_blank", "noreferrer");
    setSent(true);
  }

  return (
    <div>
      <section className="section section--tight">
        <div className="container">
          <span className="eyebrow mono">Rabta</span>
          <h1 className="contact__title">Kaam batayein, rate sunein</h1>
          <p className="contact__note">
            Call karein ya neeche form bhar kar seedha WhatsApp par message bhejein. Har call/message ka jawab diya jata hai.
          </p>
        </div>
      </section>

      <section className="section section--top-tight">
        <div className="container contact-grid">
          <div className="contact-cards">
            <a className="contact-card" href={`tel:${content.phone.replace(/-/g, "")}`}>
              <span className="contact-card__label mono">Phone</span>
              <span className="contact-card__value">{content.phone}</span>
            </a>
            <a
              className="contact-card"
              href={`https://wa.me/${content.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-card__label mono">WhatsApp</span>
              <span className="contact-card__value">Seedha message karein</span>
            </a>
            <div className="contact-card contact-card--static">
              <span className="contact-card__label mono">Ilaqa</span>
              <span className="contact-card__value">{content.city}</span>
              <span className="contact-card__sub">{content.areas.slice(0, -1).join(", ")}, aur poore shehar mein</span>
            </div>
            <div className="contact-card contact-card--static">
              <span className="contact-card__label mono">Waqt</span>
              <span className="contact-card__value">Subah 9 — Shaam 8</span>
              <span className="contact-card__sub">Haftay ke saaton din</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={sendOnWhatsApp} noValidate>
            {sent && (
              <div className="contact-form__success" role="status">
                WhatsApp khul gaya hai — wahan message bhej dein, jaldi jawab milega.
              </div>
            )}

            <label>
              Apna naam
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Aapka naam"
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="contact-form__error">{errors.name}</span>}
            </label>

            <label>
              Kaam ki qisam
              <input
                type="text"
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                placeholder="Almari, kitchen, darwaza, ya kuch aur"
                aria-invalid={!!errors.service}
              />
              {errors.service && <span className="contact-form__error">{errors.service}</span>}
            </label>

            <label>
              Tafseel (optional)
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Size, jagah, ya koi aur detail"
              />
            </label>

            <button type="submit" className="btn btn--primary">
              WhatsApp par bhejein
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
