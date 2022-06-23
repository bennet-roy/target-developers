(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6910],{44058:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return g}});var n,r=a(22122),l=a(19756),m=(a(15007),a(64983)),d=a(99536),i=["components"],o={},s=(n="CodeBlock",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),u={_frontmatter:o},p=d.Z;function g(e){var t=e.components,a=(0,l.Z)(e,i);return(0,m.mdx)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"get-attributes"},"Get Attributes"),(0,m.mdx)("h2",{id:"description"},"Description"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"getAttributes()")," is used to fetch experimentation and personalized experiences from Target and extract attribute values."),(0,m.mdx)("h2",{id:"method"},"Method"),(0,m.mdx)(s,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,m.mdx)("h3",{id:"getattributes"},"getAttributes"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"Attributes TargetClient.getAttributes(TargetDeliveryRequest targetRequest, String ...mboxes)\n")),(0,m.mdx)("h2",{id:"parameters"},"Parameters"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Name"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Required"),(0,m.mdx)("th",{parentName:"tr",align:null},"Default"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"targetRequest"),(0,m.mdx)("td",{parentName:"tr",align:null},"TargetDeliveryRequest"),(0,m.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,m.mdx)("td",{parentName:"tr",align:null},"None"),(0,m.mdx)("td",{parentName:"tr",align:null},"The same target request as used for ",(0,m.mdx)("a",{parentName:"td",href:"get-offers.md"},"Get Offers​"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mboxNames"),(0,m.mdx)("td",{parentName:"tr",align:null},"var-args array"),(0,m.mdx)("td",{parentName:"tr",align:null},"No"),(0,m.mdx)("td",{parentName:"tr",align:null},"None"),(0,m.mdx)("td",{parentName:"tr",align:null},"A var-args array of mbox names")))),(0,m.mdx)("h2",{id:"result"},"Result"),(0,m.mdx)("p",null,"An ",(0,m.mdx)("inlineCode",{parentName:"p"},"Attributes")," object is returned from ",(0,m.mdx)("inlineCode",{parentName:"p"},"TargetClient.getAttributes()")," which has the following methods:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Name"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"getBoolean(mboxName, key)"),(0,m.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"Returns the value for a specified mbox name and attribute key")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"getString(mboxName, key)"),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Returns the value for a specified mbox name and attribute key")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"getInteger(mboxName, key)"),(0,m.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,m.mdx)("td",{parentName:"tr",align:null},"Returns the value for a specified mbox name and attribute key")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"getDouble(mboxName, key)"),(0,m.mdx)("td",{parentName:"tr",align:null},"Double"),(0,m.mdx)("td",{parentName:"tr",align:null},"Returns the value for a specified mbox name and attribute key")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"toMboxMap(mboxName)"),(0,m.mdx)("td",{parentName:"tr",align:null},"Map"),(0,m.mdx)("td",{parentName:"tr",align:null},"Returns a simple Map with key value pairs")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"getResponse()"),(0,m.mdx)("td",{parentName:"tr",align:null},"TargetDeliveryResponse"),(0,m.mdx)("td",{parentName:"tr",align:null},"Returns the response object normally returned by getOffers")))),(0,m.mdx)("h2",{id:"example"},"Example"),(0,m.mdx)(s,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"java"},"Java"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},'ClientConfig clientConfig = ClientConfig.builder()\n        .client("acmeclient")\n        .organizationId("1234567890@AdobeOrg")\n        .build();\n\nTargetClient targetJavaClient = TargetClient.create(clientConfig);\n\nTargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()\n        .context(new Context().channel(ChannelType.WEB))\n        .build();\n\nAttributes offerAttributes = targetJavaClient.getAttributes(targetDeliveryRequest, "demo-engineering-flags");\n\n//returns just the value of searchProviderId from the mbox offer\nString searchProviderId = offerAttributes.getString("demo-engineering-flags", "searchProviderId");\n\n//returns a simple Map representing the mbox offer\nMap<String, Object> engineeringFlags = offerAttributes.toMboxMap("demo-engineering-flags");\n\n//  the value of engineeringFlags looks like this\n//  {\n//      "cdnHostname": "cdn.cloud.corp.net",\n//      "searchProviderId": 143,\n//      "hasLegacyAccess": false\n//  }\n\nString assetUrl = "http://" + engineeringFlags.cdnHostname + "/path/to/asset";\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-java-get-attributes-md-9814baaa685b464e3786.js.map