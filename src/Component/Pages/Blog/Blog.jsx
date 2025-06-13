import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Style/blog.css";
import EnquiryForm from "../Home/EnquiryForm";
import axios from "axios";

function Blog() {
  const [showModal, setShowModal] = useState(false);
  const [blogs,setBlogs] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await axios.get("https://upskill-server.onrender.com/getblog");
      setBlogs(res.data);
    } catch (err) {
      console.error("Cannot fetch blogs", err);
    }
  };

  // const blogs = [
  //   {
  //     title: "Hollow Diamond Pattern in Java",
  //     image: "Hollow.png",
  //     date: "2025-01-19",
  //     link: "#",
  //   },
  //   {
  //     title: "Object Oriented Programming Explained With Real Life Example",
  //     image: "oops.jpg",
  //     date: "2025-02-01",
  //     link: "#",
  //   },
  //   {
  //     title: "Understanding APIs: A Beginner's Guide",
  //     image: "API.png",
  //     date: "2025-02-28",
  //     link: "#",
  //   },
  //   {
  //     title: "How to Host Your First Website for Free",
  //     image: "Host.png",
  //     date: "2025-03-16",
  //     link: "#",
  //   },
  //   {
  //     title: "How to Use Postman for API Testing",
  //     image: "Postman.png",
  //     date: "2025-03-28",
  //     link: "#",
  //   },
  //   {
  //     title: "Introduction to Docker for Beginners",
  //     image: "Docker1.png",
  //     date: "2025-04-01",
  //     link: "#",
  //   },
  //   {
  //     title: "Authentication vs Authorization: What's the Difference",
  //     image: "Authontication.png",
  //     date: "2025-04-13",
  //     link: "#",
  //   },
  //   {
  //     title: "Understanding DOM and How to Manipulate It",
  //     image: "DOM.png",
  //     date: "2025-05-02",
  //     link: "#",
  //   },
  // ];

  return (
    <div>
      <div className="hero-section text-white text-center">
        <h1 className="display-4 fw-bold gradient-text">Explore Top Blogs</h1>
        <p className="lead">Discover insights and knowledge from the tech world.</p>
      </div>

      <div className="container py-5">
        <div className="row">
          {blogs.map((blog, index) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch mb-4"
              key={index}
            >
              <div className="card w-100 shadow-sm rounded-4 blog-card">
                <img
                  src={blog.image}
                  className="card-img-top img-fluid p-2 bg-light"
                  alt={blog.title}
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title fw-semibold">{blog.title}</h6>
                  <p className="text-muted small mb-2">{blog.short_desc}</p>
                  <a
                    href={blog.slug}
                    className="btn btn-warning btn-sm mt-auto text-white fw-semibold"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
