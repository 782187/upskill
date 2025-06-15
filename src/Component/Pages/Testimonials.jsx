import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Testimonials() {
    const [review, updateReview] = useState([]);

    useEffect(() => {
        axios.get("https://upskill-server.onrender.com/FetchFeedbackServlet")
            .then(res => updateReview(res.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Testimonials</h2>
            <div className="d-flex flex-column gap-4">
                {review.map((data, index) => (
                    <div
                        key={index}
                        className="d-flex flex-column flex-md-row align-items-start p-5 rounded shadow-sm"
                        style={{ backgroundColor: "#f8f9fa", gap: "20px" }}
                    >
                        <div className="d-flex align-items-center" style={{ minWidth: "200px" }}>
                            <img
                                src={data.image}
                                alt={data.name}
                                className="rounded-circle me-3"
                                style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                            />
                            <div>
                                <h6 className="mb-1">{data.name}</h6>
                                <small className="text-muted">{data.course}</small>
                                <StarRating rating={data.rating} />
                            </div>
                        </div>

                        <div>
                            <p className="mb-2 text-muted">"{data.review}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
