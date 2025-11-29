import { useLanguage } from '../hooks/useLanguage'
import './Home.css'

const Home = () => {
  const { t } = useLanguage()

  return (
    <div className="page home-page">
      <div className="page-hero">
        <h1>{t('home.title')}</h1>
        <h2>{t('home.subtitle')}</h2>
        <p>{t('home.description')}</p>
      </div>

      <div className="page-content">
        <section className="section">
          <h2>{t('home.aboutTitle')}</h2>
          <p>
            {t('home.aboutContent')}
          </p>
        </section>

        <section className="section">
          <h2>{t('home.keyFeaturesTitle')}</h2>
          <ul>
            <li>{t('home.feature1')}</li>
            <li>{t('home.feature2')}</li>
            <li>{t('home.feature3')}</li>
            <li>{t('home.feature4')}</li>
          </ul>
        </section>

        <section className="section">
          <h2>{t('home.navigateTitle')}</h2>
          <p>{t('home.navigateDesc')}</p>
          <ul>
            <li><strong>{t('nav.chapter1')}:</strong> {t('home.cp1Desc')}</li>
            <li><strong>{t('nav.chapter2')}:</strong> {t('home.cp2Desc')}</li>
            <li><strong>{t('nav.chapter2')}:</strong> {t('home.cp3Desc')}</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Home
