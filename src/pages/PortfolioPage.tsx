import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data/portfolio';
import {
  AboutSection,
  ContactCTA,
  ExperienceTimeline,
  HeroSection,
  OpenSourceSection,
  ProjectGrid,
  SkillsCloud,
} from '../components/PortfolioSections';
import './portfolio.css';

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    { href: '/#about', label: 'About' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#experience', label: 'Experience' },
  ];

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label={`${profile.name}, home`} onClick={closeMenu}>
        <span className="wordmark-mark"><b>YP</b><i aria-hidden="true" /></span>
        <span className="wordmark-name">{profile.name}<small>DEVELOPER · DIGITAL DELIVERY</small></span>
      </a>
      <nav className={`site-nav ${menuOpen ? 'site-nav-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
        {navItems.map((item) => <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>)}
        <a className="mobile-nav-contact" href="/#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></a>
      </nav>
      <a className="header-contact" href="/#contact">Let’s talk <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-controls="primary-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}

export default function PortfolioPage() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <SkillsCloud />
        <ProjectGrid />
        <OpenSourceSection />
        <ExperienceTimeline />
        <ContactCTA />
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#top"><span className="wordmark-mark"><b>YP</b><i aria-hidden="true" /></span><span className="wordmark-name">{profile.name}<small>DEVELOPER · DIGITAL DELIVERY</small></span></a>
        <span className="footer-note">MADE WITH CURIOSITY <i>·</i> INDIA</span>
        <div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={13} /></a><a href="#top">Back to top <ArrowRight size={13} /></a></div>
      </footer>
    </div>
  );
}

