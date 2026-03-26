import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Conference',
    href: '#',
    dropdown: true,
    submenu: [
      { label: 'Committee', href: '/committee' },
      { label: 'Keynote', href: '/keynote' },
      { label: 'Venue', href: '/venue' },
      { label: 'Key Dates', href: '/key-dates' },
    ],
  },
  { label: 'Call for Papers', href: '/call-for-papers' },
  { label: 'Submission', href: '/submission' },
  { label: 'Publication', href: '/publication' },
  { label: 'Registration', href: '/registration' },
  { label: 'Contact', href: '/contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  }

  // Helper to determine active state
  const isItemActive = (item) => {
    if (item.dropdown) {
      return item.submenu.some(sub => location.pathname === sub.href);
    }
    return location.pathname === item.href;
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__main">
        {/* Brand / Logo */}
        <Link to="/" className="navbar__brand">
          <div className="navbar__logo">
            ICCSB
          </div>
          <span className="navbar__title">ICCSB 2026</span>
        </Link>

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
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            return (
              <li 
                key={item.label} 
                className={item.dropdown ? 'navbar__dropdown-container' : ''}
                ref={item.dropdown ? dropdownRef : null}
              >
                <div className="navbar__link-wrapper">
                  {item.href.startsWith('#') || (item.href.includes('#') && item.href !== '/') ? (
                    <a
                        href={item.href}
                        className={`navbar__link ${active ? 'navbar__link--active' : ''} ${item.dropdown ? 'navbar__link--dropdown' : ''}`}
                        onClick={(e) => {
                            if (item.dropdown) {
                                toggleDropdown(e);
                            } else {
                                setMobileOpen(false);
                            }
                        }}
                    >
                        {item.label}
                    </a>
                  ) : (
                    <Link
                        to={item.href}
                        className={`navbar__link ${active ? 'navbar__link--active' : ''} ${item.dropdown ? 'navbar__link--dropdown' : ''}`}
                        onClick={() => {
                            setMobileOpen(false);
                            setDropdownOpen(false);
                        }}
                    >
                        {item.label}
                    </Link>
                  )}
                  {item.dropdown && (
                    <button 
                      className={`navbar__dropdown-arrow ${dropdownOpen ? 'navbar__dropdown-arrow--open' : ''}`}
                      onClick={toggleDropdown}
                      aria-label="Toggle Submenu"
                    >
                      ▾
                    </button>
                  )}
                </div>

                {item.dropdown && dropdownOpen && (
                  <ul className="navbar__dropdown-card">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <Link 
                          to={sub.href} 
                          className={`navbar__dropdown-item ${location.pathname === sub.href ? 'navbar__dropdown-item--active' : ''}`} 
                          onClick={() => {
                            setDropdownOpen(false);
                            setMobileOpen(false);
                          }}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <Link to="/submission" className="navbar__cta">
          Submission <span className="navbar__cta-arrow">→</span>
        </Link>
      </div>

      <div className="navbar__college-bar">
        PRATHYUSHA ENGINEERING COLLEGE
      </div>
    </nav>
  );
}

export default Navbar;
