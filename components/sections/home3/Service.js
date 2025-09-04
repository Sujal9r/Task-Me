'use client'
import React, { useState } from 'react'

export default function Service() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <section className="service_style_one" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
            <div className="shape_icon_nine rotate-me">
                <img src="assets/images/icons/shape_icon_9.png" alt=""/>
            </div>
            <div className="container">
                <div className="section_title centred">
                    <div className="tag_text"><h6>Our Services</h6></div>
                    <h2>Transforming Your Living Spaces</h2>
                </div>

                <div className="nav nav-tabs">
                    <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "nav-link active-btn" : "tab-btn nav-link"}>Interior Styling</div>
                    <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "nav-link active-btn" : "tab-btn nav-link"}>Modular Furniture</div>
                    <div onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "nav-link active-btn" : "tab-btn nav-link"}>Wall Decor</div>
                    <div onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "nav-link active-btn" : "tab-btn nav-link"}>Lighting Solutions</div>
                    <div onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "nav-link active-btn" : "tab-btn nav-link"}>Outdoor Living</div>
                    <div onClick={() => handleOnClick(6)} className={activeIndex === 6 ? "nav-link active-btn" : "tab-btn nav-link"}>Custom Decor Plans</div>
                </div>        

                <div className="tab-content">
                    {[
                        {
                            title: "Interior Styling",
                            img: "https://i.pinimg.com/736x/8f/dd/02/8fdd027b44929d2c9abc8f5bebd1a0e7.jpg",
                            desc: "Elevate your home’s aesthetics with modern, minimalist, or luxurious styling tailored to your taste.",
                            items: [
                                { icon: "icon-17", title: "Space Optimization", text: "Smartly utilize every inch with elegant layouts and decor pieces." },
                                { icon: "icon-18", title: "Color Harmony", text: "Curated color palettes that blend style with personality." }
                            ]
                        },
                        {
                            title: "Modular Furniture",
                            img: "https://i.pinimg.com/1200x/40/8a/dc/408adc78e46c6019981182157e4af396.jpg",
                            desc: "Smart, sleek, and modular furniture designed to adapt and beautify your living space.",
                            items: [
                                { icon: "icon-17", title: "Space-Saving Designs", text: "Foldable, movable and sleek furniture for compact spaces." },
                                { icon: "icon-18", title: "Custom Finishes", text: "Choose textures and tones that match your vibe." }
                            ]
                        },
                        {
                            title: "Wall Decor",
                            img: "https://i.pinimg.com/1200x/80/97/73/809773abf583c0f3d825130c216eadd6.jpg",
                            desc: "Add character to your walls with curated art, panels, textures, and more.",
                            items: [
                                { icon: "icon-17", title: "Statement Pieces", text: "Handpicked wall art and frames that speak your story." },
                                { icon: "icon-18", title: "Creative Textures", text: "Wood, concrete, or fabric walls for unique vibes." }
                            ]
                        },
                        {
                            title: "Lighting Solutions",
                            img: "https://i.pinimg.com/1200x/aa/9b/e1/aa9be15b8176292064298ebb19f07419.jpg",
                            desc: "Light up your home with artistic, energy-efficient, and vibe-enhancing lighting options.",
                            items: [
                                { icon: "icon-17", title: "Ambient Glow", text: "Mood lights for every corner of your home." },
                                { icon: "icon-18", title: "Modern Fixtures", text: "Chandeliers, pendants, and lamps that elevate aesthetics." }
                            ]
                        },
                        {
                            title: "Outdoor Living",
                            img: "https://i.pinimg.com/736x/fd/f1/33/fdf1330b1c693638f2364524794690e3.jpg",
                            desc: "Transform your balconies, terraces, or gardens into relaxing sanctuaries.",
                            items: [
                                { icon: "icon-17", title: "Boho Vibes", text: "Macramé, planters, and fairy lights for cozy feels." },
                                { icon: "icon-18", title: "Weather-Proof Furnishings", text: "Stylish outdoor setups that survive all seasons." }
                            ]
                        },
                        {
                            title: "Custom Decor Plans",
                            img: "https://i.pinimg.com/1200x/9a/20/c0/9a20c026f1d9eb0363fb845a6ce47dcb.jpg",
                            desc: "Get a personalized home styling plan based on your space, needs, and personality.",
                            items: [
                                { icon: "icon-17", title: "Tailored Layouts", text: "Decor blueprints designed just for your lifestyle." },
                                { icon: "icon-18", title: "Virtual Consultations", text: "Get expert help online, anytime, anywhere." }
                            ]
                        }
                    ].map((tab, i) => (
                        <div key={i} className={activeIndex === i + 1 ? "tab-pane active-tab" : "tab"}>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 content_column">
                                    <div className="content_box mr_70">
                                        <h3>{tab.title}</h3>
                                        <p>{tab.desc}</p>
                                        {tab.items.map((item, idx) => (
                                            <div className="content_item_one" key={idx}>
                                                <div className="icon_box"><i className={item.icon}></i></div>
                                                <div className="icon_content">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image_column">
                                    <figure className="image_box"><img src={tab.img} alt={tab.title} /></figure>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
