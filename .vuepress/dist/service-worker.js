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
    "revision": "5cec5efce291b3173586a5862cf96b51"
  },
  {
    "url": "about.html",
    "revision": "934e087eb0973fe6bc59d903e6fb653e"
  },
  {
    "url": "addition/chapter6.html",
    "revision": "0ec37398a9f464c54b206b884919f54b"
  },
  {
    "url": "addition/index.html",
    "revision": "83c28eb8a3eed1ee554abbffe3186fad"
  },
  {
    "url": "addition/questionnaire.html",
    "revision": "d82fdf1f06b0d20e12e1a389c499eab8"
  },
  {
    "url": "assets/css/0.styles.6d0dc1e8.css",
    "revision": "7ee8509c256485d7d6f928f9e3c66c7d"
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
    "url": "assets/js/10.1de30370.js",
    "revision": "5969a1396260fbe9136b778ec98e6cb7"
  },
  {
    "url": "assets/js/11.25adde81.js",
    "revision": "d10d85fa20e9e297c64d794e3d51dc40"
  },
  {
    "url": "assets/js/12.50d23eb9.js",
    "revision": "3f107aea8b82d96edae5afe368e6170d"
  },
  {
    "url": "assets/js/13.223fdf8f.js",
    "revision": "3e153adb2e729432127132b8064c502c"
  },
  {
    "url": "assets/js/14.ae8e0ec2.js",
    "revision": "ea01bd9c2776c8304360ff04742b8363"
  },
  {
    "url": "assets/js/15.aa9d430f.js",
    "revision": "f779396ac1d449c2f09994b00fce8ccd"
  },
  {
    "url": "assets/js/16.a165d24d.js",
    "revision": "213ee9d08ae41849de2da1e455ede614"
  },
  {
    "url": "assets/js/17.34096d1b.js",
    "revision": "7a645a9e5e5d0cd95a9f6ae709c1700b"
  },
  {
    "url": "assets/js/18.dbd8cfb3.js",
    "revision": "171cb4a2738e5b854c42470ff8129004"
  },
  {
    "url": "assets/js/19.b0ff8e61.js",
    "revision": "3b2ae8aa9de0e77202dbf4ffbc3efd09"
  },
  {
    "url": "assets/js/20.03304099.js",
    "revision": "d674c0e609e7da4418fd415d22c13a6d"
  },
  {
    "url": "assets/js/3.b586daf5.js",
    "revision": "dfd6317f13cfc5829e4b32bfdb051178"
  },
  {
    "url": "assets/js/4.71f2cf89.js",
    "revision": "03ee8928f941c6792a252a27803ebca0"
  },
  {
    "url": "assets/js/5.3327ff00.js",
    "revision": "a4c0558954061002d998377c1ff6fd1e"
  },
  {
    "url": "assets/js/6.c3c7f1a3.js",
    "revision": "422ef2279fa9c5e6ffe6a5147515a0fc"
  },
  {
    "url": "assets/js/7.18e4a144.js",
    "revision": "626e50a0ecdc6094647a4a44a7f9b04b"
  },
  {
    "url": "assets/js/8.a8bf3f18.js",
    "revision": "47cd8598e7ea65593856a429aef33679"
  },
  {
    "url": "assets/js/9.8da8c513.js",
    "revision": "91621daf3e69964b7c3310672fb87ac6"
  },
  {
    "url": "assets/js/app.68bb4199.js",
    "revision": "3535a9e75ade3affcab06ae2b5c6f2c7"
  },
  {
    "url": "assets/js/vendors~docsearch.b645245f.js",
    "revision": "b91d19b55b840249be625614e05c22b3"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "7faa57a97c826f60a637a0702710f704"
  },
  {
    "url": "contents/chapter2.html",
    "revision": "b7e664ac44b13a304969f9350f335363"
  },
  {
    "url": "contents/chapter3.html",
    "revision": "501e99609fd6bb44da1698f892427f5d"
  },
  {
    "url": "contents/chapter4.html",
    "revision": "c55596eed9739e902d5e0d20cd8cfc07"
  },
  {
    "url": "contents/chapter5.html",
    "revision": "50577ebd3d256b174ed49f17e44d8272"
  },
  {
    "url": "contents/index.html",
    "revision": "4be2b7325ee78d40596e2af717734054"
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
    "revision": "5ce1701580c7d1761cd0f6cda0fa8682"
  },
  {
    "url": "me.html",
    "revision": "c3b7c1c474024e00153e70ca6a065dca"
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
