import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Me</h1>
      </header>

      <section className="contact-content">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
