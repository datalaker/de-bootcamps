"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18062],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="Churn Analytics Demo with dbt Snowpark Python models",s={unversionedId:"processing/lab-snowpark-churnpark/README",id:"processing/lab-snowpark-churnpark/README",title:"Churn Analytics Demo with dbt Snowpark Python models",description:"PPT//docs.google.com/presentation/d/1IJSeE96bze7DECuDYqsTVv6FaOcNcJ5tTiCWKEkuQQ/edit#slide=id.g158d486fe9e2_12",source:"@site/docs/03-processing/lab-snowpark-churnpark/README.md",sourceDirName:"03-processing/lab-snowpark-churnpark",slug:"/processing/lab-snowpark-churnpark/",permalink:"/docs/processing/lab-snowpark-churnpark/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},c={},l=[{value:"What is the Problem We Are Addressing?",id:"what-is-the-problem-we-are-addressing",level:2},{value:"What Does this Demo Aim to Solve?",id:"what-does-this-demo-aim-to-solve",level:2},{value:"Architecture",id:"architecture",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"churn-analytics-demo-with-dbt-snowpark-python-models"},"Churn Analytics Demo with dbt Snowpark Python models"),(0,o.kt)("p",null,"PPT: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1IJSeE96bze7DECuDYqsTVv6FaOcNcJ5tTiCWKEku_QQ/edit#slide=id.g158d486fe9e_2_12"},"https://docs.google.com/presentation/d/1IJSeE96bze7DECuDYqsTVv6FaOcNcJ5tTiCWKEku_QQ/edit#slide=id.g158d486fe9e_2_12")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214368208-6c5cdfa2-6f59-4b0a-9a69-8e9e30775c4d.svg",alt:null})),(0,o.kt)("h2",{id:"what-is-the-problem-we-are-addressing"},"What is the Problem We Are Addressing?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Over-the-top services or OTT is a category of media solutions that are in the form of apps that are distributed via mobile, tablet or TV (e.g., Netflix). The lines that traditionally separated players in the media segment are rapidly blurring. Streaming services (OTT most prominently), TV companies, and social networks are now competing over the same audiences. Radio stations, podcast companies, and streaming services are competing to provide radio and podcast content."),(0,o.kt)("li",{parentName:"ul"},"As consumers get overwhelmed by the number of options, they will look to purge their subscriptions. Increased competition means media companies have to focus on content, user experience and loyalty, to create a more direct and lasting relationship with consumers.")),(0,o.kt)("h2",{id:"what-does-this-demo-aim-to-solve"},"What Does this Demo Aim to Solve?"),(0,o.kt)("p",null,"Based on customer subscription pattern, determine customer churn."),(0,o.kt)("p",null,"This demo is aimed at building dbt ",(0,o.kt)("a",{parentName:"p",href:"https://deploy-preview-1754--docs-getdbt-com.netlify.app/docs/building-a-dbt-project/building-models/python-models"},"python models")," with Snowflake."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214368165-e9a96e9a-ee13-4d7a-825f-e8fc9fd66c97.svg",alt:null})))}d.isMDXComponent=!0}}]);