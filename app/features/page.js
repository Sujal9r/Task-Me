'use client'
import React, { useState } from 'react'
import Layout from "@/components/layout/Layout"

export default function FeaturesPage() {
    const [activeTab, setActiveTab] = useState('boards')

    const featureTabs = [
        { id: 'boards', label: 'Boards & Lists' },
        { id: 'sprints', label: 'Sprints & Backlogs' },
        { id: 'assets', label: 'Asset Management' },
        { id: 'automation', label: 'Automation & AI' },
        { id: 'dashboards', label: 'Dashboards & Reports' }
    ]

    const featureContent = {
        boards: {
            title: 'Boards & List Views',
            description: 'Organize work with drag-and-drop Kanban boards and fast list views. SEO: Kanban software, task management tool, agile board.',
            features: [
                [
                    { icon: '🗂️', text: 'Swimlanes, WIP limits, custom fields' },
                    { icon: '🔽', text: 'Filters, saved views, quick sort' },
                    { icon: '📝', text: 'Inline edit and multi-select actions' }
                ],
                [
                    { icon: '👥', text: 'Assignees, mentions, and watchers' },
                    { icon: '⏰', text: 'Due dates, reminders, SLA targets' },
                    { icon: '🔗', text: 'Dependencies and subtasks' }
                ],
                [
                    { icon: '🗓️', text: 'Timeline and calendar views' },
                    { icon: '⚙️', text: 'Custom workflows & statuses' },
                    { icon: '🔗', text: 'Shareable public views' }
                ]
            ]
        },
        sprints: {
            title: 'Sprints & Agile Backlogs',
            description: 'Plan iterations, prioritize backlogs, and track velocity. SEO: Scrum software, sprint planning, agile project management.',
            features: [
                [
                    { icon: '📊', text: 'Estimation, story points, capacity' },
                    { icon: '📈', text: 'Burndown and burnup charts' },
                    { icon: '🔄', text: 'Sprint rituals: plan, standup, retro' }
                ],
                [
                    { icon: '🚀', text: 'Release management & versions' },
                    { icon: '📋', text: 'Backlog to board in one click' },
                    { icon: '🎯', text: 'Objectives and key results' }
                ],
                [
                    { icon: '⏱️', text: 'Time tracking & timesheets' },
                    { icon: '💪', text: 'Workload & capacity planning' },
                    { icon: '⚠️', text: 'Risk tracking and blockers' }
                ]
            ]
        },
        assets: {
            title: 'Asset Management',
            description: 'Track digital and physical assets with ownership, versions, and approvals. SEO: asset tracking system, asset management software.',
            features: [
                [
                    { icon: '📜', text: 'Version history and audit trails' },
                    { icon: '✅', text: 'Approval workflows & SLAs' },
                    { icon: '↔️', text: 'Link assets to tasks and epics' }
                ],
                [
                    { icon: '📱', text: 'QR codes & location tracking' },
                    { icon: '👤', text: 'Role-based permissions' },
                    { icon: '☁️', text: 'Cloud storage integrations' }
                ],
                [
                    { icon: '🔄', text: 'Lifecycle & maintenance schedules' },
                    { icon: '🔒', text: 'Security, SOC 2, GDPR' },
                    { icon: '💰', text: 'Cost & depreciation insights' }
                ]
            ]
        },
        automation: {
            title: 'Automation & AI',
            description: 'Automate repetitive work and get AI suggestions for next steps. SEO: workflow automation, AI project management, task automation.',
            features: [
                [
                    { icon: '💡', text: 'AI TaskFlow: next-best action' },
                    { icon: '🗓️', text: 'Smart assignments & due dates' },
                    { icon: '🗣️', text: 'Natural language task creation' }
                ],
                [
                    { icon: '⚡', text: 'Triggers: status change, due date, comments' },
                    { icon: '⚙️', text: 'Multi-step workflows & approvals' },
                    { icon: '🔌', text: 'Webhooks & integrations' }
                ],
                [
                    { icon: '🛡️', text: 'Guardrails & audit logs' },
                    { icon: '🚨', text: 'SLA rules & escalations' },
                    { icon: '🔔', text: 'Notifications & reminders' }
                ]
            ]
        },
        dashboards: {
            title: 'Dashboards & Reports',
            description: 'Real-time visibility into delivery and performance. SEO: project reporting, burndown charts, workload analytics.',
            features: [
                [
                    { icon: '📈', text: 'Velocity, burndown, burnup' },
                    { icon: '📊', text: 'Custom dashboards with widgets' },
                    { icon: '🗓️', text: 'Forecasts and timelines' }
                ],
                [
                    { icon: '📤', text: 'Export to CSV & BI tools' },
                    { icon: '💪', text: 'Workload & capacity' },
                    { icon: '🌐', text: 'Cross-project rollups' }
                ],
                [
                    { icon: '✅', text: 'SLA compliance & approvals' },
                    { icon: '🎯', text: 'Goals, KPIs, OKRs tracking' },
                    { icon: '📄', text: 'Templates & best practices' }
                ]
            ]
        }
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                {/* Hero Section */}
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
                                    Everything you need to plan, track, and ship
                                </h1>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#8B4513',
                                    marginBottom: '30px',
                                    lineHeight: '1.6'
                                }}>
                                    Modern project management with Kanban boards, Scrum sprints, AI-assisted workflows, asset tracking, dashboards, and automation. Optimized for SEO keywords like "project management software," "Kanban tool," "Jira alternative," and "Asana alternative."
                                </p>
                                <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
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
                                        <span style={{ fontSize: '1.2rem' }}>▶️</span>
                                        Watch Features Demo
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
                                        Read Docs
                                    </button>
                                </div>
                                
                                {/* Key Metrics */}
                                <div className="row">
                                    <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                        <div style={{
                                            backgroundColor: '#D6A799',
                                            borderRadius: '12px',
                                            padding: '20px',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '1.5rem',
                                                fontWeight: '700',
                                                color: '#ffffff',
                                                marginBottom: '8px'
                                            }}>30% faster</div>
                                            <div style={{
                                                fontSize: '0.9rem',
                                                color: '#F4ECE2'
                                            }}>average time-to-ship with Task Me</div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                        <div style={{
                                            backgroundColor: '#D6A799',
                                            borderRadius: '12px',
                                            padding: '20px',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '1.5rem',
                                                fontWeight: '700',
                                                color: '#ffffff',
                                                marginBottom: '8px'
                                            }}>99.9% uptime</div>
                                            <div style={{
                                                fontSize: '0.9rem',
                                                color: '#F4ECE2'
                                            }}>enterprise-ready reliability</div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                        <div style={{
                                            backgroundColor: '#D6A799',
                                            borderRadius: '12px',
                                            padding: '20px',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '1.5rem',
                                                fontWeight: '700',
                                                color: '#ffffff',
                                                marginBottom: '8px'
                                            }}>AI-powered</div>
                                            <div style={{
                                                fontSize: '0.9rem',
                                                color: '#F4ECE2'
                                            }}>smart assignment & automation</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <img src='/assets/images/feature2.png' alt='Feature Hero'/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Categories Navigation */}
                <section style={{
                    padding: '40px 0',
                    background: 'linear-gradient(135deg, #F4ECE2 0%, #F7F2EA 50%, #F0E6D8 100%)',
                    borderTop: '1px solid rgba(139, 69, 19, 0.1)'
                }}>
                    <div className="container">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                            flexWrap: 'wrap'
                        }}>
                            {featureTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        backgroundColor: activeTab === tab.id ? '#D6A799' : 'transparent',
                                        color: activeTab === tab.id ? '#ffffff' : '#8B4513',
                                        border: '1px solid rgba(139, 69, 19, 0.3)',
                                        borderRadius: '8px',
                                        padding: '12px 24px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeTab !== tab.id) {
                                            e.currentTarget.style.backgroundColor = 'rgba(214, 167, 153, 0.2)';
                                            e.currentTarget.style.color = '#8B4513';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeTab !== tab.id) {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.color = '#8B4513';
                                        }
                                    }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Feature Content */}
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
                            }}>{featureContent[activeTab].title}</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}>{featureContent[activeTab].description}</p>
                        </div>

                        <div className="row">
                            {featureContent[activeTab].features.map((column, columnIndex) => (
                                <div key={columnIndex} className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {column.map((feature, featureIndex) => (
                                            <li key={featureIndex} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                marginBottom: '20px',
                                                color: '#8B4513',
                                                fontSize: '1rem',
                                                lineHeight: '1.5'
                                            }}>
                                                <span style={{
                                                    color: '#D6A799',
                                                    marginRight: '12px',
                                                    fontSize: '1.2rem',
                                                    marginTop: '2px'
                                                }}>{feature.icon}</span>
                                                {feature.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action Section with Calendar Image */}
                <section style={{
                    padding: '80px 0',
                    background: 'linear-gradient(135deg, #F4ECE2 0%, #F7F2EA 50%, #F0E6D8 100%)',
                    position: 'relative'
                }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: '800',
                                    color: '#8B4513',
                                    marginBottom: '20px',
                                    fontFamily: '"Inter", sans-serif',
                                    letterSpacing: '-1px'
                                }}>See Task Me in action</h2>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#8B4513',
                                    marginBottom: '30px',
                                    lineHeight: '1.6'
                                }}>
                                    Get a guided walkthrough tailored to your workflow. No credit card required.
                                </p>
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
                                        <span style={{ fontSize: '1.2rem' }}>📅</span>
                                        Book a Demo
                                    </button>
                                    <a href="/trial" style={{
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
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
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
                                        <span style={{ fontSize: '1.2rem' }}>👤</span>
                                        Try Free
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                {/* Calendar/Content Board Image */}
                                <div style={{
                                    width: '100%',
                                    height: '400px',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    border: '1px solid #D6A799',
                                    position: 'relative'
                                }}>
                                    {/* Calendar Grid */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(6, 1fr)',
                                        gridTemplateRows: 'repeat(5, 1fr)',
                                        gap: '8px',
                                        height: '100%',
                                        width: '100%'
                                    }}>
                                        {/* Header Row */}
                                        <div style={{ gridColumn: '1', gridRow: '1', fontWeight: 'bold', color: '#8B4513', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '2', gridRow: '1', fontWeight: 'bold', color: '#8B4513', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>MON</div>
                                        <div style={{ gridColumn: '3', gridRow: '1', fontWeight: 'bold', color: '#8B4513', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TUE</div>
                                        <div style={{ gridColumn: '4', gridRow: '1', fontWeight: 'bold', color: '#8B4513', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>WED</div>
                                        <div style={{ gridColumn: '5', gridRow: '1', fontWeight: 'bold', color: '#8B4513', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>THU</div>
                                        <div style={{ gridColumn: '6', gridRow: '1', fontWeight: 'bold', color: '#8B4513', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>FRI</div>
                                        
                                        {/* Platform Rows */}
                                        <div style={{ gridColumn: '1', gridRow: '2', fontWeight: 'bold', color: '#8B4513', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TWITTER</div>
                                        <div style={{ gridColumn: '2', gridRow: '2', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '3', gridRow: '2', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '4', gridRow: '2', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '5', gridRow: '2', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '6', gridRow: '2', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        
                                        <div style={{ gridColumn: '1', gridRow: '3', fontWeight: 'bold', color: '#8B4513', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TIK TOK</div>
                                        <div style={{ gridColumn: '2', gridRow: '3', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                            <div style={{ backgroundColor: '#D6A799', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>CULTURE</div>
                                        </div>
                                        <div style={{ gridColumn: '3', gridRow: '3', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '4', gridRow: '3', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                            <div style={{ backgroundColor: '#C4928A', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>FUN FACT</div>
                                        </div>
                                        <div style={{ gridColumn: '5', gridRow: '3', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '6', gridRow: '3', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        
                                        <div style={{ gridColumn: '1', gridRow: '4', fontWeight: 'bold', color: '#8B4513', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>INSTAGRAM</div>
                                        <div style={{ gridColumn: '2', gridRow: '4', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '3', gridRow: '4', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '4', gridRow: '4', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '5', gridRow: '4', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                            <div style={{ backgroundColor: '#B5857A', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>HOW-TO</div>
                                        </div>
                                        <div style={{ gridColumn: '6', gridRow: '4', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        
                                        <div style={{ gridColumn: '1', gridRow: '5', fontWeight: 'bold', color: '#8B4513', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>FACEBOOK</div>
                                        <div style={{ gridColumn: '2', gridRow: '5', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '3', gridRow: '5', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                            <div style={{ backgroundColor: '#A0522D', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>PRODUCT</div>
                                        </div>
                                        <div style={{ gridColumn: '4', gridRow: '5', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '5', gridRow: '5', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                        <div style={{ gridColumn: '6', gridRow: '5', backgroundColor: '#F4ECE2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                    </div>
                                    
                                    {/* Status Indicators */}
                                    <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <div style={{ width: '12px', height: '12px', backgroundColor: '#D6A799', borderRadius: '50%' }}></div>
                                        <div style={{ width: '12px', height: '12px', backgroundColor: '#C4928A', borderRadius: '50%' }}></div>
                                        <div style={{ width: '12px', height: '12px', backgroundColor: '#F4ECE2', border: '1px solid #D6A799', borderRadius: '50%' }}></div>
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
