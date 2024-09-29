/*
  File Name: Contact.jsx
  Student's Name: Eric Lamoureux
  StudentID: 301013898
  Date: September 29, 2024
*/

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: ''
    });

    const navigate = useNavigate();

    // Form input change
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data Captured: ", formData);
      alert("Message sent!");
      navigate('/');
    };

    return (
      <div>
        <h1>Contact Me</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Contact Information */}
          <div style={{ flex: '1', padding: '10px' }}>
            <h2>Eric Lamoureux</h2>
            <p>Email: eric.lamoureux98@gmail.com</p>
            <p>Phone: (416) 577-9307</p>
            <p>Location: Guelph, Ontario</p>
          </div>

          {/* Contact Form */}
          <div style={{ flex: '1', padding: '10px' }}>
            <form onSubmit={handleSubmit}>
              <label>First Name:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              <br />
              <label>Last Name:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              <br />
              <label>Contact Number:</label>
              <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
              <br />
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <br />
              <label>Message:</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
              <br />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;
