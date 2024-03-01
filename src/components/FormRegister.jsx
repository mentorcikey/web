import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react'
import { IoCloseSharp } from "react-icons/io5";

import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/home/consultationForm.css"

function FormRegister(props) {

    const { setShowForm } = props

    const schema = yup.object().shape({
        name: yup.string().required('Vui lòng nhập tên'),
        phone: yup.string().trim().matches(/^\d{10}$/, "Số điện thoại không hợp lệ").required('Vui lòng nhập số điện thoại'),
        email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        object: yup.string().oneOf(
            ['hoc-sinh-c2', 'sinh-vien-it', 'sinh-vien-trai-nganh', 'di-lam-it', 'di-lam-trai-nganh', 'khac'],
            'Vui lòng chọn một đối tượng'
        ).required('Vui lòng chọn đối tượng'),
        target: yup.string().oneOf(
            ['thuc-tap', 'doi-nganh', 'phuc-vu-dam-me', 'khac'],
            'Vui lòng chọn một mục tiêu học tập'
        ).required('Vui lòng chọn mục tiêu học tập'),
        course: yup.string().oneOf(
            ['full-stack', 'front-end', 'back-end'],
            'Vui lòng chọn một khoá học'
        ).required('Vui lòng chọn khoá học ')
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
            object: data.object,
            target: data.target,
            course: data.course,
            from_message: "học viên đăng kí từ trang web",
            message: "Giữ an toàn thông tin của khách hàng"
        }

        emailjs.send('service_245azxe', 'template_4kap7e8', value, 'UAJz1vNL2J3mPYYMJ')
            .then(() => {
                toast.success('Đặt hẹn thành công', {
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
                toast.error('Đặt hẹn thất bạt, vui lòng thử lại', {
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
        <section data-aos="fade-up" id="consultationForm" data-aos-easing="ease-out-cubic" data-aos-duration="1500" className='consultation-form-container form-register'>
            <div style={{ position: "relative" }} className='consultation-form-content'>
                <div onClick={() => {
                    setShowForm(false)
                    document.body.style.overflow = 'auto'
                }} style={{
                    position: "absolute",
                    top: "10px",
                    right: "20px",
                    color: "white",
                    cursor: "pointer"
                }}>< IoCloseSharp />
                </div>
                <div className='consultation-form-title'>
                    <h3>Đăng ký tư vấn miễn phí</h3>
                    <p>Bạn hãy để lại thông tin, CIT Edu sẽ liên hệ tư vấn cho mình sớm nha!</p>
                    <img src="https://res.cloudinary.com/dqiryahpb/image/upload/v1709293494/tqfrrorqxngkvnrz64zb.png" alt="Logo" />
                </div>
                <div className='consultation-form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Họ Tên</label>
                                <input type="text" id="name"   {...register("name")} placeholder='Tên bạn là gì?' />
                                <p className='message-error'>{errors.name?.message}</p>
                            </div>
                            <div className='consultation-form-item'>
                                <div className="form-group">
                                    <label htmlFor="phone">Số Điện Thoại Zalo</label>
                                    <input type="tel" id="phone" {...register("phone")} placeholder='Số điện thoại zalo' />
                                    <p className='message-error'>{errors.phone?.message}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" {...register("email")} placeholder='Email của bạn' />
                                    <p className='message-error'>{errors.email?.message}</p>
                                </div>
                            </div>
                            <div className='consultation-form-item'>
                                <div className="form-group">
                                    <label htmlFor="object">Bạn Là</label>
                                    <select name="object" id="object"  {...register("object")} >
                                        <option>Chọn đối tượng</option>
                                        <option value="hoc-sinh-c2">Học sinh C2, C3</option>
                                        <option value="sinh-vien-it">Sinh viên IT</option>
                                        <option value="sinh-vien-trai-nganh">Sinh viên trái ngành</option>
                                        <option value="di-lam-it">Người đi làm IT</option>
                                        <option value="di-lam-trai-nganh">Người đi làm trái ngành</option>
                                        <option value="khac">Khác ...</option>
                                    </select>
                                    <p className='message-error'>{errors.object?.message}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="target">Mục Tiêu Của Bạn</label>
                                    <select name="target" id="target" {...register("target")}>
                                        <option>Chọn mục tiêu học tập của bạn</option>
                                        <option value="thuc-tap">Đi thực tập</option>
                                        <option value="doi-nganh">Đổi ngành / chuyển nghề</option>
                                        <option value="phuc-vu-dam-me">Phục vụ đam mê</option>
                                        <option value="khac">Khác ...</option>
                                    </select>
                                    <p className='message-error'>{errors.target?.message}</p>
                                </div>
                            </div>
                            <div className="form-group form-lastChild">
                                <label htmlFor="course">Khoá học bạn đang quan tâm là</label>
                                <select name="course" id="course" {...register("course")}>
                                    <option>Chọn khoá học bạn quan tâm</option>
                                    <option value="full-stack">Lập trình Web FullStack</option>
                                    <option value="front-end">Lập trình Web Front-end</option>
                                    <option value="back-end">Lập trình Web Back-end</option>
                                </select>
                                <p className='message-error'>{errors.course?.message}</p>
                            </div>
                        </div>
                        <button type="submit">Đặt hẹn</button>
                    </form>
                </div>
            </div>
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
        </section>
    );
}

export default FormRegister;
