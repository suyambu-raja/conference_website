import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';
import '../SubPage.css';

const DATES = [
  ['Paper Submission', '17 August 2026'],
  ['Acceptance Notification', '24 August 2026'],
  ['Registration Deadline', '31 August 2026'],
  ['Conference Dates', '10 & 11 September 2026'],
];

const KeyDates = () => {
  return (
    <div className="subpage">
      <Navbar />
      <SubPageHeader title="Key Dates" />

      <div className="subpage__body">
        <span className="subpage__eyebrow">ICCSB 2026 · Hybrid Mode</span>
        <h2 className="subpage__heading">Important Dates</h2>
        <div className="subpage__heading-underline" />
        <p className="subpage__lead">
          Mark these deadlines to be part of ICCSB&nbsp;2026. Authors are encouraged to submit early.
        </p>

        <div className="date-list" style={{ marginTop: '44px' }}>
          {DATES.map(([label, value]) => (
            <div key={label} className="date-row">
              <span className="date-row__label">{label}</span>
              <span className="date-row__value">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KeyDates;
