'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"

export default function SolutionsPage() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
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
                                    Solutions for every team
                                </h1>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#8B4513',
                                    marginBottom: '30px',
                                    lineHeight: '1.6'
                                }}>
                                    Use Task Me to streamline sales, marketing, product, IT, and operations. Built-in asset management meets agile project management to accelerate delivery. SEO: project management solutions, workflow automation, Jira alternative for teams.
                                </p>
                                
                                {/* Key Features List */}
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: '0 0 30px 0'
                                }}>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>📊</span>
                                        Sales pipelines, deal reviews, renewals tracking
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>📢</span>
                                        Marketing campaigns, content calendars, approvals
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>&lt;/&gt;</span>
                                        Product & engineering sprints, roadmaps, releases
                                    </li>
                                </ul>

                                {/* Call-to-Action Buttons */}
                                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                    <button style={{
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
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C4928A'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D6A799'}
                                    >
                                        <span style={{ fontSize: '1.2rem' }}>🌱</span>
                                        Explore Templates
                                    </button>
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
                                        <span style={{ fontSize: '1.2rem' }}>📚</span>
                                        Customer Stories
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                {/* Talk to Solutions Form */}
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
                                    }}>Talk to Solutions</h3>
                                    
                                    <div style={{ marginBottom: '20px' }}>
                                        <div style={{
                                            position: 'relative',
                                            marginBottom: '15px'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: '12px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: '#F4ECE2',
                                                fontSize: '1rem'
                                            }}>👤</span>
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                                style={{
                                                    width: '100%',
                                                    padding: '12px 12px 12px 40px',
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
                                            <span style={{
                                                position: 'absolute',
                                                left: '12px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: '#F4ECE2',
                                                fontSize: '1rem'
                                            }}>📧</span>
                                            <input
                                                type="email"
                                                placeholder="Work email"
                                                style={{
                                                    width: '100%',
                                                    padding: '12px 12px 12px 40px',
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
                                            <span style={{
                                                position: 'absolute',
                                                left: '12px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: '#F4ECE2',
                                                fontSize: '1rem'
                                            }}>🏢</span>
                                            <input
                                                type="text"
                                                placeholder="Company size"
                                                style={{
                                                    width: '100%',
                                                    padding: '12px 12px 12px 40px',
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
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        marginBottom: '15px'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                    >
                                        <span style={{ fontSize: '1.2rem' }}>✈️</span>
                                        Contact Sales
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

                {/* Solutions by team Section */}
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
                            }}>Solutions by team</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}>
                                Prebuilt templates and workflows to get value fast. SEO: sales pipeline software, marketing project management, IT service management, product roadmap tool.
                            </p>
                        </div>

                        <div className="row">
                            {/* Sales Card */}
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    height: '100%',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                                >
                                    <div style={{
                                        fontSize: '2rem',
                                        marginBottom: '20px',
                                        color: '#F4ECE2'
                                    }}>📊</div>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '10px'
                                    }}>Sales</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        marginBottom: '25px'
                                    }}>CRM-lite boards, opportunity stages, renewals</p>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: '0 0 30px 0'
                                    }}>
                                        <li style={{
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            marginBottom: '10px'
                                        }}>• Pipeline Kanban with win probability</li>
                                        <li style={{
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            marginBottom: '10px'
                                        }}>• Meetings, next steps, follow-ups</li>
                                        <li style={{
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            marginBottom: '10px'
                                        }}>• Forecasts and revenue dashboards</li>
                                    </ul>
                                    <button style={{
                                        width: '100%',
                                        backgroundColor: '#8B4513',
                                        color: '#F4ECE2',
                                        border: 'none',
                                        borderRadius: '8px',
                                        padding: '12px 24px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                    >
                                        Use Sales Template
                                    </button>
                                </div>
                            </div>

                            {/* Marketing Card */}
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    height: '100%',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                                >
                                    <div style={{
                                        fontSize: '2rem',
                                        marginBottom: '20px',
                                        color: '#F4ECE2'
                                    }}>📢</div>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '10px'
                                    }}>Marketing</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        marginBottom: '25px'
                                    }}>Campaign plans, content ops, approvals</p>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: '0 0 30px 0'
                                    }}>
                                        <li style={{
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            marginBottom: '10px'
                                        }}>• Editorial calendars & asset tracking</li>
                                        <li style={{
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            marginBottom: '10px'
                                        }}>• Brand approvals with SLAs</li>
                                        <li style={{
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            marginBottom: '10px'
                                        }}>• Campaign performance dashboards</li>
                                    </ul>
                                    <button style={{
                                        width: '100%',
                                        backgroundColor: '#8B4513',
                                        color: '#F4ECE2',
                                        border: 'none',
                                        borderRadius: '8px',
                                        padding: '12px 24px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                    >
                                        Use Marketing Template
                                    </button>
                                </div>
                            </div>

                            {/* Product & Engineering Card */}
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    height: '100%',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                                >
                                    <div style={{
                                        fontSize: '2rem',
                                        marginBottom: '20px',
                                        color: '#F4ECE2'
                                    }}>&lt;/&gt;</div>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '10px'
                                    }}>Product & Engineering</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        marginBottom: '25px'
                                    }}>Sprints, roadmaps, releases</p>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: '0 0 30px 0'
                                    }}>
                                        <li style={{
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            marginBottom: '10px'
                                        }}>• Scrum boards & story points</li>
                                        <li style={{
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            marginBottom: '10px'
                                        }}>• Releases & versioning</li>
                                        <li style={{
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            marginBottom: '10px'
                                        }}>• Roadmaps with dependencies</li>
                                    </ul>
                                    <button style={{
                                        width: '100%',
                                        backgroundColor: '#8B4513',
                                        color: '#F4ECE2',
                                        border: 'none',
                                        borderRadius: '8px',
                                        padding: '12px 24px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A0522D'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B4513'}
                                    >
                                        Use Product Template
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions by use case Section */}
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
                            }}>Solutions by use case</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}>
                                Choose a ready-to-run solution that matches your workflow. SEO: task tracking software, asset management system, workflow automation.
                            </p>
                        </div>

                        <div className="row">
                            {/* Asset Management Card */}
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    height: '100%',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                                >
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '15px'
                                    }}>Asset Management</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        lineHeight: '1.5'
                                    }}>Track ownership, versions, audit logs, and lifecycle.</p>
                                </div>
                            </div>

                            {/* IT Service Desk Card */}
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    height: '100%',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                                >
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '15px'
                                    }}>IT Service Desk</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        lineHeight: '1.5'
                                    }}>Request intake, SLAs, escalations, and knowledge base.</p>
                                </div>
                            </div>

                            {/* Professional Services Card */}
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    height: '100%',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                                >
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '15px'
                                    }}>Professional Services</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        lineHeight: '1.5'
                                    }}>Project plans, timesheets, and client reporting.</p>
                                </div>
                            </div>
                        </div>

                        {/* Workflow Diagram Image */}
                        <div style={{ textAlign: 'center', marginTop: '60px' }}>
                            <div style={{
                                width: '100%',
                                height: 'auto',
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '20px',
                                border: '1px solid #D6A799',
                                position: 'relative'
                            }}>
                              <img src='/assets/images/Solution.png' alt='Feature Hero' style={{ maxWidth: '100%', height: 'auto' }}/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integrations Section */}
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
                            }}>Integrations that fit your stack</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}>
                                Connect Task Me with Slack, Google, Microsoft, GitHub, and 100+ tools. SEO: project management integrations, workflow automation tools.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>💬</span>
                                        Slack notifications & quick actions
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>🐙</span>
                                        GitHub issues and PR linking
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>📅</span>
                                        Google Calendar & Drive
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>💼</span>
                                        Microsoft 365 & Teams
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>🔗</span>
                                        Webhooks and APIs
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>🔐</span>
                                        SSO, SCIM, and RBAC
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>⚙️</span>
                                        Automation recipes & templates
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>🔗</span>
                                        Public share links
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        color: '#8B4513',
                                        fontSize: '1rem'
                                    }}>
                                        <span style={{
                                            color: '#D6A799',
                                            marginRight: '12px',
                                            fontSize: '1.2rem'
                                        }}>📊</span>
                                        BI exports and CSV
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
