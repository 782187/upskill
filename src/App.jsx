import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Component/ScrollToTop';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Component/Pages/Home/Home';
import About from './Component/Pages/About';
import Courses from './Component/Pages/Home/Course';
import CourseDetail from './Component/Pages/CourseDetail';
import CorporateTraining from './Component/Pages/Corporate';
import Blogs from './Component/Pages/Blog/Blog';
import Career from './Component/Pages/Career'
import Events from './Component/Pages/Events';
// import Feedback from './pages/Feedback';
import FullStackJava from './Component/Pages/Courses/FullStackJava'
import FullStackPython from './Component/Pages/Courses/FullStackPython'
import SoftwareTesting from './Component/Pages/Courses/Testing'
import WebDevelopment from './Component/Pages/Courses/WebDevelopment'

function App() {
  return (
    <>
      <Router>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/corporate-training" element={<CorporateTraining />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path='/hire' element={}/>
        <Route path='/career' element={}/> */}
          <Route path="/events" element={<Events />} />
          {/*<Route path="/feedback" element={<Feedback />} /> */}
          <Route path='/career' element={<Career />} />
          <Route path="/courses/java-full-stack" element={<FullStackJava />} />
          <Route path="/courses/python-full-stack" element={<FullStackPython />} />
          <Route path="/courses/software-testing" element={<SoftwareTesting />} />
          <Route path="/courses/web-development" element={<WebDevelopment />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
