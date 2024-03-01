import React from 'react';
import { useNavigate } from 'react-router-dom'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import '../styles/home/footer.css';

const Footer = () => {

    const navigate = useNavigate();

    const handleNavLink = () => {
        navigate("/course")
    }

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-content-item1">
                    <p><FaPhoneAlt /><span>Điện thoại: 032962710</span></p>
                    <p><MdEmail /><span>Email: contact.citedu@gmail.com</span></p>
                    <p><IoLocationSharp /><span>Địa chỉ: Số 18, KTT nhà hát chèo Việt Nam, 169 Doãn Kế Thiện, Mai Dịch, Cầu Giấy, Hà Nội</span></p>
                </div>
                <div className="footer-content-item2">
                    <h1>Về CIT Education</h1>
                    <ul>
                        <li onClick={() => navigate("/about-us")}>Về chúng tôi</li>
                        <li><a href="https://maps.app.goo.gl/Z3QNYQCyeQm7Eutw9" target='blank'>Tra cứu địa chỉ lớp OFF</a></li>
                    </ul>
                </div>
                <div className="footer-content-item3">
                    <h1>Lộ trình học</h1>
                    <ul>
                        <li onClick={handleNavLink}>Dành cho người mới bắt đầu</li>
                        <li onClick={handleNavLink}>Dành cho người đã có nền tảng</li>
                    </ul>
                </div>
                <div className="footer-content-item4">
                    <h1>TRUNG TÂM GIÁO DỤC CÔNG NGHỆ CIT EDUCATION</h1>
                    <p>"Với sứ mệnh mang đến những nguồn kiến thức chuẩn chỉnh, bài bản, chất lượng để chắp cánh cho khát vọng, tương lai của các bạn trẻ học sinh, sinh viên Việt Nam trong ngành CNTT chúng tôi cam kết rằng sẽ mang đến những khoá học chất lượng với học phí phải chăng để bất kì đối tượng nào cũng có thể tham gia và tiếp cận với ngành CNTT"</p>
                    <p>Anh Tống Văn Chính - CEO CIT Education</p>
                </div>
            </div>
            <div className="copyright-area">
                <div className="copyright-text">
                    <p>&copy; 2024 By CIT Education - All rights reserved.</p>
                </div>
                <ul className="footer-social-icon">
                    <li><a href="https://www.facebook.com/citeducation3105" target='blank'><img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293163/okjccnwwe3bz7iudur4d.png" alt="FacebookIcon" /></a></li>
                    <li><a href="https://www.tiktok.com/@cit_education3105" target='blank'><img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293164/lg1sxto9uzwpisl55hcs.png" alt="TiktokIcon" /></a></li>
                    <li><a href="https://www.youtube.com/@citedu_digital_youtube" target='blank'><img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293164/rd8bkwug6rodn3xf5mww.png" alt="YoutubeIcon" /></a></li>
                </ul>
            </div>
        </footer >
    );
}

export default Footer;
