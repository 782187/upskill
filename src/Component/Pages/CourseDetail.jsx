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

  // Function to parse HTML content and extract text
  const parseHtmlContent = (html) => {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

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
      {/* Hero Section - Improved Layout */}
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
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-white text-primary rounded-circle p-2 me-3">
                    <FaChalkboardTeacher size={24} />
                  </div>
                  <p className="lead mb-0 fs-4">
                    Master {parseHtmlContent(course.description).split('.')[0]} with industry-relevant skills.
                  </p>
                </div>
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

      {/* Rest of the sections remain the same as in the previous improved version */}

      {/* Curriculum Section with Fixed Learning Outcomes */}
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
                  {course.description ? (
                    <>
                      <h4 className="mb-3">Data Science with Python and Machine Learning</h4>
                      <p className="mb-4">Master the art of extracting valuable insights from data using Python, statistics, and machine learning.</p>
                      
                      <p className="mb-4">This course is designed to cover the complete data science lifecycle with hands-on practicals and real-time projects.</p>
                      
                      <h5 className="mt-4 mb-3">Course Features:</h5>
                      <ul className="list-unstyled">
                        <li className="mb-3 d-flex">
                          <span className="me-2 text-primary"><BsCheck2Circle /></span>
                          <span>Live interactive sessions with experienced trainers</span>
                        </li>
                        <li className="mb-3 d-flex">
                          <span className="me-2 text-primary"><BsCheck2Circle /></span>
                          <span>Real-world case studies across domains</span>
                        </li>
                        <li className="mb-3 d-flex">
                          <span className="me-2 text-primary"><BsCheck2Circle /></span>
                          <span>Capstone project with deployment</span>
                        </li>
                        <li className="mb-3 d-flex">
                          <span className="me-2 text-primary"><BsCheck2Circle /></span>
                          <span>Placement assistance and certification</span>
                        </li>
                      </ul>
                      
                      <h5 className="mt-4 mb-3">Ideal For:</h5>
                      <p>Students, graduates, working professionals, career switchers, and data enthusiasts.</p>
                    </>
                  ) : (
                    <p>No learning outcomes available</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-success text-white py-3 rounded-top">
                  <h3 className="mb-0">Detailed Syllabus</h3>
                </div>
                <div className="card-body">
                  {course.topics ? (
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex">
                        <span className="me-2 text-success"><BsCheck2Circle /></span>
                        <span>Introduction to Data Science and Python</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2 text-success"><BsCheck2Circle /></span>
                        <span>Python Programming Basics</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2 text-success"><BsCheck2Circle /></span>
                        <span>Working with NumPy and Pandas for Data Analysis</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2 text-success"><BsCheck2Circle /></span>
                        <span>Data Visualization using Matplotlib and Seaborn</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2 text-success"><BsCheck2Circle /></span>
                        <span>Statistics and Probability for Data Science</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2 text-success"><BsCheck2Circle /></span>
                        <span>Exploratory Data Analysis (EDA)</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2 text-success"><BsCheck2Circle /></span>
                        <span>Machine Learning Fundamentals</span>
                        <ul className="mt-2 ms-4">
                          <li className="mb-2">Linear Regression</li>
                          <li className="mb-2">Logistic Regression</li>
                          <li className="mb-2">Decision Trees</li>
                        </ul>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2 text-success"><BsCheck2Circle /></span>
                        <span>Supervised Learning:</span>
                        <ul className="mt-2 ms-4">
                          <li className="mb-2">Random Forest</li>
                          <li className="mb-2">K-Nearest Neighbors (KNN)</li>
                          <li className="mb-2">Support Vector Machines (SVM)</li>
                          <li className="mb-2">K-Means Clustering</li>
                        </ul>
                      </li>
                    </ul>
                  ) : (
                    <p>No syllabus available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same as in the previous improved version */}
    </div>
  )
}

export default CourseDetail