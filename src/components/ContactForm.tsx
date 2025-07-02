import React, { useState } from 'react';
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    contact: string;
    message: string;
  }>({
    contact: '',
    message: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateContact = (contact: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/; // Basic regex for a phone number
    return emailRegex.test(contact) || phoneRegex.test(contact);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { contact } = formData;
    if (!validateContact(contact)) {
      console.error('Invalid email or phone number');
      return;
    }
    // Proceed with form submission logic
    console.log('Form submitted:', formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="contact"
        placeholder="Your Email or Phone"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};
export default ContactForm;