import React, { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [loading, setLoading] = useState(false); 

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
    setLoading(true);
    setStatusMessage('');
    setStatusType('');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('year', formData.year);

    try {
      const response = await axios.post(
        `${API_URL}/submit-enquiry`,
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
        resetForm();
      } else {
        setStatusMessage(response.data.message || 'Something went wrong');
        setStatusType('error');
      }
    } catch (error) {
      if (error.response) {
        setStatusMessage(error.response.data.message || 'Server error occurred.');
      } else if (error.request) {
        setStatusMessage('No response from server. Please check your internet connection.');
      } else {
        setStatusMessage(error.message || 'An unexpected error occurred.');
      }
      setStatusType('error');
    } finally {
      setLoading(false);
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Sending...
            </>
          ) : (
            'Submit Enquiry'
          )}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
