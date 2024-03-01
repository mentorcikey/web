
import React, { useEffect } from 'react';
import Slider from "react-slick";
import Aos from "aos"
import "aos/dist/aos.css"

import "../../styles/home/feedbackSlider.css"

const feedbacks = [
    {
        school: 'Sinh viên Đại học Công Nghệ - Đại học Quốc Gia',
        content: '“Mình là nữ mới đầu vào học cũng nản, phải tự học nhiều là chính, quá nhiều kiến thức mới, nhưng môi trường ở đây khá là happy, mình được làm dự án thực tế và hiện tại cũng đã có việc làm lương ổn. Nói chung ở đây mình có trải nghiệm khá ok tại CIT Education”',
        image: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293495/ogajkoxhe5hzvpyws7as.jpg",
        name: 'Hải Lý',
    },
    {
        school: 'Sinh viên Cao Đẳng FPT Polytechnic',
        content: '“Ban đầu cứ tưởng vào CIT Education học phí đắt. Nhưng quan niệm của mình đắt sắt ra miếng nên vẫn theo học, nhưng về sau nghe mọi ng review mới biết: ở các lò luyện khác thì thời lượng học ít hơn, , nếu tính chia theo số giờ học ở CIT Education rẻ hơn aptech hay funix. Và thành quả đạt được sẽ xứng đáng với những gì bỏ ra. Cảm ơn những người giảng viên và CIT Education rất nhiều”',
        image: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293494/vjkyqbsjieebavk7fzyu.jpg",
        name: 'Hoàng Lâm',
    },
    {
        school: 'Sinh viên Đại học Thương Mại',
        content: '“Mình bắt đầu tham gia khóa học tại CIT Education vào tháng 3/2023. Mình cảm thấy CIT Education là một nơi tuyệt vời cho những người mới. Sau 6 tháng bắt đầu từ con số 0 thì mình đã học hỏi thêm nhiều thứ mới đủ để có thể chuyển ngành sang lĩnh vực hoàn toàn mới. Trong lớp thì các thầy giảng dạy và truyền đạt rất hay và cuốn hút. Còn các trợ giảng luôn nhiệt tình giúp đỡ mọi lúc khi mình cần. Có thể nói đây là một trải nghiệm khá đặc biệt đối với mình. Cảm ơn CIT Education”',
        image: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293495/vdi6bkpzacki7awzyiqa.jpg",
        name: 'Toàn Vũ',
    }, {
        school: 'Sinh viên Đại học Công Nghiệp',
        content: '“Sau hơn 6 tháng học tại CIT Education, mình nhận được rất nhiều sự giúp đỡ từ mentor, đội ngũ hướng dẫn rất nhiệt tình và đặc biệt là thầy cô tại đây rất tận tâm. Tại đây là môi trường rất lý tưởng để các bạn bắt đầu một ngành mới”',
        image: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293494/vbnw6zxnkqhkepkiixuu.jpg",
        name: 'Phạm Đức',
    }, {
        school: 'Sinh viên Cao đẳng FPT Polytechnic',
        content: '“Mình tham gia khoá online Front-end trong 6 cùng CIT Education. Thầy hướng dẫn rất nhiệt tình, bài học cũng sinh động và thú vị. Đặc biệt là bạn trợ giảng rất quan tâm và chu đáo. Mình không có nền về code nên rất hay hỏi mấy câu ngớ ngẩn nhưng bạn ấy đều trả lời rất rõ ràng và chi tiết”',
        image: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293494/kzded2p5zrpvikxixyrf.jpg",
        name: 'Thái Doãn Phong',
    }, {
        school: 'Sinh viên Đại học Mỏ - Địa Chất',
        content: '“Học-code, học-code. Lắm lúc cũng oải, tụt mood khi sang module mới vì chưa quen với cách học thực chiến này. Rồi cũng dần dần vượt qua, nhờ bạn học, nhờ các giảng viên tại CIT Education. Con đường nào cũng phải trải qua chông gai!”',
        image: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293495/xenlgubsvyjwa2d4ifbt.jpg",
        name: 'Thanh Tùng',
    }, {
        school: 'Sinh viên Đại học Giao Thông Vận Tải',
        content: '“Trước khi vào CIT Education, mình là một người thánh thiện sống vui vẻ chan hòa với mọi người. Sau 6 tháng đào tạo, mình đã trở thành 1 người trầm cảm, sức khỏe suy nhược và thần kinh ko bình thường. Tuy nhiên, sau những bài học, case study, thức đêm fix bugs, thăm doanh nghiệp, các cuộc thi Hackathon ... mình đã trở thành 1 dev thực thụ. E xin cảm ơn đội ngũ giảng viên, chăm sóc học viên, giáo vụ ... đã dẫn dắt e thời gian qua.”',
        image: "https://res.cloudinary.com/dqiryahpb/image/upload/v1709293495/qdvlatc4jdjyh5xkpdmc.jpg",
        name: 'Trần Nam Tiến',
    }
];

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const FeedbackSlider = () => {

    useEffect(() => {
        Aos.init()
    })

    return (
        <section data-aos="zoom-in-up" className='feedbackContainer'>
            <h2>Feedback từ học viên đã hoàn thành khoá FullStack và có việc làm</h2>
            <Slider {...settings}>
                {
                    feedbacks.map((feedback, index) => (
                        <div key={index} className="feedback-slide">
                            <div className="feedback-info">
                                <h3>{feedback.school}</h3>
                                <p>{feedback.content}</p>
                            </div>
                            <div className="feedback-image">
                                <img src={feedback.image} alt={`Học viên ${index + 1}`} />
                                <p className="student-name">{feedback.name}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </section>
    );
};


export default FeedbackSlider;
