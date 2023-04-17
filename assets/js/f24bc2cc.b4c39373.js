"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,c(c({ref:t},p),{},{components:n})):a.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},c="Data Contract",i={unversionedId:"foundations/basics/data-contract",id:"foundations/basics/data-contract",title:"Data Contract",description:"Example",source:"@site/docs/01-foundations/basics/data-contract.md",sourceDirName:"01-foundations/basics",slug:"/foundations/basics/data-contract",permalink:"/docs/foundations/basics/data-contract",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681212836,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Batch vs Incremental Data Processing",permalink:"/docs/foundations/basics/batch-vs-incremental"},next:{title:"Data Governance",permalink:"/docs/foundations/basics/data-governance"}},s={},l=[{value:"Example",id:"example",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-contract"},"Data Contract"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"}," \u2014 -\ndata_product: customer_orders\nname: Customer Orders\ndescription: A stream of all Customer Orders\nplatform: Kafka\nuri: <link to data product>\nroles: viewer # list of roles/ IAM policies that have access to the Data Product\nschema: <link to schema>\nowner: devops_team@enterprise.com\ncost_centre: cost_centre_a\nversion: 0.0.1\ndocumentation: <link to documentation>\nlineage:\n \u2014 data_product_a\n \u2014 data_product_b\nlineage_specification: <link to lineage definition> # e.g. https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.md\nservice_level_objective: tier_1\nservice_level_definition: <link to definition> # maybe superfluous\nrelated_data_products:\n \u2014 customer\n \u2014 product_details\npii: yes\ndomain: customer\ntags:\n \u2014 tag_a\n \u2014 tag_b\nlife_cycle: generally_available # as opposed to beta, end of life, deprecated, etc.\ndevelopment_version: <link> # a version consumers can test against with mock data\n")))}d.isMDXComponent=!0}}]);