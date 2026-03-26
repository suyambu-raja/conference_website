import { useState } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Conference', href: '#conference', dropdown: true },
  { label: 'Call for Papers', href: '#call-for-papers' },
  { label: 'Submission', href: '#submission' },
  { label: 'Publication', href: '#publication' },
  { label: 'Registration', href: '#registration' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      {/* Brand / Logo */}
      <a href="#" className="navbar__brand">
        <div className="navbar__logo">
          ICCSB
        </div>
        <span className="navbar__title">ICCSB 2026</span>
      </a>

      {/* Mobile hamburger */}
      <button
        className="navbar__mobile-toggle"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      {/* Nav Links */}
      <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`navbar__link ${item.active ? 'navbar__link--active' : ''} ${item.dropdown ? 'navbar__link--dropdown' : ''}`}
            >
              {item.label}
              {item.dropdown && <span className="navbar__dropdown-arrow">▾</span>}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a href="#submission" className="navbar__cta">
        Submission <span className="navbar__cta-arrow">→</span>
      </a>
    </nav>
  );
}

export default Navbar;
