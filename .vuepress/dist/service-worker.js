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
    "revision": "7a307c2f5a06a9cf3d4fca62136acd0b"
  },
  {
    "url": "about.html",
    "revision": "2e1d51c478234d557403c248cb14a789"
  },
  {
    "url": "assets/css/0.styles.e79549d7.css",
    "revision": "50f0689092f8e6d38319828c43345b56"
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
    "url": "assets/js/2.9980317b.js",
    "revision": "b58bd7b07bed390e86c86af603369307"
  },
  {
    "url": "assets/js/3.be2d96cd.js",
    "revision": "d119b06973b7c0b696b2cb6adf91737d"
  },
  {
    "url": "assets/js/4.e28a1261.js",
    "revision": "b1ea5c98f605c0a0a9ccc3e3c955b99b"
  },
  {
    "url": "assets/js/5.3ea54a99.js",
    "revision": "0f802d96716bb25466d64e07e6034eda"
  },
  {
    "url": "assets/js/6.1b4ed13a.js",
    "revision": "3f5ad2d01386737e02484c8bfa9f9835"
  },
  {
    "url": "assets/js/7.95402f6a.js",
    "revision": "becbc087d8d9777c1fb9674e1121902a"
  },
  {
    "url": "assets/js/8.c4a67324.js",
    "revision": "61568b6432785bce582f2999c3107f33"
  },
  {
    "url": "assets/js/app.7f1231a8.js",
    "revision": "73a437c4f5e52cdc548ef867cbdcc90b"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "e86cc98eb9a461f6127dff250dd1f2b9"
  },
  {
    "url": "contents/index.html",
    "revision": "1a77f4cf4ac1225851c47b7a86802c39"
  },
  {
    "url": "image/favicon.png",
    "revision": "590b2668ed8a493223a25c5cd9f5146f"
  },
  {
    "url": "index.html",
    "revision": "84a822080b4cfaf9594efb192f00fb02"
  },
  {
    "url": "me.html",
    "revision": "dc62a40036813d1651f0e0bf6d1a65f0"
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
