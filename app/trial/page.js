'use client';
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";

export default function TrialPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    password: '',
    companyName: '',
    teamSize: '',
    timezone: '',
    agreeToTerms: false,
    emailUpdates: false
  });

  const [selectedPlan, setSelectedPlan] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Handle account creation logic here
    console.log('Creating account with:', formData, selectedPlan);
  };

  const handleSignIn = () => {
    // Handle sign in redirect
    console.log('Redirecting to sign in');
  };

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1}>
        <div className="trial-onboarding">
          <div className="container">
            <div className="row">
              {/* Left Column - Create Account Form */}
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="account-form-section" data-aos="fade-right">
                  <h2 className="section-title">Create your Task Me account</h2>
                  
                  <form onSubmit={handleCreateAccount} className="account-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="workEmail">Work email</label>
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="companyName">Company name</label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="teamSize">Team size</label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select team size</option>
                          <option value="1-5">1-5 people</option>
                          <option value="6-10">6-10 people</option>
                          <option value="11-25">11-25 people</option>
                          <option value="26-50">26-50 people</option>
                          <option value="50+">50+ people</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="timezone">Time zone</label>
                      <select
                        id="timezone"
                        name="timezone"
                        value={formData.timezone}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select time zone</option>
                        <option value="UTC-8">Pacific Time (UTC-8)</option>
                        <option value="UTC-7">Mountain Time (UTC-7)</option>
                        <option value="UTC-6">Central Time (UTC-6)</option>
                        <option value="UTC-5">Eastern Time (UTC-5)</option>
                        <option value="UTC+0">UTC</option>
                        <option value="UTC+1">Central European Time (UTC+1)</option>
                        <option value="UTC+5:30">India Standard Time (UTC+5:30)</option>
                        <option value="UTC+8">China Standard Time (UTC+8)</option>
                      </select>
                    </div>

                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          required
                        />
                        <span className="checkmark"></span>
                        I agree to <a href="/terms">Terms</a>
                      </label>
                    </div>

                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="emailUpdates"
                          checked={formData.emailUpdates}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        Email me product updates
                      </label>
                    </div>

                    <div className="form-actions">
                      <button type="submit" className="btn-create-account">
                        Create account
                      </button>
                      <button type="button" className="btn-sign-in" onClick={handleSignIn}>
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column - Trial Info */}
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="trial-info-section" data-aos="fade-left">
                  {/* Step 1: Start Trial */}
                  <div className="trial-step">
                    <div className="step-indicator">Step 1 of 2</div>
                    <h2 className="trial-title">Start your 14-day free trial</h2>
                    <p className="trial-subtitle">No credit card required. Cancel anytime.</p>
                    
                    <div className="plan-selection">
                      <h3>Choose a plan for after your trial</h3>
                      
                      <div className="plan-options">
                        <div 
                          className={`plan-option ${selectedPlan === 'starter' ? 'selected' : ''}`}
                          onClick={() => handlePlanSelect('starter')}
                        >
                          <div className="plan-header">
                            <h4>Starter</h4>
                            <div className="plan-badge">Popular</div>
                          </div>
                          <p>Up to 5 users • Essential features</p>
                          <button className="btn-select-plan">Select</button>
                        </div>
                        
                        <div 
                          className={`plan-option ${selectedPlan === 'business' ? 'selected' : ''}`}
                          onClick={() => handlePlanSelect('business')}
                        >
                          <div className="plan-header">
                            <h4>Business</h4>
                          </div>
                          <p>Unlimited projects • Advanced automations</p>
                          <button className="btn-select-plan">Select</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Teams Choose */}
                  <div className="why-teams-section">
                    <h3>Why teams choose Task Me</h3>
                    <div className="features-grid">
                      <div className="feature-card">
                        <div className="feature-icon">
                          <i className="fas fa-tasks"></i>
                        </div>
                        <p>Agile project management, Kanban, Scrum</p>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">
                          <i className="fas fa-cogs"></i>
                        </div>
                        <p>Asset tracking, task automation, integrations</p>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <p>SOC2, SSO, role-based permissions</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="faq-section">
                    <h3>Frequently asked questions</h3>
                    <div className="faq-grid">
                      <div className="faq-item">
                        <h4>Do I need a credit card?</h4>
                        <p>No, you can try Task Me for 14 days without entering payment details.</p>
                      </div>
                      <div className="faq-item">
                        <h4>Is my data secure?</h4>
                        <p>We use industry best practices: encryption at rest and in transit, SSO, and audit logs.</p>
                      </div>
                      <div className="faq-item">
                        <h4>Can I change plans later?</h4>
                        <p>Yes, upgrade or downgrade anytime from your workspace settings.</p>
                      </div>
                      <div className="faq-item">
                        <h4>What happens after trial?</h4>
                        <p>Pick a plan to keep your projects active. Your data remains intact.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .trial-onboarding {
            padding: 80px 0;
            background: linear-gradient(135deg, #EDE0D3 0%, #E8D5C4 100%);
            min-height: 100vh;
          }

          .account-form-section {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(200, 141, 131, 0.15);
            border: 1px solid rgba(200, 141, 131, 0.2);
          }

          .section-title {
            font-size: 28px;
            font-weight: 700;
            color: #8B4513;
            margin-bottom: 30px;
            font-family: var(--primary-font);
          }

          .account-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .form-group label {
            font-size: 14px;
            font-weight: 600;
            color: #8B4513;
            font-family: var(--secondary-font);
          }

          .form-group input,
          .form-group select {
            padding: 12px 16px;
            border: 2px solid rgba(200, 141, 131, 0.3);
            border-radius: 12px;
            font-size: 16px;
            background: rgba(255, 255, 255, 0.9);
            transition: all 0.3s ease;
            font-family: var(--secondary-font);
          }

          .form-group input:focus,
          .form-group select:focus {
            border-color: #C88D83;
            box-shadow: 0 0 0 3px rgba(200, 141, 131, 0.2);
            outline: none;
          }

          .checkbox-group {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .checkbox-label {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            color: #8B4513;
            cursor: pointer;
            font-family: var(--secondary-font);
          }

          .checkbox-label input[type="checkbox"] {
            width: 18px;
            height: 18px;
            accent-color: #C88D83;
          }

          .checkbox-label a {
            color: #C88D83;
            text-decoration: none;
            font-weight: 600;
          }

          .form-actions {
            display: flex;
            gap: 16px;
            margin-top: 20px;
          }

          .btn-create-account {
            flex: 1;
            padding: 16px 24px;
            background: linear-gradient(135deg, #C88D83 0%, #B07A70 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: var(--secondary-font);
          }

          .btn-create-account:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(200, 141, 131, 0.4);
          }

          .btn-sign-in {
            padding: 16px 24px;
            background: transparent;
            color: #8B4513;
            border: 2px solid rgba(200, 141, 131, 0.4);
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: var(--secondary-font);
          }

          .btn-sign-in:hover {
            background: rgba(200, 141, 131, 0.1);
            border-color: #C88D83;
          }

          .trial-info-section {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          .trial-step {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(200, 141, 131, 0.15);
            border: 1px solid rgba(200, 141, 131, 0.2);
          }

          .step-indicator {
            display: inline-block;
            padding: 8px 16px;
            background: linear-gradient(135deg, #C88D83 0%, #B07A70 100%);
            color: white;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 20px;
            font-family: var(--secondary-font);
          }

          .trial-title {
            font-size: 32px;
            font-weight: 700;
            color: #8B4513;
            margin-bottom: 12px;
            font-family: var(--primary-font);
          }

          .trial-subtitle {
            font-size: 18px;
            color: #6A6A6A;
            margin-bottom: 30px;
            font-family: var(--secondary-font);
          }

          .plan-selection h3 {
            font-size: 20px;
            font-weight: 600;
            color: #8B4513;
            margin-bottom: 20px;
            font-family: var(--primary-font);
          }

          .plan-options {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .plan-option {
            padding: 24px;
            border: 2px solid rgba(200, 141, 131, 0.3);
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.8);
          }

          .plan-option:hover {
            border-color: #C88D83;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(200, 141, 131, 0.2);
          }

          .plan-option.selected {
            border-color: #C88D83;
            background: rgba(200, 141, 131, 0.08);
            box-shadow: 0 8px 25px rgba(200, 141, 131, 0.25);
          }

          .plan-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
          }

          .plan-header h4 {
            font-size: 18px;
            font-weight: 600;
            color: #8B4513;
            margin: 0;
            font-family: var(--primary-font);
          }

          .plan-badge {
            padding: 4px 12px;
            background: linear-gradient(135deg, var(--secondary-color) 0%, # 100%);
            color: white;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
            font-family: var(--secondary-font);
          }

          .plan-option p {
            font-size: 14px;
            color: #6A6A6A;
            margin-bottom: 16px;
            font-family: var(--secondary-font);
          }

          .btn-select-plan {
            padding: 12px 24px;
            background: linear-gradient(135deg, #C88D83 0%, #B07A70 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: var(--secondary-font);
          }

          .btn-select-plan:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 15px rgba(200, 141, 131, 0.4);
          }

          .why-teams-section,
          .faq-section {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(200, 141, 131, 0.15);
            border: 1px solid rgba(200, 141, 131, 0.2);
          }

          .why-teams-section h3,
          .faq-section h3 {
            font-size: 24px;
            font-weight: 600;
            color: var(--primary-color);
            margin-bottom: 24px;
            font-family: var(--primary-font);
          }

          .features-grid {
            display: grid;
            gap: 16px;
          }

          .feature-card {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 12px;
            border: 1px solid rgba(200, 140, 130, 0.1);
            transition: all 0.3s ease;
          }

          .feature-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(139, 69, 19, 0.1);
          }

          .feature-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--theme-color) 0%, # 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 16px;
          }

          .feature-card p {
            font-size: 14px;
            color: var(--primary-color);
            margin: 0;
            font-family: var(--secondary-font);
          }

          .faq-grid {
            display: grid;
            gap: 20px;
          }

          .faq-item {
            padding: 20px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 12px;
            border: 1px solid rgba(200, 140, 130, 0.1);
          }

          .faq-item h4 {
            font-size: 16px;
            font-weight: 600;
            color: var(--primary-color);
            margin-bottom: 8px;
            font-family: var(--primary-font);
          }

          .faq-item p {
            font-size: 14px;
            color: #6A6A6A;
            margin: 0;
            line-height: 1.5;
            font-family: var(--secondary-font);
          }

          @media (max-width: 768px) {
            .form-row {
              grid-template-columns: 1fr;
            }
            
            .form-actions {
              flex-direction: column;
            }
            
            .trial-onboarding {
              padding: 40px 0;
            }
            
            .account-form-section,
            .trial-step,
            .why-teams-section,
            .faq-section {
              padding: 24px;
            }
          }
        `}</style>
      </Layout>
    </div>
  );
}
