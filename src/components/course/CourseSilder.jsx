import React, { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/home/courseSlider.css';

const courses = [
    {
        title: 'Trở thành lập trình viên FullStack trong vòng 8 tháng',
        description: 'Học trực tuyến cùng giang viên hướng dẫn riêng cho từng học viên với giáo trình thực chiến giúp bạn phát triển sự nghiệp trong ngành Tech với mức lương khởi điểm từ 12.000.000đ        ',
        imageUrl: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293163/qascyxinj8863rctmrld.png",
    }
];

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
};

const CourseSlider = () => {

    useEffect(() => {
        Aos.init()
    })

    return (
        <Slider {...settings}>
            {courses.map((course, index) => (
                <div data-aos="zoom-in" key={index} className="course-slide">
                    <div className="course-image">
                        <img src={course.imageUrl} alt={`Khoá học ${index + 1}`} />
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CourseSlider;
