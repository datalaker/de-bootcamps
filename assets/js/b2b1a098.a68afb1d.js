"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21864],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return t?a.createElement(m,l(l({ref:n},d),{},{components:t})):a.createElement(m,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={},l="Install Anaconda",i={unversionedId:"foundations/developer/install-anaconda",id:"foundations/developer/install-anaconda",title:"Install Anaconda",description:"1. Download the file from https://www.anaconda.com/products/distribution and install it",source:"@site/docs/01-foundations/developer/install-anaconda.md",sourceDirName:"01-foundations/developer",slug:"/foundations/developer/install-anaconda",permalink:"/docs/foundations/developer/install-anaconda",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681451444,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Developer Essentials",permalink:"/docs/category/developer-essentials"},next:{title:"Install Jupyter Notebook",permalink:"/docs/foundations/developer/install-jupyter"}},c={},s=[],d={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-anaconda"},"Install Anaconda"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the file from ",(0,r.kt)("a",{parentName:"li",href:"https://www.anaconda.com/products/distribution"},"https://www.anaconda.com/products/distribution")," and install it"),(0,r.kt)("li",{parentName:"ol"},"Create Virtual Environment by executing this command in the terminal: ",(0,r.kt)("inlineCode",{parentName:"li"},"conda create -n env anaconda"),". This will create a viirtual environment (venv) named ",(0,r.kt)("inlineCode",{parentName:"li"},"env")," and install all the basic packages in that environment.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-makefile"},"install:\n    wget https://repo.anaconda.com/archive/Anaconda3-2022.10-Linux-x86_64.sh\n    bash Anaconda3-2022.10-Linux-x86_64.sh\n    source ~/.bashrc\n    conda create -n env python=3.9.13 anaconda\n    conda activate env\n")))}p.isMDXComponent=!0}}]);