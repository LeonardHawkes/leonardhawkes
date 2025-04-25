// src/components/Footer.tsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h2>Let's Connect</h2>
            <p>
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:leonardhawkesjr@gmail.com">
                leonardhawkesjr@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Brooklyn, NY</span>
            </div>
          </div>

          <div className="footer-social">
            <h3>Social Media</h3>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/leonardhawkes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.github.com/leonardhawkes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-form">
          <h3>Send Me a Message</h3>
          <form>
            <div className="form-row">
              <div className="form-group">
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea id="message" placeholder="Your Message" rows={4} required></textarea>
            </div>
            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Leonard Hawkes. All rights reserved.</p>
          <p>
            Built with <i className="fas fa-heart"></i> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;