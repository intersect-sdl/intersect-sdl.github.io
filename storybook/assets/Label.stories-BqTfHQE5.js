import{p as S,d as s,f as p,i as _,t as z,h as c,j as w,s as A,k as D,v as C,m as F,u as R}from"./iframe-B3TcvJsq.js";import{s as W}from"./snippet-B44izKwC.js";import{s as E}from"./attributes-CkHowp77.js";import{s as T,c as V}from"./style-B3ufI60B.js";/* empty css                   */import{t as j}from"./bundle-mjs-0JNfDbnS.js";import"./preload-helper-Ct5FWWRu.js";var I=p('<span class="text-red-500 ml-1" aria-label="required">*</span>'),M=p("<label><!> <!></label>");function m(u,e){S(e,!0);const f=s(e,"size",3,"md"),b=s(e,"required",3,!1),g=s(e,"for",3,""),y=s(e,"class",3,""),h="block font-medium text-gray-700",k={sm:"text-sm",md:"text-base",lg:"text-lg"},x=R(()=>j(h,k[f()],y()));var t=M(),d=D(t);W(d,()=>e.children??C);var v=A(d,2);{var L=n=>{var q=I();c(n,q)};_(v,n=>{b()&&n(L)})}z(()=>{E(t,"for",g()),T(t,1,V(F(x)))}),c(u,t),w()}m.__docgen={data:[{name:"size",visibility:"public",description:"The size of the label",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"sm",text:'"sm"'},{kind:"const",type:"string",value:"md",text:'"md"'},{kind:"const",type:"string",value:"lg",text:'"lg"'}],text:'"sm" | "md" | "lg"'},static:!1,readonly:!1,defaultValue:'"md"'},{name:"required",visibility:"public",description:"Whether the label is for a required field",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"for",visibility:"public",description:"The for attribute to associate with an input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"class",visibility:"public",description:"Additional CSS classes to be applied",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"children",visibility:"public",description:"Label text content",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"Label.svelte"};const P={title:"Atoms/Label",component:m,parameters:{layout:"padded",docs:{description:{component:"A label component for form fields with accessibility support."}}},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the label"},required:{control:{type:"boolean"},description:"Whether the field is required"},for:{control:{type:"text"},description:"ID of the associated input element"}},tags:["autodocs"]},a={args:{children:()=>"Default Label"}},r={args:{required:!0,children:()=>"Required Field"}},i={args:{size:"sm",children:()=>"Small Label"}},l={args:{size:"lg",children:()=>"Large Label"}},o={args:{for:"input-example",children:()=>"Email Address"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: () => 'Default Label'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    children: () => 'Required Field'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: () => 'Small Label'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: () => 'Large Label'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    for: 'input-example',
    children: () => 'Email Address'
  }
}`,...o.parameters?.docs?.source}}};const Q=["Default","Required","Small","Large","WithFor"];export{a as Default,l as Large,r as Required,i as Small,o as WithFor,Q as __namedExportsOrder,P as default};
