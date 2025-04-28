import React from "react";
import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const CorporateTrainingPage = () => {
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

      {/* Hero Section */}
      <div className="min-vh-50 d-flex align-items-center justify-content-center px-4 py-4"
        style={{
          background: "linear-gradient(to right, #d0e8f4, #b3d7f1, #a0c3ea)",
          color: "#333",
        }}>
        <motion.div
          className="container text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.div className="d-flex justify-content-center gap-4 mb-3">
            <GraduationCap size={35} className="text-primary" />
            <Users size={35} className="text-warning" />
            <BriefcaseBusiness size={35} className="text-info" />
          </motion.div>
          <motion.h1 className="display-5 fw-bold mb-3">
            Empower Your Workforce with <span className="text-primary">Expert Training</span>
          </motion.h1>
          <motion.p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: "650px" }}>
            Tailored training solutions to help your team excel and meet your business goals.
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="primary" size="lg" className="px-5 py-3 rounded-pill shadow">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Corporate Training Overview + EnquiryForm */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-7">
              <h2 className="fw-bold text-primary mb-4">Corporate Training Overview</h2>
              <p className="text-muted">
                Transform your workforce with UpSkill IT Training & Placement’s comprehensive corporate training programs.
                Designed to meet the unique needs of businesses, our training solutions equip teams with essential skills
                across a range of technologies and methodologies. Whether you’re looking to enhance software development,
                data analysis, project management, or IT infrastructure, our programs offer practical, hands-on experience
                that directly translates to real-world success.
              </p>
              <p className="text-muted">
                Our expert trainers deliver industry-relevant content through engaging workshops and interactive sessions,
                ensuring your team gains actionable insights and cutting-edge knowledge. We offer flexible training options,
                including on-site, virtual, and customized solutions tailored to your company's objectives and schedule.
              </p>
              <p className="text-muted">
                At UpSkill, we focus on driving productivity, fostering innovation, and achieving measurable results. Partner
                with us to elevate your team’s skills, improve performance, and stay ahead in today’s competitive market.
                Our commitment is to empower your workforce with the tools and knowledge needed to excel and lead in their
                respective fields.
              </p>
            </div>
            <div className="col-md-5">
              <div className="p-4 shadow rounded-4 bg-light">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-6 text-primary">Corporate Training Highlights</h2>
          <div className="row g-4">
            {infoItems.map((item, i) => (
              <motion.div className="col-md-4" key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div className="card h-100 border-0 shadow p-4 rounded-4">
                  <div className="mb-3">{item.icon}</div>
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Types */}
      <div className="py-5" style={{ background: "#f7fafd" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-6 text-info">Training Types That Fit You</h2>
          <div className="row g-4">
            {trainingTypes.map((type, i) => (
              <motion.div className="col-md-4" key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <motion.div whileHover={{ scale: 1.05 }} className="card h-100 text-center shadow border-0 p-4 rounded-4">
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        className="py-5 text-white"
        style={{
          background: "linear-gradient(to bottom right, #1e3a8a, #3b82f6)",
        }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-6">Why Choose Us</h2>
          <div className="row g-4">
            {reasons.map((reason, i) => (
              <motion.div className="col-md-6" key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div
                  className="card h-100 text-white border-0"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{reason.title}</h5>
                    <p className="card-text text-white-50">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CorporateTrainingPage;
