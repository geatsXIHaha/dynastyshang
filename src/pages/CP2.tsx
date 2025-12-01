import { useLanguage } from '../hooks/useLanguage'
import ImageViewer from '../components/ImageViewer'
import './Pages.css'
import dynastyShangWangXi from '../assets/dynastyShangWangXi.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import img13 from '../assets/img13.png';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.png';
import img16 from '../assets/img16.png';
import img17 from '../assets/img17.png';
import img18 from '../assets/img18.png';
import img19 from '../assets/img19.png';
import img20 from '../assets/img20.png';
import img21 from '../assets/img21.png';
import img22 from '../assets/img22.png';
import img23 from '../assets/img23.png';
import img24 from '../assets/img24.png';
import img25 from '../assets/img25.png';
import img26 from '../assets/img26.png';
import img27 from '../assets/img27.png';
import img28 from '../assets/img28.png';
import img29 from '../assets/img29.png';
import img30 from '../assets/img30.png';
import img31 from '../assets/img31.png';
import img32 from '../assets/img32.png';
import img33 from '../assets/img33.png';
import img34 from '../assets/img34.png';
import img35 from '../assets/img35.png';
import img36 from '../assets/img36.png';
import img37 from '../assets/img37.png';
import img38 from '../assets/img38.png';
import img39 from '../assets/img39.png';
import img40 from '../assets/img40.png';
import img41 from '../assets/img41.png';
import img42 from '../assets/img42.png';
import img43 from '../assets/img43.png';
import img44 from '../assets/img44.png';
import img45 from '../assets/img45.png';
import img46 from '../assets/img46.png';
import img47 from '../assets/img47.png';
import img48 from '../assets/img48.png';
import img49 from '../assets/img49.png';


const Culture = () => {
  const { t } = useLanguage()

  return (
    <div className="page cp2-page">
      <div className="page-hero">
        <h1>{t('cp2.title')}</h1>
      </div>

      <div className="page-content">
        <section className="section">
          <h2>{t('cp2.subtitle1')}</h2>
          
          <div className="subpoint-container">
            <div className="subpoint-item">
              <ImageViewer src={dynastyShangWangXi} alt="king" showMagnifierAlways={true} />
            </div>
          </div>
          <br></br>
          <h2>{t('cp2.subtitle2')}</h2>
          <h3>{t('cp2.desc2')}</h3>

          <div className="table-container">
            <table className="shang-kings-table">
              <thead>
                <tr>
                  <th>{t('cp2.tableheader1')}</th>
                  <th>{t('cp2.tableheader2')}</th>
                  <th>{t('cp2.tableheader3')}</th>
                  <th>{t('cp2.tableheader4')}</th>
                  <th>{t('cp2.tableheader5')}</th>
                  <th>{t('cp2.tableheader6')}</th>
                  <th>{t('cp2.tableheader7')}</th>
                  <th>{t('cp2.tableheader8')}</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 2 - Full merge */}
                <tr>
                  <td colSpan={8} className="section-header"><b>{t('cp2.tabledesc1')}<br></br>{t('cp2.tabledesc2')}</b></td>
                </tr>
                {/* Rows 3-21 - Columns 7-8 merge */}
                <tr>
                  <td>1</td>
                  <td>大乙汤</td>
                  <td>天乙</td>
                  <td>高祖</td>
                  <td>履</td>
                  {/* <td>
                  商王，子姓
                  <br />
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px' }}>
                    
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', justifyContent: 'center' }}>
                      <ImageViewer src={img1} alt="img1" size="small" zoomLevel={5} />
                      <span style={{ fontSize: '0.9rem' }}>大乙</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', justifyContent: 'center' }}>
                      <ImageViewer src={img2} alt="img2" size="small" zoomLevel={5} />
                      <span style={{ fontSize: '0.9rem' }}>高祖乙</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', justifyContent: 'center' }}>
                      <ImageViewer src={img3} alt="img3" size="small" zoomLevel={5} />
                      
                    </div>
                    
                  </div>
                </td> */}

                <td>
                  商王，子姓 <br />
                  
                  {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                        <ImageViewer src={img1} alt="img1" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>大乙</span>
                      </div>

                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                        <ImageViewer src={img2} alt="img2" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>高祖乙</span>
                      </div>

                      {/* Row 3 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <ImageViewer src={img3} alt="img3" size="small" zoomLevel={5} />
                      </div>

                      {/* Row 4 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <ImageViewer src={img4} alt="img4" size="small" zoomLevel={5} />
                      </div>

                      {/* Row 5 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '17px' }}>
                        <ImageViewer src={img5} alt="img5" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>成</span>
                      </div>

                      {/* Row 6 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '28px' }}>
                        <ImageViewer src={img6} alt="img6" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>汤</span>
                      </div>

                    </div>
                  </div>
                </td>


                  <td rowSpan={19}>1600-1300</td>
                  <td rowSpan={19}></td>
                </tr>
                <tr>
                  <td></td>
                  <td>大丁</td>
                  <td>太丁</td>
                  <td>（无）</td>
                  <td>托</td>
                  <td>未即位，追尊为王<br/>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                        <ImageViewer src={img7} alt="img7" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>大丁</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>卜丙</td>
                  <td>外丙</td>
                  <td></td>
                  <td>胜</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '43px' }}>
                        <ImageViewer src={img8} alt="img8" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>卜丙</span>
                      </div>

                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '43px' }}>
                        <ImageViewer src={img9} alt="img9" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>且（祖）丙</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>-</td>
                  <td>仲壬</td>
                  <td></td>
                  <td>庸</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '32px' }}>
                        <ImageViewer src={img10} alt="img10" size="small" zoomLevel={5} />
                      </div>

                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '32px' }}>
                        <ImageViewer src={img11} alt="img11" size="small" zoomLevel={5} />
                        
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>大甲</td>
                  <td>太甲</td>
                  <td>太宗</td>
                  <td>至</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                        <ImageViewer src={img12} alt="img12" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>大甲</span>
                      </div>

                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>-</td>
                  <td>沃丁</td>
                  <td></td>
                  <td>绚</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                        <ImageViewer src={img13} alt="img13" size="small" zoomLevel={5} />
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                        <ImageViewer src={img11} alt="img11" size="small" zoomLevel={5} />
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>大庚</td>
                  <td>太庚</td>
                  <td></td>
                  <td>辩</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                        <ImageViewer src={img15} alt="img15" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>大庚</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>小甲</td>
                  <td>小甲</td>
                  <td></td>
                  <td>高</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                        <ImageViewer src={img16} alt="img16" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>小甲</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>雍己</td>
                  <td>雍己</td>
                  <td></td>
                  <td>密</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                        <ImageViewer src={img17} alt="img17" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>雍己</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>大戊</td>
                  <td>太戊</td>
                  <td>中宗</td>
                  <td></td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                        <ImageViewer src={img18} alt="img18" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>大戊</span>
                      </div>

                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                        <ImageViewer src={img19} alt="img19" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>且戊</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>中丁</td>
                  <td>仲丁</td>
                  <td></td>
                  <td>庄</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                        <ImageViewer src={img20} alt="img20" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>中丁</span>
                      </div>

                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '9px' }}>
                        <ImageViewer src={img21} alt="img21" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>三且丁</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>卜壬</td>
                  <td>外壬</td>
                  <td></td>
                  <td>发</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px' }}>
                        <ImageViewer src={img22} alt="img22" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>卜壬</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>戋甲</td>
                  <td>河亶甲</td>
                  <td></td>
                  <td>整</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                        <ImageViewer src={img23} alt="img23" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>戋甲</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>且乙</td>
                  <td>祖乙</td>
                  <td></td>
                  <td>滕</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '25px' }}>
                        <ImageViewer src={img24} alt="img24" size="small" zoomLevel={5} />
                      </div>
                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img25} alt="img25" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>下乙</span>
                      </div>
                      {/* Row 3 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img26} alt="img26" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>中（仲）宗且（祖）乙</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>且辛</td>
                  <td>祖辛</td>
                  <td></td>
                  <td>旦</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img27} alt="img27" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>且辛</span>
                      </div>
                      
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>阳羌甲</td>
                  <td>沃甲</td>
                  <td></td>
                  <td>逾</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img28} alt="img28" size="small" zoomLevel={5} />
                      </div>
                      
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>且丁</td>
                  <td>祖丁</td>
                  <td></td>
                  <td>新</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img29} alt="img29" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>且丁</span>
                      </div>
                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img30} alt="img30" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>小丁</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>南庚</td>
                  <td>南庚</td>
                  <td></td>
                  <td>更</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img31} alt="img31" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>南庚</span>
                      </div>
                      
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>象甲</td>
                  <td>阳甲</td>
                  <td></td>
                  <td>和</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img32} alt="img32" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>象甲</span>
                      </div>
                      
                    </div>
                  </div>
                  </td>
                </tr>
                {/* Row 22 - Full merge */}
                <tr>
                  <td colSpan={8} className="section-header"><b>{t('cp2.tabledesc3')}<br></br>{t('cp2.tabledesc4')}</b></td>
                </tr>
                {/* Rows 23-26 - Columns 7-8 merge */}
                <tr>
                  <td>19</td>
                  <td>般庚</td>
                  <td>盘庚</td>
                  <td>世祖</td>
                  <td>旬</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img33} alt="img33" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>般庚</span>
                      </div>
                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
                        <ImageViewer src={img34} alt="img34" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>三且（祖）庚</span>
                      </div>
                    </div>
                  </div>
                  </td>
                  <td rowSpan={4}>1300-1251</td>
                  <td rowSpan={4}>50</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>小辛</td>
                  <td>小辛</td>
                  <td></td>
                  <td>颂</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img35} alt="img35" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>小辛</span>
                      </div>
                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img36} alt="img36" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>二且（祖）辛</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>小乙</td>
                  <td>小乙</td>
                  <td></td>
                  <td>敛</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '7px' }}>
                        <ImageViewer src={img37} alt="img37" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>小乙</span>
                      </div>
                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                        <ImageViewer src={img38} alt="img38" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>小且（祖）乙</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>武丁</td>
                  <td>武丁</td>
                  <td>高宗</td>
                  <td>昭</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img39} alt="img39" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>武丁</span>
                      </div>
                      
                    </div>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>且己(孝已)</td>
                  <td>祖己<br/>(孝已)</td>
                  <td>(无)</td>
                  <td></td>
                  <td>未即位，追尊为王
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                        <ImageViewer src={img40} alt="img40" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>且（祖）己</span>
                      </div>
                      
                    </div>
                  </div>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>祖戊</td>
                  <td>祖戊</td>
                  <td>(无)</td>
                  <td></td>
                  <td>未即位，追尊为王</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>(未闻其祭名也)</td>
                  <td></td>
                  <td>(无)</td>
                  <td></td>
                  <td>篡位，甲骨文中有记载</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>且庚</td>
                  <td>祖庚</td>
                  <td></td>
                  <td>跃</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                        <ImageViewer src={img41} alt="img41" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>且（祖）庚</span>
                      </div>
                    </div>
                  </div>
                  </td>
                  <td rowSpan={4}>1191-1148</td>
                  <td rowSpan={4}>44</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>且甲</td>
                  <td>祖甲</td>
                  <td>世宗</td>
                  <td>载</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                        <ImageViewer src={img42} alt="img42" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>且（祖）甲</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>

                <tr>
                  <td>26</td>
                  <td>廪辛</td>
                  <td>廪辛</td>
                  <td></td>
                  <td>先</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                        <ImageViewer src={img43} alt="img43" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>且（祖）辛</span>
                      </div>
                      {/* Row 2 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                        <ImageViewer src={img44} alt="img44" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>三且（祖）辛</span>
                      </div>
                    </div>
                  </div>
                  </td>
                </tr>
                
                <tr>
                  <td>27</td>
                  <td>康丁</td>
                  <td>庚丁</td>
                  <td></td>
                  <td>嚣</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                        <ImageViewer src={img45} alt="img45" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>康且（祖）丁</span>
                      </div>
                      
                    </div>
                  </div>
                  </td>
                </tr>

                <tr>
                  <td>28</td>
                  <td>武乙</td>
                  <td>武乙</td>
                  <td></td>
                  <td>瞿</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '26px' }}>
                        <ImageViewer src={img46} alt="img46" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>武乙</span>
                      </div>
                    </div>
                  </div>
                  </td>
                  <td>1147-1113</td>
                  <td>35</td>
                </tr>

                <tr>
                  <td>29</td>
                  <td>文丁</td>
                  <td>太丁</td>
                  <td></td>
                  <td>托</td>
                  <td>甲骨文中亦作“文武丁”
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img47} alt="img47" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>文武丁</span>
                      </div>
                    </div>
                  </div>
                  </td>
                  <td>1112-1102</td>
                  <td>11</td>
                </tr>

                <tr>
                  <td>30</td>
                  <td>帝乙</td>
                  <td>帝乙</td>
                  <td></td>
                  <td>羡</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img48} alt="img48" size="small" zoomLevel={5} />
                      </div>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img14} alt="img14" size="small" zoomLevel={5} />
                      </div>
                    </div>
                  </div>
                  </td>
                  <td>1101-1076</td>
                  <td>26</td>
                </tr>

                <tr>
                  <td>31</td>
                  <td>帝辛</td>
                  <td>帝辛</td>
                  <td></td>
                  <td>受（受德）</td>
                  <td>
                    {/* 1. OUTER WRAPPER: Centers the "Block" in the cell */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Moves the whole block to the middle
                    width: '100%'             // Ensures it spans the cell width
                  }}>

                    {/* 2. INNER WRAPPER: The "Block" that holds the alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start', // Keeps images aligned by left edge
                      gap: '7px',
                    }}>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img49} alt="img49" size="small" zoomLevel={5} />
                        <span style={{ fontSize: '0.9rem', lineHeight: '1' }}>殷纣王</span>
                      </div>
                      {/* Row 1 */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                        <ImageViewer src={img14} alt="img14" size="small" zoomLevel={5} />
                      </div>
                    </div>
                  </div>
                  </td>
                  <td>1075-1046</td>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Culture
