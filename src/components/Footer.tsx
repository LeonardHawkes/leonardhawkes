// src/components/Footer.tsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ""
  });

   // Handle input changes
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Please fill out all required fields."
      });
      return;
    }
    
    setFormStatus({
      ...formStatus,
      submitting: true,
      error: false,
      message: ""
    });

    try {
      // Get the env vars
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY; 

      if(!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not set");
      }
      
      // Send the email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      console.log('EmailJS Results: ', result.text);
      
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: `Message sent successfully! (ID: ${result.text})` 
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          success: false,
          message: ""
        }));
      }, 5000);
      
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "An error occurred while sending your message. Please try again later."
      });
    }
  };

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
              <a href="https://medium.com/@leonardhawkesjr" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-medium" />
                </a>
              <a
                href="/PrivateResume.pdf"
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
          {formStatus.success && (
            <div className="form-success-message">
                {formStatus.message}
            </div>
          )}

          {formStatus.error && (
            <div className="form-error-message">
                {formStatus.message}
            </div>
          )}
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    value={formData.name}
                    onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Your Email" 
                    required
                    value={formData.email} 
                    onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
            <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Subject" 
                required 
                value={formData.subject}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                placeholder="Your Message" 
                rows={4} 
                required
                value={formData.message}
                onChange={handleChange}
                ></textarea>
            </div>
            <button 
                type="submit" 
                className="button"
                disabled={formStatus.submitting}
                >
              {formStatus.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Leonard Hawkes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;