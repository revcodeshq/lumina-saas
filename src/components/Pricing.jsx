import React, { useState } from 'react'
import './Pricing.css'

const Pricing = () => {
    const [users, setUsers] = useState(5)
    const basePrice = 29

    const plans = [
        {
            name: "Basic",
            price: "$0",
            period: "/month",
            desc: "Perfect for individuals and hobbyists.",
            features: ["Up to 3 projects", "Basic analytics", "Community support"],
            cta: "Get Started",
            featured: false
        },
        {
            name: "Pro",
            price: `$${users * basePrice}`,
            period: "/month",
            desc: "For growing teams that need more power.",
            features: ["Unlimited projects", "Advanced analytics", "Priority support", "Team collaboration", "API Access"],
            cta: "Try Pro Free",
            featured: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            desc: "For large organizations with specific needs.",
            features: ["Unlimited seats", "SSO & Security", "Dedicated manager", "SLA support", "On-premise option"],
            cta: "Contact Sales",
            featured: false
        }
    ]

    return (
        <section className="section pricing-section" id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Simple, transparent pricing</h2>
                    <p className="section-subtitle">
                        Choose the plan that's right for you. No credit card required.
                    </p>
                </div>

                {/* Pricing Calculator Control */}
                <div className="pricing-calculator">
                    <label htmlFor="user-slider" className="calculator-label">
                        Team Size: <span className="highlight-value">{users} users</span>
                    </label>
                    <input
                        type="range"
                        id="user-slider"
                        min="1"
                        max="50"
                        value={users}
                        onChange={(e) => setUsers(parseInt(e.target.value))}
                        className="slider"
                    />
                    <p className="calculator-note">Estimated for Pro Plan: ${users * basePrice}/mo</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={index}>
                            {plan.featured && <span className="popular-badge">Most Popular</span>}
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">
                                <span className="price-amount">{plan.price}</span>
                                <span className="price-period">{plan.period}</span>
                            </div>
                            <p className="plan-desc">{plan.desc}</p>
                            <ul className="plan-features">
                                {plan.features.map((feat, i) => (
                                    <li className="feature-item" key={i}>
                                        <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className={`btn pricing-btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
