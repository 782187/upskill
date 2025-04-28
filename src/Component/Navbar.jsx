import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
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
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto d-flex align-items-lg-center gap-3">
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
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
                                    <Link className="dropdown-item" to="/courses/java-full-stack">Full Stack Java Development</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/courses/python-full-stack">Full Stack Python Development</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/courses/web-development">Web Development</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/courses/software-testing">Software Testing</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/corporate-training">Corporate Training</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hire">Hire From Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/career">Career</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/events">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback">Students Feedback</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
