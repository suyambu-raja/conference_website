import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';

const Submission = () => {
  return (
    <div className="sub-page">
      <Navbar />
      <SubPageHeader title="Submission" />
      <div className="sub-page__content" style={{ padding: '100px 50px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--color-primary)', marginBottom: '30px' }}>Submit Your Research</h2>
        <div style={{
          backgroundColor: '#ffcc00', 
          padding: '20px', 
          borderRadius: '10px', 
          display: 'inline-block', 
          marginBottom: '40px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0', color: '#222', fontSize: '24px' }}>Paper Submission Deadline: <span style={{ color: '#d00', fontWeight: 'bold' }}>June 15, 2026</span></h3>
        </div>
        <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
          Follow our submission guidelines to submit your research to ICCSB 2026. Detailed instructions will be available soon.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Submission;
