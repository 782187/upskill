import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    User,
    MapPin,
    Phone,
    Briefcase,
    Users,
    Star,
    Award,
    GraduationCap,
    LightbulbIcon,
    ShieldCheck,
    BookOpen
} from "lucide-react";

const HireFromUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        jobRole: "",
        additionalInfo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            alert("Request Submitted! We'll contact you within 24 hours to discuss your hiring needs.");
            setIsSubmitting(false);
            setFormData({
                name: "",
                address: "",
                phone: "",
                jobRole: "",
                additionalInfo: ""
            });
        }, 1500);
    };

    return (
        <div className="container-fluid bg-light">
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h1 className="display-5 fw-bold mb-2 text-primary">Hire From Us</h1>
                                <p className="lead text-muted mb-4">
                                    Access top talent trained with cutting-edge skills and industry best practices.
                                </p>
                            </div>
                            <div className="card shadow-lg">
                                <div className="card-body p-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label d-flex align-items-center">
                                                <User className="me-2" size={16} />
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label d-flex align-items-center">
                                                <MapPin className="me-2" size={16} />
                                                Company Address
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                placeholder="Enter your company address"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label d-flex align-items-center">
                                                <Phone className="me-2" size={16} />
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter your phone number"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="jobRole" className="form-label d-flex align-items-center">
                                                <Briefcase className="me-2" size={16} />
                                                Job Role Hiring For
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="jobRole"
                                                name="jobRole"
                                                value={formData.jobRole}
                                                onChange={handleChange}
                                                placeholder="e.g. Frontend Developer, UX Designer"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="additionalInfo" className="form-label">
                                                Additional Requirements (Optional)
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="additionalInfo"
                                                name="additionalInfo"
                                                value={formData.additionalInfo}
                                                onChange={handleChange}
                                                placeholder="Tell us more about what you're looking for..."
                                                rows={3}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit Hiring Request"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="position-relative w-100" style={{ maxWidth: "570px",marginTop:"150px"}}>
                                <img
                                    src="/developer.gif"
                                    alt="Hiring process illustration"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-dark text-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold mb-3" style={{color:"orange"}}>Why Choose Us</h2>
                        <p className="lead text-white mx-auto" style={{ maxWidth: "800px"}}>
                            Our graduates are equipped with both theoretical knowledge and hands-on experience,
                            making them ready to contribute to your projects from day one.
                        </p>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {whyChooseUsItems.map((item, index) => (
                            <div key={index} className="col">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body p-4">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 p-3"
                                            style={{ backgroundColor: "rgba(155, 135, 245, 0.1)" }}>
                                            <item.icon size={24} style={{ color: "#9b87f5" }} />
                                        </div>
                                        <h3 className="h5 fw-bold mb-3">{item.title}</h3>
                                        <p className="card-text text-muted">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold mb-3">Our Training Resources</h2>
                        <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
                            We provide comprehensive training with state-of-the-art resources to ensure our graduates
                            exceed industry expectations and are prepared for real-world challenges.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
                                <div className="col">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body p-4">
                                            <h4 className="h5 fw-bold mb-3">Industry Expert Instructors</h4>
                                            <p className="text-muted">Our courses are taught by professionals with years of industry experience who bring real-world knowledge into the classroom.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body p-4">
                                            <h4 className="h5 fw-bold mb-3">Hands-On Project Work</h4>
                                            <p className="text-muted">Students complete multiple real-world projects that simulate actual workplace scenarios and challenges.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body p-4">
                                            <h4 className="h5 fw-bold mb-3">Career Development Support</h4>
                                            <p className="text-muted">Beyond technical skills, we provide professional development workshops, resume building, and interview preparation.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body p-4">
                                            <h4 className="h5 fw-bold mb-3">Ongoing Learning Resources</h4>
                                            <p className="text-muted">Graduates receive continued access to learning materials and resources to support their professional growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const whyChooseUsItems = [
    {
        icon: Award,
        title: "Industry-Ready Skills",
        description: "Our graduates are trained with the latest technologies and methodologies used in the industry."
    },
    {
        icon: Users,
        title: "Diverse Talent Pool",
        description: "Access professionals from various backgrounds bringing unique perspectives to your team."
    },
    {
        icon: Star,
        title: "Ongoing Support",
        description: "We provide continued mentorship to our graduates even after they join your organization."
    },
    {
        icon: GraduationCap,
        title: "Specialized Training",
        description: "Custom training programs focused on high-demand skills tailored to industry needs."
    },
    {
        icon: LightbulbIcon,
        title: "Innovative Problem-Solvers",
        description: "Graduates trained to approach challenges with creativity and analytical thinking."
    },
    {
        icon: ShieldCheck,
        title: "Quality Assurance",
        description: "Rigorous assessment ensures only the most qualified candidates complete our programs."
    },
];

export default HireFromUs;
