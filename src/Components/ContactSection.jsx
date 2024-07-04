import React, { useState } from 'react';
import axios from 'axios';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/signup', formData); // Adjust URL based on your backend setup
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.message : 'Error sending message!');
      setSuccessMessage('');
    }
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input className="form-control" id="name" type="text" placeholder="Enter your name..." value={formData.name} onChange={handleChange} required />
                <label htmlFor="name">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" value={formData.phone} onChange={handleChange} required />
                <label htmlFor="phone">Phone number</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{ height: '10rem' }} value={formData.message} onChange={handleChange} required></textarea>
                <label htmlFor="message">Message</label>
              </div>
              {successMessage && <div className="text-center mb-3 text-success">{successMessage}</div>}
              {errorMessage && <div className="text-center mb-3 text-danger">{errorMessage}</div>}
              <button className="btn btn-primary btn-xl" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
