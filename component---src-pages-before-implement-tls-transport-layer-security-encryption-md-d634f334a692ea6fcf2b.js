(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2933],{65932:function(e,t,r){"use strict";r.r(t),r.d(t,{_frontmatter:function(){return d},default:function(){return u}});var a,o=r(22122),n=r(19756),s=(r(15007),r(64983)),i=r(99536),l=["components"],d={},p=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),c={_frontmatter:d},m=i.Z;function u(e){var t=e.components,r=(0,n.Z)(e,l);return(0,s.mdx)(m,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"tls-transport-layer-security-encryption-changes"},"TLS (Transport Layer Security) encryption changes"),(0,s.mdx)("p",null,"Information about changes to how Adobe and Adobe Target use TLS (Transport Layer Security) to maintain the highest security standards and promote the safety of customer data."),(0,s.mdx)("p",null,"Transport Layer Security (TLS) is the most-widely deployed security protocol used today for web browsers and other applications that require data to be securely exchanged over a network. Adobe has security compliance standards that require the end-of-life of older protocols and is mandating the use of TLS 1.2 in order to have the most up-to-date and secure version in use. "),(0,s.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"As of March 1, 2020, Adobe Target no longer supports TLS 1.1 encryption for the Visual Experience Composer (VEC), Enhanced Experience Composer (EEC), activity delivery, APIs, etc. Please upgrade to TLS 1.2 to avoid any issues."),(0,s.mdx)("p",null,"We do not expect this to have a significant impact on customer data or reporting."),(0,s.mdx)("h2",{id:"visual-experience-composer-vec-with-enhanced-experience-composer-eec-enabled"},"Visual Experience Composer (VEC) with Enhanced Experience Composer (EEC) Enabled"),(0,s.mdx)("p",null,"TLS 1.2 is the default as of March 1, 2020 and TLS 1.1 will no longer be supported."),(0,s.mdx)("p",null,"Adobe will be moving customers in a phased manner to TLS 1.2. For those, whose domains are already 1.2 compliant, we will move them to TLS 1.2 without any changes needed from you. Most customer domains already support TLS 1.2; however, if your domain does not support TLS 1.2, we will keep those domains on TLS 1.1 like today (until March 2020)."),(0,s.mdx)("p",null,"You should not face any issue during this migration phase. If the VEC has stopped loading a site that was earlier working, ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/cmp-resources-and-contact-information.html?#reference_ACA3391A00EF467B87930A450050077C"},"open a Client Care ticket")," citing this migration as a possible cause."),(0,s.mdx)("p",null,"If, however, you are one of those customers who are on TSL 1.1 without supporting TLS 1.2, then you should plan for movement of your domains/infrastructure to TLS 1.2. We will continue to support the TLS 1.1 protocol until March 1, 2020. Starting March 1, 2020, Target will not support the TLS 1.1 protocol to be used for the VEC via the Enhanced Experience Composer capability."),(0,s.mdx)("p",null,"Although we strongly recommend everyone to be on TLS 1.2 going forward, if you are a new customer but do ",(0,s.mdx)("em",{parentName:"p"},"NOT")," support TLS 1.2, please reach out to Customer Care informing them that you need to be on TLS 1.1 for the Enhanced Experience Composer. However, please plan to move to TLS 1.2 as you will also not be supported beyond March 1, 2020."),(0,s.mdx)("h2",{id:"activity-delivery"},"Activity delivery"),(0,s.mdx)("p",null,"Starting March 1, 2020, Target servers will no longer support TLS 1.1. With this change, Target servers will no longer accept requests from visitors with older devices or web browsers that do not support TLS 1.2 (or later). As a result, older devices and browsers that support only TLS 1.1 (or support TLS 1.1 by default) will not receive activity content from Adobe Target. The site's default content will render."),(0,s.mdx)("p",null,"Some of the older devices and browsers that will be affected include:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Google Chrome (Chrome for Android) versions 29 and earlier"),(0,s.mdx)("li",{parentName:"ul"},"Opera Browser (Opera Mobile) versions 12.17 and earlier"),(0,s.mdx)("li",{parentName:"ul"},"Mozilla Firefox (Firefox for Mobile) versions 26 and earlier"),(0,s.mdx)("li",{parentName:"ul"},"Android 4.3 and earlier versions "),(0,s.mdx)("li",{parentName:"ul"},"Internet Explorer 8-10 on Windows 7 and earlier versions "),(0,s.mdx)("li",{parentName:"ul"},"Internet Explorer 10 on Windows Phone 8.0 "),(0,s.mdx)("li",{parentName:"ul"},"Safari 6.0.4/OS X10.8.4 and earlier versions")),(0,s.mdx)("p",null,"As you plan for this change, consider the following (note that the March 1, 2020 deadline affects all of these items):"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"You must ensure that your default site is ready in a manner that is consumable for compliant devices and browsers. "),(0,s.mdx)("li",{parentName:"ul"},"Be aware that the number of visitors in your Target reports can potentially see an insignificant drop in the number of visitors. "),(0,s.mdx)("li",{parentName:"ul"},"You might need to change audiences created specifically to target older devices or browsers that do not support TLS 1.2. Delivery to those devices and browsers will no longer work.")),(0,s.mdx)("p",null,"For more details about supported browsers and their versions, see ",(0,s.mdx)("a",{parentName:"p",href:"supported-browsers.md"},"Supported Browsers"),"."),(0,s.mdx)("h2",{id:"adobe-target-apis"},"Adobe Target APIs"),(0,s.mdx)("p",null,"Starting March 1, 2020, Target APIs will no longer support TLS 1.1 encryption. Customers who access the API should verify that they will not be impacted."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},'API clients using Java 7 with default settings will need modifications to support TLS 1.2. For more information, see " ',(0,s.mdx)("a",{parentName:"li",href:"https://www.java.com/en/configure_crypto.html"},"Changing default TLS protocol version for client end points: TLS 1.0 to TLS 1.2"),'" on the Java website. '),(0,s.mdx)("li",{parentName:"ul"},"API clients using Java 8 should not be impacted because the default setting is TLS 1.2. "),(0,s.mdx)("li",{parentName:"ul"},"API clients using other frameworks will need to contact their vendors for details on TLS 1.2 support.")),(0,s.mdx)("h2",{id:"access-to-experience-cloud-solutions-interfaces"},"Access to Experience Cloud Solutions interfaces"),(0,s.mdx)("p",null,"Because the Target Standard/Premium interface already requires a ",(0,s.mdx)("a",{parentName:"p",href:"supported-browsers.md"},"modern web browser"),", we do not anticipate issues. If you are unable to connect to Target, you should upgrade your browser to the latest version."),(0,s.mdx)("h2",{id:"how-to-check-which-tls-version-your-browser-uses"},"How to check which TLS version your browser uses"),(0,s.mdx)("p",null,"To check the TLS version on your website using Google Chrome:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Open the affected website in Chrome.")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"From the Chrome menu (the three vertical ellipses), click More Tools > Developer Tools."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/607eac2842e839675fcbb2c569628101/cb523/chrome-developer-tools.webp 320w","/target-developers/static/607eac2842e839675fcbb2c569628101/797b9/chrome-developer-tools.webp 640w","/target-developers/static/607eac2842e839675fcbb2c569628101/4b075/chrome-developer-tools.webp 1280w","/target-developers/static/607eac2842e839675fcbb2c569628101/f3ff0/chrome-developer-tools.webp 1920w","/target-developers/static/607eac2842e839675fcbb2c569628101/a662b/chrome-developer-tools.webp 2560w","/target-developers/static/607eac2842e839675fcbb2c569628101/514e9/chrome-developer-tools.webp 3286w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/607eac2842e839675fcbb2c569628101/72799/chrome-developer-tools.png 320w","/target-developers/static/607eac2842e839675fcbb2c569628101/6af66/chrome-developer-tools.png 640w","/target-developers/static/607eac2842e839675fcbb2c569628101/21b4d/chrome-developer-tools.png 1280w","/target-developers/static/607eac2842e839675fcbb2c569628101/29114/chrome-developer-tools.png 1920w","/target-developers/static/607eac2842e839675fcbb2c569628101/c2d13/chrome-developer-tools.png 2560w","/target-developers/static/607eac2842e839675fcbb2c569628101/3bb53/chrome-developer-tools.png 3286w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/607eac2842e839675fcbb2c569628101/21b4d/chrome-developer-tools.png",alt:"Chrome Developer Tools",title:"Chrome Developer Tools",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Open the Security tab, then examine the TLS version information under Connection:"),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/cb523/chrome-tls-version.webp 320w","/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/797b9/chrome-tls-version.webp 640w","/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/4b075/chrome-tls-version.webp 1280w","/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/f3ff0/chrome-tls-version.webp 1920w","/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/a662b/chrome-tls-version.webp 2560w","/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/96709/chrome-tls-version.webp 3298w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/72799/chrome-tls-version.png 320w","/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/6af66/chrome-tls-version.png 640w","/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/21b4d/chrome-tls-version.png 1280w","/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/29114/chrome-tls-version.png 1920w","/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/c2d13/chrome-tls-version.png 2560w","/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/34ad3/chrome-tls-version.png 3298w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/5819b46f537ce712a2dfc6b8e7725de8/21b4d/chrome-tls-version.png",alt:"TLS version details",title:"TLS version details",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,s.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"These instructions are current as of publication and are subject to change. A quick internet search should help should these instructions change. Other browsers have similar steps."),(0,s.mdx)("h2",{id:"expected-behavior-with-browsers-supporting-tls-versions-below-12"},"Expected behavior with browsers supporting TLS versions below 1.2"),(0,s.mdx)("p",null,"This section describes what to expect with browsers that support TLS versions below 1.2 only when using an at.js implementation. For comparison purposes, this section also describes what to expect with browsers that support TLS 1.2."),(0,s.mdx)("h3",{id:"central-endpoints"},"Central endpoints"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Target JavaScript Implementation"),(0,s.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"at.js"),(0,s.mdx)("td",{parentName:"tr",align:null},"With TLS 1.0 or TLS 1.1 enabled:",(0,s.mdx)("ul",null,(0,s.mdx)("li",null,'Using browser dev tools, on the Network tab, you\'ll see "200 OK." This means the request has succeeded.'),(0,s.mdx)("li",null,'User sees a "Can\'t connect securely to this page" message. The message explains that this might be caused because the site uses outdated or unsafe TLS security settings.'),(0,s.mdx)("li",null,"No console errors are displayed.")),"With TLS 1.2 enabled:",(0,s.mdx)("ul",null,(0,s.mdx)("li",null,"at.js file is downloaded.")))))),(0,s.mdx)("h3",{id:"edge-endpoints"},"Edge endpoints"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Target JavaScript Implementation"),(0,s.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Adobe Experience Platform Web SDK"),(0,s.mdx)("td",{parentName:"tr",align:null},"With TLS 1.0 or TLS 1.1 enabled:",(0,s.mdx)("ul",null,(0,s.mdx)("li",null,'Using browser dev tools, on the Network tab, you\'ll see "200 OK." This means the request has succeeded.'),(0,s.mdx)("li",null,'User sees a "Can\'t connect securely to this page" message. The message explains that this might be caused because the site uses outdated or unsafe TLS security settings.'),(0,s.mdx)("li",null,"No console errors are displayed."),(0,s.mdx)("li",null,"Default content is served.")),"With TLS 1.2 enabled:",(0,s.mdx)("ul",null,(0,s.mdx)("li",null,"Offer content is served.")))),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"at.js"),(0,s.mdx)("td",{parentName:"tr",align:null},"With TLS 1.0 or TLS 1.1 enabled:",(0,s.mdx)("ul",null,(0,s.mdx)("li",null,'Using browser dev tools, on the Network tab, you\'ll see "200 OK." This means the request has succeeded.'),(0,s.mdx)("li",null,'User sees a "Can\'t connect securely to this page" message. The message explains that this might be caused because the site uses outdated or unsafe TLS security settings.'),(0,s.mdx)("li",null,"No console errors are displayed."),(0,s.mdx)("li",null,"Default content is served.")),"With TLS 1.2 enabled:",(0,s.mdx)("ul",null,(0,s.mdx)("li",null,"Offer content is served.")))))),(0,s.mdx)("h3",{id:"activity-targeted-with-browser-version-audience-internet-explorer-versions-6-7-or-8"},"Activity targeted with browser-version audience (Internet Explorer, Versions 6, 7, or 8)"),(0,s.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Audiences stop working."),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Target JavaScript Implementation"),(0,s.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Adobe Experience Platform Web SDK"),(0,s.mdx)("td",{parentName:"tr",align:null},"The Platform SDK is not supported on Internet Explorer versions earlier than version 10.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"at.js"),(0,s.mdx)("td",{parentName:"tr",align:null},"at.js is not supported on Internet Explorer versions earlier than version 10.")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-before-implement-tls-transport-layer-security-encryption-md-d634f334a692ea6fcf2b.js.map