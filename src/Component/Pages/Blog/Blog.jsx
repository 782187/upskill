import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Style/blog.css";
import bgImg from "../../../assets/blogbg.png";
import EnquiryForm from "../Home/EnquiryForm";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function Blog() {
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    fetchBlog();
    return () => clearTimeout(timer);
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`${API_URL}/getblog`);
      setBlogs(res.data);
    } catch (err) {
      console.error("Cannot fetch blogs", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-3">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="fw-bold display-5" style={{ color: "orange", textShadow: "2px 3px 3px gray" }}>
            Stay Updated with the Latest <br />
            <span className="text-primary">Tech & Training Blogs</span>
          </h1>
          <p className="text-muted mt-3">
            Explore expert-written blogs on web development, programming, career tips,
            and industry trends from our experienced trainers.
          </p>
          <form className="d-flex mt-4" onSubmit={(e) => e.preventDefault()}>
            <a href="#blogid" className="btn btn-success rounded-end px-4">View Blogs</a>
          </form>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={bgImg}
            alt="Blog Illustration"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>

      <h2 className="text-center text-primary fw-bold display-5">Blogs</h2>
      <div className="container py-3" id="blogid">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-5">
            <h5 className="text-muted">No blogs found at the moment.</h5>
          </div>
        ) : (
          <div className="row">
            {blogs.map((blog, index) => (
              <div
                className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch mb-4"
                key={index}
              >
                <div className="card w-100 blog-card shadow-sm border-0 rounded-4 overflow-hidden position-relative">
                  <div className="image-wrapper bg-light d-flex align-items-center justify-content-center p-3">
                    <img
                      src={blog.image}
                      className="img-fluid"
                      alt={blog.title}
                      style={{ maxHeight: "140px", objectFit: "contain" }}
                    />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-semibold text-dark">{blog.title}</h6>
                    <p className="text-muted small mb-3">{blog.short_desc}</p>

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="btn btn-sm btn-warning text-white fw-semibold mt-auto rounded-pill shadow-sm"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        )}
      </div>

      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header">
              <h5 className="modal-title text-primary">Have Questions?</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
