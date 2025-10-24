import{t as C,a as K,r as Q,c as R,b as U,g as b,p as X,d as p,e as Y,f as Z,i as f,h as y,j as $,s as D,k as G,l as tt,m as et,u as rt,n as L,o as M,q as at,v as st,w as nt,x as ot}from"./iframe-B3TcvJsq.js";import{s as it}from"./snippet-B44izKwC.js";import{s as I}from"./attributes-CkHowp77.js";import{s as lt,c as ct}from"./style-B3ufI60B.js";/* empty css                   */import{t as dt}from"./bundle-mjs-0JNfDbnS.js";import"./preload-helper-Ct5FWWRu.js";function ut(m,t,s=!1,n=!1,g=!1){var o=m,d="";C(()=>{var i=K;if(d!==(d=t()??"")&&(i.nodes_start!==null&&(Q(i.nodes_start,i.nodes_end),i.nodes_start=i.nodes_end=null),d!=="")){var l=d+"";s?l=`<svg>${l}</svg>`:n&&(l=`<math>${l}</math>`);var r=R(l);if((s||n)&&(r=b(r)),U(b(r),r.lastChild),s||n)for(;b(r);)o.before(b(r));else o.before(r)}})}function pt(m,t,s,n){!t()&&!s()&&n("click",m)}var yt=at('<svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path></path></svg>'),mt=Z("<button><!> <!> <!></button>");function j(m,t){X(t,!0);let s=p(t,"variant",3,"primary"),n=p(t,"size",3,"md"),g=p(t,"loading",3,!1),o=p(t,"disabled",3,!1),d=p(t,"type",3,"button"),i=p(t,"class",3,"");const l=Y(),r={primary:{base:"bg-primary-600 text-white",hover:"hover:bg-blue-700",focus:"focus:ring-4 focus:ring-blue-300",disabled:"dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},secondary:{base:"bg-secondary-600 text-gray-900 border border-gray-300",hover:"hover:bg-gray-100",focus:"focus:ring-4 focus:ring-gray-200",disabled:"dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"},tertiary:{base:"text-blue-700 border border-blue-700",hover:"hover:text-white hover:bg-blue-800",focus:"focus:ring-4 focus:ring-blue-300",disabled:"dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"},ghost:{base:"text-blue-700",hover:"hover:text-blue-900",focus:"focus:ring-4 focus:ring-blue-300",disabled:"dark:text-blue-400 dark:hover:text-blue-300"}},A=rt(()=>dt("inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200","focus:outline-none",r[s()].base,r[s()].hover,r[s()].focus,!o()&&r[s()].disabled,n()==="sm"&&"px-3 py-2 text-xs",n()==="md"&&"px-5 py-2.5 text-sm",n()==="lg"&&"px-6 py-3 text-base",g()&&"opacity-75 cursor-wait",o()&&"opacity-50 cursor-not-allowed",i())),E=`
    <svg class="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
    </svg>
  `;var u=mt();u.__click=[pt,o,g,l];var P=G(u);{var O=e=>{var a=L(),c=M(a);ut(c,()=>E),y(e,a)};f(P,e=>{g()&&e(O)})}var V=D(P,2);{var q=e=>{var a=yt(),c=G(a);C(()=>I(c,"d",t.icon)),y(e,a)};f(V,e=>{t.icon&&!g()&&e(q)})}var H=D(V,2);{var N=e=>{var a=L(),c=M(a);it(c,()=>t.children??st),y(e,a)},F=e=>{var a=L(),c=M(a);{var J=T=>{var W=nt();C(()=>ot(W,t.text)),y(T,W)};f(c,T=>{t.text&&T(J)},!0)}y(e,a)};f(H,e=>{t.children?e(N):e(F,!1)})}C(()=>{I(u,"type",d()),u.disabled=o(),lt(u,1,ct(et(A)))}),y(m,u),$()}tt(["click"]);j.__docgen={data:[{name:"variant",visibility:"public",description:"The visual style variant of the button",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"primary",text:'"primary"'},{kind:"const",type:"string",value:"secondary",text:'"secondary"'},{kind:"const",type:"string",value:"tertiary",text:'"tertiary"'},{kind:"const",type:"string",value:"ghost",text:'"ghost"'}],text:'"primary" | "secondary" | "tertiary" | "ghost"'},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"size",visibility:"public",description:"The size of the button",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"sm",text:'"sm"'},{kind:"const",type:"string",value:"md",text:'"md"'},{kind:"const",type:"string",value:"lg",text:'"lg"'}],text:'"sm" | "md" | "lg"'},static:!1,readonly:!1,defaultValue:'"md"'},{name:"loading",visibility:"public",description:"Whether the button is in a loading state",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",description:"Whether the button is disabled",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"type",visibility:"public",description:"The type of the button",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"button",text:'"button"'},{kind:"const",type:"string",value:"submit",text:'"submit"'},{kind:"const",type:"string",value:"reset",text:'"reset"'}],text:'"button" | "submit" | "reset"'},static:!1,readonly:!1,defaultValue:'"button"'},{name:"class",visibility:"public",description:"Additional CSS classes to be applied",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"icon",visibility:"public",description:"Optional icon to display before the button content",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"children",visibility:"public",description:"Content of the button - can be a snippet or string",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"text",visibility:"public",description:"Text content for the button (alternative to children)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1}],name:"Button.svelte"};const _t={title:"Atoms/Button",component:j,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","ghost"],description:"The visual style of the button"},size:{control:"select",options:["sm","md","lg"],description:"The size of the button"},loading:{control:"boolean",description:"Whether to show a loading state"},disabled:{control:"boolean",description:"Whether the button is disabled"},type:{control:"select",options:["button","submit","reset"],description:"The type of button"},text:{control:"text",description:"Text content of the button"}}},v={args:{variant:"primary",text:"Primary Button",onClick:()=>console.log("Primary button clicked")}},h={args:{variant:"secondary",text:"Secondary Button",onClick:()=>console.log("Secondary button clicked")}},k={args:{variant:"tertiary",text:"Tertiary Button"}},x={args:{variant:"ghost",text:"Ghost Button"}},_={args:{variant:"primary",icon:"M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",text:"Button with Icon"}},w={args:{variant:"primary",loading:!0,text:"Loading..."}},S={args:{variant:"primary",disabled:!0,text:"Disabled Button"}},B={args:{variant:"primary",size:"sm",text:"Small Button"}},z={args:{variant:"primary",size:"lg",text:"Large Button"}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    text: 'Primary Button',
    onClick: () => console.log('Primary button clicked')
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    text: 'Secondary Button',
    onClick: () => console.log('Secondary button clicked')
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    text: 'Tertiary Button'
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    text: 'Ghost Button'
  }
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    text: 'Button with Icon'
  }
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    text: 'Loading...'
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    text: 'Disabled Button'
  }
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    text: 'Small Button'
  }
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    text: 'Large Button'
  }
}`,...z.parameters?.docs?.source}}};const wt=["Primary","Secondary","Tertiary","Ghost","WithIcon","Loading","Disabled","Small","Large"];export{S as Disabled,x as Ghost,z as Large,w as Loading,v as Primary,h as Secondary,B as Small,k as Tertiary,_ as WithIcon,wt as __namedExportsOrder,_t as default};
