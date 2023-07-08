"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},c="Lab: Confluent Kafka with Python",i={unversionedId:"processing/lab-confluent-python/README",id:"processing/lab-confluent-python/README",title:"Lab: Confluent Kafka with Python",description:"Produce messages to and consume messages from a Kafka cluster using Confluent Python Client for Apache Kafka.",source:"@site/docs/03-processing/lab-confluent-python/README.md",sourceDirName:"03-processing/lab-confluent-python",slug:"/processing/lab-confluent-python/",permalink:"/docs/processing/lab-confluent-python/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681732641,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Getting started with Kafka and Python",permalink:"/docs/processing/lab-kafka-python/"},next:{title:"Lab: Kafka and CDC",permalink:"/docs/processing/lab-confluent-kafka-faker/"}},l={},s=[{value:"Documentation",id:"documentation",level:2},{value:"Files",id:"files",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-confluent-kafka-with-python"},"Lab: Confluent Kafka with Python"),(0,o.kt)("p",null,"Produce messages to and consume messages from a Kafka cluster using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/confluentinc/confluent-kafka-python"},"Confluent Python Client for Apache Kafka"),"."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"You can find the documentation and instructions for running this Python example at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/tutorials/examples/clients/docs/python.html?utm_source=github&utm_medium=demo&utm_campaign=ch.examples_type.community_content.clients-ccloud"},"https://docs.confluent.io/platform/current/tutorials/examples/clients/docs/python.html")),(0,o.kt)("h2",{id:"files"},"Files"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sparsh-ai/recohut/tree/main/docs/03-processing/lab-confluent-python/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 [ 125]  Dockerfile\n\u251c\u2500\u2500 [ 582]  README.md\n\u251c\u2500\u2500 [5.8K]  ccloud_lib.py\n\u251c\u2500\u2500 [  79]  confluent-examples.sh\n\u251c\u2500\u2500 [2.6K]  consumer.py\n\u251c\u2500\u2500 [3.9K]  consumer_ccsr.py\n\u251c\u2500\u2500 [ 15K]  notebook.ipynb\n\u251c\u2500\u2500 [2.5K]  producer.py\n\u251c\u2500\u2500 [3.8K]  producer_ccsr.py\n\u251c\u2500\u2500 [ 502]  python.config\n\u2514\u2500\u2500 [  60]  requirements.txt\n\n  35K used in 0 directories, 11 files\n")))}u.isMDXComponent=!0}}]);