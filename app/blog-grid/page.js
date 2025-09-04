'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Blog_Grid() {
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle14="Decor Diaries">
        <section className="blog_section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><img src="https://i.pinimg.com/736x/9f/4c/9a/9f4c9a28326a0a7428b2b5ea131f331c.jpg" alt=""/></figure>
                                <div className="lower_content">
                                    <div className="category"><span>DIY Ideas</span></div>
                                    <h3>10 Easy DIY Decor Projects for Every Room</h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i>Ava Brooks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><img src="https://i.pinimg.com/736x/07/dd/e9/07dde97fbf745213d70dadd5d0f64a43.jpg" alt=""/></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Trends</span></div>
                                    <h3>2025 Home Decor Trends You’ll Love</h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i>Mason Lee</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><img src="https://i.pinimg.com/1200x/b5/19/cf/b519cfaf9b5fe9abcf9f292f94152b79.jpg" alt=""/></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Room Makeover</span></div>
                                    <h3>Small Living Room Makeover: Before & After</h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i>Ella Carter</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><img src="https://i.pinimg.com/736x/1d/66/45/1d6645f3a797b142c0f9869d4ada4540.jpg" alt=""/></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Color Inspiration</span></div>
                                    <h3>How to Choose the Perfect Paint Color</h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i>Liam Turner</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><img src="https://i.pinimg.com/736x/9f/a7/25/9fa725550a77a8886aa75135b93783e3.jpg" alt=""/></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Budget Decor</span></div>
                                    <h3>Stylish Decor Ideas on a Budget</h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i>Sophie Kim</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><img src="https://i.pinimg.com/736x/e2/c8/55/e2c855a82dd9e664e031f384d788c452.jpg" alt=""/></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Organization</span></div>
                                    <h3>Declutter Your Home: Storage Tips & Tricks</h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i>Noah Smith</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><img src="https://i.pinimg.com/736x/b8/15/a1/b815a12708039611310ca7b5effbf31c.jpg" alt=""/></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Outdoor Spaces</span></div>
                                    <h3>Create a Cozy Patio for Summer Evenings</h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i>Mia Johnson</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><img src="https://i.pinimg.com/736x/be/8a/76/be8a7675399e32b8c8d2a2b032c57950.jpg" alt=""/></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Lighting</span></div>
                                    <h3>Lighting Ideas to Brighten Your Home</h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i>Lucas Brown</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><img src="https://i.pinimg.com/736x/19/43/42/194342eb7204c8d005ac4259bcd33065.jpg" alt=""/></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Style Tips</span></div>
                                    <h3>Mixing Modern and Vintage Decor</h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i>Olivia Green</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    </div>
    )
}