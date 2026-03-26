import { Link } from 'react-router-dom';
import campusImg from '../../assets/campus1.png';
import aicteLogo from '../../assets/aicte.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background with overlay */}
      <div className="hero__background">
        <img
          src={campusImg}
          alt="Campus aerial view background"
          className="hero__bg-image"
        />
        <div className="hero__bg-overlay" />
      </div>

      {/* Content */}
      <div className="hero__content">
        {/* Left Panel */}
        <div className="hero__left">
            {/* AICTE Sponsorship Banner */}
            <div className="hero__aicte">
              <img src={aicteLogo} alt="AICTE Logo" style={{width: '120px', height: '120px'}} />
              <div className="hero__aicte-content">
                <h3 className="hero__aicte-title">
                 International Conference on Innovations, Technological Breakthroughs, and Applications in Computational Biophysics, Synthetic Biology, and Biomanufacturing
                </h3>
                <p className="hero__aicte-text">
                  17th and 18th August 2026 Organized by the Department of CSE and Physics<br />
                  Prathyusha Engineering College, Thiruvallur.
                </p>
              </div>
            </div>


          <div className="hero__content-card">

            <h1 className="hero__title">
              ICCSB <span className="hero__title-dash">—</span> 2026
            </h1>

            <p className="hero__date">17-18, AUG 2026</p>

            {/* Action Buttons */}
            <div className="hero__actions">
              <Link to="/submission" className="hero__btn hero__btn--primary">
                Submission <span className="hero__btn-arrow">→</span>
              </Link>
              <Link to="/call-for-papers" className="hero__btn hero__btn--outline">
                Call for Papers <span className="hero__btn-arrow">→</span>
              </Link>
            </div>   

          </div>
        </div>

        {/* Right Panel - (Empty to show background) */}
        <div className="hero__right"></div>
      </div>
    </section>
  );
}

export default Hero;
