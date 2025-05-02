import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CourseDetail() {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://upskill-servlet.onrender.com/UpskillServlet/get-course-detail?slug=${slug}`)
            .then(response => {
                setCourse(response.data);
            })
            .catch(() => {
                setError("Course not found or an error occurred.");
            });
    }, [slug]);

    if (error) {
        return <div className="text-center text-danger">{error}</div>;
    }

    if (!course) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <>
            <section 
                className="text-white text-center d-flex align-items-center" 
                style={{ 
                    height: '70vh',
                    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://source.unsplash.com/1600x900/?technology) no-repeat center center/cover`
                }}
            >
                <div className="container">
                    <h1 className="display-3 fw-bold">{course.title}</h1>
                    <p className="lead">Master {course.technology} with industry-relevant skills and certification</p>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6">
                            <div className="position-relative overflow-hidden rounded-4 shadow-sm">
                                <img 
                                    src={`https://upskill-servlet.onrender.com/UpskillServlet/get-image?courseId=${course.id}`} 
                                    alt={course.title}
                                    className="img-fluid w-100 h-100"
                                    style={{ objectFit: 'cover', height: '400px' }}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h2 className="mb-4 text-primary">Course Overview</h2>
                            <div className="mb-3"><strong>Duration:</strong> {course.duration}</div>
                            <div className="mb-3"><strong>Mode:</strong> {course.mode}</div>
                            <div className="mb-3"><strong>Technology:</strong> {course.technology}</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h3 className="mb-4 text-secondary">Description</h3>
                            <p style={{ whiteSpace: 'pre-line' }}>
                                {course.description}
                            </p>
                        </div>

                        <div className="col-md-6">
                            <h3 className="mb-4 text-secondary">Topics Covered</h3>
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

            <section className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md-4">
                            <i className="bi bi-laptop fs-1 text-primary"></i>
                            <h5 className="mt-3">100% Practical Learning</h5>
                            <p>Hands-on projects and real-world case studies.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-person-badge fs-1 text-success"></i>
                            <h5 className="mt-3">Expert Trainers</h5>
                            <p>Learn from industry professionals with years of experience.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-award fs-1 text-warning"></i>
                            <h5 className="mt-3">Certification</h5>
                            <p>Receive an industry-recognized certificate after completion.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h3 className="mb-4 text-secondary">Sample Certificate</h3>
                    <div className="d-flex justify-content-center">
                        <img 
                            src={`https://upskill-servlet.onrender.com/UpskillServlet/get-certificate-image?courseId=${course.id}`} 
                            alt="Course Certificate" 
                            className="img-fluid rounded-4 shadow"
                            style={{ maxWidth: '700px', height: 'auto' }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default CourseDetail;
