import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";

import "../../styles/home/courseAdvantages.css";

function CourseAdvantages() {
    useEffect(() => {
        Aos.init();
    });

    return (
        <section className="courseAdvantages-container">
            <img
                data-aos="zoom-in-left"
                src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709295939/ws9o1li4cwwz8d6mykvr.png"
                alt="CourseAdvantagesImage"
            />
            <div data-aos="zoom-in-right" className="courseAdvantages-content">
                <h1>
                    Tại sao khoá lập trình FullStack của CIT Education lại được hàng ngàn
                    học viên lựa chọn?
                </h1>
                <ul className="courseAdvantages-list">
                    <li>
                        <FaCheckCircle />{" "}
                        <p>
                            Với <span>học phí chỉ bằng 1/2 hoặc 1/3 so với thị trường</span> kèm theo chính
                            sách <span> chia nhỏ học phí lên tới 4 đợt</span> và <span>thời gian hoàn thành học
                                phí lên đến nửa năm</span>
                        </p>
                    </li>
                    <li>
                        <FaCheckCircle />{" "}
                        <p>
                            {" "}
                            CIT Education cam kết <span> liên kết học viên đến các công ty IT phần
                                mềm đối tác</span> ngay sau khi học viên hoàn thành khóa học bằng văn bản
                        </p>
                    </li>
                    <li>
                        <FaCheckCircle />{" "}
                        <p>
                            Sau đợt thực tập, học viên sẽ có cơ hội trở thành nhân viên chính
                            thức với <span>mức lương hấp dẫn, dao động từ 7-10 triệu/tháng</span>
                        </p>
                    </li>
                    <li>
                        <FaCheckCircle />{" "}
                        <p>
                            Lộ trình đào tạo từ bài bản, chi tiết từ con số 0 để <span>bất kỳ đối
                                tượng nào cũng có thể tham gia khóa học</span>
                        </p>
                    </li>
                    <li>
                        <FaCheckCircle />{" "}
                        <p>
                            Mỗi buổi học đều có <span> tài liệu và record chất lượng cao</span>. Bên cạnh đó
                            còn <span>có mentor hỗ trợ 24/7</span>, giúp học viên giải đáp mọi thắc mắc
                            trong và ngoài khoá học
                        </p>
                    </li>
                </ul>
                <h2>Đăng kí tư vấn ngay để nhận ưu đãi giảm giá lên đến 35%</h2>
                <div className="courseAdvantages-button">
                    <button>
                        <a
                            href="https://docs.google.com/spreadsheets/d/1XT4zrZMdqv1_jIq_urBNmH2WTW6SsgJXKaKYfheLU9c/edit?usp=sharing"
                            target="blank"
                        >
                            Xem lộ trình
                        </a>
                    </button>
                    <button>
                        <a href="#consultationForm">Đăng kí tư vấn miễn phí</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CourseAdvantages;
