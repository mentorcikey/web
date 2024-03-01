import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdBook } from "react-icons/io";

import "../../styles/course/courseInfo.css"

import Teacher from "./Teacher"

function CourseInfo() {

    useEffect(() => {
        Aos.init()
    })

    return (
        <section className='courseInfo-container'>
            <div className='courseInfo-content'>
                <h1>Full-Stack JavaScript Web for Beginner</h1>
                <div className='courseInfo-contact'>
                    <p>Nếu bạn muốn biết thêm thông tin về khoá học. Hãy liên hệ với chúng tôi</p>
                    <div>
                        <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293497/kz7e3yj1fnnorg3luglh.webp" alt="SaleImage" />
                        <ul>
                            <li>Email: contact.citedu@gmail.com</li>
                            <li>Zalo: 0329621710</li>
                        </ul>
                    </div>
                </div>
                <div className='courseInfo-object'>
                    <h1>Khoá học này dành cho ai?</h1>
                    <hr />
                    <ul data-aos="fade-right">
                        <li>Những người đi làm hoặc sinh viên ngành khác (Non-IT) muốn chuyển sang học CNTT để làm về IT, trở thành lập trình viên chuyên nghiệp, có thể tham gia vào các dự án phần mềm tại các doanh nghiệp hoặc tự xây dựng ứng dụng phần mềm cho mình</li>
                        <li>Sinh viên ngành CNTT hoặc các ngành khác muốn củng cố các kiến thức nền tảng về IT, phát triển tư duy lập trình, hiểu cấu trúc dữ liệu giải thuật, nắm chắc kiến thức từ cơ bản đến nâng cao về JavaScript – một trong những công nghệ lập trình phổ biến được nhiều dự án phần mềm tại các công ty sử dụng</li>
                        <li>Dành cho những ai yêu thích, đam mê và muốn tìm hiểu về lập trình, mong muốn trở thành lập trình viên Full Stack JavaScript Web chuyên nghiệp – vị trí có mức lương cao thuộc top đầu trong thị trường việc làm IT</li>
                    </ul>
                </div>
                <div className='courseInfo-why-joinCourse'>
                    <h1>Tại sao nên tham gia khoá học này?</h1>
                    <hr />
                    <ul data-aos="fade-right">
                        <li>Khoá học lập trình Web FullStack tại CIT Education với học phí chỉ bằng 1/2, 1/3 so với các trung tâm khác, bên cạnh đó còn hỗ trợ học viên chia nhỏ học phí lên đến 4 đợt và thời gian hoàn thành học phí lên đến nửa năm</li>
                        <li>Lộ trình đào tạo của CIT Education được thiết kế từ cơ bản đến nâng cao, từ lý thuyết đến thực hành để bất kì đối tượng nào cũng có thể tham gia được khoá học này</li>
                        <li>Học viên tại CIT Education được liên kết doanh nghiệp đi làm ngay sau khi hoàn thành khoá học</li>
                    </ul>
                </div>
                <div className='courseInfo-advantage'>
                    <h1>Ưu điểm của khoá học tại CIT Education</h1>
                    <hr />
                    <ul data-aos="fade-right">
                        <li><FaRegCheckCircle /><span>Cam kết đầu ra bằng văn bản</span></li>
                        <li><FaRegCheckCircle /><span>Học phí chỉ bằng 1/2, 1/3 so với các trung tâm khác </span></li>
                        <li><FaRegCheckCircle /><span>Giới thiệu việc làm tại các công ty IT phần mềm đối tác sau khi hoàn thành khóa học </span></li>
                        <li><FaRegCheckCircle /><span>Lộ trình học chi tiết, công khai rõ ràng, dự án xịn sò </span></li>
                        <li><FaRegCheckCircle /><span>Cơ hội được lên nhân viên chính thức sau đợt thực tập với mức lương từ 7-10tr / tháng </span></li>
                    </ul>
                </div>
                <div className='courseInfo-courseContent'>
                    <h1>Bạn sẽ được đào tạo về</h1>
                    <hr />
                    <ul data-aos="fade-right">
                        <li><FaRegCheckCircle /><span>HTML,CSS</span></li>
                        <li><FaRegCheckCircle /><span>Git & Github</span></li>
                        <li><FaRegCheckCircle /><span>JavaScript</span></li>
                        <li><FaRegCheckCircle /><span>TypeScript</span></li>
                        <li><FaRegCheckCircle /><span>ReactJS</span></li>
                        <li><FaRegCheckCircle /><span>NextJS</span></li>
                        <li><FaRegCheckCircle /><span>OOP</span></li>
                        <li><FaRegCheckCircle /><span>CTDL & GT</span></li>
                        <li><FaRegCheckCircle /><span>NodeJS</span></li>
                        <li><FaRegCheckCircle /><span>ExpressJS</span></li>
                        <li><FaRegCheckCircle /><span>MongoDB</span></li>
                        <li><FaRegCheckCircle /><span>MySQL</span></li>
                    </ul>
                </div>
                <div className='courseInfo-require'>
                    <h1>Yêu cầu khi tham gia khoá học</h1>
                    <hr />
                    <ul data-aos="fade-right">
                        <li>Có và biết sử dụng máy vi tính</li>
                        <li>Kỹ năng đọc, hiểu tốt</li>
                        <li>Là học sinh cấp 3 trở lên</li>
                    </ul>
                </div>
                <div className='courseInfo-teacher'>
                    <h1>Giảng viên xịn - an tâm học</h1>
                    <Teacher />
                </div>
            </div>
            <div data-aos="fade-left" className='courseInfo-card'>
                <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293163/zthgzdh7k4bpwl8uev2x.png" alt="SaleImage" />
                <div className='courseInfo-content'>
                    <div className='courseInfo-content-item'>
                        <IoMdTime />
                        <div>
                            <p>Thời lượng</p>
                            <p>192 giờ</p>
                        </div>
                    </div>
                    <div className='courseInfo-content-item'>
                        <FaRegUser />
                        <div>
                            <p>Số lượng học viên</p>
                            <p>15-20 học viên / lớp</p>
                        </div>
                    </div>
                    <div className='courseInfo-content-item'>
                        < IoLocationOutline />
                        <div>
                            <p>Hình thức học OFFLINE</p>
                            <p>Mai Dịch, Cầu Giấy, Hà Nội</p>
                        </div>
                    </div>
                    <div className='courseInfo-content-item'>
                        <IoLocationOutline />
                        <div>
                            <p>Hình thức học ONLINE</p>
                            <p>Nền tảng VooV Meeting</p>
                        </div>
                    </div>
                    <div className='courseInfo-content-item'>
                        <IoMdBook />
                        <div>
                            <p>Số lượng buổi học</p>
                            <p>3 buổi / tuần</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseInfo