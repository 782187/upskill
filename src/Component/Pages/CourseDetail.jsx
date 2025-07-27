import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../../Style/CourseDetail.css'
import EnquiryForm from './Home/EnquiryForm'
import Course from './Home/Course'
import Review from './Home/Review'
import { FaLaptop, FaChalkboardTeacher, FaAward, FaClock, FaUserTie, FaCertificate } from 'react-icons/fa'
import { IoMdSchool, IoMdPeople } from 'react-icons/io'
import { GiSkills, GiGraduateCap } from 'react-icons/gi'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { BsCheck2Circle, BsBook } from 'react-icons/bs'

const CourseDetail = () => {
  const { slug } = useParams()
  const [course, setCourse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://upskill-server.onrender.com/get-course-detail?slug=${slug}`)
      .then((response) => {
        setCourse(response.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Course not found or an error occurred.')
        setLoading(false)
      })
  }, [slug])

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )

  if (error) return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg text-center py-5">
            <div className="card-body">
              <h1 className="display-4 text-danger mb-4">Oops!</h1>
              <p className="lead mb-4">{error}</p>
              <a href="/courses" className="btn btn-primary btn-lg px-4">
                Browse All Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <section className="course-hero position-relative overflow-hidden">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-index-1 py-5">
          <div className="row min-vh-75 align-items-center py-5">
            <div className="col-lg-8 col-xl-7">
              <div className="hero-content text-white p-4 p-lg-5 rounded-4 bg-dark bg-opacity-75">
                <span className="badge bg-warning text-dark fs-6 mb-3 px-3 py-2">
                  {course.technology}
                </span>
                <h1 className="display-3 fw-bold mb-4">{course.title}</h1>
                <p className="lead mb-4 fs-4">
                  Master {course.technology} with industry-relevant skills, hands-on projects, and professional certification.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a href="#enquiry" className="btn btn-primary btn-lg px-4 py-3 fw-semibold rounded-pill">
                    Enquire Now
                  </a>
                  <a href="#curriculum" className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold rounded-pill">
                    View Curriculum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {[
              { icon: <FaClock size={24} />, title: "Duration", value: course.duration },
              { icon: <IoMdSchool size={24} />, title: "Training Mode", value: course.mode },
              { icon: <GiSkills size={24} />, title: "Skill Level", value: "Beginner to Advanced" },
              { icon: <FaUserTie size={24} />, title: "Instructors", value: "Industry Experts" },
            ].map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="d-flex align-items-center p-4 bg-light rounded-4 h-100 shadow-sm">
                  <div className="me-3 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h6 className="mb-1 text-muted">{item.title}</h6>
                    <p className="mb-0 fw-bold fs-5">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-5 bg-light" id="overview">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h2 className="fw-bold display-5 mb-3">About This Course</h2>
              <div className="divider mx-auto bg-primary"></div>
            </div>
          </div>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="course-image-container rounded-4 overflow-hidden shadow-lg">
                <img
                  src={`https://upskill-server.onrender.com/get-image?courseId=${course.id}`}
                  className="img-fluid w-100"
                  alt={course.title}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <div 
                  className="course-description fs-5 text-muted mb-4"
                  dangerouslySetInnerHTML={{ __html: course.description }}
                ></div>
                <div className="mt-4">
                  <a href="#enquiry" className="btn btn-primary px-4 py-3 fw-semibold me-3 rounded-pill">
                    Enroll Now
                  </a>
                  <a href="#curriculum" className="btn btn-outline-secondary px-4 py-3 fw-semibold rounded-pill">
                    View Syllabus
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold display-5 mb-3">What You'll Get</h2>
              <p className="lead text-muted">Our comprehensive learning package includes</p>
              <div className="divider mx-auto bg-primary"></div>
            </div>
          </div>
          <div className="row g-4">
            {[
              { icon: <BsBook size={24} />, title: "Comprehensive Curriculum", desc: "Covering all essential concepts and latest trends" },
              { icon: <FaLaptop size={24} />, title: "Hands-on Projects", desc: "Real-world projects to build your portfolio" },
              { icon: <FaCertificate size={24} />, title: "Certification", desc: "Industry-recognized certificate upon completion" },
              { icon: <MdOutlineWorkOutline size={24} />, title: "Career Support", desc: "Resume building and interview preparation" },
              { icon: <IoMdPeople size={24} />, title: "Community Access", desc: "Join our network of professionals and alumni" },
              { icon: <GiGraduateCap size={24} />, title: "Lifetime Access", desc: "Course materials and updates forever" },
            ].map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="feature-card p-4 h-100 rounded-4 shadow-sm border-0">
                  <div className="feature-icon bg-primary bg-opacity-10 text-primary mb-3 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    {item.icon}
                  </div>
                  <h4 className="mb-3">{item.title}</h4>
                  <p className="text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-5 bg-light" id="curriculum">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h2 className="fw-bold display-5 mb-3">Course Curriculum</h2>
              <p className="lead text-muted">Comprehensive learning path to master {course.technology}</p>
              <div className="divider mx-auto bg-primary"></div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-primary text-white py-3 rounded-top">
                  <h3 className="mb-0">Learning Outcomes</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {course.description.split('.').filter(point => point.trim().length > 0).map((point, index) => (
                      <li key={index} className="mb-3 d-flex">
                        <span className="me-2 text-primary"><BsCheck2Circle /></span>
                        <span>{point.trim()}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-success text-white py-3 rounded-top">
                  <h3 className="mb-0">Detailed Syllabus</h3>
                </div>
                <div className="card-body">
                  <div 
                    className="course-topics"
                    dangerouslySetInnerHTML={{ __html: course.topics }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Preview */}
      <section className="py-5 bg-white">
        <div className="container-fluid px-lg-5">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h2 className="fw-bold display-5 mb-3">Earn Your Certificate</h2>
              <p className="lead text-muted">Get recognized for your skills with our industry-approved certification</p>
              <div className="divider mx-auto bg-primary"></div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="certificate-container p-4 bg-light rounded-4">
                <img
                  src={`https://upskill-server.onrender.com/get-certificate-image?courseId=${course.id}`}
                  alt="Certificate Sample"
                  className="img-fluid w-100 rounded-3 border shadow"
                  loading="lazy"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-muted">*Certificate template may vary slightly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <Review />
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-5 bg-white">
        <div className="container">
          <Course />
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-5 bg-dark" id="enquiry">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg overflow-hidden">
                <div className="row g-0">
                  <div className="col-lg-6 d-flex align-items-center bg-primary text-white p-5">
                    <div>
                      <h2 className="display-5 fw-bold mb-4">Ready to Start Your Journey?</h2>
                      <p className="lead mb-4">Fill out this form to get detailed course information, pricing, and schedule.</p>
                      <div className="d-flex align-items-center">
                        <div className="bg-white text-primary rounded-circle p-3 me-3">
                          <FaChalkboardTeacher size={24} />
                        </div>
                        <div>
                          <h5 className="mb-1">Expert Guidance</h5>
                          <p className="small mb-0 opacity-75">Our advisors will help you choose the right path</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 bg-white p-5">
                    <EnquiryForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetail