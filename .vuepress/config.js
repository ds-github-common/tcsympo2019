module.exports = {
  // base: "/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: 'https://www.science.co.jp/wordpress/wp-content/themes/humanscience/common/img/logo.jpg',
    nav: [
      {text: 'Home', link: '/' },
      { text: 'Get Started', link: '/contents/' },
      {
        text: 'About',
        items: [
          { text: 'Profile', link: '/me' },
          { text: 'Company', link: '/about'}
        ]
      },
      {
        text: 'External Links',
        items: [
          { text: 'GitHub', link: 'https://github.com/hs-yonekura/tcsympo2019' },
          { text: 'Twitter', link: 'https://twitter.com/yuukikun31' },
          { text: 'Line', link: 'http://line.naver.jp/ti/p/pWQDiJosnD' }
        ]
      }
    ],
    sidebar: [
      '/',
      '/contents/',
      '/contents/page-1'
    ],
    displayAllHeaders: true,
    sidebarDepth: 2,
    lastUpdated: '最終更新日',
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
}
