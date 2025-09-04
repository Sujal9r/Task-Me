'use client'
import React from 'react'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
export default function Faq_Page() {
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
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle4="Frequently Asked Questions">
        <section class="faq_section inner_page pt_150">
            <div class="container">
                <div class="section_title centred aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                    <div class="tag_text"><h6></h6></div>
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