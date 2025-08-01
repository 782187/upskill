import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';
import "../Style/HeroSection.css";
import EnquiryForm from './Pages/Home/EnquiryForm';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [courses, setCourses] = useState([]);

  const handleClick = () => setIsNavbarOpen(false);
  const toggleNavbar = () => setIsNavbarOpen(prev => !prev);
  const popupForm = () => setShowModal(true);

  useEffect(() => {
    axios.get('https://upskill-server.onrender.com/get-courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error("Error loading courses:", err));
  }, []);

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
      `}</style>

      <nav className="navbar navbar-expand-lg bg-light fw-bold sticky-top shadow-sm py-2 px-3">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/logo.png" alt="Logo" style={{ width: '200px'}} className="me-2" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-expanded={isNavbarOpen}
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto d-flex align-items-lg-center gap-3">
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/" onClick={handleClick}>Home</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-dark" to="#" role="button" data-bs-toggle="dropdown">
                  About Us
                </Link>
                <ul className="dropdown-menu shadow-lg border-0 rounded-3 animate__animated animate__fadeInDown custom-dropdown">
                  <li><Link className="dropdown-item" to="/about" onClick={handleClick}><i className="fas fa-bullseye me-2 text-primary"></i>Mission & Vision</Link></li>
                  <li><Link className="dropdown-item" to="/events" onClick={handleClick}><i className="fas fa-calendar-alt me-2 text-success"></i>Events</Link></li>
                  <li><Link className="dropdown-item" to="/team" onClick={handleClick}><i className="fas fa-users me-2 text-info"></i>Team</Link></li>
                  <li><Link className="dropdown-item" to="/career" onClick={handleClick}><i className="fas fa-briefcase me-2 text-warning"></i>Career</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-dark" to="#" role="button" data-bs-toggle="dropdown">
                  Courses
                </Link>
                <ul className="dropdown-menu shadow-lg border-0 rounded-3 animate__animated animate__fadeInDown custom-dropdown">
                  {courses.length > 0 ? (
                    courses.map(course => (
                      <li key={course.id}>
                        <Link className="dropdown-item" to={`/courses/${course.slug}`} onClick={handleClick}>
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
                <Link className="nav-link dropdown-toggle text-dark" to="#" role="button" data-bs-toggle="dropdown">
                  Student Zone
                </Link>
                <ul className="dropdown-menu shadow-lg border-0 rounded-3 animate__animated animate__fadeInDown custom-dropdown">
                  <li><Link className="dropdown-item" to="studentzone/testimonials" onClick={handleClick}><i className="fas fa-user-check me-2 text-info"></i> Testimonials</Link></li>
                  <li><Link className="dropdown-item" to="/placed" onClick={handleClick}><i className="fas fa-graduation-cap me-2 text-warning"></i> Placed Students</Link></li>
                  <li><Link className="dropdown-item" to="studentzone/blogs" onClick={handleClick}><i className="fas fa-blog me-2 text-primary"></i> Blogs</Link></li>
                </ul>
              </li>

              <li className="nav-item"><Link className="nav-link" to="/corporate-training" onClick={handleClick}>Corporate Training</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/hire" onClick={handleClick}>Hire From Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contactus" onClick={handleClick}>Contact Us</Link></li>
              <li className="nav-item">
                <div className="animated-border-btn">
                  <button className="nav-link text-light" onClick={popupForm}>Request Callback</button>
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
