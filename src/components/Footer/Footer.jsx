import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        {/* About Column */}
        <div className="footer__column">
          <h2 className="footer__logo">ICCSB — 2026</h2>
          <p className="footer__text">
            AICTE-Sponsored International Conference on Innovations, Technological Breakthroughs &amp; Applications in Computational Biophysics, Synthetic Biology &amp; Biomanufacturing. Organized by the Departments of CSE &amp; Physics, Prathyusha Engineering College (Autonomous), Tiruvallur.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer__column">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            <li><Link to="/" className="footer__link">Home</Link></li>
            <li><Link to="/committee" className="footer__link">Committee</Link></li>
            <li><Link to="/key-dates" className="footer__link">Key Dates</Link></li>
            <li><Link to="/call-for-papers" className="footer__link">Call for Papers</Link></li>
            <li><Link to="/registration" className="footer__link">Registration</Link></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="footer__column">
          <h3 className="footer__heading">Resources</h3>
          <ul className="footer__links">
            <li><Link to="/submission" className="footer__link">Paper Submission</Link></li>
            <li><Link to="/publication" className="footer__link">Publication</Link></li>
            <li><Link to="/venue" className="footer__link">Venue</Link></li>
            <li><Link to="/brochure" className="footer__link">Brochure</Link></li>
            <li><Link to="/contact" className="footer__link">Contact</Link></li>
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="footer__column">
          <h3 className="footer__heading">Contact Us</h3>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📍</span>
            <span>Prathyusha Engineering College,<br />Poonamallee&ndash;Tiruvallur Road,<br />Tiruvallur &ndash; 602025, Tamil Nadu, India.</span>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📧</span>
            <a href="mailto:iccsb2026@prathyusha.edu.in" className="footer__link">iccsb2026@prathyusha.edu.in</a>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📞</span>
            <a href="tel:+919003285822" className="footer__link">+91 90032 85822</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} ICCSB 2026. All rights reserved. Organized by the Department of CSE and Physics.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

