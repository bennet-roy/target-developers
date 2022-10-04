"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[2224],{7924:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return l}});var o=t(87462),a=t(63366),r=(t(15007),t(64983)),i=t(91515),d=["components"],s={},p={_frontmatter:s},m=i.Z;function l(e){var n=e.components,t=(0,a.Z)(e,d);return(0,r.mdx)(m,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"prefetch"},"Prefetch"),(0,r.mdx)("p",null,"Prefetching allows clients like mobile apps and servers to fetch content for multiple mboxes or views in one request, cache it locally, and later notify Target when the user visits those mboxes or views. When utilizing prefetch, it's important to be familiar with the following terms:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"prefetch")),(0,r.mdx)("td",{parentName:"tr",align:null},"List of mboxes and views that should be fetched but shouldn’t be marked as visited. The Target Edge returns an ",(0,r.mdx)("inlineCode",{parentName:"td"},"eventToke"),"n for each mbox or view that exist in the prefetch array.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"notifications")),(0,r.mdx)("td",{parentName:"tr",align:null},"List of mboxes and views that were previously prefetched and should be marked as visited.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventToken")),(0,r.mdx)("td",{parentName:"tr",align:null},"A hashed encrypted token that is returned when content is prefetched. This token should be sent back to Target in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"notifications")," array.")))),(0,r.mdx)("h2",{id:"prefetch-mboxes"},"Prefetch Mboxes"),(0,r.mdx)("p",null,"Clients like mobile apps and servers can prefetch multiple mboxes for a given user within a session and cache it in order to avoid multiple calls to Adobe Target Delivery API."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'curl -X POST \\\n\'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=7abf6304b2714215b1fd39a870f01afc#1555632114\' \\\n-H \'Content-Type: application/json\' \\\n-H \'cache-control: no-cache\' \\\n-d \'\n{\n  "id": {\n    "tntId": "abcdefghijkl00023.1_1"\n  },\n  "context": {\n    "channel": "web",\n    "browser" : {\n      "host" : "demo"\n    },\n    "address" : {\n      "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"\n    },\n    "screen" : {\n      "width" : 1200,\n      "height": 1400\n    }\n  },\n    "prefetch": {\n    "mboxes" : [\n      {\n        "name" : "SummerOffer",\n        "index" : 1\n      },\n      {\n        "name" : "SummerShoesOffer",\n        "index" : 2\n      },\n      {\n        "name" : "SummerDressOffer",\n        "index" : 3\n      }      \n    ]\n  }\n}\'\n')),(0,r.mdx)("p",null,"Within the ",(0,r.mdx)("inlineCode",{parentName:"p"},"prefetch")," field, add one or more ",(0,r.mdx)("inlineCode",{parentName:"p"},"mboxes")," you want to prefetch for at once for a user within a session. Once you prefetch for those ",(0,r.mdx)("inlineCode",{parentName:"p"},"mboxes")," you will receive the following response:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n    "status": 200,\n    "requestId": "5efee0d8-3779-4b12-a74e-e04848faf191",\n    "client": "demo",\n    "id": {\n        "tntId": "abcdefghijkl00023.1_1"\n    },\n    "edgeHost": "mboxedge28.tt.omtrdc.net",\n    "prefetch": {\n        "mboxes": [\n            {\n                "index": 1,\n                "name": "SummerOffer",\n                "options": [\n                    {\n                        "content": "<p><b>Enjoy this 15% discount on your next purchase</b></p>",\n                        "type": "html",\n                        "eventToken": "GcvBXDhdJFNR9E9r1tgjfmqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                    }\n                ]\n            },\n            {\n                "index": 2,\n                "name": "SummerShoesOffer",\n                "options": [\n                    {\n                        "content": "<p><b>Enjoy this 15% discount on your next shoe purchase</b></p>"\n                        "type": "html",\n                        "eventToken": "GcvBXDhdJFNR9E9r1tgjfmqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                    }\n                ]\n            },\n            {\n                "index": 3,\n                "name": "SummerDressOffer",\n                "options": [\n                    {\n                        "content": "<p><b>Enjoy this 15% discount on your next dress purchase</b></p>"\n                        "type": "html",\n                        "eventToken": "GcvBXDhdJFNR9E9r1tgjfmqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.mdx)("p",null,"Within the response, you will see the ",(0,r.mdx)("inlineCode",{parentName:"p"},"content")," field containing the experience to show to the user for a particular ",(0,r.mdx)("inlineCode",{parentName:"p"},"mbox"),". This is very useful when cached on your server so that when a user interacts with your web or mobile application within a session and visits an ",(0,r.mdx)("inlineCode",{parentName:"p"},"mbox")," on any particular page of your application, the experience can be delivered from the cache instead of making another Adobe Target Delivery API call. However, when an experience is delivered to the user from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"mbox"),", a ",(0,r.mdx)("inlineCode",{parentName:"p"},"notification")," will be sent via a Delivery API call in order for impression logging to occur. This is because the response of ",(0,r.mdx)("inlineCode",{parentName:"p"},"prefetch")," calls are cached, which means that the user has not seen the experiences at the time the ",(0,r.mdx)("inlineCode",{parentName:"p"},"prefetch")," call happens. In order to learn more about the ",(0,r.mdx)("inlineCode",{parentName:"p"},"notification")," process, please see ",(0,r.mdx)("a",{parentName:"p",href:"notifications.md"},"Notifications"),"."),(0,r.mdx)("h2",{id:"prefetch-views"},"Prefetch Views"),(0,r.mdx)("p",null,"Views support Single Page Applications (SPA) and Mobile Applications more seamlessly. Views can be seen as a logical group of visual elements that together make up a SPA or Mobile experience. Now, through the Delivery API, VEC created AB & XT activities with modifications on ",(0,r.mdx)("a",{parentName:"p",href:"../client-side/atjs/how-to-deployatjs/target-atjs-single-page-application.md"},"Views for SPA")," can now be prefetched."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=a3e7368c62d944c0855d424cd7a03ab0\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n  "id": {\n    "tntId": "84e8d0e211054f18af365d65f45e902b.28_131"\n  },\n  "context": {\n    "channel": "web",\n    "window": {\n      "width": 1819,\n      "height": 842\n    },\n    "browser": {\n      "host": "target.enablementadobe.com"\n    },\n    "address": {\n      "url": "https://target.enablementadobe.com/react/demo/#/"\n    }\n  },\n  "prefetch": {\n    "views": [{}]\n  }\n}\'\n')),(0,r.mdx)("p",null,"The example call above will prefetch all the Views created thru the SPA VEC for AB and XT activities to display for the web ",(0,r.mdx)("inlineCode",{parentName:"p"},"channel"),". Notice in the call that we want to prefetch all the Views from the AB or XT activities that a visitor with ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId"),":",(0,r.mdx)("inlineCode",{parentName:"p"},"84e8d0e211054f18af365d65f45e902b.28_131")," who is visiting the ",(0,r.mdx)("inlineCode",{parentName:"p"},"url"),":",(0,r.mdx)("inlineCode",{parentName:"p"},"https://target.enablementadobe.com/react/demo/#/")," qualifies for."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n    "status": 200,\n    "requestId": "14ce028e-d2d2-4504-b3da-32740fa8dd61",\n    "client": "demo",\n    "id": {\n        "tntId": "84e8d0e211054f18af365d65f45e902b.28_131"\n    },\n    "edgeHost": "mboxedge28.tt.omtrdc.net",\n    "prefetch": {\n        "views": [\n            {\n                "id": 228,\n                "name": "checkout-express",\n                "key": "checkout-express",\n                "state": "Vqfb6kYGAmzWOLf9W6E+Q/0LyS+SYe2h5tuTXzRNnkjKkZaZZr2ijp41/6AwK6fdFgADhFNC7l5efUCs9shgTw==",\n                "options": [\n                    {\n                        "content": [\n                            {\n                                "type": "setHtml",\n                                "selector": "#app > DIV:nth-of-type(1) > DIV:nth-of-type(2) > SECTION.section:eq(0) > DIV.container:eq(0) > FORM.col-md-4:eq(0) > DIV:nth-of-type(1) > DIV.mb-3:eq(2)",\n                                "cssSelector": "#app > DIV:nth-of-type(1) > DIV:nth-of-type(2) > SECTION:nth-of-type(1) > DIV:nth-of-type(1) > FORM:nth-of-type(2) > DIV:nth-of-type(1) > DIV:nth-of-type(3)",\n                                "content": "<span style=\\"color:#000080;\\"><strong>*We charge an additional fee of $12.34 for faster delivery. If you choose express delivery get 15% off on your next order.</strong></span>"\n                            }\n                        ],\n                        "type": "actions",\n                        "eventToken": "N3C13I0M2PH8iaKtONJlFJNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q=="\n                    }\n                ]\n            },\n            {\n                "id": 5,\n                "name": "home",\n                "key": "home",\n                "state": "Vqfb6kYGAmzWOLf9W6E+Q/0LyS+SYe2h5tuTXzRNnkjKkZaZZr2ijp41/6AwK6fdFgADhFNC7l5efUCs9shgTw==",\n                "options": [\n                    {\n                        "content": [\n                            {\n                                "type": "setHtml",\n                                "selector": "#app > DIV:nth-of-type(1) > DIV:nth-of-type(2) > SECTION.section:eq(0) > DIV.container:eq(1) > DIV.heading:eq(0) > H1.title:eq(0)",\n                                "cssSelector": "#app > DIV:nth-of-type(1) > DIV:nth-of-type(2) > SECTION:nth-of-type(1) > DIV:nth-of-type(2) > DIV:nth-of-type(1) > H1:nth-of-type(1)",\n                                "content": "<span style=\\"color:#800000;\\"><strong>Trending Items</strong></span>"\n                            }\n                        ],\n                        "type": "actions",\n                        "eventToken": "N3C13I0M2PH8iaKtONJlFJNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q=="\n                    }\n                ]\n            },\n            {\n                "id": 6,\n                "name": "products",\n                "key": "products",\n                "state": "Vqfb6kYGAmzWOLf9W6E+Q/0LyS+SYe2h5tuTXzRNnkjKkZaZZr2ijp41/6AwK6fdFgADhFNC7l5efUCs9shgTw==",\n                "options": [\n                    {\n                        "content": [\n                            {\n                                "type": "setStyle",\n                                "selector": "#app > DIV:nth-of-type(1) > DIV:nth-of-type(2) > SECTION.section:eq(0) > DIV.container:eq(0) > DIV.heading:eq(0) > BUTTON.btn:eq(0)",\n                                "cssSelector": "#app > DIV:nth-of-type(1) > DIV:nth-of-type(2) > SECTION:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(1) > BUTTON:nth-of-type(1)",\n                                "content": {\n                                    "background-color": "rgba(191,0,0,1)",\n                                    "priority": "important"\n                                }\n                            }\n                        ],\n                        "type": "actions",\n                        "eventToken": "N3C13I0M2PH8iaKtONJlFJNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q=="\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.mdx)("p",null,"In the ",(0,r.mdx)("inlineCode",{parentName:"p"},"content")," fields of the response, note metadata such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"type"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"selector"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"cssSelector"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"content"),", which are used to render the experience to your end user when a user visits your page. Note that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"prefetched")," content can be cached and rendered to the user when necessary."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-before-implement-delivery-api-overview-prefetch-md-5fa5d3bfcea9aa130592.js.map