import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../Style/CourseDetail.css';
import EnquiryForm from './Home/EnquiryForm';
import Course from './Home/Course';
import Review from './Home/Review';

function CourseDetail() {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        axios.get(`https://upskill-server.onrender.com/get-course-detail?slug=${slug}`)
            .then(response => {
                setCourse(response.data);
            })
            .catch(() => {
                setError("Course not found or an error occurred.");
            });
    }, [slug]);

    if (error) {
        return <div className="text-center text-danger mt-5">{error}</div>;
    }

    if (!course) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section position-relative">
                <video className="bg-video" autoPlay muted loop>
                    <source src="/video/tech-bg.mp4" type="video/mp4" />
                </video>
                <div className="overlay"></div>
                <div className="container text-white d-flex flex-column justify-content-center align-items-start h-100">
                    <div data-aos="fade-right">
                        <h1 className="display-4 fw-bold">{course.title}</h1>
                        <p className="lead">Master {course.technology} with real-world skills & certification.</p>
                        <a href="#enquiry" className="btn btn-warning mt-3 px-4 py-2 fw-semibold">Enquire Now</a>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6" data-aos="zoom-in">
                            <img
                                src={`https://upskill-server.onrender.com/get-image?courseId=${course.id}`}
                                className="img-fluid rounded shadow-sm w-100"
                                style={{ objectFit: 'cover', height: '400px' }}
                                alt={course.title}
                            />
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <h2 className="section-heading text-primary">Course Overview</h2>
                            <ul className="list-group list-group-flush fs-5">
                                <li className="list-group-item"><strong>Technology:</strong> {course.technology}</li>
                                <li className="list-group-item"><strong>Duration:</strong> {course.duration}</li>
                                <li className="list-group-item"><strong>Mode:</strong> {course.mode}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Description & Topics */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="section-heading text-secondary">What You'll Learn</h3>
                            <p className="fs-5" style={{ whiteSpace: 'pre-line' }}>{course.description}</p>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="section-heading text-secondary">Topics Covered</h3>
                            <ul className="list-unstyled fs-5">
                                {course.topics.split('\n').map((topic, i) => (
                                    <li key={i} className="mb-2 d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Sample */}
            <section className="py-5 bg-light">
                <div className="container text-center" data-aos="zoom-in-up">
                    <h3 className="section-heading text-primary mb-4">Sample Certificate</h3>
                    <img
                        src={`https://upskill-server.onrender.com/get-certificate-image?courseId=${course.id}`}
                        alt="Certificate"
                        className="img-fluid rounded shadow-sm"
                        style={{ maxWidth: '90%', height: 'auto' }}
                    />
                </div>
            </section>

            {/* Features */}
            <section className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md-4" data-aos="flip-left">
                            <i className="bi bi-laptop feature-icon text-primary"></i>
                            <h5 className="mt-3">100% Practical</h5>
                            <p>Real-time projects and hands-on training.</p>
                        </div>
                        <div className="col-md-4" data-aos="flip-up">
                            <i className="bi bi-person-badge feature-icon text-warning"></i>
                            <h5 className="mt-3">Industry Experts</h5>
                            <p>Learn from certified and experienced mentors.</p>
                        </div>
                        <div className="col-md-4" data-aos="flip-right">
                            <i className="bi bi-award feature-icon text-info"></i>
                            <h5 className="mt-3">Certification</h5>
                            <p>Recognized certificate on course completion.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enquiry Form */}
            <section className="py-5 bg-white" id="enquiry">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="bg-light p-4 rounded shadow">
                                <h4 className="text-center text-secondary mb-4">Enquire About This Course</h4>
                                <EnquiryForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Courses & Reviews */}
            <Course />
            <Review />
        </>
    );
}

export default CourseDetail;
