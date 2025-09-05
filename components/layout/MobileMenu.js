'use client'
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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

    const handleNavClick = () => {
        handleMobileMenu() 
    }

    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}>X</div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link href="/" onClick={handleNavClick} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="/Task-me.png" alt="Task Me Logo" style={{ height: '40px', width: 'auto' }} />
                                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>Task Me</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                                    <Link href="/" onClick={handleNavClick}>Home</Link>
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                                    <Link href="/features" onClick={handleNavClick}>Features</Link>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                                    <Link href="/solutions" onClick={handleNavClick}>Solutions</Link>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}>
                                    <Link href="/pricing" onClick={handleNavClick}>Pricing</Link>
                                </li>
                                <li>
                                    <Link href="/about" onClick={handleNavClick}>About</Link>
                                </li>
                                <li>
                                    <Link href="/contact" onClick={handleNavClick}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*Social Links*/}
                    <div className="contact-info">
                        {/* <h4>Contact Info</h4> */}
                        <ul>
                            {/* <li>Shop No. 30, New Aatish Market, Jaipur</li> */}
                            {/* <li>3K 9, Pawanpuri, Bikaner</li> */}
                            {/* <li><Link href="tel:+91 95875 01000">+91 95875 01000</Link></li> */}
                            {/* <li><Link href="mailto:gkhomedecorz@gmail.com">gkhomedecorz@gmail.com</Link></li> */}
                        </ul>
                    </div>
                    <ul className="social-links centred">
                        <li>
                            <Link href="https://www.linkedin.com/company/applabstools">
                                <span className="fab fa-linkedin"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/AppLabsTools">
                                <span className="fab fa-facebook-square"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/applabstools/">
                                <span className="fab fa-instagram"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="www.pinterest.com/applabstools">
                                <span className="fab fa-pinterest"></span>
                            </Link>
                        </li>
                         <li>
                            <Link href="https://www.youtube.com/@AppLabsTools">
                                <span className="fab fa-youtube"></span>
                            </Link>
                        </li>
                         <li>
                            <Link href="https://x.com/AppLabsTools">
                                <span className="fab fa-twitter"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    )
}