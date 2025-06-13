import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://upskill-server.onrender.com/detail-blog?slug=${slug}`)
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setBlog(response.data[0]);
        } else {
          setError('Blog not found.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('An error occurred while fetching the blog.');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="alert alert-danger text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-100 min-vh-100 bg-light">
      {/* Hero Section */}
      <div className="position-relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-100"
          style={{ maxHeight: '450px', objectFit: 'cover' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-50 p-4 rounded-4">
          <h1 className="display-5 fw-bold">{blog.title}</h1>
          <p className="lead">{blog.short_desc}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="bg-white p-4 p-md-5 rounded-4 shadow"
              style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
