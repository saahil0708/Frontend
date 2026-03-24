import React, { useState } from "react";
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
import RegisterPopup from "../components/RegisterPopup.jsx";

const Home = () => {
  const [activeGuestTab, setActiveGuestTab] = useState("Chief Guest");
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const handleDownload = () => {
    window.open("https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZJ46h0FpQ5jLQfDS1GUPkB0KspceuJ9oV8r74", "_blank");
  };

  const guestData = {
    "Chief Guest": [
      {
        name: "Dr. Deependra Singh",
        role: "ERC, Pharmacy Council of India",
        badge: "Honorable Chairman",
        bio: "Leading the transformation of pharmaceutical education and AI integration standards across the nation.",
        image: cheif,
        linkedin: "#",
      },
      {
        name: "Dr. Susheel Mittal",
        role: "Vice Chancellor",
        org: "IKGPTU Jalandhar, Punjab, India",
        image: "https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZRPkD41vJES7jIiB5lhfpwM4zZRK0N2Vts6bF",
        linkedin: "#",
      },
    ],
    "Guest of Honor": [
      {
        name: "Mr. Gopal Krishan",
        role: "",
        org: "Pharmacy Council of India",
        image: "https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZFl60TxoyOG4JnmMrRqx9ENKsAl2VUHjIZwT3",
        linkedin: "#",
      },
      {
        name: "Mr. Sushil Kumar Bansal",
        role: "Executive Member PCI Chairman PB. Pharmacy Council.",
        org: "",
        image: "https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZnJF3Gr2BkCHqJP6rL9D7jaG8ze2MVlfIpEt4",
        linkedin: "#",
      },
    ],
  };

  const [activePatronTab, setActivePatronTab] = useState("Chief Patrons");

  const patronData = {
    "Chief Patrons": [
      {
        name: "Mr. Ashwani Garg",
        role: "Chairman, SVGOI",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRlouMJoohIvE2FjWzl3KsrnUCQN1XmMgHoBvwtp",
        linkedin: "#",
      },
      {
        name: "Mr. Ashok Garg",
        role: "President, SVGOI",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRlosW19FLBvCDm2nN4yVSdfHKJxZb1AQPjklcYt",
        linkedin: "#",
      },
    ],
    "Patrons": [
      {
        name: "Er. Vishal Garg",
        role: "Director Secretarial, SVGOI",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRloCmQ6VlKHMESZ09lDLJrXztUB8iOGpw7PF2sb",
        linkedin: "#",
      },
      {
        name: "Er. Sahil Garg",
        role: "Project Director, SVGOI",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRlogE8XsKzZfV7GO50pNth8DPSg6iox4W9ydvqn",
        linkedin: "#",
      },
      {
        name: "Adv. Subham Garg",
        role: "Director of Placement, SVGOI",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRlobnALAg5yk0O4s1fUZdglJEiuBoqGcK5FCSma",
        linkedin: "#",
      },
      {
        name: "Er. Ankur Gill",
        role: "Director Operations, SVGOI",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRlofSrDBng0GyHLckOQps3UR4NaPSEhBziV8KrI",
        linkedin: "#",
      },
      {
        name: "Mr. Ankur Gupta",
        role: "Director Finance, SVGOI",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRlo3s7YDfCpG8zAKh0vR4l6MLxUInrduCTWOJej",
        linkedin: "#",
      },
    ],
    "Co-Patrons": [
      {
        name: "Dr. Sanjeev Saini",
        role: "Director Academics, SVGOI",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRloq7wh8Q63KU0ko5JWfMm1Y2zVpecnNa89xwRG",
        linkedin: "#",
      },
      {
        name: "Dr. AK Tiwari",
        role: "Director Research, SVGOI",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRloetf0tCr3WRTUHAcjaCNQZliGExd0g5q81vhz",
        linkedin: "#",
      },
      // {
      //   name: "TBA",
      //   role: "Co-Patron",
      //   image: "https://via.placeholder.com/400x500",
      //   linkedin: "#",
      // },
    ],
    "Convenors": [
      {
        name: "Dr.Manish Goswami",
        role: "Principal, SVCP",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRlo5r8AUtxQpukCUVmqBRKWhaFEP69NZbSv1ezg",
        linkedin: "#",
      },
      {
        name: "Dr. Amit Goyal",
        role: "Principal, SVIP",
        image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRlovvmR2rPhwXgcOBZUobduYnD9ItHVFGz1kWlf",
        linkedin: "#",
      },
    ],
  };

  const judgeData = [
    {
      name: "JYOTI SINGH",
      role: "Honorable Judge",
      image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRloH8qdXVAskDlvwbSeBxm7rAInh62KpYsdayg9",
      bio: "Associate professor, CGC landran.",
      linkedin: "#",
    },
    {
      name: "Dr. SHAVETA SHARMA",
      role: "Honorable Judge",
      image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRloPcfhtQMOs7USJcW9mxTYH4o3eraQyFZEzBpi",
      bio: "Assistant professor, CGC landran.",
      linkedin: "#",
    },
    {
      name: "Dr. AMARJOT KAUR GREWAL",
      role: "Honorable Judge",
      image: "https://ljce5xqitn.ufs.sh/f/IJaVNK1rdRloxDSeX8lYQGai9ce5WdpZXtqFJST7zuMjwvhL",
      bio: "Professor, Chitkara College of Pharmacy.",
      linkedin: "#",
    },
  ];


  return (
    <div className="home-page-wrapper">
      <div className="home-page-container">
        {/* HERO SECTION */}
        <section className="home-section" id="home">
          <img
            src="https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZLjQz16tlfWA4nhFqCGvbYBj6gP1Jm0xHws3L"
            alt="Hero Mobile"
            className="mobile-hero-img"
          />
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
                <button className="button" onClick={handleDownload}>
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
          <div className="guests-wrapper-decor"></div>
          <div className="guests-headings-container">
            <span className="guests-tag" id="guests">HONORED GUESTS</span>
            <h2 className="guests-main-title">Esteemed Visionaries & Leaders</h2>
            <p className="guests-description">
              Welcoming the distinguished minds guiding the future of Pharmacy and AI innovation.
            </p>
          </div>

          <div className="guest-tabs-nav">
            {Object.keys(guestData).map((tab) => (
              <button
                key={tab}
                className={`guest-tab-btn ${activeGuestTab === tab ? "active" : ""}`}
                onClick={() => setActiveGuestTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="guests-display-container">
            <div className="guests-expansion-grid">
              {guestData[activeGuestTab].map((guest, index) => (
                <div key={index} className="expanded-guest-card">
                  <div className="guest-card-inner">
                    <div className="guest-image-box">
                      <img src={guest.image} alt={guest.name} />
                      <div className="guest-collapsed-info">
                        <h3>{guest.name}</h3>
                        <p>{guest.role}</p>
                      </div>
                    </div>
                    <div className="guest-info-box">
                      {guest.badge && <div className="guest-badge gold-badge">{guest.badge}</div>}
                      <h3 className="guest-name">{guest.name}</h3>
                      <p className="guest-role">{guest.role}</p>
                      {guest.org && <p className="guest-org">{guest.org}</p>}
                      {guest.bio && <p className="guest-bio">{guest.bio}</p>}
                      <a href={guest.linkedin} target="_blank" rel="noopener noreferrer" className="guest-linkedin-btn">
                        <Linkedin size={16} />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PATRONS SECTION */}
        <section className="patrons-wrapper" loading="lazy">
          <div className="patrons-headings-container">
            <span className="patrons-tag" id="patrons">CONFERENCE PATRONS</span>
            <h2 className="patrons-main-title">Guidance & Support</h2>
            <p className="patrons-description">
              Acknowledging the distinguished leaders who provide the vision and support for this conference.
            </p>
          </div>

          <div className="patron-tabs-nav">
            {Object.keys(patronData).map((tab) => (
              <button
                key={tab}
                className={`patron-tab-btn ${activePatronTab === tab ? "active" : ""}`}
                onClick={() => setActivePatronTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="patrons-display-container">
            <div className={`patrons-expansion-grid ${activePatronTab === "Chief Patrons" ? "chief-patrons-grid" : ""}`}>
              {patronData[activePatronTab].map((patron, index) => (
                <div key={index} className={`expanded-patron-card ${activePatronTab === "Chief Patrons" ? "chief-patron-card" : ""}`}>
                  <div className="patron-card-inner">
                    <div className="patron-image-box">
                      <img src={patron.image} alt={patron.name} />
                      <div className="patron-collapsed-info">
                        <h3>{patron.name}</h3>
                      </div>
                    </div>
                    <div className="patron-info-box">
                      <h3 className="patron-name">{patron.name}</h3>
                      <p className="patron-role">{patron.role}</p>
                      {patron.org && <p className="patron-org">{patron.org}</p>}
                      <a href={patron.linkedin} target="_blank" rel="noopener noreferrer" className="patron-linkedin-btn">
                        <Linkedin size={16} />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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

        {/* JUDGES SECTION */}
        <section className="judges-wrapper" loading="lazy">
          <div className="judges-headings-container">
            <span className="judges-tag" id="judges">CONFERENCE JUDGES</span>
            <h2 className="judges-main-title">Distinguished Evaluation Panel</h2>
            <p className="judges-description">
              Meet the eminent experts who will be evaluating the groundbreaking research and innovations at our conference.
            </p>
          </div>

          <div className="judges-display-container">
            <div className="judges-expansion-grid">
              {judgeData.map((judge, index) => (
                <div key={index} className="expanded-judge-card">
                  <div className="judge-card-inner">
                    <div className="judge-image-box">
                      <img src={judge.image} alt={judge.name} />
                      <div className="judge-collapsed-info">
                        <h3>{judge.name}</h3>
                        <p>{judge.role}</p>
                      </div>
                    </div>
                    <div className="judge-info-box">
                      <h3 className="judge-name">{judge.name}</h3>
                      <p className="judge-role">{judge.role}</p>
                      {judge.bio && <p className="judge-bio">{judge.bio}</p>}
                      <a href={judge.linkedin} target="_blank" rel="noopener noreferrer" className="judge-linkedin-btn">
                        <Linkedin size={16} />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      {showRegisterPopup && <RegisterPopup closePopup={() => setShowRegisterPopup(false)} startWithForm={true} />}
    </div>
  );
};


export default Home;