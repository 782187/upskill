import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const PlacedStudent = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlacement = async () => {
      try {
        const res = await axios.get("https://upskill-server.onrender.com/getplacement");
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
      <div className="position-absolute top-0 start-0 bg-primary rounded-circle opacity-10" style={{ width: "150px", height: "150px", transform: "translate(-50px, -50px)" }}></div>
      <div className="position-absolute bottom-0 end-0 bg-warning rounded-circle opacity-10" style={{ width: "200px", height: "200px", transform: "translate(50px, 50px)" }}></div>

      <div className="container position-relative text-center">
        <span className="text-warning fw-semibold text-uppercase">Success Stories</span>
        <h2 className="display-5 fw-bold mt-2 mb-3">
          Our Placed <span className="text-primary">Students</span>
        </h2>
        <div className="mx-auto bg-primary" style={{ width: "80px", height: "4px" }}></div>
        <p className="lead text-muted mt-4 mx-auto" style={{ maxWidth: "700px" }}>
          Our alumni are making waves in top companies worldwide. Here are some of their success stories.
        </p>

        <div className="row mt-5 g-4">
          {placements.map((student, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  loading="lazy"
                  src={`data:image/jpeg;base64,${student.image}`}
                  alt={student.name}
                  className="card-img-top img-fluid"
                  style={{ objectFit: "contain", height: "250px", backgroundColor: "#fff" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{student.name}</h5>
                  <p className="card-text text-warning fw-semibold">{student.position}</p>

                  <div className="d-flex justify-content-between align-items-center mb-3 text-muted">
                    <div>
                      <i className="bi bi-building me-2 text-primary"></i>
                      {student.companyName}
                    </div>
                    {student.linkedin && (
                      <a href={student.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary">
                        <i className="bi bi-linkedin fs-5"></i>
                      </a>
                    )}
                  </div>

                  <div className="text-center mb-3">
                    <img
                      loading="lazy"
                      src={`data:image/jpeg;base64,${student.companyLogo}`}
                      alt={student.companyName}
                      className="img-fluid"
                      style={{ maxHeight: "50px" }}
                    />
                  </div>

                  <blockquote className="blockquote">
                    <p className="fst-italic text-muted">
                      {student.testimonial || "The training program gave me the skills and confidence to excel in my career."}
                    </p>
                  </blockquote>
                </div>
                <div className="card-footer bg-transparent border-top text-muted small">
                  <i className="bi bi-person-vcard me-2 text-primary"></i>
                  Batch: {student.batch || "2023"}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg px-4 py-2 shadow">
            View More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlacedStudent;
