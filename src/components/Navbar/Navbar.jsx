import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import clgLogo from '../../assets/clgLogo.png';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Conference',
    href: '#',
    dropdown: true,
    submenu: [
      { label: 'Committee', href: '/committee' },
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

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
          <img src={clgLogo} alt="College Logo" className="navbar__brand-logo" />
          <div className="navbar__brand-text">
            <h1 className="navbar__college-name">PRATHYUSHA ENGINEERING COLLEGE</h1>
            <p className="navbar__college-tagline">AN AUTONOMOUS INSTITUTION</p>
          </div>
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`navbar__mobile-toggle ${mobileOpen ? 'navbar__mobile-toggle--open' : ''}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Backdrop */}
        <div 
          className={`navbar__backdrop ${mobileOpen ? 'navbar__backdrop--open' : ''}`} 
          onClick={() => setMobileOpen(false)} 
        />

        {/* Nav Links */}
        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {NAV_ITEMS.map((item, index) => {
            const active = isItemActive(item);
            return (
              <li 
                key={item.label} 
                className={item.dropdown ? 'navbar__dropdown-container' : ''}
                ref={item.dropdown ? dropdownRef : null}
                style={{ '--nav-index': index }}
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

                {item.dropdown && (
                  <ul className={`navbar__dropdown-card ${dropdownOpen ? 'navbar__dropdown-card--open' : ''}`}>
                    {item.submenu.map((sub, index) => (
                      <li key={sub.label} style={{ '--item-index': index }}>
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
      </div>
    </nav>
  );
}

export default Navbar;
