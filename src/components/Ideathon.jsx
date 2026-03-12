import { Database, Cpu, Layers, Brain, Microscope, FlaskConical } from "lucide-react";
import "./Ideathon.css";

const Ideathon = () => {
  return (
    <section className="ideathon-section">
      <div className="ideathon-wrapper">

        {/* Decorative Background Elements */}
        <div className="ideathon-decor-circle circle-1"></div>
        <div className="ideathon-decor-circle circle-2"></div>
        <div className="ideathon-decor-circle circle-3"></div>
        <div className="ideathon-decor-circle circle-4"></div>

        <div className="floating-icons">
          <Database className="f-icon icon-1" size={40} />
          <Cpu className="f-icon icon-2" size={35} />
          <Layers className="f-icon icon-3" size={45} />
          <Brain className="f-icon icon-4" size={38} />
          <Microscope className="f-icon icon-5" size={42} />
          <FlaskConical className="f-icon icon-6" size={36} />
        </div>

        {/* Section Header — visible at the top, centered */}
        <div className="ideathon-section-header">
          <span className="ideathon-badge">✦ Innovation Redefined ✦</span>
          <h2 className="ideathon-title">The Pharmacy <em>Innovation Challenge</em></h2>
          <p className="ideathon-sub-desc">Where science meets creativity</p>
          <div className="rainbow-divider"></div>
        </div>

        {/* Two-column content row */}
        <div className="ideathon-container">

          {/* Left Content */}
          <div className="ideathon-left">
            <div className="ideathon-logo-wrapper">
              <img
                src="https://14wgjdss3w.ufs.sh/f/ImvjWigzci0Z1WDnAghrPUBV7M3sWK5uXbzth1cT2iY86eH9"
                alt="Google Ideate 2.0 Logo"
                className="ideathon-logo"
              />
            </div>

            <div className="ideathon-text">
              <p>
                Pharmacy Ideathon 2K26 is an innovation platform where <strong>students and aspiring healthcare leaders</strong>,
                collaborate to develop creative solutions for real-world challenges in <strong>pharmaceutical sciences and healthcare.</strong>
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="ideathon-right">
            <div className="theme-illustration">
              <div className="theme-bg-text">THEME</div>
              <div className="goals-visual">
                <img
                  src="https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZOaGo86Sct5fFRZiCKu0apsnTN7MP648Bk9Gw"
                  alt="SDG Goals"
                  className="goals-img"
                />
              </div>
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ideathon;
