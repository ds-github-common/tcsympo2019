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
    "revision": "42fbd193dcf61d02bf0613944e70e140"
  },
  {
    "url": "about.html",
    "revision": "2894aa43d25646f249d1c7bf80b0650a"
  },
  {
    "url": "assets/css/0.styles.ee45a98f.css",
    "revision": "7576c7b3474cc30f9988bda482450489"
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
    "url": "assets/js/11.b7829756.js",
    "revision": "8e2bc3d2a537eb94aae1d25dde34d188"
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
    "url": "assets/js/app.0f0754f8.js",
    "revision": "79fd905c56379489e080cfbcb844c521"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "e540a6dbadc3bd280f245dc43c98c87d"
  },
  {
    "url": "contents/chapter2.html",
    "revision": "ace8051e53ca7fdff6e73006608b148c"
  },
  {
    "url": "contents/chapter3.html",
    "revision": "768900de31bb19de88f9b1eaed59fee5"
  },
  {
    "url": "contents/chapter4.html",
    "revision": "09a4055e38efd0870ab845106e0bb2f4"
  },
  {
    "url": "contents/chapter5.html",
    "revision": "116808793122c0c2ddf9672f369b219d"
  },
  {
    "url": "contents/index.html",
    "revision": "bba42b381f8461785cc9fbc35a7ba1c3"
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
    "revision": "f5d5a229cb860d5b53a8c5d9b251b1f9"
  },
  {
    "url": "me.html",
    "revision": "d9dbcac42125cbe500eec03f3e39e6b4"
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
