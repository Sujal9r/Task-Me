'use client'
import React from 'react'
import Link from "next/link"


export default function Chooseus() {
    return (
        <> 

        <section className="why_choose_us">
            <div className="container">
                <div className="row why_choose_us_row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="why_choose_left" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="tag_text"><h6>Why Choose Us</h6></div>
                            <h2>Expert Home Styling & Personalized Decor</h2>
                            <p>We help you create beautiful, functional spaces that reflect your personality. Our team brings creativity, expertise, and a passion for design to every project—making your home truly yours.</p>
                            <div className="link_btn">
                                <Link href="/contact" className="btn_style_one">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="why_choose_right" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="600">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colmun">
                                    <div className="why_choose_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="choose_icon">
                                            <i className="icon-47"></i>
                                        </div>
                                        <h4>Personalized Designs</h4>
                                        <p>We tailor every decor solution to match your unique style and needs.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colmun">
                                    <div className="why_choose_block_one mt_70 mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="650">
                                        <div className="choose_icon">
                                            <i className="icon-46"></i>
                                        </div>
                                        <h4>Expert Team</h4>
                                        <p>Our designers bring years of experience and creativity to every project.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colmun">
                                    <div className="why_choose_block_one mt_-70 mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                        <div className="choose_icon">
                                            <i className="icon-45"></i>
                                        </div>
                                        <h4>Sustainable Choices</h4>
                                        <p>We use eco-friendly materials and decor for a healthier home and planet.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colmun">
                                    <div className="why_choose_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="750">
                                        <div className="choose_icon">
                                            <i className="icon-44"></i>
                                        </div>
                                        <h4>Transparent Pricing</h4>
                                        <p>Clear quotes and affordable packages—no hidden fees, just great design.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </section>

        </>
    )
}
