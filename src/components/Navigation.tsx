import { useState } from 'react'
import './Navigation.css'

interface NavItem {
  label: string
  id: string
}

const Navigation = ({ onNavigate }: { onNavigate: (pageId: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems: NavItem[] = [
    { label: '首页 (Home)', id: 'home' },
    { label: '历史 (History)', id: 'history' },
    { label: '文化 (Culture)', id: 'culture' },
    { label: '艺术 (Gallery)', id: 'gallery' },
    { label: '联系 (Contact)', id: 'contact' },
  ]

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId)
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h1>商朝 SHANG DYNASTY</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
