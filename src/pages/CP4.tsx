/* eslint-disable @typescript-eslint/no-unused-vars */

import { useLanguage } from '../hooks/useLanguage'
import { useState } from 'react'
import './Pages.css'
import img100 from '../assets/4img100.png';
import img2 from '../assets/4img2.png';
import img4 from '../assets/4img4.jpg';
import img5 from '../assets/4img5.png';
import img6 from '../assets/4img6.png';
import img11 from '../assets/4img11.png';
import img15 from '../assets/4img15.png';
import img44 from '../assets/4img44.png';
import img45 from '../assets/4img45.png';
import img46 from '../assets/4img46.png';
import img47 from '../assets/4img47.png';
import img55 from '../assets/4img55.png';
import img56 from '../assets/4img56.png';
import img57 from '../assets/4img57.png';
import img58 from '../assets/4img58.png';
import img59 from '../assets/4img59.png';
import img60 from '../assets/4img60.png';
import img61 from '../assets/4img61.png';
import img62 from '../assets/4img62.png';
import img63 from '../assets/4img63.png';
import img64 from '../assets/4img64.png';
import img65 from '../assets/4img65.png';
import img66 from '../assets/4img66.png';


// Component for image with maximize button
interface ImageWithMaximizeProps {
  src: string;
  height: string;
  alt: string;
  onMaximize: (src: string) => void;
  responsiveStyle?: React.CSSProperties;
  centered?: boolean;
}

const ImageWithMaximize = ({ src, height, alt, onMaximize, responsiveStyle, centered = true }: ImageWithMaximizeProps) => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div
      style={{ position: 'relative', display: 'inline-block', textAlign: centered ? 'center' : 'left', ...responsiveStyle }}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <img src={src} alt={alt} style={{ height: responsiveStyle ? 'auto' : height, width: 'auto', cursor: 'pointer', objectFit: 'contain', ...responsiveStyle }} />
      {showButton && (
        <button
          onClick={() => onMaximize(src)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 10px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            zIndex: 10,
          }}
        >
          ⛶
        </button>
      )}
    </div>
  );
};


const Contact = () => {
  const { t, language } = useLanguage()
  const [maximizedImage, setMaximizedImage] = useState<string | null>(null)

  return (
    <div className="page cp4-page">
      {maximizedImage && (
        <div
          onClick={() => setMaximizedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <img
            src={maximizedImage}
            alt="maximized"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
          />
        </div>
      )}
      <div className="page-hero">
        <h1>{t('cp4.title')}</h1>
      </div>
      <div className="page-content">
        <section className="section">
          <h3><strong>{t('cp4.desc1')}</strong></h3><br></br>
          <h4><strong>{t('cp4.desc2')}</strong></h4><br></br>
          <h2>{t('cp4.subtitle1')}</h2>
          
          <div className="subpoint-container">
            <div className="subpoint-item">
              <strong>
                {language === 'en' ? (
                  "Example 1: Tu Fang")
                  :"例1: 土方"
                  }</strong>
              <ul className="nested-bullets">
                <li>{language === 'en' ? (
                  <>A major enemy <b>in the north of Shang Dynasty</b>, the wars between them and the Shang Dynasty began during the period of <b>King Wu Ding</b>.</>)
                  :"土方是殷王朝北部的大敌，它与殷王朝之间的战争始于武丁时期。"
                  }</li>
                
              </ul>
            </div>
            <div className="cp4-table-container">
              <table className="cp4-table">
                <tbody>
                  <tr>
                    <td>
                      辛巳卜，争，贞今早 <img src={img100} alt="Xia Jie" className="inline-image" /> 王共人，呼妇好伐土方，受有佑。五月。<br></br><span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6412/1）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img2} height="150px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img5} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      {language === 'en' ? (
                      <>This military operation against the <b>Tu Fang</b> took place during <b>Fu Hao’s lifetime</b>, that is, in the <b>middle period of King Wu Ding</b>.</>)
                      :<>此次征伐土方是在<b>妇好生前</b>，<b>即武丁中期</b>。</>
                      }
                        
                      <br/><br/>
                      <b>
                        {language === 'en' ? (
                        "Wu Ding")
                        :"武丁"
                        }</b><br></br>
                      <ImageWithMaximize src={img4} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} centered={false} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      <ul className="nested-bullets">
                        <li>
                          {language === 'en' ? (
                          <>Wu Ding was the son of <b>King Xiao Yi</b> and the <b>22nd ruler of the Shang Dynasty</b>.</>)
                          :<>商王小乙之子，商朝第二十二任君主。</>
                          }</li>
                        <li>
                          {language === 'en' ? (
                          <>During his reign, Wu Ding fought many wars against states in the west and north, and also led military operations to the south. These wars greatly expanded the Shang territory. 
                            <br></br><br></br>In domestic affairs, Wu Ding chose talented people from among commoners, improved governance, and removed harmful practices. His rule was fair and effective, and the people lived in prosperity. As a result, the Shang Dynasty reached its peak, a period known in history as the “Revival under Wu Ding.”
                            </>)
                          :<>武丁在位期间对侵扰商朝的西、北诸方国，进行了一系列战争，同时又进行了南征，为商王朝广拓了疆域，东起海滨，西到陇右，南至江汉一带，北到河北北部，奠定了华夏民族大体上的疆域。在治理内政方面，武丁从民间选拔贤才，兴利除弊，政治清明，百姓富庶，使商朝达到鼎盛，史称“武丁中兴”。</>
                          }</li>
                      </ul>
                      <br></br>
                      <b>
                        {language === 'en' ? (
                        "Fu Hao")
                        :"妇好"
                        }</b><br></br>
                      <ImageWithMaximize src={img6} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} centered={false} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      <ul className="nested-bullets">
                        <li>
                          {language === 'en' ? (
                          <>Fu Hao was the wife of King Wu Ding of the Shang Dynasty. A large number of excavated oracle bone scripts show that she was often appointed to lead military operations, making outstanding contributions to expanding the territory of the Shang Dynasty.</>)
                          :<>商王武丁的妻子，出土的大量甲骨卜辞表明，妇好多次受命征战沙场，为商王朝拓展疆土立下汗马功劳。</>
                          }</li>
                        <li>
                          {language === 'en' ? (
                          <>She was also frequently entrusted to lead major rituals, including sacrifices to Heaven, the royal ancestors, and sacred springs, and she served as a divination official.</>)
                          :<>她还经常受命主持祭天、祭先祖、祭神泉等各类祭典，又任占卜之官。</>
                          }</li>
                        <li>
                          {language === 'en' ? (
                          <>Fu Hao is a famous military leader in Chinese history and a skilled female general. Oracle bone records show that she conquered many surrounding states, which was extremely rare in ancient history.</>)
                          :<>中国历史上有名的军事家，是个善于打仗的女将军，殷墟的甲骨文记录了她攻克了周边诸多方国，这在历史上都是罕见的。</>
                          }</li>
                      </ul>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>丁酉卜，<img src={img11} alt="Xia Jie" className="inline-image" /> ，贞今早王共人五千征土 方，受有佑。三月。<br></br>
                        <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6409/1，图7—59）</span>
                        <br></br><br></br>
                        <div style={{textAlign: 'center'}}>
                          <ImageWithMaximize src={img15} height="150px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                        </div>
                    </td>
                    <td>
                      {language === 'en' ? (
                          <>The army sent to attack <b>Tu Fang</b> reached up to <b>5,000 soldiers</b>. </>)
                          :<>征伐土方的兵力最多达<b>五千人</b>。</>
                          }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br></br>
      
          <h2>{t('cp4.subtitle2')}</h2>
          <div className="subpoint-container">
            <div className="subpoint-item">
              <strong>
                {language === 'en' ? (
                        "Example 1: Qiang Fang")
                        :"例1: 羌方"
                        }</strong>
              <ul className="nested-bullets">
                <li>
                  {language === 'cn' ? 
                  <>"羌"字在甲骨文中至少有14种写法<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（详见《类纂》41页）</span>，<b>其基本形为"<img src={img44} alt="Xia Jie" className="inline-image" />"</b>。</>
                  :<>The character <b>“羌” has at least 14 different forms in oracle bone script</b>, and its <b>basic form is "<img src={img44} alt="Xia Jie" className="inline-image" />".</b></>
                  }
                  </li>
                <li>
                  {language === 'cn' ? 
                  <>商时的<b>羌族</b>是<b>游牧民族</b>，而以羌族为主要部分的西戎也应以<b>畜牧经济</b>为主。</>
                  :<>The Qiang people during the Shang period were a <b>nomadic group</b>, and they rely primarily on <b>animal husbandry</b>.</>
                  }
                </li>
                <li>
                  {language === 'cn' ? 
                  <>他们的牲畜中，<b>羊</b>大概占有很大的比重，故以<b>牧羊人</b>而得名。</>
                  :<>Among their livestock, <b>sheep</b> likely made up a large proportion, so they were known as <b>'shepherds.'</b></>
                  }
                </li>
                <li>
                  {language === 'cn' ? 
                  <>武丁时的卜辞中， 除羌外，尚有北羌、多马羌等称。顾名思义，<b>北羌</b>以居于<b>羌族北部</b>而得名，<b>多马羌</b>以<b>马多</b>得名，都是羌族的一部分。</>
                  :<>The <b>"Northern Qiang"</b> were so called because they lived in the <b>northern part of the Qiang</b>, while the <b>"Duoma Qiang"</b> were named for their <b>abundance of horses</b>. Both groups were subdivisions of the larger Qiang population.</>
                  }
                </li>
                <li>{t('cp4.subtitle2_desc4')}</li>
                <ul style={{ listStyleType: "square" }}>
                  <li><b>{t('cp4.subtitle2_desc5')}</b></li>
                  <li><b>{t('cp4.subtitle2_desc6')}</b></li>
                </ul>
                <li>{t('cp4.subtitle2_desc7')}</li>
              </ul>
            </div>
            <div className="cp4-table-container">
              <table className="cp4-table">
                <tbody>
                  <tr>
                    <td>
                      其用羌方［<img src={img45} alt="Xia Jie" className="inline-image" />］于宗，王受有佑。<br></br>
                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》28093/3）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img46} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>

                    <td>
                      {language === 'cn' ? 
                      <>羌方战败，<b>其首领被俘</b>，用于<b>祭祀祖先</b>。</>
                      :<>Qiang Fang were defeated, <b>their leader was captured</b> and used for <b>ancestor worship</b>.</>
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ……示九百羌。<br></br>
                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》1038正）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img47} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      {language === 'cn' ? 
                      <>这是祭祀先王示主时<b>以九百羌为献</b>。</>
                      :<>When former kings were worshipped, <b>900 Qiang people</b> were offered as <b>sacrifices</b>.</>
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      王叀令五族戍羌方。<br></br>
                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》28053/3）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img55} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      {language === 'cn' ? 
                      <>辞<b>命令五族戍守羌地</b>，这五族分别是屰，黻、冎、逐、何。</>
                      :<>Shang Dynasty once ordered <b>five tribes to protect Qiang land</b>.</>
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img56} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      {language === 'cn' ? 
                      <>羌地成为<b>商王的田猎场所</b><br></br>（《合集》29310）。</>
                      :<>Qiang land served as a <b>hunting ground of the Shang Dynasty</b>.</>
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <strong>{t('cp4.subtitle2_desc8')}</strong>
          </div>
            <br></br>
          <h2>{t('cp4.subtitle3')}</h2>
          <div className="subpoint-container">
            <div className="subpoint-item">
              <strong>
                {language === 'cn' ? 
                      <>例1: 鬼方</>
                      :<>Example 1: Gui Fang</>
                      }
              </strong>
              <ul className="nested-bullets">
                <li>
                  {language === 'cn' ? 
                  <>甲骨文： <img src={img57} alt="Xia Jie" className="inline-image" />、<img src={img58} alt="Xia Jie" className="inline-image" /> 、<img src={img59} alt="Xia Jie" className="inline-image" /> 。</>
                  :<>Forms in oracle bone script： <img src={img57} alt="Xia Jie" className="inline-image" />、<img src={img58} alt="Xia Jie" className="inline-image" /> 、<img src={img59} alt="Xia Jie" className="inline-image" /> 。</>
                  }
                  
                </li>
              </ul>
            </div>
            <div className="cp4-table-container">
              <table className="cp4-table">
                <tbody>
                  <tr>
                    <td>
                      王勿从鬼。<br></br> 
                      贞王从<img src={img60} alt="Xia Jie" className="inline-image" />伐巴，帝受佑。<br></br>
                      贞王勿从<img src={img60} alt="Xia Jie" className="inline-image" />伐巴。<br></br>
                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6474/1）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img61} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} />
                      </div>
                    </td>
                    <td>
                      {language === 'cn' ? 
                      <>商王可能是要带领鬼方从事<b>征伐活动</b>。</>
                      :<>It is possible that the Shang king led the Gui Fang to <b>take part in military operations</b>.</>
                      }
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      贞鬼获羌。<br></br>
                      贞鬼不其获羌。<br></br>
                      乙巳卜，宾，贞鬼获羌。一月。<br></br>
                      乙巳卜，宾，贞鬼不其获羌。<br></br>

                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》203正/1）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img62} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} />
                      </div>
                    </td>
                    <td>
                      {language === 'cn' ? 
                      <>辞表明鬼方有为商王<b>捕获羌人</b>的义务。</>
                      :<>Gui Fang was responsible for <b>capturing the Qiang people</b> for the Shang King.</>
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ……逐自……小臣鬼……于……<br></br>

                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》5577/1）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img63} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} />
                      </div>
                    </td>
                    <td>
                      {language === 'cn' ? 
                      <>辞说明<b>鬼方有人在商王廷任“小臣”</b>。</>
                      :<>Gui Fang served as <b>minor officials</b> during the Shang Dynasty.</>
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      壬辰卜，争，贞惟鬼<img src={img64} alt="Xia Jie" className="inline-image" />。<br></br>
                      贞不惟之<img src={img64} alt="Xia Jie" className="inline-image" />。<br></br>
                      允惟鬼眔周<img src={img64} alt="Xia Jie" className="inline-image" />。<br></br>

                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》1114正、反/1）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img65} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} />正面
                      </div>
                      <br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img66} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} />反面
                      </div>
                    </td>
                    <td>
                      {language === 'cn' ? 
                      <>辞中的“<img src={img64} alt="Xia Jie" className="inline-image" />”为用牲之法，于省吾先生释为“割解”。“惟鬼眔周<img src={img64} alt="Xia Jie" className="inline-image" />”义为割解<b>鬼方和周方的人进行祭祀</b>。</>
                      :<>Gui Fang and Zhou Fang helped with <b>sacrificial rituals</b>.</>
                      }
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <strong>{t('cp4.subtitle3_desc1')}</strong>
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default Contact

