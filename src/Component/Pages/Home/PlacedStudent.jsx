import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const PlacedStudent = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div
        className="position-absolute top-0 start-0 bg-primary rounded-circle opacity-10"
        style={{ width: "150px", height: "150px", transform: "translate(-50px, -50px)" }}
      ></div>
      <div
        className="position-absolute bottom-0 end-0 bg-warning rounded-circle opacity-10"
        style={{ width: "200px", height: "200px", transform: "translate(50px, 50px)" }}
      ></div>

      <div className="container position-relative text-center">
        <span className="text-warning fw-semibold text-uppercase">Success Stories</span>
        <h2 className="display-5 fw-bold mt-2 mb-3">
          Our Placed <span className="text-primary">Students</span>
        </h2>
        <div className="mx-auto bg-primary" style={{ width: "80px", height: "4px" }}></div>
        <p className="lead text-muted mt-4 mx-auto" style={{ maxWidth: "700px" }}>
          Our alumni are making waves in top companies worldwide. Here are some of their success stories.
        </p>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={{ clickable: true, el: ".swiper-pagination", type: "bullets" }}
          breakpoints={{ 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
        >
          {placements.map((student, index) => (
            <SwiperSlide key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    loading="lazy"
                    src={`data:image/jpeg;base64,${student.image}`}
                    alt={student.name}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-50 text-white">
                    <h5 className="mb-0">{student.name}</h5>
                    <p className="text-warning mb-0">{student.position}</p>
                  </div>
                </div>

                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center text-muted">
                      <i className="bi bi-building me-2 text-primary"></i>
                      <span>{student.companyName}</span>
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
                      loading="lazy"
                      src={`data:image/jpeg;base64,${student.companyLogo}`}
                      alt={student.companyName}
                      className="img-fluid"
                      style={{ maxHeight: "50px" }}
                    />
                  </div>

                  <div className="position-relative mt-3">
                    <i
                      className="bi bi-quote position-absolute fs-1 text-light"
                      style={{ top: "-10px", left: "0" }}
                    ></i>
                    <p className="ps-4 text-muted fst-italic">
                      {student.testimonial ||
                        "The training program gave me the skills and confidence to excel in my career."}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="d-flex justify-content-center mt-4 gap-3">
            <button
              className="swiper-button-prev btn btn-light rounded-circle shadow-sm"
              style={{ width: "40px", height: "40px" }}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className="swiper-pagination position-static"></div>
            <button
              className="swiper-button-next btn btn-light rounded-circle shadow-sm"
              style={{ width: "40px", height: "40px" }}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default PlacedStudent;
