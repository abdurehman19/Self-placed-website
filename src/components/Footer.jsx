import content from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <h3 className="footer__name">{content.name}</h3>
          <p className="footer__tagline">{content.title} · {content.city}</p>
        </div>

        <div className="footer__contact">
          <a href={`tel:${content.phone.replace(/-/g, "")}`} className="mono">
            {content.phone}
          </a>
          <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp par likhein
          </a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {content.name}. Sab haqooq mehfooz.</span>
      </div>
    </footer>
  );
}
