(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[43084],{158645:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(935057);const a=/\/today\/(article|best|trending)\/[\w-]+\/(\d+)/,i=(e,r)=>r?e.substring(r.length).split("/")[0]:e,s=({boardUrl:e,path:r,pinId:n,pinnerUserName:s,query:o,search:c,storyPinDataId:l})=>{var d;if(!r)return"";let u="";switch(r){case"/":case"/homefeed/":return"UserHomefeedResource";case s&&`/${s}/pins/`:return"UserPinsResource";case s&&`/${s}/`:case/\/_activity\//.test(r)&&r:return"UserActivityPinsResource";case/\/_created\//.test(r)&&r:return l?"UserStoryPinsFeedResource":"UserActivityPinsResource";case/\/_community\//.test(r)&&r:return"UserDiscoveredPinsResource";case/\/_shop\//.test(r)&&r:return"StoreFrontFeedResource";case/\/_saved\//.test(r)&&r:return"BoardlessPinsResource";case s&&`/${s}/_shopping_list/`:return"ShoppingListFeedResource";case/\/visual-search\//.test(r)&&r:return"VisualLiveSearchResource";case/\/pin\//.test(r)&&r:u="/pin/";const p=i(r,u);if(n!==p)return`RelatedPinFeedResource_${p}`;break;case/\/search\//.test(r)&&r:if(c){return`SearchResource_${((0,t.mB)(c,{shouldDecode:!1}).q||"").toLowerCase()}`}if(o)return`SearchResource_${encodeURIComponent(o.q||"").toLowerCase()}`;break;case/\/categories\//.test(r)&&r:u="/categories/";return`CategoryFeedResource_${i(r,u)}`;case/\/discover\/topics\//.test(r)&&r:return"CategoryFeedResource";case/\/news_hub\//.test(r)&&r:u="/news_hub/";return`NewsHubDetailsResource_${i(r,u)}`;case/\/_tools\/more-ideas\//.test(r)&&r:return"BoardContentRecommendationResource";case/\/topics\//.test(r)&&r:u="/topics/";return`TopicFeedResource_${i(r,u)}`;case s&&`/${s}/products/`:return"StoreFrontFeedResource";case/\/source\//.test(r)&&r:u="/source/";return`DomainFeedResource_${i(r,u)}`;case/\/explore\//.test(r)&&r:u="/explore/";return`SearchResource_${i(r,u)}`;case e:case!!e&&/\/more_ideas\//.test(r)&&r:return"BoardFeedResource";case e&&r.indexOf(e)>-1&&r:return"BoardSectionPinsResource";case/\/following\//.test(r)&&r:return"FollowingFeedResource";case/\/brand_catalog\//.test(r)&&r:return"BrandCatalogFeedResource";case a.test(r)&&r:return`TodayArticleFeedResource_${(null===(d=r.match(a))||void 0===d?void 0:d[2])||"unknown"}`;case/\/today\//.test(r):return"TodayTabResource";case/\story_feed\//.test(r)&&r:if(c){const{feed_type:e,request_params:r}=(0,t.mB)(c);return`StoryFeedResource_${e}_${r}`}}return""},o=({boardUrl:e,location:r,pinId:n,pinnerUserName:t,previousHistory:a,storyPinDataId:i,trackingParams:o,trackingParamsMap:c={}})=>{if(!n||!o||!r)return;if(!c)return`${null!=o?o:""}~0`;const{pathname:l,search:d,query:u}=r,p=s({boardUrl:e,path:l,pinId:n,pinnerUserName:t,query:u,search:d,storyPinDataId:i,trackingParams:o,trackingParamsMap:c}),m=Object.keys(c);let _;if((l||"").startsWith("/pin/")){const e=m.find((e=>"PinResource"!==e));_=e?c[e]:c.PinResource}else _=c[p];let h;if(!_&&a&&a.length){const r=(e=>{let r=null==e?void 0:e.pathname;return r?(r.match(/\/search\//)&&null!=e&&e.search&&(r+=e.search),r.toLowerCase()):""})(a[a.length-1].location);h=s({boardUrl:e,path:r,pinId:n,pinnerUserName:t,query:u,search:d,storyPinDataId:i,trackingParams:o,trackingParamsMap:c}),_=c[h]}return _||(_=`${o||""}~0`),_}},691546:(e,r,n)=>{n.d(r,{Se:()=>k,iw:()=>b,gV:()=>h,G3:()=>v,Gj:()=>P,Jd:()=>_,$3:()=>g});var t=n(512703),a=n(7125),i=n(895799),s=n(162474),o=n(617518);const c=e=>"string"!=typeof e&&e?e.state:null;var l=n(383443),d=n(374264),u=n(856255),p=n(585681),m=n(977362);const _=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:r})=>!e&&(r.metaKey||r.ctrlKey),g=({location:e,pinId:r,surface:n})=>!!n&&!m.ZF.includes(n)||e.pathname.includes(r),k=(e,r)=>{var n,t;const s=Math.round(1e3*Math.random())+"",o=Math.round(1e3*Math.random())+"";a.t8((0,i.GS)(s),o);const c={token:`${s}-${o}`,url:e,...r&&!r.params?r.queryParams:{pin:null!==(n=null==r?void 0:r.params.pinId)&&void 0!==n?n:void 0,csr:null==r||!r.params.csrId||null!==(t=r.params)&&void 0!==t&&t.pinId?void 0:r.params.csrId,client_tracking_params:null==r?void 0:r.params.clientTrackingParams,aux_data:null!=r&&r.params.auxData?JSON.stringify(r.params.auxData):void 0}};return`/offsite/?${(0,l.Z)(c)}`},P=(e,r)=>{(0,t.Z)(k(e,r),!0)},b=async({clientTrackingParams:e,href:r,isMounted:n,pinId:t,spamCheckCallback:a})=>{const i=await(0,s.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:t,url:r}});if(!i.resource_response.error&&n){const e=i.resource_response.data||{},{message:r,redirect_status:n,url:t}=e;a({blocked:["blocked","suspicious","porn"].includes(n),message:r,redirectStatus:n,sanitized_url:t})}},v=({event:e,onHistoryChange:r,href:n,history:a,target:i})=>{const s=(0,o.Z)(n),l=c(n),m=(0,d.Z)(s);m===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===i?(0,t.Z)(s,"blank"===i):a&&m===p.Z.SAME_ORIGIN&&(a.push((0,u.Z)({url:s}),null!=l?l:{}),r&&r({event:e}))}},243084:(e,r,n)=>{n.d(r,{Z:()=>u,p:()=>p});var t=n(667294),a=n(616550),i=n(158645),s=n(691546),o=n(327007),c=n(617518),l=n(340289),d=n(690763);function u(e){var r,n,u;const{externalData:p,href:m,onHistoryChange:_,target:h}=e,[g,k]=(0,t.useState)(null),[P,b]=(0,t.useState)(!1),v=(0,a.useHistory)(),f=(0,a.useLocation)(),y=(0,c.Z)(m),I=(0,l.Z)({url:y}),{showWarning:S}=null!==(r=(0,d.s)())&&void 0!==r?r:{},{pin:w,surface:R}=p||{},x=w?(0,i.Z)({boardUrl:null===(n=w.board)||void 0===n?void 0:n.url,location:f,pinId:w.id,pinnerUserName:null===(u=w.pinner)||void 0===u?void 0:u.username,storyPinDataId:w.story_pin_data_id,trackingParams:w.tracking_params,trackingParamsMap:w.tracking_params_map}):null,A=(0,o.Z)();return(0,t.useEffect)((()=>(b(!0),()=>{b(!1)})),[]),(0,t.useEffect)((()=>{I&&w&&null===g&&P&&(!w.promoter||w.is_downstream_promotion)&&(0,s.$3)({location:f,pinId:w.id,surface:R})&&(0,s.iw)({clientTrackingParams:x,isMounted:P,pinId:w.id,spamCheckCallback:e=>k(e),href:y})}),[x,w,R,y,I,P,f,g]),({event:e})=>{var r;(0,s.gV)({isOffsiteUrl:I,event:e})||(e.preventDefault(),m&&(I||null!=p&&p.dangerouslyForceOffsiteUrl?A({auxData:null==p?void 0:p.auxData,clientTrackingParams:x,pin:(null==p?void 0:p.pin)&&{attributionSourceId:p.pin.attribution_source_id,campaignId:p.pin.campaign_id,isPromoted:p.pin.is_promoted,pinPromotionId:p.pin.pin_promotion_id},pinId:null==p||null===(r=p.pin)||void 0===r?void 0:r.id,queryParams:null==p?void 0:p.queryParams,showWarning:S,spamCheck:g,url:y}):(0,s.G3)({event:e,href:m,history:v,onHistoryChange:_,target:"blank"===h?"blank":null})))}}const p=({children:e,...r})=>e({handleClick:u(r)})},327007:(e,r,n)=>{n.d(r,{Z:()=>d,t:()=>l});var t=n(332507),a=n(87870),i=n(564342),s=n(545168),o=n(691546),c=n(467330);const l=()=>{const{logContextEvent:e}=(0,s.v)();return({attributionSourceId:r,auxData:n,campaignId:s,clientTrackingParams:c,href:l,isPromoted:d,pinId:u,pinPromotionId:p})=>{var m;if(!d)return!1;const _=(0,t.Z)(),h=(0,o.Se)(l,{params:{pinId:u,csrId:null,clientTrackingParams:c,auxData:n}}),g=null!==(m=null==_?void 0:_.userAgent.browserName)&&void 0!==m?m:"";if((0,i.G6)(g)){var k,P;const{group:n}=null!==(k=null==_?void 0:_.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==k?k:{},t=null!=_&&null!==(P=_.userAgent)&&void 0!==P&&P.browserVersion?_.userAgent.browserVersion:"0.0",i=parseFloat(t.split(".")[0]+"."+t.split(".")[1]);if(r&&i>=14.1&&["enabled_safari"].includes(n))return((e,r,n)=>{const t=document.createElement("a");t.setAttribute("href",r),t.setAttribute("target","_blank"),t.setAttribute("rel","noopener nofollow noreferrer"),t.style.cursor="pointer",t.style.display="block",t.setAttribute(a.$N.ATTRIBUTION_SOURCE_ID,e),t.setAttribute(a.$N.ATTRIBUTE_DESTINATION,n),t.setAttribute(a.$N.ATTRIBUTE_ON,n),t.click()})(r,h,l),e({event_type:101,clientTrackingParams:c,object_id_str:u||"",aux_data:{pin_id:u||"",click_measurement_ppid:p||"",click_measurement_campaign_id:s||"",is_pcm:!0,attribution_source_id:r,page_url:l}}),!0}else if((0,i.i7)(g)){var b,v;const{group:n}=null!==(b=null==_?void 0:_.experimentsClient.checkExperiment("m10n_event_conversion_measurement_chrome"))&&void 0!==b?b:{},t=null!=_&&null!==(v=_.userAgent)&&void 0!==v&&v.browserVersion?parseInt(_.userAgent.browserVersion.split(".")[0],10):0;if(void 0!==r&&t>=101&&["enabled"].includes(n)){const n=null!=r?r:"0";return((e,r,n)=>{const t=new URLSearchParams;t.append(a.NR.SOURCE_EVENT_ID,e),t.append(a.NR.DESTINATION,n),t.append(a.NR.PRIORITY,a.NR.CLICK_PRIORITY),t.append(a.NR.EXPIRY,a.uV),t.append(a.NR.SOURCE_EVENT_TYPE,a.bC);const i=document.createElement("a");i.setAttribute("href",r),i.setAttribute("target","_blank"),i.setAttribute("rel","noopener nofollow noreferrer"),i.style.cursor="pointer",i.style.display="block",i.setAttribute(a.NR.SOURCE,"/attribution_source/?"+t.toString()),i.click()})(n,h,l),e({event_type:101,clientTrackingParams:c,object_id_str:u||"",aux_data:{pin_id:u||"",click_measurement_ppid:p||"",click_measurement_campaign_id:s||"",is_arapi:!0,attribution_source_id:n,page_url:l}}),!0}}return!1}},d=e=>{const r=l();return({auxData:n,clientTrackingParams:t,pin:a,pinId:i,queryParams:s,showWarning:l,spamCheck:d,url:u})=>{"undefined"!=typeof window&&window.Windows?(0,c.Z)(u,{clientTrackingParams:t,pinId:i,hasPin:!!a,auxData:n}):a||null!=e&&e.isFromClickthroughLink?null!=d&&d.blocked?null==l||l(d):a&&r({attributionSourceId:a.attributionSourceId,auxData:n,campaignId:a.campaignId?String(a.campaignId):null,clientTrackingParams:t,href:u,isPromoted:a.isPromoted,pinId:i,pinPromotionId:a.pinPromotionId?String(a.pinPromotionId):null})||(0,o.Gj)(u,{params:{pinId:i,clientTrackingParams:t,auxData:n}}):(0,o.Gj)(u,s?{queryParams:s}:{params:{pinId:i}})}}},617518:(e,r,n)=>{n.d(r,{Z:()=>t});const t=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},856255:(e,r,n)=>{n.d(r,{Z:()=>i});const t=(e,r)=>0===e.lastIndexOf(r,0);var a=n(87819);const i=({url:e})=>{const r=(0,a.Z)("/");return t(e,r)?e.substr(r.length-1):e}},467330:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(162474),a=n(691546);function i(e,r){const{auxData:n,clientTrackingParams:i,hasPin:s,pinId:o}=r||{};(0,t.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:s?i:void 0,pin_id:o,url:e,aux_data:JSON.stringify(n)}}).then((r=>{if(r&&r.resource_response&&!r.resource_response.error){const{resource_response:e}=r,{redirect_status:n,url:t}=e.data;if(!["blocked","suspicious","porn"].includes(n)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(t);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,a.Gj)(e,{params:s?{pinId:o,clientTrackingParams:i,auxData:n}:{pinId:o}})}))}},977362:(e,r,n)=>{n.d(r,{UP:()=>o,Wv:()=>a,ZF:()=>t,zI:()=>i,zl:()=>s});const t=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],a=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],i=[...a,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],s=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],o=["BaseBoardPinGrid"]},690763:(e,r,n)=>{n.d(r,{Z:()=>g,s:()=>h});var t=n(667294),a=n(946689),i=n(608575),s=n(883119),o=n(816987),c=n(434012),l=n(376410),d=n(785893);const u=()=>{var e;const r=(0,c.ZP)(),{dismissWarning:n}=null!==(e=h())&&void 0!==e?e:{};return(0,d.jsx)(s.xu,{paddingX:3,children:(0,d.jsx)(s.zx,{fullWidth:!0,color:"red",onClick:n,text:r.bt("OK", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},p=()=>{const e=(0,c.ZP)();return(0,d.jsx)(s.xv,{inline:!0,weight:"bold",children:(0,d.jsx)(s.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e.bt("Más información", "Learn more", "Link text leading to policy website", undefined, true)})})},m=({message:e,sanitized_url:r})=>{var n;const t=(0,c.ZP)(),{dismissWarning:a}=null!==(n=h())&&void 0!==n?n:{};return(0,d.jsx)(o.ZP,{accessibilityModalLabel:t.bt("Bloqueamos este enlace", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),onDismiss:a,heading:t.bt("¡Atención!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),footer:(0,d.jsx)(u,{}),children:(0,d.jsxs)(s.xu,{padding:6,children:[(0,d.jsx)(s.xv,{children:(0,l.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,d.jsx)(p,{},"learnMoreLink")})}),(0,d.jsxs)(s.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,d.jsx)(s.xu,{marginEnd:3,children:(0,d.jsx)(s.JO,{accessibilityLabel:t.bt("Dirección de enlace bloqueada", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,d.jsx)(s.xv,{inline:!0,lineClamp:1,weight:"bold",children:i.parse(r).hostname})]})]})})},{Provider:_,useMaybeHook:h}=(0,a.Z)("SpammyClickthrough");function g({children:e}){const[r,n]=(0,t.useState)(null),a=(0,t.useCallback)((()=>{n(null)}),[n]),i=(0,t.useCallback)((e=>{n(e)}),[n]),s=(0,t.useMemo)((()=>({dismissWarning:a,showWarning:i})),[a,i]);return(0,d.jsxs)(_,{value:s,children:[r&&(0,d.jsx)(m,{...r}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/43084.es_419-fade91db807b4e90.mjs.map