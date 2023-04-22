"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return a?i.createElement(b,o(o({ref:t},d),{},{components:a})):i.createElement(b,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},51048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const s={},o="Lab: Building an ELT Pipeline with dbt and Amazon Redshift on TICKIT data",r={unversionedId:"processing/lab-dbt-tickit/README",id:"processing/lab-dbt-tickit/README",title:"Lab: Building an ELT Pipeline with dbt and Amazon Redshift on TICKIT data",description:"Objective",source:"@site/docs/03-processing/lab-dbt-tickit/README.md",sourceDirName:"03-processing/lab-dbt-tickit",slug:"/processing/lab-dbt-tickit/",permalink:"/docs/processing/lab-dbt-tickit/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1682175507,formattedLastUpdatedAt:"Apr 22, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: dbt BigQuery on Stack Exchange data",permalink:"/docs/processing/lab-dbt-stackexchnge/"},next:{title:"Lab: dbt Snowflake on TPCH data",permalink:"/docs/processing/lab-dbt-tpch/"}},l={},c=[{value:"Objective",id:"objective",level:2},{value:"Business Problem",id:"business-problem",level:2},{value:"Solution Architecture",id:"solution-architecture",level:2},{value:"Activity 1: Amazon Redshift Serverless",id:"activity-1-amazon-redshift-serverless",level:2},{value:"Activity 2: Data Ingestion",id:"activity-2-data-ingestion",level:2},{value:"Activity 3: Setup dbt",id:"activity-3-setup-dbt",level:2},{value:"Activity 4: Setup base layer",id:"activity-4-setup-base-layer",level:2},{value:"Activity 5: Create models",id:"activity-5-create-models",level:2},{value:"Activity 6: Create macros",id:"activity-6-create-macros",level:2},{value:"Activity 7: Data Masking",id:"activity-7-data-masking",level:2},{value:"Activity 8: Access Control Management with dbt macros",id:"activity-8-access-control-management-with-dbt-macros",level:2},{value:"Activity 9: dbt hooks",id:"activity-9-dbt-hooks",level:2},{value:"Activity 10: Create seeds",id:"activity-10-create-seeds",level:2},{value:"Activity 11: Create documentations",id:"activity-11-create-documentations",level:2},{value:"Activity 12: Materialized View",id:"activity-12-materialized-view",level:2},{value:"Project outputs",id:"project-outputs",level:2},{value:"Docs",id:"docs",level:3},{value:"Dag",id:"dag",level:3},{value:"Database",id:"database",level:3},{value:"Files",id:"files",level:2},{value:"Notebooks",id:"notebooks",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lab-building-an-elt-pipeline-with-dbt-and-amazon-redshift-on-tickit-data"},"Lab: Building an ELT Pipeline with dbt and Amazon Redshift on TICKIT data"),(0,n.kt)("h2",{id:"objective"},"Objective"),(0,n.kt)("p",null,"Building an ELT Pipeline with dbt and Amazon Redshift on TICKIT data"),(0,n.kt)("h2",{id:"business-problem"},"Business Problem"),(0,n.kt)("p",null,"A fictional company 'Recohut' is looking to leverage dbt on their existing data warehouse in Amazon Redshift. They need your help in establishing the dbt models and pipelines in their warehouse."),(0,n.kt)("h2",{id:"solution-architecture"},"Solution Architecture"),(0,n.kt)("p",null,"In this project, you will:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install dbt CLI"),(0,n.kt)("li",{parentName:"ol"},"Use dbt dbt-labs/codegen package and Python script to automate creation of a base layer"),(0,n.kt)("li",{parentName:"ol"},"Use dbt models to maintain data transformations with referencing capabilities"),(0,n.kt)("li",{parentName:"ol"},"Use dbt macros to maintain common logic as functions and to administer user creation and grants"),(0,n.kt)("li",{parentName:"ol"},"Use dbt hooks to automate continuous execution of grants"),(0,n.kt)("li",{parentName:"ol"},"Use dbt seeds to manage manual files"),(0,n.kt)("li",{parentName:"ol"},"Use dbt docs to generate documentation with visualization"),(0,n.kt)("li",{parentName:"ol"},"Use dbt experimental package explore materialization of materialize views")),(0,n.kt)("h2",{id:"activity-1-amazon-redshift-serverless"},"Activity 1: Amazon Redshift Serverless"),(0,n.kt)("p",null,"In this activity, we are going to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create Amazon Redshift Serverless Cluster on AWS"),(0,n.kt)("li",{parentName:"ol"},"Connect to the Cluster from our local computer using Python"),(0,n.kt)("li",{parentName:"ol"},"Use AWS Secret Manager to store and retrieve our Warehouse credentials")),(0,n.kt)("h2",{id:"activity-2-data-ingestion"},"Activity 2: Data Ingestion"),(0,n.kt)("p",null,"In this activity, we are going to ingest the TICKIT dataset into the Redshift warehouse"),(0,n.kt)("h2",{id:"activity-3-setup-dbt"},"Activity 3: Setup dbt"),(0,n.kt)("p",null,"In this activity, we will install dbt in our system. We will then setup the dbt project."),(0,n.kt)("h2",{id:"activity-4-setup-base-layer"},"Activity 4: Setup base layer"),(0,n.kt)("p",null,"In this activity, you will setup a base layer for your models to reference. What is a base layer and what are models? Models are SQL Select statements that represents your data transformation logic including usage of case statements and joins. Base layer falls under the category of models and represents existing objects (tables and views) in your Amazon Redshift cluster."),(0,n.kt)("p",null,"In addition, depending on the nature of your dbt project, a base layer can be made up of different objects. For instance, a data engineer's base layer likely relates to tables containing raw data while a data analyst's base layer likely relates to tables containing cleaned data."),(0,n.kt)("h2",{id:"activity-5-create-models"},"Activity 5: Create models"),(0,n.kt)("p",null,"To explore dbt's ability for objects to be referenced by other objects, in this activity, you will simulate a Finance deparment that maintains two models where the second model references the first model. To reference means to reuse and not have to duplicate code."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Model 1 - Quarterly Total Sales By Event"),(0,n.kt)("li",{parentName:"ul"},"Model 2 - Quarterly Top Events By Sales (references Model 1 to rank and filter for top 3 events by sales for each quarter)")),(0,n.kt)("h2",{id:"activity-6-create-macros"},"Activity 6: Create macros"),(0,n.kt)("p",null,"In this activity, you will use macros to create a piece of reusable data transformation logic and also to manage users and grants. Macros are a great way in dbt to create reusable pieces of SQL codes like a function in Python."),(0,n.kt)("h2",{id:"activity-7-data-masking"},"Activity 7: Data Masking"),(0,n.kt)("p",null,"In this activity, you will simulate a Technology department with one model that contains data masking logic."),(0,n.kt)("h2",{id:"activity-8-access-control-management-with-dbt-macros"},"Activity 8: Access Control Management with dbt macros"),(0,n.kt)("p",null,"Macros can be used to send queries to Amazon Redshift. In this activity, you will use macros to manage users and grants. Similar to the Python script earlier, you can modify the macros created in this activity to better suit your needs beyond the scope of this workshop. For example, you might want to include a new macro to manage Role-based access control (RBAC) in Amazon Redshift."),(0,n.kt)("h2",{id:"activity-9-dbt-hooks"},"Activity 9: dbt hooks"),(0,n.kt)("p",null,"As models are added or updated, you will constantly need to grant access to new views and regrant access to existing views. Regranting access to an existing view is required as dbt updates by dropping existing view and creating a new view."),(0,n.kt)("p",null,"This introduces the operational challenge of you having to remember to run macro macro_manage_users_grants. However the process of running macro macro_manage_users_grants can be automated by hooks in dbt."),(0,n.kt)("h2",{id:"activity-10-create-seeds"},"Activity 10: Create seeds"),(0,n.kt)("p",null,"Seeds are a convenient way in dbt for you to manage manual files. A common use case for manual files is to introduce data mappings. Manual files allows data mappings to be easily maintained and reused as compared to the usage of case statements in SQL which requires code changes when data mappings are changed."),(0,n.kt)("p",null,"In this activity, you will simulate a Marketing department that maintains a custom data mapping csv that a model uses."),(0,n.kt)("h2",{id:"activity-11-create-documentations"},"Activity 11: Create documentations"),(0,n.kt)("p",null,"The ability for objects to reference other objects improves code reusability but can result in widespread negative impact when an erroneous change is introduced to an object that is referenced by a large number of objects. dbt provides you with an interface to visualize all models and its dependencies on other models which is useful for impact analysis."),(0,n.kt)("h2",{id:"activity-12-materialized-view"},"Activity 12: Materialized View"),(0,n.kt)("p",null,"Materialized view stores precomputed results to reduce processing time for complex queries involving multi-table joins and aggregations."),(0,n.kt)("p",null,"In this activity, you will simulate an Experimental department that is exploring a dbt experimental feature."),(0,n.kt)("h2",{id:"project-outputs"},"Project outputs"),(0,n.kt)("h3",{id:"docs"},"Docs"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214304361-8dd06672-faad-43cd-b844-3a1b38dcc876.png",alt:null})),(0,n.kt)("h3",{id:"dag"},"Dag"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214304345-b5a29b42-2d57-48bd-8a2e-2ce886d33de0.png",alt:null})),(0,n.kt)("h3",{id:"database"},"Database"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214304319-ffe03556-37d7-49c2-8111-01a8380707ee.png",alt:null})),(0,n.kt)("h2",{id:"files"},"Files"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/sparsh-ai/recohut/tree/main/docs/03-processing/lab-dbt-tickit"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 [ 40K]  01-sa-main.ipynb\n\u251c\u2500\u2500 [5.7K]  README.md\n\u251c\u2500\u2500 [ 41K]  cfn\n\u2502   \u2514\u2500\u2500 [ 40K]  dbt-redshift.json\n\u251c\u2500\u2500 [1.9K]  dbt_project.yml\n\u251c\u2500\u2500 [4.0K]  generate_base_tables.py\n\u251c\u2500\u2500 [8.4K]  macros\n\u2502   \u251c\u2500\u2500 [3.1K]  macro_hello_world.sql\n\u2502   \u251c\u2500\u2500 [3.9K]  macro_manage_access.sql\n\u2502   \u251c\u2500\u2500 [ 803]  macro_overwrite_for_mv.sql\n\u2502   \u2514\u2500\u2500 [ 421]  macro_pii_masking.sql\n\u251c\u2500\u2500 [4.9K]  models\n\u2502   \u251c\u2500\u2500 [2.5K]  base_public\n\u2502   \u2502   \u251c\u2500\u2500 [ 211]  base_public_category.sql\n\u2502   \u2502   \u251c\u2500\u2500 [ 257]  base_public_date.sql\n\u2502   \u2502   \u251c\u2500\u2500 [ 242]  base_public_event.sql\n\u2502   \u2502   \u251c\u2500\u2500 [ 290]  base_public_listing.sql\n\u2502   \u2502   \u251c\u2500\u2500 [ 314]  base_public_sales.sql\n\u2502   \u2502   \u251c\u2500\u2500 [ 473]  base_public_users.sql\n\u2502   \u2502   \u251c\u2500\u2500 [ 234]  base_public_venue.sql\n\u2502   \u2502   \u2514\u2500\u2500 [ 201]  schema.yml\n\u2502   \u251c\u2500\u2500 [ 536]  dept_experimental\n\u2502   \u2502   \u2514\u2500\u2500 [ 440]  rpt_experimental_qtr_total_sales_by_event.sql\n\u2502   \u251c\u2500\u2500 [ 822]  dept_finance\n\u2502   \u2502   \u251c\u2500\u2500 [ 205]  rpt_finance_qtr_top_events_by_sales.sql\n\u2502   \u2502   \u2514\u2500\u2500 [ 489]  rpt_finance_qtr_total_sales_by_event.sql\n\u2502   \u251c\u2500\u2500 [ 291]  dept_marketing\n\u2502   \u2502   \u2514\u2500\u2500 [ 195]  rpt_marketing_category_full_desc.sql\n\u2502   \u2514\u2500\u2500 [ 617]  dept_tech\n\u2502       \u2514\u2500\u2500 [ 521]  rpt_tech_all_users.sql\n\u251c\u2500\u2500 [ 157]  packages.yml\n\u251c\u2500\u2500 [ 635]  seeds\n\u2502   \u2514\u2500\u2500 [ 539]  dept_marketing\n\u2502       \u2514\u2500\u2500 [ 443]  mnl_category_desc.csv\n\u2514\u2500\u2500 [2.6K]  src\n    \u2514\u2500\u2500 [2.6K]  data_load.sql\n\n 110K used in 11 directories, 25 files\n")),(0,n.kt)("h2",{id:"notebooks"},"Notebooks"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://nbviewer.org/github/sparsh-ai/recohut/blob/main/docs/03-processing/lab-dbt-tickit"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/jupyter-notebook-informational?logo=jupyter",alt:"nbviewer"}))))}u.isMDXComponent=!0}}]);