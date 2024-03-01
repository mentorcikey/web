import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { PiCertificate } from "react-icons/pi";

import "../../styles/course/teacher.css"

function Teacher() {

    useEffect(() => {
        Aos.init()
    })

    return (
        <section data-aos="fade-up-right" className='teacher-container'>
            <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293498/dahk3gdoo7ui0ce7qpu6.jpg" alt="TeacherImage" />
            <div>
                <h3>Tống Văn Chính</h3>
                <p>Giảng viên / Mentor khoá FULLSTACK</p>
                <ul>
                    <li><PiCertificate /><span> Founder & CEO của CIT Education</span></li>
                    <li><PiCertificate /><span> Hơn 6 năm kinh nghiệm làm FullStack Developer</span></li>
                    <li><PiCertificate /><span> Đi thực tập từ năm nhất đại học</span></li>
                    <li><PiCertificate /><span> Hơn 2 năm kinh nghiệm giảng dạy về lập trình Web</span></li>
                    <li><PiCertificate /><span>Sở hữu kênh tik tok cá nhân hơn 30k theo dõi</span></li>
                </ul>
            </div>
        </section>
    )
}

export default Teacher