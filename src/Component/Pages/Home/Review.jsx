import React, { useEffect, useState } from "react";
import axios from "axios";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const API_URL = import.meta.env.VITE_API_URL;

const StarRating = ({ rating }) => (
  <div className="d-flex gap-1 justify-content-center mb-2">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={18}
        className={index < rating ? "text-warning" : "text-muted"}
        fill={index < rating ? "currentColor" : "none"}
      />
    ))}
  </div>
);

const Review = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API_URL}/FetchFeedbackServlet`);
      setReviews(res.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (reviews.length === 0) {
    return <div className="text-center py-5">Loading reviews...</div>;
  }

  return (
    <div className="bg-light py-5 px-3">
      <h2 className="text-center mb-5 fw-bold display-5 text-primary">What Our Students Say</h2>

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
        {reviews.map((review, index) => (
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
                  src={review.image}
                  alt={review.name}
                  className="rounded-circle mb-3 border border-primary shadow-sm"
                  style={{ width: 70, height: 70, objectFit: "cover" }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
                <h6 className="mb-1 fw-bold">{review.name}</h6>
                <StarRating rating={review.rating} />
                <p className="text-muted small mt-3" style={{ height: "7rem" }}>
                  {review.review}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
