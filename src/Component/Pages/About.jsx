import { useEffect } from "react";
import { Book, BookOpen, Users } from "lucide-react";
import EnquiryForm from "./Home/EnquiryForm";

const AboutUs = () => {
    return (
        <div className="overflow-x-hidden">
            <section
                className="text-white bg-cover bg-center d-flex align-items-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80')",
                    height: "50vh",
                }}
            >
                <div className="container text-center">
                    <h1 className="display-3 fw-bold mb-4">
                        Welcome to <span style={{ color: "#F97316" }}>Upskill Institute</span>
                    </h1>
                    <p className="lead mb-4">
                        At Upskill Institute, we are dedicated to transforming individuals into skilled IT professionals ready to excel in the dynamic world of technology. Our institute offers comprehensive training programs and placement services designed to bridge the gap between academic knowledge and industry demands.
                    </p>
                    <a href="#mission" className="btn btn-warning fw-semibold px-4 py-2">
                        Explore Our Journey
                    </a>
                </div>
            </section>

            <section id="mission" className="py-5 px-4 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="d-flex flex-column align-items-start mb-4">
                                <div className="bg-indigo-100 p-4 rounded-circle mb-3">
                                    <Book className="h-8 w-8 text-indigo-600" />
                                </div>
                                <h2 className="h2 mb-3" style={{ color: "#F97316" }}>Our Mission</h2>
                                <div className="w-20 h-1 bg-indigo-600 mb-4"></div>
                                <p className="lead text-dark mb-4">
                                    At Upskill Institute, we are dedicated to transforming individuals into skilled IT professionals ready to excel in the dynamic world of technology. Our institute offers comprehensive training programs and placement services designed to bridge the gap between academic knowledge and industry demands.
                                </p>
                                <p className="text-muted mb-4">
                                    We constantly update our curriculum to reflect the latest industry requirements...
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <EnquiryForm />
                        </div>
                    </div>
                </div>
            </section>

            <section id="vision" className="py-5 px-4 bg-dark text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
                                alt="Vision Image"
                                className="img-fluid rounded"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column align-items-start mb-4">
                                <div className="bg-purple-100 p-4 rounded-circle mb-3">
                                    <BookOpen className="h-8 w-8 text-purple-600" />
                                </div>
                                <h2 className="h2 mb-3" style={{ color: "#60A5FA" }}>Our Vision</h2>
                                <div className="w-20 h-1 bg-purple-600 mb-4"></div>
                                <p className="lead text-white mb-4">
                                    We envision a future where every student has the opportunity to achieve their full potential in the IT field. By fostering a culture of continuous learning and innovation, we aim to be a leading institution that produces highly competent and industry-ready professionals.
                                </p>
                                <p className="text-muted mb-4">
                                    Our vision is to set global standards in IT education...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="offerings" className="py-5 px-4 bg-light">
                <div className="container">
                    <div className="text-center mb-4">
                        <div className="bg-indigo-100 p-4 rounded-circle inline-flex mb-3">
                            <Users className="h-8 w-8 text-indigo-600" />
                        </div>
                        <h2 className="h2 mb-3" style={{ color: "#F97316" }}>What We Offer</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
                        <p className="lead text-dark mx-auto mb-4" style={{ maxWidth: '700px' }}>
                            Our comprehensive offerings are designed to provide you with all the tools, knowledge, and support to succeed in the IT industry.
                        </p>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card p-4 h-100 shadow-sm border-0">
                                <h4 className="text-dark mb-3 text-center">Comprehensive Training Programs</h4>
                                <ul className="text-muted ps-3">
                                    <li><strong>Programming Languages:</strong> Master languages such as Java, Python and more.</li>
                                    <li><strong>Web Development:</strong> Learn HTML, CSS, JavaScript, and modern frameworks.</li>
                                    <li><strong>Database Management:</strong> Gain expertise in SQL, NoSQL, and database design.</li>
                                    <li><strong>Software Development:</strong> Understand the software development lifecycle and methodologies.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-4 h-100 shadow-sm border-0">
                                <h4 className="text-dark mb-3 text-center">Hands-on Experience</h4>
                                <ul className="text-muted ps-3">
                                    <li><strong>Real-world Projects:</strong> Work on live projects to apply theoretical knowledge.</li>
                                    <li><strong>Internships:</strong> Gain practical experience through internships with leading companies.</li>
                                    <li><strong>Workshops and Seminars:</strong> Participate in industry-relevant workshops and seminars.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-4 h-100 shadow-sm border-0">
                                <h4 className="text-dark mb-3 text-center">Placement Services</h4>
                                <ul className="text-muted ps-3">
                                    <li><strong>Career Counseling:</strong> Receive personalized career guidance and counseling.</li>
                                    <li><strong>Resume Building:</strong> Craft a professional resume that stands out.</li>
                                    <li><strong>Interview Preparation:</strong> Prepare for interviews with mock sessions and expert tips.</li>
                                    <li><strong>Job Placement Assistance:</strong> Connect with top companies for job placements.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card p-4 text-center h-100 shadow-sm border-0">
                                <div className="bg-indigo-100 p-4 rounded-circle mb-3 mx-auto">
                                    <Book className="h-7 w-7 text-indigo-600" />
                                </div>
                                <h3 className="h5 text-dark mb-2">Industry-Oriented Training</h3>
                                <p className="text-muted">Up-to-date, practical courses that prepare you for today's tech careers.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-4 text-center h-100 shadow-sm border-0">
                                <div className="bg-indigo-100 p-4 rounded-circle mb-3 mx-auto">
                                    <Users className="h-7 w-7 text-indigo-600" />
                                </div>
                                <h3 className="h5 text-dark mb-2">Hands-On Experience</h3>
                                <p className="text-muted">Participate in live projects, workshops, and collaborative initiatives.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-4 text-center h-100 shadow-sm border-0">
                                <div className="bg-indigo-100 p-4 rounded-circle mb-3 mx-auto">
                                    <BookOpen className="h-7 w-7 text-indigo-600" />
                                </div>
                                <h3 className="h5 text-dark mb-2">Placement Support</h3>
                                <p className="text-muted">Benefit from resume reviews, mock interviews, and job opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
