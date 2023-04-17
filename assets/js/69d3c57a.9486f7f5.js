"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||s;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={},a="Lab: Step Function Ecommerce SQL",i={unversionedId:"orchestration/stepfunctions/lab-stepfunction-ecomm-sqs/README",id:"orchestration/stepfunctions/lab-stepfunction-ecomm-sqs/README",title:"Lab: Step Function Ecommerce SQL",description:"Objective: Orchestrate Queue-based Microservices",source:"@site/docs/06-orchestration/stepfunctions/lab-stepfunction-ecomm-sqs/README.md",sourceDirName:"06-orchestration/stepfunctions/lab-stepfunction-ecomm-sqs",slug:"/orchestration/stepfunctions/lab-stepfunction-ecomm-sqs/",permalink:"/docs/orchestration/stepfunctions/lab-stepfunction-ecomm-sqs/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681732641,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Step Function Athena SNS",permalink:"/docs/orchestration/stepfunctions/lab-stepfunction-athena-sns/"},next:{title:"Flask",permalink:"/docs/visualization/flask/"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-step-function-ecommerce-sql"},"Lab: Step Function Ecommerce SQL"),(0,o.kt)("p",null,"Objective: Orchestrate Queue-based Microservices"),(0,o.kt)("p",null,"In this lab, you will learn how to use AWS Step Functions and Amazon SQS to design and run a serverless workflow that orchestrates a message queue-based microservice. Step Functions is a serverless orchestration service that lets you easily coordinate multiple AWS services into flexible workflows that are easy to debug and easy to change. Amazon SQS is the AWS service that allows application components to communicate in the cloud."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214565074-373805b7-af41-4686-94c5-0b11be69afc2.png",alt:null})),(0,o.kt)("p",null,"This lab will simulate inventory verification requests from incoming orders in an e-commerce application as part of an order processing workflow. Step Functions will send inventory verification requests to a queue on SQS. An AWS Lambda function will act as your inventory microservice that uses a queue to buffer requests. When it retrieves a request, it will check inventory and then return the result to Step Functions. When a task in Step Functions is configured this way, it is called a callback pattern. Callback patterns allow you to integrate asynchronous tasks in your workflow, such as the inventory verification microservice of this lab."))}p.isMDXComponent=!0}}]);