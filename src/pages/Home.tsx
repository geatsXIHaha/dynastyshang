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
        <p>{t('home.description2')}</p>
      </div>

      <div className="page-content">
        <section className="section">
          <h2>{t('home.subtitle1')}</h2>
          <p>
            {t('home.subtitle1_desc1')}
            <br></br><br></br>
            {t('home.subtitle1_desc2')}
            <br></br><br></br>
            {t('home.subtitle1_desc3')}
          </p>
        </section>

        <section className="section">
          <h2>{t('home.subtitle2')}</h2>
          <b>{t('home.subtitle2_desc1')}</b>
          <ul>
            <li>{t('home.subtitle2_desc2')}</li>
          </ul>
          <b>{t('home.subtitle2_desc3')}</b>
          <ul>
            <li>{t('home.subtitle2_desc4')}</li>
          </ul>
          <b>{t('home.subtitle2_desc5')}</b>
          <ul>
            <li>{t('home.subtitle2_desc6')}</li>
          </ul>
          <b>{t('home.subtitle2_desc7')}</b>
          <ul>
            <li>{t('home.subtitle2_desc8')}</li>
          </ul>
        </section>

        <section className="section">
          <h2>{t('home.subtitle3')}</h2>
          <p>
            {t('home.subtitle3_desc1')}
            <br></br><br></br>
            {t('home.subtitle3_desc2')}
          </p>
        </section>

        <section className="section">
          <h2>{t('home.subtitle4')}</h2>
          <b>{t('home.subtitle4_desc1')}</b>
          <ul>
            <li>{t('home.subtitle4_desc2')}</li>
          </ul>
          <b>{t('home.subtitle4_desc3')}</b>
          <ul>
            <li>{t('home.subtitle4_desc4')}</li>
          </ul>
          <b>{t('home.subtitle4_desc5')}</b>
          <ul>
            <li>{t('home.subtitle4_desc6')}</li>
          </ul>
          <b>{t('home.subtitle4_desc7')}</b>
          <ul>
            <li>{t('home.subtitle4_desc8')}</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Home
