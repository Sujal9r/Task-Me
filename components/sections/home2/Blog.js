'use client'
import React from 'react'
import Link from "next/link"


export default function Blog() {
    return (
        <> 

        <section className="blog_section">
            <div className="container">
                <div className="section_title centred">
                    <div className="tag_text"><h6>Latest News</h6></div>
                    <h2>Latest Media Update</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><a href="/blog-details"><img src="assets/images/blog/blog_1.jpg" alt=""/></a></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Health</span></div>
                                    <h3><a href="/blog-details">Helping people access the support they’re entitled to</a></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><a href="/blog-details">Ralph Edwards</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><a href="/blog-details"><img src="assets/images/blog/blog_2.jpg" alt=""/></a></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Digital Payment</span></div>
                                    <h3><a href="/blog-details">A Financial Inclusion Plan for the whole sector</a></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i><a href="/blog-details">Theresa Webb</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><a href="/blog-details"><img src="assets/images/blog/blog_3.jpg" alt=""/></a></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Motivation</span></div>
                                    <h3><a href="/blog-details">Meet Vince our Community Finance Engagement Manager</a></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i><a href="/blog-details">Arlene McCoy</a></li>
                                    </ul>
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
