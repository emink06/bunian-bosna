'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "a382d74aee539029723d567dce1b09f5",
"assets/AssetManifest.json": "796677575f3d306c69ac1d1da5bbd2b2",
"assets/AssetManifest.bin.json": "e16b0a34a31a643cd390f39f71d89934",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/Logo.svg": "d22e1a97d35958896b780096880ce63d",
"assets/assets/images/Logo.png": "5a82101fe642ee76edcec2e62229c352",
"assets/assets/translations/en.json": "3844c03cee19e52e5093b1967fed4fb4",
"assets/assets/translations/bs.json": "3ffa41fcca4b62cdd206854b4482e138",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "439217b4d87bfb32234030e53c70b40e",
"assets/AssetManifest.bin": "3506e2b97811f39d76b6da89e8594b72",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"version.json": "d5a5e9ce30774bb070b64a981c89efdd",
"main.dart.js": "5b07daa7bb778f1c1b3b1f6a481db108",
".git/index": "74a3779a275445ef03b169bc7399e84f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/9d/d60d4f45f43b6f2d0b2088054688b5b5c4c30b": "b3bae0737bdf168d82c8bb52b6a38f75",
".git/objects/de/44aeb3de7dfd10fe7bd204302face21ccf59c9": "2fd1364a22efb1bb17d112194642d913",
".git/objects/15/649ddc62f3fb9df57a4f909e7eae17afdf832d": "e5ef807bb8f9f6460146ebb94409b81d",
".git/objects/98/51bd6db0b26e06398c8c84b609fec40d33e27f": "ea7988f85469aae5a8507893f059c264",
".git/objects/38/09cb6e2831852f4af932aeb1e7385415c95bf8": "f371074d7f7f8065737b15047b68c123",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/bf/63890afeab83ef8f655e0d31be7a067f525369": "82c0aa64e383fd522efc2990a236035b",
".git/objects/8b/cb4e33ae0cfed2e1ce08d166c76dacdf48f6d0": "cf9e0df18b5c609a5656c76ab74f8d21",
".git/objects/49/32f66d4541bbf191ed162dfca360790831d6cf": "948bf9c284b1782deeb76d8c4271975d",
".git/objects/44/d273c3303368141245a2217aec76e61a8d1931": "ea865d5e170210a3f884176c446fe4f1",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e3/af2962debd9cad577d23ae14124dfeb625fdb0": "fdc501c2433637a36a0b9b2f9ce32439",
".git/objects/73/a53c1a676f976c3c96e499aa85cf5be6a5a3c4": "66ba59f9b74a0da67136e10df8e5dc3d",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/9080bb1e582ffcd7b5bdaff8ca997d3e8c053c": "a511eb58b2965c3472fcf162f27b619b",
".git/objects/db/29532241853132e83da36afd0bc513cc547f1b": "7e2203f31ee8e9be5de2dec3460a4f94",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/92/a3bc3fefdfac2f6a3ce7f585fbbbe15acc80cb": "8218190aee4c9593016ab25c97366000",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/09/a646624f650b7abc871858f1e77e4b151774be": "16f2f1c4c0e0ae512fd194889677fe7f",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/aa6a7c3d134ead045ecc2975b7027cae9c566f": "578859c0e9033458507f14dc32a0ca80",
".git/objects/aa/322d282e25db0bc2823ecda5be7e2ed3c145de": "73b4661b847808272b2b3414e154a8f3",
".git/objects/82/9f31c41faaf9f8ade4652204fc25a413bda32b": "5e2d7fcae022ff4ed94850464ecdf539",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/14/be0e13cf9d8c9b7b4a6edb57304889593bf969": "562623e48a26f17d9b34742713a8ba45",
".git/objects/4a/f421c1f2a6ba6e0bea77534e5cd325fdb5327a": "f904459a1ebccd4ace579a1618d29bf8",
".git/objects/9a/2bd7b3e61dc37494e8c0a68a5253fa757739fb": "528e21722f8ed9e69771740aedf701fb",
".git/objects/7b/e7592b9047510819661b9d68e9dc2ea1c24ba2": "3f255ed60c4f01c83d36c6591eab5946",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/0c/2c30ab2037c913e5aa00084e39b3c76c527ee3": "f748cca79f87526792477811786343c9",
".git/objects/d2/c770b8ac9863121dd9ea2596e31d1e8f5303de": "479dbcd355a03154f54a5141b1212e86",
".git/objects/fe/c21d610c427296950e0d8ff229bac0ceaa7144": "e4e613ca1f28762bf04864d3d55451b7",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/78/c61c2ba2d97392a7b882b2c67c8f58a26b3c89": "1b0a0c206a473baa977b32d516ac24ba",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/b4/3d8df49c70917b4e57cfaf2c2025c4e88e859d": "477bf569da4d62f2abbf841c2d858747",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/08/a677a6c1223221d0399a955d4d9bb18fe56c11": "b99e0177d279f1f2f3ae761ac898e214",
".git/objects/d1/5ae5913b8ad6b76bf2179e9d2b9fef68a44f67": "b78401efcbd1eeb92eb18305508c8058",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/COMMIT_EDITMSG": "8439beb8b1732c0a2985d22d90c57484",
".git/logs/HEAD": "b271a8f691bd1ac1d58e4d9c3821bada",
".git/logs/refs/heads/master": "b271a8f691bd1ac1d58e4d9c3821bada",
".git/refs/heads/master": "0c454e1e18fe2271d1815d7d63b7d23d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "51ea57656a7a38027af7ff70a11e325a",
"index.html": "34e6405c0f3e4692d829d9af7b300e14",
"/": "34e6405c0f3e4692d829d9af7b300e14",
"icons/Icon-maskable-512.png": "e4ce7e089b3b7159891b1194d6a1fe38",
"icons/Icon-maskable-192.png": "ab8e427489a1cccc834a66d4d67525fa",
"icons/Icon-512.png": "e4ce7e089b3b7159891b1194d6a1fe38",
"icons/Icon-192.png": "ab8e427489a1cccc834a66d4d67525fa",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"manifest.json": "36f441afefb43224363cf9793ec3a42d",
"flutter_bootstrap.js": "0ba3b038de26ed16cc0fe33a70ebebaf",
"favicon.png": "6889c739bc807195a3a7ac25e465c5c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
