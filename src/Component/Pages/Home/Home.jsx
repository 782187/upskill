import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import Course from './Course';
import UpskillUPS from './UpskillUPS';
import HiringPartner from './HiringPartner';
import Review from './Review';
import EnquiryForm from './EnquiryForm';
import PlacedStudent from './PlacedStudent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckCircle } from 'lucide-react';
import { color } from 'framer-motion';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <HeroSection />
      <Course />
      <UpskillUPS />
      <HiringPartner />
      <Review />

      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <h2 className="fw-bold text-primary mb-4">
              Why Choose <span className="text-warning">RsSofttecs?</span>
            </h2>
            <p className="text-muted mb-4">
              At <strong>RsSofttecs</strong>, we turn ambition into achievement. With hands-on training,
              expert mentors, and real-world projects, we prepare you for the industry from day one.
            </p>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <CheckCircle className="text-success me-2" />
                Industry-ready Full Stack Java & Python training
              </li>
              <li className="mb-3 d-flex align-items-center">
                <CheckCircle className="text-success me-2" />
                Live projects & real-time code debugging sessions
              </li>
              <li className="mb-3 d-flex align-items-center">
                <CheckCircle className="text-success me-2" />
                Personalized mentorship and career counseling
              </li>
              <li className="mb-3 d-flex align-items-center">
                <CheckCircle className="text-success me-2" />
                Resume building, mock interviews & placement help
              </li>
              <li className="mb-3 d-flex align-items-center">
                <CheckCircle className="text-success me-2" />
                Flexible offline & online batch options
              </li>
            </ul>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <div className="bg-white shadow rounded-4 p-4">
              <h5 className="text-center fw-bold mb-3 text-primary">Get in Touch</h5>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
      <PlacedStudent />
    </div>
  );
}

export default Home;
