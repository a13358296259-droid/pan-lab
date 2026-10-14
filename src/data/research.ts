// 研究方向与在研项目：改这里，首页和研究方向页会一起更新。
// 内容来自导师个人主页（https://cvm.cau.edu.cn/art/2017/9/8/art_41955_38.html）。

export interface ResearchArea {
  id: string;
  title: string;
  titleEn: string;
  summary: string;
  points: string[];
}

export const RESEARCH: ResearchArea[] = [
  {
    id: 'biology',
    title: '媒介节肢动物生物学',
    titleEn: 'Biology of Vector Arthropods',
    summary:
      '以鸡皮刺螨（Dermanyssus gallinae）为主要研究对象，实验室建立了稳定可靠的养殖体系，系统研究其行为、发育与感受机制。',
    points: [
      '鸡皮刺螨聚集的化学通讯机制（聚集信息素）',
      '卵发育机制与繁殖生物学',
      '嗅觉、味觉器官的超微结构与定位',
      '实验室蜱饲养体系的建立与蜱生物学研究',
    ],
  },
  {
    id: 'symbiosis',
    title: '共生菌与宿主互作',
    titleEn: 'Symbiont–Host Interactions',
    summary:
      '从鸡皮刺螨体内分离到 2 株巴尔通体新种，证实其在取食与繁殖中的关键作用，为新型疫苗与生物防控提供依据。',
    points: [
      '共生菌参与血液消化与繁殖的机制',
      '巴尔通体新种介导血红素摄取与铁稳态的分子机制',
      '共生菌作为疫苗靶点的可行性验证',
      '以共生菌为靶标的媒介节肢动物防控新策略',
    ],
  },
  {
    id: 'resistance',
    title: '抗药性与化学防治',
    titleEn: 'Acaricide Resistance & Chemical Control',
    summary:
      '围绕鸡皮刺螨对拟除虫菊酯类药物的抗性，解析靶标突变与解毒代谢机制，为合理用药提供理论支撑。',
    points: [
      '电压门控钠离子通道基因点突变与拟除虫菊酯抗性',
      'ABC 转运蛋白与 CncC 通路介导的解毒代谢',
      '体表疏水性与化学防治效果的关系',
      '微生物源杀螨活性化合物筛选',
    ],
  },
  {
    id: 'pharma',
    title: '抗寄生虫新兽药与长效制剂',
    titleEn: 'Novel Antiparasitic Drugs & Long-acting Formulations',
    summary:
      '研制奶牛专用抗寄生虫新药并制定部颁质量标准；利用固体分散体、原位凝胶等技术开发长效制剂。',
    points: [
      '乙酰氨基阿维菌素原料药、注射液、浇泼剂（获国家新兽药证书）',
      '固体分散体与混悬剂技术平台',
      '长效伊维菌素、阿维菌素油悬注射液与托曲珠利新型制剂',
      '吡喹酮纳米注射剂与原位凝胶注射剂',
    ],
  },
];

export const PROJECTS: string[] = [
  '主持国家自然科学基金面上项目“鸡皮刺螨通过共生菌巴尔通体从血红素获取必需金属元素铁的机制”',
  '主持国家自然科学基金面上项目“共生菌参与鸡皮刺螨血液消化的机制”',
  '主持国家自然科学基金面上项目“鸡皮刺螨聚集的化学通讯机制研究”',
  '参加国家重点研发计划项目“兽药新剂型与合理用药新技术研发”',
  '参加青海省重点研发与转化计划项目“埃普利诺菌素浇泼剂的中试生产及示范应用”',
  '参加内蒙古自治区重点研发和成果转化计划项目“牛羊腹泻性疫病的鉴别诊断关键技术与防控新制剂研究”',
];
