import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const PlacedStudent = () => {
    const [placements, setPlacements] = useState([]);

    useEffect(() => {
        const fetchPlacement = async () => {
            try {
                const res = await axios.get("https://upskill-server.onrender.com/getplacement");
                setPlacements(res.data);
            } catch (error) {
                console.error("Error fetching placements:", error);
            }
        };
        fetchPlacement();
    }, []);

    if (placements.length === 0) {
        return <div className="text-center py-5">Loading placed students...</div>;
    }

    return (
        <div className="bg-light py-5 px-3">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold display-5 text-primary">
                    Our Placed Students
                </h2>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 2500 }}
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
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="card text-center shadow border-0 p-4"
                                style={{ borderRadius: "20px", minHeight: "360px" }}
                            >
                                <img
                                    src={`data:image/jpeg;base64,${s.image}`}
                                    alt={s.name}
                                    className="rounded-circle border border-2 border-primary shadow-sm mx-auto mb-3"
                                    style={{ width: 80, height: 80, objectFit: "cover" }}
                                />
                                <h5 className="fw-bold mb-1">{s.name}</h5>
                                <p className="mb-2">
                                    <strong>Company:</strong> {s.companyName}
                                </p>
                                <img
                                    src={`data:image/jpeg;base64,${s.companyLogo}`}
                                    alt={`${s.companyName} Logo`}
                                    className="img-fluid mt-auto"
                                    style={{ maxHeight: "40px", objectFit: "contain" }}
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PlacedStudent;
