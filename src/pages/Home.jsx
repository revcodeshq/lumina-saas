import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Pricing />
            <FAQ />
            <footer className="footer">
                <div className="container">
                    <p>© 2024 Lumina. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Home
