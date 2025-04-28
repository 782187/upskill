import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoBookingForm from "./DemoBookingForm";
import CertificationPreview from "./CertificationPreview";
import javaCert from "../../../assets/java-certification.jpg";
import "./FullStackJava.css"; // Keep your existing styles
import "./Animation.css"; // Import new animation styles
import videoBg from "../../../assets/herobg.mp4"; // Import your video file

export default function FullStackJava() {
  return (
   <div className="course-page container-fluid px-0">
      <header className="course-banner text-white text-center py-5 itv-banner dynamic-header">
      
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="text-start banner-text-container">
            <h1 className="display-4 fw-bold itv-fade-in-left">
              <span className="itv-primary-color">Java Full Stack Development</span>
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

      <section className="py-5 itv-secondary-color itv-section" id="id1">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start">
          <div className="w-100 w-md-50 pe-md-5 itv-fade-in-left">
            <h3 className="mb-4 itv-secondary-color itv-section-title">Course Overview</h3>
            <p className="itv-paragraph" id="id2">
              Embark on a transformative journey into the dynamic realm of Full Stack Development with Upskill IT
              Training & Placement. Our Full Stack Development course is meticulously designed to equip you with a
              holistic skill set, covering both front-end and back-end technologies essential for creating robust,
              end-to-end web applications.
            </p>
            <h5 className="mt-4 fw-bold itv-highlight-text">What is Full stack development course?</h5>
            <p className="itv-paragraph" id="id3">
              Our comprehensive program covers the entire stack, from front-end to back-end technologies,
              equipping you with the skills needed to design, build, and deploy robust web applications. Delve into
              <strong> HTML, CSS, JavaScript</strong>, and popular frameworks for crafting engaging user interfaces. Explore server-side scripting,
              databases, and server deployment to master the back-end.
            </p>
          </div>
          <div className="w-100 w-md-45 mt-4 mt-md-0 itv-slide-in-right">
            <div className="card itv-card itv-shadow">
              <div className="card-body">
                <h5 className="card-title itv-primary-color">Key Highlights</h5>
                <ul className="list-unstyled">
                  <li className="mb-2 itv-list-item">
                    <i className="bi bi-check-circle-fill itv-primary-color me-2"></i> Comprehensive Curriculum
                  </li>
                  <li className="mb-2 itv-list-item">
                    <i className="bi bi-check-circle-fill itv-primary-color me-2"></i> Hands-on Projects
                  </li>
                  <li className="mb-2 itv-list-item">
                    <i className="bi bi-check-circle-fill itv-primary-color me-2"></i> Expert Instructors
                  </li>
                  <li className="mb-2 itv-list-item">
                    <i className="bi bi-check-circle-fill itv-primary-color me-2"></i> 100% Placement Assistance
                  </li>
                  <li className="mb-2 itv-list-item">
                    <i className="bi bi-check-circle-fill itv-primary-color me-2"></i> Flexible Learning Modes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-details container py-5 itv-info-color">
        <h3 className="text-center itv-dark-color mb-5 itv-section-title itv-fade-in-up">Course Curriculum</h3>
        <div className="row g-4">
          <div className="col-md-6 itv-slide-in-left">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <h5 className="text-blue itv-module-title">Front-End Development</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item itv-list-item">HTML5 & CSS3</li>
                <li className="list-group-item itv-list-item">Bootstrap 5</li>
                <li className="list-group-item itv-list-item">JavaScript (ES6+)</li>
                <li className="list-group-item itv-list-item">React JS</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 itv-slide-in-right itv-delay-1">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <h5 className="text-success itv-module-title">Back-End Development</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item itv-list-item">Core Java</li>
                <li className="list-group-item itv-list-item">JDBC, Servlets, JSP</li>
                <li className="list-group-item itv-list-item">Spring Framework</li>
                <li className="list-group-item itv-list-item">Spring Boot</li>
                <li className="list-group-item itv-list-item">RESTful APIs</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-4 itv-slide-in-left itv-delay-2">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <h5 className="text-warning itv-module-title">Database & Tools</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item itv-list-item">MySQL</li>
                <li className="list-group-item itv-list-item">Hibernate/JPA</li>
                <li className="list-group-item itv-list-item">Git & Version Control</li>
                <li className="list-group-item itv-list-item">Maven/Gradle</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-4 itv-slide-in-right itv-delay-3">
            <div className="p-4 bg-white rounded itv-card itv-shadow itv-zoom-in">
              <h4 className="text-info itv-module-title">Duration & Mode</h4>
              <p className="itv-paragraph">3 Months | Online & Offline</p>
              <h5 className="mt-3 itv-secondary-color">Tools & Technologies</h5>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="badge itv-badge-primary">Java</span>
                <span className="badge itv-badge-info">Spring Boot</span>
                <span className="badge itv-badge-success">React</span>
                <span className="badge itv-badge-warning">MySQL</span>
                <span className="badge itv-badge-secondary">JSP</span>
                <span className="badge itv-badge-dark">Git</span>
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
                  See yourself how our Full Stack Java course can transform your career. Book your free demo session today!
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
                image={javaCert}
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
                Upon successful completion of our Full Stack Java Development course, you will receive a prestigious
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
                Invest in your future and showcase your expertise with our Full Stack Java Developer Certification!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}