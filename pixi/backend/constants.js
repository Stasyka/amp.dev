/**
 * Copyright 2020 The AMPHTML Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable max-len */
const dummyApiResponse = {
  'captchaResult': 'CAPTCHA_NOT_NEEDED',
  'kind': 'pagespeedonline#result',
  'id': 'https://amp.dev/',
  'loadingExperience': {
    'id': 'https://amp.dev/',
    'metrics': {
      'CUMULATIVE_LAYOUT_SHIFT_SCORE': {
        'percentile': 7,
        'distributions': [
          {
            'min': 0,
            'max': 10,
            'proportion': 0.816381257056831,
          },
          {
            'min': 10,
            'max': 25,
            'proportion': 0.15609710199473087,
          },
          {
            'min': 25,
            'proportion': 0.02752164094843808,
          },
        ],
        'category': 'FAST',
      },
      'FIRST_INPUT_DELAY_MS': {
        'percentile': 289,
        'distributions': [
          {
            'min': 0,
            'max': 100,
            'proportion': 0.09960294951786727,
          },
          {
            'min': 100,
            'max': 300,
            'proportion': 0.6889393079977311,
          },
          {
            'min': 300,
            'proportion': 0.21145774248440163,
          },
        ],
        'category': 'AVERAGE',
      },
      'FIRST_CONTENTFUL_PAINT_MS': {
        'percentile': 3058,
        'distributions': [
          {
            'min': 0,
            'max': 1000,
            'proportion': 0.26047648136835677,
          },
          {
            'min': 1000,
            'max': 3000,
            'proportion': 0.4805131337813072,
          },
          {
            'min': 3000,
            'proportion': 0.259010384850336,
          },
        ],
        'category': 'SLOW',
      },
      'LARGEST_CONTENTFUL_PAINT_MS': {
        'percentile': 3100,
        'distributions': [
          {
            'min': 0,
            'max': 2500,
            'proportion': 0.6472574979735206,
          },
          {
            'min': 2500,
            'max': 4000,
            'proportion': 0.2092677654687922,
          },
          {
            'min': 4000,
            'proportion': 0.14347473655768708,
          },
        ],
        'category': 'AVERAGE',
      },
    },
    'overall_category': 'SLOW',
    'initial_url': 'https://amp.dev/',
  },
  'originLoadingExperience': {
    'id': 'https://amp.dev',
    'metrics': {
      'CUMULATIVE_LAYOUT_SHIFT_SCORE': {
        'percentile': 6,
        'distributions': [
          {
            'min': 0,
            'max': 10,
            'proportion': 0.8428252416571671,
          },
          {
            'min': 10,
            'max': 25,
            'proportion': 0.1230538594874838,
          },
          {
            'min': 25,
            'proportion': 0.034120898855349246,
          },
        ],
        'category': 'FAST',
      },
      'FIRST_INPUT_DELAY_MS': {
        'percentile': 231,
        'distributions': [
          {
            'min': 0,
            'max': 100,
            'proportion': 0.5691631339299733,
          },
          {
            'min': 100,
            'max': 300,
            'proportion': 0.34683623802794783,
          },
          {
            'min': 300,
            'proportion': 0.08400062804207883,
          },
        ],
        'category': 'AVERAGE',
      },
      'FIRST_CONTENTFUL_PAINT_MS': {
        'percentile': 1958,
        'distributions': [
          {
            'min': 0,
            'max': 1000,
            'proportion': 0.5209752209824664,
          },
          {
            'min': 1000,
            'max': 3000,
            'proportion': 0.34879003043037243,
          },
          {
            'min': 3000,
            'proportion': 0.13023474858716125,
          },
        ],
        'category': 'AVERAGE',
      },
      'LARGEST_CONTENTFUL_PAINT_MS': {
        'percentile': 2096,
        'distributions': [
          {
            'min': 0,
            'max': 2500,
            'proportion': 0.8073655487391868,
          },
          {
            'min': 2500,
            'max': 4000,
            'proportion': 0.11574710196814585,
          },
          {
            'min': 4000,
            'proportion': 0.07688734929266734,
          },
        ],
        'category': 'FAST',
      },
    },
    'overall_category': 'AVERAGE',
    'initial_url': 'https://amp.dev/',
  },
  'lighthouseResult': {
    'requestedUrl': 'https://amp.dev/',
    'finalUrl': 'https://amp.dev/',
    'lighthouseVersion': '6.1.0',
    'userAgent':
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/83.0.4103.93 Safari/537.36',
    'fetchTime': '2020-08-13T12:42:23.398Z',
    'environment': {
      'networkUserAgent':
        'Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4143.7 Mobile Safari/537.36 Chrome-Lighthouse',
      'hostUserAgent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/83.0.4103.93 Safari/537.36',
      'benchmarkIndex': 714,
    },
    'runWarnings': [],
    'configSettings': {
      'emulatedFormFactor': 'mobile',
      'locale': 'en-US',
      'onlyCategories': ['performance'],
      'channel': 'lr',
    },
    'audits': {
      'largest-contentful-paint': {
        'id': 'largest-contentful-paint',
        'title': 'Largest Contentful Paint',
        'description':
          'Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)',
        'score': 0.67,
        'scoreDisplayMode': 'numeric',
        'displayValue': '3.4 s',
        'numericValue': 3395.517406396801,
      },
      'render-blocking-resources': {
        'id': 'render-blocking-resources',
        'title': 'Eliminate render-blocking resources',
        'description':
          'Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'details': {
          'overallSavingsMs': 0,
          'items': [],
          'headings': [],
          'type': 'opportunity',
        },
        'numericValue': 0,
      },
      'unminified-javascript': {
        'id': 'unminified-javascript',
        'title': 'Minify JavaScript',
        'description':
          'Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'details': {
          'headings': [],
          'type': 'opportunity',
          'overallSavingsBytes': 0,
          'items': [],
          'overallSavingsMs': 0,
        },
        'warnings': [],
        'numericValue': 0,
      },
      'critical-request-chains': {
        'id': 'critical-request-chains',
        'title': 'Avoid chaining critical requests',
        'description':
          'The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://web.dev/critical-request-chains/).',
        'score': null,
        'scoreDisplayMode': 'notApplicable',
        'details': {
          'type': 'criticalrequestchain',
          'longestChain': {
            'duration': 720.9100000036415,
            'length': 1,
            'transferSize': 0,
          },
          'chains': {
            '632DA733E52CD84A90C10CD051ED332C': {
              'request': {
                'responseReceivedTime': 121775.76952999999,
                'transferSize': 34289,
                'startTime': 121775.692537,
                'endTime': 121775.769534,
                'url': 'https://amp.dev/',
              },
            },
            '23.89': {
              'request': {
                'endTime': 121776.413447,
                'responseReceivedTime': 121776.413016,
                'url':
                  'blob:https://amp.dev/5607df76-fdf1-4b3a-bfd1-9e9897acf919',
                'startTime': 121776.404357,
                'transferSize': 0,
              },
            },
          },
        },
      },
      'uses-optimized-images': {
        'id': 'uses-optimized-images',
        'title': 'Efficiently encode images',
        'description':
          'Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images/).',
        'score': 0.67,
        'scoreDisplayMode': 'numeric',
        'displayValue': 'Potential savings of 47 KiB',
        'details': {
          'type': 'opportunity',
          'items': [
            {
              'totalBytes': 37159,
              'wastedBytes': 26084,
              'fromProtocol': true,
              'isCrossOrigin': true,
              'url':
                'https://blog.amp.dev/wp-content/uploads/2020/08/Asset-2-80-300x150.jpg',
            },
            {
              'url':
                'https://blog.amp.dev/wp-content/uploads/2020/07/Asset-1-80-300x150.jpg',
              'wastedBytes': 22181,
              'totalBytes': 33542,
              'fromProtocol': true,
              'isCrossOrigin': true,
            },
          ],
          'headings': [
            {
              'key': 'url',
              'valueType': 'thumbnail',
            },
            {
              'valueType': 'url',
              'key': 'url',
              'label': 'URL',
            },
            {
              'key': 'totalBytes',
              'valueType': 'bytes',
              'label': 'Resource Size',
            },
            {
              'key': 'wastedBytes',
              'valueType': 'bytes',
              'label': 'Potential Savings',
            },
          ],
          'overallSavingsMs': 450,
          'overallSavingsBytes': 48265,
        },
        'warnings': [],
        'numericValue': 450,
      },
      'uses-webp-images': {
        'id': 'uses-webp-images',
        'title': 'Serve images in next-gen formats',
        'description':
          'Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/).',
        'score': 0.67,
        'scoreDisplayMode': 'numeric',
        'displayValue': 'Potential savings of 55 KiB',
        'details': {
          'items': [
            {
              'wastedBytes': 30263,
              'fromProtocol': true,
              'url':
                'https://blog.amp.dev/wp-content/uploads/2020/08/Asset-2-80-300x150.jpg',
              'isCrossOrigin': true,
              'totalBytes': 37159,
            },
            {
              'isCrossOrigin': true,
              'wastedBytes': 26392,
              'totalBytes': 33542,
              'url':
                'https://blog.amp.dev/wp-content/uploads/2020/07/Asset-1-80-300x150.jpg',
              'fromProtocol': true,
            },
          ],
          'overallSavingsMs': 450,
          'overallSavingsBytes': 56655,
          'headings': [
            {
              'valueType': 'thumbnail',
              'key': 'url',
            },
            {
              'key': 'url',
              'label': 'URL',
              'valueType': 'url',
            },
            {
              'key': 'totalBytes',
              'valueType': 'bytes',
              'label': 'Resource Size',
            },
            {
              'label': 'Potential Savings',
              'valueType': 'bytes',
              'key': 'wastedBytes',
            },
          ],
          'type': 'opportunity',
        },
        'warnings': [],
        'numericValue': 450,
      },
      'server-response-time': {
        'id': 'server-response-time',
        'title': 'Initial server response time was short',
        'description':
          'Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).',
        'score': 1,
        'scoreDisplayMode': 'binary',
        'displayValue': 'Root document took 80 ms',
        'details': {
          'type': 'opportunity',
          'overallSavingsMs': -522.0070000000001,
          'headings': [],
          'items': [],
        },
        'numericValue': 77.993,
      },
      'uses-responsive-images': {
        'id': 'uses-responsive-images',
        'title': 'Properly size images',
        'description':
          'Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'details': {
          'overallSavingsBytes': 0,
          'type': 'opportunity',
          'items': [],
          'overallSavingsMs': 0,
          'headings': [],
        },
        'warnings': [],
        'numericValue': 0,
      },
      'long-tasks': {
        'id': 'long-tasks',
        'title': 'Avoid long main-thread tasks',
        'description':
          'Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn more](https://web.dev/long-tasks-devtools/)',
        'score': null,
        'scoreDisplayMode': 'informative',
        'displayValue': '10 long tasks found',
        'details': {
          'type': 'table',
          'headings': [
            {
              'key': 'url',
              'itemType': 'url',
              'text': 'URL',
            },
            {
              'text': 'Start Time',
              'key': 'startTime',
              'itemType': 'ms',
              'granularity': 1,
            },
            {
              'granularity': 1,
              'key': 'duration',
              'text': 'Duration',
              'itemType': 'ms',
            },
          ],
          'items': [
            {
              'startTime': 4037.7604157524224,
              'duration': 159.99999999999955,
              'url': 'https://cdn.ampproject.org/v0.js',
            },
            {
              'startTime': 1120.182003735818,
              'duration': 124,
              'url': 'https://amp.dev/',
            },
            {
              'duration': 93,
              'url': 'https://cdn.ampproject.org/v0.js',
              'startTime': 3911.7604157524224,
            },
            {
              'duration': 89,
              'startTime': 1031.182003735818,
              'url': 'https://amp.dev/',
            },
            {
              'duration': 76,
              'url': 'https://cdn.ampproject.org/v0.js',
              'startTime': 4257.760415752422,
            },
            {
              'startTime': 4414.760415752422,
              'duration': 69,
              'url': 'https://cdn.ampproject.org/v0.js',
            },
            {
              'url': 'https://cdn.ampproject.org/v0.js',
              'startTime': 4197.760415752422,
              'duration': 60,
            },
            {
              'startTime': 4483.760415752422,
              'duration': 59,
              'url': 'https://cdn.ampproject.org/v0.js',
            },
            {
              'duration': 58,
              'url': 'https://amp.dev/',
              'startTime': 925.1820037358181,
            },
            {
              'duration': 51,
              'startTime': 4363.760415752422,
              'url': 'https://cdn.ampproject.org/v0.js',
            },
          ],
        },
      },
      'network-requests': {
        'id': 'network-requests',
        'title': 'Network Requests',
        'description':
          'Lists the network requests that were made during page load.',
        'score': null,
        'scoreDisplayMode': 'informative',
        'details': {
          'items': [
            {
              'url': 'https://amp.dev/',
              'resourceType': 'Document',
              'finished': true,
              'mimeType': 'text/html',
              'endTime': 76.99700001103338,
              'resourceSize': 187538,
              'transferSize': 34289,
              'statusCode': 200,
              'startTime': 0,
            },
            {
              'url': 'https://cdn.ampproject.org/v0.js',
              'finished': true,
              'resourceType': 'Script',
              'resourceSize': 269139,
              'startTime': 93.17300000111572,
              'endTime': 114.76900000707246,
              'mimeType': 'text/javascript',
              'transferSize': 74497,
              'statusCode': 200,
            },
            {
              'mimeType': 'font/woff2',
              'url':
                'https://amp.dev/static/fonts/noto-sans-v7-latin-regular.woff2',
              'startTime': 93.566000010469,
              'endTime': 108.48600001190789,
              'resourceSize': 9944,
              'transferSize': 10461,
              'resourceType': 'Font',
              'finished': true,
              'statusCode': 200,
            },
            {
              'endTime': 147.72400000947528,
              'finished': true,
              'startTime': 94.04000001086388,
              'resourceSize': 9716,
              'url':
                'https://amp.dev/static/fonts/noto-sans-v7-latin-700.woff2',
              'mimeType': 'font/woff2',
              'transferSize': 10233,
              'resourceType': 'Font',
              'statusCode': 200,
            },
            {
              'url': 'https://amp.dev/static/fonts/poppins-v5-latin-700.woff2',
              'finished': true,
              'transferSize': 8349,
              'resourceSize': 7832,
              'endTime': 143.05300000705756,
              'statusCode': 200,
              'resourceType': 'Font',
              'mimeType': 'font/woff2',
              'startTime': 94.22900000936352,
            },
            {
              'url':
                'https://amp.dev/static/fonts/fira-mono-v7-latin-500.woff2',
              'finished': true,
              'resourceType': 'Font',
              'statusCode': 200,
              'startTime': 94.61300000839401,
              'mimeType': 'font/woff2',
              'endTime': 125.46200001088437,
              'resourceSize': 16632,
              'transferSize': 17150,
            },
            {
              'statusCode': 200,
              'resourceType': 'Script',
              'transferSize': 5583,
              'url':
                'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js',
              'startTime': 109.95800000091549,
              'mimeType': 'text/javascript',
              'finished': true,
              'endTime': 117.46100000164006,
              'resourceSize': 11606,
            },
            {
              'finished': true,
              'transferSize': 13913,
              'resourceType': 'Script',
              'statusCode': 200,
              'startTime': 110.22300001059193,
              'mimeType': 'text/javascript',
              'url': 'https://cdn.ampproject.org/v0/amp-consent-0.1.js',
              'endTime': 126.89900000987109,
              'resourceSize': 39989,
            },
            {
              'mimeType': 'text/javascript',
              'endTime': 125.96200000552926,
              'url': 'https://cdn.ampproject.org/v0/amp-geo-0.1.js',
              'resourceType': 'Script',
              'statusCode': 200,
              'startTime': 110.45500000182074,
              'transferSize': 6153,
              'finished': true,
              'resourceSize': 11275,
            },
            {
              'transferSize': 31220,
              'mimeType': 'text/javascript',
              'resourceSize': 98441,
              'url': 'https://cdn.ampproject.org/v0/amp-analytics-0.1.js',
              'finished': true,
              'resourceType': 'Script',
              'statusCode': 200,
              'endTime': 122.07100000523496,
              'startTime': 110.67900000489317,
            },
            {
              'finished': true,
              'statusCode': 200,
              'resourceSize': 124386,
              'endTime': 124.60999999893829,
              'url': 'https://cdn.ampproject.org/v0/amp-animation-0.1.js',
              'resourceType': 'Script',
              'startTime': 111.02500000561122,
              'mimeType': 'text/javascript',
              'transferSize': 32796,
            },
            {
              'statusCode': 200,
              'mimeType': 'text/javascript',
              'transferSize': 14222,
              'resourceSize': 35084,
              'resourceType': 'Script',
              'startTime': 111.26099999819417,
              'url': 'https://cdn.ampproject.org/v0/amp-mustache-0.2.js',
              'endTime': 118.40200000733603,
              'finished': true,
            },
            {
              'startTime': 111.56400000618305,
              'resourceSize': 41100,
              'endTime': 119.70400001155213,
              'url': 'https://cdn.ampproject.org/v0/amp-list-0.1.js',
              'resourceType': 'Script',
              'statusCode': 200,
              'transferSize': 14187,
              'mimeType': 'text/javascript',
              'finished': true,
            },
            {
              'statusCode': 200,
              'transferSize': 10838,
              'startTime': 111.7460000095889,
              'resourceType': 'Script',
              'url': 'https://cdn.ampproject.org/v0/amp-autocomplete-0.1.js',
              'endTime': 121.19299999903888,
              'resourceSize': 28380,
              'mimeType': 'text/javascript',
              'finished': true,
            },
            {
              'statusCode': 200,
              'resourceSize': 49155,
              'finished': true,
              'url': 'https://cdn.ampproject.org/v0/amp-form-0.1.js',
              'resourceType': 'Script',
              'mimeType': 'text/javascript',
              'endTime': 123.0199999990873,
              'transferSize': 16437,
              'startTime': 111.94100001011975,
            },
            {
              'mimeType': 'text/javascript',
              'resourceType': 'Script',
              'finished': true,
              'endTime': 126.3489999982994,
              'transferSize': 9139,
              'resourceSize': 22752,
              'url': 'https://cdn.ampproject.org/v0/amp-lightbox-0.1.js',
              'startTime': 112.26600001100451,
              'statusCode': 200,
            },
            {
              'resourceSize': 49677,
              'transferSize': 17988,
              'resourceType': 'Script',
              'mimeType': 'text/javascript',
              'startTime': 112.422999998671,
              'endTime': 123.6650000064401,
              'finished': true,
              'statusCode': 200,
              'url': 'https://cdn.ampproject.org/v0/amp-bind-0.1.js',
            },
            {
              'resourceSize': 13522,
              'statusCode': 200,
              'startTime': 112.56100000173319,
              'mimeType': 'text/javascript',
              'endTime': 119.15100000624079,
              'finished': true,
              'url':
                'https://cdn.ampproject.org/v0/amp-user-notification-0.1.js',
              'transferSize': 6193,
              'resourceType': 'Script',
            },
            {
              'mimeType': 'text/javascript',
              'resourceType': 'Script',
              'url': 'https://cdn.ampproject.org/v0/amp-iframe-0.1.js',
              'startTime': 112.7320000086911,
              'finished': true,
              'transferSize': 10009,
              'endTime': 120.51200000860263,
              'resourceSize': 24039,
              'statusCode': 200,
            },
            {
              'transferSize': 15485,
              'finished': true,
              'statusCode': 200,
              'mimeType': 'image/webp',
              'resourceSize': 14988,
              'endTime': 129.47900001017842,
              'startTime': 113.2789999974193,
              'url':
                'https://amp.dev/static/img/case-band-image-2.jpg?width=330&hash=33e5e2d61e897ee4dc33b6f74f25fdb7207681f9',
              'resourceType': 'Image',
            },
            {
              'endTime': 504.68800000089686,
              'url':
                'https://amp.dev/static/img/case-band-image-1.png?width=270&hash=ae5b590ed0ec6bd943c89ade636ed3bb4f23a439',
              'transferSize': 11498,
              'mimeType': 'image/webp',
              'startTime': 457.64200000849087,
              'finished': true,
              'resourceSize': 11002,
              'resourceType': 'Image',
              'statusCode': 200,
            },
            {
              'finished': true,
              'resourceType': 'Image',
              'resourceSize': 22834,
              'transferSize': 23329,
              'startTime': 458.0360000109067,
              'statusCode': 200,
              'url':
                'https://amp.dev/static/img/case-band-image-5.jpg?width=560&hash=3530d3ec7ab20242dc2eb32ac2603896fcf8d359',
              'endTime': 479.91900000488386,
              'mimeType': 'image/webp',
            },
            {
              'finished': true,
              'mimeType': 'image/webp',
              'resourceSize': 36274,
              'resourceType': 'Image',
              'url':
                'https://amp.dev/static/img/case-band-image-4.jpg?width=330&hash=1130d8f01b674fb0f2a505cf422cd8d208623024',
              'transferSize': 36771,
              'startTime': 458.35500000976026,
              'statusCode': 200,
              'endTime': 480.6079999980284,
            },
            {
              'resourceType': 'Image',
              'resourceSize': 10296,
              'statusCode': 200,
              'mimeType': 'image/webp',
              'startTime': 458.78100000845734,
              'endTime': 509.33200000145007,
              'url':
                'https://amp.dev/static/img/case-band-image-3.jpg?width=330&hash=104d3cb8772292735d6b30dd42e3af908d95df6f',
              'transferSize': 10793,
              'finished': true,
            },
            {
              'url':
                'https://amp.dev/static/img/case-band-image-6.jpg?width=270&hash=fcda4134a5fe4b06b8c501612ecb066642b846f0',
              'mimeType': 'image/webp',
              'transferSize': 9568,
              'resourceSize': 9072,
              'startTime': 459.18400000664406,
              'finished': true,
              'endTime': 510.3730000118958,
              'statusCode': 200,
              'resourceType': 'Image',
            },
            {
              'transferSize': 37808,
              'finished': true,
              'statusCode': 200,
              'endTime': 505.39500000013504,
              'resourceType': 'Image',
              'mimeType': 'image/jpeg',
              'url':
                'https://blog.amp.dev/wp-content/uploads/2020/08/Asset-2-80-300x150.jpg',
              'resourceSize': 37159,
              'startTime': 459.54100000381004,
            },
            {
              'statusCode': 200,
              'mimeType': 'image/jpeg',
              'startTime': 459.71300000383053,
              'url':
                'https://blog.amp.dev/wp-content/uploads/2020/07/Asset-1-80-300x150.jpg',
              'resourceType': 'Image',
              'resourceSize': 33542,
              'transferSize': 34191,
              'finished': true,
              'endTime': 503.55800001125317,
            },
            {
              'startTime': 459.95100001164246,
              'transferSize': 59573,
              'endTime': 466.15200000815094,
              'finished': true,
              'resourceType': 'Image',
              'mimeType': 'image/webp',
              'statusCode': 200,
              'resourceSize': 59076,
              'url':
                'https://amp.dev/static/img/component-visual-site.jpg?width=470&hash=0ae2ab2813772ebfd1e3b935dfe23c8037201db5',
            },
            {
              'startTime': 460.0910000008298,
              'finished': true,
              'url':
                'https://amp.dev/static/img/component-visual-nav.jpg?width=330&hash=a38aed562af191b3484a0644019da6360f3ce43e',
              'endTime': 474.874000006821,
              'transferSize': 9828,
              'resourceType': 'Image',
              'mimeType': 'image/webp',
              'statusCode': 200,
              'resourceSize': 9334,
            },
            {
              'endTime': 467.82099999836646,
              'mimeType': 'image/webp',
              'transferSize': 3161,
              'startTime': 460.4120000003604,
              'statusCode': 200,
              'url':
                'https://amp.dev/static/img/amp-stories-base.png?width=560&hash=a805112175bae5252b5f53b83734db8b7358f4da',
              'resourceType': 'Image',
              'finished': true,
              'resourceSize': 2666,
            },
            {
              'transferSize': 47417,
              'statusCode': 200,
              'resourceType': 'Image',
              'startTime': 460.79399999871384,
              'url':
                'https://amp.dev/static/img/amp-stories-monde.jpg?width=680&hash=016e3ef1b6015c36dbbf4d84861c5807fb29bab2',
              'finished': true,
              'endTime': 519.2000000097323,
              'mimeType': 'image/webp',
              'resourceSize': 46920,
            },
            {
              'transferSize': 20244,
              'resourceSize': 19748,
              'startTime': 460.9810000110883,
              'mimeType': 'image/webp',
              'statusCode': 200,
              'finished': true,
              'url':
                'https://amp.dev/static/img/amp-ads-bottom.jpg?width=470&hash=a27af8ab46938ad00508cd8e8143cc28babeb108',
              'endTime': 469.61600000213366,
              'resourceType': 'Image',
            },
            {
              'resourceType': 'Image',
              'transferSize': 14617,
              'finished': true,
              'statusCode': 200,
              'startTime': 461.1270000023069,
              'url':
                'https://amp.dev/static/img/amp-email-base.jpg?width=470&hash=3f6ec6237880d3b02190238fcc457bb17f61e92b',
              'resourceSize': 14120,
              'mimeType': 'image/webp',
              'endTime': 470.3390000067884,
            },
            {
              'statusCode': 200,
              'endTime': 643.342000010307,
              'startTime': 630.0410000112606,
              'resourceType': 'Fetch',
              'resourceSize': 47881,
              'transferSize': 15411,
              'finished': true,
              'url': 'https://cdn.ampproject.org/rtv/012007302351001/ww.js',
              'mimeType': 'text/javascript',
            },
            {
              'endTime': 634.9900000059279,
              'finished': true,
              'url':
                'https://amp.dev/search/latest-query?__amp_source_origin=https%3A%2F%2Famp.dev',
              'mimeType': 'text/plain',
              'transferSize': 0,
              'resourceSize': 4,
              'statusCode': 200,
              'startTime': 630.2080000023125,
              'resourceType': 'Fetch',
            },
            {
              'resourceSize': 1942,
              'statusCode': 200,
              'finished': true,
              'mimeType': 'application/json',
              'url':
                'https://amp.dev/search/highlights?locale=en&__amp_source_origin=https%3A%2F%2Famp.dev',
              'transferSize': 1208,
              'resourceType': 'Fetch',
              'endTime': 651.5490000019781,
              'startTime': 632.7080000046408,
            },
            {
              'url':
                'blob:https://amp.dev/5607df76-fdf1-4b3a-bfd1-9e9897acf919',
              'finished': true,
              'startTime': 711.8200000113575,
              'endTime': 720.9100000036415,
              'resourceSize': 47948,
              'transferSize': 0,
              'mimeType': 'text/javascript',
              'statusCode': 200,
              'resourceType': 'Other',
            },
            {
              'startTime': 727.7330000069924,
              'endTime': 735.4790000099456,
              'resourceType': 'Script',
              'url':
                'https://cdn.ampproject.org/rtv/012007302351001/v0/amp-auto-lightbox-0.1.js',
              'mimeType': 'text/javascript',
              'transferSize': 4204,
              'resourceSize': 7269,
              'statusCode': 200,
              'finished': true,
            },
          ],
          'type': 'table',
          'headings': [
            {
              'key': 'url',
              'itemType': 'url',
              'text': 'URL',
            },
            {
              'text': 'Start Time',
              'key': 'startTime',
              'granularity': 1,
              'itemType': 'ms',
            },
            {
              'granularity': 1,
              'itemType': 'ms',
              'text': 'End Time',
              'key': 'endTime',
            },
            {
              'itemType': 'bytes',
              'granularity': 1,
              'text': 'Transfer Size',
              'displayUnit': 'kb',
              'key': 'transferSize',
            },
            {
              'itemType': 'bytes',
              'displayUnit': 'kb',
              'key': 'resourceSize',
              'granularity': 1,
              'text': 'Resource Size',
            },
            {
              'text': 'Status Code',
              'itemType': 'text',
              'key': 'statusCode',
            },
            {
              'itemType': 'text',
              'key': 'mimeType',
              'text': 'MIME Type',
            },
            {
              'key': 'resourceType',
              'itemType': 'text',
              'text': 'Resource Type',
            },
          ],
        },
      },
      'uses-text-compression': {
        'id': 'uses-text-compression',
        'title': 'Enable text compression',
        'description':
          'Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://web.dev/uses-text-compression/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'details': {
          'headings': [],
          'items': [],
          'overallSavingsMs': 0,
          'type': 'opportunity',
          'overallSavingsBytes': 0,
        },
        'numericValue': 0,
      },
      'uses-long-cache-ttl': {
        'id': 'uses-long-cache-ttl',
        'title': 'Uses efficient cache policy on static assets',
        'description':
          'A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'displayValue': '0 resources found',
        'details': {
          'type': 'table',
          'summary': {
            'wastedBytes': 0,
          },
          'headings': [],
          'items': [],
        },
        'numericValue': 0,
      },
      'first-meaningful-paint': {
        'id': 'first-meaningful-paint',
        'title': 'First Meaningful Paint',
        'description':
          'First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://web.dev/first-meaningful-paint/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'displayValue': '1.0 s',
        'numericValue': 973.1820037358181,
      },
      'third-party-summary': {
        'id': 'third-party-summary',
        'title': 'Minimize third-party usage',
        'description':
          'Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).',
        'score': 1,
        'scoreDisplayMode': 'binary',
        'displayValue': 'Third-party code blocked the main thread for 110 ms',
        'details': {
          'type': 'table',
          'headings': [
            {
              'text': 'Third-Party',
              'key': 'entity',
              'itemType': 'link',
            },
            {
              'key': 'transferSize',
              'granularity': 1,
              'itemType': 'bytes',
              'text': 'Transfer Size',
            },
            {
              'itemType': 'ms',
              'text': 'Main-Thread Blocking Time',
              'key': 'blockingTime',
              'granularity': 1,
            },
          ],
          'summary': {
            'wastedBytes': 282790,
            'wastedMs': 105.156,
          },
          'items': [
            {
              'blockingTime': 105.156,
              'mainThreadTime': 1660.0160000000005,
              'entity': {
                'type': 'link',
                'url': 'https://amp.dev/',
                'text': 'AMP',
              },
              'transferSize': 282790,
            },
          ],
        },
      },
      'screenshot-thumbnails': {
        'id': 'screenshot-thumbnails',
        'title': 'Screenshot Thumbnails',
        'description': 'This is what the load of your site looked like.',
        'score': null,
        'scoreDisplayMode': 'informative',
        'details': {
          'items': [
            {
              'data':
                'data:image/jpeg;base64,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',
              'timing': 300,
              'timestamp': 121775991229,
            },
            {
              'timing': 600,
              'timestamp': 121776291229,
              'data':
                'data:image/jpeg;base64,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',
            },
            {
              'timing': 900,
              'data':
                'data:image/jpeg;base64,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',
              'timestamp': 121776591229,
            },
            {
              'timestamp': 121776891229,
              'data':
                'data:image/jpeg;base64,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',
              'timing': 1200,
            },
            {
              'timing': 1500,
              'timestamp': 121777191229,
              'data':
                'data:image/jpeg;base64,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',
            },
            {
              'data':
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APzXp2YBRZgFFmAUWYHo/wAJf2fvGnxrstbvvC+nwz6dohgGpXlxdRwpbCUSeWcM258+U/EasenHIyWYGn4n/Zm8VaFqn2DS7vSPGT/aLyE3Xhq7+02oW1s7O6mk81lRdoW+iTHXerrjO3cWYFeL9mzxuLHWLy6s7axttHv9T0u+kluFcQ3djYy3s0IKbg7GO3mAKFlDKAxUMpJZgWIv2WfiLf6fZahpmjwanp12beOO7jv7eJBJLpiamEbzXUrttX3MxG0EYBJIyWYE/g79lnxh4xn0OFLnSdKk1q8gtLE3902yVZYndJ/MiSRBHuVYT827zZFTbndgswMy3/Zu8fNpNxqF5o/9jxw28l00GpSCGcxxw6jLIfK5ZSo0m8Xa4U5VeMNmizA5HxH4B17wla29zq1pBZxXGPKR72AzsN0i58kOZAN0T8lcYKMcCRNxZgc/RZgFFmAUWYBRZgd6fgrrS9bqw/7+v/8AEV+svw2zCMeZ1qaX/b3/AMifBLi7By2pP7l/maifs3+MXgvZhBD5dlIIbkkyDypCrtsYbOG2xSnHXEbH+E1w1+A6+HlCNXE0lz/D8VnblW6jbeUUu7aSudEOJ6FSMpRoytHfbT/ybyJbj9mHx3aXt3Zz6XJDdWmPtMMlvOrw5jaUbwYsrmNHcZ/hVm6AmqXAdZqMli6LUtrSvfXl0tHXXT1B8TUYtp0Jab6Ltfv2J7X9lb4gXmvjRE0spqv2mCza2njliaOaY4iRy0YCFz03EZ59K5avBnsaLryxlHlXaTbt6KLf4GkOI6dSSjHDyu/Jf5m54c/Zr+MdnNe6RokeqadJM0cl1aW011biRondot67QGZZIJSoPzBomxypqa3B3sI808ZRt5Nvz6Rf9Ndx0+IYVZqnDDyu/Jf5mvP8Kv2g7nX5jcaz4nk1fVbY3EwuLy9M13BcNDbb23LuZJGit4snhvLiXkKoCnweqaTljKNruO73UeZr4dGl366b6DjxDCbSWHlqk9ls3Zde5Z/4Vx+0lZag2pxeIvGUN80qQveQ6hqHnLK0n2dY3cDcHZ1Ee1juJ2j+7W/+pEuZx+uUbrX4nqrKV17uq5XdtXSV29mTHiKEnaOHm/RJ9bd++hnT/Bn49weLbS+nu/FKeKbyWR7W6kuNQF9NIlv5chjcrvYrBhGxnCcHiqjwPOUZTjjKHLG13zaK7srvltq9F3IlxLSg0pYeabv9ntv16F7/AIUZ+0QkOmbdR8TkXEUDWUaX96X2RPJLAqqBuGx7KSVFIyPIDgcKa5FwjBycPrtHS3V215evLb7Ueul9dnbf+342v9Xl9y6Xf8391/d6FHT9E+O95LcanZ+NvEM0zAxzXkOsXpfECSy7WYdkWW4fB6B5SOrV2VOBa1Gs6FTE0lJJPeW0pcqd+W2r03OdcTUZQVRUJWbtst7X79jM1v8AZ6+LHiKaCy126luJtK064a3tdZv5FeC0tWcTJEswB2xtHKPLToUfC/KcctLg6VeMZ0sTTcZNRTtO15Wsm+Sy3W9t1fc6ZZ/CLadCV9f5ejs/tdDIuP2VfHlrb280tnbqs/nFF81i4EUCTyFl27lAikR8sANrA0Lg5ucaf1qleTSXx6tycLL3N+ZNeTTuZf6x0+VT9hKzV72W1lL+bs0/QLz9lP4iaffWdld6LPaXd66R20M9vPG07OwVAgMQ3biQBjrkYrd8EyVOdX65Raim3aTdkt9FFvS6+9B/rHT5lB4ed9tl1v5+T+4x5vgJ4lt757KX7NFeJIYnt3MiyK4OCpUpkEHjHXNejHw3x04qca1Ozs09bWauvs9jlfFuEUnF0pXXkv8AMt6/+zb4z8J3v2PW7NdHvMBvs9+k0EmD0O1owcH1rHD+HuKxcPaYfE0px7ptr8IjqcV4alLkqUZJ+aXX5nstva6naSb4be7ifGCUicEj06V/SFRQqx5Z2+9H5KoyjqjsPh/r+r2etnSb+W5tPD/iC+gTWp206O4lEZLxvLG0kbmOQR3E+GTn5z16V4ObYKjPC+1oU06lGLdP3mkno7NJ+8rxi9b/AAq6tc9XCYmUKnLObjCT97bbW+/Wz08zs9fuLe/utV1y08cX6apqmjxzXoOhqjS3yJb3JiUxbVUPcll81U3bhJu3KXlf4iMMRKpQpVMJ7lKrJLWXLyN8qvdyk+Vaq8uRWVo7Jev7eklVmsRdyiuieqavbXy7alqx8TXbahPc/wDCfS2DQ3WlXwmTwbCpM0TFFEezkQ2yRRbY+EJc4jUBmrieB5o+/l93aX26ln7l1dOSvJybu9/O9mbrFRUpN4i2z2jvdfkl9/3nSaN4wvdC1K5gufieksFlp0Mtg2maAqMb799stow1q263jUuoB8tENz8oAUg5rL+d028v5feal787pe6uZtz3lz3vr8FtttFi4UnK2JWiTT5Y7u/919in408a6bpj3ev6R4o1fVfE0ENpDpph0+3CpH9vuL0GZPsyhpEaK0aRwdxllkOZEO2urLMDjasKODqYdQpyk5TTcrfBCnJ3521zRlOy2SS2abeeJxGFjecMQ72stI7XbX2e6jf5/NdV1LRrXxNok+i+NtQi0/w7c2X2KO/0r7TuVL1gWaSJLdiqwRwTFAGJMmwtkZrnp4Wv9TVKWDTdSM7v34tLkg0ldz5XfmjG+/LqrsmpVpOr/H+FrpF68zteyjpZ3e+rfkVL7W01bVbLU7rxrDpOpadNK2nR+HdBENtpri6gtl8old0sQtIw6o+3hY13bg4rojQr4XCTw8sLzxmlzc0pOUuaNSpq01Z+0sny3vK61TQ/bU6tRVlXSavZJJJX5Yuybd7q61fY6HxJcXOv+Vd+IPjLcv8A2tbyQpJ/wiYJkskl1G0DAKRtwk9ySGCnFwQpkKpjhw6nQjONHLUnFr7ctJfu5Pd63ai0tbW10dntXnezqYm901tHqpJ7PtJ6769HY4jw14iNpavp8ni7Urea21bS7q1vDpEaW8Mhlma5uXg8tzP5fnlNu5GkDjIKRhR7ONwU61Knip4VSlOE3Jc1RuyilCOktL6Pb7O922efh8VSUpUfbWin7uket7t6Pq3/AFoq+txz3/hyHSp/iJc3Hk6HcM9g+lSfZkLzi5ktI5ASTK86xkuUX5UGWIASqwcp0MT+6y9KPOrS96+nNFN3eyhe2rXM07PcrE1YVafNUxF5W8rdG9Ulq5W6bX1L+ure29teayPFt14g0iC5vtLt3t9GSzmuDPpCQh0VtwKFIlhfJ3KoVl+aTI4o0KmIrJRw0adblU025tL962rq+rUm5K6afbotp1VTptwruUG+W3u63il30XKkn2tpfc4nUPi/8QtUlilubhnmimjuI5RpMCvHKk7XAdCIsqzSsZHYYMjff3V93T4eyulHkhTsrNfHJ3TVrP3tlFJLe1tEjw5Y7Ezlzyavo9o7q7T28395nfDjWpfCfxP8OeJb/Sp5LWw1eDULiCzswmVWYOwjjAVFPB2qNqjgcCujNsF9ayurgsPPlbjyrW9tLWvq2mvdbd9HcjC1lSxcMRWXMk7v/hl957D+2L8XNE+MuqeHF8O2mqXr6Wk/2jU7yyELTCYo6xKoAbbFhkBYevLZ3t8hwPkmMySjXWMaXO42indKyab3t72l+vklova4hzChmVWDw+tk7tq2+y+Wx+mWrapa6JpV5qN9MlvZWkL3E8zn5UjVSzMfYAE1/NNCjPEVI0aSvKTSS7t6I/ZalWNKEpz0SV36HyG3/BRPTDrkzJ4Nlk8Jx6gtkNY/tALLIjbiJVt2iBPyqWKhuMqCQWFfqS8PcW6C/fx9u1zKC2sunO2tflZ62bs7fDf610FUb9n+7Ttzdfut+p9M6x8SvD2h+BoPF9xeF9CuI7eWC5t4XlaUTsqw7UUFmLF0wAM81+b08uxU8VLAqL9om1a+3L8Wt7aWbvc+vnjqEMOsVKT5LJ/f5b/cY+p/HbwTo9zLBc61Erpof/CRqwR2WSwyR5qsBhs44UHcR2rrpZDmOJgp0qTadT2a1Xx6Ozu9NdG3ourOatm+Dw8uSpUs+Xm+XS3Rt9tyjpP7SHgPWdesdHtdUnNzemzWF3sZ1iL3UH2i2QyFNoZ4vmAJHQjqMVVbIcyw9F1p0/di5J+9Fu0JKEna7btJpfO/RhRzTCYipGjGTbla2j6rm/I9SjG9Q2cZrwbXPWXkHlZHUflTtsx+jYCHnkg/hSaurBd3vcUx5HBxSUIroD1EMXHBA/CqD5iGHJHI/KmLW97nK+Kvib4d8F3GoQandzpNp+mnVrtbaxnufs9rvCCWQwo2wFt+0NgsIpmUFYZCqs+g1dHWngE+lMdzy+T47WgJX/hHL/8A8G2j/wDydQJ6qzO68L65H4l0a21GO2e0WcMRBLNDK64Yry0MkkZ6fwsffByArIEHi/w1a+MfCes6Del1s9UsprKYxkBgkiFGIzxnBOK68JiamCxFPFUleUJKS9U7r8jmxVFYmhOjJ2Uk1deasfBqfsZfGGxiuPh5BrVmPAN3qK3lxqMU4VJVVgEdoMhzIFySmShKxjf8isP2l8b5JVrrNJ0JPERhy26X/wAW1t9VFOzfc/OXw3j+WWF50qblzX+TW3562PrLXvgJYa/4E8DeEZtVvodK8LyW0qPbStDPcNbwNHCfMQgoQzLJkd0GMdR+Y0c+nSx2JzD2ac63Nvqo87vLS2qaute59jVypVsLSwvtGlC2q3dr/rqcPbfseac//CNDVPEVxrB8Pmxjs5Z7RPNa3tbi7lS3dtxBjKXMcZAAyIEPtXo1OK68farDx9mqjk5ddZqN7aLrG8equ1u7nmPh6M1B1puXKklor+621fXzs9tkdP8ACn9mzRfh3r0+s3Ulrr9/9k021s7i509FlsjaWS2peNyWIMgQE4xjOOetcOa8QYjM4OjFOEJTqTklLRucuaz0V+V7N+vkvSweT0cJP2s/elaMU2ldcqtpvv1PZ41CIAK+WTue+OpgFABQAUAFAHDeOPhJpfja8vL77fquh6hfae2k3l5ot4beW5tSH2xvwRlGkdkcAOhd9rAO4YA63So76LS7SPU57e61FYUW5ntYGghllx87JGzuUUnJCl2IBwWbGaAPmOP/AIJ5eBkjVRrlyABj/kUfCf8A8pqAPfvhh8PLH4VeB9M8L6bO9zZ2AkEcr2lpaFt8ryH91aQwwry5HyRrnqcsSxAOkaOUg/vMceg/woA+J/2mf2iPiH8PPjDquiaD4jNjpcEUDxwfYraXaWiUt8zxknJJPJr9T4ayTAZjgnWxMLy5mt2tLLs0fj3FWf5jlmYOhhKnLGye0Xve+6bPL1/a9+LZHPi3I/7Btp/8ar6Z8K5Pr+6/8ml/mfGvjHPP+f3/AJLD/wCRJV/a6+LGf+RsP/gttP8A41WL4XylbUv/ACaX+Zk+Mc8/5/L/AMBh/wDIkqftb/Fgn/kbP/Kdaf8Axqs3wzlT/wCXb/8AApf5ifGWer/l/wD+Sw/+RJo/2tviuOD4rz/3DrT/AONVm+G8r/59/jL/ADMnxnnq2r/+Sw/+RJU/a0+Kx6+Kj/4LrT/41WT4dytf8u/xl/mQ+Nc+X/L/AP8AJYf/ACJKv7WHxVP/ADNR/wDBdaf/ABqsnw/li/5d/jL/ADIfG2fr/l//AOSw/wDkSUftXfFPv4p/8p1r/wDGqylkOXL/AJdv75f5kPjjP/8An/8A+Sw/+RJU/ar+KTD/AJGjP/cPtf8A41WbyLL/APn3+L/zM3xzxAv+Yj/yWH/yJIv7VHxQPXxP/wCU+1/+NVi8jwPSH4v/ADI/164g/wCgj/yWH/yJKv7UnxPI58T/APlPtf8A43WbyPBfyfi/8yHx3xD/ANBH/ksP/kSRP2oviacZ8Tf+U+1/+N1k8mwS+x+L/wAzN8ecQ/8AQR/5JD/5ElX9p/4mH/mZf/JC2/8AjVZvJ8H/ACfi/wDMj/X3iL/oI/8AJIf/ACJMv7TfxJPXxKc+n2C2/wDjVZPKcIvs/i/8zJ8fcR/9BH/kkP8A5E+8T0r8/P68ex+a/wC2i2P2hdfP/TC1/wDRCV+48Fq+WS/xv8kfgXHH/I0f+GP6nikTEjjmvuHHU/OXF9CVeBnoK5ZTgrJyXvbeel9O+mvpqL2c2m1F6b+XT89CcOEbaeDjODXFPE4eOkqkV80UsJiJx5o021vs9u/oX47K6fTXvxbTGwSUQNdCM+UshBYIX6BsAnHXANPmhKXs07yte3W3e3bzOZ4er7P23I+W9r2dr2va+17a27CIxJ45xUuN9jlasTo+SB0Occ+tYOF3ZbmbgyZJMnb3HOKxcG9UZOLSuXJ7O5sTF9ot5YPNjEsYlQrvQ5wy56g4PPtXGpQlzcrTs7PyfZ+YVKNSml7SLV0mrq109mu6fRgrZ5FKUbI5WmiZZOa55RM2icPz1rGUTKxOj/nWDjqZuJMj1hKJi0fqMelfkh/fbPzT/bRbb+0Nr/8A1wtf/RCV+78Eq+Vy/wAb/JH4Jxur5n/27H9TivgpqHhrRviFp+seKrjy9K0oNfrAIXke5mjGYolC8ZL4PzELgEE819DnFPE1cJOjhI3nPTdKy6v7u2up8nlTw1PFwq4x2hHW2vvNaqOie772Xdnu1h8U/hhqkfj1NS1maBPGGm6cly8mlMrx3ytMks/lR7lG0+VcECQ5LsAxbgfCPLs3w0MNyUrug5/aXvRsmldtPZOKulbsfZPH5RiXifaVXGOIjC/uu8ZJu7sk1ulOyb3tubV7+0V4I8P2OqPod7dz/ZtM0ez06xs3ms5ZVtb26byjMYmAAheLdkYcMyg5zjyaPDmOni4qulZt3k+WSvKC15eZP4r27WuenW4ny/6lJ021L3LRi3F2jOWl+Vr4bc3e9jg/h18S/BdxLfSeKo7S2tb3xQ+qnTHs3nhjha1uwoxsZcJLLEMYPTO0gGvWxeUY2mvZ0HzWpKN7rVqSb69k7drJXPnsNm+U1v3uMppN1nNxSuuVwaV+6Ttpo+tmtCrY+I/h/b/EjxjcQNpiWFwgOj3d3pEj2ER3oZAbXDPkrvVTwAeQFBAXurUcxngKUXfnVlJcyu9/tWtba6tqrq/U8CjUyuGYV5Nr2bT5G4txvdXfI3ezV1FXXK2npbS6viz4bDxt47uGsbF9ME0Op6DmwbyZZYNxFoY9gKxylxuztXCDOeK4PqeavC0KTk+Z80ZvmTaTldS87LZJt200PVli8kljMTV5V7NOM6as0pOEWuVrpGTkrp6Pl21udN4d8Z/CKy8ZauJ7TT5dKVYjZ3NxpjGJke4nmmTyzE53qssMKkqMiDh0BrzsRgs2lh6fJJ8yb0UkmrcsU732aje3na1zowmP4dhjKsq0Vyacr5bpptzlG1rppy5IvtBWaW+b4z8e+C9c+GdlaR3FjdX9v4fs7GG3ewk+3w3KTgnFyY9vlqm7KgjdzjrXVhMHjMPjnOUXyc8m/eVmmusd7vTXyOPM8wyyvlkaSlF1o06cfglzKSa2nokkrprl16NniHmHdnr9K+l5Ixjyx2/rzZ+XNK1kSq2RWbSMWiZX96wlEzaJ0fJ61jJGTROjcVzyiZNH6mHoa/Hj+9z8z/21mx+0Pr3/AFwtf/RCV+98Dr/hLl/jf5I/B+NV/wAKb/wx/U4T4QeAYviR4rk0ye8ltooLK4vmjtIvOurkRIXMNvHkb5WxwCRwCe2D9BnePlluFdeEbttLV2SvpdvtY+VynAxzDFKhUk1GzbsrvRXsl3bPUNF/ZqttUtdVeS61zTJluZ7e2GoabHHHYiK0jut2oMsreSHWTYuMnOGPXaPkKvEdZ1IRcIO6TlaV+ZuXLaHp12Poo5BRdKpU55Jpy5bxUbKMea8+13otyTw78B/Cmt2VpKfEWsW86jRPtsS2MTqG1GFTEIn8wZ2u2WLLwvADEc4/23j58zp04JP2lr32p2b6eegPI8vjCHtKkua1PmSS3qq9tX0tr28zRuv2X7S08Mz3R1TUW1CCPV2kuUs1OnRmxuJYyZpC26MSCP5R8xySeQpB53xHW1koxUUoafafPFPRfPuXPheilyKUnO1S0uVcidNtLmd9LpW2d2N8Qfs36Z4durcT61qkMEU2oWV19s09YZpntbOS5NzapvIkt22heWByQMjPFUM7xldJRUJTag1Z6Lnmo8stNJeWvqc2I4dweH99zkoxc4yvFXbhCU+aOusdN9PNF3Tv2adHvZjM3iPU006+0/T77TXi0l7idftSzFftKRFgqqYGyVOOR8wPXjq57iYLlcY8ylKL135Wlp638iqXC+BrS92rLlnCEoaK651O3Nr3h0uc/J8LfC9hpFrcS6rqb3kOn6ZrN7AIIzF9luZYY5FjfcCZAZgRlQMDqSeOv+1MZ7Re7FKblFa9YrW+m1zyY5PgPq86sqkuaCpyl7qS5ZOKdnff3k/VHJ/FPRrHw18RvEOlaZbXVpYWl7JFDDdjDooPQZJJX+6SSSpUnrXs4CpOvhKdWo020r27nyea0aNDGVaVBNRUmknuv66eXzOaR+xrqaueK0So+DWLRm1cnVs9KxkkZNEyPjHpWEkQ0To4J96waMWj9Uz0NfizP7yPzL/bZbH7RWvj/p3tf/RCV/QHAq/4SpP++/yR+E8af8jN/wCGP6nA/Bz4bT/Frx9p/hmC/g00XId5LqYr8iIpYlULKZG4+6DnGT0UkfT5vj4ZXhJ4mcHK1tFfVt91e3q/TdnyeXYGWYYqGGjLlcupo2nwQ8bT2mmXf9lQpbajaPfW8suoWyL9nVd5lfdIPLQD+J9ozgZycVxyzzAqpOCm+aEuW3JJ63ta1tX5L5mv9j4uEITlFKM1zJ80Phs9dXorX3/MsWfwN8a3uqTWEWnW/wBqhlt4SsmqWaK8lxH5kKxs0oWQuoJAQnj8q5Kme5dCPtVUlb3vsy0tZO+mi16iWQ5hOr7D2a5vd05o/a1jbXXTsb2r+CvHetaH4a8P3emaZHYaJY3Vxa3qalbLE8L3e2UvcGUxblmcJtDBh/dPWvPhmOWUKlTEKpK82rqz1tFWsuW6VrO50VsrzPE0qdF0lanB2fNG1nN3bfNa/M2rbmOfgz41SO6YaI7m18vzkSeIupe5ltlG0NkkzQyLjtsJOF5ro/tjASulU6v7L6R5n9nblaafVuy1PO/sDHydlS3t1j1fL335k1bybeiNEfAbx6pIfQyGEvleT9stzN/rjAG8vzN2wyDb5mNncEjmsHnWBnJw9r0v8O6tzNXaSTtZ2vf8iXkWPhS+sOnZesf5uTZO9ubRNKz3ukbcn7Oniu18M6hfywrFqWn35tbywMsOy2iFuZ2nluBJ5aKoAB3EfeHOSAeGWfYT28YKTcZRUk7at35bKLV2338jofCmYexnLlXPCTjKN07WjzuTlflS23f4mZ4X+DmteMfB9prWivDe3Fxqj6ZHp3mxpKxWJZS4LOAQFJJHYKWPygka4jNKGFrvC1rrlipXs9E3bovu6N6I8/D5DisdhFisPyu8uRK6T0jzN6tdNddbXdkkc/4l8J6r4Pu7e21W2WCS4gS6gaOaOaOaF87XR42ZWBweQT0PvXRQxNHFKTpPZtapp/NM8PGYGtgnFVkrSV00001qrppvqn5majdq0kjzGiVHwc9qwkjNq5OjZ5FZSRk1YmWTFc8lYzaP1aPSvw97H92n5i/ttt/xkX4gH/Tvaf8AohK/oPgRXyp/43+SPwvjJf8ACk/8Mf1PMfhr4+1D4Z+MtP8AEulwW9xfWPmeWl2rNEd8bRncFZT0c9xzivscyy6lmeHlhK11GXVaNW1v+B8jgcZUy7ERxNK3NHa+qfkdRp3xz1y11jw/qJsNKuU0nQ10BbO6gaS3vLVd5xOhf5zmTdwQMqhxxXlzyTDOnVhKco89RzumuZSsvhdtvlfzOmeaVZVadSUIy9nDktZ8rjrur6vXy2Rp2Pxe8TeIfEUFza6VpX22zurHWRbwQGCIf2bauEG3eFCeUrEquM7QFxwK8aeT4HLsJKnXqy5WpRlqr3qNf3erjo/W9zoWZYvF42OKo0480eWSsna1NNLr2evytY09B+PHjX4WXek6a2lWdtLpFjcWwstQtJA0kVzMt1mRd4OQxRkIx8pHXJzzyyPLcwpupGrJ7Wd0muReza20+Gzune11YI5vjcFONOdONrJOLTaak/aJu0tXrfRqyIPDH7Rni3w1dWk6JYahPb6jPqRe6tiWlkkjlUo+xl/dqZ53VBgB5XPOcU6/DeDrtyvJc0Yx0drKNtVvq+VJvt0RlR4jxuFjCEVF8knLVXu3fR2tonJtLTV3H6V+0b4tsLKxhZ7G8vLV0H9q3VsGvp7dJhMLV58hmh8znaCCeRnGRSlw/gateddRa5k1bTlu48t0u9tt9e5yQz/F0cJHCxSsmtdXKyfMk3/LzXdt9XqWNL/aB1+0i1y1Ol6Te2WuavNq99Y3NvI8U8kysDER5gPlhnDqPvBkU7uK5qnD2Gm6cpSknCKindXik7p3tv8AhbSxrHiTGJVKbjFxqTlOStK0uaPK1a606rrzWdyLwh8XvE/wy0yXQbS1tIJLbUTeL9vtM3FtOE8qVcNjbuQGN1YdCcYPNa4rLMLmM1iJSfvRSuno1uvudvmjjwWeYzKYyoRhF2k5NSi3yu3K1ulZq8WnfTszE8ceP9R8f6vBe38NpaLa2yWdrZ2MAigt4VLFUReTjLsckk89cYFbYPA08FCUacnJt3blq2/wPGzLMKuYzhOcYxUYqMVFWSS+be927t6swkfP1rpkjxWiZH7HisZRMmiZHwc1g1qZtXJ0fIzWMkZNH6wHoa/CT+6T8wv23jj9o7xD2xb2n/ohK/obgJf8JL/xv/0lH4dxir5k/wDDH9Ti/gN8QtJ+GXxCt9e1jTTqMUNvMkDLEJWtpmXCTCNnRXxyMFhwxwQcGvpc/wAvxOZYGeGws+WTt6NX2b3S9O1tmfM5ViaWDxcK9aPNFdN35WT0vfue/eHf2svBGj+LtR1WHTtX0yyutVe8uLSz0q0f+0IjZxxL5rNKDE6zK8o8s4O45yWJr85xnCea1aVKCrQkoxSu5ysnzXdrJ393R36dNmvrsNnmXUZ1Oei1dvaMbtcrsnfa0rNW9HocPqXx18M3/gjw1pZtL6bUdK0q509nWzjRVMukyWhAdpmLKZijnasQIBZlZ+T1VeG8wnUxCp1I2qST+Kb2lfqu3q/M8+Gb4SPsHUg/di0/dir3jbo318l8+nfz/Hy0vfDPjXxjDZTrHY3Nlb+F576PbLb38tgbefpvRlVIjMEORkKSMvx5ryepSxVHASqfxFN1Ur25Iyc42fRu6WluvfXtp5lTqYSpjfZpulyKneyfO4KMtE2mlZtXv8unlei/FTRrH4L3HhA/2hZXUvnm4gtrS2lt9QkZ0aGaWWUM6eWFK7Y15CoQyHJr28wyXG4rHyxdOS5ZRajdzvF8rT5eVpO/eSdtzwMJmuDoYCOFlB80ZXdlC0/eTTbl7yt0Ssns2r3XfeGv2n9Kh8WeMdT1uxa5s9Ruwlhbx6TbMf7OEly5tpAHQKzGcEufMyd27dxXlV+G8R7ChToVEpR+J80/i0Sa0WyWi2O6hxBhliq9StBuE2lFKEPhXNdO/qrv3nZbq5mRfHzTNP8Ah7BpFi2oQahbW2nCysxp1qltZXEE8Ms0omB82TzWiLkMPvMQdwI26PIq7xir1JqVNuV/eleSask1eyaukrWutzh/t7CRy50KcGqiSt7sHFNSjJtOyl7yTvduzdlobWs/tF+HtU0Lx7ZG2u7yXxDeXU8bXenQqzI8EcduHdZsIYWU9FfcFU/KxNcdLJMVTq4eo5xUYJKyk+l27eppic8wVWhiacYScqkpO/LHVNaXd204tdFbvuz583DJr7xroj80kiRWwawcTJonSQN9awkjNonR/WsZRMmrEqPisGjOSP1nPQ1+Bn9yH5e/txtj9o/xEP8Ap3tP/RCV/RXh+r5Q/wDG/wD0lH4lxev+FF+kf1OD+D3hTRPG+r63pusX/wDZ92dGu5dI3XEduk+oKoMMTvJ8gVvm+8V6dRX0mfV8ZhMNGrg43tKPNZXfL1st302PmctoYfEYh0sQ7JxlbWyuldXfTXuetXfwO+H6eHL5k8SIniCz0O11Od5tcsxaSSvC5khjZFZiwlAPyqylcLuBcMPjaGa54qlHmptxc5Jr2bu9dL7JKz3fbqk0e5PL8tUaqjKzjCNvfVr8t5dHzO+yX4Owmj/Cz4aTyeEI7q/1OOHU7Tz7q+j1iwaN8afLcTKsYzLAyziOICRefmHXBOE80ztU8TL2dnBrlXs3p78UmnrzKUXK76WVrLV6xy7KObDRlUbU023zrX3ZOzX2Wpctk97vdp28pk/4Q37Mt5aza2s4uQf7GnhhaMxeZgr9tDgljHzu+z4DcYOAx+jpzzdP2WIpp6X9opfaavpDR6N231tfqfNV6eXyXtKE3e/wOL2v1le22uytt0Pc/iDF4V8W+J9ZuNTv5I9EsdZ1pYdPsLi1iHl2unWogMTiHIEnkqighhhFAywJb4jA4TMMCoQw8WpOlT1cXZOVR3T9FLVX7n1OOq5fmEputUuvazslKOqUNGt9G4pJ2a9SjpvgP4c6TP8ADTxHFMs+nanqtrHqOlaprVpLJBljvLqkZDQg7S2/YQuVZQZMx9WIxGc4lYzDte8o6SjBpOzStF6Nuzemv912un59GhlFOeDxK1UpWnGUk2t/i6JXs09NN1seLeJrcaf4k1W1SIWyQXUsawidJhGoYgL5iAK+AANy8HGR1r6zLlUeEpOq25OKvdNNtJbp7fM+KzKNJYuqqKSjzOyTukrvZrR330KC12OJ5TJ0cf8A16wlEyaLCPmsWjFolV6ylEzaJ0fd9a53HUzaJkfIwawkjJo/W01/Pp/cB+XH7czY/aS8Q/8AXvaf+iEr+jvD1Xyd/wCN/wDpKPxXi5f8KL9I/qeU+BvB1345vNTtLK5tIriz0251EQ3MjK9ysKb3jiAVt8hUMQvAO08ivsc2zCOWUY1ZwcoylGLt0Unbmd+idj5TB4P65UdNSSaTav1sr2VurPTtb/ZY8S+GZ5Y9T1jQraGJJ7l7sTzNAbeG3hmluEZYSzxg3EcQ2qWLtgLjmvjVxhRlRi40pNu2l0mpOTgk29E7Jy1toz2qvD0qVVxlVjZX11aaUVJtJXb3Wwaf+z5LqmmQwWPiXQZdefV73ToUN9uttS8q2tpoxbOsZG5vOcEyMoBKKdrEis5cVK6rewboqMZN6e7ec4O+uvwq1k+o/wDV+79kqqVVuSS1960YyVrJ20lrdroWbX9nHVrHw5c67cXWm6xpb6ReX8E+mXzoivDbif8A1jW7JMNrbcREqXV1MiFTWeI4pi1OOHhyyjKCs0tVKTW3NeOlrX3Wu2pzQyF80PbTvGSk7puy5Yp78tnrvbbbc1PF/wCy3c+GPE+safF4t0OLStNmt7I6lq7vZrJdSQGcQfdZVYJhsltuHX5s7lXjo8X0FQpVatBxc76Jp+7F25vv6b6aG1fheq69ajSqqShpdq2rV0v+DsupxHij4W6p4Q8H6L4knurO807Uwmw2olYRu0QfYztGqOR8ysI2cKyFSQa93AZxDMa9WhyODg2ndro7ardeV9+h89j8olgaVOq5qSmrq19t9Hs/PqupxwbHTBHtXtyjZ2PnX5k6PiudxMmiZTgVi0jNoljkrCUTNq5ZV81i0YtEquaxkjNosI+frXPKJm0frnX87n9tn5Z/t0t/xkn4iH/Tvaf+k8df0l4eL/hHf+N/+ko/GOLV/wAKDflH9Tx/wT411f4f+JLTXtCvTp+q2m/ybkRpJs3IUb5XBU5ViOQetffY/AUMxoSw2IjzQlutemq2ae58hhsRUwlaNei7Sjs/w7PodFpnxt8aaQfD/wBl12ULoME9tpyywRSLDFMP3qFWUrIG6YcNgAYxgY8Opw5lkvbfure1acrOSbad099Nex2rN8ZD2XLU/hpqOisk9GttdO5p2P7Qvj+ytdWih8STxnVrie6u3EERcyzIscjI5XdGSiKo2FdijCbcmueXDeWNwcqV+RJLWWybkk9bNXbepH9r42Kko1fibb0W7SV07XWitpbYJPj145n0Q6U2uE2DW0lpJCLWAGaOSFYH8x9m6RzEqp5jEuAOCK56nDmWSlObo6yafxSto79b21103Mf7WxijGKqfCml7qTV1Z6pK913NKz/aP+I9lc3FxD4pnjubi0jsZbgW8PmyRRqyoWfZnzAHYeZnf0+Y4FY/6s5W4qn7L3Yu6u5PffS+393Ybz3MFKVRVfekrPRLbbpv57mVffF3xVqukWOmXGqJLY2UP2eKL7JAvyeQ1uN7BMyEROyqz5ZckqQear+xMDTm6vI7t3+KWmt3bXq90kl3ucU8yxEqapO1lt7q7W10u3bq2zmFkGSc9a9b3LWv+Z4krtEytg+1YNJoxaJ1fFYtJGLRKrDGRWLSsZtE8b4xnmsJRM2iwr5FYtGLRKj4NYySM2j9ej0r+bz+1z8rv27Xx+0r4jH/AE72n/pPHX9LeHKvkrf99/lE/HOK1fMH6R/Uzv2RPg3ofx1+JOpaBr9xf21nb6TLfI+nyIkm9ZoUAJZGGMSN2645r0uM82xWTZfDEYRpSc1HVJ6OMn19EefkGXUMxxUqWIvZRb001ul+p9cH/gnP8MUGTq3icD3vYP8A4xX4l/rxne3PF/8Abkf8j9BfCuWJXaf3/wDAGj/gnf8ADADI1jxNj1+3Qf8AxipfG+dX5XKN/wDBH/Ij/VbKeVzs7f4iRf8Agnp8M4sZ1bxLg4AzewYOf+2FT/rrnTbjzR0/uL/IHwplVrtP/wACJv8Ah318NFBY6n4kAHOTeQcf+QaUeM85b+OP/gEf8hS4SymKbkml6jLn9gb4YWNtJc3Gs6/BBEhkkllvoFRFAyWJMOAAO5o/1wzqUuVSj8oRvf7iHwhlMU3JPT+9/wAAsRfsA/DgqGTVfERVhkEXcBBH/fmk+MM5j7vtEv8At1L8kgXB2USV0pP/ALe/4B8dfHvwHp3wq+LmveFtJmuLjT7AwGOS7ZWlPmW8Uh3FQAeXOOBxiv2HIcZWzDLqeIru8pX/AAbX6H49n2BpZfj6mGo35Y2380n+pwyP3HSvblE+aaLCP78VzyRi0Shs9KykiCeN8cVhJGTVydHz1NYNGLR+wB6Gv5pP7TPyr/bwOP2lfER/6d7P/wBJ46/pnw4X/CJ/2/L8on49xT/v9/7q/U6j/gmy5/4Xtrw4x/wjc/8A6VWtcniO7ZVTv/z8X/pMzThNf7bL/C/zifod428Mw+N/COs+H7mea1t9Us5rKSa3IEiLIhUlcgjOD3GK/nfDYhYatCvHXld7H6piaXt6UqTdrrc8otv2aRZ+F5NBg8Uaja6bcWN7a3NnZx+Vbb7hbkboYg+2JFN5Kdh3ZMVucjyhn6N57H26xHsFdODV3dpRto31b5Ur9E2rO+nhxyiapKj7Z2s1t/MrX36L79NrGl4g+CWo+IdRS7n8WzRBEsZfsf2RmtRd201tKsqxmU7UP2cqI1II86Ql2JGJw+dww65FRTvz68y5rTjKNr8u65r3ad7LRa3qplE6jd6m9umnu8vS/Xl/FkcXwE1C40C70fV/Gup6tZT6Vf6S3mKQ7pcRW8aSsS5DSxrAxLEHc80jYXOKX9uRVeFenh4rllGVtLNxlKVtErJ83LZbRS3sZLI58kqc6raem3lbu/Uq+I/gBr3iLwtrOkXHj+8xqUhZibMmJUkhminh8sy4aIi4YxoT+6McPL7OVhs4w2H9m3QTcU03za6zjJNe7o1y8r3vFva50VcqqVObmrfF5abNbXv1080vn7Hp1ubKxt4CwcxRrHk98DGa+dqVPaVXJqybv/X/AAx7FCl7GnGnF3srdtj8yP2x3/4yY8Y/Wz7/APTnBX9DcJp/2NQf+L/0qR+A8VWebVmv7v8A6TE8jhfivruXQ+LkidWxz2rGUTFonR+a55IyaJVbNZSRBOj8VhJGTR+w56V/MR/Zp+Vf7eA/4yV8R/8AXvZ/+k8df0x4cf8AIk/7fl+UT8e4q/39ryj+p4VoPifW/CGoHUNA1i/0S/KGM3Wm3T28uw4JXchBwcDj2r9BxeCw+Nh7PE01OO9pJNX76ny9DEVcPLmpScX5O35G83x5+KH/AEUfxcf+47df/HK+flw9lfTCw/8AAY/5HpLNMb/z/n/4E/8AMF+O/wAUD/zUfxb/AOD26/8Ajlc74eytf8w0P/AY/wCQnmmN61pf+BP/ADJB8dvif/0UfxcT/wBh26/+OVk8hyxf8w1P/wAAj/kQ80xt/wCNL/wJ/wCZMnxz+J3/AEUbxb9Drt1/8crJ5Dlv/QND/wABj/kZPNMb/wA/pf8AgT/zJF+OPxNz/wAlE8Wn/uOXX/xysnkWXL/mHh/4Cv8AIn+1catq8v8AwJ/5lqH43/EoYz8Q/Ff463df/F0v7Cy5O/1aH/gMf8jGWb4//oIn/wCBP/Myb7WdQ1/UptQ1S+uNSv5yDLd3crSyyEDALOxJbgAcnoBXrUMLSwtNUqMVGK6Jed/zZ4OIrVMRJzqycn5tvy/Qcj4rdrQ89onV6xcTJomVtvPaueUTJonSSsGtTJolVu4rGSM2j9jm+6fpX8uo/spH5Wft3DP7SviIf9O9n/6Tx1/THhx/yJH/AI5flE/HOK9Mf/26v1Pnwpz61+o2ufGqQwx/hUuJXMCoBUuFxN3JkjrJ0zNslSOueVMzbJ40GfSsnAzkywi45xWDgYN3LMfBFZuJiyzHIKxcTJonVsGsXEyauTRvWUomciZWA57VhKJjYnjkwPaudx1M2j9kz0r+Vj+xD8rf27f+Tl/Ef/Xvaf8ApPHX9MeHH/Ik/wC35flE/HOLP+Rg/SP6nz/X6mfFAeaADFAFXUdXstGgE9/dw2cJbYJJ5AgLYJxk9+D+Vedj8fhctpKti6ihFu1/P5eh2YXB18dN08PHmklfpt8/UqweN9AmLBNZsX2qWbZcKcKBkk4PQetfNvizIv8AoKj+P+R6DyDM/wDny/vX+Zbl8V6NabjPqtnDsKhvMnVcbl3LnJ7rz9OazfFOSf8AQTH8f8iP9X8zf/Ln8V/mKPHHh9Iw7a3YKhxhmuFAPUDBzz90/kaylxRkn/QTH8f8jP8A1dzS/wDB/GP+Zf0jxRpGt3DQafqlnezqnmNHbzq7BQQCcA9MkfnXTg84y/Maro4Sqpyteyvt93mefjMoxuBp+1xFPlje263+T8jXR8ivUaVjxWrE8cnbP51i43M2iZGxWTiZOJOj9KwlEyaJlb05Fc8omTR+zROAa/k8/sFH5X/t3xsn7SuvswID21oyn1HkIP5g1/TPhv8A8iR/45flE/G+LP8Af791H9T59r9SPigoAKALFh8OD8Sr63sFv7jT3gLXCvbW8U7MSpiK7ZSF6SMeT245xX4/4lyX9nUad1rK+q7J/wCZ95wiv9pqTte0fza/yPc/hb/wSzstPeDXtO8aeKrLUImwscNrbRMy4yGDx3iMBnBHzA5UcV/PEk49bn6zCfOrpWPQdQ/YCfRbK3ZfifrkLww+UkM32lmgXH3P+P1lG3jGMgFQVPANZ6f1b/Iu7PH/ABt+wFF4kgisLj4kaqbGKQzLZ+U8sQkOcvtkmb5jubkY+83cklqy2X5f5Bqef6l+y5pf7Ol3a3Nrr02uXGqq8f761WLyVjKE4IYnneOPYV+t+Hcb4yvVfSKX3v8A4B+ccbT/ANlpU+7b+5W/UYjcfQdq/dLcr5Oqsfjsldm/beFryWw+2FoltwhkLCRXIXucKSfwxmvyrNOOMLlmJnQrxS5W1dtK7Wmis+uxtQweKxbaoU3JLd9F6t6D4/D17sHmRNC/eOTaGX2O1iM+2ayhxi6keZYb8V/8ieXiatLD1pUlJO3VbCQ6NdNO0YTBUAkkgdfTnkcdRx+uMP8AXSEqzpRw92t9Vp/5KdFSi6eEWMqaRk7Lu7bteSLI0S6QgYU/jWkuLF/0D/j/APank/WKcna5+x56Gvww/sU/Pv8A4KTeCpbTxb4W8Wxq5t76zfTJisZ2o8TmRCzdNzCVsD0iPpX794Y4vnoYnBt6pqSXWzVnp5NK/qj8s4ww7VSjXWzVvmv+H/A+Melftaetnp6n53a+wZqvmvvHysM0fNfeHKzf8LTm1NzKvlM+EULPA8qffzkqnzH7vb+lfhnijUfssLSW3vt+VuVeXd9eh+j8G07SxFTsl+v+R9QfDnUNIQ3N6+l6NLq8IitLRpNI1BtyxqAkZ8skMNsQ+4pHyg9OK/BrrofqF9TtfF1tMbeeT7LYR3F5aGOfytN1B1eMMqxDczAjaVbI6lSCBjFFxHnLeFPtNjHYxWGmxag6Sx3Ie1u2gb98pGHLqcD5zjd852sMAkUXGldpHC/tGxafo58M6LYKsC2kU8gtxk7Edk2nJ7Eo3ftX7h4b0HbF1HteKXy5j8t41mn9Xgv7z/8ASTx6OXAA6cjmv2hq8m+p+Xu1n8z1Hw7dW1m0LRXVxNLGm0SyOQF42/IMnGFAXlicDjA4H8iRyXC080xGPqrnqznJ3a2952S7WXUvPOKcdWw0cvwf7ukkk7bt21u9LK/RfezrdGsIdW1KKzjRfNeN5QXYhcKVBGQDz84/I179ouSSW5+aUMNOvCcnPlUbdL73812NbWPBs2jaPfXyW1rObaB7gwpcMGfaCQB8ncjGaJXirtHp0suni60KMsRq9F7t7L7x8vgO6Ck+TaBiMj/SG4/8h1NSnKUGlpdd7fozz/q9OErTrPdrSP8AnJH6UEZGK+G3P7mOF+M3wr0f4u/DzVfDusKixzRl7e6eLzGtJwDsmUZBypPIBG4ZUnDGvXyrNMRk+LjjMK7SW/mnun/W6T3POx+Ap5jSdGrot/Sx/PBBYfELWLJbuCHxGd6mUMLp0Ein7pRCASMemc1tX4izGrWnKOJmru9ueXX52/A6KeTYd0k/YRsvJHLXXi7xBZXEsE+q61BNGxR4pb2RWQjqCD0I9Kj+280/6Cqn/gcv8zF5dgv+fEf/AAFf5DF8cawc51rVx/3EHo/tvNP+gqp/4HL/ADF/Z2C/58x/8BX+Rvaf4v1CIQMnjbVLUPavO6pfXG9HBYCH7oBc4DZztweueK4cRjMTi3fE1HP/ABNv8zpo0KOHv7GCjfsrf1ufcX7M3jHWtN+HXhu6vtYnuriSHznkuGMjuGJK7mJ3HAI6ntXCdFj6Df42wvAIru6jdvVcqMfiTSEQJ8UNLmGftC4+tNX6DXmct4t+Bvjb9oPxFBrfg/Sor3R4IFsJbua7ihWOZWZypDMHPyyIchSOevWv1vg/iXLciwdWGIcpSlNtWjfTpu15/wDAPz/iTJ8ZmeJpypJJKK3fXr+Rr6X/AME7fiDIEk1LW/D+nwbd0hjmmnljH+75aqT/AMDx719JifEbBcyWGoTl62jb87+mh87Dg3FOLlVqxVvmfLvhnxKTKisxyQMg9j6V+Xe19pUlPu2/vdz89zDAKF12PavCvimDRryO7kSSZtn2dI4+WLOcjv8A9Mz0yautiqeFh7WpsjzchyPE5xUqYTDLV26X2u9F13Oz8W+JDrOiWVhAtxZ3F7OqFJCyBY8tlnZTtCkpg8jhsHrXhS4ky/ESdJVLNfP/ACP0TAcDZzgKlPFypXjLTVNNWs72eyd/M3IfF2iSWl3JcalFZvaxmSSK4DiRlWPzGYKAS2FBYkDHBrr/ANZcDFwXNv8AlrqeNHw1zvGyqTo8ul3a7Tve1tItdUfoLXhH9FHmf7RviS88L/CDX7qxZo7iWNbYSLwYxIwRmB7EBjz260mrqxUdz8yNa1e1to5HMShum7AGfpUqnFdDu9rJq1z4l/aF1Kz1X4iyzWaoCtuiTFB95wW6++3aPoBWjOBnmmOKQgoA+8fh7qEOh/DTwyJ5lgzYWyIX7sY14/OpHc+uPgt+xtafGX4ZaT4tu/FF/pk2oNPi3t4EdFEczxdSQedhP407CO+s/wDgnhpduo3eNtVkIPINrEP60w8j3r4I/CGD4KeE7nQrS8n1SOe8e8M1wqoVLIibQAen7sHPvR6AtFY1viF4Wu/HvhbxB4WlSO00nW9LudOmvY5szw+dE8ZZYyu0kbs8sPpR5kySlFxfU+S9N/4Je6Bpkgf/AITrVpWHXdaQjJ/76rthipR2jY+OxHC+GxF/ea9LHYWn/BP/AMP291BLceJ9WuVhYSBEVYmDCOZFYMrZBHnFgR3UVOIrvFUvYzWjNcl4doZDiViqFSfMuui/rZDPif8AsseHvCvgTVLxvEWpaZAlxFJG9rCDKrsyxpGhyQCWkbHGMvlgcV8zUwNDD81WlGKk9LvbTf8AA+5xGNq4iPNipSmoJvS7drfe9jjfBHgePxJ4N1drjS9FjcQtaXrs5mmmR9yiOMq/7v8AclCSGOAmAAWyuGEhSxc3OUYyUdFytO/6fqCxOJweCdLD1pxlfm96Mkr6SXuyeto7pH3VX0RyHln7VM0ln+zR8VL2FjHc2XhbU7uCQAEpLHayOjc8cMAaBo/n/wBY/aF8T61Ym3khtIpG4aaKNgSPoWOD/nFA+bS59dfsVf8ABOOz+J2gQ+PPiwL+PTrxhNp2iQTCJruEqGE00ikuqNu4VdjfLknBwTRoxc+qPty4/Z7+Efh7Rf7Osfh74YitkTYQdJgdmA6bmZCzH1LEk1wOMpOx2wnZHxT+1f8Asf8AgnVLS81fwVZQ+G9ciUFbS2ISzuMD7vl9I2IxgrgZ6g5yOxLl0Odu7ueYeKNcbw/qHhvRwqSWlsluxQLlmIJTH5DgevrViP2C/ZJ0q50b9nXwZBdW5t5ZIJbpUY5zHLPJKjdT95XVvx7dKAMXWp734g+M/E0HhLxYqJY3n2XU7eUXUZtp47cJHHEdmz7zuzlSQcJjBBp8tiU09uhVfwFrvhprDV/FHjS5i0GxgjfUJbG6ufNkuPNJDbdhBQlo1xjON3NEYubSQpyUI8zdhvibWfh/4DtbS513x54wsotUiaazln+1khQuDtKwZU7WzhuccgcZGio1JX0vYzdenFJ825seE08F+N/CttqOh/ELX9UsSySC8gv3aYAIPkkHl7lyPmKsAcnPFYOVmdDTSuP8PeO/AOk/GW18O2/jXWrnxRrVvNPbaDdpO1syDe7OpMQRCBG+MuOFIA5pRalsOzRV/a2uWh8B6HGbkQWU2twfbF3bRJGkcsoUnI/5aJG3Xqo6jIrvw0ZTnaNvnsfIcTYiOHwNpKXvNL3bc1rO9r6bHzRqHi/w5fRwafNPa3CSXEbxK33jPuwhyh5/1jDBzw7Gvb+qYXESj9bjGUlty73/AOGPxvD8R8R5JQnRyepUhBpp87i3aWstUlutlf8AI/QyvmD+kTwr9ujXo/Dn7IHxau5G2LJoFxaA5xzOPJUfiZAPxoA/FfwVL8OvEvhzwf4Tn0IweJby6tmvNTddu+28zdLgeX1KZAffjA6c1897LFxxUqspPk/xafdb9T9KWPyieSLAwjH2/Klf2XvXu3fn5u2nw9d9D9R2+Nq+FrNbW4Ba3Ee4zITgAcDpwckev4V6nt2t0fCLC+19++v9ehQn8bPqthLcyuyI4JRd+T0/T/61HtOYylS5ND55+Kni4208+66zCAflZua2i7IybW1jxrRvCdh4+hsdfmupxLayGONEI2PslJBORnrxW1zI/Zn4JhV+C3gMJu2DQLADdjOPs8fXFMD5PsNT8a3Gr/ETWvhd4i0zRtJm8czPqt3NapdOqi3jRhHE2BhpSS+SrHIcHaSTzY/EvC0edK7SOvK8KsZX9nJ2u+x9VnUrTxP8JoNV8Qwpp9vPp0V/fRP8qw7VWRwd3QAg9fSuilVsozt0OWtRvJ0r6Hg9x8VfDXjV/D3iHxBeQ6FZaZa/2hLFqEhubZVntPMQElF2sROoXjJ27VyWXHRRxHtYyS0ZliME6LhN6xR4t4c/af8Ahb4J+MNl4htlvrCz1q0NpqltpNmsVlEyOywTuu5S2VOT8u5QF46g+LHCVFXdRz0XQ9qpioVKCpqGp65YeHoNa/b48J63aGS606z8ESXEE8C7rYs880ZYMOMlZBXoQs480djypJxk4S3PU/2oooJPBVqZry1tZLe4N3Glwu55yqFNqDPXMo56Ada8zMs7rZHD29Bx5npaSbW6WlvNrUIcHYXjSSwOL51BNO9NpPaW97p6X00PmbV45/DttvfU9LlxOYHjs2kDDaAWcZAG0ZAznk8jI5rzocc5zGrShKNL3pJaJp66bttdTkreB/C9PD1sTTq4pclOc7tw5fdi7J+6/u3P0Hr6c6j5S/4KkyGP9hr4jYzhm00HB/6iVrQB8CfDL4YQvoHwx1ZNO8IrLqUMURL+HN0o2WrNveQTgu58g5bAyZCSDgVlPWEi4ScJKSPctK1K/wBcvbfRp7fRETVdI+3GaPTCDFnyQFAMnON/Bz/COK85SakkfQVKMYxbXQ17yTVda0VLVrjT7RXvprJJLSw2OghkuISc7zkMYN+Oo3Yycc9igjx6jdz4X+Pni3U9J1vV9Oacz/ZLqSDzcbd2wkZxzjOPWuhJWOY9g8F+D7LSfAumwK0z4gBZhM6b2PLNgNxk5P40En65/ByIQfB3wPEMlY9CsUGTnpboO9N6IaPi7/gnmBq7+PpbsCddR1G5mljfkBmW2MmP94tk/Qegrw52nmKpPZx/yPpKEnDLlUXxKe/ykfUMd7HrPwz8frqdv9rtDf3lpJbrI0e6IBUKhl5XK55HIJyK6sPUfsHLzscOLpRWIil/KmfNH7R10ll+znYzafG9nbXnhOxi+zmUvgLcacylmPLsA7LlvU+td9PSukuqX5s4Jyc8LJy6St+CPz88SxGcwW4cxrtkclR12Rs+PxxXZWfLHQ5qXvzs+iP0f/Yb8VXXi7x65uwM2HhhIkIOc+ZLHMe3GDKygegFeRlsm8FGLO7MopY6U0e5ftKeDIfE+kWmoTzlF0q1vJRCEB8xmRSvJ6AFASMc+1fJcU4SGKo8838EZtfh/kfZ8H42phcQ6NP/AJeSgm+q32t6nx74q2J4U1aSOKOOT7JMA4QZB2Ng1+g4HhvJKWEo4xYSPPyp3u78ygpX3tv5H8vZ5xrxfiMwxODnmk3Q9pOPI4wa5XNxcb2Ttb5n/9k=',
              'timing': 1800,
              'timestamp': 121777491229,
            },
            {
              'data':
                'data:image/jpeg;base64,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',
              'timestamp': 121777791229,
              'timing': 2100,
            },
            {
              'data':
                'data:image/jpeg;base64,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',
              'timing': 2400,
              'timestamp': 121778091229,
            },
            {
              'timestamp': 121778391229,
              'data':
                'data:image/jpeg;base64,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',
              'timing': 2700,
            },
            {
              'timestamp': 121778691229,
              'timing': 3000,
              'data':
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APzXp2YBRZgFFmAUWYHo/wAJf2fvGnxrstbvvC+nwz6dohgGpXlxdRwpbCUSeWcM258+U/EasenHIyWYGn4n/Zm8VaFqn2DS7vSPGT/aLyE3Xhq7+02oW1s7O6mk81lRdoW+iTHXerrjO3cWYFeL9mzxuLHWLy6s7axttHv9T0u+kluFcQ3djYy3s0IKbg7GO3mAKFlDKAxUMpJZgWIv2WfiLf6fZahpmjwanp12beOO7jv7eJBJLpiamEbzXUrttX3MxG0EYBJIyWYE/g79lnxh4xn0OFLnSdKk1q8gtLE3902yVZYndJ/MiSRBHuVYT827zZFTbndgswMy3/Zu8fNpNxqF5o/9jxw28l00GpSCGcxxw6jLIfK5ZSo0m8Xa4U5VeMNmizA5HxH4B17wla29zq1pBZxXGPKR72AzsN0i58kOZAN0T8lcYKMcCRNxZgc/RZgFFmAUWYBRZgd6fgrrS9bqw/7+v/8AEV+svw2zCMeZ1qaX/b3/AMifBLi7By2pP7l/maifs3+MXgvZhBD5dlIIbkkyDypCrtsYbOG2xSnHXEbH+E1w1+A6+HlCNXE0lz/D8VnblW6jbeUUu7aSudEOJ6FSMpRoytHfbT/ybyJbj9mHx3aXt3Zz6XJDdWmPtMMlvOrw5jaUbwYsrmNHcZ/hVm6AmqXAdZqMli6LUtrSvfXl0tHXXT1B8TUYtp0Jab6Ltfv2J7X9lb4gXmvjRE0spqv2mCza2njliaOaY4iRy0YCFz03EZ59K5avBnsaLryxlHlXaTbt6KLf4GkOI6dSSjHDyu/Jf5m54c/Zr+MdnNe6RokeqadJM0cl1aW011biRondot67QGZZIJSoPzBomxypqa3B3sI808ZRt5Nvz6Rf9Ndx0+IYVZqnDDyu/Jf5mvP8Kv2g7nX5jcaz4nk1fVbY3EwuLy9M13BcNDbb23LuZJGit4snhvLiXkKoCnweqaTljKNruO73UeZr4dGl366b6DjxDCbSWHlqk9ls3Zde5Z/4Vx+0lZag2pxeIvGUN80qQveQ6hqHnLK0n2dY3cDcHZ1Ee1juJ2j+7W/+pEuZx+uUbrX4nqrKV17uq5XdtXSV29mTHiKEnaOHm/RJ9bd++hnT/Bn49weLbS+nu/FKeKbyWR7W6kuNQF9NIlv5chjcrvYrBhGxnCcHiqjwPOUZTjjKHLG13zaK7srvltq9F3IlxLSg0pYeabv9ntv16F7/AIUZ+0QkOmbdR8TkXEUDWUaX96X2RPJLAqqBuGx7KSVFIyPIDgcKa5FwjBycPrtHS3V215evLb7Ueul9dnbf+342v9Xl9y6Xf8391/d6FHT9E+O95LcanZ+NvEM0zAxzXkOsXpfECSy7WYdkWW4fB6B5SOrV2VOBa1Gs6FTE0lJJPeW0pcqd+W2r03OdcTUZQVRUJWbtst7X79jM1v8AZ6+LHiKaCy126luJtK064a3tdZv5FeC0tWcTJEswB2xtHKPLToUfC/KcctLg6VeMZ0sTTcZNRTtO15Wsm+Sy3W9t1fc6ZZ/CLadCV9f5ejs/tdDIuP2VfHlrb280tnbqs/nFF81i4EUCTyFl27lAikR8sANrA0Lg5ucaf1qleTSXx6tycLL3N+ZNeTTuZf6x0+VT9hKzV72W1lL+bs0/QLz9lP4iaffWdld6LPaXd66R20M9vPG07OwVAgMQ3biQBjrkYrd8EyVOdX65Raim3aTdkt9FFvS6+9B/rHT5lB4ed9tl1v5+T+4x5vgJ4lt757KX7NFeJIYnt3MiyK4OCpUpkEHjHXNejHw3x04qca1Ozs09bWauvs9jlfFuEUnF0pXXkv8AMt6/+zb4z8J3v2PW7NdHvMBvs9+k0EmD0O1owcH1rHD+HuKxcPaYfE0px7ptr8IjqcV4alLkqUZJ+aXX5nstva6naSb4be7ifGCUicEj06V/SFRQqx5Z2+9H5KoyjqjsPh/r+r2etnSb+W5tPD/iC+gTWp206O4lEZLxvLG0kbmOQR3E+GTn5z16V4ObYKjPC+1oU06lGLdP3mkno7NJ+8rxi9b/AAq6tc9XCYmUKnLObjCT97bbW+/Wz08zs9fuLe/utV1y08cX6apqmjxzXoOhqjS3yJb3JiUxbVUPcll81U3bhJu3KXlf4iMMRKpQpVMJ7lKrJLWXLyN8qvdyk+Vaq8uRWVo7Jev7eklVmsRdyiuieqavbXy7alqx8TXbahPc/wDCfS2DQ3WlXwmTwbCpM0TFFEezkQ2yRRbY+EJc4jUBmrieB5o+/l93aX26ln7l1dOSvJybu9/O9mbrFRUpN4i2z2jvdfkl9/3nSaN4wvdC1K5gufieksFlp0Mtg2maAqMb799stow1q263jUuoB8tENz8oAUg5rL+d028v5feal787pe6uZtz3lz3vr8FtttFi4UnK2JWiTT5Y7u/919in408a6bpj3ev6R4o1fVfE0ENpDpph0+3CpH9vuL0GZPsyhpEaK0aRwdxllkOZEO2urLMDjasKODqYdQpyk5TTcrfBCnJ3521zRlOy2SS2abeeJxGFjecMQ72stI7XbX2e6jf5/NdV1LRrXxNok+i+NtQi0/w7c2X2KO/0r7TuVL1gWaSJLdiqwRwTFAGJMmwtkZrnp4Wv9TVKWDTdSM7v34tLkg0ldz5XfmjG+/LqrsmpVpOr/H+FrpF68zteyjpZ3e+rfkVL7W01bVbLU7rxrDpOpadNK2nR+HdBENtpri6gtl8old0sQtIw6o+3hY13bg4rojQr4XCTw8sLzxmlzc0pOUuaNSpq01Z+0sny3vK61TQ/bU6tRVlXSavZJJJX5Yuybd7q61fY6HxJcXOv+Vd+IPjLcv8A2tbyQpJ/wiYJkskl1G0DAKRtwk9ySGCnFwQpkKpjhw6nQjONHLUnFr7ctJfu5Pd63ai0tbW10dntXnezqYm901tHqpJ7PtJ6769HY4jw14iNpavp8ni7Urea21bS7q1vDpEaW8Mhlma5uXg8tzP5fnlNu5GkDjIKRhR7ONwU61Knip4VSlOE3Jc1RuyilCOktL6Pb7O922efh8VSUpUfbWin7uket7t6Pq3/AFoq+txz3/hyHSp/iJc3Hk6HcM9g+lSfZkLzi5ktI5ASTK86xkuUX5UGWIASqwcp0MT+6y9KPOrS96+nNFN3eyhe2rXM07PcrE1YVafNUxF5W8rdG9Ulq5W6bX1L+ure29teayPFt14g0iC5vtLt3t9GSzmuDPpCQh0VtwKFIlhfJ3KoVl+aTI4o0KmIrJRw0adblU025tL962rq+rUm5K6afbotp1VTptwruUG+W3u63il30XKkn2tpfc4nUPi/8QtUlilubhnmimjuI5RpMCvHKk7XAdCIsqzSsZHYYMjff3V93T4eyulHkhTsrNfHJ3TVrP3tlFJLe1tEjw5Y7Ezlzyavo9o7q7T28395nfDjWpfCfxP8OeJb/Sp5LWw1eDULiCzswmVWYOwjjAVFPB2qNqjgcCujNsF9ayurgsPPlbjyrW9tLWvq2mvdbd9HcjC1lSxcMRWXMk7v/hl957D+2L8XNE+MuqeHF8O2mqXr6Wk/2jU7yyELTCYo6xKoAbbFhkBYevLZ3t8hwPkmMySjXWMaXO42indKyab3t72l+vklova4hzChmVWDw+tk7tq2+y+Wx+mWrapa6JpV5qN9MlvZWkL3E8zn5UjVSzMfYAE1/NNCjPEVI0aSvKTSS7t6I/ZalWNKEpz0SV36HyG3/BRPTDrkzJ4Nlk8Jx6gtkNY/tALLIjbiJVt2iBPyqWKhuMqCQWFfqS8PcW6C/fx9u1zKC2sunO2tflZ62bs7fDf610FUb9n+7Ttzdfut+p9M6x8SvD2h+BoPF9xeF9CuI7eWC5t4XlaUTsqw7UUFmLF0wAM81+b08uxU8VLAqL9om1a+3L8Wt7aWbvc+vnjqEMOsVKT5LJ/f5b/cY+p/HbwTo9zLBc61Erpof/CRqwR2WSwyR5qsBhs44UHcR2rrpZDmOJgp0qTadT2a1Xx6Ozu9NdG3ourOatm+Dw8uSpUs+Xm+XS3Rt9tyjpP7SHgPWdesdHtdUnNzemzWF3sZ1iL3UH2i2QyFNoZ4vmAJHQjqMVVbIcyw9F1p0/di5J+9Fu0JKEna7btJpfO/RhRzTCYipGjGTbla2j6rm/I9SjG9Q2cZrwbXPWXkHlZHUflTtsx+jYCHnkg/hSaurBd3vcUx5HBxSUIroD1EMXHBA/CqD5iGHJHI/KmLW97nK+Kvib4d8F3GoQandzpNp+mnVrtbaxnufs9rvCCWQwo2wFt+0NgsIpmUFYZCqs+g1dHWngE+lMdzy+T47WgJX/hHL/8A8G2j/wDydQJ6qzO68L65H4l0a21GO2e0WcMRBLNDK64Yry0MkkZ6fwsffByArIEHi/w1a+MfCes6Del1s9UsprKYxkBgkiFGIzxnBOK68JiamCxFPFUleUJKS9U7r8jmxVFYmhOjJ2Uk1deasfBqfsZfGGxiuPh5BrVmPAN3qK3lxqMU4VJVVgEdoMhzIFySmShKxjf8isP2l8b5JVrrNJ0JPERhy26X/wAW1t9VFOzfc/OXw3j+WWF50qblzX+TW3562PrLXvgJYa/4E8DeEZtVvodK8LyW0qPbStDPcNbwNHCfMQgoQzLJkd0GMdR+Y0c+nSx2JzD2ac63Nvqo87vLS2qaute59jVypVsLSwvtGlC2q3dr/rqcPbfseac//CNDVPEVxrB8Pmxjs5Z7RPNa3tbi7lS3dtxBjKXMcZAAyIEPtXo1OK68farDx9mqjk5ddZqN7aLrG8equ1u7nmPh6M1B1puXKklor+621fXzs9tkdP8ACn9mzRfh3r0+s3Ulrr9/9k021s7i509FlsjaWS2peNyWIMgQE4xjOOetcOa8QYjM4OjFOEJTqTklLRucuaz0V+V7N+vkvSweT0cJP2s/elaMU2ldcqtpvv1PZ41CIAK+WTue+OpgFABQAUAFAHDeOPhJpfja8vL77fquh6hfae2k3l5ot4beW5tSH2xvwRlGkdkcAOhd9rAO4YA63So76LS7SPU57e61FYUW5ntYGghllx87JGzuUUnJCl2IBwWbGaAPmOP/AIJ5eBkjVRrlyABj/kUfCf8A8pqAPfvhh8PLH4VeB9M8L6bO9zZ2AkEcr2lpaFt8ryH91aQwwry5HyRrnqcsSxAOkaOUg/vMceg/woA+J/2mf2iPiH8PPjDquiaD4jNjpcEUDxwfYraXaWiUt8zxknJJPJr9T4ayTAZjgnWxMLy5mt2tLLs0fj3FWf5jlmYOhhKnLGye0Xve+6bPL1/a9+LZHPi3I/7Btp/8ar6Z8K5Pr+6/8ml/mfGvjHPP+f3/AJLD/wCRJV/a6+LGf+RsP/gttP8A41WL4XylbUv/ACaX+Zk+Mc8/5/L/AMBh/wDIkqftb/Fgn/kbP/Kdaf8Axqs3wzlT/wCXb/8AApf5ifGWer/l/wD+Sw/+RJo/2tviuOD4rz/3DrT/AONVm+G8r/59/jL/ADMnxnnq2r/+Sw/+RJU/a0+Kx6+Kj/4LrT/41WT4dytf8u/xl/mQ+Nc+X/L/AP8AJYf/ACJKv7WHxVP/ADNR/wDBdaf/ABqsnw/li/5d/jL/ADIfG2fr/l//AOSw/wDkSUftXfFPv4p/8p1r/wDGqylkOXL/AJdv75f5kPjjP/8An/8A+Sw/+RJU/ar+KTD/AJGjP/cPtf8A41WbyLL/APn3+L/zM3xzxAv+Yj/yWH/yJIv7VHxQPXxP/wCU+1/+NVi8jwPSH4v/ADI/164g/wCgj/yWH/yJKv7UnxPI58T/APlPtf8A43WbyPBfyfi/8yHx3xD/ANBH/ksP/kSRP2oviacZ8Tf+U+1/+N1k8mwS+x+L/wAzN8ecQ/8AQR/5JD/5ElX9p/4mH/mZf/JC2/8AjVZvJ8H/ACfi/wDMj/X3iL/oI/8AJIf/ACJMv7TfxJPXxKc+n2C2/wDjVZPKcIvs/i/8zJ8fcR/9BH/kkP8A5E+8T0r8/P68ex+a/wC2i2P2hdfP/TC1/wDRCV+48Fq+WS/xv8kfgXHH/I0f+GP6nikTEjjmvuHHU/OXF9CVeBnoK5ZTgrJyXvbeel9O+mvpqL2c2m1F6b+XT89CcOEbaeDjODXFPE4eOkqkV80UsJiJx5o021vs9u/oX47K6fTXvxbTGwSUQNdCM+UshBYIX6BsAnHXANPmhKXs07yte3W3e3bzOZ4er7P23I+W9r2dr2va+17a27CIxJ45xUuN9jlasTo+SB0Occ+tYOF3ZbmbgyZJMnb3HOKxcG9UZOLSuXJ7O5sTF9ot5YPNjEsYlQrvQ5wy56g4PPtXGpQlzcrTs7PyfZ+YVKNSml7SLV0mrq109mu6fRgrZ5FKUbI5WmiZZOa55RM2icPz1rGUTKxOj/nWDjqZuJMj1hKJi0fqMelfkh/fbPzT/bRbb+0Nr/8A1wtf/RCV+78Eq+Vy/wAb/JH4Jxur5n/27H9TivgpqHhrRviFp+seKrjy9K0oNfrAIXke5mjGYolC8ZL4PzELgEE819DnFPE1cJOjhI3nPTdKy6v7u2up8nlTw1PFwq4x2hHW2vvNaqOie772Xdnu1h8U/hhqkfj1NS1maBPGGm6cly8mlMrx3ytMks/lR7lG0+VcECQ5LsAxbgfCPLs3w0MNyUrug5/aXvRsmldtPZOKulbsfZPH5RiXifaVXGOIjC/uu8ZJu7sk1ulOyb3tubV7+0V4I8P2OqPod7dz/ZtM0ez06xs3ms5ZVtb26byjMYmAAheLdkYcMyg5zjyaPDmOni4qulZt3k+WSvKC15eZP4r27WuenW4ny/6lJ021L3LRi3F2jOWl+Vr4bc3e9jg/h18S/BdxLfSeKo7S2tb3xQ+qnTHs3nhjha1uwoxsZcJLLEMYPTO0gGvWxeUY2mvZ0HzWpKN7rVqSb69k7drJXPnsNm+U1v3uMppN1nNxSuuVwaV+6Ttpo+tmtCrY+I/h/b/EjxjcQNpiWFwgOj3d3pEj2ER3oZAbXDPkrvVTwAeQFBAXurUcxngKUXfnVlJcyu9/tWtba6tqrq/U8CjUyuGYV5Nr2bT5G4txvdXfI3ezV1FXXK2npbS6viz4bDxt47uGsbF9ME0Op6DmwbyZZYNxFoY9gKxylxuztXCDOeK4PqeavC0KTk+Z80ZvmTaTldS87LZJt200PVli8kljMTV5V7NOM6as0pOEWuVrpGTkrp6Pl21udN4d8Z/CKy8ZauJ7TT5dKVYjZ3NxpjGJke4nmmTyzE53qssMKkqMiDh0BrzsRgs2lh6fJJ8yb0UkmrcsU732aje3na1zowmP4dhjKsq0Vyacr5bpptzlG1rppy5IvtBWaW+b4z8e+C9c+GdlaR3FjdX9v4fs7GG3ewk+3w3KTgnFyY9vlqm7KgjdzjrXVhMHjMPjnOUXyc8m/eVmmusd7vTXyOPM8wyyvlkaSlF1o06cfglzKSa2nokkrprl16NniHmHdnr9K+l5Ixjyx2/rzZ+XNK1kSq2RWbSMWiZX96wlEzaJ0fJ61jJGTROjcVzyiZNH6mHoa/Hj+9z8z/21mx+0Pr3/AFwtf/RCV+98Dr/hLl/jf5I/B+NV/wAKb/wx/U4T4QeAYviR4rk0ye8ltooLK4vmjtIvOurkRIXMNvHkb5WxwCRwCe2D9BnePlluFdeEbttLV2SvpdvtY+VynAxzDFKhUk1GzbsrvRXsl3bPUNF/ZqttUtdVeS61zTJluZ7e2GoabHHHYiK0jut2oMsreSHWTYuMnOGPXaPkKvEdZ1IRcIO6TlaV+ZuXLaHp12Poo5BRdKpU55Jpy5bxUbKMea8+13otyTw78B/Cmt2VpKfEWsW86jRPtsS2MTqG1GFTEIn8wZ2u2WLLwvADEc4/23j58zp04JP2lr32p2b6eegPI8vjCHtKkua1PmSS3qq9tX0tr28zRuv2X7S08Mz3R1TUW1CCPV2kuUs1OnRmxuJYyZpC26MSCP5R8xySeQpB53xHW1koxUUoafafPFPRfPuXPheilyKUnO1S0uVcidNtLmd9LpW2d2N8Qfs36Z4durcT61qkMEU2oWV19s09YZpntbOS5NzapvIkt22heWByQMjPFUM7xldJRUJTag1Z6Lnmo8stNJeWvqc2I4dweH99zkoxc4yvFXbhCU+aOusdN9PNF3Tv2adHvZjM3iPU006+0/T77TXi0l7idftSzFftKRFgqqYGyVOOR8wPXjq57iYLlcY8ylKL135Wlp638iqXC+BrS92rLlnCEoaK651O3Nr3h0uc/J8LfC9hpFrcS6rqb3kOn6ZrN7AIIzF9luZYY5FjfcCZAZgRlQMDqSeOv+1MZ7Re7FKblFa9YrW+m1zyY5PgPq86sqkuaCpyl7qS5ZOKdnff3k/VHJ/FPRrHw18RvEOlaZbXVpYWl7JFDDdjDooPQZJJX+6SSSpUnrXs4CpOvhKdWo020r27nyea0aNDGVaVBNRUmknuv66eXzOaR+xrqaueK0So+DWLRm1cnVs9KxkkZNEyPjHpWEkQ0To4J96waMWj9Uz0NfizP7yPzL/bZbH7RWvj/p3tf/RCV/QHAq/4SpP++/yR+E8af8jN/wCGP6nA/Bz4bT/Frx9p/hmC/g00XId5LqYr8iIpYlULKZG4+6DnGT0UkfT5vj4ZXhJ4mcHK1tFfVt91e3q/TdnyeXYGWYYqGGjLlcupo2nwQ8bT2mmXf9lQpbajaPfW8suoWyL9nVd5lfdIPLQD+J9ozgZycVxyzzAqpOCm+aEuW3JJ63ta1tX5L5mv9j4uEITlFKM1zJ80Phs9dXorX3/MsWfwN8a3uqTWEWnW/wBqhlt4SsmqWaK8lxH5kKxs0oWQuoJAQnj8q5Kme5dCPtVUlb3vsy0tZO+mi16iWQ5hOr7D2a5vd05o/a1jbXXTsb2r+CvHetaH4a8P3emaZHYaJY3Vxa3qalbLE8L3e2UvcGUxblmcJtDBh/dPWvPhmOWUKlTEKpK82rqz1tFWsuW6VrO50VsrzPE0qdF0lanB2fNG1nN3bfNa/M2rbmOfgz41SO6YaI7m18vzkSeIupe5ltlG0NkkzQyLjtsJOF5ro/tjASulU6v7L6R5n9nblaafVuy1PO/sDHydlS3t1j1fL335k1bybeiNEfAbx6pIfQyGEvleT9stzN/rjAG8vzN2wyDb5mNncEjmsHnWBnJw9r0v8O6tzNXaSTtZ2vf8iXkWPhS+sOnZesf5uTZO9ubRNKz3ukbcn7Oniu18M6hfywrFqWn35tbywMsOy2iFuZ2nluBJ5aKoAB3EfeHOSAeGWfYT28YKTcZRUk7at35bKLV2338jofCmYexnLlXPCTjKN07WjzuTlflS23f4mZ4X+DmteMfB9prWivDe3Fxqj6ZHp3mxpKxWJZS4LOAQFJJHYKWPygka4jNKGFrvC1rrlipXs9E3bovu6N6I8/D5DisdhFisPyu8uRK6T0jzN6tdNddbXdkkc/4l8J6r4Pu7e21W2WCS4gS6gaOaOaOaF87XR42ZWBweQT0PvXRQxNHFKTpPZtapp/NM8PGYGtgnFVkrSV00001qrppvqn5majdq0kjzGiVHwc9qwkjNq5OjZ5FZSRk1YmWTFc8lYzaP1aPSvw97H92n5i/ttt/xkX4gH/Tvaf8AohK/oPgRXyp/43+SPwvjJf8ACk/8Mf1PMfhr4+1D4Z+MtP8AEulwW9xfWPmeWl2rNEd8bRncFZT0c9xzivscyy6lmeHlhK11GXVaNW1v+B8jgcZUy7ERxNK3NHa+qfkdRp3xz1y11jw/qJsNKuU0nQ10BbO6gaS3vLVd5xOhf5zmTdwQMqhxxXlzyTDOnVhKco89RzumuZSsvhdtvlfzOmeaVZVadSUIy9nDktZ8rjrur6vXy2Rp2Pxe8TeIfEUFza6VpX22zurHWRbwQGCIf2bauEG3eFCeUrEquM7QFxwK8aeT4HLsJKnXqy5WpRlqr3qNf3erjo/W9zoWZYvF42OKo0480eWSsna1NNLr2evytY09B+PHjX4WXek6a2lWdtLpFjcWwstQtJA0kVzMt1mRd4OQxRkIx8pHXJzzyyPLcwpupGrJ7Wd0muReza20+Gzune11YI5vjcFONOdONrJOLTaak/aJu0tXrfRqyIPDH7Rni3w1dWk6JYahPb6jPqRe6tiWlkkjlUo+xl/dqZ53VBgB5XPOcU6/DeDrtyvJc0Yx0drKNtVvq+VJvt0RlR4jxuFjCEVF8knLVXu3fR2tonJtLTV3H6V+0b4tsLKxhZ7G8vLV0H9q3VsGvp7dJhMLV58hmh8znaCCeRnGRSlw/gateddRa5k1bTlu48t0u9tt9e5yQz/F0cJHCxSsmtdXKyfMk3/LzXdt9XqWNL/aB1+0i1y1Ol6Te2WuavNq99Y3NvI8U8kysDER5gPlhnDqPvBkU7uK5qnD2Gm6cpSknCKindXik7p3tv8AhbSxrHiTGJVKbjFxqTlOStK0uaPK1a606rrzWdyLwh8XvE/wy0yXQbS1tIJLbUTeL9vtM3FtOE8qVcNjbuQGN1YdCcYPNa4rLMLmM1iJSfvRSuno1uvudvmjjwWeYzKYyoRhF2k5NSi3yu3K1ulZq8WnfTszE8ceP9R8f6vBe38NpaLa2yWdrZ2MAigt4VLFUReTjLsckk89cYFbYPA08FCUacnJt3blq2/wPGzLMKuYzhOcYxUYqMVFWSS+be927t6swkfP1rpkjxWiZH7HisZRMmiZHwc1g1qZtXJ0fIzWMkZNH6wHoa/CT+6T8wv23jj9o7xD2xb2n/ohK/obgJf8JL/xv/0lH4dxir5k/wDDH9Ti/gN8QtJ+GXxCt9e1jTTqMUNvMkDLEJWtpmXCTCNnRXxyMFhwxwQcGvpc/wAvxOZYGeGws+WTt6NX2b3S9O1tmfM5ViaWDxcK9aPNFdN35WT0vfue/eHf2svBGj+LtR1WHTtX0yyutVe8uLSz0q0f+0IjZxxL5rNKDE6zK8o8s4O45yWJr85xnCea1aVKCrQkoxSu5ysnzXdrJ393R36dNmvrsNnmXUZ1Oei1dvaMbtcrsnfa0rNW9HocPqXx18M3/gjw1pZtL6bUdK0q509nWzjRVMukyWhAdpmLKZijnasQIBZlZ+T1VeG8wnUxCp1I2qST+Kb2lfqu3q/M8+Gb4SPsHUg/di0/dir3jbo318l8+nfz/Hy0vfDPjXxjDZTrHY3Nlb+F576PbLb38tgbefpvRlVIjMEORkKSMvx5ryepSxVHASqfxFN1Ur25Iyc42fRu6WluvfXtp5lTqYSpjfZpulyKneyfO4KMtE2mlZtXv8unlei/FTRrH4L3HhA/2hZXUvnm4gtrS2lt9QkZ0aGaWWUM6eWFK7Y15CoQyHJr28wyXG4rHyxdOS5ZRajdzvF8rT5eVpO/eSdtzwMJmuDoYCOFlB80ZXdlC0/eTTbl7yt0Ssns2r3XfeGv2n9Kh8WeMdT1uxa5s9Ruwlhbx6TbMf7OEly5tpAHQKzGcEufMyd27dxXlV+G8R7ChToVEpR+J80/i0Sa0WyWi2O6hxBhliq9StBuE2lFKEPhXNdO/qrv3nZbq5mRfHzTNP8Ah7BpFi2oQahbW2nCysxp1qltZXEE8Ms0omB82TzWiLkMPvMQdwI26PIq7xir1JqVNuV/eleSask1eyaukrWutzh/t7CRy50KcGqiSt7sHFNSjJtOyl7yTvduzdlobWs/tF+HtU0Lx7ZG2u7yXxDeXU8bXenQqzI8EcduHdZsIYWU9FfcFU/KxNcdLJMVTq4eo5xUYJKyk+l27eppic8wVWhiacYScqkpO/LHVNaXd204tdFbvuz583DJr7xroj80kiRWwawcTJonSQN9awkjNonR/WsZRMmrEqPisGjOSP1nPQ1+Bn9yH5e/txtj9o/xEP8Ap3tP/RCV/RXh+r5Q/wDG/wD0lH4lxev+FF+kf1OD+D3hTRPG+r63pusX/wDZ92dGu5dI3XEduk+oKoMMTvJ8gVvm+8V6dRX0mfV8ZhMNGrg43tKPNZXfL1st302PmctoYfEYh0sQ7JxlbWyuldXfTXuetXfwO+H6eHL5k8SIniCz0O11Od5tcsxaSSvC5khjZFZiwlAPyqylcLuBcMPjaGa54qlHmptxc5Jr2bu9dL7JKz3fbqk0e5PL8tUaqjKzjCNvfVr8t5dHzO+yX4Owmj/Cz4aTyeEI7q/1OOHU7Tz7q+j1iwaN8afLcTKsYzLAyziOICRefmHXBOE80ztU8TL2dnBrlXs3p78UmnrzKUXK76WVrLV6xy7KObDRlUbU023zrX3ZOzX2Wpctk97vdp28pk/4Q37Mt5aza2s4uQf7GnhhaMxeZgr9tDgljHzu+z4DcYOAx+jpzzdP2WIpp6X9opfaavpDR6N231tfqfNV6eXyXtKE3e/wOL2v1le22uytt0Pc/iDF4V8W+J9ZuNTv5I9EsdZ1pYdPsLi1iHl2unWogMTiHIEnkqighhhFAywJb4jA4TMMCoQw8WpOlT1cXZOVR3T9FLVX7n1OOq5fmEputUuvazslKOqUNGt9G4pJ2a9SjpvgP4c6TP8ADTxHFMs+nanqtrHqOlaprVpLJBljvLqkZDQg7S2/YQuVZQZMx9WIxGc4lYzDte8o6SjBpOzStF6Nuzemv912un59GhlFOeDxK1UpWnGUk2t/i6JXs09NN1seLeJrcaf4k1W1SIWyQXUsawidJhGoYgL5iAK+AANy8HGR1r6zLlUeEpOq25OKvdNNtJbp7fM+KzKNJYuqqKSjzOyTukrvZrR330KC12OJ5TJ0cf8A16wlEyaLCPmsWjFolV6ylEzaJ0fd9a53HUzaJkfIwawkjJo/W01/Pp/cB+XH7czY/aS8Q/8AXvaf+iEr+jvD1Xyd/wCN/wDpKPxXi5f8KL9I/qeU+BvB1345vNTtLK5tIriz0251EQ3MjK9ysKb3jiAVt8hUMQvAO08ivsc2zCOWUY1ZwcoylGLt0Unbmd+idj5TB4P65UdNSSaTav1sr2VurPTtb/ZY8S+GZ5Y9T1jQraGJJ7l7sTzNAbeG3hmluEZYSzxg3EcQ2qWLtgLjmvjVxhRlRi40pNu2l0mpOTgk29E7Jy1toz2qvD0qVVxlVjZX11aaUVJtJXb3Wwaf+z5LqmmQwWPiXQZdefV73ToUN9uttS8q2tpoxbOsZG5vOcEyMoBKKdrEis5cVK6rewboqMZN6e7ec4O+uvwq1k+o/wDV+79kqqVVuSS1960YyVrJ20lrdroWbX9nHVrHw5c67cXWm6xpb6ReX8E+mXzoivDbif8A1jW7JMNrbcREqXV1MiFTWeI4pi1OOHhyyjKCs0tVKTW3NeOlrX3Wu2pzQyF80PbTvGSk7puy5Yp78tnrvbbbc1PF/wCy3c+GPE+safF4t0OLStNmt7I6lq7vZrJdSQGcQfdZVYJhsltuHX5s7lXjo8X0FQpVatBxc76Jp+7F25vv6b6aG1fheq69ajSqqShpdq2rV0v+DsupxHij4W6p4Q8H6L4knurO807Uwmw2olYRu0QfYztGqOR8ysI2cKyFSQa93AZxDMa9WhyODg2ndro7ardeV9+h89j8olgaVOq5qSmrq19t9Hs/PqupxwbHTBHtXtyjZ2PnX5k6PiudxMmiZTgVi0jNoljkrCUTNq5ZV81i0YtEquaxkjNosI+frXPKJm0frnX87n9tn5Z/t0t/xkn4iH/Tvaf+k8df0l4eL/hHf+N/+ko/GOLV/wAKDflH9Tx/wT411f4f+JLTXtCvTp+q2m/ybkRpJs3IUb5XBU5ViOQetffY/AUMxoSw2IjzQlutemq2ae58hhsRUwlaNei7Sjs/w7PodFpnxt8aaQfD/wBl12ULoME9tpyywRSLDFMP3qFWUrIG6YcNgAYxgY8Opw5lkvbfure1acrOSbad099Nex2rN8ZD2XLU/hpqOisk9GttdO5p2P7Qvj+ytdWih8STxnVrie6u3EERcyzIscjI5XdGSiKo2FdijCbcmueXDeWNwcqV+RJLWWybkk9bNXbepH9r42Kko1fibb0W7SV07XWitpbYJPj145n0Q6U2uE2DW0lpJCLWAGaOSFYH8x9m6RzEqp5jEuAOCK56nDmWSlObo6yafxSto79b21103Mf7WxijGKqfCml7qTV1Z6pK913NKz/aP+I9lc3FxD4pnjubi0jsZbgW8PmyRRqyoWfZnzAHYeZnf0+Y4FY/6s5W4qn7L3Yu6u5PffS+393Ybz3MFKVRVfekrPRLbbpv57mVffF3xVqukWOmXGqJLY2UP2eKL7JAvyeQ1uN7BMyEROyqz5ZckqQear+xMDTm6vI7t3+KWmt3bXq90kl3ucU8yxEqapO1lt7q7W10u3bq2zmFkGSc9a9b3LWv+Z4krtEytg+1YNJoxaJ1fFYtJGLRKrDGRWLSsZtE8b4xnmsJRM2iwr5FYtGLRKj4NYySM2j9ej0r+bz+1z8rv27Xx+0r4jH/AE72n/pPHX9LeHKvkrf99/lE/HOK1fMH6R/Uzv2RPg3ofx1+JOpaBr9xf21nb6TLfI+nyIkm9ZoUAJZGGMSN2645r0uM82xWTZfDEYRpSc1HVJ6OMn19EefkGXUMxxUqWIvZRb001ul+p9cH/gnP8MUGTq3icD3vYP8A4xX4l/rxne3PF/8Abkf8j9BfCuWJXaf3/wDAGj/gnf8ADADI1jxNj1+3Qf8AxipfG+dX5XKN/wDBH/Ij/VbKeVzs7f4iRf8Agnp8M4sZ1bxLg4AzewYOf+2FT/rrnTbjzR0/uL/IHwplVrtP/wACJv8Ah318NFBY6n4kAHOTeQcf+QaUeM85b+OP/gEf8hS4SymKbkml6jLn9gb4YWNtJc3Gs6/BBEhkkllvoFRFAyWJMOAAO5o/1wzqUuVSj8oRvf7iHwhlMU3JPT+9/wAAsRfsA/DgqGTVfERVhkEXcBBH/fmk+MM5j7vtEv8At1L8kgXB2USV0pP/ALe/4B8dfHvwHp3wq+LmveFtJmuLjT7AwGOS7ZWlPmW8Uh3FQAeXOOBxiv2HIcZWzDLqeIru8pX/AAbX6H49n2BpZfj6mGo35Y2380n+pwyP3HSvblE+aaLCP78VzyRi0Shs9KykiCeN8cVhJGTVydHz1NYNGLR+wB6Gv5pP7TPyr/bwOP2lfER/6d7P/wBJ46/pnw4X/CJ/2/L8on49xT/v9/7q/U6j/gmy5/4Xtrw4x/wjc/8A6VWtcniO7ZVTv/z8X/pMzThNf7bL/C/zifod428Mw+N/COs+H7mea1t9Us5rKSa3IEiLIhUlcgjOD3GK/nfDYhYatCvHXld7H6piaXt6UqTdrrc8otv2aRZ+F5NBg8Uaja6bcWN7a3NnZx+Vbb7hbkboYg+2JFN5Kdh3ZMVucjyhn6N57H26xHsFdODV3dpRto31b5Ur9E2rO+nhxyiapKj7Z2s1t/MrX36L79NrGl4g+CWo+IdRS7n8WzRBEsZfsf2RmtRd201tKsqxmU7UP2cqI1II86Ql2JGJw+dww65FRTvz68y5rTjKNr8u65r3ad7LRa3qplE6jd6m9umnu8vS/Xl/FkcXwE1C40C70fV/Gup6tZT6Vf6S3mKQ7pcRW8aSsS5DSxrAxLEHc80jYXOKX9uRVeFenh4rllGVtLNxlKVtErJ83LZbRS3sZLI58kqc6raem3lbu/Uq+I/gBr3iLwtrOkXHj+8xqUhZibMmJUkhminh8sy4aIi4YxoT+6McPL7OVhs4w2H9m3QTcU03za6zjJNe7o1y8r3vFva50VcqqVObmrfF5abNbXv1080vn7Hp1ubKxt4CwcxRrHk98DGa+dqVPaVXJqybv/X/AAx7FCl7GnGnF3srdtj8yP2x3/4yY8Y/Wz7/APTnBX9DcJp/2NQf+L/0qR+A8VWebVmv7v8A6TE8jhfivruXQ+LkidWxz2rGUTFonR+a55IyaJVbNZSRBOj8VhJGTR+w56V/MR/Zp+Vf7eA/4yV8R/8AXvZ/+k8df0x4cf8AIk/7fl+UT8e4q/39ryj+p4VoPifW/CGoHUNA1i/0S/KGM3Wm3T28uw4JXchBwcDj2r9BxeCw+Nh7PE01OO9pJNX76ny9DEVcPLmpScX5O35G83x5+KH/AEUfxcf+47df/HK+flw9lfTCw/8AAY/5HpLNMb/z/n/4E/8AMF+O/wAUD/zUfxb/AOD26/8Ajlc74eytf8w0P/AY/wCQnmmN61pf+BP/ADJB8dvif/0UfxcT/wBh26/+OVk8hyxf8w1P/wAAj/kQ80xt/wCNL/wJ/wCZMnxz+J3/AEUbxb9Drt1/8crJ5Dlv/QND/wABj/kZPNMb/wA/pf8AgT/zJF+OPxNz/wAlE8Wn/uOXX/xysnkWXL/mHh/4Cv8AIn+1catq8v8AwJ/5lqH43/EoYz8Q/Ff463df/F0v7Cy5O/1aH/gMf8jGWb4//oIn/wCBP/Myb7WdQ1/UptQ1S+uNSv5yDLd3crSyyEDALOxJbgAcnoBXrUMLSwtNUqMVGK6Jed/zZ4OIrVMRJzqycn5tvy/Qcj4rdrQ89onV6xcTJomVtvPaueUTJonSSsGtTJolVu4rGSM2j9jm+6fpX8uo/spH5Wft3DP7SviIf9O9n/6Tx1/THhx/yJH/AI5flE/HOK9Mf/26v1Pnwpz61+o2ufGqQwx/hUuJXMCoBUuFxN3JkjrJ0zNslSOueVMzbJ40GfSsnAzkywi45xWDgYN3LMfBFZuJiyzHIKxcTJonVsGsXEyauTRvWUomciZWA57VhKJjYnjkwPaudx1M2j9kz0r+Vj+xD8rf27f+Tl/Ef/Xvaf8ApPHX9MeHH/Ik/wC35flE/HOLP+Rg/SP6nz/X6mfFAeaADFAFXUdXstGgE9/dw2cJbYJJ5AgLYJxk9+D+Vedj8fhctpKti6ihFu1/P5eh2YXB18dN08PHmklfpt8/UqweN9AmLBNZsX2qWbZcKcKBkk4PQetfNvizIv8AoKj+P+R6DyDM/wDny/vX+Zbl8V6NabjPqtnDsKhvMnVcbl3LnJ7rz9OazfFOSf8AQTH8f8iP9X8zf/Ln8V/mKPHHh9Iw7a3YKhxhmuFAPUDBzz90/kaylxRkn/QTH8f8jP8A1dzS/wDB/GP+Zf0jxRpGt3DQafqlnezqnmNHbzq7BQQCcA9MkfnXTg84y/Maro4Sqpyteyvt93mefjMoxuBp+1xFPlje263+T8jXR8ivUaVjxWrE8cnbP51i43M2iZGxWTiZOJOj9KwlEyaJlb05Fc8omTR+zROAa/k8/sFH5X/t3xsn7SuvswID21oyn1HkIP5g1/TPhv8A8iR/45flE/G+LP8Af791H9T59r9SPigoAKALFh8OD8Sr63sFv7jT3gLXCvbW8U7MSpiK7ZSF6SMeT245xX4/4lyX9nUad1rK+q7J/wCZ95wiv9pqTte0fza/yPc/hb/wSzstPeDXtO8aeKrLUImwscNrbRMy4yGDx3iMBnBHzA5UcV/PEk49bn6zCfOrpWPQdQ/YCfRbK3ZfifrkLww+UkM32lmgXH3P+P1lG3jGMgFQVPANZ6f1b/Iu7PH/ABt+wFF4kgisLj4kaqbGKQzLZ+U8sQkOcvtkmb5jubkY+83cklqy2X5f5Bqef6l+y5pf7Ol3a3Nrr02uXGqq8f761WLyVjKE4IYnneOPYV+t+Hcb4yvVfSKX3v8A4B+ccbT/ANlpU+7b+5W/UYjcfQdq/dLcr5Oqsfjsldm/beFryWw+2FoltwhkLCRXIXucKSfwxmvyrNOOMLlmJnQrxS5W1dtK7Wmis+uxtQweKxbaoU3JLd9F6t6D4/D17sHmRNC/eOTaGX2O1iM+2ayhxi6keZYb8V/8ieXiatLD1pUlJO3VbCQ6NdNO0YTBUAkkgdfTnkcdRx+uMP8AXSEqzpRw92t9Vp/5KdFSi6eEWMqaRk7Lu7bteSLI0S6QgYU/jWkuLF/0D/j/APank/WKcna5+x56Gvww/sU/Pv8A4KTeCpbTxb4W8Wxq5t76zfTJisZ2o8TmRCzdNzCVsD0iPpX794Y4vnoYnBt6pqSXWzVnp5NK/qj8s4ww7VSjXWzVvmv+H/A+Melftaetnp6n53a+wZqvmvvHysM0fNfeHKzf8LTm1NzKvlM+EULPA8qffzkqnzH7vb+lfhnijUfssLSW3vt+VuVeXd9eh+j8G07SxFTsl+v+R9QfDnUNIQ3N6+l6NLq8IitLRpNI1BtyxqAkZ8skMNsQ+4pHyg9OK/BrrofqF9TtfF1tMbeeT7LYR3F5aGOfytN1B1eMMqxDczAjaVbI6lSCBjFFxHnLeFPtNjHYxWGmxag6Sx3Ie1u2gb98pGHLqcD5zjd852sMAkUXGldpHC/tGxafo58M6LYKsC2kU8gtxk7Edk2nJ7Eo3ftX7h4b0HbF1HteKXy5j8t41mn9Xgv7z/8ASTx6OXAA6cjmv2hq8m+p+Xu1n8z1Hw7dW1m0LRXVxNLGm0SyOQF42/IMnGFAXlicDjA4H8iRyXC080xGPqrnqznJ3a2952S7WXUvPOKcdWw0cvwf7ukkk7bt21u9LK/RfezrdGsIdW1KKzjRfNeN5QXYhcKVBGQDz84/I179ouSSW5+aUMNOvCcnPlUbdL73812NbWPBs2jaPfXyW1rObaB7gwpcMGfaCQB8ncjGaJXirtHp0suni60KMsRq9F7t7L7x8vgO6Ck+TaBiMj/SG4/8h1NSnKUGlpdd7fozz/q9OErTrPdrSP8AnJH6UEZGK+G3P7mOF+M3wr0f4u/DzVfDusKixzRl7e6eLzGtJwDsmUZBypPIBG4ZUnDGvXyrNMRk+LjjMK7SW/mnun/W6T3POx+Ap5jSdGrot/Sx/PBBYfELWLJbuCHxGd6mUMLp0Ein7pRCASMemc1tX4izGrWnKOJmru9ueXX52/A6KeTYd0k/YRsvJHLXXi7xBZXEsE+q61BNGxR4pb2RWQjqCD0I9Kj+280/6Cqn/gcv8zF5dgv+fEf/AAFf5DF8cawc51rVx/3EHo/tvNP+gqp/4HL/ADF/Z2C/58x/8BX+Rvaf4v1CIQMnjbVLUPavO6pfXG9HBYCH7oBc4DZztweueK4cRjMTi3fE1HP/ABNv8zpo0KOHv7GCjfsrf1ufcX7M3jHWtN+HXhu6vtYnuriSHznkuGMjuGJK7mJ3HAI6ntXCdFj6Df42wvAIru6jdvVcqMfiTSEQJ8UNLmGftC4+tNX6DXmct4t+Bvjb9oPxFBrfg/Sor3R4IFsJbua7ihWOZWZypDMHPyyIchSOevWv1vg/iXLciwdWGIcpSlNtWjfTpu15/wDAPz/iTJ8ZmeJpypJJKK3fXr+Rr6X/AME7fiDIEk1LW/D+nwbd0hjmmnljH+75aqT/AMDx719JifEbBcyWGoTl62jb87+mh87Dg3FOLlVqxVvmfLvhnxKTKisxyQMg9j6V+Xe19pUlPu2/vdz89zDAKF12PavCvimDRryO7kSSZtn2dI4+WLOcjv8A9Mz0yautiqeFh7WpsjzchyPE5xUqYTDLV26X2u9F13Oz8W+JDrOiWVhAtxZ3F7OqFJCyBY8tlnZTtCkpg8jhsHrXhS4ky/ESdJVLNfP/ACP0TAcDZzgKlPFypXjLTVNNWs72eyd/M3IfF2iSWl3JcalFZvaxmSSK4DiRlWPzGYKAS2FBYkDHBrr/ANZcDFwXNv8AlrqeNHw1zvGyqTo8ul3a7Tve1tItdUfoLXhH9FHmf7RviS88L/CDX7qxZo7iWNbYSLwYxIwRmB7EBjz260mrqxUdz8yNa1e1to5HMShum7AGfpUqnFdDu9rJq1z4l/aF1Kz1X4iyzWaoCtuiTFB95wW6++3aPoBWjOBnmmOKQgoA+8fh7qEOh/DTwyJ5lgzYWyIX7sY14/OpHc+uPgt+xtafGX4ZaT4tu/FF/pk2oNPi3t4EdFEczxdSQedhP407CO+s/wDgnhpduo3eNtVkIPINrEP60w8j3r4I/CGD4KeE7nQrS8n1SOe8e8M1wqoVLIibQAen7sHPvR6AtFY1viF4Wu/HvhbxB4WlSO00nW9LudOmvY5szw+dE8ZZYyu0kbs8sPpR5kySlFxfU+S9N/4Je6Bpkgf/AITrVpWHXdaQjJ/76rthipR2jY+OxHC+GxF/ea9LHYWn/BP/AMP291BLceJ9WuVhYSBEVYmDCOZFYMrZBHnFgR3UVOIrvFUvYzWjNcl4doZDiViqFSfMuui/rZDPif8AsseHvCvgTVLxvEWpaZAlxFJG9rCDKrsyxpGhyQCWkbHGMvlgcV8zUwNDD81WlGKk9LvbTf8AA+5xGNq4iPNipSmoJvS7drfe9jjfBHgePxJ4N1drjS9FjcQtaXrs5mmmR9yiOMq/7v8AclCSGOAmAAWyuGEhSxc3OUYyUdFytO/6fqCxOJweCdLD1pxlfm96Mkr6SXuyeto7pH3VX0RyHln7VM0ln+zR8VL2FjHc2XhbU7uCQAEpLHayOjc8cMAaBo/n/wBY/aF8T61Ym3khtIpG4aaKNgSPoWOD/nFA+bS59dfsVf8ABOOz+J2gQ+PPiwL+PTrxhNp2iQTCJruEqGE00ikuqNu4VdjfLknBwTRoxc+qPty4/Z7+Efh7Rf7Osfh74YitkTYQdJgdmA6bmZCzH1LEk1wOMpOx2wnZHxT+1f8Asf8AgnVLS81fwVZQ+G9ciUFbS2ISzuMD7vl9I2IxgrgZ6g5yOxLl0Odu7ueYeKNcbw/qHhvRwqSWlsluxQLlmIJTH5DgevrViP2C/ZJ0q50b9nXwZBdW5t5ZIJbpUY5zHLPJKjdT95XVvx7dKAMXWp734g+M/E0HhLxYqJY3n2XU7eUXUZtp47cJHHEdmz7zuzlSQcJjBBp8tiU09uhVfwFrvhprDV/FHjS5i0GxgjfUJbG6ufNkuPNJDbdhBQlo1xjON3NEYubSQpyUI8zdhvibWfh/4DtbS513x54wsotUiaazln+1khQuDtKwZU7WzhuccgcZGio1JX0vYzdenFJ825seE08F+N/CttqOh/ELX9UsSySC8gv3aYAIPkkHl7lyPmKsAcnPFYOVmdDTSuP8PeO/AOk/GW18O2/jXWrnxRrVvNPbaDdpO1syDe7OpMQRCBG+MuOFIA5pRalsOzRV/a2uWh8B6HGbkQWU2twfbF3bRJGkcsoUnI/5aJG3Xqo6jIrvw0ZTnaNvnsfIcTYiOHwNpKXvNL3bc1rO9r6bHzRqHi/w5fRwafNPa3CSXEbxK33jPuwhyh5/1jDBzw7Gvb+qYXESj9bjGUlty73/AOGPxvD8R8R5JQnRyepUhBpp87i3aWstUlutlf8AI/QyvmD+kTwr9ujXo/Dn7IHxau5G2LJoFxaA5xzOPJUfiZAPxoA/FfwVL8OvEvhzwf4Tn0IweJby6tmvNTddu+28zdLgeX1KZAffjA6c1897LFxxUqspPk/xafdb9T9KWPyieSLAwjH2/Klf2XvXu3fn5u2nw9d9D9R2+Nq+FrNbW4Ba3Ee4zITgAcDpwckev4V6nt2t0fCLC+19++v9ehQn8bPqthLcyuyI4JRd+T0/T/61HtOYylS5ND55+Kni4208+66zCAflZua2i7IybW1jxrRvCdh4+hsdfmupxLayGONEI2PslJBORnrxW1zI/Zn4JhV+C3gMJu2DQLADdjOPs8fXFMD5PsNT8a3Gr/ETWvhd4i0zRtJm8czPqt3NapdOqi3jRhHE2BhpSS+SrHIcHaSTzY/EvC0edK7SOvK8KsZX9nJ2u+x9VnUrTxP8JoNV8Qwpp9vPp0V/fRP8qw7VWRwd3QAg9fSuilVsozt0OWtRvJ0r6Hg9x8VfDXjV/D3iHxBeQ6FZaZa/2hLFqEhubZVntPMQElF2sROoXjJ27VyWXHRRxHtYyS0ZliME6LhN6xR4t4c/af8Ahb4J+MNl4htlvrCz1q0NpqltpNmsVlEyOywTuu5S2VOT8u5QF46g+LHCVFXdRz0XQ9qpioVKCpqGp65YeHoNa/b48J63aGS606z8ESXEE8C7rYs880ZYMOMlZBXoQs480djypJxk4S3PU/2oooJPBVqZry1tZLe4N3Glwu55yqFNqDPXMo56Ada8zMs7rZHD29Bx5npaSbW6WlvNrUIcHYXjSSwOL51BNO9NpPaW97p6X00PmbV45/DttvfU9LlxOYHjs2kDDaAWcZAG0ZAznk8jI5rzocc5zGrShKNL3pJaJp66bttdTkreB/C9PD1sTTq4pclOc7tw5fdi7J+6/u3P0Hr6c6j5S/4KkyGP9hr4jYzhm00HB/6iVrQB8CfDL4YQvoHwx1ZNO8IrLqUMURL+HN0o2WrNveQTgu58g5bAyZCSDgVlPWEi4ScJKSPctK1K/wBcvbfRp7fRETVdI+3GaPTCDFnyQFAMnON/Bz/COK85SakkfQVKMYxbXQ17yTVda0VLVrjT7RXvprJJLSw2OghkuISc7zkMYN+Oo3Yycc9igjx6jdz4X+Pni3U9J1vV9Oacz/ZLqSDzcbd2wkZxzjOPWuhJWOY9g8F+D7LSfAumwK0z4gBZhM6b2PLNgNxk5P40En65/ByIQfB3wPEMlY9CsUGTnpboO9N6IaPi7/gnmBq7+PpbsCddR1G5mljfkBmW2MmP94tk/Qegrw52nmKpPZx/yPpKEnDLlUXxKe/ykfUMd7HrPwz8frqdv9rtDf3lpJbrI0e6IBUKhl5XK55HIJyK6sPUfsHLzscOLpRWIil/KmfNH7R10ll+znYzafG9nbXnhOxi+zmUvgLcacylmPLsA7LlvU+td9PSukuqX5s4Jyc8LJy6St+CPz88SxGcwW4cxrtkclR12Rs+PxxXZWfLHQ5qXvzs+iP0f/Yb8VXXi7x65uwM2HhhIkIOc+ZLHMe3GDKygegFeRlsm8FGLO7MopY6U0e5ftKeDIfE+kWmoTzlF0q1vJRCEB8xmRSvJ6AFASMc+1fJcU4SGKo8838EZtfh/kfZ8H42phcQ6NP/AJeSgm+q32t6nx74q2J4U1aSOKOOT7JMA4QZB2Ng1+g4HhvJKWEo4xYSPPyp3u78ygpX3tv5H8vZ5xrxfiMwxODnmk3Q9pOPI4wa5XNxcb2Ttb5n/9k=',
            },
          ],
          'type': 'filmstrip',
          'scale': 3000,
        },
      },
      'total-byte-weight': {
        'id': 'total-byte-weight',
        'title': 'Avoids enormous network payloads',
        'description':
          'Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'displayValue': 'Total size was 682 KiB',
        'details': {
          'items': [
            {
              'totalBytes': 74497,
              'url': 'https://cdn.ampproject.org/v0.js',
            },
            {
              'totalBytes': 59573,
              'url':
                'https://amp.dev/static/img/component-visual-site.jpg?width=470&hash=0ae2ab2813772ebfd1e3b935dfe23c8037201db5',
            },
            {
              'totalBytes': 47417,
              'url':
                'https://amp.dev/static/img/amp-stories-monde.jpg?width=680&hash=016e3ef1b6015c36dbbf4d84861c5807fb29bab2',
            },
            {
              'totalBytes': 37808,
              'url':
                'https://blog.amp.dev/wp-content/uploads/2020/08/Asset-2-80-300x150.jpg',
            },
            {
              'url':
                'https://amp.dev/static/img/case-band-image-4.jpg?width=330&hash=1130d8f01b674fb0f2a505cf422cd8d208623024',
              'totalBytes': 36771,
            },
            {
              'totalBytes': 34289,
              'url': 'https://amp.dev/',
            },
            {
              'totalBytes': 34191,
              'url':
                'https://blog.amp.dev/wp-content/uploads/2020/07/Asset-1-80-300x150.jpg',
            },
            {
              'url': 'https://cdn.ampproject.org/v0/amp-animation-0.1.js',
              'totalBytes': 32796,
            },
            {
              'url': 'https://cdn.ampproject.org/v0/amp-analytics-0.1.js',
              'totalBytes': 31220,
            },
            {
              'url':
                'https://amp.dev/static/img/case-band-image-5.jpg?width=560&hash=3530d3ec7ab20242dc2eb32ac2603896fcf8d359',
              'totalBytes': 23329,
            },
          ],
          'headings': [
            {
              'itemType': 'url',
              'text': 'URL',
              'key': 'url',
            },
            {
              'key': 'totalBytes',
              'itemType': 'bytes',
              'text': 'Transfer Size',
            },
          ],
          'type': 'table',
        },
        'numericValue': 698763,
      },
      'interactive': {
        'id': 'interactive',
        'title': 'Time to Interactive',
        'description':
          'Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).',
        'score': 0.83,
        'scoreDisplayMode': 'numeric',
        'displayValue': '4.5 s',
        'numericValue': 4455.760415752422,
      },
      'unused-css-rules': {
        'id': 'unused-css-rules',
        'title': 'Remove unused CSS',
        'description':
          'Remove dead rules from stylesheets and defer the loading of CSS not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'details': {
          'headings': [],
          'type': 'opportunity',
          'overallSavingsMs': 0,
          'items': [],
          'overallSavingsBytes': 0,
        },
        'numericValue': 0,
      },
      'first-contentful-paint-3g': {
        'id': 'first-contentful-paint-3g',
        'title': 'First Contentful Paint (3G)',
        'description':
          'First Contentful Paint 3G marks the time at which the first text or image is painted while on a 3G network. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'displayValue': '1873.1820037358182 ms',
        'numericValue': 1873.1820037358182,
      },
      'bootup-time': {
        'id': 'bootup-time',
        'title': 'JavaScript execution time',
        'description':
          'Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time/).',
        'score': 0.91,
        'scoreDisplayMode': 'numeric',
        'displayValue': '1.2 s',
        'details': {
          'summary': {
            'wastedMs': 1209.2999999999959,
          },
          'headings': [
            {
              'itemType': 'url',
              'text': 'URL',
              'key': 'url',
            },
            {
              'text': 'Total CPU Time',
              'granularity': 1,
              'key': 'total',
              'itemType': 'ms',
            },
            {
              'text': 'Script Evaluation',
              'itemType': 'ms',
              'key': 'scripting',
              'granularity': 1,
            },
            {
              'key': 'scriptParseCompile',
              'itemType': 'ms',
              'granularity': 1,
              'text': 'Script Parse',
            },
          ],
          'type': 'table',
          'items': [
            {
              'url': 'https://amp.dev/',
              'total': 1647.9840000000268,
              'scriptParseCompile': 3.656,
              'scripting': 9.716000000000001,
            },
            {
              'url': 'https://cdn.ampproject.org/v0.js',
              'scriptParseCompile': 26.104000000000003,
              'scripting': 1145.2239999999958,
              'total': 1522.1999999999955,
            },
            {
              'scriptParseCompile': 0.8,
              'scripting': 23.799999999999994,
              'total': 273.1480000000005,
              'url': 'Unattributable',
            },
          ],
        },
        'numericValue': 1209.2999999999959,
      },
      'layout-shift-elements': {
        'id': 'layout-shift-elements',
        'title': 'Avoid large layout shifts',
        'description':
          'These DOM elements contribute most to the CLS of the page.',
        'score': null,
        'scoreDisplayMode': 'notApplicable',
        'details': {
          'type': 'table',
          'headings': [],
          'items': [],
        },
      },
      'uses-passive-event-listeners': {
        'id': 'uses-passive-event-listeners',
        'title': 'Uses passive listeners to improve scrolling performance',
        'description':
          "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://web.dev/uses-passive-event-listeners/).",
        'score': 1,
        'scoreDisplayMode': 'binary',
        'details': {
          'type': 'table',
          'headings': [],
          'items': [],
        },
      },
      'estimated-input-latency': {
        'id': 'estimated-input-latency',
        'title': 'Estimated Input Latency',
        'description':
          'Estimated Input Latency is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. [Learn more](https://web.dev/estimated-input-latency/).',
        'score': 0.98,
        'scoreDisplayMode': 'numeric',
        'displayValue': '40 ms',
        'numericValue': 41.53333333333332,
      },
      'mainthread-work-breakdown': {
        'id': 'mainthread-work-breakdown',
        'title': 'Minimize main-thread work',
        'description':
          'Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown/)',
        'score': 0.58,
        'scoreDisplayMode': 'numeric',
        'displayValue': '3.6 s',
        'details': {
          'type': 'table',
          'items': [
            {
              'groupLabel': 'Script Evaluation',
              'duration': 1203.239999999995,
              'group': 'scriptEvaluation',
            },
            {
              'duration': 806.7680000000001,
              'groupLabel': 'Style & Layout',
              'group': 'styleLayout',
            },
            {
              'duration': 721.1600000000475,
              'groupLabel': 'Rendering',
              'group': 'paintCompositeRender',
            },
            {
              'groupLabel': 'Other',
              'duration': 630.0960000000014,
              'group': 'other',
            },
            {
              'duration': 115.412,
              'group': 'scriptParseCompile',
              'groupLabel': 'Script Parsing & Compilation',
            },
            {
              'groupLabel': 'Parse HTML & CSS',
              'duration': 100.59999999999997,
              'group': 'parseHTML',
            },
            {
              'group': 'garbageCollection',
              'groupLabel': 'Garbage Collection',
              'duration': 4.064,
            },
          ],
          'headings': [
            {
              'text': 'Category',
              'itemType': 'text',
              'key': 'groupLabel',
            },
            {
              'key': 'duration',
              'text': 'Time Spent',
              'granularity': 1,
              'itemType': 'ms',
            },
          ],
        },
        'numericValue': 3581.340000000044,
      },
      'redirects': {
        'id': 'redirects',
        'title': 'Avoid multiple page redirects',
        'description':
          'Redirects introduce additional delays before the page can be loaded. [Learn more](https://web.dev/redirects/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'details': {
          'type': 'opportunity',
          'headings': [],
          'overallSavingsMs': 0,
          'items': [],
        },
        'numericValue': 0,
      },
      'largest-contentful-paint-element': {
        'id': 'largest-contentful-paint-element',
        'title': 'Largest Contentful Paint element',
        'description':
          'This is the largest contentful element painted within the viewport. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)',
        'score': null,
        'scoreDisplayMode': 'informative',
        'displayValue': '1 element found',
        'details': {
          'items': [
            {
              'node': {
                'path': '1,HTML,1,BODY,8,MAIN,0,SECTION,0,DIV,0,DIV,0,DIV,0,H1',
                'selector': 'div.-ow > div.-ox > div.-ok > h1.-oj',
                'snippet': '<h1 class="-oj">',
                'nodeLabel':
                  'AMP is a web component framework to easily create user-first\n\nwebsites.\nstories…',
                'type': 'node',
              },
            },
          ],
          'headings': [
            {
              'key': 'node',
              'itemType': 'node',
              'text': 'Element',
            },
          ],
          'type': 'table',
        },
      },
      'total-blocking-time': {
        'id': 'total-blocking-time',
        'title': 'Total Blocking Time',
        'description':
          'Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).',
        'score': 0.87,
        'scoreDisplayMode': 'numeric',
        'displayValue': '320 ms',
        'numericValue': 316.4999999999998,
      },
      'network-rtt': {
        'id': 'network-rtt',
        'title': 'Network Round Trip Times',
        'description':
          "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).",
        'score': null,
        'scoreDisplayMode': 'informative',
        'displayValue': '0 ms',
        'details': {
          'type': 'table',
          'headings': [
            {
              'itemType': 'text',
              'text': 'URL',
              'key': 'origin',
            },
            {
              'itemType': 'ms',
              'text': 'Time Spent',
              'granularity': 1,
              'key': 'rtt',
            },
          ],
          'items': [
            {
              'origin': 'https://amp.dev',
              'rtt': 0.0009538193895892538,
            },
            {
              'origin': 'https://cdn.ampproject.org',
              'rtt': 0.00025128042244865374,
            },
          ],
        },
        'numericValue': 0.0009538193895892538,
      },
      'offscreen-images': {
        'id': 'offscreen-images',
        'title': 'Defer offscreen images',
        'description':
          'Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'details': {
          'overallSavingsBytes': 0,
          'items': [],
          'overallSavingsMs': 0,
          'type': 'opportunity',
          'headings': [],
        },
        'warnings': [],
        'numericValue': 0,
      },
      'user-timings': {
        'id': 'user-timings',
        'title': 'User Timing marks and measures',
        'description':
          "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://web.dev/user-timings/).",
        'score': null,
        'scoreDisplayMode': 'informative',
        'displayValue': '8 user timings',
        'details': {
          'items': [
            {
              'name': 'is',
              'timingType': 'Mark',
              'startTime': 308.013,
            },
            {
              'startTime': 310.453,
              'timingType': 'Mark',
              'name': 'dr',
            },
            {
              'timingType': 'Mark',
              'startTime': 321.463,
              'name': 'visible',
            },
            {
              'timingType': 'Mark',
              'startTime': 321.495,
              'name': 'ofv',
            },
            {
              'startTime': 343.506,
              'timingType': 'Mark',
              'name': 'ol',
            },
            {
              'startTime': 410.374,
              'timingType': 'Mark',
              'name': 'mbv',
            },
            {
              'startTime': 410.707,
              'name': 'e_is',
              'timingType': 'Mark',
            },
            {
              'timingType': 'Mark',
              'startTime': 549.78,
              'name': 'pc',
            },
          ],
          'headings': [
            {
              'itemType': 'text',
              'key': 'name',
              'text': 'Name',
            },
            {
              'key': 'timingType',
              'text': 'Type',
              'itemType': 'text',
            },
            {
              'granularity': 0.01,
              'itemType': 'ms',
              'key': 'startTime',
              'text': 'Start Time',
            },
            {
              'itemType': 'ms',
              'key': 'duration',
              'granularity': 0.01,
              'text': 'Duration',
            },
          ],
          'type': 'table',
        },
      },
      'uses-rel-preload': {
        'id': 'uses-rel-preload',
        'title': 'Preload key requests',
        'description':
          'Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn more](https://web.dev/uses-rel-preload/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'details': {
          'overallSavingsMs': 0,
          'items': [],
          'type': 'opportunity',
          'headings': [],
        },
        'numericValue': 0,
      },
      'speed-index': {
        'id': 'speed-index',
        'title': 'Speed Index',
        'description':
          'Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).',
        'score': 0.98,
        'scoreDisplayMode': 'numeric',
        'displayValue': '2.3 s',
        'numericValue': 2346.0228979669005,
      },
      'main-thread-tasks': {
        'id': 'main-thread-tasks',
        'title': 'Tasks',
        'description':
          'Lists the toplevel main thread tasks that executed during page load.',
        'score': null,
        'scoreDisplayMode': 'informative',
        'details': {
          'headings': [
            {
              'text': 'Start Time',
              'key': 'startTime',
              'itemType': 'ms',
              'granularity': 1,
            },
            {
              'granularity': 1,
              'itemType': 'ms',
              'key': 'duration',
              'text': 'End Time',
            },
          ],
          'type': 'table',
          'items': [
            {
              'startTime': 117.341,
              'duration': 9.731,
            },
            {
              'startTime': 131.357,
              'duration': 5.31,
            },
            {
              'duration': 14.443,
              'startTime': 140.485,
            },
            {
              'duration': 24.086,
              'startTime': 154.94,
            },
            {
              'startTime': 199.146,
              'duration': 7.651,
            },
            {
              'duration': 22.158,
              'startTime': 206.814,
            },
            {
              'duration': 61.787,
              'startTime': 234.348,
            },
            {
              'startTime': 323.317,
              'duration': 46.442,
            },
            {
              'duration': 6.475,
              'startTime': 370.775,
            },
            {
              'duration': 8.373,
              'startTime': 379.928,
            },
            {
              'duration': 40.025,
              'startTime': 392.752,
            },
            {
              'duration': 8.576,
              'startTime': 433.199,
            },
            {
              'duration': 8.123,
              'startTime': 441.815,
            },
            {
              'duration': 14.956,
              'startTime': 452.345,
            },
            {
              'startTime': 467.415,
              'duration': 38.152,
            },
            {
              'startTime': 505.627,
              'duration': 7.161,
            },
            {
              'startTime': 520.766,
              'duration': 6.648,
            },
            {
              'startTime': 534.031,
              'duration': 7.751,
            },
            {
              'startTime': 542.472,
              'duration': 15.046,
            },
            {
              'startTime': 557.532,
              'duration': 8.29,
            },
            {
              'startTime': 575.797,
              'duration': 6.844,
            },
            {
              'duration': 12.627,
              'startTime': 587.931,
            },
            {
              'startTime': 604.238,
              'duration': 8.285,
            },
            {
              'duration': 7.16,
              'startTime': 617.228,
            },
            {
              'duration': 6.764,
              'startTime': 624.419,
            },
            {
              'startTime': 631.234,
              'duration': 34.29,
            },
            {
              'duration': 6.094,
              'startTime': 665.684,
            },
            {
              'startTime': 672.678,
              'duration': 7.175,
            },
            {
              'duration': 7.36,
              'startTime': 685.931,
            },
            {
              'startTime': 699.805,
              'duration': 29.7,
            },
            {
              'startTime': 736.582,
              'duration': 11.081,
            },
            {
              'duration': 5.148,
              'startTime': 1656.653,
            },
          ],
        },
      },
      'final-screenshot': {
        'id': 'final-screenshot',
        'title': 'Final Screenshot',
        'description': 'The last screenshot captured of the pageload.',
        'score': null,
        'scoreDisplayMode': 'informative',
        'details': {
          'timestamp': 121777412042,
          'data':
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyARgDASIAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAAAAECBgcEBQgDCf/EAFkQAAEDAwIDAwQNCgIGCAMJAAECAwQABREGEgchMRNBURQiYXEVFhcyVIGRkpOhstHSCCM2QlJTVXSUsXLBM2JzgrPhJCY0NTdDosMnlfA4REVWV2N1o8L/xAAbAQACAwEBAQAAAAAAAAAAAAAAAgEDBgQFB//EAD0RAAEDAgIFCgUDBAICAwAAAAEAAhEDBCExBRJBUZETFBUyUmFxgaHRBiJTscFC4fAWM2LxBzQ1coKi4v/aAAwDAQACEQMRAD8A5rooooQiiiihCKKKKEIooooQiiiihCKKsfhpwyXrOCuYu7QobKX22dhdSXOajuJSTy81KiPHFb3QnDu1XK03hyTFXeZEW6JhIXEuTbDfZFOd4WrzVeoUIVN0Vad80dZrZp/XhjJdfetVzjxYkh7claUKUQoFIwD68ekVr7rwunx7TCn2uezcm5M1uBtDDrBS6v3uO0SNye7cOVCFXlFXBpXh1Z4+tnLNcrpCvchqLK7eJGS6gsPNoyPOwN3Pw8DWBpnhzFTqoWfUMoOS/Yt6a9FjqIVFWEbkIWrpu7yB0oQquoqZ6HsMa76c1VKkssEwY7K0vuOLSWNzmCoJTyVy7jWwlcKruxNu0ZMiO4YciLFZWM7Zbj+NgQfUcknpQhV5RVrPcFrp7Iwosa6Q3e2lKhPOLadaDTqUFZA3JG8EJIBTnJ5Vl6G4a2SdqC+Wy7XByUmLDQtp5ptyP2Tq3NgC0OJB5Egnl0oQqeoq0bfoK3tcLr7drqmQm+xlLUy2F7UobQ6lo7k9+Vbx/umtRN4eOM6UTfWLqy7HQtlElKozzXY9r0OVJG8A9duaEKC0VcCeFNmOvVWAaobUlqGZTyRHc7RGGUr67dpB3Z8dvLrWl03wtkagjLlQbxGMRyWqHCe8neIkrABzyTltPMDKsUIVc0VNLvoF+zaWbvN0ucGMt7ehmEokvOOIdKFpAHLzcZJ6cwKhdCEUUUUIRRRRQhFFFFCEUUUUIRRRRQhFFbn2t3H92j54o9rdx/do+eK7+i7z6TuBXLz237Y4rTUVufa3cf3aPnij2t3H92j54o6LvPpO4FHPbftjitNRW59rdx/do+eKPa3cf3aPnijou8+k7gUc9t+2OK01Fbn2t3H92j54o9rdx/do+eKOi7z6TuBRz237Y4rTUVufa3cf3aPnij2t3H92j54o6LvPpO4FHPbftjipJpLihfNL6dNotxT2faOOIcJOUbmygAeoqKx6a8bDr4wbTNgXizxb0iVNTcFKkuuIIeCcA+YRnqeR5Vofa3cv3aPnij2t3H92j54o6LvPpO4FHPbftjipJJ4nXSS5eXpEWIt65zY01asEBBYI2JA8MADnWfe+LlwntuiJbYsNxy5NXUuB1xw9uj/ESNvTzRgDFQz2t3H92j54o9rdx/do+eKOi7z6TuBRz237Y4qXt8UPJdUL1BbdPQIV0eS95Q6286e1W4nBVgqwnByeXea84PFGWze4F3l2qJLuLEFcCQ8ta0mWhQwC5g++A5ZHM1FPa3cf3aPnij2t3H92j54o6LvPpO4FHPbftjit2dbR41vvkGzafh22LdoyI7qG33XNu1RVuBWonJzjHTlXtN4m3qRZdOQG0ssqsjyJCH05KnltgBsrzyO1Ix6qj3tbuP7tHzxR7W7j+7R88UdF3n0ncCjntv2xxUkvGv413uaJszTzCnFOqffSJ0gJWogjKRv8zBOeXf6KybnxXuc2ROdTCjtGRb2rcg71rW2hte9KipRJUrPeaiXtbuP7tHzxR7W7l+7R88UdF3n0ncCjntv2xxUr1BxUuN6dvCnbfDZTcYzUYobztb2OFwqA7ypRJOfGjVXFCVqG3XWKu1RIy7oWVyXUOuKJU173aFEhI68gO+op7W7j+7R88Ue1u4/u0fPFHRd59J3Ao57b9scVK/dOcGq4uoEWSEmeIxizD2rhTLQWg3zGfN80D3tY9t4goh2t21KsbDlrEpUqMwmW+2Y5UACnelQUpJwORNRz2t3H92j54o9rdx/do+eKOi7z6TuBRz237Y4r21DqV+92ezW95httFsS8lC0qJK+0XvOc+BrQVufa3cf3aPnij2t3H92j54o6LvPpO4FHPbftjitNRW59rdy/do+eKPa3cf3aPnijou8+k7gUc9t+2OK01Fbn2t3H92j54o9rdx/do+eKOi7z6TuBRz237Y4rTUVufa3cf3aPnij2t3H92j54o6LvPpO4FHPbftjitNRW59rdx/do+eKPa3cf3aPnijou8+k7gUc9t+2OK01Fbn2t3H92j54oo6LvPpO4FHPbftjip3WXEZiONkyZamVZwEhoryPHOaxKK+qESMDCxAwW61FEiR2oDkZWHnmsutbCjAHvV4JONw54+MciKlvD+NKXoe9yLTbGJ9zRLYSgORUvkJIO7kQcCq5UoqJKiST3k5r1YlSI6VBh91oK6hCynPyVx3Fo6rQFLWxkHHuMx+FfTqhj9eP5CtJzTVnk6tvhTbTMchxGXTaYbuwKeUEhxKVDnhJJOBWhuFlsdp4motUlKnrStSELQXDuZU4gcioHmUqI+TnXrC0RmHpSci8pQ7eny0tLavPbyrGU/tY7/A4rEkaPuNpu9tfSIt0bendghDT4US4lWdjh/VJHrry6VRjXFnLk/KRGIxGEyTGbSd+OJyXW9riAeT2zvzx/I9lvRou1wtSWywTmi/cGoz8qUlp4gyVcy2ynnhPIdRz505/Rtsdu70ePAfYlSLK7Lati3VKcYkDISnPInOM4NaHiVZ77CvC71d1sKM55W12K6VJbUP8Ay84BBAwPirzn6LvcOG/clTYjjrMdEtaG5RL/AGSgPPxjOBnB/wA6Uaz2MqG5guHf1px25SY34ZwpdDXOaKWR9OG4LY3OwMWK9aICIy48qS2y7KSsnPadoM5B6eqpVqTSVnkXKVMnW6Tb1+zKWi49IymclxzzikDG0DORjuHPnUHmaE1G3Z2rrIcaUhKEOFBfJdZQojCiMchzzyJIr0e4f6jdDwceZdDE1MM7nlnz14wsZHvfOHPrz6Ur9Rxa/nMESCcccZ394GM7wpbrCRyWBg+ngpZaNExrdPD8mDIjPJ1D5PFWXFpPk/VJTz5/4uvprNl6XtNwdtCH4ZeLbNxe8naVscmLQ6AlBX1J59etV5pOyu3q/SolwvDsaHDyp6WhalpSQoISRnHUkYPhWyhaJnSYOpnTcJAn2N0oaZyfzvvlKIOcglKSeXWqqlIseTUuPmEbDhOA294ndMp2Plvy0sD3jZju7ll8QYEC1uaOxavI2lNb34zihvx2gylagMkgcsnnUi1BAssXUGslyLEhMKPAYdQhB29rkp85Bx5meh2+B760KeHRdc083cbrKLk+O886hKN5YKEBe1IJ5k5rTXXTBY1DY7e3cZqot2Q3gvoKHW0le3apGe7GfCmbyNQMYKpkB2PzYjW1t/8AiR67lDuUbLuTzjduj8hSL2vWptN48iafagyolukoYLyjsDrqdySc+d39axdQac0661dW7ZFft7lsujURx5b5cDiHFEZwemMcuvprV6h0xHiwbq9ZbxMluWuQiLLYfb7MjzilJSQogjcOX+Vedy0HqG1ssSJrsbY9IbQ8C+Vhpaj5vajHie7NWUi3B5uCCd8iYDcwc5G/eNqR84jk/sdp4Y/ZTK86IsbFsujnsFOhmLNjxmnlSSoyG1OJSVoBOPOB7+Xq51F+KGm7dY1W6Va4L0WO8txtTTzijkoI54VhQyD3ZHga2uojfLjaHbVHtdvgLlXIQnW2XVlUh1sZykK5JbHI8sd1a1rhzdl6jtMC9TEmNNLjaJTDheCFISVFOFYweVV2VY0yKletlJiSZAaO87ZO3u7nrtDwW06ecYxEGfAeCk44e2KTsTGbIdlvInR09qo7YQLYWk8+vnqOevKvazQrMqbYG1Wzy1qVa5ao7DjylAYWSEpBzzI5cvXUAY0dqBy0i4syG/8AQKdaj+U4fWwk4Kko/Z9Gfir0OhL6m3x5bc2GtfkgmMR0yiHuyxk7UkDp3/51D6THAsqXU4kbcDBG/wAOBQHkHWbRj/YO7+YKTWO0WGfbNKwbnaXEvXGRNZSptzs1M4UMbjjKyOQGfTWh4bWhhF9u02aITka1trSkzlJQyp1RKEBRPLHU/FWF7StQo06i99ohLKGvKktdue2S2f8AzAnuB69c1rtQ6fn2CLHM2ZFUJaUOhlp8qWUqTuClJwPHHPvrrYxlQPosrzryNp2kmMdxj1VLnOaWvdT6sfYAbN4n0Vpw9NWqJP1a3KjxXIE5EZUN5ISpLYfUUgoV3AKPUdwr3g6ftUB7SVrMSK9IjTnI8x1TaVdq52O9QJxzAKsc/CoLetIiDZoTka9Snn3wwlCVNK8nXvI5IcBI80nmDj0VrmtJXxb89KJjQXBnohuHt183Vq27k8unieRrgFBlRpcbjDwIyAaD6+q6OVLCByXqN+spM1cLfK1RZG7NMZFxSw8iXPgWxRBJ5p2NAA7gARuA7689ITbfqXi2/NMNAhvMuLDbzaV80t43FPTJIz8dRiZpC6WyTdEImQ1SrY2HXkRnypYSVFBxgdRyJBxgKFZVv0DfXbxNhx34rLsJKO3eLykoQpYyEZxnd3EYrtNK1FN+rVzaRPiZnADe2Bs2KgPrFwlm2Y8P9GfVSrTZiXpm9SN6ZLDUq3tNlMZMVDiS8M72kHaealDnmtPxKgRGIlqDDLEbtLlcW1rQgJ81L6QM47gOgrSt6OvzRcabKUOpnogusodVlDh5oUrAxtPcedPumn0RtIS58iYuRMjXUwsocKmSNpUpQyM5JHXvpabKNO5bUZVkSAABvbq7MO/LwQ5z3Ui1zIMZ+c/spXqvRtktsJa0Q5ERuJLjsplvP7k3BC/fqA7seisK86QiWZjUMyXbHUR4tzYbh9otQC2Co7sHPnAjHPnVbredcQhDjrikI96lSiQn1ClckvuIKHH3VoOBtUskcunKuynYXDQA6sTvz3jv2weMDBVOuKbiSGRw7+7v9FM+McWLE1o83BtqYMctNqSUe8eygeckdAO7l3gmoPT3HXHdvaOLXtGBuUTgeFMrvtaJoUW0iZgRK56z+UeXgRKvDhdwlg3OysXbUZccElO9mMhRQEp7iojmSeuOVR/i/wAN2tJts3K0LdXbXV9mttw5LSscufeD9Xx1b+kS3qfhvZ0W+X5OtDTaFOt53tKRyOMEc+XfywehrQ8dp8e2cPGLQ6tC5clTaEJHXCCFFQyc45AfHWLttJXj9IhrnHF0FuwD9uOGK0FazoC0kDITO8rm6iiit4s2p/7kGtP4Y1/VN/io9yDWn8Ma/qm/xV1VRXz/APqm87LeB91qehLfefT2XKvuQa0/hjX9U3+Kj3INafwxr+qb/FXVVNC0E4CgT4Zo/qm87LeB90dCW+88R7Ln636R19DhWSP7BQXTaJBfjOKlI3DJ3FJwvBBPx8q84ujuIURptMe0xELbuPsklflLZIXjG333Suh6K5Dpyq4kmm3HuPee13lW9F0+2709lzlqXQetr2hlsadt0JttSnCI8hGVqV1JUVE+odBWS9pHX7sma8bJDCpVuTblASkckBITuHndeVdCUVPTtXVDOTbA8dpntbwjoqnJOs7Hw9lz/ddKa+uVqVEkaftnlC2kMuS+2bLqkI6DmrAOBjIGa2gg8TBLEj2FgbhF8mI8oRgq5YdPne/G0VdlFVnS7iNU0mx4Hb/8u4Jho5oMh7vT2XO+nNHcRdOW6ZGtNriMuyloU5IU8yteE5wnCiRjmT0rbptPEhE5cxNkgCS68y+8sSUDtFNoKOY3Y84E5xV40U1TTVSo4ufTYSc8Djl39wUN0YxoAa90DvHsqLTZuJCZkWV7DQu2jqkrQoSkDm91/X5be71VHY/DziEi+xbtJhiZLYcQ4FSJqFlW05AJKs4rpaimZpyrTBDabMRGRyxwz7yodoum7N7uI9lQF90pry5xZTEbTtut6Jb4kyVR5KdzywcgkqWTgEk4FeeotI69vkdSHdP21h91xLr8hp9HaOqA5HJUdvjhOK6DoqGabqM1dWm3DLrd3+WOQz3BS7RdN0y52Ph7KhrxYOJNzu1puBtEJmRbjvR2chvC1nGVKG7mSABSo07r1m9QLhE0zaY5hqcWltt9GFqWCCVKK9x68hnAq+KKXpl4AbybYAIyORn/AC7zxU9Gsmdd2/Z7KhY+nuIjFsRGTYraZTUZcRqYX0dqhpRyUjz8fHitve9OasZi2xFmscB6U3akQly3HkhxlRBC0pyoA8u/B6mrjoqt2lXucHcm3bvxnfj6ZJho9gEax9PZc/SdJ6+lWNMCRp+2uPJjpiCWp9BcDSegGVYBxyzjNanUHDjXN7mtyZFojNrQw2wAiU3jCEhIPNXXlXS9FdFLT1aidZlNoOOw7fPuVTtE0niHOd6eyoFWltfJs64MTTtriF3su2dZeQkudmoKSdu/aDkDJAyazX7Lr5wSC3pi1MrkSmpjy25KcuOIUDk5X347qvGiqjph5zpt/wDt3f5dwTjRrB+t3p7d656tmj9f2/Vku+oskJx2UpwusLktltQWckY3ZxXrB0pr9iXdXZVigTWrk8H3mXpKNoWkkpIwsHlnHpFdAUU7tN1HZ025AZHIZfqSjRdMZPdv2bfJUpo3SmsrUdTzZUGM1Jms/wDR47TjYQXc+aRg4SEioX7lWsDbTGNijF4u9p5R5YnfjGNuN+3Hf0zXT9FTT09XpPc9rWyY37BA2ofoqk9oaXHCd23yXKvuQa0/hjX9U3+Kj3INafwxr+qb/FXVVFdX9U3nZbwPuquhLfefT2XKvuQa0/hjX9U3+Kj3INafwxr+qb/FXVVFH9U3nZbwPujoS33n09lzZp/QfEvTzy3LM35IpeN4TKaKVY8UkkGsW78NeIV4mql3SN5VIUMb3JjZwPAedyHoFdO0VUPiO4D+UFNmtvgzxlN0PSLdTWdG6f2XKvuQa0/hjX9U3+KiuqqKt/qm87LeB90vQlvvPp7Io6UVj3FK12+SlrPaFtQTjxxyrNBeucFzhxW4mTrxdX7fZJLsa1sKLZU0rap9Q6kkc9vgKhKbbcImn2tQ+UuMJek+TslKyFrISSpQPgOnrNalpCPLEolqWhvtMOqSMqAzzIHeavLXNz0o5wltrsWAVp2rj2xt8lK0notzCTzxjOT348a+kVNTRoo29CnIcYJAz8e8+glY9utdmpVqOxAkfz+YwvbghxEl3OYnT98e7Z8pKoshXvlYGShXicZIPoNXXXHnDNp93X9hTFBLglIUcfsjmr/0g12A86hhlbrqgltCSpSj3AdTWW+IrSnbXQ5IQHCY75K9zRFd9WidczBVa8ROKadI6iatjduEwBtLjy+12lAJ6AYOeX96kGvdYDTOlW71EjomtuLQEJ7TYClQyDnBqgnrw5fpmq7g7ZZ89y6DsYzzDZUlgBQIzgHJwlHyHxreXO8i7cAozKlZfgy0RnAeoAyU/wDpI+Sut2iKTORBbjrNDsc5g78IMjYuZukXu5Qh2wlvdH33q5dIawjag0b7PLQI6W0rL7W/d2ZTnIzjwwfjqIac4su3my6hnm0oa9imEvJR2+e0ySME7eXT01WbsidpyLcdKQ0LLd+TEcYUP1UrA3Y9fvfirP0/Dbt9u4pQmRhqO2Wk+pLiwP7VJ0XbMbUcRIJaW4nBpc0Hb3xjuKjn9Zxa0GIBnxg+0+amDHGS4NxItxuWln2bQ+raJTbxUOuOWUgHoe/uq4Yr7cqM0+woLadSFoUO8EZBrn7SGjNUau0XaYsi7xI+mdxcQ0lGXRhSs580Z55/Wq/oMVuFCYisAhphtLaAfADArzNL0rWk/UoQHAkGJOAymducxgu7R9SvUGtVmCBEx55bF70UUV469FFFFFCEUUUUIRRRRQhFFFFCEUUUUIRRRRQhR7WmrIWlIcZcpqRLmS3QxDhRUb3pLh/VSPADmScACtRZtevOX6JZ9T6duOnps3PkapDjbzL6gMlAcbUQF4BO0+FYfERMuz6w0zqtEB+4W6Ah+LMbjt9o7HQ6E4eSkc1YKcHHPBNR/W+vLLqGdpiBblPmJ7Lx337m9GcajxthKkp3qAG9ZG0DwJzjlkQrkooooQqwvl44sM3ma3Z9L6fkW1DyhGddnFK1t581Sh3EjGRWD7OcZv8A8o6b/wDmB++oHrOPw7Xq68quXFLUEGaZjvbxWpS9jC9x3NpATyCTkAd2K03kvDH/APV7Uv8AVOfhoQrVF84zZ56R03/8wP31bMYuqjtGQlKHikFaUnICscwD665SEXhjkf8Axe1L/Vufhrqm3dn7HxexdU812SdjijkrGBhRPp60IWRRRRQhFFFFCFQ3FThNMeub110uyl1t8lb0UKCVJWepTnqD4d1V47pnWFz8jguWa4lMRvsWUqYKEJBJUfOPLmSeea68or37b4iuaFNtNzQ7VyJzXk1tEUqjy4EicwFVfB7hs5phSrreShV0cSUNtJOQwk9efeo/VVnTYzM2I9Gko3sPIKFpyRkHqMjnXtRXk3V3VuqprVTif5gvQoW7KDOTYMFrrDZLdYIAhWiKmNFCirYkk8z1OSSa1CtAaYVGmRzam+wluJefQHXAFrBJB99y98enjUoopBcVWkuDjJzxOO1MaNMgAtEDuWke0pZH51vmO29tUm3pCIzhUrLYHQdeePTmvJGjrAg3UptyB7KZ8s/OL/PZJJzz5cyemKkFFQK9UYBx498/fHxRyNPsjh5fZYdntcOzW5mBbGAxEayENgk7cnJ5kk9SazKKKrc4uJc4ySnADRAyRRRRUKUUUUUIRRRRQhFFFFCEUUUUIRRRRQhFFFFCEVg3q0wb3aZVsusZuTBkoLbrSxyUD/Y+nurOooQsOzW5m02qJb4ynlsRWkstl5ZWvakYGVHmazKKKELWyLBZ5Dy3pFpt7rqzuUtcZClKPiSRzrz9rVi/gts/pW/urbUUIWp9rVi/gts/pW/urbJASkBIAA5ADuoooQiiiihC8Sg+mk7M+Jr3ooQtLqgLb03dFpUpKhFcIIOCDtNcseyM/wCGyvplffXVmrP0Xu38q59k1yTWm0A0Fr57vysl8SOIfTjcVli4z/h0r6ZX30ouM/4bK+mV99YgNPFe+abdyzOu7esoXGd8OlfTK++lFwnfDZX0qvvrFpQaU027kpe7esoXCd8NlfTK++l9kJ3w2V9Kr76xRThSGm3co13b1ki4Tvhsn6VX3072QnfDZX0qvvrFFOBpTTbuS67t6yRPnfDJP0qvvpwnzfhkn6VX31i0oNKabdyUvdvWUJ874ZJ+lV99KJ834ZJ+lV99YwpRSFjdygvdvWT5fO+GSfpVffS+Xzfhkn6VX31jilFKWN3Jdd29ZInTfhkn6VX30onzfhkn6VX31jilpSwblHKO3rIE6b8Mk/Sq++nCdN+FyfpVffWN6aUHNJqDcl5R29ZPl034XJ+lV99KJ0z4XI+lV99Y9KKUsG5Lyjt6yPLZnwuT9Kr76Xy2Z8LkfSq++scGlBpSwKOUdvWQJsz4XI+lV99OE2Z8LkfSq++scUopSwJeUdvWQJsz4XI+lV99KJkz4XI+lV99eApRSFoSmo7esjy2Z8LkfSK++l8smfCpH0ivvrwpRSloUco7evcTJfwqR9Ir76cJkv4VI+kP31jinA0paEpqP3rITMl/CpH0ivvorxBopdUJeUdvXT9FFFZxfbFqtW/ovdv5V37JrkgV1vq39F7t/Ku/ZNcj1qPh7q1PL8rJfEnXp+BTs04GmA0taEhZghegNLTAacDSkJU4GlFNpQaUhQU8UoNMFOFIQlITwaWkQlSidiVKwM8hmgUpCWE4GnA0ylBpSEq9AaWmA0oNIQoITwacDTKUGlISwnil9VNBpR6KQhQnA06meqlBpSEpCeKUGm0tKQlTgacDTM0oNIQoIXpmlBplOBpSEqeDS0wGlBpCEpCeDTgaZSg0pCghPBopoNFLCWF1HRRRWZX21anVv6LXf+Ud+ya5HBrrjVv6LXf+Ud+ya5FFar4c6tTy/KyfxJ16fgU+lBpopa0RCzKsXhHZYMly53m9sNvW23sncl1AUlSiM9O/AH1ivHi7Y49pvzEu2tNt22c0FtBpICAQACAB6wfjqaWtqy6Z4Yw4WpnXWRdcrcS0DvOfOxy8BtBrz1g3a9R8Lg9p9xb7NoUNvaAhYSAAQc/6pz8VZpt07nnLY6hOr3Rsx8Von2bOZ8jhrga3+U5kRu1Vlas0fbZXDtuRboEZi4Mx0SAppsJU5gDcCR15E/HitdwW0vb5tqlT7vDjye2cDbCX2woAJByRn0/2qSTLui1y9GtPkeSzWFRnQf8AWQjb9ePlNPgOR7Zrqz6ct/mxIUF1wpz1UojmfT1Px1wCtVFuaU5y6e4TPqBxXcbegbltaBhDY7zEHgTwUY4e2m1PXrWpmW2JJahyPzLbjSSEDc7yTkchyHyV5y4Ni1boO5XiBZm7RKg7lJLeML2jJHIAEEcunI1s+Gjxj33X7yQCpuTuAPQ4W9UC1NxEvOoLauA+I8eMvHaJZSQVgHOCSeldVOlVq3BNPZqYzlgJw2yuGpUoUbVvKDPXwgYnWMGdkLccFUS3rnc24TkdsqYG4utb+8+kVrtO6EdulnF1m3KPbojjhbaU4ndvO7b4jHPlW74Bf9+XL/YJ/vWfw+cmydJmNBl2+5BLp7S1SmgkpBWScL3dO/mn0VZc1qlKrVNMxi37H+Y4Ki1t6VajRFQE4PwnbI758hiq51RYZenLquDO2lQAWhaferSe8VvdLaBl3q0KucmYzb4R5NuOjO/njPUYGeWaTivCs8DUaWrIW05by+22cpQr0eHqqWwYzOteGtvtlvmssToG3tGnDgcsjn6COeedXVbqoLenUBiYkxl5Llo2NI3VWk4a2qDDZzO6cMuKi2oNAybFpoXWVMbUvfs7FCMjBUQFBWeYIwenfWBb9LqnaPnX1qWMxFbVx+z59Rz3Z8DnpU91dGahcHokViYmYhlwI7ZPRRDhzj0A5A9VaDhC4md7NWF5e1ufGJBPcRkcviV9VVMuapoOqkzqu3bMP5vVlWxoC6ZQDY1mb5hxBjHx8lgXDQsmFoxq/mUFhSELUx2eCkKIHXPpHdTZ+h5bDtljxXxImXJBX2Wzb2QABJJyeXP6qsSPNZumrL3pfcBAEJDDafApHM+vzvqFa+RqWHbuLKG5KwiHHiiGHD0QogKyfjwKobd3BJGZgu8iMFdV0dZtAdMAkMmdoJ1j5geAUen8M5jMR9cG4RpstgZcjIGFD0Dn1+St5YrMq8cJW48dLKH1uqy65gBIDpJJPqFblTKrC9crvLuVriRXCVMuRoqO1dBOcKPeenjnrWuskdF14RqYflohmS6vDq+SQovEgH0E8vjql1xUqMBc6YcMY8eMLoZZUKVVzWMgljpEjeIxkxPf5KG6p0PKsdsbuLEpqdCJwtxoY25OAepyM8s1ER41a94YZ0jw1k2ebMakT5isobQcgZUM49AAznxqp69GzqOqsJcZg4HKQs/pS2p0KrQwasgEiZg7pTgadTKUGukheWQn5pabSilISp+aUGmU4UhCiE8GlBpgpwpSEqeDS0wU4GkISlOBopKKWFELqWiiisuvta1Orf0Wu/8AKO/ZNciA113q79Frv/KO/ZNchCtX8N9Wp5flZT4j69PwKeKcDTAaUVpCFmin0uamuk+Hc++2oXJ6XHgQlnDa3uZXzxkDwzyrDvehbza9QRrT2IkOyv8As7jZ81wd/M9Md+a4he0C80w8SPxmrzZVwwVNQwcvPLiouKcDVjyuEl0aiuGNcIcia0ncuMkkH1A/eBWn0foSXqe2z5MaShl2Kvs+yWn3ysZ655VUL+3c0vD8B+VLtHXLXimWYnLyzUSBpasKZwouzcRl6BLiTt6glYQrAR4nPeB31h6n4dzrHZPZREuPNjJIDpZ/UycZ9IzypW39s8hrX4nBD9G3LAXOYYGPkoUDSip/C4YTZdottxbuEdDEttLqy4NoaSRnmc8zzxWr1Zoa5adkRE5TMZlqCGXWR75X7OO4+FQ29t3u1GuxSVNH3NNnKOYYw9clFhSirGb4TXMx0hyfDbnKTuEYnJ+X/lWk0romZfblcYK3kxJEIDelaN2TkjHI+ikF9buaXB2AzUO0bctc1hYZdkosKUVPXeF9zRaHpbcyK9JZSVLjNnJHoz4+itdpPQ87UEFc5T7MKCk7Q86ffH0DwqOe0C0vDsAlOjrkPFPUMnEKKA04GpTetDz7Rd7dEkOtLjz3UtMyW+ackgcx8efTW+9ymaJ6467nFQMDs1KTguHGThOeg8aR17QaAS7NDdGXT3FoYZBgqugaUVY+gNFhGspcS+CMvyEDdHcTuD4WlWFJ9AwDUe4jWhmzanfYiraLTg7VKG04DeSRtx6MfXStu6b6vJN3SlqaOrU7fnDhAmI24fvgo0KcDTKUV0ELzyE+l9VNFLSEKE4GnUylBpSEpCfmlFNpRSkJU4GnUwUoNIQohegNKDTKcKUhKnA0UgopYSwuqKKKKyi+1LU6u/RW7/yjv2TXINdfau/RW7/yjv2TXIANaz4a6tTy/KyvxF16fgU4GnA0ylBrSkLNQruahN6+4a2S3WmdHYnQNoeYdVj3oKcnHP0g14w5Ns0fri0MS9RSrmENrbeU8vc3GJSAnHXGTy9A61TIz3Uua8caKjWaX/IZwgbe9ekdI9V4Z84jGTs7l0HZrAjT2sLnqqdeIvsW+lamyF81biDg93LHLGc1ptEzEzNH68msAoS8866geAUkkf3qlwaXNVdEktOu+Ths2DulN0oGuGoyANbbtcImY9FbugHVjg/qkhZBSpwDn0/NppuilFXBfU4USQlxYAPd5qDVSg0oNO/R2sXHWzcHZbtmapbpHVDRq5NLc9+3JXzd7Kb/AMMtMwWpzMWQpppTSXjhLpCPe58cHPxUy9XODo+z6Ys82WiXKiSEreKeZQnnlWPAbsDvwKg+r9T266aF0/aoq3DLhJQHQpBAGEYOD386gua4rbRz6jIqkgSTEesrqudJMpOmi0Fxa0TPgYjxV/O2BMnXjWr2rxFNpSgKKt/MYRtxnpj/AOsVj6GujF215qydCI7BbbYQod+0bc/HjNUVmlBq06LJaWufOAaMMgDPmqelw14c2nHzFxxzJEbsM1bfAhalXq8hSiQpCSQT1O4862OjJDd84ds2i3qtq7lHWd0eajclQ3k5x6j1qlQfClBpq+jhVc5+tEkHLKBHmqbfSho02U9WQA4HHPWIO7CI71cuqJgYumlbQqdEfeZmtKWxGZCEs4UBjqfHpWDrt1Y4v23zjhJYA59MmqpzTgaVmjwwg62wjLftS1tKGoCNX9QOe4RH84K6rtLYg8cIbslxLbRjBG5RwMlCgPrqCcTra7bdXyy8ttSZX/SGyg580kjn6eRqI5pQaajZmk9rg7IRkqbm/Fwx7C2JcXDHKdmWKeDTqYDTga6iF5hCcKdTKUGlISkJ4paaDSikIUJwNOpnqpQaUhKQnilBptKKUhKnA04UwGlBpCFBXoKKaDRUQlXVdFFFZFfaFqdX/oreP5R37Jrj4GuwdX/oreP5R37Brj0VrfhnqVPL8rK/EXXZ4FPBpaYDTga0xCzi6H4ZadFn0OJ8RcBVzmIS8l95OUthQBCVd/LPdiqz0/w5ul+04xdbe8yrtnCgMqyCMK2kk9Mcs1IbL/4BXb/bH7aayYUuRD/J/LkV1bLhdKd6Dg4L3PnWVY6vSdUex3zOqBuI8fdaF7KNVrGvb8raZdgdv8Ci1q4cXW43+421l5hKIBCXpCshGSMgDvNZ83hXc4dtuE5ydEUxFQXAUZV2gAyceBrccJZDd30hqCwGYGLlKUVIcWrzlBSAPWcbefrrfWDT72m+HWpYMqaxJkdmtS0MKKkteZyGT3nr0pri/uKVRzC+CCBEZ7zKroWFCrTDwwkEOMzkRMCFArJw0uN4sEG6x5kZDMnJKXMjYASMk/F9dZUjhNe2Z7TQkRFRVpKjK3YSn0EdcnPKtne1qTwEswBICnMHHeO0XT9auuHgxprK1ecUBXPryVU86uXPweILy3LLvVZtbUMxYZDGuzzmMFDtYaKuWmJMRqQW5CJR2srZydyuXLHjzFSFnhJeVRklyXCblqTuEcrOfVmpDqSa3D0Zw/nSyVIadYccJ5nGzmalM6O7MvzV8gv2AW1LeRNdaK3kHHccgY+OueppK4FNuMZ4xmQcldT0ZbOqOwJ6uE5AiSVTKtFTm9N3K6uuoQq3u9i/GIO5JyB16dFA+qve6aDn2/SLV/cfaUytCFqaAO5AUQBn4yKmmkbijU2odX2hclt5m4teY8hG1JKRsKgnJ8QevdW8jzmL5qfUGlCoeRNw22Wh4FI84+sFQ+bTvv7hjodshxw/SYw4kqqno62qM1m/qlox/UJx4Ad2Kq2foa4xpdniMuNvzLkguJaSCOzAAJKj4cz8lba48K7xFhOvMSIsp5pO5bDZO74vE1KndSQ4XGQNynEoisxBDS4o+alZAVn/ACrNsNi9qeobxqG7XaObc+FqR5xJWFKzzHiOgxnNI++uGhpcYMAjDrScu7BTT0bbPc4AEgOIJmNUAZ98me5VppfRE/UdklXCA63uZdLQZUOajgHr0Hvvqqb6A0qi03a/2+7NRpTrMdpwEo3BJUFnlmvPSE9Y4Z6vnQyphapTziCk4KMpT09POvDgY+tb9/deUp1QabJ3nOff0XNatUpVi44NMRtzG1RZ29vTrW4DZc4Ek7MnbFEhpCQ3pVV+myGorCieyaWk73eeBj1/251k8K7KxetVNImJacjMoU4tpwZDnIgD5SD8VSXiA0vV2mIWobS4tUeKkpehj/yT0JHp/wAsVDuHExiDrW1yJTiW2UrUkqUeQ3IUkfWRXS2rUrW1RxPzY4bu791wOoUbe8pNAlny4n9U7fDu7sVu9eaOcj6uZiWdDKxPUexjtDHZBIGc+A5k16TeFt3jw3XWZEWQ+2ncphBO71D01JZAb01xYTc7k8yIV0bWllwH3hCUDKvDny+Os+yWE6b1PdNRXK7MG3PBakHccqCjnn6ugxnNcJvKrGNAdsGzrHd5L0OjaFSq8uZ+og4xqiJ1vPPdsVG8wcHkRS173SSmZc5kltOxDzy3Ep8AVEgfXWODXtiSJKyjgAYCcDThTKUGoISQnj0UvqpopRSEKE4GnUweNKDSkJSE+lzTaXNKQlTgaKSikhQurqKKKyC+zLUav/RW8fyjv2DXHtdhav8A0UvH8o79g1x30rXfDHUqeX5WW+IeuzwKeKUGm0orUELOJ4UcYyceFO3HGMnHhUy0nw4vOo7YLgyuPFiLJDa31Eb8HGQAOmaw7toW+W3UMWzrjpdkyv8AQKbVlCwOpz3Y789K4ue25eaeuJGflnwV5s6wYKmoYOSjQJHQ4NOCj4nn6asdXB2/B9hsSYKu0JC1JWfzXInJGOnLHLxrVQOHd0mXW6xEvxG2raoJfkuLKWwSM+GelUjSVq4Eh4wx/CZ2j7lpALDj/tQ4E4xk48Kdk4xk48Kld00fctN3K0PumJLiyX2+wfQrey4cggH0H6xmrMbtvlnGPsr5At6wu2doGkJ7RHJWATuAyrkeeOmBVFfSdOmA5nzAgnPdsTUtHPqHVdgZAy37VROSRjJxShRxjJxU1uGi5E2LfrzbnY3k8KS6lcZIIUgJV0AxjpzrWw9Iy5GkJGolSGGYbRICV53LIIHLl4nFXNvKLmzO0DzOxc7rOqDGrsJ8htUdBI6EilCjnqc+NbTS+np+pbl5FbUJU4E71KWcJQnxJqQ6l4bXmxWxyepceVHa5ulhRJQPEgjpUVLqjTqCm5wDjsSNtK1SmarWktG1QzPjS5PeTU6gcML1OgWyXFdjLamth3mojsklOfO5enHKsTTfD6731Mh1lTDMZlxTXbOqwFEHBwOuKq59bwXa4gJuj7mQ3UMnJRIKOMAnHhSgkdCRUj1Hoq8WKfEjSGkPGWrYwtlWUrV4eg8++t+vhLfUJZ/PQ1LWQFICzlAPf054qH3tu0BxeIOSVuj7lznNDDIzVfhRA5E4oqztF8P9mtZMO8Kiyo8FCVOtZP5ztEq249RFafVGi5SNcqtFobaX5Qnt2kIOEtIyR5xPTGKqF/RNTkwdkzs/kJnaMuG0hVLdurG2f94KGZJ6k0ZPianF34Y3u3W92UlcaSGk7nENLO4D1Ec6gwq2lXp1hNMyuWva1bchtVsSnA04UylBpyFzL0BpaYKcDSEKCE4GnCmUopSEpCfS00UtIQoTgadTPVSg0pCUhPFFJRSwlXWFFFFY1fZVqNYfopeP5N37BrjoV2LrD9FLz/Ju/YNccg+NbD4X6lXy/Ky/xB12eBTulOpgPjS9K1BCzq6FsSvbRw1ssSyt2iRJiJQ2/HuCVKSkpGCrCT17/jp0rUjFs19YbfdLhb3gw24gqYZLaWFKSAkElauuMd2OVc+IWpByhakn/VOKTJJyTk14HQbddxL8DMCMp716vSrg1sNxEYznHcuiLJpGbbeJ673JuzCospbhZaCzveyknbjphI59f1axbM/NGutXRoMqCve6kqt8oY7fzBzSrPLwPI91UKHnMpPaLynodx5Ub1b925W/xzzqDod7p16k/KG9XcZ3/v3qOk2tgMZHzF3W3iNyuzX9rgxYmm5Jji13NcxoLt7b+9AG79kHby8R41KXv/G9j/8Ahj/xDXNilqUoKUpRUO8nJp3bO793aL3Yxu3HOKR+hnOaGmpkCMt/nsUDSga8uDNrTnu8tvgra4e3luLxDvlnmc4dzfdbIPTeCrHyjI+SmcYJTNltdp0lbSRHjIDrx71H9XPx7ifiqM8LZ9kteo/ZPUEktiOklhPZqXuWcjPIHoPHvI8K0Wprw7fr9NuT/JT68hP7KRySPiAFDbKb3Wg6rQPAuyEeASvu4stSRrOJ8Q3M8Sp9wMuMWPOu0B95LEia0kMuKOOad2QPT5wPxU+fo6dpbTVxeuepjFSvdsix1FQkE8sHJHM9/I8qqwHHSnqWtfv1qV6zmrqli51Y1WvgOiRAOXjkuZl60URSeyS2YMkZ7wM+KuHXk+XC4V6TTDkOsdq00FltRSVANZxkVsNFPC/cNGbZbhbpFxYWQ6xOBUlXnlWSBz6HrVHlxakhKlKKR0BPIUqFqScoUUnxBxVB0WORFMOxBmY/dWDShFY1C3At1Ynwyw7tyvO+XtNhvWmIl2l21xEd4qWzFZKRHBQUgklR5ZV4DpWVO0rLVxGY1F7LMIgLcRsys7j5oTsA6EE+nvqgtxJJUSSe8mvQOLwkb1YT059Kr6KLR8j4MEHDOcfJMdLBxOvTkSCMTgQIz2q6JclqLx6acfWlCCzsyo4GS0QK9LUG9OcXZwubzKE3FlTjC93IZVyB8D5p+qqTUpSlblKJV4k5NKpalnKlKUenM5qXaM1gBrYaurlu2qsaV1XFwZjrl4x35jL1V/PNTtORLtPlu2GCy5lSVMx1qW+OeM+ePO592etUKTkk+NNUtSgNylKA6ZOaBVtpac3mTJPdGS5L6851qhrYAnbOfD7J4paYDTga6iF56cDThTKUGlISr0FLTAaUGkIUEJ4NOFMpRSkJSE+lptKKQhQnA0UlFQlhdZ0UUVil9jWo1h+id5/k3fsGuOAa7H1h+id5/k3fsGuNga2Pwt1Kvl+VmNP9dngU8HxpQfGmA04HxrUkLPEKTX/SE6x6ftV3lPR1x7ilKmktklSQU7ueRjpXtc9FXKBY7Rc1LYebui0NsNNqJXuUMgHIx6OtWbcbC5rrhXplFmkxw7BbQlwOq2gFKNigT3EEV58SmfYvQujGmJzYMaU0Ey0jKElKT548QCM1mKelKziymT8+sQRHBexU0exrXVI+XVBBnaYlRB/hRfmmnAl63uzG2w6qIh/86En0Yx3HvrR6Q0Zd9VOvJtraEtMHa468ralJ8PEn1VfbVvdurxXf4cMpVF/74gSi3nn73AIUB39SKh3Ct9iXpPUNjt7sSRP8oWptMsna+g4AKsEEjlzx41RT0tcGg9xgkEYxgJ8/vHerX6MoisxuIBnbiY8vtPcq+1doO86WYbkTksuxVq2h5he5IPgc4IrcXDhPqCF2qlrhrZaZU8t1KztGO7mMk1IOIZnWPQbVquD1mYU+sbYMNleU4VuJCis8vi769vygrpOizrZFjS3mWHGlqWhtZSFcwOeOtW0r66rGmxrhLi4TGYEY/fLBU1bO2pCo5wPyhuE5Ezh9u9UyM+BqWcMtPp1HqtiM/wBmY7I7d5CyRvSCBtGPSR9dbmNxg1AxHbZRFte1tISMsrzgD/HWHpG8SL/xXt1zmIaRIfeBUloEJGG9vIEnuFdlarcupVNZmpAMGZ9lxUqVuKtPVdrSRIiPyVaGoGJ8biHp5mFCtSorbUgRWSooIG1G7cQkhPdjAPfVao0VddSXzUa4nkbbsKQoONJUrBUSo4Ry59O/FS+F/wDaEkf7M/8ACFbDR7y487iO8yopcbfKkqHcQHMV4jKj7RgNM46jTxd+69Z9KndVCKkxruHBv7KvEcNL+u7pt22OHexD7iy55rQJIAJx15HpmsDUejLjY7ezPW5FlwHVbUyIrm9GakPCa63iVqOT2d0ZW+60ApmepSu3SCeST3EZPynlUg4kWmMzoTyp+GbNODoAhNSd7a/O/ZB2nl53TNdzry4pXLaNQg5DAb/XhI3rzxZUKts6tTBBE5nd5R5GDuTdV8OI8HQbT8ZuKi5w2y7KfC1kOhKSSE+n4hVOg1cN1grvvBW1Lt7jSvY9svPBSsYCArcPXVOVboxz3NeKjpIcfJc+lWU2vYabNUFoPivQGlpgNOBr0iF5KcDSim0oNKQoKeKUGmCnCkISkJ4NLTAacDSkJU4GnA0ylBpSEq9AaWmA0oNIQoITwacDTKUGlISkJ4opBRSwoXWtFFFYhfYVqNYfonef5N37BrjUV2VrH9E7z/Ju/YNcZg1svhXqVfL8rM6e67PAp4NOBplKK1ZCzxC9233W0KQh1xCFdUpUQD66Vb7y20tuOuKbT71KlEgeoVJbnoW6QF2JJdiPpvJAjLZUop57ffZSMclA9/fWTeeHV6tN+tdpkKirfuJIZW2tRQCOuSUg8sg9K4OfWxiHDGTwz4QVebWsJ+U4R65KJiS+GuyD7vZdNm84+SkbWptQU2pSFDoUnBFSuDw8vc/UM60QhGechEJffSshpJIzjJGSfi7jTNXaBvmlY6ZNwbadiqO3tmF7kpJ7jkAj5KgXtsXimHiTjHilNrWDS8tMDaow4646vc6ta1/tKJJp70h58gvuuOEdCtRVj5avHiPw3dvF0tzembfAhMpZUXnAkNIJyMZ2jJPXuqtJGgdQMakasioiVS3UlaFJWOzUkdVbvAfLXLa6Tt7hgdIBiYnJW3Gj69BxbBImJjNRcGntrU2sLbUpCx0Uk4IqV33h9eLRbXp5chTY0dRS+qI9vLRHUKGB07/CpPdLLcr1ofR0RuHaoyHlhpl9Lit6iUKPnDZ5udpJ5nJxRU0jRAa5pBaTBM5YSq22NUlzXAggTEZ4wqxEl/tu17Z3tf2953fLTkyX09ptfdHae/ws+d6/GrQ4w6FhWOHFuFjjtRooPZut9otS1LJ5EZzy699aiHwm1NJgJklEVpSk7gy47hf9sA+s0lPSVq+kKpdAOGPcpqaOuGVTSDZI3KBpUpKgpJII6EHGK9XX3XiC8644R03qJx8tSGyaHvV1mTmA01F8hOJLklexDZxnmefdz5d1eGqNJ3PTaWHZqWXYsj/RSGF7218s8jV3OaDqnJhw1lym2rBnKFphaZDzraFIbdWlCuSkpUQD66YDTRS1cQudOFOBpgpaQhKQvQGlpgNOBpSEqcDSim0oNKQoTxSg0wU4GkISkJ4paYDThSkJU4GnA0ylBpSEq9AaWmCnA0hCghOBopKKWFELriiiisMvr61Gsf0SvP8AJvfYNcZCuzNY/olef5N77BrjIGtn8KdSr5flZrT3XZ4FOBp1MBpQa1hCz66K4Zhi96H0/NmrANhfdKlK7khCsfUpPza2mip7WsLVbL/LUA/bJUlR3fqhQVgfNUn5K5qYmymGVssyX22l53IQ4QlXdzAPOnR5sqO0tqPKfabX75CHCkK7uYFZqtoEvL3NfBJwwyBmR5yvWp6U1A0FsgDHHMiIPlCu/hddkXyzathseTqusyQ5IQ3IJCXEqGADgg45YOD31ia4Fx07w6VbLkuzRBKVtRAjNuLV74ElKlOHAGM9MfLVLtOracStpam1jopJII+OnvyHpLm+S848vpucUVH5TV3Qwbcco13yyDEbR5/hUHSE0eTLfmgiZ2H+b10bxZ0xdNUO2lmzzGkLjhTi2FulHXGFjxxg/LXjqi6PxdWaYtduucL2ajsLS8uVnYvclPmkjoVbcj1DxqgDc5ynkurmylOoGErLyspB7gc1jrcWtwrWtS1k5KlHJJ9dc9LQj2tax7wQ0GMNp371ZV0o0uc9jCC4icd27cuhtU2Zt3SeoJVygmxSkBS+0izCWpSse+KRgHPTChnnUY15/wCCmkv9q3/w3Kqd+bKktpRIkvuoT0StwqA+I0OS5DsdDDsh5bCPeNqWSlPqHQU1LRL6ZaS+YdPpEYkqqtpBr9aGRIj1mcAFePFxtL0rTOpmy29aY7iC4QeagVpUMDvyAakl6t1wu2pbfeLOi0OQktBSJr5cUtvqeSUrAIPL681zWZUgxxHL7pYByGys7QfV0p7cyShgsokvJZPVtLhCT8VVHQr9RrQ/FsjLYfPNP0q0vc5zMHQc9o8sld2nrvdLrqjUaYMizXNohKH4xSpkSNqNuUZ3cv1STkdPGsLiXp9pVhsaIrb1tnSpKWEWxcouNpKuXIZIGCRzHjVNtOrZcDjS1NrHRSTgj469HJch15Lzsh5bySClxSyVDHTBpxopzKoqU3wBGzcIxxj0lUu0iH0jTe2SZ25SZwwn1hbLUlim6cuZg3JLaXwgLwhW4YPTnWsBpX5D0lztJDzjzmMbnFFRx6zTBXqMDg0B5kry36pcdUYJ9Lmmg0tBCrTqcDTAaWkISkL0BpaYDThSkJU4GlFNpQaUhQng0oNMFOBpCEpCeKWmA04UpCVOBpwplKDSkJV6A0U0UUsKIXXdFFFYNfXlp9Zfolev5N77BrjAV2frL9Er1/JvfYNcXg1tPhPqVfL8rN6d67PAp4NANNzQDWtIXgQvQGjNWfE4JalfjNOqk21orSFbFuLyn0HCSK9vcN1J8NtX0i/wV5LtNWIMcoPX2XZ0dcn9BVV5pQatP3DdR/DbX9Iv8FKOB2o/htr+kX+CkOmrH6g9fZR0Zddgqrc0oNWl7h+o/htr+kX+Cj3ENR/DbX9Iv8FKdM2X1B6+yjoy67BVXg0oNWh7iOo/htr+kX+Cl9xHUfw21/SL/DSnTFl9Qevsl6MuuwVWANKDVn+4lqL4ZbPpF/hpfcT1F8Mtn0i/w0vTFl9Qevso6LuuwVWGacDVne4pqL4ZbPpF/ho9xTUXwy2fSL/DUHS9n9Qevso6LuvplVkDTgasz3FdQ/DLZ9Iv8NKOC2ofhls+kX+Gl6Ws/qff2S9FXf0yqzBpwNWZ7i+ofhdt+kX+GoprPR9x0i/GbuamFiQFFtbKiQduMjmAe8fLT0tIW1d+pTfJVNawuKLdeowgLQUoNMBp1dRC4iE6lBpopaQhKQvQUtMBpwNKQlTgaUU2lBpSFEJ4NKDTBThSEJSE8UtMBpwNKQlTgaKSilhRC6+ooorAr64tPrL9Er1/JPfYNcXGu0dZfolev5J77Bri01tfhLqVfEflZzTnXZ4FGaM0lNzWtK8KF3VH/wBA3/hFPpkf/QN/4R/an18dK34yRRWt1LOdtmnrlOjN9o/HjrdQj9pQSSBVMWrUNzt9z05Oevl3neyfZF/DaFxdzhwWwMjaU9+K7LazdcNLmmI8d0rmr3TaLg0jNXzRVRXLiZdWL3cPJ4kdcCFO8jVHLThecwcFYWBsHiAeZrY2effF8aLvBdntKtzbCF+Tq3Y2lPm7BnAVnGTjnzpzo6q1pe+AAJ+3uEovabiGtxxj7+ysyiq01Zre82fV7kNtiCi1slkFx7eS5vxnz08myCeQUOdY9qvV8ia81muZLZft0BpD/kvnbtnZrUgNc8A8hu5cz4VA0fV1DUMRE+OIHHEKTeM1tUTnH39ladFVFb9f6ieGmpMgWfyS8zEshpoqLrSM4IPPr6e7w51ttLai1JqK2X+Sr2OYYirkRmFJSveXE42k8+g78cz6KipYVaQJfGHf3kfcFDL2m8w2f4JVj0VTGndZ3qz8KrfcpbzU+VLl+Sx3Hd61N5WvJdIJKsbTjHdgVnniRdIul77KlRI70y3vNNNuoQtpp3tDyJSvzhjByD6KsdouvrFrRMO1fOQPuQlF/SgE4SJ9JVsUVVOmp92k8XkNXiRDddTaOfkK1Fo/nCQcHoeePVg99WtXLXoGiQCZkTxV9GsKoJAiDCKpT8pA4Xp71SP/AG6uuqS/KSOF6e9Uj/2q7dDf9xnn9iuLTP8A03+X3CpoGng14pNegrdLBkL0pQaYDyp1KQkTqcDTAaUUhCUhegNLTAacDSkJU4GlFNpQaUhRCeKUGmCnCkISkJ4NFNBoqISwuwaKKK+fL62tPrL9Er1/JPfYNcW12lrL9Er1/JPfYNcW1tfhLqVfEflZzTnXZ5ptMVT6Yqta5eIF3ZH/ANA3/hH9qfVfweLejFw2VO3cMrKBltbDmUnHQ4SRXv7rOiP463/Tu/gr5QbC6B/tO4FbYXVCOuOIU4UkKSUqAIPIg99Ry3aG01bboLjCtEdqYCVJWMkJJ70pJwD6hWp91rRH8db/AKd38FHutaI/jrf9O7+CmZbXjAQ1jgDngcUrq1s8guc0x3hbuTo7T8m+JvD9rYXcQoK7Y598OhKc4JHjjNZb+n7U/fo96dhoN0jpKW5AJCgCCMHBweRPXPWoz7rWiP463/Tu/gpfdZ0R/HW/6d38FNyF72X5Rkct3h3KOVtd7d+zPet3eNH2C83Fufc7Yy/LRjDhKhnHTIBwrHpzWQvTlpXfkXpUJHsmlBbD4JBKSMYIzg8jjmKjnus6I/jrf9O7+Cj3WNE/x1v+nd/BUcjexGq+IjI5bvBHK2szrN37M1sIvD/S0WY3LjWdlqQ28JCFoWsbVjoQM4A9HT0VubPZbfZo77FtjBlp91Tzidylblq6nmT1qLe6xon+Ot/07v4KX3WNE/xxH9O7+Ch9G9qddrj4gqG1bRmLXNHBbhjRmnmLbNt7VrZTCmL7R9nKilSu4jJ834sV6Q9JWGHZH7RHtjCbc/zdZOVbz4kk5J6c891aP3V9E/xxv6B38FHur6K/jjf0Dv4Kk0r04EPznbnv8UCraDIt9FuLHo2wWKamXabciNIS0WQtK1nKCc4OSc8+886kFQj3VtFfxxH0Dv4aPdV0X/HEfQO/hpKlvd1DrPY4nvBKZlxbMENc0DxCm9Uh+UocL076pH/tVOhxT0Yf/wAbR9A7+Gqn436stGppFpRZZJkoipdK17FJGVbMAZAP6prv0Ta1mXbHPYQMcwdxXBpW5ovtXNa8EmNo3hVqk16A15Jr0FbSFiyvQU4UwGlFBCQhPpRTQaWkISp1OBpmaWkISkL0BpaYDTgaUhKnA0optKDSkKCE8GimiilhLC7Eooor54vrK0+sv0SvX8k99g1xbXaWsv0SvX8k99g1xaa2vwl1KviPys5pzrs8Cm00080hrXELw15EUwivYimkVW5qcFeRFGKftpQKqLFMrzxTsU8ClxSlijWTAKUCn4pQmkLFEpmKXFegTSgUpYllMxS4p+2lCaUsUayaBTwKcE04JqNRIShIr2TTEivRNSGqtxXomng15iniphVFPFOBpgpRUEJCninA0wGlBpSFCfSg00GlpCEqdTgaYDS0hCUhegpa8waeKUhKnA0UlFLChdjUUUV86X1dafWX6JXr+Se+wa4urtHWX6JXr+Se+wa4ura/CXUq+I/KzmneuzzSUmKdSVsF4UptJinUYqIUym4pNtPxRiohEpoFLilxS1BaoSYpwFApw6UpaoSYpQKUUoFIWpSUAUoFAp1KWqCUAU4CkpwpS1JKUU4U0U4UsJSninCmCnClISlPBpaYDTgaUhKnCnA0ylFKQlhPBxTgaYDS5pSFBT6UU0GlpCEqdTgaYDS0hCUhegNFNBoqIULsmiiivm6+qrT6y/RK9fyT32DXF1do6y/RK9fyT32DXF1bX4S6lXxH5Wc0712eBRRRRWwXgooxRRQhJijFLRQhJiloooQlFKKbSioIUJwpwpgpwpCFBThS02lBpSEqcKcKbSilISkJ4pc0wU4emkIUFO6U6mCl6UpCVPFKDTaUUpCVPBpaYDThSEKE4U4GmUoNKQlITwacDTAaUUpCiE+lBpopaQhKnCikFFLCWF2ZRRRXzVfVFp9Zfolev5J77Bri6u0dZfolev5J77Bri6tr8JdSr4j8rOad67PAoooorYLwUUUUUIRRRRQhFFFFCEVWzovItS7mJr4ihzYPzis5zirIU2p1JbbVtWvzUnwJrXQuC94mkJTdYaQTnBCqx3xXVcw0mtJGf4Wg0GwEPJ7vyq09l7j8Ok/SGpVpBhu8Q5KrlqN6DIS6htoKewMHOVEHqB6DVhwvyaL9LSCi92wZ8Ur+6txbfyYtRQpIeN1skjAwEOocKc+qshy9XtHiV73Js3KvbfZ7XJt0pLuuC1cGpBaaPaK7NxIHvsHnj46xXLKnskJj6yDslZISkKVgkDoOeeZIA+OreV+T3fkkFStLHrkdg5zrEkcBL4226hLmnEhfQhpzKDjqDRy9XtHijk2blUs+1LjFaUavDjqPN7LeQokAZHXHU4+Ksm7WmPDdf7PWSj2W8ForKllQzgZHLnyqw18FL2wCC7p5XMnmws455rUXbgleJW0CVZo5BySy2sZ9dHL1e0eKOTZuVM+zNy+HyvpTS+zNz+HyvpTVpHgPev4pA+ar7qBwGvRP/ekD5FfdRy9TtHijk2bk3SSn16fiKmKWt5QUoqWrJIKjjn6sVuBXk1bXLOhNtfWlbsX80pSOhI5ZFegNfTbRsW9Mdw+ywF0ZrPPefundKdTB6aUdauMASVzp4pQaAhR6CnBpZ/V+uuTndDtjiEpIQKWnKYdQcKTgj00mxQ7qXndDtjiFBwMFANOBpNivCkCgVbcjd4ZpTdUO2OIUATkninA00JV4U7aod1Kbmh2xxCRLRSCil5zQ7Y4hQuzqKKK+dL6ktXqpsvaZuzY5lcV1I+NJriqu53EJcbUhYylQwR4iuJr5b3LVeZ0B3O+M8tok9+CRmtl8JVBNVm3A/dZ7TrT8jvFYNFFFbNZ9FFFFCEUUUUIRRRRQhe0RO+UynOMrH96sOELa9KSma8UugJ80OKTyzy6HxqvYP/bGcftA1Inn7c3LbfkqWZLQG1KeeOYVzHePN/vWG+K3kV6YB2flaTQjAab5G1Xjp+Ha4aFzFuqQOyVvWp5RATjJOCcdBUkbj2W5JektSScqIWpL6kgKHI9/dVRWuTYSxDgznXGwmM5GBOdqErSnd1zg4xg91SX2N0m02y6uZIUh5K9jaT5q0qcBVkYxjcR1rKEk5r3GtDcAp7FbgQQ6Ij4Oeatz2/py7zyrCmS2iopDqCrOMbhnNQd1jSHlb4aly+aVK3JJ2Hc7vKRy/aT09FY8r2EsN5B8oeCklxZ7TJ84AkjPqc7/AEeFQpUhlzGiVDtW/N6+cOVaaRcYoDRVIaAdXsQdw85XPl9R+SotPh6bc7cquDyStW5wb8EHv7unKvC8W6yQ7WxNdXIdjbvMcbIPvgrnnw5n4yKEKYrdbTnctIx1ya84syPIdKGXULUlCXCEnolWdp+PB+Sos7Hss6d2i5zzchxScNlzAJwduB05jPSt5ZrNGtBdXGLiitCUHerPJOcfaNCFUl0WpdzlqWoqUXl5J7/ONYwNOkO9vIddxt7RZVjOcZOaYDX1pjdVgB3L50/FxKeD417w0pVJQlaVLSe5JwTWODXtDlGJIS8lxTa0ghKkjJyRj/OuLSdUULOrUdsafspo0TWqCmNphSIQGUp2qadbc8FLBI9Yxyrzk252Zsat25pOCHXEK6Dv84jl8VJb40uW0XX1GNFVzKl++c8ceJrbIPZxjFYJTHznBxk+s18stje3tTXd8lPdtK9G9NhoynqD5qv29vutM1bo8QbGVOueK1KzuPjT+wST0NbUMDlXomLnur3W0w0aoCyNW8dUcXvOJWm8j7Qhpvk4vITk8s45VhxYCBuQ6w4lxCvOUpXf6OVSUw8/qk/FThDwOh+Sqn2+u8OJwGxdVLSwo0DSpj5nZnu3LTCMjwNIqOnuBrd+S8un1U3yQ56fVV2quDnPetKI6QOh+Wity5CDgKFKUhJBypPUciaK4rm8Zbu1HAr3NG6Kr6RpGtTcAAYx8j+V1FRRRXIvpSK5m/KBsK7brAXJCMRbigKCh07RIAUP7H466ZqLcStLp1ZpaRBTtTKT+djrV+q4OnxHmPjr1ND3vMrptR3VOB8D7Zrh0hbc4oFozGIXH9FYOqprmnm3BJjqEhDnZKaV5pCh1zUV9vDnwFP0n/Kt9c6YtLV/J1X455E/ZZijYV6zdZjcFOKKg/t4c+Ap+k/5Ue3hz4Cn6T/lXP8A1Fo/t+h9lb0Tddn1CnFFQf28OfAU/Sf8qPbw58BT9J/yo/qLR/b9D7I6Juuz6hTiioP7eHPgKfpP+VHt4c+Ap+k/5Uf1Fo/t+h9kdE3XZ9QrAt5xMbPr/sazmZkI3F5uRDLjmffAZ3ch1+Wq1Y164y4FiAgkdPzp+6s1via6g5Fsbz/tT91ZDT17RvbkVKJkAAbtp917+i7epb0S2oIMz9ldUS8WpqSRLgrcWFFOQjcDyH+QqaJ1NZSIzL8Rx1TjCcADzkJKgQMZz1APxVU2g9YtXmCZDrCmHEudmUgFY9ecVZNiuUZ50utAFwAAqKCDj468Neis6LddPqVFiQrVIW48tOFSEqASnftzknrzJA9OaZdblaJwmOO20rfSh0+enIVjkefpAFSWPOSpIPKmSHkKB97zoQq+eetEuO5OTb3kuRkb1hKikKVn3vXmM59GCaU3u0rjCMuA72LxGGygEK2kpBxnp5n9qlzpSc8hg14kJ/ZT8lCFprTEivvvvCAy0ApG0g5JIHeO4it1IdQxFeedVtbbQpaj1wAMmhOB0wKw9QH/AKv3P+Wd+yatotD6jWnaQkqO1WEjYFSgNOpgpQa+tkL56ng1mWx1TMgqGPe4OQCOo7j6qwhTkL2GvO0oYtKnglM7M1JhLW6vc4sqPprLad9NRuPIPjWzju5xzrDtcvMr0TMlbpC62mnwZURTjrjxPaqSMLIASDgAVpY6wRzrd6XBTaWSU4KlKUefpNPmQkthqtefD8rcCG0r3yn8f7VX30ircwccnsf7VX31kN93I9fGsa8TfY60y5nZ7zHZW6EZxuIGcfHTEAYq5r3uIa3MrQWloS79dEOKfUwyA2hJcVhPNWe/1fJW4NtigABLo5dzivvrQaOfdXdLh2jQT26u1JCs7TtScDx99UrUPQenjUUwHNlW3zn06sA7B9lr3bcwtvae3KcdO1Vz+uisxY68j08aKY0WOxLQuVt5XYIY8jzKvmiiivDX1xFFFFCFyr+WlZIEOPZ7tHR2c2Y+pt4DosJTyUR491cyqus9xkNGQst8vNwO6uwPynbTH1RPsMFUjDcMuOvoT77KgkJHo6Gqob01DiIS3DitIA7ynJPx0VKrnROMYJ6VAbMAqRVNlbklTqsp6ZFJ5dJ3FXbKyRjNXjK0/DkMlqbFacB9HMeo1VWs9NqscgOMErhuHzSeqT4GoBkIe3VOBWiE6SnOHVc+Zo8tkbNnaq2+FY1FSkWUZ8pRBLyuRyOlOROlKeT+fIUfN3HHKsOihCkmpbdO0+8yHLhHkGQneFMLChj115yYUuNp5ueualSHVhCWmxuHMZO5Q5A/6vWtAVEgAkkDpS7lbNm47c5xnlmhCuXhK3s02F7lDc8o8j6h/lVjw3Cgg9s786q+4aDs9KxPSVH6zUwQ9gVClSlqV5uPKXgOvJdZ3sunGCsfLUHcmFI61iLuJB99QoVheyaT+uPlpwnoP64+Wq5FyP7Ve7dxP7VCFYInN/tp+WtZqmUt/T0xqKVKeWlKQlvmogqGRgejNRYTirvqbcIB5ZreId+3sUOOYxnd5pGP/V9VXUKvI1W1ImCDwSVafKMcyYkEKt4mlNQS8dhZrgoHoSwoA/KK3UThlq+TjZZnEf7RxCP7musaK0T/AIpuT1WNHH3XjN0FS/U4+i5qhcFdUP4MhdvjDv3vFR/9IP8Aeo1xO0U/oc2sSZrclcwOHCEFIRs295PP33o6V11XNP5VFz36mstu7LHk8VT/AGm733aL24xjljsuueefRXDW0zdXQNOoRqnYB/ClutF29CiXNBlVdHfrcQns4qKRnq3UB3mK52lZm5owFLGHPzZPorZW+8RrbbYCHwStxCSAD3kEjr/hNaBDu2I6rPvUE/VWOuS25f4kZ1pCmmENbllRARlByeXTkTzqatU026wUaHsGXVQ06hgH+flT1i/NqdabTEkkrISCAMZPpzWVfFsSLIezcZdS9tQpO7ONygnBrVMSIoZbWiPG7EqV+caeyezSOahg9Kxlwkqt6JiUgQe0TtGQCTkEevoK8U6bqa4ZqEytcfg6jTpuqOqAEZQZGe1eWkARdJSyBhW8DB67UoP9v7VLYrglOdm2nzycYJHP66ien1pelLSHWykqePIgBAUkJ6+nbikt8O4xZKkRGDlbhzlROwEdeR8K6elHsaTqYBcbvhyjdVxTNTEjeBl4qbORF7tqC26o/sLBx66Kr7XcO4QNLR2Z+7yx+Z2gUFZ3ICCOZ8edFVHTj2ABzMY8F7lr/wAaULtpqNrkCYGAOXfgusKKKKsV6KxrlJESC8+rohJVWTWr1K2XrPJbHVSCPqoQucLzNcuF0kyn1ErcWVZNa1biMEkDINPnlbKltODC0KKT41qVuBAyVdTzFEKwFesl5KulQXiM6hdkWnGTuBHoqQTZYCiSSBVca3u/lCvJkHIzk4qVDlD6KKKhIiilpKEIooooQrx0Kns9MQB4oz9dSFSiBWk0qjs7BAH/AOyk/KK87velxZPZNJSoD32ahC3MZpU64xYiVhCpDqWgo9AVEDP11Yy+CNzUeV7gfMVUN4c7X9d2AqT5qpKDgiusOxb/AGRUoXPa+Bt4J82+24D/AALNerHBC6oQAu+QFK7yEKq/yy3+yK8iuKkkFbYI65UKEKjkcGLknreYJ/3FVK+H3D6Vpi/i4SbjGfQGlN7G0kHnjx9VWODGJwFN59dGY2cb28/4qEL17VH7Q+WkU8hKSdwOBnlR2Lf7Io7Fv9kUIWnj6jaefbaEGeneQNymcJGfE1W/GDhXO11qeLdIN1iRWmoiYym3kqJJC1qyMf4h8lXB2Lf7Io7Fv9kVIJGISVKbajdVwwXNaPyfbqg/9+28/wC4qs+NwLubRGb1BPqQquhexb/ZFHYt/sinFVwXE/Rdu/Meqo1PB24BhbfstDypJTnae8V72zg7Jau8uTOukN6O8gIDaUEEYb2dfjJq6+xb/ZFHYt/sih1VzhBRb6MtrY61NvqqnTwtcjxmmIs6CUNMutIC2iPfjvOcnvpZnDae9bo8Nq5Qm2mk9EhXM7SCflxVr9g3+yK1mp1+RabuspnzXWYrriCBnBCCRyrncxo+bcvRAkakYHYqDe049pKAqQp8SXFgNLaZJCRhS1Z3ePnAfFUgtV1grYhMCODLdb2gHme0J8ep9dR+3z13uHLk3h+RJa8owhKDt2J2JJ5D0mpZoSbaEXFLaU7G92xhShkqOM/J6a4W3Lnv5JtSd+B/0pbZ6tQ1XUSCZH6dm3en3wTwz2d4jW9KgMhJR2yMY7twHOiva/3+yXwOiDLLj/JJQWynKRnJGRz7qK9FlJ1Ya1MAjxXmXt43R9U0qz3sJxgAZHxEq3qKKKleiivOS2HWVIPeK9KKELjLi5qlmycVLxaJCAiO12ZS4kdFKbSo5+Wo49qGC40VNSG1D0GtF+UNI8p4y6nXnO2QEfNQkf5VXVCmVM7/AKnS4CiOrcrxHQVDnXFPOFazlR600Ve/5PnChvUDiNQaiZCrYk/9HYV/5xB98f8AV/vQoJUU4a8HNQa07OUps2+1q5+UPJIKx/qjv9ddA2DgNo+0NoMqK5cnx1XIWcE/4RirfiMtR46G2UJQ2gBKUpGABXi+6kK259NK8YYKGuxUVGidNxo4QxYLSkYxzioP1kVF7/w00pc0HyiyxG1ftMI7Ij5uKsN97qc1qZrwPyVW1pcVaXQFzbrzgn5I2uTpmQpwJyTGePP/AHTVKyYz0SStiS2pp5CtqkKGCDXa1yeyOuKpzihpdi8ES4yAmcjHMfrp8DVuSrToK24Vojl07UIaSPqqPPTW513QVoCWlKCRk8xW11Irs7OkdPOSKhbrmMKScEHIPpqUK8+EsREviNZkLUpIQtbox4oQpQH1V1LXMfAhl6Vr+3PNp3Blhx105xtSWynPzlJHx105QhFVg5Nls3qbMTNWu3pWpvs9yjtUvKUfFuIqx7jLbgQX5T+eyZQVqwMnAqvNJaj0pqtyZFtkaZ5mxx3tElOdq9ye/wDa50QokZLVWmfNXBZdTcHHUJkIbUovKO7l0+oms2HNdGn5Nxkz3UpWlSWlh5RG7YCf86lbGnLI3F8maiuBntA7t3H3wGAeteq9NWd22twFR1+SoUVJRvPIkYP1UKVDbLHvk9xHZXRx89shz/TKT+bSvCh9VbSdYtSq7dceY4VqVlP58gbefLHyVvjGtel4Ts9DTqWmUbTglRwVdAPWa87VrGHdXFJhRZq0p5KWWwEj481IaSJCUuAMErVxNO3sSG+2nyEt7wpREhSjgKJ7/EbawRYNWmbvcuC1Ri4Vdml4gpT4Z9dbO7cSLRaJ/kk9ie05jKSWPNV6jmsFri7pxyZHjDywOPuJaRlrAyTgZ51Oo7OEa7ZiVnRbHewoLflOqWHCRh9WMbfD/FWuRYdU70hyY4UBJBHbnJ877qnfsgyQdqtxHXbzxXg/eY7Pvw58SaSYTKNTLLqA3Ga9FmLSytlYbbLp5L2kD1c8fJW30XBuUG2rbvLqnZJXncXCvlgD/KvO4aytkCE/KkduGmUFxZCM8gMmsHQPEaya5elNWPykqjJCnO2a2cj0oBByUwQpnUX4nSnYehLu6wptC1Npay4Mp2rWlCvqUalFQ7i4r/qHPR2IfUtbOGyQArDqFcyeXdTNEmAqqzgym5x2AqptLW9dtguIS83K7VwqUpKBt6AYxz7hUjhzUQkDcwhLoBSHMJyAfiqEM36fFQG2LMG2/BMlkD+9Md1HMbUO0spBWcZ8paOe/nzrvDCRDwI8CsKK9SlUNW3c4OO9zI78FvmrZBt7ynoqnnHNhAK8AJz15f8AOio85qWY4iSgWh3821vUpMhs4B5Z686Kupso0W6tMQFzXlxpHSFXlrp8uyzGWzaupKKKK8lfR0UUUijhJPgKEL5xcWVGfxZ1MQeblxdTn/ex/lXsOH0gpSrtHMKGQexPOtZqKSl/iRdpC1AIXcn15Ph2iquyLxUbjoCUNwTyAO4k9wHLw5D664Luq9hAaY8pWi0JZ0K9N7qzA4yIl2qqf07o1c/XkOxuLKkFQU8duNqBzNdpaeMeHBYjxWktMNpCG0J5AJHIVz7wwkN3HX19vZ2KW6oBBT0BUdxxVv8Al6Y6QoZT+qATyrop1DqjWzXlXdFra720xAkxt9VP3Zm1ICetaebO2qKleqowzqEuOuKW4EpBxjrWK7dhIcyhQUlPX00+uCuXkiFInZhU3uTnn3Vpp81STzyBStuEthbnUjNa+fISUqHUYqJnJELUXG4DB58yai12fC0EjrWbeOSvMUeuajlxkBAxnmacFQYWo1A6l2yk9VJcAqHDLjjaE8ypQH11N7H2M1+Qy+hDqEkHaoZFbg2q3oIUmFHChzBCBkUyVWL+Try1rMT4W5f/ABGq6Kqkvydo7InXx7skdqltlCV7fOAJWSAfA7R8g8Ku2hC0utWXJOk7sww4G3XIy0pWeiSR1qivybHVouGoWZ5QHoqUJW50SQCrnmr41YoJsEzcgrBRgpHU1QNstLl9Rr6DpVCY7q47CEJSojcckqTnxOCPXTjBpVZxeAryg6isU6T5PCu0B9/O3Y3ISpWfDANb1KABXJukOGqo0J2TfFSo1xb5oQ2dqmz1BNdM6FnKuOlbbIcUpTpb2LKupUnkfrFc1Ou2o4tGxdla2dSaHnan6wZ7fT0lkAkrKRy/xA/5ViWBtm2Q40Tslb1J3KKU8s9edSKUhK2yFAEemqwb1ldJt2uvsaxGNptii2pR85byx1A54HSujlA1sFcgpF7pCxeJBhXh2G0EuNqQ+nDqgEgJyMnrkfGKW7cMrJOcQlO9KUtlTe1RytzuUpXgK2Nw8kvltsMZUhPk0tYc3dNwHnAc/krK1/cxZrc275XHhrzsb7RZyr0BI6mmrElkBRQAFTWcqXsLmoNB6jbQuSl5EtCyWlrKwAk4BOav21yE3eyxZob29sgKI8D31VHES+6ai2BhxEwS7kjmkNc92eoz4VNeG+vtP6khMW+2lcaUy3gRnffbR3g99cNIVC8l2S7q5p6o1c148SEIhaIvcgoB2xV8j35GKhf5JKVuDUUpYxuU2gDwxk1NON6+y4bXbaCVLDaOQycFaQfqzWn/ACWmAjS9zcCioGSEgEYwNo++ukCFyyrtqJcUI6JWlHmnCsJK0HzVYPvh31LainEC2qu0e2xA72SVyfPVnGAEKNQ+qaI5QCY2b0r7bnTTQLtXWBE5x3wqVVp63rSkKTIPfnylz76cNOWwhQLTygrrmS4f/wDVZybY/KnymYRKm2CcrW4AAOnNWcV7o03dVPONbUhaFJSrLyQMqGQAc864h8Sk5W0+f7LnP/Hjx1tIRty//S0lwt8O2WeX5GwGytISVbipR5jvJJoryuqFpZdZdzuC0IIJ7+0SKK9exvuf0RWDdXZHgsppjRHQl0bV9XlDAMxGY8SunqKKK51tUV5ylBEZ5ROAEE/VXpWm1pK8i0he5WcdjCecz6kE0IXzbgl65akSqPG8rekPqKWT+uVE8vrraXrTl7eUuQqyuRWmGsubQNoA6qzWPw/jSZOrYHkSG1vMqVIw4SE4bSVnOPQk1cshnUV50y7bDHt4akRm0tLD5BKV80np34JwahC0PBiBdYbBPkD4Q64lxK9vvklPKrelF99tpC4zhK1ZPLv6Y+U1EdC3C/zrRbWGYUMRgyENqD5SrCVBIJ5cs91SNqfdWorUpVujNx1pLvaF8kJSRu8ORx9dUOwcV1s+ZojYmT7bNSwoxozu5aiNm3pTtNQpjymlJZX2RQolQHIkHpXtC1NOl2xSm4TK22HVt47bqEg5PpHLFeCLnPtUCHCXGZS9IeWyyvt+8nnnwHI0AA5IcXDArfSi+hKi82UbevLkKj1xmpTnnW1vM+U7aJLrzDaDkFRQ7nGFHHLHfn6qht/t9wiwJMt4oDTJSFedz84AjHyinDVzkrX3a4pySCOVQq83PIVzplyumd3nVEbhMW872beVKUcAemrISqb6EkIKpbrisZIA5dalarjFUyXQ4Sgd+01h6QtQhWhht1KS5tyokd551t1R2kJKUtIAPcEihQrg/J0bbdhXqY06FBbjbW3HTAJzn/e+qriqrPyf2C1p+5KDexC5IwQnAOEjNWnUoVaflC3E23hvKeS2hwl5tOxecK59Diq64HazdeN1W9AisrSGmm48dHZpSkbiSc5PKpd+VA6E6FhMq967PaB9QyarThQ2E3bUbgILYS2kHIOcgeAH9qouajqdIlpXTZ0mVawDwrs1RapEt9uVHcDapAS0VA42g1vtLJj2ptqxMhRVGZCwon3wJOSfTms0tpdjtoW2NqdpHoI6VHrFJMnXk8kYS2z2SfTg8/71U1gpv1h+pXPeatLVP6QpTeZKotvddQMqSkkfITVG8Loy9Q6f1QGpSBMlPq5oGNhIODzq7L+6lplkr97uOR4jBqE6EYtURy9u2eOWo/becSCNy+pxnu510kBx1VyNcaY1lH0WRxzT0Nqa83CnxYq3GuzWTzb/APrnVG6lv9x1DdETblKVIdaAbScYAA9FX9dpaIupbiVrBEO3PuYPMDec1zJEWXH3lrI5rJxmmoHWapuRDwsi7LMqQXDySBhKfAVjafnGHfIzzLikFKwkqScYzTp6h2ZNaRtpxpCZKSShThHxjFM8Atjeq2OIMjYumdWXFy88L2mZby96paI7ixgqx17+/GKmnAuzsWfSK24y1OIcfUorVjKvkql3LwFacix1qIMlSHwCOWUpwf71fPB9so0NCJ6qUtX11TbO1qAJzT3LdWuQMlNagnFG6SLb7E+TISrK3VnIJwQkJH2zU7qDcSbUq7SbSgOtNobUtK+0VtJ3FOAnxPmmufSGubdwp54fcLr0YaYummr1cfsVWFtuL0JMlHk6XmnwAtC0nBwcjpWVIv0153eqOB+eQ9gIOMpGAPVWBdfJbXd5TRdQ2y2tSEqdUBnmKxxc4J6TYx9Tqfvrh0VoU3dvrGqWwSIgHJVfE3xi7RN7yLLUVJaDMkZ92O4LFvDi3VocdSpKnZKSeRHPO7/KivG6TI78m3tMvtLPbFRCVgnAQr76K09jZCypci12tG3xxXyv4g05U0rdc7ezULgMN0Yd25dS0UUVxr6UiopxaJHC3VxHI+xMr/hKoooQuC+Ef6Y+uFLH/wDQurQvbi0v6ZSlagn2QjIwDy2gHA9QooqEKQ2ElmFbUMns0FJTtTyGO0HKtvCcWqI02pai32SfNJ5e88KKKqfmr6ORWr0yomAsEnCpz6T6R53KsPUilOXHTwWoqHli+ROe80UUjcle/rKVXclVuO45zjOe/wA9NaPiStZ0zMypRypJ6/61FFXriKoK4k5VzNeGlgF6niBQChknnzooqUK84Q/ND1UPUUUIV8cDf0Lc/m3PspqwqKKlQqN/KxJGkLPg/wD34fZNV9wN89U/f52Xo+c8886KK5bz+15j7ru0f/e8iupXPeCofZuXEN8DkC0skD/dooqKvWZ4/hFHqP8AD8hZPFJxbdmjltakntsZScdxrYtISm0ICUpAKEZwPVRRXYzMrz6vUHifwqwtyEv6l1yHkpcHZoT54zy8OfdVA3NCWr7cUNpShCXlgJSMAedRRS0lbVzWFO94upNw4jMSYE0SGWnQkqIC0BWDgeNFFFbIIpZlOvXmmyJTyTsUMDp0TXU3CP8A8PrR/sz/AHNFFUWn9nzKtvP73kFMK1F2abdmNdqhK9pSpO4ZwcnmPTRRTV+olodcKjL1DjTb1PTMjsyEpdWQHUBYB3dedRjVtqt0axy3o8CI06hBKVtspSpJ8QQKKKXQn/VPi77rz/ij/wAgP/Vv2TorTY9jFhtAWUKJVgZPIUUUV77Ml8t0v/eHh+Sv/9k=',
          'timing': 1721,
          'type': 'screenshot',
        },
      },
      'uses-rel-preconnect': {
        'id': 'uses-rel-preconnect',
        'title': 'Preconnect to required origins',
        'description':
          'Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn more](https://web.dev/uses-rel-preconnect/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'warnings': [
          'More than 2 preconnect links were found. Preconnect links should be used sparingly and only to the most important origins.',
        ],
      },
      'cumulative-layout-shift': {
        'id': 'cumulative-layout-shift',
        'title': 'Cumulative Layout Shift',
        'description':
          'Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'displayValue': '0',
        'details': {
          'items': [
            {
              'finalLayoutShiftTraceEventFound': true,
            },
          ],
          'type': 'debugdata',
        },
        'numericValue': 0,
      },
      'timing-budget': {
        'id': 'timing-budget',
        'title': 'Timing budget',
        'description':
          'Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).',
        'score': null,
        'scoreDisplayMode': 'notApplicable',
      },
      'diagnostics': {
        'id': 'diagnostics',
        'title': 'Diagnostics',
        'description': 'Collection of useful page vitals.',
        'score': null,
        'scoreDisplayMode': 'informative',
        'details': {
          'type': 'debugdata',
          'items': [
            {
              'numTasksOver500ms': 0,
              'numTasksOver10ms': 13,
              'numFonts': 4,
              'totalByteWeight': 698763,
              'numRequests': 38,
              'numStylesheets': 0,
              'numTasks': 942,
              'maxServerLatency': 7.577748719577552,
              'numTasksOver100ms': 0,
              'numTasksOver50ms': 1,
              'totalTaskTime': 895.3349999999983,
              'maxRtt': 0.0009538193895892538,
              'throughput': 6507687845.736227,
              'numTasksOver25ms': 6,
              'numScripts': 15,
              'mainDocumentTransferSize': 34289,
              'rtt': 0.00021443058765867426,
            },
          ],
        },
      },
      'network-server-latency': {
        'id': 'network-server-latency',
        'title': 'Server Backend Latencies',
        'description':
          "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
        'score': null,
        'scoreDisplayMode': 'informative',
        'displayValue': '10 ms',
        'details': {
          'items': [
            {
              'serverResponseTime': 7.577748719577552,
              'origin': 'https://cdn.ampproject.org',
            },
            {
              'origin': 'https://amp.dev',
              'serverResponseTime': 4.179046180610411,
            },
          ],
          'type': 'table',
          'headings': [
            {
              'key': 'origin',
              'text': 'URL',
              'itemType': 'text',
            },
            {
              'text': 'Time Spent',
              'itemType': 'ms',
              'granularity': 1,
              'key': 'serverResponseTime',
            },
          ],
        },
        'numericValue': 7.577748719577552,
      },
      'first-cpu-idle': {
        'id': 'first-cpu-idle',
        'title': 'First CPU Idle',
        'description':
          "First CPU Idle marks the first time at which the page's main thread is quiet enough to handle input.  [Learn more](https://web.dev/first-cpu-idle/).",
        'score': 0.8,
        'scoreDisplayMode': 'numeric',
        'displayValue': '4.4 s',
        'numericValue': 4368.760415752421,
      },
      'resource-summary': {
        'id': 'resource-summary',
        'title': 'Keep request counts low and transfer sizes small',
        'description':
          'To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://web.dev/use-lighthouse-for-performance-budgets/).',
        'score': null,
        'scoreDisplayMode': 'informative',
        'displayValue': '37 requests • 682 KiB',
        'details': {
          'headings': [
            {
              'itemType': 'text',
              'text': 'Resource Type',
              'key': 'label',
            },
            {
              'itemType': 'numeric',
              'key': 'requestCount',
              'text': 'Requests',
            },
            {
              'key': 'transferSize',
              'itemType': 'bytes',
              'text': 'Transfer Size',
            },
          ],
          'items': [
            {
              'label': 'Total',
              'resourceType': 'total',
              'transferSize': 698763,
              'requestCount': 37,
            },
            {
              'transferSize': 334283,
              'resourceType': 'image',
              'requestCount': 14,
              'label': 'Image',
            },
            {
              'resourceType': 'script',
              'transferSize': 267379,
              'requestCount': 15,
              'label': 'Script',
            },
            {
              'resourceType': 'font',
              'label': 'Font',
              'transferSize': 46193,
              'requestCount': 4,
            },
            {
              'transferSize': 34289,
              'resourceType': 'document',
              'requestCount': 1,
              'label': 'Document',
            },
            {
              'requestCount': 3,
              'transferSize': 16619,
              'resourceType': 'other',
              'label': 'Other',
            },
            {
              'requestCount': 0,
              'resourceType': 'stylesheet',
              'label': 'Stylesheet',
              'transferSize': 0,
            },
            {
              'requestCount': 0,
              'label': 'Media',
              'resourceType': 'media',
              'transferSize': 0,
            },
            {
              'resourceType': 'third-party',
              'requestCount': 16,
              'label': 'Third-party',
              'transferSize': 282790,
            },
          ],
          'type': 'table',
        },
      },
      'font-display': {
        'id': 'font-display',
        'title': 'All text remains visible during webfont loads',
        'description':
          'Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display/).',
        'score': 1,
        'scoreDisplayMode': 'binary',
        'details': {
          'type': 'table',
          'headings': [],
          'items': [],
        },
        'warnings': [],
      },
      'metrics': {
        'id': 'metrics',
        'title': 'Metrics',
        'description': 'Collects all available metrics.',
        'score': null,
        'scoreDisplayMode': 'informative',
        'details': {
          'items': [
            {
              'firstCPUIdle': 4369,
              'observedTraceEnd': 1725,
              'observedLargestContentfulPaint': 158,
              'firstContentfulPaint': 973,
              'observedFirstMeaningfulPaint': 158,
              'estimatedInputLatency': 42,
              'observedFirstMeaningfulPaintTs': 121775849279,
              'totalBlockingTime': 316,
              'observedLastVisualChange': 1720,
              'cumulativeLayoutShift': 0,
              'interactive': 4456,
              'observedNavigationStartTs': 121775691229,
              'observedLoad': 344,
              'observedDomContentLoadedTs': 121775868021,
              'observedNavigationStart': 0,
              'observedLastVisualChangeTs': 121777411229,
              'observedLargestContentfulPaintTs': 121775849279,
              'observedDomContentLoaded': 177,
              'observedLoadTs': 121776035172,
              'observedFirstPaintTs': 121775849279,
              'maxPotentialFID': 160,
              'observedFirstContentfulPaint': 158,
              'largestContentfulPaint': 3396,
              'speedIndex': 2346,
              'observedCumulativeLayoutShift': 0,
              'observedFirstContentfulPaintTs': 121775849279,
              'observedTraceEndTs': 121777416565,
              'observedSpeedIndexTs': 121775970933,
              'observedFirstVisualChangeTs': 121775845229,
              'firstMeaningfulPaint': 973,
              'observedSpeedIndex': 280,
              'observedFirstPaint': 158,
              'observedFirstVisualChange': 154,
            },
            {
              'lcpInvalidated': false,
            },
          ],
          'type': 'debugdata',
        },
        'numericValue': 4456,
      },
      'efficient-animated-content': {
        'id': 'efficient-animated-content',
        'title': 'Use video formats for animated content',
        'description':
          'Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://web.dev/efficient-animated-content/)',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'details': {
          'headings': [],
          'overallSavingsBytes': 0,
          'items': [],
          'overallSavingsMs': 0,
          'type': 'opportunity',
        },
        'numericValue': 0,
      },
      'unminified-css': {
        'id': 'unminified-css',
        'title': 'Minify CSS',
        'description':
          'Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'details': {
          'overallSavingsMs': 0,
          'type': 'opportunity',
          'overallSavingsBytes': 0,
          'headings': [],
          'items': [],
        },
        'numericValue': 0,
      },
      'no-document-write': {
        'id': 'no-document-write',
        'title': 'Avoids `document.write()`',
        'description':
          'For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://web.dev/no-document-write/).',
        'score': 1,
        'scoreDisplayMode': 'binary',
        'details': {
          'items': [],
          'headings': [],
          'type': 'table',
        },
      },
      'max-potential-fid': {
        'id': 'max-potential-fid',
        'title': 'Max Potential First Input Delay',
        'description':
          'The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).',
        'score': 0.81,
        'scoreDisplayMode': 'numeric',
        'displayValue': '160 ms',
        'numericValue': 159.99999999999977,
      },
      'first-contentful-paint': {
        'id': 'first-contentful-paint',
        'title': 'First Contentful Paint',
        'description':
          'First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).',
        'score': 1,
        'scoreDisplayMode': 'numeric',
        'displayValue': '1.0 s',
        'numericValue': 973.1820037358181,
      },
      'dom-size': {
        'id': 'dom-size',
        'title': 'Avoid an excessive DOM size',
        'description':
          'A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://web.dev/dom-size/).',
        'score': 0.64,
        'scoreDisplayMode': 'numeric',
        'displayValue': '1,200 elements',
        'details': {
          'headings': [
            {
              'itemType': 'text',
              'key': 'statistic',
              'text': 'Statistic',
            },
            {
              'key': 'element',
              'itemType': 'code',
              'text': 'Element',
            },
            {
              'itemType': 'numeric',
              'key': 'value',
              'text': 'Value',
            },
          ],
          'items': [
            {
              'value': '1,200',
              'statistic': 'Total DOM Elements',
            },
            {
              'statistic': 'Maximum DOM Depth',
              'value': '12',
              'element': {
                'type': 'code',
                'value':
                  '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#news">',
              },
            },
            {
              'element': {
                'value': '<defs>',
                'type': 'code',
              },
              'value': '32',
              'statistic': 'Maximum Child Elements',
            },
          ],
          'type': 'table',
        },
        'numericValue': 1200,
      },
      'unused-javascript': {
        'id': 'unused-javascript',
        'title': 'Remove unused JavaScript',
        'description':
          'Remove unused JavaScript to reduce bytes consumed by network activity. [Learn more](https://web.dev/remove-unused-code/).',
        'score': 0.58,
        'scoreDisplayMode': 'numeric',
        'displayValue': 'Potential savings of 82 KiB',
        'details': {
          'items': [
            {
              'wastedBytes': 34873,
              'url': 'https://cdn.ampproject.org/v0.js',
              'subItems': {
                'items': [
                  {
                    'source': '…src/service/url-replacements-impl.js',
                    'sourceWastedBytes': 2268,
                    'sourceBytes': 2688,
                  },
                  {
                    'sourceBytes': 2604,
                    'sourceWastedBytes': 2242,
                    'source': '…src/service/action-impl.js',
                  },
                  {
                    'source': '…src/service/history-impl.js',
                    'sourceBytes': 2191,
                    'sourceWastedBytes': 1820,
                  },
                  {
                    'sourceBytes': 4165,
                    'sourceWastedBytes': 1667,
                    'source': '…src/service/resources-impl.js',
                  },
                  {
                    'source': '…src/service/viewport/viewport-impl.js',
                    'sourceBytes': 2736,
                    'sourceWastedBytes': 1641,
                  },
                ],
                'type': 'subitems',
              },
              'wastedPercent': 46.810755780470316,
              'totalBytes': 74497,
            },
            {
              'subItems': {
                'type': 'subitems',
                'items': [
                  {
                    'sourceBytes': 3858,
                    'sourceWastedBytes': 3743,
                    'source': '…extensions/amp-analytics/0.1/events.js',
                  },
                  {
                    'source': '…extensions/amp-analytics/0.1/amp-analytics.js',
                    'sourceWastedBytes': 2445,
                    'sourceBytes': 2176,
                  },
                  {
                    'sourceWastedBytes': 2429,
                    'source':
                      '…extensions/amp-analytics/0.1/visibility-manager.js',
                    'sourceBytes': 2261,
                  },
                  {
                    'source': '…extensions/amp-analytics/0.1/config.js',
                    'sourceWastedBytes': 1805,
                    'sourceBytes': 1475,
                  },
                  {
                    'sourceWastedBytes': 1317,
                    'source': '…extensions/amp-analytics/0.1/analytics-root.js',
                    'sourceBytes': 1244,
                  },
                ],
              },
              'totalBytes': 31220,
              'wastedPercent': 83.39817758860637,
              'url': 'https://cdn.ampproject.org/v0/amp-analytics-0.1.js',
              'wastedBytes': 26037,
            },
            {
              'wastedBytes': 23317,
              'subItems': {
                'type': 'subitems',
                'items': [
                  {
                    'source':
                      '…node_modules/web-animations-js/web-animations.install.js',
                    'sourceBytes': 12121,
                    'sourceWastedBytes': 18231,
                  },
                  {
                    'sourceWastedBytes': 4277,
                    'source': '…build/parsers/css-expr-impl.js',
                    'sourceBytes': 10065,
                  },
                  {
                    'sourceWastedBytes': 3009,
                    'sourceBytes': 2725,
                    'source': '…extensions/amp-animation/0.1/web-animations.js',
                  },
                  {
                    'sourceWastedBytes': 2244,
                    'sourceBytes': 2526,
                    'source':
                      '…extensions/amp-animation/0.1/parsers/css-expr-ast.js',
                  },
                  {
                    'sourceWastedBytes': 783,
                    'sourceBytes': 352,
                    'source': '…src/url.js',
                  },
                ],
              },
              'url': 'https://cdn.ampproject.org/v0/amp-animation-0.1.js',
              'totalBytes': 32796,
              'wastedPercent': 71.0972295917547,
            },
          ],
          'overallSavingsBytes': 84227,
          'headings': [
            {
              'valueType': 'url',
              'subItemsHeading': {
                'key': 'source',
                'valueType': 'code',
              },
              'key': 'url',
              'label': 'URL',
            },
            {
              'valueType': 'bytes',
              'subItemsHeading': {
                'key': 'sourceBytes',
              },
              'label': 'Transfer Size',
              'key': 'totalBytes',
            },
            {
              'key': 'wastedBytes',
              'valueType': 'bytes',
              'subItemsHeading': {
                'key': 'sourceWastedBytes',
              },
              'label': 'Potential Savings',
            },
          ],
          'overallSavingsMs': 600,
          'type': 'opportunity',
        },
        'numericValue': 600,
      },
      'performance-budget': {
        'id': 'performance-budget',
        'title': 'Performance budget',
        'description':
          'Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).',
        'score': null,
        'scoreDisplayMode': 'notApplicable',
      },
    },
    'categories': {
      'performance': {
        'id': 'performance',
        'title': 'Performance',
        'score': 0.86,
        'auditRefs': [
          {
            'id': 'first-contentful-paint',
            'weight': 15,
            'group': 'metrics',
          },
          {
            'id': 'speed-index',
            'weight': 15,
            'group': 'metrics',
          },
          {
            'id': 'largest-contentful-paint',
            'weight': 25,
            'group': 'metrics',
          },
          {
            'id': 'interactive',
            'weight': 15,
            'group': 'metrics',
          },
          {
            'id': 'total-blocking-time',
            'weight': 25,
            'group': 'metrics',
          },
          {
            'id': 'cumulative-layout-shift',
            'weight': 5,
            'group': 'metrics',
          },
          {
            'id': 'first-cpu-idle',
            'weight': 0,
          },
          {
            'id': 'max-potential-fid',
            'weight': 0,
          },
          {
            'id': 'first-meaningful-paint',
            'weight': 0,
          },
          {
            'id': 'estimated-input-latency',
            'weight': 0,
          },
          {
            'id': 'render-blocking-resources',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'uses-responsive-images',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'offscreen-images',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'unminified-css',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'unminified-javascript',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'unused-css-rules',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'unused-javascript',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'uses-optimized-images',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'uses-webp-images',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'uses-text-compression',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'uses-rel-preconnect',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'server-response-time',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'redirects',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'uses-rel-preload',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'efficient-animated-content',
            'weight': 0,
            'group': 'load-opportunities',
          },
          {
            'id': 'total-byte-weight',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'uses-long-cache-ttl',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'dom-size',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'critical-request-chains',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'user-timings',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'bootup-time',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'mainthread-work-breakdown',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'font-display',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'performance-budget',
            'weight': 0,
            'group': 'budgets',
          },
          {
            'id': 'timing-budget',
            'weight': 0,
            'group': 'budgets',
          },
          {
            'id': 'resource-summary',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'third-party-summary',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'largest-contentful-paint-element',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'layout-shift-elements',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'uses-passive-event-listeners',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'no-document-write',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'long-tasks',
            'weight': 0,
            'group': 'diagnostics',
          },
          {
            'id': 'network-requests',
            'weight': 0,
          },
          {
            'id': 'network-rtt',
            'weight': 0,
          },
          {
            'id': 'network-server-latency',
            'weight': 0,
          },
          {
            'id': 'main-thread-tasks',
            'weight': 0,
          },
          {
            'id': 'diagnostics',
            'weight': 0,
          },
          {
            'id': 'metrics',
            'weight': 0,
          },
          {
            'id': 'screenshot-thumbnails',
            'weight': 0,
          },
          {
            'id': 'final-screenshot',
            'weight': 0,
          },
          {
            'id': 'first-contentful-paint-3g',
            'weight': 0,
          },
        ],
      },
    },
    'categoryGroups': {
      'pwa-installable': {
        'title': 'Installable',
      },
      'a11y-language': {
        'title': 'Internationalization and localization',
        'description':
          'These are opportunities to improve the interpretation of your content by users in different locales.',
      },
      'best-practices-general': {
        'title': 'General',
      },
      'seo-mobile': {
        'title': 'Mobile Friendly',
        'description':
          'Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/).',
      },
      'load-opportunities': {
        'title': 'Opportunities',
        'description':
          "These suggestions can help your page load faster. They don't [directly affect](https://web.dev/performance-scoring/) the Performance score.",
      },
      'best-practices-trust-safety': {
        'title': 'Trust and Safety',
      },
      'pwa-fast-reliable': {
        'title': 'Fast and reliable',
      },
      'a11y-tables-lists': {
        'title': 'Tables and lists',
        'description':
          'These are opportunities to to improve the experience of reading tabular or list data using assistive technology, like a screen reader.',
      },
      'a11y-names-labels': {
        'title': 'Names and labels',
        'description':
          'These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.',
      },
      'seo-content': {
        'title': 'Content Best Practices',
        'description':
          'Format your HTML in a way that enables crawlers to better understand your app’s content.',
      },
      'a11y-best-practices': {
        'title': 'Best practices',
        'description':
          'These items highlight common accessibility best practices.',
      },
      'budgets': {
        'title': 'Budgets',
        'description':
          'Performance budgets set standards for the performance of your site.',
      },
      'best-practices-ux': {
        'title': 'User Experience',
      },
      'best-practices-browser-compat': {
        'title': 'Browser Compatibility',
      },
      'seo-crawl': {
        'title': 'Crawling and Indexing',
        'description':
          'To appear in search results, crawlers need access to your app.',
      },
      'a11y-color-contrast': {
        'title': 'Contrast',
        'description':
          'These are opportunities to improve the legibility of your content.',
      },
      'pwa-optimized': {
        'title': 'PWA Optimized',
      },
      'diagnostics': {
        'title': 'Diagnostics',
        'description':
          "More information about the performance of your application. These numbers don't [directly affect](https://web.dev/performance-scoring/) the Performance score.",
      },
      'a11y-aria': {
        'title': 'ARIA',
        'description':
          'These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader.',
      },
      'a11y-audio-video': {
        'title': 'Audio and video',
        'description':
          'These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments.',
      },
      'metrics': {
        'title': 'Metrics',
      },
      'a11y-navigation': {
        'title': 'Navigation',
        'description':
          'These are opportunities to improve keyboard navigation in your application.',
      },
    },
    'timing': {
      'total': 7219.43,
    },
    'i18n': {
      'rendererFormattedStrings': {
        'varianceDisclaimer':
          'Values are estimated and may vary. The [performance score is calculated](https://web.dev/performance-scoring/) directly from these metrics.',
        'opportunityResourceColumnLabel': 'Opportunity',
        'opportunitySavingsColumnLabel': 'Estimated Savings',
        'errorMissingAuditInfo': 'Report error: no audit information',
        'errorLabel': 'Error!',
        'warningHeader': 'Warnings: ',
        'auditGroupExpandTooltip': 'Show audits',
        'passedAuditsGroupTitle': 'Passed audits',
        'notApplicableAuditsGroupTitle': 'Not applicable',
        'manualAuditsGroupTitle': 'Additional items to manually check',
        'toplevelWarningsMessage':
          'There were issues affecting this run of Lighthouse:',
        'crcLongestDurationLabel': 'Maximum critical path latency:',
        'crcInitialNavigation': 'Initial Navigation',
        'lsPerformanceCategoryDescription':
          '[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.',
        'labDataTitle': 'Lab Data',
      },
    },
    'stackPacks': [
      {
        'id': 'amp',
        'title': 'AMP',
        'iconDataURL':
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"%3E%3Cpath d="M171.887 116.28l-53.696 89.36h-9.728l9.617-58.227-30.2.047a4.852 4.852 0 01-4.855-4.855c0-1.152 1.07-3.102 1.07-3.102l53.52-89.254 9.9.043-9.86 58.317 30.413-.043a4.852 4.852 0 014.855 4.855c0 1.088-.427 2.044-1.033 2.854l.004.004zM128 0C57.306 0 0 57.3 0 128s57.306 128 128 128 128-57.306 128-128S198.7 0 128 0z" fill="%230379c4" fill-rule="evenodd"/%3E%3C/svg%3E',
        'descriptions': {
          'uses-responsive-images':
            'The `amp-img` element supports the `srcset` attribute to specify which image assets to use based on the screen size.  [Learn more](https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/art_direction/).',
          'unminified-css':
            'Refer to the [AMP documentation](https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/style_pages/) to ensure all your styles are supported.',
          'uses-webp-images':
            'Consider displaying all your `amp-img` components in WebP formats while specifying an appropriate fallback for other browsers. [Learn more](https://amp.dev/documentation/components/amp-img/#example:-specifying-a-fallback-image).',
          'offscreen-images':
            'Ensure that you are you using valid `amp-img` tags for your images which automatically lazy-load outside the first viewport. [Learn more](https://amp.dev/documentation/guides-and-tutorials/develop/media_iframes_3p/?format=websites#images).',
          'efficient-animated-content':
            'For animated content, use [amp-anim](https://amp.dev/documentation/components/amp-anim/) to minimize CPU usage while the content remains offscreen.',
          'render-blocking-resources':
            'Use tools such as [AMP Optimizer](https://github.com/ampproject/amp-toolbox/tree/master/packages/optimizer) to [server-side render AMP layouts](https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/server-side-rendering/).',
        },
      },
    ],
  },
  'analysisUTCTimestamp': '2020-08-13T12:42:23.398Z',
};

module.exports = {
  dummyApiResponse,
};
