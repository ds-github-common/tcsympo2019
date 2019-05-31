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
    "revision": "d6733c14b20653d88deb29400ab757e6"
  },
  {
    "url": "about.html",
    "revision": "46e2c6d07ffabd62303b0c7c56cc6389"
  },
  {
    "url": "assets/css/0.styles.09217639.css",
    "revision": "ded55f280f9d22ac7262a6bcdf71caa5"
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
    "url": "assets/js/11.4aeb6fe3.js",
    "revision": "1a2fbefe0af4d6263dca0f1deef346a3"
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
    "url": "assets/js/4.3cf88f97.js",
    "revision": "47cc96a1500e283ae0315c6dc01627e1"
  },
  {
    "url": "assets/js/5.ce91193c.js",
    "revision": "702ccbed9534a418227d7ea025eefc93"
  },
  {
    "url": "assets/js/6.f1926073.js",
    "revision": "307c975fb64bb3f80c318fab947f7402"
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
    "url": "assets/js/app.b1dd9ae8.js",
    "revision": "c3de8c6b2025e3eefcdd3cccfa1d7e80"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "f5757dec200912193e8d30d9c05d80b0"
  },
  {
    "url": "contents/chapter2.html",
    "revision": "a0c3c8c10a09be0f6f26ba96836862cb"
  },
  {
    "url": "contents/chapter3.html",
    "revision": "13b070eaabf1b8e34a2dcb3310910dea"
  },
  {
    "url": "contents/chapter4.html",
    "revision": "70d4a0cfabe3912d61cc9d2a97ede825"
  },
  {
    "url": "contents/chapter5.html",
    "revision": "41773dae16032ee1800c94c396dcef19"
  },
  {
    "url": "contents/index.html",
    "revision": "087d9d4a06648ae5a5cf4a5b071db42c"
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
    "revision": "0f7885574b8d5f5ff541c0c3e437d89b"
  },
  {
    "url": "me.html",
    "revision": "35e33b89b71b4fe189c6fb291b408561"
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
