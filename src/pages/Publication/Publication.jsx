import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';
import '../SubPage.css';

const Publication = () => {
  return (
    <div className="subpage">
      <Navbar />
      <SubPageHeader title="Publication" />

      <div className="subpage__body">
        <span className="subpage__eyebrow">ICCSB 2026</span>
        <h2 className="subpage__heading">Publication Details</h2>
        <div className="subpage__heading-underline" />

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="info-card">
            <div className="info-card__title">📘 Conference Proceedings</div>
            <p className="info-card__text">
              All accepted articles will be published in the conference proceedings with an ISBN.
            </p>
          </div>

          <div className="info-card">
            <div className="info-card__title">🏅 Indexed Journals</div>
            <p className="info-card__text">
              Selected and extended papers will be recommended for publication in WoS/Scopus-indexed
              journals, subject to the journal&rsquo;s review process and with the author&rsquo;s consent.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Publication;
