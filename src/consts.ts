// 全站文字信息集中在这里：改这里，所有页面一起变。
export const SITE = {
  name: '潘保良课题组',
  nameEn: 'Pan Lab',
  school: '中国农业大学',
  college: '动物医学院 · 预防兽医学系',
  lab: '兽医公共卫生安全全国重点实验室',
  tagline: '媒介节肢动物与动物寄生虫病防控',
  intro:
    '围绕鸡皮刺螨、蜱等媒介节肢动物，研究其生物学特性、共生菌互作与抗药机制，研制抗寄生虫新兽药与新型长效制剂，欢迎优秀学子加入。',
  email: 'baoliang@cau.edu.cn',
  phone: '010-62734098',
  address: '北京市海淀区圆明园西路 2 号',
  addressFull: '中国农业大学动物医学院（西校区）',
  description:
    '中国农业大学动物医学院潘保良课题组：聚焦鸡皮刺螨与蜱等媒介节肢动物生物学、共生菌互作、抗寄生虫新兽药与长效制剂研究。',
};

// 顶部导航（顺序即显示顺序；path 为空表示首页）
export const NAV = [
  { label: '首页', path: '' },
  { label: '研究方向', path: 'research' },
  { label: '团队成员', path: 'members' },
  { label: '发表论文', path: 'publications' },
  { label: '新闻动态', path: 'news' },
  { label: '加入我们', path: 'join' },
  { label: '联系方式', path: 'contact' },
];

/**
 * 站点根路径。
 * 注意：Astro 的 `import.meta.env.BASE_URL` 在构建产物里**不一定以斜杠结尾**
 * （base 配成 `/pan-lab` 时它就是 `/pan-lab`），直接拼字符串会拼出
 * `/pan-labresearch/` 这种坏链接。这里统一补上结尾斜杠。
 */
const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/**
 * 站内页面链接。
 * 会自动带上 astro.config.mjs 里配置的 base 路径，所以部署到子目录也不会失效。
 */
export function link(path = ''): string {
  const clean = String(path).replace(/^\/+|\/+$/g, '');
  return clean ? `${BASE}${clean}/` : BASE;
}

/** public 目录里的静态文件链接（图片、图标等）。 */
export function asset(path: string): string {
  return BASE + String(path).replace(/^\/+/, '');
}

/** 把 YYYY-MM-DD 显示成 2026-10-15 */
export function fmtDate(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
