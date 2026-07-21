import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';
import '../SubPage.css';

const Venue = () => {
  return (
    <div className="subpage">
      <Navbar />
      <SubPageHeader title="Venue and Location" />

      <div className="subpage__body">
        <span className="subpage__eyebrow">Hybrid Mode</span>
        <h2 className="subpage__heading">Conference Venue</h2>
        <div className="subpage__heading-underline" />
        <p className="subpage__lead">
          ICCSB&nbsp;2026 will be conducted in Hybrid Mode. On-campus sessions will be held at Prathyusha
          Engineering College, while remote participants can join and present online.
        </p>

        <div style={{ maxWidth: '860px', margin: '40px auto 0' }}>
          <div className="info-card">
            <div className="info-card__title">📍 Prathyusha Engineering College (Autonomous)</div>
            <p className="info-card__text">
              Poonamallee&ndash;Tiruvallur Road, Tiruvallur &ndash; 602025, Tamil Nadu, India.<br />
              NAAC &lsquo;A&rsquo; Grade Institution &amp; NBA-Accredited Programmes.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '960px', margin: '30px auto 0' }}>
          <iframe
            title="Prathyusha Engineering College location map"
            className="venue-map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Prathyusha%20Engineering%20College%2C%20Tiruvallur&output=embed"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Venue;
