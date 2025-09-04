'use client'
import React from 'react'

export default function Clients() {
    return (
        <section 
            style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #F4ECE2 0%, #F7F2EA 50%, #F0E6D8 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Circles */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: '120px',
                height: '120px',
                background: 'rgba(214, 167, 154, 0.1)',
                borderRadius: '50%',
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '8%',
                width: '180px',
                height: '180px',
                background: 'rgba(214, 167, 154, 0.08)',
                borderRadius: '50%',
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        background: 'linear-gradient(45deg, #8B4513, #D6A79A, #A0522D)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '20px',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '-1px'
                    }}>Features that replace your tool stack</h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#8B4513',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                        opacity: 0.9
                    }}>Task Me centralizes project planning, asset management, issue tracking, and reporting—so you can sunset spreadsheets and ad-hoc tools.</p>
                </div>

                {/* Feature Cards */}
                <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="col-xl-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                        <div className="feature-card" 
                            style={{
                                background: 'linear-gradient(135deg, #D6A79A 0%, #C4928A 50%, #B5857A 100%)',
                                borderRadius: '16px',
                                padding: '40px 30px',
                                textAlign: 'center',
                                height: '100%',
                                boxShadow: '0 8px 24px rgba(214, 167, 154, 0.15)',
                                border: '1px solid rgba(244, 236, 226, 0.2)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                        >
                            <div className="feature-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(244, 236, 226, 0.9)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                color: '#8B4513',
                                fontSize: '32px'
                            }}>
                                📁
                            </div>
                            <h4 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: '#F4ECE2',
                                marginBottom: '15px',
                                lineHeight: '1.3'
                            }}>Asset Management</h4>
                            <p style={{
                                fontSize: '1rem',
                                color: 'rgba(244, 236, 226, 0.9)',
                                lineHeight: '1.5',
                                margin: 0
                            }}>Versioned assets, approvals, ownership, and audit trails.</p>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                        <div className="feature-card" 
                            style={{
                                background: 'linear-gradient(135deg, #D6A79A 0%, #C4928A 50%, #B5857A 100%)',
                                borderRadius: '16px',
                                padding: '40px 30px',
                                textAlign: 'center',
                                height: '100%',
                                boxShadow: '0 8px 24px rgba(214, 167, 154, 0.15)',
                                border: '1px solid rgba(244, 236, 226, 0.2)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                        >
                            <div className="feature-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(244, 236, 226, 0.9)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                color: '#8B4513',
                                fontSize: '32px'
                            }}>
                                📅
                            </div>
                            <h4 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: '#F4ECE2',
                                marginBottom: '15px',
                                lineHeight: '1.3'
                            }}>Roadmaps & Timelines</h4>
                            <p style={{
                                fontSize: '1rem',
                                color: 'rgba(244, 236, 226, 0.9)',
                                lineHeight: '1.5',
                                margin: 0
                            }}>Plan sprints and roadmaps with capacity and dependencies.</p>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                        <div className="feature-card" 
                            style={{
                                background: 'linear-gradient(135deg, #D6A79A 0%, #C4928A 50%, #B5857A 100%)',
                                borderRadius: '16px',
                                padding: '40px 30px',
                                textAlign: 'center',
                                height: '100%',
                                boxShadow: '0 8px 24px rgba(214, 167, 154, 0.15)',
                                border: '1px solid rgba(244, 236, 226, 0.2)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                        >
                            <div className="feature-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(244, 236, 226, 0.9)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                color: '#8B4513',
                                fontSize: '32px'
                            }}>
                                📊
                            </div>
                            <h4 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: '#F4ECE2',
                                marginBottom: '15px',
                                lineHeight: '1.3'
                            }}>Dashboards & Reports</h4>
                            <p style={{
                                fontSize: '1rem',
                                color: 'rgba(244, 236, 226, 0.9)',
                                lineHeight: '1.5',
                                margin: 0
                            }}>Real-time burndown, velocity, and workload analytics.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Centered Image */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                marginTop: '60px',
                padding: '0 20px'
            }}>
                <img 
                    src="/assets/images/feature.png" 
                    alt="Background"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '12px',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
                    }}
                />
            </div>
        </section>
    )
}