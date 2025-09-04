'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"

export default function Team_Page() {
    console.log('Team page is loading...')
    
    return (
        <div>
            <Layout headerStyle={4} footerStyle={1}>
                <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h1 style={{ color: '#8B4513', fontSize: '3rem', marginBottom: '20px' }}>
                        Our Leadership Team
                    </h1>
                    <p style={{ color: '#8B4513', fontSize: '1.2rem', marginBottom: '40px' }}>
                        Meet Karan and Naresh, our visionary leaders
                    </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{ 
                            backgroundColor: '#ffffff', 
                            padding: '30px', 
                            borderRadius: '15px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            maxWidth: '300px'
                        }}>
                            <img 
                                src="/assets/images/team/team-1.jpg" 
                                alt="Karan Sharma"
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginBottom: '20px'
                                }}
                            />
                            <h2 style={{ color: '#8B4513', marginBottom: '10px' }}>Karan Sharma</h2>
                            <p style={{ color: '#D6A799', fontWeight: '600', marginBottom: '15px' }}>
                                Chief Executive Officer & Co-Founder
                            </p>
                            <p style={{ color: '#8B4513', lineHeight: '1.6' }}>
                                Visionary leader with 15+ years of experience in product management and business strategy.
                            </p>
                        </div>
                        
                        <div style={{ 
                            backgroundColor: '#ffffff', 
                            padding: '30px', 
                            borderRadius: '15px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            maxWidth: '300px'
                        }}>
                            <img 
                                src="/assets/images/NareshSharma.jpeg" 
                                alt="Naresh Patel"
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginBottom: '20px'
                                }}
                            />
                            <h2 style={{ color: '#8B4513', marginBottom: '10px' }}>Naresh Patel</h2>
                            <p style={{ color: '#D6A799', fontWeight: '600', marginBottom: '15px' }}>
                                Chief Technology Officer & Co-Founder
                            </p>
                            <p style={{ color: '#8B4513', lineHeight: '1.6' }}>
                                Tech innovator and engineering leader with deep expertise in scalable architecture.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}