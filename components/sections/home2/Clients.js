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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}


export default function Clients() {
    return (
        <> 

        <section className="clients-section">
            <div className="container">
                <Swiper {...swiperOptions} className='five-item-carousel'>
                    <SwiperSlide>
                        <div className="clients_block_one">
                            <img src="https://i.pinimg.com/736x/03/1e/47/031e47f664a18bb059192d61a0b497fa.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="clients_block_one">
                            <img src="https://i.pinimg.com/736x/c2/08/b6/c208b608cd077b234a8d10ae3c25d2e5.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="clients_block_one">
                            <img src="https://i.pinimg.com/736x/02/7f/e1/027fe19bbd0f2fe271143d2e069e3da1.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="clients_block_one">
                            <img src="https://i.pinimg.com/1200x/68/fe/2d/68fe2d56183d2bafad2162d5a0258022.jpg" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="clients_block_one">
                            <img src="" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="clients_block_one">
                            <img src="" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="clients_block_one">
                            <img src="" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="clients_block_one">
                            <img src="" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="clients_block_one">
                            <img src="" alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="clients_block_one">
                            <img src="" alt=""/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        </>
    )
}
