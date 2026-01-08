import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    // Theme state management
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
        return false
    })

    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.removeAttribute('data-theme')
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])

    const toggleTheme = () => setIsDark(!isDark)

    // Handle anchor links for home page
    const isHome = location.pathname === '/'

    const handleScroll = (e, id) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    <div className="logo-icon"></div>
                    Lumina
                </Link>

                <div className="nav-links">

                    {isHome ? (
                        <>
                            <a href="#features" className="nav-link" onClick={(e) => handleScroll(e, 'features')}>Features</a>
                            <a href="#pricing" className="nav-link" onClick={(e) => handleScroll(e, 'pricing')}>Pricing</a>
                            <a href="#faq" className="nav-link" onClick={(e) => handleScroll(e, 'faq')}>FAQ</a>
                        </>
                    ) : (
                        <Link to="/" className="nav-link">Home</Link>
                    )}

                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
                        {isDark ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                    </button>
                    <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
