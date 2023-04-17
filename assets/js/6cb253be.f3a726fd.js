"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34299],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>h});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||n;return t?o.createElement(m,i(i({ref:a},p),{},{components:t})):o.createElement(m,i({ref:a},p))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<n;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40671:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const n={},i="Origin of Spark",s={unversionedId:"foundations/basics/spark-origin",id:"foundations/basics/spark-origin",title:"Origin of Spark",description:"Big Data and Distributed Computing at Google",source:"@site/docs/01-foundations/basics/spark-origin.md",sourceDirName:"01-foundations/basics",slug:"/foundations/basics/spark-origin",permalink:"/docs/foundations/basics/spark-origin",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681212836,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Apache Spark Basics",permalink:"/docs/foundations/basics/spark-basics"},next:{title:"Hadoop Basics",permalink:"/docs/foundations/basics/hadoop-basics"}},l={},d=[{value:"Big Data and Distributed Computing at Google",id:"big-data-and-distributed-computing-at-google",level:3},{value:"Hadoop at Yahoo!",id:"hadoop-at-yahoo",level:3},{value:"Spark\u2019s Early Years at AMPLab",id:"sparks-early-years-at-amplab",level:3},{value:"Hadoop to Spark",id:"hadoop-to-spark",level:2}],p={toc:d};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"origin-of-spark"},"Origin of Spark"),(0,r.kt)("iframe",{width:"1440",height:"595",src:"https://www.youtube.com/embed/1BGFzDj60SY",title:"Apache Spark using Python for beginners | PySpark Course for Beginners | Bigdata History and Primer",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h3",{id:"big-data-and-distributed-computing-at-google"},"Big Data and Distributed Computing at Google"),(0,r.kt)("p",null,"When we think of scale, we can\u2019t help but think of the ability of Google\u2019s search engine to index and search the world\u2019s data on the internet at lightning speed. The name Google is synonymous with scale. In fact, Google is a deliberate misspelling of the mathematical term googol: that\u2019s 1 plus 100 zeros!"),(0,r.kt)("p",null,"Neither traditional storage systems such as relational database management systems (RDBMSs) nor imperative ways of programming were able to handle the scale at which Google wanted to build and search the internet\u2019s indexed documents. The resulting need for new approaches led to the creation of the Google File System (GFS), MapReduce (MR), and Bigtable."),(0,r.kt)("p",null,"While GFS provided a fault-tolerant and distributed filesystem across many commodity hardware servers in a cluster farm, Bigtable offered scalable storage of structured data across GFS. MR introduced a new parallel programming paradigm, based on functional programming, for large-scale processing of data distributed over GFS and Bigtable."),(0,r.kt)("p",null,"In essence, your MR applications interact with the MapReduce system that sends computation code (map and reduce functions) to where the data resides, favoring data locality and cluster rack affinity rather than bringing data to your application."),(0,r.kt)("p",null,"The workers in the cluster aggregate and reduce the intermediate computations and produce a final appended output from the reduce function, which is then written to a distributed storage where it is accessible to your application. This approach significantly reduces network traffic and keeps most of the input/output (I/O) local to disk rather than distributing it over the network."),(0,r.kt)("p",null,"Most of the work Google did was proprietary, but the ideas expressed in the aforementioned three papers spurred innovative ideas elsewhere in the open source community\u2014especially at Yahoo!, which was dealing with similar big data challenges of scale for its search engine."),(0,r.kt)("h3",{id:"hadoop-at-yahoo"},"Hadoop at Yahoo!"),(0,r.kt)("p",null,"The computational challenges and solutions expressed in Google\u2019s GFS paper provided a blueprint for the Hadoop File System (HDFS), including the MapReduce implementation as a framework for distributed computing. Donated to the Apache Software Foundation (ASF), a vendor-neutral non-profit organization, in April 2006, it became part of the Apache Hadoop framework of related modules: Hadoop Common, MapReduce, HDFS, and Apache Hadoop YARN."),(0,r.kt)("p",null,"Although Apache Hadoop had garnered widespread adoption outside Yahoo!, inspiring a large open source community of contributors and two open source\u2013based commercial companies (Cloudera and Hortonworks, now merged), the MapReduce framework on HDFS had a few shortcomings."),(0,r.kt)("p",null,"First, it was hard to manage and administer, with cumbersome operational complexity. Second, its general batch-processing MapReduce API was verbose and required a lot of boilerplate setup code, with brittle fault tolerance. Third, with large batches of data jobs with many pairs of MR tasks, each pair\u2019s intermediate computed result is written to the local disk for the subsequent stage of its operation. This repeated performance of disk I/O took its toll: large MR jobs could run for hours on end, or even days."),(0,r.kt)("p",null,"And finally, even though Hadoop MR was conducive to large-scale jobs for general batch processing, it fell short for combining other workloads such as machine learning, streaming, or interactive SQL-like queries."),(0,r.kt)("p",null,"To handle these new workloads, engineers developed bespoke systems (Apache Hive, Apache Storm, Apache Impala, Apache Giraph, Apache Drill, Apache Mahout, etc.), each with their own APIs and cluster configurations, further adding to the operational complexity of Hadoop and the steep learning curve for developers."),(0,r.kt)("p",null,"The question then became (bearing in mind Alan Kay\u2019s adage, \u201cSimple things should be simple, complex things should be possible\u201d), was there a way to make Hadoop and MR simpler and faster?"),(0,r.kt)("h3",{id:"sparks-early-years-at-amplab"},"Spark\u2019s Early Years at AMPLab"),(0,r.kt)("p",null,"Researchers at UC Berkeley who had previously worked on Hadoop MapReduce took on this challenge with a project they called Spark. They acknowledged that MR was inefficient (or intractable) for interactive or iterative computing jobs and a complex framework to learn, so from the onset they embraced the idea of making Spark simpler, faster, and easier. This endeavor started in 2009 at the RAD Lab, which later became the AMPLab (and now is known as the RISELab)."),(0,r.kt)("p",null,"Early papers published on Spark demonstrated that it was 10 to 20 times faster than Hadoop MapReduce for certain jobs. Today, it\u2019s many orders of magnitude faster. The central thrust of the Spark project was to bring in ideas borrowed from Hadoop MapReduce, but to enhance the system: make it highly fault tolerant and embarrassingly parallel, support in-memory storage for intermediate results between iterative and interactive map and reduce computations, offer easy and composable APIs in multiple languages as a programming model, and support other workloads in a unified manner. We\u2019ll come back to this idea of unification shortly, as it\u2019s an important theme in Spark."),(0,r.kt)("p",null,"By 2013 Spark had gained widespread use, and some of its original creators and researchers\u2014Matei Zaharia, Ali Ghodsi, Reynold Xin, Patrick Wendell, Ion Stoica, and Andy Konwinski\u2014donated the Spark project to the ASF and formed a company called Databricks."),(0,r.kt)("p",null,"Databricks and the community of open source developers worked to release Apache Spark 1.0 in May 2014, under the governance of the ASF. This first major release established the momentum for frequent future releases and contributions of notable features to Apache Spark from Databricks and over 100 commercial vendors."),(0,r.kt)("h2",{id:"hadoop-to-spark"},"Hadoop to Spark"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/230762109-8b7f68db-a88e-4521-a93d-b42d8e17a78a.svg",alt:"spark drawio"})))}c.isMDXComponent=!0}}]);