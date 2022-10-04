"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[1215],{55013:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return p}});var a=t(87462),d=t(63366),r=(t(15007),t(64983)),i=t(91515),o=["components"],l={},m={_frontmatter:l},s=i.Z;function p(e){var n=e.components,t=(0,d.Z)(e,o);return(0,r.mdx)(s,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"integration-with-experience-cloud"},"Integration with Experience Cloud"),(0,r.mdx)("h2",{id:"adobe-analytics-for-target-a4t"},"Adobe Analytics for Target (A4T)"),(0,r.mdx)("p",null,"When a Target Delivery API call is fired from the server, Adobe Target returns the experience for that user and in addition to that, Adobe Target either returns the Adobe Analytics payload back to the caller or automatically forwards it to Adobe Analytics. In order to send Target activity information to Adobe Analytics on the server side, there are a few pre-requisites that need to be satisfied:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"The activity is set up in the Adobe Target UI with Adobe Analytics as the reporting source and the accounts are enabled for A4T"),(0,r.mdx)("li",{parentName:"ol"},"Adobe Marketing Cloud Visitor ID is generated by the API user, and is available when the Target Delivery API call is fired")),(0,r.mdx)("h3",{id:"adobe-target-automatically-forwards-the-analytics-payload"},"Adobe Target Automatically Forwards the Analytics Payload"),(0,r.mdx)("p",null,"Adobe Target can automatically forward the analytics payload to Adobe Analytics via the server side if the following identifiers are provided:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"supplementalDataId")," - The ID that is utilized to stitch between Adobe Analytics and Adobe Target"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"trackingServer")," - The Adobe Analaytics Server In order for Adobe Target and Adobe Analytics to correctly stitch the data together, the same ",(0,r.mdx)("inlineCode",{parentName:"li"},"supplementalDataId")," need to be passed to both Adobe Target and Adobe Analytics.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=d359234570e04f14e1faeeba02d6ab9914e\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n      "context": {\n        "channel": "web",\n        "browser" : {\n          "host" : "demo"\n        },\n        "address" : {\n          "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"\n        },\n        "screen" : {\n          "width" : 1200,\n          "height": 1400\n        }\n      },\n      "id": {\n        "marketingCloudVisitorId": "2304820394812039"\n      },\n      "property" : {\n        "token": "08b62abd-c3e7-dfb2-da93-96b3aa724d81"\n      },\n      "experienceCloud": {\n        "analytics": {\n          "supplementalDataId" : "23423498732598234",\n          "trackingServer": "ags041.sc.omtrdc.net",\n          "logging": "server_side"\n        }\n      },\n        "execute": {\n        "mboxes" : [\n          {\n            "name" : "homepage",\n            "index" : 1\n          }\n        ]\n      }\n    }\'\n')),(0,r.mdx)("h3",{id:"retrieve-analytics-payload-from-adobe-target"},"Retrieve Analytics Payload from Adobe Target"),(0,r.mdx)("p",null,"Consumers of the Adobe Target Delivery API can retrieve the Adobe Analytics payload for a corresponding mbox so that the consumer can send the payload to Adobe Analytics via the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/analytics-1.4-apis/blob/master/docs/data-insertion-api/index.md"},"Data Insertion API"),". When a server-side Adobe Target call is fired, pass ",(0,r.mdx)("inlineCode",{parentName:"p"},"client_side")," to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"logging")," field in the request. This will in turn return a payload if the mbox is present in an activity that is using Analytics as the reporting source."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=d359234570e04f14e1faeeba02d6ab9914e\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n      "context": {\n        "channel": "web",\n        "browser" : {\n          "host" : "demo"\n        },\n        "address" : {\n          "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"\n        },\n        "screen" : {\n          "width" : 1200,\n          "height": 1400\n        }\n      },\n      "property" : {\n        "token": "08b62abd-c3e7-dfb2-da93-96b3aa724d81"\n      },\n      "experienceCloud": {\n        "analytics": {\n          "logging": "client_side"\n        }\n      },\n        "execute": {\n        "mboxes" : [\n          {\n            "name" : "homepage",\n            "index" : 1\n          },\n          {\n            "name" : "SummerShoesOffer",\n            "index" : 2       \n          },\n          {\n            "name" : "SummerDressOffer",\n            "index" : 3       \n          }      \n        ]\n      }\n    }\'\n')),(0,r.mdx)("p",null,"Once you have specified ",(0,r.mdx)("inlineCode",{parentName:"p"},"logging")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"client_side"),", you will receive the payload in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"mbox")," field as shown below."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n    "status": 200,\n    "requestId": "4b8855a5-8354-4ac4-8ae7-c551f7c0bb8a",\n    "client": "demo",\n    "id": {\n        "tntId": "d359234570e04f14e1faeeba02d6ab9914e.28_7"\n    },\n    "edgeHost": "mboxedge28.tt.omtrdc.net",\n    "execute": {\n        "mboxes": [\n            {\n                "index": 1,\n                "name": "homepage",\n                "options": [\n                    {\n                        "content": "<p><b>Enjoy this 15% discount on your next purchase</b></p>",\n                        "type": "html",\n\n                    }\n                ],\n                "analytics": {\n                    "payload": {\n                        "pe": "tnt",\n                        "tnta": "285408:0:0|2"\n                    }\n                }\n            },\n            {\n                "index": 2,\n                "name": "SummerShoesOffer",\n                "options": [\n                    {\n                        "content": "<p><b>Enjoy this 15% discount on your next shoe purchase</b></p>",\n                        "type": "html",\n                    }\n                ]\n            },\n            {\n                "index": 3,\n                "name": "SummerDressOffer",\n                "options": [\n                    {\n                        "content": "<p><b>Enjoy this 15% discount on your next dress purchase</b></p>",\n                        "type": "html",\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.mdx)("p",null,"If the response from Target contains anything in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"analytics")," -> ",(0,r.mdx)("inlineCode",{parentName:"p"},"payload")," property, forward it as it is to Adobe Analytics. Analytics knows how to process this payload. This can be done in a GET request using the following format:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"https://{datacollectionhost.sc.omtrdc.net}/b/ss/{rsid}/0/CODEVERSION?pe=tnt&tnta={payload}&mcid={mcid}&vid={vid}&aid={aid}\n\n")),(0,r.mdx)("h3",{id:"query-string-parameters-and-variables"},"Query String Parameters and Variables"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"rsid")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"The report suite ID")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pe")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"Page event. Always set to ",(0,r.mdx)("inlineCode",{parentName:"td"},"tnt"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tnta")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"Analytics payload returned by Target server in ",(0,r.mdx)("inlineCode",{parentName:"td"},"analytics")," -> ",(0,r.mdx)("inlineCode",{parentName:"td"},"payload")," -> ",(0,r.mdx)("inlineCode",{parentName:"td"},"tnta"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorId")),(0,r.mdx)("td",{parentName:"tr",align:null},"Marketing Cloud Visitor ID"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("h3",{id:"required-header-values"},"Required Header Values"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Header Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Header Value"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Host"),(0,r.mdx)("td",{parentName:"tr",align:null},"Analytics data collection server (eg: adobeags421.sc.omtrdc.net)")))),(0,r.mdx)("h3",{id:"sample-a4t-data-insertion-http-get-call"},"Sample A4T Data Insertion HTTP Get Call"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"https://demo.sc.omtrdc.net/b/ss/myCustomRsid/0/MOBILE-1.0?pe=tnt&tnta=285408:0:0|2&mcid=2304820394812039\n")),(0,r.mdx)("h2",{id:"adobe-audience-manager"},"Adobe Audience Manager"),(0,r.mdx)("p",null,"Adobe Audience Manager (AAM) segments can also be leveraged via Adobe Target Delivery APIs. In order to leverage AAM segments, the following fields must be provided:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"locationHint")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"DCS Location Hint is used to determine which AAM DCS Endpoint to hit in order to retrieve the profile. Must be >= 1.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorId")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"Marketing Cloud Visitor ID")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"blob")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"AAM Blob is used to send additional data to AAM. Must not be blank and the size <= 1024.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=d359234570e04f14e1faeeba02d6ab9914e\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n      "context": {\n        "channel": "web",\n        "browser" : {\n          "host" : "demo"\n        },\n        "address" : {\n          "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"\n        },\n        "screen" : {\n          "width" : 1200,\n          "height": 1400\n        }\n      },\n      "id": {\n        "marketingCloudVisitorId": "2304820394812039"\n      },\n      "property" : {\n        "token": "08b62abd-c3e7-dfb2-da93-96b3aa724d81"\n      },\n      "experienceCloud": {\n        "audienceManager": {\n          "locationHint": 9,\n          "blob": "32fdghkjh34kj5h43"\n        }\n      },\n        "execute": {\n        "mboxes" : [\n          {\n            "name" : "homepage",\n            "index" : 1\n          },\n          {\n            "name" : "SummerShoesOffer",\n            "index" : 2       \n          },\n          {\n            "name" : "SummerDressOffer",\n            "index" : 3       \n          }      \n        ]\n      }\n    }\'\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-before-implement-delivery-api-overview-integration-md-bde544d590d5cc043bb8.js.map