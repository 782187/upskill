import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';
import "../Style/HeroSection.css";
import EnquiryForm from './Pages/Home/EnquiryForm';

const API_URL = import.meta.env.VITE_API_URL;

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleClick = () => setIsNavbarOpen(false);
  const toggleNavbar = () => setIsNavbarOpen(prev => !prev);
  const popupForm = () => setShowModal(true);

  useEffect(() => {
    axios.get(`${API_URL}/get-courses`)
      .then(res => setCourses(res.data))
      .catch(err => console.error("Error loading courses:", err));
  }, []);

  // Add scroll event listener to make navbar compact on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a nav item is active
  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <style>{`
        @keyframes floatSparks {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-80px) rotate(180deg); opacity: 1; }
          100% { transform: translateY(0) rotate(360deg); opacity: 0.6; }
        }
        .spark {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(0, 195, 255, 0.8);
          border-radius: 50%;
          animation: floatSparks 3s infinite ease-in-out;
          pointer-events: none;
          z-index: 1;
        }
        .spark1 { top: 10%; left: 15%; animation-delay: 0s; }
        .spark2 { top: 50%; left: 80%; animation-delay: 1s; }
        .spark3 { top: 80%; left: 25%; animation-delay: 2s; }
        
        /* Active state styles */
        .nav-link.active {
          color: #0d6efd !important;
          position: relative;
        }
        
        .nav-link.active:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #0d6efd;
          border-radius: 2px;
        }
        
        /* Mobile responsiveness improvements */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            padding: 1rem;
            background-color: white;
            border-radius: 0.375rem;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            margin-top: 0.5rem;
          }
          
          .navbar-nav {
            gap: 0.5rem !important;
          }
          
          .dropdown-menu {
            margin: 0.5rem 0;
            border: 1px solid rgba(0, 0, 0, 0.1);
          }
          
          .callback-btn-container {
            margin-top: 1rem;
            width: 100%;
          }
        }
        
        /* Improved dropdown styling */
        .custom-dropdown {
          min-width: 250px;
        }
        
        .dropdown-item {
          padding: 0.5rem 1rem;
          transition: all 0.2s ease;
        }
        
        .dropdown-item:hover {
          background-color: #f8f9fa;
          padding-left: 1.25rem;
        }
        
        /* Animated callback button */
        .callback-btn-container {
          position: relative;
          overflow: hidden;
          border-radius: 50px;
          background: linear-gradient(90deg, #0d6efd, #0dcaf0, #0d6efd);
          background-size: 200% 100%;
          padding: 2px;
          transition: all 0.5s ease;
          animation: gradientShift 3s infinite linear;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .callback-btn {
          background: white;
          border: none;
          border-radius: 50px;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          width: 100%;
          color: #0d6efd;
        }
        
        .callback-btn-container:hover {
          box-shadow: 0 0 15px rgba(13, 110, 253, 0.5);
          transform: translateY(-2px);
        }
        
        .callback-btn-container:hover .callback-btn {
          background: linear-gradient(90deg, #0d6efd, #0dcaf0);
          color: white;
        }
        
        /* Pulse animation effect */
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .callback-btn-container {
          animation: pulse 2s infinite;
        }
        
        .callback-btn-container:hover {
          animation: none;
        }
        
        /* Navbar scroll effect */
        .navbar {
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
        }
        
        .navbar-scrolled {
          padding: 0.25rem 1rem;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        /* Logo transition */
        .navbar-brand img {
          transition: all 0.3s ease;
        }
        
        .navbar-scrolled .navbar-brand img {
          width: 160px !important;
        }
      `}</style>

      <nav className={`navbar navbar-expand-lg bg-light fw-bold sticky-top shadow-sm py-2 px-3 ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleClick}>
            <img src="/logo.png" alt="Logo" style={{ width: '200px'}} className="me-2" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto d-flex align-items-lg-center gap-3">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/', true) ? 'active text-primary' : 'text-dark'}`} 
                  to="/" 
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link 
                  className={`nav-link dropdown-toggle ${isActive('/about') || isActive('/events') || isActive('/team') || isActive('/career') ? 'active text-primary' : 'text-dark'}`} 
                  to="#" 
                  role="button" 
                  data-bs-toggle="dropdown"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu shadow-lg border-0 rounded-3 animate__animated animate__fadeInDown custom-dropdown">
                  <li>
                    <Link 
                      className={`dropdown-item ${isActive('/about') ? 'active' : ''}`} 
                      to="/about" 
                      onClick={handleClick}
                    >
                      <i className="fas fa-bullseye me-2 text-primary"></i>Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className={`dropdown-item ${isActive('/events') ? 'active' : ''}`} 
                      to="/events" 
                      onClick={handleClick}
                    >
                      <i className="fas fa-calendar-alt me-2 text-success"></i>Events
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className={`dropdown-item ${isActive('/team') ? 'active' : ''}`} 
                      to="/team" 
                      onClick={handleClick}
                    >
                      <i className="fas fa-users me-2 text-info"></i>Team
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className={`dropdown-item ${isActive('/career') ? 'active' : ''}`} 
                      to="/career" 
                      onClick={handleClick}
                    >
                      <i className="fas fa-briefcase me-2 text-warning"></i>Career
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link 
                  className={`nav-link dropdown-toggle ${isActive('/courses') ? 'active text-primary' : 'text-dark'}`} 
                  to="#" 
                  role="button" 
                  data-bs-toggle="dropdown"
                >
                  Courses
                </Link>
                <ul className="dropdown-menu shadow-lg border-0 rounded-3 animate__animated animate__fadeInDown custom-dropdown">
                  {courses.length > 0 ? (
                    courses.map(course => (
                      <li key={course.id}>
                        <Link 
                          className={`dropdown-item ${isActive(`/courses/${course.slug}`) ? 'active' : ''}`} 
                          to={`/courses/${course.slug}`} 
                          onClick={handleClick}
                        >
                          <i className="fas fa-book me-2 text-primary"></i> {course.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="dropdown-item text-muted">Loading courses...</li>
                  )}
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link 
                  className={`nav-link dropdown-toggle ${isActive('/studentzone') || isActive('/placed') ? 'active text-primary' : 'text-dark'}`} 
                  to="#" 
                  role="button" 
                  data-bs-toggle="dropdown"
                >
                  Student Zone
                </Link>
                <ul className="dropdown-menu shadow-lg border-0 rounded-3 animate__animated animate__fadeInDown custom-dropdown">
                  <li>
                    <Link 
                      className={`dropdown-item ${isActive('/studentzone/testimonials') ? 'active' : ''}`} 
                      to="/studentzone/testimonials" 
                      onClick={handleClick}
                    >
                      <i className="fas fa-user-check me-2 text-info"></i> Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className={`dropdown-item ${isActive('/placed') ? 'active' : ''}`} 
                      to="/placed" 
                      onClick={handleClick}
                    >
                      <i className="fas fa-graduation-cap me-2 text-warning"></i> Placed Students
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className={`dropdown-item ${isActive('/studentzone/blogs') ? 'active' : ''}`} 
                      to="/studentzone/blogs" 
                      onClick={handleClick}
                    >
                      <i className="fas fa-blog me-2 text-primary"></i> Blogs
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/corporate-training') ? 'active text-primary' : 'text-dark'}`} 
                  to="/corporate-training" 
                  onClick={handleClick}
                >
                  Corporate Training
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/hire') ? 'active text-primary' : 'text-dark'}`} 
                  to="/hire" 
                  onClick={handleClick}
                >
                  Hire From Us
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/contactus') ? 'active text-primary' : 'text-dark'}`} 
                  to="/contactus" 
                  onClick={handleClick}
                >
                  Contact Us
                </Link>
              </li>
              
              <li className="nav-item">
                <div className="callback-btn-container">
                  <button className="callback-btn" onClick={popupForm}>
                    <i className="fas fa-phone-alt me-2"></i>Request Callback
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down">
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header bg-light border-0">
                <h5 className="modal-title text-primary fw-bold">Empowering Your IT Career with Expert Training.</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body d-flex flex-column flex-md-row align-items-center gap-4 p-4">
                <div className="position-relative text-center w-100 w-md-50">
                  <div className="spark spark1"></div>
                  <div className="spark spark2"></div>
                  <div className="spark spark3"></div>
                  <img src="/logo.png" className="img-fluid" alt="AvisTech Logo" />
                </div>
                <div className="w-100 w-md-50">
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;