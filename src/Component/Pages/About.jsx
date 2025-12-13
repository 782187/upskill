import { Book, BookOpen, Users } from "lucide-react";
import EnquiryForm from "./Home/EnquiryForm";
import '../../Style/about.css'

const AboutUs = () => {
    return (
        <div className="overflow-x-hidden">
            <section className="bg-dark text-white py-5">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold mb-3">
                        Contact <span style={{ color: "#F97316" }}>RsSofttecs</span> IT Training & Placement
                    </h1>
                    <p className="lead mb-4">
                        Ready to start your tech career? Have questions about our courses? Reach out — we're here to guide you.
                    </p>
                    <a href="#mission" className="btn btn-warning fw-semibold px-4 py-2">
                        Explore Our Journey
                    </a>
                </div>
            </section>


            <section id="mission" className="py-5 px-3 px-md-5 bg-light">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-6">
                            <div className="d-flex flex-column align-items-start">
                                <div className="icon-box mb-3">
                                    <Book className="icon" />
                                </div>
                                <h2 className="text-orange mb-3">Our Mission</h2>
                                <div className="section-underline bg-orange mb-3"></div>
                                <p className="lead text-dark mb-3">
                                    We are dedicated to transforming individuals into skilled IT professionals with a focus on current industry needs.
                                </p>
                                <p className="text-muted">
                                    With continuous curriculum updates and experienced instructors, we ensure our students stay ahead of the tech curve.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <EnquiryForm />
                        </div>
                    </div>
                </div>
            </section>

            <section id="vision" className="py-5 px-3 px-md-5 bg-dark text-white">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-6">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
                                alt="Vision"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column align-items-start">
                                <div className="icon-box mb-3 bg-light">
                                    <BookOpen className="icon text-primary" />
                                </div>
                                <h2 className="text-primary mb-3">Our Vision</h2>
                                <div className="section-underline bg-primary mb-3"></div>
                                <p className="lead mb-3">
                                    We envision a future where every student has the opportunity to achieve their full potential in the IT field. By fostering a culture of continuous learning and innovation, we aim to be a leading institution that produces highly competent and industry-ready professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="offerings" className="py-5 px-3 px-md-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <div className="icon-box mx-auto mb-3">
                            <Users className="icon text-indigo-600" />
                        </div>
                        <h2 className="text-orange mb-3">What We Offer</h2>
                        <div className="section-underline bg-indigo-600 mx-auto mb-4"></div>
                        <p className="lead mx-auto" style={{ maxWidth: "720px" }}>
                            We provide everything you need to grow your skills and secure your future in the IT industry.
                        </p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                title: "Comprehensive Training Programs",
                                points: [
                                    "Master languages such as Java, Python and more.",
                                    "Learn HTML, CSS, JavaScript, and modern frameworks.",
                                    "Gain expertise in SQL, NoSQL, and database design.",
                                    "Understand software development lifecycle and methodologies."
                                ]
                            },
                            {
                                title: "Hands-on Experience",
                                points: [
                                    "Work on live projects to apply theoretical knowledge.",
                                    "Gain practical experience through internships.",
                                    "Participate in industry-relevant workshops and seminars."
                                ]
                            },
                            {
                                title: "Placement Services",
                                points: [
                                    "Personalized career guidance and counseling.",
                                    "Craft a standout professional resume.",
                                    "Prepare for interviews with mock sessions.",
                                    "Connect with top companies for job placements."
                                ]
                            }
                        ].map((card, i) => (
                            <div className="col-md-4" key={i}>
                                <div className="card h-100 p-4 shadow-sm border-0 hover-card">
                                    <h4 className="text-center mb-3">{card.title}</h4>
                                    <ul className="text-muted ps-3">
                                        {card.points.map((point, j) => (
                                            <li key={j}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row g-4 mt-4">
                        {[
                            {
                                icon: <Book className="icon text-indigo-600" />,
                                title: "Industry-Oriented Training",
                                desc: "Up-to-date, practical courses to launch your tech career."
                            },
                            {
                                icon: <Users className="icon text-indigo-600" />,
                                title: "Hands-On Experience",
                                desc: "Live projects and workshops to enhance your skills."
                            },
                            {
                                icon: <BookOpen className="icon text-indigo-600" />,
                                title: "Placement Support",
                                desc: "Mock interviews, resume reviews, and job connections."
                            }
                        ].map((item, i) => (
                            <div className="col-md-4" key={i}>
                                <div className="card p-4 text-center h-100 shadow-sm border-0 hover-card">
                                    <div className="icon-box mx-auto mb-3">{item.icon}</div>
                                    <h5 className="text-dark mb-2">{item.title}</h5>
                                    <p className="text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
