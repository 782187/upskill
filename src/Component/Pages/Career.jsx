import { ArrowRight, Mail, Phone, Clock, Send, User, MapPin, FileText } from "lucide-react";
import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      for (const key in formData) {
        formPayload.append(key, formData[key]);
      }

      await axios.post(`${API_URL}/submit-career-application`, formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('Application submitted successfully! We will contact you soon.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        position: '',
        resume: null
      });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.', {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section id="home" className="p-5 d-flex align-items-center position-relative bg-light">
        <div className="container position-relative py-3">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">
                Elevate Your Tech Career with <span className="text-primary">RsSofttecs</span>
              </h1>
              <p className="lead text-muted mb-4">
                Expert-led training in Fullstack Java, Python, Software Testing, and Web Development designed to transform your career path.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a href="#apply" className="btn btn-primary d-flex align-items-center justify-content-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </a>
                <Link to={`courses`} className="btn btn-outline-primary">
                  Explore Courses
                </Link>
              </div>
            </div>

            <div className="col-md-6 position-relative">
              <div className="rounded overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
                  alt="Tech professionals collaborating"
                  className="img-fluid"
                />
              </div>
              <div className="position-absolute top-0 end-0 translate-middle bg-white shadow-sm p-2 rounded small d-flex align-items-center gap-2">
                <div className="bg-success rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                High Demand Skills
              </div>
              <div className="position-absolute bottom-0 start-0 translate-middle bg-white shadow-sm p-2 rounded small d-flex align-items-center gap-2">
                <div className="bg-primary rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                Mentorship Included
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <User size={24} className="text-primary" />
                  </div>
                  <h5 className="card-title fw-semibold">Expert Mentors</h5>
                  <p className="card-text text-muted small">
                    Learn from industry professionals with 10+ years of experience in top tech companies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <h5 className="card-title fw-semibold">Flexible Learning</h5>
                  <p className="card-text text-muted small">
                    Choose between online or hybrid learning options to fit your schedule and location.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <FileText size={24} className="text-primary" />
                  </div>
                  <h5 className="card-title fw-semibold">Career Support</h5>
                  <p className="card-text text-muted small">
                    Get resume reviews, mock interviews, and job placement assistance upon course completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="py-5 bg-light border-top">
        <div className="container px-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary">Apply Now to Join RsSofttecs</h2>
            <p className="text-muted">Your journey to becoming job-ready in tech starts here 🚀</p>
          </div>

          <div className="row shadow-lg rounded-4 overflow-hidden">
            <div
              className="col-lg-4 p-4 text-white d-flex flex-column justify-content-center"
              style={{
                background: "linear-gradient(180deg, #60a5fa, #a855f7)",
              }}
            >
              <h4 className="fw-bold mb-3">Why Join Us?</h4>
              <p>At RsSofttecs, we're committed to your success. Here's what makes us different:</p>
              <ul className="mt-4 ps-3">
                <li className="mb-2">Hands-on projects with real-world applications</li>
                <li className="mb-2">1:1 mentorship sessions</li>
                <li className="mb-2">Career guidance and interview prep</li>
                <li className="mb-2">Flexible payment options</li>
                <li>Alumni network access</li>
              </ul>
              
              <div className="mt-4 pt-3 border-top">
                <h5 className="fw-bold mb-3">Contact Information</h5>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
                    <Mail size={18} className="me-2" /> akshaytakale321@gmail.com
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <Phone size={18} className="me-2" /> +91 9970981875
                  </li>
                  <li className="d-flex align-items-center">
                    <Clock size={18} className="me-2" /> Mon - Sat: 10AM - 7PM
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8 bg-white p-4 p-md-5">
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12 col-md-6">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name" 
                      placeholder="Full Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                    <label htmlFor="name">Full Name</label>
                  </div>
                </div>
                
                <div className="col-12 col-md-6">
                  <div className="form-floating">
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>
                
                <div className="col-12 col-md-6">
                  <div className="form-floating">
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone" 
                      name="phone" 
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                </div>
                
                <div className="col-12 col-md-6">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="location" 
                      name="location" 
                      placeholder="City / Location" 
                      value={formData.location}
                      onChange={handleChange}
                      required 
                    />
                    <label htmlFor="location">City / Location</label>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="position" 
                      name="position" 
                      placeholder="Position Applying For" 
                      value={formData.position}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="position">Position Applying For</label>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-floating">
                    <input 
                      type="file" 
                      className="form-control" 
                      id="resume" 
                      name="resume" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="resume">Upload Resume (PDF/DOC)</label>
                  </div>
                </div>
                
                <div className="col-12 d-grid mt-3">
                  <button
                    type="submit"
                    className="btn btn-lg text-white fw-semibold shadow py-3"
                    style={{
                      background: "linear-gradient(to right, #06b6d4, #9333ea)",
                      border: "none",
                      borderRadius: "12px",
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    ) : (
                      <>
                        Submit Application <Send size={18} className="ms-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;