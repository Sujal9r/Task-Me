'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Blog_Standard() {
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle14="Blog Standard">
        <section className="blog_section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_13.jpg" alt=""/></Link></figure>
                                <div className="lower_content">                            
                                    <ul className="post-info mb_10">
                                        <li><div className="category"><span>Digital Payment</span></div></li>
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Ralph Edwards</Link></li>
                                    </ul>
                                    <h3><Link href="/blog-details">Helping people access the support they’re entitled to</Link></h3>
                                    <p>Dicta sunt explicabo. Nemo ipsui enim ipsamo voluptatem quia voluptas sit aspernatur auton lorem ipsumo that Check our docs toots see if we've already answered question</p>
                                    <div className="link_btn"><Link href="#">Discover More <i className="fa-solid fa-angle-right"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_14.jpg" alt=""/></Link></figure>
                                <div className="lower_content">                            
                                    <ul className="post-info mb_10">
                                        <li><div className="category"><span>Digital Payment</span></div></li>
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Ralph Edwards</Link></li>
                                    </ul>
                                    <h3><Link href="/blog-details">A Financial Inclusion Plan for the whole sector</Link></h3>
                                    <p>Dicta sunt explicabo. Nemo ipsui enim ipsamo voluptatem quia voluptas sit aspernatur auton lorem ipsumo that Check our docs toots see if we've already answered question</p>
                                    <div className="link_btn"><Link href="#">Discover More <i className="fa-solid fa-angle-right"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_15.jpg" alt=""/></Link></figure>
                                <div className="lower_content">                            
                                    <ul className="post-info mb_10">
                                        <li><div className="category"><span>Digital Payment</span></div></li>
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Ralph Edwards</Link></li>
                                    </ul>
                                    <h3><Link href="/blog-details">Meet Vince our Community Finance Engagement Manager</Link></h3>
                                    <p>Dicta sunt explicabo. Nemo ipsui enim ipsamo voluptatem quia voluptas sit aspernatur auton lorem ipsumo that Check our docs toots see if we've already answered question</p>
                                    <div className="link_btn"><Link href="#">Discover More <i className="fa-solid fa-angle-right"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="650">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_16.jpg" alt=""/></Link></figure>
                                <div className="lower_content">                            
                                    <ul className="post-info mb_10">
                                        <li><div className="category"><span>Digital Payment</span></div></li>
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Ralph Edwards</Link></li>
                                    </ul>
                                    <h3><Link href="/blog-details">The Voice Cloning using custom voices to user</Link></h3>
                                    <p>Dicta sunt explicabo. Nemo ipsui enim ipsamo voluptatem quia voluptas sit aspernatur auton lorem ipsumo that Check our docs toots see if we've already answered question</p>
                                    <div className="link_btn"><Link href="#">Discover More <i className="fa-solid fa-angle-right"></i></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="blog_sidebar sidebar_bg">
                            <div className="sidebar_search_box mb_60" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                                <h3 className="widget_title">Popular Tags</h3>
                                <form className="search-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Search..."/>
                                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar_categories_box mb_60" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                <h3 className="widget_title">Categories</h3>
                                <ul>
                                    <li><Link href="#">City News</Link></li>
                                    <li><Link href="#">Government</Link></li>
                                    <li><Link href="#">Development</Link></li>
                                    <li><Link href="#">Tourism</Link></li>
                                    <li><Link href="#">Culture</Link></li>
                                    <li><Link href="#">Community</Link></li>
                                </ul>
                            </div>
                            <div className="sidebar_blog_post mb_60" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="650">
                                <h3 className="widget_title">Latest News</h3>
                                <ul className="blog-post">
                                    <li>
                                        <div className="inner">
                                            <div className="img-box">
                                                <img src="assets/images/blog/blog_17.jpg" alt="Awesome Image"/>
                                                <div className="overlay-content">
                                                    <Link href="/blog-details"><i className="fa fa-link" aria-hidden="true"></i></Link>
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <h4><Link href="/blog-details">Self-Guided Driving <br/>                                            & Tours Walk</Link>
                                                </h4>
                                                <p><span className="icon-21"></span> Apr 17, 2023</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inner">
                                            <div className="img-box">
                                                <img src="assets/images/blog/blog_18.jpg" alt="Awesome Image"/>
                                                <div className="overlay-content">
                                                    <Link href="/blog-details"><i className="fa fa-link" aria-hidden="true"></i></Link>
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <h4><Link href="/blog-details">Self-Guided Driving <br/> &amp; Tours Walk</Link>
                                                </h4>
                                                <p><span className="icon-21"></span> Apr 17, 2023</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inner">
                                            <div className="img-box">
                                                <img src="assets/images/blog/blog_19.jpg" alt="Awesome Image"/>
                                                <div className="overlay-content">
                                                    <Link href="/blog-details"><i className="fa fa-link" aria-hidden="true"></i></Link>
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <h4><Link href="/blog-details">Self-Guided Driving <br/> &amp; Tours Walk</Link>
                                                </h4>
                                                <p><span className="icon-21"></span> Apr 17, 2023</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="photo_gallery_box mb_60" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                <h3 className="widget_title">Photo Gallery</h3>
                                <ul className="gallery">
                                    <li>
                                        <div className="inner">
                                            <div className="img-box">
                                                <img src="assets/images/gallery/photo-gallery-img-1.jpg" alt="Awesome Image"/>
                                                <div className="overlay-content">
                                                    <a className="img-popup" data-fancybox="gallery" href="assets/images/gallery/photo-gallery-img-1.jpg">
                                                        <span className="icon-search"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="img-box">
                                                <img src="assets/images/gallery/photo-gallery-img-2.jpg" alt="Awesome Image"/>
                                                <div className="overlay-content">
                                                    <a className="img-popup" data-fancybox="gallery" href="assets/images/gallery/photo-gallery-img-2.jpg">
                                                        <span className="icon-search"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="img-box">
                                                <img src="assets/images/gallery/photo-gallery-img-3.jpg" alt="Awesome Image"/>
                                                <div className="overlay-content">
                                                    <Link className="img-popup" data-fancybox="gallery" href="assets/images/gallery/photo-gallery-img-3.jpg">
                                                        <span className="icon-search"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="img-box">
                                                <img src="assets/images/gallery/photo-gallery-img-4.jpg" alt="Awesome Image"/>
                                                <div className="overlay-content">
                                                    <a className="img-popup" data-fancybox="gallery" href="assets/images/gallery/photo-gallery-img-4.jpg">
                                                        <span className="icon-search"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="img-box">
                                                <img src="assets/images/gallery/photo-gallery-img-5.jpg" alt="Awesome Image"/>
                                                <div className="overlay-content">
                                                    <Link className="img-popup" data-fancybox="gallery" href="assets/images/gallery/photo-gallery-img-5.jpg">
                                                        <span className="icon-search"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="img-box">
                                                <img src="assets/images/gallery/photo-gallery-img-6.jpg" alt="Awesome Image"/>
                                                <div className="overlay-content">
                                                    <Link className="img-popup" data-fancybox="gallery" href="assets/images/gallery/photo-gallery-img-6.jpg">
                                                        <span className="icon-search"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar_archives_box mb_60" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="750">
                                <h3 className="widget_title">Archives</h3>
                                <ul>
                                    <li><Link href="#">July 2024</Link></li>
                                    <li><Link href="#">June 2024</Link></li>
                                    <li><Link href="#">May 2024</Link></li>
                                    <li><Link href="#">March 2024</Link></li>
                                    <li><Link href="#">February 2024</Link></li>
                                </ul>
                            </div>
                            <div className="popular_tag_box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                                <h3 className="widget_title">Popular Tags</h3>
                                <ul className="popular-tag">
                                    <li><Link href="#">Activities</Link></li>
                                    <li><Link href="#">Depertment</Link></li>
                                    <li><Link href="#">City</Link></li>
                                    <li><Link href="#">Certificate</Link></li>
                                    <li><Link href="#">Transport</Link></li>
                                    <li><Link href="#">Mayor</Link></li>
                                    <li><Link href="#">Taxes &amp; Bills</Link></li>
                                    <li><Link href="#">Food</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-wrapper" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                    <ul className="pagination">
                        <li><span className="page-numbers current">1</span></li>
                        <li><Link className="page-numbers" href="/project">2</Link></li>
                        <li><Link className="page-numbers" href="/project">3</Link></li>
                        <li><Link className="page-numbers" href="/project">...</Link></li>
                        <li><Link className="page-numbers" href="/project">8</Link></li>
                        <li><Link className="next page-numbers" href="/project"><i className="icon-34"></i></Link></li>
                    </ul>
                </div>
            </div>
        </section>
        </Layout>
    </div>
    )
}