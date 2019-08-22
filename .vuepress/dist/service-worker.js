/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b99a619776743689f8870935108ca701"
  },
  {
    "url": "about.html",
    "revision": "fef06b0c764091e9878ffb24e2bf7ae8"
  },
  {
    "url": "addition/index.html",
    "revision": "cbcbda1bce8e427a40c3f7d5674cd352"
  },
  {
    "url": "addition/movie.html",
    "revision": "eb69712387f2dab88d58abd54172359d"
  },
  {
    "url": "addition/questionnaire.html",
    "revision": "4b215e95aede4a63811f52c957a5c006"
  },
  {
    "url": "assets/css/0.styles.881d4e26.css",
    "revision": "ca2e80b3d6e1774085fa066c600e2d9b"
  },
  {
    "url": "assets/img/me.9f5f2bd3.png",
    "revision": "9f5f2bd305c154a95997f633d1d3620c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8196ec59.js",
    "revision": "63c335a97f71bd260ee0cb8f1466102a"
  },
  {
    "url": "assets/js/11.d1a22602.js",
    "revision": "8e25f66ce0e92cd31a3ffeb38353529b"
  },
  {
    "url": "assets/js/12.84f37ada.js",
    "revision": "73338361d0dc59cb7b1bc6646bb94bec"
  },
  {
    "url": "assets/js/13.7cb9fd59.js",
    "revision": "975560bfc53a3c798a67864b3e7227dd"
  },
  {
    "url": "assets/js/14.d33bc92e.js",
    "revision": "cee7afb8df83ba54efadc6b43cf7a8c4"
  },
  {
    "url": "assets/js/15.6eec5960.js",
    "revision": "84e55c968fa7a6e97d82cb1f7859ceff"
  },
  {
    "url": "assets/js/16.6267bb72.js",
    "revision": "6e3cabd2d0f077e1fc2ddf1b02c14583"
  },
  {
    "url": "assets/js/17.f9f847bc.js",
    "revision": "3acdc6d10b25239854562c65637f115a"
  },
  {
    "url": "assets/js/18.f09ba3ca.js",
    "revision": "46a38af0b79499c3219bc67d03f2248d"
  },
  {
    "url": "assets/js/19.7e6cacc3.js",
    "revision": "32ff738d921a1118506d7318747c4199"
  },
  {
    "url": "assets/js/20.07d13f97.js",
    "revision": "ea9de0cd6719530a59ffac0b7e6e19a5"
  },
  {
    "url": "assets/js/21.0be07a64.js",
    "revision": "9b2db72bd4a98859c4a13c14b0410e36"
  },
  {
    "url": "assets/js/22.4954121c.js",
    "revision": "7609944aebddc813c2bd634b9e26adfd"
  },
  {
    "url": "assets/js/23.bf3573e1.js",
    "revision": "f744f14be989db33931aed918a113565"
  },
  {
    "url": "assets/js/24.8c2ff0f6.js",
    "revision": "04dc41899e8dfe88c272442fe61b4eed"
  },
  {
    "url": "assets/js/25.31921743.js",
    "revision": "b82c9c335dcc128a27c0359475f14584"
  },
  {
    "url": "assets/js/3.746d6007.js",
    "revision": "167e0364ee5e02d294841f0d5a8624f0"
  },
  {
    "url": "assets/js/4.9082f354.js",
    "revision": "1e2f8f2c28df45e8e5034a25c40c7871"
  },
  {
    "url": "assets/js/5.bdd73391.js",
    "revision": "695feadb8e17f23eb95e0b586545aaac"
  },
  {
    "url": "assets/js/6.5b6dec6f.js",
    "revision": "c2d79883b792bfb1b7f41b81d3f662d9"
  },
  {
    "url": "assets/js/7.aa1d50bd.js",
    "revision": "e4781e7dcde81f555dc344f32723150e"
  },
  {
    "url": "assets/js/8.491ad2a5.js",
    "revision": "ec7017d9ec2ce7ce61f385ed0f8d0766"
  },
  {
    "url": "assets/js/9.96991336.js",
    "revision": "8c882d05c1adc2b2b09de56657f8e181"
  },
  {
    "url": "assets/js/app.71f05f58.js",
    "revision": "56018135fd2f832ef21a3ceaed825662"
  },
  {
    "url": "assets/js/vendors~docsearch.048b8af1.js",
    "revision": "aeb46026767ae1327c1c946cf182a9ce"
  },
  {
    "url": "callback.html",
    "revision": "17cd7f853de1ceeb32458411c7e9c673"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "6783702d1a2fffe32e5ba88f82f26459"
  },
  {
    "url": "contents/chapter2.html",
    "revision": "1e693997985d9fc3c714e7f138cf94e8"
  },
  {
    "url": "contents/chapter3.html",
    "revision": "7ec40906bfdb98ef2350e34694413b32"
  },
  {
    "url": "contents/chapter4.html",
    "revision": "f1e6b13b2c6ddc782cbbc1d7e05f3d6f"
  },
  {
    "url": "contents/chapter5.html",
    "revision": "9414974780989dc56511fdd68596eb7c"
  },
  {
    "url": "contents/chapter6.html",
    "revision": "90e9326761ba2fd38c79d1ae8fea5d7b"
  },
  {
    "url": "contents/chapter7.html",
    "revision": "392e68c4d033f39ec944a600dd905d71"
  },
  {
    "url": "contents/index.html",
    "revision": "fc9155994fea48128c1353da3e1f79ec"
  },
  {
    "url": "fontawesome/css/all.min.css",
    "revision": "59ca0837e0fd4a43b0eb7d73e8f2a942"
  },
  {
    "url": "fontawesome/webfonts/fa-brands-400.woff",
    "revision": "fe9d62e0d16a333a20e63c3e7595f82e"
  },
  {
    "url": "fontawesome/webfonts/fa-brands-400.woff2",
    "revision": "7559b3774a0625e8ca6c0160f8f6cfd8"
  },
  {
    "url": "fontawesome/webfonts/fa-regular-400.woff",
    "revision": "e5770f9863963fb576942e25214a226d"
  },
  {
    "url": "fontawesome/webfonts/fa-regular-400.woff2",
    "revision": "e07d9e40b26048d9abe2ef966cd6e263"
  },
  {
    "url": "fontawesome/webfonts/fa-solid-900.woff",
    "revision": "4bced7c4c0d61d4f988629bb8ae80b8b"
  },
  {
    "url": "fontawesome/webfonts/fa-solid-900.woff2",
    "revision": "b5cf8ae26748570d8fb95a47f46b69e1"
  },
  {
    "url": "image/apple-launch-1125x2436.png",
    "revision": "a90d7a20d59abd1e82c8fa3c3cb78b61"
  },
  {
    "url": "image/apple-launch-1242x2208.png",
    "revision": "8f950b1fb3989f98120e7cf648be1902"
  },
  {
    "url": "image/apple-launch-1242x2688.png",
    "revision": "0595a23c4e611bbc9ef46cbb70357252"
  },
  {
    "url": "image/apple-launch-1536x2048.png",
    "revision": "21bcf05d1dbaaab3398d14c880a1f762"
  },
  {
    "url": "image/apple-launch-1668x2224.png",
    "revision": "3840d4f5d6eaa65722bd618bab0c6dd7"
  },
  {
    "url": "image/apple-launch-1668x2388.png",
    "revision": "7c32f5ee0a153a1008705dac449b1698"
  },
  {
    "url": "image/apple-launch-2048x2732.png",
    "revision": "a842bdb6cfe58cdb23be96750f959224"
  },
  {
    "url": "image/apple-launch-750x1334.png",
    "revision": "1b24970253536887baf9fee2771cdec7"
  },
  {
    "url": "image/apple-launch-828x1792.png",
    "revision": "fff9ee428f6166151744a098ff2bdbdb"
  },
  {
    "url": "image/favicon-192x192.png",
    "revision": "fe016fac49cdd90bb1fd2b99c7f41cb2"
  },
  {
    "url": "image/favicon-512x512.png",
    "revision": "d03543f6991bd78925a837899f7a7cb0"
  },
  {
    "url": "image/favicon.png",
    "revision": "590b2668ed8a493223a25c5cd9f5146f"
  },
  {
    "url": "image/flow.gif",
    "revision": "7f3bf69c5d05a6d8671be501476968df"
  },
  {
    "url": "image/hs-logo.svg",
    "revision": "f1b4e2c0ffb2b8a2e7a7079b62bb2b2d"
  },
  {
    "url": "index.html",
    "revision": "2c43a338735f954daf8644b6ef4ee9f6"
  },
  {
    "url": "me.html",
    "revision": "65cdf32e7f8fec03f16c1c523cb9aa47"
  },
  {
    "url": "notosans/NotoSansCJKjp-Bold.ttf",
    "revision": "6341bc5bc5e4f94843a391647fb3f853"
  },
  {
    "url": "notosans/NotoSansCJKjp-Bold.woff",
    "revision": "a4e1681a1123bcb58b9a2d5a61223133"
  },
  {
    "url": "notosans/NotoSansCJKjp-Bold.woff2",
    "revision": "ad9ae6dfcc39860553f1d26b7cd7eed3"
  },
  {
    "url": "notosans/NotoSansCJKjp-Light.ttf",
    "revision": "1026dba5586d6da3b6139db79fedf5b4"
  },
  {
    "url": "notosans/NotoSansCJKjp-Light.woff",
    "revision": "3955b1c5ec9d47a1768fd4cb8445fb8d"
  },
  {
    "url": "notosans/NotoSansCJKjp-Light.woff2",
    "revision": "58f3d6a68008a6a6909e8b82a0ccb99d"
  },
  {
    "url": "notosans/NotoSansCJKjp-Regular.ttf",
    "revision": "e59dcd70ac2f0db5b2d08dbd2310c456"
  },
  {
    "url": "notosans/NotoSansCJKjp-Regular.woff",
    "revision": "13a6f546f9eeaf356bf68246a91e905a"
  },
  {
    "url": "notosans/NotoSansCJKjp-Regular.woff2",
    "revision": "47f2688b406e6f9b25975c486bdb08a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
