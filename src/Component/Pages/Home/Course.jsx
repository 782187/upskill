import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

const API_URL = import.meta.env.VITE_API_URL;

function Course() {
    const [dynamicCourses, setDynamicCourses] = useState([]);
    const [error, setError] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        axios.get(`${API_URL}/get-courses`)
            .then(res => setDynamicCourses(res.data))
            .catch(err => setError(err));
    }, []);

    const allCourses = [...dynamicCourses];

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

                <div style={{ position: "relative" }}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 2500 }}
                        loop={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        }}
                    >
                        {allCourses.map((course, index) => {
                            const isStatic = !!course.Image;
                            const imageUrl = isStatic
                                ? course.Image
                                : `${API_URL}/get-image?courseId=${course.id}`;

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

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "20px"
                    }}>
                        <button ref={prevRef} style={{
                            padding: "10px 20px",
                            backgroundColor: "#ff7f00",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "background 0.3s"
                        }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = "#e06600"}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = "#ff7f00"}
                        >
                            ← Prev
                        </button>
                        <button ref={nextRef} style={{
                            padding: "10px 20px",
                            backgroundColor: "#ff7f00",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "background 0.3s"
                        }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = "#e06600"}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = "#ff7f00"}
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
