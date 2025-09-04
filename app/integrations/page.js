'use client'
import React, { useState } from 'react'
import Layout from "@/components/layout/Layout"

export default function IntegrationsPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('all')

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'communication', name: 'Communication' },
        { id: 'crm-sales', name: 'CRM & Sales' },
        { id: 'storage', name: 'Storage' },
        { id: 'automation', name: 'Automation' },
        { id: 'analytics', name: 'Analytics' }
    ]

    const integrations = [
        {
            id: 1,
            name: 'Jira',
            category: 'development',
            description: 'Two-way sync for issues, sprints, and statuses.',
            icon: '🔄',
            buttonText: 'Connect',
            docsButton: true
        },
        {
            id: 2,
            name: 'Slack',
            category: 'communication',
            description: 'Send updates, create tasks, and receive alerts.',
            icon: '💬',
            buttonText: 'Connect',
            docsButton: true
        },
        {
            id: 3,
            name: 'Google Drive',
            category: 'storage',
            description: 'Attach files and sync folders to tasks.',
            icon: '📁',
            buttonText: 'Connect',
            docsButton: true
        },
        {
            id: 4,
            name: 'Microsoft Teams',
            category: 'communication',
            description: 'Messages, meetings, and task activity in one view.',
            icon: '👥',
            buttonText: 'Connect',
            docsButton: true
        },
        {
            id: 5,
            name: 'Zapier',
            category: 'automation',
            description: 'Automate workflows across 5,000+ apps.',
            icon: '⚡',
            buttonText: 'Connect',
            docsButton: true
        },
        {
            id: 6,
            name: 'Notion',
            category: 'docs',
            description: 'Link tasks to docs and sync databases.',
            icon: '📝',
            buttonText: 'Connect',
            docsButton: true
        }
    ]

    const popularIntegrations = [
        {
            id: 1,
            name: 'Slack',
            category: 'communication',
            description: 'Real-time task updates in channels. Assign and comment from Slack.',
            icon: '💬',
            buttonText: 'Connect',
            learnMoreButton: true
        },
        {
            id: 2,
            name: 'Salesforce',
            category: 'crm-sales',
            description: 'Sync opportunities to projects, auto-create tasks from deals.',
            icon: '📊',
            buttonText: 'Connect',
            learnMoreButton: true
        }
    ]

    const integrationSteps = [
        {
            step: 1,
            title: 'Authenticate',
            description: 'Securely sign in with OAuth. We never store your passwords.'
        },
        {
            step: 2,
            title: 'Configure',
            description: 'Choose projects, channels, folders, or triggers.'
        },
        {
            step: 3,
            title: 'Sync',
            description: 'Data stays up to date in real time with granular controls.'
        },
        {
            step: 4,
            title: 'Scale',
            description: 'Use audit logs, SCIM, and role-based access for admins.'
        }
    ]

    const filteredIntegrations = integrations.filter(integration => 
        activeCategory === 'all' || integration.category === activeCategory
    )

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
                                Connect Task Me with your favorite tools
                            </h1>
                            <p style={{
                                fontSize: '1rem',
                                color: '#8B4513',
                                maxWidth: '700px',
                                margin: '0 auto 30px auto',
                                lineHeight: '1.6'
                            }}>
                                Boost productivity with native integrations for CRM, chat, files, reporting, and more. SEO: project management integrations, Jira integration, Slack integration, Salesforce integration, Zapier automation.
                            </p>
                            
                            {/* Search and Filters */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '20px',
                                flexWrap: 'wrap',
                                maxWidth: '800px',
                                margin: '0 auto'
                            }}>
                                <div style={{
                                    position: 'relative',
                                    flex: '1',
                                    minWidth: '300px'
                                }}>
                                    <input
                                        type="text"
                                        placeholder="Search integrations"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '12px 20px',
                                            border: '2px solid rgba(139, 69, 19, 0.2)',
                                            borderRadius: '25px',
                                            fontSize: '1rem',
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            color: '#8B4513',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                                
                                <button style={{
                                    backgroundColor: 'rgba(139, 69, 19, 0.1)',
                                    color: '#8B4513',
                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                    borderRadius: '25px',
                                    padding: '12px 20px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.2)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)'}
                                >
                                    Build with API
                                </button>
                            </div>

                            {/* Category Filters */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginTop: '20px'
                            }}>
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        style={{
                                            backgroundColor: activeCategory === category.id ? '#D6A799' : 'rgba(255, 255, 255, 0.9)',
                                            color: activeCategory === category.id ? '#ffffff' : '#8B4513',
                                            border: '1px solid rgba(139, 69, 19, 0.2)',
                                            borderRadius: '20px',
                                            padding: '8px 16px',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (activeCategory !== category.id) {
                                                e.currentTarget.style.backgroundColor = 'rgba(214, 167, 153, 0.2)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeCategory !== category.id) {
                                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                                            }
                                        }}
                                    >
                                        {category.name}
                                    </button>
                                ))}
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
                                {/* Integration Cards Grid */}
                                <div className="row">
                                    {filteredIntegrations.map((integration) => (
                                        <div key={integration.id} className="col-lg-6 col-md-6 col-sm-12" style={{ marginBottom: '20px' }}>
                                            <div style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                borderRadius: '16px',
                                                padding: '25px',
                                                border: '1px solid rgba(139, 69, 19, 0.2)',
                                                height: '100%',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                            >
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginBottom: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#D6A799',
                                                        borderRadius: '8px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '1.5rem',
                                                        color: '#ffffff',
                                                        marginRight: '15px'
                                                    }}>
                                                        {integration.icon}
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <h3 style={{
                                                            fontSize: '1.1rem',
                                                            fontWeight: '700',
                                                            color: '#8B4513',
                                                            marginBottom: '5px'
                                                        }}>
                                                            {integration.name}
                                                        </h3>
                                                        <div style={{
                                                            backgroundColor: 'rgba(139, 69, 19, 0.1)',
                                                            color: '#8B4513',
                                                            padding: '4px 8px',
                                                            borderRadius: '12px',
                                                            fontSize: '0.7rem',
                                                            fontWeight: '600',
                                                            textTransform: 'capitalize',
                                                            display: 'inline-block'
                                                        }}>
                                                            {integration.category.replace('-', ' ')}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <p style={{
                                                    fontSize: '0.9rem',
                                                    color: '#6A6A6A',
                                                    lineHeight: '1.5',
                                                    marginBottom: '20px'
                                                }}>
                                                    {integration.description}
                                                </p>
                                                
                                                <div style={{
                                                    display: 'flex',
                                                    gap: '10px'
                                                }}>
                                                    <button style={{
                                                        backgroundColor: '#D6A799',
                                                        color: '#ffffff',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        padding: '8px 16px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        flex: 1
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C4928A'}
                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D6A799'}
                                                    >
                                                        {integration.buttonText}
                                                    </button>
                                                    {integration.docsButton && (
                                                        <button style={{
                                                            backgroundColor: 'rgba(139, 69, 19, 0.1)',
                                                            color: '#8B4513',
                                                            border: '1px solid rgba(139, 69, 19, 0.2)',
                                                            borderRadius: '8px',
                                                            padding: '8px 16px',
                                                            fontSize: '0.8rem',
                                                            fontWeight: '600',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.2)'}
                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)'}
                                                        >
                                                            Docs
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
                                    {/* Popular This Week */}
                                    <div style={{ marginBottom: '30px' }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '20px'
                                        }}>
                                            Popular this week
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                            {popularIntegrations.map((integration) => (
                                                <div key={integration.id} style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                    borderRadius: '12px',
                                                    padding: '20px',
                                                    border: '1px solid rgba(139, 69, 19, 0.2)',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                                >
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        marginBottom: '12px'
                                                    }}>
                                                        <div style={{
                                                            width: '35px',
                                                            height: '35px',
                                                            backgroundColor: '#D6A799',
                                                            borderRadius: '8px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '1.2rem',
                                                            color: '#ffffff',
                                                            marginRight: '12px'
                                                        }}>
                                                            {integration.icon}
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <h4 style={{
                                                                fontSize: '1rem',
                                                                fontWeight: '700',
                                                                color: '#8B4513',
                                                                marginBottom: '4px'
                                                            }}>
                                                                {integration.name}
                                                            </h4>
                                                            <div style={{
                                                                backgroundColor: 'rgba(139, 69, 19, 0.1)',
                                                                color: '#8B4513',
                                                                padding: '3px 6px',
                                                                borderRadius: '10px',
                                                                fontSize: '0.6rem',
                                                                fontWeight: '600',
                                                                textTransform: 'capitalize',
                                                                display: 'inline-block'
                                                            }}>
                                                                {integration.category.replace('-', ' ')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <p style={{
                                                        fontSize: '0.8rem',
                                                        color: '#6A6A6A',
                                                        lineHeight: '1.4',
                                                        marginBottom: '15px'
                                                    }}>
                                                        {integration.description}
                                                    </p>
                                                    
                                                    <div style={{
                                                        display: 'flex',
                                                        gap: '8px'
                                                    }}>
                                                        <button style={{
                                                            backgroundColor: '#D6A799',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            padding: '6px 12px',
                                                            fontSize: '0.7rem',
                                                            fontWeight: '600',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            flex: 1
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C4928A'}
                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D6A799'}
                                                        >
                                                            {integration.buttonText}
                                                        </button>
                                                        {integration.learnMoreButton && (
                                                            <button style={{
                                                                backgroundColor: 'rgba(139, 69, 19, 0.1)',
                                                                color: '#8B4513',
                                                                border: '1px solid rgba(139, 69, 19, 0.2)',
                                                                borderRadius: '6px',
                                                                padding: '6px 12px',
                                                                fontSize: '0.7rem',
                                                                fontWeight: '600',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.2)'}
                                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)'}
                                                            >
                                                                Learn more
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* How Integrations Work */}
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '20px'
                                        }}>
                                            How integrations work
                                        </h3>
                                        <div className="row">
                                            {integrationSteps.map((step, index) => (
                                                <div key={index} className="col-6" style={{ marginBottom: '15px' }}>
                                                    <div style={{
                                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                        borderRadius: '12px',
                                                        padding: '15px',
                                                        border: '1px solid rgba(139, 69, 19, 0.2)',
                                                        height: '100%',
                                                        textAlign: 'center'
                                                    }}>
                                                        <div style={{
                                                            width: '30px',
                                                            height: '30px',
                                                            backgroundColor: '#D6A799',
                                                            color: '#ffffff',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '0.9rem',
                                                            fontWeight: '700',
                                                            margin: '0 auto 10px auto'
                                                        }}>
                                                            {step.step}
                                                        </div>
                                                        <h4 style={{
                                                            fontSize: '0.9rem',
                                                            fontWeight: '700',
                                                            color: '#8B4513',
                                                            marginBottom: '8px'
                                                        }}>
                                                            {step.title}
                                                        </h4>
                                                        <p style={{
                                                            fontSize: '0.7rem',
                                                            color: '#6A6A6A',
                                                            lineHeight: '1.4',
                                                            margin: '0'
                                                        }}>
                                                            {step.description}
                                                        </p>
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
