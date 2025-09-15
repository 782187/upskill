import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
        const data = Array.isArray(res.data) ? res.data : [];
        setPlacements(data);
      } catch (error) {
        setPlacements([]);
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

        <div className="mt-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-5"
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
          >
            {Array.isArray(placements) && placements.map((student, index) => (
              <SwiperSlide key={index}>
                <div className="d-flex justify-content-center">
                  <div className="card h-100 shadow border-0 rounded-4 overflow-hidden" style={{ width: "100%", maxWidth: "300px" }}>
                    <div className="position-relative" style={{ height: "220px" }}>
                      {student.image ? (
                        <img
                          loading="lazy"
                          src={`data:image/jpeg;base64,${student.image}`}
                          alt={student.name}
                          className="w-100 h-100"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div className="w-100 h-100 bg-secondary d-flex align-items-center justify-content-center">
                          <i className="bi bi-person-circle text-white" style={{ fontSize: "4rem" }}></i>
                        </div>
                      )}
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-20"></div>
                      <div
                        className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                        style={{
                          background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                        }}
                      >
                        <h5 className="card-title mb-1 fw-bold text-truncate">{student.name}</h5>
                        <small className="text-warning fw-semibold d-block text-truncate">{student.position}</small>
                      </div>
                    </div>

                    <div className="card-body p-4 d-flex flex-column" style={{ minHeight: "180px" }}>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center flex-grow-1 me-2">
                          {student.companyLogo ? (
                            <img
                              loading="lazy"
                              src={`data:image/jpeg;base64,${student.companyLogo}`}
                              alt={student.companyName}
                              className="me-2"
                              style={{ maxHeight: "28px", maxWidth: "80px", objectFit: "contain" }}
                            />
                          ) : (
                            <i className="bi bi-building me-2 text-primary"></i>
                          )}
                          <span className="text-muted small text-truncate">{student.companyName}</span>
                        </div>
                      </div>
                    </div>
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
