import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoBookingForm from "./DemoBookingForm";
import CertificationPreview from "./CertificationPreview";
import pythonCert from "../../../assets/python-certification.jpg";
import "./FullStackPython.css"; // Keep your existing styles
import "./Animation.css"; // Ensure this is imported
import videoBg from "../../../assets/herobg.mp4"; // Import your video file


function CurriculumSection({ title, items }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="curriculum-section itv-fade-in">
      <h4 className="itv-module-title" onClick={toggleOpen} style={{ cursor: 'pointer' }}>
        {title} {isOpen ? '-' : '+'}
      </h4>
      {isOpen && (
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li key={index} className="list-group-item itv-list-item">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function CourseFeature({ iconClass, text }) {
  return (
    <li className="mb-2 itv-list-item d-flex align-items-center itv-fade-in">
      <i className={`${iconClass} itv-primary-color me-2`}></i> {text}
    </li>
  );
}

export default function FullStackPython() {
  return (
    <div className="course-page container-fluid px-0">
      <header className="course-banner text-white text-center py-5 itv-banner dynamic-header">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="text-start banner-text-container">
            <h1 className="display-4 fw-bold itv-fade-in-left">
              <span className="itv-primary-color">Python Full Stack Development</span>
              <br />
              <span className="itv-secondary-color">Course in Pune with 100%</span>
              <br />
              <span className="itv-primary-color">Placement Assistance</span>
            </h1>
          </div>
           <div className="dynamic-background">
                   <video src={videoBg} autoPlay loop muted className="video-background" />
                   <div className="video-overlay " style={{width:"100%"}}></div> {/* Optional overlay for better text contrast */}
                 </div>
                 </div>
      </header>

      <section className="py-5itv-section" id="id8">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start">
          <div className="w-100 w-md-50 pe-md-5 itv-fade-in-left">
            <h3 className="mb-4 itv-secondary-color itv-section-title">Course Overview</h3>
            <p className="itv-paragraph" id="id2">
              Become an expert in Python Full Stack Development with Upskill IT Training & Placement. This course covers a broad range of technologies to create robust full stack web applications using Python and modern tools.
            </p>
            <h5 className="mt-4 fw-bold itv-highlight-text">What is Python full stack development course?</h5>
            <p className="itv-paragraph" id="id3">
              This comprehensive course includes <strong>HTML, CSS, JavaScript, React</strong>, and Python backend with frameworks like <strong>Django</strong> and <strong>Flask</strong>. You will also gain hands-on experience with REST APIs, databases, and deployment practices.
            </p>
          </div>
          <div className="w-100 w-md-45 mt-4 mt-md-0 itv-slide-in-right">
            <div className="card itv-card itv-shadow">
              <div className="card-body">
                <h5 className="card-title itv-primary-color">Key Highlights</h5>
                <ul className="list-unstyled">
                  <CourseFeature iconClass="bi bi-check-circle-fill itv-primary-color me-2" text="Comprehensive Curriculum" />
                  <CourseFeature iconClass="bi bi-check-circle-fill itv-primary-color me-2" text="Hands-on Projects" />
                  <CourseFeature iconClass="bi bi-check-circle-fill itv-primary-color me-2" text="Expert Instructors" />
                  <CourseFeature iconClass="bi bi-check-circle-fill itv-primary-color me-2" text="100% Placement Assistance" />
                  <CourseFeature iconClass="bi bi-check-circle-fill itv-primary-color me-2" text="Flexible Learning Modes" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-details container py-5">
        <h3 className="text-center itv-secondary-color mb-5 itv-section-title itv-fade-in-up">Course Curriculum</h3>
        <div className="row g-4">
          <div className="col-md-6 itv-slide-in-left">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <ul className="list-group list-group-flush">
                <li className="list-group-item itv-list-item">HTML, CSS, Bootstrap, JavaScript</li>
                <li className="list-group-item itv-list-item">React JS</li>
                <li className="list-group-item itv-list-item">Python Basics & OOP</li>
                <li className="list-group-item itv-list-item">Flask & Django</li>
                <li className="list-group-item itv-list-item">REST API Integration</li>
                <li className="list-group-item itv-list-item">MySQL & PostgreSQL</li>
                <li className="list-group-item itv-list-item">Version Control (Git)</li>
                <li className="list-group-item itv-list-item">Deployment & Hosting</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 itv-slide-in-right itv-delay-1">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <h4 className="text-info itv-module-title">Duration & Mode</h4>
              <p className="itv-paragraph">3 Months | Online & Offline</p>
              <h5 className="mt-3 itv-secondary-color">Tools & Technologies</h5>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="badge itv-badge-primary">Python</span>
                <span className="badge itv-badge-info">Django</span>
                <span className="badge itv-badge-success">React</span>
                <span className="badge itv-badge-warning">Flask</span>
                <span className="badge itv-badge-secondary">Git</span>
                <span className="badge itv-badge-dark">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-5 itv-section" id="id4">
              <div className="container">
                <h2 className="text-center itv-primary-color mb-4 itv-section-title itv-fade-in-up">
                  Take the Next Step
                </h2>
                <div className="row align-items-center">
                  <div className="col-md-6 itv-slide-in-left">
                      <DemoBookingForm />
                  </div>
                  <div className="col-md-6 mt-4 mt-md-0 itv-slide-in-right itv-delay-1">
                    <div className="p-3">
                      <h5 className="itv-primary-color">Why Book a Demo?</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2 itv-list-item">
                          <i className="bi bi-check-circle-fill itv-primary-color me-2"></i> Get a personalized course overview.
                        </li>
                        <li className="mb-2 itv-list-item">
                          <i className="bi bi-check-circle-fill itv-primary-color me-2"></i> Understand our teaching methodology.
                        </li>
                        <li className="mb-2 itv-list-item">
                          <i className="bi bi-check-circle-fill itv-primary-color me-2"></i> Ask questions directly to our experts.
                        </li>
                        <li className="mb-2 itv-list-item">
                          <i className="bi bi-check-circle-fill itv-primary-color me-2"></i> Learn about placement assistance details.
                        </li>
                        <li className="mb-2 itv-list-item">
                          <i className="bi bi-check-circle-fill itv-primary-color me-2"></i> Experience our interactive learning environment.
                        </li>
                      </ul>
                      <p className="itv-paragraph mt-3" id="id5">
                        See yourself how our Full Stack Python course can transform your career. Book your free demo session today!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
             <section className="container py-5 itv-section">
              <h2 className="text-center itv-primary-color mb-4 itv-section-title itv-fade-in-up">
                Get Industry-Recognized Certification
              </h2>
              <div className="row align-items-center">
                <div className="col-md-6 itv-slide-in-left">
                  <div className="certificate-preview-container position-relative">
                    <div className="certificate-overlay-design top-left itv-fade-in itv-delay-1"></div>
                    <CertificationPreview
                      image={pythonCert}
                      alt="Full Stack Java Developer Certification"
                      className="img-fluid rounded shadow"
                    />
                    <div className="certificate-overlay-design bottom-right itv-fade-in itv-delay-2"></div>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0 itv-slide-in-right itv-delay-1">
                  <div className="p-3">
                    <h5 className="itv-secondary-color">Validate Your Skills</h5>
                    <p className="itv-paragraph">
                      Upon successful completion of our Full Stack Python Development course, you will receive a prestigious
                      certification that validates your comprehensive skills in both front-end and back-end technologies.
                    </p>
                    <h5 className="itv-primary-color mt-3">Why Our Certification Matters?</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2 itv-list-item itv- Kenburns-right">
                        <i className="bi bi-award-fill itv-secondary-color me-2"></i> Industry-recognized and valued by top companies.
                      </li>
                      <li className="mb-2 itv-list-item itv-Kenburns-right itv-delay-05">
                        <i className="bi bi-briefcase-fill itv-secondary-color me-2"></i> Enhances your resume and job prospects.
                      </li>
                      <li className="mb-2 itv-list-item itv-Kenburns-left itv-delay-1">
                        <i className="bi bi-lightbulb-fill itv-secondary-color me-2"></i> Demonstrates your commitment to professional development.
                      </li>
                      <li className="mb-2 itv-list-item itv-Kenburns-right itv-delay-15">
                        <i className="bi bi-check-circle-fill itv-secondary-color me-2"></i> Provides a competitive edge in the job market.
                      </li>
                    </ul>
                    <p className="itv-paragraph mt-3 itv-pulse">
                      Invest in your future and showcase your expertise with our Full Stack Python Developer Certification!
                    </p>
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
}