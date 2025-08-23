import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const API_URL = import.meta.env.VITE_API_URL;
const PlacedStudent = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlacement = async () => {
      try {
        const res = await axios.get(`${API_URL}/getplacement`);
        setPlacements(res.data);
      } catch (error) {
        console.error("Error fetching placements:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlacement();
  }, []);

  if (loading) {
    return (
      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h2 className="mt-3">Loading placed students...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-light position-relative overflow-hidden">
      {/* Background circles */}
      <div
        className="position-absolute top-0 start-0 bg-primary rounded-circle opacity-10"
        style={{ width: "120px", height: "120px", transform: "translate(-40px, -40px)" }}
      ></div>
      <div
        className="position-absolute bottom-0 end-0 bg-warning rounded-circle opacity-10"
        style={{ width: "160px", height: "160px", transform: "translate(40px, 40px)" }}
      ></div>

      <div className="container position-relative text-center">
        <span className="text-warning fw-semibold text-uppercase">Success Stories</span>
        <h2 className="display-6 fw-bold mt-2 mb-3">
          Our Placed <span className="text-primary">Students</span>
        </h2>
        <div className="mx-auto bg-primary" style={{ width: "60px", height: "3px" }}></div>
        <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "600px" }}>
          Our alumni are making waves in top companies worldwide. Here are some of their inspiring journeys.
        </p>

        {/* Cards */}
        <div className="row mt-4 g-4 justify-content-center">
          {placements.map((student, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm border-0 rounded-4 p-3 text-center">
                {/* Student Image - Circular */}
                <img
                  loading="lazy"
                  src={`data:image/jpeg;base64,${student.image}`}
                  alt={student.name}
                  className="rounded-circle mx-auto"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    border: "3px solid #f8f9fa",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                />

                <div className="card-body p-2 mt-2">
                  <h6 className="card-title mb-1 fw-bold">{student.name}</h6>
                  <small className="text-warning fw-semibold">{student.position}</small>

                  <div className="mt-2 text-muted small">
                    <i className="bi bi-building me-1 text-primary"></i>
                    {student.companyName}
                  </div>

                  {/* Company Logo */}
                  {student.companyLogo && (
                    <div className="mt-2">
                      <img
                        loading="lazy"
                        src={`data:image/jpeg;base64,${student.companyLogo}`}
                        alt={student.companyName}
                        style={{ maxHeight: "35px" }}
                      />
                    </div>
                  )}

                  {/* LinkedIn */}
                  {student.linkedin && (
                    <div className="mt-2">
                      <a
                        href={student.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        <i className="bi bi-linkedin fs-5"></i>
                      </a>
                    </div>
                  )}

                  {/* Testimonial */}
                  <blockquote className="blockquote mt-3 mb-0">
                    <p className="fst-italic text-muted small">
                      {student.testimonial || "The training program gave me the skills to excel in my career."}
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacedStudent;
