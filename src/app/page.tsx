
"use client";

import { useState } from "react";
import { Command, ArrowUpRight, X } from "lucide-react";
import UniverseScene from "@/components/UniverseScene";

const links = [
  { name: "EMAN", detail: "Intelligence engine", href: "/eman/" },
  { name: "Grey", detail: "AI workspace", href: "/grey/" },
  {
    name: "BusinessFlow",
    detail: "Business intelligence",
    href: "/businessflow/",
  },
  { name: "Oyosky", detail: "Intelligence research", href: "/oyosky/" },
  {
    name: "Demonstrations",
    detail: "Explore working concepts",
    href: "/demonstrations/",
  },
  {
    name: "Architecture",
    detail: "How the systems connect",
    href: "/architecture/",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="universe-home">
      <header className="universe-header">
        <a className="universe-brand" href="./" aria-label="HackyTech home">
          <span className="universe-brand-icon">
            <Command size={19} />
          </span>
          <span>HACKYTECH</span>
        </a>

        <span className="universe-edition">TECHNOLOGY ECOSYSTEM</span>

        <button
          className="universe-menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <span className="menu-lines" />}
          <span>{menuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </header>

      <section className="universe-stage" aria-label="Rotating 3D universe">
        <div className="stage-caption stage-caption-top">
          <span className="stage-indicator" />
          HACKYTECH / UNIVERSE 001
        </div>

        <div className="universe-render">
          <UniverseScene />
        </div>

        <div className="stage-title">
          <p>INTELLIGENCE. SYSTEMS. POSSIBILITY.</p>
          <h1>HackyTech Universe</h1>
          <span>Explore the systems behind the vision.</span>
        </div>

        <div className="stage-caption stage-caption-bottom">
          <span>ROTATE TO EXPLORE</span>
          <span>THINK · BUILD · CONNECT</span>
        </div>
      </section>

      {menuOpen && (
        <div className="universe-menu-backdrop">
          <button
            className="menu-dismiss"
            type="button"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="universe-menu-panel" aria-label="Universe navigation">
            <div className="menu-panel-heading">
              <span>EXPLORE THE ECOSYSTEM</span>
              <span>06 DESTINATIONS</span>
            </div>

            {links.map((link, index) => (
              <a
                className="universe-menu-link"
                href={link.href}
                key={link.name}
                onClick={() => setMenuOpen(false)}
              >
                <span className="menu-link-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="menu-link-copy">
                  <strong>{link.name}</strong>
                  <small>{link.detail}</small>
                </span>
                <ArrowUpRight size={19} />
              </a>
            ))}

            <div className="menu-panel-footer">
              HACKYTECH DIGITALS
              <span>INTELLIGENCE FIRST. BODY SECOND.</span>
            </div>
          </nav>
        </div>
      )}
    </main>
  );
}
