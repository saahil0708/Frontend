import React from "react";
import "./Contact.css";
import { Mail, MapPin, Phone, Clock, Globe, Linkedin, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <span className="contact-badge">GET IN TOUCH</span>
          <h1 className="contact-title">Connect with Our Team</h1>
          <p className="contact-description">
            Have questions about the Digi-Tech Pharma & AI Conference 2026? 
            We're here to help you navigate the future of healthcare.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Info Side */}
          <div className="contact-info-panel">
            <div className="info-card">
              <div className="info-icon-wrapper">
                <Mail className="info-icon" />
              </div>
              <div className="info-text">
                <h3>Email Us</h3>
                <p>Support & General Inquiries</p>
                <a href="mailto:contact@pharmaconference.tech">contact@pharmaconference.tech</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <MapPin className="info-icon" />
              </div>
              <div className="info-text">
                <h3>Visit Us</h3>
                <p>Conference Headquarters</p>
                <span>Banur, Near Chandigarh, Punjab, India</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <Phone className="info-icon" />
              </div>
              <div className="info-text">
                <h3>Call Us</h3>
                <p>Mon-Fri, 9am - 6pm (IST)</p>
                <span>+91 176 250 7222</span>
              </div>
            </div>

            <div className="social-connect">
              <h4>Follow the Conversation</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/svgoichandigarh/" target="_blank" className="social-item"><Linkedin /></a>
                <a href="https://sviet.ac.in/" target="_blank" className="social-item"><Globe /></a>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="contact-visual-panel">
            <div className="map-container-new">
              <iframe
                title="SVIET Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.658010611146!2d76.6698552757876!3d30.53070807468236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc2e25466d5e7%3A0xf0bbb65fa7fca376!2sSwami%20Vivekanand%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1772518561965!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
              <div className="map-overlay">
                <p><Clock size={16} /> Campus visiting hours: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
