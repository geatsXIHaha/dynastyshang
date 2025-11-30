import { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'cn' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguageContextInternal = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('cn')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: unknown = translations[language]
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k]
      }
    }
    return (typeof value === 'string' ? value : key) || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations = {
  cn: {
    nav: {
      home: '首页',
      chapter1: '成汤建国&灭夏',
      chapter2: '王係谱&年表',
      chapter3: '都城迁徒',
      chapter4: '商与周边部族关系',
      logo: '商朝',
    },
    home: {
      title: '欢迎来到商朝',
      subtitle: 'Welcome to Shang Dynasty',
      description: '发现中国第一个有记载的朝代的古代智慧',
      aboutTitle: '关于商朝',
      aboutContent: '商朝（公元前1600-1046年）是中国第一个有历史记载的朝代，标志着中华文明的开端。这是一个从青铜冶金到早期文字的非凡文化和技术进步时期。',
      keyFeaturesTitle: '主要特征',
      feature1: '先进的青铜技术',
      feature2: '早期中文书写系统',
      feature3: '丰富的宗教实践',
      feature4: '复杂的社会结构',
      navigateTitle: '浏览',
      navigateDesc: '使用菜单探索有关商朝的不同部分：',
      cp1Desc: '了解时间表和统治者',
      cp2Desc: '发现艺术、传统和日常生活',
      cp3Desc: '查看文物和考古发现',
    },
    cp1: {
      title: '成汤建国&灭夏',
      subtitle1: '成汤灭夏的原因',
      subpoint1_title: '1. 孔甲乱政',
      subpoint1_desc1: '夏朝倒数第四位君主——孔甲',
      subpoint1_desc2: '他即位之后喜好效法鬼神，做事荒淫无度。夏朝的威望就是从这个时候开始衰败的。',
      subpoint1_desc3: '因此诸侯也开始纷纷背叛他了。',
      subpoint1_desc4: '《史记·夏本纪》',

      subpoint2_title: '2. 夏桀（履癸）暴政',
      subpoint2_desc1: '夏朝最后一位君主',
      subpoint2_desc2: '夏朝自夏桀曾祖父孔甲之时，弄得国势日衰，而夏桀的出现，正式让夏朝走向灭亡。',
      subpoint2_desc3: '奴隶们不堪夏桀压迫，相率逃亡，王朝控制下的方国部落也多叛离。',
      subpoint2_desc4: '为了彰显自己的淫威，用武力去镇压那些遥远的离德方国部落，',
      subpoint2_desc5: '他掠夺奴隶和财物，以补充奴隶主们所丧失的“臣妾與马。”',
      subpoint2_desc6: '讨伐有施氏，让有施氏被迫以妹嬉(又作末喜)献纳。',
      subpoint2_desc7: '他宠爱妹喜，大兴土木建造顷宫和瑶台，无休无止的征发人民服劳役。',
      subpoint2_desc8: '还做酒池肉林，令男女裸体追逐嬉戏。',
      subpoint2_desc9: '其结果是“赋命无度，万民甚苦”。',
      
      subtitle2: '成汤灭夏的过程',
      subpoint3_title: '成汤（商汤)',
      subpoint3_desc1: '这时，原本臣属于夏王朝的东夷部落商，在成汤的领导下崛起。',
      subpoint3_desc2: '道统五像.汤（南宋·马麟绘）',
      subpoint3_desc3: '部落商的首领，仁义英明，中国古代四位圣王“尧舜禹汤”之一',
      subpoint3_desc4: '在夏桀横行暴政的同时，成汤在行仁义，敬鬼神。',
      subpoint3_desc5: '“荆伯”不服商，成汤便送了许多牛给他做祭祀的贡品，与他结好。',
      subpoint3_desc6: '有洛氏大兴土木，劳民伤财，成汤便讨伐他。',
      subpoint3_desc7: '就这样，英明的成汤获得了许多部落方国的支持。',
      subpoint3_example: '例子:',

      subpoint4_title: '第一步：招兵买马',
      subpoint4_desc1: '商汤在获得了许多部落放过的支持之后，又得到了两位大将仲虺和伊尹的帮助。',
      subpoint4_desc2: '仲虺是夏王朝的贵族后裔，据传先人奚仲是夏禹的车正（管理和制造车辆的官员)。',
      subpoint4_desc3: '伊尹原先是一个古老部族有莘氏君主的近身奴仆，后因仰慕成汤的英明，在成汤迎娶有莘氏之女的时候作为陪嫁随从到了成汤的手下。',
      subpoint4_desc4: '于是，二者成为了成汤的谋士，帮助他不断向周围扩张，发展商族的势力。',
      subpoint4_desc5: '夏桀害怕商族的势力逐渐扩大会影响到他的权利，便借口派人抓了成汤。',
      subpoint4_desc6: '“仲虺和伊尹知道夏桀贪财，便给他送了大量的珍奇宝物。夏桀也开心的放了成汤。',

      subpoint5_title: '第二步：逐个击破',
      subpoint5_desc1: '成汤回去之后便和两位谋士商讨灭夏大计，最后决定以逐个击破的方式来实行。',
      subpoint5_desc2: '他们先灭掉了夏的盟国葛国。葛国的君主葛伯，不祭先祖，荒淫无道。成汤曾经派人帮助葛国种植庄稼，不曾想葛伯派人抢走商族老弱妇孺给种地人送的食物，还杀死了一个送饭的小孩。',
      subpoint5_desc3: '葛国的灭亡也象征夏商之战正式拉开了序幕。',
      subpoint5_desc4: '成汤率领军队南征北伐，灭掉了助桀为虐的韦，顾，昆吾三国。',

      subpoint6_title: '第三步：欲擒故纵',
      subpoint6_desc1: '成汤为了试探夏桀的实力和能力，便停止向夏桀纳贡。',
      subpoint6_desc2: '夏桀得知了很生气，决定起“九夷之师”灭商。',
      subpoint6_desc3: '成汤发现了夏桀还有号召力，如果不纳贡，可能会被受到夏军和夷人的前后夹击。于是，便改变策略，转而加倍向夏桀纳贡。',
      subpoint6_desc4: '夏桀的贪欲得到了满足，变得意忘形，让集结的九夷之师回去。这让夏桀在各大部落面前暴露了其贪欲以及在各大部族那里失去了信用。',
      subpoint6_desc5: '第二年，成汤再次停止纳贡，但是这一次夏桀再想调用九夷之师已经不灵了。',

      subpoint7_title: '第四步: 师出有名',
      subpoint7_desc1: '夏、商两军在鸣条对垒前,汤在誓师大会上历数了夏桀的暴虐行径。',
      subpoint7_desc2: '商汤发表了激昂的誓词：有夏多罪，我怕违背上天旨意，不敢不去讨伐夏国！夏桀大兴徭役，耗尽民力，把夏代的城邑剥削得干干净净，夏民离心离德，反对夏桀。现在我要执行上天对夏的惩罚，你们要好好帮助我，我将赏赐你们；如果你们不服从，我将严惩你们！',
      subpoint7_desc3: '成汤发表了誓词后，军心大振。',
      subpoint7_desc4: '商军和夏军大战于有绒之墟，夏桀失败，退守鸣条，又被商军击败，最后死去。',
      subpoint7_desc5: '成汤回师毫邑，即位为王，三千诸侯前来相贺，从而建立起中国第二个王朝—商朝。',

      subtitle3: '成汤建商的措施',
      subtitle3_desc: '成汤以伊尹、仲虺为师,向他们学习统治国家的方法。',
      subpoint8_title: '1. 笼络人心',
      subpoint8_desc1: '为了稳定夏贵族,成汤留用了一批夏王朝已经降服了的贵族和官吏,又封了夏人的后裔。 这不仅使夏朝百姓很高兴，宛若得到了了一位慈爱的父母来统治他们一般。',
      subpoint8_desc2: '商朝也沿用了一些夏朝的官员，使得政治稳定。',
      subpoint8_desc3: '商朝建立之后，农民没有离开他们的土地，农业活动照常进行，商人没有更换他们的店铺，这就让百姓亲近殷商，就如同以前亲近夏朝一样。',

      subpoint9_title: '2. 怀柔政策',
      subpoint9_desc1: '成汤对愿意归顺的原有方国部落维持旧有状况，不予改变。 这不仅使夏朝百姓很高兴，宛若得到了了一位慈爱的父母来统治他们一般。',
      subpoint9_desc2: '并且商汤在盟会上宣告自己以“有德”取代夏桀成为天下共主。',
      subpoint9_desc3: '他还发布了《汤诰》，要求各方首领安分守己，为民立功。',

      subpoint10_title: '3. 建立国家中央机关和法律体系',
      subpoint10_desc1: '设立官职：在王之下设立“左相”、“右相”作为辅佐（如伊尹）。',
      subpoint10_desc2: '确立统治准则：伊尹总结历史教训，制订了君臣关系准则。',
      subpoint10_desc3: '制定刑法：成汤颁布“汤刑*”，以法律形式维护奴隶制统治。',
      subpoint10_desc4: '相传“网开三面”的故事。百姓好比是鸟,虽然网开三面. 但如果不听劝告还要触动法网的话,那就怪不得剩下的这一面无情了。这就是要百姓不要触犯法律,否则法网难逃!',

      subpoint11_title: '4. 重视农业生产的发展',
      subpoint11_desc1: '先秦文献盛传,商灭夏以后天大旱。',
      subpoint11_desc2: '成汤一面亲自向天祈祷求雨',
      subpoint11_desc3: '一面用伊尹"教民田头凿井以灌田"。推广水利技术，抗旱保收。',
    
      
    },
    cp2: {
      title: '王係谱&年表',
    },
    cp3: {
      title: '都城迁徒',
      cp3_desc: '商朝的独特之处：商王屡次迁都城',
      subtitle1: '商朝一共有几次迁都？',
      subpoint1_desc1: '东汉张衡《东京赋》：“殷人屡迁，前八后五”。',
      subpoint1_desc2: '前八：商朝建立以前，从契至商汤期间迁徙八次；。',
      subpoint1_desc3: '后五：商汤建立商朝以后，从商汤至盘庚期间经历五次迁都。',
      subpoint1_desc4: '盘庚迁殷之后，商人的都城就再没有迁移过。',

      table_header1:'前八次迁徙',
      table_desc1:'（部落的流移)',
      table_header2:'五次迁都',
      table_desc2:' ',
      table_column1_cont1:'1. 第一次，契自亳迁蕃。',
      table_column1_cont2:'2. 第二次，昭明迁砥石。',
      table_column1_cont3:'3. 第三次，昭明迁商。',
      table_column1_cont4:'4. 第四次，相土迁商邱。',
      table_column1_cont5:'5. 第五次，相土迁泰山下，又复归商邱。',
      table_column1_cont6:'6. 第六次，商侯迁殷。',
      table_column1_cont7:'7. 第七次，殷侯迁商邱。',
      table_column1_cont8:'8. 第八次，汤始居亳。',
      table_column2_cont1:'1. 第一次，仲丁迁于嚣（隞）。',
      table_column2_cont2:'2. 第二次，河亶甲居相。',
      table_column2_cont3:'3. 三次，祖乙都邢。',
      table_column2_cont4:'4. 第四次，南庚都奄。',
      table_column2_cont5:'5. 第五次，盘庚迁殷。',

      subtitle2: '商朝为何频繁迁都？',
      subpoint2_title: '（一）水患说',
      subpoint2_desc1: '殷人为躲避水灾的威胁，不得不多次迁都。',
      subpoint2_desc2: '南宋蔡沈《书集传》：“自祖乙都耿，圯于河水，盘庚欲迁于殷。”',
      subpoint2_desc3: '洪水灾害对都城造成重大的生命、财产损失，引起经济、社会的问题，不得不迁',
      
      subpoint3_title: '（二） 游牧说',
      subpoint3_desc1: '殷人在盘庚以前是迁徙无定的游牧民族，没有固定的都邑。',
      subpoint3_desc2: '到盘庚时才有初步的农业，由游牧时代转入农业时代，因此有了定居的倾向',

      subpoint4_title: '（三）游农说',
      subpoint4_desc1: '商代前期处于粗耕农业阶段。',
      subpoint4_desc2: '其原始性主要表现在生产工具的笨拙和耕作方式的原始。',
      subpoint4_desc3: '这当一个地方地力耗尽后，就需要改换耕地，所以不得不迁都。',

      subpoint5_title: '（四）战争说',
      subpoint5_desc1: '《竹书纪年》：“商王仲丁即位，征于蓝夷”。',
      subpoint5_desc2: '从军事角度考虑，迁都为了作战的方便。',
      subpoint5_desc3: '选择作战方便的的地方，便于战争调度',

      subpoint6_title: '（五）王位纷争说',
      subpoint6_desc1: '《从仲丁以后，商王朝内部发生“九世之乱”。',
      subpoint6_desc2: '内忧：诸弟子争夺王位',
      subpoint6_desc3: '外患：蓝夷进攻商朝，仲丁出兵击退蓝夷',
      subpoint6_desc4: '商王朝陷入内外交困的危机中。',
      subpoint6_desc5: '不断迁都作为解决问题的手段。',

      subtitle3: '总结',
      subpoint7_desc1: '都城屡次迁徙，应该是多种因素共同作用的结果，可是仍没有最终定论。',
      subpoint7_desc2: '值得指出的是，自盘庚迁殷以后，商人定居了下来。',
      subpoint7_desc3: '自迁殷至纣之灭，凡二百七十三年，殷人未再迁都。',

      map_desc: '商时期中心区域图',
      
    },

    cp4: {
      title: '商与周边部族关系',
    },
    footer: {
      copyright: '版权所有 AII2001 书法与古代文字',
      subtitle: '商朝历史长卷',
    },
  },
  en: {
    nav: {
      home: 'Home',
      chapter1: '111',
      chapter2: 'GENEALOGY',
      chapter3: 'RELOCATION OF CAPITAL',
      chapter4: 'RELATIONSHIP',
      logo: 'Shang Dynasty',
    },
    home: {
      title: 'Welcome to Shang Dynasty',
      subtitle: 'Discover the Ancient Wisdom of China\'s First Recorded Dynasty',
      description: 'Discover the Ancient Wisdom of China\'s First Recorded Dynasty',
      aboutTitle: 'About Shang Dynasty',
      aboutContent: 'The Shang Dynasty (1600–1046 BCE) was China\'s first recorded dynasty, marking the beginning of Chinese civilization. It was a period of remarkable cultural and technological advancement, from bronze metallurgy to early written language.',
      keyFeaturesTitle: 'Key Features',
      feature1: 'Advanced Bronze Technology',
      feature2: 'Early Chinese Writing System',
      feature3: 'Rich Religious Practices',
      feature4: 'Complex Social Structure',
      navigateTitle: 'Navigate Through',
      navigateDesc: 'Use the menu to explore different sections about the Shang Dynasty:',
      cp1Desc: 'Learn about the timeline and rulers',
      cp2Desc: 'Discover arts, traditions, and daily life',
      cp3Desc: 'View artifacts and archaeological findings',
    },
    cp1: {
      title: 'Cheng Tang Founding the Dynasty & Overthrowing Xia',
      subtitle1: 'Reason of Cheng Tang making Xia Dynasty to extinct',
      subpoint1_title: '1. Politics corrupted by Kong Jia',
      subpoint1_desc1: 'Kong Jia, the fourth to last monarch of the Xia Dynasty.',
      subpoint1_desc2: 'After his accession to the throne, he liked to imitate ghosts and gods, and did things without temperance. It was from this time that the prestige of the Xia Dynasty began to decline.',
      subpoint1_desc3: 'Therefore, the feudal vassal also began to betray him one after another.',
      subpoint1_desc4: '<Shiji·Xiabenji> (Records of the Grand Historian: The Annals of Xia)',

      subpoint2_title: '2. The tyranny of Xia Jie (Lu Gui)',
      subpoint2_desc1: 'The last monarch of the Xia Dynasty.',
      subpoint2_desc2: 'Since the reign of Kong Jia, the great-grandfather of Xia Jie, the Xia Dynasty had been in decline. The emergence of Xia Jie officially led to the downfall of the Xia Dynasty.',
      subpoint2_desc3: 'The slaves unable to bear the oppression of Xia Jie, fled one after another, and many of the vassal states and tribes under the control of the dynasty also rebelled.',
      subpoint2_desc4: 'To manifest his tyranny, he used force to suppress those distant “Li De” tribes:',
      subpoint2_desc5: 'He plundered slaves and wealth to replenish the minister, concubine, carriage and horses that the slave owners had lost.”',
      subpoint2_desc6: 'To attack the You Shi family, they forced the You Shi family to offer sacrifices in the form of Mei Xi (also known as Mo Xi).',
      subpoint2_desc7: 'He doted on Mei Xi and built the Qing Palace and the Yao Terrace on a large scale, conscripting people to perform forced labor without end.',
      subpoint2_desc8: 'He even turned it into a feast of wine and meat, ordering men and women to chase and play naked.',
      subpoint2_desc9: 'The result leads to “power is exercised in the most arbitrary way, causing the people to suffer day after day.”',
      
      subtitle2: 'Process of Cheng Tang making Xia Dynasty to extinct',
      subpoint3_title: 'Cheng Tang (Shang Tang)',
      subpoint3_desc1: 'At this time, the Dongyi tribal Shang, who originally belonged to the Xia Dynasty, rose to power under the leadership of Cheng Tang.',
      subpoint3_desc2: '".',
      subpoint3_desc3: 'The leader of the Shang, benevolence, righteousness and wisdom, one of the four sage Kings of ancient China "Yao, Shun and Yu Tang',
      subpoint3_desc4: 'While Xia Jie was tyrannical in the Xia Dynasty, Cheng Tang practiced benevolence and righteousness and worshiped ghosts and gods.',
      subpoint3_desc5: 'Jing Bo was dissatisfied with Shang. Cheng Tang then sent him many oxen as sacrificial offerings to befriend him.',
      subpoint3_desc6: 'The Luo family carried out large-scale construction projects, which were exhausting and costly for the people. Cheng Tang then attacked them.',
      subpoint3_desc7: 'In this way, the wise Cheng Tang gained the support of many tribal states.',
      subpoint3_example: 'Example:',

      subpoint4_title: 'STEP 1: Recruit soldiers and buy horses',
      subpoint4_desc1: 'After obtaining the support of many tribes, Tang of Shang also received assistance from two great generals, Zhong Hui and Yi Yin.',
      subpoint4_desc2: 'Zhong Hui was a descendant of the nobility of the Xia Dynasty. It is said that his ancestor Xi Zhong was the chariotmaker (an official in charge of and manufacturing vehicles) of Xia Yu.',
      subpoint4_desc3: 'Yi Yin was originally a close servant of the ruler of the ancient tribe Youxin. Later, out of admiration for Cheng Tang\'s wisdom, he served as a dowry attendant under Cheng Tang when he married a daughter of the Youxin family.',
      subpoint4_desc4: 'So, the two became Cheng Tang\'s advisors, helping him continuously expand into the surrounding areas and develop the power of the Shang.',
      subpoint4_desc5: 'Xia Jie was afraid that the gradual expansion of the Shang people\'s power would affect his authority, so he made an excuse and sent people to arrest Cheng Tang.',
    
      subpoint5_title: 'STEP 2: Break them down one by one',
      subpoint5_desc1: 'After returning, Cheng Tang discussed the plan to destroy the Xia Dynasty with two strategists and finally decided to carry it out by defeating them one by one.',
      subpoint5_desc2: 'They first destroyed Ge, Xia\'s ally. The ruler of the State of Ge, Ge Bo, did not pay homage to his ancestors and was dissolute and immoral. Cheng Tang once sent people to help the State of Ge grow crops. Unexpectedly, Ge Bo sent people to snatch the food sent by the elderly, weak, women and children of the Shang people to the farmers, and even killed a child who was delivering food.',
      subpoint5_desc3: 'The fall of the State of Ge also symbolized the official start of the war between the Xia and Shang Dynasties.',
      subpoint5_desc4: 'Cheng Tang led his troops to launch campaigns in the south and north, and defeated the unruly Wei, Gu and Kunwu states.',

      subpoint6_title: 'STEP 3: Feigning indifference to lure the enemy',
      subpoint6_desc1: 'In order to test the strength and ability of Xia Jie, Cheng Tang stopped paying tribute to him.',
      subpoint6_desc2: 'When Jie learned this, he was very angry and decided to form a "division of Nine Yi" to destroy the Shang.',
      subpoint6_desc3: 'Cheng Tang discovered that Xia Jie still had the power to appeal. If he did not pay tribute, he might be attacked from both the front and rear by the Xia army and the Yi people. So, he changed his strategy and instead doubled his tribute to Xia Jie.',
      subpoint6_desc4: 'Xia Jie\'s greed was satisfied, and he became overjoyed, sending back the Nine Yi troops he had gathered. This exposed Xia Jie\'s greed in front of the major tribes and made him lose his credibility among them.',
      subpoint6_desc5: 'The following year, Cheng Tang once again stopped paying tribute, but this time, Xia Jie’s attempt to mobilize the army of the Nine Yi was no longer effective.',
    
      subpoint7_title: 'STEP 4: Find a reason to rationalize the war ',
      subpoint7_desc1: 'Before the battle of Ming Tiao between the Xia and Shang armies, Cheng Tang enumerated the tyrannical deeds of Xia Jie at the oath-taking ceremony.',
      subpoint7_desc2: 'Shang Tang issued a passionate oath: There are many sins in Xia. I am afraid of disobeying the will of God, and I dare not not to attack Xia Jie, use up the corvee, drain the people\'s strength, and exploit the cities and towns of the Xia Dynasty completely. The Xia people rebelled against Jie. Now I am going to carry out the punishment that God has imposed on Xia. You should help me well and I will reward you. If you don\'t obey, I will punish you severely!',
      subpoint7_desc3: 'After Cheng Tang delivered the oath, the morale of the troops was greatly boosted.',
      subpoint7_desc4: 'The Shang army and the Xia army engaged in a fierce battle at the ruins of Yourong. Xia Jie was defeated and retreated to Mingtiao, where he was defeated again by the Shang army and eventually died.',
      subpoint7_desc5: 'Cheng Tang returned to Haoyi and ascended the throne as monarch. Three thousand vassal states came to offer their congratulations, thus establishing the second dynasty of China - the Shang Dynasty.',
    
      subtitle3: 'Cheng Tang\'s measures to establish the Shang Dynasty',
      subtitle3_desc: 'Cheng Tang took Yi Yin and Zhong Hui as his teachers and learned from them the methods of governing a country.',
      subpoint8_title: '1. Win people\'s hearts',
      subpoint8_desc1: 'In order to stabilize the Xia nobility, Cheng Tang retained a group of nobles and officials who had already been subdued by the Xia Dynasty and also enfeoffed the descendants of the Xia people. This not only made the people of the Xia Dynasty very happy, but also made them feel as if they had a loving parent to rule over them.',
      subpoint8_desc2: 'The Shang Dynasty also retained some officials from the Xia Dynasty, which contributed to political stability.',
      subpoint8_desc3: 'After the establishment of the Shang Dynasty, farmers did not leave their land, agricultural activities continued as usual, and merchants did not change their shops. This made the common people close to the Shang Dynasty just as they had been close to the Xia Dynasty before.',

      subpoint9_title: '2. Conciliatory policy',
      subpoint9_desc1: 'Cheng Tang maintained the old status quo for the original vassal states and tribes that were willing to submit and did not make any changes.',
      subpoint9_desc2: 'Moreover, at the alliance meeting, Shang Tang declared that he would replace Xia Jie as the supreme monarch of the world with "virtue".',
      subpoint9_desc3: 'He also issued the "Tang Gao", demanding that the leaders of all parties be law-abiding and perform their duties for the people.',

      subpoint10_title: '3. Establish the central organs of the state and the legal system',
      subpoint10_desc1: 'Establishing official positions: Under the king, "Left Prime Minister" and "Right Prime Minister" were appointed as assistants (such as Yi Yin).',
      subpoint10_desc2: 'Establishing the principles of governance: Yi Yin summed up historical lessons and formulated the principles of the relationship between the monarch and his ministers.',
      subpoint10_desc3: 'The enactment of criminal law: Cheng Tang promulgated the "Tang Punishments" to maintain the rule of slavery in legal form.',
      subpoint10_desc4: 'It is said that there is a story about "opening the net on three sides". The common people are like birds, though the net is wide open on three sides. But if you don\'t listen to the advice and want to touch the net, then it\'s no wonder that the rest of the sides are ruthless. This is to ask the common people not to break the law, otherwise, they will not escape the law!',

      subpoint11_title: '4. Attach importance to the development of agricultural production',
      subpoint11_desc1: 'According to the literature of the Pre-Qin period, there was a severe drought after the Shang Dynasty overthrew the Xia Dynasty.',
      subpoint11_desc2: 'While Cheng Tang personally prayed to the sky for rain, he also used Yi Yin to "teach the people to dig wells at the edges of their fields to irrigate them." Promote water conservancy technology to resist drought and ensure harvests.',
    },
    cp2: {
      title: 'Shang Dynasty Culture',
    },
    cp3: {
      title: 'Relocations of Capitals',
      cp3_desc: 'The Shang Dynasty\'s Unique Feature: Frequent Capital Relocations',
      subtitle1: 'How many times did the Shang Dynasty relocate its capital?',
      subpoint1_desc1: 'According to Zhang Heng’s Eastern Metropolis Rhapsody (Dongjing fu东京赋), the Yin people moved repeatedly.',
      subpoint1_desc2: 'Before Cheng Tang (成汤) founded the dynasty, the Shang people migrated eight times as a tribe from Xie (契) to Cheng Tang (成汤).',
      subpoint1_desc3: 'After the dynasty was established, Shang emperors relocated the capital five times from Tang (成汤) to Pan Geng (盘庚).',
      subpoint1_desc4: 'After Pan Geng moved the capital to Yin (殷), the Shang capital remained stable and never moved again.',

      table_header1:'Eight Early Migrations',
      table_desc1:'(Tribal Movements Before the Dynasty)',
      table_header2:'Five Capital Relocations',
      table_desc2:'(After establishment of the Shang Dynasty)',
      table_column1_cont1:'1. Xie (契) moved from Bo(亳)to Fan(蕃)',
      table_column1_cont2:'2. Zhao Ming (昭明) moved to Di Shi (砥石)',
      table_column1_cont3:'3. Zhao Ming (昭明) moved to Shang (商)',
      table_column1_cont4:'4. Xiang Tu (相土) moved to Shangqiu (商丘)',
      table_column1_cont5:'5. Xiang Tu (相土) moved to Mt. Tai foothill (泰山下) , then moved back to Shangqiu (商丘)',
      table_column1_cont6:'6. Shang Hou (商侯) moved to Yin (殷)',
      table_column1_cont7:'7. Yin Hou (殷侯) moved back to Shangqiu (商丘)',
      table_column1_cont8:'8. Cheng Tang (成汤) first resided at Bo(亳)',
      table_column2_cont1:'1.  Zhong Ding (仲丁) moved the capital to Ao (隞)',
      table_column2_cont2:'2. He Dan Jia (河亶甲) moved the capital to Xiang (相)',
      table_column2_cont3:'3. Zu Yi (祖乙) moved the capital to Xing (邢)',
      table_column2_cont4:'4. Nan Geng (南庚) moved the capital to Yan (奄)',
      table_column2_cont5:'5. Pan Geng (盘庚) moved the capital to Yin (殷)',
      
      subtitle2: 'Why Did the Shang Frequently Relocate Their Capital?',
      subpoint2_title: '1. Flood Disaster',
      subpoint2_desc1: 'The Yin people had to move multiple times to escape the threat of floods.',
      subpoint2_desc2: 'Flood disasters caused: major loss of life and property, economic decline and social instability.',
      subpoint2_desc3: 'Relocation was a survival strategy.',
      
      subpoint3_title: '2. Nomadic life',
      subpoint3_desc1: 'Before Pan Geng (盘庚) , the Yin people lived with a semi-nomadic lifestyle without permanent settlements.',
      subpoint3_desc2: 'After agricultural development did, the Shang form a tendency toward stable settlement.',

      subpoint4_title: '3. Shifting Agriculture',
      subpoint4_desc1: 'Early Shang agriculture was primitive, relying on simple tools and basic techniques',
      subpoint4_desc2: 'When soil fertility declined, they moved to new farming areas.',
      subpoint4_desc3: 'Lead to relocation of capital .',

      subpoint5_title: '4. Military Considerations',
      subpoint5_desc1: 'Conflicts with neighboring group such as Lan Yi (蓝夷).',
      subpoint5_desc2: 'Relocating the capital allowed the Shang rulers to respond quickly to warfare.',
      subpoint5_desc3: 'Capitals were often moved to militarily advantageous locations.',

      subpoint6_title: '5. Internal Turmoil',
      subpoint6_desc1: 'After Zhong Ding (仲丁), the Shang royal family experienced internal struggles (九世之乱)',
      subpoint6_desc2: 'Caused political instability.',
      subpoint6_desc3: 'Capital relocation to reorganize authority and stabilize govermance',

      subtitle3: 'Conclusion',
      subpoint7_desc1: 'The frequent relocations of the Shang capital were likely the result of multiple interacting factors, rather than a single cause.',
      subpoint7_desc2: 'After Pan Geng (盘庚) moved the capital to Yin, the Shang state finally stabilized and remained there for 273 years.',
      subpoint7_desc3: 'After this, the Shang capital remained in Yin for 273 years until the dynasty’s fall.',
      map_desc: 'Map of the Core Region of the Shang Dynasty',
    },

    cp4: {
      title: 'Contact Us',
    },
    footer: {
      copyright: '© AII2001 SINOGRAPHY AND ANCIENT SCRIPTS',
      subtitle: 'The Historical Scroll of the Shang Dynasty',
    },
  },
}
