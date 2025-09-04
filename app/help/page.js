'use client'
import React, { useState } from 'react'
import Layout from "@/components/layout/Layout"

export default function HelpCenterPage() {
    const [searchQuery, setSearchQuery] = useState('')

    const popularTopics = [
        {
            title: 'Getting started',
            description: 'Create a workspace, invite your team, set up your first project.',
            icon: '🚀'
        },
        {
            title: 'Integrations',
            description: 'Connect Slack, Salesforce, Jira, and more.',
            icon: '🔗'
        },
        {
            title: 'User management',
            description: 'Roles, permissions, and SSO.',
            icon: '👥'
        },
        {
            title: 'Tasks & workflows',
            description: 'Boards, custom fields, automations.',
            icon: '📋'
        }
    ]

    const categories = [
        {
            title: 'Projects',
            description: 'Views, templates, milestones',
            icon: '📊'
        },
        {
            title: 'Reporting',
            description: 'Dashboards, export, insights',
            icon: '📈'
        },
        {
            title: 'Admin & billing',
            description: 'Plans, invoices, enterprise',
            icon: '⚙️'
        },
        {
            title: 'Automation',
            description: 'Rules, triggers, templates',
            icon: '⚡'
        }
    ]

    const topArticles = [
        { title: 'Create your first project', readTime: '5 min read' },
        { title: 'Invite and manage users', readTime: '4 min read' },
        { title: 'Connect Salesforce integration', readTime: '6 min read' },
        { title: 'Set up SSO', readTime: '7 min read' }
    ]

    const quickLinks = [
        'Status page',
        'API docs',
        'Security',
        'Release notes'
    ]

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                {/* Hero Section */}
                <section style={{
                    padding: '60px 0 40px 0',
                    background: 'linear-gradient(135deg, #F4ECE2 0%, #F7F2EA 50%, #F0E6D8 100%)',
                    position: 'relative'
                }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: '800',
                                color: '#8B4513',
                                marginBottom: '15px',
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '-1px'
                            }}>
                                Help Center
                            </h1>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '600px',
                                margin: '0 auto 30px auto',
                                lineHeight: '1.6'
                            }}>
                                Find answers, learn best practices, and get the most out of Task Me.
                            </p>
                            
                            {/* Search Bar */}
                            <div style={{
                                maxWidth: '500px',
                                margin: '0 auto',
                                position: 'relative'
                            }}>
                                <input
                                    type="text"
                                    placeholder="Search articles, topics, keywords"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '16px 20px',
                                        border: '2px solid rgba(139, 69, 19, 0.2)',
                                        borderRadius: '12px',
                                        fontSize: '16px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        color: '#8B4513',
                                        outline: 'none'
                                    }}
                                />
                                <button style={{
                                    position: 'absolute',
                                    right: '8px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: '#D6A799',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '10px 16px',
                                    color: '#ffffff',
                                    cursor: 'pointer'
                                }}>
                                    🔍
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section style={{
                    padding: '40px 0 80px 0',
                    background: 'linear-gradient(135deg, #F4ECE2 0%, #F7F2EA 50%, #F0E6D8 100%)',
                    position: 'relative'
                }}>
                    <div className="container">
                        <div className="row">
                            {/* Main Content Area */}
                            <div className="col-lg-8 col-md-12">
                                {/* Popular Topics */}
                                <div style={{ marginBottom: '50px' }}>
                                    <h2 style={{
                                        fontSize: '1.8rem',
                                        fontWeight: '700',
                                        color: '#8B4513',
                                        marginBottom: '25px'
                                    }}>
                                        Popular topics
                                    </h2>
                                    <div className="row">
                                        {popularTopics.map((topic, index) => (
                                            <div key={index} className="col-lg-6 col-md-6 col-sm-12" style={{ marginBottom: '20px' }}>
                                                <div style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                    borderRadius: '12px',
                                                    padding: '25px',
                                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                                    height: '100%',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                                >
                                                    <div style={{
                                                        fontSize: '2rem',
                                                        marginBottom: '15px'
                                                    }}>
                                                        {topic.icon}
                                                    </div>
                                                    <h3 style={{
                                                        fontSize: '1.1rem',
                                                        fontWeight: '600',
                                                        color: '#8B4513',
                                                        marginBottom: '10px'
                                                    }}>
                                                        {topic.title}
                                                    </h3>
                                                    <p style={{
                                                        fontSize: '0.9rem',
                                                        color: '#6A6A6A',
                                                        lineHeight: '1.5',
                                                        margin: '0'
                                                    }}>
                                                        {topic.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Browse by Category */}
                                <div>
                                    <h2 style={{
                                        fontSize: '1.8rem',
                                        fontWeight: '700',
                                        color: '#8B4513',
                                        marginBottom: '25px'
                                    }}>
                                        Browse by category
                                    </h2>
                                    <div className="row">
                                        {categories.map((category, index) => (
                                            <div key={index} className="col-lg-6 col-md-6 col-sm-12" style={{ marginBottom: '20px' }}>
                                                <div style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                    borderRadius: '12px',
                                                    padding: '25px',
                                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                                    height: '100%',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                                >
                                                    <div style={{
                                                        fontSize: '2rem',
                                                        marginBottom: '15px'
                                                    }}>
                                                        {category.icon}
                                                    </div>
                                                    <h3 style={{
                                                        fontSize: '1.1rem',
                                                        fontWeight: '600',
                                                        color: '#8B4513',
                                                        marginBottom: '10px'
                                                    }}>
                                                        {category.title}
                                                    </h3>
                                                    <p style={{
                                                        fontSize: '0.9rem',
                                                        color: '#6A6A6A',
                                                        lineHeight: '1.5',
                                                        margin: '0'
                                                    }}>
                                                        {category.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="col-lg-4 col-md-12">
                                <div style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '16px',
                                    padding: '30px',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    height: 'fit-content'
                                }}>
                                    {/* Contact Support */}
                                    <div style={{ marginBottom: '30px' }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '20px'
                                        }}>
                                            Contact support
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '12px 16px',
                                                backgroundColor: '#D6A799',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C4928A'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D6A799'}
                                            >
                                                <span style={{
                                                    fontSize: '0.9rem',
                                                    fontWeight: '600',
                                                    color: '#ffffff'
                                                }}>
                                                    Chat with us
                                                </span>
                                                <span style={{
                                                    fontSize: '0.8rem',
                                                    color: '#F4ECE2'
                                                }}>
                                                    Avg. reply in under 2 hrs
                                                </span>
                                            </div>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '12px 16px',
                                                backgroundColor: 'rgba(139, 69, 19, 0.1)',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.2)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)'}
                                            >
                                                <span style={{
                                                    fontSize: '0.9rem',
                                                    fontWeight: '600',
                                                    color: '#8B4513'
                                                }}>
                                                    Email support
                                                </span>
                                                <span style={{
                                                    fontSize: '0.8rem',
                                                    color: '#D6A799'
                                                }}>
                                                    support@taskme.com
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Links */}
                                    <div style={{ marginBottom: '30px' }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '20px'
                                        }}>
                                            Quick links
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {quickLinks.map((link, index) => (
                                                <div key={index} style={{
                                                    padding: '10px 16px',
                                                    backgroundColor: 'rgba(139, 69, 19, 0.1)',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    fontSize: '0.9rem',
                                                    color: '#8B4513',
                                                    fontWeight: '500'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.2)'}
                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)'}
                                                >
                                                    {link}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Top Articles */}
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '20px'
                                        }}>
                                            Top articles
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            {topArticles.map((article, index) => (
                                                <div key={index} style={{
                                                    padding: '12px 16px',
                                                    backgroundColor: 'rgba(139, 69, 19, 0.1)',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.2)'}
                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)'}
                                                >
                                                    <div style={{
                                                        fontSize: '0.9rem',
                                                        fontWeight: '600',
                                                        color: '#8B4513',
                                                        marginBottom: '5px'
                                                    }}>
                                                        {article.title}
                                                    </div>
                                                    <div style={{
                                                        fontSize: '0.8rem',
                                                        color: '#D6A799'
                                                    }}>
                                                        {article.readTime}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
