"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[97],{922:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return b}});var n=a(87462),i=a(63366),s=(a(15007),a(64983)),r=a(91515),o=["components"],p={},d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",t)}},c=d("InlineAlert"),l=d("CodeBlock"),m={_frontmatter:p},g=r.Z;function b(e){var t=e.components,a=(0,i.Z)(e,o);return(0,s.mdx)(g,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"getting-started-with-target-sdks"},"Getting Started with Target SDKs"),(0,s.mdx)("p",null,"In order to get up and running, we encourage you to create your first ",(0,s.mdx)("a",{parentName:"p",href:"../on-device-decisioning/index.md"},"on-device decisioning")," feature flag activity in the language of your choice:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Node.js"),(0,s.mdx)("li",{parentName:"ul"},"Java"),(0,s.mdx)("li",{parentName:"ul"},".NET"),(0,s.mdx)("li",{parentName:"ul"},"Python")),(0,s.mdx)("h2",{id:"summary-of-steps"},"Summary of steps"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Enable On-Device Decisioning for your organization"),(0,s.mdx)("li",{parentName:"ol"},"Install the SDK"),(0,s.mdx)("li",{parentName:"ol"},"Initialize the SDK"),(0,s.mdx)("li",{parentName:"ol"},"Set up the feature flags in an Adobe Target A/B Test"),(0,s.mdx)("li",{parentName:"ol"},"Implement and render the feature in your application"),(0,s.mdx)("li",{parentName:"ol"},"Implement tracking for events in your application"),(0,s.mdx)("li",{parentName:"ol"},"Activate your A/B activity")),(0,s.mdx)("h2",{id:"1-enable-on-device-decisioning-for-your-organization"},"1. Enable On-Device Decisioning for your organization"),(0,s.mdx)("p",null,"Enabling on-device decisioning ensures an A/B activity is executed at near-zero latency. To enable this feature, navigate to ",(0,s.mdx)("strong",{parentName:"p"},"Administration")," > ",(0,s.mdx)("strong",{parentName:"p"},"Implementation")," > ",(0,s.mdx)("strong",{parentName:"p"},"Account details")," and enable the ",(0,s.mdx)("strong",{parentName:"p"},"On-Device Decisioning")," toggle."),(0,s.mdx)("p",null,"   ",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/5530d/asset-odd-toggle.webp 320w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/0c8fb/asset-odd-toggle.webp 640w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/94b1e/asset-odd-toggle.webp 1280w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/6e61e/asset-odd-toggle.webp 1322w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/dd4a7/asset-odd-toggle.png 320w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/0f09e/asset-odd-toggle.png 640w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/bbbf7/asset-odd-toggle.png 1280w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/a4e81/asset-odd-toggle.png 1322w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/bbbf7/asset-odd-toggle.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(c,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"You must have the ",(0,s.mdx)("strong",{parentName:"p"},"Admin")," or ",(0,s.mdx)("strong",{parentName:"p"},"Approver")," ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/administer/manage-users/user-management.html"},"user role")," to enable or disable the ",(0,s.mdx)("strong",{parentName:"p"},"On-Device Decisioning")," toggle."),(0,s.mdx)("p",null,"After enabling the ",(0,s.mdx)("strong",{parentName:"p"},"On-Device Decisioning")," toggle, Adobe Target begins generating ",(0,s.mdx)("a",{parentName:"p",href:"../on-device-decisioning/rule-artifact-overview.md"},"rule artifacts")," for your client."),(0,s.mdx)("h2",{id:"2-install-the-sdk"},"2. Install the SDK"),(0,s.mdx)("p",null,"For Node.js, Java, and Python, run the following command in your project directory in the terminal. For .NET, add it as a dependency by ",(0,s.mdx)("a",{parentName:"p",href:"https://www.nuget.org/packages/Adobe.Target.Client"},"installing from NuGet"),"."),(0,s.mdx)(l,{slots:"heading, code",repeat:"4",languages:"js, java, bash, python",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"nodejs-npm"},"Node.js (NPM)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"npm i @adobe/target-nodejs-sdk -P\n")),(0,s.mdx)("h4",{id:"java-maven"},"Java (Maven)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"<dependency>\n   <groupId>com.adobe.target</groupId>\n   <artifactId>java-sdk</artifactId>\n   <version>2.0</version>\n</dependency>\n")),(0,s.mdx)("h4",{id:"net-bash"},".NET (Bash)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Adobe.Target.Client\n")),(0,s.mdx)("h4",{id:"python-pip"},"Python (pip)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-python"},"pip install target-python-sdk\n")),(0,s.mdx)(c,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"The rule artifact is downloaded during the SDK initialization step. You can customize the initialization step to determine how the artifact is downloaded and used."),(0,s.mdx)(l,{slots:"heading, code",repeat:"4",languages:"js, java, bash, python",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"nodejs"},"Node.js"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'const TargetClient = require("@adobe/target-nodejs-sdk");\n\nconst CONFIG = {\n   client: "<your target client code>",\n   organizationId: "your EC org id",\n   decisioningMethod: "on-device",\n   events: {\n      clientReady: targetClientReady\n      }\n};\n\nconst tClient = TargetClient.create(CONFIG);\n\nfunction targetClientReady() {\n   //Adobe Target SDK has now downloaded the JSON artifact locally, which contains the activity details.\n   //We will see how to use the artifact here very soon.\n}\n')),(0,s.mdx)("h4",{id:"java-maven-1"},"Java (Maven)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'ClientConfig config = ClientConfig.builder()\n   .client("testClient")\n   .organizationId("ABCDEF012345677890ABCDEF0@AdobeOrg")\n   .build();\nTargetClient targetClient = TargetClient.create(config);\n')),(0,s.mdx)("h4",{id:"net-c"},".NET (C#)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-csharp"},'var targetClientConfig = new TargetClientConfig.Builder("testClient", "ABCDEF012345677890ABCDEF0@AdobeOrg")\n   .Build();\nthis.targetClient.Initialize(targetClientConfig);\n')),(0,s.mdx)("h4",{id:"python"},"Python"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-python"},'from target_python_sdk import TargetClient\n\ndef target_client_ready():\n   # Adobe Target SDK has now downloaded the JSON artifact locally, which contains the activity details.\n   # We will see how to use the artifact here very soon.\n\nCONFIG = {\n   "client": "<your target client code>",\n   "organization_id": "your EC org id",\n   "decisioning_method": "on-device",\n   "events": {\n      "client_ready": target_client_ready\n   }\n}\n\ntarget_client = TargetClient.create(CONFIG)\n')),(0,s.mdx)("h2",{id:"4-set-up-the-feature-flags-in-an-adobe-target-ab-test"},"4. Set up the feature flags in an Adobe Target A/B Test"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"In Adobe Target, navigate to the ",(0,s.mdx)("strong",{parentName:"p"},"Activities")," page, then select ",(0,s.mdx)("strong",{parentName:"p"},"Create Activity")," > ",(0,s.mdx)("strong",{parentName:"p"},"A/B test"),". "),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.375000000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/5530d/asset-ab.webp 320w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/0c8fb/asset-ab.webp 640w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/94b1e/asset-ab.webp 1280w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/1e927/asset-ab.webp 1868w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/dd4a7/asset-ab.png 320w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/0f09e/asset-ab.png 640w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/bbbf7/asset-ab.png 1280w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/de412/asset-ab.png 1868w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/bbbf7/asset-ab.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"In the ",(0,s.mdx)("strong",{parentName:"p"},"Create A/B Test Activity")," modal, leave the default Web option selected (1), select ",(0,s.mdx)("strong",{parentName:"p"},"Form")," as your experience composer (2), select ",(0,s.mdx)("strong",{parentName:"p"},"Default Workspace")," with ",(0,s.mdx)("strong",{parentName:"p"},"No Property Restrictions"),"(3), then click ",(0,s.mdx)("strong",{parentName:"p"},"Next")," (4)."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"722px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/5530d/asset-form.webp 320w","/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/0c8fb/asset-form.webp 640w","/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/6aa51/asset-form.webp 722w"],sizes:"(max-width: 722px) 100vw, 722px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/dd4a7/asset-form.png 320w","/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/0f09e/asset-form.png 640w","/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/ad973/asset-form.png 722w"],sizes:"(max-width: 722px) 100vw, 722px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/ad973/asset-form.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"In the ",(0,s.mdx)("strong",{parentName:"p"},"Experiences")," step of activity creation, provide a name for your activity (1) and add a second experience, Experience B, by clicking ",(0,s.mdx)("strong",{parentName:"p"},"Add Experience")," (2). Enter the location name of your choice (3). For example, ",(0,s.mdx)("inlineCode",{parentName:"p"},"ondevice-featureflag")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"homepage-addtocart-featureflag")," are location names indicating the destinations for feature flag testing.  In the example shown below, ",(0,s.mdx)("inlineCode",{parentName:"p"},"ondevice-featureflag")," is the location defined for Experience B. Optionally, you may add Audience Refinements (4) to restrict qualification to the activity."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/cf3f4c1af1679a32ed0ef034ee85291b/5530d/asset-location.webp 320w","/target-developers/static/cf3f4c1af1679a32ed0ef034ee85291b/0c8fb/asset-location.webp 640w","/target-developers/static/cf3f4c1af1679a32ed0ef034ee85291b/94b1e/asset-location.webp 1280w","/target-developers/static/cf3f4c1af1679a32ed0ef034ee85291b/890c0/asset-location.webp 1873w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/cf3f4c1af1679a32ed0ef034ee85291b/dd4a7/asset-location.png 320w","/target-developers/static/cf3f4c1af1679a32ed0ef034ee85291b/0f09e/asset-location.png 640w","/target-developers/static/cf3f4c1af1679a32ed0ef034ee85291b/bbbf7/asset-location.png 1280w","/target-developers/static/cf3f4c1af1679a32ed0ef034ee85291b/483a6/asset-location.png 1873w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/cf3f4c1af1679a32ed0ef034ee85291b/bbbf7/asset-location.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"In the ",(0,s.mdx)("strong",{parentName:"p"},"CONTENT")," section on the same page, select ",(0,s.mdx)("strong",{parentName:"p"},"Create JSON Offer")," in the drop-down (1) as shown."))),(0,s.mdx)("p",null,"   ",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"371px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"139.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/d2d0ca796a71b47c5b9557cf7ab26df9/5530d/asset-offer.webp 320w","/target-developers/static/d2d0ca796a71b47c5b9557cf7ab26df9/25143/asset-offer.webp 371w"],sizes:"(max-width: 371px) 100vw, 371px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/d2d0ca796a71b47c5b9557cf7ab26df9/dd4a7/asset-offer.png 320w","/target-developers/static/d2d0ca796a71b47c5b9557cf7ab26df9/d86da/asset-offer.png 371w"],sizes:"(max-width: 371px) 100vw, 371px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/d2d0ca796a71b47c5b9557cf7ab26df9/d86da/asset-offer.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("ol",{start:5},(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"In the ",(0,s.mdx)("strong",{parentName:"p"},"JSON Data")," text box that appears, type your feature flag variables for each experience (1), using a valid JSON object (2)."),(0,s.mdx)("p",{parentName:"li"},"Enter the feature flag variables for Experience A."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1099px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/575d4fa5e6bcd924ae68abaa5795dc7d/5530d/asset-json_a.webp 320w","/target-developers/static/575d4fa5e6bcd924ae68abaa5795dc7d/0c8fb/asset-json_a.webp 640w","/target-developers/static/575d4fa5e6bcd924ae68abaa5795dc7d/624f1/asset-json_a.webp 1099w"],sizes:"(max-width: 1099px) 100vw, 1099px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/575d4fa5e6bcd924ae68abaa5795dc7d/dd4a7/asset-json_a.png 320w","/target-developers/static/575d4fa5e6bcd924ae68abaa5795dc7d/0f09e/asset-json_a.png 640w","/target-developers/static/575d4fa5e6bcd924ae68abaa5795dc7d/c1d6f/asset-json_a.png 1099w"],sizes:"(max-width: 1099px) 100vw, 1099px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/575d4fa5e6bcd924ae68abaa5795dc7d/c1d6f/asset-json_a.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",{parentName:"li"},"Enter the feature flag variables for Experience B."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1107px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b05cbdfbfc27862d369344f5e58f0bfa/5530d/asset-json_b.webp 320w","/target-developers/static/b05cbdfbfc27862d369344f5e58f0bfa/0c8fb/asset-json_b.webp 640w","/target-developers/static/b05cbdfbfc27862d369344f5e58f0bfa/a8a52/asset-json_b.webp 1107w"],sizes:"(max-width: 1107px) 100vw, 1107px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b05cbdfbfc27862d369344f5e58f0bfa/dd4a7/asset-json_b.png 320w","/target-developers/static/b05cbdfbfc27862d369344f5e58f0bfa/0f09e/asset-json_b.png 640w","/target-developers/static/b05cbdfbfc27862d369344f5e58f0bfa/3fa5a/asset-json_b.png 1107w"],sizes:"(max-width: 1107px) 100vw, 1107px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/b05cbdfbfc27862d369344f5e58f0bfa/3fa5a/asset-json_b.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,s.mdx)("ol",{start:6},(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Click ",(0,s.mdx)("strong",{parentName:"p"},"Next")," (1) to advance to the ",(0,s.mdx)("strong",{parentName:"p"},"Targeting")," step of activity creation."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ad5e4661084612c47e0f3d5549b17b4c/5530d/asset-next_2_t.webp 320w","/target-developers/static/ad5e4661084612c47e0f3d5549b17b4c/0c8fb/asset-next_2_t.webp 640w","/target-developers/static/ad5e4661084612c47e0f3d5549b17b4c/94b1e/asset-next_2_t.webp 1280w","/target-developers/static/ad5e4661084612c47e0f3d5549b17b4c/890c0/asset-next_2_t.webp 1873w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ad5e4661084612c47e0f3d5549b17b4c/dd4a7/asset-next_2_t.png 320w","/target-developers/static/ad5e4661084612c47e0f3d5549b17b4c/0f09e/asset-next_2_t.png 640w","/target-developers/static/ad5e4661084612c47e0f3d5549b17b4c/bbbf7/asset-next_2_t.png 1280w","/target-developers/static/ad5e4661084612c47e0f3d5549b17b4c/483a6/asset-next_2_t.png 1873w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/ad5e4661084612c47e0f3d5549b17b4c/bbbf7/asset-next_2_t.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"In the ",(0,s.mdx)("strong",{parentName:"p"},"Targeting")," step example shown below, Audience Targeting (2) remains on the default set of All Visitors, for simplicity. This means the activity is untargeted. However, note Adobe recommends you always target your audiences for production activities. Click ",(0,s.mdx)("strong",{parentName:"p"},"Next")," (3) to advance to the ",(0,s.mdx)("strong",{parentName:"p"},"Goals & Settings")," step of activity creation."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.062500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/47412da51e6ef00466ca676f649485d4/5530d/asset-next_2_g.webp 320w","/target-developers/static/47412da51e6ef00466ca676f649485d4/0c8fb/asset-next_2_g.webp 640w","/target-developers/static/47412da51e6ef00466ca676f649485d4/94b1e/asset-next_2_g.webp 1280w","/target-developers/static/47412da51e6ef00466ca676f649485d4/09047/asset-next_2_g.webp 1876w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/47412da51e6ef00466ca676f649485d4/dd4a7/asset-next_2_g.png 320w","/target-developers/static/47412da51e6ef00466ca676f649485d4/0f09e/asset-next_2_g.png 640w","/target-developers/static/47412da51e6ef00466ca676f649485d4/bbbf7/asset-next_2_g.png 1280w","/target-developers/static/47412da51e6ef00466ca676f649485d4/bd320/asset-next_2_g.png 1876w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/47412da51e6ef00466ca676f649485d4/bbbf7/asset-next_2_g.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"In the ",(0,s.mdx)("strong",{parentName:"p"},"Goals & Settings")," step, set ",(0,s.mdx)("strong",{parentName:"p"},"Reporting Source")," to ",(0,s.mdx)("strong",{parentName:"p"},"Adobe Target")," (1). Define the ",(0,s.mdx)("strong",{parentName:"p"},"Goal Metric")," as ",(0,s.mdx)("strong",{parentName:"p"},"Conversion"),", specifying the details based on your site's conversion metrics (2). Click ",(0,s.mdx)("strong",{parentName:"p"},"Save & Close")," (3) to save the activity."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/7c20c061f7846c596e0294289a4b04af/5530d/asset-conv.webp 320w","/target-developers/static/7c20c061f7846c596e0294289a4b04af/0c8fb/asset-conv.webp 640w","/target-developers/static/7c20c061f7846c596e0294289a4b04af/94b1e/asset-conv.webp 1280w","/target-developers/static/7c20c061f7846c596e0294289a4b04af/a3403/asset-conv.webp 1863w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/7c20c061f7846c596e0294289a4b04af/dd4a7/asset-conv.png 320w","/target-developers/static/7c20c061f7846c596e0294289a4b04af/0f09e/asset-conv.png 640w","/target-developers/static/7c20c061f7846c596e0294289a4b04af/bbbf7/asset-conv.png 1280w","/target-developers/static/7c20c061f7846c596e0294289a4b04af/4c6d8/asset-conv.png 1863w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/7c20c061f7846c596e0294289a4b04af/bbbf7/asset-conv.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,s.mdx)("h2",{id:"5-implement-and-render-the-feature-in-your-application"},"5. Implement and render the feature in your application"),(0,s.mdx)("p",null,"After setting up the feature flag variables in Adobe Target, modify your application code to use them. For example, after getting the feature flag in the application, you can use it to enable features and render the experience for which the visitor qualified."),(0,s.mdx)(l,{slots:"heading, code",repeat:"4",languages:"js, java, bash, python",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"nodejs-1"},"Node.js"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'//... Code removed for brevity\n​\nlet featureFlags = {};\n​\nfunction targetClientReady() {\n   tClient.getAttributes(["ondevice-featureflag"]).then(function(response) {\n      const featureFlags = response.asObject("ondevice-featureflag");\n      if(featureFlags.enabled && featureFlags.flag !== "expA") { //Assuming "expA" is control\n         console.log("Render alternate experience" + featureFlags.flag);\n      }\n      else {\n         console.log("Render default experience");\n      }\n   });\n}\n')),(0,s.mdx)("h4",{id:"java-maven-2"},"Java (Maven)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'MboxRequest mbox = new MboxRequest().name("ondevice-featureflag").index(0);\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n   .context(new Context().channel(ChannelType.WEB))\n   .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))\n   .build();\nAttributes attributes = targetClient.getAttributes(request, "ondevice-featureflag");\nString flag = attributes.getString("ondevice-featureflag", "flag");\n')),(0,s.mdx)("h4",{id:"net-c-1"},".NET (C#)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-csharp"},'var mbox = new MboxRequest(index: 0, name: "ondevice-featureflag");\nvar deliveryRequest = new TargetDeliveryRequest.Builder()\n   .SetContext(new Context(ChannelType.Web))\n   .SetExecute(new ExecuteRequest(mboxes: new List<MboxRequest> { mbox }))\n   .Build();\nvar attributes = targetClient.GetAttributes(request, "ondevice-featureflag");\nvar flag = attributes.GetString("ondevice-featureflag", "flag");\n')),(0,s.mdx)("h4",{id:"python-1"},"Python"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-python"},'# ... Code removed for brevity\n\nfeature_flags = {}\n\ndef target_client_ready():\n   attribute_provider = target_client.get_attributes(["ondevice-featureflag"])\n   feature_flags = attribute_provider.as_object(mbox_name="ondevice-featureflag")\n   if feature_flags.get("enabled") and feature_flags.get("flag") != "expA": # Assuming "expA" is control\n      print("Render alternate experience {}".format(feature_flags.get("flag")))\n   else:\n      print("Render default experience")\n')),(0,s.mdx)("h2",{id:"6-implement-additional-tracking-for-events-in-your-application"},"6. Implement additional tracking for events in your application"),(0,s.mdx)("p",null,"Optionally, you may send additional events for tracking conversions using the sendNotification() function."),(0,s.mdx)(l,{slots:"heading, code",repeat:"4",languages:"js, java, bash, python",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"nodejs-2"},"Node.js"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'//... Code removed for brevity\n​\n//When a conversion happens\nTargetClient.sendNotifications({\n   targetCookie,\n   "request" : {\n      "notifications" : [\n      {\n         type: "display",\n         timestamp : Date.now(),\n         id: "conversion",\n         mbox : {\n            name : "orderConfirm"\n         },\n         order : {\n            id: "BR9389",\n            total : 98.93,\n            purchasedProductIds : ["J9393", "3DJJ3"]\n         }\n      }\n      ]\n   }\n})\n')),(0,s.mdx)("h4",{id:"java-maven-3"},"Java (Maven)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'Notification notification = new Notification();\nnotification.setId("conversion");\nnotification.setImpressionId(UUID.randomUUID().toString());\nnotification.setType(MetricType.DISPLAY);\nnotification.setTimestamp(System.currentTimeMillis());\nOrder order = new Order("BR9389");\norder.total(98.93);\norder.purchasedProductIds(["J9393", "3DJJ3"]);\nnotification.setOrder(order);\n\nTargetDeliveryRequest notificationRequest =\n   TargetDeliveryRequest.builder()\n      .context(new Context().channel(ChannelType.WEB))\n      .notifications(Collections.singletonList(notification))\n      .build();\n\nNotificationDeliveryService notificationDeliveryService = new NotificationDeliveryService();\nnotificationDeliveryService.sendNotification(notificationRequest);\n')),(0,s.mdx)("h4",{id:"net-c-2"},".NET (C#)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-csharp"},'var order = new Order\n{\n   Id = "BR9389",\n   Total = 98.93M,\n   PurchasedProductIds = new List<string> { "J9393", "3DJJ3" },\n};\n​\nvar notification = new Notification\n{\n   Id = "conversion",\n   ImpressionId = Guid.NewGuid().ToString(),\n   Type = MetricType.Display,\n   Timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(),\n   Order = order,\n};\n​\nvar notificationRequest = new TargetDeliveryRequest.Builder()\n   .SetContext(new Context(ChannelType.Web))\n   .SetNotifications(new List<Notification> {notification})\n   .Build();\n​\ntargetClient.SendNotifications(notificationRequest);\n')),(0,s.mdx)("h4",{id:"python-2"},"Python"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-python"},'# ... Code removed for brevity\n\n# When a conversion happens\nnotification_mbox = NotificationMbox(name="orderConfirm")\norder = Order(id="BR9389, total=98.93, purchased_product_ids=["J9393", "3DJJ3"])\nnotification = Notification(\n   id="conversion",\n   type=MetricType.DISPLAY,\n   timestamp=1621530726000,  # Epoch time in milliseconds\n   mbox=notification_mbox,\n   order=order\n)\nnotification_request = DeliveryRequest(notifications=[notification])\n\n\ntarget_client.send_notifications({\n   "target_cookie": target_cookie,\n   "request" : notification_request\n})\n')),(0,s.mdx)("h2",{id:"7-activate-your-ab-activity"},"7. Activate your A/B activity"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Click ",(0,s.mdx)("strong",{parentName:"li"},"Activate")," (1) to activate your A/B activity.")),(0,s.mdx)(c,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"You must have the ",(0,s.mdx)("strong",{parentName:"p"},"Approver")," or ",(0,s.mdx)("strong",{parentName:"p"},"Publisher")," ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/administer/manage-users/user-management.html"},"user role")," to perform this step."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/a53214be4da0cb87c61a70d7e45ce748/5530d/asset-activate.webp 320w","/target-developers/static/a53214be4da0cb87c61a70d7e45ce748/0c8fb/asset-activate.webp 640w","/target-developers/static/a53214be4da0cb87c61a70d7e45ce748/94b1e/asset-activate.webp 1280w","/target-developers/static/a53214be4da0cb87c61a70d7e45ce748/8a15b/asset-activate.webp 1678w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/a53214be4da0cb87c61a70d7e45ce748/dd4a7/asset-activate.png 320w","/target-developers/static/a53214be4da0cb87c61a70d7e45ce748/0f09e/asset-activate.png 640w","/target-developers/static/a53214be4da0cb87c61a70d7e45ce748/bbbf7/asset-activate.png 1280w","/target-developers/static/a53214be4da0cb87c61a70d7e45ce748/c54b3/asset-activate.png 1678w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/a53214be4da0cb87c61a70d7e45ce748/bbbf7/asset-activate.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-sdk-guides-getting-started-index-md-24d8e52d46f3d0c7a6b7.js.map