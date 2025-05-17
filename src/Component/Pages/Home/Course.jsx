import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Courses.css';

function Course() {
    const [dynamicCourses, setDynamicCourses] = useState([]);
    const [staticCourses, setStaticCourses] = useState([]);
    const [error, setError] = useState(null);
    const scrollRef = useRef(null);
    const indexRef = useRef(0);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        axios.get('https://upskill-server.onrender.com/get-courses')
            .then(res => setDynamicCourses(res.data))
            .catch(err => console.error("Dynamic Error:", err));

        axios.get('/course.json')
            .then(res => setStaticCourses(res.data))
            .catch(err => setError(err));
    }, []);

    const allCourses = [...staticCourses, ...dynamicCourses].slice(0, 4);
    const extendedCourses = [...allCourses, ...allCourses];

    useEffect(() => {
        const updateCardWidth = () => {
            const container = scrollRef.current;
            if (container) {
                const card = container.querySelector('.course-card');
                if (card) {
                    setCardWidth(card.offsetWidth);
                }
            }
        };
        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);
        return () => window.removeEventListener('resize', updateCardWidth);
    }, [extendedCourses]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && cardWidth) {
                const container = scrollRef.current;
                const maxScroll = container.scrollWidth / 2;
                if (container.scrollLeft >= maxScroll - cardWidth) {
                    container.scrollLeft = 0;
                    indexRef.current = 0;
                } else {
                    indexRef.current++;
                    container.scrollTo({
                        left: cardWidth * indexRef.current,
                        behavior: 'smooth'
                    });
                }
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [cardWidth]);

    const manualScroll = (direction) => {
        if (!scrollRef.current || !cardWidth) return;
        const container = scrollRef.current;
        if (direction === 'left') {
            indexRef.current = Math.max(0, indexRef.current - 1);
        } else {
            indexRef.current++;
            if (container.scrollLeft + container.offsetWidth >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
                indexRef.current = 0;
            }
        }
        container.scrollTo({
            left: cardWidth * indexRef.current,
            behavior: 'smooth'
        });
    };

    return (
        <div className="bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-3 text-orange">Our Training Programs</h2>
                <p className="text-center mb-4">
                    Comprehensive courses designed by industry experts to help you master in-demand skills and advance your career.
                </p>

                {error && <p className="text-danger text-center">{error.message}</p>}

                <div className="carousel-container">
                    <div className="card-carousel" ref={scrollRef} style={{gap: "10px"}}>
                        {extendedCourses.map((course, index) => {
                            const isStatic = !!course.Image;
                            const imageUrl = isStatic
                                ? course.Image
                                : `https://upskill-server.onrender.com/get-image?courseId=${course.id}`;
                            return (
                                <div className="course-card" key={index}>
                                    <div className="card shadow-sm card-hover h-100">
                                        <img
                                            src={imageUrl}
                                            className="card-img-top"
                                            alt={course.title || course.courseName}
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
                    <div className="carousel-buttons text-center mt-4">
                        <button className="carousel-button" onClick={() => manualScroll('left')}>&lt;</button>
                        <button className="carousel-button" onClick={() => manualScroll('right')}>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
