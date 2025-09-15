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
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlacement = async () => {
      try {
        const res = await axios.get(`${API_URL}/getplacement`);
        setPlacements(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching placements:", error);
        setError("Failed to load placed students data.");
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

  if (error) {
    return (
      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
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

      <div className="container position-relative text-center">
        <span className="text-warning fw-semibold text-uppercase">Success Stories</span>
        <h2 className="display-6 fw-bold mt-2 mb-3">
          Our Placed <span className="text-primary">Students</span>
        </h2>
        <div className="mx-auto bg-primary" style={{ width: "60px", height: "3px" }}></div>
        <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "600px" }}>
          Our alumni are making waves in top companies worldwide. Here are some of their inspiring journeys.
        </p>

        {placements && placements.length > 0 ? (
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
                <SwiperSlide key={index}>
                  <div className="card h-100 shadow border-0 rounded-4 overflow-hidden mx-auto" style={{ maxWidth: "320px" }}>
                    <div className="position-relative">
                      <img
                        loading="lazy"
                        src={`data:image/jpeg;base64,${student.image}`}
                        alt={student.name}
                        className="w-100"
                        style={{
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-20"></div>
                      <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                        style={{
                          background: "linear-gradient(transparent, rgba(0,0,0,0.7))"
                        }}>
                        <h5 className="card-title mb-0 fw-bold">{student.name}</h5>
                        <small className="text-warning fw-semibold">{student.position}</small>
                      </div>
                    </div>

                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          {student.companyLogo && (
                            <img
                              loading="lazy"
                              src={`data:image/jpeg;base64,${student.companyLogo}`}
                              alt={student.companyName}
                              className="me-2"
                              style={{ maxHeight: "30px" }}
                            />
                          )}
                          <span className="text-muted small">{student.companyName}</span>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <i className="bi bi-quote text-primary opacity-25" style={{ fontSize: "2rem" }}></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="alert alert-info mt-4" role="alert">
            No placed students data available at the moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default PlacedStudent;
