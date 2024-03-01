import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
import { FaPhone } from 'react-icons/fa';
import { IoIosArrowDropupCircle } from "react-icons/io";
import CircularProgress from "@mui/material/CircularProgress"

import "./App.css"

import Home from './pages/home/Home.jsx';
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CoursePage from './pages/course/Course.jsx';
import ScrollToTop from "./components/ScrollToTop.js"
import ContactPage from './pages/contact/Contact.jsx';

const App = () => {
  const { scrollYProgress } = useScroll();
  const [isArrowIconSticky, setIsArrowIconSticky] = useState(false);
  const [loading, setLoading] = useState(true)

  const location = useLocation()


  const handleIconPhoneClick = () => {
    window.location.href = `tel:${+84329621710}`;
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsArrowIconSticky(scrollPosition > 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {
        loading ? <CircularProgress sx={{ display: "block", margin: "25% auto" }} /> :
          <div className='container'>
            {
              isArrowIconSticky ?
                <div onClick={scrollTop} className='arrow-icon'><IoIosArrowDropupCircle /></div> : ""
            }
            <div className='contact-container'>
              <div>
                <FaPhone className="phone-icon" onClick={handleIconPhoneClick} />
                <span>Gọi ngay</span>
              </div>
              <div>
                <a href="https://zalo.me/3631761188736786993"><img className="zalo-icon" src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293500/qqnddgop0mojxmnesatc.png" alt="ZaloIcon" /></a>
                <span>Chat ngay</span>
              </div>
            </div>
            <motion.div
              className="progress-bar"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              style={{ scaleX: scrollYProgress }}
            />
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/course" element={<CoursePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </div>
      }
    </>
  );
}

export default App;




