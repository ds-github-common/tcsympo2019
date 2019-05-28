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
    "revision": "2b416bac666e1d97ecacac3ece831c72"
  },
  {
    "url": "about.html",
    "revision": "5494e9d4f033780af28bf86e97df3757"
  },
  {
    "url": "assets/css/0.styles.93a14e0d.css",
    "revision": "7659baae224aba4033241adaa5d56337"
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
    "url": "assets/js/10.ece67322.js",
    "revision": "af689cd58406ce49aa02024227711fa0"
  },
  {
    "url": "assets/js/2.9980317b.js",
    "revision": "b58bd7b07bed390e86c86af603369307"
  },
  {
    "url": "assets/js/3.388e15b7.js",
    "revision": "218d23bc3d9a4097ccfd5a46f47f4150"
  },
  {
    "url": "assets/js/4.af2df3d6.js",
    "revision": "45b9627e1067948cdb22d86ee46e72a7"
  },
  {
    "url": "assets/js/5.d45340eb.js",
    "revision": "ab6a0292b70bc1a65b95dfa493e7460f"
  },
  {
    "url": "assets/js/6.e2922383.js",
    "revision": "254157c1c0c30e010d7bee09cf799c03"
  },
  {
    "url": "assets/js/7.e4fd3bbc.js",
    "revision": "95ade12f5e4c0f3b07c5f2087b3b6843"
  },
  {
    "url": "assets/js/8.2de14633.js",
    "revision": "0d730e8a627813f85c83f93970637655"
  },
  {
    "url": "assets/js/9.aa208164.js",
    "revision": "bbcafff4bea9770831b5665121613944"
  },
  {
    "url": "assets/js/app.694d5565.js",
    "revision": "dafdfeb7286bee8a000a624b6e9d17be"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "7f8ea9f65b718156d37936fbe31ef9da"
  },
  {
    "url": "contents/chapter2.html",
    "revision": "2d0f08f20618980108cb27732777fa35"
  },
  {
    "url": "contents/chapter3.html",
    "revision": "09f30834bae661f73edfd147d78eb8ad"
  },
  {
    "url": "contents/index.html",
    "revision": "6799a5e4ca13223f3e169d773f88ab8c"
  },
  {
    "url": "image/favicon.png",
    "revision": "590b2668ed8a493223a25c5cd9f5146f"
  },
  {
    "url": "index.html",
    "revision": "79fcdabb4117a4237765ca4f9cfd47bc"
  },
  {
    "url": "me.html",
    "revision": "02e6df02804ac3e92ef8a4ecc7e1894e"
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
