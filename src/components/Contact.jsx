import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Feel free to contact me using the form below!</p>
      <ContactForm />
    </div>
  );
}

export default Contact;
