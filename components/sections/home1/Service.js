'use client'
import React from 'react'
import Link from "next/link"


export default function Service() {
    return (
        <> 

        <section className="service_section">
            <div className="circle_one"></div>
            <div className="circle_two"></div>    
            <div className="container">        
                <div className="section_title light centred">
                    <div className="tag_text"><h6>Services</h6></div>
                    <h2>Quality Home Decor Services</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="300">
                            <div className="service_icon">
                                <i className="icon-33"></i>
                            </div>
                            <h4><Link href="#">Room Makeovers</Link></h4>
                            <p>Transform any room with expert styling, and furniture arrangement for a fresh</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="service_icon">
                                <i className="icon-32"></i>
                            </div>
                            <h4><Link href="#">DIY Decor Guidance</Link></h4>
                            <p>Get creative with easy-to-follow DIY decor ideas and personalized project support from our team.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="service_icon">
                                <i className="icon-31"></i>
                            </div>
                            <h4><Link href="#">Organization & Storage</Link></h4>
                            <p>Declutter your home with storage solutions to your space.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                            <div className="service_icon">
                                <i className="icon-30"></i>
                            </div>
                            <h4><Link href="#">Outdoor Styling</Link></h4>
                            <p>Create inviting patios, balconies, and gardens with our outdoor decor and styling expertise.</p>
                        </div>
                    </div>
                </div>
                <h1 className="section_tag">Services</h1>
            </div>
        </section>
        </>
    )
}
