import React from 'react';
import { Link } from 'react-router-dom';
import EnquiryForm from './EnquiryForm';
import DemoBookingModal from '../DemoBookingModal';
import '../../../Style/HeroSection.css';

const HeroSection = () => {
  return (
    <div
      className="d-flex flex-wrap position-relative"
      style={{
        minHeight: '90vh',
        background: 'linear-gradient(to bottom right, #cce3f4ff, #ffffff)',
        overflow: 'hidden'
      }}
    >

      <div className="book-demo-sticker" data-bs-toggle="modal"
        data-bs-target="#demoModal">
        <span>📘 Book Demo</span>
      </div>
      <DemoBookingModal />

      <div
        className="col-12 col-md-6 d-flex flex-column justify-content-center hero-section-content px-5 py-4"
        style={{ zIndex: 1 }}
      >
        <h1 className="display-6 fw-bold mb-3" style={{ color: '#002c5f' }}>
          Pune's <span style={{ color: 'orange' }}>No.1</span> IT Training & Placement Institute
        </h1>
        <p className="lead mb-4" style={{ color: '#444' }}>
          We provide high-quality education and practical training in Web Development, Java, Python, and more.
          Our expert-led courses are designed to build in-demand tech skills.
          Join our vibrant community and take your career to the next level.
        </p>
        <div className="d-flex align-items-center gap-2 mb-3 justify-content-center justify-content-md-start">
          <div className="rating-stars">{'★'.repeat(5)}</div>
          <span style={{ fontSize: '0.95rem', color: '#555' }}>
            Trusted by 10,000+ students & professionals
          </span>
        </div>
        <Link
          to="/courses"
          className="btn px-4 py-2"
          style={{
            backgroundColor: '#ff6f00',
            color: '#fff',
            width: 'fit-content',
            fontWeight: 'bold',
            borderRadius: '6px',
            border: 'none',
            boxShadow: '0 4px 16px rgba(255, 111, 0, 0.4)'
          }}
        >
          Explore Courses
        </Link>

        <div className="logo-slider mt-4">
          <div className="logo-track">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <img src="/Company/hcl.png" alt="HCL" className="company-logo" />
                <img src="/Company/infosis.png" alt="Infosis" className="company-logo" />
                <img src="/Company/wipro.png" alt="Wipro" className="company-logo" />
                <img src="/Company/tcs.png" alt="TCS" className="company-logo" />
                <img src="/Company/hexaware.png" alt="Hexaware" className="company-logo" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div
        className="col-12 col-md-6 d-flex align-items-center justify-content-center px-4 py-4"
        style={{ zIndex: 1 }}
      >
        <div
          className="rounded shadow-sm bg-white w-100"
          style={{
            maxWidth: '500px',
            border: '1px solid #ddd'
          }}
        >
          <h4 className="mb-3 text-center" style={{ color: '#002c5f' }}>
            Get in Touch
          </h4>
          <EnquiryForm />
        </div>
      </div>

      <div className="tech-blob tech-blob-blue" />
      <div className="tech-blob tech-blob-orange" />
    </div>
  );
};

export default HeroSection;
