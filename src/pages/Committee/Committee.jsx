import Navbar from '../../components/Navbar/Navbar';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Footer from '../../components/Footer/Footer';
import '../SubPage.css';

const LEADERSHIP = [
  { name: 'Shri. P. Raja Rao', role: 'Founder & Chairman', group: 'Chief Patron' },
  { name: 'Shri. P. Charan Teja', role: 'Vice Chairman', group: 'Chief Patron' },
  { name: 'Smt. P. Prathyusha', role: 'CEO', group: 'Chief Patron' },
];

const PATRON = { name: 'Dr. P.L.N Ramesh', role: 'Principal' };

const CONVENORS = [
  { name: 'Dr. Thamba Meshach. W', role: 'Convenor', affil: 'Professor & HOD – CSE' },
  { name: 'Ms. Sridevi. D', role: 'Co-Convenor', affil: 'HOD – Physics' },
];

const COORDINATORS = [
  { name: 'Dr. Soumya. T. R', role: 'Coordinator', affil: 'Associate Professor / CSE', contact: '9003285822' },
  { name: 'Dr. Gurumurthi. T', role: 'Co-Coordinator', affil: 'Associate Professor / Physics', contact: '8056228073' },
];

const ADVISORY = [
  ['Dr. Radha Senthilkumar', 'Professor, MIT Campus, Anna University'],
  ['Dr. Rajendra Prasath', 'Professor, IIIT, Chittoor, Andhra Pradesh'],
  ['Prof. Dr. Abebe Belay Gemta', 'Professor, ASTU, Ethiopia'],
  ['Prof. Dr. Maxim P Estignev', 'Professor, Sevastopol State Univ., Russia'],
  ['Dr. S. Elangovan', 'Associate Professor, Wollega Univ., Ethiopia'],
  ['Prof. Dr. Sethu Gunasekaran', 'Dean, R&D, St. Peter’s Inst. of Higher Educ. & Research, Chennai'],
  ['Dr. E. K. Girija', 'Professor & Head, Periyar University, Salem'],
  ['Dr. P. Murugakoothan', 'Associate Professor & Former Principal, Pachaiyappa’s College, Kanchipuram'],
  ['Dr. A. Suvitha', 'Associate Professor, CMR Inst. of Tech., Bengaluru'],
  ['Dr. K. Gunasekaran', 'Assistant Professor, Univ. of Madras, Chennai'],
  ['Dr. G. Devanand Venkatasubbu', 'Associate Professor, SRM Univ., Kattankulathur'],
  ['Dr. S. Srinivasan', 'Associate Professor, Presidency College, Chennai'],
  ['Prof. Dr. Ananth Steephen', 'Professor, KPR Inst. of Engg. & Tech., Coimbatore'],
  ['Dr. Prasath Manivannan', 'Assistant Professor, Periyar Univ., Salem'],
  ['Dr. Sarachandran Nair', 'Head, Department of Computing, Muscat College, Oman'],
  ['Dr. M. Thanikachalam', 'Associate Dean (Research), KVCET, Chengalpattu'],
  ['Dr. Shajahan Basheer', 'Professor, Jain University, Bengaluru'],
  ['Dr. M. Manikandan', 'Professor, MIT, Anna University, Chennai'],
  ['Dr. Nagesh Ch', 'Assistant Professor & Head, IIIT Manipur'],
  ['Dr. Rajesh Elangovan', 'Professor, Alliance University, Bengaluru'],
  ['Dr. Mrityunjay Singh', 'Assistant Professor & Head, School of Computing, IIIT UNA, Himachal Pradesh'],
  ['Dr. N. Sivakumar', 'Professor, NIT Tiruchirappalli'],
  ['Dr. Ganesh Kumar', 'Associate Professor, CEG Campus, Anna Univ., Chennai'],
];

const ORGANIZING = [
  ['Dr. T. R. Soumya', 'Associate Professor (CSE)'],
  ['Dr. T. Gurumurthi', 'Associate Professor (Physics)'],
  ['Dr. S. Renuga', 'Associate Professor (Physics)'],
  ['Dr. D. Anand', 'Assistant Professor (Physics)'],
  ['Dr. C. Srivenkateswaran', 'Professor (R&D)'],
  ['Dr. G. Premalatha', 'Professor (ECE)'],
  ['Dr. M. Gopikrishnan', 'HOD (IT)'],
  ['Dr. S. Famitha', 'HOD (AIML)'],
  ['Dr. S. Vimala', 'HOD (ECE)'],
  ['Dr. S. Shobana', 'HOD (EEE)'],
  ['Dr. P. Raja', 'HOD (MECH)'],
  ['Dr. P. Dhasarathan', 'HOD (Bio Tech)'],
  ['Dr. P. Uma', 'HOD (Chemistry)'],
];

const Committee = () => {
  return (
    <div className="subpage">
      <Navbar />
      <SubPageHeader title="Committee" />

      <div className="subpage__body">
        <span className="subpage__eyebrow">ICCSB 2026</span>
        <h2 className="subpage__heading">Organizing Committee</h2>
        <div className="subpage__heading-underline" />
        <p className="subpage__lead">
          Meet the leadership, advisory panel, and organizing team behind ICCSB&nbsp;2026,
          jointly hosted by the Departments of Computer Science &amp; Engineering and Physics.
        </p>

        {/* Chief Patrons */}
        <div className="committee-group" style={{ marginTop: '48px' }}>
          <h3 className="committee-group__title">Chief Patrons</h3>
          <div className="committee-group__rule" />
          <div className="committee-grid">
            {LEADERSHIP.map((p) => (
              <div key={p.name} className="person-card person-card--accent">
                <div className="person-card__name">{p.name}</div>
                <div className="person-card__role">{p.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Patron */}
        <div className="committee-group">
          <h3 className="committee-group__title">Patron</h3>
          <div className="committee-group__rule" />
          <div className="committee-grid">
            <div className="person-card person-card--accent">
              <div className="person-card__name">{PATRON.name}</div>
              <div className="person-card__role">{PATRON.role}</div>
            </div>
          </div>
        </div>

        {/* Convenors */}
        <div className="committee-group">
          <h3 className="committee-group__title">Convenor &amp; Co-Convenor</h3>
          <div className="committee-group__rule" />
          <div className="committee-grid">
            {CONVENORS.map((p) => (
              <div key={p.name} className="person-card person-card--accent">
                <div className="person-card__name">{p.name}</div>
                <div className="person-card__role">{p.role}</div>
                <div className="person-card__affil">{p.affil}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinators */}
        <div className="committee-group">
          <h3 className="committee-group__title">Coordinator &amp; Co-Coordinator</h3>
          <div className="committee-group__rule" />
          <div className="committee-grid">
            {COORDINATORS.map((p) => (
              <div key={p.name} className="person-card person-card--accent">
                <div className="person-card__name">{p.name}</div>
                <div className="person-card__role">{p.role}</div>
                <div className="person-card__affil">{p.affil}</div>
                <a href={`tel:+91${p.contact}`} className="person-card__contact">📞 {p.contact}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Committee */}
        <div className="committee-group">
          <h3 className="committee-group__title">Advisory Committee</h3>
          <div className="committee-group__rule" />
          <div className="roster-grid">
            {ADVISORY.map(([name, affil]) => (
              <div key={name} className="roster-item">
                <span className="roster-item__marker">▹</span>
                <span className="roster-item__text">
                  <strong>{name}</strong>, {affil}.
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Committee */}
        <div className="committee-group" style={{ marginBottom: 0 }}>
          <h3 className="committee-group__title">Organizing Committee</h3>
          <div className="committee-group__rule" />
          <div className="roster-grid">
            {ORGANIZING.map(([name, affil]) => (
              <div key={name} className="roster-item">
                <span className="roster-item__marker">▹</span>
                <span className="roster-item__text">
                  <strong>{name}</strong>, {affil}.
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Committee;
