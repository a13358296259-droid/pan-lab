# 潘保良课题组网站 · 使用说明

这是一个**纯静态**的学术网站：用 Astro + Tailwind CSS 搭建，所有内容都放在 Markdown 文件里。
部署目标是 GitHub Pages——**代码传上去之后，网站会自动构建、自动发布，你不需要在自己电脑上跑任何命令。**

## ✅ 网站已上线

**正式网址：<https://a13358296259-droid.github.io/pan-lab/>**

代码仓库：<https://github.com/a13358296259-droid/pan-lab>

以后改内容不用管这些配置，照着本文"三、以后怎么更新内容"做就行——
在 GitHub 网页上点几下，1～3 分钟后线上自动更新。
下面的"二、部署到 GitHub Pages"已经完成，留在这里备查（比如以后要换仓库名或迁移时）。

---

## 一、网站有哪些页面

| 页面 | 地址 | 内容文件在哪 |
| :--- | :--- | :--- |
| 首页 | `/` | 自动汇总，不用手改 |
| 研究方向 | `/research` | `src/data/research.ts` |
| 团队成员 | `/members` | `src/content/members/*.md` |
| 发表论文 | `/publications` | `src/content/publications/*.md` |
| 新闻动态 | `/news` | `src/content/news/*.md` |
| 加入我们 | `/join` | `src/pages/join.astro` |
| 联系方式 | `/contact` | `src/pages/contact.astro` |

改颜色、改课题组名称、改邮箱电话：打开 `src/consts.ts`。
改主题绿的色值：打开 `src/styles/global.css`，最上面一组 `--color-cau-*` 就是。

---

## 二、部署到 GitHub Pages（✅ 已完成，以下步骤留档备查）

> 全程图形界面，不需要敲命令。

### 第 1 步：把代码变成一个 GitHub 仓库

1. 安装 **GitHub Desktop**（官网 github.com → Desktop）。
2. 打开 GitHub Desktop → 菜单 `File` → `Add local repository…`
3. 选择本文件夹（`lab_website`）。它会提示"这不是一个 Git 仓库"，点 **create a repository** 链接。
4. 在弹出窗口里直接点 **Create repository**。
5. 点右上角 **Publish repository**：
   - Name 填仓库名，建议 `pan-lab`（**记住这个名字，第 3 步要用**）
   - **取消勾选** `Keep this code private`（私有仓库想用 Pages 需要付费版；公开即可）
   - 点 **Publish repository**

### 第 2 步：改网站的网址（**最容易漏的一步**）

打开 `astro.config.mjs`，改最上面两行：

```js
const SITE_URL = 'https://你的GitHub用户名.github.io';
const BASE_PATH = '/pan-lab';   // 前面那个斜杠不能少；就是你第 1 步起的仓库名
```

两种情况：

- 仓库名是 `pan-lab` → `BASE_PATH = '/pan-lab'`
- 仓库名是 `你的用户名.github.io`（这种仓库是网站根目录）→ `BASE_PATH = '/'`

改完保存，回到 GitHub Desktop，左下角写一句说明（例如"配置部署路径"），点 **Commit to main**，
再点上面出现的 **Push origin**。

> 如果这两行不改，线上页面会因为找不到样式和图片而变成"白板+错位"。

### 第 3 步：打开 Pages

1. 在 GitHub Desktop 里点 `Repository` → `View on GitHub`，浏览器会打开你的仓库页面。
2. 点仓库上方的 **Settings** → 左侧栏 **Pages**。
3. 在 **Source** 下拉框里选 **GitHub Actions**（不要选 "Deploy from a branch"）。

### 第 4 步：等它自动构建

1. 回到仓库首页，点上方 **Actions** 标签。
2. 会看到一个叫"部署网站到 GitHub Pages"的任务在跑（黄点 → 绿勾）。大约 1–3 分钟。
3. 变绿之后，浏览器访问 `https://你的用户名.github.io/pan-lab/`，网站就上线了。

> 第一次如果没跑：在 Actions 页面点左边那个 workflow，再点右侧 **Run workflow** 手动触发一次。

---

## 三、以后怎么更新内容（日常只在 GitHub 网页上点几下）

### 新增一篇论文

1. 打开仓库 → 进入 `src` → `content` → `publications` 文件夹。
2. 右上角 **Add file** → **Create new file**。
3. 文件名写成：`2026-作者-关键词.md`（例如 `2026-sun-bartonella-iron.md`，只用英文小写和短横线）。
4. 内容照这个格式抄，把冒号后面的内容换成你的：

```markdown
---
title: "论文标题（英文原题）"
authors: "Sun T, Liu Q, Pan B"
journal: "Commun Biol"
year: 2026
doi: "10.1038/s42003-026-10671-5"
pmid: ""
citation: "Commun Biol. 2026 Jul 20. doi: 10.1038/s42003-026-10671-5."
---

这里放摘要。不想显示摘要就把这段删掉，页面上就不会出现"摘要"折叠按钮。
```

5. 页面拉到最下面，点 **Commit changes**。
6. 等 1–3 分钟，Actions 跑完，线上就更新了（可能要按 Ctrl+F5 强制刷新才看到）。

> `year` 决定排序和年份筛选标签；`doi` 会自动变成可点击的链接。
> 论文页顶部的"全部 / 2026 / 2025 …"标签是**自动生成**的，不用手动维护。

### 修改团队成员

1. 进入 `src` → `content` → `members`。
2. 点开某个 `.md` 文件 → 右上角铅笔图标编辑 → 改完 Commit changes。
3. 三个 `sample_member_*.md` 是**示例卡片，请替换成真实成员或直接删掉**（点文件页面右上角的垃圾桶图标即可删除）。
4. `order` 数字越小排越前。

### 发布一条新闻

1. 进入 `src` → `content` → `news`，**Add file** → **Create new file**。
2. 文件名建议 `2026-10-15_简短英文标题.md`。
3. 格式：

```markdown
---
title: 新闻标题
date: 2026-10-15
summary: 一句话摘要，显示在首页和新闻列表里。
tags: [论文发表]
---

正文写在这里，可以写多段。
```

### 换掉"位置示意图"

目前 `public/images/campus-map.svg` 是画出来的示意图。想换成真实地图：

1. 在地图网站截一张图（建议 1200×620 左右）。
2. 进入 `public` → `images` → **Add file** → **Upload files**，把截图传上去，命名成 `campus-map.png`。
3. 打开 `src/pages/contact.astro`，把 `asset('images/campus-map.svg')` 改成 `asset('images/campus-map.png')`，Commit changes。

---

## 四、还没做的 / 需要你决定的事

1. **成员卡片是示例数据**：`sample_member_a/b/c.md` 三个文件请替换或删除。
2. **三条新闻是"由论文倒推"的初稿**（内容都来自 PubMed 收录的真实论文），请核对后按课题组口径改写。
3. **招生页的待遇条款**：`src/pages/join.astro` 里"待遇与支持"一节目前只写了"按学校奖助体系执行"，
   如果课题组有额外津贴、住宿或交流支持，请补进去（文件里留了 `<!-- 待补充 -->` 注释）。
4. **地图**：见上一节。
5. **英文版**：目前只有中文。要做英文版可以再加一套 `/en/` 页面，需要时告诉 Codex。

---

## 五、本机预览（可选）

这台电脑已经装好 Node.js 24。想在本机看效果时，在**本文件夹**里打开终端执行：

```
npm install
npm run dev
```

然后浏览器打开提示的地址（默认 http://localhost:4321/pan-lab/）。
按 `Ctrl + C` 结束预览。

> 只是想改内容的话，不需要这一步——直接在 GitHub 网页上改，线上的 Actions 会自动重新构建。

---

## 六、目录结构速查

```
lab_website/
├─ astro.config.mjs        ← 部署路径、网址在这里改
├─ package.json
├─ .github/workflows/deploy.yml   ← 自动部署脚本
├─ public/                 ← 图片、图标等静态文件
│  ├─ favicon.svg           浏览器标签页图标
│  └─ images/campus-map.svg 位置示意图
└─ src/
   ├─ consts.ts            ← 课题组名称、邮箱、电话、导航栏
   ├─ data/research.ts     ← 研究方向、在研项目
   ├─ content/             ← 所有内容（Markdown）
   │  ├─ members/            成员
   │  ├─ publications/       论文（57 篇，由 PubMed 导出自动生成）
   │  └─ news/               新闻
   ├─ components/          ← 可复用的界面零件
   ├─ layouts/Layout.astro ← 全站骨架（导航栏 + 页脚）
   ├─ pages/               ← 七个页面
   └─ styles/global.css    ← 主题色、悬停效果
```
