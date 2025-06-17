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
                  className="card border-0 shadow-sm h-100 d-flex flex-column justify-content-between align-items-center p-4"
                  style={{
                    borderRadius: "15px",
                    background: "#ffffff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                    maxWidth: "300px",
                    width: "100%",
                    transition: "transform 0.3s",
                  }}
                >
                  <img
                    src={`data:image/jpeg;base64,${s.image}`}
                    alt={s.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      border: "3px solid #0d6efd",
                    }}
                  />

                  <div
                    className="badge bg-light text-primary mb-2 px-3 py-2"
                    style={{
                      fontSize: "0.85rem",
                      borderRadius: "20px",
                      fontWeight: "500",
                    }}
                  >
                    @{s.companyName}
                  </div>

                  <h5 className="fw-bold text-success text-uppercase text-center">
                    {s.name}
                  </h5>

                  {s.companyLogo && (
                    <img
                      src={`data:image/jpeg;base64,${s.companyLogo}`}
                      alt="Company Logo"
                      className="img-fluid mt-3"
                      style={{ maxHeight: "40px", objectFit: "contain" }}
                    />
                  )}
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
