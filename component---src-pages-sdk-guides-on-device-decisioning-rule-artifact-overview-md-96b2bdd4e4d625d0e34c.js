(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6660],{58102:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return p}});var i=a(22122),r=a(19756),n=(a(15007),a(64983)),o=a(99536),c=["components"],d={},l={_frontmatter:d},s=o.Z;function p(e){var t=e.components,a=(0,r.Z)(e,c);return(0,n.mdx)(s,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"rule-artifact-overview"},"Rule artifact overview"),(0,n.mdx)("p",null,"The rule artifact is a JSON representation of your Adobe Target on-device decisioning activities. It is generated by Adobe Target and propagated to the Akamai CDN to ensure there is a rule artifact available as close as possible to your end users. It contains metadata that ensures precise execution and delivery of your activities, while also allowing for real-time analytics via event tracking. The Adobe Target SDKs can be configured in a way that allows for automatic management of the rule artifact, by which it may be downloaded or updated according to a user-specified time interval. Furthermore, you can also maintain your own local copy of the rule artifact using a distributed memory caching system like ",(0,n.mdx)("a",{parentName:"p",href:"https://memcached.org/"},"Memcached")," to initialize the Adobe Target SDK, so your stateless servers can serve requests immediately. To learn more about these options, reference the following guides:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("em",{parentName:"li"},"Downloading, Storing, and Updating the Rule Artifact Automatically via the Adobe Target SDK")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("em",{parentName:"li"},"Downloading, Storing, and Updating the Rule Artifact via JSON Payload"))),(0,n.mdx)("h2",{id:"example-rule-artifact"},"Example rule artifact"),(0,n.mdx)("p",null,"Click here for an example of the ",(0,n.mdx)("em",{parentName:"p"},"rule artifact"),"."),(0,n.mdx)("h2",{id:"how-to-view-the-rule-artifact-for-your-client"},"How to view the rule artifact for your client"),(0,n.mdx)("p",null,"Enabling traces will output additional information from Adobe Target in regards to the rule artifact, specifically the URL."),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Navigate to the Target UI."),(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1202px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/fd0f6b01fd228fc41899d1bbc1ec78e4/cb523/rule-artifact-1.webp 320w","/target-developers/static/fd0f6b01fd228fc41899d1bbc1ec78e4/797b9/rule-artifact-1.webp 640w","/target-developers/static/fd0f6b01fd228fc41899d1bbc1ec78e4/420e8/rule-artifact-1.webp 1202w"],sizes:"(max-width: 1202px) 100vw, 1202px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/fd0f6b01fd228fc41899d1bbc1ec78e4/72799/rule-artifact-1.png 320w","/target-developers/static/fd0f6b01fd228fc41899d1bbc1ec78e4/6af66/rule-artifact-1.png 640w","/target-developers/static/fd0f6b01fd228fc41899d1bbc1ec78e4/d43b4/rule-artifact-1.png 1202w"],sizes:"(max-width: 1202px) 100vw, 1202px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/fd0f6b01fd228fc41899d1bbc1ec78e4/d43b4/rule-artifact-1.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Navigate to ",(0,n.mdx)("strong",{parentName:"p"},"Administration")," > ",(0,n.mdx)("strong",{parentName:"p"},"Implementation")," and click ",(0,n.mdx)("strong",{parentName:"p"},"Generate New Authorization Token"),"."),(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1204px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.68750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/50c08de165becc5697ceb92fc9dd220a/cb523/rule-artifact-2.webp 320w","/target-developers/static/50c08de165becc5697ceb92fc9dd220a/797b9/rule-artifact-2.webp 640w","/target-developers/static/50c08de165becc5697ceb92fc9dd220a/9153e/rule-artifact-2.webp 1204w"],sizes:"(max-width: 1204px) 100vw, 1204px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/50c08de165becc5697ceb92fc9dd220a/72799/rule-artifact-2.png 320w","/target-developers/static/50c08de165becc5697ceb92fc9dd220a/6af66/rule-artifact-2.png 640w","/target-developers/static/50c08de165becc5697ceb92fc9dd220a/35252/rule-artifact-2.png 1204w"],sizes:"(max-width: 1204px) 100vw, 1204px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/50c08de165becc5697ceb92fc9dd220a/35252/rule-artifact-2.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Copy the newly generated authorization token to the clipboard and add it to your Target request."))),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"const request = {\n  trace: {\n    authorizationToken: '88f1a924-6bc5-4836-8560-2f9c86aeb36b'\n  },\n  execute: {\n    mboxes: [{\n      address: getAddress(req),\n      name: \"node-sdk-mbox\"\n    }]\n}};\n")),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Output the Target Trace via the terminal to view details about the artifact. To URL is accessible via the artifactLocation variable.")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},'"trace": {\n   "clientCode": "your-client-code",\n   "artifact": {\n     "artifactLocation": "https://assets.adobetarget.com/your-client-code/production/v1/rules.bin",\n     "pollingInterval": 300000,\n     "pollingHalted": false,\n     "artifactVersion": "1.0.0",\n     "artifactRetrievalCount": 10,\n     "artifactLastRetrieved": "2020-09-20T00:09:42.707Z",\n     "clientCode": "your-client-code",\n     "environment": "production",\n     "generatedAt": "2020-09-22T17:17:59.783Z"\n   },\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-guides-on-device-decisioning-rule-artifact-overview-md-96b2bdd4e4d625d0e34c.js.map