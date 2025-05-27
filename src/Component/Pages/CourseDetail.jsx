import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EnquiryForm from "./Home/EnquiryForm";
import "../../Style/CourseDetail.css"
const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`https://upskill-server.onrender.com/get-course-detail?slug=${slug}`);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [slug]);

  if (!course) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <div>
      <section className="course-detail-hero">
        <div>
          <h1 className="course-detail-title">{course.title}</h1>
          <p className="course-detail-subtitle">{course.description}</p>
        </div>
        <div className="course-detail-enquiry-box">
          <h4 className="mb-3 text-primary">Request a Callback</h4>
          <EnquiryForm />
        </div>
      </section>

      <section className="course-detail-details">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="card course-detail-card">
                <img
                  src={`https://upskill-server.onrender.com/get-image?courseId=${course.id}`}
                  alt={course.title}
                  className="course-detail-card-img"
                />
                <div className="card-body">
                  <h3 className="card-title mb-4">Course Overview</h3>
                  <p className="card-text">{course.description}</p>

                  <h5 className="mt-4 text-primary">Key Topics</h5>
                  <ul>
                    {course.topics.split(",").map((topic, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle-fill course-detail-topic-icon"></i>
                        {topic.trim()}
                      </li>
                    ))}
                  </ul>

                  <h5 className="mt-4 text-primary">Duration</h5>
                  <p>{course.duration}</p>

                  <h5 className="mt-4 text-primary">Mode</h5>
                  <p>{course.mode}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-detail-features text-center">
        <div className="container">
          <h3 className="mb-4">Why Join Our Course?</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="bi bi-laptop"></i>
              <h5 className="mt-2">Hands-on Projects</h5>
              <p>Gain practical experience with real-world projects.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-award"></i>
              <h5 className="mt-2">Certification</h5>
              <p>Earn a certificate upon successful completion of the course.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-person-check"></i>
              <h5 className="mt-2">Placement Assistance</h5>
              <p>We help you connect with hiring partners after the course.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="course-detail-certificate text-center">
        <div className="container">
          <h3 className="mb-4">Certificate You'll Receive</h3>
          <img
            src="https://upskill-server.onrender.com/get-certificate-image?courseId=${course.id}"
            alt="Course Certificate"
          />
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
