import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';

const Registration = () => {
  return (
    <div className="sub-page">
      <Navbar />
      <SubPageHeader title="Registration" />
      <div className="sub-page__content" style={{ padding: '100px 50px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--color-primary)', marginBottom: '30px' }}>Register for ICCSB 2026</h2>
        
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '24px', color: '#222', marginBottom: '20px' }}>Registration Deadline: <span style={{ color: 'var(--color-primary)' }}>July 10, 2026</span></h3>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '28px', color: 'var(--color-primary)', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px', marginBottom: '25px' }}>Registration Fees</h3>
          
          <div style={{ marginBottom: '35px' }}>
            <h4 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>Indian Participants</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
              <span>Presenting Author</span>
              <span style={{ fontWeight: 'bold' }}>Rs. 1000/-</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
              <span>Listener</span>
              <span style={{ fontWeight: 'bold' }}>Rs. 500/-</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>International Participants</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
              <span>Presenting Author</span>
              <span style={{ fontWeight: 'bold' }}>USD. 50/-</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
              <span>Listener</span>
              <span style={{ fontWeight: 'bold' }}>USD. 25/-</span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginTop: '40px' }}>
          Follow the registration process once the portal opens. For any queries, please visit the Contact page.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
