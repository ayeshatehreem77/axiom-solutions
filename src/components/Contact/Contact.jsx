import React from "react";

// Contact component preserves the original markup and IDs so existing scripts can target them.
export default function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">Get In Touch</h2>
        <form id="contact-form" className="contact-form" aria-label="Contact form">
          <div className="form-group">
            <label htmlFor="name" className="visually-hidden">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required aria-required="true" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="visually-hidden">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required aria-required="true" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="visually-hidden">Your Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Your Message" required aria-required="true"></textarea>
          </div>

          <button className="btn-primary" type="submit" aria-label="Send your message">
            <span className="btn-text">Send Message</span>
            <span className="btn-loading" style={{ display: "none" }}>Sending...</span>
          </button>
        </form>

        <div id="form-status" className="form-status" style={{ display: "none" }}></div>
      </div>
    </section>
  );
}
