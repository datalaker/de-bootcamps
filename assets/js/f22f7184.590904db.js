"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),y=i,m=c["".concat(s,".").concat(y)]||c[y]||b[y]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},o="Rules of Probability",l={unversionedId:"mathematics/probability/rules-of-probability",id:"mathematics/probability/rules-of-probability",title:"Rules of Probability",description:"Probability of Mutually Exclusive Events",source:"@site/docs/mathematics/probability/rules-of-probability.md",sourceDirName:"mathematics/probability",slug:"/mathematics/probability/rules-of-probability",permalink:"/docs/mathematics/probability/rules-of-probability",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Probability Distributions",permalink:"/docs/mathematics/probability/probability-distributions"},next:{title:"Sampling",permalink:"/docs/mathematics/statistics/sampling"}},s={},p=[{value:"Probability of Mutually Exclusive Events",id:"probability-of-mutually-exclusive-events",level:2},{value:"Probability of Mutually Nonexclusive Events",id:"probability-of-mutually-nonexclusive-events",level:2},{value:"Probability of Mutually Independent Events",id:"probability-of-mutually-independent-events",level:2},{value:"The Probability of the Complement",id:"the-probability-of-the-complement",level:2},{value:"Conditional Probability",id:"conditional-probability",level:2}],u={toc:p};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rules-of-probability"},"Rules of Probability"),(0,i.kt)("h2",{id:"probability-of-mutually-exclusive-events"},"Probability of Mutually Exclusive Events"),(0,i.kt)("p",null,"Example: What is the probability of a dice showing 1 or 3?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"P(A) = 1/ 6 and P(3) = 1/6\n\nP(1 or 3) = P(1) + P(3) = 1/6 + 1/6 = 2/6 = 1/3\n")),(0,i.kt)("h2",{id:"probability-of-mutually-nonexclusive-events"},"Probability of Mutually Nonexclusive Events"),(0,i.kt)("p",null,"Example: An urn contains two red, four green, five blue, and three yellow marbles. If a single random marble is chosen from the box, what is the probability that it is a red or green marble?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"P(red or gree) = P(red) + p(green) \u2013 P(red)*P(green)\n\n= 2/14 + 4/14 \u2013 2/14*4/14 = 0.14 + 0.28 \u2013 0.04 = 0.38\n")),(0,i.kt)("h2",{id:"probability-of-mutually-independent-events"},"Probability of Mutually Independent Events"),(0,i.kt)("p",null,"The probability of two mutually independent events happening at the same time is ",(0,i.kt)("inlineCode",{parentName:"p"},"P(X and Y) = P(X) \\* P(Y)"),"."),(0,i.kt)("h2",{id:"the-probability-of-the-complement"},"The Probability of the Complement"),(0,i.kt)("p",null,"The probability of event A is P(A) and the probability of its complement, an event not occurring, is ",(0,i.kt)("inlineCode",{parentName:"p"},"P(Ac) = 1 \u2013 P(A)"),"."),(0,i.kt)("h2",{id:"conditional-probability"},"Conditional Probability"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"In a group of 100 electronics shopping customers, 40 bought TV (event A), 30 purchased sound systems (event B), and 20 purchased a TV system and a sound system. If a customer chosen at random bought a TV system, what is the probability they also bought sound system?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 1: P(A) is given in the question as 40 percent, or 0.4."),(0,i.kt)("li",{parentName:"ul"},"Step 2: P(B) is given that is 0.3."),(0,i.kt)("li",{parentName:"ul"},"Step 3: P(A\u2229B), this is the intersection of A and B, purchasing both A and B is 0.2."),(0,i.kt)("li",{parentName:"ul"},"Step 4: Now use the formula to calculate the conditional probability.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"P(B|A) = P(A\u2229B) / P(A) = 0.2 / 0.4 = 0.5.\n")),(0,i.kt)("p",null,"The probability that a customer bought a sound system, given that they purchased a TV system, is 50 percent."))}b.isMDXComponent=!0}}]);