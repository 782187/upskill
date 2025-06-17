import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const PlacedStudent = () => {
    const [placements, setPlacements] = useState([]);

    const fetchPlacement = async () => {
        try {
            const res = await axios.get("https://upskill-server.onrender.com/getplacement");
            setPlacements(res.data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };

    useEffect(() => {
        fetchPlacement();
    }, []);

    if (reviews.length === 0) {
        return <div className="text-center py-5">Loading reviews...</div>;
    }

    return (
        <div className="bg-light py-5 px-3">
            <h2 className="text-center mb-5 fw-bold display-5 text-primary">Our Placed Students</h2>

            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 2000 }}
                navigation={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
            >
                {placements.map((s, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="card border-0 bg-white shadow-sm"
                            style={{
                                width: "100%",
                                minHeight: "20rem",
                                borderRadius: "20px",
                                overflow: "hidden",
                                margin: "auto",
                            }}
                        >
                            <div className="card-body text-center p-4 d-flex flex-column align-items-center">
                                <motion.img
                                    src={`data:image/jpeg;base64,${s.image}`}
                                    alt={s.name}
                                    className="rounded-circle mb-3 border border-primary shadow-sm"
                                    style={{ width: 70, height: 70, objectFit: "cover" }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                />
                                <h6 className="mb-1 fw-bold">{s.name}</h6>
                                <p className="card-text mb-2" height={{ height: "7rem" }}>
                                    <strong>Company:</strong> {s.companyName}
                                </p>
                                <img
                                    src={`data:image/jpeg;base64,${s.companyLogo}`}
                                    alt="Company Logo"
                                    className="img-fluid"
                                    style={{ maxHeight: "40px", objectFit: "contain" }}
                                />
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PlacedStudent;
