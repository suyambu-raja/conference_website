import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';

const CallForPapers = () => {
  return (
    <div className="sub-page">
      <Navbar />
      <SubPageHeader title="Call For Papers" />
      <div className="sub-page__content" style={{ padding: '100px 50px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--color-primary)', marginBottom: '30px' }}>Scope & Topics</h2>
        
        <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
          Welcome to the ICCSB 2026 Call for Papers. We invite original research submissions in various areas of Computer Systems and Biometrics.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CallForPapers;
