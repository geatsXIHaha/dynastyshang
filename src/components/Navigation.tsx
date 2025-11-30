import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import './Navigation.css'

interface NavItem {
  label: string
  id: string
}

interface NavigationProps {
  onNavigate: (pageId: string) => void
  currentPage: string
}

const Navigation = ({ onNavigate, currentPage }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const lastScrollY = lastScrollYRef.current

      // Show navbar immediately when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true)
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
      } 
      // Hide navbar when scrolling down (with a small delay for smoother UX)
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = setTimeout(() => {
          setIsNavbarVisible(false)
        }, 150)
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  const navItems: NavItem[] = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.chapter1'), id: 'chapter1' },
    { label: t('nav.chapter2'), id: 'chapter2' },
    { label: t('nav.chapter3'), id: 'chapter3' },
    { label: t('nav.chapter4'), id: 'chapter4' },
  ]

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId)
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h1>{t('nav.logo')}</h1>
        </div>

        <div className="nav-right">
          {/* Language Switcher */}
          <div className="language-switcher">
            <button
              className={`lang-btn ${language === 'cn' ? 'active' : ''}`}
              onClick={() => setLanguage('cn')}
            >
              中文
            </button>
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
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
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
