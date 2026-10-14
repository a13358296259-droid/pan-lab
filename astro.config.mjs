// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ===========================================================================
// ★ 部署到 GitHub Pages 前，只需要改下面两行（改法见同目录下的 README.md）
//
//   1) 如果仓库名是  pan-lab  ，地址就是  https://用户名.github.io/pan-lab/
//      → SITE_URL  = 'https://用户名.github.io'
//        BASE_PATH = '/pan-lab'
//
//   2) 如果仓库名是  用户名.github.io  （这种仓库地址就是根目录）
//      → SITE_URL  = 'https://用户名.github.io'
//        BASE_PATH = '/'
//
//   3) 想在本机预览时看到跟线上一样的相对路径，把 BASE_PATH 保持不动即可；
//      若只在本机测试，也可以临时写成 '/'。
// ===========================================================================
const SITE_URL = 'https://a13358296259-droid.github.io';
const BASE_PATH = '/pan-lab';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: {
    plugins: [tailwindcss()],
  },
});
