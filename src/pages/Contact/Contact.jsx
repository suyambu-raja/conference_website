import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  return (
    <div className="sub-page">
      <Navbar />
      <SubPageHeader title="Contact" />
      <div className="sub-page__content" style={{ padding: '100px 50px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--color-primary)', marginBottom: '30px' }}>Get In Touch</h2>
        <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
          For any inquiries related to the conference, please reach out to us. Detailed contact information for organizers will be listed here soon.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
