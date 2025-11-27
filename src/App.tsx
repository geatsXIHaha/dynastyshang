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
        <p>&copy; AII2001 SINOGRAPHY AND ANCIENT SCRIPTS </p>
        <p>The Historical Scroll of the Shang Dynasty | 商朝历史长卷</p>
      </footer>
    </div>
  )
}

export default App
