import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


import '../styles/home/header.css';
import Backdrop from './home/Backdrop';
import FormRegister from "./FormRegister"

const Header = () => {

    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(false);
    const [router, setRouter] = useState("/");
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const openSidebar = () => {
        setShowSidebar(true);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    }

    const handleOpenForm = () => {
        setShowForm(true);
        document.body.style.overflow = 'hidden'
    }

    useEffect(() => {
        setRouter(location.pathname)
        setShowSidebar(false);
    }, [location.pathname])

    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = showSidebar ? 'hidden' : 'auto';
        };

        handleBodyOverflow();

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showSidebar]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsHeaderSticky(scrollPosition > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header id="header" className={`header ${isHeaderSticky ? 'header-sticky' : ''}`}>

                <div className="header-logo">
                    {
                        isHeaderSticky ? <Link to="/">  <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293496/l3krbskypt1lqhhyplz6.png" alt="LogoCITEducationSticky" /></Link> : <Link to="/">  <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293496/mhqptvrdpduaiaw59vup.png" alt="logoCITEducation" /></Link>
                    }
                </div>
                <nav className={showSidebar ? 'show' : ''}>
                    <div className='iconClose'>
                        <IoClose onClick={closeSidebar} />
                    </div>
                    <ul className='header-navlinks'>
                        <li><Link to="/" className={router === "/" ? "focus" : ""}>Trang chủ</Link></li>
                        <li><Link to="/course" className={router === "/course" ? "focus" : ""}>Khoá học nổi bật</Link></li>
                        <li><Link to="/about-us" className={router === "/about-us" ? "focus" : ""}>Về chúng tôi</Link></li>
                        <li><Link to="/contact" className={router === "/contact" ? "focus" : ""}>Liên hệ</Link></li>
                    </ul>
                    {
                        showSidebar ? <>
                            <div className="header-social-icon">
                                <h2>Theo dõi chúng tôi</h2>
                                <div>
                                    <a href="https://www.facebook.com/citeducation3105" target='blank'><img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293163/okjccnwwe3bz7iudur4d.png" alt="FacebookIcon" /></a>
                                    <a href="https://www.tiktok.com/@cit_education3105" target='blank'><img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293164/lg1sxto9uzwpisl55hcs.png" alt="TiktokIcon" /></a>
                                    <a href="https://www.youtube.com/@citedu_digital_youtube" target='blank'><img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293164/rd8bkwug6rodn3xf5mww.png" alt="YoutubeIcon" /></a>
                                </div>
                            </div>
                            <div className="header-text">
                                <p>Với sứ mệnh mang đến những nguồn kiến thức chuẩn chỉnh, bài bản, chất lượng để chắp cánh cho khát vọng, tương lai của các bạn trẻ học sinh, sinh viên Việt Nam trong ngành CNTT chúng tôi cam kết rằng sẽ mang đến những khoá học chất lượng với học phí phải chăng để bất kì đối tượng nào cũng có thể tham gia và tiếp cận với ngành CNTT
                                </p>
                            </div>
                            <div className="header-copyright-text">
                                <p>Copyright &copy; 2023, All Right Reserved <a href="#home">CIT Education</a></p>
                            </div>
                        </>
                            : ""
                    }
                </nav>

                <div className="mobile-menu-icon" onClick={openSidebar}>
                    <FaBars size={30} />
                </div>
                <p onClick={handleOpenForm} className="header-button">Tư vấn khoá học</p>
            </header>
            <Backdrop show={showSidebar} onClick={closeSidebar} />
            <div className={showForm ? 'backdropFormRegister' : ""}>
                {
                    showForm ? <FormRegister setShowForm={setShowForm} /> : ''
                }
            </div>
        </>
    );
}

export default Header;