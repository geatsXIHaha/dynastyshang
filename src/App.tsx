import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import CP1 from './pages/CP1'
import CP2 from './pages/CP2'
import CP3 from './pages/CP3'
import CP4 from './pages/CP4'
import './App.css'

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'chapter1':
        return <CP1 />
      case 'chapter2':
        return <CP2 />
      case 'chapter3':
        return <CP3 />
      case 'chapter4':
        return <CP4 />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>AII2001 文字学</p>
        <p>The Historical Scroll of the Shang Dynasty | 商朝历史长卷</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
