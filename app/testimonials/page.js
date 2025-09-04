'use client'
import React from 'react'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Video from '@/components/sections/home3/Video'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial_Page_One() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle11="Testimonials One">
        <section className="testimonial_section_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="shape_icon_12 float-bob-y"><img src="assets/images/icons/shape_icon_12.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12 content_column">
                        <div className="testimonial_content" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="550">
                            <div className="section_title">
                                <div className="tag_text"><h6>Testimonials</h6></div>
                                <h2>Love from Clients</h2>
                            </div>
                            <Swiper {...swiperOptions} className='single-item-carousel'>
                                <SwiperSlide>
                                    <div className="testimonial_block_three">
                                        <div className="inner_box">
                                            <div className="quort_icon"><i className="icon-19"></i></div>
                                            <p>The great benefit of audio is that it's the cost effective way for your brand to the create compelling content. You don't need an entire production crew and tons of expensive equipment</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_block_three">
                                        <div className="inner_box">
                                            <div className="quort_icon"><i className="icon-19"></i></div>
                                            <p>The great benefit of audio is that it's the cost effective way for your brand to the create compelling content. You don't need an entire production crew and tons of expensive equipment</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_block_three">
                                        <div className="inner_box">
                                            <div className="quort_icon"><i className="icon-19"></i></div>
                                            <p>The great benefit of audio is that it's the cost effective way for your brand to the create compelling content. You don't need an entire production crew and tons of expensive equipment</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className='nav-style-one'>
                                <div className="owl-nav">
                                    <button type="button" className="owl-prev"><span className="icon-13"></span></button>
                                    <button type="button" className="owl-next"><span className="icon-13"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12 image_column">
                        <figure className="testimonial_image float-bob-y">
                            <img src="assets/images/resource/testimonial-4.png" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>    
        </section>
        <Video/>
        <section class="faq_section inner_page pt_150">
            <div class="container">
                <div class="section_title centred aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                    <div class="tag_text"><h6>General FAQ</h6></div>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div class="inner_box">
                    <ul class="accordion_box">
                        <li class="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>                        
                                <h4>1.     How To Cancel Chase Card?</h4>
                                <div class="icon-box"></div>
                            </div>
                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                </div>
                            </div>
                        </li>
                        <li class="accordion block active-block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>                        
                                <h4>2.     What is GlobalWebPay Alternative?</h4>
                                <div class="icon-box"></div>
                            </div>
                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                </div>
                            </div>
                        </li>
                        <li class="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>                       
                                <h4>3.     What are BIC and SWIFT codes?</h4>
                                <div class="icon-box"></div>
                            </div>
                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                </div>
                            </div>
                        </li>
                        <li class="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>                        
                                <h4>4.     Explaining what Britain's exit from the EU means?</h4>
                                <div class="icon-box"></div>
                            </div>
                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                </div>
                            </div>
                        </li>
                        <li class="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>                        
                                <h4>5.     What is Gross Domestic Product or GDP?</h4>
                                <div class="icon-box"></div>
                            </div>
                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </Layout>
    </div>
    )
}