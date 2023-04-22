"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18062],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},s="Lab: Churn Analytics Demo with dbt Snowpark Python models",i={unversionedId:"processing/lab-snowpark-churnpark/README",id:"processing/lab-snowpark-churnpark/README",title:"Lab: Churn Analytics Demo with dbt Snowpark Python models",description:"PPT//docs.google.com/presentation/d/1IJSeE96bze7DECuDYqsTVv6FaOcNcJ5tTiCWKEkuQQ/edit#slide=id.g158d486fe9e2_12",source:"@site/docs/03-processing/lab-snowpark-churnpark/README.md",sourceDirName:"03-processing/lab-snowpark-churnpark",slug:"/processing/lab-snowpark-churnpark/",permalink:"/docs/processing/lab-snowpark-churnpark/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1682175507,formattedLastUpdatedAt:"Apr 22, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Snowpark",permalink:"/docs/processing/snowpark"},next:{title:"Lab: Modeling with dbt and Snowpark",permalink:"/docs/processing/lab-snowpark-dbtsnowpy/"}},l={},p=[{value:"What is the Problem We Are Addressing?",id:"what-is-the-problem-we-are-addressing",level:2},{value:"What Does this Demo Aim to Solve?",id:"what-does-this-demo-aim-to-solve",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Files",id:"files",level:2},{value:"Notebooks",id:"notebooks",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-churn-analytics-demo-with-dbt-snowpark-python-models"},"Lab: Churn Analytics Demo with dbt Snowpark Python models"),(0,o.kt)("p",null,"PPT: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1IJSeE96bze7DECuDYqsTVv6FaOcNcJ5tTiCWKEku_QQ/edit#slide=id.g158d486fe9e_2_12"},"https://docs.google.com/presentation/d/1IJSeE96bze7DECuDYqsTVv6FaOcNcJ5tTiCWKEku_QQ/edit#slide=id.g158d486fe9e_2_12")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214368208-6c5cdfa2-6f59-4b0a-9a69-8e9e30775c4d.svg",alt:null})),(0,o.kt)("h2",{id:"what-is-the-problem-we-are-addressing"},"What is the Problem We Are Addressing?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Over-the-top services or OTT is a category of media solutions that are in the form of apps that are distributed via mobile, tablet or TV (e.g., Netflix). The lines that traditionally separated players in the media segment are rapidly blurring. Streaming services (OTT most prominently), TV companies, and social networks are now competing over the same audiences. Radio stations, podcast companies, and streaming services are competing to provide radio and podcast content."),(0,o.kt)("li",{parentName:"ul"},"As consumers get overwhelmed by the number of options, they will look to purge their subscriptions. Increased competition means media companies have to focus on content, user experience and loyalty, to create a more direct and lasting relationship with consumers.")),(0,o.kt)("h2",{id:"what-does-this-demo-aim-to-solve"},"What Does this Demo Aim to Solve?"),(0,o.kt)("p",null,"Based on customer subscription pattern, determine customer churn."),(0,o.kt)("p",null,"This demo is aimed at building dbt ",(0,o.kt)("a",{parentName:"p",href:"https://deploy-preview-1754--docs-getdbt-com.netlify.app/docs/building-a-dbt-project/building-models/python-models"},"python models")," with Snowflake."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214368165-e9a96e9a-ee13-4d7a-825f-e8fc9fd66c97.svg",alt:null})),(0,o.kt)("h2",{id:"files"},"Files"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sparsh-ai/recohut/tree/main/docs/03-processing/lab-snowpark-churnpark"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 [1.9K]  README.md\n\u251c\u2500\u2500 [1.4K]  dbt_project.yml\n\u251c\u2500\u2500 [ 19K]  models\n\u2502   \u251c\u2500\u2500 [3.7K]  intermediate\n\u2502   \u2502   \u2514\u2500\u2500 [3.7K]  core\n\u2502   \u2502       \u251c\u2500\u2500 [ 743]  _int_core__models.yml\n\u2502   \u2502       \u251c\u2500\u2500 [ 656]  int_user_attributes.sql\n\u2502   \u2502       \u2514\u2500\u2500 [2.1K]  int_user_subscription_agg.py\n\u2502   \u251c\u2500\u2500 [3.8K]  marts\n\u2502   \u2502   \u2514\u2500\u2500 [3.7K]  predict\n\u2502   \u2502       \u251c\u2500\u2500 [ 122]  predict_models.yml\n\u2502   \u2502       \u2514\u2500\u2500 [3.4K]  user_churn_predict_xgboost.py\n\u2502   \u251c\u2500\u2500 [8.6K]  ml\n\u2502   \u2502   \u2514\u2500\u2500 [8.5K]  features\n\u2502   \u2502       \u251c\u2500\u2500 [ 420]  _int_features__models.yml\n\u2502   \u2502       \u251c\u2500\u2500 [3.8K]  int_train_test.py\n\u2502   \u2502       \u251c\u2500\u2500 [3.2K]  int_user_encoded.py\n\u2502   \u2502       \u2514\u2500\u2500 [ 907]  int_users_and_subscriptions.py\n\u2502   \u2514\u2500\u2500 [2.8K]  staging\n\u2502       \u251c\u2500\u2500 [1.8K]  merkle\n\u2502       \u2502   \u251c\u2500\u2500 [ 612]  _merkle__models.yml\n\u2502       \u2502   \u251c\u2500\u2500 [ 216]  _merkle__sources.yml\n\u2502       \u2502   \u2514\u2500\u2500 [ 886]  stg_merkle__datasources.sql\n\u2502       \u2514\u2500\u2500 [ 865]  ott\n\u2502           \u251c\u2500\u2500 [ 493]  _ott__models.yml\n\u2502           \u2514\u2500\u2500 [ 244]  _ott__sources.yml\n\u251c\u2500\u2500 [  60]  packages.yml\n\u2514\u2500\u2500 [ 278]  setup\n    \u2514\u2500\u2500 [ 182]  setup.sql\n\n  23K used in 11 directories, 18 files\n")),(0,o.kt)("h2",{id:"notebooks"},"Notebooks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nbviewer.org/github/sparsh-ai/recohut/blob/main/docs/03-processing/lab-snowpark-churnpark"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/jupyter-notebook-informational?logo=jupyter",alt:"nbviewer"}))))}d.isMDXComponent=!0}}]);