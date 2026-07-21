import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';
import registerQr from '../../assets/register-qr.svg';
import '../SubPage.css';

const REGISTER_LINK = 'https://forms.gle/XCEKqZWyvrXVFe1d9';

const INDIAN_FEES = [
  ['UG Students', 'Rs. 300/-'],
  ['PG Students / Research Scholars', 'Rs. 500/-'],
  ['Academicians', 'Rs. 750/-'],
  ['Industry Professionals', 'Rs. 1000/-'],
];

const INTERNATIONAL_FEES = [
  ['International Participants', 'USD 50/-'],
];

const Registration = () => {
  return (
    <div className="subpage">
      <Navbar />
      <SubPageHeader title="Registration" />

      <div className="subpage__body">
        <span className="subpage__eyebrow">ICCSB 2026</span>
        <h2 className="subpage__heading">Register for ICCSB 2026</h2>
        <div className="subpage__heading-underline" />

        <div className="center">
          <div className="highlight-banner">
            Registration Deadline:&nbsp;<strong>31 August 2026</strong>
          </div>
        </div>

        <p className="subpage__lead">
          Registration fees vary by participant category. The fee covers access to all conference sessions,
          the digital conference kit, and inclusion of accepted papers in the proceedings.
        </p>

        <div className="fee-wrap" style={{ marginTop: '40px' }}>
          <div className="fee-block">
            <h3 className="fee-block__title">Indian Participants</h3>
            {INDIAN_FEES.map(([label, price]) => (
              <div key={label} className="fee-row">
                <span className="fee-row__label">{label}</span>
                <span className="fee-row__price">{price}</span>
              </div>
            ))}
          </div>

          <div className="fee-block">
            <h3 className="fee-block__title">International Participants</h3>
            {INTERNATIONAL_FEES.map(([label, price]) => (
              <div key={label} className="fee-row">
                <span className="fee-row__label">{label}</span>
                <span className="fee-row__price">{price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="subpage__cta">
          <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="subpage__btn">
            Register Now →
          </a>
        </div>

        <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="qr-card">
          <img src={registerQr} alt="QR code to register for ICCSB 2026" className="qr-card__img" />
          <span className="qr-card__caption">Scan to Register</span>
          <span className="qr-card__hint">Point your phone camera at the code</span>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Registration;
