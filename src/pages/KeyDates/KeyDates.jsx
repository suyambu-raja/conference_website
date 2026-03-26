import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const KeyDates = () => {
  return (
    <div className="sub-page">
      <Navbar />
      <SubPageHeader title="Key Dates" />
      <div className="sub-page__content" style={{ padding: '100px 50px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--color-primary)', marginBottom: '40px', textAlign: 'center' }}>Important Deadlines</h2>
        <div style={{ display: 'grid', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontSize: '20px', color: '#222', fontWeight: '800' }}>Paper Submission</span>
                <span style={{ fontSize: '20px', color: 'var(--color-primary)', fontWeight: '800' }}>June 15, 2026</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontSize: '20px', color: '#222', fontWeight: '800' }}>Acceptance Notification</span>
                <span style={{ fontSize: '20px', color: 'var(--color-primary)', fontWeight: '800' }}>June 25, 2026</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontSize: '20px', color: '#222', fontWeight: '800' }}>Registration Deadline</span>
                <span style={{ fontSize: '20px', color: 'var(--color-primary)', fontWeight: '800' }}>July 10, 2026</span>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KeyDates;
