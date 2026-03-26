import './About.css';

function About() {
  return (
    <div className="about-container" id="about">


      {/* ICCSB Description */}
      <div className="about-iccnct">
        <div className="iccnct-title-col">
          <h1 className="iccnct-heading">ICCSB 2026</h1>
        </div>
        <div className="iccnct-desc-col">
          <p className="iccnct-para">
            The 6<sup>th</sup> International conference on Computing, Business Intelligence and Engineering Technologies (ICCSB - 2026) will provide an excellent international forum for sharing knowledge and results in theory, methodology and applications of Computing, Business Intelligence and Engineering Technologies. The conference looks for significant contributions to all major fields of the Computer Science and Information Technology in theoretical and practical aspects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
