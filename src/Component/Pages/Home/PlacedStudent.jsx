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
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                    {placements.map((s, index) => (
                        <SwiperSlide key={index}>
                            <div className="d-flex justify-content-center h-100">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-center p-3"
                                    style={{
                                        border: "4px solid orange",
                                        borderRadius: "10px",
                                        backgroundColor: "#fff",
                                        width: "100%",
                                        maxWidth: "300px",
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    <img
                                        src={`data:image/jpeg;base64,${s.image}`}
                                        alt={s.name}
                                        style={{
                                            width: "100%",
                                            height: "250px",
                                            objectFit: "cover",
                                            borderBottom: "4px solid orange",
                                        }}
                                        className="mb-3"
                                    />

                                    <div
                                        style={{
                                            backgroundColor: "orange",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            padding: "6px 0",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        {s.position}
                                    </div>

                                    <div style={{ color: "#333", marginBottom: "4px" }}>
                                        @{s.companyName}
                                    </div>

                                    <div
                                        style={{
                                            color: "blue",
                                            fontWeight: "bold",
                                            fontSize: "1.1rem",
                                            textTransform: "uppercase",
                                            marginBottom: "6px",
                                        }}
                                    >
                                        {s.name}
                                    </div>

                                    <img
                                        src={`data:image/jpeg;base64,${s.companyLogo}`}
                                        alt={s.name}
                                        style={{
                                            width: "100%",
                                            height: "100px",
                                            objectFit: "cover",
                                        }}
                                        className="mb-3"
                                    />
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PlacedStudent;