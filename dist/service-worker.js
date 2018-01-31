/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["index.html","26d4b19972ac89dbf3e01da04f753bdd"],["static/css/app.bbdca67cea7b8bc9ef4f689bddf678fd.css","15dbff36b115a51f37360cfd6f1f2fc0"],["static/fonts/Framework7Icons-Regular.9900d2b.ttf","9900d2b3f2c39d91d84c7097e1a75a3e"],["static/fonts/Framework7Icons-Regular.bb6aae4.eot","bb6aae46b35d6d8f20209c90c39cc35d"],["static/fonts/Framework7Icons-Regular.eb7a418.woff","eb7a418c0fa7e09762df728c54ba9c26"],["static/fonts/Framework7Icons-Regular.f3e1eae.woff2","f3e1eaef2b0abd39aa8daf1d0be041a9"],["static/fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["static/fonts/MaterialIcons-Regular.570eb83.woff2","570eb83859dc23dd0eec423a49e147fe"],["static/fonts/MaterialIcons-Regular.a37b0c0.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["static/fonts/MaterialIcons-Regular.e79bfd8.eot","e79bfd88537def476913f3ed52f4f4b3"],["static/img/Baby_bacon_site_800x800_acf_cropped.jpg","09b5438b9195e9e7904675b86c88ad23"],["static/img/angry-emoticon.png","3a515ff871c3beb0fc43305eaa39c512"],["static/img/background.jpg","29759daf2be1dd18a051949050ba5e00"],["static/img/bacon-batata_bacon_paradise_site_800x800_acf_cropped.jpg","70ecf5a7f15307fc5d02bd6336f241cb"],["static/img/bacon_wrapped_bacon_paradise_site_800x800_acf_cropped.jpg","51133747da26b311a60b989bd810a1b3"],["static/img/bhrama_bacon_paradise_site_800x800_acf_cropped.jpg","814c28826d0afacd8b3d8f8b092f5f91"],["static/img/burlesco_bacon_paradise1_800x800_acf_cropped.jpg","eed30ace49515fa89ad8f7988e2dc562"],["static/img/caip_limao_bacon_paradise_site_800x800_acf_cropped.jpg","accb0eb1c8b6a596c32291f58ae33abe"],["static/img/caip_morango_bacon_paradise_site_800x800_acf_cropped.jpg","a2f36e07c08fcd89ed173ddb02d1cd64"],["static/img/caip_siciliana_bacon_paradise_site_800x800_acf_cropped.jpg","15f3bd5e37fed341ec15477906000478"],["static/img/caip_uva_bacon_paradise_site_800x800_acf_cropped.jpg","18b7c1edcf5b19c1b058e781484870c7"],["static/img/ch-_gelado_bacon_paradise_site_800x800_acf_cropped.jpg","7e17f3eacaf5ee8aa7097ff011252d93"],["static/img/chiken_wings_bacon_paradise_site_800x800_acf_cropped.jpg","7e8edea0304a99a86c85c61010327d78"],["static/img/chopp_smoke_bacon_paradise_site_800x800_acf_cropped.jpg","ac618136735a778670eebed0bf4d27d8"],["static/img/cred.png","ebd8e061a6821e78440fce6df7d2398f"],["static/img/eat_sweet_bacon_paradise2_800x800_acf_cropped.jpg","604af7cc5df39c6430cf4b18f989da4b"],["static/img/emoticon-neutral-face-outline.png","0840828f91935989f7864fed410b56a6"],["static/img/harumaki_bacon_paradise_site_800x800_acf_cropped.jpg","edd102243e955261720a595d25c851d9"],["static/img/heart_attack_bacon_paradise_site_800x800_acf_cropped.jpg","6f4657c9e3247150a4f948dabf11bb59"],["static/img/hipster_bacon_paradise2_800x800_acf_cropped.jpg","b180a11621f055e8c4c66b2f37621dc2"],["static/img/icons/android-chrome-192x192.png","c3af067ca4f0ebc0cbb20c78dace5e08"],["static/img/icons/android-chrome-512x512.png","c504ad31c56a9f458b53d336bda8fd0a"],["static/img/icons/apple-touch-icon.png","1b296332679f81ee413c86e6af1e84d9"],["static/img/icons/favicon-16x16.png","5f62e89b6733c74063f60083b279a29f"],["static/img/icons/favicon-32x32.png","1bb884afb41b7047e2785622311c8182"],["static/img/icons/msapplication-icon-144x144.png","b89032a4a5a1879f30ba05a13947f26f"],["static/img/icons/mstile-150x150.png","a957fcfa082b99401fd286f6f407f50a"],["static/img/icons/safari-pinned-tab.svg","f22d501a35a87d9f21701cb031f6ea17"],["static/img/laughing-face-stroke.png","130edab03906169d0390fb8be526052d"],["static/img/milk_shake_bacon_paradise_site_800x800_acf_cropped.jpg","4870a127ef4bbd978feec627f00c32d7"],["static/img/money.png","8afe33f456ae6b6325ae79f0347665df"],["static/img/nacho_fries_bacon_paradise_site_800x800_acf_cropped.jpg","807640ce03d72536f26463ce45d04c58"],["static/img/nutella_bacon_paradise_site_800x800_acf_cropped.jpg","9a2974af9fdae69c53152a175b28b88b"],["static/img/onion_rings_bacon_paradise_site_800x800_acf_cropped.jpg","e07ce5108dff3402c30c769d335bdb3f"],["static/img/person.png","9cf97bbcbc8d28d1d951e7c9feaf9ff3"],["static/img/porquer_bacon_paradise1_800x800_acf_cropped.jpg","39d7c411be0c665c2509410919a768e7"],["static/img/qrcode.svg","041a106ac4b33619dd22caa9c4801476"],["static/img/refigerante_bacon_paradise_site_800x800_acf_cropped.jpg","f0fc2c99578e172074aaaa96796ee956"],["static/img/sad-face-outline.png","4b81a74bfd18e746f8b40c6550a11abd"],["static/img/schweppes_bacon_paradise_site_800x800_acf_cropped.jpg","e6df039cc1530070c7f334bc8067614a"],["static/img/smiling-emoticon-face.png","3b641548c0cf1990fe2a0eb8ff2fb151"],["static/img/table.png","4e3bbc5cac701e1575d0ac2ccb5c2451"],["static/img/tradicional_bacon_paradise1_800x800_acf_cropped.jpg","ff63c5b25c1010e7a544b40602836c91"],["static/img/waffle_bacon_paradise_site_800x800_acf_cropped.jpg","470c949b3819ee5ec0f011f8000e3514"],["static/js/app.0694f9b3a04df22cdd3e.js","9d7f239c7fe2f5a42b21e2b5f4511c92"],["static/js/manifest.fe1f750550aaf477c15f.js","14ba217432526bb9c24eab12eb055505"],["static/js/vendor.2a257c7f9192cea8ba2c.js","443788f0f67a234cbe6855a0576f4bc7"]];
var cacheName = 'sw-precache-v3-my-vue-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







