'use client'
import React from 'react'
import Link from "next/link"


export default function App() {
    return (
        <> 

        <section class="app_section home_five" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div class="container">
                <div class="app_inner_box">
                    <div class="app_outer_box">
                        <div class="shape_one float-bob-y"></div>
                        <div class="shape_two float-bob-x"></div>
                        <div class="shape_three"></div>
                        <div class="content_box">
                            <h2>Download Banking App</h2>
                            <p>Upgrade to a seamless user experience that delivers a 360-degree view of household accounts for the advisor and client and supports more collaborative engagements.</p>
                        </div>            
                        <div class="app_links">
                            <div class="apple_link"><Link href="/"><img src="assets/images/icons/apple_icon.png" alt=""/></Link></div>
                            <div class="play_link"><Link href="/"><img src="assets/images/icons/play_icon.png" alt=""/></Link></div>
                        </div>                
                    </div>
                    <div class="app_image float-bob-x"><img src="assets/images/resource/app_image.png" alt=""/></div>
                </div>        
            </div>
        </section>

        </>
    )
}
