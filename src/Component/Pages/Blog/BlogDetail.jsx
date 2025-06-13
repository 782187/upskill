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
        <div className="w-100 bg-light">
            <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start px-5">
                        <h1 className="display-5 fw-bold" style={{ color: '#343a40' }}>{blog.title}</h1>
                        <p className="lead mt-3" style={{ color: '#6c757d' }}>{blog.short_desc}</p>
                    </div>

                    <div className="col-md-6">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="img-fluid rounded-4 shadow"
                            style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                        />
                    </div>
                </div>
            </div>

            <div className="container-fluid px-3 px-md-5 py-5">
                <div className="bg-white p-4 p-md-5 rounded-4 shadow mx-auto"
                    style={{
                        lineHeight: '1.8',
                        fontSize: '1.1rem',
                        whiteSpace: 'pre-line',
                        maxWidth: '1200px'
                    }}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </div>
        </div>
    );
}

export default BlogDetail;
