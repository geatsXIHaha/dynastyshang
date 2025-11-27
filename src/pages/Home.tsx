import './Home.css'

const Home = () => {
  return (
    <div className="page home-page">
      <div className="page-hero">
        <h1>欢迎来到商朝</h1>
        <h2>Welcome to Shang Dynasty</h2>
        <p>Discover the Ancient Wisdom of China's First Recorded Dynasty</p>
      </div>

      <div className="page-content">
        <section className="section">
          <h2>About Shang Dynasty</h2>
          <p>
            The Shang Dynasty (1600–1046 BCE) was China's first recorded dynasty,
            marking the beginning of Chinese civilization. It was a period of remarkable
            cultural and technological advancement, from bronze metallurgy to early
            written language.
          </p>
        </section>

        <section className="section">
          <h2>Key Features</h2>
          <ul>
            <li>Advanced Bronze Technology</li>
            <li>Early Chinese Writing System</li>
            <li>Rich Religious Practices</li>
            <li>Complex Social Structure</li>
          </ul>
        </section>

        <section className="section">
          <h2>Navigate Through</h2>
          <p>Use the menu to explore different sections about the Shang Dynasty:</p>
          <ul>
            <li><strong>History:</strong> Learn about the timeline and rulers</li>
            <li><strong>Culture:</strong> Discover arts, traditions, and daily life</li>
            <li><strong>Gallery:</strong> View artifacts and archaeological findings</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Home
