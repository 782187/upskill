import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DemoBookingForm.css";

export default function DemoBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredDate: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4 fade-in">Book a Free Demo</h2>
          <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded bg-light animate-zoom">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Preferred Date</label>
              <input
                type="date"
                className="form-control"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Book Demo
            </button>

            {submitted && (
              <div className="alert alert-success mt-3 animate-fade">
                Demo booked successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
