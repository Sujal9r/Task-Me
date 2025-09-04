'use client';
import React from 'react';

const companies = [
  "TechCorp",
  "InnovateLab", 
  "DataSystems",
  "CloudFirst",
  "NextGen Solutions",
  "Digital Dynamics"
];

export default function Slider() {
  return (
    <div 
      style={{
        position: 'relative',
        padding: '64px 24px',
        background: 'linear-gradient(135deg, #F4ECE2 0%, #C88C82 50%, #D6A799 100%)',
        overflow: 'hidden',
        minHeight: '400px'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(200, 140, 130, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '8px',
          height: '8px',
          background: 'rgba(200, 140, 130, 0.3)',
          borderRadius: '50%',
          animation: 'pulse 2s infinite'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '75%',
          right: '33%',
          width: '4px',
          height: '4px',
          background: 'rgba(214, 167, 153, 0.4)',
          borderRadius: '50%',
          animation: 'ping 1s infinite',
          animationDelay: '1s'
        }}
      />

      <style>
        {`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
          }
          .scroll-container {
            animation: infiniteScroll 35s linear infinite;
          }
          .logo-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .logo-hover:hover {
            transform: translateY(-8px) scale(1.1);
            filter: brightness(1.15) drop-shadow(0 10px 20px rgba(200, 140, 130, 0.4));
          }
          .glow-effect {
            transition: opacity 0.5s ease;
            opacity: 0;
          }
          .logo-container:hover .glow-effect {
            opacity: 1;
          }
          .company-text {
            transition: all 0.3s ease;
          }
          .logo-container:hover .company-text {
            color: rgba(200, 140, 130, 1);
            text-shadow: 0 2px 8px rgba(200, 140, 130, 0.3);
          }
        `}
      </style>

      <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto' }}>
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '64px',
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}
        >
          <div style={{ display: 'inline-block' }}>
            <span 
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#F4ECE2',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '8px',
                display: 'block'
              }}
            >
              Trusted Partners
            </span>
            <div 
              style={{
                width: '96px',
                height: '4px',
                background: 'linear-gradient(90deg, #C88C82 0%, #D6A799 100%)',
                margin: '0 auto',
                borderRadius: '2px'
              }}
            />
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ overflow: 'hidden', padding: '30px 0' }}>
            <div 
              className="scroll-container"
              style={{
                display: 'flex',
                alignItems: 'center',
                width: 'max-content'
              }}
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div key={index} style={{ flexShrink: 0, margin: '0 32px' }}>
                  <div className="logo-hover logo-container" style={{ position: 'relative', cursor: 'pointer' }}>
                    <div 
                      className="glow-effect"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(200, 140, 130, 0.25) 0%, rgba(214, 167, 153, 0.25) 100%)',
                        borderRadius: '16px',
                        filter: 'blur(20px)'
                      }}
                    />
                    
                    <div 
                      style={{
                        position: 'relative',
                        background: 'rgba(244, 236, 226, 0.7)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(200, 140, 130, 0.3)',
                        borderRadius: '16px',
                        padding: '24px 32px',
                        transition: 'all 0.3s ease',
                        minWidth: '120px',
                        textAlign: 'center'
                      }}
                    >
                      <span
                        className="company-text"
                        style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          color: 'rgba(139, 69, 19, 0.8)',
                          letterSpacing: '0.025em',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}