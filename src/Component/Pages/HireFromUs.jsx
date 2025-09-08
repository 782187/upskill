import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Send,
  Users,
  Star,
  Award,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  ChevronRight,
  Briefcase,
  Clock,
  CheckCircle,
  FileText
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const HireFromUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      for (const key in formData) {
        formPayload.append(key, formData[key]);
      }

      await axios.post(`${API_URL}/submit-career-application`, formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('Application submitted successfully! We will contact you soon.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        position: '',
        resume: null
      });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.', {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Stats data
  const stats = [
    { value: "95%", label: "Placement Rate" },
    { value: "500+", label: "Hired Graduates" },
    { value: "50+", label: "Partner Companies" },
    { value: "4.8/5", label: "Employer Satisfaction" }
  ];

  return (
    <div className="container-fluid bg-light p-0">
      <ToastContainer />
      
      {/* Hero Section */}
      <section className="py-5 bg-primary-gradient" style={{ 
        background: "linear-gradient(135deg, #06b6d4 0%, #9333ea 100%)" 
      }}>
        <div className="container p3-5">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center text-lg-start text-white">
              <h1 className="display-4 fw-bold mb-3">Hire From Us</h1>
              <p className="lead mb-4">
                Connect with top talent trained in cutting-edge technologies and industry best practices. 
                Our graduates are ready to make an immediate impact on your team.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center px-3 py-2 rounded" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                    <div className="h4 mb-0 fw-bold">{stat.value}</div>
                    <div className="small">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <img 
                src="/developer.gif" 
                alt="Hiring process illustration" 
                className="img-fluid rounded shadow" 
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={sectionRef} className="py-5" id="hform">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-lg border-0">
                <div className="card-body p-4 p-md-5">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <h2 className="h3 fw-bold text-primary mb-2">Get In Touch</h2>
                        <p className="text-muted">
                          Fill out the form and our team will connect you with the perfect candidates for your needs.
                        </p>
                      </div>
                      
                      <div className="d-none d-lg-block">
                        <div className="mb-4 d-flex align-items-center">
                          <div className="bg-primary rounded-circle p-2 me-3">
                            <CheckCircle size={20} className="text-white" />
                          </div>
                          <div>
                            <h5 className="fw-bold mb-0">Quality Vetted</h5>
                            <p className="text-muted small mb-0">All candidates undergo rigorous assessment</p>
                          </div>
                        </div>
                        
                        <div className="mb-4 d-flex align-items-center">
                          <div className="bg-primary rounded-circle p-2 me-3">
                            <Clock size={20} className="text-white" />
                          </div>
                          <div>
                            <h5 className="fw-bold mb-0">Quick Turnaround</h5>
                            <p className="text-muted small mb-0">Receive profiles within 48 hours</p>
                          </div>
                        </div>
                        
                        <div className="d-flex align-items-center">
                          <div className="bg-primary rounded-circle p-2 me-3">
                            <Briefcase size={20} className="text-white" />
                          </div>
                          <div>
                            <h5 className="fw-bold mb-0">Industry Ready</h5>
                            <p className="text-muted small mb-0">Trained on real-world projects and scenarios</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-lg-6 mt-4 mt-lg-0">
                      <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                          <div className="col-12">
                            <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="name"
                              name="name"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-12">
                            <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              id="email"
                              name="email"
                              placeholder="Your email address"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-12">
                            <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                            <input
                              type="tel"
                              className="form-control form-control-lg"
                              id="phone"
                              name="phone"
                              placeholder="Your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-12">
                            <label htmlFor="location" className="form-label fw-semibold">City / Location</label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="location"
                              name="location"
                              placeholder="Your location"
                              value={formData.location}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-12">
                            <label htmlFor="position" className="form-label fw-semibold">Position Applying For</label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="position"
                              name="position"
                              placeholder="Position you're hiring for"
                              value={formData.position}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-12">
                            <label htmlFor="resume" className="form-label fw-semibold">
                              Upload Job Description (PDF/DOC)
                            </label>
                            <div className="input-group">
                              <input
                                type="file"
                                className="form-control form-control-lg"
                                id="resume"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form-text">
                              <FileText size={14} className="me-1" />
                              Upload your job description or requirements
                            </div>
                          </div>

                          <div className="col-12 mt-4">
                            <button
                              type="submit"
                              className="btn btn-lg w-100 text-white fw-semibold py-3"
                              style={{
                                background: "linear-gradient(to right, #06b6d4, #9333ea)",
                                border: "none",
                                borderRadius: "12px",
                                transition: "all 0.3s ease",
                                transform: "translateY(0)",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                              }}
                              onMouseOver={(e) => {
                                e.target.style.transform = "translateY(-2px)";
                                e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
                              }}
                              onMouseOut={(e) => {
                                e.target.style.transform = "translateY(0)";
                                e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                              }}
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                  Processing...
                                </>
                              ) : (
                                <>
                                  Submit Request <Send size={18} className="ms-2" />
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5" style={{backgroundColor: 'rgba(4, 104, 255, 0.1)'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "orange" }}>Why Hire Our Graduates</h2>
            <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
              Our graduates are equipped with both theoretical knowledge and hands-on experience,
              making them ready to contribute to your projects from day one.
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {whyChooseUsItems.map((item, index) => (
              <div 
                key={index} 
                className="col"
                style={{
                  animation: isVisible ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="card h-100 border-0 shadow-sm bg-gray-800 hover-lift">
                  <div className="card-body p-4 text-center">
                    <div className="icon-wrapper bg-primary-soft rounded-circle mx-auto mb-4">
                      <item.icon size={28} className="text-primary" />
                    </div>
                    <h3 className="h5 fw-bold mb-3 text-white">{item.title}</h3>
                    <p className="card-text text-light-emphasis">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Hiring Process</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              Streamlined process to connect you with the right talent quickly and efficiently
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
              <div className="position-relative">
                <div className="bg-primary-soft rounded-circle position-absolute top-0 start-0 translate-middle w-50 h-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Hiring process" 
                  className="img-fluid rounded shadow position-relative"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pe-lg-5">
                {processSteps.map((step, index) => (
                  <div key={index} className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                        <span className="h5 mb-0 fw-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <h4 className="h5 fw-bold">{step.title}</h4>
                      <p className="text-muted mb-0">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Resources Section */}
      <section className="py-5" style={{backgroundColor: 'rgba(4, 104, 255, 0.1)'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Training Methodology</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              We provide comprehensive training with state-of-the-art resources to ensure our graduates
              exceed industry expectations and are prepared for real-world challenges.
            </p>
          </div>

          <div className="row g-4">
            {trainingResources.map((resource, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100 hover-lift">
                  <div className="card-body p-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 p-3 bg-primary-soft">
                      <resource.icon size={24} className="text-primary" />
                    </div>
                    <h4 className="h5 fw-bold mb-3">{resource.title}</h4>
                    <p className="text-muted">{resource.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-5 bg-primary-gradient">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What Employers Say</h2>
            <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
              Hear from companies that have hired our graduates
            </p>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card border-0 shadow h-100 bg-white-10">
                  <div className="card-body p-4">
                    <div className="d-flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-warning fill" />
                      ))}
                    </div>
                    <p className="fst-italic mb-4">"{testimonial.quote}"</p>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src={testimonial.avatar} alt={testimonial.name} className="rounded-circle" width="50" height="50" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                        <small className="text-white-70">{testimonial.position}, {testimonial.company}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="display-5 fw-bold mb-3">Ready to Find Your Next Star Employee?</h2>
            <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
              Join hundreds of companies that have found exceptional talent through our program
            </p>
            <button 
              className="btn btn-primary btn-lg px-5 py-3 fw-semibold"
              onClick={() => {
                document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started <ChevronRight size={20} className="ms-1" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bg-primary-gradient {
          background: linear-gradient(135deg, #c0edf55b 0%, #cc9cf933 100%);
        }
        
        #hform{
            background: linear-gradient(45deg, aliceblue 50%, lightskyblue 50%);
            background-attachment: fixed;
        }

        .bg-primary-soft {
          background-color: rgba(13, 110, 253, 0.1) !important;
        }
        
        .bg-gray-800 {
          background-color: #2d3748 !important;
        }
        
        .text-light-emphasis {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        
        .bg-white-10 {
          background-color: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px);
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
        }
        
        .icon-wrapper {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .star.fill {
          fill: currentColor;
        }
      `}</style>
    </div>
  );
};

const whyChooseUsItems = [
  {
    icon: Award,
    title: "Industry-Ready Skills",
    description: "Our graduates are trained with the latest technologies and methodologies used in the industry."
  },
  {
    icon: Users,
    title: "Diverse Talent Pool",
    description: "Access professionals from various backgrounds bringing unique perspectives to your team."
  },
  {
    icon: Star,
    title: "Ongoing Support",
    description: "We provide continued mentorship to our graduates even after they join your organization."
  },
  {
    icon: GraduationCap,
    title: "Specialized Training",
    description: "Custom training programs focused on high-demand skills tailored to industry needs."
  },
  {
    icon: Lightbulb,
    title: "Innovative Problem-Solvers",
    description: "Graduates trained to approach challenges with creativity and analytical thinking."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous assessment ensures only the most qualified candidates complete our programs."
  },
];

const trainingResources = [
  {
    icon: Users,
    title: "Industry Expert Instructors",
    description: "Our courses are taught by professionals with years of industry experience who bring real-world knowledge into the classroom."
  },
  {
    icon: Briefcase,
    title: "Hands-On Project Work",
    description: "Students complete multiple real-world projects that simulate actual workplace scenarios and challenges."
  },
  {
    icon: Star,
    title: "Career Development Support",
    description: "Beyond technical skills, we provide professional development workshops, resume building, and interview preparation."
  },
  {
    icon: FileText,
    title: "Ongoing Learning Resources",
    description: "Graduates receive continued access to learning materials and resources to support their professional growth."
  },
  {
    icon: ShieldCheck,
    title: "Quality Curriculum",
    description: "Our curriculum is regularly updated to reflect the latest industry trends and technologies."
  },
  {
    icon: Clock,
    title: "Flexible Learning Paths",
    description: "We offer both full-time and part-time programs to accommodate different learning needs and schedules."
  }
];

const processSteps = [
  {
    title: "Submit Your Requirements",
    description: "Tell us about the roles you're looking to fill and the skills you need."
  },
  {
    title: "Get Matched with Candidates",
    description: "We'll send you profiles of pre-vetted candidates that match your requirements."
  },
  {
    title: "Interview & Select",
    description: "Conduct interviews and select the candidates that best fit your team."
  },
  {
    title: "Onboard & Hire",
    description: "Make an offer and onboard your new team member with our support."
  }
];

const testimonials = [
  {
    quote: "The developers we hired from Upskill were productive from day one. Their training program truly prepares candidates for real-world challenges.",
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechNova",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    quote: "We've hired 5 graduates from this program and all have exceeded our expectations. The quality of talent is consistently impressive.",
    name: "Michael Chen",
    position: "Engineering Manager",
    company: "InnoSoft",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The candidates were well-prepared, professional, and had the practical skills we needed. The hiring process was smooth and efficient.",
    name: "Jessica Williams",
    position: "HR Director",
    company: "DataCore",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export default HireFromUs;