import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../../Style/CourseDetail.css'
import EnquiryForm from './Home/EnquiryForm'
import Course from './Home/Course'
import Review from './Home/Review'
import { FaLaptop, FaChalkboardTeacher, FaAward, FaClock, FaUserTie, FaRegFilePdf } from 'react-icons/fa'
import { IoMdSchool, IoIosPeople } from 'react-icons/io'
import { GiSkills, GiGraduateCap } from 'react-icons/gi'
import { MdOutlineSupportAgent, MdWorkspacesOutline } from 'react-icons/md'

const API_URL = import.meta.env.VITE_API_URL;

const CourseDetail = () => {
  const { slug } = useParams()
  const [course, setCourse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${API_URL}/get-course-detail?slug=${slug}`)
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
      <section className="course-hero position-relative overflow-hidden bg-white">
        {/* Animated Decorative Blobs */}
        <div className="position-absolute top-0 end-0">
          <div className="animated-blob blue-blob"></div>
        </div>
        <div className="position-absolute bottom-0 start-0">
          <div className="animated-blob orange-blob"></div>
        </div>

        <div className="container py-5 text-center hero-content">
          <h1 className="display-3 fw-bold mb-4 text-gradient-blue-orange">
            {course.title}
          </h1>

          <div className="tech-cloud mb-5 mx-auto">
            {course.technology.split(',').map((tech, index) => (
              <span
                key={index}
                className={`tech-badge ${index % 2 === 0 ? 'bg-primary' : 'bg-orange'}`}
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          <p className="lead mb-4 text-muted mx-auto" style={{ maxWidth: '720px' }}>
            Master in-demand skills with industry-relevant projects, hands-on training, and professional certification.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a href="#enquiry" className="btn btn-primary btn-lg px-4 py-3 fw-semibold btn-hover-grow">
              Enquire Now
            </a>
            <a
              href={`${API_URL}/get-pdf?courseId=${course.id}`}
              className="btn btn-orange btn-lg px-4 py-3 fw-semibold btn-hover-grow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="me-2" /> Download Brochure
            </a>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-1 g-lg-4">
            <div className="col-md-6 col-lg-3">
              <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
                <div className="me-3 text-primary">
                  <FaClock size={28} />
                </div>
                <div>
                  <h6 className="mb-1">Duration</h6>
                  <p className="mb-0 fw-bold">{course.duration}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
                <div className="me-3 text-warning">
                  <IoMdSchool size={28} />
                </div>
                <div>
                  <h6 className="mb-1">Training Mode</h6>
                  <p className="mb-0 fw-bold">{course.mode}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
                <div className="me-3 text-success">
                  <GiSkills size={28} />
                </div>
                <div>
                  <h6 className="mb-1">Skill Level</h6>
                  <p className="mb-0 fw-bold">Beginner to Advanced</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
                <div className="me-3 text-info">
                  <IoIosPeople size={28} />
                </div>
                <div>
                  <h6 className="mb-1">Batch Size</h6>
                  <p className="mb-0 fw-bold">Limited Seats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 border border-3" id="overview">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Course Curriculum</h2>
            <p className="lead text-muted">
              Comprehensive learning path to master {course.technology}
            </p>
          </div>
          <div className="row g-5 align-items-start">
            {/* Course Topics */}
            <div className="col-lg-6 d-flex flex-column justify-content-start">
              <div className="h-100">
                <h2 className="fw-bold mb-4 text-gradient">Course Topics</h2>
                <div
                  className="course-topics fs-5 text-muted"
                  dangerouslySetInnerHTML={{ __html: course.topics }}
                />
              </div>
            </div>

            {/* About This Course */}
            <div className="col-lg-6 d-flex flex-column justify-content-start">
              <div className="h-100">
                <h2 className="fw-bold mb-4 text-gradient">About This Course</h2>
                <div
                  className="course-description fs-5 text-muted mb-4"
                  dangerouslySetInnerHTML={{ __html: course.description }}
                />
                <div className="course-features mb-4">
                  <h5 className="fw-bold mb-3">Key Features:</h5>
                  <ul className="list-unstyled row g-3">
                    <li className="col-md-6 d-flex align-items-center">
                      <span className="me-2 text-primary">
                        <GiGraduateCap size={20} />
                      </span>
                      Industry-recognized certification
                    </li>
                    <li className="col-md-6 d-flex align-items-center">
                      <span className="me-2 text-primary">
                        <MdWorkspacesOutline size={20} />
                      </span>
                      Hands-on projects
                    </li>
                    <li className="col-md-6 d-flex align-items-center">
                      <span className="me-2 text-primary">
                        <FaUserTie size={20} />
                      </span>
                      Career guidance
                    </li>
                    <li className="col-md-6 d-flex align-items-center">
                      <span className="me-2 text-primary">
                        <MdOutlineSupportAgent size={20} />
                      </span>
                      Lifetime support
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <a href="#enquiry" className="btn btn-primary px-4 py-3 fw-semibold me-3">
                    Enroll Now
                  </a>
                  <a
                    href={`${API_URL}/get-pdf?courseId=${course.id}`}
                    className="btn btn-success btn-lg px-4 py-3 fw-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaRegFilePdf className="me-2" /> Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-3 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Earn Your Certificate</h2>
              <p className="lead text-muted mb-4">Get recognized for your skills with our industry-approved certification</p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-2 text-success">✓</span>
                  <span>Validate your skills with industry-recognized certification</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-2 text-success">✓</span>
                  <span>Enhance your resume and LinkedIn profile</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-2 text-success">✓</span>
                  <span>Stand out in job interviews</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-2 text-success">✓</span>
                  <span>Digital and printed certificate options</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="certificate-container p-4 bg-light rounded-4 shadow-sm">
                <img
                  src={`${API_URL}/get-certificate-image?courseId=${course.id}`}
                  alt="Certificate Sample"
                  className="img-fluid rounded-3 border"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Why Choose This Course?</h2>
            <p className="lead opacity-75 text-white">Our proven approach to professional education</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="feature-card p-4 h-100 rounded-3 bg-dark bg-opacity-25 border border-light border-opacity-10">
                <div className="feature-icon bg-primary bg-opacity-10 text-primary mb-3">
                  <FaLaptop size={28} />
                </div>
                <h4>Hands-on Training</h4>
                <p>Learn by doing with real-world projects and practical exercises that simulate actual work environments.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card p-4 h-100 rounded-3 bg-dark bg-opacity-25 border border-light border-opacity-10">
                <div className="feature-icon bg-warning bg-opacity-10 text-warning mb-3">
                  <FaChalkboardTeacher size={28} />
                </div>
                <h4>Expert Instructors</h4>
                <p>Learn from industry professionals with 10+ years of practical experience in their fields.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card p-4 h-100 rounded-3 bg-dark bg-opacity-25 border border-light border-opacity-10">
                <div className="feature-icon bg-info bg-opacity-10 text-info mb-3">
                  <FaAward size={28} />
                </div>
                <h4>Career Support</h4>
                <p>Get resume help, interview prep, and job placement assistance with our 200+ hiring partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Review />
      <Course />

      <section className="py-5 bg-light" id="enquiry">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="pe-lg-4">
                <h2 className="fw-bold mb-4">Have Questions About This Course?</h2>
                <p className="lead text-muted mb-4">Our team is here to help you choose the right learning path.</p>
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Course Advisor Available</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-start">
                      <span className="me-2 text-primary">✓</span>
                      <span>Get personalized course recommendations</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <span className="me-2 text-primary">✓</span>
                      <span>Clarify your doubts about the curriculum</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <span className="me-2 text-primary">✓</span>
                      <span>Learn about payment options and EMI</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <span className="me-2 text-primary">✓</span>
                      <span>Get information about upcoming batches</span>
                    </li>
                  </ul>
                </div>
                <div className="contact-info bg-white p-4 rounded-3 shadow-sm">
                  <h5 className="fw-bold mb-3">Contact Information</h5>
                  <p className="mb-2"><strong>Email:</strong> akshaytakale321@gmail.com</p>
                  <p className="mb-2"><strong>Phone:</strong> +91 9970981875</p>
                  <p><strong>Hours:</strong> Mon-Sat, 9AM - 6PM</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card border-0 shadow-lg h-100">
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
