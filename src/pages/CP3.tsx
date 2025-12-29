import { useLanguage } from '../hooks/useLanguage'
import './Pages.css'
import coreRegionMap from '../assets/coreRegionMap.jpg';

const Gallery = () => {
  const { t, language } = useLanguage()
  const descRaw = t('cp3.subpoint6_desc4')
  // Only show desc3 if it's not the fallback key string
  const desc = descRaw !== 'cp3.subpoint6_desc4' ? descRaw.trim() : ''
  const desc2Raw = t('cp3.subpoint6_desc5')
  // Only show desc3 if it's not the fallback key string
  const desc2 = desc2Raw !== 'cp3.subpoint6_desc5' ? desc2Raw.trim() : ''

  return (
    <div className="page cp3-page">
      <div className="page-hero">
        <h1>{t('cp3.title')}</h1>
        <b>{t('cp3.cp3_desc')}</b>
      </div>

      <div className="page-content">
        <section className="section">
          
          <h2>{t('cp3.subtitle1')}</h2>
          
          <div className="subpoint-container">
            <div className="subpoint-item">
              <ul className="nested-bullets">
                <li>
                  {language === 'cn' ? (
                    <><b>商朝</b>与后来的历史时期相比有一个非常<b>独特的地方</b>，就是它的<span style={{color: 'red'}}>都城屡次迁徙</span>。</>
                  ) : (
                    t('cp3.subpoint1_desc1')
                  )}
                </li>
                <li>
                  {language === 'cn' ? (
                      <>张衡在《东京赋》中说：“殷人屡迁，前八后五”，即商朝<span style={{color: 'red'}}>从契至汤期间迁徙了八次</span>，自<span style={{color: 'red'}}>汤至盘庚期间迁徙了五次（中商阶段）。</span></>
                    ) : (
                      t('cp3.subpoint1_desc1')
                  )}
                </li>
                <li>{t('cp3.subpoint1_desc3')}</li>
                {language === 'en' ? (
                  <li>{t('cp3.subpoint1_desc4')}</li>):null}
              </ul>
              
              <table className="cp3-table">
                <thead>
                  <tr>
                    <th>
                      <div><strong>{t('cp3.table_header1')}</strong></div>
                      <div className="table-header-desc">{t('cp3.table_desc1')}</div>
                    </th>
                    <th>
                      <div><strong>{t('cp3.table_header2')}</strong></div>
                      <div className="table-header-desc">{t('cp3.table_desc2')}</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('cp3.table_column1_cont1')}</td>
                    <td>{t('cp3.table_column2_cont1')}</td>
                  </tr>
                  <tr>
                    <td>{t('cp3.table_column1_cont2')}</td>
                    <td>{t('cp3.table_column2_cont2')}</td>
                  </tr>
                  <tr>
                    <td>{t('cp3.table_column1_cont3')}</td>
                    <td>{t('cp3.table_column2_cont3')}</td>
                  </tr>
                  <tr>
                    <td>{t('cp3.table_column1_cont4')}</td>
                    <td>{t('cp3.table_column2_cont4')}</td>
                  </tr>
                  <tr>
                    <td>{t('cp3.table_column1_cont5')}</td>
                    <td>{t('cp3.table_column2_cont5')}</td>
                  </tr>
                  <tr>
                    <td>{t('cp3.table_column1_cont6')}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>{t('cp3.table_column1_cont7')}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>{t('cp3.table_column1_cont8')}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <h2>{t('cp3.subtitle2')}</h2>
            <div className="subpoint-item">
              <strong>{t('cp3.subpoint2_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp3.subpoint2_desc1')}</li>
                <li>{t('cp3.subpoint2_desc2')}</li>
                <li>{t('cp3.subpoint2_desc3')}</li>
              </ul>
            </div>
          </div>
          
          <div className="subpoint-container">
            <div className="subpoint-item">
              <strong>{t('cp3.subpoint3_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp3.subpoint3_desc1')}</li>
                <li>{t('cp3.subpoint3_desc2')}</li>
              </ul>
            </div>

            <div className="subpoint-item">
              <strong>{t('cp3.subpoint4_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp3.subpoint4_desc1')}</li>
                <li>{t('cp3.subpoint4_desc2')}</li>
                <li>{t('cp3.subpoint4_desc3')}</li>
              </ul>
            </div>

            <div className="subpoint-item">
              <strong>{t('cp3.subpoint5_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp3.subpoint5_desc1')}</li>
                <li>{t('cp3.subpoint5_desc2')}</li>
                <li>{t('cp3.subpoint5_desc3')}</li>
              </ul>
            </div>
            
            <div className="subpoint-item">
              <strong>{t('cp3.subpoint6_title')}</strong>
              <ul className="nested-bullets">
                <li>{t('cp3.subpoint6_desc1')}</li>
                {language === 'cn' && (
                  <li><b>内忧</b>：{t('cp3.subpoint6_desc2').replace('内忧：', '')}</li>
                )}
                {language === 'cn' && (
                  <li style={{ listStyleType: "none", paddingLeft: 0 }}>
                    <b>外患</b>：{t('cp3.subpoint6_desc3').replace('外患：', '')}
                  </li>
                )}
                {language === 'en' && (
                  <li>{t('cp3.subpoint6_desc2')}</li>
                )}
                {language === 'en' && (
                  <li>{t('cp3.subpoint6_desc3')}</li>
                )}
                {desc !== '' ? <li>{desc}</li> : null}
                {desc2 !== '' ? <li>{desc2}</li> : null}
              </ul>
            </div>
          </div>
          <br></br>

          <h2>{t('cp3.subtitle3')}</h2>
          <div className="subpoint-container">
            <div className="subpoint-item">
              <ul className="nested-bullets">
                <li>{t('cp3.subpoint7_desc1')}</li>
                <li>{t('cp3.subpoint7_desc2')}</li>
                <li>{t('cp3.subpoint7_desc3')}</li>
              </ul>
            </div>
          </div>
          <br></br>
          <b>{t('cp3.map_desc')}</b>
          <br></br>
          <img src={coreRegionMap} alt="Core Region Map" className="core-region-map" />
        </section>
      </div>
    </div>
  )
}

export default Gallery
