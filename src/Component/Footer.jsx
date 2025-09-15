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
            transition: color 0.3s, text-decoration 0.3s;
          }
          .footer-link:hover {
            color: #00bcd4;
            text-decoration: underline;
          }
          .footer-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #ffffff;
          }
          .social-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            transition: background-color 0.3s ease;
          }
          .social-icon:hover {
            background-color: #00bcd4;
            color: #fff;
          }
          @media (max-width: 576px) {
            .flex-sm-row {
              flex-direction: row !important;
            }
            .footer-section {
              flex: 1;
              min-width: 50%;
              padding: 0 5px;
            }
          }
        `}
      </style>

      <footer className="bg-dark text-light pt-2 pb-2" id="footer">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6">
              <img src="/logoupskill.png" alt="Upskill Logo" style={{ height: 50 }} className="mb-3" />
              <p className="mb-2">
                103, B Junction, Behind Karve Statue,<br />
                Near Kothrud Post Office, Pune - 411038
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="" className="social-icon text-success" aria-label="WhatsApp">
                  <MessageCircle size={20} />
                </a>
                <a href="https://www.linkedin.com/company/upskill-it-training-placement/posts/?feedView=all" className="social-icon text-info" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/upskill_pune" className="social-icon text-danger" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex flex-column flex-sm-row justify-content-between">
              <div className="footer-section mb-4 mb-sm-0">
                <h5 className="footer-title">Quick Links</h5>
                <ul className="list-unstyled d-flex flex-column gap-2">
                  <li><Link to="/terms-and-conditions" className="footer-link">Terms & Conditions</Link></li>
                  <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                </ul>
              </div>

              <div className="footer-section">
                <h5 className="footer-title">Explore</h5>
                <ul className="list-unstyled d-flex flex-column gap-2">
                  <li><Link to="/about" className="footer-link">About Us</Link></li>
                  <li><Link to="/courses" className="footer-link">Courses</Link></li>
                  <li><Link to="/corporate-training" className="footer-link">Corporate Training</Link></li>
                  <li><Link to="/blogs" className="footer-link">Blogs</Link></li>
                  <li><Link to="/career" className="footer-link">Career</Link></li>
                  <li><Link to="/events" className="footer-link">Events</Link></li>
                  <li><Link to="/hire" className="footer-link">Hire From Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <h5 className="footer-title mb-3">Visit Us</h5>
              <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                <iframe
                  title="Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31577.72940112528!2d73.8078795!3d18.506321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf90d742db7f%3A0x64f1ed5b9ff7d894!2sKothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1694448477896!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <hr className="border-secondary mt-5" />

          <div className="text-center small">
            &copy; {currentYear} UpSkill Website Development and Learning Platform. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;