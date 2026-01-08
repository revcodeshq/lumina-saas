import React from 'react'
import './Features.css'

const Features = () => {
    const features = [
        {
            icon: "📊",
            title: "Advanced Analytics",
            desc: "Gain deep insights into your business performance with our comprehensive analytics dashboard."
        },
        {
            icon: "⚡",
            title: "Real-time Sync",
            desc: "Changes update instantly across all devices. Never worry about stale data again."
        },
        {
            icon: "🛡️",
            title: "Enterprise Security",
            desc: "Bank-grade encryption and SSO protection keep your data safe and compliant."
        }
    ]

    return (
        <section className="section features-section" id="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Everything you need</h2>
                    <p className="section-subtitle">
                        Powerful features built to help you scale your business without the friction.
                    </p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
