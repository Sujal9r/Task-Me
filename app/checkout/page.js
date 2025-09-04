'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Checkout_Page() {
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle10="Checkout Page">
        <section className="checkout-section pt_150 pb_150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                        <div className="inner-box">
                            <div className="billing-info">
                                <h3>Billing Details</h3>
                                <form action="/checkout" method="post" className="billing-form">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <label>First Name*</label>
                                            <div className="field-input">
                                                <input type="text" name="first_name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <label>Last Name*</label>
                                            <div className="field-input">
                                                <input type="text" name="last_name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <label>Company Name*</label>
                                            <div className="field-input">
                                                <input type="text" name="company_name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <label>Email Address*</label>
                                            <div className="field-input">
                                                <input type="email" name="email"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <label>Phone Number*</label>
                                            <div className="field-input">
                                                <input type="text" name="phone"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <label>Country*</label>
                                            <div className="select-column select-box">
                                                <select>
                                                    <option selected="selected">Select Option</option>
                                                    <option>United State</option>
                                                    <option>Australia</option>
                                                    <option>Canada</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <label>Address*</label>
                                            <div className="field-input">
                                                <input type="text" name="address" className="address"/>
                                                <input type="text" name="address"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <label>Town/City*</label>
                                            <div className="field-input">
                                                <input type="text" name="town_city"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <label>State*</label>
                                            <div className="select-column select-box">
                                                <select>
                                                    <option selected="selected">Select Option</option>
                                                    <option>United State</option>
                                                    <option>Australia</option>
                                                    <option>Canada</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <label>Zip Code*</label>
                                            <div className="field-input">
                                                <input type="text" name="zip"/>
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <div className="create-acc">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input"/>
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">Create an Account?</span>
                                                    </label>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="additional-info">
                                <div className="note-book">
                                    <label>Order Notes</label>
                                    <textarea name="note_box" placeholder="Notes about your order, e.g. special notes for your delivery"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                        <div className="inner-box mb_30">
                            <div className="order-info">
                                <h3>Your Order</h3>
                                <div className="order-product">
                                    <ul className="order-list clearfix">
                                        <li className="title clearfix">
                                            <p>Product</p>
                                            <span>Total</span>
                                        </li>
                                        <li>
                                            <div className="single-box clearfix">
                                                <figure className="image-box"><img src="assets/images/shop/order-1.png" alt=""/></figure>
                                                <h6>Rapir Electric Connector x 1</h6>
                                                <span>$20.00</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-box clearfix">
                                                <figure className="image-box"><img src="assets/images/shop/order-2.png" alt=""/></figure>
                                                <h6>Fuel Container x 1</h6>
                                                <span>$20.00</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-box clearfix">
                                                <figure className="image-box"><img src="assets/images/shop/order-3.png" alt=""/></figure>
                                                <h6>Fuel Station Trigger x 1</h6>
                                                <span>$20.00</span>
                                            </div>
                                        </li>
                                        <li className="sub-total clearfix">
                                            <h6>Sub Total</h6>
                                            <span>$60.00</span>
                                        </li>
                                        <li className="order-total clearfix">
                                            <h6>Order Total</h6>
                                            <span>$60.00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="payment-info">
                                <div className="payment-inner">
                                    <div className="option-block">
                                        <div className="custom-controls-stacked">
                                            <label className="custom-control material-checkbox">
                                                <input type="checkbox" className="material-control-input"/>
                                                <span className="material-control-indicator"></span>
                                                <span className="description">Create an account?</span>
                                            </label>
                                        </div>
                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                    </div>
                                    <div className="option-block">
                                        <div className="custom-controls-stacked">
                                            <label className="custom-control material-checkbox">
                                                <input type="checkbox" className="material-control-input"/>
                                                <span className="material-control-indicator"></span>
                                                <span className="description">Paypal<a href="/checkout">What is paypal?</a></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/checkout" className="btn_style_one"><span>Place Your Order</span></Link>
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