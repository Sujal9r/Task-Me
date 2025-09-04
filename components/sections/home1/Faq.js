'use client'
import React from 'react'
import { useState } from "react"


export default function Faq() {
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
        <> 

        <section className="faq_section" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="section_title centred">
                    <div className="tag_text"><h6>General FAQ</h6></div>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="inner_box">
                    <ul className="accordion_box">
                        <li className="accordion block">
                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>                        
                                <h4>1. How do I start a home decor project?</h4>
                                <div className="icon-box"></div>
                            </div>
                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                <div className="text">
                                    <p>Simply contact us and share your vision, style preferences, and the spaces you want to transform. Our team will guide you through every step.</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>                        
                                <h4>2. Can I get help with DIY decor ideas?</h4>
                                <div className="icon-box"></div>
                            </div>
                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                <div className="text">
                                    <p>Yes! We offer creative DIY decor guidance and project support to help you personalize your space with easy, stylish solutions.</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>                        
                                <h4>3. Do you provide eco-friendly decor options?</h4>
                                <div className="icon-box"></div>
                            </div>
                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                <div className="text">
                                    <p>Absolutely! We use sustainable materials and offer eco-friendly decor choices for a healthier home and planet.</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>                        
                                <h4>4. Can you help organize and declutter my home?</h4>
                                <div className="icon-box"></div>
                            </div>
                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                <div className="text">
                                    <p>Yes, our team specializes in stylish organization and storage solutions to help you declutter and maximize your space.</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>                        
                                <h4>5. What is included in your room makeover service?</h4>
                                <div className="icon-box"></div>
                            </div>
                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                <div className="text">
                                    <p>Our room makeover includes expert styling, color selection, furniture arrangement, and decor recommendations tailored to your taste and needs.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        </>
    )
}
