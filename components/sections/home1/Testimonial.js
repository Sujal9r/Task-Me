'use client'
import React from 'react'

export default function Testimonial() {
    return (
        <>
            {/* Hero Banner Section */}
            <section style={{
                padding: '80px 0',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '800',
                                color: '#000',
                                marginBottom: '20px',
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '-1px',
                                lineHeight: '1.2'
                            }}>
                                Start shipping faster with <span style={{ color: '#C08E85' }}>Task Me</span>
                            </h1>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#a1a1aa',
                                marginBottom: '30px',
                                lineHeight: '1.6'
                            }}>
                                Top keywords: agile project management, Kanban software, task management tool, asset tracking system, Jira alternative, Asana alternative.
                            </p>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <button style={{
                                    backgroundColor: '#C08E85',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '14px 28px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C08E85'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C08E85'}
                                >
                                    <span style={{ fontSize: '1.2rem' }}>💰</span>
                                    See Pricing
                                </button>
                                <a href="/trial" style={{
                                    backgroundColor: '#C08E85',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '14px 28px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C08E85'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C08E85'}
                                >
                                    <span style={{ fontSize: '1.2rem' }}>⬇️</span>
                                    Get Started Free
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Task Me Section */}
            <section style={{
                padding: '80px 0',
                position: 'relative'
            }}>
                <div className="container">
                    {/* Section Header */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: '800',
                            color: '#000',
                            marginBottom: '20px',
                            fontFamily: '"Inter", sans-serif',
                            letterSpacing: '-1px'
                        }}>About Task Me</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#a1a1aa',
                            maxWidth: '800px',
                            lineHeight: '1.6',
                            margin: 0
                        }}>
                            We're building the fastest way for teams to coordinate work. Task Me brings clarity to projects with powerful views, clean design, and automation that keeps everyone aligned.
                        </p>
                    </div>

                    {/* Information Cards */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                            <div style={{
                                backgroundColor: '#C98D83',
                                borderRadius: '16px',
                                padding: '40px 30px',
                                height: '100%',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                            >
                                <h4 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#000',
                                    marginBottom: '15px',
                                    lineHeight: '1.3'
                                }}>Our Mission</h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#000',
                                    lineHeight: '1.5',
                                    margin: 0
                                }}>Help teams plan, execute, and deliver work with less friction.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                            <div style={{
                                backgroundColor: '#C98D83',
                                borderRadius: '16px',
                                padding: '40px 30px',
                                height: '100%',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                            >
                                <h4 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#000',
                                    marginBottom: '15px',
                                    lineHeight: '1.3'
                                }}>Our Values</h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#000',
                                    lineHeight: '1.5',
                                    margin: 0
                                }}>Customer focus, simplicity, and reliability.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                            <div style={{
                                backgroundColor: '#C98D83',
                                borderRadius: '16px',
                                padding: '40px 30px',
                                height: '100%',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                            >
                                <h4 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#000',
                                    marginBottom: '15px',
                                    lineHeight: '1.3'
                                }}>Who We Serve</h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#000',
                                    lineHeight: '1.5',
                                    margin: 0
                                }}>Product, engineering, marketing, and operations teams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
