"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[562],{54691:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return u}});var i=n(87462),a=n(63366),r=(n(15007),n(64983)),d=n(91515),o=["components"],l={},s={_frontmatter:l},m=d.Z;function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.mdx)(m,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"user-identification-and-bucketing"},"User identification and bucketing"),(0,r.mdx)("h2",{id:"user-identification"},"User Identification"),(0,r.mdx)("p",null,"There are multiple ways in which a user can be identified within Adobe Target. Target uses the following identifiers:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tntID")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"tntId")," is the primary identifier in Target for a user. You can supply this ID, or Target will auto-generate it if the request doesn’t contain one.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"thirdPartyId")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"thirdPartyId")," is your company’s identifier for the user, which you can send with every call. When a user logs in to a company's site, the company typically creates an ID that is tied to the visitor's account, loyalty card, membership number, or other applicable identifiers for that company.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorId")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorId")," is used to merge and share data between different Adobe solutions. The marketingCloudVisitorId is required for integrations with Adobe Analytics and Adobe Audience Manager.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"customerIds")),(0,r.mdx)("td",{parentName:"tr",align:null},"Along with the Experience Cloud Visitor ID, additional ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/id-service/using/reference/authenticated-state.html"},"customer IDs")," and an authenticated status for each visitor can also be utilized.")))),(0,r.mdx)("h2",{id:"target-id-tntid"},"Target ID (tntID)"),(0,r.mdx)("p",null,"The Target ID, or ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId"),", can be considered a device ID. This ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId")," is generated automatically by Adobe Target if it is not provided in the request. Subsequent requests need to include this ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId")," in order for the right content to be delivered to a device used by the same user."),(0,r.mdx)("p",null,"The following sample call demonstrates a situation in which a ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId")," is not passed to Target."),(0,r.mdx)("h3",{id:"nodejs-sdk"},"Node.js SDK"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\n\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\n\nconst targetClient = TargetClient.create(CONFIG);\n\ntargetClient.getOffers({\n  request: {      \n    execute: {\n      mboxes: [{\n        name: "some-mbox"\n      }]\n    }       \n  }\n})\n.then(console.log)\n.catch(console.error);\n')),(0,r.mdx)("h3",{id:"java-sdk"},"Java SDK"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'ClientConfig config = ClientConfig.builder()\n  .client("acmeclient")\n  .organizationId("1234567890@AdobeOrg")\n  .build();\nTargetClient targetClient = TargetClient.create(config);\n\nContext context = new Context().channel(ChannelType.WEB);\nMboxRequest mbox = new MboxRequest()\n  .name("some-mbox")\n  .index(0);\nExecuteRequest executeRequest = new ExecuteRequest()\n  .mboxes(Arrays.asList(mbox));\n\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n  .context(context)\n  .execute(executeRequest)\n  .build();\n\nTargetDeliveryResponse offers = targetClient.getOffers(request);\n')),(0,r.mdx)("p",null,"In the absence of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId"),", Adobe Target generates a ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId")," and provides it in the response, as follows."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n  "status": 200,\n  "requestId": "5b586f83-890c-46ae-93a2-610b1caa43ef",\n  "client": "acmeclient",\n  "id": {\n      "tntId": "10abf6304b2714215b1fd39a870f01afc.35_0"\n  },\n  "edgeHost": "mboxedge35.tt.omtrdc.net",\n  ...\n}\n')),(0,r.mdx)("p",null,"In this example, the generated ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId")," is ",(0,r.mdx)("inlineCode",{parentName:"p"},"10abf6304b2714215b1fd39a870f01afc.35_0"),". Please note this ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId")," needs to be used for the same user across sessions."),(0,r.mdx)("h2",{id:"third-party-id-thirdpartyid"},"Third Party ID (thirdPartyId)"),(0,r.mdx)("p",null,"If your organization uses an ID to identify your visitor, you can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"thirdPartyID")," to deliver content. At ",(0,r.mdx)("inlineCode",{parentName:"p"},"hirdPartyID")," is a persistent ID that your business utilizes to identify an end user, regardless of whether they interact with your business from web, mobile, or IoT channels. In other words, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"thirdPartyId")," references user profile data that can be utilized across channels. However, you must provide the ",(0,r.mdx)("inlineCode",{parentName:"p"},"thirdPartyID")," for every Adobe Target Delivery API call you make."),(0,r.mdx)("p",null,"The following sample call demonstrates the use of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"thirdPartyId"),"."),(0,r.mdx)("h3",{id:"nodejs-sdk-1"},"Node.js SDK"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\n\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\n\nconst targetClient = TargetClient.create(CONFIG);\n\ntargetClient.getOffers({\n  request: {     \n    id: {\n      thirdPartyId: "B234A029348"\n    }, \n    execute: {\n      mboxes: [{\n        name: "some-mbox"\n      }]\n    }       \n  }\n})\n.then(console.log)\n.catch(console.error);\n')),(0,r.mdx)("h3",{id:"java-sdk-1"},"Java SDK"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'ClientConfig config = ClientConfig.builder()\n  .client("acmeclient")\n  .organizationId("1234567890@AdobeOrg")\n  .build();\nTargetClient targetClient = TargetClient.create(config);\n\nVisitorId id = new VisitorId()\n  .thirdPartyId("B234A029348");\nContext context = new Context().channel(ChannelType.WEB);\nMboxRequest mbox = new MboxRequest()\n  .name("some-mbox")\n  .index(0);\nExecuteRequest executeRequest = new ExecuteRequest()\n  .mboxes(Arrays.asList(mbox));\n\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n  .context(context)\n  .execute(executeRequest)\n  .build();\n\nTargetDeliveryResponse offers = targetClient.getOffers(request);\n')),(0,r.mdx)("p",null,"In this scenario, Adobe Target will generate a ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId")," since it was not passed into the original call, which will be mapped to the provided ",(0,r.mdx)("inlineCode",{parentName:"p"},"thirdPartyId"),"."),(0,r.mdx)("h2",{id:"marketing-cloud-visitor-id-marketingcloudvisitorid"},"Marketing Cloud Visitor ID (marketingCloudVisitorId)"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," is a universal and persistent ID that identifies your visitors across all solutions in the Adobe Experience Cloud. When your organization implements the ID service, this ID lets you identify the same site visitor and their data in different Experience Cloud solutions, including Adobe Target, Adobe Analytics, and Adobe Audience Manager. Please note the ",(0,r.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," is required when integrating Target with Analytics and Audience Manager."),(0,r.mdx)("p",null,"The following sample call demonstrates how a ",(0,r.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," that was retrieved from the Experience Cloud ID Service is passed to Target."),(0,r.mdx)("h3",{id:"nodejs-sdk-2"},"Node.js SDK"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\n\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\n\nconst targetClient = TargetClient.create(CONFIG);\n\ntargetClient.getOffers({\n  request: {     \n    id: {\n      marketingCloudVisitorId: "10527837386392355901041112038610706884"\n    }, \n    execute: {\n      mboxes: [{\n        name: "some-mbox"\n      }]\n    }       \n  }\n})\n.then(console.log)\n.catch(console.error);\n')),(0,r.mdx)("h3",{id:"java-sdk-2"},"Java SDK"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'ClientConfig config = ClientConfig.builder()\n  .client("acmeclient")\n  .organizationId("1234567890@AdobeOrg")\n  .build();\nTargetClient targetClient = TargetClient.create(config);\n\nVisitorId id = new VisitorId()\n  .marketingCloudVisitorId("10527837386392355901041112038610706884");\nContext context = new Context().channel(ChannelType.WEB);\nMboxRequest mbox = new MboxRequest()\n  .name("some-mbox")\n  .index(0);\nExecuteRequest executeRequest = new ExecuteRequest()\n  .mboxes(Arrays.asList(mbox));\n\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n  .context(context)\n  .execute(executeRequest)\n  .build();\n\nTargetDeliveryResponse offers = targetClient.getOffers(request);\n')),(0,r.mdx)("p",null,"In this scenario, Target will generate a ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId")," since it was not passed into the original call, which will be mapped to the provided ",(0,r.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId"),"."),(0,r.mdx)("h2",{id:"customer-id-customerids"},"Customer ID (customerIds)"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/id-service/using/reference/authenticated-state.html"},"Customer IDs")," can be added to, or associated with, an Experience Cloud Visitor ID. Whenever sending ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerIds"),", the ",(0,r.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," must also be provided. Furthermore, an authentication status can be provided along with each ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerId")," for each visitor. The following authentication statuses may be used:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Authentication Status"),(0,r.mdx)("th",{parentName:"tr",align:null},"User Status"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"unknown")),(0,r.mdx)("td",{parentName:"tr",align:null},"Unknown or never authenticated. This state can be used for scenarios such as that in which a visitor lands on your site by clicking a display advert.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"authenticated")),(0,r.mdx)("td",{parentName:"tr",align:null},"The user is currently authenticated with an active session on your website or app.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"logged_out")),(0,r.mdx)("td",{parentName:"tr",align:null},"The user was authenticated but actively logged out. The user intended to disconnect from the authenticated state. The user no longer wants to be treated as authenticated.")))),(0,r.mdx)("p",null,"Please note that only when the ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerId")," is in an authenticated state will Target reference the user profile data that is stored and linked to the customerId. If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerId")," is in an unknown or ",(0,r.mdx)("inlineCode",{parentName:"p"},"logged_out")," state, it will be ignored, and any user profile data that may be associated with that ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerId")," will not be leveraged for audience targeting."),(0,r.mdx)("h3",{id:"nodejs-sdk-3"},"Node.js SDK"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\n\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\n\nconst targetClient = TargetClient.create(CONFIG);\n\ntargetClient.getOffers({\n  request: {     \n    id: {\n      marketingCloudVisitorId : "10527837386392355901041112038610706884",\n      customerIds: [{\n        id: "134325423",\n        integrationCode : "crm_data",\n        authenticatedState : "authenticated"\n      }]\n    }, \n    execute: {\n      mboxes: [{\n        name: "some-mbox"\n      }]\n    }       \n  }\n})\n.then(console.log)\n.catch(console.error);\n')),(0,r.mdx)("h3",{id:"java-sdk-3"},"Java SDK"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'ClientConfig config = ClientConfig.builder()\n  .client("acmeclient")\n  .organizationId("1234567890@AdobeOrg")\n  .build();\nTargetClient targetClient = TargetClient.create(config);\n\nCustomerId customerId = new CustomerId()\n  .id("134325423")\n  .integrationCode("crm_data")\n  .authenticatedState(AuthenticatedState.AUTHENTICATED);\nVisitorId id = new VisitorId()\n  .marketingCloudVisitorId("10527837386392355901041112038610706884")\n  .customerIds(Arrays.asList(customerId));\nContext context = new Context().channel(ChannelType.WEB);\nMboxRequest mbox = new MboxRequest()\n  .name("some-mbox")\n  .index(0);\nExecuteRequest executeRequest = new ExecuteRequest()\n  .mboxes(Arrays.asList(mbox));\n\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n  .context(context)\n  .execute(executeRequest)\n  .build();\n\nTargetDeliveryResponse offers = targetClient.getOffers(request);\n')),(0,r.mdx)("p",null,"The example above demonstrates how to send a ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerId")," with an ",(0,r.mdx)("inlineCode",{parentName:"p"},"authenticatedState"),". When sending a ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerId"),", the i",(0,r.mdx)("inlineCode",{parentName:"p"},"ntegrationCode"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"id"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"authenticatedState")," as well as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," are required. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"integrationCode")," is the alias of the ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/working-with-customer-attributes.html"},"customer attributes file")," you provided through CRS."),(0,r.mdx)("h2",{id:"merged-profile"},"Merged Profile"),(0,r.mdx)("p",null,"You can combine ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"thirdPartyID"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," in the same request. In this scenario, Adobe Target will maintain the mapping of all these IDs and pin it to a visitor. Learn how profiles are ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/3rd-party-id.html"},"merged and synced in real time")," using the different identifiers."),(0,r.mdx)("h3",{id:"node-js-sdk"},"Node JS SDK"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\n\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\n\nconst targetClient = TargetClient.create(CONFIG);\n\ntargetClient.getOffers({\n  request: {     \n    id: {\n      tntId: "d359234570e044f14e1faeeba02d6ab23439914e.35_0",\n      thirdPartyId: "B234A029348",\n      marketingCloudVisitorId : "10527837386392355901041112038610706884"\n    }, \n    execute: {\n      mboxes: [{\n        name: "some-mbox"\n      }]\n    }       \n  }\n})\n.then(console.log)\n.catch(console.error);\n')),(0,r.mdx)("h3",{id:"java-sdk-4"},"Java SDK"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'ClientConfig config = ClientConfig.builder()\n  .client("acmeclient")\n  .organizationId("1234567890@AdobeOrg")\n  .build();\nTargetClient targetClient = TargetClient.create(config);\n\nVisitorId id = new VisitorId()\n  .tntId("d359234570e044f14e1faeeba02d6ab23439914e.35_0")\n  .thirdPartyId("B234A029348")\n  .marketingCloudVisitorId("10527837386392355901041112038610706884");\nContext context = new Context().channel(ChannelType.WEB);\nMboxRequest mbox = new MboxRequest()\n  .name("some-mbox")\n  .index(0);\nExecuteRequest executeRequest = new ExecuteRequest()\n  .mboxes(Arrays.asList(mbox));\n\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n  .context(context)\n  .execute(executeRequest)\n  .build();\n\nTargetDeliveryResponse offers = targetClient.getOffers(request);\n')),(0,r.mdx)("p",null,"The example above demonstrates how you can combine ",(0,r.mdx)("inlineCode",{parentName:"p"},"tntId"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"thirdPartyID"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"marketingCloudVisitorId")," in the same request."),(0,r.mdx)("h2",{id:"bucketing"},"Bucketing"),(0,r.mdx)("p",null,"Your users are bucketed into seeing an experience depending on how you set up your Adobe Target activities. In Adobe Target, bucketing is:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Deterministic"),": MurmurHash3 is used to ensure that your user is bucketed and sees the right variation every single time as long as the user ID is consistent."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Sticky"),": Adobe Target stores the variation that your user sees in the user profile to ensure the variation is consistently shown to that user across sessions and channels. Variations and stickiness are guaranteed when using server-side decisioning. When on-device decisioning is used, stickiness is not guaranteed.")),(0,r.mdx)("h2",{id:"end-to-end-bucketing-workflow"},"End-to-end bucketing workflow"),(0,r.mdx)("p",null,"Before diving into the actual bucketing algorithm, it is important to highlight that similar steps are used both to select activities based on their traffic allocation percentage, as well as to select an experience within an activity."),(0,r.mdx)("h3",{id:"activity-selection-steps"},"Activity selection steps:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Generate a device ID, usually a UUID"),(0,r.mdx)("li",{parentName:"ol"},"Get the client code"),(0,r.mdx)("li",{parentName:"ol"},"Get the activity ID "),(0,r.mdx)("li",{parentName:"ol"},'Get the salt, which is usually some string like "activity" '),(0,r.mdx)("li",{parentName:"ol"},"Compute the hash using MurmurHash3"),(0,r.mdx)("li",{parentName:"ol"},"Get the absolute value of the hash"),(0,r.mdx)("li",{parentName:"ol"},"Divide the hash absolute value by 10000"),(0,r.mdx)("li",{parentName:"ol"},"Divide the remainder by 10000, which should produce a value between 0 and 1"),(0,r.mdx)("li",{parentName:"ol"},"Multiply the result by 100%"),(0,r.mdx)("li",{parentName:"ol"},"Compare activity traffic allocation percentage against the obtained percentage. If the traffic allocation percentage is lower, then the activity is selected. Otherwise, the activity is skipped.")),(0,r.mdx)("h3",{id:"experience-selection-steps"},"Experience selection steps:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Generate a device ID, usually a UUID"),(0,r.mdx)("li",{parentName:"ol"},"Get the client code"),(0,r.mdx)("li",{parentName:"ol"},"Get the activity ID"),(0,r.mdx)("li",{parentName:"ol"},'Get the salt, which is usually some string like "experience"'),(0,r.mdx)("li",{parentName:"ol"},"Compute the hash using MurmurHash3"),(0,r.mdx)("li",{parentName:"ol"},"Get the absolute value of the hash"),(0,r.mdx)("li",{parentName:"ol"},"Divide the hash absolute value by 10000"),(0,r.mdx)("li",{parentName:"ol"},"Divide the remainder by 10000, which should produce a value between 0 and 1"),(0,r.mdx)("li",{parentName:"ol"},"Multiply the result by the total number of experiences within the activity"),(0,r.mdx)("li",{parentName:"ol"},"Round the result. This should produce the experience index.")),(0,r.mdx)("h3",{id:"example"},"Example"),(0,r.mdx)("p",null,"Assume the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Client C with client code ",(0,r.mdx)("inlineCode",{parentName:"li"},"acmeclient")),(0,r.mdx)("li",{parentName:"ul"},"Activity A that has ID ",(0,r.mdx)("inlineCode",{parentName:"li"},"1111")," and three experiences ",(0,r.mdx)("inlineCode",{parentName:"li"},"E1"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"E2"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"E3")),(0,r.mdx)("li",{parentName:"ul"},"Experiences have the following distribution: ",(0,r.mdx)("inlineCode",{parentName:"li"},"E1")," - 33%, ",(0,r.mdx)("inlineCode",{parentName:"li"},"E2")," - 33%, ",(0,r.mdx)("inlineCode",{parentName:"li"},"E3")," - 34%")),(0,r.mdx)("p",null,"The selection flow looks like this:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Device ID ",(0,r.mdx)("inlineCode",{parentName:"li"},"702ff4d0-83b1-4e2e-a0a6-22cbe460eb15")),(0,r.mdx)("li",{parentName:"ol"},"Client code ",(0,r.mdx)("inlineCode",{parentName:"li"},"acmeclient")),(0,r.mdx)("li",{parentName:"ol"},"Activity ID ",(0,r.mdx)("inlineCode",{parentName:"li"},"1111")),(0,r.mdx)("li",{parentName:"ol"},"Salt ",(0,r.mdx)("inlineCode",{parentName:"li"},"experience")),(0,r.mdx)("li",{parentName:"ol"},"Value to hash ",(0,r.mdx)("inlineCode",{parentName:"li"},"acmeclient.1111.702ff4d0-83b1-4e2e-a0a6-22cbe460eb15.experience"),", hash value ",(0,r.mdx)("inlineCode",{parentName:"li"},"-919077116")),(0,r.mdx)("li",{parentName:"ol"},"Absolute value of the hash ",(0,r.mdx)("inlineCode",{parentName:"li"},"919077116")),(0,r.mdx)("li",{parentName:"ol"},"Remainder after division by 10000, ",(0,r.mdx)("inlineCode",{parentName:"li"},"7116")),(0,r.mdx)("li",{parentName:"ol"},"Value after remainder is divided by 10000, ",(0,r.mdx)("inlineCode",{parentName:"li"},"0.7116")),(0,r.mdx)("li",{parentName:"ol"},"Result after multiplying the value against the total number of experiences ",(0,r.mdx)("inlineCode",{parentName:"li"},"3 * 0.7116 = 2.1348")),(0,r.mdx)("li",{parentName:"ol"},"The experience index is ",(0,r.mdx)("inlineCode",{parentName:"li"},"2"),", which means the third experience, since we are using ",(0,r.mdx)("inlineCode",{parentName:"li"},"0")," based indexing.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-sdk-guides-core-principles-user-identification-and-bucketing-md-7990324570a62608c943.js.map