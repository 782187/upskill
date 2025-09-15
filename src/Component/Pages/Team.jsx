import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = () => {
    const colors = {
        primary: '#1E88E5',      
        primaryDark: '#1565C0',  
        secondary: '#6c757d',    
        accent: '#FF8A00',       
        accentDark: 'white',   
        light: '#f8f9fa',       
        dark: '#343a40',         
        lightBlue: '#E3F2FD',    
        lightOrange: '#FFF3E0',  
    };

    const heroStyle = {
        background: `linear-gradient(135deg, ${colors.lightBlue} 0%, ${colors.lightOrange} 100%)`,
        padding: '80px 0 60px',
        position: 'relative',
        overflow: 'hidden'
    };

    const sectionTitleStyle = {
        position: 'relative',
        paddingBottom: '15px',
        marginBottom: '40px',
        textAlign: 'center',
        fontWeight: '600'
    };

    const sectionTitleAfter = {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80px',
        height: '4px',
        backgroundColor: colors.accent,
        borderRadius: '2px'
    };

    const cardStyle = {
        border: 'none',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        transition: 'all 0.4s ease',
        height: '100%',
        backgroundColor: '#fff',
        overflow: 'hidden'
    };

    const cardHoverStyle = {
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
    };

    const photoContainerStyle = {
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        height: '100%',
        minHeight: '280px',
        position: 'relative'
    };

    const photoStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease'
    };

    const iconStyle = {
        color: colors.accent,
        marginRight: '10px',
        fontSize: '18px'
    };

    const badgeStyle = {
        backgroundColor: colors.lightOrange,
        color: colors.accentDark,
        fontWeight: '500',
        padding: '6px 12px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        marginRight: '8px',
        marginBottom: '8px',
        display: 'inline-block'
    };

    const statNumberStyle = {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: colors.primary,
        lineHeight: '1.2'
    };

    const statTextStyle = {
        fontSize: '1rem',
        color: colors.secondary,
        fontWeight: '500'
    };

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
            <section style={heroStyle}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 style={{ color: colors.dark, fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                                Meet Our <span style={{ color: colors.primary }}>Leadership</span> Team
                            </h1>
                            <p className="lead" style={{ color: colors.secondary, marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
                                The passionate professionals behind UPSKILL IT who are dedicated to transforming careers and bridging the gap between education and employment in the IT industry.
                            </p>
                            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    style={{
                                        backgroundColor: colors.accent,
                                        borderColor: colors.accent,
                                        padding: '0.75rem 2rem',
                                        borderRadius: '50px',
                                        fontWeight: '600'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = colors.accentDark;
                                        e.target.style.borderColor = colors.accentDark;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = colors.accent;
                                        e.target.style.borderColor = colors.accent;
                                    }}
                                >
                                    Our Programs
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    size="lg"
                                    style={{
                                        color: colors.primary,
                                        borderColor: colors.primary,
                                        padding: '0.75rem 2rem',
                                        borderRadius: '50px',
                                        fontWeight: '600'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = colors.primary;
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = colors.primary;
                                    }}
                                >
                                    Contact Team
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6} className="text-center">
                            <div style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                                maxWidth: '100%',
                                height: 'auto'
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
                                    alt="Team Collaboration"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <section style={{ padding: '60px 0', backgroundColor: colors.light }}>
                <Container>
                    <Row className="text-center">
                        <Col xs={6} md={3} className="mb-4 mb-md-0">
                            <div style={statNumberStyle}>500+</div>
                            <div style={statTextStyle}>Students Trained</div>
                        </Col>
                        <Col xs={6} md={3} className="mb-4 mb-md-0">
                            <div style={statNumberStyle}>95%</div>
                            <div style={statTextStyle}>Placement Rate</div>
                        </Col>
                        <Col xs={6} md={3} className="mb-4 mb-md-0">
                            <div style={statNumberStyle}>50+</div>
                            <div style={statTextStyle}>Industry Partners</div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div style={statNumberStyle}>12+</div>
                            <div style={statTextStyle}>Courses Offered</div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team Members Section */}
            <section style={{ padding: '80px 0' }}>
                <Container>
                    <Row>
                        <Col className="mb-5">
                            <div style={sectionTitleStyle}>
                                <h2 style={{ color: colors.dark, fontWeight: '700', fontSize: '2.2rem' }}>Our Leadership Team</h2>
                                <div style={sectionTitleAfter}></div>
                            </div>
                            <p className="text-center mx-auto" style={{ maxWidth: '800px', color: colors.secondary, lineHeight: '1.6', fontSize: '1.1rem' }}>
                                Meet the visionary leaders behind UPSKILL IT who are dedicated to bridging the gap between
                                education and employment in the IT industry through innovative training and placement solutions.
                            </p>
                        </Col>
                    </Row>

                    {/* Team Member 1 */}
                    <Row className="align-items-center mb-5 mb-lg-10">
                        <Col lg={5} className="mb-4 mb-lg-0">
                            <div style={photoContainerStyle}>
                                <img
                                    src="/rutuja_mam.jpg"
                                    alt="Rutuja Bhutada"
                                    style={photoStyle}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80';
                                    }}
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Card
                                style={cardStyle}
                                className="team-card p-3 p-md-4"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = cardHoverStyle.transform;
                                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                                }}
                            >
                                <Card.Body className="p-2 p-md-3">
                                    <h3 style={{ color: colors.dark, fontWeight: '700', marginBottom: '0.5rem' }}>Rutuja Bhutada</h3>
                                    <p className="mb-3 mb-md-4" style={{ color: colors.primary, fontSize: '1.1rem', fontWeight: '600' }}>Founder & Director</p>

                                    <div className="mb-3 mb-md-4">
                                        <Badge style={badgeStyle}>Visionary Leadership</Badge>
                                        <Badge style={badgeStyle}>Educational Expertise</Badge>
                                        <Badge style={badgeStyle}>Technology Integration</Badge>
                                    </div>

                                    <Card.Text style={{ color: colors.secondary, lineHeight: '1.7', fontSize: '1rem' }}>
                                        Visionary thinking to set the direction for the institute.Decision-making to navigate challenges and seize opportunities.
                                        Motivating and guiding your team toward shared goals.
                                    </Card.Text>

                                    <Card.Text style={{ color: colors.secondary, lineHeight: '1.7', fontSize: '1rem' }}>
                                        Educational Expertise

                                        Deep understanding of curriculum design and pedagogy.
                                        Familiarity with current trends in education and training.
                                        Commitment to fostering an innovative and engaging learning environment

                                        Technological Proficiency

                                        Implementing digital tools and e-learning platforms.
                                        Staying updated on the latest education technology trends.
                                        Promoting innovation through technology integration.
                                    </Card.Text>

                                    <div className="mt-4 pt-3" style={{ borderTop: '1px solid #f1f1f1' }}>
                                        <p className="mb-2">
                                            <i className="bi bi-envelope-fill" style={iconStyle}></i>
                                            <span style={{ color: colors.secondary }}>rutujaborse77@gmail.com</span>
                                        </p>
                                        <p className="mb-2">
                                            <i className="bi bi-linkedin" style={iconStyle}></i>
                                            <span style={{ color: colors.secondary }}>linkedin.com/in/rutuja-borse</span>
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-geo-alt-fill" style={iconStyle}></i>
                                            <span style={{ color: colors.secondary }}>Pune, India</span>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Team Member 2 */}
                    <Row className="align-items-center mb-5 mb-lg-10 flex-column-reverse flex-lg-row">
                        <Col lg={5} className="order-lg-2 mb-4 mb-lg-0">
                            <div style={photoContainerStyle}>
                                <img
                                    src="/kamesh_sir.jpg"
                                    alt="Kamesh Bhutada"
                                    style={photoStyle}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
                                    }}
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                        <Col lg={7} className="order-lg-1">
                            <Card
                                style={cardStyle}
                                className="team-card p-3 p-md-4"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = cardHoverStyle.transform;
                                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                                }}
                            >
                                <Card.Body className="p-2 p-md-3">
                                    <h3 style={{ color: colors.dark, fontWeight: '700', marginBottom: '0.5rem' }}>Kamesh Bhutada</h3>
                                    <p className="mb-3 mb-md-4" style={{ color: colors.primary, fontSize: '1.1rem', fontWeight: '600' }}>Co-Founder & Business Head</p>

                                    <div className="mb-3 mb-md-4">
                                        <Badge style={badgeStyle}>Business Development</Badge>
                                        <Badge style={badgeStyle}>IT Services</Badge>
                                        <Badge style={badgeStyle}>Customer Relations</Badge>
                                        <Badge style={badgeStyle}>Strategic Planning</Badge>
                                    </div>

                                    <Card.Text style={{ color: colors.secondary, lineHeight: '1.7', fontSize: '1rem' }}>
                                        Experienced with a demonstrated history of working in the information technology and services industry. Strong business development professional skilled in Microsoft Excel, Customer Service, Microsoft Word, Public Speaking, and Microsoft Office.
                                    </Card.Text>

                                    <Card.Text style={{ color: colors.secondary, lineHeight: '1.7', fontSize: '1rem' }}>
                                        With a background in managing IT service delivery for enterprise clients, Kamesh ensures that
                                        UPSKILL IT's programs remain aligned with industry needs and hiring trends.
                                    </Card.Text>

                                    <div className="mt-4 pt-3" style={{ borderTop: '1px solid #f1f1f1' }}>
                                        <p className="mb-2">
                                            <i className="bi bi-envelope-fill" style={iconStyle}></i>
                                            <span style={{ color: colors.secondary }}>kameshbhutada10@gmail.com</span>
                                        </p>
                                        <p className="mb-2">
                                            <i className="bi bi-linkedin" style={iconStyle}></i>
                                            <span style={{ color: colors.secondary }}>linkedin.com/in/kamesh-bhutada-814754b4</span>
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-geo-alt-fill" style={iconStyle}></i>
                                            <span style={{ color: colors.secondary }}>Pune, India</span>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Team Member 3 */}
                    <Row className="align-items-center mb-5 mb-lg-10">
                        <Col lg={5} className="mb-4 mb-lg-0">
                            <div style={photoContainerStyle}>
                                <img
                                    src="/darpan_sir.jpg"
                                    alt="Darpan Bhutada"
                                    style={photoStyle}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
                                    }}
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Card
                                style={cardStyle}
                                className="team-card p-3 p-md-4"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = cardHoverStyle.transform;
                                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                                }}
                            >
                                <Card.Body className="p-2 p-md-3">
                                    <h3 style={{ color: colors.dark, fontWeight: '700', marginBottom: '0.5rem' }}>Darpan Bhutada</h3>
                                    <p className="mb-3 mb-md-4" style={{ color: colors.primary, fontSize: '1.1rem', fontWeight: '600' }}>Co-Founder & Head of Mentorship</p>

                                    <div className="mb-3 mb-md-4">
                                        <Badge style={badgeStyle}>Career Empowerment</Badge>
                                        <Badge style={badgeStyle}>Education Innovation</Badge>
                                        <Badge style={badgeStyle}>Mentorship</Badge>
                                        <Badge style={badgeStyle}>Curriculum Development</Badge>
                                    </div>

                                    <Card.Text style={{ color: colors.secondary, lineHeight: '1.7', fontSize: '1rem' }}>
                                        I am passionate about empowering individuals to unlock their full potential in the IT industry. With a mission to bridge the gap between education and employment, I have dedicated myself to creating a platform where aspiring professionals can gain the skills, knowledge, and confidence they need to excel in their careers.
                                    </Card.Text>

                                    <Card.Text style={{ color: colors.secondary, lineHeight: '1.7', fontSize: '1rem' }}>
                                        My journey began with a vision to provide accessible, high-quality training that not only educates but also inspires.
                                        I am driven by the belief that education is a transformative tool, and through Upskill IT, I am proud to contribute to shaping the next generation of IT professionals. Let's connect and collaborate to make a lasting impact on the future of IT education and employment.
                                    </Card.Text>

                                    <div className="mt-4 pt-3" style={{ borderTop: '1px solid #f1f1f1' }}>
                                        <p className="mb-2">
                                            <i className="bi bi-envelope-fill" style={iconStyle}></i>
                                            <span style={{ color: colors.secondary }}>darpanbhutada143@gmail.com</span>
                                        </p>
                                        <p className="mb-2">
                                            <i className="bi bi-linkedin" style={iconStyle}></i>
                                            <span style={{ color: colors.secondary }}>linkedin.com/in/darpan-bhutada</span>
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-geo-alt-fill" style={iconStyle}></i>
                                            <span style={{ color: colors.secondary }}>Pune, India</span>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mission Section */}
            <section style={{ padding: '80px 0', backgroundColor: colors.light }}>
                <Container>
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <div style={sectionTitleStyle}>
                                <h2 style={{ color: colors.dark, fontWeight: '700', fontSize: '2.2rem' }}>Our Mission & Values</h2>
                                <div style={sectionTitleAfter}></div>
                            </div>

                            <div className="p-4 p-md-5 rounded-3" style={{ backgroundColor: '#fff', border: '1px solid #eaeaea', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                                <p className="text-center mb-4" style={{ color: colors.secondary, lineHeight: '1.8', fontSize: '1.1rem', fontStyle: 'italic' }}>
                                    "To bridge the gap between education and employment by providing accessible,
                                    high-quality training that not only educates but also inspires. We are committed
                                    to shaping the next generation of IT professionals through innovative learning
                                    experiences and career development opportunities."
                                </p>

                                <Row className="mt-5">
                                    <Col md={6} className="mb-4">
                                        <div className="d-flex">
                                            <div className="me-4 flex-shrink-0">
                                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colors.lightOrange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <i className="bi bi-lightbulb-fill" style={{ color: colors.accent, fontSize: '1.5rem' }}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 style={{ color: colors.dark, fontWeight: '600' }}>Innovation</h5>
                                                <p style={{ color: colors.secondary }}>Continuously updating our curriculum to reflect the latest industry trends and technologies.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} className="mb-4">
                                        <div className="d-flex">
                                            <div className="me-4 flex-shrink-0">
                                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colors.lightOrange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <i className="bi bi-people-fill" style={{ color: colors.accept, fontSize: '1.5rem' }}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 style={{ color: colors.dark, fontWeight: '600' }}>Student Success</h5>
                                                <p style={{ color: colors.secondary }}>Putting our students' career growth and development at the center of everything we do.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} className="mb-4">
                                        <div className="d-flex">
                                            <div className="me-4 flex-shrink-0">
                                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colors.lightOrange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <i className="bi bi-shield-check" style={{ color: colors.accent, fontSize: '1.5rem' }}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 style={{ color: colors.dark, fontWeight: '600' }}>Quality</h5>
                                                <p style={{ color: colors.secondary }}>Maintaining the highest standards in our training programs and mentorship.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} className="mb-4">
                                        <div className="d-flex">
                                            <div className="me-4 flex-shrink-0">
                                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colors.lightOrange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <i className="bi bi-building" style={{ color: colors.accent, fontSize: '1.5rem' }}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 style={{ color: colors.dark, fontWeight: '600' }}>Industry Connection</h5>
                                                <p style={{ color: colors.secondary }}>Building strong relationships with IT companies to ensure relevant placement opportunities.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '80px 0',
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                color: 'white'
            }}>
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 style={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '2.2rem' }}>Ready to Transform Your IT Career?</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
                                Join hundreds of successful students who have launched their IT careers with UPSKILL IT
                            </p>
                            <Link
                            className='btn btn-light text-primary fw-bold'
                            to="/courses"
                                variant="light"
                                size="lg"
                                style={{
                                    padding: '0.75rem 2rem',
                                    borderRadius: '50px',
                                    fontWeight: '600',
                                    fontSize: '1.1rem'
                                }}
                            >
                                Explore Our Programs
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <style>
                {`
                .team-card:hover .social-links {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .mb-10 {
                    margin-bottom: 100px;
                }

                @media (max-width: 992px) {
                    .hero-text {
                        text-align: center;
                    }
                    
                    .hero-buttons {
                        justify-content: center;
                    }
                    
                    .mb-10 {
                        margin-bottom: 60px;
                    }
                    
                    .photo-container {
                        min-height: 350px !important;
                    }
                }

                @media (max-width: 768px) {
                    .team-card {
                        margin-bottom: 24px;
                    }
                    
                    h1 {
                        font-size: 2.2rem !important;
                    }
                    
                    h2 {
                        font-size: 1.8rem !important;
                    }
                    
                    .lead {
                        font-size: 1rem !important;
                    }
                    
                    .stat-number {
                        font-size: 2rem !important;
                    }
                    
                    .photo-container {
                        min-height: 300px !important;
                    }
                }

                @media (max-width: 576px) {
                    section {
                        padding: 60px 0 !important;
                    }
                    
                    .photo-container {
                        min-height: 250px !important;
                    }
                    
                    .btn {
                        width: 100%;
                        margin-bottom: 10px;
                    }
                    
                    .btn-group {
                        flex-direction: column;
                    }
                }
                `}
            </style>
        </>
    );
};

export default Team;