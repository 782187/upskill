import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EnquiryForm from './Home/EnquiryForm'; 

function CourseDetail() {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null);

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
        return <div className="text-center text-danger">{error}</div>;
    }

    if (!course) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <>
            <section
                className="d-flex align-items-center text-white"
                style={{
                    minHeight: '100vh',
                    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://source.unsplash.com/1600x900/?technology,code) no-repeat center center/cover`,
                }}
            >
                <div className="container py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 fw-bold animate__animated animate__fadeInDown">
                                {course.title}
                            </h1>
                            <p className="lead mt-3 animate__animated animate__fadeInUp">
                                Master {course.technology} with industry-ready skills & certification.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-white p-4 p-md-5 rounded-4 shadow animate__animated animate__fadeInRight">
                                <EnquiryForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h3 className="text-secondary mb-4">Course Description</h3>
                            <p style={{ whiteSpace: 'pre-line' }}>{course.description}</p>
                        </div>

                        <div className="col-md-6">
                            <div className="rounded-4 overflow-hidden shadow-sm mb-4">
                                <img
                                    src={`https://upskill-server.onrender.com/get-image?courseId=${course.id}`}
                                    alt={course.title}
                                    className="img-fluid w-100"
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                            </div>

                            <ul className="list-group shadow-sm">
                                <li className="list-group-item"><strong>Duration:</strong> {course.duration}</li>
                                <li className="list-group-item"><strong>Mode:</strong> {course.mode}</li>
                                <li className="list-group-item"><strong>Technology:</strong> {course.technology}</li>
                                <li className="list-group-item">
                                    <strong>Topics Covered:</strong>
                                    <ul className="mt-2">
                                        {course.topics.split('\n').map((topic, index) => (
                                            <li key={index}>{topic}</li>
                                        ))}
                                    </ul>
                                </li>
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
                            <p>Learn from professionals with years of industry experience.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-award fs-1 text-warning"></i>
                            <h5 className="mt-3">Certification</h5>
                            <p>Get certified upon successful course completion.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h3 className="mb-4 text-secondary">Sample Certificate</h3>
                    <div className="d-flex justify-content-center">
                        <img
                            src={`https://upskill-server.onrender.com/get-certificate-image?courseId=${course.id}`}
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
