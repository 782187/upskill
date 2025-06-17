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
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center bg-white border rounded shadow-sm p-3"
                style={{
                  border: "3px solid #ddd",
                  borderRadius: "10px",
                  width: "18rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={`data:image/jpeg;base64,${s.image}`}
                  alt={s.name}
                  className="rounded mb-3 mx-auto"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />

                <div className="text-muted small mt-1">@{s.companyName}</div>

                <h5 className="fw-bold mt-2 text-success">{s.name.toUpperCase()}</h5>

                {s.companyLogo && (
                  <img
                    src={`data:image/jpeg;base64,${s.companyLogo}`}
                    alt="Company Logo"
                    className="img-fluid mx-auto mt-3"
                    style={{ maxHeight: "40px", objectFit: "contain" }}
                  />
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlacedStudent;
