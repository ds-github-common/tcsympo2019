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
    "revision": "0f170cbc33b8e5116cfe07494d2ecf1e"
  },
  {
    "url": "about.html",
    "revision": "701ea7051bb956efde96494babc6c2bd"
  },
  {
    "url": "addition/chapter6.html",
    "revision": "922c5b1ff7f295d6c9844fb7c71cffbd"
  },
  {
    "url": "addition/index.html",
    "revision": "d50c58d81f9b6a1a605752331b2e33d6"
  },
  {
    "url": "addition/questionnaire.html",
    "revision": "d7f97e94cb685b6589f1e388124ea606"
  },
  {
    "url": "assets/css/0.styles.b35bdcb9.css",
    "revision": "a022b67227934fd8a03e612b79707ee6"
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
    "url": "assets/js/10.b5c1a756.js",
    "revision": "0e979f0478e8d021afe786615ed76d89"
  },
  {
    "url": "assets/js/11.48f4233a.js",
    "revision": "c53f0dcfbdea2f19bee32aa59eb80a6b"
  },
  {
    "url": "assets/js/12.d679b9a8.js",
    "revision": "e54b9f48a5f2fe97cc2e3b64ee639751"
  },
  {
    "url": "assets/js/13.41ceea3a.js",
    "revision": "b5e29605208b4d1bc88c43770c9b0cb1"
  },
  {
    "url": "assets/js/14.08357a16.js",
    "revision": "f39f6858163965f049b06c6f7a53d16c"
  },
  {
    "url": "assets/js/15.e2897171.js",
    "revision": "cafd56dc576f862d310febfecd6c0a66"
  },
  {
    "url": "assets/js/16.a9aadb52.js",
    "revision": "774a2b1aa16ba6d1e78f211e338432a6"
  },
  {
    "url": "assets/js/17.198d8290.js",
    "revision": "cfa0939ce1cf6f1a2e738de73142b13d"
  },
  {
    "url": "assets/js/18.add86dc0.js",
    "revision": "ee85ef7d06a5527338a898bde6257431"
  },
  {
    "url": "assets/js/19.e46bb7f4.js",
    "revision": "8221658005294460fe8dceb3da599844"
  },
  {
    "url": "assets/js/20.03304099.js",
    "revision": "d674c0e609e7da4418fd415d22c13a6d"
  },
  {
    "url": "assets/js/3.821a0552.js",
    "revision": "788a1ed0abf463f0257e1ca6e3ed90e2"
  },
  {
    "url": "assets/js/4.f80128d5.js",
    "revision": "e41898890ead0384fdc325bd945ecd4b"
  },
  {
    "url": "assets/js/5.2d497c4f.js",
    "revision": "6a8ad93fa91d7ae2faefd0dfa2f049c5"
  },
  {
    "url": "assets/js/6.9dfdb303.js",
    "revision": "473fe81270c6792004e8541c8ea7f00a"
  },
  {
    "url": "assets/js/7.e574a003.js",
    "revision": "c38b4a56a7ec5e4cb3fc5dd6ed069951"
  },
  {
    "url": "assets/js/8.c366d98b.js",
    "revision": "622bd4f702850f42ea668f246e30862a"
  },
  {
    "url": "assets/js/9.2f7a0a8b.js",
    "revision": "e4a2119fe52f7db630b9c71b5568b617"
  },
  {
    "url": "assets/js/app.390f168a.js",
    "revision": "2cd3d686d7c911918df6487539859339"
  },
  {
    "url": "assets/js/vendors~docsearch.82224f56.js",
    "revision": "be3ccdd2366ef3478421a3b168c74d6e"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "c03a5920a1c40513a772129fe94f305b"
  },
  {
    "url": "contents/chapter2.html",
    "revision": "790e88bdbe460b7dd84d8dd56771694a"
  },
  {
    "url": "contents/chapter3.html",
    "revision": "692ee361d5dc8b162f37030101f6d6c2"
  },
  {
    "url": "contents/chapter4.html",
    "revision": "259655773a59d25dee6f8b4403bed4c7"
  },
  {
    "url": "contents/chapter5.html",
    "revision": "09e96775ac1919e576b37caf8711239c"
  },
  {
    "url": "contents/index.html",
    "revision": "12497a0824b5eaea69d34ba6e22fc314"
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
    "revision": "bb658f83c5f3f0252da6bb52a5d2c35d"
  },
  {
    "url": "me.html",
    "revision": "804638f21ee1a7f80b6d07a84d64c11d"
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
