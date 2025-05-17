import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import "../Style/HeroSection.css"

function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleClick = () => {
        setIsNavbarOpen(false);
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(prevState => !prevState);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light fw-bold sticky-top shadow-sm p-3">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="/logo.png" alt="Logo" style={{ width: '200px' }} className="me-2" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded={isNavbarOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
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
                            <Link
                                className="nav-link dropdown-toggle fw-semibold text-dark"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                About Us
                            </Link>
                            <ul className="dropdown-menu shadow-lg border-0 rounded-3 animate__animated animate__fadeInDown custom-dropdown">
                                <li>
                                    <Link className="dropdown-item" to="/about" onClick={handleClick}>
                                        <i className="fas fa-bullseye me-2 text-primary"></i>Mission & Vision
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/events" onClick={handleClick}>
                                        <i className="fas fa-calendar-alt me-2 text-success"></i>Events
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#" onClick={handleClick}>
                                        <i className="fas fa-users me-2 text-info"></i>Team
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/career" onClick={handleClick}>
                                        <i className="fas fa-briefcase me-2 text-warning"></i>Career
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle fw-semibold text-dark"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Courses
                            </Link>
                            <ul className="dropdown-menu shadow-lg border-0 rounded-3 animate__animated animate__fadeInDown custom-dropdown">
                                <li>
                                    <Link className="dropdown-item" to="/courses/java-full-stack" onClick={handleClick}>
                                        <i className="fas fa-code me-2 text-primary"></i> Full Stack Java Development
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/courses/python-full-stack" onClick={handleClick}>
                                        <i className="fab fa-python me-2 text-success"></i> Full Stack Python Development
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/courses/web-development" onClick={handleClick}>
                                        <i className="fas fa-laptop-code me-2 text-info"></i> Web Development
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/courses/software-testing" onClick={handleClick}>
                                        <i className="fas fa-vials me-2 text-danger"></i> Software Testing
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle fw-semibold text-dark"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Student Zone
                            </Link>
                            <ul className="dropdown-menu shadow-lg border-0 rounded-3 animate__animated animate__fadeInDown custom-dropdown">
                                <li>
                                    <Link className="dropdown-item" to="#" onClick={handleClick}>
                                        <i className="fas fa-question-circle me-2 text-success"></i> Interview Question
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#" onClick={handleClick}>
                                        <i className="fas fa-user-check me-2 text-info"></i> Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#" onClick={handleClick}>
                                        <i className="fas fa-video me-2 text-danger"></i> Video Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#" onClick={handleClick}>
                                        <i className="fas fa-graduation-cap me-2 text-warning"></i> Placed Students
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/blogs" onClick={handleClick}>
                                        <i className="fas fa-blog me-2 text-primary"></i> Blogs
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/corporate-training" onClick={handleClick}>Corporate Training</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hire" onClick={handleClick}>Hire From Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus" onClick={handleClick}>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <div className="animated-border-btn">
                                <Link className="nav-link text-light" to="/request" onClick={handleClick}>
                                    Request Callback
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
