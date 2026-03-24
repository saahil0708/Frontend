import React, { useState } from "react";
import "./SubmissionForm.css";
import { Upload, CheckCircle, AlertCircle, Loader2, X } from "lucide-react";
import axios from "axios";

const SubmissionForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    affiliation: "",
    title: "",
  });

  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setMessage("");
    } else {
      setFile(null);
      setMessage("Please upload a valid PDF file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please upload your abstract in PDF format.");
      return;
    }

    setStatus("loading");
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("designation", formData.designation);
    data.append("affiliation", formData.affiliation);
    data.append("title", formData.title);
    data.append("pdf", file);

    try {
      const response = await axios.post("http://localhost:5000/api/submit", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setStatus("success");
        setMessage(response.data.message);
      }
    } catch (error) {
      setStatus("error");
      const errorMessage = error.response?.data?.message || "Something went wrong. Please try again.";
      setMessage(errorMessage);
    }
  };


  return (
    <div className="submission-outer-container">
      <div className="submission-form-container light-theme">
        <button className="form-close-btn" onClick={closePopup}>
          <X size={24} />
        </button>
        
        <div className="form-header">
          <h2 className="form-title">Registration & Abstract Submission</h2>
          <p className="form-subtitle">Digi-Tech Pharma & AI Conference 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="submission-form grid-layout">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="designation">Designation</label>
              <select
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select designation</option>
                <option value="Professor">Professor</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Lecturer">Lecturer</option>
                <option value="PhD Scholar">PhD Scholar</option>
                <option value="Student">Student</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="affiliation">Affiliation / Organization</label>
              <input
                type="text"
                id="affiliation"
                name="affiliation"
                placeholder="University or Company"
                value={formData.affiliation}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="title">Title of Abstract</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Research title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>


          <div className="form-group full-width">
            <label>Upload Abstract (PDF)</label>
            <div className={`file-upload-zone ${file ? 'has-file' : ''}`}>
              <input
                type="file"
                id="pdf"
                accept=".pdf"
                onChange={handleFileChange}
                className="file-input"
              />
              <div className="upload-content">
                {file ? (
                  <>
                    <CheckCircle className="upload-icon-small" />
                    <span>{file.name}</span>
                  </>
                ) : (
                  <>
                    <Upload className="upload-icon" />
                    <span>Click to upload or drag & drop</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {message && status === "error" && (
            <div className="error-message full-width">
              <AlertCircle className="error-icon" />
              <span>{message}</span>
            </div>
          )}

          <div className="form-footer full-width">
            <button 
              type="submit" 
              className="submit-button"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="spinner" />
                  Submitting...
                </>
              ) : (
                "Register & Submit"
              )}
            </button>
          </div>
        </form>

        {/* Success Modal Overlay */}
        {status === "success" && (
          <div className="success-overlay">
            <div className="success-modal">
              <CheckCircle className="success-icon" />
              <h2>Registration Successful!</h2>
              <p>{message}</p>
              <button className="confirm-btn" onClick={closePopup}>Done</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmissionForm;
