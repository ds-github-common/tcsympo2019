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
    "revision": "d295a9a8e58f3e257f7d11f8b4d9073c"
  },
  {
    "url": "about.html",
    "revision": "2d5aba2b3ee0f56d903b2073ae36f972"
  },
  {
    "url": "assets/css/0.styles.66d7309b.css",
    "revision": "d6e71df46c4c536dfeae23dd0a89f525"
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
    "url": "assets/js/10.96ce3484.js",
    "revision": "936bf7dd2732b6bbd4126edabde1afd7"
  },
  {
    "url": "assets/js/11.abb06dfe.js",
    "revision": "22bb48046eba73c992fe5f57d84d7f30"
  },
  {
    "url": "assets/js/12.cacdd3e3.js",
    "revision": "10be60adb8c7f5d30782871dfb1e0389"
  },
  {
    "url": "assets/js/2.7a39e073.js",
    "revision": "962ce302fd34fff0617e19cbcf354673"
  },
  {
    "url": "assets/js/3.4d5e215a.js",
    "revision": "dd7affecf737a636e45d4d50034cef6b"
  },
  {
    "url": "assets/js/4.7b3868d6.js",
    "revision": "fbc29e0eec0152183015269cea1b3cd4"
  },
  {
    "url": "assets/js/5.ce91193c.js",
    "revision": "702ccbed9534a418227d7ea025eefc93"
  },
  {
    "url": "assets/js/6.f7f57522.js",
    "revision": "45643f2c99fcef35e7d9a81cd427d8bf"
  },
  {
    "url": "assets/js/7.1d4d21c4.js",
    "revision": "73ff1e5a2580f40a44213b4fb1669ee0"
  },
  {
    "url": "assets/js/8.8749b61f.js",
    "revision": "cee9ff18612c0a89049997e3da1bf129"
  },
  {
    "url": "assets/js/9.2244bb09.js",
    "revision": "9cefd264ab0b86d6b1dad320bc3790ed"
  },
  {
    "url": "assets/js/app.523c4490.js",
    "revision": "82de0969e93fea6a5b3d7dadb455dcd4"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "67be362959669ac8c5ecedb8da100f3c"
  },
  {
    "url": "contents/chapter2.html",
    "revision": "3f7d96edc2aa214d5bdb0f124a3548df"
  },
  {
    "url": "contents/chapter3.html",
    "revision": "ac9a7dc88cf93611fcfb97e7012e0290"
  },
  {
    "url": "contents/chapter4.html",
    "revision": "42b01e9fa95d6ed4b2730f7ee694de9b"
  },
  {
    "url": "contents/chapter5.html",
    "revision": "18dd9f5aaa796616c299ec9a5ae61cd5"
  },
  {
    "url": "contents/index.html",
    "revision": "f2d225fa435cc295b6d1279db23b2e05"
  },
  {
    "url": "image/favicon.png",
    "revision": "590b2668ed8a493223a25c5cd9f5146f"
  },
  {
    "url": "image/hs-logo.svg",
    "revision": "f1b4e2c0ffb2b8a2e7a7079b62bb2b2d"
  },
  {
    "url": "index.html",
    "revision": "4f8ce91673b01a50776abc39eb5d5717"
  },
  {
    "url": "me.html",
    "revision": "6959a302d59a786ddddee1775c760dc5"
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
