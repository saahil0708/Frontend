import React from "react";
import "./Ideathon.css";

const Ideathon = () => {
  return (
    <section className="ideathon-section">
      <div className="ideathon-container">
        
        {/* Decorative Background Elements */}
        <div className="ideathon-decor-circle circle-1"></div>
        <div className="ideathon-decor-circle circle-2"></div>
        <div className="ideathon-decor-circle circle-3"></div>
        <div className="ideathon-decor-circle circle-4"></div>

        {/* Left Content */}
        <div className="ideathon-left">
          <div className="ideathon-logo-wrapper">
            <img 
              src="https://14wgjdss3w.ufs.sh/f/ImvjWigzci0Z1WDnAghrPUBV7M3sWK5uXbzth1cT2iY86eH9" 
              alt="Google Ideate 2.0 Logo" 
              className="ideathon-logo"
            />
          </div>
          
          <p className="ideathon-subtitle">Innovation Redefined</p>
          <h2 className="ideathon-title">Student Innovation Challenge 2025</h2>
          
          <div className="rainbow-divider"></div>
          
          <div className="ideathon-text">
            <p>
              Google Ideate 2.0 is a premier ideathon by <strong>GDG on Campus SVIET</strong>, 
              part of the <strong>Global Futures Summit 2.0</strong>.
            </p>
            <p>
              Participants engineer solutions for the <strong>17 UN Sustainable Development Goals (SDGs)</strong>, 
              aligning with the <strong>Google Solution Challenge 2025</strong>.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="ideathon-right">
          {/* We'll use a placeholder for the theme image until the user provides the URL */}
          <div className="theme-illustration">
             {/* THEME text background */}
             <div className="theme-bg-text">THEME</div>
             
             {/* Hexagon Goals Placeholder */}
             <div className="goals-visual">
                <img 
                  src="https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZOaGo86Sct5fFRZiCKu0apsnTN7MP648Bk9Gw" 
                  alt="SDG Goals" 
                  className="goals-img"
                />
             </div>
             
             {/* Floating decorative elements */}
             <div className="floating-shape shape-1"></div>
             <div className="floating-shape shape-2"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ideathon;
