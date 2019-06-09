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
    '@vuepress/nprogress': true,
    'vuepress-plugin-export': true
  },
  locales: {
    '/': {
      lang: 'ja',
    }
  },
  title: 'Webマニュアル30分マニュアル',
  description: 'MarkdownにJAMstackを添えて',
  head: [
    ['link', { href: '/fontawesome/css/all.min.css', rel: 'preload' }],
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
  ],
  themeConfig: {
    algolia: {
      appId: 'X9IZBSNGXM',
      apiKey: '2eff79e105aa6a825d890c720887cb5b',
      indexName: 'tcsympo2019_test'
    },
    logo: 'https://i.gyazo.com/6de93278653da44a9def69cd44933cc8.png',
    nav: [
      { text: '', link: '/', awesome: 'fas fa-home' },
      { text: 'Get Started', link: '/contents/'  },
      {
        text: 'About',
        items: [
          { text: 'Profile', link: '/me', awesome: 'fas fa-id-card-alt' },
          { text: 'Company', link: '/about', awesome: 'far fa-building' }
        ]
      },
      {
        text: 'SNS',
        items: [
          { text: 'GitHub', link: 'https://github.com/hs-yonekura/tcsympo2019', awesome: 'fab fa-github' },
          { text: 'Slack', link: 'https://join.slack.com/t/jamstackhq/shared_invite/enQtNjU0ODk3MDIwOTE4LWE3ZTgzYjRlNzk4YjAyYzJhM2IzZjk5YjIxZDRmMTQ1YWFiYjRlOTgyMGE0OTk3YWVlODMxNDk5Njc3N2YwZmE', awesome: 'fab fa-slack' },
          { text: 'Twitter', link: 'https://twitter.com/yuukikun31', awesome: 'fab fa-twitter' },
          { text: 'Line', link: 'http://line.naver.jp/ti/p/pWQDiJosnD', awesome: 'fab fa-line' }
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
        title: 'Advanced Info.',
        children: [
          '/addition/',
          '/addition/chapter6'
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
