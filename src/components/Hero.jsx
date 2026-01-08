import React from 'react'

const Hero = () => {
  return (
    <section className="section hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">New Lumina v2.0</div>
          <h1 className="hero-title">
            The standard for <span className="gradient-text">modern SaaS</span>
          </h1>
          <p className="hero-subtitle">
            Streamline your operations with our all-in-one platform.
            Built for scalability, security, and developer experience.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Start Building Free</button>
            <button className="btn btn-secondary">Documentation</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">10k+</span>
              <span className="stat-label">Developers</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-placeholder">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="mockup-body">
                <div className="skeleton-line w-75"></div>
                <div className="skeleton-line w-50"></div>
                <div className="skeleton-grid">
                  <div className="skeleton-card"></div>
                  <div className="skeleton-card"></div>
                  <div className="skeleton-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
