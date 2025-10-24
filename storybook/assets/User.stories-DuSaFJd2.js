import{p as B,d as g,Q as J,f as k,i as R,h as p,j as M,s as t,k as a,t as Q,x as _}from"./iframe-B3TcvJsq.js";import{b as f}from"./input-DuSexQ4w.js";import"./theme-DJ84E762.js";import{B as w}from"./Button-CUiCVfMR.js";import"./preload-helper-Ct5FWWRu.js";import"./snippet-B44izKwC.js";import"./attributes-CkHowp77.js";import"./style-B3ufI60B.js";import"./index-C-YiXxc3.js";import"./each-BSye3epp.js";import"./this-CG9Jdc1Q.js";import"./bundle-mjs-0JNfDbnS.js";import"./svelte-element-C06za2H1.js";class c extends Error{}c.prototype.name="InvalidTokenError";function Y(i){return decodeURIComponent(atob(i).replace(/(.)/g,(e,r)=>{let s=r.charCodeAt(0).toString(16).toUpperCase();return s.length<2&&(s="0"+s),"%"+s}))}function F(i){let e=i.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return Y(e)}catch{return atob(e)}}function G(i,e){if(typeof i!="string")throw new c("Invalid token specified: must be a string");e||(e={});const r=e.header===!0?0:1,s=i.split(".")[r];if(typeof s!="string")throw new c(`Invalid token specified: missing part #${r+1}`);let d;try{d=F(s)}catch(o){throw new c(`Invalid token specified: invalid base64 for part #${r+1} (${o.message})`)}try{return JSON.parse(d)}catch(o){throw new c(`Invalid token specified: invalid json for part #${r+1} (${o.message})`)}}var H=k('<div><div class="text-p2blue-700 mb-2 text-2xl">Authenticated</div> <div class="text-p2blue-700 text-md mb-6"><div> </div> <div> </div></div> <!> <div><div class="mt-4 text-left"><div class="mt-2"><label for="accessToken" class="block text-sm font-semibold leading-6 text-gray-900">Access Token</label> <textarea rows="6" name="accessToken" id="accessToken" class="block w-full rounded-md border-0 bg-purple-200/50 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea></div> <div class="mt-2"><label for="idToken" class="block text-sm font-semibold leading-6 text-gray-900">Id Token</label> <textarea rows="6" name="idToken" id="idToken" class="block w-full rounded-md border-0 bg-purple-200/50 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea></div> <div class="mt-2"><label for="refreshToken" class="block text-sm font-semibold leading-6 text-gray-900">Refresh Token</label> <textarea rows="6" name="refreshToken" id="refreshToken" class="block w-full rounded-md border-0 bg-purple-200/50 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea></div></div></div></div>'),K=k('<div><div class="text-p2blue-700 mb-6 text-2xl">Not authenticated.</div> <!></div>'),P=k('<div><div class="pb-8 text-xl italic">Your current status is:</div> <!></div>');function I(i,e){B(e,!0);let r=g(e,"idToken",7),s=g(e,"accessToken",7),d=g(e,"refreshToken",7);function o(n){return JSON.stringify(G(n),null,2)}J(()=>{e.data&&e.data.user&&(r(o(e.data.user.idToken)),s(o(e.data.user.accessToken)),d(o(e.data.user.refreshToken)))});var b=P(),U=t(a(b),2);{var L=n=>{var l=H(),m=t(a(l),2),x=a(m),E=a(x),O=t(x,2),j=a(O),y=t(m,2);w(y,{size:"small",label:"Log out"});var q=t(y,2),A=a(q),h=a(A),C=t(a(h),2),T=t(h,2),D=t(a(T),2),N=t(T,2),z=t(a(N),2);Q(()=>{_(E,e.data.user?.email),_(j,e.data.user?.name)}),f(C,s),f(D,r),f(z,d),p(n,l)},S=n=>{var l=K(),m=t(a(l),2);w(m,{size:"small",label:"Log in"}),p(n,l)};R(U,n=>{e.data.status?n(L):n(S,!1)})}p(i,b),M()}I.__docgen={data:[{name:"data",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"User"},static:!1,readonly:!1},{name:"idToken",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"accessToken",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"refreshToken",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1}],name:"User.svelte"};const de={title:"ACL/User",component:I,tags:["autodocs"],parameters:{layout:"fullscreen",sveltekit_experimental:{stores:{data:{user:{name:"",email:"",idToken:"",accessToken:"",refreshToken:""},status:!0}}},navigating:{route:{id:"/storybook"}},updated:!0}},u={parameters:{sveltekit_experimental:{stores:{data:{user:{name:"Swen",email:"",idToken:"",accessToken:"",refreshToken:""},status:!0}}}}},v={parameters:{sveltekit_experimental:{stores:{data:{user:{},status:!1}}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    sveltekit_experimental: {
      stores: {
        data: {
          user: {
            name: 'Swen',
            email: "",
            idToken: "",
            accessToken: "",
            refreshToken: ""
          },
          status: true
        }
      }
    }
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    sveltekit_experimental: {
      stores: {
        data: {
          user: {},
          status: false
        }
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const le=["LoggedIn","LoggedOut"];export{u as LoggedIn,v as LoggedOut,le as __namedExportsOrder,de as default};
