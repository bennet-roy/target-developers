(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8035],{18107:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return h}});var a=n(22122),r=n(19756),o=(n(15007),n(64983)),i=n(99536),d=["components"],m={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},s=l("Hero"),p=l("Resources"),u=l("UL"),c=l("DiscoverBlock"),x={_frontmatter:m},g=i.Z;function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.mdx)(g,(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(s,{slots:"heading, text",mdxType:"Hero"}),(0,o.mdx)("h1",{id:"adobe-target-apis-and-sdks"},"Adobe Target APIs and SDKs"),(0,o.mdx)("p",null,"Adobe Target APIs and SDKs offer limitless ways to integrate your most important customer data into key business processes."),(0,o.mdx)(p,{slots:"heading, links",mdxType:"Resources"}),(0,o.mdx)("h2",{id:"resources"},"Resources"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.adobe.io/target/guide/"},"Getting Started")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/AdobeDocs/target-developers"},"Adobe Target GitHub Repo"))),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"This documentation provides instructions for Adobe Target APIs and SDKs."),(0,o.mdx)("p",null,"The Adobe Target APIs are a collection of APIs that power Adobe Target products like Adobe Recommendations.\nThe APIs allow for the creation of data-rich user interfaces you can use to manipulate and integrate data."),(0,o.mdx)("p",null,"Adobe Target APIs can be grouped according to type: Admin, Delivery, Reporting, and Profile APIs."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"API type"),(0,o.mdx)("th",{parentName:"tr",align:null},"What it enables you to do"),(0,o.mdx)("th",{parentName:"tr",align:null},"Download link"),(0,o.mdx)("th",{parentName:"tr",align:null},"Other helpful links"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Admin"),(0,o.mdx)("td",{parentName:"tr",align:null},"Create, modify, and delete activities, audiences, offers, and other objects (including Recommendations entities, criteria, designs, and so on. The Recommendations APIs are a type of admin API.)"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)(u,{mdxType:"UL"},(0,o.mdx)("li",null,(0,o.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#admin-postman-collection"},"Target Admin API Postman Collection")),(0,o.mdx)("li",null,(0,o.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/recommendations/#section/Postman"},"Recommendations API Postman Collection")))),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"../guides/recs-api/index.md"},"Use Recommendations APIs"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Delivery"),(0,o.mdx)("td",{parentName:"tr",align:null},"Retrieve optimized and personalized content from Target for delivery to an end user."),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/delivery-api/#section/Getting-Started/Postman-Collection"},"Target Delivery API Postman Collection")),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Reporting"),(0,o.mdx)("td",{parentName:"tr",align:null},"Export activity results and other reporting results."),(0,o.mdx)("td",{parentName:"tr",align:null},"Reporting APIs are included within the ",(0,o.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#admin-postman-collection"},"Target Admin API Postman collection"),"."),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Profile"),(0,o.mdx)("td",{parentName:"tr",align:null},"Retrieve and modify user profiles stored in Adobe Target."),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://developers.adobetarget.com/api/#profiles"},"Target Profile API Postman Collection")),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("h2",{id:"api-differences"},"API Differences"),(0,o.mdx)("p",null,"There are important distinctions between Target Admin APIs (including the Recommendations APIs) and Target Delivery APIs:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Admin APIs let you configure various aspects of Target that you could also configure in the Target UI. Admin APIs require authentication.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Delivery APIs let you retrieve content. Delivery APIs do not require authentication."))),(0,o.mdx)("p",null,"To use Target Admin APIs, you first need to configure authentication using Adobe I/O. For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"../guides/index.md"},"How to Configure Authentication"),"."),(0,o.mdx)("h2",{id:"discover"},"Discover"),(0,o.mdx)(c,{width:"100%",slots:"heading, link, text",mdxType:"DiscoverBlock"}),(0,o.mdx)("h3",{id:"configuration"},"Configuration"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"guides/"},"Getting Started")),(0,o.mdx)("p",null,"Get started with the Adobe Target APIs."),(0,o.mdx)(c,{slots:"heading, link, text",mdxType:"DiscoverBlock"}),(0,o.mdx)("h3",{id:"api-references"},"API References"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"api/admin-api/"},"Admin and Profile API")," "),(0,o.mdx)("p",null,"Use Adobe Target’s Admin and Profile APIs to manage activities, audiences, offers, properties, reports, mboxes, environments, and profiles."),(0,o.mdx)(c,{slots:"link, text",mdxType:"DiscoverBlock"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"api/delivery-api/"},"Delivery API")),(0,o.mdx)("p",null,"Use Adobe Target's Delivery APIs to deliver experiences across web and mobile channels as well as non-browser based IoT devices such as a connected TV, kiosk, or in-store digital screen."),(0,o.mdx)(c,{slots:"link, text",mdxType:"DiscoverBlock"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"guides/migrating/"},"Migrating from at.js to AEP Web SDK")),(0,o.mdx)("p",null,"For help migrating from at.js to AEP Web SDK.   "),(0,o.mdx)(c,{width:"100%",slots:"heading, link, text",mdxType:"DiscoverBlock"}),(0,o.mdx)("h2",{id:"contributing"},"Contributing"),(0,o.mdx)("p",null,"We encourage you to participate in our open documentation initiative, if you have suggestions, corrections, additions\nor deletions for this documentation, check out the source from ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe/gatsby-theme-spectrum-example"},"this GitHub repo"),", and submit a pull\nrequest with your contribution. For more information, refer to the ",(0,o.mdx)("a",{parentName:"p",href:"support/contribute/"},"contributing page"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-md-e5379c0c9cd31b95018f.js.map