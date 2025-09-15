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
      <div
        className="modal fade"
        id="demoModal"
        tabIndex="-1"
        aria-labelledby="demoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header bg-gradient bg-primary text-white rounded-top-4">
              <h1 className="modal-title fs-4 fw-semibold" id="demoModalLabel">
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

            <div className="modal-body bg-light px-4 py-3">
              <form
                noValidate
                className={validated ? "was-validated" : ""}
                onSubmit={handleSubmit}
              >
                <div className="row gy-2 gy-sm-4 gx-2 gx-sm-4">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label text-primary fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control border-primary shadow-sm"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Please enter your name</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact" className="form-label text-primary fw-semibold">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      className="form-control border-primary shadow-sm"
                      id="contact"
                      pattern="[0-9]{10}"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Enter a valid 10-digit phone number</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label text-primary fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control border-primary shadow-sm"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Please enter a valid email</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="course" className="form-label text-primary fw-semibold">
                      Select Course
                    </label>
                    <select
                      className="form-select border-primary shadow-sm"
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

                <div className="d-flex justify-content-end gap-2 mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-dismiss="modal"
                    id="demoModalCloseBtn"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-warning text-white shadow-sm"
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
