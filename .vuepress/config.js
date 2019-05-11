module.exports = {
  base: "/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: 'https://www.science.co.jp/wordpress/wp-content/themes/humanscience/common/img/logo.jpg',
    nav: [
      {text: 'Home', link: '/' },
      {text: 'About', link: '/about/'},
      {text: 'GitHub', link: 'https://github.com/hs-yonekura/tcsympo2019'}
    ],
    sidebar: [
      '/',
      '/about/README',
			'/about/page-1'
 		]
  }
}
