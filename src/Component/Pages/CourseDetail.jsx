import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../../Style/CourseDetail.css'
import EnquiryForm from './Home/EnquiryForm'
import Course from './Home/Course'
import Review from './Home/Review'
import { FaLaptop, FaChalkboardTeacher, FaAward, FaClock, FaUserTie } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import { GiSkills } from 'react-icons/gi'

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
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )

  if (error) return (
    <div className="container py-5 text-center">
      <div className="alert alert-danger" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h4 className="alert-heading">Oops!</h4>
        <p>{error}</p>
        <a href="/courses" className="btn btn-outline-danger mt-2">
          Browse All Courses
        </a>
      </div>
    </div>
  )

  return (
    <>
      {/* Hero Section */}
      <section className="course-hero position-relative overflow-hidden">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-index-1">
          <div className="row min-vh-75 align-items-center py-5">
            <div className="col-lg-8">
              <div className="hero-content text-white p-4 p-lg-5 rounded-3 bg-dark bg-opacity-50">
                <span className="badge bg-warning text-dark mb-3">{course.technology}</span>
                <h1 className="display-4 fw-bold mb-3">{course.title}</h1>
                <p className="lead mb-4">
                  Master {course.technology} with industry-relevant skills, hands-on projects, and professional certification.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a href="#enquiry" className="btn btn-primary btn-lg px-4 py-3 fw-semibold">
                    Enquire Now
                  </a>
                  <a href="#curriculum" className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold">
                    View Curriculum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
                <div className="me-3 text-primary">
                  <FaClock size={32} />
                </div>
                <div>
                  <h6 className="mb-1">Duration</h6>
                  <p className="mb-0 fw-bold">{course.duration}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
                <div className="me-3 text-warning">
                  <IoMdSchool size={32} />
                </div>
                <div>
                  <h6 className="mb-1">Training Mode</h6>
                  <p className="mb-0 fw-bold">{course.mode}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
                <div className="me-3 text-success">
                  <GiSkills size={32} />
                </div>
                <div>
                  <h6 className="mb-1">Skill Level</h6>
                  <p className="mb-0 fw-bold">Beginner to Advanced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-5" id="overview">
        <div className="container">
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
                <h2 className="fw-bold mb-4 text-gradient">About This Course</h2>
                <div 
                  className="course-description fs-5 text-muted"
                  dangerouslySetInnerHTML={{ __html: course.description }}
                ></div>
                <div className="mt-4">
                  <a href="#enquiry" className="btn btn-primary px-4 py-3 fw-semibold me-3">
                    Enroll Now
                  </a>
                  <a href="#curriculum" className="btn btn-outline-secondary px-4 py-3 fw-semibold">
                    View Syllabus
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-5 bg-light" id="curriculum">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Course Curriculum</h2>
            <p className="lead text-muted">Comprehensive learning path to master {course.technology}</p>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-primary text-white py-3">
                  <h5 className="mb-0">What You'll Learn</h5>
                </div>
                <div className="card-body">
                  <div 
                    className="course-topics"
                    dangerouslySetInnerHTML={{ __html: course.description }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-success text-white py-3">
                  <h5 className="mb-0">Detailed Syllabus</h5>
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
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Earn Your Certificate</h2>
            <p className="lead text-muted">Get recognized for your skills with our industry-approved certification</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="certificate-container p-4 bg-light rounded-4 shadow-sm">
                <img
                  src={`https://upskill-server.onrender.com/get-certificate-image?courseId=${course.id}`}
                  alt="Certificate Sample"
                  className="img-fluid rounded-3 border"
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

      {/* Features Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose This Course?</h2>
            <p className="lead opacity-75">Our proven approach to professional education</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card p-4 h-100">
                <div className="feature-icon bg-primary bg-opacity-10 text-primary mb-3">
                  <FaLaptop size={28} />
                </div>
                <h4>Hands-on Training</h4>
                <p className="text-muted">Learn by doing with real-world projects and practical exercises.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 h-100">
                <div className="feature-icon bg-warning bg-opacity-10 text-warning mb-3">
                  <FaChalkboardTeacher size={28} />
                </div>
                <h4>Expert Instructors</h4>
                <p className="text-muted">Learn from industry professionals with years of experience.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 h-100">
                <div className="feature-icon bg-info bg-opacity-10 text-info mb-3">
                  <FaAward size={28} />
                </div>
                <h4>Career Support</h4>
                <p className="text-muted">Get resume help, interview prep, and job placement assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Review />

      {/* Related Courses */}
      <Course />

      {/* Enquiry Form */}
      <section className="py-5 bg-light" id="enquiry">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-header bg-primary text-white py-4">
                  <h3 className="mb-0 text-center">Get Course Details</h3>
                </div>
                <div className="card-body p-4 p-md-5">
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseDetail