import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Course() {
    const [dynamicCourses, setDynamicCourses] = useState([]);
    const [staticCourses, setStaticCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://upskill-server.onrender.com/get-courses')
            .then(res => setDynamicCourses(res.data))
            .catch(err => console.error("Dynamic Error:", err));

        axios.get('/course.json')
            .then(res => setStaticCourses(res.data))
            .catch(err => setError(err));
    }, []);

    const allCourses = [...staticCourses, ...dynamicCourses];

    return (
        <div style={{ backgroundColor: "#f8f9fa", padding: "3rem 0" }}>
            <div className="container">
                <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "orange" }}>
                    Our Training Programs
                </h2>
                <p style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
                    Comprehensive courses designed by industry experts to help you master in-demand skills and advance your career.
                </p>

                {error && (
                    <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>
                )}

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    breakpoints={{
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 }
                    }}
                    style={{ paddingBottom: "3rem" }}
                >
                    {allCourses.map((course, index) => {
                        const isStatic = !!course.Image;
                        const imageUrl = isStatic
                            ? course.Image
                            : `https://upskill-server.onrender.com/get-image?courseId=${course.id}`;

                        return (
                            <SwiperSlide key={index}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        border: "1px solid #ddd",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        backgroundColor: "#fff",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                    }}
                                >
                                    <img
                                        src={imageUrl}
                                        alt={course.title || course.courseName}
                                        style={{
                                            height: "200px",
                                            width: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flex: 1,
                                        padding: "16px"
                                    }}>
                                        <h5 style={{ marginBottom: "8px", fontSize: "1.1rem", color: "#333" }}>
                                            {course.title || course.courseName}
                                        </h5>
                                        <p style={{ marginBottom: "4px", fontSize: "0.95rem", color: "#555" }}>
                                            <strong>Duration:</strong> {course.duration || course.courseDuration}
                                        </p>
                                        <p style={{ marginBottom: "16px", fontSize: "0.95rem", color: "#555" }}>
                                            <strong>Mode:</strong> {course.mode || course.batch}
                                        </p>
                                        <div style={{ marginTop: "auto" }}>
                                            <Link
                                                to={`/courses/${course.slug}`}
                                                style={{
                                                    display: "inline-block",
                                                    width: "100%",
                                                    padding: "10px",
                                                    backgroundColor: "orange",
                                                    color: "white",
                                                    textAlign: "center",
                                                    borderRadius: "4px",
                                                    textDecoration: "none",
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                Explore
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default Course;
