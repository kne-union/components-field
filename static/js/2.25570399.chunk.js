/*! For license information please see 2.25570399.chunk.js.LICENSE.txt */
(self.webpackChunk_kne_components_components_field=self.webpackChunk_kne_components_components_field||[]).push([[2,139],{77002:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(13050),o=r(55199),l=r(73884),s=r(98139),c=r.n(s);const i="style_row-disabled__EFGvs__9Q6F5";var a=r(70579);const u=(0,n.createWithRemoteLoader)({modules:["Table@TablePage","ConfirmButton","Common@SearchInput"]})((0,l.forwardRef)(((e,t)=>{let{remoteModules:r,searchRender:n,defaultValue:s,labelKey:u,getCheckboxDisabled:d,...f}=e;const[p,h,y]=r,[x,b]=(0,l.useState)(s||[]),[_,m]=(0,l.useState)(0),v=(0,l.useRef)(null),w=(0,l.useRef)(null),[g,j]=(0,l.useState)("");(0,l.useEffect)((()=>{const e=v.current;m(e.clientHeight);const t=new ResizeObserver((()=>{m(e.clientHeight)}));return t.observe(e),()=>{t.unobserve(e)}}),[]);const C=e=>"function"===typeof f.rowKey?f.rowKey(e):e[f.rowKey];(0,l.useImperativeHandle)(t,(()=>({getValue:()=>x})),[x]);const S=e=>"function"===typeof d?d(e):e.disabled;return(0,a.jsxs)(o.Row,{wrap:!1,gutter:10,children:[(0,a.jsx)(o.Col,{span:18,children:(0,a.jsxs)(o.Space,{direction:"vertical",block:!0,size:_?8:0,children:[(0,a.jsx)("div",{ref:v,children:n&&n({value:x,setValue:b,getFetchApi:()=>w.current})}),(0,a.jsx)(p,{...f,ref:w,controllerOpen:!1,scroll:{y:"calc(var(--modal-height) - 152px - ".concat(_?_+8:0,"px)")},rowClassName:e=>c()({[i]:S(e)}),rowSelection:{selectedRowKeys:x.map(C),getCheckboxProps:e=>({disabled:S(e)}),renderCell:(e,t)=>{const r=C(t);return(0,a.jsx)(o.Checkbox,{checked:e,disabled:S(t),onChange:()=>{b((n=>{const o=n.slice(0),l=o.findIndex((e=>C(e)===r));return e?l>-1&&o.splice(l,1):l>-1?o.splice(l,1,t):o.push(t),o}))}})},onSelectAll:(e,t,r)=>{b((t=>e?t.concat(r):t.filter((e=>-1===r.findIndex((t=>C(t)===C(e)))))))}}})]})}),(0,a.jsx)(o.Col,{span:6,children:(0,a.jsxs)(o.Space,{direction:"vertical",block:!0,children:[(0,a.jsxs)(o.Row,{justify:"space-between",children:[(0,a.jsxs)(o.Col,{children:["\u5df2\u9009:",x&&x.length>0?"(".concat(x.length,")"):""]}),(0,a.jsx)(o.Col,{children:(0,a.jsx)(h,{isDelete:!0,type:"text",size:"small",disabled:!(x&&x.length>0),onClick:()=>{b([])},children:"\u5168\u90e8\u79fb\u9664"})})]}),(0,a.jsx)(y,{value:g,placeholder:"\u641c\u7d22",onSearch:e=>{j(e)}}),(0,a.jsx)(o.Space,{wrap:!0,children:x.filter((e=>!g||("function"===typeof u?u(e):e[u]).indexOf(g)>-1)).map((e=>(0,a.jsx)(o.Tag,{closable:!0,onClose:()=>{b((t=>{const r=t.slice(0),n=r.indexOf(e);return n>-1&&r.splice(n,1),r}))},children:"function"===typeof u?u(e):e[u]},"function"===typeof f.rowKey?f.rowKey(e):e[f.rowKey])))})]})})]})})));u.defaultProps={rowKey:"id",labelKey:"name"};const d=(0,n.createWithRemoteLoader)({modules:["Modal@useModal"]})((e=>{let{remoteModules:t,children:r,...n}=e;const[o]=t,s=(0,l.useRef)(null),c=o();return r({modal:e=>{let{onConfirm:t,defaultValue:r,...o}=e;return c(Object.assign({},o,{children:(0,a.jsx)(u,{...n,defaultValue:r,ref:s}),onConfirm:()=>t&&t(s.current.getValue())}))}})}))},51153:(e,t,r)=>{"use strict";var n=r(73884),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,l={},a=null,u=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:u,props:l,_owner:c.current}}t.jsx=a,t.jsxs=a},70579:(e,t,r)=>{"use strict";e.exports=r(51153)},98139:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,l(r)))}return e}function l(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=2.25570399.chunk.js.map