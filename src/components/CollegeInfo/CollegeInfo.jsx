import './CollegeInfo.css';

function CollegeInfo() {
  return (
    <section className="college-info" id="college-info">
      <div className="college-info__container">
        <div className="college-info__title-wrapper">
          <h2 className="college-info__title">About the Institution</h2>
          <div className="college-info__underline" />
        </div>
        <div className="college-info__content">
          <p className="college-info__text">
            Prathyusha Engineering College is strategically located near Chennai on the Poonamallee–Thiruvallur Road, 
            providing a serene and accessible learning environment. The institution is committed to academic excellence, 
            innovation, and holistic student development. Our college takes pride in its advanced Centres of Excellence, 
            which include the AR-VR Lab, Robotics Lab, VLSI Design Lab, MATLAB Lab, AICTE IDEA Lab, and PEC IITIS training academy. 
            These state-of-the-art facilities foster hands-on learning, research culture, and industry-oriented skill development 
            among students.
          </p>
          <p className="college-info__text">
            The institution offers 10 Undergraduate programmes and 2 Postgraduate programmes, along with active Research 
            and Development Centres affiliated with Anna University. The college is approved by All India Council for 
            Technical Education (AICTE), accredited by National Board of Accreditation (NBA), and has secured an ‘A’ 
            Grade from National Assessment and Accreditation Council (NAAC).
          </p>
          <div className="college-info__highlight-card">
            <p className="college-info__highlight-text">
              With a strong emphasis on quality education, research innovation, and industry collaboration, 
              Prathyusha Engineering College continues to shape competent professionals and responsible citizens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollegeInfo;
