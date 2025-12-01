/* eslint-disable @typescript-eslint/no-unused-vars */

import { useLanguage } from '../hooks/useLanguage'
import { useState } from 'react'
import './Pages.css'
import img1 from '../assets/4img1.png';
import img100 from '../assets/4img100.png';
import img2 from '../assets/4img2.png';
import img3 from '../assets/4img3.png';
import img4 from '../assets/4img4.jpg';
import img5 from '../assets/4img5.png';
import img6 from '../assets/4img6.png';
import imgMiss from '../assets/4imgMiss.png';
import img7 from '../assets/4img7.png';
import img8 from '../assets/4img8.png';
import img9 from '../assets/4img9.png';
import img10 from '../assets/4img10.png';
import img11 from '../assets/4img11.png';
import img12 from '../assets/4img12.png';
import img13 from '../assets/4img13.png';
import img14 from '../assets/4img14.png';
import img15 from '../assets/4img15.png';
import img16 from '../assets/4img16.png';
import img17 from '../assets/4img17.png';
import img18 from '../assets/4img18.png';
import img19 from '../assets/4img19.png';
import img20 from '../assets/4img20.png';
import img21 from '../assets/4img21.png';
import img22 from '../assets/4img22.png';
import img23 from '../assets/4img23.png';
import img24 from '../assets/4img24.png';
import img25 from '../assets/4img25.png';
import img26 from '../assets/4img26.png';
import img27 from '../assets/4img27.png';
import img28 from '../assets/4img28.png';
import img29 from '../assets/4img29.png';
import img31 from '../assets/4img31.png';
import img32 from '../assets/4img32.png';
import img33 from '../assets/4img33.png';
import img34 from '../assets/4img34.png';
import img35 from '../assets/4img35.png';
import img36 from '../assets/4img36.png';
import img37 from '../assets/4img37.png';
import img38 from '../assets/4img38.png';
import img39 from '../assets/4img39.png';
import img40 from '../assets/4img40.png';
import img41 from '../assets/4img41.png';
import img44 from '../assets/4img44.png';
import img45 from '../assets/4img45.png';
import img46 from '../assets/4img46.png';
import img47 from '../assets/4img47.png';
import img48 from '../assets/4img48.png';
import img49 from '../assets/4img49.png';
import img50 from '../assets/4img50.png';
import img51 from '../assets/4img51.png';
import img52 from '../assets/4img52.png';
import img53 from '../assets/4img53.png';
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
          <h2>{t('cp4.subtitle1')}</h2>
          
          <div className="subpoint-container">
            <div className="subpoint-item">
              <strong>例1: 土方 "Tu Fang"</strong>
              <ul className="nested-bullets">
                <li>土方是殷王朝北部的大敌，它与殷王朝之间的战争始于武丁时期。</li>
                
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
                      此辞"呼妇好伐土方"，说明<span style={{color: 'red'}}>此次征伐土方是在妇好生前，即武丁中期</span>。而伐<img src={img100} alt="Xia Jie" className="inline-image" />方的统帅中没有妇好，且卜辞又云"<img src={img3} alt="Xia Jie" className="inline-image" /><img src={img100} alt="Xia Jie" className="inline-image" />方于好 "<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集6153》）</span>，表明伐<img src={img100} alt="Xia Jie" className="inline-image" />方时妇好已死。<span style={{color: 'red'}}><img src={img100} alt="Xia Jie" className="inline-image" />方与殷王朝之间的战争始于妇好死后，即武丁后期。</span>
                      <br/><br/>
                      <b>武丁</b><br></br>
                      <ImageWithMaximize src={img4} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} centered={false} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      <ul className="nested-bullets">
                        <li>商王小乙之子，商朝第二十二任君主。</li>
                        <li>武丁在位期间对侵扰商朝的西、北诸方国，进行了一系列战争，同时又进行了南征，为商王朝广拓了疆域，东起海滨，西到陇右，南至江汉一带，北到河北北部，奠定了华夏民族大体上的疆域。在治理内政方面，武丁从民间选拔贤才，兴利除弊，政治清明，百姓富庶，使商朝达到鼎盛，史称“武丁中兴”。</li>
                      </ul>
                      <br></br>
                      <b>妇好</b><br></br>
                      <ImageWithMaximize src={img6} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} centered={false} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      <ul className="nested-bullets">
                        <li>商王武丁的妻子，出土的大量甲骨卜辞表明，妇好多次受命征战沙场，为商王朝拓展疆土立下汗马功劳。</li>
                        <li>她还经常受命主持祭天、祭先祖、祭神泉等各类祭典，又任占卜之官。</li>
                        <li>中国历史上有名的军事家，是个善于打仗的女将军，殷墟的甲骨文记录了她攻克了周边诸多方国，这在历史上都是罕见的。</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      辛丑卜，争，贞曰<img src={img7} alt="Xia Jie" className="inline-image" />方<img src={img8} alt="Xia Jie" className="inline-image" /><img src={img9} alt="Xia Jie" className="inline-image" />于土<br></br>……其敦<img src={img10} alt="Xia Jie" className="inline-image" />，允其敦。四月。<br></br><span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6354正/1）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={imgMiss} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>“<img src={img9} alt="Xia Jie" className="inline-image" />”字从王献唐释作“皇”，金文中有族徽“<img src={img9} alt="Xia Jie" className="inline-image" />”，甲骨文中“<img src={img9} alt="Xia Jie" className="inline-image" />”也应为族名或国名。“<img src={img8} alt="Xia Jie" className="inline-image" />”释作同，在这里有会同、会合的意思。“<img src={img7} alt="Xia Jie" className="inline-image" />方<img src={img8} alt="Xia Jie" className="inline-image" /><img src={img9} alt="Xia Jie" className="inline-image" />于土……其敦<img src={img10} alt="Xia Jie" className="inline-image" />”的意思是，<img src={img7} alt="Xia Jie" className="inline-image" />方与皇在土方会合以敦伐<img src={img10} alt="Xia Jie" className="inline-image" />地。<img src={img7} alt="Xia Jie" className="inline-image" />方与皇能在<span style={{color: 'red'}}>土方会合，说明土方与<img src={img7} alt="Xia Jie" className="inline-image" />方是联盟。</span></td>
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
                      一期卜辞中殷征伐土方所用的词汇有：伐、罙伐、征、获围<img src={img12} alt="Xia Jie" className="inline-image" />、<img src={img13} alt="Xia Jie" className="inline-image" /> 、<img src={img14} alt="Xia Jie" className="inline-image" /> 、 伐等，<span style={{color: 'red'}}>不同的词汇表示征伐的程度、方式不同</span>。征伐土方的兵力最多达<span style={{color: 'red'}}>五千人</span>，参加征伐的人物有王、沚<img src={img16} alt="Xia Jie" className="inline-image" />、妇好、戉、三族。征伐的时间有<span style={{color: 'red'}}>一、三、四、五、十一、十二月</span>。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subpoint-item">
              <strong>例2: <img src={img17} alt="Xia Jie" className="inline-image" />方</strong>
              <ul className="nested-bullets">
                <li>“<img src={img17} alt="Xia Jie" className="inline-image" />”又作“<img src={img17} alt="Xia Jie" className="inline-image" />”（甲骨文中“在”字既作“<img src={img18} alt="Xia Jie" className="inline-image" />”形，又作“<img src={img19} alt="Xia Jie" className="inline-image" />”形，如《合集》914正“在北史”），“ <img src={img17} alt="Xia Jie" className="inline-image" />方”又称<span style={{color: 'red'}}>“方<img src={img17} alt="Xia Jie" className="inline-image" /> ”</span>，出现在一期卜辞中，<span style={{color: 'red'}}>为商王朝敌国</span>。</li>
              </ul>
            </div>
            <div className="cp4-table-container">
              <table className="cp4-table">
                <tbody>
                  <tr>
                    <td>
                      贞方围，惟帝令乍我祸。三月。<br></br><span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》39912/1）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img20} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      此辞卜问<img src={img17} alt="Xia Jie" className="inline-image" />方来征，是不是帝降祸于我。
                    </td>
                  </tr>
                  <tr>
                    <td>
                      王<img src={img21} alt="Xia Jie" className="inline-image" />曰："吉，<img src={img22} alt="Xia Jie" className="inline-image" /> 。"之日允<img src={img22} alt="Xia Jie" className="inline-image" /><img src={img17} alt="Xia Jie" className="inline-image" />方。十三月。<br></br>
                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》39912/1）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img23} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      从<img src={img17} alt="Xia Jie" className="inline-image" />方<span style={{color: 'red'}}>三月</span>来侵，到<span style={{color: 'red'}}>十三月</span><img src={img22} alt="Xia Jie" className="inline-image" /><img src={img17} alt="Xia Jie" className="inline-image" />方，历经了<span style={{color: 'red'}}>十个月</span>左右，<img src={img17} alt="Xia Jie" className="inline-image" /><span style={{color: 'red'}}>方的规模由此可见并不算小</span>。
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
              <strong>例1: <img src={img1} alt="Xia Jie" className="inline-image" />方</strong>
              <ul className="nested-bullets">
                <li>甲骨文中的"<img src={img24} alt="Xia Jie" className="inline-image" />"、"<img src={img24} alt="Xia Jie" className="inline-image" />"字，胡厚宣先生释作"<img src={img100} alt="Xia Jie" className="inline-image" />"。</li>
                <li><img src={img100} alt="Xia Jie" className="inline-image" />方是武丁晚期的<span style={{color: 'red'}}>敌国</span>。</li>
                <li>"羌"字在甲骨文中至少有14种写法（详见《类纂》41页），其基本形为" "。</li>
              </ul>
            </div>
            <div className="cp4-table-container">
              <table className="cp4-table">
                <tbody>
                  <tr>
                    <td>
                      丁酉卜，亘，贞<img src={img100} alt="Xia Jie" className="inline-image" /><img src={img25} alt="Xia Jie" className="inline-image" />王事。<br></br>贞王曰<img src={img100} alt="Xia Jie" className="inline-image" />来。<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》5445正/1）</span>

                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img26} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      罗琨认为此例的时代要早于与<img src={img100} alt="Xia Jie" className="inline-image" />方的战争卜辞，例中“<img src={img100} alt="Xia Jie" className="inline-image" />”为一领袖名号，其时<span style={{color: 'red'}}>臣属于商</span>，他的氏族部落是以他的名号命名，后来<span style={{color: 'red'}}>力量变强，就叛商作乱</span>。
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="section-header" style={{textAlign: 'center', padding: '20px'}}>
                      "<img src={img100} alt="Xia Jie" className="inline-image" />方侵殷属地"与"殷征伐<img src={img100} alt="Xia Jie" className="inline-image" />方"时间比较表<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（见《类纂》269—276页）</span>
                      <br/><br/>
                      <div style={{maxWidth: '100%', width: '100%', overflow: 'hidden'}}>
                        <ImageWithMaximize src={img27} height="auto" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain', width: '100%'}} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="section-header" style={{textAlign: 'center', padding: '20px'}}>
                      <img src={img100} alt="Xia Jie" className="inline-image" />方的侵略战争与殷的征讨是是间断性的。
                      <br></br>
                      殷王朝曾发动<span style={{color: 'red'}}>三千人</span><span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6168）</span>和<span style={{color: 'red'}}>五千人</span><span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6167）</span>的军队去讨伐方。
                      <br></br><br></br>
                      <div style={{display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '100%', margin: '0 auto'}}>
                        <div style={{flex: '1', minWidth: '200px', maxWidth: '50%', width: '100%', textAlign: 'center'}}>
                          <ImageWithMaximize src={img28} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                        </div>
                        <div style={{flex: '1', minWidth: '200px', maxWidth: '50%', width: '100%', textAlign: 'center'}}>
                          <ImageWithMaximize src={img29} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="section-header" style={{textAlign: 'center', padding: '20px'}}>
                      被<img src={img100} alt="Xia Jie" className="inline-image" />方侵略的方国或殷边地有：
                      <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                        <div style={{textAlign: 'left'}}>
                          <div>1. 沚<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6180/1）</span></div>
                          <div>2. <img src={img31} alt="Xia Jie" className="inline-image" />(示、<img src={img32} alt="Xia Jie" className="inline-image" /> 、豐) <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>(《合集》6057正/1、6068正/1)</span></div>
                          <div>3. 辔<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6352/1）</span></div>
                          <div>4. 臿（ <img src={img33} alt="Xia Jie" className="inline-image" />、夹、方、<img src={img34} alt="Xia Jie" className="inline-image" /> ）<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6063正/1）</span></div>
                          <div>5. 戉<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6371/1）</span></div>
                          <div>6. <img src={img35} alt="Xia Jie" className="inline-image" />土<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6128/1、6129/1、6130正/1、5530/1）</span></div>
                          <div>7. <img src={img36} alt="Xia Jie" className="inline-image" /><span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6366/1）</span></div>
                          <div>8. 吕<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》8610正/1）</span></div>
                          <div>9. <img src={img37} alt="Xia Jie" className="inline-image" />、<img src={img38} alt="Xia Jie" className="inline-image" /> <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》8529/1）</span></div>
                          <div>10. 臿、示、昜<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6063反/1、《合补》1760反/1）</span></div>
                          <div>11. <img src={img10} alt="Xia Jie" className="inline-image" /><span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6354正/1）</span></div>
                          <div>12. 不<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6363正/1）</span></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>  
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img39} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>  
                      <img src={img100} alt="Xia Jie" className="inline-image" />方发动的战争以<span style={{color: 'red'}}>侵田、掠夺人口和牲畜</span><span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6072正）</span>为目的，而不似后世战争以占领土地为目的。
                    </td>
                  </tr>
                  <tr>
                    <td>
                      卜辞问：<br></br>
                      贞<img src={img7} alt="Xia Jie" className="inline-image" />方弗<img src={img40} alt="Xia Jie" className="inline-image" />西土。<br></br>
                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》6357/1）</span><br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img41} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>  
                      “<img src={img40} alt="Xia Jie" className="inline-image" />”字，蔡哲茂释作罙，可读作“探”及“深”，此辞卜问方是否会深入西土。<br></br><br></br>

                      <img src={img1} alt="Xia Jie" className="inline-image" />方的内侵<span style={{color: 'red'}}>严重威胁着商朝西土的安全。</span>


                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="subpoint-item">
              <strong>例2: 羌方 “Qiang Fang”</strong>
              <ul className="nested-bullets">
                {language === 'cn' && <li>"羌"字在甲骨文中至少有14种写法<span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（详见《类纂》41页）</span>，其基本形为"<img src={img44} alt="Xia Jie" className="inline-image" />"。</li>}
                <li>{t('cp4.subtitle2_desc1')}</li>
                <li>{t('cp4.subtitle2_desc2')}</li>
                <li>{t('cp4.subtitle2_desc3')}</li>
                <li>{t('cp4.subtitle2_desc4')}</li>
                <ul style={{ listStyleType: "square" }}>
                  <li>{t('cp4.subtitle2_desc5')}</li>
                  <li>{t('cp4.subtitle2_desc6')}</li>
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
                      <br></br>
                      廪辛康丁（即三期）时才日益崛起。<br></br>
                      羌方战败，<span style={{color: 'orange'}}>其首领被俘</span>，用于<span style={{color: 'orange'}}>祭祀祖先</span>。

                    </td>

                    <td>
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
                      这是祭祀先王示主时<span style={{color: 'orange'}}>以九百羌为献</span>。
                    </td>
                  </tr>

                  <tr>
                    <td>
                      丁未卜，贞令成戉、光获羌刍五十。<br></br>
                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》22043）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img48} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      获写作“隻”，作以手抓鸟，意为抓获。这是<span style={{color: 'orange'}}>商王命令贵族戉、光抓获五十名羌人</span>。
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      王占日：有祟。八日庚子戈执羌⋯⋯人，<img src={img49} alt="Xia Jie" className="inline-image" />二人。<br></br>
                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》584反甲）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img51} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      “<img src={img50} alt="Xia Jie" className="inline-image" />”作监狱解。在某些卜辞中，又指被囚禁的奴隶；用为动词，释作囚禁在监狱中。这是说，贵族戈幸执的羌人，被关在监狱之中。<span style={{color: 'orange'}}>殷代设有关押羌人俘虏的监狱</span>。
                    </td>
                  </tr>
                  <tr>
                    <td>
                      庚辰卜，王，朕<img src={img52} alt="Xia Jie" className="inline-image" />羌，不黹死。<br></br>
                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》525）</span>
                      <br></br><br></br>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img53} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      “<img src={img52} alt="Xia Jie" className="inline-image" />”字作以刀割生殖器之形，对于受此刑的男子来说，即割去其生殖器。对于女子来说，即加以幽闭。这是<span style={{color: 'orange'}}>占问商王对羌奴施行宫剢之刑，是否致死</span>。
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
                      辞<span style={{color: 'orange'}}>命令五族戍守羌地</span>，这五族分别是屰，黻、冎、逐、何。
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{textAlign: 'center'}}>
                        <ImageWithMaximize src={img56} height="200px" alt="Xia Jie" onMaximize={setMaximizedImage} responsiveStyle={{maxWidth: '100%', maxHeight: '200px'}} />
                      </div>
                    </td>
                    <td>
                      <span style={{color: 'orange'}}>羌地成为商王的田猎场所。</span><br></br>
                      <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>（《合集》29310）</span>
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
              <strong>例1: 鬼方 “Gui Fang”</strong>
              <ul className="nested-bullets">
                <li>甲骨文： <img src={img57} alt="Xia Jie" className="inline-image" />、<img src={img58} alt="Xia Jie" className="inline-image" /> 、<img src={img59} alt="Xia Jie" className="inline-image" /> 。</li>
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
                      商王可能是要带领鬼方从事<span style={{color: 'green'}}>征伐活动</span>。
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
                      辞表明鬼方有为商王<span style={{color: 'green'}}>捕获羌人</span>的义务。
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
                      辞说明<span style={{color: 'green'}}>鬼方有人在商王廷任“小臣”</span>。
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
                      辞中的“<img src={img64} alt="Xia Jie" className="inline-image" />”为用牲之法，于省吾先生释为“割解”。“惟鬼眔周<img src={img64} alt="Xia Jie" className="inline-image" />”义为割解<span style={{color: 'green'}}>鬼方和周方的人进行祭祀</span>。
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

