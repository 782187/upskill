import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../Style/CourseDetail.css';
import EnquiryForm from './Home/EnquiryForm'; 

function CourseDetail() {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 800 });
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
            <section 
                className="text-white hero-section d-flex align-items-center"
                style={{
                    minHeight: '80vh',
                    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://source.unsplash.com/1600x900/?technology) no-repeat center center/cover`
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0" data-aos="zoom-in">
                            <h1 className="display-4 fw-bold text-white">{course.title}</h1>
                            <p className="lead">Master {course.technology} with industry-relevant skills and certification</p>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="bg-white p-4 rounded shadow enquiry-form-wrapper">
                                <h5 className="mb-3 text-dark text-center">Enquire About This Course</h5>
                                <EnquiryForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light" data-aos="fade-up">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6">
                            <img 
                                src={`https://upskill-server.onrender.com/get-image?courseId=${course.id}`} 
                                alt={course.title}
                                className="img-fluid w-100 course-img"
                                style={{ height: '400px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="section-heading text-primary">Course Overview</h2>
                            <p><strong>Duration:</strong> {course.duration}</p>
                            <p><strong>Mode:</strong> {course.mode}</p>
                            <p><strong>Technology:</strong> {course.technology}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5" data-aos="fade-up">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h3 className="section-heading text-secondary">Description</h3>
                            <p style={{ whiteSpace: 'pre-line' }}>{course.description}</p>
                        </div>
                        <div className="col-md-6">
                            <h3 className="section-heading text-secondary">Topics Covered</h3>
                            <ul className="list-unstyled">
                                {course.topics.split('\n').map((topic, index) => (
                                    <li key={index} className="mb-3 d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i> 
                                        <span>{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-dark text-light py-5" data-aos="fade-up">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md-4">
                            <i className="bi bi-laptop feature-icon text-primary"></i>
                            <h5 className="mt-3">100% Practical Learning</h5>
                            <p>Hands-on projects and real-world case studies.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-person-badge feature-icon text-success"></i>
                            <h5 className="mt-3">Expert Trainers</h5>
                            <p>Learn from industry professionals with years of experience.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-award feature-icon text-warning"></i>
                            <h5 className="mt-3">Certification</h5>
                            <p>Receive an industry-recognized certificate after completion.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light" data-aos="fade-up">
                <div className="container text-center">
                    <h3 className="section-heading text-secondary">Sample Certificate</h3>
                    <div className="d-flex justify-content-center">
                        <img 
                            src={`https://upskill-server.onrender.com/get-certificate-image?courseId=${course.id}`} 
                            alt="Course Certificate" 
                            className="img-fluid certificate-img"
                            style={{ maxWidth: '700px', height: 'auto' }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default CourseDetail;
