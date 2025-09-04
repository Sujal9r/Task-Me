'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}


export default function Testimonial() {
    return (
        <> 

        <section className="testimonial_section home_four" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="shape_bg"></div>
                <div className="section_title centred">
                    <div className="tag_text"><h6>Testimonials</h6></div>
                    <h2>Love from Clients</h2>
                </div>
                <Swiper {...swiperOptions} className='three-item-carousel'>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>Our living room makeover was seamless and inspiring. The team listened to our ideas and created a space that truly feels like home!</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Aarav Sharma</h5>
                                        <span className="designation">Homeowner</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>The DIY decor guidance was fantastic! I loved how easy it was to add my own touch to every room with their creative ideas.</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Priya Verma</h5>
                                        <span className="designation">Apartment Renter</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>They helped us organize and declutter our home with stylish storage solutions. Now everything has its place and looks amazing!</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="https://i.pinimg.com/236x/b0/18/60/b018600dcb82b4062256e02225eaa0a5.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Rohan Patel</h5>
                                        <span className="designation">Busy Parent</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>The color palette suggestions were perfect for our bedroom. It feels so peaceful and inviting now!</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="https://img.freepik.com/premium-photo/portrait-documents-passport-photo-young-female-natural-look_100800-10816.jpg?w=360" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Meera Singh</h5>
                                        <span className="designation">Working Professional</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>Our balcony makeover is stunning! The outdoor styling team created a cozy space for our family to relax.</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="https://i.pinimg.com/736x/09/f1/1c/09f11c6f829f90ca888aea10430cf6ce.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Vikram Joshi</h5>
                                        <span className="designation">Retired Teacher</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>Thanks to the team, our kitchen is now organized and stylish. Cooking has become a joy!</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="https://i.pinimg.com/736x/46/88/12/468812df30ab33d9c66397e40be563af.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Anjali Desai</h5>
                                        <span className="designation">Chef</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='owl-dots-one'>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        </section>

        </>
    )
}
