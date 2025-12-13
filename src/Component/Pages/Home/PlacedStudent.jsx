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
import "../../../Style/PlacedStudent.css";
import "../../../Style/PlacedStudentCard.css";

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
            }}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 30,
                  modifier: 1,
                  slideShadows: false,
                }
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 25,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 40,
                  modifier: 1,
                  slideShadows: false,
                }
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 60,
                  modifier: 1,
                  slideShadows: false,
                }
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 80,
                  modifier: 1,
                  slideShadows: false,
                }
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }
              },
            }}
            className="pb-5"
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
          >
            {Array.isArray(placements) && placements.length > 0 ? (
              placements.map((student, index) => (
              <SwiperSlide key={index} className="d-flex justify-content-center">
                <div 
                  className="placed-student-card"
                  role="article"
                  aria-label={`Placed student: ${student.name || 'Student'}`}
                  tabIndex={0}
                >
                  <div className="card-top-accent" aria-hidden="true"></div>
                  
                  {/* Student Photo Section - Fully Visible */}
                  <div className="student-photo-section">
                    <div className="photo-container" aria-hidden="true">
                      <div className="photo-inner-wrapper">
                        {student.image ? (
                          <img
                            loading="lazy"
                            src={`data:image/jpeg;base64,${student.image}`}
                            alt={`${student.name || 'Student'}'s photo`}
                            className="student-photo"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              if (e.target.nextSibling) {
                                e.target.nextSibling.style.display = 'flex';
                              }
                            }}
                          />
                        ) : null}
                        <div 
                          className="photo-placeholder"
                          style={{ display: student.image ? 'none' : 'flex' }}
                          aria-hidden="true"
                        >
                          <i className="bi bi-person-circle" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                    <div className="placed-badge" aria-label="Successfully placed">
                      <i className="bi bi-check-circle-fill me-1" aria-hidden="true"></i>
                      <span>Placed</span>
                    </div>
                  </div>

                  {/* Student Info Section */}
                  <div className="student-info-section">
                    <h5 className="student-name">{student.name || "Student Name"}</h5>
                    <p className="student-position">{student.position || "Position"}</p>
                  </div>

                  {/* Company Logo Section - Premium Design */}
                  <div className="company-section">
                    <div className="company-logo-container">
                      {student.companyLogo ? (
                        <div className="company-logo-wrapper-premium">
                          <img
                            loading="lazy"
                            src={`data:image/jpeg;base64,${student.companyLogo}`}
                            alt={`${student.companyName || 'Company'} logo`}
                            className="company-logo-premium"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              if (e.target.nextSibling) {
                                e.target.nextSibling.style.display = 'flex';
                              }
                            }}
                          />
                          <div 
                            className="company-logo-fallback"
                            style={{ display: student.companyLogo ? 'none' : 'flex' }}
                            aria-hidden="true"
                          >
                            <i className="bi bi-building" aria-hidden="true"></i>
                          </div>
                        </div>
                      ) : (
                        <div className="company-logo-wrapper-premium">
                          <div className="company-logo-fallback" aria-hidden="true">
                            <i className="bi bi-building" aria-hidden="true"></i>
                          </div>
                        </div>
                      )}
                      <div className="company-name-container">
                        <span className="company-name-premium">{student.companyName || "Company Name"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  {(student.offerDetails || student.location) && (
                    <div className="additional-details" role="list">
                      {student.offerDetails && (
                        <div className="detail-badge" role="listitem">
                          <i className="bi bi-briefcase-fill me-1" aria-hidden="true"></i>
                          <span>{student.offerDetails}</span>
                        </div>
                      )}
                      {student.location && (
                        <div className="detail-badge" role="listitem">
                          <i className="bi bi-geo-alt-fill me-1" aria-hidden="true"></i>
                          <span>{student.location}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </SwiperSlide>
              ))
            ) : (
              <div className="text-center py-5">
                <i className="bi bi-people display-1 text-muted"></i>
                <h3 className="mt-3 text-muted">No placement data available</h3>
                <p className="text-muted">Check back later for student success stories.</p>
              </div>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PlacedStudent;