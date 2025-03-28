"use strict";(self.webpackChunkpolkadex_docs=self.webpackChunkpolkadex_docs||[]).push([[977],{3032:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(8168),r=(o(6540),o(5680));const a={id:"orderbookIntroduction",title:"Polkadex Orderbook Introduction",sidebar_label:"Introduction"},i=void 0,l={unversionedId:"orderbookIntroduction",id:"orderbookIntroduction",title:"Polkadex Orderbook Introduction",description:"Polkadex Orderbook is our core product. It is a fully decentralized Layer 2 based exchange built on top of the Polkadot Network and featuring an orderbook. While working on Polkadex Orderbook we thought about two groups of traders:",source:"@site/docs/doc2-polkadexOrderbook.md",sourceDirName:".",slug:"/orderbookIntroduction",permalink:"/kartheekgottipati/polkadex-docs/develop/orderbookIntroduction",draft:!1,editUrl:"https://github.com/Polkadex-Substrate/polkadex-docs/edit/master/docs/doc2-polkadexOrderbook.md",tags:[],version:"current",lastUpdatedAt:1620639877,formattedLastUpdatedAt:"May 10, 2021",frontMatter:{id:"orderbookIntroduction",title:"Polkadex Orderbook Introduction",sidebar_label:"Introduction"}},s={},d=[],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Polkadex Orderbook is our core product. It is a fully decentralized Layer 2 based exchange built on top of the Polkadot Network and featuring an orderbook. While working on Polkadex Orderbook we thought about two groups of traders:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The traders on traditional centralised exchanges who enjoy the speed of transactions and easy navigation but have to accept risks and give away control of their assets by putting a lot of trust in a centralized operator;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The traders on decentralized exchange platforms who limit the risks of losing their funds by trusting the code but have to put up with troubled UX, limited functionality and technology-specific issues."))),(0,r.yg)("p",null,"Polkadex Orderbook keeps the convenience of a centralized exchange but eliminates its bottlenecks by decentralizing the custody of assets. Polkadex Orderbook implements a Layer 2 Trusted Execution Environment (TEE) on top of Polkadex. This mechanism allows an operator to maintain the Orderbook and controls that the operator cannot cheat since the results produced by the TEE contain cryptographic proof. In the event of tampering, the blockchain can invalidate the proof thereby not accepting the tampered state submitted by the Operator. The funds of the user always stay in the native blockchain and are controlled only by the user's private key. The Layer 2 solution only allows placing and executing trades but not transferring any balances. It additionally ensures that only the trader's private key can initiate a balance transfer.\n",(0,r.yg)("img",{alt:"img",src:o(5629).A,width:"1202",height:"1034"})),(0,r.yg)("p",null,"Polkadex is an innovative product that currently has no analogues on the market. Modern decentralized exchanges cannot support a trading engine that is fast enough to run the traditional orderbook efficiently. As a consequence, they also lack liquidity. DEXes that experiment with orderbooks attempt to do it off-chain, sometimes with a single point of attack and without verifiability. In our opinion, a decentralized exchange with functionality that cannot be verified publicly is a contradiction of DeFi\u2019s mission."),(0,r.yg)("p",null,"The majority of DEXes copied Uniswap and moved to an AMM based system. In Polkadex we aim to find a real solution to users\u2019 needs and create an ultimate trading experience, not settle for the compromise."),(0,r.yg)("p",null,"Polkadex Orderbook brings users advanced trading features on a non-custodial exchange. It is a unique gateway mechanism that allows users to trust a non-custodial operator who is at the same time capable of executing trades in a Level-2 environment at very high speed. Since this operator has no control over funds, transactions are peer-to-peer and fully decentralized."),(0,r.yg)("p",null,"Polkadex Orderbook also keeps the fees in check, as we will not charge any network fees for transactions. Feeless transactions can be achieved due to our Layer 2 scaling solution on SubstraTEE (an abstraction layer for the Substrate framework of the SGX Trusted Execution Environment). All the orders are executed by a non-custodial operator and sent back to the blockchain through TEE implemented balance transfers. Since all the executions are happening off-chain, verifying and eliminating bad actors in the process, there are no fees for transfers.\n",(0,r.yg)("img",{alt:"img",src:o(6751).A,width:"1203",height:"461"})),(0,r.yg)("hr",null),(0,r.yg)("p",null,"For both professional and novice crypto traders, Polkadex Orderbook aims to offer:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Highest level of security for user\u2019s funds"),(0,r.yg)("li",{parentName:"ul"},"High transaction speed of up to 500,000 transactions per second and low latency of 20 milliseconds"),(0,r.yg)("li",{parentName:"ul"},"Zero gas fees"),(0,r.yg)("li",{parentName:"ul"},"Interoperability between blockchains"),(0,r.yg)("li",{parentName:"ul"},"Cross-chain liquidity support"),(0,r.yg)("li",{parentName:"ul"},"Eliminated front-running"),(0,r.yg)("li",{parentName:"ul"},"Advanced trading features including high-frequency trading"),(0,r.yg)("li",{parentName:"ul"},"Integration with trading bots and market makers with lightning-fast APIs"),(0,r.yg)("li",{parentName:"ul"},"Convenient and pleasant user experience on the desktop, mobile and app versions"),(0,r.yg)("li",{parentName:"ul"},"Opportunity to buy crypto directly from fiat")),(0,r.yg)("p",null,"As a trader on Polkadex, you can enjoy the best of both centralized and decentralized exchange worlds focusing only on the important \u2013 making profitable trades."))}p.isMDXComponent=!0},5629:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/fluidHero-2d1cdb1775ba90f99e6ffc37a16af9d1.png"},5680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>f});var n=o(6540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(o),h=r,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6751:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/technologiesHero-ff19d128777a012e4c89d2df083a9a11.png"}}]);