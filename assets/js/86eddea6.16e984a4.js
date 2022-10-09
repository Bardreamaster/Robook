"use strict";(self.webpackChunkrobook=self.webpackChunkrobook||[]).push([[5979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),h=r,k=s["".concat(i,".").concat(h)]||s[h]||m[h]||a;return n?l.createElement(k,o(o({ref:t},c),{},{components:n})):l.createElement(k,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const a={title:"\u5982\u4f55\u5f00\u59cbSLAM\u5b66\u4e60"},o=void 0,p={unversionedId:"handbook/control/slam_howto",id:"handbook/control/slam_howto",title:"\u5982\u4f55\u5f00\u59cbSLAM\u5b66\u4e60",description:"\u8f6c\u8f7d\u4e8e\uff1ahttps://zhuanlan.zhihu.com/p/379070942",source:"@site/docs/handbook/control/slam_howto.md",sourceDirName:"handbook/control",slug:"/handbook/control/slam_howto",permalink:"/docs/handbook/control/slam_howto",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5982\u4f55\u5f00\u59cbSLAM\u5b66\u4e60"},sidebar:"handbookSiderbar",previous:{title:"\u673a\u5668\u4eba\u63a7\u5236\u5206\u4eab",permalink:"/docs/handbook/control/controlsyh"},next:{title:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u5728\u673a\u5668\u4eba\u8fd0\u52a8\u63a7\u5236\u4e2d\u4e00\u76f4\u5728\u5f3a\u8c03\u529b\u63a7\uff1f\uff08Force/Torque Control\uff09",permalink:"/docs/handbook/control/whyforcecontrol"}},i={},u=[{value:"\u4e86\u89e3\u9636\u6bb5",id:"\u4e86\u89e3\u9636\u6bb5",level:2},{value:"\u5b66\u4e60\u6846\u67b6",id:"\u5b66\u4e60\u6846\u67b6",level:2},{value:"\u8fdb\u9636\u9636\u6bb5",id:"\u8fdb\u9636\u9636\u6bb5",level:2},{value:"\u8865\u5145\u9636\u6bb5",id:"\u8865\u5145\u9636\u6bb5",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"SLAM\u8bba\u6587\u7efc\u8ff0",id:"slam\u8bba\u6587\u7efc\u8ff0",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8f6c\u8f7d\u4e8e\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/379070942"},"https://zhuanlan.zhihu.com/p/379070942"))),(0,r.kt)("p",null,"\u81ea\u52a8\u9a7e\u9a76\u91cc\u9996\u5148\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\u5c31\u662f\u5efa\u56fe\u548c\u5b9a\u4f4d\uff0c\u5982\u679c\u5730\u56fe\u548c\u5b9a\u4f4d\u6ca1\u6709\u505a\u597d\uff0c\u65e0\u4eba\u8f66\u6839\u672c\u5c31\u8dd1\u4e0d\u8d77\u6765\u3002\u800c\u5efa\u56fe\u548c\u5b9a\u4f4d\u53c8\u6d89\u53caSLAM\u6280\u672f\u3002\u8fd9\u91cc\u6211\u4e3b\u8981\u662f\u5206\u4eab\u4e0b\u6211\u5b66\u4e60SLAM\u7684\u7ecf\u5386\u548c\u4e00\u4e9b\u5c0f\u5c0f\u7684\u601d\u8003\uff0c\u5e0c\u671b\u80fd\u591f\u5e2e\u52a9\u5927\u5bb6\u3002"),(0,r.kt)("h2",{id:"\u4e86\u89e3\u9636\u6bb5"},"\u4e86\u89e3\u9636\u6bb5"),(0,r.kt)("p",null,"\u56e0\u4e3a\u6211\u662f\u4ece\u96f6\u5f00\u59cb\u7684\uff0c\u6211\u8ba4\u4e3a\u7b2c\u4e00\u4e2a\u9636\u6bb5\u4e3b\u8981\u662f\u4e86\u89e3SLAM\u6280\u672f\uff0c\u77e5\u9053\u5b83\u7684\u5927\u81f4\u539f\u7406\u548c\u7528\u9014\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("p",null,"SLAM\u7684\u540d\u79f0\u7406\u89e3\u8d77\u6765\u975e\u5e38\u5bb9\u6613\uff0c\u6211\u89c9\u5f97SLAM\u6280\u672f\u4e2d\u53d6\u540d\u5b57\u552f\u4e00\u503c\u5f97\u63a8\u8350\u7684\u5c31\u662fSLAM\u8fd9\u4e2a\u540d\u8bcd\u672c\u8eab\u3002\u540c\u65f6\u5b9a\u4f4d\u4e0e\u5730\u56fe\u6784\u5efa\uff08Simultaneous localization and mapping\uff09\uff0c\u6211\u4eec\u6765\u5230\u4e00\u4e2a\u964c\u751f\u73af\u5883\uff0c\u7531\u4e8e\u6ca1\u6709\u5730\u56fe\uff0c\u53ea\u80fd\u901a\u8fc7\u63a2\u7d22\uff0c\u4e00\u8fb9\u83b7\u53d6\u81ea\u5df1\u7684\u76f8\u5bf9\u4f4d\u7f6e\uff0c\u4e00\u8fb9\u7ed8\u5236\u5f53\u524d\u73af\u5883\u7684\u5730\u56fe\uff0c\u5f53\u63a2\u7d22\u5b8c\u8be5\u533a\u57df\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5f97\u5230\u8be5\u672a\u77e5\u533a\u57df\u7684\u5b8c\u6574\u5730\u56fe\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.liangtengyu.com:9998/images/image_29cac1bb.png",alt:"image_29cac1bb.png"})," "),(0,r.kt)("p",null,"\u9664\u4e86SLAM\uff0c\u5176\u5b83\u7684\u4e00\u4e9b\u540d\u8bcd\u5927\u90e8\u5206\u90fd\u6666\u6da9\u96be\u61c2\uff0c\u6211\u4e00\u5ea6\u6000\u7591\u8fd9\u4e9b\u5927\u795e\u90fd\u662f\u5728\u79c0\u5c60\u9f99\u6280\u80fd\u3002\u7ad9\u5728\u4e00\u4e2a\u65b0\u624b\u7684\u89d2\u5ea6\u6765\u8bf4\uff0c\u4e00\u4e2a\u8d34\u5207\u548c\u5bb9\u6613\u7406\u89e3\u7684\u6280\u672f\u540d\u8bcd\u975e\u5e38\u5173\u952e\uff0c\u4e00\u4e2a\u4e0d\u77e5\u6240\u63aa\u7684\u540d\u8bcd\u5f80\u5f80\u90fd\u4f1a\u5413\u9000\u65b0\u4eba\uff0c\u6bd4\u5982BA\uff0c\u674e\u4ee3\u6570\u7fa4\uff0c\u8bcd\u888b\u3002\u6211\u4e0d\u6392\u9664\u5176\u5b83\u5b66\u79d1\u7684\u4e00\u4e9b\u7f29\u5199\u548c\u4e13\u6709\u540d\u8bcd\uff0c\u4f46\u662f\u8fd9\u4e9b\u540d\u8bcd\u5b8c\u5168\u65e0\u6cd5\u7528\u4e00\u53e5\u8bdd\u89e3\u91ca\u5b83\u7684\u7528\u9014\uff0c\u7406\u89e3\u8d77\u6765\u4e5f\u975e\u5e38\u4e0d\u5f62\u8c61\uff0c\u8fd9\u662f\u6211\u89c9\u5f97\u4e0d\u592a\u5408\u7406\u7684\u5730\u65b9\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u524d\u7aef\u548c\u540e\u7aef\uff0c\u5728\u8ba1\u7b97\u673a\u6280\u672f\u4e2d\u524d\u7aef\u901a\u5e38\u6307\u7684\u662f\u7f51\u9875\uff0c\u540e\u7aef\u901a\u5e38\u6307\u7684\u662f\u540e\u53f0\u7684\u670d\u52a1\u5668\u7a0b\u5e8f\u3002\u800cSLAM\u4e2d\u6070\u6070\u53c8\u6709\u524d\u7aef\u548c\u540e\u7aef\u7684\u6982\u5ff5\uff0c\u5bfc\u81f4\u6211\u7406\u89e3\u8d77\u6765\u4e5f\u6709\u70b9\u8d39\u529b\u6c14\uff0c\u4e00\u662f\u56e0\u4e3a\u6211\u4e4b\u524d\u5c31\u6709\u60ef\u6027\u601d\u7ef4\uff0c\u4e8c\u662f\u611f\u89c9\u4e5f\u4e0d\u592a\u8d34\u5207\uff0c\u867d\u7136\u529f\u80fd\u4e0a\u6709\u4e00\u4e2a\u5927\u6982\u7684\u5f71\u5b50\uff0c\u4f46\u662f\u62ff\u524d\u7aef\u548c\u540e\u7aef\u53bb\u7edf\u79f0\u8fd92\u4e2a\u8fc7\u7a0b\u6709\u4ec0\u4e48\u73b0\u5b9e\u7684\u610f\u4e49\u5417\uff1f\u4e0b\u9762\u8d34\u4e00\u5f20\u524d\u7aef\u548c\u540e\u7aef\u5212\u5206\u7684\u56fe\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.liangtengyu.com:9998/images/image_306eb2d8.png",alt:"image_306eb2d8.png"})," "),(0,r.kt)("p",null,"\u4ee5\u6211\u76ee\u524d\u7684\u7406\u89e3\u524d\u7aef\u662f\u8fdb\u884c\u7279\u5f81\u63d0\u53d6\uff0c\u83b7\u53d6\u76f8\u90bb\u5e27\u7684\u4f4d\u59ff\u53d8\u6362\uff0c\u800c\u540e\u7aef\u5219\u662f\u8fdb\u884c\u5730\u56fe\u7684\u62fc\u63a5\u548c\u4f4d\u59ff\u4f18\u5316\u3002\u8fd92\u4e2a\u8fc7\u7a0b\u6709\u70b9\u7c7b\u4f3c\u5728\u7ebf\u8ba1\u7b97\u548c\u79bb\u7ebf\u8ba1\u7b97\u7684\u67b6\u6784\uff0c\u4e5f\u5c31\u662f\u5927\u6570\u636e\u7684lambda\u67b6\u6784\uff0c\u5b9e\u65f6\u8ba1\u7b97\u7684\u662f\u76f8\u90bb\u5e27\u7684\u4f4d\u59ff\uff0c\u7136\u540e\u518d\u79bb\u7ebf\u8ba1\u7b97\u4f4d\u59ff\u7684\u4f18\u5316\u5e76\u4e14\u63d0\u4f9b\u7ed9\u5728\u7ebf\u4f7f\u7528\u3002\u7528\u524d\u548c\u540e\u6765\u6307\u4ee3\u8fd92\u4e2a\u8fc7\u7a0b\u6211\u65e0\u6cd5\u7406\u89e3\u5b83\u4eec\u7684\u4f5c\u7528\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u6211\u89c9\u5f97\u4e86\u89e3\u9636\u6bb5\u6700\u4e3b\u8981\u7684\u4e5f\u662f\u6700\u91cd\u8981\u7684\u662f\u7406\u89e3SLAM\u7684\u540d\u8bcd\u672c\u8eab\uff0c\u5e76\u4e14\u77e5\u9053SLAM\u7684\u5927\u81f4\u7684\u539f\u7406\uff0c\u4e5f\u5c31\u662f\u901a\u8fc7\u76f8\u90bb\u5e27\u6765\u83b7\u53d6\u76f8\u5bf9\u4f4d\u59ff\uff0c\u8ba1\u7b97\u76f8\u5bf9\u4f4d\u7f6e\uff0c\u540c\u65f6\u5229\u7528\u5386\u53f2\u8f68\u8ff9\u4fe1\u606f\u6765\u5efa\u56fe\uff0c\u5e76\u4e14\u4f18\u5316\u4e4b\u524d\u548c\u73b0\u5728\u7684\u4f4d\u59ff\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u9636\u6bb5\u77e5\u9053\u4e86SLAM\u7684\u5927\u6982\u539f\u7406\u5c31\u6210\u529f\u4e86\uff0c\u5343\u4e07\u4e0d\u8981\u518d\u53bb\u523b\u610f\u7406\u89e3\u4e0a\u8ff0\u8fd9\u4e9b\u540d\u8bcd\uff0c\u6709\u53ef\u80fd\u53ea\u662f\u589e\u52a0\u70e6\u607c\u3002"),(0,r.kt)("h2",{id:"\u5b66\u4e60\u6846\u67b6"},"\u5b66\u4e60\u6846\u67b6"),(0,r.kt)("p",null,"\u56e0\u4e3a\u505a\u81ea\u52a8\u9a7e\u9a76\uff0c\u8fd9\u91cc\u6211\u4e3b\u8981\u4ee5Lidar SLAM\u4e3a\u4f8b\u5b50\u6765\u8bf4\u660e\u3002\u76ee\u524dlidar slam\u6211\u8ba4\u4e3a\u4f18\u5148\u5b66\u4e60lego-loam\u6846\u67b6\uff0c\u7136\u540e\u662fcartographer\u6846\u67b6\u3002\u5176\u5b9e\u5982\u679c\u5f00\u59cb\u53ea\u662f\u4e86\u89e3SLAM\u7684\u539f\u7406\uff0c\u4e00\u4e0b\u5b50\u8df3\u5230\u770b\u6846\u67b6\u53ef\u80fd\u89c9\u5f97\u8de8\u5ea6\u6709\u70b9\u5927\uff0c\u5b9e\u9645\u4e0a\u6211\u662f\u975e\u5e38\u5efa\u8bae\u4e00\u5f00\u59cb\u5c31\u662f\u53bb\u5b66\u4e60\u6846\u67b6\uff0c\u800c\u4e0d\u662f\u770b\u4e66\uff0c\u5b66\u4e60\u5b8c\u6574\u7406\u8bba\uff0c\u5b66\u4e60\u6570\u5b66\u4e4b\u7c7b\uff0c\u7406\u7531\u5982\u4e0b\u3002"),(0,r.kt)("p",null,"\u9996\u5148LEGO-LOAM\u7684\u4ee3\u7801\u603b\u5171\u624d4000\u884c\uff0c\u4e5f\u5c31\u662f\u8bf4\u5c31\u7b97\u662f\u4e00\u884c\u4e00\u884c\u7684\u5543\uff0c\u96be\u5ea6\u4e5f\u4e0d\u4f1a\u975e\u5e38\u5927\uff0c\u4e00\u5929\u770b100\u884c\uff0c40\u5929\u4e5f\u770b\u5b8c\u4e86\u3002\u603b\u4e4b\u6ca1\u770b\u5230\u4ee3\u7801\u524d\u6211\u8fd8\u5fd0\u5fd1\uff0c\u4ee3\u7801\u4f1a\u4e0d\u4f1a\u52a8\u5219\u4e0a\u4e07\u884c\uff0c\u751a\u81f3\u51e0\u5341\u4e07\u884c\uff0c\u65e2\u7136\u53ea\u67094000\u884c\uff0c\u6211\u89c9\u5f97\u5b8c\u5168\u53ef\u4ee5\u653e\u5fc3\u4e86\uff0c\u4e0b\u5b9a\u51b3\u5fc3\u5543\u4ee3\u7801\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("p",null,"\u5176\u6b21LEGO-LOAM\u8fd8\u6709\u8bba\u6587\u8bb2\u89e3\uff0c\u6211\u89c9\u5f97\u8fd9\u975e\u5e38\u5173\u952e\uff0c\u6bd4\u5982\u5f00\u59cb\u6211\u4ee5\u4e3aLEGO\u662f\u4ee3\u8868\u79ef\u6728\u7684\u610f\u601d\uff0c\u53ef\u4ee5\u7c7b\u4f3c\u4e50\u9ad8\u79ef\u6728\u6765\u642d\u5efaSLAM\u7cfb\u7edf\uff0c\u5b9e\u9645\u4e0aLEGO\u662f\u57fa\u4e8e\u5730\u9762\u505a\u4f18\u5316\uff08Lightweight and Ground-Optimized\uff09\u3002\u8bba\u6587\u4e2d\u4e5f\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u7a0b\u5e8f\u7684\u6bcf\u4e2a\u6b65\u9aa4\uff0c\u4ee5\u53ca\u539f\u56e0\u548c\u80cc\u666f\uff0c\u53ef\u4ee5\u8bf4\u7ed3\u5408\u4ee3\u7801\u98df\u7528\u6548\u679c\u975e\u5e38\u597d\u3002"),(0,r.kt)("p",null,"\u6700\u540e\uff0cLEGO-LOAM\u662f\u5f53\u524d\u6bd4\u8f83\u4e3b\u6d41\u7684\u5f00\u6e90Lidar SLAM\u7b97\u6cd5\uff0c\u5b66\u4e60\u52a8\u529b\u8db3\uff0c\u4e0d\u662f\u4ec0\u4e48\u8fc7\u65f6\u6216\u8005\u4e0d\u5b9e\u7528\u7684\u7b97\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.liangtengyu.com:9998/images/image_58af2cc5.png",alt:"image_58af2cc5.png"})," "),(0,r.kt)("p",null,"\u7b49\u770b\u5b8c\u5f00\u6e90\u6846\u67b6\uff0c\u57fa\u672c\u4e0a\u5c31\u5bf9SLAM\u7684\u6574\u4f53\u6846\u67b6\u6709\u4e86\u4e00\u4e2a\u5927\u81f4\u7684\u7406\u89e3\uff0c\u6bd4\u5982\u524d\u9762\u6240\u8bf4\u7684\u524d\u7aef\u3001\u540e\u7aef\uff0c\u5982\u4f55\u63d0\u53d6\u7279\u5f81\uff0c\u5982\u4f55\u505apose\u56fe\u4f18\u5316\uff0c\u56de\u73af\u68c0\u6d4b\u4e4b\u7c7b\u7684\u3002"),(0,r.kt)("h2",{id:"\u8fdb\u9636\u9636\u6bb5"},"\u8fdb\u9636\u9636\u6bb5"),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u672c\u4eba\u76ee\u524d\u4ec5\u9650\u4e8e\u524d\u97622\u4e2a\u9636\u6bb5\uff0c\u56e0\u6b64\u8fd9\u91cc\u4e3b\u8981\u662f\u4e00\u4e9b\u60f3\u6cd5\uff0c\u540e\u9762\u5982\u679c\u6709\u66f4\u8fdb\u4e00\u6b65\u7684\u5b66\u4e60\uff0c\u6211\u4f1a\u7ee7\u7eed\u8865\u5145\u3002"),(0,r.kt)("p",null,"\u7f51\u4e0a\u6709\u96c6\u6210\u4e86\u5404\u79cd\u7b97\u6cd5\u7684OpenSLAM\u5e73\u53f0\uff0c\u8fd9\u91cc\u9762\u96c6\u6210\u4e86\u4e00\u4e9b\u5f00\u6e90\u7684SLAM\u7b97\u6cd5\u3002\u6211\u7684\u7406\u89e3\u662fSLAM\u7b97\u6cd5\u6709\u70b9\u7c7b\u4f3c\u4e8e\u7f16\u7a0b\uff0c\u4e2a\u4eba\u6709\u5f88\u5927\u7684\u53d1\u6325\u7a7a\u95f4\uff0c\u800c\u4e0d\u662f\u6309\u90e8\u5c31\u73ed\u7684\u6309\u7167\u67d0\u51e0\u6b65\u64cd\u4f5c\u5c31\u53ef\u4ee5\u5b8c\u6210\uff0c\u6bd4\u5982\u63d0\u53d6\u7279\u5f81\uff0c\u6444\u50cf\u673a\u548cLidar\u63d0\u53d6\u7684\u65b9\u5f0f\u5c31\u4e0d\u4e00\u6837\uff0c\u800c\u4e14\u5982\u4f55\u63d0\u53d6\u7279\u5f81\u4e5f\u4e0d\u4e00\u6837\u3002\u5982\u4f55\u53bb\u9664\u6811\u53f6\uff0c\u5982\u4f55\u627e\u5230\u663e\u8457\u7684\u7279\u5f81\uff0c\u662f\u57fa\u4e8e\u4f20\u7edf\u7684\u67e5\u627e\u7ebf\u548c\u89d2\u7279\u5f81\uff0c\u8fd8\u662f\u57fa\u4e8e\u5176\u5b83\u7684\u7b97\u6cd5\uff0c\u8fd9\u4e9b\u90fd\u6ca1\u6709\u6210\u719f\u5b8c\u5584\u7684\u65b9\u6cd5\u8bba\uff0c\u90fd\u662f\u57fa\u4e8e\u7ecf\u9a8c\u548c\u65b9\u6cd5\u7684\u7ed3\u5408\uff0c\u4e5f\u5c31\u662f\u4e2a\u4eba\u7684\u53d1\u6325\u5360\u5f88\u5927\u7684\u56e0\u7d20\u3002"),(0,r.kt)("p",null,"\u62ffSLAM\u548c\u7f16\u7a0b\u76f8\u6bd4\uff0c\u867d\u71362\u8005\u7684\u5b9e\u73b0\u8d77\u6765\u90fd\u6709\u5f88\u5927\u7684\u53d1\u6325\u7a7a\u95f4\uff0c\u4f46\u662f\u7f16\u7a0b\u4e3a\u4ec0\u4e48\u597d\u5b66\u4e60\u4e00\u70b9\uff0c\u4e4b\u6240\u4ee5\u7f16\u7a0b\u53ef\u4ee5\u5feb\u901f\u5165\u95e8\u7684\u539f\u56e0\uff0c\u662f\u56e0\u4e3a\u6709\u975e\u5e38\u6210\u719f\u7684\u5b66\u4e60\u66f2\u7ebf\uff0c\u6bd4\u5982\u7f16\u7a0b\u5c31\u662f\u6570\u636e\u7ed3\u6784\u548c\u7b97\u6cd5\u3002\u56e0\u6b64\u5927\u90e8\u5206\u4eba\u4e86\u89e3\u4e0b\u7f16\u7a0b\u8bed\u8a00\uff0c\u7136\u540e\u5b66\u4e60\u6570\u636e\u7ed3\u6784\u548c\u7b97\u6cd5\uff0c\u5c31\u53ef\u4ee5\u5f88\u597d\u7684\u80dc\u4efb\u7f16\u7a0b\u4e86\u3002\u6240\u4ee5\u6211\u4e2a\u4eba\u89c9\u5f97SLAM\u5b66\u4e60\u7f51\u7ad9\u53ef\u4ee5\u4e0d\u8981\u4e00\u5473\u7684\u6c47\u96c6\u5404\u79cdSLAM\u7b97\u6cd5\uff0c\u7136\u540e\u6574\u6210\u4e00\u4e2a\u5927\u6742\u70e9\uff0c\u8ba9\u4e2a\u4eba\u53bb\u5b66\u4e60\uff0c\u800c\u662f\u5e94\u8be5\u628a\u5e95\u5c42\u6280\u672f\u62bd\u4e1d\u5265\u8327\uff0c\u603b\u7ed3\u6210\u4e00\u4e9b\u65b9\u6cd5\uff0c\u7136\u540e\u5206\u522b\u53bb\u6df1\u5165\u5b66\u4e60\uff0c\u7b49\u5230\u4f7f\u7528\u65f6\uff0c\u518d\u4ece\u8fd9\u4e9b\u65b9\u6cd5\u4e2d\u5bfb\u627e\u5408\u9002\u7684\u5de5\u5177\u53bb\u7ec4\u5408\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u7279\u5f81\u63d0\u53d6\uff0c\u5c31\u6709\u5730\u9762\u67e5\u627e\u7b97\u6cd5\uff0c\u805a\u7c7b\u7b97\u6cd5\uff0c\u8fd9\u4e9b\u7b97\u6cd5\u4ec0\u4e48\u65f6\u5019\u9002\u7528\u4e8e\u4ec0\u4e48\u60c5\u51b5\u3002\u5982\u4f55\u505a\u56de\u73af\u68c0\u6d4b\uff0c\u5982\u4f55\u8fdb\u884cpose-graph\u4f18\u5316\u7b49\u3002\u628a\u8fd9\u4e9b\u5355\u70b9\u7684\u6280\u672f\u7c7b\u4f3c\u6570\u636e\u7ed3\u6784\u548c\u7b97\u6cd5\u603b\u7ed3\u51fa\u6765\uff0c\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u5b66\u4e60\uff0c\u7136\u540e\u518d\u7ed3\u5408\u5177\u4f53\u7684\u573a\u666f\u53bb\u7ec4\u5408\u53d1\u6325\u51faSLAM\u7684\u5a01\u529b\uff0c\u8fd9\u53ef\u80fd\u662f\u6211\u76ee\u524d\u6bd4\u8f83\u63a8\u8350\u7684\u5b66\u4e60\u601d\u8def\u548c\u65b9\u6cd5\u3002"),(0,r.kt)("h2",{id:"\u8865\u5145\u9636\u6bb5"},"\u8865\u5145\u9636\u6bb5"),(0,r.kt)("p",null,"\u8fd9\u51e0\u5929\u53c8\u6c89\u4e0b\u5fc3\u6765\u770b\u4e86\u300aSLAM 14\u8bb2\u300b\u53ef\u4ee5\u8bf4\u8fd9\u672c\u4e66\u5bf9\u521d\u5b66\u8005\u6765\u8bf4\u975e\u5e38\u53cb\u597d\uff0c\u6211\u4e2a\u4eba\u89c9\u5f97\u6700\u5927\u7684\u6536\u83b7\u5728\u4e8e\uff0c\u5bf9\u57fa\u7840\u6982\u5ff5\u89e3\u51b3\u7684\u975e\u5e38\u597d\uff0c\u4e5f\u5c31\u662f\u8bf4\u867d\u7136\u4e4b\u524d\u7684\u77e5\u8bc6\u90fd\u61c2\uff0c\u4f46\u662f\u6ca1\u6709\u8054\u7cfb\u8d77\u6765\uff1b\u53e6\u5916\u5c31\u662f\u7ed3\u6784\u6e05\u6670\uff0c\u6bd4\u5982SLAM\u7684\u524d\u7aef\u3001\u540e\u7aef\u3001\u56de\u73af\u68c0\u6d4b\uff0c\u867d\u7136\u8fd9\u4e9b\u77e5\u8bc6\u524d\u9762\u90fd\u53ef\u4ee5\u4e86\u89e3\uff0c\u770b\u4e66\u4e4b\u540e\u53ef\u4ee5\u52a0\u6df1\u5370\u8c61\u548c\u7406\u89e3\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u662f\u6839\u636e\u6a21\u5757\u628a\u6bcf\u4e2a\u90e8\u5206\u5728\u8fdb\u4e00\u6b65\u505a\u6df1\uff0c\u6bd4\u5982\u524d\u7aef\u5c31\u770b\u5339\u914d\u7b97\u6cd5\uff0c\u540e\u7aef\u5c31\u770b\u4f18\u5316\u7b97\u6cd5\uff0c\u56de\u73af\u5c31\u770b\u5b57\u5178\u5339\u914d\u7b49\u3002\u5f53\u7136\u8fd8\u6709\u4e00\u4e9b\u5f00\u653e\u95ee\u9898\uff0c\u4f8b\u5982\u79fb\u52a8\u7269\u4f53\u6bd4\u8f83\u591a\u7684\u60c5\u51b5\uff0c\u73af\u5883\u53d8\u6362\u7684\u60c5\u51b5\uff0c\u957f\u96a7\u9053\u7b49\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u8bf4\u5b9e\u8bdd\u4e00\u5f00\u59cb\u6211\u53ea\u662f\u7528NDT\u5728\u5efa\u56fe\uff0c\u4e4b\u524d\u4e00\u76f4\u5c1d\u8bd5NDT\u5efa\u56fe\u6ca1\u6709\u6210\u529f\u7684\u539f\u56e0\u4e00\u662f\u6211\u6ca1\u6709\u7406\u89e3pose\u4e4b\u7c7b\u7684\u8ba1\u7b97\uff0c\u4e8c\u662f\u6ca1\u6709\u597d\u7684\u5de5\u5177\uff0c\u7279\u522b\u662f\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u80fd\u591f\u624b\u5de5\u52a0\u5165\u65cb\u8f6c\u4e4b\u7c7b\u65b9\u4fbf\u7406\u89e3\u3002\u5b9e\u73b0\u4e86NDT\u4e4b\u540e\uff0c\u540e\u9762\u5f00\u59cb\u63a5\u89e6lego-loam\uff0c\u4e4b\u524d\u4e5f\u662f\u89c9\u5f97\u9ad8\u6df1\u83ab\u6d4b\uff0c\u4f46\u662f\u4e00\u65e6\u4e0b\u5b9a\u51b3\u5fc3\uff0c\u5e76\u4e14\u53ea\u67094000\u884c\u7684\u4ee3\u7801\u91cf\u4e4b\u540e\uff0c\u63a5\u4e0b\u6765\u5c31\u5bb9\u6613\u591a\u4e86\uff0c\u5f53\u7136SLAM\u4e2d\u540d\u8bcd\u6df7\u6dc6\u548c\u523b\u610f\u5938\u5927\u4f18\u5316\u7b97\u6cd5\u516c\u5f0f\u4e4b\u7c7b\u7684\u4e5f\u662f\u963b\u788d\u5b66\u4e60\u7684\u91cd\u8981\u539f\u56e0\u4e4b\u4e00\uff0c\u5b9e\u9645\u4e0a\u8fd9\u4e9b\u4f18\u5316\u7b97\u6cd5\u90fd\u6709\u5bf9\u5e94\u7684\u5e93\u53ef\u4ee5\u5b9e\u73b0\uff0c\u5f00\u59cb\u4e0d\u7528\u523b\u610f\u7406\u89e3\u3002\u5982\u679c\u662f\u540e\u9762\u6d89\u53ca\u5f00\u53d1\u65b0\u7684\u7b97\u6cd5\uff0c\u53ef\u4ee5\u5728\u6b64\u57fa\u7840\u4e0a\u8fdb\u4e00\u6b65\u5b66\u4e60\u3002"),(0,r.kt)("p",null,"\u6700\u540e\u4faf\u6377\u8001\u5e08\u8bf4\u201c\u4f7f\u7528\u4e00\u4e2a\u4e1c\u897f\u5374\u4e0d\u77e5\u9053\u5b83\u7684\u539f\u7406\uff0c\u663e\u5f97\u4e0d\u592a\u9ad8\u660e\u3002\u201d\u5e0c\u671b\u5927\u5bb6\u767e\u5c3a\u7aff\u5934\u66f4\u8fdb\u4e00\u6b65\uff0c\u4e5f\u5e0c\u671bSLAM\u7684\u5b66\u4e60\u66f2\u7ebf\u80fd\u591f\u66f4\u52a0\u7cfb\u7edf\u548c\u4e13\u4e1a\u3002"),(0,r.kt)("p",null,"\u540e\u7eed\u6211\u4f1a\u5bf9lego-loam\u505a\u4e00\u4e9b\u7cfb\u7edf\u7684\u7b14\u8bb0\uff0c\u5e76\u4e14\u5c1d\u8bd5\u91cd\u6784lego-loam\u7684\u4ee3\u7801\u3002"),(0,r.kt)("h2",{id:"slam\u8bba\u6587\u7efc\u8ff0"},"SLAM\u8bba\u6587\u7efc\u8ff0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Past, Present, and Future of Simultaneous Localization And Mapping: Towards the Robust-Perception Age 2016\u5e74"),(0,r.kt)("li",{parentName:"ul"},"A critique of current developments in simultaneous localization and mapping 2016\u5e74")),(0,r.kt)("p",null,"\u5f80\u671f\u56de\u987e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/379070942"},"\u5982\u4f55\u5f00\u59cbSLAM\u5b66\u4e60\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/382460472"},"LeGO-LOAM\u5206\u6790\u4e4b\u70b9\u4e91\u5206\u5272\uff08\u4e00\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/384902839"},"LeGO-LOAM\u5206\u6790\u4e4b\u7279\u5f81\u63d0\u53d6\uff08\u4e8c\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/386235895"},"LeGO-LOAM\u5206\u6790\u4e4b\u5efa\u56fe\uff08\u4e09\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/386449627"},"LeGO-LOAM\u5206\u6790\u4e4b\u914d\u7f6e\uff08\u56db\uff09"))))}m.isMDXComponent=!0}}]);