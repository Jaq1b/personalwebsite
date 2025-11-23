import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Credentials from './components/Credentials'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(
    location.pathname === '/' ? 'home' : location.pathname.slice(1)
  )

  const tabs = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'credentials', label: 'Credentials', path: '/credentials' },
    { id: 'projects', label: 'Projects', path: '/projects' },
  ]

  const handleTabClick = (tab) => {
    setActiveTab(tab.id)
    navigate(tab.path)
  }

  const isHomePage = location.pathname === '/'

  return (
    <div className={`app ${isHomePage ? 'home-page' : ''}`}>
      <header className="header">
        <div className="container">
          <div className="logo">
          </div>
          <nav className="nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

