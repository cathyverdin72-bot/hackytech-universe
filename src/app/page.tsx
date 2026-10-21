
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
import UniverseScene from "@/components/UniverseScene";

const worlds = [
  {
    id: "eman",
    number: "01",
    name: "EMAN",
    category: "INTELLIGENCE ENGINE",
    description:
      "The engine behind connected business intelligence, reasoning, and coordinated work.",
    status: "CORE ENGINE",
    icon: BrainCircuit,
    color: "blue",
    capabilities: ["Reasoning", "Coordination", "Integrations"],
  },
  {
    id: "grey",
    number: "02",
    name: "Grey",
    category: "AI WORKSPACE",
    description:
      "A human-facing AI workspace designed to research, think, create, and execute with oversight.",
    status: "AI WORKSPACE",
    icon: Atom,
    color: "violet",
    capabilities: ["Research", "Creation", "Human approval"],
  },
  {
    id: "businessflow",
    number: "03",
    name: "BusinessFlow",
    category: "BUSINESS INTELLIGENCE",
    description:
      "Turn business questions into evidence, experiments, decisions, and measurable action.",
    status: "BUSINESS SYSTEM",
    icon: Workflow,
    color: "green",
    capabilities: ["Understand", "Decide", "Improve"],
  },
  {
    id: "oyosky",
    number: "04",
    name: "Oyosky",
    category: "BODY-INDEPENDENT INTELLIGENCE",
    description:
      "Explore the long-term vision for intelligence that can operate across different bodies and environments.",
    status: "RESEARCH",
    icon: Orbit,
    color: "cyan",
    capabilities: ["Resilience", "Adaptation", "Recovery"],
  },
];

const principles = [
  {
    number: "01",
    title: "THINK",
    description: "Reason through problems before taking action.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "KNOW",
    description: "Organize knowledge and preserve useful context.",
    icon: Network,
  },
  {
    number: "03",
    title: "CREATE",
    description: "Transform ideas into practical digital systems.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "ACT",
    description: "Execute defined tasks through controlled workflows.",
    icon: Zap,
  },
  {
    number: "05",
    title: "PROTECT",
    description: "Keep permissions, security, and human oversight in view.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedWorld, setSelectedWorld] = useState("eman");

  const activeWorld =
    worlds.find((world) => world.id === selectedWorld) ?? worlds[0];

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMobileMenuOpen(false);
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#overview"
          aria-label="HackyTech Universe home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="brand-mark">
            <Command size={22} strokeWidth={2.2} />
          </span>
          <span className="brand-copy">
            <strong>HACKYTECH</strong>
            <span>THE UNIVERSE</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#overview">Overview</a>
          <a href="#worlds">Explore worlds</a>
          <a href="#architecture">Architecture</a>
        </nav>

        <button
          className="header-cta"
          type="button"
          onClick={() => scrollToSection("worlds")}
        >
          Explore universe <ArrowRight size={15} />
        </button>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {mobileMenuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <button type="button" onClick={() => scrollToSection("overview")}>
              Overview <ChevronRight size={17} />
            </button>
            <button type="button" onClick={() => scrollToSection("worlds")}>
              Explore worlds <ChevronRight size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("architecture")}
            >
              Architecture <ChevronRight size={17} />
            </button>
          </nav>
        )}
      </header>

      <section className="hero-section" id="overview">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            AN INTERACTIVE TECHNOLOGY ECOSYSTEM
          </div>

          <h1>
            Intelligence,
            <br />
            <span>in a universe</span>
            <br />
            of its own.
          </h1>

          <p className="hero-description">
            Enter the HackyTech Universe — a connected ecosystem of intelligent
            systems, experimental technology, and practical tools built to turn
            ideas into action.
          </p>

          <div className="hero-actions">
            <button
              className="button-primary"
              type="button"
              onClick={() => scrollToSection("worlds")}
            >
              Explore the worlds <ArrowRight size={17} />
            </button>
            <button
              className="button-secondary"
              type="button"
              onClick={() => scrollToSection("architecture")}
            >
              Discover the architecture <ArrowDown size={16} />
            </button>
          </div>

          <div className="hero-proof">
            <div className="proof-icon">
              <Globe2 size={18} />
            </div>
            <div>
              <strong>One connected vision</strong>
              <span>Intelligence · Infrastructure · Impact</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-topline">
            <span>
              <CircleDot size={12} /> UNIVERSE CORE
            </span>
            <span className="live-indicator">
              <span className="status-dot" /> 3D EXPERIENCE
            </span>
          </div>

          <div className="orbit-visual">
            <UniverseScene />
            <div className="floating-label label-top">
              <span className="label-pulse" />
              <span>
                <strong>INTELLIGENCE</strong>
                <small>Core systems</small>
              </span>
            </div>
            <div className="floating-label label-bottom">
              <span className="label-pulse label-pulse-green" />
              <span>
                <strong>CONNECTED WORLDS</strong>
                <small>One evolving ecosystem</small>
              </span>
            </div>
          </div>

          <div className="visual-bottomline">
            <span>
              <span className="mini-square" /> INTERACTIVE 3D
            </span>
            <span>TOUCH · ROTATE · EXPLORE</span>
          </div>
        </div>
      </section>

      <section className="ecosystem-section section-block" id="worlds">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="section-index">01</span> THE ECOSYSTEM
            </div>
            <h2>
              Four worlds.
              <br />
              <span>One direction.</span>
            </h2>
          </div>
          <p>
            Each world has a distinct purpose. Explore how the pieces fit
            together, then select a world to inspect its role.
          </p>
        </div>

        <div className="world-grid">
          {worlds.map((world) => {
            const Icon = world.icon;
            const isSelected = selectedWorld === world.id;

            return (
              <button
                className={`world-card world-${world.color}${isSelected ? " is-selected" : ""}`}
                key={world.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedWorld(world.id)}
              >
                <div className="world-card-top">
                  <span className="world-number">{world.number}</span>
                  <span className="world-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </span>
                </div>

                <span className="world-category">{world.category}</span>
                <h3>{world.name}</h3>
                <p>{world.description}</p>

                <span className="world-card-bottom">
                  <span>{world.status}</span>
                  <ArrowRight size={17} />
                </span>
              </button>
            );
          })}
        </div>

        <div className={`world-detail world-${activeWorld.color}`}>
          <div className="detail-icon">
            <activeWorld.icon size={24} />
          </div>
          <div className="detail-main">
            <span className="detail-kicker">WORLD SELECTED / {activeWorld.number}</span>
            <h3>{activeWorld.name}</h3>
            <p>{activeWorld.description}</p>
            <div className="capability-list">
              {activeWorld.capabilities.map((capability) => (
                <span key={capability}>
                  <span className="status-dot" />
                  {capability}
                </span>
              ))}
            </div>
          </div>
          <div className="detail-status">
            <span className="detail-status-label">CURRENT EXPERIENCE</span>
            <strong>Exploration preview</strong>
            <span>Backend integration not connected</span>
          </div>
        </div>
      </section>

      <section className="architecture-section section-block" id="architecture">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="section-index">02</span> THE DESIGN PHILOSOPHY
            </div>
            <h2>
              Built to think.
              <br />
              <span>Designed to act.</span>
            </h2>
          </div>
          <p>
            The long-term architecture connects reasoning, knowledge, creation,
            execution, and protection — without hiding the boundaries between
            a concept and a working capability.
          </p>
        </div>

        <div className="architecture-panel">
          <div className="architecture-intro">
            <div className="architecture-symbol">
              <Layers3 size={27} />
            </div>
            <div>
              <span className="detail-kicker">THE HACKYTECH MODEL</span>
              <h3>Five connected principles</h3>
              <p>
                A practical framework for building intelligent, accountable
                technology.
              </p>
            </div>
          </div>

          <div className="principle-list">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div className="principle-row" key={principle.number}>
                  <span className="principle-number">{principle.number}</span>
                  <span className="principle-icon">
                    <Icon size={19} />
                  </span>
                  <div className="principle-copy">
                    <strong>{principle.title}</strong>
                    <span>{principle.description}</span>
                  </div>
                  <ChevronRight className="principle-chevron" size={18} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-glow" />
        <div className="closing-content">
          <div className="eyebrow">
            <span className="status-dot" /> THE NEXT FRONTIER
          </div>
          <h2>
            Not just technology.
            <br />
            <span>A world being built.</span>
          </h2>
          <p>
            Explore the systems. Understand the connections. Watch the vision
            become working technology, one validated step at a time.
          </p>
          <button
            className="button-primary"
            type="button"
            onClick={() => scrollToSection("overview")}
          >
            Return to the universe <ArrowRight size={17} />
          </button>
        </div>
        <div className="closing-emblem">
          <Cpu size={58} strokeWidth={1} />
          <span>HACKYTECH</span>
          <small>INTELLIGENCE FIRST</small>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#overview">
          <span className="brand-mark">
            <Command size={18} />
          </span>
          <span>HACKYTECH UNIVERSE</span>
        </a>
        <span>Explore boldly. Build responsibly.</span>
        <span className="footer-note">
          <Boxes size={14} /> A living technology vision
        </span>
      </footer>
    </main>
  );
}
