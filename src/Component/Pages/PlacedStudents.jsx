import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const API_URL = import.meta.env.VITE_API_URL;

const PlacedStudent = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlacement = async () => {
      try {
        const res = await axios.get(`${API_URL}/getplacement`);
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
      {/* Background circles */}
      <div
        className="position-absolute top-0 start-0 bg-primary rounded-circle opacity-10"
        style={{ width: "120px", height: "120px", transform: "translate(-40px, -40px)" }}
      ></div>
      <div
        className="position-absolute bottom-0 end-0 bg-warning rounded-circle opacity-10"
        style={{ width: "160px", height: "160px", transform: "translate(40px, 40px)" }}
      ></div>

      <div className="container position-relative text-center px-3 px-md-5">
        <span className="text-warning fw-semibold text-uppercase small">Success Stories</span>
        <h2 className="display-6 fw-bold mt-2 mb-3">
          Our Placed <span className="text-primary">Students</span>
        </h2>
        <div className="mx-auto bg-primary" style={{ width: "60px", height: "3px" }}></div>
        <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "600px" }}>
          Our alumni are making waves in top companies worldwide. Here are some of their inspiring journeys.
        </p>

        {/* Swiper Carousel */}
        <div className="mt-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-5"
          >
            {placements.map((student, index) => (
              <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
                <div className="card h-100 shadow border-0 rounded-4 overflow-hidden" style={{ width: "100%", maxWidth: "320px" }}>
                  {/* Student Image with gradient overlay */}
                  <div className="position-relative" style={{ height: "200px" }}>
                    <img
                      loading="lazy"
                      src={`data:image/jpeg;base64,${student.image}`}
                      alt={student.name}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-20"></div>
                    <div
                      className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                      style={{
                        background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                      }}
                    >
                      <h5 className="card-title mb-0 fw-bold">{student.name}</h5>
                      <small className="text-warning fw-semibold">{student.position}</small>
                    </div>
                  </div>

                  <div className="card-body p-3 d-flex flex-column justify-content-between">
                    {/* Company Info */}
                    <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                      <div className="d-flex align-items-center mb-2 mb-md-0">
                        {student.companyLogo && (
                          <img
                            loading="lazy"
                            src={`data:image/jpeg;base64,${student.companyLogo}`}
                            alt={student.companyName}
                            className="me-2"
                            style={{ maxHeight: "30px", maxWidth: "100px", objectFit: "contain" }}
                          />
                        )}
                        <span className="text-muted small">{student.companyName}</span>
                      </div>

                      {/* LinkedIn */}
                      {student.linkedin && (
                        <a
                          href={student.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary"
                          aria-label={`${student.name} LinkedIn`}
                        >
                          <i className="bi bi-linkedin fs-5"></i>
                        </a>
                      )}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="blockquote mb-0 flex-grow-1 d-flex flex-column justify-content-between">
                      <p className="fst-italic text-muted small mb-0">
                        "{student.testimonial || "The training program gave me the skills to excel in my career."}"
                      </p>
                      {/* Decorative element */}
                      <div className="text-center mt-3">
                        <i className="bi bi-quote text-primary opacity-25" style={{ fontSize: "2rem" }}></i>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PlacedStudent;
