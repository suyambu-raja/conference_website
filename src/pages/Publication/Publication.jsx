import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';

const Publication = () => {
  return (
    <div className="sub-page">
      <Navbar />
      <SubPageHeader title="Publication" />
      <div className="sub-page__content" style={{ padding: '100px 50px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: 'var(--color-primary)', marginBottom: '30px' }}>Publication Details</h2>
        <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
          Accepted papers will be published in prestigious journals and proceedings. Detailed publication information will be updated soon.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Publication;
