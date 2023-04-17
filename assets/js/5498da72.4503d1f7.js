"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="The Rosenblatt Perceptron",o={unversionedId:"datascience/deep-learning/perceptron",id:"datascience/deep-learning/perceptron",title:"The Rosenblatt Perceptron",description:"The perceptron is an artificial neuron, that is, a model of a biological neuron.",source:"@site/docs/10-datascience/deep-learning/perceptron.md",sourceDirName:"10-datascience/deep-learning",slug:"/datascience/deep-learning/perceptron",permalink:"/docs/datascience/deep-learning/perceptron",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Deep Learning Basics",permalink:"/docs/datascience/deep-learning/deep-learning-basics"},next:{title:"MLOps",permalink:"/docs/mlops/"}},p={},s=[{value:"Code snippet",id:"code-snippet",level:2},{value:"Example of a Two-Input Perceptron",id:"example-of-a-two-input-perceptron",level:2},{value:"Perceptron and the NAND Gate",id:"perceptron-and-the-nand-gate",level:2},{value:"Perceptron Learning Algorithm",id:"perceptron-learning-algorithm",level:2},{value:"Limitation of Perceptron",id:"limitation-of-perceptron",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-rosenblatt-perceptron"},"The Rosenblatt Perceptron"),(0,r.kt)("p",null,"The perceptron is an artificial neuron, that is, a model of a biological neuron."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/228531087-492b9509-3168-4bb5-a82a-9dbdcf25eddc.jpeg",alt:"pg30_Image_6"})),(0,r.kt)("p",null,"The neuron receives stimuli on the dendrites, and in cases of sufficient stimuli, the neuron fires (also known as getting activated or excited) and outputs stimulus on its axon, which is transmitted to other neurons that have synaptic connections to the excited neuron. Synaptic signals can be excitatory or inhibitory; that is, some signals can prevent a neuron from firing instead of causing it to fire."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"perceptron")," is a type of ",(0,r.kt)("strong",{parentName:"p"},"artificial neuron"),". It sums up the inputs to compute an intermediate value ",(0,r.kt)("em",{parentName:"p"},"z"),", which is fed to an ",(0,r.kt)("strong",{parentName:"p"},"activation function"),". The perceptron uses the ",(0,r.kt)("strong",{parentName:"p"},"sign function")," as an activation function, but ",(0,r.kt)("strong",{parentName:"p"},"other artificial neurons use other functions"),"."),(0,r.kt)("p",null,"The perceptron consists of a computational unit, a number of inputs, each with an associated input weight, and a single output:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/228531930-d901d5a1-a63e-41e8-8757-74e6147c8f95.jpeg",alt:"pg31_Image_7"})),(0,r.kt)("h2",{id:"code-snippet"},"Code snippet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# First element in vector x must be 1.\n# Length of w and x must be n+1 for neuron with n inputs.\ndef compute_output(w, x):\n    z = 0.0\n    for i in range(len(w)):\n        z += x[i] * w[i] # Compute sum of weighted inputs\n    if z < 0: # Apply sign function\n        return -1\n    else:\n        return 1\n")),(0,r.kt)("h2",{id:"example-of-a-two-input-perceptron"},"Example of a Two-Input Perceptron"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/228533452-755225d2-dab5-4e6b-b835-3d23d80ce92d.jpeg",alt:"pg34_Image_11"})),(0,r.kt)("h2",{id:"perceptron-and-the-nand-gate"},"Perceptron and the NAND Gate"),(0,r.kt)("p",null,"Behavior of a Perceptron with Two Inputs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"X0"),(0,r.kt)("th",{parentName:"tr",align:null},"X1"),(0,r.kt)("th",{parentName:"tr",align:null},"X2"),(0,r.kt)("th",{parentName:"tr",align:null},"W0","*","X0"),(0,r.kt)("th",{parentName:"tr",align:null},"W1","*","X1"),(0,r.kt)("th",{parentName:"tr",align:null},"W2","*","X2"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"Z")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"Y")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u22121<br>(False)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u22121<br>(False)")),(0,r.kt)("td",{parentName:"tr",align:null},"0.9"),(0,r.kt)("td",{parentName:"tr",align:null},"0.6"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1<br>(True)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1<br>(True)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u22121<br>(False)")),(0,r.kt)("td",{parentName:"tr",align:null},"0.9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u22120.6"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"0.8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1<br>(True)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u22121<br>(False)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1<br>(True)")),(0,r.kt)("td",{parentName:"tr",align:null},"0.9"),(0,r.kt)("td",{parentName:"tr",align:null},"0.6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u22120.5"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1<br>(True)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1<br>(True)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1<br>(True)")),(0,r.kt)("td",{parentName:"tr",align:null},"0.9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u22120.6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u22120.5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u22120.2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u22121<br>(False)"))))),(0,r.kt)("p",null,"The table shows the inputs and the outputs, the intermediate values after applying the weights, as well as the sum before applying the activation function. Note what happens if we interpret the inputs and outputs as Boolean values, where \u20131 represents ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," and +1 represents ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". The perceptron with these specific weights implements a ",(0,r.kt)("inlineCode",{parentName:"p"},"NAND")," gate! Paraphrasing Nielsen, this is comforting because we know that by combining multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"NAND")," gates, we can build any logical function, but it is also kind of disappointing because we thought that neural networks were going to be something much more exciting than just Boolean logic (Nielsen, 2015)."),(0,r.kt)("h2",{id:"perceptron-learning-algorithm"},"Perceptron Learning Algorithm"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/gist/sparsh-ai/2f9831067b06b1adfa49455f893b2211/perceptron-learning.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=for-the-badge&message=Google+Colab&color=222222&logo=Google+Colab&logoColor=F9AB00&label=",alt:"Google Colab"}))),(0,r.kt)("h2",{id:"limitation-of-perceptron"},"Limitation of Perceptron"),(0,r.kt)("p",null,"Perceptron can learn straight line functions (e.g. NAND) but unable to learn curved line functions (e.g. XOR). One suggested solution for this is to use multi-level perceptron, which is close to a deep neural network because of its hidden-layer approach."))}c.isMDXComponent=!0}}]);