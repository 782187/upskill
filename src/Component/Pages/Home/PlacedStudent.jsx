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
import "../../Style/PlacedStudent.css";

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
      <section className="py-5 bg-light position-relative overflow-hidden">
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
    <section className="py-5 position-relative overflow-hidden placed-students-section">
      {/* Background elements */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      
      <div className="container position-relative text-center px-3 px-md-5">
        <span className="text-warning fw-semibold text-uppercase small section-subtitle">Success Stories</span>
        <h2 className="display-6 fw-bold mt-2 mb-3 section-title">
          Our <span className="text-primary">Placed</span> Students
        </h2>
        <div className="mx-auto bg-primary section-divider"></div>
        <p className="text-muted mt-3 mx-auto section-description">
          Our alumni are making waves in top companies worldwide. Here are some of their inspiring journeys.
        </p>

        <div className="mt-5 position-relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            slidesPerView={3}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.custom-pagination',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                }
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 75,
                  modifier: 1.5,
                }
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }
              },
            }}
            className="pb-5"
          >
            {Array.isArray(placements) && placements.map((student, index) => (
              <SwiperSlide key={index}>
                <div className="student-card-wrapper">
                  <div className="student-card">
                    <div className="card-border-top"></div>
                    
                    <div className="student-image-container">
                      <div className="image-wrapper">
                        {student.image ? (
                          <img
                            loading="lazy"
                            src={`data:image/jpeg;base64,${student.image}`}
                            alt={student.name}
                            className="student-image"
                          />
                        ) : (
                          <div className="student-image-placeholder">
                            <i className="bi bi-person"></i>
                          </div>
                        )}
                      </div>
                      <div className="placement-badge">Placed</div>
                    </div>
                    
                    <div className="student-info">
                      <h5 className="student-name">{student.name}</h5>
                      <p className="student-position">{student.position}</p>
                      
                      <div className="company-info">
                        {student.companyLogo ? (
                          <div className="company-logo-wrapper">
                            <img
                              loading="lazy"
                              src={`data:image/jpeg;base64,${student.companyLogo}`}
                              alt={student.companyName}
                              className="company-logo"
                            />
                            <span className="company-name">{student.companyName}</span>
                          </div>
                        ) : (
                          <div className="company-logo-wrapper">
                            <i className="bi bi-building"></i>
                            <span className="company-name">{student.companyName || "Company"}</span>
                          </div>
                        )}
                      </div>
                      
                      {(student.offerDetails || student.location) && (
                        <div className="offer-details">
                          {student.offerDetails && (
                            <div className="detail-item">
                              <i className="bi bi-briefcase"></i>
                              <span>{student.offerDetails}</span>
                            </div>
                          )}
                          {student.location && (
                            <div className="detail-item">
                              <i className="bi bi-geo-alt"></i>
                              <span>{student.location}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="card-shine"></div>
                    <div className="card-corner"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom pagination */}
          <div className="custom-pagination"></div>
          
          {/* Custom navigation */}
          <div className="swiper-button-prev-custom">
            <i className="bi bi-chevron-left"></i>
          </div>
          <div className="swiper-button-next-custom">
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacedStudent;