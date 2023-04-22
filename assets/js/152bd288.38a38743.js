"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=d(a),c=o,u=h["".concat(l,".").concat(c)]||h[c]||m[c]||s;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},30708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const s={},i="SQL Data Modeling",r={unversionedId:"data-modeling/sql-data-modeling",id:"data-modeling/sql-data-modeling",title:"SQL Data Modeling",description:"What is data modeling?\xa0Data modeling\xa0is a process for representing the database objects\xa0in our real-world or business perspective. Objects in warehouses can be datasets, tables, or views. Representing the objects as close as possible to the real world is important because the end users of the data are human. Some of the most common end users are business analysts, data analysts, data scientists, BI users, or any other roles that require access to the data for business purposes.",source:"@site/docs/04-data-modeling/sql-data-modeling.md",sourceDirName:"04-data-modeling",slug:"/data-modeling/sql-data-modeling",permalink:"/docs/data-modeling/sql-data-modeling",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Data Modeling",permalink:"/docs/category/data-modeling"},next:{title:"Inmon versus the Kimball data model",permalink:"/docs/data-modeling/inmon-vs-kimball"}},l={},d=[{value:"Data Modeling Best Practices",id:"data-modeling-best-practices",level:2},{value:"Case Studies",id:"case-studies",level:2},{value:"Mobile Phone Billing System Relational Model",id:"mobile-phone-billing-system-relational-model",level:3},{value:"Whatnot Dimensional Data Modeling",id:"whatnot-dimensional-data-modeling",level:3},{value:"Resources",id:"resources",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sql-data-modeling"},"SQL Data Modeling"),(0,o.kt)("p",null,"What is data modeling?\xa0",(0,o.kt)("strong",{parentName:"p"},"Data modeling"),"\xa0is a process for representing the database objects\xa0in our real-world or business perspective. Objects in warehouses can be datasets, tables, or views. Representing the objects as close as possible to the real world is important because the end users of the data are human. Some of the most common end users are business analysts, data analysts, data scientists, BI users, or any other roles that require access to the data for business purposes."),(0,o.kt)("p",null,"The data model helps us design our database. When building a plane, you don\u2019t start with building the engine. You start by creating a blueprint anschematic. Creating database is just the same, you start with modelling the data. Model is a representation of real data that provide us with characteristic, relation and rules that apply to our data. It doesn\u2019t actually contain any data in it."),(0,o.kt)("p",null,"In the classical sense, a data model is simply metadata that described the structure, content, and relationships that exist within a group of related data assets. Maintaining a data model has long been a standard practice for OLTP workloads built on SQL. Typically maintained by data engineers & data architects, they help manage the evolution of assets, remove unnecessary duplication & enforce conventions to maintain an intuitive and consistent layout. A key additional benefit is to inform consumers (ex. data analysts) about assets and how best to use them. For this reason, maintaining data models is also a common practice for managing the evolution of large SQL data warehouses. Without data models, end users would find it challenging to navigate around a library of hundreds (if not thousands) of data assets and correctly leverage them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data modeling")," is a process of designing how data will be represented in data stores. Many data modeling techniques were originally designed for databases and warehouses. Since the Serving layers are usually built with relational data stores such as data warehouses, some of the data modeling techniques can be applied for the Serving layer design too. Serving layer could be built using other storage technologies such as document databases, key-value stores, and so on, based on the customer requirements."),(0,o.kt)("p",null,"Unlike data lakes, in databases or data warehouses we don't have the luxury of storing huge volumes of data in the format we like. Databases and data warehouses can perform querying exceptionally fast, provided the data is stored in predetermined formats and is limited in size. Hence, while designing the Serving layer, we need to identify the specifics of which data needs to be stored, which format to store it in, and how much data to store. To be specific, we need to decide on which SQL tables are required, what would be the relationship between these tables, and which restrictions need to be imposed on these tables."),(0,o.kt)("p",null,"What's the main difference between designing a data model in a data warehouse and designing an\xa0",(0,o.kt)("strong",{parentName:"p"},"OLTP"),"\xa0database (transactional database) for applications. In the application database, the end users of the database are applications, not humans. In the data warehouse, you serve humans. So, as data engineers, we need to think from their perspective."),(0,o.kt)("p",null,"Since modern data engineers realize the non-relevancy of the old principles and, at the same time, the demand to insert any data in data warehouses is growing tremendously, they tend to skip the data modeling steps, and that's bad. Skipping the data warehouse principles means ignoring the fact that we need to maintain data consistency. This fact may lead to some bad results. Take the following common example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data is duplicated in many locations."),(0,o.kt)("li",{parentName:"ul"},"Some values are not consistent across different users and reports."),(0,o.kt)("li",{parentName:"ul"},"The cost of processing is highly inefficient."),(0,o.kt)("li",{parentName:"ul"},"The end user doesn't understand how to use the data warehouse objects."),(0,o.kt)("li",{parentName:"ul"},"The business doesn't trust the data.")),(0,o.kt)("p",null,"In my\xa0opinion, a modern data warehouse is still a data warehouse. The objective of a data\xa0warehouse is to build a centralized and trustworthy data storage that can be used for business. Data engineers need to take more time to do proper data modeling in data warehouses compared to the data lake concept in order to meet this objective."),(0,o.kt)("p",null,"Let's look at this example. We want to represent people in a table object. Which of the following two tables, A or B, do you think better represents people? Here is People table A:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542322-e4437269-6cba-4f29-aa32-5cd23d1d8c71.jpg",alt:"B16851_03_35"}),"\nTry and compare this with People table B:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542327-4e45a493-a827-4e30-944d-66a623c7ea41.jpg",alt:"B16851_03_36"})),(0,o.kt)("p",null,"If we look back at the objective, we want to represent people. Then I think we can all agree that\xa0",(0,o.kt)("em",{parentName:"p"},"People table A"),"\xa0is better at representing people because this table represents\xa0people clearly. It's very natural to imagine people having names, ages, hair colors, and genders. A good data model is self-explanatory, like\xa0",(0,o.kt)("em",{parentName:"p"},"People table A"),". This means that even without anyone explaining to you how to read the table, you already know what the table is about."),(0,o.kt)("p",null,"Now, why is\xa0",(0,o.kt)("em",{parentName:"p"},"table B"),"\xa0bad? There are a few reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The lists of attributes don't really represent people; for example,\xa0",(0,o.kt)("strong",{parentName:"li"},"postal code"),". Even though we know people may have houses, and houses have postal codes, it's difficult to imagine people as entities having a postal code as part of them.\xa0"),(0,o.kt)("li",{parentName:"ul"},"What is\xa0",(0,o.kt)("strong",{parentName:"li"},"NULL"),"\xa0in relation to\xa0",(0,o.kt)("strong",{parentName:"li"},"postal code"),"? Does that mean Barb doesn't have a house? Or maybe he forgot his postal code? Or perhaps this is just a bug. The table can't really tell you that."),(0,o.kt)("li",{parentName:"ul"},"Still on the subject of the postal code, how about if one of the people here has more than one house? Should we add new records to this table? It will become complicated."),(0,o.kt)("li",{parentName:"ul"},"Gender is inconsistent.\xa0",(0,o.kt)("strong",{parentName:"li"},"Female"),"\xa0and\xa0",(0,o.kt)("strong",{parentName:"li"},"Woman"),", and\xa0",(0,o.kt)("strong",{parentName:"li"},"Male"),"\xa0and\xa0",(0,o.kt)("strong",{parentName:"li"},"Man"),", may have the same meanings, but may not."),(0,o.kt)("li",{parentName:"ul"},"The wealthy column has\xa0",(0,o.kt)("strong",{parentName:"li"},"yes"),"\xa0and\xa0",(0,o.kt)("strong",{parentName:"li"},"no"),"\xa0values. What does this mean? How can this column be justified?")),(0,o.kt)("p",null,"It is not that\xa0the information is wrong - we often need to store such information. Now the question is, can we store the same information, but with a better data model?\xa0"),(0,o.kt)("p",null,"Let's take another example. Perhaps this better represents the real world for the required information:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542328-65d0e5a7-f59a-4afe-b18a-6929a0f01d0e.jpg",alt:"B16851_03_37"})),(0,o.kt)("p",null,"Maybe this\xa0",(0,o.kt)("em",{parentName:"p"},"Alternative C"),"\xa0is better. We still have the people table, but only with people-related attributes, for example,\xa0",(0,o.kt)("strong",{parentName:"p"},"gender"),". Then,\xa0",(0,o.kt)("strong",{parentName:"p"},"postal code"),"\xa0is part of the\xa0",(0,o.kt)("strong",{parentName:"p"},"Address"),"\xa0table. It may have other address information, but in this example, we will keep it simple with just the postal code. And if someone such as\xa0",(0,o.kt)("strong",{parentName:"p"},"Barb"),"\xa0doesn't have a postal code, then we don't need to put the\xa0",(0,o.kt)("strong",{parentName:"p"},"NULL"),"\xa0record there. And lastly, we may assume that wealth is driven by salary (just for example purposes), so we had better just store the salary information, and later use queries to put the\xa0",(0,o.kt)("strong",{parentName:"p"},"wealthy"),"\xa0logic on top of the salary information. This is more natural and closer to the real world."),(0,o.kt)("p",null,"What could happen with a bad data model? It is often the case that the end user will have too much dependency on the data engineering team. Unable to understand the table shapes, end users need to keep posing the following questions to the data engineering team, for example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What does\xa0",(0,o.kt)("strong",{parentName:"li"},"NULL"),"\xa0mean?"),(0,o.kt)("li",{parentName:"ol"},"How should I join the tables?"),(0,o.kt)("li",{parentName:"ol"},"Why are there duplications?"),(0,o.kt)("li",{parentName:"ol"},"Why do some records have the attribute X while others don't?")),(0,o.kt)("p",null,"In the worst-case scenario, the end user doesn't trust the data in the data warehouse, so the goal of using the data for a business impact has failed.\xa0"),(0,o.kt)("p",null,"In the best-case scenario, a perfect data model is where the end user doesn't need to put any questions to the data engineering team. They can answer any business questions just by looking at the table structures and trust the data 100%. And that's our goal as data engineers."),(0,o.kt)("p",null,"But, at the\xa0end of the day, it's very difficult to design a perfect data model because there are other aspects that a data engineer needs to think about when designing a data model."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other purposes of the data model")),(0,o.kt)("p",null,"Besides\xa0representing data in a real-world scenario, there are three other reasons why we require a data model in a data warehouse:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data consistency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Query performance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Storage efficiency"))),(0,o.kt)("p",null,"Let's start with the latest point first:\xa0",(0,o.kt)("em",{parentName:"p"},"Storage efficiency"),". How can we improve storage efficiency by the data model?\xa0"),(0,o.kt)("p",null,"Take a look at this example again. Which one is more storage-efficient?\xa0Perhaps a table with\xa0",(0,o.kt)("strong",{parentName:"p"},"name"),"\xa0and\xa0",(0,o.kt)("strong",{parentName:"p"},"gender"),", where\xa0",(0,o.kt)("strong",{parentName:"p"},"gender"),"\xa0is written in a string data type as\xa0",(0,o.kt)("strong",{parentName:"p"},"Man or Woman"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542329-0af81eb2-394a-4241-af5f-12533db98706.jpg",alt:"B16851_03_38"})),(0,o.kt)("p",null,"Or perhaps\xa0",(0,o.kt)("em",{parentName:"p"},"option B"),"? We create a gender reference table, and the main table will only store one\xa0character,\xa0",(0,o.kt)("strong",{parentName:"p"},"gender_id"),", as a reference. The user can later join both tables for the same result as\xa0",(0,o.kt)("em",{parentName:"p"},"option A"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542332-906ff971-1b6d-47c6-b72b-19f9775bd577.jpg",alt:"B16851_03_39"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Option B"),"\xa0is definitely better, as we don't need to repeat storing\xa0",(0,o.kt)("strong",{parentName:"p"},"Female"),"\xa0and\xa0",(0,o.kt)("strong",{parentName:"p"},"Male"),"\xa0strings in our storage. It looks like a small difference, but the same technique applies to all categorical string attributes, and that can have a significant impact."),(0,o.kt)("p",null,"Using the same technique, we can also improve data consistency. For example, we can use the gender reference table for other tables, as in the following example user table:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542334-b975bb7d-415e-43d4-ad03-97cbd62f3784.jpg",alt:"B16851_03_40"})),(0,o.kt)("p",null,"With that, we avoid data inconsistency; for example, the People table uses Female-Male, and the User table uses Man-Woman. This is a very common practice, and the common terminology in the data warehouse world to refer to this is normalized and denormalized.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Storage efficiency option A"),"\xa0is a denormalized table, while\xa0",(0,o.kt)("em",{parentName:"p"},"Storage efficiency option B"),"\xa0is a normalized table."),(0,o.kt)("p",null,"Last but not least, one reason why we need a data model is for query performance. In a big data system where data is stored in distributed storage, there is a general rule of thumb regarding which operation is the most resource-intensive, which is\xa0",(0,o.kt)("strong",{parentName:"p"},"JOIN"),".\xa0",(0,o.kt)("strong",{parentName:"p"},"JOIN"),"\xa0in general is\xa0a very expensive operation, especially when we need to join multiple large-volume tables. And if you look back at the normalized and denormalized approaches, you will realize that even normalized data is good for storage efficiency and data consistency, but it's bad for performance because you require a lot of\xa0",(0,o.kt)("strong",{parentName:"p"},"Join"),"\xa0operations.\xa0"),(0,o.kt)("p",null,"At the end of the day, we need to find a balance between all the factors. There will be no right or wrong answer for a data model in a complex data warehouse. In a complex data warehouse, this may involve thousands to millions of tables. So, everyone will have a different approach for designing the data model. However, there are some theories that we can use as reference."),(0,o.kt)("h2",{id:"data-modeling-best-practices"},"Data Modeling Best Practices"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Database design")," is a critical aspect of any software system. It determines the overall performance, scalability, and security of a system. Here are 9 best practices for designing a database that ensures the longevity and success of your system:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Normalization:")," Normalization is the process of organizing data in a relational database so that data redundancies are minimized and data anomalies are prevented. Normalization helps ensure data consistency and eliminates data duplications."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Proper indexing:")," Indexing is the process of adding an index to a database column to speed up the search process. Proper indexing helps improve the performance of queries and makes data retrieval faster."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Use appropriate data types:")," It is important to use appropriate data types for each column in your database. This helps ensure data accuracy and consistency."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Avoid over-normalization:")," While normalization is important, over-normalization can lead to complicated and slow-performing queries. It is important to strike a balance between normalization and efficiency."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Use appropriate keys:")," Keys are used to identifying a unique record in a database. It is important to choose the appropriate key for each table, such as primary keys, foreign keys, or composite keys."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Document your design:")," Documenting your database design helps ensure that it is clear, consistent, and easy to understand. This documentation also makes it easier to maintain and modify the database in the future."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Test your design:")," It is important to test your database design thoroughly before deploying it to production. This helps catch any potential problems and ensures that the design meets all requirements."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Consider security:")," Security is a critical aspect of database design. It is important to consider security from the beginning of the design process to ensure that the database is protected from unauthorized access."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Plan for scalability:")," As your system grows, so will your database. It is important to plan for scalability from the beginning so that the database can easily handle increasing amounts of data.")),(0,o.kt)("p",null,"Following these 9 best practices for database design will help ensure that your system has a strong foundation for success. Proper planning, documentation, testing, and security considerations will help ensure that your database is efficient, secure, and scalable."),(0,o.kt)("h2",{id:"case-studies"},"Case Studies"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/towards-data-engineering/design-the-database-for-a-system-like-spotify-95ffd1fb5927"},"Spotify")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/towards-data-engineering/database-design-for-a-system-like-linkedin-3c52a5ab28c0"},"LinkedIn")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/towards-data-engineering/database-design-for-a-food-delivery-app-like-zomato-swiggy-86c16319b5c5"},"Zomato/Swiggy"))),(0,o.kt)("h3",{id:"mobile-phone-billing-system-relational-model"},"Mobile Phone Billing System Relational Model"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/230773579-5adae369-1131-4aa8-8673-b452cef56da7.svg",alt:"mobilephone-billing-system-data-model drawio"})),(0,o.kt)("h3",{id:"whatnot-dimensional-data-modeling"},"Whatnot Dimensional Data Modeling"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/224901453-45944e6b-4467-4f3c-89c2-c5b1a8f6040f.png",alt:"img"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data model types:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Facts")," are (generally) transaction-like records that should not change after the transaction is completed. They tend to be high velocity (there are a lot of them) and have measurements associated with them, such as price or duration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dimensions")," describe the objects in a fact table. For example, many orders might come from the same livestream, so the livestream would be considered a \u201cdimension\u201d of the order."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bridge Tables")," \u2014 map two entities together when they have a one-to-many or many-to-many relationship. For example, we will have a category dimension and a livestream watches fact. Live streams can have many categories."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Map Tables")," \u2014 Different from bridge tables, map tables can be thought of as upstream of facts and dimensions. These are intermediary tables that map an ID to a categorization.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Slowly Changing Dimensions:")),(0,o.kt)("p",null,"SCDs are dimensions with tracked changes using ",(0,o.kt)("inlineCode",{parentName:"p"},"valid_from")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"valid_to columns"),". For example, a user\u2019s address can change over time and each time a change occurs, a new record is created (Type 2 SCD)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Natural Keys vs Surrogate Keys:")),(0,o.kt)("p",null,"Earlier, data users relied on a model\u2019s natural keys to join, which is intuitive and simple, but sometimes confusing \u2014 string or int? \u2014 and, with the introduction of SCD, could lead to exploding joins. Whatnot decided all data models in their core schema would have a ",(0,o.kt)("inlineCode",{parentName:"p"},"varchar")," surrogate key. They generate this for each table using  ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt_utils.generate_surrogate_key([entity_id, valid_from])"),". By always using a hashed surrogate key, we avoid potential integer-to-varchar join issues. The downside to surrogate keys is that they can be confusing for developers, who are used to joining on \u201cid\u201d columns rather than \u201ckeys\u201d."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://subscription.packtpub.com/book/big-data-and-business-intelligence/9781783989188/1/ch01lvl1sec03/data-modeling"},"Data Modeling by Packt")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://knowledgetree.notion.site/Data-Modeling-92b0646bc2674a23a6203d9309bf414f"},"https://knowledgetree.notion.site/Data-Modeling-92b0646bc2674a23a6203d9309bf414f")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://blog.panoply.io/database-schema-design-examples"},"Database Schema Design Examples")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.holistics.io/books/setup-analytics/data-modeling-layer-and-concepts/"},"Data Modeling Layer ","&"," Concepts")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.holistics.io/books/setup-analytics/kimball-s-dimensional-data-modeling/"},"Kimball\u2019s Dimensional Data Modeling")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.holistics.io/books/setup-analytics/modeling-example-a-real-world-use-case/"},"Modeling Example: A Real-world Use Case")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://bit.ly/3DPllXo"},"Kimball Dimensional Modeling Techniques")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.techshashank.com/data-warehousing/shipping-dimensional-modeling"},"Designing a dimensional model for a cargo shipper")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://hevodata.com/learn/schema-example/"},"5 Database Design Schema Example: Critical Practices ","&"," Designs")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://bit.ly/3LTUtHY"},"Kimball\u2019s 4-Step Dimensional Design Process")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://knowledgetree.notion.site/Brief-Introduction-to-Data-Warehouses-Shared-83ead0962c7a4c1cb7f165995f58e122"},"Introduction to Data Warehouse")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://knowledgetree.notion.site/Data-Warehousing-Schemas-Shared-a03264b8ab6d4a50b6be0d73a82f8c8c"},"Data Warehouse Schemas")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.1keydata.com/datawarehousing/datawarehouse.html"},"Know Data Warehouse Essential Concepts")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/nerd-for-tech/fundamental-data-modeling-and-data-warehousing-b599183d998a"},"Fundamental Data modeling and Data warehousing"))))}m.isMDXComponent=!0}}]);