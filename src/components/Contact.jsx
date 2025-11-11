import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Let’s connect — whether you have a project idea, want to collaborate, or just say hello.
      </p>

      <div className="contact-links">
        <a href="mailto:kiranpreet1904@gmail.com" target="_blank" rel="noopener noreferrer">
          <span className="material-icons">email</span> kiranpreet1904@gmail.com
        </a>
        <a href="tel:+917973885617">
          <span className="material-icons">call</span> +91 7973885617
        </a>
        <a href="https://www.linkedin.com/in/kaur-kiran-preet/" target="_blank" rel="noopener noreferrer">
          <span className="material-icons">link</span> LinkedIn
        </a>
        <a href="https://github.com/kiran1560" target="_blank" rel="noopener noreferrer">
          <span className="material-icons">code</span> GitHub
        </a>
      </div>
    </section>
  );
}
