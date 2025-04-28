import React, { useState, useEffect } from 'react';
import { ArrowRightFromLineIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../../Style/HeroSection.css';
import EnquiryForm from './EnquiryForm'; 

const slides = [
  {
    title: 'Master Web Development',
    subTitle: 'Learn HTML, CSS, JavaScript, and more',
    backgroundImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    overlayColor: 'rgba(0, 0, 0, 0.5)', 
  },
  {
    title: 'Full Stack Java Development',
    subTitle: 'Get certified in top tech skills',
    backgroundImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
  },
  {
    title: 'Full Stack Python Development',
    subTitle: 'Interactive and hands-on training sessions',
    backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-section position-relative text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
      }}
    >
      <div
        className="overlay position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: slides[currentSlide].overlayColor }}
      ></div>

      <div className="container position-relative z-2">
        <div className="row align-items-center justify-content-between">
          <div className={`col-md-6 text-left ${animate ? 'fade-in-up' : ''}`}>
            <h1
              className="display-4 fw-bold"
              style={{
                color: '#ffffff',
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
              }}
            >
              {slides[currentSlide].title}
            </h1>
            <p
              className="lead"
              style={{
                color: '#f8f9fa',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              {slides[currentSlide].subTitle}
            </p>
            <Link
              to="/courses"
              className="btn mt-3 d-inline-flex align-items-center"
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontWeight: 'bold',
                border: 'none',
              }}
            >
              Explore Courses <ArrowRightFromLineIcon className="ms-2" size={25} />
            </Link>
          </div>

          <div className="col-md-5">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
