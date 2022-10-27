import React from "react";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1>GET IN TOUCH</h1>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email" />
          <input type="email" placeholder="Topic" />
          <button className="contact-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
