import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Team = () => {
    const headerStyle = {
        background: "linear-gradient(to right, #d0e8f4, #b3d7f1, #a0c3ea)",
        color: "#333",
        padding: '40px 0',
    };

    const photoStyle = {
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    };

    const infoStyle = {
        lineHeight: 1.6,
    };

    return (
        <>
            <header style={headerStyle}>
                <h1 className="text-center mb-1">AvisTech</h1>
                <p className="text-center lead mb-0">Code the Future. Design the Difference.</p>
            </header>

            <Container className="py-5">
                <Row className="align-items-center g-5">
                    <Col md={6} style={infoStyle}>
                        <h2>Avinash Shinde</h2>
                        <h4 className="text-muted mb-3">Full-Stack Developer & Trainer</h4>
                        <p>
                            I specialize in building modern web applications and mentoring aspiring developers.
                            With expertise in Java, React, and MySQL, I deliver scalable solutions and empower learners
                            through hands-on training sessions at AvisTech. <br/>
                            If you're interested in collaborating on a project or discussing anything related to web development, feel free to reach out! Let's connect and turn ideas into reality.
                        </p>
                        <ul className="list-unstyled">
                            <li><strong>Email:</strong> ajs.ind2@gmail.com</li>
                            <li><strong>Phone:</strong> +91 7821879681</li>
                            <li><strong>Location:</strong> Pune, India</li>
                        </ul>
                    </Col>
                    <Col md={6} className="text-center">
                        <img
                            src="/Avis.jpg"
                            alt="Avinash Shinde"
                            style={photoStyle}
                            width="300px"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Team;
