'use client'
import React from 'react'
import Link from "next/link"


export default function Banner() {
    return (
        <> 

        <section className="banner_style_five">
            <div className="bg_layer" style={{ backgroundImage: "url(assets/images/resource/banner_image_5.jpg)" }}></div>
            <div className="container">
                <div className="banner_content" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                    <h1>We're innovators, <br/>problem solvers <br/>and partners.</h1>
                    <p>Establish your vision and value proposition and turn <br/> them into testable prototypes.</p>
                    <div className="banner_btn_area">
                        <div className="link_btn"><Link href="/trial">Get Started</Link></div>
                        <div className="banner_author_box">
                            <div className="author_image_box">
                                <div className="author_image">
                                    <img src="assets/images/author/author_1.png" alt=""/>
                                </div>
                                <div className="author_image">
                                    <img src="assets/images/author/author_2.png" alt=""/>
                                </div>
                                <div className="author_image">
                                    <img src="assets/images/author/author_3.png" alt=""/>
                                </div>
                            </div>
                            <div className="author_content">
                                <h4>4K+</h4>
                                <span>users worldwide</span>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </section>

        </>
    )
}
