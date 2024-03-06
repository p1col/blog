import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'P-O',
  description: 'Javascript / Vue / Python / Algorithm / Node',
  cleanUrls: true,
  srcDir: 'src',
  outDir: 'dist',
  assetsDir: 'static',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Js', link: '/javascript/目录指引' },
    ],

    sidebar: [
      {
        text: 'Js',
        items: [
          { text: '目录指引', link: '/javascript/目录指引' },
          { text: '原型链', link: '/javascript/原型链' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/p1col/blog' }],
  },
});
