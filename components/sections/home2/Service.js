'use client'
import React from 'react'
import Link from "next/link"

export default function Service() {
    return (
        <> 
        <section className="service_section_two">
            <div className="container">        
                <div className="section_title centred">
                    <h2>Why teams choose Task Me</h2>
                    <p>Powerful project management features built for speed: everything your team needs to plan sprints, track assets, and ship faster.</p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="feature_card" data-aos="fade-up" data-aos-duration="500">
                            <div className="feature_icon">
                                <i className="fas fa-th-large"></i>
                            </div>
                            <h4>Board & List Views</h4>
                            <ul className="feature_list">
                                <li>
                                    <i className="fas fa-check"></i>
                                    <span>Drag-and-drop Kanban and Scrum boards</span>
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>
                                    <span>Sortable, filterable task lists</span>
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>
                                    <span>Subtasks, dependencies, and priorities</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="feature_card" data-aos="fade-up" data-aos-duration="550">
                            <div className="feature_icon">
                                <i className="fas fa-magic"></i>
                            </div>
                            <h4>AI TaskFlow</h4>
                            <ul className="feature_list">
                                <li>
                                    <i className="fas fa-check"></i>
                                    <span>Generates next best actions automatically</span>
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>
                                    <span>Smart assignment and due date suggestions</span>
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>
                                    <span>Automations for approvals and handoffs</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="feature_card" data-aos="fade-up" data-aos-duration="600">
                            <div className="feature_icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h4>Enterprise-Ready</h4>
                            <ul className="feature_list">
                                <li>
                                    <i className="fas fa-check"></i>
                                    <span>SSO, SCIM, role-based permissions</span>
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>
                                    <span>SOC 2, GDPR-aligned data controls</span>
                                </li>
                                <li>
                                    <i className="fas fa-check"></i>
                                    <span>99.9% uptime SLA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
