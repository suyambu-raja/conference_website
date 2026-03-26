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
            ICCSB 2026 is a premier international forum for researchers, engineers, and practitioners to share findings in the fields of Computing, Business Intelligence, and Engineering Technologies. Organized by the Prathyusha Engineering College.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social-link" title="LinkedIn" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="footer__social-link" title="Twitter" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.162c-.427.733-.666 1.576-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
            </a>
            <a href="#" className="footer__social-link" title="Facebook" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer__column">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            <li><a href="#hero" className="footer__link">Home</a></li>
            <li><a href="#about" className="footer__link">About Conference</a></li>
            <li><a href="#deadlines" className="footer__link">Important Dates</a></li>
            <li><a href="#submission" className="footer__link">Paper Submission</a></li>
            <li><a href="#" className="footer__link">Registration</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="footer__column">
          <h3 className="footer__heading">Resources</h3>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">Templates</a></li>
            <li><a href="#" className="footer__link">Guidelines</a></li>
            <li><a href="#" className="footer__link">Speakers</a></li>
            <li><a href="#" className="footer__link">Past Conferences</a></li>
            <li><a href="#" className="footer__link">Contact Support</a></li>
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="footer__column">
          <h3 className="footer__heading">Contact Us</h3>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📍</span>
            <span>Prathyusha Engineering College,<br />Thiruvallur, Tamil Nadu, India.</span>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📧</span>
            <span>iccsb2026@kiot.ac.in</span>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📞</span>
            <span>+91 12345 67890</span>
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
