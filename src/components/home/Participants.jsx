import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom";

import "../../styles/home/participants.css"

function Participants() {

    const navigate = useNavigate();

    useEffect(() => {
        Aos.init()
    })

    const handleNavLink = () => {
        navigate("/course")
    }

    return (
        <section className="participants-container">
            <h2>Đối tượng tham gia</h2>
            <p className='desc'>
                CIT Education chính là nơi khởi đầu cho những thành công của các kỹ sư CNTT trong tương lai,
                cung cấp và đào tạo nguồn nhân lực IT chất lượng cao cho các dự án thực tế
            </p>
            <div className="target-groups">
                <div data-aos="zoom-in-right" onClick={handleNavLink} className="target-item">
                    <div>
                        <h3>Bạn muốn được đào tạo? </h3>
                        <p>Bạn là người mới bắt đầu hoặc mong muốn được đào tạo về những kỹ năng, công nghệ mới</p>
                    </div>
                    <div className='participants-image'>
                        <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709294568/ftbavxvflva4kabxvboy.png" alt="ParticipantsImage1" />
                    </div>
                </div>
                <div data-aos="zoom-in-down" onClick={handleNavLink} className="target-item">
                    <div>
                        <h3>Bạn muốn được thực tập? </h3>
                        <p>Bạn đang tìm kiếm cơ hội thực tập với những trải nghiệm thực tế, giúp nâng cao kỹ năng chuyên môn & kỹ năng mềm, làm quen với môi trường và văn hóa doanh nghiệp</p>
                    </div>
                    <div className='participants-image'>
                        <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709292622/ui1pr8zrqgxu8wmkt66i.jpg" alt="ParticipantsImage2" />
                    </div>
                </div>
                <div data-aos="zoom-in-left" onClick={handleNavLink} className="target-item">
                    <div>
                        <h3>Bạn muốn tìm cơ hội việc làm?</h3>
                        <p>Bạn đã và đang theo đuổi ngành Công nghệ, muốn thử sức với vị trí Fresher hoặc làm việc tại dự án</p></div>
                    <div className='participants-image'>
                        <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709292622/tkteztxgw77xhb7unkvp.jpg" alt="ParticipantsImage3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Participants