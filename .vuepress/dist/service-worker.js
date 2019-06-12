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
    "revision": "4ec654b5ea1e8f11e8b0c969eb5d1a73"
  },
  {
    "url": "about.html",
    "revision": "48ed3a57ca78900b5d7a4814677bbdcc"
  },
  {
    "url": "addition/chapter6.html",
    "revision": "44837524eec05f83da66ff52333fdd0b"
  },
  {
    "url": "addition/index.html",
    "revision": "af0b86de42dcf33bf52063a34fbcc401"
  },
  {
    "url": "assets/css/0.styles.52b95254.css",
    "revision": "e3633f75d639fe1977ce52684baaaee8"
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
    "url": "assets/js/10.69c7381a.js",
    "revision": "11a0ff04a62515cfcab05fb6b4848d1f"
  },
  {
    "url": "assets/js/11.bce56615.js",
    "revision": "2c8ff2536e5c88396e60868733195ad8"
  },
  {
    "url": "assets/js/12.8fba9c5f.js",
    "revision": "6dffa5abf913f8f1f8d10d5e43819fd6"
  },
  {
    "url": "assets/js/13.55d85a1e.js",
    "revision": "7ee69f374a2b94a96aeeea5135689fdb"
  },
  {
    "url": "assets/js/14.b9d2e710.js",
    "revision": "40d87d7d30b2f9a5f44d5b8a86912594"
  },
  {
    "url": "assets/js/15.bcb8ea77.js",
    "revision": "2d6b27f1e238f6485e3ecf4dd8441100"
  },
  {
    "url": "assets/js/16.82a4d94f.js",
    "revision": "24e91b5d0b321043d653d369b4cdefb0"
  },
  {
    "url": "assets/js/17.6aa5fc54.js",
    "revision": "06f365225be61a6134519a49f4117aaa"
  },
  {
    "url": "assets/js/18.46abc9d9.js",
    "revision": "d04b7a0ac15a667e6ad3ae1731328f14"
  },
  {
    "url": "assets/js/19.bf2f0fad.js",
    "revision": "4892dbd3efdbb5d96c8aae864e78b0e4"
  },
  {
    "url": "assets/js/3.e7b62b80.js",
    "revision": "1ffe6ddc9ff146b5ddb729d627509cee"
  },
  {
    "url": "assets/js/4.ff951418.js",
    "revision": "6f38ea802856ab9f5756fe1917d1ca64"
  },
  {
    "url": "assets/js/5.5cff3823.js",
    "revision": "51000ae0afaeca5dd0db0946a2240758"
  },
  {
    "url": "assets/js/6.219d65f1.js",
    "revision": "190bff3541443036be11dcda3648525a"
  },
  {
    "url": "assets/js/7.2c6f6d32.js",
    "revision": "eeed0de9d046be2198201c64c645fcc2"
  },
  {
    "url": "assets/js/8.2a68ddc0.js",
    "revision": "0c527fdd2fc8d81351822d822a5be04b"
  },
  {
    "url": "assets/js/9.731d13d0.js",
    "revision": "343bc5b4ad8d8d7178de7aa09e3b1a05"
  },
  {
    "url": "assets/js/app.1b1a4d01.js",
    "revision": "40d0b8d99aca8ff49531f63d79f66b05"
  },
  {
    "url": "assets/js/vendors~docsearch.c60f612f.js",
    "revision": "52a5202aff38bc7eabe336a33ac9d910"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "b822f7a9b07f2fd4e52b548cadfdb118"
  },
  {
    "url": "contents/chapter2.html",
    "revision": "4c3aa1754e0577b275ac30aee21c0835"
  },
  {
    "url": "contents/chapter3.html",
    "revision": "6560e4357b1044cef052ec599788d298"
  },
  {
    "url": "contents/chapter4.html",
    "revision": "5e6a128080beaae0a8586f3d088a97d6"
  },
  {
    "url": "contents/chapter5.html",
    "revision": "a680543b84417ddfab58224000e32c63"
  },
  {
    "url": "contents/index.html",
    "revision": "304970d1e4f39e79760b119fa323232e"
  },
  {
    "url": "fontawesome/css/all.min.css",
    "revision": "dbf9d822cefe851ba6f66e1ad57e8987"
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
    "revision": "228d4f8c56242b156b13efdae8e74b1a"
  },
  {
    "url": "me.html",
    "revision": "c5ef735cc0af29f352bec59b2f99cd2f"
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
