import './Deadlines.css';

const DEADLINE_ITEMS = [
  {
    title: 'Paper & Poster Submission Deadline',
    date: '24 August, 2026',
  },
  {
    title: 'Registration Deadline',
    date: '31 August, 2026',
  },
  {
    title: 'Conference Dates',
    date: '10 & 11 September, 2026',
  },
];

function Deadlines() {
  return (
    <div className="deadlines-container" id="deadlines">
      <div className="deadlines-row">
        {DEADLINE_ITEMS.map((item, index) => (
          <div key={index} className="deadline-item">
            <h3 className="deadline-title">{item.title}</h3>
            <p className="deadline-date">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deadlines;
