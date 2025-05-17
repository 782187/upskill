import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoBookingForm from "./DemoBookingForm";
import CertificationPreview from "./CertificationPreview";
import testingCert from "../../../assets/testing-certification.jpg"; 
import "./SoftwareTesting.css"; 
import "./Animation.css";
import videoBg from "../../../assets/herobg.mp4"; 

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

export default function Testing() {
  return (
    <div className="course-page container-fluid px-0">
      <header className="course-banner text-white text-center py-5 itv-banner dynamic-header">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="text-start banner-text-container">
            <h1 className="display-4 fw-bold itv-fade-in-left">
              <span className="itv-primary-color">Software Testing</span>
              <br />
              <span className="itv-secondary-color">Course in Pune to Ensure</span>
              <br />
              <span className="itv-primary-color">Quality Software</span>
            </h1>
            <p className="lead mt-3 itv-slide-in-left itv-delay-1">
              Become a skilled Software Tester and contribute to building reliable applications.
            </p>
            <div className="dynamic-background" style={{overflow: "hidden"}}>
              <video src={videoBg} autoPlay loop muted className="video-background" />
              <div className="video-overlay"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 itv-section" id="id">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start">
          <div className="w-100 w-md-50 pe-md-5 itv-fade-in-left">
            <h3 className="mb-4 itv-secondary-color itv-section-title">Course Overview</h3>
            <p className="itv-paragraph" id="id1">
              Master the art and science of Software Testing with Upskill IT. Our comprehensive course equips you with the methodologies and tools to identify defects and ensure the delivery of high-quality software products.
            </p>
            <h5 className="mt-4 fw-bold itv-highlight-text">What is Software Testing course?</h5>
            <p className="itv-paragraph" id="id2">
              This course covers fundamental testing concepts, including <strong>manual testing, automation testing</strong> with tools like <strong>Selenium</strong>, test planning, test case design, bug reporting, and an introduction to performance and security testing.
            </p>
          </div>
          <div className="w-100 w-md-45 mt-4 mt-md-0 itv-slide-in-right">
            <div className="card itv-card itv-shadow">
              <div className="card-body">
                <h5 className="card-title itv-primary-color">Key Highlights</h5>
                <ul className="list-unstyled">
                  <CourseFeature iconClass="bi bi-search" text="Comprehensive Testing Methodologies" />
                  <CourseFeature iconClass="bi bi-play-fill" text="Hands-on Manual Testing Techniques" />
                  <CourseFeature iconClass="bi bi-robot" text="Automation with Selenium" />
                  <CourseFeature iconClass="bi bi-clipboard-check-fill" text="Effective Test Case Design" />
                  <CourseFeature iconClass="bi bi-bug-fill" text="Mastering Bug Reporting" />
                  <CourseFeature iconClass="bi bi-speedometer2" text="Introduction to Performance Testing" />
                  <CourseFeature iconClass="bi bi-shield-lock-fill" text="Introduction to Security Testing" />
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
              <CurriculumSection
                title="Fundamentals of Software Testing"
                items={["Principles of Testing", "SDLC & STLC", "Test Levels", "Test Types"]}
              />
              <CurriculumSection
                title="Manual Testing Techniques"
                items={["Test Case Design", "Test Execution", "Bug Lifecycle", "Test Management Tools"]}
              />
            </div>
          </div>
          <div className="col-md-6 itv-slide-in-right itv-delay-1">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <CurriculumSection
                title="Automation Testing with Selenium"
                items={["Selenium WebDriver Basics", "Locators", "TestNG Framework", "Page Object Model"]}
              />
              <CurriculumSection
                title="Advanced Testing Concepts"
                items={["Performance Testing Introduction", "Security Testing Basics", "Agile Testing", "Mobile Testing Fundamentals"]}
              />
            </div>
          </div>
          <div className="col-md-6 mt-4 itv-slide-in-left itv-delay-2">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <CurriculumSection
                title="Test Planning and Management"
                items={["Test Plan Creation", "Risk Management", "Metrics and Reporting"]}
              />
            </div>
          </div>
          <div className="col-md-6 mt-4 itv-slide-in-right itv-delay-3">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <h4 className="text-info itv-module-title">Duration & Mode</h4>
              <p className="itv-paragraph">2 Months | Online & Offline</p>
              <h5 className="mt-3 itv-secondary-color">Tools & Technologies</h5>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="badge itv-badge-primary">Manual Testing</span>
                <span className="badge itv-badge-info">Selenium</span>
                <span className="badge itv-badge-success">TestNG</span>
                <span className="badge itv-badge-warning">Jira</span>
                <span className="badge itv-badge-secondary">Postman</span>
                <span className="badge itv-badge-dark">LoadRunner (Intro)</span>
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
                  See yourself how our Web Development course can transform your career. Book your free demo session today!
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
                image={testingCert}
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
                Upon successful completion of our Web Development course, you will receive a prestigious
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
                Invest in your future and showcase your expertise with our Web Developer Certification!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}