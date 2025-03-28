"use strict";(self.webpackChunkpolkadex_docs=self.webpackChunkpolkadex_docs||[]).push([[188],{3327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(8168),n=(r(6540),r(5680));const a={id:"orderbookArchitecture",title:"Polkadex Orderbook Architecture",sidebar_label:"Architecture"},i=void 0,c={unversionedId:"orderbookArchitecture",id:"orderbookArchitecture",title:"Polkadex Orderbook Architecture",description:"Polkadex can offer all of the above benefits thanks to a sophisticated technology stack. It is the first project that uses the Substrate Abstraction Layer for SGX technology to build a decentralized exchange, and one of the first use cases of this technology in general.",source:"@site/docs/doc2-polkadexOrderbookArchitecture.md",sourceDirName:".",slug:"/orderbookArchitecture",permalink:"/polkadex/develop/orderbookArchitecture",draft:!1,editUrl:"https://github.com/Polkadex-Substrate/polkadex-docs/edit/master/docs/doc2-polkadexOrderbookArchitecture.md",tags:[],version:"current",lastUpdatedAt:1620642422,formattedLastUpdatedAt:"May 10, 2021",frontMatter:{id:"orderbookArchitecture",title:"Polkadex Orderbook Architecture",sidebar_label:"Architecture"}},s={},l=[],d={toc:l},h="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(h,(0,o.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Polkadex can offer all of the above benefits thanks to a sophisticated technology stack. It is the first project that uses the Substrate Abstraction Layer for SGX technology to build a decentralized exchange, and one of the first use cases of this technology in general."),(0,n.yg)("p",null,"The architecture of the Polkadex Orderbook is unique because it is a combination of multiple technologies: blockchain, parachain, TEE, IPFS and other latest technologies available in the blockchain industry today."),(0,n.yg)("p",null,"Polkadex Orderbook consists of four core parts: Polkadex Network, Trusted Execution Environment, Orderbook Engine and IPFS"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Polkadex Network")," is the native blockchain that contains the Polkapool and secures the actions of Polkadex Orderbook.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Trusted Execution Environment (TEE)")," is a technology invented by Intel that allows modern CPUs to have an isolated section independent of the Operating System, BIOS and other core components of a computer. Its main advantage is that the computation executed in TEE is verified by the blockchain and any tampering in the logic will result in the blockchain rejecting the TEE. TEE handles the balance state management of users in the Orderbook. It prevents theft of funds, verifies the matched trades provided by the Orderbook Engine, settles trades and enables the trader to reserve and unreserve assets on the native blockchain.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Orderbook Engine")," maintains a high-performance Orderbook, matches trades and provides them with TEE for verification and trade settlement.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"IPFS or Interplanetary File System")," maintains a snapshot of the latest state of balance transfers. In case the hardware is corrupted or the network access is lost or if the operator itself is compromised or turns a bad actor, blockchain rejects all future transfers from the orderbook and returns the funds to its users within 12 seconds, the fastest recovery mechanisms available in the market today. This acts like an insurance policy for the entire exchange."))),(0,n.yg)("p",null,"The diagram below shows how Polkadex Orderbook executes the trades."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"img",src:r(4012).A,width:"1965",height:"1613"})))}p.isMDXComponent=!0},4012:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/orderbookBanner-b6e5342dbae5eafcae07eac56043acc3.jpg"},5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(r),u=n,f=h["".concat(s,".").concat(u)]||h[u]||p[u]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);