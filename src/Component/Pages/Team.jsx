import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Team = () => {
    const heroStyle = {
        background: "linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%)",
        padding: '100px 0 80px',
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
        backgroundColor: '#5c9bd1',
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

    const photoStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease'
    };

    const iconStyle = {
        color: '#5c9bd1',
        marginRight: '10px',
        fontSize: '18px'
    };

    const badgeStyle = {
        backgroundColor: '#f0f7ff',
        color: '#2c6aa0',
        fontWeight: '500',
        padding: '6px 12px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        marginRight: '10px',
        marginBottom: '10px',
        display: 'inline-block'
    };

    const statNumberStyle = {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#5c9bd1',
        lineHeight: '1.2'
    };

    const statTextStyle = {
        fontSize: '1rem',
        color: '#5c6b7a',
        fontWeight: '500'
    };

    return (
        <>
            {/* Hero Section */}
            <section style={heroStyle}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="pe-lg-5">
                            <h1 style={{color: '#2c3e50', fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2'}}>
                                Meet Our <span style={{color: '#5c9bd1'}}>Leadership</span> Team
                            </h1>
                            <p className="lead" style={{color: '#5c6b7a', marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.2rem'}}>
                                The passionate professionals behind UPSKILL IT who are dedicated to transforming careers and bridging the gap between education and employment in the IT industry.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Button 
                                    variant="primary" 
                                    size="lg" 
                                    style={{backgroundColor: '#5c9bd1', borderColor: '#5c9bd1', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: '600'}}
                                >
                                    Our Programs
                                </Button>
                                <Button 
                                    variant="outline-primary" 
                                    size="lg" 
                                    style={{color: '#5c9bd1', borderColor: '#5c9bd1', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: '600'}}
                                >
                                    Contact Team
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6} className="mt-5 mt-lg-0">
                            <img 
                                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" 
                                alt="Team Collaboration" 
                                style={{width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'}}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <section style={{padding: '60px 0', backgroundColor: '#f8fafc'}}>
                <Container>
                    <Row className="text-center">
                        <Col md={3} className="mb-4 mb-md-0">
                            <div style={statNumberStyle}>500+</div>
                            <div style={statTextStyle}>Students Trained</div>
                        </Col>
                        <Col md={3} className="mb-4 mb-md-0">
                            <div style={statNumberStyle}>95%</div>
                            <div style={statTextStyle}>Placement Rate</div>
                        </Col>
                        <Col md={3} className="mb-4 mb-md-0">
                            <div style={statNumberStyle}>50+</div>
                            <div style={statTextStyle}>Industry Partners</div>
                        </Col>
                        <Col md={3}>
                            <div style={statNumberStyle}>12+</div>
                            <div style={statTextStyle}>Courses Offered</div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team Members Section */}
            <section style={{padding: '80px 0'}}>
                <Container>
                    <Row>
                        <Col className="mb-5">
                            <div style={sectionTitleStyle}>
                                <h2 style={{color: '#2c3e50', fontWeight: '700', fontSize: '2.5rem'}}>Our Leadership Team</h2>
                                <div style={sectionTitleAfter}></div>
                            </div>
                            <p className="text-center mx-auto" style={{maxWidth: '800px', color: '#5c6b7a', lineHeight: '1.6', fontSize: '1.1rem'}}>
                                Meet the visionary leaders behind UPSKILL IT who are dedicated to bridging the gap between 
                                education and employment in the IT industry through innovative training and placement solutions.
                            </p>
                        </Col>
                    </Row>

                    {/* Team Member 1 */}
                    <Row className="align-items-center mb-10">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div style={{borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
                                <img
                                    src="/rutuja_mam.jpg"
                                    alt="Rutuja Bhutada"
                                    style={photoStyle}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80';
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Card 
                                style={cardStyle} 
                                className="team-card p-4"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = cardHoverStyle.transform;
                                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                                }}
                            >
                                <Card.Body className="p-3">
                                    <h3 style={{color: '#2c3e50', fontWeight: '700', marginBottom: '0.5rem'}}>Rutuja Bhutada</h3>
                                    <p className="text-primary mb-4" style={{fontSize: '1.1rem', fontWeight: '600'}}>Founder & Director</p>
                                    
                                    <div className="mb-4">
                                        <Badge style={badgeStyle}>Visionary Leadership</Badge>
                                        <Badge style={badgeStyle}>Educational Expertise</Badge>
                                        <Badge style={badgeStyle}>Technology Integration</Badge>
                                    </div>
                                    
                                    <Card.Text style={{color: '#5c6b7a', lineHeight: '1.7', fontSize: '1.05rem'}}>
                                        Rutuja brings visionary thinking to set the direction for the institute. With over 10 years of experience 
                                        in IT education, she excels at decision-making to navigate challenges and seize opportunities. Her passion 
                                        lies in motivating and guiding teams toward shared goals and creating impactful learning experiences.
                                    </Card.Text>
                                    
                                    <Card.Text style={{color: '#5c6b7a', lineHeight: '1.7', fontSize: '1.05rem'}}>
                                        Prior to founding UPSKILL IT, Rutuja held leadership positions at major IT training organizations and 
                                        has been instrumental in curriculum development for emerging technologies.
                                    </Card.Text>
                                    
                                    <div className="mt-4 pt-3" style={{borderTop: '1px solid #f1f1f1'}}>
                                        <p className="mb-2">
                                            <i className="bi bi-envelope-fill" style={iconStyle}></i>
                                            <span style={{color: '#5c6b7a'}}>rutuja@upskillit.com</span>
                                        </p>
                                        <p className="mb-2">
                                            <i className="bi bi-linkedin" style={iconStyle}></i>
                                            <span style={{color: '#5c6b7a'}}>/in/rutuja-bhutada</span>
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-geo-alt-fill" style={iconStyle}></i>
                                            <span style={{color: '#5c6b7a'}}>Pune, India</span>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Team Member 2 */}
                    <Row className="align-items-center mb-10 flex-row-reverse">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div style={{borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
                                <img
                                    src="/kamesh_sir.jpg"
                                    alt="Kamesh Bhutada"
                                    style={photoStyle}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Card 
                                style={cardStyle} 
                                className="team-card p-4"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = cardHoverStyle.transform;
                                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                                }}
                            >
                                <Card.Body className="p-3">
                                    <h3 style={{color: '#2c3e50', fontWeight: '700', marginBottom: '0.5rem'}}>Kamesh Bhutada</h3>
                                    <p className="text-primary mb-4" style={{fontSize: '1.1rem', fontWeight: '600'}}>Co-Founder & Business Head</p>
                                    
                                    <div className="mb-4">
                                        <Badge style={badgeStyle}>Business Development</Badge>
                                        <Badge style={badgeStyle}>IT Services</Badge>
                                        <Badge style={badgeStyle}>Customer Relations</Badge>
                                        <Badge style={badgeStyle}>Strategic Planning</Badge>
                                    </div>
                                    
                                    <Card.Text style={{color: '#5c6b7a', lineHeight: '1.7', fontSize: '1.05rem'}}>
                                        Kamesh is an experienced professional with a demonstrated history of working in the information 
                                        technology and services industry. He brings strong business development expertise and is skilled 
                                        in customer relationship management and public speaking.
                                    </Card.Text>
                                    
                                    <Card.Text style={{color: '#5c6b7a', lineHeight: '1.7', fontSize: '1.05rem'}}>
                                        With a background in managing IT service delivery for enterprise clients, Kamesh ensures that 
                                        UPSKILL IT's programs remain aligned with industry needs and hiring trends.
                                    </Card.Text>
                                    
                                    <div className="mt-4 pt-3" style={{borderTop: '1px solid #f1f1f1'}}>
                                        <p className="mb-2">
                                            <i className="bi bi-envelope-fill" style={iconStyle}></i>
                                            <span style={{color: '#5c6b7a'}}>kamesh@upskillit.com</span>
                                        </p>
                                        <p className="mb-2">
                                            <i className="bi bi-linkedin" style={iconStyle}></i>
                                            <span style={{color: '#5c6b7a'}}>/in/kamesh-bhutada</span>
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-geo-alt-fill" style={iconStyle}></i>
                                            <span style={{color: '#5c6b7a'}}>Pune, India</span>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Team Member 3 */}
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div style={{borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}}>
                                <img
                                    src="/darpan_sir.jpg"
                                    alt="Darpan Bhutada"
                                    style={photoStyle}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Card 
                                style={cardStyle} 
                                className="team-card p-4"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = cardHoverStyle.transform;
                                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                                }}
                            >
                                <Card.Body className="p-3">
                                    <h3 style={{color: '#2c3e50', fontWeight: '700', marginBottom: '0.5rem'}}>Darpan Bhutada</h3>
                                    <p className="text-primary mb-4" style={{fontSize: '1.1rem', fontWeight: '600'}}>Co-Founder & Head of Mentorship</p>
                                    
                                    <div className="mb-4">
                                        <Badge style={badgeStyle}>Career Empowerment</Badge>
                                        <Badge style={badgeStyle}>Education Innovation</Badge>
                                        <Badge style={badgeStyle}>Mentorship</Badge>
                                        <Badge style={badgeStyle}>Curriculum Development</Badge>
                                    </div>
                                    
                                    <Card.Text style={{color: '#5c6b7a', lineHeight: '1.7', fontSize: '1.05rem'}}>
                                        Darpan is passionate about empowering individuals to unlock their full potential in the IT industry. 
                                        He is dedicated to creating a platform where aspiring professionals can gain skills, knowledge, 
                                        and confidence to excel in their careers.
                                    </Card.Text>
                                    
                                    <Card.Text style={{color: '#5c6b7a', lineHeight: '1.7', fontSize: '1.05rem'}}>
                                        With a background in software development and technical training, Darpan brings practical industry 
                                        experience to the curriculum design process, ensuring students learn relevant, up-to-date skills.
                                    </Card.Text>
                                    
                                    <div className="mt-4 pt-3" style={{borderTop: '1px solid #f1f1f1'}}>
                                        <p className="mb-2">
                                            <i className="bi bi-envelope-fill" style={iconStyle}></i>
                                            <span style={{color: '#5c6b7a'}}>darpan@upskillit.com</span>
                                        </p>
                                        <p className="mb-2">
                                            <i className="bi bi-linkedin" style={iconStyle}></i>
                                            <span style={{color: '#5c6b7a'}}>/in/darpan-bhutada</span>
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-geo-alt-fill" style={iconStyle}></i>
                                            <span style={{color: '#5c6b7a'}}>Pune, India</span>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mission Section */}
            <section style={{padding: '80px 0', backgroundColor: '#f8fafc'}}>
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <div style={sectionTitleStyle}>
                                <h2 style={{color: '#2c3e50', fontWeight: '700', fontSize: '2.2rem'}}>Our Mission & Values</h2>
                                <div style={sectionTitleAfter}></div>
                            </div>
                            
                            <div className="p-5 rounded-3" style={{backgroundColor: '#fff', border: '1px solid #eaeaea', boxShadow: '0 10px 25px rgba(0,0,0,0.05)'}}>
                                <p className="text-center mb-4" style={{color: '#5c6b7a', lineHeight: '1.8', fontSize: '1.1rem', fontStyle: 'italic'}}>
                                    "To bridge the gap between education and employment by providing accessible, 
                                    high-quality training that not only educates but also inspires. We are committed 
                                    to shaping the next generation of IT professionals through innovative learning 
                                    experiences and career development opportunities."
                                </p>
                                
                                <Row className="mt-5">
                                    <Col md={6} className="mb-4">
                                        <div className="d-flex">
                                            <div className="me-4">
                                                <div style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e6f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                    <i className="bi bi-lightbulb-fill" style={{color: '#5c9bd1', fontSize: '1.5rem'}}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 style={{color: '#2c3e50', fontWeight: '600'}}>Innovation</h5>
                                                <p style={{color: '#5c6b7a'}}>Continuously updating our curriculum to reflect the latest industry trends and technologies.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} className="mb-4">
                                        <div className="d-flex">
                                            <div className="me-4">
                                                <div style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e6f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                    <i className="bi bi-people-fill" style={{color: '#5c9bd1', fontSize: '1.5rem'}}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 style={{color: '#2c3e50', fontWeight: '600'}}>Student Success</h5>
                                                <p style={{color: '#5c6b7a'}}>Putting our students' career growth and development at the center of everything we do.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} className="mb-4">
                                        <div className="d-flex">
                                            <div className="me-4">
                                                <div style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e6f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                    <i className="bi bi-shield-check" style={{color: '#5c9bd1', fontSize: '1.5rem'}}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 style={{color: '#2c3e50', fontWeight: '600'}}>Quality</h5>
                                                <p style={{color: '#5c6b7a'}}>Maintaining the highest standards in our training programs and mentorship.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} className="mb-4">
                                        <div className="d-flex">
                                            <div className="me-4">
                                                <div style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e6f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                    <i className="bi bi-building" style={{color: '#5c9bd1', fontSize: '1.5rem'}}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 style={{color: '#2c3e50', fontWeight: '600'}}>Industry Connection</h5>
                                                <p style={{color: '#5c6b7a'}}>Building strong relationships with IT companies to ensure relevant placement opportunities.</p>
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
            <section style={{padding: '80px 0', background: 'linear-gradient(135deg, #5c9bd1 0%, #2c6aa0 100%)', color: 'white'}}>
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 style={{fontWeight: '700', marginBottom: '1.5rem'}}>Ready to Transform Your IT Career?</h2>
                            <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9'}}>
                                Join hundreds of successful students who have launched their IT careers with UPSKILL IT
                            </p>
                            <Button 
                                variant="light" 
                                size="lg" 
                                style={{padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: '600', fontSize: '1.1rem'}}
                            >
                                Explore Our Programs
                            </Button>
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
                }

                @media (max-width: 768px) {
                    .team-card {
                        margin-bottom: 24px;
                    }
                }
                `}
            </style>
        </>
    );
};

export default Team;