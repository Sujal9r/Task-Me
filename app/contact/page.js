'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"

export default function ContactPage() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                {/* Contact Sales and Support Section */}
                <section style={{
                    padding: '80px 0',
                    background: 'linear-gradient(135deg, #F4ECE2 0%, #F7F2EA 50%, #F0E6D8 100%)',
                    position: 'relative'
                }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '800',
                                color: '#8B4513',
                                marginBottom: '20px',
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '-1px',
                                lineHeight: '1.2'
                            }}>
                                We're here to help
                            </h1>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '700',
                                color: '#8B4513',
                                marginBottom: '20px',
                                fontFamily: '"Inter", sans-serif'
                            }}>
                                Contact sales and support
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}>
                                Get in touch about pricing, enterprise plans, and product questions. SEO: contact project management software, sales inquiry, customer support.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                {/* Contact Options */}
                                <div style={{ marginBottom: '40px' }}>
                                    {/* Talk to Sales Card */}
                                    <div style={{
                                        backgroundColor: '#D6A799',
                                        borderRadius: '16px',
                                        padding: '30px',
                                        marginBottom: '20px',
                                        border: '1px solid rgba(139, 69, 19, 0.2)'
                                    }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#ffffff',
                                            marginBottom: '10px'
                                        }}>Talk to sales</h3>
                                        <p style={{
                                            fontSize: '1rem',
                                            color: '#F4ECE2',
                                            marginBottom: '20px'
                                        }}>Mon-Fri, 9am-6pm</p>
                                        <button style={{
                                            backgroundColor: '#8B4513',
                                            color: '#F4ECE2',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '12px 24px',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                        >
                                            Schedule a call
                                        </button>
                                    </div>

                                    {/* Customer Support Card */}
                                    <div style={{
                                        backgroundColor: '#D6A799',
                                        borderRadius: '16px',
                                        padding: '30px',
                                        marginBottom: '30px',
                                        border: '1px solid rgba(139, 69, 19, 0.2)'
                                    }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#ffffff',
                                            marginBottom: '10px'
                                        }}>Customer support</h3>
                                        <p style={{
                                            fontSize: '1rem',
                                            color: '#F4ECE2',
                                            marginBottom: '20px'
                                        }}>Find answers or open a ticket</p>
                                        <button style={{
                                            backgroundColor: '#8B4513',
                                            color: '#F4ECE2',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '12px 24px',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                        >
                                            Visit Help Center
                                        </button>
                                    </div>
                                </div>

                                {/* Map */}
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    border: '1px solid #D6A799',
                                    height: '300px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#8B4513',
                                    fontSize: '1.1rem'
                                }}>
                                    San Francisco Map
                                </div>
                            </div>

                            <div className="col-lg-6">
                                {/* Send us a message Form */}
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px',
                                    border: '1px solid rgba(139, 69, 19, 0.2)'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '25px'
                                    }}>Send us a message</h3>
                                    
                                    <div style={{ marginBottom: '20px' }}>
                                        <input
                                            type="text"
                                            placeholder="Full name"
                                            style={{
                                                width: '100%',
                                                padding: '12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem',
                                                marginBottom: '15px'
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Company"
                                            style={{
                                                width: '100%',
                                                padding: '12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem',
                                                marginBottom: '15px'
                                            }}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Work email"
                                            style={{
                                                width: '100%',
                                                padding: '12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem',
                                                marginBottom: '15px'
                                            }}
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone (optional)"
                                            style={{
                                                width: '100%',
                                                padding: '12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem',
                                                marginBottom: '15px'
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Team size"
                                            style={{
                                                width: '100%',
                                                padding: '12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem',
                                                marginBottom: '15px'
                                            }}
                                        />
                                        <textarea
                                            placeholder="How can we help?"
                                            rows="4"
                                            style={{
                                                width: '100%',
                                                padding: '12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem',
                                                marginBottom: '15px',
                                                resize: 'vertical'
                                            }}
                                        />
                                        <input
                                            type="date"
                                            placeholder="Preferred demo date"
                                            style={{
                                                width: '100%',
                                                padding: '12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem',
                                                marginBottom: '15px'
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Time zone"
                                            style={{
                                                width: '100%',
                                                padding: '12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem',
                                                marginBottom: '20px'
                                            }}
                                        />
                                    </div>
                                    
                                    <div style={{ marginBottom: '25px' }}>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            color: '#F4ECE2',
                                            fontSize: '0.9rem'
                                        }}>
                                            <input
                                                type="checkbox"
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    accentColor: '#8B4513'
                                                }}
                                            />
                                            I agree to the terms and privacy policy
                                        </label>
                                    </div>
                                    
                                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                        <button style={{
                                            backgroundColor: '#8B4513',
                                            color: '#F4ECE2',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '12px 24px',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                        >
                                            Submit
                                        </button>
                                        <button style={{
                                            backgroundColor: 'transparent',
                                            color: '#8B4513',
                                            border: '1px solid #8B4513',
                                            borderRadius: '8px',
                                            padding: '12px 24px',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#8B4513';
                                            e.currentTarget.style.color = '#F4ECE2';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.color = '#8B4513';
                                        }}
                                        >
                                            Clear
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Offices Section */}
                <section style={{
                    padding: '80px 0',
                    background: 'linear-gradient(135deg, #F4ECE2 0%, #F7F2EA 50%, #F0E6D8 100%)',
                    position: 'relative'
                }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: '800',
                                color: '#8B4513',
                                marginBottom: '20px',
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '-1px'
                            }}>Global offices</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}>
                                Connect with a regional team. SEO: enterprise sales contact, support locations.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    height: '100%'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '15px'
                                    }}>San Francisco</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        marginBottom: '10px'
                                    }}>525 Market St, CA</p>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2'
                                    }}>sales@taskme.com</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    height: '100%'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '15px'
                                    }}>London</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        marginBottom: '10px'
                                    }}>20 Fenchurch St</p>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2'
                                    }}>emea@taskme.com</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    height: '100%'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '15px'
                                    }}>Singapore</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        marginBottom: '10px'
                                    }}>8 Marina Blvd</p>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2'
                                    }}>apac@taskme.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section style={{
                    padding: '80px 0',
                    background: 'linear-gradient(135deg, #F4ECE2 0%, #F7F2EA 50%, #F0E6D8 100%)',
                    position: 'relative'
                }}>
                    <div className="container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: '800',
                                color: '#8B4513',
                                marginBottom: '20px',
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '-1px'
                            }}>Ready to see Task Me in action?</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto 40px auto',
                                lineHeight: '1.6'
                            }}>
                                Book a live demo or start your 14-day free trial.
                            </p>
                            
                            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <button style={{
                                    backgroundColor: '#D6A799',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '14px 28px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C4928A'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D6A799'}
                                >
                                    Book a Demo
                                </button>
                                <a href="/trial" style={{
                                    backgroundColor: '#8B4513',
                                    color: '#F4ECE2',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '14px 28px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                >
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}