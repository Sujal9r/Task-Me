'use client'
import React from 'react'
import { useState } from "react"


export default function Feature() {
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

        <section className="feature_section_two home_four">
            <div className="circle_one"></div>
            <div className="circle_two"></div>
            <div className="container">
                <div className="row">            
                    <div className="col-xl-5 col-lg-5 col-md-12">
                        <div className="feature_content_block" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="section_title">
                                <div className="tag_text"><h6>Features</h6></div>
                                <h2>Specialists in Home Decor & Styling</h2>
                            </div>
                            <ul className="accordion_box">
                                <li className="accordion block">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>                        
                                        <h4>1. Personalized Room Makeovers</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Our experts transform any space with custom color palettes, furniture arrangements, and decor that match your style.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>                        
                                        <h4>2. DIY Decor Guidance</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Get creative with easy-to-follow DIY projects and support from our design team to personalize your home.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block active-block">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>                        
                                        <h4>3. Organization & Storage Solutions</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Declutter and organize with stylish storage ideas that maximize space and keep your home looking beautiful.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-12 offset-xl-1">
                        <div className="feature_image_block" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                            <div className="icon_box_one float-bob-y"><i className="icon-44"></i></div>
                            <div className="icon_box_two rotate-me"><i className="icon-29"></i></div>
                            <div className="feture_image">
                                <img src="https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=qw37MGIiTL_jML3_Tbm4bM-jNLCrocSWj7DanhBr_bY=" alt=""/>
                            </div>
                            <div className="chart_image_five float-bob-x">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
