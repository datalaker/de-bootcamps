"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={},o="Disaster Response Pipeline",i={unversionedId:"capstones/disaster-response/README",id:"capstones/disaster-response/README",title:"Disaster Response Pipeline",description:"wall",source:"@site/docs/12-capstones/disaster-response/README.md",sourceDirName:"12-capstones/disaster-response",slug:"/capstones/disaster-response/",permalink:"/docs/capstones/disaster-response/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"DigitalSkola",permalink:"/docs/capstones/digitalskola/"},next:{title:"Funflix",permalink:"/docs/capstones/funflix/"}},l={},p=[{value:"Dashboard",id:"dashboard",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"disaster-response-pipeline"},"Disaster Response Pipeline"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/211199160-a8e841d9-cb03-4fa0-ace8-453495d7c8a3.png",alt:"wall"})),(0,n.kt)("p",null,"There were 323 recorded natural disasters worldwide in 2022. Although most people only hear the Amber Alerts go off \ud83d\udd0a, there are disaster response teams in place, and they need to respond fast! I think we can agree that that's a difficult job. Now, imagine how difficult that must be with a vast amount of data coming through several channels, and one has to decipher which data is actionable quickly. That job just became more difficult."),(0,n.kt)("p",null,"Creating solutions that help disaster response teams make the right decisions fast would prove immensely helpful to our society in such events. Therefore, introductory projects such as this one can be scaled to near perfection (as they may be with Palantir's many decision-making offerings). Open-source connoisseurs can contribute to similar projects and help protect people worldwide, one disaster at a time."),(0,n.kt)("p",null,"Our goal is to build a web app to emergency worker that help classify instantaeously new disaster messages in several categories. With such a classification, the emergency worker can send the messages to the appropriate disaster relief agency. The web app is based on model trained on the analysis of older disaster data provided from Appen. An API will allow the emergency worker to interface with the web app by inserting new messsage, get the related categories and get some vizualizations of the database content."),(0,n.kt)("p",null,"We will:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Perform ETL and save the data in SQLite database"),(0,n.kt)("li",{parentName:"ol"},"Train model using Scikit-learn library"),(0,n.kt)("li",{parentName:"ol"},"Create a Flask-based App and Serve the application")),(0,n.kt)("h2",{id:"dashboard"},"Dashboard"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/211199156-a0fdfea1-5af2-4678-9e47-f6d2f9744496.png",alt:"dash"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/215279205-02e0673c-842d-41b9-932b-bb3727cacda0.png",alt:"dash-response"})))}d.isMDXComponent=!0}}]);