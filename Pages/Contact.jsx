import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-header">
          <p className="contact-subtitle">Contact us</p>
          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-description">
            Our friendly team would love to hear from you.
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Info */}
          <div className="contact-info">

            <div className="info-box">
              <div className="icon-circle">✉</div>
              <h2>Email</h2>
              <p>Our friendly team is here to help.</p>
              <span>hello@merakiui.com</span>
            </div>

            <div className="info-box">
              <div className="icon-circle">📍</div>
              <h2>Office</h2>
              <p>Come say hello at our office HQ.</p>
              <span>100 Smith Street Collingwood VIC 3066 AU</span>
            </div>

            <div className="info-box">
              <div className="icon-circle">📞</div>
              <h2>Phone</h2>
              <p>Mon-Fri from 8am to 5pm.</p>
              <span>+1 (555) 000-0000</span>
            </div>

          </div>

          {/* Map */}
          <div className="map-wrapper">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.658010611146!2d76.6698552757876!3d30.53070807468236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc2e25466d5e7%3A0xf0bbb65fa7fca376!2sSwami%20Vivekanand%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1772518561965!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;