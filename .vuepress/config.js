module.exports = {
  serviceWorker: true,
  ga: '141192052',
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-fontawesome'))
    }
  },
  plugins: {
    'vuepress-plugin-hotjar': {
      id: 1346481
    },
    '@vuepress/back-to-top': true,
    'vuepress-plugin-smooth-scroll': true,
    '@vuepress/pwa': true,
    '@vuepress/medium-zoom': true,
    '@vuepress/google-analytics': {
      'ga': '141192052'
    },
    '@vuepress/nprogress': true
  },
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
    logo: 'https://i.gyazo.com/6de93278653da44a9def69cd44933cc8.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/contents/' },
      { text: 'Additional Info.', link: '/slide'},
      {
        text: 'About',
        items: [
          { text: 'Profile', link: '/me' },
          { text: 'Company', link: '/about'}
        ]
      },
      {
        text: 'SNS',
        items: [
          { text: 'GitHub', link: 'https://github.com/hs-yonekura/tcsympo2019' },
          { text: 'Slack', link: 'https://join.slack.com/t/jamstackhq/shared_invite/enQtNjU0ODk3MDIwOTE4LWE3ZTgzYjRlNzk4YjAyYzJhM2IzZjk5YjIxZDRmMTQ1YWFiYjRlOTgyMGE0OTk3YWVlODMxNDk5Njc3N2YwZmE' },
          { text: 'Twitter', link: 'https://twitter.com/yuukikun31' },
          { text: 'Line', link: 'http://line.naver.jp/ti/p/pWQDiJosnD' }
        ]
      }
    ],
    sidebar: [
      '/',
      {
        title: 'Get Started',
        children: [
          '/contents/',
          '/contents/chapter1',
          '/contents/chapter2',
          '/contents/chapter3',
          '/contents/chapter4',
          '/contents/chapter5'
        ]
      },
      {
        title: 'Additional Info.',
        children: [
          'slide'
        ]
      }
    ],
    displayAllHeaders: true,
    sidebarDepth: 2,
    lastUpdated: '最終更新日',
    serviceWorker: {
      updatePopup: {
        message: "コンテンツが更新されました。",
        buttonText: "Refresh"
      }
    }
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
}
