(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2116],{82902:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return p}});var a=t(22122),o=t(19756),r=(t(15007),t(64983)),i=t(99536),d=["components"],s={},l={_frontmatter:s},c=i.Z;function p(e){var n=e.components,t=(0,o.Z)(e,d);return(0,r.mdx)(c,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"downloading-storing-and-updating-the-rule-artifact-via-json-payload"},"Downloading, Storing, and Updating the Rule Artifact via JSON Payload"),(0,r.mdx)("p",null,"This approach is best if your application is structured in a way that requires the SDK to be initialized on each file in which it uses SDK methods. Before your web application can use the JSON payload of the rule artifact during SDK initialization, you should ensure the JSON payload is downloaded and is available for your application to use."),(0,r.mdx)("h3",{id:"summary-of-steps"},"Summary of steps"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Install the SDK"),(0,r.mdx)("li",{parentName:"ol"},"Initialize the SDK"),(0,r.mdx)("li",{parentName:"ol"},"Store and Use the JSON Payload")),(0,r.mdx)("h2",{id:"install-the-sdk"},"Install the SDK"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"NPN")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"npm i @adobe/target-nodejs-sdk -P\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"MVN")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.adobe.target</groupId>\n    <artifactId>java-sdk</artifactId>\n    <version>1.0</version>\n</dependency>\n")),(0,r.mdx)("h2",{id:"initialize-the-sdk"},"Initialize the SDK"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"First, import the SDK. Import to the same file from which you can control your server start-up.")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Node.js")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Java")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"import com.adobe.target.edge.client.ClientConfig;\nimport com.adobe.target.edge.client.TargetClient;\n")),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"To configure the SDK, use the create method.")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Node.js")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const CONFIG = {\n    client: "<your target client code>",\n    organizationId: "your EC org id",\n    decisioningMethod: "on-device",\n    pollingInterval : 300000,\n    events: {\n        artifactDownloadSucceeded: onArtifactDownloadSucceeded,\n        artifactDownloadFailed: onArtifactDownloadFailed\n    }\n};\n\nconst TargetClient = TargetClient.create(CONFIG);\n\nfunction onArtifactDownloadSucceeded(event) {\n    //Adobe Target SDK has now downloaded the JSON Artifact/Payload\n    console.log(event.artifactLocation) // Location from where the Artifact is downloaded.\n    console.log(event.artifactPayload) // JSON Payload which we can store locally.\n}\n\nfunction onArtifactDownloadFailed(event) {\n    //Adobe Target SDK has failed to download the JSON Artifact/Payload.\n    console.log(event.artifactLocation) // Location from where the Artifact is downloaded.\n    console.log(event.error.message) // Error message\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Java")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'package com.adobe.target.edge.client.model.ondevice.OnDeviceDecisioningHandler;\n\nClientConfig config = ClientConfig.builder()\n    .client("<you target client code>")\n    .organizationId("<your EC org id>")\n    .onDeviceDecisioningHandler(\n      new OnDeviceDecisioningHandler() {\n        void onDeviceDecisioningReady() {\n          // On-Device Decision is ready.\n        }\n        void artifactDownloadSucceeded(byte[] artifactData) {\n          // Store artifactData to local disk.        \n          // ...\n        }\n      }\n    )\n    .build();\nTargetClient targetClient = TargetClient.create(config);\n')),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Both client and ",(0,r.mdx)("inlineCode",{parentName:"li"},"organizationId")," can be retrieved from Adobe Target by navigating to ",(0,r.mdx)("strong",{parentName:"li"},"Administration")," > ",(0,r.mdx)("strong",{parentName:"li"},"Implementation"),", as shown here.")),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/cb523/rule-artifact-3.webp 320w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/797b9/rule-artifact-3.webp 640w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/4b075/rule-artifact-3.webp 1280w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/f3ff0/rule-artifact-3.webp 1920w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/e672b/rule-artifact-3.webp 2172w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/72799/rule-artifact-3.png 320w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/6af66/rule-artifact-3.png 640w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/21b4d/rule-artifact-3.png 1280w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/29114/rule-artifact-3.png 1920w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/6976b/rule-artifact-3.png 2172w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/21b4d/rule-artifact-3.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"store-and-use-the-json-payload"},"Store and Use the JSON Payload"),(0,r.mdx)("p",null,"The mechanism you use to store the JSON payload depends on your system architecture. You can use a local file, a database, or a memory object caching system such as Memcached . You need to be able to read this JSON from your application for consumption. In this guide, we use a local file as the storage."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Node.js")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"//... Code removed for brevity\n\nfunction onArtifactDownloadSucceeded(event) {\n    const jsonPath = 'src/config/target-rules.json'\n    fs.writeFile(jsonPath, JSON.stringify(event.artifactPayload), 'utf8', (err) => {\n        if (err) {\n            throw err;\n        };\n        console.log(`The artifact from '${event.artifactLocation}' is now saved to '${jsonPath}'`);\n    });\n}\n\n\nfunction onArtifactDownloadFailed(event) {\n  console.log(`The local decisioning artifact failed to download from '${event.artifactLocation}' with the following error message: ${event.error.message}`);\n}\n\n//... Code removed for brevity\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Java")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'MboxRequest mbox = new MboxRequest().name("homepage").index(0);\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n    .context(new Context().channel(ChannelType.WEB))\n    .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))\n    .build();\nTargetDeliveryResponse response = targetClient.getOffers(request);\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"NOTE"),":: By initializing the Adobe Target SDK via the JSON payload, your server is ready to serve requests immediately with on-device decisioning activities, since the Adobe Target SDK does not need to wait for the rule artifact to be downloaded."),(0,r.mdx)("p",null,"Here is an example demonstrating the JSON payload-initializing capability."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Node.js")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const express = require("express");\nconst cookieParser = require("cookie-parser");\nconst TargetClient = require("@adobe/target-nodejs-sdk");\nconst CONFIG = {\n    client: "<your target client code>",\n    organizationId: "your EC org id",\n    decisioningMethod: "on-device",\n    pollingInterval : 300000,\n    events: {\n        clientReady : startWebServer,\n        artifactDownloadSucceeded : onArtifactDownloadSucceeded,\n        artifactDownloadFailed : onArtifactDownloadFailed\n    },\n};\n\nfunction onArtifactDownloadSucceeded(event) {\n    const jsonPath = \'src/config/target-rules.json\'\n    fs.writeFile(jsonPath, JSON.stringify(event.artifactPayload), \'utf8\', (err) => {\n        if (err) {\n            throw err;\n        };\n        console.log(`The artifact from \'${event.artifactLocation}\' is now saved to \'${jsonPath}\'`);\n    });\n}\n\nfunction onArtifactDownloadFailed(event) {\n  console.log(`The on-device decisioning artifact failed to download from \'${event.artifactLocation}\' with the following error message: ${event.error.message}`);\n}\n\nconst app = express();\nconst targetClient = TargetClient.create(CONFIG);\n\napp.use(cookieParser());\n\nfunction saveCookie(res, cookie) {\n  if (!cookie) {\n    return;\n  }\n\n  res.cookie(cookie.name, cookie.value, {maxAge: cookie.maxAge * 1000});\n}\n\nconst getResponseHeaders = () => ({\n  "Content-Type": "text/html",\n  "Expires": new Date().toUTCString()\n});\n\nfunction sendSuccessResponse(res, response) {\n  res.set(getResponseHeaders());\n  saveCookie(res, response.targetCookie);\n  res.status(200).send(response);\n}\n\nfunction sendErrorResponse(res, error) {\n  res.set(getResponseHeaders());\n  res.status(500).send(error);\n}\n\nfunction startWebServer() {\n    app.get(\'/*\', async (req, res) => {\n    const targetCookie = req.cookies[TargetClient.TargetCookieName];\n    const request = {\n        execute: {\n        mboxes: [{\n            address: { url: req.headers.host + req.originalUrl },\n            name: "on-device-homepage-banner" // Ensure that you have a LIVE Activity running on this location\n        }]\n        }};\n\n    try {\n        const response = await targetClient.getOffers({ request, targetCookie });\n        sendSuccessResponse(res, response);\n    } catch (error) {\n        console.error("Target:", error);\n        sendErrorResponse(res, error);\n    }\n    });\n\n    app.listen(3000, function () {\n    console.log("Listening on port 3000 and watching!");\n    });\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Java")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'import com.adobe.target.edge.client.ClientConfig;\nimport com.adobe.target.edge.client.TargetClient;\nimport com.adobe.target.delivery.v1.model.ChannelType;\nimport com.adobe.target.delivery.v1.model.Context;\nimport com.adobe.target.delivery.v1.model.ExecuteRequest;\nimport com.adobe.target.delivery.v1.model.MboxRequest;\nimport com.adobe.target.edge.client.entities.TargetDeliveryRequest;\nimport com.adobe.target.edge.client.model.TargetDeliveryResponse;\n\n@Controller\npublic class TargetController {\n\n  private TargetClient targetClient;\n\n  TargetController() {\n    // You should instantiate TargetClient in a Bean and inject the instance into this class \n    // but we show the code here for demonstration purpose.\n    ClientConfig config = ClientConfig.builder()\n        .client("<you target client code>")\n        .organizationId("<your EC org id>")\n        .onDeviceDecisioningHandler(\n          new OnDeviceDecisioningHandler() {\n            void onDeviceDecisioningReady() {\n              // On-Device Decision is ready.\n            }\n            void artifactDownloadSucceeded(byte[] artifactData) {\n              // Store artifactData to local disk.        \n              // ...\n            }\n          }\n        )\n        .build();\n    targetClient = TargetClient.create(config);\n  }\n\n  @GetMapping("/")\n  public String homePage() {\n    MboxRequest mbox = new MboxRequest().name("homepage").index(0);\n    TargetDeliveryRequest request = TargetDeliveryRequest.builder()\n        .context(new Context().channel(ChannelType.WEB))\n        .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))\n        .build();\n    TargetDeliveryResponse response = targetClient.getOffers(request);\n    // ...\n  }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-guides-on-device-decisioning-rule-artifact-json-md-cb96107f02ac1b42ea8a.js.map