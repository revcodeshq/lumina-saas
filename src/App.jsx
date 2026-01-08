import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './mobile-glass.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <main>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
