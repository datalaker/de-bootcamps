"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87857],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},53497:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},l="Hotel Reservations Data Modeling with Cassandra",s={unversionedId:"data-modeling/lab-cassandra-hotel-reservations/README",id:"data-modeling/lab-cassandra-hotel-reservations/README",title:"Hotel Reservations Data Modeling with Cassandra",description:"Learning CQL Query Clauses",source:"@site/docs/04-data-modeling/lab-cassandra-hotel-reservations/README.md",sourceDirName:"04-data-modeling/lab-cassandra-hotel-reservations",slug:"/data-modeling/lab-cassandra-hotel-reservations/",permalink:"/docs/data-modeling/lab-cassandra-hotel-reservations/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Create a Data Model for an Email System",permalink:"/docs/data-modeling/lab-cassandra-email-data-model/"},next:{title:"Create a Data Model for Investment Accounts or Portfolios",permalink:"/docs/data-modeling/lab-cassandra-investment-data-model/"}},i={},d=[{value:"Learning CQL Query Clauses",id:"learning-cql-query-clauses",level:2}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hotel-reservations-data-modeling-with-cassandra"},"Hotel Reservations Data Modeling with Cassandra"),(0,r.kt)("h2",{id:"learning-cql-query-clauses"},"Learning CQL Query Clauses"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Load the hotels schema used in these examples\n# replace with the path to the actual file\nSOURCE '~/cassandra-guide/resources/hotel.cql';\nUSE hotel;\n\n# Load test data for the table containing available room data\nCOPY available_rooms_by_hotel_date FROM '~/cassandra-guide/resources/available_rooms.csv' WITH HEADER=true;\n\n#\n# WHERE clause examples\n#\n\n# Search for hotel rooms for a specific hotel and date range:\nSELECT * FROM available_rooms_by_hotel_date WHERE hotel_id='AZ123' and date>'2016-01-05' and date<'2016-01-12';\n\n# Why doesn't this query work?\nSELECT * FROM available_rooms_by_hotel_date WHERE hotel_id='AZ123' and room_number=101;\n\n# Look at the table again\nDESCRIBE TABLE available_rooms_by_hotel_date;\n\n# We can force it to work, but why is this not a good practice?\nSELECT * FROM available_rooms_by_hotel_date WHERE date='2016-01-25' ALLOW FILTERING;\n\n#\n# IN clause example\n#\n\n# Use the IN clause to test equality with multiple possible values for a column\n# Find inventory on two dates a week apart\nSELECT * FROM available_rooms_by_hotel_date WHERE hotel_id='AZ123' AND date IN ('2016-01-05', '2016-01-12');\n\n#\n# SORT clause example\n#\n\n# Override the default sort order on the table\nSELECT * FROM available_rooms_by_hotel_date\n  WHERE hotel_id='AZ123' AND date>'2016-01-05' AND date<'2016-01-12'\n  ORDER BY date DESC;\n\n# Bonus: Assuming you're running a multi-node cluster, try running some the queries above with tracing on\n# to see the interactions between nodes\nTRACING ON;\n")))}u.isMDXComponent=!0}}]);