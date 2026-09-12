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
            Message on WhatsApp
          </a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {content.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}