import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Committee = () => {
  return (
    <div className="sub-page">
      <Navbar />
      <SubPageHeader title="Committee" />
      <div className="sub-page__content" style={{ padding: '100px 50px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--color-primary)', marginBottom: '30px' }}>Organizing Committee</h2>
        <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
          Welcome to the ICCSB 2026 Organizing Committee page. Content for our esteemed committee members will be updated soon.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Committee;
