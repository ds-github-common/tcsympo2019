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
    "revision": "307424eb9f1eecdbfb81b60e1a07397c"
  },
  {
    "url": "about.html",
    "revision": "649018f888b94ecb87c489fe708b7a3f"
  },
  {
    "url": "addition/index.html",
    "revision": "90ec0bd5c76bd30bc7acc2955370895f"
  },
  {
    "url": "addition/movie.html",
    "revision": "f94110aa7b6e11405502c778f437e57e"
  },
  {
    "url": "addition/questionnaire.html",
    "revision": "a450a1d6b6e82adc0daf3abc98a07bda"
  },
  {
    "url": "assets/css/0.styles.4ff35534.css",
    "revision": "b3a0a300cfc68e4af8637c841bb8b0d6"
  },
  {
    "url": "assets/img/carbon01.0706b6f8.png",
    "revision": "0706b6f867d722f5cda33bd3530dcb55"
  },
  {
    "url": "assets/img/carbon02.4475a662.png",
    "revision": "4475a662ab1ef8bb40ce24cf605dc635"
  },
  {
    "url": "assets/img/carbon03.5e5cbda0.png",
    "revision": "5e5cbda05335a02b379eb10d6e94b127"
  },
  {
    "url": "assets/img/hero.5c2970d0.png",
    "revision": "5c2970d05a094bcb36beef08bde3bc5c"
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
    "url": "assets/js/10.1e1fc5eb.js",
    "revision": "a3eeee384e3fd4c246404370a7a73957"
  },
  {
    "url": "assets/js/11.ecb74cee.js",
    "revision": "209d95adca52b07787afcf51e8b35091"
  },
  {
    "url": "assets/js/12.5fc7da65.js",
    "revision": "3fd86e5e42e986b7b2f5e1b793e862b5"
  },
  {
    "url": "assets/js/13.537d52ba.js",
    "revision": "8f568ccfe2a90d6f165a9aae59f83727"
  },
  {
    "url": "assets/js/14.60a0a0a6.js",
    "revision": "de02bab0c3f233b2224ccffa791da999"
  },
  {
    "url": "assets/js/15.b3b5867b.js",
    "revision": "4dad83aad0d0f296fc45060ebad6b5ce"
  },
  {
    "url": "assets/js/16.08710226.js",
    "revision": "256357d089a2194eab5c73bce256433c"
  },
  {
    "url": "assets/js/17.d5d268a5.js",
    "revision": "ceaeea84c500b5b7ead95a34ff3fb5ce"
  },
  {
    "url": "assets/js/18.f732380f.js",
    "revision": "ac7240eefe65fc3355a35a2052142f16"
  },
  {
    "url": "assets/js/19.b5e02c1e.js",
    "revision": "695bbcbe74bbfde0363e1e0e24783656"
  },
  {
    "url": "assets/js/20.41a8c0a1.js",
    "revision": "14f37ea29667c196d769f0d7e781a4f4"
  },
  {
    "url": "assets/js/21.e2566411.js",
    "revision": "6fc34b64120f7e9874ad2db747bef98c"
  },
  {
    "url": "assets/js/22.44a916b2.js",
    "revision": "47500da80d76c8cc5f0f0bd21374b3da"
  },
  {
    "url": "assets/js/23.e0fe60e2.js",
    "revision": "9853610344e812bf8c3518c2de04cb2b"
  },
  {
    "url": "assets/js/24.8ffb10b4.js",
    "revision": "daa3500fd6f79991936978018034248b"
  },
  {
    "url": "assets/js/25.bf690814.js",
    "revision": "41795c5e868e63590090ce1bd4c30638"
  },
  {
    "url": "assets/js/26.2701cef7.js",
    "revision": "63e7dd5f539880201ad746a687d28140"
  },
  {
    "url": "assets/js/27.0d8baaa2.js",
    "revision": "972280d46624d186d5a1ac42f5edb600"
  },
  {
    "url": "assets/js/28.ea328b83.js",
    "revision": "b8970489985ca7252bf58cb9eb89618e"
  },
  {
    "url": "assets/js/3.a24b18d6.js",
    "revision": "957fa0ada4ff334d9632fdd93ef4109f"
  },
  {
    "url": "assets/js/4.b509597a.js",
    "revision": "1f2122073a7170d037a65a75fce22cfe"
  },
  {
    "url": "assets/js/5.7a53b942.js",
    "revision": "0a3f093248c55d6ff1385a866a510934"
  },
  {
    "url": "assets/js/6.fb5d43bc.js",
    "revision": "38761ad5ea1b98917b9e0d6310f78223"
  },
  {
    "url": "assets/js/7.0c029bc7.js",
    "revision": "a248b6bb417d395bbd58e511c0d9c495"
  },
  {
    "url": "assets/js/8.19619848.js",
    "revision": "abfe0ba30dd5ecd94a2a639e0c6d093a"
  },
  {
    "url": "assets/js/9.65b46f57.js",
    "revision": "2c51cd1a7e09a01cd57a35dd24583849"
  },
  {
    "url": "assets/js/app.bd640923.js",
    "revision": "90fb6e55ee9d20393aceea58e370f0e0"
  },
  {
    "url": "assets/js/vendors~docsearch.fa080520.js",
    "revision": "11f29ea866e1423d2e874115990433a4"
  },
  {
    "url": "callback.html",
    "revision": "b9be38ce8ca2d7e13a877e5a72b54d07"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "daeb1df0e1f6dd8766250ab6f573d8d1"
  },
  {
    "url": "contents/chapter2.html",
    "revision": "5349b83a5303f127005fff51f0f70235"
  },
  {
    "url": "contents/chapter3.html",
    "revision": "9d69a9775aed28de35efb7e83ed1df7a"
  },
  {
    "url": "contents/chapter4.html",
    "revision": "00e172c73d7a9aef1c6459bcd5dc4a95"
  },
  {
    "url": "contents/chapter5.html",
    "revision": "c86d8c3303a2413779affcb7f094ffec"
  },
  {
    "url": "contents/chapter6.html",
    "revision": "016d311f96913cb2bc0a1fc1a5866bf5"
  },
  {
    "url": "contents/chapter7.html",
    "revision": "e74eb89db0d28fb8082a113bdcbda4b5"
  },
  {
    "url": "contents/index.html",
    "revision": "aab50f052faba089fd52e7419f6d015f"
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
    "revision": "3ee86126253d281bcc2c182c844a6fb1"
  },
  {
    "url": "index.html",
    "revision": "3052551cb0c39e49662b3c75e78cc46b"
  },
  {
    "url": "me.html",
    "revision": "d170ff15786df0f7ddbb430603eb05c8"
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
