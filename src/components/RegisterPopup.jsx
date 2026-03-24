import React, { useState } from "react";
import "./RegisterPopup.css";
import SubmissionForm from "./SubmissionForm";

import sviet from "../photos/SVIET-Logo.png";
import Logo from "../photos/logo.png";

const RegisterPopup = ({ closePopup, startWithForm = false }) => {
  const [showSubmissionForm, setShowSubmissionForm] = useState(startWithForm);

  if (showSubmissionForm) {
    return (
      <div className="popup-overlay">
        <div className="popup-container submission-popup-container">
          <SubmissionForm closePopup={closePopup} />
        </div>
      </div>
    );
  }


  return (
    <div className="popup-overlay">

      <div className="popup-container">

        <button
          className="close-btn"
          onClick={closePopup}
        >
          ✕
        </button>

        <div className="popup-logos">
          <img src={sviet} alt="SVIET"/>
          <div className="divider"></div>
          <img src={Logo} alt="Ministry"/>
        </div>

        <h2 className="popup-title">
          Register for AI & Emerging Pharmacy 2026
        </h2>

        <div className="popup-row">
          <span>Register as Delegate</span>
          <button className="register-btn">
            Register →
          </button>
        </div>

        <div className="line"></div>

        <div className="popup-row">
          <span>Submit Abstract</span>
          <button 
            className="register-btn secondary"
            onClick={() => setShowSubmissionForm(true)}
          >
            Submit →
          </button>
        </div>

        <div className="line"></div>

        <div className="popup-row">
          <span>Register for Attendance</span>
          <button className="register-btn">
            Register →
          </button>
        </div>

      </div>

    </div>
  );
};

export default RegisterPopup;
