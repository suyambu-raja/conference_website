import campusImg from '../../assets/campus.png';
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
          <h1 className="hero__title">
            ICCSB <span className="hero__title-dash">—</span> 2026
          </h1>

          <p className="hero__date">17-18, AUG 2026</p>

          {/* Action Buttons */}
          <div className="hero__actions">
            <a href="#submission" className="hero__btn hero__btn--primary">
              Submission <span className="hero__btn-arrow">→</span>
            </a>
            <a href="#call-for-papers" className="hero__btn hero__btn--outline">
              Call for Papers <span className="hero__btn-arrow">→</span>
            </a>
          </div>   

          {/* AICTE Sponsorship Banner */}
          <div className="hero__aicte">
             <img src={aicteLogo} alt="AICTE Logo" style={{width: '100px', height: '100px'}} />
            <div className="hero__aicte-content">
              <h3 className="hero__aicte-title">
                AICTE Sponsored International Conference On Computing Business Intelligence and Engineering Technologies
              </h3>
              <p className="hero__aicte-text">
                17th and 18th August 2026 Organized by the Department of CSE and Physics<br />
                Knowledge Institute of Technology, Salem.
              </p>
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
