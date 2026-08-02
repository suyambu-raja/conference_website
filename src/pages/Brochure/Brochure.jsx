import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Brochure.css';
import clgLogo from '../../assets/clgLogo.png';
import campus from '../../assets/campus1.jpg';
import aicte from '../../assets/aicte.png';
import qrCode from '../../assets/register-qr.svg';

const Brochure = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('brochure-page__fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.brochure-animate');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <Navbar />
      <div className="brochure-page" ref={containerRef}>
        {/* PAGE 1 (Outside Panels) */}
      <section className="brochure-page__section brochure-page__section-1">
        
        {/* Left Col: Committees */}
        <div className="brochure-page__col brochure-page__yellow">
          <div className="brochure-page__rings brochure-page__rings--top-left"></div>
          
          <div className="brochure-animate" style={{ animationDelay: '0.1s' }}>
            <h3 className="brochure-page__title">ADVISORY COMMITTEE</h3>
            <ul>
              <li><strong>Dr. Radha Senthilkumar</strong>, Professor, MIT Campus, Anna University.</li>
              <li><strong>Dr. Rajendra Prasath</strong>, Professor, IIIT, Chittoor, Andhra Pradesh.</li>
              <li><strong>Prof. Dr. Abebe Belay Gemta</strong>, Professor, ASTU, Ethiopia.</li>
              <li><strong>Prof. Dr. Maxim P Estignev</strong>, Professor, Sevastopal State Univ., Russia.</li>
              <li><strong>Dr. S. Elangovan</strong>, Associate Professor, Wollega Univ, Ethiopia.</li>
              <li><strong>Prof. Dr. Sethu Gunasekaran</strong>, Dean, Research &amp; Development, St. Peter's Inst. of Higher Educ. &amp; Research, Chennai.</li>
              <li><strong>Dr. E. K. Girija</strong>, Professor &amp; Head, Periyar University, Salem.</li>
              <li><strong>Dr. P. Murugakoothan</strong>, Associate Professor &amp; Former Principal, Pachaiyappa's College, Kanchipuram.</li>
              <li><strong>Dr. A. Suvitha</strong>, Associate Professor, CMR Inst. of Tech., Bengaluru.</li>
              <li><strong>Dr. K. Gunasekaran</strong>, Assistant Professor, Univ. of Madras, Chennai.</li>
              <li><strong>Dr. G. Devanand Venkatasubbu</strong>, Associate Professor, SRM Univ., Kattankulathur.</li>
              <li><strong>Dr. S. Srinivasan</strong>, Associate Professor, Presidency College, Chennai.</li>
              <li><strong>Prof. Dr. Ananth Steephen</strong>, Professor, KPR Inst. of Engg. &amp; Tech., Coimbatore.</li>
              <li><strong>Dr. Prasath Manivannan</strong>, Assistant Professor, Periyar Univ., Salem.</li>
              <li><strong>Dr. Sarachandran Nair</strong>, Head (Department of Computing), Muscat College, Oman.</li>
              <li><strong>Dr. M. Thanikachalam</strong>, Associate Dean (Research), KVCET, Chengalpattu.</li>
              <li><strong>Dr. Shajahan Basheer</strong>, Professor, Jain University, Bengaluru</li>
              <li><strong>Dr. M Manikandan</strong>, Professor, MIT, Anna University, Chennai</li>
              <li><strong>Dr. Nagesh Ch</strong>, Assistant Professor &amp; Head, IIIT Manipur.</li>
              <li><strong>Dr. Rajesh Elangovan</strong>, Professor, Alliance University, Bengaluru.</li>
              <li><strong>Dr. Mrityunjay Singh</strong>, Assistant Professor &amp; Head, School of computing, IIIT UNA, Himachal Pradesh.</li>
              <li><strong>Dr. N Sivakumar</strong>, Professor, NIT Tiruchirappalli.</li>
              <li><strong>Dr. Gansh kumar</strong>, Associate Professor, CEG Campus, Anna Univ, Chennai</li>
            </ul>

            <h3 className="brochure-page__title" style={{ marginTop: '30px' }}>ORGANIZING COMMITTEE</h3>
            <ul>
              <li><strong>Dr. T.R Soumya</strong>, Associate Professor (CSE)</li>
              <li><strong>Dr. T. Gurumurthi</strong>, Associate Professor (Physics)</li>
              <li><strong>Dr. S. Renuga</strong>, Associate Professor (Physics)</li>
              <li><strong>Dr. D. Anand</strong>, Assistant Professor (Physics)</li>
              <li><strong>Dr. C. Srivenkateswaran</strong>, Professor (R&amp;D)</li>
              <li><strong>Dr. G. Premalatha</strong>, Professor (ECE)</li>
              <li><strong>Dr. M. Gopikrishnan</strong>, HOD (IT)</li>
              <li><strong>Dr. S. Famitha</strong>, HOD (AIML)</li>
              <li><strong>Dr. S. Vimala</strong>, HOD (ECE)</li>
              <li><strong>Dr. S. Shobana</strong>, HOD (EEE)</li>
              <li><strong>Dr. P. Raja</strong>, HOD (MECH)</li>
              <li><strong>Dr. P. Dhasarathan</strong>, HOD (BIO TECH)</li>
              <li><strong>Dr. P. Uma</strong>, HOD (CHEMISTRY)</li>
            </ul>
          </div>
        </div>

        {/* Center Col: Patrons & Info */}
        <div className="brochure-page__col brochure-page__navy">
          <div className="brochure-page__rings brochure-page__rings--bottom-right"></div>
          
          <div className="brochure-animate" style={{ animationDelay: '0.2s', display: 'flex', flexDirection: 'column', height: '100%' }}>
            
            <div className="brochure-page__patron-block">
              <h4 className="brochure-page__patron-role">CHIEF PATRON</h4>
              <div className="brochure-page__center-text">
                <div className="brochure-page__patron-name">Shri. P. Raja Rao</div>
                <div className="brochure-page__patron-desc">Founder &amp; Chairman</div>
                
                <div className="brochure-page__patron-name">Shri. P. Charan Teja</div>
                <div className="brochure-page__patron-desc">Vice Chairman</div>
                
                <div className="brochure-page__patron-name">Smt. P. Prathyusha</div>
                <div className="brochure-page__patron-desc">CEO</div>
              </div>
            </div>

            <div className="brochure-page__patron-block">
              <h4 className="brochure-page__patron-role">PATRON</h4>
              <div className="brochure-page__center-text">
                <div className="brochure-page__patron-name">Dr. P.L.N Ramesh</div>
                <div className="brochure-page__patron-desc">Principal</div>
              </div>
            </div>

            <div className="brochure-page__patron-block">
              <h4 className="brochure-page__patron-role">CONVENOR</h4>
              <div className="brochure-page__center-text">
                <div className="brochure-page__patron-name">Dr. Thamba Meshach. W</div>
                <div className="brochure-page__patron-desc">Professor &amp; HOD - CSE</div>
              </div>
            </div>

            <div className="brochure-page__patron-block">
              <h4 className="brochure-page__patron-role">Co-CONVENOR</h4>
              <div className="brochure-page__center-text">
                <div className="brochure-page__patron-name">Ms. Sridevi. D</div>
                <div className="brochure-page__patron-desc">HOD - Physics</div>
              </div>
            </div>

            <div className="brochure-page__info-box">
              <h3>IMPORTANT DATES</h3>
              <table className="brochure-page__table" style={{ marginBottom: '20px' }}>
                <tbody>
                  <tr>
                    <td>Paper Submission</td>
                    <td>: 17-08-2026</td>
                  </tr>
                  <tr>
                    <td>Acceptance</td>
                    <td>: 24-08-2026</td>
                  </tr>
                  <tr>
                    <td>Registration Deadline</td>
                    <td>: 31-08-2026</td>
                  </tr>
                </tbody>
              </table>

              <hr className="brochure-page__divider" />

              <h3>REGISTRATION FEES</h3>
              <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '10px' }}>Indian Participant</div>
              <table className="brochure-page__table">
                <tbody>
                  <tr>
                    <td>UG Students</td>
                    <td>: Rs. 300/-</td>
                  </tr>
                  <tr>
                    <td>PG Students/ Research Scholars</td>
                    <td>: Rs. 500/-</td>
                  </tr>
                  <tr>
                    <td>Academician</td>
                    <td>: Rs. 750/-</td>
                  </tr>
                  <tr>
                    <td>Industrialist</td>
                    <td>: Rs. 1000/-</td>
                  </tr>
                  <tr>
                    <td>International Participants</td>
                    <td>: USD. 50/-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="brochure-page__patron-block" style={{ marginTop: 'auto', marginBottom: 0 }}>
              <h4 className="brochure-page__patron-role" style={{ color: '#fff' }}>COORDINATOR</h4>
              <div className="brochure-page__center-text">
                <div className="brochure-page__patron-name">Dr. Soumya. T.R</div>
                <div className="brochure-page__patron-desc">Associate Professor/CSE<br/>Contact: 9003285822</div>
              </div>
              
              <h4 className="brochure-page__patron-role" style={{ color: '#fff', marginTop: '15px' }}>Co-COORDINATOR</h4>
              <div className="brochure-page__center-text">
                <div className="brochure-page__patron-name">Dr. Gurumurthi. T</div>
                <div className="brochure-page__patron-desc">Associate Professor/Physics<br/>Contact: 8056228073</div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Col: Cover */}
        <div className="brochure-page__col brochure-page__white brochure-page__cover-col">
          <div className="brochure-page__cover-header"></div>
          
          <div className="brochure-page__cover-content brochure-animate" style={{ animationDelay: '0.3s' }}>
            <div className="brochure-page__logo-row">
              <img src={clgLogo} alt="College Logo" className="brochure-page__logo-pec" />
            </div>
            
            <h1 className="brochure-page__college-name">PRATHYUSHA ENGINEERING COLLEGE</h1>
            <div className="brochure-page__autonomous">(AN AUTONOMOUS INSTITUTION)</div>
            <div className="brochure-page__accreditation">NAAC "A" GRADE INSTITUTION &amp; NBA ACCREDITED PROGRAMMES</div>
            <div className="brochure-page__address">POONAMALLEE - TIRUVALLUR ROAD, TIRUVALLUR - 602025</div>
            
            <div className="brochure-page__depts">
              DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING<br/>
              &amp;<br/>
              DEPARTMENT OF PHYSICS
            </div>
            
            <img src={campus} alt="Campus" className="brochure-page__campus-img" />
            
            <img src={aicte} alt="AICTE" className="brochure-page__aicte-logo" />
            <h2 className="brochure-page__sponsored">AICTE SPONSORED</h2>
            
            <div className="brochure-page__conf-title">
              International Conference on<br/>
              Innovations, Technological Breakthroughs &amp;<br/>
              Applications in Computational Biophysics,<br/>
              Synthetic Biology &amp; Biomanufacturing<br/>
              (Hybrid Mode)
            </div>
            
            <div className="brochure-page__dates">
              10<sup>th</sup> &amp; 11<sup>th</sup> September 2026
            </div>
          </div>
        </div>

      </section>

      {/* PAGE 2 (Inside Panels) */}
      <section className="brochure-page__section brochure-page__section-2">
        
        {/* Left Col: About Institution */}
        <div className="brochure-page__col brochure-page__navy">
          <div className="brochure-page__rings brochure-page__rings--top-left"></div>
          
          <div className="brochure-animate" style={{ animationDelay: '0.4s', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 className="brochure-page__title">ABOUT THE INSTITUTION</h3>
            <p>
              Prathyusha Engineering College is strategically located near Chennai on the Poonamallee-Thiruvallur Road, providing a serene and accessible learning environment. The institution is committed to academic excellence, innovation, and holistic student development. Our college takes pride in its advanced Centres of Excellence, which include the AR-VR Lab, Robotics Lab, VLSI Design Lab, MATLAB Lab, AICTE IDEA Lab, and PEC IITIS training academy. These state-of-the-art facilities foster hands-on learning, research culture, and industry-oriented skill development among students. The institution offers 10 Undergraduate programmes and 2 Postgraduate programmes, along with active Research and Development Centres affiliated with Anna University. The college is approved by the All India Council for Technical Education (AICTE), has NBA-accredited programmes, and has secured an 'A' Grade from the National Assessment and Accreditation Council (NAAC). With a strong emphasis on quality education, research innovation, and industry collaboration, Prathyusha Engineering College continues to shape competent professionals and responsible citizens.
            </p>

            <div className="brochure-page__qr-container">
              <img src={qrCode} alt="QR Code to Register" className="brochure-page__qr-code" />
              <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Scan the QR code to Register</div>
            </div>

            <div className="brochure-page__contact-block">
              <p><strong>Email : </strong>iccsb2026@prathyusha.edu.in</p>
              <p><strong>Website : </strong>www.prathyusha.edu.in</p>
            </div>
          </div>
        </div>

        {/* Center Col: About Department */}
        <div className="brochure-page__col brochure-page__yellow">
          <div className="brochure-page__rings brochure-page__rings--dots"></div>
          
          <div className="brochure-animate" style={{ animationDelay: '0.5s' }}>
            <h3 className="brochure-page__title" style={{ marginTop: '10px' }}>ABOUT THE DEPARTMENT</h3>
            <p>
              The Department of Computer Science and Engineering established in 2001, is committed to delivering quality education by strengthening core technological skills and IT excellence. Over the years, the department has produced accomplished professionals serving in leading positions across India and abroad. To provide quality education in Computer Science and Engineering by integrating modern technologies such as AI, Machine Learning, Data Science, Cyber Security, Cloud Computing, IoT, and Blockchain. To train students to apply their knowledge to solve real-world problems and build successful careers in the evolving global technology landscape.
            </p>
            <p>
              The Department of Physics, established in 2001, provides quality Engineering Physics education through experienced faculty, active research, and a well-equipped laboratory that fosters excellence in teaching and learning.
            </p>

            <h3 className="brochure-page__title">VISION</h3>
            <p>
              Our vision is to build a strong teaching &amp; research environment in the field of Computer Science and Engineering for developing a team of young dynamic computer science engineers, researchers, future entrepreneurs who are adaptive to respond to the challenges of 21<sup>st</sup> century. Our commitment lies in producing disciplined human individuals, capable of contributing solutions to solve problems faced by our society.
            </p>

            <h3 className="brochure-page__title">MISSION</h3>
            <ul style={{ paddingLeft: '15px' }}>
              <li>To provide a quality education in both the theoretical and applied foundations of computer science and engineering.</li>
              <li>To train the students to effectively apply this education to solve real-world problems, thus amplifying their potential for lifelong high-quality careers and gives them a competitive advantage in the ever-changing and challenging global work environment of the 21<sup>st</sup> century.</li>
              <li>To initiate collaborative real-world industrial projects with industries and academic institutions to inculcate facilities in the arena of Research &amp; Development.</li>
              <li>To prepare them with an understanding of their professional and ethical responsibilities.</li>
            </ul>

            <div className="brochure-page__download-section" style={{ marginTop: 'auto', paddingTop: '40px', paddingBottom: '0' }}>
              <a href="/brochure.pdf" download="ICCSB_2026_Brochure.pdf" className="brochure-page__download-btn brochure-page__download-btn--navy">
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Right Col: About Conference */}
        <div className="brochure-page__col brochure-page__navy">
          <div className="brochure-page__rings brochure-page__rings--bottom-left"></div>
          
          <div className="brochure-animate" style={{ animationDelay: '0.6s' }}>
            <h3 className="brochure-page__title">ABOUT THE CONFERENCE</h3>
            <p>
              This conference aims to bring together researchers, academicians, industry professionals, scientists, and students to share their latest research, innovations, and technological applications in computational biophysics, synthetic biology, and biomanufacturing. It provides a dynamic platform to discuss emerging trends, interdisciplinary research, and sustainable solutions for healthcare, pharmaceuticals, agriculture, and industry.
            </p>

            <h3 className="brochure-page__title" style={{ marginTop: '20px', marginBottom: '15px' }}>TOPICS</h3>
            <ul className="brochure-page__topics-list">
              <li>AI for Biological Systems</li>
              <li>Computational Drug Discovery</li>
              <li>Medical Image Analysis</li>
              <li>Bioprocessing and Sustainable Biomanufacturing</li>
              <li>Biomedical Signal Processing</li>
              <li>Healthcare Data Analytics</li>
              <li>Synthetic Gene Circuits</li>
              <li>Protein Dynamics and Folding</li>
              <li>Computational and Theoretical Biophysics</li>
              <li>Biophotonics</li>
              <li>Medical and Radiation Physics</li>
              <li>Nanophysics for Healthcare</li>
              <li>Structural Biology and Biomolecular Structure</li>
              <li>Industrial and Environmental Biotechnology</li>
              <li>Molecular Biology and Genetics</li>
            </ul>
            <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>
              *The conference is not limited to the above-listed topics. Authors are encouraged to submit original research papers on relevant topics aligned with the conference theme.
            </p>

            <h3 className="brochure-page__title" style={{ marginTop: '30px', marginBottom: '15px' }}>PUBLICATION</h3>
            <p style={{ fontWeight: 'bold' }}>
              All accepted articles will be published in the conference proceedings with an ISBN. Selected and extended papers will be recommended for publication in WoS/Scopus-indexed journals with the author's consent.
            </p>
          </div>
        </div>

      </section>
    </div>
    </>
  );
};

export default Brochure;
