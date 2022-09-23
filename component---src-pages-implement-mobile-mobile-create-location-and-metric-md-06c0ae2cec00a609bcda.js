"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[293],{69513:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var n,r=a(87462),m=a(63366),d=(a(15007),a(64983)),i=a(91515),l=["components"],o={},p=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),s={_frontmatter:o},c=i.Z;function u(e){var t=e.components,a=(0,m.Z)(e,l);return(0,d.mdx)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"ios---create-a-target-location-and-success-metric"},"iOS - create a Target location and success metric"),(0,d.mdx)("p",null,"To use Target in your mobile app, create a location and success metric."),(0,d.mdx)("p",null,"This section includes sample code that can be used as a template for your app. The samples in this section contain code for iOS. The same patterns apply to Android. Android-specific syntax can be found in the ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/mobile-services/android/target-android/target-main.html"},"Android SDK 4.x for Experience Cloud Solutions")," guide."),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"See the ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/mobile-services/ios/target-ios/c-target-methods.html"},"Mobile documentation")," for a list of all the available Target methods."),(0,d.mdx)("p",null,"To create a Target location in your app and make a request, there are two primary methods:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"targetCreateRequestWithName")," "),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"targetLoadRequest"))),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Create a Target location."),(0,d.mdx)("p",{parentName:"li"},"Here is a sample call to create a request:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre"},'// make your request \nADBTargetLocationRequest *myRequest = [ADBMobile targetCreateRequestWithName:@"heroBanner" \n                                                 defaultContent:@"default.png" \n                                                 parameters:nil];\n')),(0,d.mdx)("table",{parentName:"li"},(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"ADBTargetLocationRequest *myRequest")),(0,d.mdx)("td",{parentName:"tr",align:null},"Replace ",(0,d.mdx)("inlineCode",{parentName:"td"},"myRequest")," with the name of your ",(0,d.mdx)("inlineCode",{parentName:"td"},"targetLocation")," in the app.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'targetCreateRequestWithName:@"heroBanner"')),(0,d.mdx)("td",{parentName:"tr",align:null},"Replace ",(0,d.mdx)("inlineCode",{parentName:"td"},"heroBanner")," with the name of your ",(0,d.mdx)("inlineCode",{parentName:"td"},"targetLocation")," in Target. This is the same as the mbox name. This hero banner appears in the Target interface.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'defaultContent:@"default.png"')),(0,d.mdx)("td",{parentName:"tr",align:null},"Replace ",(0,d.mdx)("inlineCode",{parentName:"td"},"default.png")," with the value the app uses if Target doesn't respond.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"parameters:nil")),(0,d.mdx)("td",{parentName:"tr",align:null},"Specify profile or mbox parameters. See more information in the 'Passing custom data' section.")))),(0,d.mdx)("p",{parentName:"li"},"Here is a sample call to load the request:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre"},"// load your request \n[ADBMobile targetLoadRequest:myRequest callback:^(NSString *content) { \n                                     // do something with content \n                                     heroImage.image = [UIImage imageNamed:content]; \n}];\n")),(0,d.mdx)("table",{parentName:"li"},(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"targetLoadRequest:myRequest")),(0,d.mdx)("td",{parentName:"tr",align:null},"Replace ",(0,d.mdx)("inlineCode",{parentName:"td"},"myRequest")," with the name of your ",(0,d.mdx)("inlineCode",{parentName:"td"},"targetLocation")," in the app.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"NSString *content")),(0,d.mdx)("td",{parentName:"tr",align:null},"Replace content with the actual content coming back from Adobe. The string can be XML, JSON or a plain string. Use this section of the code to define variables, set image paths, view controller flows, transaction points, or anything else you want to do. Target will return the content entered in the UI in the exact same format.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"heroImage.image = [UIImage imageNamed:content];")),(0,d.mdx)("td",{parentName:"tr",align:null},"For example: Take content and set the path for a hero image."))))),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Create a success metric."),(0,d.mdx)("p",{parentName:"li"},"The method ",(0,d.mdx)("inlineCode",{parentName:"p"},"targetCreateOrderConfirmRequestWithName")," can be used to track a conversion/success metric in your app."),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre"},'ADBTargetLocationRequest *req = [ADBMobile targetCreateOrderConfirmRequestWithName: "orderConfirm" \n                                           orderId: orderId \n                                           orderTotal: @"39.95" \n                                           productPurchasedId: _galleryItem.title \n                                           parameters: nil]; \n[ADBMobile targetLoadRequest: req callback: nil];\n')),(0,d.mdx)("table",{parentName:"li"},(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"orderId")),(0,d.mdx)("td",{parentName:"tr",align:null},"Replace with a dynamic variable representing a unique order ID.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'@"39.95"')),(0,d.mdx)("td",{parentName:"tr",align:null},"Replace with a dynamic variable representing a unique order total.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"_galleryItem.title")),(0,d.mdx)("td",{parentName:"tr",align:null},"Replace with a dynamic variable representing a comma-delimited list of products purchased.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"parameters: nil")),(0,d.mdx)("td",{parentName:"tr",align:null},"Optional dictionary of additional parameters."))))),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Build the app."),(0,d.mdx)("p",{parentName:"li"},"Step Result After you have successfully created a target location and tagged a success metric, create an A/B test. The activity can be created using the form-based experience composer."))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-mobile-mobile-create-location-and-metric-md-06c0ae2cec00a609bcda.js.map