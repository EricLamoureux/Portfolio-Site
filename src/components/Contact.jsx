// Contact.jsx

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
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      // Log form data for testing
      console.log("Form Data Captured: ", formData);

      alert("Message sent!");
  
      // Redirect to the home page
      navigate('/');
    };
  
    return (
      <div>
        <h1>Contact Me</h1>
  
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Contact Information */}
          <div style={{ flex: '1', padding: '10px' }}>
            <h2>Eric Lamaoureux</h2>
            <p>Email: eric.lamoureux98@gmail.com</p>
            <p>Phone: (416) 577-9307</p>
            <p>Location: Guelph, Ontario</p>
          </div>
  
          {/* Contact Form */}
          <div style={{ flex: '1', padding: '10px' }}>
            <form onSubmit={handleSubmit}>
              <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </label>
              <br />
              <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </label>
              <br />
              <label>
                Contact Number:
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
              </label>
              <br />
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <br />
              <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
              </label>
              <br />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
