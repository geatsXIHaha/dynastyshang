import './Pages.css'

const History = () => {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>历史 · History</h1>
      </div>

      <div className="page-content">
        <section className="section">
          <h2>Timeline of Shang Dynasty</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">1600 BCE</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>The Shang Dynasty is established as the first recorded Chinese dynasty.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">1400 BCE</div>
              <div className="timeline-content">
                <h3>Bronze Age Peak</h3>
                <p>Bronze technology reaches its pinnacle with intricate ritual vessels.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">1200 BCE</div>
              <div className="timeline-content">
                <h3>Oracle Bones</h3>
                <p>Oracle bones with inscriptions become the earliest known Chinese writing.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">1046 BCE</div>
              <div className="timeline-content">
                <h3>Fall of Dynasty</h3>
                <p>The Zhou Dynasty overthrows Shang, ending the dynasty's rule.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Notable Rulers</h2>
          <div className="rulers-grid">
            <div className="ruler-card">
              <h3>King Tang</h3>
              <p>Founder of the Shang Dynasty</p>
            </div>
            <div className="ruler-card">
              <h3>King Wu Ding</h3>
              <p>Most prominent ruler, known for military conquests</p>
            </div>
            <div className="ruler-card">
              <h3>King Zu Geng</h3>
              <p>Known for extensive bronze casting</p>
            </div>
            <div className="ruler-card">
              <h3>King Zhou Xin</h3>
              <p>Last ruler of the Shang Dynasty</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default History
