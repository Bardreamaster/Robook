"use strict";(self.webpackChunkrobook=self.webpackChunkrobook||[]).push([[884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),g=r,k=s["".concat(p,".").concat(g)]||s[g]||m[g]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"\u817f\u8db3\u5f0f\u673a\u5668\u4eba\u4e09\u7c7b\u4e3b\u6d41\u5173\u8282\u9a71\u52a8\u5668\u6027\u80fd\u5bf9\u6bd4"},l=void 0,i={unversionedId:"handbook/actuation/legged_robots",id:"handbook/actuation/legged_robots",title:"\u817f\u8db3\u5f0f\u673a\u5668\u4eba\u4e09\u7c7b\u4e3b\u6d41\u5173\u8282\u9a71\u52a8\u5668\u6027\u80fd\u5bf9\u6bd4",description:"\u8f6c\u8f7d\u4e8e\uff1ahttps://zhuanlan.zhihu.com/p/32267807",source:"@site/docs/handbook/actuation/legged_robots.md",sourceDirName:"handbook/actuation",slug:"/handbook/actuation/legged_robots",permalink:"/docs/handbook/actuation/legged_robots",draft:!1,tags:[],version:"current",frontMatter:{title:"\u817f\u8db3\u5f0f\u673a\u5668\u4eba\u4e09\u7c7b\u4e3b\u6d41\u5173\u8282\u9a71\u52a8\u5668\u6027\u80fd\u5bf9\u6bd4"},sidebar:"handbookSiderbar",previous:{title:"\u7528\u4e8e\u673a\u5668\u4eba\u5e94\u7528\u7684\u5e38\u89c1\u9a71\u52a8\u5668(\u4f3a\u670d\u5355\u5143)\u6c47\u603b\u4ecb\u7ecd\u4e0e\u529f\u80fd\u6bd4\u8f83",permalink:"/docs/handbook/actuation/common_actuation"},next:{title:"\u4e3a\u4ec0\u4e48\u529b\u77e9\u7535\u673a\u5448\u73b0\u4e3a\u6241\u5e73\u72b6\uff1f\u2014\u2014\u5173\u4e8e\u65e0\u6846\u529b\u77e9\u7535\u673a\u7684\u4e00\u4e9b\u4ecb\u7ecd",permalink:"/docs/handbook/actuation/lijvbianping"}},p={},c=[{value:"\u4e2a\u4eba\u603b\u7ed3\u4e0e\u76f8\u5173\u6311\u6218\uff1a",id:"\u4e2a\u4eba\u603b\u7ed3\u4e0e\u76f8\u5173\u6311\u6218",level:2},{value:"\u53c2\u8003\u6587\u732e\uff1a",id:"\u53c2\u8003\u6587\u732e",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8f6c\u8f7d\u4e8e\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/32267807"},"https://zhuanlan.zhihu.com/p/32267807"))),(0,r.kt)("p",null,"\u8bbe\u8ba1\u80fd\u7b26\u5408\u9ad8\u5ea6\u52a8\u6001\u6027\u80fd(Highly Dynamics)\u8981\u6c42\u7684\u817f\u8db3\u5f0f\u673a\u5668\u4eba\uff08Legged Robots\uff09\u7684\u9a71\u52a8\u5668\uff08Actuator\uff09,\u4e00\u76f4\u90fd\u662f\u76ee\u524d\u673a\u5668\u4eba\u5b66\u672f\u754c\u7684\u5de8\u5927\u6311\u6218\u3002"),(0,r.kt)("p",null,"\u5de5\u4e1a\u754c\u5e38\u89c1\u7684\u9a71\u52a8\u5668\u5bf9\u4e8e\u52a8\u6001\u6b65\u884c\u96be\u4ee5\u6ee1\u8db3\u5982\u4e0b\u8981\u6c42\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5927\u529b\u77e9\u8f93\u51fa\u5bc6\u5ea6\uff1b\uff08High Torque Density\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u52a8\u6001\u7269\u7406\u4ea4\u4e92\u80fd\u529b\uff1b(Dynamical Physical Interaction)")),(0,r.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4f1a\u5bf9\u76ee\u524d\u5b66\u672f\u754c\u817f\u8db3\u5f0f\u673a\u5668\u4eba\u5e38\u89c1\u7684\u9a71\u52a8\u5668\u65b9\u6848\u8fdb\u884c\u6027\u80fd\u4ecb\u7ecd\u4e0e\u5bf9\u6bd4\uff0c\u5e76\u63a2\u8ba8\u672a\u6765\u7684\u9a71\u52a8\u5668\u53d1\u5c55\u65b9\u5411\uff0c\u4e5f\u6b22\u8fce\u5927\u5bb6\u4e00\u8d77\u7559\u8a00\u53c2\u4e0e\u8ba8\u8bba\uff0c\u56e0\u4e3a\u4e00\u4e2a\u4eba\u7684\u8ba4\u77e5\u771f\u7684\u662f\u5f88\u6709\u9650\u7684\uff0c\u591a\u4eba\u591a\u884c\u4e1a\u7684\u4ea4\u6d41\u8ba8\u8bba\u5f88\u80fd\u78b0\u649e\u51fa\u7075\u611f\u7684\u706b\u82b1\u3002"),(0,r.kt)("p",null,"\uff08\u6ce8\u660e\uff1a\u8fd9\u91cc\u8bf4\u7684\u9a71\u52a8\u5668\u90fd\u662f\u57fa\u4e8eElectroMagnetic\u7684\u7535\u673a\u65b9\u6848\uff0c\u65b0\u578b\u7684\u672c\u4f53\u9a71\u52a8\u5668\u65b9\u6848\u6765\u81eaMit Cheetah Group\uff09"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86\u817f\u8db3\u5f0f\u673a\u5668\u4eba\u4e09\u79cd\u5e38\u89c1\u7684\u9a71\u52a8\u5668\u8bbe\u8ba1\u65b9\u6848\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5e38\u89c4\u65b9\u6848\uff1b "),(0,r.kt)("li",{parentName:"ol"},"SEA \uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u672c\u4f53\u9a71\u52a8\u5668\uff1b")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.liangtengyu.com:9998/images/image_c9960204.png",alt:"image_c9960204.png"}),"  \u5bf9\u4e8e\u817f\u8db3\u5f0f\u673a\u5668\u4eba\u4e09\u79cd\u5e38\u89c1\u7684\u57fa\u4e8eElectroMagnetic\u7684\u529b\u63a7\u9a71\u52a8\u5668\u65b9\u6848"),(0,r.kt)("p",null,"\u5176\u57fa\u672c\u8981\u6c42\u662f\u9a71\u52a8\u5668\u65b9\u6848\u5fc5\u987b\u5e26\u529b\u63a7\uff0c\u5173\u4e8e\u529b\u63a7\u7684\u610f\u4e49\u8bf7\u53c2\u89c1\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/31811242"},"\u4e3a\u4ec0\u4e48\u6211\u4eec\u5728\u673a\u5668\u4eba\u8fd0\u52a8\u63a7\u5236\u4e2d\u4e00\u76f4\u5728\u5f3a\u8c03\u529b\u63a7\uff1f\uff08Force/Torque Control\uff09")),(0,r.kt)("p",null,"\u5173\u4e8e\u8fd9\u4e09\u79cd\u5e38\u89c1\u7684\u9a71\u52a8\u5668\u8bbe\u8ba1\u65b9\u6848\u7279\u5f81\u53ca\u6027\u80fd\u5bf9\u6bd4\uff0c\u6211\u5236\u4f5c\u4e86\u5982\u4e0b\u7684\u8868\u683c\u8fdb\u884c\u76f8\u5173\u5f52\u7eb3\u6574\u7406\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.liangtengyu.com:9998/images/image_42a5d7bc.png",alt:"image_42a5d7bc.png"}),"  ",(0,r.kt)("img",{parentName:"p",src:"https://www.liangtengyu.com:9998/images/image_f807ec63.png",alt:"image_f807ec63.png"}),"  \u817f\u8db3\u5f0f\u673a\u5668\u4eba\uff08\u53cc\u8db3\u53ca\u56db\u8db3\uff09\u4e3b\u6d41\u9a71\u52a8\u5668\u65b9\u6848"),(0,r.kt)("p",null,"\u76f8\u5173\u8ba8\u8bba\u4e0e\u5907\u6ce8\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u4e09\u79cd\u9a71\u52a8\u5668\u65b9\u6848\u672a\u6765\u7684\u53d1\u5c55\u8d8b\u52bf\uff0c\u662f\u6211\u4e2a\u4eba\u7684\u89c2\u70b9\uff0c\u89c1\u4ec1\u89c1\u667a\uff0c\u6b22\u8fce\u5927\u5bb6\u8ba8\u8bba\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5373\u4f7f\u6211\u8ba4\u4e3a\u672c\u4f53\u9a71\u52a8\u5668\u662f\u672a\u6765\u6b63\u786e\u7684\u53d1\u5c55\u65b9\u5411\uff0c\u4f46\u6211\u73b0\u5728\u4ecd\u7136\u505a\u7684\u662fSEA\uff08\u8001\u677f\u662f\u505aSEA\u51fa\u8eab\u7684\u539f\u56e0\uff0c\u800c\u4e14\u505a\u7684\u7b97\u6bd4\u8f83\u597d\uff09\u3002\u5982\u679c\u4f5c\u4e3a\u5e74\u8f7b\u7684PhD\uff0c\u5f53\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u8001\u677f\u53d1\u751f\u51b2\u7a81\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u201c\u672c\u4f53\u9a71\u52a8\u5668\u201d\u8fd9\u4e2a\u540d\u79f0\u6765\u81eaMIT Cheetah\u7684\u201cProprioceptive Actuator\u201d\u7684\u76f4\u8bd1\uff0c\u5982\u679c\u6709\u66f4\u5408\u9002\u7684\u4e2d\u6587\u7ffb\u8bd1\u8bf7\u544a\u8bc9\u6211\uff0c\u8c22\u8c22\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u77e5\u4e4e\u6587\u7ae0\u5982\u4f55\u4e0a\u4f20\u9ad8\u6e05\u6670\u5ea6\u7684\u56fe\u7247\u4e5f\u5e0c\u671b\u6709\u77e5\u9053\u7684\u80fd\u548c\u6211\u5206\u4eab\u3002\uff08\u4e0a\u9762\u51e0\u5f20\u56fe\u4e0a\u4f20\u4e0a\u6765\u90fd\u88ab\u77e5\u4e4e\u81ea\u52a8\u538b\u7f29\u4e86\uff0c\u6e05\u6670\u5ea6\u8d28\u91cf\u5f88\u5dee\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u4f7f\u7528\u7c7b\u4f3cMIT Cheetah\u7ec4\u672c\u4f53\u9a71\u52a8\u5668\u65b9\u6848\u642d\u5efa\u53cc\u8db3\u5c0f\u4eba\u578b\uff0c\u6211\u77e5\u9053\u6709\u76f8\u5173\u56fd\u5185\u7684\u7ec4\u5728\u505a\uff0c\u4f46\u662f\u8fd9\u91cc\u4e0d\u80fd\u5217\u4e3e\uff0cFor some reason."),(0,r.kt)("li",{parentName:"ol"},"\u8868\u683c\u6ce8\u91ca\u4e2d\u63d0\u53ca\u5230\u7684\u672c\u4f53\u9a71\u52a8\u5668\u65b9\u6848\u7684IMF\uff08\u51b2\u51fb\u51cf\u7f13\u7cfb\u6570\uff09\u662fSEA\u65b9\u6848\u768490%\uff0c\u800c\u5e38\u89c4\u65b9\u6848\uff08\u4ee5HUBO\u4e3a\u4f8b\uff09\u7684IMF\u5219\u662fSEA\u65b9\u6848\u768450%\uff0c\u5177\u4f53\u53ef\u89c1\u6587\u672b\u53c2\u8003\u6587\u732e\u3002")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u800c\u4e3a\u4e86\u66f4\u597d\u5730\u76f4\u89c2\u4f53\u4f1a\u5173\u4e8e\u5236\u7ea6\u672c\u4f53\u9a71\u52a8\u5668\u65b9\u6848\u53d1\u5c55\u7684\u6838\u5fc3\u56e0\u7d20\uff1a\u9a71\u52a8\u5668\u8f93\u51fa\u5bc6\u5ea6\uff0c"),(0,r.kt)("p",null,"\u6211\u5c06MIT Cheetah\u7ec4\u4f7f\u7528\u7684\u4e24\u4ee3\u672c\u4f53\u9a71\u52a8\u5668\u65b9\u6848\u548c\u6211\u4eeciit\u7684SEA\u65b9\u6848\u8fdb\u884c\u4e86\u76f8\u5173\u53c2\u6570\u7684\u5bf9\u6bd4\uff0c\u8868\u683c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.liangtengyu.com:9998/images/image_db6d5eaf.png",alt:"image_db6d5eaf.png"}),(0,r.kt)("br",{parentName:"p"}),"\n","MIT\u7684\u672c\u4f53\u9a71\u52a8\u5668\u4e0eIIT\u7684SEA\u4e4b\u95f4\u7684\u6027\u80fd\u5bf9\u6bd4"),(0,r.kt)("p",null,"\u76f8\u5173\u8ba8\u8bba\u4e0e\u5907\u6ce8\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u9700\u8981\u7533\u660e\u7684\u662f\u9a71\u52a8\u5668\u7684\u8f93\u51fa\u5bc6\u5ea6\u548c\u7535\u673a\u8f93\u51fa\u5bc6\u5ea6\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u6982\u5ff5\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u6211\u4eec\u53ef\u4ee5\u770b\u5230MIT\u81ea\u5df1\u505a\u7684\u7535\u673a\u6027\u80fd\u786e\u5b9e\u6781\u5f3a\uff0c\u80fd\u91cf\u8f93\u51fa\u5bc6\u5ea6\u662fKollmorgen\u7535\u673a\u76844.2\u500d\uff0c\u662f\u5927\u626d\u77e9\u8f93\u51fa\u7535\u673aEmoteq\u76843.2\u500d\uff0c\u800c\u8fd9\u4e2a\u7535\u673a\u662f\u6765\u81ea\u4e8eMIT\u7535\u6c14\u5b66\u9662Jeffery H. Lang\u90a3\u91cc\u3002\u4e13\u4e1a\u7684\u7535\u673a\u5f97\u53bb\u627e\u4e13\u4e1a\u5177\u6709\u7535\u673a\u80cc\u666f\u7684\u4eba\u53bb\u505a\uff0c\u8fd9\u70b9\u5f88\u91cd\u8981\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u6bd4\u9a71\u52a8\u5668\u8f93\u51fa\u5bc6\u5ea6\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u77e5\u9053\u76ee\u524dSEA\u8fd8\u80fd\u5b58\u5728\u7684\u610f\u4e49\uff0c\u51cf\u901f\u7bb1\u7684\u5f15\u5165\u5b9e\u5b9e\u5728\u5728\u5730\u6781\u5927\u63d0\u5347\u4e86\u9a71\u52a8\u5668\u8fd9\u4e2a\u6574\u4f53\u7684\u8f93\u51fa\u5bc6\u5ea6\uff08\u6211\u6307\u7684\u662f\u5bc6\u5ea6\uff0c\u5e76\u4e0d\u662f\u8f93\u51fa\u626d\u77e9\uff0c\u6ce8\u610f\uff09\u3002\u800c\u5927\u51cf\u901f\u6bd4\u51cf\u901f\u7bb1\u7684\u5f15\u5165\u5e26\u6765\u7684\u9759\u6469\u64e6\u529b\u4e0e\u975e\u7ebf\u6027\u5219\u5426\u8ba4\u4e86\u7528\u7535\u6d41\u73af\u505a\u529b\u63a7\u7684\u65b9\u6848\uff0c\u5f15\u51fa\u4e86\u540e\u7eed\u4e00\u7cfb\u5217SEA\u76f8\u5173\u7684\u95ee\u9898\u3002")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u4e2a\u4eba\u603b\u7ed3\u4e0e\u76f8\u5173\u6311\u6218"},"\u4e2a\u4eba\u603b\u7ed3\u4e0e\u76f8\u5173\u6311\u6218\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u52a8\u6001\u7269\u7406\u4ea4\u4e92\u80fd\u529b\u7684\u5b71\u5f31\uff08\u5177\u4f53\u6307IMF: Impact Mitigation Factor\uff09\u662f\u5e38\u89c4\u65b9\u6848\u5c06\u4f1a\u88ab\u53d6\u4ee3\u7684\u4e3b\u8981\u539f\u56e0\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u76ee\u524d\u201c\u5927\u626d\u77e9\u201d\u7535\u673a\uff08Motor\uff09\u8f93\u51fa\u5bc6\u5ea6\u7684\u4e0d\u8db3\u662fSEA\u4e0d\u80fd\u88ab\u5b8c\u5168\u53d6\u4ee3\u7684\u4e3b\u8981\u539f\u56e0\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5927\u626d\u77e9\u8f93\u51fa\u7535\u673a\u80fd\u529b\u63d0\u5347\u5230\u76ee\u524d\u76843\u500d\uff08\u5373\u8f93\u51fa\u5bc6\u5ea6\u5230\u8fbe\u7ea680N\xb7m/kg\uff09,SEA\u5219\u5c06\u6162\u6162\u9000\u51fa\u821e\u53f0\u3002\u56e0\u4e3a\u4f5c\u8005\u8ba4\u4e3a\uff0cSEA\u673a\u68b0\u6027\u80fd\u4e0a\u7684\u6297\u51b2\u51fb\u548c\u50a8\u80fd\u5728\u672c\u4f53\u9a71\u52a8\u5668\u65b9\u6848\u7684\u7535\u673a\u63a7\u5236\u5c42\u9762\u90fd\u80fd\u5b9e\u73b0\uff0c\u7cfb\u7edf\u7684\u590d\u6742\u6027\u5e94\u8be5\u4ece\u673a\u68b0\u5c42\u9762\u79fb\u5230\u7535\u6c14\u5c42\u9762\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6211\u4eec\u7ad9\u5730\u66f4\u9ad8\u4e00\u70b9\u53bb\u770b\uff1a\u6240\u8c13\u7535\u673a\u7684\u666e\u904d\u7279\u6027\u201c\u9ad8\u901f\u4f4e\u626d\u77e9\u201d\u5176\u5b9e\u5e76\u4e0d\u592a\u9002\u5408\u817f\u8db3\u5f0f\u4eba\u578b\u673a\u5668\u4eba\u7684\u5e94\u7528\u9886\u57df\uff0c\u800c\u6db2\u538b\u7cfb\u7edf\u7684\u7279\u6027\u5219\u6b63\u597d\u5951\u5408\u2014\u2014\u6ce2\u58eb\u987f\u52a8\u529b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u56e0\u4e3a\u6211\u4e0d\u5177\u6709\u5f88\u4e13\u4e1a\u7684\u7535\u673a\u80cc\u666f\uff0c\u6240\u4ee5\u4e0d\u662f\u5f88\u786e\u5b9a\u5e38\u89c4\u7684\u7535\u673a\u65b9\u6848\uff1a\u5373\u94dc\u8d28\u7ebf\u5708+\u6c38\u78c1\u4f53\uff0c\u662f\u5426\u5df2\u7ecf\u5230\u8fbe\u4e86\u6781\u9650\u7684\u8f93\u51fa\u5bc6\u5ea6\uff08\u6ce8\u610f\u662f\u5bc6\u5ea6\uff09\u3002\u5982\u679c\u60f3\u8981\u98de\u8dc3\u6027\u7684\u63d0\u5347\u7535\u673a\u7684\u8f93\u51fa\u6027\u80fd\uff0c\u7535\u673a\u662f\u5426\u9700\u8981\u9769\u547d\u6027\u7684\u6539\u53d8\uff0c\u8fd9\u786e\u5b9e\u662f\u5f88\u5927\u7684\u6311\u6218\u3002\uff08\u8fd9\u91cc\u5f88\u5e0c\u671b\u5177\u6709\u4e13\u4e1a\u7535\u673a\u80cc\u666f\u7684\u670b\u53cb\u80fd\u591f\u8ba8\u8bba\u4ee5\u4e0b\uff09")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Wensing, Patrick M., Albert Wang, Sangok Seok, David Otten, Jeffrey Lang, and Sangbae Kim. "Proprioceptive actuator design in the MIT cheetah: Impact mitigation and high-bandwidth physical interaction for dynamic legged robots." IEEE Transactions on Robotics (2017).'),(0,r.kt)("li",{parentName:"ol"},'Lorenzo Baccelliere, Navvab Kashiri, Luca Muratore, Arturo Laurenzi, Ma\u0142gorzata Kamedula, Alessio Margan, Stefano Cordasco, Jorn Malzahn, Nikos G. Tsagarakis. "Development of a Human Size and Strength Compliant Bi-ManualPlatform for Realistic Heavy Manipulation Tasks", IROS 2017')))}m.isMDXComponent=!0}}]);