(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8358],{29880:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return g}});var n,r=a(22122),i=a(19756),d=(a(15007),a(64983)),s=a(99536),o=["components"],l={},m=(n="Media",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),p={_frontmatter:l},c=s.Z;function g(e){var t=e.components,a=(0,i.Z)(e,o);return(0,d.mdx)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"how-atjs-works"},"How at.js works"),(0,d.mdx)("p",null,"To implement Adobe Target client-side, you must use the at.js JavaScript library. "),(0,d.mdx)("p",null,"In a client-side implementation of Adobe Target, Target delivers the experiences associated with an activity directly to the client browser. The browser decides which experience to display and displays it. With a client-side implementation, you can use a WYSIWYG editor, the ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.corp.adobe.com/docs/target/using/experiences/vec/visual-experience-composer.html"},"Visual Experience Composer")," (VEC), or a non-visual interface, the ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/experiences/form-experience-composer.html"},"Form-based Experience Composer"),", to create your test and personalization experiences."),(0,d.mdx)("h2",{id:"what-is-atjs"},"What is at.js?"),(0,d.mdx)("p",null,"The at.js library is the new implementation library for Target. The at.js library improves page-load times for web implementations and provides better implementation options for single-page applications. at.js is the recommended implementation library and is updated frequently with new capabilities. We recommend that all customers implement or migrate to the ",(0,d.mdx)("a",{parentName:"p",href:"/target-developers/src/pages/implement/client-side/atjs/target-atjs-versions.md"},"latest version of at.js"),"."),(0,d.mdx)("p",null,"For more information, see ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.corp.adobe.com/docs/target/using/introduction/how-target-works.html#libraries"},"Target JavaScript libraries"),"."),(0,d.mdx)("p",null,"In the Target implementation illustrated below, the following Adobe Experience Cloud solutions are implemented: Analytics, Target, and Audience Manager. In addition, the following Experience Cloud core services are implemented: Adobe Experience Platform, Audiences, and Visitor ID Service."),(0,d.mdx)("h2",{id:"what-is-the-difference-between-atjs-1x-and-atjs-2x-workflow-diagrams"},"What is the difference between at.js 1.",(0,d.mdx)("em",{parentName:"h2"},"x")," and at.js 2.x workflow diagrams?"),(0,d.mdx)("p",null,"See ",(0,d.mdx)("a",{parentName:"p",href:"/target-developers/src/pages/implement/client-side/atjs/upgrading-from-atjs-1x-to-atjs-20.md"},"Upgrading from at.js 1.x to at.js 2.x")," for more information on the differences that were introduced in 2.O from 1.",(0,d.mdx)("em",{parentName:"p"},"x"),"."),(0,d.mdx)("p",null,"From a high level view, there are a couple of differences between the two versions:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"at.js 2.x does not have a global mbox request concept but rather a page-load request. A page-load request can be viewed as a request to retrieve content that should be applied on the initial page load of your website."),(0,d.mdx)("li",{parentName:"ul"},"at.js 2.x manages  a concepts called Views, which are use for Single Page Applications (SPAs). at.js 1.",(0,d.mdx)("em",{parentName:"li"},"x")," is not aware of this concept.")),(0,d.mdx)("h2",{id:"atjs-2x-diagrams"},"at.js 2.x diagrams"),(0,d.mdx)("p",null,"The following diagrams help you understand the workflow of at.js 2.x with Views and how this enhances the SPA integration. To get a better introduction of the concepts used in at.js 2.x, see ",(0,d.mdx)("a",{parentName:"p",href:"/target-developers/src/pages/implement/client-side/atjs/how-to-deployatjs/target-atjs-single-page-application.md"},"Single Page Application implementation"),"."),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1231px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ac4cead547832361313c4633d0ef543f/cb523/system-diagram-atjs-20.webp 320w","/target-developers/static/ac4cead547832361313c4633d0ef543f/797b9/system-diagram-atjs-20.webp 640w","/target-developers/static/ac4cead547832361313c4633d0ef543f/d6384/system-diagram-atjs-20.webp 1231w"],sizes:"(max-width: 1231px) 100vw, 1231px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ac4cead547832361313c4633d0ef543f/72799/system-diagram-atjs-20.png 320w","/target-developers/static/ac4cead547832361313c4633d0ef543f/6af66/system-diagram-atjs-20.png 640w","/target-developers/static/ac4cead547832361313c4633d0ef543f/c56af/system-diagram-atjs-20.png 1231w"],sizes:"(max-width: 1231px) 100vw, 1231px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/ac4cead547832361313c4633d0ef543f/c56af/system-diagram-atjs-20.png",alt:"Target flow with at.js 2.x",title:"Target flow with at.js 2.x",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Step"),(0,d.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"1"),(0,d.mdx)("td",{parentName:"tr",align:null},"Call returns the Experience Cloud ID if the user is authenticated; another call syncs the customer ID.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"2"),(0,d.mdx)("td",{parentName:"tr",align:null},"The at.js library loads synchronously and hides the document body.",(0,d.mdx)("br",null),"at.js can also be loaded asynchronously with an optional prehiding snippet implemented on the page.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"3"),(0,d.mdx)("td",{parentName:"tr",align:null},"A page load request is made including all configured parameters (MCID, SDID, and customer ID).")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"4"),(0,d.mdx)("td",{parentName:"tr",align:null},"Profile scripts execute and then feed into the Profile Store. The Store requests qualified audiences from the Audience Library (for example, audiences shared from Adobe Analytics, Audience Management, etc.).",(0,d.mdx)("br",null),"Customer attributes are sent to the Profile Store in a batch process.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"5"),(0,d.mdx)("td",{parentName:"tr",align:null},"Based on URL request parameters and profile data, Target decides which activities and experiences to return to the visitor for the current page and future views.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"6"),(0,d.mdx)("td",{parentName:"tr",align:null},"Targeted content is sent back to the page, optionally including profile values for additional personalization.",(0,d.mdx)("br",null),"Targeted content on the current page is revealed as quickly as possible without flicker of default content.",(0,d.mdx)("br",null),"Targeted content for views that are shown as a result of user actions in a SPA is cached in the browser so it can be instantly applied without an additional server call when the views are triggered through ",(0,d.mdx)("inlineCode",{parentName:"td"},"triggerView()"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"7"),(0,d.mdx)("td",{parentName:"tr",align:null},"Analytics data is sent to Data Collection servers.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"8"),(0,d.mdx)("td",{parentName:"tr",align:null},"Targeted data is matched to Analytics data via the SDID and is processed into the Analytics reporting storage.",(0,d.mdx)("br",null),"Analytics data can then be viewed in both Analytics and Target via Analytics for Target (A4T) reports.")))),(0,d.mdx)("p",null,"Now, wherever ",(0,d.mdx)("inlineCode",{parentName:"p"},"triggerView()")," is implemented on your SPA, the Views and actions are retrieved from cache and shown to the user without a server call. ",(0,d.mdx)("inlineCode",{parentName:"p"},"triggerView()")," also makes a notifications request to the Target backend in order to increment and record impression counts. For more information on at.js for SPAs with Views, see ",(0,d.mdx)("a",{parentName:"p",href:"/target-developers/src/pages/implement/client-side/atjs/how-to-deployatjs/target-atjs-single-page-application.md"},"Single Page Application implementation"),"."),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1232px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/9e6ef32fa796fd5020f4f084be1ad4d6/cb523/atjs-20-triggerview.webp 320w","/target-developers/static/9e6ef32fa796fd5020f4f084be1ad4d6/797b9/atjs-20-triggerview.webp 640w","/target-developers/static/9e6ef32fa796fd5020f4f084be1ad4d6/e516e/atjs-20-triggerview.webp 1232w"],sizes:"(max-width: 1232px) 100vw, 1232px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/9e6ef32fa796fd5020f4f084be1ad4d6/72799/atjs-20-triggerview.png 320w","/target-developers/static/9e6ef32fa796fd5020f4f084be1ad4d6/6af66/atjs-20-triggerview.png 640w","/target-developers/static/9e6ef32fa796fd5020f4f084be1ad4d6/1628f/atjs-20-triggerview.png 1232w"],sizes:"(max-width: 1232px) 100vw, 1232px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/9e6ef32fa796fd5020f4f084be1ad4d6/1628f/atjs-20-triggerview.png",alt:"Target flow at.js 2.x triggerView",title:"Target flow at.js 2.x triggerView",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Step"),(0,d.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"1"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"triggerView()")," is called in the SPA to render the View and apply actions to modify visual elements.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"2"),(0,d.mdx)("td",{parentName:"tr",align:null},"Targeted content for the view is read from the cache.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"3"),(0,d.mdx)("td",{parentName:"tr",align:null},"Targeted content is revealed as quickly as possible without flicker of default content.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"4"),(0,d.mdx)("td",{parentName:"tr",align:null},"Notification request is sent to the Target Profile Store to count the visitor in the activity and increment metrics.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"5"),(0,d.mdx)("td",{parentName:"tr",align:null},"Analytics data sent to Data Collection Servers.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"6"),(0,d.mdx)("td",{parentName:"tr",align:null},"Target data is matched to Analytics data via the SDID and is processed into the Analytics reporting storage. Analytics data can then be viewed in both Analytics and Target via A4T reports.")))),(0,d.mdx)("h3",{id:"video---atjs-2x-architectural-diagram"},"Video - at.js 2.x architectural diagram"),(0,d.mdx)("p",null,"at.js 2.x enhances Adobe Target's support for SPAs and integrates with other Experience Cloud solutions. This video explains how everything comes together."),(0,d.mdx)(m,{slots:"video",mdxType:"Media"}),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"https://video.tv.adobe.com/v/26250"},"https://video.tv.adobe.com/v/26250")),(0,d.mdx)("p",null,"See ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target-learn/tutorials/implementation/understanding-how-atjs-20-works.html"},"Understanding how at.js 2.x works")," for more information."),(0,d.mdx)("h2",{id:"atjs-1x-diagram"},"at.js 1.x diagram"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"961px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.81250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/efb96af5b6aaf21f5f98dae4ec8f36c4/cb523/target-flow.webp 320w","/target-developers/static/efb96af5b6aaf21f5f98dae4ec8f36c4/797b9/target-flow.webp 640w","/target-developers/static/efb96af5b6aaf21f5f98dae4ec8f36c4/33535/target-flow.webp 961w"],sizes:"(max-width: 961px) 100vw, 961px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/efb96af5b6aaf21f5f98dae4ec8f36c4/72799/target-flow.png 320w","/target-developers/static/efb96af5b6aaf21f5f98dae4ec8f36c4/6af66/target-flow.png 640w","/target-developers/static/efb96af5b6aaf21f5f98dae4ec8f36c4/024d6/target-flow.png 961w"],sizes:"(max-width: 961px) 100vw, 961px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/efb96af5b6aaf21f5f98dae4ec8f36c4/024d6/target-flow.png",alt:"Target flow - at.js 1.x",title:"Target flow - at.js 1.x",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Step"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Call"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"1"),(0,d.mdx)("td",{parentName:"tr",align:null},"Call returns the Experience Cloud ID (MCID) if the user is authenticated; another call syncs the customer ID."),(0,d.mdx)("td",{parentName:"tr",align:null},"2"),(0,d.mdx)("td",{parentName:"tr",align:null},"The at.js library loads synchronously and hides the document body.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"3"),(0,d.mdx)("td",{parentName:"tr",align:null},"A global mbox request is made including all configured parameters, MCID, SDID, and customer ID (optional)."),(0,d.mdx)("td",{parentName:"tr",align:null},"4"),(0,d.mdx)("td",{parentName:"tr",align:null},"Profile scripts execute and then feed into the Profile Store. The Store requests qualified audiences from the Audience Library (for example, audiences shared from Adobe Analytics, Audience Manager, etc.).",(0,d.mdx)("br",null),"Customer attributes are sent to the Profile Store in a batch process.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"5"),(0,d.mdx)("td",{parentName:"tr",align:null},"Based on the URL, mbox parameters, and profile data, Target decides which activities and experiences to return to the visitor."),(0,d.mdx)("td",{parentName:"tr",align:null},"6"),(0,d.mdx)("td",{parentName:"tr",align:null},"Targeted content is sent back to page, optionally including profile values for additional personalization.",(0,d.mdx)("br",null),"The experience is revealed as quickly as possible without flicker of default content.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"7"),(0,d.mdx)("td",{parentName:"tr",align:null},"Analytics data is sent to Data Collection servers."),(0,d.mdx)("td",{parentName:"tr",align:null},"8"),(0,d.mdx)("td",{parentName:"tr",align:null},"Target data is matched to Analytics data via the SDID and is processed into the Analytics  reporting storage.",(0,d.mdx)("br",null),"Analytics data can then be viewed in both Analytics and  Target via Analytics for Target (A4T) reports.")))),(0,d.mdx)("h3",{id:"video---office-hours-atjs-tips-and-overview-june-26-2019"},"Video - Office hours: at.js tips and overview (June 26, 2019)"),(0,d.mdx)("p",null,'This video is a recording of "Office Hours," an initiative led by the Adobe Customer Care team.'),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Benefits of using at.js"),(0,d.mdx)("li",{parentName:"ul"},"at.js settings"),(0,d.mdx)("li",{parentName:"ul"},"Flicker handling"),(0,d.mdx)("li",{parentName:"ul"},"Debugging at.js"),(0,d.mdx)("li",{parentName:"ul"},"Known issues"),(0,d.mdx)("li",{parentName:"ul"},"FAQ")),(0,d.mdx)(m,{slots:"video",mdxType:"Media"}),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"https://video.tv.adobe.com/v/27959"},"https://video.tv.adobe.com/v/27959")),(0,d.mdx)("h2",{id:"how-atjs-renders-offers-with-html-content"},"How at.js renders offers with HTML content"),(0,d.mdx)("p",null,"When rendering offers with HTML content, at.js applies the following algorithm:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Images are preloaded (if there are any ",(0,d.mdx)("inlineCode",{parentName:"p"},"<img>")," tags in HTML content).")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"HTML content is attached to the DOM node.")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Inline scripts are executed (code enclosed in ",(0,d.mdx)("inlineCode",{parentName:"p"},"<script>")," tags).")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Remote scripts are loaded asynchronously and executed (",(0,d.mdx)("inlineCode",{parentName:"p"},"<script>")," tags with ",(0,d.mdx)("inlineCode",{parentName:"p"},"src")," attributes)."))),(0,d.mdx)("p",null,"Important notes:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"at.js does not provide any guarantees on the order of remote script execution, as these are loaded asynchronously."),(0,d.mdx)("li",{parentName:"ul"},"Inline scripts should not have any dependencies on remote scripts, as these are loaded and executed later.")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-client-side-atjs-how-atjs-works-how-atjs-works-md-ed4500cf14b527ec1584.js.map