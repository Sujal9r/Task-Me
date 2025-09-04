'use client'
import React from 'react'


export default function Banner() {
    return (
        <> 

        <section className="banner_style_one">
            <div className="shape_one float-bob-y" style={{ backgroundImage: "url(assets/images/icons/mouse-pointer.png)" }}></div>
            <div className="shape_two float-bob-y" style={{ backgroundImage: "url(assets/images/icons/shape_icon_1.png)" }}></div>
            <div className="container">
                <div className="banner_content">
                    <div className="tag_text"><h6>Home Decor Inspiration</h6></div>
                    <h1>Style Your Space, <br/> Love Your Home</h1>
                    <p>Discover creative ideas, expert tips, and beautiful products to transform every room into your dream space.</p>
                     <div className="subscribe-inner">
                    <form
                      action="https://formsubmit.co/sujalsukoimk5@gmail.com"
                      method="POST"
                      className="subscribe-form"
                    >
                      <input
                        type="hidden"
                        name="_subject"
                        value="🎉 New Subscriber Alert!"
                      />
                      <input type="hidden" name="_template" value="box" />
                      <input type="hidden" name="_captcha" value="false" />

                      <div className="form-group">
                        <input
                          type="email"
                          name="Subscriber's Email"
                          placeholder='Enter your email'
                          required
                        />
                        <button type="submit" className="btn_style_one">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                    <div className="income_chart float-bob-y">
                        <div className="title_box">
                            <h6>Rooms Styled</h6>
                            <div className="rate">+ 1,250</div>
                        </div>
                        <div className="percentage"><i className="fa-solid fa-arrow-trend-up"></i> +18% this year</div>
                    </div>
                    <div className="banner_image">
                        <img src="https://cdn.shopify.com/s/files/1/0277/6757/0567/files/bohome_plantry_16781704ea_480x480.jpg?v=1730884230" alt=""/>
                    </div>
                    <div className="shape_three"></div>
                    <div className="shape_four float-bob-x"><img src="https://5.imimg.com/data5/SELLER/Default/2023/11/359115058/VU/XR/AX/163874690/product-4-500x500.png" alt=""/></div>
                    <div className="shape_five rotate-me"><img src="assets/images/icons/star_icon.png" alt=""/></div>
                </div>
            </div>
        </section>

        </>
    )
}
