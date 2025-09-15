import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnquiryForm from './Home/EnquiryForm';
import Course from './Home/Course';
import ContactImg from './../../assets/contact.png';
import '../../Style/ContactUs.css'; 

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">
                Contact <span className="text-primary">UpSkill</span> IT Training & Placement
              </h1>
              <p className="lead fs-5 text-muted mb-4">
                Ready to start your tech career? Have questions about our courses? 
                Reach out — we're here to guide you every step of the way.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <div className="d-flex align-items-center bg-white p-3 rounded-3 shadow-sm">
                  <Clock size={20} className="text-primary me-2" />
                  <span>Mon-Sat: 9AM - 6PM</span>
                </div>
                <div className="d-flex align-items-center bg-white p-3 rounded-3 shadow-sm">
                  <MessageCircle size={20} className="text-primary me-2" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center mt-4 mt-lg-0">
              <img
                src={ContactImg}
                alt="Contact Illustration"
                className="img-fluid floating-animation"
                style={{ maxHeight: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-1">
            <h2 className="fw-bold">Get in Touch</h2>
            <p className="text-muted">Choose your preferred method of communication</p>
          </div>
          
          <div className="row py-3 g-3 border border-1" style={{borderRadius: '15px', backgroundImage: 'linear-gradient(135deg, #482df746 0%, #fb7f264f 100%)'}}>
            <div className="col-md-4">
              <div className="contact-card card h-100 border-0 shadow-lg">
                <div className="card-body p-4">
                  <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <h3 className="h5 fw-bold mb-3">Call Us</h3>
                  <p className="text-muted mb-3">Speak directly with our training consultants</p>
                  <a href="tel:+918484833677" className="btn btn-outline-primary w-100">
                    <Phone size={18} className="me-2" />
                    +91 8484833677
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="contact-card card h-100 border-0 shadow-lg">
                <div className="card-body p-4">
                  <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <h3 className="h5 fw-bold mb-3">Email Us</h3>
                  <p className="text-muted mb-3">Send us your queries and we'll respond promptly</p>
                  <a href="mailto:hiring@upskilll.com" className="btn btn-outline-primary w-100">
                    <Mail size={18} className="me-2" />
                    hiring@upskilll.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="contact-card card h-100 border-0 shadow-lg">
                <div className="card-body p-4">
                  <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <h3 className="h5 fw-bold mb-3">Visit Us</h3>
                  <p className="text-muted mb-3">Meet us at our training center in Pune</p>
                  <button className="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#mapModal">
                    <MapPin size={18} className="me-2" />
                    View Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-5" style={{backgroundColor: 'rgba(4, 104, 255, 0.1)'}}>
        <div className="p-3 container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="card border-0 shadow-lg">
                <div className="card-header bg-primary text-white py-3">
                  <h3 className="mb-0 d-flex align-items-center">
                    <Send size={24} className="me-2" />
                    Send Us a Message
                  </h3>
                </div>
                <div className="card-body p-4 p-md-5">
                  <EnquiryForm />
                </div>
              </div>
            </div>
            
            <div className="col-lg-5">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-header bg-white py-3">
                  <h3 className="mb-0">Contact Information</h3>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex mb-4">
                    <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center me-3">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">Phone Number</h6>
                      <a href="tel:+918484833677" className="text-decoration-none text-dark">
                        +91 8484833677
                      </a>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center me-3">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">Email Address</h6>
                      <a href="mailto:hiring@upskilll.com" className="text-decoration-none text-dark">
                        hiring@upskilll.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="d-flex">
                    <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center me-3">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">Office Address</h6>
                      <p className="mb-0 text-muted">
                        103, 1st Floor, B Junction, Behind Karve Statue,<br />
                        Next to Kothrud Post Office, Kothrud,<br />
                        Pune-411038, Maharashtra, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-top">
                    <h6 className="fw-bold mb-3">Office Hours</h6>
                    <div className="d-flex justify-content-between text-muted">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between text-muted">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between text-muted">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Modal */}
      <div className="modal fade" id="mapModal" tabIndex="-1" aria-labelledby="mapModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mapModalLabel">Our Location</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.355312490479!2d73.806214075997!3d18.50838238258415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07d13ff0e21%3A0x5f7f6e9e6f6e9e6f!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647256789019!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UpSkill Location"
                ></iframe>
              </div>
              <div className="mt-3">
                <p className="mb-1 fw-bold">UpSkill IT Training & Placement</p>
                <p className="mb-0 text-muted">
                  103, 1st Floor, B Junction, Behind Karve Statue, Next to Kothrud Post Office, 
                  Kothrud, Pune-411038, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Frequently Asked Questions</h2>
            <p className="text-muted">Quick answers to common questions</p>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h3 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What are your operating hours?
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Our office is open from 9:00 AM to 6:00 PM from Monday to Friday, and from 10:00 AM to 4:00 PM on Saturdays. We are closed on Sundays.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h3 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How soon can I expect a response?
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We typically respond to all inquiries within 24 hours on business days. For urgent matters, please call us directly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="accordion" id="faqAccordion2">
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h3 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Do you offer online training?
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion2">
                    <div className="accordion-body">
                      Yes, we offer both online and in-person training options for most of our courses. You can specify your preference when you contact us.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h3 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Can I visit the center without an appointment?
                    </button>
                  </h3>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion2">
                    <div className="accordion-body">
                      While walk-ins are welcome, we recommend scheduling an appointment to ensure that our training consultants are available to assist you properly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-dark text-white text-center">
        <div className="container">
          <p className="mb-0">We usually respond within 24 hours. Thank you for reaching out!</p>
        </div>
      </footer>
      
      <div style={{backgroundColor: 'rgba(4, 104, 255, 0.1)'}}>
        <Course />
      </div>
    </div>
  );
};

export default ContactUs;