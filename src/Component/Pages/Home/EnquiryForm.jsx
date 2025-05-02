import React, { useState } from 'react';
import axios from 'axios';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('year', year);

    axios.post('https://upskill-servlet.onrender.com/UpskillServlet/submit-enquiry', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        if (response.data.status === 'success') {
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
        
        setName('');
        setEmail('');
        setPhone('');
        setYear('');
      })
      .catch(error => {
        alert('Error submitting data. Please try again later.');
        setName('');
        setEmail('');
        setPhone('');
        setYear('');
      });
  };

  return (
    <div className="form-box p-4 rounded bg-light text-dark shadow">
      <h4 className="mb-3">Enquire Now</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">Passing Year</label>
          <input
            type="number"
            className="form-control"
            id="year"
            placeholder="Passing Out Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
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
