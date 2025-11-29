import { useLanguage } from '../hooks/useLanguage'
import './Pages.css'

const Gallery = () => {
  const { t } = useLanguage()

  return (
    <div className="page">
      <div className="page-hero">
        <h1>{t('cp3.title')}</h1>
      </div>

      <div className="page-content">
        <section className="section">
          <h2>Archaeological Artifacts</h2>
          <p>
            These artifacts represent the remarkable craftsmanship and cultural
            achievements of the Shang Dynasty.
          </p>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">🏺</div>
              <h3>Bronze Tripod (Ding)</h3>
              <p>Ritual vessel used in ancestral ceremonies, around 1200 BCE</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">📜</div>
              <h3>Oracle Bone</h3>
              <p>Inscribed bone used for divination, containing early Chinese writing</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">🎭</div>
              <h3>Bronze Wine Vessel</h3>
              <p>Ornate drinking vessel with intricate taotie mask designs</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">💎</div>
              <h3>Jade Pendant</h3>
              <p>Decorative jade object, symbol of status and spiritual power</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">🛡️</div>
              <h3>Bronze Weapon</h3>
              <p>Battle-worn bronze axe or spear, evidence of military prowess</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">🏛️</div>
              <h3>Stone Foundation</h3>
              <p>Foundation stones from royal palaces and temples</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Museum Collections</h2>
          <p>
            Many Shang Dynasty artifacts are preserved in museums worldwide,
            including the Palace Museum in Beijing and the British Museum.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Gallery
