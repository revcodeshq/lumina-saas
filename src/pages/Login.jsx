import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: Connect to auth provider
        console.log('Logging in with:', email, password)
        navigate('/')
    }

    return (
        <div className="container section login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome Back</h2>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input"
                            placeholder="you@company.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary login-btn">
                        Sign In
                    </button>
                </form>

                <p className="login-footer">
                    Don't have an account? <Link to="/" className="login-link">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
