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
            The International Conference on Innovations, Technological Breakthroughs &amp; Applications in Computational Biophysics, Synthetic Biology &amp; Biomanufacturing (ICCSB&nbsp;2026) aims to bring together researchers, academicians, industry professionals, scientists, and students to share their latest research, innovations, and technological applications in computational biophysics, synthetic biology, and biomanufacturing. It provides a dynamic platform to discuss emerging trends, interdisciplinary research, and sustainable solutions for healthcare, pharmaceuticals, agriculture, and industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
