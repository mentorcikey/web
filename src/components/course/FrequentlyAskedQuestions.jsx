import React, { useState, useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../../styles/course/frequentlyAskedQuestions.css"

const frequentlyAskedQuestions = [
    {
        titleQuestions: "Học phí cho khoá học FullStack là bao nhiêu?",
        contentQuestions: "CIT Education luôn minh bạch và rõ ràng trong việc cung cấp thông tin về học phí của các khóa học. Các bạn có thể tham khảo chi tiết giá của mỗi khóa học qua Fanpage của CIT Education nhé!"
    },
    {
        titleQuestions: "Lộ trình học FullStack tại CIT Education như thế nào?",
        contentQuestions: "Lộ trình của khoá học FullStack của CIT Education gồm 10 module với lộ trình đào tạo từ con số 0 để bất kì đối tượng nào cũng có thể tham gia học được"
    },
    {
        titleQuestions: "CIT Education có cam kết chất lượng đầu ra không?",
        contentQuestions: "Chúng tôi cam kết đầu ra liên kết doanh nghiệp cho học viên đi thực tập ngay sau khi hoàn thành khoá học bằng văn bản"
    },
    {
        titleQuestions: "Thời gian cho một khóa học FullStack tại CIT Education là bao lâu?",
        contentQuestions: "Với việc tối ưu và chia nhỏ lộ trình học tập, thời gian cho một khóa học FullStack tại CIT Education rơi vào khoảng 6 - 8 tháng."
    },
    {
        titleQuestions: "Đăng ký học tại CIT Education như nào?",
        contentQuestions: "Bạn có thể đăng ký học bằng cách điền thông tin vào form tư vấn, đội ngũ tư vấn sẽ liên hệ với bạn trong vòng 24h hoặc liên hệ qua hotline/zalo 0329621710 của trung tâm nhé!"
    }
]

function FrequentlyAskedQuestions() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionOpen = (index) => {
        setActiveIndex((prevIndex) => {
            return prevIndex === index ? -1 : index
        });
    };

    useEffect(() => {
        Aos.init()
    })

    return (
        <section className='frequentlyAskedQuestions-container'>
            <h1>
                Câu Hỏi <span> Thường Gặp! </span>
            </h1>
            <div data-aos="zoom-in" className='frequentlyAskedQuestions-accordion'>
                {frequentlyAskedQuestions.map((item, index) => (
                    <Accordion
                        key={index}
                        expanded={index === activeIndex ? true : false}
                        onChange={() => handleAccordionOpen(index)}
                        defaultExpanded={index === 0 ? true : false}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`"panel${index}-content"`}
                            id={`"panel${index}-header"`}
                        >
                            {item.titleQuestions}
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.contentQuestions}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions