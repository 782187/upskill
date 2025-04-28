import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Course() {
    const [dynamicCourses, setDynamicCourses] = useState([]);
    const [staticCourses, setStaticCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/UpskillServlet/get-courses')
            .then(response => setDynamicCourses(response.data))
            .catch(error => console.error("Backend error:", error));

        axios.get('/course.json')
            .then(response => setStaticCourses(response.data))
            .catch(error => setError(error));
    }, []);

    const allCourses = [...staticCourses, ...dynamicCourses];

    return (
        <div className="bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-3" style={{ color: "orange" }}>Our Training Programs</h2>
                <p className="text-center mb-5">
                    Comprehensive courses designed by industry experts to help you master in-demand skills and advance your career.
                </p>

                {error && <p className="text-danger text-center">{error.message}</p>}

                <div className="row gy-4">
                    {allCourses.map((course, index) => {
                        
                        const isStatic = !!course.Image;
                        const imageUrl = isStatic 
                            ?course.Image : `http://localhost:8080/UpskillServlet/get-image?courseId=${course.id}`;

                        return (
                            <div className="col-12 col-sm-6 col-md-3" key={index}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={imageUrl}
                                        className="card-img-top"
                                        alt={course.title || course.courseName}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">
                                            {course.title || course.courseName}
                                        </h5>
                                        <p className="card-text mb-1">
                                            <strong>Duration:</strong> {course.duration || course.courseDuration}
                                        </p>
                                        <p className="card-text mb-3">
                                            <strong>Mode:</strong> {course.mode || course.batch}
                                        </p>
                                        <Link
                                            to={`/courses/${course.slug}`}
                                            className="btn mt-auto"
                                            style={{ backgroundColor: "orange", color: "white" }}
                                        >
                                            Explore
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Course;
