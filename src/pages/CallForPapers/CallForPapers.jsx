import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';
import '../SubPage.css';

const SUBMISSION_LINK = 'https://forms.gle/XCEKqZWyvrXVFe1d9';

const TOPICS = [
  'AI for Biological Systems',
  'Computational Drug Discovery',
  'Medical Image Analysis',
  'Bioprocessing and Sustainable Biomanufacturing',
  'Biomedical Signal Processing',
  'Healthcare Data Analytics',
  'Synthetic Gene Circuits',
  'Protein Dynamics and Folding',
  'Computational and Theoretical Biophysics',
  'Biophotonics',
  'Medical and Radiation Physics',
  'Nanophysics for Healthcare',
  'Structural Biology and Biomolecular Structure',
  'Industrial and Environmental Biotechnology',
  'Molecular Biology and Genetics',
];

const CallForPapers = () => {
  return (
    <div className="subpage">
      <Navbar />
      <SubPageHeader title="Call For Papers" />

      <div className="subpage__body">
        <span className="subpage__eyebrow">AICTE Sponsored · Hybrid Mode · Oral &amp; Poster Presentations · 10 &amp; 11 September 2026</span>
        <h2 className="subpage__heading">About the Conference</h2>
        <div className="subpage__heading-underline" />

        <div className="subpage__announcement-banner">
          <span className="announcement-icon">📢</span>
          <div>
            <strong>Presentations:</strong> Both <strong>Oral Paper Presentations</strong> and <strong>Poster Presentations</strong> are accepted and available for all registered tracks.
          </div>
        </div>

        <p className="subpage__lead">
          This conference aims to bring together researchers, academicians, industry professionals,
          scientists, and students to share their latest research, innovations, and technological
          applications in computational biophysics, synthetic biology, and biomanufacturing. It provides
          a dynamic platform to discuss emerging trends, interdisciplinary research, and sustainable
          solutions for healthcare, pharmaceuticals, agriculture, and industry.
        </p>

        <div className="subpage__section" style={{ marginTop: '56px' }}>
          <h2 className="subpage__heading">Topics</h2>
          <div className="subpage__heading-underline" />
          <div className="topics-grid">
            {TOPICS.map((topic, i) => (
              <div key={topic} className="topic-item">
                <span className="topic-item__num">{i + 1}</span>
                <span className="topic-item__label">{topic}</span>
              </div>
            ))}
          </div>
          <p className="topics-note">
            * The conference is not limited to the above-listed topics. Authors are encouraged to submit
            original research papers on relevant topics aligned with the conference theme.
          </p>
        </div>

        <div className="subpage__cta">
          <a href={SUBMISSION_LINK} target="_blank" rel="noopener noreferrer" className="subpage__btn">
            Submit Your Paper →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CallForPapers;
