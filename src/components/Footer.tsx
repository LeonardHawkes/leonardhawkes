import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer">
            <section className="contact-section">
                <h2>Get In Touch</h2>
                <p>
                    I'm always interested in new opportunities and collaborations.
                    Feel free to reach out if you have a project in mind or just want to connect!
                </p>

                <form method="post" action="#">
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows={3}></textarea>
                        </div>
                    </div>
                    <ul className="actions">
                        <li>
                            <input type="submit" value="Send Message" />
                        </li>
                    </ul>
                </form>
            </section>

            <section className="split contact">
                <section className="alt">
                    <h3>Location</h3>
                    <p>Brooklyn, NY</p>
                </section>
                <section>
                    <h3>Email</h3>
                    <p><a href="mailto:contact@leonardhawkesjr@gmail.com">contact@leonardhawkesjr@gmail.com</a></p>
                </section>
                <section>
                    <h3>Social</h3>
                    <ul className="icons alt">
                        <li>
                            <a href="https://www.linkedin.com/in/leonardhawkes" className="icon brands alt fa-linkedin">
                                <span className="label">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/leonardhawkes" className="icon brands alt fa-github">
                                <span className="label">Github</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </section>

            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Leonard Hawkes. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;