import{p as v,d as r,f as S,t as z,h as _,j as C,m as L,u as A}from"./iframe-B3TcvJsq.js";import{s as E}from"./attributes-CkHowp77.js";import{s as W,c as T}from"./style-B3ufI60B.js";/* empty css                   */import{t as q}from"./bundle-mjs-0JNfDbnS.js";import"./preload-helper-Ct5FWWRu.js";var D=S('<div role="status"></div>');function m(u,e){v(e,!0);const g=r(e,"size",3,"md"),y=r(e,"color",3,"primary"),x=r(e,"aria-label",3,"Loading"),b=r(e,"class",3,""),f="animate-spin rounded-full border-2 border-solid border-current border-r-transparent",k={xs:"w-3 h-3 border",sm:"w-4 h-4 border",md:"w-6 h-6 border-2",lg:"w-8 h-8 border-2",xl:"w-12 h-12 border-4"},w={primary:"text-primary-600",secondary:"text-secondary-600",success:"text-green-600",warning:"text-yellow-600",error:"text-red-600",gray:"text-gray-600",white:"text-white"},h=A(()=>q(f,k[g()],w[y()],b()));var p=D();z(()=>{W(p,1,T(L(h))),E(p,"aria-label",x())}),_(u,p),C()}m.__docgen={data:[{name:"size",visibility:"public",description:"The size of the spinner",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"xs",text:'"xs"'},{kind:"const",type:"string",value:"sm",text:'"sm"'},{kind:"const",type:"string",value:"md",text:'"md"'},{kind:"const",type:"string",value:"lg",text:'"lg"'},{kind:"const",type:"string",value:"xl",text:'"xl"'}],text:'"xs" | "sm" | "md" | "lg" | "xl"'},static:!1,readonly:!1,defaultValue:'"md"'},{name:"color",visibility:"public",description:"The color of the spinner",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"primary",text:'"primary"'},{kind:"const",type:"string",value:"secondary",text:'"secondary"'},{kind:"const",type:"string",value:"success",text:'"success"'},{kind:"const",type:"string",value:"warning",text:'"warning"'},{kind:"const",type:"string",value:"error",text:'"error"'},{kind:"const",type:"string",value:"gray",text:'"gray"'},{kind:"const",type:"string",value:"white",text:'"white"'}],text:'"primary" | "secondary" | "success" | "warning" | "error" | "gray" | "white"'},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"aria-label",visibility:"public",description:"Aria label for accessibility",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"class",visibility:"public",description:"Additional CSS classes to be applied",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1}],name:"Spinner.svelte"};const B={title:"Atoms/Spinner",component:m,parameters:{layout:"padded",docs:{description:{component:"A loading spinner component with size and color variants."}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Size of the spinner"},color:{control:{type:"select"},options:["primary","secondary","success","warning","error","gray","white"],description:"Color of the spinner"},"aria-label":{control:{type:"text"},description:"Aria label for accessibility"}},tags:["autodocs"]},s={args:{}},a={args:{size:"sm"}},t={args:{size:"lg"}},o={args:{size:"xl"}},n={args:{color:"success"}},i={args:{color:"warning"}},c={args:{color:"error"}},l={args:{color:"white"},parameters:{backgrounds:{default:"dark"}}},d={args:{"aria-label":"Processing your request"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'error'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Processing your request'
  }
}`,...d.parameters?.docs?.source}}};const F=["Default","Small","Large","ExtraLarge","Success","Warning","Error","White","CustomAriaLabel"];export{d as CustomAriaLabel,s as Default,c as Error,o as ExtraLarge,t as Large,a as Small,n as Success,i as Warning,l as White,F as __namedExportsOrder,B as default};
