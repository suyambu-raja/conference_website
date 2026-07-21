import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';
import '../SubPage.css';

const COORDINATORS = [
  {
    icon: '👩‍🏫',
    name: 'Dr. Soumya. T. R',
    role: 'Coordinator · Associate Professor / CSE',
    phone: '9003285822',
  },
  {
    icon: '👨‍🏫',
    name: 'Dr. Gurumurthi. T',
    role: 'Co-Coordinator · Associate Professor / Physics',
    phone: '8056228073',
  },
];

const Contact = () => {
  return (
    <div className="subpage">
      <Navbar />
      <SubPageHeader title="Contact" />

      <div className="subpage__body">
        <span className="subpage__eyebrow">ICCSB 2026</span>
        <h2 className="subpage__heading">Get In Touch</h2>
        <div className="subpage__heading-underline" />
        <p className="subpage__lead">
          For any inquiries related to the conference, paper submission, or registration, please reach out
          to the organizing coordinators or write to us by email.
        </p>

        <div className="contact-grid" style={{ marginTop: '48px' }}>
          {COORDINATORS.map((c) => (
            <div key={c.name} className="contact-card">
              <div className="contact-card__icon">{c.icon}</div>
              <div className="contact-card__name">{c.name}</div>
              <div className="contact-card__role">{c.role}</div>
              <p className="contact-card__line">
                <a href={`tel:+91${c.phone}`}>📞 +91 {c.phone}</a>
              </p>
            </div>
          ))}

          <div className="contact-card">
            <div className="contact-card__icon">📧</div>
            <div className="contact-card__name">Email &amp; Web</div>
            <div className="contact-card__role">Conference Secretariat</div>
            <p className="contact-card__line">
              <a href="mailto:iccsb2026@prathyusha.edu.in">iccsb2026@prathyusha.edu.in</a><br />
              <a href="https://www.prathyusha.edu.in" target="_blank" rel="noopener noreferrer">www.prathyusha.edu.in</a>
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="info-card">
            <div className="info-card__title">📍 Address</div>
            <p className="info-card__text">
              Department of Computer Science &amp; Engineering and Department of Physics,<br />
              Prathyusha Engineering College (Autonomous),<br />
              Poonamallee&ndash;Tiruvallur Road, Tiruvallur &ndash; 602025, Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
