import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnquiryForm from './Home/EnquiryForm';
import Course from './Home/Course';
import ContactImg from './../../assets/contact.png'

const ContactUs = () => {
  return (
    <div className="bg-light min-vh-100 bg-light">
      <section className="py-3 bg-contact">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">
                Contact <span style={{ color: "orange" }}>UpSkill</span> IT Training & Placement
              </h1>
              <p className="lead fs-5 text-secondary" style={{textShadow: "1px 1px 1px gray"}}>
                Ready to start your tech career? Have questions about our courses? Reach out — we're here to guide you.
              </p>
            </div>
            <div className="col-md-5 text-center">
              <img
                src={ContactImg}
                alt="Contact Illustration"
                className="img-fluid"
                style={{ maxHeight: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-white p-4 rounded h-100" style={{boxShadow: "2px 3px 5px gray"}}>
                <h2 className="h4 fw-bold mb-4 text-primary">Need More Help?</h2>
                <ul className="list-unstyled text-dark">
                  <li className="d-flex mb-4">
                    <Phone className="text-primary me-3 mt-1" />
                    <div>
                      <h6 className="mb-1">Call Us</h6>
                      <a href="tel:+918484833677" className="text-decoration-none text-dark">
                        +91 8484833677
                      </a>
                    </div>
                  </li>
                  <li className="d-flex mb-4">
                    <Mail className="text-primary me-3 mt-1" />
                    <div>
                      <h6 className="mb-1">Email</h6>
                      <a href="mailto:hiring@upskilll.com" className="text-decoration-none text-dark">
                        hiring@upskilll.com
                      </a>
                    </div>
                  </li>
                  <li className="d-flex">
                    <MapPin className="text-primary me-3 mt-1" />
                    <div>
                      <h6 className="mb-1">Visit Us</h6>
                      <p className="mb-0">
                        103, 1st Floor, B Junction, Behind Karve Statue, Next to Kothrud Post Office<br />
                        Kothrud, Pune-411038
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8">
              <div className="bg-white p-4 rounded h-100" style={{boxShadow: "2px 3px 5px gray"}}>
                <h3 className="fw-bold mb-4 text-primary">Send Us a Message</h3>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-white text-center text-muted border-top">
        <p className="mb-0">We usually respond within 24 hours. Thank you for reaching out!</p>
      </footer>
      <Course/>
    </div>
  );
};

export default ContactUs;
