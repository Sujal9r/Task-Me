import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main_footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="footer_widget task_me_widget" data-aos="fade-up">
                  <div className="footer_logo">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img src="/Task-me.png" alt="Task Me Logo" style={{ height: '40px', width: 'auto' }} />
                      <h3 className="logo_text" style={{ margin: 0 }}>Task Me</h3>
                    </div>
                  </div>
                  <p className="company_description">
                    Project management software and asset tracking platform for modern teams. 
                    SEO: agile software, Kanban boards, Scrum tool, task tracking, collaboration software.
                  </p>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="footer_widget" data-aos="fade-up" data-aos-delay="100">
                  <h4 className="footer_widget_title">Product</h4>
                  <ul className="footer_links">
                    <li><Link href="/features">Features</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/integrations">Integrations</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="footer_widget" data-aos="fade-up" data-aos-delay="200">
                  <h4 className="footer_widget_title">Company</h4>
                  <ul className="footer_links">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li><Link href="/news">News</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="footer_widget" data-aos="fade-up" data-aos-delay="300">
                  <h4 className="footer_widget_title">Resources</h4>
                  <ul className="footer_links">
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/help">Help Center</Link></li>
                    <li><Link href="/security">Security</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="copyright">
              Copyright &copy; {new Date().getFullYear()} &nbsp;
              <Link href="/">Task Me</Link> , Inc. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
