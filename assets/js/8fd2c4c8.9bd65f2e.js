"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),k=o,b=f["".concat(l,".").concat(k)]||f[k]||u[k]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="Lab: Flink Kafka Source",s={unversionedId:"processing/lab-flink-kafka-source/README",id:"processing/lab-flink-kafka-source/README",title:"Lab: Flink Kafka Source",description:"Files",source:"@site/docs/03-processing/lab-flink-kafka-source/README.md",sourceDirName:"03-processing/lab-flink-kafka-source",slug:"/processing/lab-flink-kafka-source/",permalink:"/docs/processing/lab-flink-kafka-source/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1682175507,formattedLastUpdatedAt:"Apr 22, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Flink Kafka Sink",permalink:"/docs/processing/lab-flink-kafka-sink/"},next:{title:"dbt",permalink:"/docs/processing/dbt"}},l={},c=[{value:"Files",id:"files",level:2},{value:"Notebooks",id:"notebooks",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-flink-kafka-source"},"Lab: Flink Kafka Source"),(0,o.kt)("h2",{id:"files"},"Files"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sparsh-ai/recohut/tree/main/docs/03-processing/lab-flink-kafka-source"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 [ 443]  README.md\n\u251c\u2500\u2500 [1.1K]  docker-compose.yml\n\u251c\u2500\u2500 [1.2K]  flink_kafka_consumer.py\n\u2514\u2500\u2500 [1.2K]  flink_kafka_consumer_sql.py\n\n 4.1K used in 0 directories, 4 files\n")),(0,o.kt)("h2",{id:"notebooks"},"Notebooks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nbviewer.org/github/sparsh-ai/recohut/blob/main/docs/03-processing/lab-flink-kafka-source"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/jupyter-notebook-informational?logo=jupyter",alt:"nbviewer"}))))}u.isMDXComponent=!0}}]);