import{p as O,d as C,f as d,o as k,i as F,t as c,h as p,j as H,s as r,E as n,D as l,x,k as o,q as I,m as i,G as J}from"./iframe-B3TcvJsq.js";import"./legacy-BnfyogKm.js";import{e as K,i as M}from"./each-BSye3epp.js";import{s as a}from"./attributes-CkHowp77.js";import{i as Q}from"./lifecycle-NITQEYl6.js";import"./preload-helper-Ct5FWWRu.js";import"./style-B3ufI60B.js";var R=I('<line class="svelte-li7mp6"></line><rect y="200" width="100" height="50" class="subsystem-box svelte-li7mp6"></rect><text y="230" text-anchor="middle" class="svelte-li7mp6"> </text>',1),T=d('<div class="svg-container svelte-li7mp6"><svg width="100%" height="100%" viewBox="0 0 800 300"><rect x="350" y="50" width="100" height="60" class="platform-box svelte-li7mp6"></rect><text x="400" y="85" text-anchor="middle" class="svelte-li7mp6"> </text><!></svg></div>'),U=d("<p>No subsystems found.</p>"),W=d("<h2> </h2> <!>",1);function E(z,u){O(u,!1);let t=C(u,"platform",8);Q();var h=W(),_=k(h),P=o(_),V=r(_,2);{var A=e=>{var m=T(),B=o(m),g=r(o(B)),D=o(g),N=r(g);K(N,1,()=>(n(t()),l(()=>t().subsystems)),M,(j,b,G)=>{const v=J(()=>100+G*200);var y=R(),s=k(y);a(s,"x1",400),a(s,"y1",110),a(s,"y2",200);var S=r(s),w=r(S),L=o(w);c(()=>{a(s,"x2",i(v)+50),a(S,"x",i(v)),a(w,"x",i(v)+50),x(L,(i(b),l(()=>i(b).label)))}),p(j,y)}),c(()=>x(D,(n(t()),l(()=>t().label)))),p(e,m)},q=e=>{var m=U();p(e,m)};F(V,e=>{n(t()),l(()=>t().subsystems.length>0)?e(A):e(q,!1)})}c(()=>x(P,(n(t()),l(()=>t().label)))),p(z,h),H()}E.__docgen={data:[{name:"platform",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"PlatformVizualizationView.svelte"};const st={component:E,title:"SDL/SSN/Platform Visualization"},f={args:{platform:{uri:"http://example.org/platform1/",label:"Example Platform",subsystems:[{uri:"http://example.org/platform1/s1",label:"Sensor System A"},{uri:"http://example.org/platform1/s2",label:"Actuator B"}]}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    platform: {
      uri: "http://example.org/platform1/",
      label: "Example Platform",
      subsystems: [{
        uri: "http://example.org/platform1/s1",
        label: "Sensor System A"
      }, {
        uri: "http://example.org/platform1/s2",
        label: "Actuator B"
      }]
    }
  }
}`,...f.parameters?.docs?.source}}};const rt=["Example"];export{f as Example,rt as __namedExportsOrder,st as default};
