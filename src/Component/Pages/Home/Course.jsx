import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        <div className="bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-3 text-orange">Our Training Programs</h2>
                <p className="text-center mb-4">
                    Comprehensive courses designed by industry experts to help you master in-demand skills and advance your career.
                </p>

                {error && <p className="text-danger text-center">{error.message}</p>}

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    loop={true}
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
                            : `https://upskill-server.onrender.com/get-image?courseId=${course.id}`;

                        return (
                            <SwiperSlide key={index}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={imageUrl}
                                        className="card-img-top"
                                        alt={course.title || course.courseName}
                                        style={{ height: "200px", objectFit: "cover" }}
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
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default Course;
