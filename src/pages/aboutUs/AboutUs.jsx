import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaBrain } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { GiStrong } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import Aos from "aos"
import "aos/dist/aos.css"

import "./index.css"
import FrequentlyAskedQuestions from "../../components/course/FrequentlyAskedQuestions"

const coreValues = [
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709292621/ogdoup8yfthpax5jplic.jpg",
        title: "SÁNG TẠO",
        icon: <FaBrain />,
        content: "Tại CIT Eduaction, chúng tôi khuyến khích mọi người vượt ra ngoài vùng an toàn của mình để thử nghiệm những ý tưởng mới, dù là khác biệt và chưa từng có tiền lệ. Chúng tôi không ngừng cải tiến sản phẩm và dịch vụ để mang lại giá trị tốt nhất cho học viên, đối tác, nhà đầu tư và cộng đồng"
    },
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709292622/tkteztxgw77xhb7unkvp.jpg",
        title: "CHÍNH TRỰC",
        icon: <FaFlag />,
        content: "Chúng tôi đặt ra những chuẩn mực cao nhất về đạo đức, sự minh bạch và trung thực. Chúng tôi cũng đề cao việc giữ lời hứa và tuân thủ các quy tắc đạo đức trong mọi hoàn cảnh"
    },
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709292622/iykpb5zuvjjdgsr8pouc.jpg",
        title: "KIÊN TRƯỜNG",
        icon: <GiStrong />,
        content: "Chúng tôi không dễ dàng từ bỏ và khuất phục trước các thử thách, khó khăn. Mọi thành quả đều phải đánh đổi bằng sự hi sinh, kiên nhẫn, và vô số lần thất bại"
    },
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709292622/zvuutajchi22a9pjrmvv.jpg",
        title: "TƯ DUY CHIẾN THẮNG",
        icon: <FaMedal />,
        content: "Chúng tôi bước vào mọi thử thách với tinh thần chiến đấu mạnh mẽ. Chúng tôi trân trọng những giấc mơ, mục tiêu cao cả, những con người giàu ý chí nghị lực và luôn khao khát chiến thắng"
    }
];

const outstandingMarks = [
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709292622/h9vhqpcgzxmwztoskmji.jpg",
        title: "Traning 1-1",
        content: "Với việc được đào tạo trực tiếp 1-1 cùng chuyên gia trong ngành, sẽ giúp khả năng coding và tư duy của học viên tiến bộ bứt phá một cách rõ dệt"
    },
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709292623/f9pbxa3uzq7b3kuujatr.jpg",
        title: "Thực chiến dự án",
        content: "Việc học viên được tiếp xúc với dự án thực tế sẽ giúp học viên có cái nhìn chân thực hơn về kiến thức được học cũng như tăng khả năng tư duy và phân tích cho học viên"
    },
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709292623/arqklnnjcsxip8qdzkvd.jpg",
        title: "Hướng dẫn học viên viết CV",
        content: "Sau khi hoàn thành khoá học, giảng viên sẽ hướng dẫn học viên viết CV chuẩn chỉnh, ấn tượng dựa vào những kiến thức, kĩ năng, dự án mà học viên được trung tâm đào tạo để thu hút nhà tuyển dụng"
    },
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709292623/bxikpxl9jadszjr7hzqs.jpg",
        title: "Phỏng vấn học viên sau khi tốt nghiệp",
        content: "CIT Education luôn luôn đặt vấn đề trải nghiệm của học viên tại trung tâm lên hàng đầu, dù là cảm nhận tốt hay xấu CIT Education đều vui vẻ đón nhận để từ đó góp phần xây dựng khoá học càng ngày càng chất lượng"
    }
];

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
}


function AboutUs() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [indexImg, setIndexImg] = useState(0)

    const handleAccordionOpen = (index) => {
        setIndexImg(index)
        setActiveIndex((prevIndex) => {
            return prevIndex === index ? -1 : index
        });
    };

    useEffect(() => {
        Aos.init()
    })

    return (
        <div className="aboutUs-container">
            <div className='aboutUs-ourStory'>
                <h1 data-aos='fade-right'>Câu chuyện của chúng tôi</h1>
                <div className='aboutUs-ourStory-content'>
                    <div data-aos='fade-right'><p></p>
                        <p>Được sáng lập bởi CEO Tống Văn Chính một người có hơn 6 năm kinh nghiệm trong nghề chính vì thế CIT Education rất hiểu và biết được là những kiến thức và yếu tố nào sẽ giúp các bạn trẻ thành công trong lĩnh vực công nghệ tin
                        </p>
                        <p>Khởi đầu từ một văn phỏng nhỏ chưa đến 15m2 nhưng với ý chí và khát vọng được truyền tải những kiến thức chuẩn chỉnh và bài bản đến các bạn trẻ đam mê với lập trình, CIT Education đã vươn lên và giúp cho hàng trăm học viên có việc làm tại các công ty phần mềm
                        </p>
                        <p>Tại CIT Education, chúng tôi tận tâm thực hiện sứ mệnh cung cấp các khóa học chất lượng cao với mức giá hợp lý, nhằm hỗ trợ các bạn trẻ phát triển sự nghiệp trong lĩnh vực Công nghệ Thông tin (IT). Chúng tôi tự hào là một trung tâm đào tạo hàng đầu về mảng lập trình Web, luôn cam kết mang lại những trải nghiệm học tập đáng nhớ và giá trị thực sự cho học viên
                        </p>
                    </div>
                    <img data-aos='fade-left' src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709292218/kalh9uf4rda2ys45s0m7.jpg" alt="AboutUsImage" />
                </div>
            </div>
            <div className='aboutUs-missionVision'>
                <div data-aos='fade-up' className='aboutUs-mission'>
                    <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709292622/ui1pr8zrqgxu8wmkt66i.jpg" alt="AboutUsImage" />
                    <div className='aboutUs-mission-content'>
                        <h1>Sứ mệnh</h1>
                        <p>Tạo ra những "silicon valley" thu nhỏ khắp mọi nơi trên đất nước Việt Nam, nuôi dưỡng và kết nối những thế hệ chuyên gia công nghệ, nhà sáng lập các công ty khởi nghiệp để tạo nên 1 thế giới tốt đẹp hơn</p>
                    </div>
                </div>
                <div data-aos='fade-down' className='aboutUs-vision'>
                    <div className='aboutUs-vision-content'>
                        <h1>Tầm nhìn</h1>
                        <p>Tạo nên một thế giới trong đó mỗi cá nhân có khả năng tận dụng công nghệ để phát triển bản thân và đóng góp vào sự tiến bộ của xã hội</p>
                    </div>
                    <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709292622/d8zqbwsfcrgntiulrvhn.jpg" alt="AboutUsImage" />
                </div>
            </div>
            <div className='aboutUs-coreValues'>
                <h1 data-aos='fade-right'>Giá trị cốt lõi</h1>
                <div className='aboutUs-coreValues-content'>
                    <div data-aos='fade-left' className='aboutUs-coreValues-image'>
                        {coreValues.map((item, index) => (
                            <img
                                key={index}
                                src={item.imagePath}
                                className={`img${index + 1}`}
                                alt={`img ${index + 1}`}
                                style={{
                                    transition: 'all 0.3s linear',
                                    opacity: activeIndex === index || indexImg === index ? 1 : 0,
                                    display: activeIndex === index || indexImg === index ? 'block' : 'none',
                                }}
                            />
                        ))}
                    </div>
                    <div data-aos='fade-right' className='aboutUs-coreValues-accordion'>
                        {coreValues.map((item, index) => (
                            <Accordion
                                key={index}
                                expanded={index === activeIndex ? true : false}
                                onChange={() => handleAccordionOpen(index)}
                                style={{
                                    boxShadow: activeIndex === index ? "1px 3px 10px rgba(0, 0, 0, 0.3)" : ""
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`"panel${index}-content"`}
                                    id={`"panel${index}-header"`}
                                    style={{
                                        color: activeIndex === index ? "#1F409A" : "",
                                    }}
                                >
                                    <span>  {item.icon}</span>
                                    <span>  {item.title}</span>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{item.content}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
            <div className='aboutUs-outstandingMarks'>
                <h1 data-aos='fade-right' className='aboutUs-outstandingMarks-title'>Những dấu ấn nổi bật</h1>
                <div data-aos='fade-up'>
                    <Slider {...settings} className='aboutUs-outstandingMarks-content'>
                        {
                            outstandingMarks.map((item, index) => (
                                <>
                                    <div className='aboutUs-outstandingMarks-image'>
                                        <img src={item.imagePath} alt="outstandingMarksImage" />
                                    </div>
                                    <div className='aboutUs-outstandingMarks-slideContent'>
                                        <h1>{item.title}</h1>
                                        <p>{item.content}</p>
                                    </div>
                                </>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <FrequentlyAskedQuestions />
        </div>
    )
}

export default AboutUs