import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

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
  const scrollRef = useRef(null);
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("https://upskill-servlet.onrender.com/FetchFeedbackServlet");
      setReviews(res.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left"
        ? -scrollRef.current.clientWidth
        : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetchReviews();
    const interval = setInterval(() => scroll("right"), 8000);
    return () => clearInterval(interval);
  }, []);

  if (reviews.length === 0) {
    return <div className="text-center py-5">Loading reviews...</div>;
  }

  return (
    <div className="bg-light py-5 px-3">
      <h2 className="text-center mb-5 fw-bold display-5 text-primary">What Our Students Say</h2>
      <div className="position-relative px-2">
        
        <button
          className="btn btn-outline-dark position-absolute top-50 start-0 translate-middle-y z-3 rounded-circle shadow-sm"
          style={{ width: 45, height: 45 }}
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={24} />
        </button>

        <motion.div
          className="d-flex overflow-hidden"
          ref={scrollRef}
          style={{
            cursor: "grab",
            gap: "1.5rem",
            width: "100%",
          }}
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ left: -scrollRef.current?.scrollWidth, right: 0 }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="card border-0 flex-shrink-0 bg-white shadow-sm"
              style={{
                width: "20rem",
                minHeight: "20rem",
                borderRadius: "20px",
                overflow: "hidden",
                margin: "auto",
              }}
            >
              <div className="card-body text-center p-4 d-flex flex-column align-items-center">
                <motion.img
                  src={review.image || "https://via.placeholder.com/70"}
                  alt={review.name}
                  className="rounded-circle mb-3 border border-primary shadow-sm"
                  style={{ width: 70, height: 70, objectFit: "cover" }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
                <h6 className="mb-1 fw-bold">{review.name}</h6>
                <StarRating rating={review.rating} />
                <p className="text-muted small mt-3" style={{ height: "7rem"}}>
                  {review.review}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <button
          className="btn btn-outline-dark position-absolute top-50 end-0 translate-middle-y z-3 rounded-circle shadow-sm"
          style={{ width: 45, height: 45 }}
          onClick={() => scroll("right")}
        >
          <ChevronRight size={24} />
        </button>

      </div>
    </div>
  );
};

export default Review;
