(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8237],{12060:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return h}});var i,r=a(22122),n=a(19756),o=(a(15007),a(64983)),s=a(99536),d=["components"],m={},l=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={_frontmatter:m},c=s.Z;function h(e){var t=e.components,a=(0,n.Z)(e,d);return(0,o.mdx)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"atjs-cookies"},"at.js cookies"),(0,o.mdx)("p",null,"Information about at.js 2.x and at.js 1.",(0,o.mdx)("em",{parentName:"p"},"x")," cookie behavior."),(0,o.mdx)("h2",{id:"atjs-2x-cookie-behavior"},"at.js 2.x cookie behavior"),(0,o.mdx)("p",null,"For at.js version 2.x (up to, but not including, version 2.10.0), ",(0,o.mdx)("em",{parentName:"p"},"only first-party cookies are supported"),". Just like in at.js 1.",(0,o.mdx)("em",{parentName:"p"},"x"),", the first-party cookie, “mbox,” is stored in ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientdomain.com"),", where ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientdomain")," is your domain."),(0,o.mdx)("p",null,"at.js generates a session ID and stores it in the cookie. The first response contains any activity information, as well as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TNT")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"PC ID")," generated by the Target servers. at.js then writes the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TNT/PC ID")," to the cookie."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"AMCV_###@AdobeOrg")," first-party cookie is always set by the Experience Cloud ID Service, although the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ECID")," is passed in Target requests."),(0,o.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"For at.js versions 2.10.0 and later, both first-party and cross-domain cookies are supported. "),(0,o.mdx)("h3",{id:"support-for-third-party-cookies-and-cross-domain-tracking"},"Support for third-party cookies and cross domain tracking"),(0,o.mdx)("p",null,"Cross-domain tracking makes it possible to see sessions on two related sites, but with different domains, as a single session. You could create a Target activity that spans ",(0,o.mdx)("inlineCode",{parentName:"p"},"siteA.com")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"siteB.com")," and the visitor would remain in the same experience when they crossed domains. This functionality ties into at.js 1.",(0,o.mdx)("em",{parentName:"p"},"x")," third-party and first-party cookie behavior."),(0,o.mdx)("p",null,"In at.js 1.",(0,o.mdx)("em",{parentName:"p"},"x"),", the third-party cookie was stored in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"[CLIENTCODE].tt.omtrdc.net")," domain and the first-party cookie was stored in ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientdomain.com"),". The first request returned HTTP response headers that attempted to set third-party cookies named ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxSession")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxPC"),", whereas a redirect request is sent back with an extra parameter (",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxXDomainCheck=true"),"). If the browser accepted third-party cookies, the redirect request includes those cookies, and the offer was returned. This workflow was possible because at.js 1.",(0,o.mdx)("em",{parentName:"p"},"x")," used the HTTP GET method."),(0,o.mdx)("p",null,"However, in at.js 2.x (up to, but not including, versions 2.10.0 and later), HTTP GET is no longer used and instead uses HTTP POST. HTTP POST is now used via at.js in order to send JSON payloads to Target edge servers instead of key-value parameters. This means that the redirect request to check whether a browser supports third-party cookies now breaks. This is because HTTP GET requests are idempotent transactions while HTTP POST is non-idempotent and mustn’t be arbitrarily repeated."),(0,o.mdx)("p",null,"Therefore, neither third-party cookies nor cross-domain tracking are supported in at.js 2.0.0."),(0,o.mdx)("p",null,"However, third-party cookies and cross-domain tracking are supported in at.js 2.10.0 and later."),(0,o.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"For at.js versions 2.10.0 and later, third-party cookies and cross-domain tracking are supported. "),(0,o.mdx)("h2",{id:"atjs-1x-cookie-behavior"},"at.js 1.",(0,o.mdx)("em",{parentName:"h2"},"x")," cookie behavior"),(0,o.mdx)("p",null,"For at.js versions 1.",(0,o.mdx)("em",{parentName:"p"},"x"),", the cookie behavior depends on whether it is a first-party cookie, a third-party cookie with a first-party cookie, or a third-party cookie alone."),(0,o.mdx)("h3",{id:"when-to-use-first-party-or-third-party-cookies"},"When to use first-party or third-party cookies"),(0,o.mdx)("p",null,"Your site setup determines which cookies you want to use. It is helpful to understand how Target works when trying to understand first-party and third-party cookies. See ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/introduction/how-target-works.html"},"How Adobe Target works")," for more information."),(0,o.mdx)("p",null,"There are three main use cases for cookies:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"One domain."),(0,o.mdx)("p",{parentName:"li"},"All of your testing will take place within one top-level domain (",(0,o.mdx)("inlineCode",{parentName:"p"},"www.domain.com"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"store.domain.com"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"anysub.domain.com"),", etc.)."),(0,o.mdx)("p",{parentName:"li"},"Use only first-party cookies. This is the default.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Users cross domains and you want to track and test their behavior across these domains."),(0,o.mdx)("p",{parentName:"li"},"Example: A user comes to your site to shop but checks out through Yahoo stores. Three approaches (work with your account representative to determine the best approach):"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Enable first- and third-party cookies.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Enable third-party only (very rare, but has the benefit of keeping the at.js cookie out of your domain).")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Enable only first-party cookies and pass ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxSession")," parameter when crossing domain."),(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxSession")," parameter must be passed to a landing page with at.js referenced. It cannot be an intermediate redirector page.")))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"You are using only adboxes or Flashboxes on a third-party site."),(0,o.mdx)("p",{parentName:"li"},"Two approaches (work with your client services manager to determine the best approach):"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Enable first-party and third-party cookies."),(0,o.mdx)("p",{parentName:"li"},"First-party and third-party cookies are required for Flashbox and dynamic creatives.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Enable only third-party cookies."),(0,o.mdx)("p",{parentName:"li"},"This approach is only for the rare case where adBox implementations are used without on-site targeting."))))),(0,o.mdx)("h3",{id:"first-party-cookie-behavior"},"First-party cookie behavior"),(0,o.mdx)("p",null,"The first-party cookie is stored in ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientdomain.com"),", where ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientdomain")," is your domain."),(0,o.mdx)("p",null,"at.js generates an ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxSession ID")," and stores it in the cookie. The first response contains the offer, as well as the JavaScript to store the ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxPC ID")," generated by the application, in the cookie."),(0,o.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"AMCV_###@AdobeOrg")," first-party cookie is always set with the Experience Cloud Visitor ID."),(0,o.mdx)("h3",{id:"third-party-cookie-behavior"},"Third-party cookie behavior"),(0,o.mdx)("p",null,"The third-party cookie is stored in ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientcode.tt.omtrdc.net")," and the first-party cookie is stored in ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientdomain.com"),", where ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientdomain")," is your domain."),(0,o.mdx)("p",null,"at.js generates an ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxSession ID"),". The first location request returns HTTP response headers that attempt to set third-party cookies named ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxSession")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxPC")," and a redirect request is sent back with an extra parameter (",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxXDomainCheck=true"),")."),(0,o.mdx)("p",null,"If the browser accepts third-party cookies, the redirect request includes those cookies, and the offer is returned."),(0,o.mdx)("p",null,"If the browser rejects third-party cookies, the redirect request does not include those cookies, and default content is displayed for all locations on the page. Because there are no cookies set, the same process above happens again on every page request."),(0,o.mdx)("h3",{id:"third-party-and-first-party-cookie-behavior"},"Third-party and first-party cookie behavior"),(0,o.mdx)("p",null,"The third-party cookie is stored in ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientcode.tt.omtrdc.net")," and the first-party cookie is stored in ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientdomain.com"),", where ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientdomain")," is your domain."),(0,o.mdx)("p",null,"at.js generates an ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxSession ID"),". The first location request returns HTTP response headers that attempt to set third-party cookies named ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxSession")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxPC"),", and a redirect request is sent back with an extra parameter (",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxXDomainCheck=true"),")."),(0,o.mdx)("p",null,"If the browser accepts third-party cookies, the redirect request includes those cookies, and the offer is returned."),(0,o.mdx)("p",null,"Some browsers reject third-party cookies. If the third-party cookie is blocked, the first-party cookie still works. Target attempts to set the third-party cookie, and if it cannot, then Target can only track on the client's specific domain. Cross-domain tracking does not work if the third-party is blocked, unless the ",(0,o.mdx)("inlineCode",{parentName:"p"},"mboxSession")," is appended in the link that crosses domains. In this case, another first-party cookie is set and synched with the prior domain's first-party cookie."),(0,o.mdx)("h2",{id:"cookie-settings"},"Cookie settings"),(0,o.mdx)("p",null,"The cookie has several default settings. You can change these settings if needed, with the exception of the cookie duration. Consult your account representative when changing cookie settings."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Setting"),(0,o.mdx)("th",{parentName:"tr",align:null},"Information"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Cookie name"),(0,o.mdx)("td",{parentName:"tr",align:null},"mbox.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Cookie domain"),(0,o.mdx)("td",{parentName:"tr",align:null},"The second and top levels of the domains from which you serve the content. Because it is served from your company's domain, the cookie is a first party cookie. Example: ",(0,o.mdx)("inlineCode",{parentName:"td"},"mycompany.com"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Server domain"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"clientcode.tt.omtrdc.net"),", using the client code for your account.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Cookie duration"),(0,o.mdx)("td",{parentName:"tr",align:null},"The cookie remains on the visitor's browser two years from his or her last login.",(0,o.mdx)("br",null),"The ",(0,o.mdx)("inlineCode",{parentName:"td"},"deviceIdLifetime")," setting is overrideable in ",(0,o.mdx)("a",{parentName:"td",href:"../atjs/target-atjs-versions.md"},"at.js version 2.3.1 or later"),". For more information, see ",(0,o.mdx)("a",{parentName:"td",href:"../../../implement/client-side/atjs/atjs-functions/targetglobalsettings.md"},"targetGlobalSettings()"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"P3P policy"),(0,o.mdx)("td",{parentName:"tr",align:null},"The cookie is published with a P3P policy, as required by the default setting in most browsers. A P3P policy indicates to a browser who is serving the cookie and how the information will be used.")))),(0,o.mdx)("p",null,"The cookie keeps a number of values to manage how your visitors experience campaigns:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Value"),(0,o.mdx)("th",{parentName:"tr",align:null},"Definition"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"session ID"),(0,o.mdx)("td",{parentName:"tr",align:null},"A unique ID for a user session. By default, this lasts 30 minutes.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"pc ID"),(0,o.mdx)("td",{parentName:"tr",align:null},"A semi-permanent ID for a visitor's browser. Lasts 14 days.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"check"),(0,o.mdx)("td",{parentName:"tr",align:null},"A simple test value used to determine if a visitor supports cookies. Set each time a visitor requests a page.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"disable"),(0,o.mdx)("td",{parentName:"tr",align:null},"Set if visitor's load time exceeds the timeout configured in the Adobe Experience Platform Web SDK or at.js file. By default, this lasts 1 hour.")))),(0,o.mdx)("h2",{id:"impact-on-target-for-safari-visitors-due-to-apple-webkit-tracking-changes"},"Impact on Target for Safari visitors due to Apple WebKit tracking changes"),(0,o.mdx)("p",null,"Keep the following in mind:"),(0,o.mdx)("h3",{id:"how-does-adobe-target-tracking-work"},"How does Adobe Target Tracking work?"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Cookies"),(0,o.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"First-party domains"),(0,o.mdx)("td",{parentName:"tr",align:null},'This is the standard implementation for Target customers.  The "mbox" cookies is set in the customer\'s domain.')),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Third-party tracking"),(0,o.mdx)("td",{parentName:"tr",align:null},'Third-party tracking is important for advertising and targeting use cases in Target and in Adobe Audience Manager (AAM).  Third-party tracking requires cross-site scripting techniques.  Target uses two cookies, "mboxSession" and "mboxPC" set in the ',(0,o.mdx)("inlineCode",{parentName:"td"},"clientcode.tt.omtrd.net")," domain.")))),(0,o.mdx)("h3",{id:"what-is-apples-approach"},"What is Apple's approach?"),(0,o.mdx)("p",null,"From Apple:"),(0,o.mdx)("p",null,'"Intelligent Tracking Prevention is a new WebKit feature that reduces cross-site tracking by further limiting cookies and other website data."'),(0,o.mdx)("p",null,"\"This is what's called cross-site tracking and the cookie used by ",(0,o.mdx)("inlineCode",{parentName:"p"},"example-tracker.com"),' is called a third-party cookie. In our testing we found popular websites with over 70 such trackers, all silently collecting data on users."'),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Approach"),(0,o.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Intelligent tracking prevention"),(0,o.mdx)("td",{parentName:"tr",align:null},"For more information, see ",(0,o.mdx)("a",{parentName:"td",href:"https://webkit.org/blog/7675/intelligent-tracking-prevention/"},"Intelligent Tracking Prevention")," on the WebKit Open Source Web Browser Engine website.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Cookies"),(0,o.mdx)("td",{parentName:"tr",align:null},"How Safari handles cookies:",(0,o.mdx)("ul",null,(0,o.mdx)("li",null,"Third-party cookies that are not on a domain the user accesses directly are never saved. This behavior is not new. Third-party cookies are already not supported in Safari."),(0,o.mdx)("li",null,"Third-party cookies set on a domain the user accesses directly are purged after 24 hours."),(0,o.mdx)("li",null,"First-party cookies are purged after 30 days if that first-party domain has been classified as tracking users across sites. This issue might apply to large companies that send users to different domains online. Apple has not made it clear how exactly these domains will be classified, or how a domain can determine if they've been classified as tracking users cross-site.")))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Machine Learning to identify domains that are cross-site"),(0,o.mdx)("td",{parentName:"tr",align:null},"From Apple:",(0,o.mdx)("br",null),"Machine Learning Classifier: A machine learning model is used to classify which top privately-controlled domains have the ability to track the user cross-site, based on the collected statistics. Out of the various statistics collected, three vectors turned out to have strong signal for classification based on current tracking practices: subresource under number of unique domains, sub frame under number of unique domains, and number of unique domains redirected to. All data collection and classification happens on-device.",(0,o.mdx)("br",null),"However, if the user interacts with  example.com as the top domain, often referred to as a first-party domain, Intelligent Tracking Prevention considers it a signal that the user is interested in the website and temporarily adjusts its behavior as depicted in this timeline:",(0,o.mdx)("br",null),"If the user interacted with  example.com the last 24 hours, its cookies will be available when ",(0,o.mdx)("inlineCode",{parentName:"td"},"example.com"),' is a third-party. This allows for "Sign in with my X account on Y" login scenarios.',(0,o.mdx)("ul",null,(0,o.mdx)("li",null,"Domains that are visited as top level domain won't be affected. Sites like OKTA for example"),(0,o.mdx)("li",null,"Identifies domains that are sub domain or sub frame of current page across multiple unique domains.")))))),(0,o.mdx)("h3",{id:"how-will-adobe-be-affected"},"How will Adobe be affected?"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Affected Functionality"),(0,o.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Opt-out support"),(0,o.mdx)("td",{parentName:"tr",align:null},"Apple's WebKit tracking changes breaks opt-out support.",(0,o.mdx)("br",null),"Target opt-out uses a cookie in the ",(0,o.mdx)("inlineCode",{parentName:"td"},"clientcode.tt.omtrdc.net")," domain. For more details, see ",(0,o.mdx)("a",{parentName:"td",href:"/target-developers/before-implement/privacy/privacy.md"},"Privacy"),".",(0,o.mdx)("br",null),"Target supports two opt-outs:",(0,o.mdx)("ul",null,(0,o.mdx)("li",null,"One per client (the client manages the opt-out link)."),(0,o.mdx)("li",null,"One via Adobe that opts the user out of all Target functionality for all customers.")),"Both methods use the third-party cookie.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Target activities"),(0,o.mdx)("td",{parentName:"tr",align:null},"Customers can choose their ",(0,o.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/visitor-profile-lifetime.html"},"profile lifetime length")," for their Target accounts—up to 90 days. The concern is that if the account's profile lifetime is longer than 30 days, and the first-party cookie gets purged because the customer's domain has been marked as tracking users cross-site, behavior for Safari visitors will be affected in the following areas in Target:",(0,o.mdx)("br",null),(0,o.mdx)("strong",{parentName:"td"},"Target Reports"),": If a Safari user enters into an activity, returns after 30 days, and then converts, that user counts as two visitors and one conversion.",(0,o.mdx)("br",null),"This behavior is the same for activities using Analytics as the reporting source (A4T).",(0,o.mdx)("br",null),(0,o.mdx)("strong",{parentName:"td"},"Profile & Activity Membership"),":",(0,o.mdx)("ul",null,(0,o.mdx)("li",null,"Profile data is erased when the first-party cookie expires."),(0,o.mdx)("li",null,"Activity membership is erased when the first-party cookie expires."),(0,o.mdx)("li",null," Target does not function in Safari for accounts using a third-party cookie implementation or a first- and third-party cookie implementation. Note that this behavior is not new. Safari has not allowed third-party cookies for awhile.")),(0,o.mdx)("br",null),(0,o.mdx)("strong",{parentName:"td"},"Suggestions"),": If there is a concern that the customer domain might be marked as one tracking visitors cross-session, it's safest to set the profile lifetime to 30 days or fewer in Target. This ensures that users will be tracked similarly in Safari and all other browsers.")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-client-side-atjs-atjs-cookies-md-e5954e134b6d61a25078.js.map