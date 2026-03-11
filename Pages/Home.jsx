import React from "react";
import "./Home.css";
import Tab from "../src/components/Tabs.jsx";
import SpeakersSlider from "../src/components/SpeakersSlider.jsx";
import Countdown  from "../src/components/Countdown.jsx";
import ExploreButtom from "../src/components/ExploreButton.jsx";
import pharma from "../src/photos/pharma.png";
import overview from "../src/photos/overview.png";
import cheif from "../src/photos/chief.png";

const Home = () => {
  return (
    <div> {/* ✅ Single parent wrapper */}

      {/* HERO SECTION */}
      <section className="home-section" id="home">
        <div className="home-container">
                   <ExploreButtom />
          <Countdown />


        </div>
      </section>

      {/* overview section */}
       <section className="overview-section" loading="lazy">

      <div className="overview-container">

        {/* LEFT CONTENT */}
        <div className="overview-left">

          <span className="overview-badge"
         >OVERVIEW</span>

          <h1 id="overview">
            Driving Digital Excellence Across the Pharmaceutical Value Chain
          </h1>

          <p className="overview-text">
            The Digi-Tech Pharma & AI Conference is a leading platform uniting
            pharmaceutical and technology leaders, healthcare innovators,
            regulatory authorities and solution providers to explore the
            evolving digital landscape in pharma. This conference promotes
            collaboration and knowledge exchange.
          </p>

          {/* CARD 1 */}
          <div className="overview-card">
            <div className="icon">🎤</div>

            <div>
              <h3>Enabling the Digital Future of Pharma</h3>
              <p>
                This event explores the integration of science and technology
                within the pharmaceutical industry with focus on AI, machine
                learning, digital health ecosystems and patient-centric drug
                development.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="overview-card">
            <div className="icon circle-icon">⚙️</div>

            <div>
              <h3>Connecting Technology, Compliance, and Care</h3>
              <p>
                Bringing together industry leaders to discuss regulatory
                frameworks, digital transformation and collaborative healthcare
                innovation.
              </p>
            </div>
          </div>

          <button className="download-btn">
            REQUEST  BROCHURE ➜
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="overview-right">

          <div className="image-circle">
            <img
              src={overview}
              alt="AI Pharma"
            />
          </div>

          <div className="request-btn">
            <button className="button">
              <p className="button__text">
                <span style={{ "--index": 0}}>R</span>
                <span style={{ "--index": 1}}>E</span>
                <span style={{ "--index": 2}}>Q</span>
                <span style={{ "--index": 3 }}>U</span>
                <span style={{ "--index": 4 }}>E</span>
                <span style={{ "--index": 5 }}>S</span>
                <span style={{ "--index": 6 }}>T</span>
                <span style={{ "--index": 7 }}> </span>
                <span style={{ "--index": 8 }}>.</span>
                <span style={{ "--index": 9 }}> </span>
                <span style={{ "--index": 10 }}>B</span>
                <span style={{ "--index": 11}}>R</span>
                <span style={{ "--index": 12 }}>O</span>
                <span style={{ "--index": 13 }}>C</span>
                <span style={{ "--index": 14 }}>H</span>
                <span style={{ "--index": 15 }}>U</span>
                <span style={{ "--index": 16 }}>R</span>
                <span style={{ "--index": 17 }}>E</span>
              </p>

              <div className="button__circle">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon"
                  width="14"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon button__icon--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
              </div>
        </button>
          </div>

        </div>

      </div>

    </section>


      {/* about section */}


        <section className="themes-section"
        loading="lazy">

        <div className="themes-header" id="agenda">
          <span className="themes-tag">KEY THEMES TO BE DISCUSSED</span>
          <h1>Core Focus Areas Driving Innovation in Pharma</h1>
        </div>

        <div className="themes-container">

          {/* Card 1 */}
          <div className="theme-cardw">
            <h3>Why AI in Pharmacy?</h3>

          <ul>
                  <li> Digital technologies are transforming the pharma and biotech industry.</li>
                  <li>AI and Machine Learning accelerate drug discovery and research.</li>
                  <li>AI enables integration of pharma with digital healthcare systems.</li>
                  <li>Collaboration helps adopt advanced pharmaceutical technologies.</li>
                  <li>AI supports patient-centred drug discovery and personalized medicine.</li>
          </ul>
          </div>

          {/* Card 2 */}
          <div className="theme-card">
          <h3>What problem are we addressing?</h3>

            <ul>
              <li>Slow and costly drug discovery processes.</li>
              <li>Limited efficiency in traditional drug discovery models.</li>
              <li>Challenges in accurate target identification and validation.</li>
              <li>Need for advanced computing technologies in pharmaceutical research.</li>
              <li>Managing large-scale genomic and biological data.</li>
              <li>Inefficiencies in traditional clinical trial methods.</li>
              <li>Gap between research innovation and real-world R&D applications.</li>
            </ul>
          </div>
          

        </div>
        <div className="themes-container">

          {/* Card 1 */}
          <div className="theme-cardw">
            <h3>Reimagining Pharma by Integrating Science and Technology:</h3>

            <ul>
              <li>Digital Technology Trends in the Pharma and Biotech Industry</li>
              <li>Adopting AI and Machine Learning to unlock the full potential of Pharma</li>
              <li>Integrating Pharma into the Digital Health Environment</li>
              <li>Collaborative Innovation: Finding the right partners to leverage new technologies</li>
              <li>Patient-Centred Drug Discovery</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="theme-card">
            <h3>Digital Discovery and Clinical Trials</h3>

            <ul>
              <li>Applying AI to the Design of Lead Compounds</li>
              <li>Algorithms and Models for Drug Discovery</li>
              <li>Target Identification & Validation Using AI/ML</li>
              <li>Quantum Computing for Advanced Drug Discovery</li>
              <li>Genomics and Drug Discovery</li>
              <li>Virtual and Hybrid Clinical Trials</li>
              <li>R&D Use Cases and Case Studies</li>
            </ul>
          </div>
          

        </div>  

      </section>
   
      <section className="digital-section">

      <div className="digital-container">

        {/* Left Image */}
        <div className="digital-image">
          <img src={pharma} alt="Digital Pharma" />
        </div>

        {/* Right Content */}
        <div className="digital-content">

          <span className="digital-tag">
            DISCOVERY REIMAGINED, DIGITALLY POWERED
          </span>

          <h1>
            Digital Disruption in <span>Pharma</span> Pipeline
          </h1>

          <p className="digital-desc">
            Drug discovery is evolving beyond traditional pipelines. With the
            power of AI, data science, and computational models, pharma is
            redefining how compounds are identified, optimized, and brought to
            market. This transformation is enabling faster, smarter, and more
            targeted development — from lab to launch.
          </p>

          {/* CTA Card */}

          <div className="digital-card">

            <div className="card-text">
              <h3>Accelerating Drug Discovery with Digital Intelligence</h3>

              <p>
                Explore how digital tools and data-driven approaches are
                unlocking the next generation of breakthrough therapies.
              </p>
            </div>

            <button className="register-btn">
              Register
            </button>

          </div>

        </div>

      </div>

    </section>


      {/* ABOUT SECTION */}
      <section className="speakersection" loading="lazy">
                  <div className="speaker-headings">
                        <span className="international-tag">SPEAKERS</span>

                        <h2>Meet the Minds Shaping the Future</h2>

                        <p className="international-description">
                          Discover the Industry Leaders and Experts Sharing Insights That Drive Change
                        </p>

                        <span className="international-header" id="speakers">
                          INTERNATIONAL SPEAKERS
                        </span>
            </div>

            <SpeakersSlider />
                      <span className="international-header">NATIONAL SPEAKERS</span>

                  <SpeakersSlider />
    </section>   
    <section>
              <div className="guests-section">

              <div className="chief-card">
                <h2 className="title">CHIEF GUEST</h2>

                <div className="chief-guest">
                  <img src={cheif} alt="chief guest" />

                  <h3>Dr. Deependra Singh</h3>
                  <p>Honorable Chairman ERC,</p>
                  <p>Pharmacy Council of India</p>
                </div>
              </div>


              <div className="honor-section">
                <h2 className="title">GUESTS OF HONOR</h2>

                <div className="guest-grid">

                  <div className="guest-card">
                    <img src={cheif} alt="guest" />

                    <h3>Mr. Sushil Kumar Bansal</h3>
                    <p>President, Punjab Pharmacy</p>
                    <p>Council, Govt. of Punjab</p>
                  </div>

                  <div className="guest-card">
                    <img src={cheif} alt="guest" />

                    <h3>Mr. Gopal Krishan</h3>
                    <p>President, Himachal Pradesh</p>
                    <p>Pharmacy Council</p>
                  </div>

                </div>
              </div>

            </div>
    </section>
      
    </div>
  );
};

export default Home;