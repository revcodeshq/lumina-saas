import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0) // Default to first item open

    const faqs = [
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period."
        },
        {
            question: "Is there a free trial available?",
            answer: "We offer a 14-day free trial for all Pro plans. No credit card required to start."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, Amex) as well as PayPal and wire transfers for Enterprise plans."
        },
        {
            question: "Can I change plans later?",
            answer: "Absolutely! You can upgrade or downgrade your plan at any time from your account settings. Prorated charges will apply."
        },
        {
            question: "Do you offer discounts for non-profits?",
            answer: "Yes, we offer a 50% discount for registered non-profit organizations. Please contact our sales team for verification."
        }
    ]

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="section faq-section">
            <div className="container faq-container">
                <div className="section-header">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle">
                        Have questions? We've got answers. If you can't find what you're looking for, contact our support.
                    </p>
                </div>
                <div className="accordion">
                    {faqs.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <button
                                className="accordion-trigger"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                            >
                                {faq.question}
                                <svg
                                    className={`icon-chevron ${openIndex === index ? 'open' : ''}`}
                                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                                <p className="accordion-text">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
