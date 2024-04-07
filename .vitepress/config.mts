import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'P-O',
  description: 'Javascript / Vue / Python / Algorithm / Node',
  lastUpdated: true,
  cleanUrls: true,
  srcDir: 'src',
  outDir: 'dist',
  assetsDir: 'static',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.jpg',

    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', link: '/frontend/guide' },
    ],

    sidebar: [
      {
        text: '前端',
        collapsed: false,
        items: [
          { text: 'guide', link: '/frontend/guide' },
          {
            text: 'H5 接入平台扫一扫功能',
            collapsed: true,
            items: [
              {
                text: '飞书',
                link: '/frontend/scan-api/feishu.md',
              },
              {
                text: '钉钉',
                link: '/frontend/scan-api/dingtalk.md',
              },
              {
                text: '企业微信',
                link: '/frontend/scan-api/wxwork.md',
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/p1col/blog' }],

    outline: {
      level: [2, 4],
    },
  },
});
