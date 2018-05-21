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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "8d14d9dc905a21e5610479ab9b485d48"
  },
  {
    "url": "covers/ActiveProspect.html",
    "revision": "4c6cc4785fe493868491b3770b981cd3"
  },
  {
    "url": "covers/AppsFlyer.html",
    "revision": "cfbc6be68ffce79a7b766f8917ae64bb"
  },
  {
    "url": "covers/Cast Iron Coding.html",
    "revision": "f0fd6fa8093f966ddf1242f4779d49f6"
  },
  {
    "url": "covers/doodley/index.html",
    "revision": "93edf041daf8ae40ec19addfd7d169a9"
  },
  {
    "url": "covers/Esri.html",
    "revision": "baf9708f7ad8b092bf023422a7b9b133"
  },
  {
    "url": "covers/IMM.html",
    "revision": "1b70870a80a2499debe4f78882ce631b"
  },
  {
    "url": "covers/Kabbage.html",
    "revision": "08a40ded70195616071294ff0e4030c1"
  },
  {
    "url": "covers/OneRockwell.html",
    "revision": "3bc962f891f07de2654df29d2bf8e68e"
  },
  {
    "url": "covers/template.html",
    "revision": "b4bd73214230b3ccbb7103c4b617b6c2"
  },
  {
    "url": "cv/index.html",
    "revision": "cecc5c2b41896504b990d5a20e3bbd69"
  },
  {
    "url": "index.html",
    "revision": "d19757d1882fc47c8634726dcd65f529"
  },
  {
    "url": "project/index.html",
    "revision": "5fa31dd64cdfdc9cf175600a0e5e60f5"
  },
  {
    "url": "js/service-worker-registration.js",
    "revision": "0b864da54563b67ec48e25ce43595aee"
  },
  {
    "url": "css/common.css",
    "revision": "7ee7cbeadb98b905fc9104914fdb799d"
  },
  {
    "url": "css/cv.css",
    "revision": "dd19fbab4f7f1d3dba88076b64014ae1"
  },
  {
    "url": "css/landing.css",
    "revision": "92262a237d2a4b4bec2d86fd193ba45c"
  },
  {
    "url": "css/others.css",
    "revision": "c681e0bd25f9ef96547ab6985510c748"
  },
  {
    "url": "images/banner_bw_y2vh2r_c_scale,w_1075.png",
    "revision": "138ae4cf8dc68371b9e65a0ad113c915"
  },
  {
    "url": "images/banner_bw_y2vh2r_c_scale,w_1536.png",
    "revision": "1b2d63954ec233e17bc396d32b0d74af"
  },
  {
    "url": "images/banner_bw_y2vh2r_c_scale,w_1826.png",
    "revision": "93b5644bc87e5c8f0e0ea4312f41c28d"
  },
  {
    "url": "images/banner_bw_y2vh2r_c_scale,w_1920.png",
    "revision": "42012a4fa2a0b551a2d29e05cf87f283"
  },
  {
    "url": "images/banner_bw_y2vh2r_c_scale,w_360.png",
    "revision": "c8954e03d069dcdf38189f037d370d8d"
  },
  {
    "url": "images/banner_bw.png",
    "revision": "e07615271ad0e87a434d9166e6a66114"
  },
  {
    "url": "images/simon_1024.png",
    "revision": "5cb0853b658123d0bce81f82aa8c8654"
  },
  {
    "url": "images/simon_192.png",
    "revision": "952e48c6ce25113e9985f8052dd0caba"
  },
  {
    "url": "images/simon_256.png",
    "revision": "567800810e450cb4c4fba50ae788006a"
  },
  {
    "url": "images/simon_512.png",
    "revision": "9d12a4a23d433a1a0a678a7714d940e9"
  },
  {
    "url": "images/banner_bw_y2vh2r_c_scale,w_1075.webp",
    "revision": "70efebc6f0e424d577c67a9bd69038c1"
  },
  {
    "url": "images/banner_bw_y2vh2r_c_scale,w_1536.webp",
    "revision": "13a5a8b8bac8bccad7c107010b69c319"
  },
  {
    "url": "images/banner_bw_y2vh2r_c_scale,w_1826.webp",
    "revision": "02dbe91ac9c8ab2153e5eccacc562d1c"
  },
  {
    "url": "images/banner_bw_y2vh2r_c_scale,w_1920.webp",
    "revision": "87a5159781be62120d2c48d3d7439e67"
  },
  {
    "url": "images/banner_bw_y2vh2r_c_scale,w_360.webp",
    "revision": "abe086fbd56a0ed95f0bd70de45b5bf2"
  },
  {
    "url": "images/banner_bw.webp",
    "revision": "344d78f4e6ddb850cdb37f7d13801277"
  },
  {
    "url": "images/simon_1024.webp",
    "revision": "be4ef5d6abe5ec7b4a7e8c0741983ff1"
  },
  {
    "url": "images/simon_192.webp",
    "revision": "3b449681d66732c19af2f32cd27ccd53"
  },
  {
    "url": "images/simon_256.webp",
    "revision": "b01bc3c4d8097da7324fa4c7a6bcf306"
  },
  {
    "url": "images/simon_512.webp",
    "revision": "08e1b14369553852df1dee5b8520a950"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com\/s\//, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https:\/\/maxcdn\.bootstrapcdn\.com\/bootstrap/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https:\/\/code\.jquery\.com\/jquery-3/, workbox.strategies.networkFirst(), 'GET');
