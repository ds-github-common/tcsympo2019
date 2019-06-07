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
    "revision": "90071a1fda40d4c9ca7768a99dfaac89"
  },
  {
    "url": "about.html",
    "revision": "802486a6fd8a3d8eeec89d2dd1f4341c"
  },
  {
    "url": "assets/css/0.styles.9b1650be.css",
    "revision": "06cc8d5204410ac1ea30d02a332856cd"
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
    "url": "assets/js/11.aebc3315.js",
    "revision": "4c9f0db308b246f4c6506036ffb3f2f6"
  },
  {
    "url": "assets/js/12.0e307c49.js",
    "revision": "23d3ee4964eb8859d5fbc55b65219580"
  },
  {
    "url": "assets/js/13.f0f08286.js",
    "revision": "7f00571c071a459108837837de722ba5"
  },
  {
    "url": "assets/js/14.6863f73c.js",
    "revision": "5bc4bb12057db766844d9d51f2153107"
  },
  {
    "url": "assets/js/15.5e3b826b.js",
    "revision": "014d35d4cfe615665b79d7f9e56328e3"
  },
  {
    "url": "assets/js/16.a33cf00b.js",
    "revision": "d4d5ba64ef22132d245d06939584ef94"
  },
  {
    "url": "assets/js/17.0e42478c.js",
    "revision": "e993401ea61c273ed4aa0a27ad7e1d8f"
  },
  {
    "url": "assets/js/18.e30de82d.js",
    "revision": "54d5cdde77e98a6dd23a051e962026af"
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
    "url": "assets/js/4.8836f150.js",
    "revision": "98b162f4824031f856d2c670297f0d52"
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
    "url": "assets/js/9.2c8f1327.js",
    "revision": "d4ad3eedc4082800b8d19aa12d7e2c7b"
  },
  {
    "url": "assets/js/app.eb481417.js",
    "revision": "dd20aa1be9b75c6a860f568ae5162d08"
  },
  {
    "url": "assets/js/vendors~docsearch.c60f612f.js",
    "revision": "52a5202aff38bc7eabe336a33ac9d910"
  },
  {
    "url": "contents/chapter1.html",
    "revision": "fac11b8ec7def17796b56a454405305d"
  },
  {
    "url": "contents/chapter2.html",
    "revision": "166c987c1b50163d5eb3b61a6ed2913a"
  },
  {
    "url": "contents/chapter3.html",
    "revision": "50ebcbaf55be060e2f272438561dbfe3"
  },
  {
    "url": "contents/chapter4.html",
    "revision": "f41abe53ab0fb9e8287a73db2dec5951"
  },
  {
    "url": "contents/chapter5.html",
    "revision": "02e509c762b3f83c38a0f694127bd5b9"
  },
  {
    "url": "contents/chapter6.html",
    "revision": "2fd84652c0f103b117eade9fd769070d"
  },
  {
    "url": "contents/index.html",
    "revision": "f547bf2b25f4ddb73a89263c16a750ff"
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
    "url": "image/hs-logo.svg",
    "revision": "f1b4e2c0ffb2b8a2e7a7079b62bb2b2d"
  },
  {
    "url": "index.html",
    "revision": "3a494de8f75d2f082343d8fe30c8ddb3"
  },
  {
    "url": "me.html",
    "revision": "8cff1f355decaa929c22210b046ae1fd"
  },
  {
    "url": "slide.html",
    "revision": "35536e6dff8e94bee8c662da149cbe64"
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
