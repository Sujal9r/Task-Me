'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"

export default function AboutPage() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                {/* Built for teams who ship faster Section */}
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
                                    Built for teams who ship faster
                                </h1>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#8B4513',
                                    marginBottom: '30px',
                                    lineHeight: '1.6'
                                }}>
                                    Task Me is a project management and asset tracking platform helping sales and product teams collaborate, automate workflows, and deliver results. SEO: project management software for teams, Kanban tool for sales, Jira alternative.
                                </p>
                                
                                {/* Metrics Cards */}
                                <div className="row">
                                    <div className="col-md-6" style={{ marginBottom: '20px' }}>
                                        <div style={{
                                            backgroundColor: '#D6A799',
                                            borderRadius: '12px',
                                            padding: '20px',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '2rem',
                                                fontWeight: '700',
                                                color: '#ffffff',
                                                marginBottom: '8px'
                                            }}>12k+</div>
                                            <div style={{
                                                fontSize: '0.9rem',
                                                color: '#F4ECE2'
                                            }}>Teams managed</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" style={{ marginBottom: '20px' }}>
                                        <div style={{
                                            backgroundColor: '#D6A799',
                                            borderRadius: '12px',
                                            padding: '20px',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '2rem',
                                                fontWeight: '700',
                                                color: '#ffffff',
                                                marginBottom: '8px'
                                            }}>99.9%</div>
                                            <div style={{
                                                fontSize: '0.9rem',
                                                color: '#F4ECE2'
                                            }}>Uptime last 12 months</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                {/* Our Mission Card */}
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
                                        marginBottom: '20px'
                                    }}>Our mission</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        marginBottom: '25px',
                                        lineHeight: '1.6'
                                    }}>
                                        Empower every team to plan, track, and manage assets in one place with clarity and speed.
                                    </p>
                                    
                                    {/* Principles/Values */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <div style={{
                                            backgroundColor: '#8B4513',
                                            borderRadius: '8px',
                                            padding: '12px 16px',
                                            textAlign: 'center'
                                        }}>
                                            <span style={{
                                                color: '#F4ECE2',
                                                fontSize: '0.9rem',
                                                fontWeight: '600'
                                            }}>Customer-first</span>
                                        </div>
                                        <div style={{
                                            backgroundColor: '#8B4513',
                                            borderRadius: '8px',
                                            padding: '12px 16px',
                                            textAlign: 'center'
                                        }}>
                                            <span style={{
                                                color: '#F4ECE2',
                                                fontSize: '0.9rem',
                                                fontWeight: '600'
                                            }}>Ship quickly, improve continuously</span>
                                        </div>
                                        <div style={{
                                            backgroundColor: '#8B4513',
                                            borderRadius: '8px',
                                            padding: '12px 16px',
                                            textAlign: 'center'
                                        }}>
                                            <span style={{
                                                color: '#F4ECE2',
                                                fontSize: '0.9rem',
                                                fontWeight: '600'
                                            }}>Trust and security by design</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
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
                            }}>Our story</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}>
                                From a small internal tool to a platform used by thousands. SEO: agile project management history, startup project tracking.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div style={{
                            maxWidth: '600px',
                            margin: '0 auto',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                bottom: '0',
                                width: '2px',
                                backgroundColor: '#D6A799',
                                transform: 'translateX(-50%)'
                            }}></div>
                            
                            <div style={{
                                backgroundColor: '#D6A799',
                                borderRadius: '12px',
                                padding: '25px',
                                marginBottom: '30px',
                                position: 'relative',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '80%',
                                maxWidth: '400px'
                            }}>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    marginBottom: '8px'
                                }}>2019</div>
                                <div style={{
                                    fontSize: '1rem',
                                    color: '#F4ECE2'
                                }}>Founded with a focus on simple task tracking</div>
                            </div>
                            
                            <div style={{
                                backgroundColor: '#D6A799',
                                borderRadius: '12px',
                                padding: '25px',
                                marginBottom: '30px',
                                position: 'relative',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '80%',
                                maxWidth: '400px'
                            }}>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    marginBottom: '8px'
                                }}>2021</div>
                                <div style={{
                                    fontSize: '1rem',
                                    color: '#F4ECE2'
                                }}>Launched asset management and automation</div>
                            </div>
                            
                            <div style={{
                                backgroundColor: '#D6A799',
                                borderRadius: '12px',
                                padding: '25px',
                                position: 'relative',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '80%',
                                maxWidth: '400px'
                            }}>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    marginBottom: '8px'
                                }}>2023</div>
                                <div style={{
                                    fontSize: '1rem',
                                    color: '#F4ECE2'
                                }}>Adopted by mid-market and enterprise teams</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section style={{
                    padding: '80px 0',
                    background: 'linear-gradient(135deg, #F4ECE2 0%, #F7F2EA 50%, #F0E6D8 100%)',
                    position: 'relative'
                }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' , flexDirection: 'column', display: 'flex', alignItems: 'center'}}>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: '800',
                                color: '#8B4513',
                                marginBottom: '20px',
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '-1px'
                            }}>Leadership</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}>
                                Meet the team behind Task Me. SEO: project management company leadership.
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '40px' }}>
                                <div style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '20px',
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(139, 69, 19, 0.1)',
                                    boxShadow: '0 8px 32px rgba(139, 69, 19, 0.1)',
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(139, 69, 19, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(139, 69, 19, 0.1)';
                                }}>
                                    <div style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        margin: '0 auto 25px auto',
                                        overflow: 'hidden',
                                        border: '4px solid #C88D83',
                                        boxShadow: '0 4px 20px rgba(139, 69, 19, 0.2)'
                                    }}>
                                        <img 
                                            src="/assets/images/Karan Jain.jpeg" 
                                            alt="Karan Jain" 
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <h4 style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#8B4513',
                                        marginBottom: '8px',
                                        fontFamily: '"Inter", sans-serif'
                                    }}>Karan Jain</h4>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#C88D83',
                                        marginBottom: '20px',
                                        fontWeight: '600'
                                    }}>Chief Executive Officer & Co-Founder</p>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: '#8B4513',
                                        lineHeight: '1.6',
                                        marginBottom: '25px',
                                        textAlign: 'left'
                                    }}>
                                        Entrepreneurial CEO with 16+ years of hands-on experience building and scaling technology businesses. Proven ability to transform ideas into profitable products, having bootstrapped to $1.2M ARR before raising capital. Specialize in product-led growth strategies for B2B software companies.
                                    </p>
                                    
                                    {/* Social Icons */}
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                                        <a href="#" style={{ color: '#8B4513', fontSize: '1.2rem' }}>💼</a>
                                        <a href="#" style={{ color: '#8B4513', fontSize: '1.2rem' }}>💻</a>
                                        <a href="#" style={{ color: '#8B4513', fontSize: '1.2rem' }}>📄</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '40px' }}>
                                <div style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '20px',
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(139, 69, 19, 0.1)',
                                    boxShadow: '0 8px 32px rgba(139, 69, 19, 0.1)',
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(139, 69, 19, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(139, 69, 19, 0.1)';
                                }}>
                                    <div style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        margin: '0 auto 25px auto',
                                        overflow: 'hidden',
                                        border: '4px solid #C88D83',
                                        boxShadow: '0 4px 20px rgba(139, 69, 19, 0.2)'
                                    }}>
                                        <img 
                                            src="/assets/images/NareshSharma.jpeg" 
                                            alt="Naresh Sharma" 
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <h4 style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#8B4513',
                                        marginBottom: '8px',
                                        fontFamily: '"Inter", sans-serif'
                                    }}>Naresh Sharma</h4>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#C88D83',
                                        marginBottom: '20px',
                                        fontWeight: '600'
                                    }}>Chief Technology Officer & Co-Founder</p>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: '#8B4513',
                                        lineHeight: '1.6',
                                        marginBottom: '25px',
                                        textAlign: 'left'
                                    }}>
                                     Visionary technology leader driving innovation and growth at our organization. With deep expertise in software development, cloud infrastructure, and emerging technologies, he ensures the company stays ahead in the fast-paced digital landscape.
                                    </p>
                                    
                                    {/* Social Icons */}
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                                        <a href="#" style={{ color: '#8B4513', fontSize: '1.2rem' }}>💼</a>
                                        <a href="#" style={{ color: '#8B4513', fontSize: '1.2rem' }}>💻</a>
                                        <a href="#" style={{ color: '#8B4513', fontSize: '1.2rem' }}>📄</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '40px' }}>
                                <div style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '20px',
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(139, 69, 19, 0.1)',
                                    boxShadow: '0 8px 32px rgba(139, 69, 19, 0.1)',
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(139, 69, 19, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(139, 69, 19, 0.1)';
                                }}>
                                    <div style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        margin: '0 auto 25px auto',
                                        overflow: 'hidden',
                                        border: '4px solid #C88D83',
                                        boxShadow: '0 4px 20px rgba(139, 69, 19, 0.2)'
                                    }}>
                                        <img 
                                            src="/assets/images/Pradeeprhode.jpeg" 
                                            alt="Pradeep Rhode" 
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <h4 style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#8B4513',
                                        marginBottom: '8px',
                                        fontFamily: '"Inter", sans-serif'
                                    }}>Pradeep Rhode</h4>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#C88D83',
                                        marginBottom: '20px',
                                        fontWeight: '600'
                                    }}>Chief Marketing Officer & Co-Founder</p>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: '#8B4513',
                                        lineHeight: '1.6',
                                        marginBottom: '25px',
                                        textAlign: 'left'
                                    }}>
                                        27 years of extensive marketing experience with a proven track record of success. Skilled in working with international customers and seamlessly building marketing strategies that drive growth and long-term impact.
                                    </p>
                                    
                                    {/* Social Icons */}
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                                        <a href="#" style={{ color: '#8B4513', fontSize: '1.2rem' }}>💼</a>
                                        <a href="#" style={{ color: '#8B4513', fontSize: '1.2rem' }}>🌐</a>
                                        <a href="#" style={{ color: '#8B4513', fontSize: '1.2rem' }}>📄</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
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
                            }}>Values</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}>
                                Principles that guide how we work and build.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    height: '100%',
                                    border: '1px solid rgba(139, 69, 19, 0.2)'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.3rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '15px'
                                    }}>Customer obsession</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        lineHeight: '1.5'
                                    }}>We listen, learn, and solve real problems.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    height: '100%',
                                    border: '1px solid rgba(139, 69, 19, 0.2)'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.3rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '15px'
                                    }}>Craft and speed</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        lineHeight: '1.5'
                                    }}>Quality with momentum beats perfect later.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    backgroundColor: '#D6A799',
                                    borderRadius: '16px',
                                    padding: '40px 30px',
                                    height: '100%',
                                    border: '1px solid rgba(139, 69, 19, 0.2)'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.3rem',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        marginBottom: '15px'
                                    }}>Default to open</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#F4ECE2',
                                        lineHeight: '1.5'
                                    }}>Transparent roadmaps, honest communication.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join us on the journey Section */}
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
                            }}>Join us on the journey</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto 40px auto',
                                lineHeight: '1.6'
                            }}>
                                Explore careers or see how Task Me can help your team today.
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
                                    View Careers
                                </button>
                                <button style={{
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
                                    Book a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}