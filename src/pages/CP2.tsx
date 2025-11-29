import { useLanguage } from '../hooks/useLanguage'
import './Pages.css'

const Culture = () => {
  const { t } = useLanguage()

  return (
    <div className="page">
      <div className="page-hero">
        <h1>{t('cp2.title')}</h1>
      </div>

      <div className="page-content">
        <section className="section">
          <h2>Arts and Crafts</h2>
          <p>
            The Shang Dynasty was renowned for its exquisite artistic achievements,
            particularly in bronze work and oracle bone carving.
          </p>
          <div className="features-grid">
            <div className="feature">
              <h3>🏺 Bronze Vessels</h3>
              <p>Intricate ritual bronzes with complex decorative patterns</p>
            </div>
            <div className="feature">
              <h3>📜 Oracle Bones</h3>
              <p>Carved with early Chinese characters and divination records</p>
            </div>
            <div className="feature">
              <h3>🎨 Pottery</h3>
              <p>Elegant ceramic pieces for daily and ceremonial use</p>
            </div>
            <div className="feature">
              <h3>💎 Jade Carving</h3>
              <p>Beautiful jade ornaments and ritual objects</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Religious Practices</h2>
          <p>
            Religion played a central role in Shang society. The king served as a bridge
            between the divine and human realms.
          </p>
          <ul>
            <li><strong>Ancestor Veneration:</strong> Honoring deceased rulers and family members</li>
            <li><strong>Divination:</strong> Using oracle bones to communicate with spirits</li>
            <li><strong>Ritual Sacrifices:</strong> Offerings to gods and ancestors</li>
            <li><strong>Sacred Sites:</strong> Temples and altars for worship</li>
          </ul>
        </section>

        <section className="section">
          <h2>Daily Life</h2>
          <p>
            The Shang people engaged in agriculture, hunting, and early trade.
            Society was organized into a clear hierarchy under royal authority.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Culture
