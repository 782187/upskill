import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  GraduationCap,
  Users,
  BriefcaseBusiness,
  ClipboardCheck,
  PresentationIcon,
  CalendarCheck,
  School,
} from "lucide-react";
import EnquiryForm from "./Home/EnquiryForm";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CorporateTrainingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const infoItems = [
    {
      icon: <ClipboardCheck size={40} className="text-primary" />,
      title: "Customized Programs",
      description: "Training programs tailored to your company's specific needs and objectives",
    },
    {
      icon: <PresentationIcon size={40} className="text-warning" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with extensive real-world experience",
    },
    {
      icon: <CalendarCheck size={40} className="text-info" />,
      title: "Flexible Scheduling",
      description: "Training sessions that fit your team's busy schedule",
    },
  ];

  const trainingTypes = [
    {
      icon: <Users size={48} className="text-primary" />,
      title: "Online Training",
      description: "Interactive virtual sessions with real-time feedback and collaboration tools",
      features: ["Live Virtual Classrooms", "Self-Paced Modules", "Digital Resources"],
    },
    {
      icon: <School size={48} className="text-warning" />,
      title: "Onsite Training",
      description: "Hands-on training delivered at your location for maximum impact",
      features: ["Practical Workshops", "Team Building", "Customized Environment"],
    },
    {
      icon: <BriefcaseBusiness size={48} className="text-info" />,
      title: "Hybrid Training",
      description: "Best of both worlds combining online and in-person learning experiences",
      features: ["Flexible Learning", "Blended Approach", "Comprehensive Support"],
    },
  ];

  const reasons = [
    {
      title: "Industry Expertise",
      description: "Over 15 years of experience in corporate training and development",
    },
    {
      title: "Proven Results",
      description: "95% client satisfaction rate with measurable performance improvements",
    },
    {
      title: "Customized Approach",
      description: "Tailored solutions that align with your business objectives",
    },
    {
      title: "Global Reach",
      description: "Training delivered worldwide in multiple languages",
    },
  ];

  return (
    <div>
      <div
        className="min-vh-50 d-flex align-items-center justify-content-center px-4 py-4"
        style={{
          background: "linear-gradient(to right, #d0e8f4, #b3d7f1, #a0c3ea)",
          color: "#333",
        }}
        data-aos="fade-up"
      >
        <div className="container text-center py-3">
          <div className="d-flex justify-content-center gap-4 mb-3">
            <GraduationCap size={35} className="text-primary" />
            <Users size={35} className="text-warning" />
            <BriefcaseBusiness size={35} className="text-info" />
          </div>
          <h1 className="display-5 fw-bold mb-3">
            Empower Your Workforce with <span className="text-primary">Expert Training</span>
          </h1>
          <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: "650px" }}>
            Tailored training solutions to help your team excel and meet your business goals.
          </p>
          <div>
            <Button variant="primary" size="lg" className="px-5 py-3 rounded-pill shadow">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <div className="py-3 bg-white" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-7 py-5">
              <h2 className="fw-bold text-primary mb-4">Corporate Training Overview</h2>
              <p className="text-muted">
                Transform your workforce with RsSofttecs IT Training & Placement's comprehensive corporate training programs.
                Designed to meet the unique needs of businesses, our training solutions equip teams with essential skills
                across a range of technologies and methodologies. Whether you're looking to enhance software development,
                data analysis, project management, or IT infrastructure, our programs offer practical, hands-on experience
                that directly translates to real-world success.
              </p>
              <p className="text-muted">
                Our expert trainers deliver industry-relevant content through engaging workshops and interactive sessions,
                ensuring your team gains actionable insights and cutting-edge knowledge. We offer flexible training options,
                including on-site, virtual, and customized solutions tailored to your company's objectives and schedule.
              </p>
              <p className="text-muted">
                At RsSofttecs, we focus on driving productivity, fostering innovation, and achieving measurable results. Partner
                with us to elevate your teams skills, improve performance, and stay ahead in today's competitive market.
                Our commitment is to empower your workforce with the tools and knowledge needed to excel and lead in their
                respective fields.
              </p>
            </div>
            <div className="col-md-5 py-5">
              <div className="p-4 shadow rounded-4 bg-light">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3" style={{
        background: "linear-gradient(to right, #d0e8f4, #b3d7f1, #a0c3ea)",
        color: "#333",
      }} data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-6 text-primary">Corporate Training Highlights</h2>
          <div className="row py-2 g-4">
            {infoItems.map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow p-4 rounded-4">
                  <div className="mb-3">{item.icon}</div>
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-3" style={{ background: "#f7fafd" }} data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-6 text-info">Training Types That Fit You</h2>
          <div className="row g-4 py-5">
            {trainingTypes.map((type, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 text-center shadow border-0 p-4 rounded-4">
                  <div className="mb-3 d-flex justify-content-center">{type.icon}</div>
                  <h5 className="card-title fw-semibold">{type.title}</h5>
                  <p className="card-text text-muted mb-4">{type.description}</p>
                  <ul className="list-unstyled text-muted">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center justify-content-center mb-2">
                        <span className="d-inline-block bg-primary rounded-circle me-2" style={{ width: "8px", height: "8px" }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="py-5"
        style={{
          background: "linear-gradient(to right, #d0e8f4, #b3d7f1, #a0c3ea)",
          color: "#333",
        }}
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-6">Why Choose Us</h2>
          <div className="row g-4">
            {reasons.map((reason, i) => (
              <div className="col-md-6 g-3" key={i} style={{backgroundColor: 'rgba(82, 128, 255, 0.2)',border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '15px'}}>
                <div
                  className="card h-100 border-0 text-muted"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{reason.title}</h5>
                    <p className="card-text text-dark-50">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTrainingPage;
