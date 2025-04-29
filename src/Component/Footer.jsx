import React from 'react';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>
        {`
          .footer-link {
            text-decoration: none;
            color: #f8f9fa;
          }
          .footer-link:hover {
            color: #00bcd4;
            text-decoration: underline;
          }
        `}
      </style>
      <footer className="bg-dark text-light pt-5 pb-3" id="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-4">
              <img src="/logo.png" alt="Upskill Logo" style={{ height: 100 }} className="mb-3" />
              <p>
                103, B Junction, Behind Karve Statue,<br />
                Near Kothrud Post Office, Pune - 411038
              </p>
              <div className="d-flex gap-3 mt-3">
                <a
                  href="#"
                  className="text-success"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="#"
                  className="text-info"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-danger"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="col-md-2">
              <h5 className="text-uppercase fw-bold">Explore</h5>
              <ul className="list-unstyled d-flex flex-column" style={{ gap: "10px" }}>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/courses" className="footer-link">Courses</Link></li>
                <li><Link to="/corporate-training" className="footer-link">Corporate Training</Link></li>
                <li><Link to="/blogs" className="footer-link">Blogs</Link></li>
                <li><Link to="/career" className="footer-link">Career</Link></li>
                <li><Link to="/events" className="footer-link">Events</Link></li>
                <li><Link to="/hire" className="footer-link">Hire From Us</Link></li>
              </ul>
            </div>

            <div className="col-md-2">
              <h5 className="text-uppercase fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5 className="text-uppercase fw-bold mb-3">Visit Us</h5>
              <div className="ratio ratio-4x3 rounded overflow-hidden">
                <iframe
                  title="Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31577.72940112528!2d73.8078795!3d18.506321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf90d742db7f%3A0x64f1ed5b9ff7d894!2sKothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1694448477896!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <hr className="border-light my-4" />

          <div className="text-center small">
            &copy; {currentYear} Upskill Learning Platform. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
