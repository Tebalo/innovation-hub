(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[175],{8084:function(e,n,t){Promise.resolve().then(t.bind(t,8480))},8480:function(e,n,t){"use strict";t.r(n);var r=t(9268),i=t(6006),a=t(4214);let s=()=>{let[e,n]=(0,i.useState)(null),t={SubjectID:"CONT-1",ContextName:"Customer",ContainerName:"NextBestAction",Channel:"Web",Direction:"Inbound",AppID:"CDHDemo",Placements:"Hero,Tile,Tile,Tile"};return(0,i.useEffect)(()=>{let e=async()=>{try{let e=await a.Z.get("https://cdh.digitalfastforward.cloud:8443/prweb/PRRestService/PegaMKTContainer/V3/Container",{params:t});n(e.data)}catch(e){console.error(e)}};e()},[]),(0,r.jsx)("div",{children:e?(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Next Best Action"}),e.ContainerList.map(e=>(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e.ContainerName}),e.RankedResults.map(e=>(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:e.Treatment}),(0,r.jsx)("p",{children:e.ShortDescription}),(0,r.jsx)("img",{src:e.ImageURL,alt:e.Treatment}),(0,r.jsx)("a",{href:e.ClickThroughURL,children:"Learn More"})]},e.InteractionID))]},e.ContainerName))]}):(0,r.jsx)("p",{children:"Loading..."})})};n.default=s}},function(e){e.O(0,[348,667,139,744],function(){return e(e.s=8084)}),_N_E=e.O()}]);