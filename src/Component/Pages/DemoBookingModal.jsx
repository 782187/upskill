import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const DemoBookingModal = () => {
  const [validated, setValidated] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    axios.get(`${API_URL}/get-courses`)
      .then(res => setCourses(res.data))
      .catch(err => console.error("Error loading courses:", err));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setLoading(true);

    axios.post(`${API_URL}/submit-demo-booking`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        showToast("Demo booked successfully!", "success");
        setFormData({ name: "", contact: "", email: "", course: "" });
        document.getElementById("demoModalCloseBtn").click();
      })
      .catch(err => {
        console.error("Error submitting form:", err);
        showToast("Something went wrong!", "danger");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showToast = (message, type = "success") => {
    const toastEl = document.getElementById("toastMessage");
    const toastBody = document.getElementById("toastMessageBody");

    toastEl.classList.remove("bg-success", "bg-danger", "bg-warning");
    toastEl.classList.add(`bg-${type}`);
    toastBody.textContent = message;

    const toast = new window.bootstrap.Toast(toastEl);
    toast.show();
  };
  return (
    <>
      <style>{`
        /* Demo Modal Header - Modern Gradient */
        .demo-modal-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
          border: none;
          padding: 1.5rem 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .demo-modal-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
          pointer-events: none;
        }
        
        .demo-modal-header h1 {
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Demo Modal Body */
        .demo-modal-body {
          background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
          position: relative;
        }
        
        /* Demo Form Labels */
        .demo-label {
          color: #667eea;
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }
        
        .demo-label i {
          color: #764ba2;
        }
        
        /* Demo Form Inputs */
        .demo-input {
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          transition: all 0.3s ease;
          background: #ffffff;
          font-size: 0.95rem;
        }
        
        .demo-input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.15);
          outline: none;
          background: #ffffff;
        }
        
        .demo-input:valid {
          border-color: #28a745;
        }
        
        .demo-input:invalid:not(:placeholder-shown) {
          border-color: #dc3545;
        }
        
        /* Demo Buttons */
        .demo-btn-close {
          background: #ffffff;
          border: 2px solid #667eea;
          color: #667eea;
          border-radius: 10px;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .demo-btn-close:hover {
          background: #667eea;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .demo-btn-submit {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: #ffffff;
          border-radius: 10px;
          padding: 0.75rem 2rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .demo-btn-submit:hover:not(:disabled) {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }
        
        .demo-btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .demo-btn-submit .spinner-border-sm {
          width: 1rem;
          height: 1rem;
          border-width: 0.15em;
        }
        
        /* Invalid Feedback */
        .invalid-feedback {
          color: #dc3545;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .demo-modal-header {
            padding: 1.25rem 1.5rem;
          }
          
          .demo-modal-header h1 {
            font-size: 1.25rem;
          }
          
          .demo-modal-body {
            padding: 1.5rem !important;
          }
          
          .demo-btn-close,
          .demo-btn-submit {
            width: 100%;
            margin-top: 0.5rem;
          }
        }
      `}</style>
      <div
        className="modal fade"
        id="demoModal"
        tabIndex="-1"
        aria-labelledby="demoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="modal-header demo-modal-header text-white rounded-top-4">
              <h1 className="modal-title fs-4 fw-bold" id="demoModalLabel">
                <i className="fas fa-calendar-check me-2"></i>
                Book a Free Demo Session
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="demoModalCloseBtn"
              ></button>
            </div>

            <div className="modal-body demo-modal-body px-4 py-4">
              <form
                noValidate
                className={validated ? "was-validated" : ""}
                onSubmit={handleSubmit}
              >
                <div className="row gy-3 gy-sm-4 gx-2 gx-sm-4">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label demo-label fw-semibold">
                      <i className="fas fa-user me-2"></i>Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control demo-input"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Please enter your name</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact" className="form-label demo-label fw-semibold">
                      <i className="fas fa-phone me-2"></i>Contact Number
                    </label>
                    <input
                      type="tel"
                      className="form-control demo-input"
                      id="contact"
                      pattern="[0-9]{10}"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Enter a valid 10-digit phone number</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label demo-label fw-semibold">
                      <i className="fas fa-envelope me-2"></i>Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control demo-input"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Please enter a valid email</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="course" className="form-label demo-label fw-semibold">
                      <i className="fas fa-book me-2"></i>Select Course
                    </label>
                    <select
                      className="form-select demo-input"
                      id="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Choose a Course --</option>
                      {courses.length > 0 ? (
                        courses.map(course => (
                          <option key={course.id} value={course.title}>
                            {course.title}
                          </option>
                        ))
                      ) : (
                        <option disabled>Loading courses...</option>
                      )}
                    </select>
                    <div className="invalid-feedback">Please select a course</div>
                  </div>
                </div>

                <div className="d-flex justify-content-end gap-3 mt-4">
                  <button
                    type="button"
                    className="btn demo-btn-close"
                    data-bs-dismiss="modal"
                    id="demoModalCloseBtn"
                  >
                    <i className="fas fa-times me-2"></i>Close
                  </button>
                  <button
                    type="submit"
                    className="btn demo-btn-submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>
        <div
          id="toastMessage"
          className="toast align-items-center text-white bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body" id="toastMessageBody">
              Message goes here
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoBookingModal;
