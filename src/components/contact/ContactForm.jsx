import React from "react";
import "./contact.css"; // Import your CSS module

const ContactPage = () => {
  return (
    <div className="contact-parent">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-content">
          Have questions or feedback? We'd love to hear from you! Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam nec feugiat enim,
          nec congue arcu. Phasellus luctus facilisis nisl, eget pellentesque
          elit congue et.
        </p>
        <p className="contact-content">
          Feel free to contact us using the form below. Our team will get back
          to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
