import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"



export default function Header4({ scroll, handleMobileMenu, handlePopup }) {
    
    return (
        <>

        {/* main header */}
        <header className={`header inner_page ${scroll ? "fixed-header" : ""}`}>

            <div className="main_header">
                <div className="container"> 
                    <div className="main_header_inner">
                        <div className="main_header_logo">
                            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <img src="/Task-me.png" alt="Task Me Logo" style={{ height: '40px', width: 'auto' }} />
                                    <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '600' }}>Task Me</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="main_header_menu menu_area">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <div className="menu-bar">
                                    <i className="fas fa-bars"></i>
                                </div>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="header_right_content">
                            <button className="search-toggler" onClick={handlePopup}><i className="icon-50"></i></button>
                            <div className="link-btn"><Link href="/trial" className="btn_style_one">Get Started</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="container">
                    <div className="main_header_inner">
                        <div className="main_header_logo">
                            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <img src="/Task-me.png" alt="Task Me Logo" style={{ height: '40px', width: 'auto' }} />
                                    <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '600' }}>Task Me</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="main_header_menu menu_area">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="header_right_content">
                            <button className="search-toggler" onClick={handlePopup}><i className="icon-50"></i></button>
                            <div className="link-btn"><Link href="/trial" className="btn_style_one">Get Started</Link></div>
                        </div>
                    </div>            
                </div> 
            </div>

            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>
        </>
    )
}
