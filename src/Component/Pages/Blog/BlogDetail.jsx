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
        setBlog(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Blog not found or an error occurred.');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="text-center py-5"><div className="spinner-border text-primary" /></div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center mt-5">{error}</div>;
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="bg-white p-4 p-md-5 shadow rounded-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="img-fluid mb-4 rounded-3"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
            <h1 className="fw-bold mb-3 text-primary">{blog.title}</h1>
            <p className="text-muted fs-5 mb-4">{blog.short_desc}</p>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
