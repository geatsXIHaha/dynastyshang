import { useState } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import History from './pages/History'
import Culture from './pages/Culture'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'history':
        return <History />
      case 'culture':
        return <Culture />
      case 'gallery':
        return <Gallery />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Navigation onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; 2025 Shang Dynasty Information Portal | 商朝信息门户</p>
        <p>Education and Historical Documentation</p>
      </footer>
    </div>
  )
}

export default App
