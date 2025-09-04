'use client'
import React, { useState } from 'react'
import Layout from "@/components/layout/Layout"

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeFilter, setActiveFilter] = useState('all')
    const [email, setEmail] = useState('')

    const filters = [
        { id: 'all', name: 'All' },
        { id: 'product', name: 'Product' },
        { id: 'agile', name: 'Agile' },
        { id: 'guides', name: 'Guides' },
        { id: 'customer-stories', name: 'Customer stories' }
    ]

    const blogPosts = [
        {
            id: 1,
            title: 'The 2025 Guide to Agile Project Management',
            category: 'guides',
            readTime: '8 min read',
            date: 'Jan 12, 2025',
            description: 'A practical roadmap to sprints, backlog grooming, and Kanban that scales across teams.',
            image: '👥',
            buttonText: 'Read article'
        },
        {
            id: 2,
            title: 'Introducing Advanced Automations',
            category: 'product',
            readTime: '5 min read',
            date: 'Jan 5, 2025',
            description: 'Trigger tasks from CRM events, sync with Slack, and report in real time.',
            image: '📊',
            buttonText: 'Read release'
        },
        {
            id: 3,
            title: 'How Acme scaled onboarding with Task Me',
            category: 'customer-stories',
            readTime: '6 min read',
            date: 'Dec 18, 2024',
            description: 'From scattered spreadsheets to a single source of truth across 12 teams.',
            image: '🤝',
            buttonText: 'Read story'
        }
    ]

    const popularTopics = [
        'Task tracking',
        'Scrum',
        'Kanban',
        'Integrations'
    ]

    const latestPosts = [
        {
            title: 'Sprint Planning Checklist',
            readTime: '4 min read',
            image: '📝'
        },
        {
            title: 'From Ideas to Epics',
            readTime: '7 min read',
            image: '💡'
        },
        {
            title: 'Measure What Matters',
            readTime: '5 min read',
            image: '⌨️'
        }
    ]

    const filteredPosts = blogPosts.filter(post => 
        activeFilter === 'all' || post.category === activeFilter
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
                            {/* Breadcrumbs */}
                            <div style={{
                                fontSize: '0.9rem',
                                color: '#8B4513',
                                marginBottom: '15px',
                                fontWeight: '500'
                            }}>
                                Insights • Tutorials • Product updates
                            </div>
                            
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: '800',
                                color: '#8B4513',
                                marginBottom: '15px',
                                fontFamily: '"Inter", sans-serif',
                                letterSpacing: '-1px'
                            }}>
                                Task Me Blog
                            </h1>
                            <p style={{
                                fontSize: '1rem',
                                color: '#8B4513',
                                maxWidth: '700px',
                                margin: '0 auto 30px auto',
                                lineHeight: '1.6'
                            }}>
                                SEO: project management best practices, agile tips, task tracking, resource planning, workflow automation, productivity for teams.
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
                                        placeholder="Search articles"
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
                                
                                <div style={{
                                    display: 'flex',
                                    gap: '10px',
                                    flexWrap: 'wrap'
                                }}>
                                    {filters.map((filter) => (
                                        <button
                                            key={filter.id}
                                            onClick={() => setActiveFilter(filter.id)}
                                            style={{
                                                backgroundColor: activeFilter === filter.id ? '#D6A799' : 'rgba(255, 255, 255, 0.9)',
                                                color: activeFilter === filter.id ? '#ffffff' : '#8B4513',
                                                border: '1px solid rgba(139, 69, 19, 0.2)',
                                                borderRadius: '20px',
                                                padding: '8px 16px',
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (activeFilter !== filter.id) {
                                                    e.currentTarget.style.backgroundColor = 'rgba(214, 167, 153, 0.2)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (activeFilter !== filter.id) {
                                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                                                }
                                            }}
                                        >
                                            {filter.name}
                                        </button>
                                    ))}
                                </div>
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
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                    {filteredPosts.map((post) => (
                                        <div key={post.id} style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                            borderRadius: '16px',
                                            padding: '30px',
                                            border: '1px solid rgba(139, 69, 19, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                        >
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-sm-12" style={{ marginBottom: '20px' }}>
                                                    <div style={{
                                                        backgroundColor: '#D6A799',
                                                        borderRadius: '12px',
                                                        height: '200px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '4rem',
                                                        color: '#ffffff'
                                                    }}>
                                                        {post.image}
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-7 col-sm-12">
                                                    <div style={{
                                                        fontSize: '0.9rem',
                                                        color: '#D6A799',
                                                        marginBottom: '12px',
                                                        fontWeight: '600',
                                                        textTransform: 'capitalize'
                                                    }}>
                                                        {post.category.replace('-', ' ')} • {post.readTime} • {post.date}
                                                    </div>
                                                    <h2 style={{
                                                        fontSize: '1.5rem',
                                                        fontWeight: '700',
                                                        color: '#8B4513',
                                                        marginBottom: '15px',
                                                        lineHeight: '1.3'
                                                    }}>
                                                        {post.title}
                                                    </h2>
                                                    <p style={{
                                                        fontSize: '1rem',
                                                        color: '#6A6A6A',
                                                        lineHeight: '1.6',
                                                        marginBottom: '20px'
                                                    }}>
                                                        {post.description}
                                                    </p>
                                                    <button style={{
                                                        backgroundColor: '#D6A799',
                                                        color: '#ffffff',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        padding: '10px 20px',
                                                        fontSize: '0.9rem',
                                                        fontWeight: '600',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C4928A'}
                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D6A799'}
                                                    >
                                                        {post.buttonText}
                                                    </button>
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
                                    {/* Subscribe to Updates */}
                                    <div style={{ marginBottom: '30px' }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '15px'
                                        }}>
                                            Subscribe to updates
                                        </h3>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#6A6A6A',
                                            marginBottom: '20px',
                                            lineHeight: '1.5'
                                        }}>
                                            Get monthly product news and tutorials.
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

                                    {/* Popular Topics */}
                                    <div style={{ marginBottom: '30px' }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '20px'
                                        }}>
                                            Popular topics
                                        </h3>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {popularTopics.map((topic, index) => (
                                                <div key={index} style={{
                                                    padding: '8px 16px',
                                                    backgroundColor: 'rgba(139, 69, 19, 0.1)',
                                                    borderRadius: '20px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    fontSize: '0.9rem',
                                                    color: '#8B4513',
                                                    fontWeight: '500'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.2)'}
                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)'}
                                                >
                                                    {topic}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Latest Posts */}
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: '#8B4513',
                                            marginBottom: '20px'
                                        }}>
                                            Latest posts
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            {latestPosts.map((post, index) => (
                                                <div key={index} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '15px',
                                                    padding: '12px',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)'}
                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                >
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#D6A799',
                                                        borderRadius: '8px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '1.5rem',
                                                        color: '#ffffff',
                                                        flexShrink: 0
                                                    }}>
                                                        {post.image}
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{
                                                            fontSize: '0.9rem',
                                                            fontWeight: '600',
                                                            color: '#8B4513',
                                                            marginBottom: '4px',
                                                            lineHeight: '1.3'
                                                        }}>
                                                            {post.title}
                                                        </div>
                                                        <div style={{
                                                            fontSize: '0.8rem',
                                                            color: '#D6A799'
                                                        }}>
                                                            {post.readTime}
                                                        </div>
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
