"use client";
import React from "react";

export default function Banner() {
  return (
    <>
      <section className="banner_style_two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="banner_content">
                <h1>
                  Task Me — Asset & Project Management Software that Accelerates Delivery
                </h1>
                <p>
                  All-in-one work management platform with Kanban boards, Scrum sprints, and list views. 
                  Organize assets, track tasks, and automate workflows like in Asana or Jira—without the complexity.
                </p>
                
                <div className="feature_list">
                  <div className="feature_item">
                    <div className="text-black">
                      <i className="fas fa-th"></i>
                    </div>
                    <span>Asset management, issue tracking, and collaboration in one place</span>
                  </div>
                  <div className="feature_item">
                    <div className="text-black">
                      <i className="fas fa-th"></i>
                    </div>
                    <span>Drag-and-drop Kanban, agile backlogs, Gantt-style timelines</span>
                  </div>
                  <div className="feature_item">
                    <div className="text-black ">
                      <i className="fas fa-th"></i>
                    </div>
                    <span>AI-powered TaskFlow suggests next steps automatically</span>
                  </div>
                </div>

                <div className="cta_buttons">
                  <a href="/trial" className="btn_primary">
                    <i className="fas fa-rocket"></i>
                    Start Free Trial
                  </a>
                  <button className="btn_secondary">
                    <i className="fas fa-play"></i>
                    Watch Demo
                  </button>
                </div>

                <div className="disclaimer_text">
                  No credit card. Setup in minutes. SEO: project management software, asset management platform, Kanban tool, Scrum software, task tracking, team collaboration.
                </div>
              </div>
            </div>
            
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="demo_form_container" data-aos="fade-left">
                <h3>See Task Me in action</h3>
                
                <form className="demo_form">
                  <div className="form_group">
                    <div className="input_icon">
                      <i className="fas fa-user"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="form_group">
                    <div className="input_icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <input
                      type="email"
                      placeholder="Work email"
                      required
                    />
                  </div>
                  
                  <div className="form_group">
                    <div className="input_icon">
                      <i className="fas fa-building"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Company"
                      required
                    />
                  </div>
                  
                  <a href="" className="btn_submit">
                    <i className="fas fa-rocket"></i>
                    Start Free Trial
                  </a>
                </form>
                
                <div className="terms_text">
                  By submitting you agree to our Terms and Privacy Policy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
