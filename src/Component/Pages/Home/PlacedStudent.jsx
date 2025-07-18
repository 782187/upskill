import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";

const Swiper = lazy(() => import("swiper/react").then(module => ({ default: module.Swiper })));
const SwiperSlide = lazy(() => import("swiper/react").then(module => ({ default: module.SwiperSlide })));
const motion = {
  div: lazy(() => import("framer-motion").then(module => ({ default: module.motion.div })))
};

const swiperModules = Promise.all([
  import("swiper/modules").then(module => module.Navigation),
  import("swiper/modules").then(module => module.Autoplay),
  import("swiper/modules").then(module => module.Pagination)
]);

const PlacedStudent = () => {
    const [placements, setPlacements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modules, setModules] = useState([]);

    useEffect(() => {
        swiperModules.then(mods => setModules(mods));
    }, []);

    useEffect(() => {
        const fetchPlacement = async () => {
            try {
                const res = await axios.get("https://upskill-server.onrender.com/getplacement");
                setPlacements(res.data);
            } catch (error) {
                console.error("Error fetching placements:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPlacement();
    }, []);

    if (loading) {
        return (
            <section className="py-5 bg-light">
                <div className="container text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <h2 className="mt-3">Loading placed students...</h2>
                </div>
            </section>
        );
    }

    return (
        <section className="py-5 bg-light position-relative overflow-hidden">
            <div className="position-absolute top-0 start-0 rounded-circle bg-primary opacity-10" style={{ width: "150px", height: "150px", transform: "translate(-50px, -50px)" }}></div>
            <div className="position-absolute bottom-0 end-0 rounded-circle bg-warning opacity-10" style={{ width: "200px", height: "200px", transform: "translate(50px, 50px)" }}></div>
            
            <div className="container position-relative">
                <Suspense fallback={<div className="text-center">Loading animations...</div>}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-5"
                    >
                        <span className="text-warning fw-semibold text-uppercase">Success Stories</span>
                        <h2 className="display-5 fw-bold mt-2 mb-3">
                            Our Placed <span className="text-primary">Students</span>
                        </h2>
                        <div className="mx-auto bg-primary bg-gradient" style={{ width: "80px", height: "4px" }}></div>
                        <p className="lead text-muted mt-4 mx-auto" style={{ maxWidth: "700px" }}>
                            Our alumni are making waves in top companies worldwide. Here are some of their success stories.
                        </p>
                    </motion.div>
                </Suspense>

                <Suspense fallback={<div className="text-center">Loading carousel...</div>}>
                    {modules.length > 0 && (
                        <Swiper
                            modules={modules}
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                                type: 'bullets',
                            }}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                            }}
                        >
                            {placements.map((student, index) => (
                                <SwiperSlide key={index}>
                                    <Suspense fallback={<div className="card h-100">Loading student card...</div>}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="card h-100 border-0 shadow-sm overflow-hidden hover-shadow transition-all">
                                                <div className="position-relative">
                                                    <img
                                                        src={`data:image/jpeg;base64,${student.image}`}
                                                        alt={student.name}
                                                        className="card-img-top"
                                                        style={{ height: "250px", objectFit: "cover" }}
                                                    />
                                                    <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-50 text-white">
                                                        <h5 className="card-title mb-0">{student.name}</h5>
                                                        <p className="card-text text-warning mb-0">{student.position}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <div className="d-flex align-items-center">
                                                            <i className="bi bi-building me-2 text-primary"></i>
                                                            <span className="text-muted">{student.companyName}</span>
                                                        </div>
                                                        {student.linkedin && (
                                                            <a 
                                                                href={student.linkedin} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="text-decoration-none"
                                                            >
                                                                <i className="bi bi-linkedin text-primary fs-5"></i>
                                                            </a>
                                                        )}
                                                    </div>
                                                    
                                                    <div className="text-center mb-3">
                                                        <img 
                                                            src={`data:image/jpeg;base64,${student.companyLogo}`} 
                                                            alt={student.companyName} 
                                                            className="img-fluid" 
                                                            style={{ maxHeight: "50px" }}
                                                        />
                                                    </div>
                                                    
                                                    <div className="position-relative mt-3">
                                                        <i className="bi bi-quote position-absolute fs-1 text-light" style={{ top: "-10px", left: "0" }}></i>
                                                        <p className="ps-4 text-muted fst-italic">
                                                            {student.testimonial || "The training program gave me the skills and confidence to excel in my career."}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Suspense>
                                </SwiperSlide>
                            ))}
                            
                            <div className="d-flex justify-content-center mt-4 gap-3">
                                <button className="swiper-button-prev btn btn-light rounded-circle shadow-sm" style={{ width: "40px", height: "40px" }}>
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <div className="swiper-pagination position-static"></div>
                                <button className="swiper-button-next btn btn-light rounded-circle shadow-sm" style={{ width: "40px", height: "40px" }}>
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </Swiper>
                    )}
                </Suspense>
            </div>
        </section>
    );
};

export default PlacedStudent;