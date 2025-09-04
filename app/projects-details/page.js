'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Project_Details() {

    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1}>
        <section className="project_page_banner">
            <div className="container">
                <div className="banner_content centred">
                    <div className="tag_text"><h6>Project Details</h6></div>
                    <h1>Tax Reduce for IT compnay</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <div className="banner_image">
                        <img src="assets/images/resource/banner_image_6.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section className="project_info">
            <div className="shape_image float-bob-y"><img src="assets/images/icons/shape_icon_12.png" alt=""/></div>
            <div className="container">
                <div className="project_info_outer">
                    <div className="project_info_item">
                        <span>Client Name</span>
                        <h6>Jonas Blue</h6>
                    </div>
                    <div className="project_info_item">
                        <span>Project Link</span>
                        <h6>www.example123.com</h6>
                    </div>
                    <div className="project_info_item">
                        <span>Our Role</span>
                        <h6>Finance, Corporate</h6>
                    </div>
                    <div className="project_info_item">
                        <span>Project Start</span>
                        <h6>July 15, 2023</h6>
                    </div>
                    <div className="project_info_item">
                        <span>Share</span>
                        <ul className="socials-links">
                            <li><Link href="/projects-details"><i className="icon-43"></i></Link></li>
                            <li><Link href="/projects-details"><i className="icon-42"></i></Link></li>
                            <li><Link href="/projects-details"><i className="icon-40"></i></Link></li>
                            <li><Link href="/projects-details"><i className="icon-41"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="project_details_section pb_150">    
            <div className="container">
                <h2>The Specialists</h2>
                <div className="project_details_text">
                    <p>We partner closely with the most progressive companies in the world to improve their customer support operations. As consumers, we all have our own version of that one call to customer support.Upgrade to a seamless user experience that delivers a 360-degree view of house hold accounts for the advisor and client and support more collaborate engagements.</p>
                    <p>We partner closely with the most progressive companies in the world to improve their customer support operations. As consumers, we all have our own version of that one call to customer support.</p>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="project_details_image" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <img src="assets/images/resource/project_details_image_1.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="project_details_image" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <img src="assets/images/resource/project_details_image_2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    </div>
    )
}