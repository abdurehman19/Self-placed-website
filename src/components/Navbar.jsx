import { useState } from "react";
import { NavLink } from "react-router-dom";
import content from "../data/content.js";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rates", label: "Rates" },
  { to: "/materials", label: "Materials" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-mark">SA</span>
          <span className="nav__brand-text">
            {content.name}
            <span className="nav__brand-sub">{content.title}</span>
          </span>
        </NavLink>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Menu kholein"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            className="nav__cta"
            href={`https://wa.me/${content.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}