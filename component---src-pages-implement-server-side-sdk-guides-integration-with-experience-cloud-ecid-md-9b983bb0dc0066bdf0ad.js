"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[964],{3575:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return l}});var r=n(87462),s=n(63366),o=(n(15007),n(64983)),i=n(91515),a=["components"],c={},d={_frontmatter:c},p=i.Z;function l(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.mdx)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"experience-cloud-id-ecid-service"},"Experience Cloud ID (ECID) Service"),(0,o.mdx)("h2",{id:"experience-cloud-id-ecid-integration"},"Experience Cloud ID (ECID) Integration"),(0,o.mdx)("p",null,"Although using the Target SDKs for fetching content from Target can be powerful, the added value of using the Experience Cloud ID (ECID) for user tracking extends beyond Adobe Target. The ECID enables you to leverage Adobe Experience Cloud products and features, such as A4T reporting and Adobe Audience Manager (AAM) segments."),(0,o.mdx)("p",null,"The ECID is generated and maintained by ",(0,o.mdx)("inlineCode",{parentName:"p"},"visitor.js"),", which maintains its own state. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"visitor.js")," file creates a cookie named ",(0,o.mdx)("inlineCode",{parentName:"p"},"AMCV_{organizationId}"),", which is used by Target SDKs for ECID integration. When the Target response is returned, you need to update the Visitor instance on the client side with ",(0,o.mdx)("inlineCode",{parentName:"p"},"thevisitorState")," returned by the Target SDKs."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>ECID (Visitor API) Integration Sample</title>\n  <script src="VisitorAPI.js"><\/script>\n  <script>\n    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});\n  <\/script>\n</head>\n<body>\n  <pre>Sample content</pre>\n</body>\n</html>\n')),(0,o.mdx)("h3",{id:"nodejs"},"Node.js"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'const express = require("express");\nconst cookieParser = require("cookie-parser");\nconst TargetClient = require("@adobe/target-nodejs-sdk");\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\nconst TEMPLATE = `\n<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>ECID (Visitor API) Integration Sample</title>\n  <script src="VisitorAPI.js"><\/script>\n  <script>\n    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});\n  <\/script>\n</head>\n<body>\n  <pre>${content}</pre>\n</body>\n</html>\n`;\n\nconst app = express();\nconst targetClient = TargetClient.create(CONFIG);\n\napp.use(cookieParser());\n// We assume that VisitorAPI.js is stored in "public" folder\napp.use(express.static(__dirname + "/public"));\n\nfunction saveCookie(res, cookie) {\n  if (!cookie) {\n    return;\n  }\n\n  res.cookie(cookie.name, cookie.value, {maxAge: cookie.maxAge * 1000});\n}\n\nconst getResponseHeaders = () => ({\n  "Content-Type": "text/html",\n  "Expires": new Date().toUTCString()\n});\n\nfunction sendSuccessResponse(res, response) {\n  res.set(getResponseHeaders());\n\n  const result = TEMPLATE\n  .replace("${organizationId}", CONFIG.organizationId)\n  .replace("${visitorState}", JSON.stringify(response.visitorState))\n  .replace("${content}", response);\n\n  saveCookie(res, response.targetCookie);\n\n  res.status(200).send(result);\n}\n\nfunction sendErrorResponse(res, error) {\n  res.set(getResponseHeaders());\n  res.status(500).send(error);\n}\n\napp.get("/abtest", async (req, res) => {\n  const visitorCookie = req.cookies[TargetClient.getVisitorCookieName(CONFIG.organizationId)];\n  const targetCookie = req.cookies[TargetClient.TargetCookieName];\n  const request = {\n      execute: {\n        mboxes: [{\n          address: { url: req.headers.host + req.originalUrl },\n          name: "a1-serverside-ab"\n        }]\n      }};\n')),(0,o.mdx)("h3",{id:"java"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'  console.log("Request", request);\n\n  try {\n      const response = await targetClient.getOffers({ request, visitorCookie, targetCookie });\n      sendSuccessResponse(res, response);\n    } catch (error) {\n      sendErrorResponse(res, error);\n    }\n});\n\napp.listen(3000, function () {\n  console.log("Listening on port 3000 and watching!");\n});\n@Controller\npublic class TargetControllerSample {\n\n  @Autowired\n  private TargetClient targetClient;\n\n  @GetMapping("/")\n  public String targetMcid(Model model, HttpServletRequest request, HttpServletResponse response) {\n    Context context = getContext(request);\n    TargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()\n        .context(context)\n        .prefetch(getPrefetchRequest())\n        .cookies(getTargetCookies(request.getCookies()))\n        .build();\n\n    TargetDeliveryResponse targetResponse = targetClient.getOffers(targetDeliveryRequest);\n    model.addAttribute("visitorState", targetResponse.getVisitorState());\n    model.addAttribute("organizationId", "0DD934B85278256B0A490D44@AdobeOrg");\n    setCookies(targetResponse.getCookies(), response);\n    return "targetMcid";\n  }\n}\n')),(0,o.mdx)("h2",{id:"ecid-with-customer-id-integration"},"ECID with Customer ID Integration"),(0,o.mdx)("p",null,"In order to track visitor user accounts and login status details, ",(0,o.mdx)("inlineCode",{parentName:"p"},"customerIds")," may be passed via Target SDKs."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>ECID (Visitor API) Integration Sample</title>\n  <script src="VisitorAPI.js"><\/script>\n  <script>\n    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});\n  <\/script>\n</head>\n<body>\n  <pre>Sample content</pre>\n</body>\n</html>\n')),(0,o.mdx)("h3",{id:"nodejs-1"},"Node.js"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'const express = require("express");\nconst cookieParser = require("cookie-parser");\nconst TargetClient = require("@adobe/target-nodejs-sdk");\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\nconst TEMPLATE = `\n<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>ECID (Visitor API) with Customer IDs Integration Sample</title>\n  <script src="VisitorAPI.js"><\/script>\n  <script>\n    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});\n  <\/script>\n</head>\n<body>\n  <pre>${content}</pre>\n</body>\n</html>\n`;\n\nconst app = express();\nconst targetClient = TargetClient.create(CONFIG);\n\napp.use(cookieParser());\n// We assume that VisitorAPI.js is stored in "public" folder\napp.use(express.static(__dirname + "/public"));\n\nfunction saveCookie(res, cookie) {\n  if (!cookie) {\n    return;\n  }\n\n  res.cookie(cookie.name, cookie.value, {maxAge: cookie.maxAge * 1000});\n}\n\nconst getResponseHeaders = () => ({\n  "Content-Type": "text/html",\n  "Expires": new Date().toUTCString()\n});\n\nfunction sendSuccessResponse(res, response) {\n  res.set(getResponseHeaders());\n\n  const result = TEMPLATE\n  .replace("${organizationId}", CONFIG.organizationId)\n  .replace("${visitorState}", JSON.stringify(response.visitorState))\n  .replace("${content}", response);\n\n  saveCookie(res, response.targetCookie);\n\n  res.status(200).send(result);\n}\n\nfunction sendErrorResponse(res, error) {\n  res.set(getResponseHeaders());\n  res.status(500).send(error);\n}\n\napp.get("/abtest", async (req, res) => {\n  const visitorCookie = req.cookies[TargetClient.getVisitorCookieName(CONFIG.organizationId)];\n  const targetCookie = req.cookies[TargetClient.TargetCookieName];\n  const customerIds = {\n      "userid": {\n        "id": "67312378756723456",\n        "authState": TargetClient.AuthState.AUTHENTICATED\n      }\n    };\n  const request = {\n    execute: {\n      mboxes: [{\n        address: { url: req.headers.host + req.originalUrl },\n        name: "a1-serverside-ab"\n      }]\n    }};\n\n  try {\n    const response = await targetClient.getOffers({ request, visitorCookie, targetCookie, customerIds });\n    sendSuccessResponse(res, response);\n  } catch (error) {\n    sendErrorResponse(res, error);\n  }\n});\n\napp.listen(3000, function () {\n  console.log("Listening on port 3000 and watching!");\n});\n')),(0,o.mdx)("h3",{id:"java-1"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'@Controller\npublic class TargetControllerSample {\n\n  @Autowired\n  private TargetClient targetJavaClient;\n\n  @GetMapping("/targetMcid")\n  public String targetMcid(Model model, HttpServletRequest request, HttpServletResponse response) {\n    Context context = getContext(request);\n    Map<String, CustomerState> customerIds = new HashMap<>();\n    customerIds.put("userid", CustomerState.authenticated("67312378756723456"));\n    customerIds.put("puuid", CustomerState.unknown("550e8400-e29b-41d4-a716-446655440000"));\n    TargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()\n       .context(context)\n       .prefetch(getPrefetchRequest())\n       .cookies(getTargetCookies(request.getCookies()))\n       .customerIds(customerIds)\n       .build();\n\n    TargetDeliveryResponse targetResponse = targetJavaClient.getOffers(targetDeliveryRequest);\n    model.addAttribute("visitorState", targetResponse.getVisitorState());\n    model.addAttribute("organizationId", "0DD934B85278256B0A490D44@AdobeOrg");\n    setCookies(targetResponse.getCookies(), response);\n    return "targetMcid";\n  }\n}\n')),(0,o.mdx)("h2",{id:"ecid-and-analytics-integration"},"ECID and Analytics Integration"),(0,o.mdx)("p",null,"To get the most out of the Target SDKs, and to use the powerful analytics capabilities provided by Adobe Analytics, you can use integrations across ECID, Analytics, and Target."),(0,o.mdx)("p",null,"Using integrations across ECID, Analytics, and Target lets you:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Use segments from Adobe Audience Manager (AAM)"),(0,o.mdx)("li",{parentName:"ul"},"Customize the user experience based on the content retrieved from Target"),(0,o.mdx)("li",{parentName:"ul"},"Ensure that all events and success metrics are collected in Analytics"),(0,o.mdx)("li",{parentName:"ul"},"Use Analytics' powerful queries and benefit from its awesome report visualizations")),(0,o.mdx)("p",null,"Integrations across ECID, Analytics, and Target do not require any special handling for analytics on the server side. Instead, once you have the ECID integrated, add ",(0,o.mdx)("inlineCode",{parentName:"p"},"AppMeasurement.js")," (Analytics library) on the client side. Analytics then uses the Visitor instance to synchronize with Target."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>ECID and Analytics integration Sample</title>\n  <script src="VisitorAPI.js"><\/script>\n  <script>\n    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});\n  <\/script>\n</head>\n<body>\n  <p>Sample content</p>\n  <script src="AppMeasurement.js"><\/script>\n  <script>var s_code=s.t();if(s_code)document.write(s_code);<\/script>\n</body>\n</html>\n')),(0,o.mdx)("h3",{id:"nodejs-2"},"Node.js"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'const express = require("express");\nconst cookieParser = require("cookie-parser");\nconst TargetClient = require("@adobe/target-nodejs-sdk");\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\nconst TEMPLATE = `\n<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>ECID and Analytics integration Sample</title>\n  <script src="VisitorAPI.js"><\/script>\n  <script>\n    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});\n  <\/script>\n</head>\n<body>\n  <p>${content}</p>\n  <script src="AppMeasurement.js"><\/script>\n  <script>var s_code=s.t();if(s_code)document.write(s_code);<\/script>\n</body>\n</html>\n`;\n\nconst app = express();\nconst targetClient = TargetClient.create(CONFIG);\n\napp.use(cookieParser());\n// We assume that VisitorAPI.js and AppMeasurement.js are stored in "public" directory\napp.use(express.static(__dirname + "/public"));\n\nfunction saveCookie(res, cookie) {\n  if (!cookie) {\n    return;\n  }\n\n  res.cookie(cookie.name, cookie.value, {maxAge: cookie.maxAge * 1000});\n}\n\nconst getResponseHeaders = () => ({\n  "Content-Type": "text/html",\n  "Expires": new Date().toUTCString()\n});\n\nfunction sendSuccessResponse(res, response) {\n  res.set(getResponseHeaders());\n\n  const result = TEMPLATE\n  .replace("${organizationId}", CONFIG.organizationId)\n  .replace("${visitorState}", JSON.stringify(response.visitorState))\n  .replace("${content}", response);\n\n  saveCookie(res, response.targetCookie);\n\n  res.status(200).send(result);\n}\n\nfunction sendErrorResponse(res, error) {\n  res.set(getResponseHeaders());\n\n  res.status(500).send(error);\n}\n\napp.get("/abtest", async (req, res) => {\n  const visitorCookie = req.cookies[TargetClient.getVisitorCookieName(CONFIG.organizationId)];\n  const targetCookie = req.cookies[TargetClient.TargetCookieName];\n  const request = {\n      execute: {\n        mboxes: [{\n          address: { url: req.headers.host + req.originalUrl },\n          name: "a1-serverside-ab"\n        }]\n      }};\n\n    try {\n      const response = await targetClient.getOffers({ request, visitorCookie, targetCookie });\n      sendSuccessResponse(res, response);\n    } catch (error) {\n      sendErrorResponse(res, error);\n    }\n});\n\napp.listen(3000, function () {\n  console.log("Listening on port 3000 and watching!");\n});\n')),(0,o.mdx)("h3",{id:"java-2"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'@Controller\npublic class TargetControllerSample {\n\n    @Autowired\n    private TargetClient targetJavaClient;\n\n    @GetMapping("/targetAnalytics")\n    public String targetMcid(Model model, HttpServletRequest request, HttpServletResponse response) {\n        Context context = getContext(request);\n        Map<String, CustomerState> customerIds = new HashMap<>();\n        customerIds.put("userid", CustomerState.authenticated("67312378756723456"));\n        customerIds.put("puuid", CustomerState.unknown("550e8400-e29b-41d4-a716-446655440000"));\n        TargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()\n                .context(context)\n                .prefetch(getPrefetchRequest())\n                .cookies(getTargetCookies(request.getCookies()))\n                .customerIds(customerIds)\n                .trackingServer("imsbrims.sc.omtrds.net")\n                .build();\n\n        TargetDeliveryResponse targetResponse = targetJavaClient.getOffers(targetDeliveryRequest);\n        model.addAttribute("visitorState", targetResponse.getVisitorState());\n        model.addAttribute("organizationId", "0DD934B85278256B0A490D44@AdobeOrg");\n        setCookies(targetResponse.getCookies(), response);\n        return "targetAnalytics";\n    }\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-sdk-guides-integration-with-experience-cloud-ecid-md-9b983bb0dc0066bdf0ad.js.map