import React, { useState } from 'react';
import axios from 'axios';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      year: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('year', formData.year);

    try {
      const response = await axios.post(
        'https://upskill-server.onrender.com/submit-enquiry',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.status === 'success') {
        setStatusMessage(response.data.message);
        setStatusType('success');
      } else {
        setStatusMessage(response.data.message || 'Something went wrong');
        setStatusType('error');
      }
      resetForm();
    } catch (error) {
      if (error.response) {
        console.error('Server Error:', error.response.data);
        setStatusMessage(error.response.data.message || 'Server error occurred.');
      } else if (error.request) {
        console.error('No response received:', error.request);
        setStatusMessage('No response from server. Please check your internet connection.');
      } else {
        console.error('Error:', error.message);
        setStatusMessage(error.message || 'An unexpected error occurred.');
      }

      setStatusType('error');
      resetForm();
    }

  };

  return (
    <div className="form-box p-4 rounded bg-light text-dark shadow">
      <h4 className="mb-3">Enquire Now</h4>

      {statusMessage && (
        <div
          className={`alert ${statusType === 'success' ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`}
          role="alert"
        >
          {statusMessage}
          <button type="button" className="btn-close" onClick={() => setStatusMessage('')} />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            id="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="year" className="form-label">Passing Year</label>
          <input
            type="number"
            name="year"
            className="form-control"
            id="year"
            placeholder="Passing Out Year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
