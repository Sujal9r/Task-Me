'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"

export default function Team_Details() {
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle13="Team Details">
        <section className="team_details_section pt_150 pb_150">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="team_details_image">
                            <img src="assets/images/team/team-details.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                        <div className="author_content">
                            <h3 className="author_name">Brooklyn Simmons</h3>
                            <span className="author_designation">Product Designer</span>
                            <div className="author_comment">
                                <p>We partner closely with the most progressive companies in the world to improve their customer support operation. As consumers, we all have our own version of that oneer call to customer support. Of house on hold accounts for the advisor and client and support more collaborate and engagements.</p>
                                <p>We partner closely with the most progressive companies in the world to improve their customer support operation. As consumers, we all have our own version of that oneer call to customer support.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="author_information">
                            <div className="author_info_title">Information</div>
                            <div className="author_info_item">
                                <span>Location</span>
                                <h6>Dhaka, Bangladesh</h6>
                            </div>
                            <div className="author_info_item">
                                <span>Email</span>
                                <h6>brooklyn@example.com</h6>
                            </div>
                            <div className="author_info_item">
                                <span>Qualification</span>
                                <h6>Master in Computing</h6>
                            </div>
                            <div className="author_info_item">
                                <span>Gender</span>
                                <h6>Male</h6>
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