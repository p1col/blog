import { defineConfig } from 'vitepress';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'P-O',
  description: 'Javascript / Vue / Python / Algorithm / Node',
  cleanUrls: true,
  base: '/blog/',
  srcDir: 'src',
  outDir: 'blog',
  markdown: {
    lineNumbers: true,
  },
  head: [['link', { rel: 'icon', type: 'image/jpeg', href: './logo.jpg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: './logo.jpg', width: 24, height: 24 },

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', link: '/frontend/' },
    ],

    sidebar: {
      '/frontend/': [
        {
          text: '前端',
          collapsed: false,
          link: '/frontend/',
          items: [
            {
              text: 'H5 接入平台扫一扫',
              collapsed: true,
              items: [
                {
                  text: '飞书',
                  link: '/frontend/scan-api/feishu',
                },
                {
                  text: '钉钉',
                  link: '/frontend/scan-api/dingtalk',
                },
                {
                  text: '企业微信',
                  link: '/frontend/scan-api/wxwork',
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/p1col/blog' }],

    outline: {
      level: [2, 4],
    },

    lastUpdated: {
      text: '最近更新时间',
    },
  },
});
