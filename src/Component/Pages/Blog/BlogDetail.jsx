import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = import.meta.env.VITE_API_URL;

function BlogDetail() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_URL}/detail-blog?slug=${slug}`)
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
            <div
                className="position-relative container-fluid py-5 overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                    minHeight: '450px',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-80px',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle at 30% 30%,rgb(167, 225, 252),rgba(0, 88, 146, 0.5))',
                        borderRadius: '50%',
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        bottom: '-60px',
                        left: '-80px',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle at 70% 70%,rgb(250, 214, 164),rgba(255, 111, 0, 0.5))',
                        borderRadius: '50%',
                    }}
                />

                <div className="row align-items-center justify-content-center position-relative animate__animated animate__fadeIn" style={{ zIndex: 1 }}>
                    <div className="col-md-6 px-5 text-center text-md-start">
                        <h1 className="fw-bold mb-3" style={{ fontSize: '2.8rem', color: '#2c3e50' }}>
                            {blog.title}
                        </h1>
                        <p className="lead" style={{ color: '#6c757d', fontSize: '1.2rem' }}>
                            {blog.short_desc}
                        </p>
                    </div>

                    <div className="col-md-5">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="img-fluid rounded-4 shadow-lg blog-animation"
                            style={{
                                maxHeight: '400px',
                                objectFit: 'cover',
                                border: '4px solid white',
                                transition: 'transform 0.3s',
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                </div>
            </div>

            <div className="container-fluid px-2 px-md-4 py-5">
                <div
                    className="bg-white p-3 p-md-5 rounded-4 shadow"
                    style={{
                        fontSize: '1.1rem',
                        whiteSpace: 'normal',
                        maxWidth: '100%',
                        lineHeight: '1.6',
                    }}
                >
                    <article style={{ all: 'initial', fontSize: 'inherit', lineHeight: 'inherit' }}>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </article>
                </div>
            </div>

        </div>
    );
}

export default BlogDetail;
