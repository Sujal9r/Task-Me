'use client'
import React from 'react'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
export default function Service_Details() {

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
        <Layout headerStyle={4} footerStyle={1}>
        <section className="service_page_banner">
            <div className="container">
                <div className="banner_content centred">
                    <div className="tag_text"><h6>Service Details</h6></div>
                    <h1>Advance Banking Service</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <div className="banner_image">
                        <img src="assets/images/resource/services_details_image.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section className="service_details_page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <h2 className="service_details_title">The Specialists</h2>
                        <div className="service_details_text">
                            <p>We partner closely with the most progressive companies in the world to improve their customer support operations. As consumers, we all have our own version of that one call to customer support.Upgrade to a seamless user experience that delivers a 360-degree view of house hold accounts for the advisor and client and support more collaborate engagements.</p>
                            <p>We partner closely with the most progressive companies in the world to improve their customer support operations. As consumers, we all have our own version of that one call to customer support.</p>
                        </div>                
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <h2 className="service_details_title">The Outcomes</h2>
                        <div className="service_details_text">
                            <p>We partner closely with the most progressive companies in the world to improve their customer support operations. As consumers, we all have our own version of that one call to customer support.Upgrade to a seamless user experience that delivers a 360-degree view of house hold accounts for the advisor and client and support more collaborate engagements.</p>
                            <p>We partner closely with the most progressive companies in the world to improve their customer support operations. As consumers, we all have our own version of that one call to customer support.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="feature_section inner_page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className="feature_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="tag_icon">
                                <i className="icon-49"></i>
                            </div>
                            <h3>Secure Retirement</h3>
                            <p>Want to feel more confident about financial future? Our range of annuity strategies can help.</p>
                            <div className="chart_box">
                                <img src="assets/images/resource/chart_2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-12">
                        <div className="feature_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="tag_icon">
                                <i className="icon-48"></i>
                            </div>
                            <h3>Invest with Protential</h3>
                            <p>FlexGuard includes a Performance Lock feature which gives clients the flexibility End Date for your Future.</p>
                            <div className="chart_box">
                                <img src="assets/images/resource/chart_3.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="feature_section_two home_four">
            <div className="circle_one rotate-me"></div>
            <div className="circle_two rotate-me"></div>
            <div className="container">
                <div className="row">            
                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className="feature_content_block" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="section_title">
                                <div className="tag_text"><h6>Features</h6></div>
                                <h2>The Specialists in fund administration</h2>
                            </div>
                            <ul className="accordion_box">
                                <li className="accordion block">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>                        
                                        <h4>1.     Improve operational performance</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>More than of the public reviews by our users mention amazing and super fast customer support as one of our</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>                        
                                        <h4>2.     Focus on core competencies</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>More than of the public reviews by our users mention amazing and super fast customer support as one of our</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block active-block">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>                        
                                        <h4>3.     Go to market quickly</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>More than of the public reviews by our users mention amazing and super fast customer support as one of our</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 offset-xl-1">
                        <div className="feature_image_block" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                            <div className="icon_box_one float-bob-y"><i className="icon-44"></i></div>
                            <div className="icon_box_two float-bob-y"><i className="icon-29"></i></div>
                            <div className="feture_image">
                                <img src="assets/images/resource/feature_image_2.jpg" alt=""/>
                            </div>                    
                            <div className="chart_image_five float-bob-x">
                                <img src="assets/images/resource/chart_5.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="work_process_section pb_100">
            <div className="container">        
                <div className="section_title centred">
                    <div className="tag_text"><h6>Wosrk Process</h6></div>
                    <h2>How it works</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="process_block_one centred" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="process_icon">
                                <i className="icon-35"></i>
                            </div>
                            <h4>Step 1: Create Account</h4>
                            <p>Easily create your Zaplin account with one click and get 100 Million Tokens</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="process_block_one centred shape_image" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="process_icon">
                                <i className="icon-36"></i>
                            </div>
                            <h4>Step 2: Type Contex</h4>
                            <p>Easily create your Zaplin account with one click and get 100 Million Tokens</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="process_block_one centred" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="process_icon">
                                <i className="icon-37"></i>
                            </div>
                            <h4>Step 3: Get Images</h4>
                            <p>Easily create your Zaplin account with one click and get 100 Million Tokens</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="cta_section" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="cta_inner">
                    <h3>Subscribe for latest update <br/> about Finance</h3>
                    <div className="subscribe-inner">
                        <form action="/contact" method="post" className="subscribe-form">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Enter your email"/>
                                <a href="/trial" className="btn_style_one">Get Started</a>
                            </div>
                        </form>
                    </div>
                    <div className="cta_shape float-bob-y"><img src="assets/images/icons/shape_icon_3.png" alt=""/></div>
                    <div className="cta_image">
                        <figure>
                            <img src="assets/images/resource/cta_image.png" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="faq_section inner_page pt_150" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-12">
                        <div className="section_title">
                            <div className="tag_text"><h6> FAQ</h6></div>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="col-xl-8 col-md-12">
                        <div className="inner_box">
                            <ul className="accordion_box">
                                <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>                       
                                        <h4>1.     How To Cancel Chase Card?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block active-block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                    <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>                        
                                        <h4>2.     What is GlobalWebPay Alternative?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                                    <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>                        
                                        <h4>3.     What are BIC and SWIFT codes?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                                    <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}>                        
                                        <h4>4.     Explaining what Britain's exit from the EU means?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                                    <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(8)}>                        
                                        <h4>5.     What is Gross Domestic Product or GDP?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    </div>
    )
}