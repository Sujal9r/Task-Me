'use client'
import React, { useState } from 'react'
import Layout from "@/components/layout/Layout"

export default function CareersPage() {
    const [activeRole, setActiveRole] = useState('all')
    const [email, setEmail] = useState('')

    const roleFilters = [
        { id: 'all', name: 'All roles' },
        { id: 'engineering', name: 'Engineering' },
        { id: 'design', name: 'Design' },
        { id: 'product', name: 'Product' },
        { id: 'go-to-market', name: 'Go-To-Market' },
        { id: 'internships', name: 'Internships' }
    ]

    const jobListings = [
        {
            id: 1,
            title: 'Senior Frontend Engineer',
            department: 'engineering',
            location: 'Remote',
            type: 'Full-time',
            salary: '$140k-$180k',
            description: 'Build intuitive user interfaces and experiences that millions of users rely on daily.'
        },
        {
            id: 2,
            title: 'Product Designer',
            department: 'design',
            location: 'Remote',
            type: 'Full-time',
            salary: '$120k-$150k',
            description: 'Create beautiful, functional designs that solve real user problems.'
        },
        {
            id: 3,
            title: 'Solutions Engineer (Integrations)',
            department: 'engineering',
            location: 'Remote',
            type: 'Full-time',
            salary: '$130k-$160k',
            description: 'Help customers integrate Task Me into their existing workflows.'
        }
    ]

    const teamsHiring = [
        'Engineering',
        'Design',
        'Sales',
        'Customer Success'
    ]

    const interviewProcess = [
        { step: 1, title: 'Recruiter screen', duration: '30m' },
        { step: 2, title: 'Technical/Portfolio', duration: '60–90m' },
        { step: 3, title: 'Team interviews', duration: '2× 45m' },
        { step: 4, title: 'Founder chat', duration: '30m' },
        { step: 5, title: 'Offer', duration: '' }
    ]

    const lifeAtTaskMe = [
        'Remote-first, async collaboration',
        'Competitive salary and equity',
        'Annual learning stipend',
        'Team offsites twice a year'
    ]

    const filteredJobs = jobListings.filter(job => 
        activeRole === 'all' || job.department === activeRole
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
                                Careers at Task Me
                            </h1>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#8B4513',
                                maxWidth: '700px',
                                margin: '0 auto 30px auto',
                                lineHeight: '1.6'
                            }}>
                                Help us build the future of asset and task management. We're a remote-first team shipping fast, learning faster.
                            </p>
                            
                            {/* Role Filters */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '10px',
                                flexWrap: 'wrap'
                            }}>
                                {roleFilters.map((role) => (
                                    <button
                                        key={role.id}
                                        onClick={() => setActiveRole(role.id)}
                                        style={{
                                            backgroundColor: activeRole === role.id ? '#D6A799' : 'rgba(139, 69, 19, 0.1)',
                                            color: activeRole === role.id ? '#ffffff' : '#8B4513',
                                            border: '1px solid rgba(139, 69, 19, 0.2)',
                                            borderRadius: '20px',
                                            padding: '8px 16px',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (activeRole !== role.id) {
                                                e.currentTarget.style.backgroundColor = 'rgba(214, 167, 153, 0.2)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeRole !== role.id) {
                                                e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)';
                                            }
                                        }}
                                    >
                                        {role.name}
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
                                {/* Open Positions */}
                                <div style={{ marginBottom: '50px' }}>
                                    <h2 style={{
                                        fontSize: '1.8rem',
                                        fontWeight: '700',
                                        color: '#8B4513',
                                        marginBottom: '25px'
                                    }}>
                                        Open positions
                                    </h2>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        {filteredJobs.map((job) => (
                                            <div key={job.id} style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                borderRadius: '12px',
                                                padding: '25px',
                                                border: '1px solid rgba(139, 69, 19, 0.2)',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                            >
                                                <div style={{ flex: 1 }}>
                                                    <h3 style={{
                                                        fontSize: '1.2rem',
                                                        fontWeight: '600',
                                                        color: '#8B4513',
                                                        marginBottom: '8px'
                                                    }}>
                                                        {job.title}
                                                    </h3>
                                                    <div style={{
                                                        fontSize: '0.9rem',
                                                        color: '#6A6A6A',
                                                        marginBottom: '8px'
                                                    }}>
                                                        {job.location} • {job.type} • {job.salary}
                                                    </div>
                                                    <p style={{
                                                        fontSize: '0.9rem',
                                                        color: '#6A6A6A',
                                                        lineHeight: '1.5',
                                                        margin: '0'
                                                    }}>
                                                        {job.description}
                                                    </p>
                                                </div>
                                                <button style={{
                                                    backgroundColor: '#D6A799',
                                                    color: '#ffffff',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    padding: '10px 20px',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    whiteSpace: 'nowrap'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C4928A'}
                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D6A799'}
                                                >
                                                    View role
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Life at Task Me */}
                                <div>
                                    <h2 style={{
                                        fontSize: '1.8rem',
                                        fontWeight: '700',
                                        color: '#8B4513',
                                        marginBottom: '25px'
                                    }}>
                                        Life at Task Me
                                    </h2>
                                    <div style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        borderRadius: '12px',
                                        padding: '25px',
                                        border: '1px solid rgba(139, 69, 19, 0.2)'
                                    }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            {lifeAtTaskMe.map((benefit, index) => (
                                                <div key={index} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    fontSize: '1rem',
                                                    color: '#8B4513'
                                                }}>
                                                    <span style={{
                                                        color: '#D6A799',
                                                        fontSize: '1.2rem'
                                                    }}>✓</span>
                                                    {benefit}
                                                </div>
                                            ))}
                                        </div>
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
                                    {/* Get Job Alerts */}
                                    <div style={{ marginBottom: '30px' }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '15px'
                                        }}>
                                            Get job alerts
                                        </h3>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#6A6A6A',
                                            marginBottom: '20px',
                                            lineHeight: '1.5'
                                        }}>
                                            Be the first to know when new roles open.
                                        </p>
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '12px 16px',
                                                border: '1px solid rgba(139, 69, 19, 0.2)',
                                                borderRadius: '8px',
                                                fontSize: '0.9rem',
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                color: '#8B4513',
                                                marginBottom: '15px',
                                                outline: 'none'
                                            }}
                                        />
                                        <button style={{
                                            width: '100%',
                                            backgroundColor: '#D6A799',
                                            color: '#ffffff',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '12px 16px',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C4928A'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D6A799'}
                                        >
                                            Subscribe
                                        </button>
                                    </div>

                                    {/* Teams Hiring */}
                                    <div style={{ marginBottom: '30px' }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '20px'
                                        }}>
                                            Teams hiring
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {teamsHiring.map((team, index) => (
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
                                                    {team}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Interview Process */}
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '20px'
                                        }}>
                                            Interview process
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            {interviewProcess.map((step, index) => (
                                                <div key={index} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '15px'
                                                }}>
                                                    <div style={{
                                                        width: '24px',
                                                        height: '24px',
                                                        backgroundColor: '#D6A799',
                                                        color: '#ffffff',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        flexShrink: 0
                                                    }}>
                                                        {step.step}
                                                    </div>
                                                    <div>
                                                        <div style={{
                                                            fontSize: '0.9rem',
                                                            fontWeight: '600',
                                                            color: '#8B4513'
                                                        }}>
                                                            {step.title}
                                                        </div>
                                                        {step.duration && (
                                                            <div style={{
                                                                fontSize: '0.8rem',
                                                                color: '#D6A799'
                                                            }}>
                                                                {step.duration}
                                                            </div>
                                                        )}
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
