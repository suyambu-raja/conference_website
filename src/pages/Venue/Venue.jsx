import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Venue = () => {
  return (
    <div className="sub-page">
      <Navbar />
      <SubPageHeader title="Venue and Location" />
      <div className="sub-page__content" style={{ padding: '100px 50px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--color-primary)', marginBottom: '30px' }}>Our Location</h2>
        <div style={{ padding: '40px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'left', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '24px', color: '#222', marginBottom: '15px' }}>Conference Host</h3>
          <p style={{ fontSize: '18px', color: '#444' }}>Our institution's campus provides state-of-the-art facilities for ICCSB 2026. Detailed maps and accommodation info will be available here.</p>
        </div>
        <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>We provide full details about travel arrangements, parking, and nearby hotels once the final event logistics are confirmed.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Venue;
