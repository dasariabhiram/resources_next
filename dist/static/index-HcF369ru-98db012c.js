import{u as P,c as b,j as n,P as g,_ as w,f as B,k as L,g as k,h as A,B as C,i as T,A as S,m as D,n as G,r as I,l as H,o as O,p as W,C as E}from"./sanity-6b43d85b.js";const z=o=>{let{index:s,menuItems:t,menuItemGroups:i,title:c}=o;const{features:r}=B(),{collapsed:l,isLast:u}=L(),d=u&&!l?-1:0;return n.jsx(k,{actions:n.jsx(A,{menuItems:t,menuItemGroups:i}),backButton:r.backButton&&s>0&&n.jsx(C,{as:T,"data-as":"a",icon:S,mode:"bleed",tooltipProps:{content:"Back"}}),tabIndex:d,title:c})};var f=Object.freeze,F=Object.defineProperty,R=(o,s)=>f(F(o,"raw",{value:f(s||o.slice())})),y;const K=P.hr(y||(y=R([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function M(o){const{childItemId:s,items:t,isActive:i,layout:c,showIcons:r,title:l}=o,{collapsed:u}=D(),d=G(t==null?void 0:t.filter(e=>e.type!=="divider")),m=I.useCallback(e=>{var a;return((a=t==null?void 0:t.find((p,x)=>x===e))==null?void 0:a.type)==="divider"},[t]),h=I.useCallback(e=>{var a;const p=(a=e.displayOptions)==null?void 0:a.showIcon;return typeof p<"u"?p!==!1:r!==!1},[r]),v=I.useCallback((e,a)=>{const{virtualIndex:p}=a;if(e.type==="divider")return n.jsx(H,{marginBottom:1,children:n.jsx(K,{})},"divider-".concat(p));const x=!i&&s===e.id,_=i&&s===e.id,j=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return n.jsx(O,{icon:h(e)?e.icon:!1,id:e.id,layout:c,marginBottom:1,pressed:x,schemaType:e.schemaType,selected:_,title:d(e).title,value:j},e.id)},[s,d,i,c,h]);return n.jsx(W,{overflow:u?"hidden":"auto",children:t&&t.length>0&&n.jsx(E,{activeItemDataAttr:"data-hovered",ariaLabel:l,canReceiveFocus:!0,getItemDisabled:m,itemHeight:51,items:t,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:v,wrapAround:!1})})}function X(o){const{childItemId:s,index:t,isActive:i,isSelected:c,pane:r,paneKey:l}=o,{defaultLayout:u,displayOptions:d,items:m,menuItems:h,menuItemGroups:v}=r,e=(d==null?void 0:d.showIcons)!==!1,{title:a}=b(r);return n.jsxs(g,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:l,maxWidth:640,minWidth:320,selected:c,children:[w,n.jsx(z,{index:t,menuItems:h,menuItemGroups:v,title:a}),n.jsx(M,{childItemId:s,isActive:i,items:m,layout:u,showIcons:e,title:a},l)]})}export{X as default};
