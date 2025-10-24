import{p as pe,d as a,e as ue,f as q,k as _,i as R,t as V,C as H,h as W,j as ye,s as M,m as me,u as ge,l as he,x as N}from"./iframe-B3TcvJsq.js";import{s}from"./attributes-CkHowp77.js";import{s as be,c as ve}from"./style-B3ufI60B.js";import{b as fe}from"./input-DuSexQ4w.js";/* empty css                   */import{t as B}from"./bundle-mjs-0JNfDbnS.js";import"./preload-helper-Ct5FWWRu.js";function xe(l,e){e("input",l)}function ke(l,e){e("change",l)}var we=q('<p class="text-sm text-red-600" role="alert"> </p>'),Se=q('<p class="text-sm text-gray-500"> </p>'),Ee=q('<div class="space-y-1"><input/> <!> <!></div>');function F(l,e){pe(e,!0);let z=a(e,"variant",3,"default"),O=a(e,"size",3,"md"),Y=a(e,"type",3,"text"),j=a(e,"value",15,""),G=a(e,"placeholder",3,""),C=a(e,"disabled",3,!1),D=a(e,"readonly",3,!1),J=a(e,"required",3,!1),K=a(e,"name",3,""),Q=a(e,"id",3,""),U=a(e,"autocomplete",3,""),X=a(e,"aria-label",3,""),Z=a(e,"aria-describedby",3,""),$=a(e,"class",3,""),n=a(e,"error",3,""),S=a(e,"helpText",3,"");const o=ue(),ee="block w-full border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-200",te={sm:"px-2.5 py-1.5 text-sm",md:"px-3 py-2 text-base",lg:"px-4 py-3 text-lg"},ae={default:"border-gray-300 focus:border-primary-500 focus:ring-primary-500/20 text-gray-900 bg-white",error:"border-red-300 focus:border-red-500 focus:ring-red-500/20 text-gray-900 bg-white",success:"border-green-300 focus:border-green-500 focus:ring-green-500/20 text-gray-900 bg-white"},re="opacity-50 cursor-not-allowed bg-gray-50",se="bg-gray-50 cursor-default",ie=ge(()=>B(ee,te[O()],ae[z()],C()&&re,D()&&se,$()));function le(r){o("focus",r)}function ne(r){o("blur",r)}const E=Q()||`input-${Math.random().toString(36).substring(2,9)}`,I=`${E}-error`,A=`${E}-help`;var L=Ee(),t=_(L);t.__input=[xe,o],t.__change=[ke,o];var P=M(t,2);{var oe=r=>{var i=we(),T=_(i);V(()=>{s(i,"id",I),N(T,n())}),W(r,i)};R(P,r=>{n()&&r(oe)})}var de=M(P,2);{var ce=r=>{var i=Se(),T=_(i);V(()=>{s(i,"id",A),N(T,S())}),W(r,i)};R(de,r=>{S()&&!n()&&r(ce)})}V(r=>{s(t,"type",Y()),be(t,1,ve(me(ie))),s(t,"placeholder",G()),t.disabled=C(),t.readOnly=D(),t.required=J(),s(t,"name",K()),s(t,"id",E),s(t,"autocomplete",U()),s(t,"aria-label",X()),s(t,"aria-describedby",r),s(t,"aria-invalid",z()==="error")},[()=>B(Z(),n()?I:"",S()?A:"")]),H("focus",t,le),H("blur",t,ne),fe(t,j),W(l,L),ye()}he(["input","change"]);F.__docgen={data:[{name:"variant",visibility:"public",description:"The visual style variant of the input",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"default",text:'"default"'},{kind:"const",type:"string",value:"error",text:'"error"'},{kind:"const",type:"string",value:"success",text:'"success"'}],text:'"default" | "error" | "success"'},static:!1,readonly:!1,defaultValue:'"default"'},{name:"size",visibility:"public",description:"The size of the input",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"sm",text:'"sm"'},{kind:"const",type:"string",value:"md",text:'"md"'},{kind:"const",type:"string",value:"lg",text:'"lg"'}],text:'"sm" | "md" | "lg"'},static:!1,readonly:!1,defaultValue:'"md"'},{name:"type",visibility:"public",description:"The type of the input",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"number",text:'"number"'},{kind:"const",type:"string",value:"text",text:'"text"'},{kind:"const",type:"string",value:"email",text:'"email"'},{kind:"const",type:"string",value:"password",text:'"password"'},{kind:"const",type:"string",value:"tel",text:'"tel"'},{kind:"const",type:"string",value:"url",text:'"url"'},{kind:"const",type:"string",value:"search",text:'"search"'}],text:'"number" | "text" | "email" | "password" | "tel" | "url" | "search"'},static:!1,readonly:!1,defaultValue:'"text"'},{name:"value",visibility:"public",description:"The input value",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"placeholder",visibility:"public",description:"Placeholder text for the input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"disabled",visibility:"public",description:"Whether the input is disabled",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"readonly",visibility:"public",description:"Whether the input is readonly",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"required",visibility:"public",description:"Whether the input is required",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"name",visibility:"public",description:"The name attribute for the input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"id",visibility:"public",description:"The id attribute for the input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"autocomplete",visibility:"public",description:"Autocomplete attribute",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"aria-label",visibility:"public",description:"Aria label for accessibility",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"aria-describedby",visibility:"public",description:"Aria described by for accessibility",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"class",visibility:"public",description:"Additional CSS classes to be applied",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"error",visibility:"public",description:"Error message to display",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"helpText",visibility:"public",description:"Help text to display",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"Input.svelte"};const De={title:"Atoms/Input",component:F,parameters:{layout:"padded",docs:{description:{component:"A versatile input component built on Flowbite-Svelte with full accessibility support."}}},argTypes:{variant:{control:{type:"select"},options:["default","error","success"],description:"Visual style variant of the input"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input"},type:{control:{type:"select"},options:["text","email","password","number","tel","url","search"],description:"HTML input type"},value:{control:{type:"text"},description:"Input value"},placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled"},readonly:{control:{type:"boolean"},description:"Whether the input is readonly"},required:{control:{type:"boolean"},description:"Whether the input is required"},error:{control:{type:"text"},description:"Error message to display"},helpText:{control:{type:"text"},description:"Help text to display"}},tags:["autodocs"]},d={args:{placeholder:"Enter your text...",value:""}},c={args:{value:"Sample text",placeholder:"Enter your text..."}},p={args:{size:"sm",placeholder:"Small input...",value:""}},u={args:{size:"lg",placeholder:"Large input...",value:""}},y={args:{type:"email",placeholder:"Enter your email...",value:""}},m={args:{type:"password",placeholder:"Enter your password...",value:""}},g={args:{variant:"error",value:"invalid@email",error:"Please enter a valid email address",placeholder:"Enter your email..."}},h={args:{variant:"success",value:"user@example.com",placeholder:"Enter your email..."}},b={args:{helpText:"Your password must be at least 8 characters long",type:"password",placeholder:"Enter your password...",value:""}},v={args:{required:!0,placeholder:"This field is required...",value:""}},f={args:{disabled:!0,value:"Disabled input",placeholder:"This input is disabled"}},x={args:{readonly:!0,value:"Readonly input value",placeholder:"This input is readonly"}},k={args:{type:"number",placeholder:"Enter a number...",value:""}},w={args:{type:"search",placeholder:"Search...",value:""}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your text...',
    value: ''
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Sample text',
    placeholder: 'Enter your text...'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small input...',
    value: ''
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large input...',
    value: ''
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter your email...',
    value: ''
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter your password...',
    value: ''
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    value: 'invalid@email',
    error: 'Please enter a valid email address',
    placeholder: 'Enter your email...'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    value: 'user@example.com',
    placeholder: 'Enter your email...'
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    helpText: 'Your password must be at least 8 characters long',
    type: 'password',
    placeholder: 'Enter your password...',
    value: ''
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    placeholder: 'This field is required...',
    value: ''
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input',
    placeholder: 'This input is disabled'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: 'Readonly input value',
    placeholder: 'This input is readonly'
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: 'Enter a number...',
    value: ''
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'search',
    placeholder: 'Search...',
    value: ''
  }
}`,...w.parameters?.docs?.source}}};const Ie=["Default","WithValue","Small","Large","Email","Password","WithError","WithSuccess","WithHelpText","Required","Disabled","Readonly","Number","Search"];export{d as Default,f as Disabled,y as Email,u as Large,k as Number,m as Password,x as Readonly,v as Required,w as Search,p as Small,g as WithError,b as WithHelpText,h as WithSuccess,c as WithValue,Ie as __namedExportsOrder,De as default};
