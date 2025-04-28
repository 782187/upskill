import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoBookingForm from "./DemoBookingForm";
import CertificationPreview from "./CertificationPreview";
import webDevCert from "../../../assets/web-certification.jpg";
import "./WebDevelopment.css";
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

export default function WebDevelopment() {
  return (
    <div className="course-page container-fluid px-0">
      <header className="course-banner text-white text-center py-5 itv-banner dynamic-header">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="text-start banner-text-container">
            <h1 className="display-4 fw-bold itv-fade-in-left">
              <span className="itv-primary-color">Web Development</span>
              <br />
              <span className="itv-secondary-color">Course in Pune to Build</span>
              <br />
              <span className="itv-primary-color">Interactive Websites</span>
            </h1>
            <p className="lead mt-3 itv-slide-in-left itv-delay-1">
              Master the essential skills to create stunning and functional websites.
            </p>
            <div className="dynamic-background">
              <video src={videoBg} autoPlay loop muted className="video-background" />
              <div className="video-overlay"></div>
            </div>
          </div>
        </div>

      </header>

      <section className="py-5 itv-section " id="id">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start">
          <div className="w-100 w-md-50 pe-md-5 itv-fade-in-left">
            <h3 className="mb-4 itv-secondary-color itv-section-title">Course Overview</h3>
            <p className="itv-paragraph" id="id1">
              Unlock your creative potential and become a skilled Web Developer with Upskill IT. Our comprehensive course covers the fundamental building blocks of the web, empowering you to design and develop engaging online experiences.
            </p>
            <h5 className="mt-4 fw-bold itv-highlight-text">What is Web Development course?</h5>
            <p className="itv-paragraph" id="id2">
              This course provides a strong foundation in <strong>HTML, CSS, and JavaScript</strong>. You'll learn to structure content, style websites beautifully, and add interactivity. We also explore responsive design principles and essential front-end development concepts.
            </p>
          </div>
          <div className="w-100 w-md-45 mt-4 mt-md-0 itv-slide-in-right">
            <div className="card itv-card itv-shadow">
              <div className="card-body">
                <h5 className="card-title itv-primary-color">Key Highlights</h5>
                <ul className="list-unstyled">
                  <CourseFeature iconClass="bi bi-code" text="Comprehensive Web Development Fundamentals" />
                  <CourseFeature iconClass="bi bi-palette-fill" text="Mastering HTML, CSS, and JavaScript" />
                  <CourseFeature iconClass="bi bi-layout-shift-left-fill" text="Responsive Web Design" />
                  <CourseFeature iconClass="bi bi-cursor-fill" text="Interactive Elements with JavaScript" />
                  <CourseFeature iconClass="bi bi-brush-fill" text="UI/UX Principles" />
                  <CourseFeature iconClass="bi bi-award-fill" text="Certification of Completion" />
                  <CourseFeature iconClass="bi bi-lightbulb-fill" text="Building Real-World Projects" />
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
                title="HTML5 - Structure the Web"
                items={["Semantic HTML", "Forms and Input", "Multimedia Elements", "Accessibility"]}
              />
              <CurriculumSection
                title="CSS3 - Styling the Web"
                items={["Selectors and Properties", "Layout Techniques (Flexbox, Grid)", "Responsive Design", "Animations and Transitions"]}
              />
            </div>
          </div>
          <div className="col-md-6 itv-slide-in-right itv-delay-1">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <CurriculumSection
                title="JavaScript - Interactivity and Logic"
                items={["Fundamentals and Syntax", "DOM Manipulation", "Events and Handling", "Asynchronous JavaScript"]}
              />
              <CurriculumSection
                title="Front-End Framework Basics"
                items={["Introduction to React or Vue.js (adaptable)", "Component-Based Architecture", "State Management Basics"]}
              />
            </div>
          </div>
          <div className="col-md-6 mt-4 itv-slide-in-left itv-delay-2">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <CurriculumSection
                title="Web Design Principles"
                items={["UI/UX Fundamentals", "Typography and Color Theory", "Wireframing and Prototyping"]}
              />
            </div>
          </div>
          <div className="col-md-6 mt-4 itv-slide-in-right itv-delay-3">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <h4 className="text-info itv-module-title">Duration & Mode</h4>
              <p className="itv-paragraph">2 Months | Online & Offline</p>
              <h5 className="mt-3 itv-secondary-color">Tools & Technologies</h5>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="badge itv-badge-primary">HTML5</span>
                <span className="badge itv-badge-info">CSS3</span>
                <span className="badge itv-badge-success">JavaScript</span>
                <span className="badge itv-badge-warning">React</span>
                <span className="badge itv-badge-secondary">Figma</span>
                <span className="badge itv-badge-dark">VS Code</span>
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
                image={webDevCert}
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