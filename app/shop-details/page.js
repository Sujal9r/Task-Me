'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Shop_Details() {
    const [activeTab, setActiveTab] = useState('#tab1');
    const [subActiveTab, setsubActiveTab] = useState('#tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const handleSubTabClick = (tabId) => {
        setsubActiveTab(tabId);
    };
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle8="Product Page">
        <section className="shop-details pt_150 pb_150">
            <div className="container">
                <div className="shop-details-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="products-image-block">
                                <div className="bxbox">
                                    <div className="slider-content">
                                        <div className="image-box">
                                            <div  className={`tab ${activeTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                                <div className="image"><img src="assets/images/shop/shop_17.png" alt=""/></div>
                                            </div>
                                            <div  className={`tab ${activeTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                                <div className="image"><img src="assets/images/shop/shop_17.png" alt=""/></div>
                                            </div>
                                            <div  className={`tab ${activeTab === '#tab3' ? 'active-tab' : ''}`} id="tab3">
                                                <div className="image"><img src="assets/images/shop/shop_17.png" alt=""/></div>
                                            </div>
                                            <div  className={`tab ${activeTab === '#tab4' ? 'active-tab' : ''}`} id="tab4">
                                                <div className="image"><img src="assets/images/shop/shop_17.png" alt=""/></div>
                                            </div>
                                        </div>
                                        <div className="slider-pager">
                                            <ul className="thumb-box">
                                                <li className={`tab-btn ${activeTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab1')}><img src="assets/images/shop/shop_17-1.png" alt=""/></li>
                                                <li className={`tab-btn ${activeTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab2')}><img src="assets/images/shop/shop_17-2.png" alt=""/></li>
                                                <li className={`tab-btn ${activeTab === '#tab3' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab3')}><img src="assets/images/shop/shop_17-3.png" alt=""/></li>
                                                <li className={`tab-btn ${activeTab === '#tab4' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab4')}><img src="assets/images/shop/shop_17-4.png" alt=""/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <h3>Rapid Electric Connector</h3>
                                <div className="customer-rating">
                                    <ul className="rating">
                                        <li><i className="icon-39"></i></li>
                                        <li><i className="icon-39"></i></li>
                                        <li><i className="icon-39"></i></li>
                                        <li><i className="icon-39"></i></li>
                                        <li><i className="icon-39"></i></li>
                                    </ul>
                                    <div className="review">
                                        <Link href="/shop-details">6 Reviews</Link>
                                    </div>
                                </div>
                                <div className="price"><span>$76</span>$38</div>
                                <p className="text">Beer enthusiasts normally recommend pouring with a bit of a splash to create head. This will create foam but with large bubbles and low density we already answered question Lorem ipsum dolor sit, consectetu</p>
                                <div className="color-option">
                                    <p>Select Color:</p>
                                    <ul className="color-list">
                                        <li>
                                            <div className="check-box">
                                                <input className="check" type="checkbox" id="checkbox1"/>
                                                <label for="checkbox1"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box">
                                                <input className="check" type="checkbox" id="checkbox2"/>
                                                <label for="checkbox2"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box">
                                                <input className="check" type="checkbox" id="checkbox3"/>
                                                <label for="checkbox3"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box">
                                                <input className="check" type="checkbox" id="checkbox4"/>
                                                <label for="checkbox4"></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box">
                                                <input className="check" type="checkbox" id="checkbox5"/>
                                                <label for="checkbox5"></label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="addto-cart-box">
                                    <li className="item-quantity"><input className="quantity-spinner" type="number" name="quantity"/></li>
                                    <li className="like-box"><Link href="/shop-details" className=""><i className="far fa-heart"></i></Link></li>
                                    <li><button type="button" className="btn_style_one"><span>Add To Cart</span></button></li>
                                </ul>
                                <div className="other-option mb_30">
                                    <ul className="list">
                                        <li><span>SKU :</span> KE-91039</li>
                                        <li><span>Category :</span> Kitchen</li>
                                        <li><span>Tags :</span> Beer, Foamer</li>
                                    </ul>
                                </div>
                                <ul className="social-link">
                                    <li><span>Share This:</span></li>
                                    <li><Link href="/shop-details"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/shop-details"><i className="fab fa-pinterest-p"></i></Link></li>
                                    <li><Link href="/shop-details"><i className="fab fa-twitter"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-discription p_relative d_block mb_140">
                    <div className="tabs-box">
                        <div className="tab-btn-box p_relative d_block">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li className={`tab-btn-2 ${subActiveTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab1')}>Description</li>
                                <li className={`tab-btn-2 ${subActiveTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab2')}>Reviews (1)</li>
                            </ul>
                        </div>
                        <div className="tabs-content">
                            <div  className={`tab-2 tab ${subActiveTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                <div className="content-box">
                                    <p>Beer enthusiasts normally recommend pouring with a bit of a splash to create head. This will create foam but with large bubbles and low density we already answered question Lorem ipsum dolor sit, consectetu Dicta sunt explicabo. Nemo ipsui enim ipsamo voluptatem quia voluptas sit aspernatur auton lorem ipsumo that Check our docs toots see if we've already answered question Lorem ipsum dolor sit, consectetur adipiscing elit. Cursus ornare non non massa elit rutrum. Erosie proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse faucibus ac volutpati mattis tortor nec. Orc velit a, posuere turpis amet. Lectus lacus lectusio habitasse amet quam libero, and lorem. Volutpat odio maecenas viverra consequat condimentum diam donectoi aliquet. Natoque quam id vitae leo risus. Eget neque proin in dolor cursus bibendum urna dictum.</p>
                                    <p>Dicta sunt explicabo. Nemo ipsui enim ipsamo voluptatem quia voluptas sit aspernatur auton lorem ipsumo that Check our docs toots see if we've already answered question Lorem ipsum dolor sit, consectetur adipiscing elit. Cursus ornare non non massa elit rutrum. Erosie proin nibh neque interdum accumsan</p>
                                </div>
                            </div>
                            <div  className={`tab-2 tab ${subActiveTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                <div className="customer-inner">
                                    <div className="customer-review">
                                        <h4>Chicken & vegetable fry</h4>
                                        <div className="comment-box">
                                            <figure className="comment-thumb"><img src="assets/images/shop/comment-1.jpg" alt=""/></figure>
                                            <div className="comment-info">
                                                <h5>Keanu Reeves<span> - May 1, 2021</span></h5>
                                                <ul className="rating">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="far fa-star"></i></li>
                                                </ul>
                                                <div className="text">
                                                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa  qui officia deserunt mollit anim  est laborum. Sed perspiciatis unde omnis natus error sit voluptatem accusa dolore mque laudant totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi arch tecto beatae vitae dicta.</p>
                                                </div>
                                            </div>                                    
                                        </div>
                                    </div>
                                    <div className="customer-comments">
                                        <h4>Be First to Add a Review</h4>
                                        <div className="rating-box">
                                            <h6>Your Rating</h6>
                                            <ul className="rating">
                                                <li><i className="far fa-star"></i></li>
                                                <li><i className="far fa-star"></i></li>
                                                <li><i className="far fa-star"></i></li>
                                                <li><i className="far fa-star"></i></li>
                                                <li><i className="far fa-star"></i></li>
                                            </ul>
                                        </div>
                                        <form action="/shop-details" method="post" className="comment-form default-form">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Your Review</label>
                                                    <textarea name="message"></textarea>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Your Name</label>
                                                    <input type="text" name="name" required=""/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Your Email</label>
                                                    <input type="email" name="email" required=""/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button type="submit" className="btn_style_one">Submit Your Review</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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