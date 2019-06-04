module.exports = {
  serviceWorker: true,
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
		'@vuepress/pwa': {
			serviceWorker: true,
			updatePopup: {
				message: "コンテンツが更新されました",
				buttonText: "Refresh"
			}
		},
    '@vuepress/medium-zoom': true,
    '@vuepress/google-analytics': {
      'ga': 'UA-141384973-1'
    },
    '@vuepress/nprogress': true
  },
  title: 'Webマニュアル30分マニュアル',
  description: 'MarkdownにJAMstackを添えて',
  head: [
    ['link', { href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css', rel: 'stylesheet' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/yakuhanjp@3.0.0/dist/css/yakuhanrp.min.css' }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&amp;subset=japanese` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', href: 'image/favicon-512x512.png' }],
    ['link', { rel: 'apple-touch-icon', href: 'image/favicon-192x192.png' }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)', href: 'image/apple-launch-1242x2688.png' }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)', href: 'image/apple-launch-828x1792.png' }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', href: 'image/apple-launch-1125x2436.png' }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)', href: 'image/apple-launch-1242x2208.png' }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', href: 'image/apple-launch-750x1334.png' }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)', href: 'image/apple-launch-2048x2732.png' }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)', href: 'image/apple-launch-1668x2388.png' }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)', href: 'image/apple-launch-1668x2224.png' }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)', href: 'image/apple-launch-1536x2048.png' }],
    ['meta', { name: 'theme-color' , content: '#317EFB' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
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
    algolia: {
      appId: 'X9IZBSNGXM',
      apiKey: '2eff79e105aa6a825d890c720887cb5b',
      indexName: 'tcsympo2019_test'
    },
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
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
}
