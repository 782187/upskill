import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Star } from 'lucide-react';
import Course from './Home/Course';

const API_URL = import.meta.env.VITE_API_URL;

const StarRating = ({ rating }) => (
    <div className="d-flex gap-1 justify-content-start mt-1">
        {[...Array(5)].map((_, index) => (
            <Star
                key={index}
                size={18}
                className={index < rating ? "text-warning" : "text-muted"}
                fill={index < rating ? "currentColor" : "none"}
            />
        ))}
    </div>
);

function Testimonials() {
    const [review, updateReview] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_URL}/FetchFeedbackServlet`)
            .then(res => {
                updateReview(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Testimonials</h2>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status"></div>
                    <p className="mt-3">Loading reviews...</p>
                </div>
            ) : (
                <div className="d-flex flex-column gap-4">
                    {review.length === 0 ? (
                        <p className="text-center text-muted">No reviews available.</p>
                    ) : (
                        review.map((data, index) => (
                            <div
                                key={index}
                                className="d-flex flex-column flex-md-row align-items-start p-3 rounded shadow-sm"
                                style={{ backgroundColor: "#f8f9fa", gap: "20px" }}
                            >
                                <div className="d-flex align-items-start" style={{ minWidth: "240px" }}>
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                        className="me-3 rounded-3 border shadow"
                                        style={{
                                            width: '120px',
                                            height: '120px',
                                            objectFit: 'cover',
                                            imageRendering: 'auto',
                                        }}
                                    />

                                    <div>
                                        <h6 className="mb-1 fw-semibold">{data.name}</h6>
                                        <small className="text-muted d-block mb-1">{data.course}</small>
                                        <StarRating rating={data.rating} />
                                    </div>
                                </div>


                                <div>
                                    <p className="mb-2 text-muted">"{data.review}"</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
            <Course />
        </div>
    );
}

export default Testimonials;
