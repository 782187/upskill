import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnquiryForm from './Home/EnquiryForm';

const ContactUs = () => {
  const heroImageUrl =
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'; 

  return (
    <div className="bg-light min-vh-100">
      <section
        className="text-white position-relative d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
        }}
      >

        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0, 0, 0, 0.6)' }}></div>
        <div className="position-relative text-center px-4">
          <div
            className="p-4 rounded shadow-lg"
            style={{
              backdropFilter: 'blur(6px)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            <h1 className="display-4 fw-bold">Contact <span style={{color: "orange"}}>Upskill</span> IT Training & Placement</h1>
            <p className="lead mt-3">
              Ready to start your tech career? Have questions about our courses? Reach out — we’re here to guide you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-white p-4 shadow rounded h-100">
                <h2 className="h4 fw-bold mb-4 text-primary">Need More Help?</h2>
                <ul className="list-unstyled text-dark">
                  <li className="d-flex mb-4">
                    <Phone className="text-primary me-3 mt-1" />
                    <div>
                      <h6 className="mb-1">Call Us</h6>
                      <a href="tel:+917821879681" className="text-decoration-none text-dark">
                        +91 8484833677
                      </a>
                    </div>
                  </li>
                  <li className="d-flex mb-4">
                    <Mail className="text-primary me-3 mt-1" />
                    <div>
                      <h6 className="mb-1">Email</h6>
                      <a href="mailto:upskill.contact@gmail.com" className="text-decoration-none text-dark">
                         hr@upskilll.com
                      </a>
                    </div>
                  </li>
                  <li className="d-flex">
                    <MapPin className="text-primary me-3 mt-1" />
                    <div>
                      <h6 className="mb-1">Visit Us</h6>
                      <p className="mb-0">103, 1st Floor, B Junction, Behind Karve Statue, Next to Kothrud Post Office<br/> Kothrud, Pune-411038</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8">
              <div className="bg-white p-4 shadow rounded h-100">
                <EnquiryForm/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-light text-center text-muted border-top">
        <p className="mb-0">We usually respond within 24 hours. Thank you for reaching out!</p>
      </footer>
    </div>
  );
};

export default ContactUs;
