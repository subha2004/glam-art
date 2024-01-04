import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", data);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <h1>Contact <span>Here</span></h1>
      <input type="text" name="name" onChange={handleChange} value={data.name} placeholder="Enter Name" />
      <input type="email" name="email" onChange={handleChange} value={data.email} placeholder="Enter the Email ID" />
      <input type="tel" name="phone" onChange={handleChange} value={data.phone} placeholder="+91" />
      <textarea name="message" onChange={handleChange} value={data.message} rows="10" placeholder="Type here..."></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;