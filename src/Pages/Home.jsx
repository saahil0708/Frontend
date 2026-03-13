import React from "react";
import "./Home.css";
import Tab from "../components/Tabs.jsx";
import SpeakersSlider from "../components/SpeakersSlider.jsx";
import Countdown from "../components/Countdown.jsx";
import ExploreButtom from "../components/ExploreButton.jsx";
import Footer from "../components/Footer.jsx";
import { Star, Linkedin } from "lucide-react";
import pharma from "../photos/pharma.png";
import overview from "../photos/overview.png";
import cheif from "../photos/chief.png";
import Ideathon from "../components/Ideathon.jsx";

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <div className="home-page-container">
        {/* HERO SECTION */}
        <section className="home-section" id="home">
          <div className="home-container">
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
                    <span style={{ "--index": 0 }}>R</span>
                    <span style={{ "--index": 1 }}>E</span>
                    <span style={{ "--index": 2 }}>Q</span>
                    <span style={{ "--index": 3 }}>U</span>
                    <span style={{ "--index": 4 }}>E</span>
                    <span style={{ "--index": 5 }}>S</span>
                    <span style={{ "--index": 6 }}>T</span>
                    <span style={{ "--index": 7 }}> </span>
                    <span style={{ "--index": 8 }}>.</span>
                    <span style={{ "--index": 9 }}> </span>
                    <span style={{ "--index": 10 }}>B</span>
                    <span style={{ "--index": 11 }}>R</span>
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
            <p className="themes-subheading">
              Exploring the frontiers where digital technology, artificial intelligence, and pharmaceutical science converge to shape the future of healthcare.
            </p>
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

              </div>

            </div>

          </div>

        </section>


        {/* GUESTS SECTION */}
        <section className="guests-wrapper" loading="lazy">
          <div className="guests-headings-container">
            <span className="guests-tag" id="guests">HONORED GUESTS</span>
            <h2 className="guests-main-title">Esteemed Visionaries & Leaders</h2>
            <p className="guests-description">
              Welcoming the distinguished minds guiding the future of Pharmacy and AI innovation.
            </p>
          </div>

          <div className="guests-section-grid">
            {/* LEFT: Chief Guest */}
            <div className="chief-card-wrapper">
              <h2 className="guest-col-title">CHIEF GUEST</h2>

              <div className="chief-guest-card editorial-card">
                <div className="chief-card-header">
                  <div className="guest-image-wrapper chief-img-wrapper">
                    <img src={cheif} alt="chief guest" />
                  </div>
                </div>
                <div className="chief-card-body">
                  <div className="guest-badge gold-badge">Honorable Chairman</div>
                  <h3 className="guest-name chief-name">Dr. Deependra Singh</h3>
                  <p className="guest-role chief-role">ERC, Pharmacy Council of India</p>
                  <div className="editorial-divider"></div>
                  <p className="editorial-bio">
                    Leading the transformation of pharmaceutical education and AI integration standards across the nation.
                  </p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="guest-linkedin-btn">
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Guests of Honor */}
            <div className="honor-card-wrapper">
              <h2 className="guest-col-title">GUESTS OF HONOR</h2>

              <div className="honor-stack">

                <div className="honor-guest-card horizontal-card">
                  <div className="pharma-ai-icon"><Star size={20} strokeWidth={1.5} /></div>
                  <div className="guest-image-wrapper honor-img-wrapper">
                    <img src={cheif} alt="guest" />
                  </div>
                  <div className="horizontal-card-body">
                    <p className="guest-role honor-role">Vice President</p>
                    <h3 className="guest-name honor-name">Dr. Lalit Kumar Goel</h3>
                    <p className="guest-org honor-org">Pharmacy Council of India</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="guest-linkedin-btn honor-linkedin-btn">
                      <Linkedin size={14} />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="honor-guest-card horizontal-card">
                  <div className="pharma-ai-icon"><Star size={20} strokeWidth={1.5} /></div>
                  <div className="guest-image-wrapper honor-img-wrapper">
                    <img src={cheif} alt="guest" />
                  </div>
                  <div className="horizontal-card-body">
                    <p className="guest-role honor-role">Member</p>
                    <h3 className="guest-name honor-name">Dr. Sandeep Kumar</h3>
                    <p className="guest-org honor-org">Pharmacy Council of India</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="guest-linkedin-btn honor-linkedin-btn">
                      <Linkedin size={14} />
                      LinkedIn
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SPEAKERS SECTION */}
        <section className="speakersection" loading="lazy">
          <div className="speaker-bg-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>
          <div className="speaker-headings">
            <span className="international-tag" id="speakers">THE CONVENTION SPEAKERS</span>

            <h2>Meet the Minds Shaping the <i>Future</i></h2>

            <p className="international-description">
              Discover the global visionaries and local pioneers driving the intersection of Pharmaceuticals and Artificial Intelligence.
            </p>
          </div>

          <Tab />
        </section>

        <Ideathon />

        {/* CALL FOR SPEAKERS SECTION */}
        <section className="cfs-section" id="call-for-speakers">
          {/* Decorative background elements */}
          <div className="cfs-bg-shapes">
            <div className="cfs-bg-pill cfs-bg-pill--1"></div>
            <div className="cfs-bg-pill cfs-bg-pill--2"></div>
            <div className="cfs-bg-circle cfs-bg-circle--1"></div>
          </div>
          <div className="cfs-inner">
            {/* Left — text content */}
            <div className="cfs-content">
              <span className="cfs-tag">CALL FOR SPEAKERS</span>

              <h2 className="cfs-heading">
                Share Your Expertise on the <em>Global Stage</em>
              </h2>

              <p className="cfs-subtext">
                We invite pharma professionals, AI researchers, clinicians, and
                innovators to present their work at the Digi-Tech Pharma &amp; AI
                Conference. Join a distinguished lineup of thought leaders and
                help shape the future of pharmaceutical science.
              </p>

              <ul className="cfs-benefits">
                <li>
                  <span className="cfs-check">✔</span>
                  Reach an audience of 500+ global pharma &amp; tech leaders
                </li>
                <li>
                  <span className="cfs-check">✔</span>
                  Present keynotes, workshops, or panel discussions
                </li>
                <li>
                  <span className="cfs-check">✔</span>
                  Recognised in official conference proceedings &amp; media
                </li>
                <li>
                  <span className="cfs-check">✔</span>
                  Network with top academics, industry experts &amp; regulators
                </li>
                <li>
                  <span className="cfs-check">✔</span>
                  Complimentary conference pass &amp; speaker recognition kit
                </li>
              </ul>

              <a href="https://link.springer.com/journal/11096" target="_blank" rel="noopener noreferrer" className="cfs-link">
                <span className="cfs-link-text">Submit Your Proposal</span>
                <span className="cfs-link-arrow" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Right — visual highlight panel */}
            <div className="cfs-panel">
              {/* Decorative ring */}
              <div className="cfs-ring" aria-hidden="true"></div>

              <p className="cfs-panel-eyebrow">Why Speak With Us?</p>

              <div className="cfs-stats">
                <div className="cfs-stat">
                  <strong>500<span>+</span></strong>
                  <span>Attendees</span>
                </div>
                <div className="cfs-stat">
                  <strong>30<span>+</span></strong>
                  <span>Expert Speakers</span>
                </div>
                <div className="cfs-stat">
                  <strong>2</strong>
                  <span>Conference Days</span>
                </div>
                <div className="cfs-stat">
                  <strong>10<span>+</span></strong>
                  <span>Session Tracks</span>
                </div>
              </div>

              <blockquote className="cfs-quote">
                "The best way to predict the future of pharma is to present it."
              </blockquote>

              <div className="cfs-panel-tags">
                <span>Keynotes</span>
                <span>Workshops</span>
                <span>Panels</span>
                <span>Case Studies</span>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative bridge to navy footer */}
        <div className="footer-bridge-curve">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0b1f3a" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,170.7C672,181,768,171,864,149.3C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;