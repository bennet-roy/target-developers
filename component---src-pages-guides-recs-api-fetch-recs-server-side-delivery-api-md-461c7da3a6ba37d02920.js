(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7131],{64925:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return g}});var r,i=a(22122),n=a(19756),s=(a(15007),a(64983)),d=a(99536),o=["components"],c={},p=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),m={_frontmatter:c},l=d.Z;function g(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.mdx)(l,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"fetching-recommendations-with-the-delivery-api"},"Fetching Recommendations with the Delivery API"),(0,s.mdx)("p",null,"The Adobe Target and Adobe Target Recommendations APIs can be used to deliver responses to web pages, but can also be used in non-HTML based experiences including apps, screens, consoles, emails, kiosks and other display devices. In other words, when Target libraries and JavaScript cannot be used, the ",(0,s.mdx)("strong",{parentName:"p"},"Target Delivery API")," still allows us to access the full range of Target functionality to deliver personalized experiences."),(0,s.mdx)(p,{variant:"help",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"When requesting content containing actual recommendations (recommended products or items), use the Target Delivery API."),(0,s.mdx)("p",null,"To retrieve recommendations, send an Adobe Target Delivery API POST call with the appropriate contextual information, which may include a user ID (for use with profile-specific recommendations such as the user's recently viewed items), relevant mbox name, mbox parameters, profile parameters, or other attributes. The response will include recommended entity.ids (and may include other entity data) in JSON or HTML format, which can then be displayed in the device."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("a",{parentName:"p",href:"https://developers.adobetarget.com/api/delivery-api/"},"Delivery API")," for Adobe Target exposes all existing features that a standard Target request provides."),(0,s.mdx)("p",null,"The Delivery API:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Enables you to retrieve experiences or offers for a location and an audience in a RESTful manner."),(0,s.mdx)("li",{parentName:"ul"},"Requires no authentication."),(0,s.mdx)("li",{parentName:"ul"},"Only POSTs."),(0,s.mdx)("li",{parentName:"ul"},"Does not process cookies or redirect calls."),(0,s.mdx)("li",{parentName:"ul"},'Does not require or recognize "user roles." It simply fetches content or reports events to Target edge servers.')),(0,s.mdx)("p",null,"To use the Delivery API to deliver Target experiences—including recommendations—follow these steps:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Create a Target activity (A/B, XT, AP, or Recommendations) using the Form-Based Composer (not the Visual Experience Composer)."),(0,s.mdx)("li",{parentName:"ol"},"Use the Delivery API to get a response for the requests generated by the Target activity you just created.")),(0,s.mdx)("h2",{id:"create-a-recommendation-using-the-form-based-experience-composer"},"Create a Recommendation using the Form-based Experience Composer"),(0,s.mdx)("p",null,"To create recommendations that can be used with the Delivery API, use the ",(0,s.mdx)("a",{parentName:"p",href:"https://docs.adobe.com/content/help/en/target/using/experiences/form-experience-composer.html"},"Form-based Composer"),". "),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"First, create and save a JSON-based design to use in your recommendation. For sample JSON, plus background information regarding how JSON responses can be returned when configuring a form-based activity, see the documentation on ",(0,s.mdx)("a",{parentName:"p",href:"https://docs.adobe.com/content/help/en/target/using/recommendations/recommendations-design/create-design.html"},"Creating Recommendation Designs"),". In this example, the design is named ",(0,s.mdx)("em",{parentName:"p"},"Simple JSON."),"\n",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.81249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/8ae60560cc44dce336c59fc457d19cea/cb523/server-side-create-recs-json-design.webp 320w","/target-developers/static/8ae60560cc44dce336c59fc457d19cea/797b9/server-side-create-recs-json-design.webp 640w","/target-developers/static/8ae60560cc44dce336c59fc457d19cea/4b075/server-side-create-recs-json-design.webp 1280w","/target-developers/static/8ae60560cc44dce336c59fc457d19cea/f3ff0/server-side-create-recs-json-design.webp 1920w","/target-developers/static/8ae60560cc44dce336c59fc457d19cea/a662b/server-side-create-recs-json-design.webp 2560w","/target-developers/static/8ae60560cc44dce336c59fc457d19cea/38479/server-side-create-recs-json-design.webp 2636w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/8ae60560cc44dce336c59fc457d19cea/72799/server-side-create-recs-json-design.png 320w","/target-developers/static/8ae60560cc44dce336c59fc457d19cea/6af66/server-side-create-recs-json-design.png 640w","/target-developers/static/8ae60560cc44dce336c59fc457d19cea/21b4d/server-side-create-recs-json-design.png 1280w","/target-developers/static/8ae60560cc44dce336c59fc457d19cea/29114/server-side-create-recs-json-design.png 1920w","/target-developers/static/8ae60560cc44dce336c59fc457d19cea/c2d13/server-side-create-recs-json-design.png 2560w","/target-developers/static/8ae60560cc44dce336c59fc457d19cea/de91b/server-side-create-recs-json-design.png 2636w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/8ae60560cc44dce336c59fc457d19cea/21b4d/server-side-create-recs-json-design.png",alt:"server-side-create-recs-json-design.png",title:"server-side-create-recs-json-design.png",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"In Target, navigate to ",(0,s.mdx)("strong",{parentName:"p"},"Activities > Create Activity > Recommendations"),", then select ",(0,s.mdx)("strong",{parentName:"p"},"Form"),"."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.75000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/385665dc1fc501b800aec766ca7cd60e/cb523/server-side-create-recs.webp 320w","/target-developers/static/385665dc1fc501b800aec766ca7cd60e/797b9/server-side-create-recs.webp 640w","/target-developers/static/385665dc1fc501b800aec766ca7cd60e/4b075/server-side-create-recs.webp 1280w","/target-developers/static/385665dc1fc501b800aec766ca7cd60e/0fffa/server-side-create-recs.webp 1375w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/385665dc1fc501b800aec766ca7cd60e/72799/server-side-create-recs.png 320w","/target-developers/static/385665dc1fc501b800aec766ca7cd60e/6af66/server-side-create-recs.png 640w","/target-developers/static/385665dc1fc501b800aec766ca7cd60e/21b4d/server-side-create-recs.png 1280w","/target-developers/static/385665dc1fc501b800aec766ca7cd60e/29c1d/server-side-create-recs.png 1375w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/385665dc1fc501b800aec766ca7cd60e/21b4d/server-side-create-recs.png",alt:"server-side-create-recs.png",title:"server-side-create-recs.png",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Select a Property, and click ",(0,s.mdx)("strong",{parentName:"p"},"Next"),".")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Define the location where you would like users to receive the recommendation's response. The example below uses a location named ",(0,s.mdx)("em",{parentName:"p"},"api_charter"),". Select your JSON-based design, created earlier, named ",(0,s.mdx)("em",{parentName:"p"},"Simple JSON."),"\n",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"732px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"341.24999999999994%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/0691465a8e14c324edef91b22236fb1e/cb523/server-side-create-recs-form1.webp 320w","/target-developers/static/0691465a8e14c324edef91b22236fb1e/797b9/server-side-create-recs-form1.webp 640w","/target-developers/static/0691465a8e14c324edef91b22236fb1e/55e37/server-side-create-recs-form1.webp 732w"],sizes:"(max-width: 732px) 100vw, 732px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/0691465a8e14c324edef91b22236fb1e/72799/server-side-create-recs-form1.png 320w","/target-developers/static/0691465a8e14c324edef91b22236fb1e/6af66/server-side-create-recs-form1.png 640w","/target-developers/static/0691465a8e14c324edef91b22236fb1e/d0cc0/server-side-create-recs-form1.png 732w"],sizes:"(max-width: 732px) 100vw, 732px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/0691465a8e14c324edef91b22236fb1e/d0cc0/server-side-create-recs-form1.png",alt:"server-side-create-recs-form.png",title:"server-side-create-recs-form.png",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Save and activate the recommendation. It will generate results. ",(0,s.mdx)("a",{parentName:"p",href:"https://docs.adobe.com/content/help/en/target/using/recommendations/recommendations-activity/previewing-and-launching-your-recommendations-activity.html"},"Once the results are ready"),", you can use the Delivery API to retrieve them."))),(0,s.mdx)("h2",{id:"use-the-delivery-api"},"Use the Delivery API"),(0,s.mdx)("p",null,"The syntax for the ",(0,s.mdx)("a",{parentName:"p",href:"https://developers.adobetarget.com/api/delivery-api/#tag/Delivery-API"},"Delivery API")," is:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST https://{{CLIENT_CODE}}.tt.omtrdc.net/rest/v1/delivery")),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Note the client code is required. As a reminder, your client code may be found in Adobe Target by navigating to ",(0,s.mdx)("strong",{parentName:"p"},"Recommendations > Settings"),". Note the ",(0,s.mdx)("strong",{parentName:"p"},"Client Code")," value in the ",(0,s.mdx)("strong",{parentName:"p"},"Recommendation API Token")," section.\n",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/cb523/client-code.webp 320w","/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/797b9/client-code.webp 640w","/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/4b075/client-code.webp 1280w","/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/f3ff0/client-code.webp 1920w","/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/a662b/client-code.webp 2560w","/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/a1170/client-code.webp 2612w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/72799/client-code.png 320w","/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/6af66/client-code.png 640w","/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/21b4d/client-code.png 1280w","/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/29114/client-code.png 1920w","/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/c2d13/client-code.png 2560w","/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/809bc/client-code.png 2612w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/3b1826c4204fc107f1c3ad1a5202a738/21b4d/client-code.png",alt:"client-code.png",title:"client-code.png",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Once you have your client code, construct your Delivery API call. The example below begins with the ",(0,s.mdx)("strong",{parentName:"p"},"Web Batched Mboxes Delivery API Call")," provided in the ",(0,s.mdx)("a",{parentName:"p",href:"https://developers.adobetarget.com/api/delivery-api/#section/Getting-Started/Postman-Collection"},"Delivery API Postman collection"),", making relevant modifications. For example:"),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"the ",(0,s.mdx)("strong",{parentName:"li"},"browser")," and ",(0,s.mdx)("strong",{parentName:"li"},"address")," objects were removed from the ",(0,s.mdx)("strong",{parentName:"li"},"Body"),", since they are not required for non-HTML use cases"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("em",{parentName:"li"},"api_charter")," is listed as the location name in this example"),(0,s.mdx)("li",{parentName:"ul"},"the entity.id is specified, since this recommendation is based on Content Similarity, which requires a current item key to be passed to Target.\n",(0,s.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.31250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/cb523/server-side-delivery-api-call2.webp 320w","/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/797b9/server-side-delivery-api-call2.webp 640w","/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/4b075/server-side-delivery-api-call2.webp 1280w","/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/f3ff0/server-side-delivery-api-call2.webp 1920w","/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/a662b/server-side-delivery-api-call2.webp 2560w","/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/cb4c3/server-side-delivery-api-call2.webp 2962w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/72799/server-side-delivery-api-call2.png 320w","/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/6af66/server-side-delivery-api-call2.png 640w","/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/21b4d/server-side-delivery-api-call2.png 1280w","/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/29114/server-side-delivery-api-call2.png 1920w","/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/c2d13/server-side-delivery-api-call2.png 2560w","/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/6c837/server-side-delivery-api-call2.png 2962w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/62c5111a235d63f6623eb7398e8d32d2/21b4d/server-side-delivery-api-call2.png",alt:"server-side-Delivery-API-call.png",title:"server-side-Delivery-API-call.png",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\nRemember to configure your query parameters correctly. For example, be sure to specify ",(0,s.mdx)("inlineCode",{parentName:"li"},"{{CLIENT_CODE}}")," as necessary. "," ",(0,s.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/cb523/client-code3.webp 320w","/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/797b9/client-code3.webp 640w","/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/4b075/client-code3.webp 1280w","/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/f3ff0/client-code3.webp 1920w","/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/a662b/client-code3.webp 2560w","/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/6f892/client-code3.webp 2966w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/72799/client-code3.png 320w","/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/6af66/client-code3.png 640w","/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/21b4d/client-code3.png 1280w","/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/29114/client-code3.png 1920w","/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/c2d13/client-code3.png 2560w","/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/89896/client-code3.png 2966w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/8bda5486aa3d0ec03dc33548ca4f9e7f/21b4d/client-code3.png",alt:"client-code3",title:"client-code3",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Send the request. This executes against the ",(0,s.mdx)("em",{parentName:"p"},"api_charter")," location, which has an active recommendation running on it, defined with your JSON design which will output a list of recommended entities.")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Receive a response based on the JSON design.\n",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.062500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/354001fc660e7902867f250ea734ea71/cb523/server-side-create-recs-json-response2.webp 320w","/target-developers/static/354001fc660e7902867f250ea734ea71/797b9/server-side-create-recs-json-response2.webp 640w","/target-developers/static/354001fc660e7902867f250ea734ea71/4b075/server-side-create-recs-json-response2.webp 1280w","/target-developers/static/354001fc660e7902867f250ea734ea71/f3ff0/server-side-create-recs-json-response2.webp 1920w","/target-developers/static/354001fc660e7902867f250ea734ea71/0fa97/server-side-create-recs-json-response2.webp 2521w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/354001fc660e7902867f250ea734ea71/72799/server-side-create-recs-json-response2.png 320w","/target-developers/static/354001fc660e7902867f250ea734ea71/6af66/server-side-create-recs-json-response2.png 640w","/target-developers/static/354001fc660e7902867f250ea734ea71/21b4d/server-side-create-recs-json-response2.png 1280w","/target-developers/static/354001fc660e7902867f250ea734ea71/29114/server-side-create-recs-json-response2.png 1920w","/target-developers/static/354001fc660e7902867f250ea734ea71/1fc59/server-side-create-recs-json-response2.png 2521w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/354001fc660e7902867f250ea734ea71/21b4d/server-side-create-recs-json-response2.png",alt:"server-side-create-recs-json-response2.png",title:"server-side-create-recs-json-response2.png",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\nThe response includes the key ID, as well as the entity IDs of the recommended entities."),(0,s.mdx)("p",{parentName:"li"},"Using the Delivery API with Recommendations in this way enables you to perform additional steps prior to displaying recommendations to the visitor on the non-HTML device. For example, you can take the response from the Delivery API to perform an additional, real-time lookup of entity attribute details (inventory, price, rating, and so on) from another system (such as a CMS, PIM or ecommerce platform), before displaying final results."),(0,s.mdx)("p",{parentName:"li"},"Using the approach outlined in this tutorial, you can get any application to leverage the response from Target to provide personalized recommendations!"))),(0,s.mdx)("h2",{id:"example-implementations"},"Example Implementations"),(0,s.mdx)("p",null,"The following resources provide examples of various non-HTML focused implementations. Keep in mind every implementation will be unique, due to the system and devices involved."),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Resource"),(0,s.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://helpx.adobe.com/experience-manager/using/restful-services.html"},"Consuming RESTful APIs in AEM")),(0,s.mdx)("td",{parentName:"tr",align:null},"How to create and deploy an Adobe Experience Manager OSGi bundle that consumes data from a third-party RESTful web service.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://expleague.azureedge.net/labs/L733/index.html"},"Adobe Target Everywhere - Implement Server Side or in the IoT")),(0,s.mdx)("td",{parentName:"tr",align:null},"Adobe Summit 2019 Lab that provides hands-on experience for a React application that leverages Adobe Target server-side APIs.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://community.tealiumiq.com/t5/Universal-Data-Hub/Adobe-Target-in-a-Mobile-App-Without-the-Adobe-SDK/ta-p/26753"},"Adobe Target in a Mobile App Without the Adobe SDK")),(0,s.mdx)("td",{parentName:"tr",align:null},"This guide shows you how to set up Adobe Target in your mobile app without installing the Adobe SDK. This solution uses the Tealium SDK webview and the Remote Commands module to send and receive requests to the Adobe Visitor API (Experience Cloud) and the Adobe Target API.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://docs.adobe.com/content/help/en/target/using/implement-target/mobile-apps/mobile-how-target-works-mobile-apps.html"},"How Adobe Target Works in Mobile Apps")),(0,s.mdx)("td",{parentName:"tr",align:null},"How Target works with the Mobile SDK")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-target"},"Configuring the Target extension in Experience Platform Launch and Implementing Target APIs")),(0,s.mdx)("td",{parentName:"tr",align:null},"Steps for configuring the Target extension in Experience Platform Launch, adding the Target Extension to your app, and implementing Target APIs to request activities, prefetch offers, and Enter visual preview mode.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://www.npmjs.com/package/@adobe/target-nodejs-sdk"},"Adobe Target Node Client")),(0,s.mdx)("td",{parentName:"tr",align:null},"Open-sourced Target Node.js SDK v1.0")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://docs.adobe.com/content/help/en/target/using/implement-target/server-side/api-and-sdk-overview.html"},"Server Side overview")),(0,s.mdx)("td",{parentName:"tr",align:null},"Information about Adobe Target Server Side delivery APIs, Server Side Batch Delivery APIs, Node.js SDK, and Adobe Target Recommendations APIs.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://medium.com/adobetech/adobe-campaign-content-recommendations-in-email-b51ced771d7f"},"Adobe Campaign Content Recommendations in Email")),(0,s.mdx)("td",{parentName:"tr",align:null},"Blog that describes how to leverage content recommendations in email via Adobe Target and Adobe I/O Runtime in Adobe Campaign.")))),(0,s.mdx)("h2",{id:"managing-recommendations-setup-with-apis"},"Managing Recommendations Setup with APIs"),(0,s.mdx)("p",null,"Most of the time, recommendations are configured in the Adobe Target UI, then used or accessed via the Target APIs, for reasons such as the ones mentioned in the sections above. This UI-API coordination is common. However, sometimes users may want to perform all actions via APIs—both setup, as well as the use of results. Although much less common, users can absolutely configure, execute, ",(0,s.mdx)("em",{parentName:"p"},"and")," leverage the results of recommendations entirely using the APIs."),(0,s.mdx)("p",null,"We learned in an ",(0,s.mdx)("a",{parentName:"p",href:"manage-catalog.md"},"earlier section")," how to manage Adobe Target Recommendations entities and deliver them server-side. Similarly, Adobe I/O allows you to manage criteria, promotions, collections, and design templates without having to log in to Adobe Target. A complete list of all Recommendations APIs may be found ",(0,s.mdx)("a",{parentName:"p",href:"http://developers.adobetarget.com/api/recommendations/"},"here"),", but here is a summary for reference."),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Resource"),(0,s.mdx)("th",{parentName:"tr",align:null},"Details"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Collections"},"Collections")),(0,s.mdx)("td",{parentName:"tr",align:null},"List, create, get, edit, and delete collections.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Criteria"},"Criteria")),(0,s.mdx)("td",{parentName:"tr",align:null},"List and get criteria.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Designs"},"Designs")),(0,s.mdx)("td",{parentName:"tr",align:null},"List, create, get, edit, delete, and validate designs.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Entities"},"Entities")),(0,s.mdx)("td",{parentName:"tr",align:null},"Save, delete, and get entities.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Promotions"},"Promotions")),(0,s.mdx)("td",{parentName:"tr",align:null},"List, create, get, edit, and delete promotions.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Category-Criteria"},"Category Criteria")),(0,s.mdx)("td",{parentName:"tr",align:null},"List, create, get, edit, and delete category criteria.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Custom-Criteria"},"Custom Criteria")),(0,s.mdx)("td",{parentName:"tr",align:null},"List, create, get, edit, and delete custom criteria.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Item-Criteria"},"Item Criteria")),(0,s.mdx)("td",{parentName:"tr",align:null},"List, create, get, edit, and delete item criteria.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Popularity-Criteria"},"Popularity Criteria")),(0,s.mdx)("td",{parentName:"tr",align:null},"List, create, get, edit, and delete popularity criteria.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Profile-Attribute-Criteria"},"Profile Attribute Criteria")),(0,s.mdx)("td",{parentName:"tr",align:null},"List, create, get, edit, and delete profile attribute criteria.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Recent-Criteria"},"Recent Criteria")),(0,s.mdx)("td",{parentName:"tr",align:null},"List, create, get, edit, and delete recent criteria.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"http://developers.adobetarget.com/api/recommendations/#tag/Sequence-Criteria"},"Sequence Criteria")),(0,s.mdx)("td",{parentName:"tr",align:null},"List, create, get, edit, and delete sequence criteria.")))),(0,s.mdx)("h2",{id:"reference-documentation"},"Reference documentation"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://developers.adobetarget.com/api/#getting-started"},"Adobe Target API documentation")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://developers.adobetarget.com/api/delivery-api/"},"Adobe Target Delivery API")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://docs.adobe.com/content/help/en/target/using/recommendations/recommendations-faq/integrating-recs-email.html"},"Integrate Recommendations with email"))),(0,s.mdx)("h2",{id:"summary-and-review"},"Summary and Review"),(0,s.mdx)("p",null,"Congratulations! By finishing this tutorial, you have learned how to:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"manage-catalog.md"},"Manage your catalog using the Recommendations API")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"manage-custom-criteria.md"},"Manage custom criteria using the Recommendations API")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"fetch-recs-server-side-delivery-api.md"},"Use the Delivery API with Recommendations"))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-recs-api-fetch-recs-server-side-delivery-api-md-461c7da3a6ba37d02920.js.map