import { ArrowRight, Mail, Phone, Clock, Send } from "lucide-react";

const jobOpenings = [
  {
    title: "Fullstack Java Developer",
    description: "Work with Spring Boot, REST APIs, and modern frontend tools to build scalable applications."
  },
  {
    title: "Python Developer",
    description: "Build robust backend systems using Django and Flask. Experience with APIs preferred."
  },
  {
    title: "Frontend Developer",
    description: "Develop sleek interfaces using React, Bootstrap, and modern JavaScript frameworks."
  }
];

const Hero = () => {
  return (
    <>
      <section id="home" className="p-5 d-flex align-items-center position-relative bg-light">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">
                Elevate Your Tech Career with <span className="text-primary">UpSkill</span>
              </h1>
              <p className="lead text-muted mb-4">
                Expert-led training in Fullstack Java, Python, Software Testing, and Web Development designed to transform your career path.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a href="#apply" className="btn btn-primary d-flex align-items-center justify-content-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </a>
                <a href="#courses" className="btn btn-outline-primary">
                  Explore Courses
                </a>
              </div>
            </div>

            <div className="col-md-6 position-relative">
              <div className="rounded overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
                  alt="Tech professionals collaborating"
                  className="img-fluid"
                />
              </div>
              <div className="position-absolute top-0 end-0 translate-middle bg-white shadow-sm p-2 rounded small d-flex align-items-center gap-2">
                <div className="bg-success rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                High Demand Skills
              </div>
              <div className="position-absolute bottom-0 start-0 translate-middle bg-white shadow-sm p-2 rounded small d-flex align-items-center gap-2">
                <div className="bg-primary rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                Mentorship Included
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 text-primary">Current Job Openings</h2>
          <div className="row g-4">
            {jobOpenings.map((job, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-semibold text-dark">{job.title}</h5>
                    <p className="card-text text-muted small flex-grow-1">{job.description}</p>
                    <a href="#apply" className="btn btn-outline-primary mt-auto">Apply Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-5 bg-white border-top">
        <div className="container px-4">
          <h2 className="text-center mb-3 fw-bold text-primary">Apply Now to Join UpSkill</h2>
          <p className="text-center text-muted mb-5">Your journey to becoming job-ready in tech starts here 🚀</p>

          <div className="row shadow-lg rounded-4 overflow-hidden">
            <div
              className="col-md-4 p-4 text-white d-flex flex-column justify-content-center"
              style={{
                background: "linear-gradient(180deg, #60a5fa, #a855f7)",
              }}
            >
              <h4 className="fw-bold mb-3">Contact Information</h4>
              <p>We’re excited to guide your career path. Fill in your details and we’ll reach out soon!</p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-center">
                  <Mail size={18} className="me-2" /> contact@upskilltraining.com
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <Phone size={18} className="me-2" /> +91 78218 79681
                </li>
                <li className="d-flex align-items-center">
                  <Clock size={18} className="me-2" /> Mon – Sat: 10AM – 7PM
                </li>
              </ul>
            </div>

            <div className="col-md-8 bg-light p-5">
              <form className="row g-4">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Full Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email Address" required />
                </div>
                <div className="col-md-6">
                  <input type="tel" className="form-control" placeholder="Phone Number" required />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="City / Location" required />
                </div>
                <div className="col-md-12">
                  <label className="form-label text-muted">Upload Resume</label>
                  <input type="file" className="form-control" accept=".pdf,.doc,.docx" required />
                </div>
                <div className="col-12 d-grid">
                  <button
                    type="submit"
                    className="btn btn-lg text-white fw-semibold shadow"
                    style={{
                      background: "linear-gradient(to right, #06b6d4, #9333ea)",
                      border: "none",
                      borderRadius: "12px",
                    }}
                  >
                    Submit Application <Send size={18} className="ms-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
