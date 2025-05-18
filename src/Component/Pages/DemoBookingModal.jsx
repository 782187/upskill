import React, { useState } from "react";

const DemoBookingModal = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
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
              ></button>
            </div>

            <div className="modal-body bg-light px-4 py-3">
              <form
                noValidate
                className={validated ? "was-validated" : ""}
                onSubmit={handleSubmit}
              >
                <div className="row g-4">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label text-primary fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control border-primary shadow-sm"
                      id="name"
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
                      required
                    />
                    <div className="invalid-feedback">
                      Enter a valid 10-digit phone number
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label text-primary fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control border-primary shadow-sm"
                      id="email"
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
                      required
                    >
                      <option value="">-- Choose a Course --</option>
                      <option>Full Stack Java</option>
                      <option>Full Stack Python</option>
                      <option>MERN Stack</option>
                      <option>MEAN Stack</option>
                    </select>
                    <div className="invalid-feedback">Please select a course</div>
                  </div>
                </div>

                <div className="d-flex justify-content-end gap-2 mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-warning text-white shadow-sm">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoBookingModal;
