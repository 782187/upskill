import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CertificationPreview.css"; // Add this CSS file for custom animations

export default function CertificationPreview({ image, caption }) {
  return (
    <section className="certification-preview container text-center my-5">
      <h2 className="display-6 fw-semibold mb-4 fade-in">Certification Preview</h2>
      <div className="card mx-auto shadow-lg animate-zoom">
        <img
          src={image}
          alt="Certification Preview"
          className="card-img-top img-fluid"
          style={{ maxWidth: "500px", margin: "auto" }}
        />
        <div className="card-body bg-light">
          <p className="card-text fw-medium text-muted">{caption}</p>
        </div>
      </div>
    </section>
  );
}
