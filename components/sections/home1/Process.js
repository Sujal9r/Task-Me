'use client'
import React, { useState } from 'react'

export default function Process() {
    const [billingCycle, setBillingCycle] = useState('monthly')

    return (
        <>
            {/* Simple Pricing for Growing Teams Section */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #F4ECE2 0%, #F7F2EA 50%, #F0E6D8 100%)',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '800',
                                color: '#8B4513',
                                marginBottom: '20px',
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '-1px',
                                lineHeight: '1.2'
                            }}>
                                Simple pricing for growing teams
                            </h1>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                marginBottom: '30px',
                                lineHeight: '1.6'
                            }}>
                                Choose a plan that matches your workflow. SEO: project management pricing, Jira alternative pricing, task tracking software cost, asset management pricing.
                            </p>
                            
                            {/* Pricing Toggle */}
                            <div style={{
                                display: 'flex',
                                gap: '10px',
                                marginBottom: '40px'
                            }}>
                                <button
                                    onClick={() => setBillingCycle('monthly')}
                                    style={{
                                        backgroundColor: billingCycle === 'monthly' ? '#D6A799' : 'transparent',
                                        color: billingCycle === 'monthly' ? '#ffffff' : '#8B4513',
                                        border: '1px solid rgba(139, 69, 19, 0.3)',
                                        borderRadius: '8px',
                                        padding: '12px 24px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setBillingCycle('annual')}
                                    style={{
                                        backgroundColor: billingCycle === 'annual' ? '#D6A799' : 'transparent',
                                        color: billingCycle === 'annual' ? '#ffffff' : '#8B4513',
                                        border: '1px solid rgba(139, 69, 19, 0.3)',
                                        borderRadius: '8px',
                                        padding: '12px 24px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Annual • Save 20%
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Custom Quote Form */}
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
                                }}>Need a custom quote?</h3>
                                
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{
                                        position: 'relative',
                                        marginBottom: '15px'
                                    }}>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            style={{
                                                width: '100%',
                                                padding: '12px 12px 12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem'
                                            }}
                                        />
                                    </div>
                                    <div style={{
                                        position: 'relative',
                                        marginBottom: '15px'
                                    }}>
                                        <input
                                            type="email"
                                            placeholder="Work email"
                                            style={{
                                                width: '100%',
                                                padding: '12px 12px 12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem'
                                            }}
                                        />
                                    </div>
                                    <div style={{
                                        position: 'relative',
                                        marginBottom: '25px'
                                    }}>
                                        <input
                                            type="text"
                                            placeholder="Company size"
                                            style={{
                                                width: '100%',
                                                padding: '12px 12px 12px 16px',
                                                backgroundColor: '#F4ECE2',
                                                border: '1px solid rgba(139, 69, 19, 0.3)',
                                                borderRadius: '8px',
                                                color: '#8B4513',
                                                fontSize: '1rem'
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                <button style={{
                                    width: '100%',
                                    backgroundColor: '#8B4513',
                                    color: '#F4ECE2',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '14px 28px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    marginBottom: '15px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                >
                                    Request Quote
                                </button>
                                
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#F4ECE2',
                                    textAlign: 'center',
                                    margin: 0
                                }}>We respond within one business day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans & Pricing Section */}
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
                        }}>Plans & pricing</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#8B4513',
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Transparent, scalable pricing with the essentials in every plan. SEO: Asana alternative pricing, Kanban software cost.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        {/* Starter Plan */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                            <div style={{
                                backgroundColor: '#D6A799',
                                borderRadius: '16px',
                                padding: '40px 30px',
                                height: '100%',
                                border: '1px solid rgba(139, 69, 19, 0.2)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                            >
                                <h4 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    marginBottom: '10px'
                                }}>Starter</h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#F4ECE2',
                                    marginBottom: '25px'
                                }}>Best for individuals</p>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '800',
                                    color: '#ffffff',
                                    marginBottom: '10px'
                                }}>$0</div>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#F4ECE2',
                                    marginBottom: '30px'
                                }}>Free forever • Up to 3 seats</p>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: '0 0 30px 0'
                                }}>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        Tasks, Kanban & calendars
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        2 projects • 1GB assets
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        Community support
                                    </li>
                                </ul>
                                <a href="/trial" style={{
                                    width: '100%',
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
                                    display: 'inline-block',
                                    textAlign: 'center'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* Team Plan */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                            <div style={{
                                backgroundColor: '#D6A799',
                                borderRadius: '16px',
                                padding: '40px 30px',
                                height: '100%',
                                border: '1px solid rgba(139, 69, 19, 0.2)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#8B4513',
                                    color: '#F4ECE2',
                                    padding: '4px 12px',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    Popular
                                </div>
                                <h4 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    marginBottom: '10px',
                                    marginTop: '20px'
                                }}>Team</h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#F4ECE2',
                                    marginBottom: '25px'
                                }}>Best for growing teams</p>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '800',
                                    color: '#ffffff',
                                    marginBottom: '10px'
                                }}>
                                    ${billingCycle === 'annual' ? '9.60' : '12'}
                                    <span style={{ fontSize: '1rem', fontWeight: '400' }}> per user/month</span>
                                </div>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: '0 0 30px 0'
                                }}>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        Unlimited projects & custom fields
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        Asset management, versions, audit trail
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        Automations & templates
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        Standard support
                                    </li>
                                </ul>
                                <a href="/trial" style={{
                                    width: '100%',
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
                                    display: 'inline-block',
                                    textAlign: 'center'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                >
                                    Start Free Trial
                                </a>
                            </div>
                        </div>

                        {/* Business Plan */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                            <div style={{
                                backgroundColor: '#D6A799',
                                borderRadius: '16px',
                                padding: '40px 30px',
                                height: '100%',
                                border: '1px solid rgba(139, 69, 19, 0.2)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                            >
                                <h4 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    marginBottom: '10px'
                                }}>Business</h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#F4ECE2',
                                    marginBottom: '25px'
                                }}>For scaling</p>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '800',
                                    color: '#ffffff',
                                    marginBottom: '10px'
                                }}>
                                    ${billingCycle === 'annual' ? '19.20' : '24'}
                                    <span style={{ fontSize: '1rem', fontWeight: '400' }}> per user/month</span>
                                </div>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: '0 0 30px 0'
                                }}>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        Advanced permissions & roles
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        SSO, SCIM, audit logs
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        Time tracking & billing
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#ffffff',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#8B4513',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        Priority support
                                    </li>
                                </ul>
                                <button style={{
                                    width: '100%',
                                    backgroundColor: '#8B4513',
                                    color: '#F4ECE2',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '14px 28px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                >
                                    Buy Business
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
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
                        }}>FAQs</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#8B4513',
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Everything you need to know about Task Me pricing.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                            <div style={{
                                backgroundColor: '#D6A799',
                                borderRadius: '16px',
                                padding: '30px',
                                height: '100%',
                                border: '1px solid rgba(139, 69, 19, 0.2)'
                            }}>
                                <h4 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    marginBottom: '15px'
                                }}>Do you offer discounts?</h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#F4ECE2',
                                    lineHeight: '1.5'
                                }}>Annual billing saves 20%. Nonprofit and education discounts available.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                            <div style={{
                                backgroundColor: '#D6A799',
                                borderRadius: '16px',
                                padding: '30px',
                                height: '100%',
                                border: '1px solid rgba(139, 69, 19, 0.2)'
                            }}>
                                <h4 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    marginBottom: '15px'
                                }}>What happens after the trial?</h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#F4ECE2',
                                    lineHeight: '1.5'
                                }}>You can continue on Team or downgrade to Starter anytime.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                            <div style={{
                                backgroundColor: '#D6A799',
                                borderRadius: '16px',
                                padding: '30px',
                                height: '100%',
                                border: '1px solid rgba(139, 69, 19, 0.2)'
                            }}>
                                <h4 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    marginBottom: '15px'
                                }}>How does billing work?</h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#F4ECE2',
                                    lineHeight: '1.5'
                                }}>Per active user, prorated as seats change. Cancel anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to get started Section */}
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
                        }}>Ready to get started?</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#8B4513',
                            maxWidth: '800px',
                            margin: '0 auto 40px auto',
                            lineHeight: '1.6'
                        }}>
                            Top keywords: project management pricing, Kanban software pricing, asset tracking cost.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="/trial" style={{
                                backgroundColor: '#D6A799',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '14px 28px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C4928A'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D6A799'}
                            >
                                <span style={{ fontSize: '1.2rem' }}>🚀</span>
                                Start Free Trial
                            </a>
                            <button style={{
                                backgroundColor: 'transparent',
                                color: '#8B4513',
                                border: '1px solid #8B4513',
                                borderRadius: '8px',
                                padding: '14px 28px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
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
                                <span style={{ fontSize: '1.2rem' }}>📅</span>
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
