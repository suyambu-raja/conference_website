import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';
import '../SubPage.css';

const SUBMISSION_LINK = 'https://forms.gle/XCEKqZWyvrXVFe1d9';

const GUIDELINES = [
  'Submissions are open for both Oral Paper Presentations and Poster Presentations.',
  'Submit original, unpublished research work aligned with the conference theme.',
  'Papers and posters must not be under review or consideration by any other conference or journal.',
  'All submissions will undergo a peer-review process for quality and relevance.',
  'At least one author of each accepted paper or poster must register and present the work.',
  'Presentations may be made either on-campus or online, as the conference runs in Hybrid Mode.',
];

const Submission = () => {
  return (
    <div className="subpage">
      <Navbar />
      <SubPageHeader title="Submission" />

      <div className="subpage__body">
        <span className="subpage__eyebrow">ICCSB 2026</span>
        <h2 className="subpage__heading">Submit Your Research</h2>
        <div className="subpage__heading-underline" />

        <div className="center">
          <div className="highlight-banner">
            Paper &amp; Poster Submission Deadline:&nbsp;<strong>24 August 2026</strong>
          </div>
        </div>

        <p className="subpage__lead">
          Researchers, academicians, industry professionals, research scholars, and students are invited
          to submit their original research contributions (Papers / Posters) to ICCSB&nbsp;2026 through the official
          submission portal.
        </p>

        <div className="subpage__section" style={{ marginTop: '48px' }}>
          <h2 className="subpage__heading">Submission Guidelines</h2>
          <div className="subpage__heading-underline" />
          <div className="fee-wrap">
            {GUIDELINES.map((g, i) => (
              <div key={i} className="topic-item" style={{ marginBottom: '14px' }}>
                <span className="topic-item__num">{i + 1}</span>
                <span className="topic-item__label">{g}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="subpage__cta">
          <a href={SUBMISSION_LINK} target="_blank" rel="noopener noreferrer" className="subpage__btn">
            Go to Submission Portal →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Submission;
