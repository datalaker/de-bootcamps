"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,g=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="Python code",i={unversionedId:"foundations/language/python/python-snippets",id:"foundations/language/python/python-snippets",title:"Python code",description:"Generating a hash for given string",source:"@site/docs/01-foundations/language/python/python-snippets.md",sourceDirName:"01-foundations/language/python",slug:"/foundations/language/python/python-snippets",permalink:"/docs/foundations/language/python/python-snippets",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681451444,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{}},p={},l=[{value:"Generating a hash for given string",id:"generating-a-hash-for-given-string",level:2},{value:"Insert path in scripts",id:"insert-path-in-scripts",level:2},{value:"Clean filenames in a folder",id:"clean-filenames-in-a-folder",level:2},{value:"Converting Jupyter notebooks into markdown",id:"converting-jupyter-notebooks-into-markdown",level:2},{value:"Scraping",id:"scraping",level:2},{value:"BS4",id:"bs4",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-code"},"Python code"),(0,a.kt)("h2",{id:"generating-a-hash-for-given-string"},"Generating a hash for given string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'# import hashlib\nimport sys\n\ninput_str = sys.argv[1]\n# hash_object = hashlib.sha256(b"{}".format(input_str))\n# hex_dig = hash_object.hexdigest()\n# print(hex_dig)\n\nfrom passlib.context import CryptContext\nhash_object = CryptContext(schemes=["bcrypt"])\nprint(hash_object.hash(input_str))\n')),(0,a.kt)("h2",{id:"insert-path-in-scripts"},"Insert path in scripts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import os\nimport sys\nimport inspect\n\ncurrentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))\nparentdir = os.path.dirname(currentdir)\nsys.path.insert(0, parentdir) \n")),(0,a.kt)("h2",{id:"clean-filenames-in-a-folder"},"Clean filenames in a folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import re\nimport os\nimport pathlib\nimport glob\n\nnbs = glob.glob('/content/docs/docs/tutorials/*.md')\n\ndef process(path):\n    x = str(pathlib.Path(path).stem)\n    x = x.lower()\n    x = re.sub(r'[^a-z]','-',x)\n    x = re.sub(r'-+','-',x)\n    x = x.strip('-')\n    x = os.path.join(str(pathlib.Path(path).parent), x+'.mdx')\n    x = re.sub('/[a-z]\\-','/',x)\n    os.rename(path, x)\n\n_ = [process(x) for x in nbs]\n")),(0,a.kt)("h2",{id:"converting-jupyter-notebooks-into-markdown"},"Converting Jupyter notebooks into markdown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"!cd /content && git clone https://github.com/abc/nbs.git\n!pip install -q jupytext\n!cd /content/nbs && jupytext *.ipynb --to markdown\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import glob\nimport os\n\nnbs = glob.glob('/content/nbs/*.ipynb')\n\nfor x in nbs:\n    mds = x[:-6]+'.md'\n    if not os.path.exists(mds):\n        try:\n          !jupyter nbconvert --to markdown \"{x}\"\n        except:\n            print('error in {}'.format(x))\n")),(0,a.kt)("h2",{id:"scraping"},"Scraping"),(0,a.kt)("h3",{id:"bs4"},"BS4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import bs4\nimport requests\nimport lxml.etree as xml\n\nURLs = ["https://www.flexjobs.com/blog/post/job-search-strategies-for-success-v2/",\n        "https://www.monster.com/career-advice/article/five-ps-of-job-search-progress"]\n\ni = 0\nweb_page = bs4.BeautifulSoup(requests.get(URLs[i], {}).text, "lxml")\ndf.loc[i,\'title\'] = web_page.head.title.text\nsub_web_page = web_page.find_all(name="article", attrs={"class": "single-post-page"})[0]\narticle = \'. \'.join([wp.text for wp in sub_web_page.find_all({"h2","p"})])\ndf.loc[i,\'text\'] = article\n        \n')))}u.isMDXComponent=!0}}]);