import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.scss';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate inputs before submission (example: ensure email is not empty)
    if (!formData.email) {
      alert('Email cannot be empty!');
      return;
    }
    
    // Send the formData to an API or process it accordingly
    console.log(formData);
    
    // Reset the form after submission for better UX
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    alert('Thank you for contacting us!');
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Me</h1>
      </header>

      <section className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
