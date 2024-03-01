import React, { useEffect, useState } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdVpnKey } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";

import "../../styles/home/trainingPhilosophy.css"

const trainingPhilosophy = [
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293498/fewhqeqdnvnrljid2dx5.jpg",
        titlePhilosophy: "Bứt Phá",
        icon: <MdVpnKey />,
        contentPhilosophy: "Với lộ trình đào tạo được tinh gọn và được sắp xếp bài bản theo từng buổi học, từng module nhỏ sẽ giúp học viên tiếp thu kiến thức một cách thuận lợi và giúp khả năng coding của học viên tiến bộ từng ngày"
    },
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293499/z8bokujiutpzrkrnygws.jpg",
        titlePhilosophy: "Học Đi Đôi với 'Hành'",
        icon: <FaBookOpenReader />,
        contentPhilosophy: "Đối với mảng lập trình thì chỉ học lý thuyết thôi là chưa đủ để học viên tiếp thu và hiểu hết được những kiến thức lý thuyết khô khan, chính vì thế mà trong chương trình đào tạo của CIT Education luôn luôn có những buổi thực hành, bài tập, dự án sau những buổi học lý thuyết để giúp học viên hiểu rõ được toàn bộ kiến thức được dạy"
    },
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293499/lgypmkzh49h53oowwld5.jpg",
        titlePhilosophy: "Tự Học Chủ Động",
        icon: <MdVpnKey />,
        contentPhilosophy: "Một trong những tính chất để trở thành lập trình viên xịn là phải có kỹ năng tự học, tự update kiến thức hàng ngày chính vì thế từ những ngày đầu đi học CIT Education đã định hướng cho học viên những kỹ năng trên để giúp con đường phát triển sự nghiệp trong ngành IT của học viên thuận lợi nhất"
    },
    {
        imagePath: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293500/art7lxhicelxti3qu39k.jpg",
        titlePhilosophy: "Đồng Hành",
        icon: <MdVpnKey />,
        contentPhilosophy: "Các giảng viên tại CIT Education không chỉ đồng hành cùng học viên trong thời gian đào tạo của khoá học mà học viên đăng ký tại trung tâm mà còn đồng hành với học viên cả khi học viên đi thực tập và đi làm, miễn là bất cứ khi nào học viên cần thì giảng viên tại CIT Education luôn sẵn lòng để hỗ trợ"
    }
];

function TrainingPhilosophy() {

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
        <section className='trainingPhilosophy-container'>
            <h1>Triết lý đào tạo của CIT Education để hàng trăm học viên có việc làm</h1>
            <div className='trainingPhilosophy-content'>
                <div data-aos="fade-right" className='trainingPhilosophy-image'>
                    {trainingPhilosophy.map((item, index) => (
                        <img
                            key={index}
                            src={item.imagePath}
                            className={`img${index + 1}`}
                            alt={`img ${index + 1}`}
                            style={{
                                transition: 'all 0.3s',
                                opacity: activeIndex === index || indexImg === index ? 1 : 0,
                                display: activeIndex === index || indexImg === index ? 'block' : 'none',
                            }}
                        />
                    ))}
                </div>
                <div data-aos="fade-left" className='trainingPhilosophy-accordion'>
                    {trainingPhilosophy.map((item, index) => (
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
                                <span>  {item.titlePhilosophy}</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{item.contentPhilosophy}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default TrainingPhilosophy
