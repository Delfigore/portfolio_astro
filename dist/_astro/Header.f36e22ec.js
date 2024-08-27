import{U as h,r as a}from"./index.7885f6b6.js";import{j as g}from"./jsx-runtime.b995e587.js";import{r as Ke}from"./index.a566e4a2.js";const fe=typeof document<"u"?h.useLayoutEffect:()=>{};function Ge(e){const n=a.useRef(null);return fe(()=>{n.current=e},[e]),a.useCallback((...t)=>{const r=n.current;return r?.(...t)},[])}const H=e=>{var n;return(n=e?.ownerDocument)!==null&&n!==void 0?n:document},F=e=>e&&"window"in e&&e.window===e?e:H(e).defaultView||window;function Ze(e){var n;return typeof window>"u"||window.navigator==null?!1:((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent)}function _e(e){var n;return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function pe(e){let n=null;return()=>(n==null&&(n=e()),n)}const qe=pe(function(){return _e(/^Mac/i)}),Ye=pe(function(){return Ze(/Android/i)});function ze(e){return e.mozInputSource===0&&e.isTrusted?!0:Ye()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}class Xe{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(n,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=n}}function ve(e){let n=a.useRef({isFocused:!1,observer:null});fe(()=>{const r=n.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let t=Ge(r=>{e?.(r)});return a.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){n.current.isFocused=!0;let o=r.target,i=u=>{n.current.isFocused=!1,o.disabled&&t(new Xe("blur",u)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};o.addEventListener("focusout",i,{once:!0}),n.current.observer=new MutationObserver(()=>{if(n.current.isFocused&&o.disabled){var u;(u=n.current.observer)===null||u===void 0||u.disconnect();let l=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:l})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:l}))}}),n.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[t])}function Je(e){let{isDisabled:n,onFocus:t,onBlur:r,onFocusChange:o}=e;const i=a.useCallback(s=>{if(s.target===s.currentTarget)return r&&r(s),o&&o(!1),!0},[r,o]),u=ve(i),l=a.useCallback(s=>{const c=H(s.target);s.target===s.currentTarget&&c.activeElement===s.target&&(t&&t(s),o&&o(!0),u(s))},[o,t,u]);return{focusProps:{onFocus:!n&&(t||o||r)?l:void 0,onBlur:!n&&(r||o)?i:void 0}}}let j=null,Z=new Set,M=new Map,L=!1,_=!1;const Qe={Tab:!0,Escape:!0};function X(e,n){for(let t of Z)t(e,n)}function et(e){return!(e.metaKey||!qe()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function I(e){L=!0,et(e)&&(j="keyboard",X("keyboard",e))}function y(e){j="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(L=!0,X("pointer",e))}function me(e){ze(e)&&(L=!0,j="virtual")}function he(e){e.target===window||e.target===document||(!L&&!_&&(j="virtual",X("virtual",e)),L=!1,_=!1)}function be(){L=!1,_=!0}function q(e){if(typeof window>"u"||M.get(F(e)))return;const n=F(e),t=H(e);let r=n.HTMLElement.prototype.focus;n.HTMLElement.prototype.focus=function(){L=!0,r.apply(this,arguments)},t.addEventListener("keydown",I,!0),t.addEventListener("keyup",I,!0),t.addEventListener("click",me,!0),n.addEventListener("focus",he,!0),n.addEventListener("blur",be,!1),typeof PointerEvent<"u"?(t.addEventListener("pointerdown",y,!0),t.addEventListener("pointermove",y,!0),t.addEventListener("pointerup",y,!0)):(t.addEventListener("mousedown",y,!0),t.addEventListener("mousemove",y,!0),t.addEventListener("mouseup",y,!0)),n.addEventListener("beforeunload",()=>{ge(e)},{once:!0}),M.set(n,{focus:r})}const ge=(e,n)=>{const t=F(e),r=H(e);n&&r.removeEventListener("DOMContentLoaded",n),M.has(t)&&(t.HTMLElement.prototype.focus=M.get(t).focus,r.removeEventListener("keydown",I,!0),r.removeEventListener("keyup",I,!0),r.removeEventListener("click",me,!0),t.removeEventListener("focus",he,!0),t.removeEventListener("blur",be,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",y,!0),r.removeEventListener("pointermove",y,!0),r.removeEventListener("pointerup",y,!0)):(r.removeEventListener("mousedown",y,!0),r.removeEventListener("mousemove",y,!0),r.removeEventListener("mouseup",y,!0)),M.delete(t))};function tt(e){const n=H(e);let t;return n.readyState!=="loading"?q(e):(t=()=>{q(e)},n.addEventListener("DOMContentLoaded",t)),()=>ge(e,t)}typeof document<"u"&&tt();function $e(){return j!=="pointer"}const nt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function rt(e,n,t){var r;const o=typeof window<"u"?F(t?.target).HTMLInputElement:HTMLInputElement,i=typeof window<"u"?F(t?.target).HTMLTextAreaElement:HTMLTextAreaElement,u=typeof window<"u"?F(t?.target).HTMLElement:HTMLElement,l=typeof window<"u"?F(t?.target).KeyboardEvent:KeyboardEvent;return e=e||t?.target instanceof o&&!nt.has(t==null||(r=t.target)===null||r===void 0?void 0:r.type)||t?.target instanceof i||t?.target instanceof u&&t?.target.isContentEditable,!(e&&n==="keyboard"&&t instanceof l&&!Qe[t.key])}function ot(e,n,t){q(),a.useEffect(()=>{let r=(o,i)=>{rt(!!t?.isTextInput,o,i)&&e($e())};return Z.add(r),()=>{Z.delete(r)}},n)}function at(e){let{isDisabled:n,onBlurWithin:t,onFocusWithin:r,onFocusWithinChange:o}=e,i=a.useRef({isFocusWithin:!1}),u=a.useCallback(c=>{i.current.isFocusWithin&&!c.currentTarget.contains(c.relatedTarget)&&(i.current.isFocusWithin=!1,t&&t(c),o&&o(!1))},[t,o,i]),l=ve(u),s=a.useCallback(c=>{!i.current.isFocusWithin&&document.activeElement===c.target&&(r&&r(c),o&&o(!0),i.current.isFocusWithin=!0,l(c))},[r,o,l]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:s,onBlur:u}}}let R=!1,V=0;function Y(){R=!0,setTimeout(()=>{R=!1},50)}function ce(e){e.pointerType==="touch"&&Y()}function it(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",ce):document.addEventListener("touchend",Y),V++,()=>{V--,!(V>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",ce):document.removeEventListener("touchend",Y))}}function lt(e){let{onHoverStart:n,onHoverChange:t,onHoverEnd:r,isDisabled:o}=e,[i,u]=a.useState(!1),l=a.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;a.useEffect(it,[]);let{hoverProps:s,triggerHoverEnd:c}=a.useMemo(()=>{let f=(d,m)=>{if(l.pointerType=m,o||m==="touch"||l.isHovered||!d.currentTarget.contains(d.target))return;l.isHovered=!0;let b=d.currentTarget;l.target=b,n&&n({type:"hoverstart",target:b,pointerType:m}),t&&t(!0),u(!0)},p=(d,m)=>{if(l.pointerType="",l.target=null,m==="touch"||!l.isHovered)return;l.isHovered=!1;let b=d.currentTarget;r&&r({type:"hoverend",target:b,pointerType:m}),t&&t(!1),u(!1)},v={};return typeof PointerEvent<"u"?(v.onPointerEnter=d=>{R&&d.pointerType==="mouse"||f(d,d.pointerType)},v.onPointerLeave=d=>{!o&&d.currentTarget.contains(d.target)&&p(d,d.pointerType)}):(v.onTouchStart=()=>{l.ignoreEmulatedMouseEvents=!0},v.onMouseEnter=d=>{!l.ignoreEmulatedMouseEvents&&!R&&f(d,"mouse"),l.ignoreEmulatedMouseEvents=!1},v.onMouseLeave=d=>{!o&&d.currentTarget.contains(d.target)&&p(d,"mouse")}),{hoverProps:v,triggerHoverEnd:p}},[n,t,r,o,l]);return a.useEffect(()=>{o&&c({currentTarget:l.target},l.pointerType)},[o]),{hoverProps:s,isHovered:i}}function st(e={}){let{autoFocus:n=!1,isTextInput:t,within:r}=e,o=a.useRef({isFocused:!1,isFocusVisible:n||$e()}),[i,u]=a.useState(!1),[l,s]=a.useState(()=>o.current.isFocused&&o.current.isFocusVisible),c=a.useCallback(()=>s(o.current.isFocused&&o.current.isFocusVisible),[]),f=a.useCallback(d=>{o.current.isFocused=d,u(d),c()},[c]);ot(d=>{o.current.isFocusVisible=d,c()},[],{isTextInput:t});let{focusProps:p}=Je({isDisabled:r,onFocusChange:f}),{focusWithinProps:v}=at({isDisabled:!r,onFocusWithinChange:f});return{isFocused:i,isFocusVisible:l,focusProps:r?v:p}}var ut=Object.defineProperty,ct=(e,n,t)=>n in e?ut(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,K=(e,n,t)=>(ct(e,typeof n!="symbol"?n+"":n,t),t);let dt=class{constructor(){K(this,"current",this.detect()),K(this,"handoffState","pending"),K(this,"currentId",0)}set(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},ye=new dt;function ft(e){return ye.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function pt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function Ee(){let e=[],n={addEventListener(t,r,o,i){return t.addEventListener(r,o,i),n.add(()=>t.removeEventListener(r,o,i))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return pt(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},style(t,r,o){let i=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:o}),this.add(()=>{Object.assign(t.style,{[r]:i})})},group(t){let r=Ee();return t(r),this.add(()=>r.dispose())},add(t){return e.includes(t)||e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let t of e.splice(0))t()}};return n}function J(){let[e]=a.useState(Ee);return a.useEffect(()=>()=>e.dispose(),[e]),e}let Q=(e,n)=>{ye.isServer?a.useEffect(e,n):a.useLayoutEffect(e,n)};function vt(e){let n=a.useRef(e);return Q(()=>{n.current=e},[e]),n}let w=function(e){let n=vt(e);return h.useCallback((...t)=>n.current(...t),[n])};function mt(e){let n=e.width/2,t=e.height/2;return{top:e.clientY-t,right:e.clientX+n,bottom:e.clientY+t,left:e.clientX-n}}function ht(e,n){return!(!e||!n||e.right<n.left||e.left>n.right||e.bottom<n.top||e.top>n.bottom)}function bt({disabled:e=!1}={}){let n=a.useRef(null),[t,r]=a.useState(!1),o=J(),i=w(()=>{n.current=null,r(!1),o.dispose()}),u=w(l=>{if(o.dispose(),n.current===null){n.current=l.currentTarget,r(!0);{let s=ft(l.currentTarget);o.addEventListener(s,"pointerup",i,!1),o.addEventListener(s,"pointermove",c=>{if(n.current){let f=mt(c);r(ht(f,n.current.getBoundingClientRect()))}},!1),o.addEventListener(s,"pointercancel",i,!1)}}});return{pressed:t,pressProps:e?{}:{onPointerDown:u,onPointerUp:i,onClick:i}}}let gt=a.createContext(void 0);function ee(){return a.useContext(gt)}function de(...e){return Array.from(new Set(e.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}function we(e,n,...t){if(e in n){let o=n[e];return typeof o=="function"?o(...t):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,we),r}var $t=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))($t||{}),yt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(yt||{});function D({ourProps:e,theirProps:n,slot:t,defaultTag:r,features:o,visible:i=!0,name:u,mergeRefs:l}){l=l??Et;let s=xe(n,e);if(i)return A(s,t,r,u,l);let c=o??0;if(c&2){let{static:f=!1,...p}=s;if(f)return A(p,t,r,u,l)}if(c&1){let{unmount:f=!0,...p}=s;return we(f?0:1,{0(){return null},1(){return A({...p,hidden:!0,style:{display:"none"}},t,r,u,l)}})}return A(s,t,r,u,l)}function A(e,n={},t,r,o){let{as:i=t,children:u,refName:l="ref",...s}=G(e,["unmount","static"]),c=e.ref!==void 0?{[l]:e.ref}:{},f=typeof u=="function"?u(n):u;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(n)),s["aria-labelledby"]&&s["aria-labelledby"]===s.id&&(s["aria-labelledby"]=void 0);let p={};if(n){let v=!1,d=[];for(let[m,b]of Object.entries(n))typeof b=="boolean"&&(v=!0),b===!0&&d.push(m.replace(/([A-Z])/g,E=>`-${E.toLowerCase()}`));if(v){p["data-headlessui-state"]=d.join(" ");for(let m of d)p[`data-${m}`]=""}}if(i===a.Fragment&&(Object.keys(k(s)).length>0||Object.keys(k(p)).length>0))if(!a.isValidElement(f)||Array.isArray(f)&&f.length>1){if(Object.keys(k(s)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(k(s)).concat(Object.keys(k(p))).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`))}else{let v=f.props,d=v?.className,m=typeof d=="function"?(...x)=>de(d(...x),s.className):de(d,s.className),b=m?{className:m}:{},E=xe(f.props,k(G(s,["ref"])));for(let x in p)x in E&&delete p[x];return a.cloneElement(f,Object.assign({},E,p,c,{ref:o(f.ref,c.ref)},b))}return a.createElement(i,Object.assign({},G(s,["ref"]),i!==a.Fragment&&c,i!==a.Fragment&&p),f)}function Et(...e){return e.every(n=>n==null)?void 0:n=>{for(let t of e)t!=null&&(typeof t=="function"?t(n):t.current=n)}}function xe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];if(n.disabled||n["aria-disabled"])for(let r in t)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(t[r]=[o=>{var i;return(i=o?.preventDefault)==null?void 0:i.call(o)}]);for(let r in t)Object.assign(n,{[r](o,...i){let u=t[r];for(let l of u){if((o instanceof Event||o?.nativeEvent instanceof Event)&&o.defaultPrevented)return;l(o,...i)}}});return n}function wt(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];for(let r in t)Object.assign(n,{[r](...o){let i=t[r];for(let u of i)u?.(...o)}});return n}function B(e){var n;return Object.assign(a.forwardRef(e),{displayName:(n=e.displayName)!=null?n:e.name})}function k(e){let n=Object.assign({},e);for(let t in n)n[t]===void 0&&delete n[t];return n}function G(e,n=[]){let t=Object.assign({},e);for(let r of n)r in t&&delete t[r];return t}function xt(e,n,t){let[r,o]=a.useState(t),i=e!==void 0,u=a.useRef(i),l=a.useRef(!1),s=a.useRef(!1);return i&&!u.current&&!l.current?(l.current=!0,u.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!i&&u.current&&!s.current&&(s.current=!0,u.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[i?e:r,w(c=>(i||o(c),n?.(c)))]}function Tt(e){let[n]=a.useState(e);return n}function Te(e={},n=null,t=[]){for(let[r,o]of Object.entries(e))Fe(t,ke(n,r),o);return t}function ke(e,n){return e?e+"["+n+"]":n}function Fe(e,n,t){if(Array.isArray(t))for(let[r,o]of t.entries())Fe(e,ke(n,r.toString()),o);else t instanceof Date?e.push([n,t.toISOString()]):typeof t=="boolean"?e.push([n,t?"1":"0"]):typeof t=="string"?e.push([n,t]):typeof t=="number"?e.push([n,`${t}`]):t==null?e.push([n,""]):Te(t,n,e)}function kt(e){var n,t;let r=(n=e?.form)!=null?n:e.closest("form");if(r){for(let o of r.elements)if(o!==e&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(t=r.requestSubmit)==null||t.call(r)}}let Ft="span";var te=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(te||{});function Lt(e,n){var t;let{features:r=1,...o}=e,i={ref:n,"aria-hidden":(r&2)===2?!0:(t=o["aria-hidden"])!=null?t:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return D({ourProps:i,theirProps:o,slot:{},defaultTag:Ft,name:"Hidden"})}let Le=B(Lt),Pt=a.createContext(null);function St({children:e}){let n=a.useContext(Pt);if(!n)return h.createElement(h.Fragment,null,e);let{target:t}=n;return t?Ke.createPortal(h.createElement(h.Fragment,null,e),t):null}function Ct({data:e,form:n,disabled:t,onReset:r,overrides:o}){let[i,u]=a.useState(null),l=J();return a.useEffect(()=>{if(r&&i)return l.addEventListener(i,"reset",r)},[i,n,r]),h.createElement(St,null,h.createElement(Mt,{setForm:u,formId:n}),Te(e).map(([s,c])=>h.createElement(Le,{features:te.Hidden,...k({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:n,disabled:t,name:s,value:c,...o})})))}function Mt({setForm:e,formId:n}){return a.useEffect(()=>{if(n){let t=document.getElementById(n);t&&e(t)}},[e,n]),n?null:h.createElement(Le,{features:te.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:t=>{if(!t)return;let r=t.closest("form");r&&e(r)}})}let Ht=a.createContext(void 0);function Pe(){return a.useContext(Ht)}function jt(e){let n=e.parentElement,t=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(t=n),n=n.parentElement;let r=n?.getAttribute("disabled")==="";return r&&Dt(t)?!1:r}function Dt(e){if(!e)return!1;let n=e.previousElementSibling;for(;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}let Nt=Symbol();function ne(...e){let n=a.useRef(e);a.useEffect(()=>{n.current=e},[e]);let t=w(r=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||r?.[Nt])?void 0:t}let W=a.createContext(null);W.displayName="DescriptionContext";function Se(){let e=a.useContext(W);if(e===null){let n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,Se),n}return e}function Ot(){var e,n;return(n=(e=a.useContext(W))==null?void 0:e.value)!=null?n:void 0}function At(){let[e,n]=a.useState([]);return[e.length>0?e.join(" "):void 0,a.useMemo(()=>function(t){let r=w(i=>(n(u=>[...u,i]),()=>n(u=>{let l=u.slice(),s=l.indexOf(i);return s!==-1&&l.splice(s,1),l}))),o=a.useMemo(()=>({register:r,slot:t.slot,name:t.name,props:t.props,value:t.value}),[r,t.slot,t.name,t.props,t.value]);return h.createElement(W.Provider,{value:o},t.children)},[n])]}let It="p";function Rt(e,n){let t=a.useId(),r=ee(),{id:o=`headlessui-description-${t}`,...i}=e,u=Se(),l=ne(n);Q(()=>u.register(o),[o,u.register]);let s=r||!1,c=a.useMemo(()=>({...u.slot,disabled:s}),[u.slot,s]),f={ref:l,...u.props,id:o};return D({ourProps:f,theirProps:i,slot:c,defaultTag:It,name:u.name||"Description"})}let Bt=B(Rt),Wt=Object.assign(Bt,{});var z=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(z||{});let U=a.createContext(null);U.displayName="LabelContext";function Ce(){let e=a.useContext(U);if(e===null){let n=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,Ce),n}return e}function Me(e){var n,t,r;let o=(t=(n=a.useContext(U))==null?void 0:n.value)!=null?t:void 0;return((r=e?.length)!=null?r:0)>0?[o,...e].filter(Boolean).join(" "):o}function Ut({inherit:e=!1}={}){let n=Me(),[t,r]=a.useState([]),o=e?[n,...t].filter(Boolean):t;return[o.length>0?o.join(" "):void 0,a.useMemo(()=>function(i){let u=w(s=>(r(c=>[...c,s]),()=>r(c=>{let f=c.slice(),p=f.indexOf(s);return p!==-1&&f.splice(p,1),f}))),l=a.useMemo(()=>({register:u,slot:i.slot,name:i.name,props:i.props,value:i.value}),[u,i.slot,i.name,i.props,i.value]);return h.createElement(U.Provider,{value:l},i.children)},[r])]}let Vt="label";function Kt(e,n){var t;let r=a.useId(),o=Ce(),i=Pe(),u=ee(),{id:l=`headlessui-label-${r}`,htmlFor:s=i??((t=o.props)==null?void 0:t.htmlFor),passive:c=!1,...f}=e,p=ne(n);Q(()=>o.register(l),[l,o.register]);let v=w(E=>{let x=E.currentTarget;if(x instanceof HTMLLabelElement&&E.preventDefault(),o.props&&"onClick"in o.props&&typeof o.props.onClick=="function"&&o.props.onClick(E),x instanceof HTMLLabelElement){let $=document.getElementById(x.htmlFor);if($){let N=$.getAttribute("disabled");if(N==="true"||N==="")return;let O=$.getAttribute("aria-disabled");if(O==="true"||O==="")return;($ instanceof HTMLInputElement&&($.type==="radio"||$.type==="checkbox")||$.role==="radio"||$.role==="checkbox"||$.role==="switch")&&$.click(),$.focus({preventScroll:!0})}}}),d=u||!1,m=a.useMemo(()=>({...o.slot,disabled:d}),[o.slot,d]),b={ref:p,...o.props,id:l,htmlFor:s,onClick:v};return c&&("onClick"in b&&(delete b.htmlFor,delete b.onClick),"onClick"in f&&delete f.onClick),D({ourProps:b,theirProps:f,slot:m,defaultTag:s?Vt:"div",name:o.name||"Label"})}let Gt=B(Kt),Zt=Object.assign(Gt,{});function _t(e,n){return a.useMemo(()=>{var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button"||n?.tagName==="BUTTON"&&!n.hasAttribute("type"))return"button"},[e.type,e.as,n])}let re=a.createContext(null);re.displayName="GroupContext";let qt=a.Fragment;function Yt(e){var n;let[t,r]=a.useState(null),[o,i]=Ut(),[u,l]=At(),s=a.useMemo(()=>({switch:t,setSwitch:r}),[t,r]),c={},f=e;return h.createElement(l,{name:"Switch.Description",value:u},h.createElement(i,{name:"Switch.Label",value:o,props:{htmlFor:(n=s.switch)==null?void 0:n.id,onClick(p){t&&(p.currentTarget instanceof HTMLLabelElement&&p.preventDefault(),t.click(),t.focus({preventScroll:!0}))}}},h.createElement(re.Provider,{value:s},D({ourProps:c,theirProps:f,slot:{},defaultTag:qt,name:"Switch.Group"}))))}let zt="button";function Xt(e,n){var t;let r=a.useId(),o=Pe(),i=ee(),{id:u=o||`headlessui-switch-${r}`,disabled:l=i||!1,checked:s,defaultChecked:c,onChange:f,name:p,value:v,form:d,autoFocus:m=!1,...b}=e,E=a.useContext(re),[x,$]=a.useState(null),N=a.useRef(null),O=ne(N,n,E===null?null:E.setSwitch,$),P=Tt(c),[S,C]=xt(s,f,P??!1),He=J(),[oe,ae]=a.useState(!1),ie=w(()=>{ae(!0),C?.(!S),He.nextFrame(()=>{ae(!1)})}),je=w(T=>{if(jt(T.currentTarget))return T.preventDefault();T.preventDefault(),ie()}),De=w(T=>{T.key===z.Space?(T.preventDefault(),ie()):T.key===z.Enter&&kt(T.currentTarget)}),Ne=w(T=>T.preventDefault()),Oe=Me(),Ae=Ot(),{isFocusVisible:le,focusProps:Ie}=st({autoFocus:m}),{isHovered:se,hoverProps:Re}=lt({isDisabled:l}),{pressed:ue,pressProps:Be}=bt({disabled:l}),We=a.useMemo(()=>({checked:S,disabled:l,hover:se,focus:le,active:ue,autofocus:m,changing:oe}),[S,se,le,ue,l,oe,m]),Ue=wt({id:u,ref:O,role:"switch",type:_t(e,x),tabIndex:e.tabIndex===-1?0:(t=e.tabIndex)!=null?t:0,"aria-checked":S,"aria-labelledby":Oe,"aria-describedby":Ae,disabled:l||void 0,autoFocus:m,onClick:je,onKeyUp:De,onKeyPress:Ne},Ie,Re,Be),Ve=a.useCallback(()=>{if(P!==void 0)return C?.(P)},[C,P]);return h.createElement(h.Fragment,null,p!=null&&h.createElement(Ct,{disabled:l,data:{[p]:v||"on"},overrides:{type:"checkbox",checked:S},form:d,onReset:Ve}),D({ourProps:Ue,theirProps:b,slot:We,defaultTag:zt,name:"Switch"}))}let Jt=B(Xt),Qt=Yt,en=Zt,tn=Wt,nn=Object.assign(Jt,{Group:Qt,Label:en,Description:tn});function rn({title:e,titleId:n,...t},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?a.createElement("title",{id:n},e):null,a.createElement("path",{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z",clipRule:"evenodd"}))}const on=a.forwardRef(rn),an=on;function ln({title:e,titleId:n,...t},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?a.createElement("title",{id:n},e):null,a.createElement("path",{d:"M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"}))}const sn=a.forwardRef(ln),un=sn,vn=()=>{const[e,n]=a.useState(!1);a.useEffect(()=>{const r=localStorage.getItem("theme");n(r==="dark")},[]);const t=()=>{window.toggleTheme(),n(!e)};return g.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-md py-4 sticky top-0 z-10 animate-slideDown",children:g.jsxs("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[g.jsx("a",{href:"/",className:"text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors",children:"delfigore.dev"}),g.jsxs("nav",{className:"flex items-center space-x-6",children:[g.jsx("a",{href:"#projects",className:"text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"Projects"}),g.jsx("a",{href:"#skills",className:"text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"Skills"}),g.jsx("a",{href:"#contact",className:"text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"Contact"}),g.jsx("a",{href:"https://github.com/Delfigore",target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"GitHub"}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(un,{className:"h-5 w-5 text-yellow-500 mr-2"}),g.jsxs(nn,{checked:e,onChange:t,className:`${e?"bg-blue-600":"bg-gray-200"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`,children:[g.jsx("span",{className:"sr-only",children:"Toggle dark mode"}),g.jsx("span",{className:`${e?"translate-x-6":"translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`})]}),g.jsx(an,{className:"h-5 w-5 text-gray-400 dark:text-yellow-300 ml-2"})]})]})]})})};export{vn as default};