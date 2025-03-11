// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("mnnpqjqg");
  if (state.succeeded) {
    return <p>Thank you for reaching out! I will get back to you as soon as possible!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter Your Name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Enter Your Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">
        Message
      </label>
      <textarea 
        className="message-box"
        id="message"
        name="message"
        placeholder="Enter Your Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;