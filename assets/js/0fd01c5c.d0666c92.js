"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},68401:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},s="Create a Data Model for Temperature Monitoring Sensor Networks",i={unversionedId:"data-modeling/lab-cassandra-sensor-data-model/README",id:"data-modeling/lab-cassandra-sensor-data-model/README",title:"Create a Data Model for Temperature Monitoring Sensor Networks",description:"Conceptual Data Model",source:"@site/docs/04-data-modeling/lab-cassandra-sensor-data-model/README.md",sourceDirName:"04-data-modeling/lab-cassandra-sensor-data-model",slug:"/data-modeling/lab-cassandra-sensor-data-model/",permalink:"/docs/data-modeling/lab-cassandra-sensor-data-model/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},l={},d=[{value:"Conceptual Data Model",id:"conceptual-data-model",level:2},{value:"Application workflow",id:"application-workflow",level:2},{value:"Logical Data model",id:"logical-data-model",level:2},{value:"Physical Data Model",id:"physical-data-model",level:2},{value:"Hands-on",id:"hands-on",level:2},{value:"Create Keyspace",id:"create-keyspace",level:3},{value:"Create Tables",id:"create-tables",level:3},{value:"Populate tables",id:"populate-tables",level:3},{value:"Design query Q1",id:"design-query-q1",level:3},{value:"Design query Q2",id:"design-query-q2",level:3},{value:"Design query Q3",id:"design-query-q3",level:3},{value:"Design query Q4",id:"design-query-q4",level:3},{value:"Design query Q5",id:"design-query-q5",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-data-model-for-temperature-monitoring-sensor-networks"},"Create a Data Model for Temperature Monitoring Sensor Networks"),(0,r.kt)("h2",{id:"conceptual-data-model"},"Conceptual Data Model"),(0,r.kt)("p",null,"A conceptual data model is designed with the goal of understanding data in a particular domain. In this example, the model is captured using an Entity-Relationship Diagram (ERD) that documents entity types, relationship types, attribute types, and cardinality and key constraints."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214248277-5ad44557-b175-4273-986e-c080650bcc14.png",alt:null})),(0,r.kt)("p",null,"The conceptual data model for sensor data features sensor networks, sensors, and temperature measurements. Each network has a unique name, description, region, and number of sensors. A sensor is described by a unique id, location, which is composed of a latitude and longitude, and multiple sensor characteristics. A temperature measurement has a timestamp and value, and is uniquely identified by a sensor id and a measurement timestamp. While a network can have many sensors, each sensor can only belong to one network. Similarly, a sensor can record many temperature measurements at different timestamps and every temperature measurement is reported by exactly one sensor."),(0,r.kt)("h2",{id:"application-workflow"},"Application workflow"),(0,r.kt)("p",null,"An application workflow is designed with the goal of understanding data access patterns for a data-driven application. Its visual representation consists of application tasks, dependencies among tasks, and data access patterns. Ideally, each data access pattern should specify what attributes to search for, search on, order by, or do aggregation on."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214248269-804877f6-03c5-445c-8b25-2ca7baff20be.png",alt:null})),(0,r.kt)("p",null,"The application workflow has an entry-point task that shows all sensor networks. This task requires querying a database to find information about all networks and arrange the results in ascending order of network names, which is documented as Q1 on the diagram. Next, an application can either display a heatmap for a selected network, which requires data access pattern Q2, or display all sensors in a selected network, which requires data access pattern Q3. Finally, the latter can lead to the task of showing raw temperature values for a given sensor based on data access pattern Q4. All in all, there are four data access patterns for a database to support."),(0,r.kt)("h2",{id:"logical-data-model"},"Logical Data model"),(0,r.kt)("p",null,"A logical data model results from a conceptual data model by organizing data into Cassandra-specific data structures based on data access patterns identified by an application workflow. Logical data models can be conveniently captured and visualized using Chebotko Diagrams that can feature tables, materialized views, indexes and so forth."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214248289-7e040329-d61e-480a-9df0-d492fb235230.png",alt:null})),(0,r.kt)("p",null,"The logical data model for sensor data is represented by the shown Chebotko Diagram. There are four tables, namely networks, temperatures_by_network, sensors_by_network and temperatures_by_sensor, that are designed to specifically support data access patterns Q1, Q2, Q3 and Q4, respectively. For example, table temperatures_by_network has seven columns, of which network is designated as a partition key column, and date, hour and sensor are clustering key columns with descending or ascending order being represented by a downward or upward arrow. To support Q2, it should be straightforward to see that a query over this table needs to restrict column network to some value and column date to a range of values, while the result ordering based on date and hour is automatically supported by how data is organized in the table."),(0,r.kt)("h2",{id:"physical-data-model"},"Physical Data Model"),(0,r.kt)("p",null,"A physical data model is directly derived from a logical data model by analyzing and optimizing for performance. The most common type of analysis is identifying potentially large partitions. Some common optimization techniques include splitting and merging partitions, data indexing, data aggregation and concurrent data access optimizations."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214248298-61f1c144-249f-48f9-b44b-2813ccb03bfa.png",alt:null})),(0,r.kt)("p",null,"The physical data model for sensor data is visualized using the Chebotko Diagram. This time, all table columns have associated data types. In addition, two tables have changes in their primary keys. Table networks used to be partitioned based on column name and is now partitioned based on column bucket. The old design had single-row partitions and required retrieving rows from multiple partitions to satisfy Q1. The new design essentially merges old single-row partitions into one multi-row partition and results in much more efficient Q1. With respect to table temperatures_by_network, there are two optimizations. The minor optimization is to merge columns date and hour into one column date_hour, which is supported by the TIMESTAMP data type. The major optimization is to split potentially large partitions by introducing column week, which represents the first day of a week, as a partition key column. Consider that a network with 100 sensors generates 100 rows per hour in table temperatures_by_network. The old design allows partitions to grow over time: 100 rows in an hour, 2400 rows in a day, 16800 rows in a week, \u2026, 876000 rows in a year, and so forth. The new design restricts each partition to only contain at most 16800 rows that can be generated in one week. Our final blueprint is ready to be instantiated in Cassandra."),(0,r.kt)("h2",{id:"hands-on"},"Hands-on"),(0,r.kt)("p",null,"In this lab, you will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create tables for a sensor data use case"),(0,r.kt)("li",{parentName:"ul"},"Populate tables with sample sensor data"),(0,r.kt)("li",{parentName:"ul"},"Design and execute CQL queries over sensor data")),(0,r.kt)("h3",{id:"create-keyspace"},"Create Keyspace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE KEYSPACE sensor_data\nWITH replication = {\n  'class': 'SimpleStrategy', \n  'replication_factor': 1 }; \n\nUSE sensor_data;\n")),(0,r.kt)("h3",{id:"create-tables"},"Create Tables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS networks (\n  bucket TEXT,\n  name TEXT,\n  description TEXT,\n  region TEXT,\n  num_sensors INT,\n  PRIMARY KEY ((bucket),name)\n);\n\nCREATE TABLE IF NOT EXISTS temperatures_by_network (\n  network TEXT,\n  week DATE,\n  date_hour TIMESTAMP,\n  sensor TEXT,\n  avg_temperature FLOAT,\n  latitude DECIMAL,\n  longitude DECIMAL,\n  PRIMARY KEY ((network,week),date_hour,sensor)\n) WITH CLUSTERING ORDER BY (date_hour DESC, sensor ASC);\n\nCREATE TABLE IF NOT EXISTS sensors_by_network (\n  network TEXT,\n  sensor TEXT,\n  latitude DECIMAL,\n  longitude DECIMAL,\n  characteristics MAP<TEXT,TEXT>,\n  PRIMARY KEY ((network),sensor)\n);\n\nCREATE TABLE IF NOT EXISTS temperatures_by_sensor (\n  sensor TEXT,\n  date DATE,\n  timestamp TIMESTAMP,\n  value FLOAT,\n  PRIMARY KEY ((sensor,date),timestamp)\n) WITH CLUSTERING ORDER BY (timestamp DESC);\n\nDESCRIBE TABLES;\n")),(0,r.kt)("h3",{id:"populate-tables"},"Populate tables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SOURCE 'sensor_data.cql'\n")),(0,r.kt)("p",null,"Retrieve some rows from tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM networks;        \nSELECT network, week, date_hour, \n       sensor, avg_temperature \nFROM temperatures_by_network;\nSELECT * FROM sensors_by_network;                    \nSELECT * FROM temperatures_by_sensor;\n")),(0,r.kt)("h3",{id:"design-query-q1"},"Design query Q1"),(0,r.kt)("p",null,"Find information about all networks; order by name (asc):"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show me the Answer! "),"```sql SELECT name, description, region, num_sensors FROM networks WHERE bucket = 'all'; ```"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"design-query-q2"},"Design query Q2"),(0,r.kt)("p",null,"Find hourly average temperatures for every sensor in network forest-net and date range ","[2020-07-05,2020-07-06]"," within the week of 2020-07-05; order by date (desc) and hour (desc):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT date_hour, avg_temperature, \n      latitude, longitude, sensor \nFROM temperatures_by_network\nWHERE network    = 'forest-net'\n  AND week       = '2020-07-05'\n  AND date_hour >= '2020-07-05'\n  AND date_hour  < '2020-07-07';\n")),(0,r.kt)("h3",{id:"design-query-q3"},"Design query Q3"),(0,r.kt)("p",null,"Find hourly average temperatures for every sensor in network forest-net and date range ","[2020-07-04,2020-07-06]"," within the weeks of 2020-06-28 and 2020-07-05; order by date (desc) and hour (desc):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT date_hour, avg_temperature, \n      latitude, longitude, sensor \nFROM temperatures_by_network\nWHERE network    = 'forest-net'\n  AND week       = '2020-07-05'\n  AND date_hour >= '2020-07-04'\n  AND date_hour  < '2020-07-07';\n  \nSELECT date_hour, avg_temperature, \n      latitude, longitude, sensor \nFROM temperatures_by_network\nWHERE network    = 'forest-net'\n  AND week       = '2020-06-28'\n  AND date_hour >= '2020-07-04'\n  AND date_hour  < '2020-07-07';  \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT date_hour, avg_temperature, \n      latitude, longitude, sensor \nFROM temperatures_by_network\nWHERE network    = 'forest-net'\n  AND week      IN ('2020-07-05','2020-06-28')\n  AND date_hour >= '2020-07-04'\n  AND date_hour  < '2020-07-07';   \n")),(0,r.kt)("h3",{id:"design-query-q4"},"Design query Q4"),(0,r.kt)("p",null,"Find information about all sensors in network forest-net:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show me the Answer! "),"```sql SELECT * FROM sensors_by_network WHERE network = 'forest-net'; ```"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"design-query-q5"},"Design query Q5"),(0,r.kt)("p",null,"Find raw measurements for sensor s1003 on 2020-07-06; order by timestamp (desc):"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show me the Answer! "),"```sql SELECT timestamp, value FROM temperatures_by_sensor WHERE sensor = 's1003' AND date   = '2020-07-06'; ```"),(0,r.kt)("br",null))}p.isMDXComponent=!0}}]);