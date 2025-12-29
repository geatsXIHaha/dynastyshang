import { useLanguage } from '../hooks/useLanguage'
import './Pages.css'
import cp1ImgXiaJie from '../assets/cp1ImgXiaJie.png';
import cp1ImgChengTang from '../assets/cp1ImgChengTang.png';

const History = () => {
  const { t } = useLanguage()
  const desc3Raw = t('cp1.subpoint11_desc3')
  // Only show desc3 if it's not the fallback key string
  const desc3 = desc3Raw !== 'cp1.subpoint11_desc3' ? desc3Raw.trim() : ''


  return (
    <div className="page cp1-page">
      <div className="page-hero">
        <h1>{t('cp1.title')}</h1>
      </div>

      <div className="page-content">
        <section className="section">
          <h2>{t('cp1.subtitle1')}</h2>
          
          <div className="subpoint-container">
            <div className="subpoint-item">
              <strong>{t('cp1.subpoint1_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint1_desc1')}</li>
                <li>{t('cp1.subpoint1_desc2')}</li>
                <li>{t('cp1.subpoint1_desc3')}</li>
              </ul>
              {t('cp1.subpoint1_desc4')}
            </div>
            
            <div className="subpoint-item">
              <strong>{t('cp1.subpoint2_title')}</strong>
              <img src={cp1ImgXiaJie} alt="Xia Jie" className="subpoint-image" />
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint2_desc1')}</li>
                <li>{t('cp1.subpoint2_desc2')}</li>
                <li>{t('cp1.subpoint2_desc3')}</li>
                <li>{t('cp1.subpoint2_desc4')}</li>
                <ul style={{ listStyleType: "square" }}>
                  <li>{t('cp1.subpoint2_desc5')}</li>
                  <li>{t('cp1.subpoint2_desc6')}</li>
                </ul>
                <li>{t('cp1.subpoint2_desc7')}</li>
                <li>{t('cp1.subpoint2_desc8')}</li>
                <li>{t('cp1.subpoint2_desc9')}</li>
              </ul>
            </div>
          </div>
          <br></br>
          <h2>{t('cp1.subtitle2')}</h2>
          <h4>{t('cp1.subpoint3_desc1')}</h4>
          
          <div className="subpoint-container">
            <div className="subpoint-item">
              <strong>{t('cp1.subpoint3_title')}</strong>
              <img src={cp1ImgChengTang} alt="Cheng Tang" className="subpoint-image" />
              <b>{t('cp1.subpoint3_desc2')}</b>
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint3_desc3')}</li>
                <li>{t('cp1.subpoint3_desc4')}</li>
                {t('cp1.subpoint3_example')}
                <ul style={{ listStyleType: "square" }}>
                  <li>{t('cp1.subpoint3_desc5')}</li>
                  <li>{t('cp1.subpoint3_desc6')}</li>
                </ul>
                <li>{t('cp1.subpoint3_desc7')}</li>
              </ul>
            </div>

            <div className="subpoint-item">
              <strong>{t('cp1.subpoint4_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint4_desc1')}</li>
                <li>{t('cp1.subpoint4_desc2')}</li>
                <li>{t('cp1.subpoint4_desc3')}</li>
                <li>{t('cp1.subpoint4_desc4')}</li>
                <li>{t('cp1.subpoint4_desc5')}</li>
                <li>{t('cp1.subpoint4_desc6')}</li>
              </ul>
            </div>

            <div className="subpoint-item">
              <strong>{t('cp1.subpoint5_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint5_desc1')}</li>
                <li>{t('cp1.subpoint5_desc2')}</li>
                <li>{t('cp1.subpoint5_desc3')}</li>
                <li>{t('cp1.subpoint5_desc4')}</li>
              </ul>
            </div>
            
            <div className="subpoint-item">
              <strong>{t('cp1.subpoint6_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint6_desc1')}</li>
                <li>{t('cp1.subpoint6_desc2')}</li>
                <li>{t('cp1.subpoint6_desc3')}</li>
                <li>{t('cp1.subpoint6_desc4')}</li>
                <li>{t('cp1.subpoint6_desc5')}</li>
              </ul>
            </div>
            
            <div className="subpoint-item">
              <strong>{t('cp1.subpoint7_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint7_desc1')}</li>
                <li>{t('cp1.subpoint7_desc2')}</li>
                <li>{t('cp1.subpoint7_desc3')}</li>
                <li>{t('cp1.subpoint7_desc4')}</li>
                <li>{t('cp1.subpoint7_desc5')}</li>
              </ul>
            </div>
          </div>
          <br></br>

          <h2>{t('cp1.subtitle3')}</h2>
          <h4>{t('cp1.subtitle3_desc')}</h4>
          
          <div className="subpoint-container">
            <div className="subpoint-item">
              <strong>{t('cp1.subpoint8_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint8_desc1')}</li>
                <li>{t('cp1.subpoint8_desc2')}</li>
                <li>{t('cp1.subpoint8_desc3')}</li>
              </ul>
            </div>

            <div className="subpoint-item">
              <strong>{t('cp1.subpoint9_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint9_desc1')}</li>
                <li>{t('cp1.subpoint9_desc2')}</li>
                <li>{t('cp1.subpoint9_desc3')}</li>
              </ul>
            </div>

            <div className="subpoint-item">
              <strong>{t('cp1.subpoint10_title')}</strong>
              <ul className="nested-bullets">
                <ul style={{ listStyleType: "square" }}>
                  <li>{t('cp1.subpoint10_desc1')}</li>
                  <li>{t('cp1.subpoint10_desc2')}</li>
                  <li>{t('cp1.subpoint10_desc3')}</li>
                </ul>
                <li>{t('cp1.subpoint10_desc4')}</li>
              </ul>
            </div>

            <div className="subpoint-item">
              <strong>{t('cp1.subpoint11_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint11_desc1')}</li>
                <li>{t('cp1.subpoint11_desc2')}</li>
                {desc3 !== '' ? <li>{desc3}</li> : null}
              </ul>
            </div>

            <div className="subpoint-item">
              <strong>{t('cp1.subpoint12_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp1.subpoint12_desc1')}</li>
                <li>{t('cp1.subpoint12_desc2')}</li>
                <li>{t('cp1.subpoint12_desc3')}</li>
                <li>{t('cp1.subpoint12_desc4')}</li>
                <li>{t('cp1.subpoint12_desc5')}</li>
              </ul>
            </div>
          </div>
          {/* <div className="timeline">
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
          </div> */}
        </section>
      </div>
    </div>
  )
}

export default History
