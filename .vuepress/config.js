module.exports = {
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-fontawesome'))
    }
  },
  plugins: ['@vuepress/back-to-top'],
  title: 'Webマニュアル30分マニュアル',
  description: 'MarkdownにJAMstackを添えて',
  head: [
    ['link', { href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css', rel: 'stylesheet' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/yakuhanjp@3.0.0/dist/css/yakuhanrp.min.css' }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Noto+Sans+JP` }],
    ['link', { rel: 'manifest', href: '/manifest.json'  }],
    ['link', { rel: 'icon', href: 'image/favicon.png'  }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
        crossorigin: 'anonymous'
      }
    ]
  ],
  themeConfig: {
    logo: 'image/hs-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
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
      '/contents/chapter1',
      '/contents/chapter2',
      '/contents/chapter3',
      '/contents/chapter4',
      '/contents/chapter5'
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
