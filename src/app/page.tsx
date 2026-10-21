
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Atom,
  BrainCircuit,
  Boxes,
  ChevronRight,
  CircleDot,
  Command,
  Cpu,
  Globe2,
  Layers3,
  Menu,
  Network,
  Orbit,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const destinations = [
  {
    id: "eman",
    name: "EMAN",
    subtitle: "Intelligence engine",
    description:
      "The engine connecting business operations, intelligence, and action.",
    icon: BrainCircuit,
    color: "#65a3ff",
    status: "Exploration mode",
  },
  {
    id: "grey",
    name: "Grey",
    subtitle: "AI orchestration",
    description:
      "An intelligent interface for research, reasoning, and controlled workflows.",
    icon: Orbit,
    color: "#9e8cff",
    status: "Exploration mode",
  },
  {
    id: "businessflow",
    name: "BusinessFlow",
    subtitle: "Business intelligence",
    description:
      "Turn business goals, evidence, and experiments into measurable decisions.",
    icon: Workflow,
    color: "#4df0b5",
    status: "Exploration mode",
  },
  {
    id: "oyosky",
    name: "Oyosky",
    subtitle: "Body-independent intelligence",
    description:
      "Explore the idea of intelligence that can operate across different bodies.",
    icon: Cpu,
    color: "#54e5ff",
    status: "Exploration mode",
  },
];

const pillars = [
  {
    number: "01",
    title: "THINK",
    detail: "Reasoning and intelligence",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "KNOW",
    detail: "Knowledge and memory",
    icon: Layers3,
  },
  {
    number: "03",
    title: "CREATE",
    detail: "Ideas into experiences",
    icon: Atom,
  },
  {
    number: "04",
    title: "ACT",
    detail: "Controlled real-world action",
    icon: Zap,
  },
  {
    number: "05",
    title: "PROTECT",
    detail: "Security and human control",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  const [activeDestination, setActiveDestination] = useState<string | null>(
    null,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const selectedDestination = destinations.find(
    (destination) => destination.id === activeDestination,
  );

  function enterUniverse() {
    document
      .getElementById("worlds")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="universe-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#home"
            aria-label="HackyTech Universe home"
          >
            <span className="brand-mark">
              <Command size={21} strokeWidth={2.2} />
            </span>
            <span className="brand-copy">
              <strong>HACKYTECH</strong>
              <span>UNIVERSE / 001</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a className="nav-link active" href="#home">
              Discover
            </a>
            <a className="nav-link" href="#worlds">
              Worlds
            </a>
            <a className="nav-link" href="#architecture">
              Architecture
            </a>
          </nav>

          <a className="header-cta" href="#worlds">
            Enter the universe <ArrowRight size={15} />
          </a>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>
              Discover
            </a>
            <a href="#worlds" onClick={() => setMobileMenuOpen(false)}>
              Worlds
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
            >
              Architecture
            </a>
          </nav>
        )}
      </header>

      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            An interconnected technology universe
          </div>

          <h1 className="font-display hero-title">
            Technology is not
            <br />
            a collection of tools.
            <br />
            <span className="gradient-text">It is a universe.</span>
          </h1>

          <p className="hero-description">
            Enter the world of HackyTech — where intelligence, software,
            business, and physical systems connect to turn ambitious ideas
            into working experiences.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              type="button"
              onClick={enterUniverse}
            >
              Explore the worlds <ArrowRight size={17} />
            </button>
            <a className="secondary-button" href="#architecture">
              Discover the architecture
            </a>
          </div>

          <div className="hero-footnote">
            <Globe2 size={15} />
            <span>Designed for a connected future</span>
            <span className="footnote-divider" />
            <span>Mobile first. Built to scale.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Universe visualization preview">
          <div className="visual-topline">
            <span>
              <CircleDot size={12} /> UNIVERSE VIEWPORT
            </span>
            <span>PREVIEW / 001</span>
          </div>

          <div className="orbit-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="central-core">
              <div className="core-inner">
                <Command size={42} strokeWidth={1.4} />
              </div>
            </div>

            <div className="orbit-node node-blue">
              <BrainCircuit size={20} />
            </div>
            <div className="orbit-node node-green">
              <Workflow size={19} />
            </div>
            <div className="orbit-node node-purple">
              <Orbit size={19} />
            </div>
            <div className="orbit-node node-cyan">
              <Cpu size={19} />
            </div>

            <span className="visual-star star-one" />
            <span className="visual-star star-two" />
            <span className="visual-star star-three" />
            <span className="visual-star star-four" />
            <span className="visual-star star-five" />

            <div className="floating-label label-top">
              <span className="label-indicator" />
              INTELLIGENCE
            </div>
            <div className="floating-label label-bottom">
              <Network size={13} /> CONNECTED SYSTEMS
            </div>
          </div>

          <div className="visual-bottomline">
            <span>HACKYTECH / CORE</span>
            <span>
              <Sparkles size={13} /> EXPLORATION MODE
            </span>
          </div>
        </div>

        <a className="scroll-cue" href="#worlds">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} />
        </a>
      </section>

      <section className="worlds-section section-spacing" id="worlds">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE ECOSYSTEM</span>
              <h2 className="font-display section-title">
                Four worlds. <span className="gradient-text">One vision.</span>
              </h2>
            </div>
            <p>
              Explore the foundations of an ecosystem designed to connect
              intelligence with practical work.
            </p>
          </div>

          <div className="world-grid">
            {destinations.map((destination, index) => {
              const Icon = destination.icon;

              return (
                <button
                  className={`world-card ${activeDestination === destination.id ? "world-card-selected" : ""}`}
                  key={destination.id}
                  type="button"
                  onClick={() =>
                    setActiveDestination((current) =>
                      current === destination.id ? null : destination.id,
                    )
                  }
                  aria-expanded={activeDestination === destination.id}
                >
                  <div className="world-card-top">
                    <span className="world-number">
                      WORLD / 0{index + 1}
                    </span>
                    <span
                      className="world-icon"
                      style={{
                        color: destination.color,
                        borderColor: `${destination.color}40`,
                        backgroundColor: `${destination.color}10`,
                      }}
                    >
                      <Icon size={22} />
                    </span>
                  </div>

                  <div className="world-card-content">
                    <span className="world-subtitle">
                      {destination.subtitle}
                    </span>
                    <h3 className="font-display">{destination.name}</h3>
                    <p>{destination.description}</p>
                  </div>

                  <div className="world-card-footer">
                    <span>
                      <span className="status-dot" />
                      {destination.status}
                    </span>
                    <ChevronRight
                      size={18}
                      className="world-arrow"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {selectedDestination && (
            <div className="destination-detail glass-panel">
              <div>
                <span className="eyebrow">WORLD SELECTED</span>
                <h3 className="font-display">
                  {selectedDestination.name}
                </h3>
                <p>{selectedDestination.description}</p>
                <span className="detail-note">
                  This is an exploration preview, not a live backend connection.
                </span>
              </div>
              <button
                className="secondary-button"
                type="button"
                onClick={() => setActiveDestination(null)}
              >
                Close preview <X size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      <section
        className="architecture-section section-spacing"
        id="architecture"
      >
        <div className="container">
          <div className="architecture-intro">
            <span className="eyebrow">THE OPERATING PRINCIPLE</span>
            <h2 className="font-display section-title">
              Intelligence with
              <br />
              <span className="gradient-text">purpose and control.</span>
            </h2>
            <p>
              HackyTech connects reasoning, knowledge, creation, and action
              under one principle: powerful systems must remain understandable,
              secure, and under human control.
            </p>
          </div>

          <div className="pillar-list">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div className="pillar-row" key={pillar.number}>
                  <span className="pillar-number">{pillar.number}</span>
                  <span className="pillar-icon">
                    <Icon size={19} />
                  </span>
                  <strong>{pillar.title}</strong>
                  <span className="pillar-detail">{pillar.detail}</span>
                  <ArrowRight size={16} className="pillar-arrow" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="closing-section container">
        <div className="closing-panel glass-panel">
          <div className="closing-icon">
            <Boxes size={25} />
          </div>
          <div>
            <span className="eyebrow">THE NEXT FRONTIER</span>
            <h2 className="font-display">
              The universe is taking shape.
            </h2>
            <p>
              One connected system at a time. Explore the worlds and discover
              what we can build.
            </p>
          </div>
          <button
            className="primary-button"
            type="button"
            onClick={enterUniverse}
          >
            Explore worlds <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#home">
            <Command size={16} />
            HACKYTECH UNIVERSE
          </a>
          <span>Ideas into systems. Systems into possibilities.</span>
          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
