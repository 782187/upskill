import React, { useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import ScrollToTop from './Component/ScrollToTop';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import BlogDetail from './Component/Pages/Blog/BlogDetail';
import Home from './Component/Pages/Home/Home';
import About from './Component/Pages/About';
import Courses from './Component/Pages/Home/Course';
import Team from './Component/Pages/Team';
import CourseDetail from './Component/Pages/CourseDetail';
import CorporateTraining from './Component/Pages/Corporate';
import Blogs from './Component/Pages/Blog/Blog';
import Career from './Component/Pages/Career';
import Events from './Component/Pages/Events';
import HireFromUs from './Component/Pages/HireFromUs';
import ContactUs from './Component/Pages/ContactUs';
import Testimonials from './Component/Pages/Testimonials';
import PlacedStudents from './Component/Pages/PlacedStudents';
import TermsAndConditions from './Component/Pages/TermsAndConditions';
import Privacy from './Component/Pages/Privacy';
const API_URL = import.meta.env.VITE_API_URL;
function App() {

  useEffect(() => {
    AOS.init();
    fetch(`${API_URL}/incrementVisit`, {
      method: 'POST',
    });
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/corporate-training" element={<CorporateTraining />} />
          <Route path="/studentzone/blogs" element={<Blogs />} />
          <Route path="/studentzone/testimonials" element={<Testimonials />} />
          <Route path="/hire" element={<HireFromUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:slug" element={<Courses />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/placed" element={<PlacedStudents />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
        <Footer />
        <a
          href="https://wa.me/9970981875?text=I'm%20inquiring%20about%20the%20Website%20Design%20"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="whatsapp-icon"
          />
        </a>
      </Router>
    </>
  );
}

export default App;