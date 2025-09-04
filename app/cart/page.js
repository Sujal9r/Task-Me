'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Cart_Page() {
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle9="Your Cart">
        <section className="cart-section pt_150 pb_150">
            <div className="container">
                <div className="inner-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 table-column">
                            <div className="table-outer">
                                <table className="cart-table">
                                    <thead className="cart-header">
                                        <tr>
                                            <th className="prod-column">Product</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th className="price">Price</th>
                                            <th className="quantity">Quantity</th>
                                            <th>Subtotal</th>
                                        </tr>    
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="4" className="prod-column">
                                                <div className="column-box">
                                                    <div className="prod-thumb">
                                                        <img src="assets/images/shop/shop_18.png" alt=""/>
                                                        <button type="button"><i className="fa-solid fa-xmark"></i></button>
                                                    </div>
                                                    <div className="prod-title">
                                                        Rapir Electric Connector
                                                    </div>    
                                                </div>
                                            </td>
                                            <td className="price">$20.00</td>
                                            <td className="qty">
                                                <div className="item-quantity">
                                                    <input className="quantity-spinner" type="number" name="quantity"/>
                                                </div>
                                            </td>
                                            <td className="sub-total">$20.00</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4" className="prod-column">
                                                <div className="column-box">
                                                    <div className="prod-thumb">
                                                        <img src="assets/images/shop/shop_19.png" alt=""/>
                                                        <button type="button"><i className="fa-solid fa-xmark"></i></button>
                                                    </div>
                                                    <div className="prod-title">
                                                        Fuel Container
                                                    </div>    
                                                </div>
                                            </td>
                                            <td className="price">$25.00</td>
                                            <td className="qty">
                                                <div className="item-quantity">
                                                    <input className="quantity-spinner" type="number" name="quantity"/>
                                                </div>
                                            </td>
                                            <td className="sub-total">$25.00</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4" className="prod-column">
                                                <div className="column-box">
                                                    <div className="prod-thumb">
                                                        <img src="assets/images/shop/shop_20.png" alt=""/>
                                                        <button type="button"><i className="fa-solid fa-xmark"></i></button>
                                                    </div>
                                                    <div className="prod-title">
                                                        Fuel Station Trigger
                                                    </div>    
                                                </div>
                                            </td>
                                            <td className="price">$23.00</td>
                                            <td className="qty">
                                                <div className="item-quantity">
                                                    <input className="quantity-spinner" type="number" name="quantity"/>
                                                </div>
                                            </td>
                                            <td className="sub-total">$23.00</td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="othre-content">
                        <div className="coupon-box">
                            <input type="text" placeholder="Coupon code..."/>
                            <button type="button" className="btn_style_one"><span>Apply Coupon</span></button>
                        </div>
                        <div className="update-btn">
                            <button type="button" className="btn_style_two">Update Cart</button>
                        </div>
                    </div>
                    <div className="cart-total">
                        <div className="row">
                            <div className="col-xl-5 col-lg-12 col-md-12 offset-xl-7 cart-column">
                                <div className="total-cart-box">
                                    <h6>Cart Totals</h6>
                                    <ul className="list">
                                        <li>Subtotal:<span>$20.00</span></li>
                                        <li>Total:<span>$20.00</span></li>
                                    </ul>
                                    <Link href="/cart" className="btn_style_one"><span>Proceed to Checkout</span></Link>
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