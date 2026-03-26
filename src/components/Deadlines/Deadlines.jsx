import './Deadlines.css';

const DEADLINE_ITEMS = [
  {
    title: 'Full-Length Paper Submission Deadline',
    date: '30 March, 2026',
  },
  {
    title: 'Registration Deadline',
    date: '12 April, 2026',
  },
  {
    title: 'Conference Dates',
    date: '11-13, May 2026',
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
