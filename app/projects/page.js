'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Project_Page() {

    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle3="Our Recent Work">
        <section className="project_section pt_150 pb_150">
            <div className="container">
                <div className="row project_row">
                    <div className="col-xl-6 col-md-6 col-sm-12 project_clomun">
                        <div className="project_single_block mb_50" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="project_single_image">
                                <Link href="/projects-details"><img src="assets/images/project/project_1.jpg" alt=""/></Link>
                            </div>
                            <div className="project_content">
                                <ul className="project_single_tag">
                                    <li><Link href="/projects-details">Banking</Link></li>
                                    <li><Link href="/projects-details">Finance</Link></li>
                                </ul>
                                <h5 className="project_single_title"><Link href="/projects-details">Corporate Banking & Tax discount</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 project_clomun">
                        <div className="project_single_block mb_50" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="project_single_image">
                                <Link href="/projects-details"><img src="assets/images/project/project_2.jpg" alt=""/></Link>
                            </div>
                            <div className="project_content">
                                <ul className="project_single_tag">
                                    <li><Link href="/projects-details">Corporate</Link></li>
                                    <li><Link href="/projects-details">Tax</Link></li>
                                </ul>
                                <h5 className="project_single_title"><Link href="/projects-details">Revenue audit for Finance Office</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 project_clomun">
                        <div className="project_single_block mb_50" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="project_single_image">
                                <Link href="/projects-details"><img src="assets/images/project/project_3.jpg" alt=""/></Link>
                            </div>
                            <div className="project_content">
                                <ul className="project_single_tag">
                                    <li><Link href="/projects-details">Corporate</Link></li>
                                    <li><Link href="/projects-details">Tax</Link></li>
                                </ul>
                                <h5 className="project_single_title"><Link href="/projects-details">Tax Reduce for IT compnay</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 project_clomun">
                        <div className="project_single_block mb_50" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="project_single_image">
                                <Link href="/projects-details"><img src="assets/images/project/project_4.jpg" alt=""/></Link>
                            </div>
                            <div className="project_content">
                                <ul className="project_single_tag">
                                    <li><Link href="/projects-details">Banking</Link></li>
                                    <li><Link href="/projects-details">Finance</Link></li>
                                </ul>
                                <h5 className="project_single_title"><Link href="/projects-details">Loan for Fijitsu Corporation</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 project_clomun">
                        <div className="project_single_block mb_50" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                            <div className="project_single_image">
                                <Link href="/projects-details"><img src="assets/images/project/project_5.jpg" alt=""/></Link>
                            </div>
                            <div className="project_content">
                                <ul className="project_single_tag">
                                    <li><Link href="/projects-details">Corporate</Link></li>
                                    <li><Link href="/projects-details">Tax</Link></li>
                                </ul>
                                <h5 className="project_single_title"><Link href="/projects-details">Income tax for individual clients</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 project_clomun">
                        <div className="project_single_block mb_50" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                            <div className="project_single_image">
                                <Link href="/projects-details"><img src="assets/images/project/project_6.jpg" alt=""/></Link>
                            </div>
                            <div className="project_content">
                                <ul className="project_single_tag">
                                    <li><Link href="/projects-details">Banking</Link></li>
                                    <li><Link href="/projects-details">Finance</Link></li>
                                </ul>
                                <h5 className="project_single_title"><Link href="/projects-details">Update analogue data to digital data</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-wrapper text-center" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                    <ul className="pagination">
                        <li><span className="page-numbers current">1</span></li>
                        <li><Link className="page-numbers" href="/projec">2</Link></li>
                        <li><Link className="page-numbers" href="/projec">3</Link></li>
                        <li><Link className="page-numbers" href="/projec">...</Link></li>
                        <li><Link className="page-numbers" href="/projec">8</Link></li>
                        <li><Link className="next page-numbers" href="/projec"><i className="icon-34"></i></Link></li>
                    </ul>
                </div>
            </div>
        </section>
        </Layout>
    </div>
    )
}