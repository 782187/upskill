import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleClick = () => {
        setIsNavbarOpen(false);
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(prevState => !prevState);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light fw-bold sticky-top shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="/logo.png" alt="Logo" style={{ width: '45px' }} className="me-2" />
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={handleClick}>About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Courses
                            </Link>
                            <ul className="dropdown-menu shadow-sm">
                                <li>
                                    <Link className="dropdown-item" to="/courses/java-full-stack" onClick={handleClick}>Full Stack Java Development</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/courses/python-full-stack" onClick={handleClick}>Full Stack Python Development</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/courses/web-development" onClick={handleClick}>Web Development</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/courses/software-testing" onClick={handleClick}>Software Testing</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/corporate-training" onClick={handleClick}>Corporate Training</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs" onClick={handleClick}>Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hire" onClick={handleClick}>Hire From Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/career" onClick={handleClick}>Career</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/events" onClick={handleClick}>Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback" onClick={handleClick}>Students Feedback</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
