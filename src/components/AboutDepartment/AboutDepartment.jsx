import './AboutDepartment.css';

const MISSION = [
  'To provide a quality education in both the theoretical and applied foundations of computer science and engineering.',
  'To train the students to effectively apply this education to solve real-world problems, thus amplifying their potential for lifelong high-quality careers and giving them a competitive advantage in the ever-changing and challenging global work environment of the 21st century.',
  'To initiate collaborative real-world industrial projects with industries and academic institutions to inculcate facilities in the arena of Research & Development.',
  'To prepare them with an understanding of their professional and ethical responsibilities.',
];

function AboutDepartment() {
  return (
    <section className="about-dept" id="about-department">
      <div className="about-dept__container">
        <div className="about-dept__title-wrapper">
          <h2 className="about-dept__title">About the Department</h2>
          <div className="about-dept__underline" />
        </div>

        {/* Department cards */}
        <div className="about-dept__cards">
          <article className="dept-card">
            <div className="dept-card__badge">EST. 2001</div>
            <h3 className="dept-card__name">Computer Science &amp; Engineering</h3>
            <p className="dept-card__text">
              The Department of Computer Science and Engineering, established in 2001, is committed to
              delivering quality education by strengthening core technological skills and IT excellence.
              Over the years, the department has produced accomplished professionals serving in leading
              positions across India and abroad. It provides quality education by integrating modern
              technologies such as AI, Machine Learning, Data Science, Cyber Security, Cloud Computing,
              IoT, and Blockchain, training students to apply their knowledge to solve real-world problems
              and build successful careers in the evolving global technology landscape.
            </p>
          </article>

          <article className="dept-card">
            <div className="dept-card__badge">EST. 2001</div>
            <h3 className="dept-card__name">Physics</h3>
            <p className="dept-card__text">
              The Department of Physics, established in 2001, provides quality Engineering Physics
              education through experienced faculty, active research, and a well-equipped laboratory
              that fosters excellence in teaching and learning.
            </p>
          </article>
        </div>

        {/* Vision & Mission */}
        <div className="about-dept__vm">
          <article className="vm-card vm-card--vision">
            <div className="vm-card__icon">🎯</div>
            <h3 className="vm-card__heading">Vision</h3>
            <p className="vm-card__text">
              Our vision is to build a strong teaching &amp; research environment in the field of Computer
              Science and Engineering for developing a team of young, dynamic computer science engineers,
              researchers, and future entrepreneurs who are adaptive to respond to the challenges of the
              21st century. Our commitment lies in producing disciplined human individuals, capable of
              contributing solutions to problems faced by our society.
            </p>
          </article>

          <article className="vm-card vm-card--mission">
            <div className="vm-card__icon">🚀</div>
            <h3 className="vm-card__heading">Mission</h3>
            <ul className="vm-card__list">
              {MISSION.map((item, i) => (
                <li key={i} className="vm-card__list-item">{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutDepartment;
