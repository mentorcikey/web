import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Aos from "aos"
import "aos/dist/aos.css"

import FrequentlyAskedQuestions from "../../components/course/FrequentlyAskedQuestions"
import "./index.css"

function ContactPage() {

    const schema = yup.object().shape({
        name: yup.string().required('Vui lòng nhập tên'),
        phone: yup.string().trim().matches(/^\d{10}$/, "Số điện thoại không hợp lệ").required('Vui lòng nhập số điện thoại'),
        email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        text: yup.string().required('Vui lòng nhập lời nhắn')
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = function (data) {

        const value = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            text: data.text,
            from_message: "thông tin liên hệ từ trang web",
            message: "Giữ an toàn thông tin của khách hàng"
        }

        emailjs.send('service_245azxe', 'template_4kap7e8', value, 'UAJz1vNL2J3mPYYMJ')
            .then(() => {
                toast.success('Gửi thông tin thành công', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }, () => {
                toast.error('Gửi thông tin thất bạt, vui lòng thử lại', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });

        reset()
    }

    useEffect(() => {
        Aos.init()
    })

    return (

        <>
            <div className='contactPage-container'>
                <h1 data-aos='fade-right'>Liên hệ với chúng tôi</h1>
                <div className='contactPage-container-info'>
                    <div data-aos='fade-right' className='contactPage-container-title'>
                        <h1>Văn phòng</h1>
                        <ul>
                            <li>Địa chỉ: Số nhà 18, KTT nhà hát chèo Việt Nam, Ngõ 169 Doãn Kế Thiện, Phường Mai Dịch, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</li>
                            <li>Hotline: 032.962.1710</li>
                            <li>Email: contact.citedu@gmail.com</li>
                        </ul>
                    </div>
                    <form data-aos='fade-left' onSubmit={handleSubmit(onSubmit)} className='contactPage-container-form'>
                        <h1>Gửi tin nhắn</h1>
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Họ Tên</label>
                                <input type="text" id="name"   {...register("name")} placeholder='Nhập họ và tên' />
                                <p className='message-error'>{errors.name?.message}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Số Điện Thoại Zalo</label>
                                <input type="tel" id="phone" {...register("phone")} placeholder='Nhập số điện thoại' />
                                <p className='message-error'>{errors.phone?.message}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" {...register("email")} placeholder='Nhập email ' />
                                <p className='message-error'>{errors.email?.message}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="text">Lời nhắn</label>
                                <textarea id="text" {...register("text")} placeholder='Nhập lời nhắn' />
                                <p className='message-error'>{errors.text?.message}</p>
                            </div>
                        </div>
                        <button type="submit">Gửi</button>
                    </form>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
            <FrequentlyAskedQuestions />
        </>
    )
}

export default ContactPage