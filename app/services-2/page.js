'use client'
import React from 'react'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import Service from '@/components/sections/home1/Service'
import VideoPopup from "@/components/elements/VideoPopup"
export default function Service_Page_Two() {

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
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle2="Service We Provide">
        <section className="feature_section_two inner_page">
            <div className="star_shape rotate-me"><img src="assets/images/icons/star_icon.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="feature_image_block aos-init aos-animate" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="icon_box_one float-bob-y"><i className="icon-44"></i></div>
                            <div className="icon_box_two float-bob-y"><i className="icon-29"></i></div>
                            <div className="feture_image">
                                <img src="assets/images/resource/feature_image_1.jpg" alt=""/>
                            </div>                    
                            <div className="chart_image_five float-bob-x">
                                <img src="assets/images/resource/chart_5.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-12 offset-xl-1">
                        <div className="feature_content_block aos-init aos-animate" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
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
                                        <h4>2.    Focus on core competencies</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>More than of the public reviews by our users mention amazing and super fast customer support as one of our</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
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
                </div>
            </div>
        </section>

        <section className="funfact-section inner_page" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="funfact-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="count-outer count-box">
                                <span className="count-text"><CounterUp end={150} /></span><span>+</span>
                            </div>
                            <h6>Expert Team Members</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="funfact-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="count-outer count-box">
                                $
                                <span className="count-text">3.<CounterUp end={5} /></span><span>B+</span>
                            </div>
                            <h6>Total Assets under Manage</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="funfact-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="count-outer count-box">
                                <span className="count-text"><CounterUp end={270} /></span><span>+</span>
                            </div>
                            <h6>Project Completed</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="funfact-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                            <div className="count-outer count-box">
                                <span className="count-text"><CounterUp end={99} /></span><span>%</span>
                            </div>
                            <h6>Customer Satisfaction</h6>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
        <Service/>

        <section className="faq_section inner_page pt_150">
            <div className="shape_icon rotate-me"><img src="assets/images/icons/shape_icon_14.png" alt=""/></div>
            <div className="shape_icon_2 float-bob-y"><img src="assets/images/icons/shape_icon_12.png" alt=""/></div>
            <div className="container">
                <div className="row">            
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="inner_box mr_30" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="section_title">
                                <div className="tag_text"><h6> FAQ</h6></div>
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <ul className="accordion_box">
                                <li className="accordion block">
                                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>                        
                                        <h4>1. How To Cancel Chase Card?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>                        
                                        <h4>2. What is GlobalWebPay Alternative?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>                        
                                        <h4>3. What are BIC and SWIFT codes?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}>                        
                                        <h4>4. Explaining what Britain's exit from the EU means?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(8)}>                        
                                        <h4>5. What is Gross Domestic Product or GDP?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="video_box ml_30" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500" style={{ backgroundImage: "url(assets/images/background/video_box_bg_3.jpg)" }}>
                            <VideoPopup />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    </div>
    )
}