const Pass = require('vuepress-pass');
const Auth = require('vuepress-auth0');

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
    'sitemap': {
      hostname: 'https://tcsympo2019-test.firebaseapp.com'
    },
    'contact-us': {
      email: 'y-yonekura@science.co.jp',
      labelLanguage: 'jp',
    },
    '@silvanite/tailwind': true,
    '@vuepress/nprogress': true,
		'vuepress-plugin-export': true,
    'feed': {
      canonical_base: 'https://webmasterish.com'
    },
		'seo': {
			siteTitle: (_, $site) => $site.title,
			title: $page => $page.title,
			description: $page => $page.frontmatter.description,
			author: (_, $site) => $site.themeConfig.author,
			tags: $page => $page.frontmatter.tags,
			twitterCard: _ => 'summary_large_image',
			type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
			url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
			image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
			publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
			modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    },
    'vuepress-pass': {
      url: 'http://localhost:8080/index.html',
      redirectUri: 'http://www.google.com',
      clientId: 'foobar'
    },
    Auth: {
      domain: 'https://human-science.auth0.com',
      redirectUri: 'https://tcsympo2019-test.firebaseapp.com/callback.html',
      clientID: 'EyzWT1h6Wk4a3PkpOnhIl0ARTo2WvVpa'
    }
  },
  locales: {
    '/': {
      lang: 'ja',
    }
  },
  title: 'Webマニュアル30分マニュアル',
  description: 'MarkdownにJAMstackを添えて',
  head: [
    ['script', { src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js', integrity: 'sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=', crossorigin: 'anonymous' }],
    ['meta', { name: 'google-site-verification', content: 'yf8Wl1xWyaav2ythn90XsOB1xz5Cu_dobu3INPFyWok' }],
    ['link', { href: '/fontawesome/css/all.min.css', rel: 'stylesheet', as: 'style', rel: 'preload', onload: "this.rel='stylesheet'"}],
    ['link', { href: '/fontawesome/webfonts/fa-brands-400.woff2', rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }],
    ['link', { href: '/fontawesome/webfonts/fa-regular-400.woff2', rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }],
    ['link', { href: '/fontawesome/webfonts/fa-solid-900.woff2', rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }],
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
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0' }]
  ],
  themeConfig: {
    algolia: {
      appId: 'X9IZBSNGXM',
      apiKey: '2eff79e105aa6a825d890c720887cb5b',
      indexName: 'tcsympo2019_test'
    },
    logo: '/image/hs-logo.svg',
    nav: [
      { text: '', link: '/', awesome: 'fas fa-home', meta:{ auth: true } },
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
          { text: 'Slack', link: 'https://jamstackhq.slack.com', awesome: 'fab fa-slack' },
          { text: 'Twitter', link: 'https://twitter.com/yuukikun31', awesome: 'fab fa-twitter' },
          { text: 'Line', link: 'http://line.naver.jp/ti/p/pWQDiJosnD', awesome: 'fab fa-line' }
        ]
      },
      {
        text: '', link: '/addition/questionnaire', awesome: 'fas fa-paper-plane'
      }
    ],
    sidebar: [
      {
        title: 'Get Started',
        children: [
          '/contents/',
          '/contents/chapter1',
          '/contents/chapter2',
          '/contents/chapter3',
          '/contents/chapter4',
          '/contents/chapter5',
          '/contents/chapter6',
          '/contents/chapter7'
        ]
      },
      {
        title: 'More',
        children: [
          '/addition/',
          '/addition/movie'
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
