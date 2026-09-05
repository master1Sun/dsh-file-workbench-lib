const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-DXT3JbXW.js","assets/vendor-vue-YJSRobM6.js"])))=>i.map(i=>d[i]);
import{e as Lt,b3 as Ve,b4 as Jr,b5 as Ar,b6 as Zm,b7 as Xm,b8 as eg,b9 as tg,ba as ng,bb as rg,bc as Wt,bd as Sr,be as oa,bf as og,bg as Xt,bh as cp,bi as up,bj as qt,bk as ag,bl as sg,bm as Qi,bn as dp,bo as ig,bp as Tv,bq as lg,br as cg,a1 as fl,bs as dn,aZ as ug,bt as Po,N as xc,bu as Na,bv as pl,bw as Zc,bx as yi,by as xa,bz as dg,bA as vg,bB as aa,bC as pi,bD as vp,bE as fp,bF as hi,bG as Ga,bH as pp,bI as hp,bJ as fg,bK as wc,bL as kc,bM as od,bN as Wl,bO as ii,bP as pg,bQ as hg,bR as Xc,bS as mp,bT as Qd,bU as Kd,bV as sa,bW as mg,bX as Za,bY as za,bZ as gg,b_ as bg,b$ as jg,c0 as Rs,c1 as gp,c2 as ad,c3 as yg,c4 as xg,c5 as Fl,c6 as Sc,c7 as is,c8 as Yd,c9 as Nv,ca as bp,cb as jp,cc as Gd,cd as yp,ce as wg,cf as kg,cg as Bs,ch as Sg,ci as xp,cj as Cg,ck as _l,cl as Og,cm as Mg,cn as zg,co as qg,cp as Eg,cq as Ag,cr as Pg,A as sd,cs as Hs,ct as ws,cu as Iv,cv as Rg,cw as Qs,cx as Tg,cy as Ng,cz as Ig,cA as Ug,cB as Dg,cC as Bg,cD as Jg,cE as Lg,cF as Wg,cG as Fg,cH as _g,cI as Vg,cJ as $g,cK as Hg,cL as Qg,cM as Kg,cN as Yg,cO as Gg,cP as Zg,cQ as Xg,cR as eb,cS as tb,cT as nb,cU as rb,cV as ob,cW as ab,cX as Uv,cY as sb,cZ as xu,c_ as Dv,c$ as wp,d0 as ib,d1 as lb,d2 as cb,d3 as ub,d4 as db,d5 as vb,d6 as fb,d7 as pb,d8 as hb,d9 as mb,da as gb,db as bb,dc as jb,dd as Bv,de as yb}from"./vendor-DXT3JbXW.js";import"./vendor-vue-YJSRobM6.js";var wu,kp,ku,xb=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],wb=["mainAxis","crossAxis","limiter"];function kb(e){return Mp(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||Op(e)||Cp()}function Sp(e,t){if(e==null)return{};var r,o,s=function(i,l){if(i==null)return{};var c={};for(var d in i)if({}.hasOwnProperty.call(i,d)){if(l.indexOf(d)!==-1)continue;c[d]=i[d]}return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function Jv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Jv(Object(r),!0).forEach(function(o){jo(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jv(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Lv(e,t,r,o,s,a,i){try{var l=e[a](i),c=l.value}catch(d){return void r(d)}l.done?t(c):Promise.resolve(c).then(o,s)}function vt(e){return function(){var t=this,r=arguments;return new Promise(function(o,s){var a=e.apply(t,r);function i(c){Lv(a,o,s,i,l,"next",c)}function l(c){Lv(a,o,s,i,l,"throw",c)}i(void 0)})}}function so(e,t){return Mp(e)||function(r,o){var s=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(s!=null){var a,i,l,c,d=[],u=!0,m=!1;try{if(l=(s=s.call(r)).next,o===0){if(Object(s)!==s)return;u=!1}else for(;!(u=(a=l.call(s)).done)&&(d.push(a.value),d.length!==o);u=!0);}catch(g){m=!0,i=g}finally{try{if(!u&&s.return!=null&&(c=s.return(),Object(c)!==c))return}finally{if(m)throw i}}return d}}(e,t)||Op(e,t)||Cp()}function Cp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Op(e,t){if(e){if(typeof e=="string")return id(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?id(e,t):void 0}}function id(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function Mp(e){if(Array.isArray(e))return e}function zp(e,t){qp(e,t),t.add(e)}function cn(e,t,r){qp(e,t),t.set(e,r)}function qp(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function ee(e,t){return e.get($n(e,t))}function kn(e,t,r){return e.set($n(e,t),r),r}function $n(e,t,r){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}function jo(e,t,r){return(t=function(o){var s=function(a,i){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var c=l.call(a,i);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}(o,"string");return typeof s=="symbol"?s:s+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Wv,Su,Fv,Cu;typeof window<"u"&&((Su=(Wv=(Cu=(Fv=window).__svelte)!==null&&Cu!==void 0?Cu:Fv.__svelte={}).v)!==null&&Su!==void 0?Su:Wv.v=new Set).add("5");var Ui=!1;Ui=!0;var Ir=Symbol("uninitialized"),Ep="http://www.w3.org/1999/xhtml",Sb=!1,zl=Array.isArray,Cb=Array.prototype.indexOf,ld=Array.prototype.includes,vc=Array.from,Ob=Object.defineProperty,qa=Object.getOwnPropertyDescriptor,Ap=Object.getOwnPropertyDescriptors,Mb=Object.prototype,zb=Array.prototype,Zd=Object.getPrototypeOf,_v=Object.isExtensible;function Ki(e){return typeof e=="function"}var Pp=()=>{};function qb(e){return e()}function cd(e){for(var t=0;t<e.length;t++)e[t]()}function Rp(){var e,t;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}var Eb=1<<24,ql=16,Di=32,Xd=64,Ro=512,Lr=1024,So=2048,fa=4096,ia=8192,ls=16384,Bi=32768,ud=1<<25,Js=65536,Tp=1<<17,Np=1<<19,Zo=1<<25,Cc=65536,Oc=1<<21,ns=1<<23,la=Symbol("$state"),Ip=Symbol("legacy props"),Ab=Symbol(""),dd=Symbol("attributes"),vd=Symbol("class"),fd=Symbol("style"),fc=Symbol("text"),Ou=Symbol("form reset"),hl=new class extends Error{constructor(){super(...arguments),jo(this,"name","StaleReactionError"),jo(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},eu=!((wu=globalThis.document)===null||wu===void 0||!wu.contentType)&&globalThis.document.contentType.includes("xml");function El(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Up(e){return e===this.v}function Dp(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Bp(e){return!Dp(e,this.v)}var Sn=null;function xi(e){Sn=e}function hs(e){return Jp().get(e)}function ot(e){Sn={p:Sn,i:!1,c:null,e:null,s:e,x:null,r:Ht,l:Ui&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function at(e){var t=Sn,r=t.e;if(r!==null)for(var o of(t.e=null,r))lh(o);return e!==void 0&&(t.x=e),t.i=!0,Sn=t.p,e??{}}function Ji(){return!Ui||Sn!==null&&Sn.l===null}function Jp(e){var t,r;return Sn===null&&El(),(r=(t=Sn).c)!==null&&r!==void 0?r:t.c=new Map(function(o){for(var s=o.p;s!==null;){var a=s.c;if(a!==null)return a;s=s.p}return null}(Sn)||void 0)}var Es=[];function Lp(){var e=Es;Es=[],cd(e)}function cs(e){if(Es.length===0&&!cl){var t=Es;queueMicrotask(()=>{t===Es&&Lp()})}Es.push(e)}function Pb(){for(;Es.length>0;)Lp()}function Wp(e){var t=Ht;if(t===null)return wn.f|=ns,e;if(!(t.f&Bi)&&!(4&t.f))throw e;Xa(e,t)}function Xa(e,t){if(t===null||!(t.f&ls)){for(;t!==null;){if(128&t.f){if(!(t.f&Bi))throw e;try{return void t.b.error(e)}catch(r){e=r}}t=t.parent}throw e}}var Rb=-7169;function Pr(e,t){e.f=e.f&Rb|t}function ev(e){e.f&Ro||e.deps===null?Pr(e,Lr):Pr(e,fa)}function Fp(e){if(e!==null)for(var t of e)2&t.f&&t.f&Cc&&(t.f^=Cc,Fp(t.deps))}function _p(e,t,r){e.f&So?t.add(e):e.f&fa&&r.add(e),Fp(e.deps),Pr(e,Lr)}var Vl=!1,Vv=!1;function wi(e){var t=wn,r=Ht;Uo(null),ho(null);try{return e()}finally{Uo(t),ho(r)}}function Vp(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r;e.addEventListener(t,()=>wi(r));var s=e[Ou];e[Ou]=s?()=>{s(),o(!0)}:()=>o(!0),Vv||(Vv=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{if(!a.defaultPrevented)for(var i of a.target.elements){var l;(l=i[Ou])===null||l===void 0||l.call(i)}})},{capture:!0}))}var ki=new WeakMap,Tb=new WeakMap,Ka=new WeakMap,pd=new WeakMap,Ao=new WeakMap,rs=new WeakMap,ca=new WeakMap,Xo=new WeakMap,ll=new WeakMap,ti=new WeakMap,mi=new WeakMap,$l=new WeakMap,hd=new WeakMap,md=new WeakMap,ks=new WeakMap,$v=new WeakMap,Wo=new WeakSet;class Nb{constructor(t,r,o,s){var a,i,l,c,d,u;zp(this,Wo),jo(this,"parent",void 0),jo(this,"is_pending",!1),jo(this,"transform_error",void 0),cn(this,ki,void 0),cn(this,Tb,null),cn(this,Ka,void 0),cn(this,pd,void 0),cn(this,Ao,void 0),cn(this,rs,null),cn(this,ca,null),cn(this,Xo,null),cn(this,ll,null),cn(this,ti,0),cn(this,mi,0),cn(this,$l,!1),cn(this,hd,new Set),cn(this,md,new Set),cn(this,ks,null),cn(this,$v,(l=()=>(kn(ks,this,Ia(ee(ti,this))),()=>{kn(ks,this,null)}),d=0,u=Ia(0),()=>{nv()&&(n(u),Li(()=>(d===0&&(c=T(()=>l(()=>ul(u)))),d+=1,()=>{cs(()=>{var m;(d-=1)==0&&((m=c)===null||m===void 0||m(),c=void 0,ul(u))})})))})),kn(ki,this,t),kn(Ka,this,r),kn(pd,this,m=>{var g=Ht;g.b=this,g.f|=128,o(m)}),this.parent=Ht.b,this.transform_error=(a=s??((i=this.parent)===null||i===void 0?void 0:i.transform_error))!==null&&a!==void 0?a:m=>m,kn(Ao,this,Wi(()=>{$n(Wo,this,$p).call(this)},589824))}defer_effect(t){_p(t,ee(hd,this),ee(md,this))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!ee(Ka,this).pending}update_pending_count(t,r){$n(Wo,this,Qp).call(this,t,r),kn(ti,this,ee(ti,this)+t),ee(ks,this)&&!ee($l,this)&&(kn($l,this,!0),cs(()=>{kn($l,this,!1),ee(ks,this)&&zi(ee(ks,this),ee(ti,this))}))}get_effect_pending(){return ee($v,this).call(this),n(ee(ks,this))}error(t){var r;if(!ee(Ka,this).onerror&&!ee(Ka,this).failed)throw t;(r=en)!==null&&r!==void 0&&r.is_fork?(ee(rs,this)&&en.skip_effect(ee(rs,this)),ee(ca,this)&&en.skip_effect(ee(ca,this)),ee(Xo,this)&&en.skip_effect(ee(Xo,this)),en.oncommit(()=>{$n(Wo,this,Qv).call(this,t)})):$n(Wo,this,Qv).call(this,t)}}function $p(){try{if(this.is_pending=this.has_pending_snippet(),kn(mi,this,0),kn(ti,this,0),kn(rs,this,Ua(()=>{ee(pd,this).call(this,ee(ki,this))})),ee(mi,this)>0){var e=kn(ll,this,document.createDocumentFragment());ov(ee(rs,this),e);var t=ee(Ka,this).pending;kn(ca,this,Ua(()=>t(ee(ki,this))))}else $n(Wo,this,Hp).call(this,en)}catch(r){this.error(r)}}function Hp(e){this.is_pending=!1,e.transfer_effects(ee(hd,this),ee(md,this))}function Hv(e){var t=Ht,r=wn,o=Sn;ho(ee(Ao,this)),Uo(ee(Ao,this)),xi(ee(Ao,this).ctx);try{return ms.ensure(),e()}catch(s){return Wp(s),null}finally{ho(t),Uo(r),xi(o)}}function Qp(e,t){var r;this.has_pending_snippet()?(kn(mi,this,ee(mi,this)+e),ee(mi,this)===0&&($n(Wo,this,Hp).call(this,t),ee(ca,this)&&qi(ee(ca,this),()=>{kn(ca,this,null)}),ee(ll,this)&&(ee(ki,this).before(ee(ll,this)),kn(ll,this,null)))):this.parent&&$n(Wo,r=this.parent,Qp).call(r,e,t)}function Qv(e){ee(rs,this)&&(Zr(ee(rs,this)),kn(rs,this,null)),ee(ca,this)&&(Zr(ee(ca,this)),kn(ca,this,null)),ee(Xo,this)&&(Zr(ee(Xo,this)),kn(Xo,this,null));var t=ee(Ka,this).onerror,r=ee(Ka,this).failed,o=!1,s=!1,a=()=>{o?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(o=!0,s&&function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}(),ee(Xo,this)!==null&&qi(ee(Xo,this),()=>{kn(Xo,this,null)}),$n(Wo,this,Hv).call(this,()=>{$n(Wo,this,$p).call(this)}))},i=l=>{try{s=!0,t?.(l,a),s=!1}catch(c){Xa(c,ee(Ao,this)&&ee(Ao,this).parent)}r&&kn(Xo,this,$n(Wo,this,Hv).call(this,()=>{try{return Ua(()=>{var c=Ht;c.b=this,c.f|=128,r(ee(ki,this),()=>l,()=>a)})}catch(c){return Xa(c,ee(Ao,this).parent),null}}))};cs(()=>{var l;try{l=this.transform_error(e)}catch(c){return void Xa(c,ee(Ao,this)&&ee(Ao,this).parent)}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(i,c=>Xa(c,ee(Ao,this)&&ee(Ao,this).parent)):i(l)})}function Kp(e,t,r,o){var s=Ji()?Si:De,a=e.filter(h=>!h.settled),i=t.map(s);if(r.length!==0||a.length!==0){var l=Ht,c=function(){var h=Ht,y=wn,b=Sn,j=en;return function(){var x=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];ho(h),Uo(y),xi(b),x&&!(h.f&ls)&&(j?.activate(),j?.apply())}}(),d=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null,u=Kv();r.length!==0?d?d.then(()=>{c(),g(),Hl()}):g():d.then(()=>m([])).finally(u)}else o(i);function m(h){if(!(l.f&ls)){c();try{o([...i,...h])}catch(y){Xa(y,l)}Hl()}}function g(){Promise.all(r.map(h=>function(y){var b=Ht;b===null&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}();var j=void 0,x=Ia(Ir),M=!wn,E=new Set;return function(q){Ko(4718592,q)}(()=>{var q=Ht,k=Rp();j=k.promise;try{Promise.resolve(y()).then(k.resolve,$=>{$!==hl&&k.reject($)}).finally(Hl)}catch($){k.reject($),Hl()}var A=en;if(M){var U,F;if(q.f&Bi)var S=Kv();if((U=b.b)!==null&&U!==void 0&&U.is_rendered())(F=A.async_deriveds.get(q))===null||F===void 0||F.reject(rl);else for(var J of E.values())J.reject(rl);E.add(k),A.async_deriveds.set(q,k)}var Z=function($){var le=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;S?.(),E.delete(k),le!==rl&&(A.activate(),le?(x.f|=ns,zi(x,le)):(x.f&ns&&(x.f^=ns),zi(x,$)),A.deactivate())};k.promise.then(Z,$=>Z(null,$||"unknown"))}),tu(()=>{for(var q of E)q.reject(rl)}),new Promise(q=>{function k(A){function U(){A===j?q(x):k(j)}A.then(U,U)}k(j)})}(h))).then(m).catch(h=>Xa(h,l)).finally(u)}}function Hl(){var e,t=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];ho(null),Uo(null),xi(null),t&&((e=en)===null||e===void 0||e.deactivate())}function Kv(){var e=Ht,t=e.b,r=en,o=!(t==null||!t.is_rendered());return t?.update_pending_count(1,r),r.increment(o,e),()=>{t?.update_pending_count(-1,r),r.decrement(o,e)}}function Si(e){return Ht!==null&&(Ht.f|=Np),{ctx:Sn,deps:null,effects:null,equals:Up,f:2050,fn:e,reactions:null,rv:0,v:Ir,wv:0,parent:Ht,ac:null}}var rl=Symbol("obsolete");function Dt(e){var t=Si(e);return hh(t),t}function De(e){var t=Si(e);return t.equals=Bp,t}function tv(e){var t,r=Ht,o=e.parent;if(!Da&&o!==null&&e.v!==Ir&&24576&o.f)return console.warn("https://svelte.dev/e/derived_inert"),e.v;ho(o);try{e.f&=-65537,function(s){var a=s.effects;if(a!==null){s.effects=null;for(var i=0;i<a.length;i+=1)Zr(a[i])}}(e),t=jh(e)}finally{ho(r)}return t}function Yp(e){var t,r,o=tv(e);if(!e.equals(o)&&(e.wv=gh(),(t=en)===null||t===void 0||!t.is_fork||e.deps===null)){var s;if(en!==null?(en.capture(e,o,!0),(s=gd)===null||s===void 0||s.capture(e,o,!0)):e.v=o,e.deps===null)return void Pr(e,Lr)}Da||(_o!==null?(nv()||(r=en)!==null&&r!==void 0&&r.is_fork)&&_o.set(e,o):ev(e))}function Gp(e){if(e.effects!==null)for(var t of e.effects)t.teardown&&t.fn!==null&&Ls(t)}var ni=null,en=null,gd=null,_o=null,bd=null,cl=!1,Mu=!1,Ci=null,Mc=null,Zp=0,Ib=1,jd=new WeakMap,Oi=new WeakMap,zc=new WeakMap,qc=new WeakMap,Ql=new WeakMap,ri=new WeakMap,zs=new WeakMap,ol=new WeakMap,ja=new WeakMap,Yv=new WeakMap,Mi=new WeakMap,Ea=new WeakMap,Ya=new WeakMap,zu=new WeakMap,Kl=new WeakMap,Kr=new WeakSet;class ms{constructor(){zp(this,Kr),jo(this,"id",Ib++),cn(this,jd,!1),jo(this,"linked",!0),cn(this,Oi,null),cn(this,zc,null),jo(this,"async_deriveds",new Map),jo(this,"current",new Map),jo(this,"previous",new Map),cn(this,qc,new Set),cn(this,Ql,new Set),cn(this,ri,0),cn(this,zs,new Map),cn(this,ol,null),cn(this,ja,[]),cn(this,Yv,[]),cn(this,Mi,new Set),cn(this,Ea,new Set),cn(this,Ya,new Map),cn(this,zu,new Set),jo(this,"is_fork",!1),cn(this,Kl,!1),ni===null?ni=this:(kn(zc,ni,this),kn(Oi,this,ni)),ni=this}skip_effect(t){ee(Ya,this).has(t)||ee(Ya,this).set(t,{d:[],m:[]}),ee(zu,this).delete(t)}unskip_effect(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:a=>this.schedule(a),o=ee(Ya,this).get(t);if(o){for(var s of(ee(Ya,this).delete(t),o.d))Pr(s,So),r(s);for(s of o.m)Pr(s,fa),r(s)}ee(zu,this).add(t)}capture(t,r){var o,s=arguments.length>2&&arguments[2]!==void 0&&arguments[2];t.v===Ir||this.previous.has(t)||this.previous.set(t,t.v),!(t.f&ns)&&(this.current.set(t,[r,s]),(o=_o)===null||o===void 0||o.set(t,r)),this.is_fork||(t.v=r)}activate(){en=this}deactivate(){en=null,_o=null}flush(){try{Mu=!0,en=this,$n(Kr,this,Ec).call(this)}finally{Zp=0,bd=null,Ci=null,Mc=null,Mu=!1,en=null,_o=null,Ts.clear()}}discard(){var t;for(var r of ee(Ql,this))r(this);for(var o of(ee(Ql,this).clear(),this.async_deriveds.values()))o.reject(rl);$n(Kr,this,Ac).call(this),(t=ee(ol,this))===null||t===void 0||t.resolve()}register_created_effect(t){ee(Yv,this).push(t)}increment(t,r){if(kn(ri,this,ee(ri,this)+1),t){var o,s=(o=ee(zs,this).get(r))!==null&&o!==void 0?o:0;ee(zs,this).set(r,s+1)}}decrement(t,r){if(kn(ri,this,ee(ri,this)-1),t){var o,s=(o=ee(zs,this).get(r))!==null&&o!==void 0?o:0;s===1?ee(zs,this).delete(r):ee(zs,this).set(r,s-1)}ee(Kl,this)||(kn(Kl,this,!0),cs(()=>{kn(Kl,this,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(var o of t)ee(Mi,this).add(o);for(var s of r)ee(Ea,this).add(s);t.clear(),r.clear()}oncommit(t){ee(qc,this).add(t)}ondiscard(t){ee(Ql,this).add(t)}settled(){var t;return((t=ee(ol,this))!==null&&t!==void 0?t:kn(ol,this,Rp())).promise}static ensure(){if(en===null){var t=en=new ms;Mu||cl||cs(()=>{ee(jd,t)||t.flush()})}return en}apply(){_o=null}schedule(t){var r;if(bd=t,(r=t.b)!==null&&r!==void 0&&r.is_pending&&16777228&t.f&&(t.f&Bi)===0)t.b.defer_effect(t);else{for(var o=t;o.parent!==null;){var s=(o=o.parent).f;if(!(Ci===null||o!==Ht||wn!==null&&2&wn.f))return;if(96&s){if(!(s&Lr))return;o.f^=Lr}}ee(ja,this).push(o)}}}function Gv(){if(this.is_fork)return!0;for(var e of ee(zs,this).keys()){for(var t=e,r=!1;t.parent!==null;){if(ee(Ya,this).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1}function Ec(){var e;for(var t of(kn(jd,this,!0),Zp++>1e3&&($n(Kr,this,Ac).call(this),function(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(M){Xa(M,bd)}}()),ee(Mi,this)))ee(Ea,this).delete(t),Pr(t,So),this.schedule(t);for(var r of ee(Ea,this))Pr(r,fa),this.schedule(r);var o=ee(ja,this);kn(ja,this,[]),this.apply();var s=Ci=[],a=[],i=Mc=[];for(var l of o)try{$n(Kr,this,Ub).call(this,l,s,a)}catch(M){throw th(l),$n(Kr,this,Gv).call(this)||this.discard(),M}if(en=null,i.length>0){var c=kp.ensure();for(var d of i)c.schedule(d)}if(Ci=null,Mc=null,$n(Kr,this,Gv).call(this)){for(var u of($n(Kr,this,Yl).call(this,a),$n(Kr,this,Yl).call(this,s),ee(Ya,this))){var m=so(u,2);eh(m[0],m[1])}var g;i.length>0&&$n(Kr,g=en,Ec).call(g)}else{var h=$n(Kr,this,Db).call(this);if(h)return $n(Kr,this,Yl).call(this,a),$n(Kr,this,Yl).call(this,s),void $n(Kr,h,Bb).call(h,this);for(var y of(ee(Mi,this).clear(),ee(Ea,this).clear(),ee(qc,this)))y(this);ee(qc,this).clear(),gd=this,Zv(a),Zv(s),gd=null,(e=ee(ol,this))===null||e===void 0||e.resolve();var b,j=en;if(ee(ri,this)!==0||ee(ja,this).length!==0&&j===null||$n(Kr,this,Ac).call(this),ee(ja,this).length>0)if(j!==null){var x=j;ee(ja,x).push(...ee(ja,this).filter(M=>!ee(ja,x).includes(M)))}else j=this;j!==null&&$n(Kr,b=j,Ec).call(b)}}function Ub(e,t,r){e.f^=Lr;for(var o=e.first;o!==null;){var s=o.f,a=!!(96&s);if(!(a&&s&Lr||s&ia||ee(Ya,this).has(o))&&o.fn!==null){a?o.f^=Lr:4&s?t.push(o):Fi(o)&&(s&ql&&ee(Ea,this).add(o),Ls(o));var i=o.first;if(i!==null){o=i;continue}}for(;o!==null;){var l=o.next;if(l!==null){o=l;break}o=o.parent}}}function Db(){for(var e=ee(Oi,this);e!==null;){if(!e.is_fork)for(var t of this.current){var r=so(t,2),o=r[0],s=so(r[1],2)[1];if(e.current.has(o)&&!s)return e}e=ee(Oi,e)}return null}function Bb(e){for(var t of e.current){var r=so(t,2),o=r[0],s=r[1];!this.previous.has(o)&&e.previous.has(o)&&this.previous.set(o,e.previous.get(o)),this.current.set(o,s)}for(var a of e.async_deriveds){var i=so(a,2),l=i[0],c=i[1],d=this.async_deriveds.get(l);d&&c.promise.then(d.resolve).catch(d.reject)}e.async_deriveds.clear(),this.transfer_effects(ee(Mi,e),ee(Ea,e));var u=g=>{var h=g.reactions;if(h!==null&&(!(2&g.f)||6144&g.f))for(var y of h){var b=y.f;if(2&b)u(y);else{var j=y;4194320&b&&!this.async_deriveds.has(j)&&(ee(Ea,this).delete(j),Pr(j,So),this.schedule(j))}}};for(var m of this.current.keys())u(m);this.oncommit(()=>e.discard()),$n(Kr,e,Ac).call(e),en=this,$n(Kr,this,Ec).call(this)}function Yl(e){for(var t=0;t<e.length;t+=1)_p(e[t],ee(Mi,this),ee(Ea,this))}function Ac(){if(this.linked){var e=ee(Oi,this),t=ee(zc,this);e===null||kn(zc,e,t),t===null?ni=e:kn(Oi,t,e),this.linked=!1}}function Vn(e){var t=cl;cl=!0;try{for(;;){if(Pb(),en===null)return;en.flush()}}finally{cl=t}}kp=ms;var ya=null;function Zv(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var o,s=e[r++];if(!(24576&s.f)&&Fi(s)&&(ya=new Set,Ls(s),s.deps===null&&s.first===null&&s.nodes===null&&s.teardown===null&&s.ac===null&&vh(s),((o=ya)===null||o===void 0?void 0:o.size)>0)){for(var a of(Ts.clear(),ya))if(!(24576&a.f)){for(var i=[a],l=a.parent;l!==null;)ya.has(l)&&(ya.delete(l),i.push(l)),l=l.parent;for(var c=i.length-1;c>=0;c--){var d=i[c];24576&d.f||Ls(d)}}ya.clear()}}ya=null}}function Xp(e){en.schedule(e)}function eh(e,t){if(!(e.f&Di)||!(e.f&Lr)){e.f&So?t.d.push(e):e.f&fa&&t.m.push(e),Pr(e,Lr);for(var r=e.first;r!==null;)eh(r,t),r=r.next}}function th(e){Pr(e,Lr);for(var t=e.first;t!==null;)th(t),t=t.next}var Aa,nh,rh,oh,pc=new Set,Ts=new Map,Xv=!1;function Ia(e,t){return{f:0,v:e,reactions:null,equals:Up,rv:0,wv:0}}function ba(e,t){var r=Ia(e);return hh(r),r}function P(e){var t,r,o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=Ia(e);return o||(a.equals=Bp),Ui&&s&&Sn!==null&&Sn.l!==null&&((r=(t=Sn.l).s)!==null&&r!==void 0?r:t.s=[]).push(a),a}function xo(e,t){return f(e,T(()=>n(e))),t}function f(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return wn===null||Vo&&!(wn.f&Tp)||!Ji()||!(4325394&wn.f)||To!==null&&To.has(e)||function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),zi(e,r?li(t):t,Mc)}function zi(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!e.equals(t)){Ts.set(e,Da?t:e.v);var o=ms.ensure();if(o.capture(e,t),2&e.f){var s=e;e.f&So&&tv(s),_o===null&&ev(s)}e.wv=gh(),ah(e,So,r),!Ji()||Ht===null||!(Ht.f&Lr)||96&Ht.f||(Mo===null?function(a){Mo=a}([e]):Mo.push(e)),!o.is_fork&&pc.size>0&&!Xv&&function(){for(var a of(Xv=!1,pc)){a.f&Lr&&Pr(a,fa);var i=void 0;try{i=Fi(a)}catch{i=!0}i&&Ls(a)}pc.clear()}()}return t}function ef(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=n(e),o=t===1?r++:r--;return f(e,r),o}function ul(e){f(e,e.v+1)}function ah(e,t,r){var o=e.reactions;if(o!==null)for(var s=Ji(),a=o.length,i=0;i<a;i++){var l=o[i],c=l.f;if(s||l!==Ht){var d=(c&So)===0;if(d&&Pr(l,t),(c&Tp)!==0)pc.add(l);else if(2&c){var u,m=l;(u=_o)===null||u===void 0||u.delete(m),!(c&Cc)&&(c&Ro&&(Ht===null||!(Ht.f&Oc))&&(l.f|=Cc),ah(m,fa,r))}else if(d){var g=l;c&ql&&ya!==null&&ya.add(g),r!==null?r.push(g):Xp(g)}}}}function li(e){if(typeof e!="object"||e===null||la in e)return e;var t=Zd(e);if(t!==Mb&&t!==zb)return e;var r=new Map,o=zl(e),s=ba(0),a=Is,i=l=>{if(Is===a)return l();var c=wn,d=Is;Uo(null),rf(a);var u=l();return Uo(c),rf(d),u};return o&&r.set("length",ba(e.length)),new Proxy(e,{defineProperty(l,c,d){"value"in d&&d.configurable!==!1&&d.enumerable!==!1&&d.writable!==!1||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var u=r.get(c);return u===void 0?i(()=>{var m=ba(d.value);return r.set(c,m),m}):f(u,d.value,!0),!0},deleteProperty(l,c){var d=r.get(c);if(d===void 0){if(c in l){var u=i(()=>ba(Ir));r.set(c,u),ul(s)}}else f(d,Ir),ul(s);return!0},get(l,c,d){var u;if(c===la)return e;var m=r.get(c),g=c in l;if(m===void 0&&(!g||(u=qa(l,c))!==null&&u!==void 0&&u.writable)&&(m=i(()=>ba(li(g?l[c]:Ir))),r.set(c,m)),m!==void 0){var h=n(m);return h===Ir?void 0:h}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var u=r.get(c);u&&(d.value=n(u))}else if(d===void 0){var m=r.get(c),g=m?.v;if(m!==void 0&&g!==Ir)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return d},has(l,c){var d;if(c===la)return!0;var u=r.get(c),m=u!==void 0&&u.v!==Ir||Reflect.has(l,c);return(u!==void 0||Ht!==null&&(!m||(d=qa(l,c))!==null&&d!==void 0&&d.writable))&&(u===void 0&&(u=i(()=>ba(m?li(l[c]):Ir)),r.set(c,u)),n(u)===Ir)?!1:m},set(l,c,d,u){var m,g=r.get(c),h=c in l;if(o&&c==="length")for(var y=d;y<g.v;y+=1){var b=r.get(y+"");b!==void 0?f(b,Ir):y in l&&(b=i(()=>ba(Ir)),r.set(y+"",b))}g===void 0?(!h||(m=qa(l,c))!==null&&m!==void 0&&m.writable)&&(f(g=i(()=>ba(void 0)),li(d)),r.set(c,g)):(h=g.v!==Ir,f(g,i(()=>li(d))));var j=Reflect.getOwnPropertyDescriptor(l,c);if(j!=null&&j.set&&j.set.call(u,d),!h){if(o&&typeof c=="string"){var x=r.get("length"),M=Number(c);Number.isInteger(M)&&M>=x.v&&f(x,M+1)}ul(s)}return!0},ownKeys(l){n(s);var c=Reflect.ownKeys(l).filter(g=>{var h=r.get(g);return h===void 0||h.v!==Ir});for(var d of r){var u=so(d,2),m=u[0];u[1].v===Ir||m in l||c.push(m)}return c},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function tf(e){try{if(e!==null&&typeof e=="object"&&la in e)return e[la]}catch{}return e}function Jb(e,t){return Object.is(tf(e),tf(t))}function Ns(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function wo(e){return rh.call(e)}function Al(e){return oh.call(e)}function R(e,t){return wo(e)}function dt(e){var t=wo(e);return t instanceof Comment&&t.data===""?Al(t):t}function D(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=e;t--;)r=Al(r);return r}function sh(e,t,r){return t==null||t===Ep?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function ih(e){Ht===null&&(wn===null&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}()),Da&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Ko(e,t){var r,o=Ht;o!==null&&o.f&ia&&(e|=ia);var s={ctx:Sn,deps:null,nodes:null,f:e|So|Ro,first:null,fn:t,last:null,next:null,parent:o,b:o&&o.b,prev:null,teardown:null,wv:0,ac:null};(r=en)===null||r===void 0||r.register_created_effect(s);var a=s;if(4&e)Ci!==null?Ci.push(s):ms.ensure().schedule(s);else if(t!==null){try{Ls(s)}catch(c){throw Zr(s),c}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&!(a.f&Np)&&(a=a.first,e&ql&&e&Js&&a!==null&&(a.f|=Js))}if(a!==null&&(a.parent=o,o!==null&&function(c,d){var u=d.last;u===null?d.last=d.first=c:(u.next=c,c.prev=u,d.last=c)}(a,o),wn!==null&&2&wn.f&&(e&Xd)===0)){var i,l=wn;((i=l.effects)!==null&&i!==void 0?i:l.effects=[]).push(a)}return s}function nv(){return wn!==null&&!Vo}function tu(e){var t=Ko(8,null);return Pr(t,Lr),t.teardown=e,t}function yd(e){ih();var t=Ht.f;if(!(!wn&&t&Di&&Sn!==null&&!Sn.i))return lh(e);var r,o=Sn;((r=o.e)!==null&&r!==void 0?r:o.e=[]).push(e)}function lh(e){return Ko(1048580,e)}function $r(e){return Ko(4,e)}function W(e,t){var r={effect:null,ran:!1,deps:e};Sn.l.$.push(r),r.effect=Li(()=>{if(e(),!r.ran){r.ran=!0;var o=Ht;try{ho(o.parent),T(t)}finally{ho(o)}}})}function jn(){var e=Sn;Li(()=>{for(var t of e.l.$){t.deps();var r=t.effect;r.f&Lr&&r.deps!==null&&Pr(r,fa),Fi(r)&&Ls(r),t.ran=!1}})}function Li(e){return Ko(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function je(e){Kp(arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=>{Ko(8,()=>{e(...t.map(n))})})}function Wi(e){return Ko(ql|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function ch(e){return Ko(Eb|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function Ua(e){return Ko(524320,e)}function uh(e){var t=e.teardown;if(t!==null){var r=Da,o=wn;nf(!0),Uo(null);try{t.call(null)}finally{nf(r),Uo(o)}}}function rv(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=e.first;e.first=e.last=null;for(var o,s=function(){var a=r.ac;a!==null&&wi(()=>{a.abort(hl)}),o=r.next,r.f&Xd?r.parent=null:Zr(r,t),r=o};r!==null;)s()}function Zr(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=!1;(t||262144&e.f)&&e.nodes!==null&&e.nodes.end!==null&&(dh(e.nodes.start,e.nodes.end),r=!0),e.f|=ud,rv(e,t&&!r),ml(e,0);var o=e.nodes&&e.nodes.t;if(o!==null)for(var s of o)s.stop();uh(e),e.f^=ud,e.f|=ls;var a=e.parent;a!==null&&a.first!==null&&vh(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function dh(e,t){for(;e!==null;){var r=e===t?null:Al(e);e.remove(),e=r}}function vh(e){var t=e.parent,r=e.prev,o=e.next;r!==null&&(r.next=o),o!==null&&(o.prev=r),t!==null&&(t.first===e&&(t.first=o),t.last===e&&(t.last=r))}function qi(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];fh(e,o,!0);var s=()=>{r&&Zr(e),t&&t()},a=o.length;if(a>0){var i=()=>--a||s();for(var l of o)l.out(i)}else s()}function fh(e,t,r){if(!(e.f&ia)){e.f^=ia;var o=e.nodes&&e.nodes.t;if(o!==null)for(var s of o)(s.is_global||r)&&t.push(s);for(var a=e.first;a!==null;){var i=a.next;a.f&Xd||fh(a,t,!!(a.f&Js||a.f&Di&&e.f&ql)&&r),a=i}}}function Pc(e){ph(e,!0)}function ph(e,t){if(e.f&ia){e.f^=ia,!(e.f&Lr)&&(Pr(e,So),ms.ensure().schedule(e));for(var r=e.first;r!==null;){var o=r.next;ph(r,!!(r.f&Js||r.f&Di)&&t),r=o}var s=e.nodes&&e.nodes.t;if(s!==null)for(var a of s)(a.is_global||t)&&a.in()}}function ov(e,t){if(e.nodes)for(var r=e.nodes.start,o=e.nodes.end;r!==null;){var s=r===o?null:Al(r);t.append(r),r=s}}var hc=!1,Da=!1;function nf(e){Da=e}var wn=null,Vo=!1;function Uo(e){wn=e}var Ht=null;function ho(e){Ht=e}var To=null;function hh(e){wn!==null&&(To??(To=new Set)).add(e)}var co=null,bo=0,Mo=null,mh=1,As=0,Is=As;function rf(e){Is=e}function gh(){return++mh}function Fi(e){var t=e.f;if(t&So)return!0;if(2&t&&(e.f&=-65537),(t&fa)!==0){for(var r=e.deps,o=r.length,s=0;s<o;s++){var a=r[s];if(Fi(a)&&Yp(a),a.wv>e.wv)return!0}t&Ro&&_o===null&&Pr(e,Lr)}return!1}function bh(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=e.reactions;if(o!==null&&(To===null||!To.has(e)))for(var s=0;s<o.length;s++){var a=o[s];2&a.f?bh(a,t,!1):t===a&&(r?Pr(a,So):a.f&Lr&&Pr(a,fa),Xp(a))}}function jh(e){var t=co,r=bo,o=Mo,s=wn,a=To,i=Sn,l=Vo,c=Is,d=e.f;co=null,bo=0,Mo=null,wn=96&d?null:e,To=null,xi(e.ctx),Vo=!1,Is=++As,e.ac!==null&&(wi(()=>{e.ac.abort(hl)}),e.ac=null);try{var u;e.f|=Oc;var m=(0,e.fn)();e.f|=Bi;var g=e.deps,h=(u=en)===null||u===void 0?void 0:u.is_fork;if(co!==null){var y;if(h||ml(e,bo),g!==null&&bo>0)for(g.length=bo+co.length,y=0;y<co.length;y++)g[bo+y]=co[y];else e.deps=g=co;if(nv()&&e.f&Ro)for(y=bo;y<g.length;y++){var b,j;((j=(b=g[y]).reactions)!==null&&j!==void 0?j:b.reactions=[]).push(e)}}else!h&&g!==null&&bo<g.length&&(ml(e,bo),g.length=bo);if(Ji()&&Mo!==null&&!Vo&&g!==null&&!(6146&e.f))for(y=0;y<Mo.length;y++)bh(Mo[y],e);if(s!==null&&s!==e){if(As++,s.deps!==null)for(var x=0;x<r;x+=1)s.deps[x].rv=As;if(t!==null)for(var M of t)M.rv=As;Mo!==null&&(o===null?o=Mo:o.push(...Mo))}return e.f&ns&&(e.f^=ns),m}catch(E){return Wp(E)}finally{e.f^=Oc,co=t,bo=r,Mo=o,wn=s,To=a,xi(i),Vo=l,Is=c}}function Lb(e,t){var r=t.reactions;if(r!==null){var o=Cb.call(r,e);if(o!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[o]=r[s],r.pop())}}if(r===null&&2&t.f&&(co===null||!ld.call(co,t))){var a=t;a.f&Ro&&(a.f^=Ro,a.f&=-65537),a.v!==Ir&&ev(a),a.ac!==null&&wi(()=>{a.ac.abort(hl),a.ac=null,Pr(a,So)}),function(i){if(i.effects!==null){var l=function(d){var u;(d.teardown||d.ac)&&((u=d.teardown)===null||u===void 0||u.call(d),d.ac!==null&&wi(()=>{d.ac.abort(hl),d.ac=null}),d.fn!==null&&(d.teardown=Pp),ml(d,0),rv(d))};for(var c of i.effects)l(c)}}(a),ml(a,0)}}function ml(e,t){var r=e.deps;if(r!==null)for(var o=t;o<r.length;o++)Lb(e,r[o])}function Ls(e){var t=e.f;if(!(t&ls)){Pr(e,Lr);var r=Ht,o=hc;Ht=e,hc=!(96&t);try{16777232&t?function(a){for(var i=a.first;i!==null;){var l=i.next;!(i.f&Di)&&Zr(i),i=l}}(e):rv(e),uh(e);var s=jh(e);e.teardown=typeof s=="function"?s:null,e.wv=mh}finally{hc=o,Ht=r}}}function yh(){return xh.apply(this,arguments)}function xh(){return(xh=vt(function*(){yield Promise.resolve(),Vn()})).apply(this,arguments)}function n(e){var t,r=!!(2&e.f);if(wn!==null&&!Vo&&!(Ht!==null&&Ht.f&ls||To!==null&&To.has(e))){var o=wn.deps;if(wn.f&Oc)e.rv<As&&(e.rv=As,co===null&&o!==null&&o[bo]===e?bo++:co===null?co=[e]:co.push(e));else{var s,a;(a=(s=wn).deps)!==null&&a!==void 0||(s.deps=[]),ld.call(wn.deps,e)||wn.deps.push(e);var i=e.reactions;i===null?e.reactions=[wn]:ld.call(i,wn)||i.push(wn)}}if(Da&&Ts.has(e))return Ts.get(e);if(r){var l=e;if(Da){var c=l.v;return(!(l.f&Lr)&&l.reactions!==null||kh(l))&&(c=tv(l)),Ts.set(l,c),c}var d=(l.f&Ro)===0&&!Vo&&wn!==null&&(hc||(wn.f&Ro)!==0),u=(l.f&Bi)===0;Fi(l)&&(d&&(l.f|=Ro),Yp(l)),d&&!u&&(Gp(l),wh(l))}if((t=_o)!==null&&t!==void 0&&t.has(e))return _o.get(e);if(e.f&ns)throw e.v;return e.v}function wh(e){if(e.f|=Ro,e.deps!==null)for(var t of e.deps){var r;((r=t.reactions)!==null&&r!==void 0?r:t.reactions=[]).push(e),2&t.f&&!(t.f&Ro)&&(Gp(t),wh(t))}}function kh(e){if(e.v===Ir)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(Ts.has(t)||2&t.f&&kh(t))return!0;return!1}function T(e){var t=Vo;try{return Vo=!0,e()}finally{Vo=t}}function p(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if(la in e)xd(e);else if(!Array.isArray(e))for(var t in e){var r=e[t];typeof r=="object"&&r&&la in r&&xd(r)}}}function xd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||t.has(e))){for(var r in t.add(e),e instanceof Date&&e.getTime(),e)try{xd(e[r],t)}catch{}var o=Zd(e);if(o!==Object.prototype&&o!==Array.prototype&&o!==Map.prototype&&o!==Set.prototype&&o!==Date.prototype){var s=Ap(o);for(var a in s){var i=s[a].get;if(i)try{i.call(e)}catch{}}}}}var ci=Symbol("events"),Sh=new Set,wd=new Set;function Ch(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function s(a){if(o.capture||kd.call(t,a),!a.cancelBubble)return wi(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?cs(()=>{t.addEventListener(e,s,o)}):t.addEventListener(e,s,o),s}function fe(e,t,r,o,s){var a={capture:o,passive:s},i=Ch(e,t,r,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&tu(()=>{t.removeEventListener(e,i,a)})}function $o(e,t,r){var o;((o=t[ci])!==null&&o!==void 0?o:t[ci]={})[e]=r}function Pl(e){for(var t=0;t<e.length;t++)Sh.add(e[t]);for(var r of wd)r(e)}function kd(e){var t,r=this,o=r.ownerDocument,s=e.type,a=((t=e.composedPath)===null||t===void 0?void 0:t.call(e))||[],i=a[0]||e.target,l=0,c=e===e&&e[ci];if(c){var d=a.indexOf(c);if(d!==-1&&(r===document||r===window))return void(e[ci]=r);var u=a.indexOf(r);if(u===-1)return;d<=u&&(l=d)}if((i=a[l]||e.target)!==r){Ob(e,"currentTarget",{configurable:!0,get:()=>i||o});var m=wn,g=Ht;Uo(null),ho(null);try{for(var h,y=[];i!==null&&i!==r;){try{var b,j=(b=i[ci])===null||b===void 0?void 0:b[s];j==null||i.disabled&&e.target!==i||j.call(i,e)}catch(E){h?y.push(E):h=E}if(e.cancelBubble)break;l++,i=l<a.length?a[l]:null}if(h){var x=function(E){queueMicrotask(()=>{throw E})};for(var M of y)x(M);throw h}}finally{e[ci]=r,delete e.currentTarget,Uo(m),ho(g)}}}var of=(globalThis==null||(ku=globalThis.window)===null||ku===void 0?void 0:ku.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Oh(e){var t=sh("template");return t.innerHTML=function(r){var o;return(o=of?.createHTML(r))!==null&&o!==void 0?o:r}(e.replaceAll("<!>","<!---->")),t.content}function us(e,t){var r=Ht;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function Y(e,t){var r,o=!!(1&t),s=!!(2&t),a=!e.startsWith("<!>");return()=>{r===void 0&&(r=Oh(a?e:"<!>"+e),o||(r=wo(r)));var i=s||nh?document.importNode(r,!0):r.cloneNode(!0);return o?us(wo(i),i.lastChild):us(i,i),i}}function gs(e,t){return function(r,o){var s,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",i=!r.startsWith("<!>"),l=!!(1&o),c="<".concat(a,">").concat(i?r:"<!>"+r,"</").concat(a,">");return()=>{if(!s){var d=wo(Oh(c));if(l)for(s=document.createDocumentFragment();wo(d);)s.appendChild(wo(d));else s=wo(d)}var u=s.cloneNode(!0);return l?us(wo(u),u.lastChild):us(u,u),u}}(e,t,"svg")}function Hr(){var e=Ns((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return us(e,e),e}function ir(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Ns();return e.append(t,r),us(t,r),e}function N(e,t){e!==null&&e.before(t)}var Wb=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],Fb={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},_b=["touchstart","touchmove"];function Vb(e){return _b.includes(e)}function st(e,t){var r,o=t==null?"":typeof t=="object"?"".concat(t):t;o!==((r=e[fc])!==null&&r!==void 0?r:e[fc]=e.nodeValue)&&(e[fc]=o,e.nodeValue="".concat(o))}function $b(e,t){return function(r,o){var s=o.target,a=o.anchor,i=o.props,l=i===void 0?{}:i,c=o.events,d=o.context,u=o.transformError;(function(){if(Aa===void 0){Aa=window,nh=/Firefox/.test(navigator.userAgent);var h=Element.prototype,y=Node.prototype,b=Text.prototype;rh=qa(y,"firstChild").get,oh=qa(y,"nextSibling").get,_v(h)&&(h[vd]=void 0,h[dd]=null,h[fd]=void 0,h.__e=void 0),_v(b)&&(b[fc]=void 0)}})();var m=void 0,g=function(h){ms.ensure();var y=Ko(524352,h);return function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(j=>{b.outro?qi(y,()=>{Zr(y),j(void 0)}):(Zr(y),j(void 0))})}}(()=>{var h=a??s.appendChild(Ns());(function(j,x,M,E){new Nb(j,x,M,E)})(h,{pending:()=>{}},j=>{ot({}),d&&(Sn.c=d),c&&(l.$$events=c),m=r(j,l)||{},at()},u);var y=new Set,b=j=>{for(var x=0;x<j.length;x++){var M=j[x];if(!y.has(M)){y.add(M);var E=Vb(M);for(var q of[s,document]){var k=Gl.get(q);k===void 0&&(k=new Map,Gl.set(q,k));var A=k.get(M);A===void 0?(q.addEventListener(M,kd,{passive:E}),k.set(M,1)):k.set(M,A+1)}}}};return b(vc(Sh)),wd.add(b),()=>{for(var j of y)for(var x of[s,document]){var M=Gl.get(x),E=M.get(j);--E==0?(x.removeEventListener(j,kd),M.delete(j),M.size===0&&Gl.delete(x)):M.set(j,E)}var q;wd.delete(b),h!==a&&((q=h.parentNode)===null||q===void 0||q.removeChild(h))}});return Sd.set(m,g),m}(e,t)}var Gl=new Map,Sd=new WeakMap,ma=new WeakMap,Ss=new WeakMap,ga=new WeakMap,Yi=new WeakMap,qu=new WeakMap,af=new WeakMap,Hb=new WeakMap;class nu{constructor(t){var r=this,o=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];jo(this,"anchor",void 0),cn(this,ma,new Map),cn(this,Ss,new Map),cn(this,ga,new Map),cn(this,Yi,new Set),cn(this,qu,!0),cn(this,af,s=>{if(ee(ma,this).has(s)){var a=ee(ma,this).get(s),i=ee(Ss,this).get(a);if(i)Pc(i),ee(Yi,this).delete(a);else{var l=ee(ga,this).get(a);l&&(Pc(l.effect),ee(Ss,this).set(a,l.effect),ee(ga,this).delete(a),l.fragment.lastChild.remove(),this.anchor.before(l.fragment),i=l.effect)}for(var c of ee(ma,this)){var d=so(c,2),u=d[0],m=d[1];if(ee(ma,this).delete(u),u===s)break;var g=ee(ga,this).get(m);g&&(Zr(g.effect),ee(ga,this).delete(m))}var h,y=function(){var j=(h=so(b,2))[0],x=h[1];if(j===a||ee(Yi,r).has(j))return 1;var M=()=>{if(Array.from(ee(ma,r).values()).includes(j)){var E=document.createDocumentFragment();ov(x,E),E.append(Ns()),ee(ga,r).set(j,{effect:x,fragment:E})}else Zr(x);ee(Yi,r).delete(j),ee(Ss,r).delete(j)};ee(qu,r)||!i?(ee(Yi,r).add(j),qi(x,M,!1)):M()};for(var b of ee(Ss,this))y()}}),cn(this,Hb,s=>{ee(ma,this).delete(s);var a=Array.from(ee(ma,this).values());for(var i of ee(ga,this)){var l=so(i,2),c=l[0],d=l[1];a.includes(c)||(Zr(d.effect),ee(ga,this).delete(c))}}),this.anchor=t,kn(qu,this,o)}ensure(t,r){var o=en;!r||ee(Ss,this).has(t)||ee(ga,this).has(t)||ee(Ss,this).set(t,Ua(()=>r(this.anchor))),ee(ma,this).set(o,t),ee(af,this).call(this,o)}}function Xr(e){Sn===null&&El(),Ui&&Sn.l!==null?Mh(Sn).m.push(e):yd(()=>{var t=T(e);if(typeof t=="function")return t})}function Do(e){Sn===null&&El(),Xr(()=>()=>T(e))}function Qb(){var e=Sn;return e===null&&El(),(t,r,o)=>{var s,a=(s=e.s.$$events)===null||s===void 0?void 0:s[t];if(a){var i=zl(a)?a.slice():[a],l=function(d,u){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},g=m.bubbles,h=g!==void 0&&g,y=m.cancelable;return new CustomEvent(d,{detail:u,bubbles:h,cancelable:y!==void 0&&y})}(t,r,o);for(var c of i)c.call(e.x,l);return!l.defaultPrevented}return!0}}function Kb(e){Sn===null&&El(),Sn.l===null&&function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}(),Mh(Sn).b.push(e)}function Mh(e){var t,r=e.l;return(t=r.u)!==null&&t!==void 0?t:r.u={a:[],b:[],m:[]}}function ne(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=new nu(e);function s(a,i){o.ensure(a,i)}Wi(()=>{var a=!1;t(function(i){a=!0,s(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i)}),a||s(-1,null)},r?Js:0)}var Ks,Yb=Symbol("NaN");function zh(e,t,r){var o=new nu(e),s=!Ji();Wi(()=>{var a=t();a!=a&&(a=Yb),s&&a!==null&&typeof a=="object"&&(a={}),o.ensure(a,r)})}function br(e,t){return t}function Eu(e,t){var r,o=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(e.pending.size>0)for(var s of(r=new Set,e.pending.values()))for(var a of s)r.add(e.items.get(a).e);for(var i=0;i<t.length;i++){var l,c=t[i];(l=r)!==null&&l!==void 0&&l.has(c)?(c.f|=Zo,ov(c,document.createDocumentFragment())):Zr(t[i],o)}}function lr(e,t,r,o,s){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,i=e,l=new Map;!(4&t)||(i=e.appendChild(Ns()));var c,d=null,u=De(()=>{var j=r();return zl(j)?j:j==null?[]:vc(j)}),m=new Map,g=!0;function h(j){!(b.effect.f&ls)&&(b.pending.delete(j),b.fallback=d,function(x,M,E,q,k){var A,U,F,S,J,Z=!!(8&q),$=M.length,le=x.items,G=Gi(x.effect.first),qe=null,Me=[],de=[];if(Z)for(J=0;J<$;J+=1){var Ee;F=k(M[J],J),!((S=le.get(F).e).f&Zo)&&((Ee=S.nodes)===null||Ee===void 0||(Ee=Ee.a)===null||Ee===void 0||Ee.measure(),(U??(U=new Set)).add(S))}for(J=0;J<$;J+=1){if(F=k(M[J],J),S=le.get(F).e,x.outrogroups!==null)for(var Se of x.outrogroups)Se.pending.delete(S),Se.done.delete(S);var Ke;if(S.f&ia&&(Pc(S),Z&&((Ke=S.nodes)===null||Ke===void 0||(Ke=Ke.a)===null||Ke===void 0||Ke.unfix(),(U??(U=new Set)).delete(S))),S.f&Zo){if(S.f^=Zo,S!==G){var Ae=qe?qe.next:G;S===x.effect.last&&(x.effect.last=S.prev),S.prev&&(S.prev.next=S.next),S.next&&(S.next.prev=S.prev),_a(x,qe,S),_a(x,S,Ae),Zi(S,Ae,E),Me=[],de=[],G=Gi((qe=S).next);continue}Zi(S,null,E)}if(S!==G){if(A!==void 0&&A.has(S)){if(Me.length<de.length){var Re,se=de[0];qe=se.prev;var ce=Me[0],me=Me[Me.length-1];for(Re=0;Re<Me.length;Re+=1)Zi(Me[Re],se,E);for(Re=0;Re<de.length;Re+=1)A.delete(de[Re]);_a(x,ce.prev,me.next),_a(x,qe,ce),_a(x,me,se),G=se,qe=me,J-=1,Me=[],de=[]}else A.delete(S),Zi(S,G,E),_a(x,S.prev,S.next),_a(x,S,qe===null?x.effect.first:qe.next),_a(x,qe,S),qe=S;continue}for(Me=[],de=[];G!==null&&G!==S;)(A??(A=new Set)).add(G),de.push(G),G=Gi(G.next);if(G===null)continue}!(S.f&Zo)&&Me.push(S),qe=S,G=Gi(S.next)}if(x.outrogroups!==null){for(var we of x.outrogroups){var Ce;we.pending.size===0&&(Eu(x,vc(we.done)),(Ce=x.outrogroups)===null||Ce===void 0||Ce.delete(we))}x.outrogroups.size===0&&(x.outrogroups=null)}if(G!==null||A!==void 0){var Ot=[];if(A!==void 0)for(S of A)!(S.f&ia)&&Ot.push(S);for(;G!==null;)!(G.f&ia)&&G!==x.fallback&&Ot.push(G),G=Gi(G.next);var Qt=Ot.length;if(Qt>0){var on=4&q&&$===0?E:null;if(Z){for(J=0;J<Qt;J+=1){var V;(V=Ot[J].nodes)===null||V===void 0||(V=V.a)===null||V===void 0||V.measure()}for(J=0;J<Qt;J+=1){var _;(_=Ot[J].nodes)===null||_===void 0||(_=_.a)===null||_===void 0||_.fix()}}(function(O,K,te){for(var ze,X=K.length,B=K.length,Be=function(){var nt=K[Bt];qi(nt,()=>{if(ze){if(ze.pending.delete(nt),ze.done.add(nt),ze.pending.size===0){var Et=O.outrogroups;Eu(O,vc(ze.done)),Et.delete(ze),Et.size===0&&(O.outrogroups=null)}}else B-=1},!1)},Bt=0;Bt<X;Bt++)Be();if(B===0){var Ne=te!==null;if(Ne){var tt=te,it=tt.parentNode;it.textContent="",it.append(tt),O.items.clear()}Eu(O,K,!Ne)}else{var ye;ze={pending:new Set(K),done:new Set},((ye=O.outrogroups)!==null&&ye!==void 0?ye:O.outrogroups=new Set).add(ze)}})(x,Ot,on)}}Z&&cs(()=>{if(U!==void 0)for(S of U){var O;(O=S.nodes)===null||O===void 0||(O=O.a)===null||O===void 0||O.apply()}})}(b,c,i,t,o),d!==null&&(c.length===0?d.f&Zo?(d.f^=Zo,Zi(d,null,i)):Pc(d):qi(d,()=>{d=null})))}var y=Wi(()=>{for(var j=(c=n(u)).length,x=new Set,M=en,E=0;E<j;E+=1){var q=c[E],k=o(q,E),A=g?null:l.get(k);A?(A.v&&zi(A.v,q),A.i&&zi(A.i,E)):(A=Gb(l,g?i:Ks??(Ks=Ns()),q,k,E,s,t,r),g||(A.e.f|=Zo),l.set(k,A)),x.add(k)}j===0&&a&&!d&&(g?d=Ua(()=>a(i)):(d=Ua(()=>a(Ks??(Ks=Ns())))).f|=Zo),j>x.size&&function(){throw new Error("https://svelte.dev/e/each_key_duplicate")}(),g||(m.set(M,x),h(M)),n(u)}),b={effect:y,items:l,pending:m,outrogroups:null,fallback:d};g=!1}function Gi(e){for(;e!==null&&!(e.f&Di);)e=e.next;return e}function Gb(e,t,r,o,s,a,i,l){var c=1&i?16&i?Ia(r):P(r,!1,!1):null,d=2&i?Ia(s):null;return{v:c,i:d,e:Ua(()=>(a(t,c??r,d??s,l),()=>{e.delete(o)}))}}function Zi(e,t,r){if(e.nodes)for(var o=e.nodes.start,s=e.nodes.end,a=t&&!(t.f&Zo)?t.nodes.start:r;o!==null;){var i=Al(o);if(a.before(o),o===s)return;o=i}}function _a(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function qh(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=arguments.length>3&&arguments[3]!==void 0&&arguments[3],s=arguments.length>4&&arguments[4]!==void 0&&arguments[4],a=e,i="";if(r)var l=e;je(()=>{var c,d=Ht;if(i!==(i=(c=t())!==null&&c!==void 0?c:"")){if(r)return d.nodes=null,l.innerHTML=i,void(i!==""&&us(wo(l),l.lastChild));if(d.nodes!==null&&(dh(d.nodes.start,d.nodes.end),d.nodes=null),i!==""){var u=sh(o?"svg":s?"math":"template",o?"http://www.w3.org/2000/svg":s?"http://www.w3.org/1998/Math/MathML":void 0);u.innerHTML=i;var m=o||s?u:u.content;if(us(wo(m),m.lastChild),o||s)for(;wo(m);)a.before(wo(m));else a.before(m)}}})}function dr(e,t,r,o,s){var a,i=(a=t.$$slots)===null||a===void 0?void 0:a[r],l=!1;i===!0&&(i=t[r==="default"?"children":r],l=!0),i===void 0?s!==null&&s(e):i(e,l?()=>o:o)}function Eh(e,t,r){var o=new nu(e);Wi(()=>{var s,a=(s=t())!==null&&s!==void 0?s:null;o.ensure(a,a&&(i=>r(i,a)))},Js)}function oo(e,t,r){$r(()=>{var o=T(()=>t(e,r?.())||{});if(r&&o!=null&&o.update){var s=!1,a={};Li(()=>{var i=r();p(i),s&&Dp(a,i)&&(a=i,o.update(i))}),s=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function Zb(e,t){var r,o=void 0;ch(()=>{o!==(o=t())&&(r&&(Zr(r),r=null),o&&(r=Ua(()=>{$r(()=>o(e))})))})}function Ah(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Ah(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function ds(e){return typeof e=="object"?function(){for(var t,r,o=0,s="",a=arguments.length;o<a;o++)(t=arguments[o])&&(r=Ah(t))&&(s&&(s+=" "),s+=r);return s}(e):e??""}var sf=[...` 	
\r\f \v\uFEFF`];function lf(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?" !important;":";",r="";for(var o of Object.keys(e)){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function Au(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function wt(e,t,r,o,s,a){var i=e[vd];if(i!==r||i===void 0){var l=function(u,m,g){var h=u==null?"":""+u;if(m&&(h=h?h+" "+m:m),g){for(var y of Object.keys(g))if(g[y])h=h?h+" "+y:y;else if(h.length)for(var b=y.length,j=0;(j=h.indexOf(y,j))>=0;){var x=j+b;j!==0&&!sf.includes(h[j-1])||x!==h.length&&!sf.includes(h[x])?j=x:h=(j===0?"":h.substring(0,j))+h.substring(x+1)}}return h===""?null:h}(r,o,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[vd]=r}else if(a&&s!==a)for(var c in a){var d=!!a[c];s!=null&&d===!!s[c]||e.classList.toggle(c,d)}return a}function Pu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,o))}}function No(e,t,r,o){if(e[fd]!==t){var s=function(a,i){if(i){var l,c,d="";if(Array.isArray(i)?(l=i[0],c=i[1]):l=i,a){a=String(a).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var u=!1,m=0,g=!1,h=[];l&&h.push(...Object.keys(l).map(Au)),c&&h.push(...Object.keys(c).map(Au));for(var y=0,b=-1,j=a.length,x=0;x<j;x++){var M=a[x];if(g?M==="/"&&a[x-1]==="*"&&(g=!1):u?u===M&&(u=!1):M==="/"&&a[x+1]==="*"?g=!0:M==='"'||M==="'"?u=M:M==="("?m++:M===")"&&m--,!g&&u===!1&&m===0){if(M===":"&&b===-1)b=x;else if(M===";"||x===j-1){if(b!==-1){var E=Au(a.substring(y,b).trim());h.includes(E)||(M!==";"&&x++,d+=" "+a.substring(y,x).trim()+";")}y=x+1,b=-1}}}}return l&&(d+=lf(l)),c&&(d+=lf(c,!0)),(d=d.trim())===""?null:d}return a==null?null:String(a)}(t,o);s==null?e.removeAttribute("style"):e.style.cssText=s,e[fd]=t}else o&&(Array.isArray(o)?(Pu(e,r?.[0],o[0]),Pu(e,r?.[1],o[1],"important")):Pu(e,r,o));return o}function Rc(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!zl(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");for(var o of e.options)o.selected=t.includes(dl(o))}else{for(o of e.options)if(Jb(dl(o),t))return void(o.selected=!0);r&&t===void 0||(e.selectedIndex=-1)}}function Ph(e){var t=new MutationObserver(()=>{Rc(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),tu(()=>{t.disconnect()})}function dl(e){return"__value"in e?e.__value:e.value}var oi=Symbol("class"),Xi=Symbol("style"),Rh=Symbol("is custom element"),Th=Symbol("is html"),Xb=eu?"input":"INPUT",ej=eu?"option":"OPTION",tj=eu?"select":"SELECT",nj=eu?"progress":"PROGRESS";function Ws(e,t){var r=av(e);r.value!==(r.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName===nj)&&(e.value=t??"")}function vn(e,t,r,o){var s=av(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[Ab]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Nh(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function rj(e,t,r,o){var s,a=av(e),i=a[Rh],l=!a[Th],c=t||{},d=e.nodeName===ej;for(var u in t)u in r||(r[u]=null);r.class?r.class=ds(r.class):(o||r[oi])&&(r.class=null),r[Xi]&&((s=r.style)!==null&&s!==void 0||(r.style=null));var m=Nh(e);if(e.nodeName===Xb&&"type"in r&&("value"in r||"__value"in r)){var g=r.type;(g!==c.type||g===void 0&&e.hasAttribute("type"))&&(c.type=g,vn(e,"type",g))}var h,y,b,j,x,M,E=function(k){var A=r[k];if(d&&k==="value"&&A==null)return e.value=e.__value="",c[k]=A,0;if(k==="class")return h=e.namespaceURI==="http://www.w3.org/1999/xhtml",wt(e,h,A,o,t?.[oi],r[oi]),c[k]=A,c[oi]=r[oi],0;if(k==="style")return No(e,A,t?.[Xi],r[Xi]),c[k]=A,c[Xi]=r[Xi],0;if(A===(y=c[k])&&(A!==void 0||!e.hasAttribute(k))||(c[k]=A,(b=k[0]+k[1])==="$$"))return 0;if(b==="on"){var U={},F="$$"+k,S=k.slice(2);if(j=function(G){return Wb.includes(G)}(S),function(G){return G.endsWith("capture")&&G!=="gotpointercapture"&&G!=="lostpointercapture"}(S)&&(S=S.slice(0,-7),U.capture=!0),!j&&y){if(A!=null)return 0;e.removeEventListener(S,c[F],U),c[F]=null}if(j)$o(S,e,A),Pl([S]);else if(A!=null){let G=function(qe){c[k].call(this,qe)};c[F]=Ch(S,e,G,U)}}else if(k==="style")vn(e,k,A);else if(k==="autofocus")(function(G,qe){if(qe){var Me=document.body;G.autofocus=!0,cs(()=>{document.activeElement===Me&&G.focus()})}})(e,!!A);else if(i||k!=="__value"&&(k!=="value"||A==null))if(k==="selected"&&d)(function(G,qe){qe?G.hasAttribute("selected")||G.setAttribute("selected",""):G.removeAttribute("selected")})(e,A);else if(x=k,l||(x=function(G){var qe;return G=G.toLowerCase(),(qe=Fb[G])!==null&&qe!==void 0?qe:G}(x)),M=x==="defaultValue"||x==="defaultChecked",A!=null||i||M)M||m.includes(x)&&(i||typeof A!="string")?(e[x]=A,x in a&&(a[x]=Ir)):typeof A!="function"&&vn(e,x,A);else if(a[k]=null,x==="value"||x==="checked"){var J=e,Z=t===void 0;if(x==="value"){var $=J.defaultValue;J.removeAttribute(x),J.defaultValue=$,J.value=J.__value=Z?$:null}else{var le=J.defaultChecked;J.removeAttribute(x),J.defaultChecked=le,J.checked=!!Z&&le}}else e.removeAttribute(k);else e.value=e.__value=A};for(var q in r)E(q);return c}function mc(e,t){var r=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&arguments[6]!==void 0&&arguments[6],s=arguments.length>7&&arguments[7]!==void 0&&arguments[7];Kp(arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],a=>{var i=void 0,l={},c=e.nodeName===tj,d=!1;if(ch(()=>{var m=t(...a.map(n)),g=rj(e,i,m,r,o,s);for(var h of(d&&c&&"value"in m&&Rc(e,m.value),Object.getOwnPropertySymbols(l)))m[h]||Zr(l[h]);for(var y of Object.getOwnPropertySymbols(m)){var b=m[y];y.description!=="@attach"||i&&b===i[y]||(l[y]&&Zr(l[y]),l[y]=Ua(()=>Zb(e,()=>b))),g[y]=b}i=g}),c){var u=e;$r(()=>{Rc(u,i.value,!0),Ph(u)})}d=!0})}function av(e){var t;return(t=e[dd])!==null&&t!==void 0?t:e[dd]={[Rh]:e.nodeName.includes("-"),[Th]:e.namespaceURI===Ep}}var cf=new Map;function Nh(e){var t,r=e.getAttribute("is")||e.nodeName,o=cf.get(r);if(o)return o;cf.set(r,o=[]);for(var s=e,a=Element.prototype;a!==s;){for(var i in t=Ap(s))t[i].set&&i!=="innerHTML"&&i!=="textContent"&&i!=="innerText"&&o.push(i);s=Zd(s)}return o}function Tc(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,o=new WeakSet;Vp(e,"input",function(){var s=vt(function*(a){var i=a?e.defaultValue:e.value;if(i=Ru(e)?Tu(i):i,r(i),en!==null&&o.add(en),yield yh(),i!==(i=t())){var l=e.selectionStart,c=e.selectionEnd,d=e.value.length;if(e.value=i??"",c!==null){var u=e.value.length;l===c&&c===d&&u>d?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=l,e.selectionEnd=Math.min(c,u))}}});return function(a){return s.apply(this,arguments)}}()),T(t)==null&&e.value&&(r(Ru(e)?Tu(e.value):e.value),en!==null&&o.add(en)),Li(()=>{var s=t();if(e===document.activeElement){var a=en;if(o.has(a))return}Ru(e)&&s===Tu(e.value)||(e.type!=="date"||s||e.value)&&s!==e.value&&(e.value=s??"")})}function Ru(e){var t=e.type;return t==="number"||t==="range"}function Tu(e){return e===""?null:+e}function gt(e,t,r){var o=qa(e,t);o&&o.set&&(e[t]=r,tu(()=>{e[t]=null}))}function Nu(e,t){return e===t||e?.[la]===t}function Hn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=Sn.r,s=Ht;return $r(()=>{var a,i;return Li(()=>{a=i,i=[],T(()=>{Nu(r(...i),e)||(t(e,...i),a&&Nu(r(...a),e)&&t(null,...a))})}),()=>{for(var l=s;l!==o&&l.parent!==null&&l.parent.f&ud;)l=l.parent;var c=l.teardown;l.teardown=()=>{i&&Nu(r(...i),e)&&t(null,...i),c?.()}}}),e}function wa(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].stopPropagation(),e?.apply(this,r)}}function Va(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].preventDefault(),e?.apply(this,r)}}function kt(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=Sn,r=t.l.u;if(r){var o,s=()=>p(t.s);if(e){var a=0,i={},l=Si(()=>{var c=!1,d=t.s;for(var u in d)d[u]!==i[u]&&(i[u]=d[u],c=!0);return c&&a++,a});s=()=>n(l)}r.b.length&&(o=()=>{uf(t,s),cd(r.b)},ih(),Ko(1048584,o)),yd(()=>{var c=T(()=>r.m.map(qb));return()=>{for(var d of c)typeof d=="function"&&d()}}),r.a.length&&yd(()=>{uf(t,s),cd(r.a)})}}function uf(e,t){if(e.l.s)for(var r of e.l.s)n(r);t()}function ru(e){var t=Ia(0);return function(){return arguments.length===1?(f(t,n(t)+1),arguments[0]):(n(t),e())}}function al(e,t){var r,o=(r=e.$$events)===null||r===void 0?void 0:r[t.type],s=zl(o)?o.slice():o==null?[]:[o];for(var a of s)a.call(this,t)}var oj={get(e,t){if(!e.exclude.includes(t))return n(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var o=Ht;try{ho(e.parent_effect),e.special[t]=v({get[t](){return e.props[t]}},t,4)}finally{ho(o)}}return e.special[t](r),ef(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),ef(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function Zl(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ia(0),parent_effect:Ht},oj)}var aj={get(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(Ki(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o)return o[t]}},set(e,t,r){for(var o=e.props.length;o--;){var s=e.props[o];Ki(s)&&(s=s());var a=qa(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(Ki(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o){var s=qa(o,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===la||t===Ip)return!1;for(var r of e.props)if(Ki(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){var t=[];for(var r of e.props)if(Ki(r)&&(r=r()),r){for(var o in r)t.includes(o)||t.push(o);for(var s of Object.getOwnPropertySymbols(r))t.includes(s)||t.push(s)}return t}};function os(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Proxy({props:t},aj)}function v(e,t,r,o){var s,a,i=!Ui||!!(2&r),l=!!(8&r),c=!!(16&r),d=o,u=!0,m=void 0,g=()=>c&&i?(m!=null||(m=Si(o)),n(m)):(u&&(u=!1,d=c?T(o):o),d);if(l){var h,y,b=la in e||Ip in e;s=(h=(y=qa(e,t))===null||y===void 0?void 0:y.set)!==null&&h!==void 0?h:b&&t in e?U=>e[t]=U:void 0}var j,x=!1;if(l){var M=so(function(U){var F=Vl;try{return Vl=!1,[U(),Vl]}finally{Vl=F}}(()=>e[t]),2);a=M[0],x=M[1]}else a=e[t];if(a===void 0&&o!==void 0&&(a=g(),s&&(i&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),s(a))),j=i?()=>{var U=e[t];return U===void 0?g():(u=!0,U)}:()=>{var U=e[t];return U!==void 0&&(d=void 0),U===void 0?d:U},i&&!(4&r))return j;if(s){var E=e.$$legacy;return function(U,F){return arguments.length>0?(i&&F&&!E&&!x||s(F?j():U),U):j()}}var q=!1,k=(1&r?Si:De)(()=>(q=!1,j()));l&&n(k);var A=Ht;return function(U,F){if(arguments.length>0){var S=F?n(k):i&&l?li(U):U;return f(k,S),q=!0,d!==void 0&&(d=S),U}return Da&&q||A.f&ls?k.v:n(k)}}function Wr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(o){var s=function(a){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[a]}catch{}}("debug");return s!=null&&s.endsWith("*")?o.startsWith(s.slice(0,-1)):o===s}(e);if(!t)return sj;var r=function(o){for(var s=0,a=0;a<o.length;a++)s=(s<<5)-s+o.charCodeAt(a),s|=0;return df[Math.abs(s)%df.length]}(e);return function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];console.log("%c".concat(e),"color:".concat(r),...s)}}function sj(){}var df=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],ij=0;function ui(){return++ij}function Yr(e){return parseInt(e,10)}function sv(e){return lj.test(e)}var lj=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function rn(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function sr(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function cj(e){return e===!0||e===!1}function Cd(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return Cd(Number(e));try{var t=e&&e.valueOf();if(t!==e)return Cd(t)}catch{return!1}return!1}function Ih(e){(Xl=Xl||window.document.createElement("div")).style.color="",Xl.style.color=e;var t=Xl.style.color;return t!==""?t.replace(/\s+/g,"").toLowerCase():void 0}var Xl=void 0;function uj(e){return typeof e=="string"&&e.length<99&&!!Ih(e)}function iv(e,t){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(rn(e))return"object";var r=t.stringify(e);return r&&sv(r)?"number":r==="true"||r==="false"?"boolean":r==="null"?"null":"unknown"}var dj=/^https?:\/\/\S+$/;function ou(e){return typeof e=="string"&&dj.test(e)}function _i(e,t){if(e==="")return"";var r=e.trim();return r==="null"?null:r==="true"||r!=="false"&&(sv(r)?t.parse(r):e)}function Uh(e){return vj.test(e)}var vj=/^-?[0-9]+$/,fj=[];function vf(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function Od(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r={};if(!Array.isArray(e))throw new TypeError("Array expected");function o(i,l){(!Array.isArray(i)&&!rn(i)||t&&l.length>0)&&(r[qt(l)]=!0),rn(i)&&Object.keys(i).forEach(c=>{o(i[c],l.concat(c))})}for(var s=Math.min(e.length,1e4),a=0;a<s;a++)o(e[a],fj);return Object.keys(r).sort().map(Po)}function Dh(e,t,r){if(!(t<=e))for(var o=e;o<t;o++)r(o)}function Nc(e,t){return e.length>t?e.slice(0,t):e}function ff(e){return be({},e)}function pf(e){return Object.values(e)}function hf(e,t,r,o){var s=e.slice(0),a=s.splice(t,r);return s.splice.apply(s,[t+o,0,...a]),s}function pj(e,t,r){return e.slice(0,t).concat(r).concat(e.slice(t))}function Rl(e,t){try{return t.parse(e)}catch{return t.parse(aa(e))}}function Bh(e,t){try{return Rl(e,t)}catch{return}}function Tl(e,t){e=e.replace(Lh,"");try{return t(e)}catch{}try{return t("{"+e+"}")}catch{}try{return t("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function Jh(e){e=e.replace(Lh,"");try{return aa(e)}catch{}try{var t=aa("["+e+"]");return t.substring(1,t.length-1)}catch{}try{var r=aa("{"+e+"}");return r.substring(1,r.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var Lh=/,\s*$/;function Ei(e,t){var r=gf.exec(t);if(r){var o=Yr(r[2]),s=function(h,y){for(var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h.length,x=0,M=b;M<j;M++)h.charAt(M)===y&&x++;return x}(e,`
`,0,o),a=o-e.lastIndexOf(`
`,o)-1;return{position:o,line:s,column:a,message:t.replace(gf,()=>"line ".concat(s+1," column ").concat(a+1))}}var i=bj.exec(t),l=i?Yr(i[1]):void 0,c=l!==void 0?l-1:void 0,d=jj.exec(t),u=d?Yr(d[1]):void 0,m=u!==void 0?u-1:void 0,g=c!==void 0&&m!==void 0?function(h,y,b){for(var j=h.indexOf(`
`),x=1;x<y&&j!==-1;)j=h.indexOf(`
`,j+1),x++;return j!==-1?j+b+1:void 0}(e,c,m):void 0;return{position:g,line:c,column:m,message:t.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function Iu(e,t){try{var r=wp.parse(e),o=qt(t),s=r.pointers[o];if(s)return{path:t,line:s.key?s.key.line:s.value?s.value.line:0,column:s.key?s.key.column:s.value?s.value.column:0,from:s.key?s.key.pos:s.value?s.value.pos:0,to:s.keyEnd?s.keyEnd.pos:s.valueEnd?s.valueEnd.pos:0}}catch(a){console.error(a)}return{path:t,line:0,column:0,from:0,to:0}}function Uu(e){return rn(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function J1(e){return rn(e)&&(e.json!==void 0||typeof e.text=="string")}function gl(e){return rn(e)&&typeof e.text=="string"}function bl(e){return rn(e)&&e.json!==void 0}function hj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return gl(e)?e:{text:r.stringify(e.json,null,t)}}function mf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return bl(e)?e:{json:t.parse(e.text)}}function Md(e,t,r){return hj(e,t,r).text}function mj(e,t){return gj(e,t)>t}function gj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(gl(e))return e.text.length;var r=e.json,o=0;return function s(a){if(Array.isArray(a)){if((o+=a.length-1+2)>t)return;for(var i=0;i<a.length;i++)if(s(a[i]),o>t)return}else if(rn(a)){var l=Object.keys(a);o+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var d=l[c],u=a[d];o+=d.length+2,s(u)}}else o+=typeof a=="string"?a.length+2:String(a).length}(r),o}var gf=/(position|char) (\d+)/,bj=/line (\d+)/,jj=/column (\d+)/;function lv(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function bf(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&yj.test(t)}var Cr,qn,Fo,Io,Ho,Eo,as,yj=/[,:]\S/;function cv(e){var t=e.escapeControlCharacters,r=e.escapeUnicodeCharacters;return t?r?xj:wj:r?kj:Sj}(function(e){e.text="text",e.tree="tree",e.table="table"})(Cr||(Cr={})),function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"}(qn||(qn={})),function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"}(Fo||(Fo={})),function(e){e.info="info",e.warning="warning",e.error="error"}(Io||(Io={})),function(e){e.key="key",e.value="value"}(Ho||(Ho={})),function(e){e.asc="asc",e.desc="desc"}(Eo||(Eo={})),function(e){e.no="no",e.self="self",e.nextInside="nextInside"}(as||(as={}));var xj={escapeValue:e=>Wh(Vh(String(e))),unescapeValue:e=>$h(Fh(e))},wj={escapeValue:e=>Vh(String(e)),unescapeValue:e=>$h(e)},kj={escapeValue:e=>Wh(String(e)),unescapeValue:e=>Fh(e)},Sj={escapeValue:e=>String(e),unescapeValue:e=>e};function Wh(e){return e.replace(/[^\x20-\x7F]/g,t=>{var r;return t==="\b"||t==="\f"||t===`
`||t==="\r"||t==="	"?t:"\\u"+("000"+((r=t.codePointAt(0))===null||r===void 0?void 0:r.toString(16))).slice(-4)})}function Fh(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,t=>{try{var r=JSON.parse('"'+t+'"');return _h[r]||r}catch{return t}})}var _h={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Cj={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function Vh(e){return e.replace(/["\b\f\n\r\t\\]/g,t=>_h[t]||t)}function $h(e){return e.replace(/\\["bfnrt\\]/g,t=>Cj[t]||t)}function Ai(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function Hh(e,t){return Vi(e,r=>r.nodeName.toUpperCase()===t.toUpperCase())}function es(e,t,r){return Vi(e,o=>function(s,a,i){return typeof s.getAttribute=="function"&&s.getAttribute(a)===i}(o,t,r))}function Vi(e,t){return!!uv(e,t)}function uv(e,t){for(var r=e;r&&!t(r);)r=r.parentNode;return r}function Nl(e){var t,r;return(t=e==null||(r=e.ownerDocument)===null||r===void 0?void 0:r.defaultView)!==null&&t!==void 0?t:void 0}function dv(e){var t=Nl(e),r=t?.document.activeElement;return!!r&&Vi(r,o=>o===e)}function Qh(e,t){return uv(e,r=>r.nodeName===t)}function Du(e){return es(e,"data-type","selectable-key")?qn.key:es(e,"data-type","selectable-value")?qn.value:es(e,"data-type","insert-selection-area-inside")?qn.inside:es(e,"data-type","insert-selection-area-after")?qn.after:qn.multi}function gc(e){return encodeURIComponent(qt(e))}function Kh(e){var t,r=uv(e,s=>!(s==null||!s.hasAttribute)&&s.hasAttribute("data-path")),o=(t=r?.getAttribute("data-path"))!==null&&t!==void 0?t:void 0;return o?Po(decodeURIComponent(o)):void 0}function Oj(e){var t=e.allElements,r=e.currentElement,o=e.direction,s=e.hasPrio,a=s===void 0?()=>!0:s,i=e.margin,l=i===void 0?10:i,c=xg(t.filter(function(E){var q=E.getBoundingClientRect();return q.width>0&&q.height>0}),u),d=u(r);function u(E){var q=E.getBoundingClientRect();return{x:q.left+q.width/2,y:q.top+q.height/2,rect:q,element:E}}function m(E,q){var k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,A=E.x-q.x,U=(E.y-q.y)*k;return Math.sqrt(A*A+U*U)}var g=E=>m(E,d);if(o==="Left"||o==="Right"){var h=o==="Left"?c.filter(E=>{return q=d,E.rect.left+l<q.rect.left;var q}):c.filter(E=>{return q=d,E.rect.right>q.rect.right+l;var q}),y=h.filter(E=>{return q=E,k=d,Math.abs(q.y-k.y)<l;var q,k}),b=Fl(y,g)||Fl(h,E=>m(E,d,10));return b?.element}if(o==="Up"||o==="Down"){var j=o==="Up"?c.filter(E=>{return q=d,E.y+l<q.y;var q}):c.filter(E=>{return q=d,E.y>q.y+l;var q}),x=j.filter(E=>a(E.element)),M=Fl(x,g)||Fl(j,g);return M?.element}}function vv(){var e,t,r,o;return typeof navigator<"u"&&(e=(t=(r=navigator)===null||r===void 0||(r=r.platform)===null||r===void 0?void 0:r.toUpperCase().includes("MAC"))!==null&&t!==void 0?t:(o=navigator)===null||o===void 0||(o=o.userAgentData)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function Ba(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",r=[];fv(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:vv)&&r.push("Ctrl"),e.altKey&&r.push("Alt"),e.shiftKey&&r.push("Shift");var o=e.key.length===1?e.key.toUpperCase():e.key;return o in Mj||r.push(o),r.join(t)}function fv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vv;return e.ctrlKey||e.metaKey&&t()}var Mj={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function xt(e,t){t===void 0&&(t={});var r=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}xt(`.jse-absolute-popup.svelte-enkkpn {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-enkkpn .jse-hidden-input:where(.svelte-enkkpn) {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.jse-absolute-popup.svelte-enkkpn .jse-absolute-popup-content:where(.svelte-enkkpn) {
  position: absolute;
}`);var zj=Y('<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>'),qj=Y('<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>');function Ej(e,t){ot(t,!1);var r=v(t,"popup",8),o=v(t,"closeAbsolutePopup",8),s=P(),a=P();function i(m){r().options&&r().options.closeOnOuterClick&&!Vi(m.target,g=>g===n(s))&&o()(r().id)}function l(m){Ba(m)==="Escape"&&(m.preventDefault(),m.stopPropagation(),o()(r().id))}Xr(function(){n(a)&&n(a).focus({preventScroll:!0})}),kt();var c=qj();fe("mousedown",Aa,function(m){i(m)},!0),fe("keydown",Aa,l,!0),fe("wheel",Aa,function(m){i(m)},!0);var d=R(c),u=m=>{var g=zj(),h=R(g);Hn(h,y=>f(a,y),()=>n(a)),Eh(D(h,2),()=>r().component,(y,b)=>{b(y,os(()=>r().props))}),je(y=>No(g,y),[()=>(n(s),p(r()),T(()=>function(y,b){var j=y.getBoundingClientRect(),x=function(){if(b.anchor){var A=b.anchor,U=b.width,F=U===void 0?0:U,S=b.height,J=S===void 0?0:S,Z=b.offsetTop,$=Z===void 0?0:Z,le=b.offsetLeft,G=le===void 0?0:le,qe=b.position,Me=A.getBoundingClientRect(),de=Me.left,Ee=Me.top,Se=Me.bottom,Ke=Me.right,Ae=qe==="top"||Ee+J>window.innerHeight&&Ee>J,Re=qe==="left"||de+F>window.innerWidth&&de>F;return{left:Re?Ke-G:de+G,top:Ae?Ee-$:Se+$,positionAbove:Ae,positionLeft:Re}}if(typeof b.left=="number"&&typeof b.top=="number"){var se=b.left,ce=b.top,me=b.width,we=me===void 0?0:me,Ce=b.height,Ot=Ce===void 0?0:Ce;return{left:se,top:ce,positionAbove:ce+Ot>window.innerHeight&&ce>Ot,positionLeft:se+we>window.innerWidth&&se>we}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')}(),M=x.left,E=x.top,q=x.positionAbove,k=x.positionLeft;return(q?"bottom: ".concat(j.top-E,"px;"):"top: ".concat(E-j.top,"px;"))+(k?"right: ".concat(j.left-M,"px;"):"left: ".concat(M-j.left,"px;"))}(n(s),r().options)))]),N(m,g)};ne(d,m=>{n(s)&&m(u)}),Hn(c,m=>f(s,m),()=>n(s)),fe("mousedown",c,function(m){m.stopPropagation()}),fe("keydown",c,l),N(e,c),at()}var Aj=Y("<!> <!>",1);function zd(e,t){ot(t,!1);var r=Wr("jsoneditor:AbsolutePopup"),o=P([],!0);function s(l){var c=n(o).findIndex(u=>u.id===l);if(c!==-1){var d=n(o)[c];d.options.onClose&&d.options.onClose(),f(o,n(o).filter(u=>u.id!==l))}}(function(l,c){Jp().set(l,c)})("absolute-popup",{openAbsolutePopup:function(l,c,d){r("open...",c,d);var u={id:ui(),component:l,props:c||{},options:d||{}};return f(o,[...n(o),u]),u.id},closeAbsolutePopup:s}),W(()=>n(o),()=>{r("popups",n(o))}),jn(),kt(!0);var a=Aj(),i=dt(a);lr(i,1,()=>n(o),br,(l,c)=>{Ej(l,{get popup(){return n(c)},closeAbsolutePopup:s})}),dr(D(i,2),t,"default",{},null),N(e,a),at()}function Il(e,t){for(var r=new Set(t),o=e.replace(/ \(copy( \d+)?\)$/,""),s=e,a=1;r.has(s);){var i="copy"+(a>1?" "+a:"");s="".concat(o," (").concat(i,")"),a++}return s}function Sa(e,t){var r=t-3;return e.length>t?e.substring(0,r)+"...":e}function Ul(e){if(e==="")return"";var t=e.toLowerCase();if(t==="null")return null;if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){var r=Number(e),o=parseFloat(e);return isNaN(r)||isNaN(o)?e:r}}var Pj={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var r=t.filter,o=t.sort,s=t.projection,a=[];r&&r.path&&r.relation&&r.value&&a.push(["filter",[(i=r.relation,eg("1 ".concat(i," 1"))[0]),ec(r.path),Ul(r.value)]]);var i;return o&&o.path&&o.direction&&a.push(["sort",ec(o.path),o.direction==="desc"?"desc":"asc"]),s&&s.paths&&(s.paths.length>1?a.push(["pick",...s.paths.map(ec)]):a.push(["map",ec(s.paths[0])])),tg(["pipe",...a])},executeQuery:function(e,t,r){var o=lv(r,JSON)?e:function(s){var a=r.stringify(s);return a!==void 0?JSON.parse(a):void 0}(e);return t.trim()!==""?Xm(o,t):o}};function ec(e){return["get",...e]}var Rj=gs("<g></g>");function Tj(e,t){ot(t,!1);var r=870711,o=P(""),s=v(t,"data",8);function a(l){if(!l||!l.raw)return"";var c=l.raw,d={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(u,m)=>{var g="fa-".concat((r+=1).toString(16));return d[m]=g,' id="'.concat(g,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(u,m,g,h)=>{var y=m||h;return y&&d[y]?"#".concat(d[y]):u}),c}W(()=>p(s()),()=>{f(o,a(s()))}),jn();var i=Rj();qh(i,()=>n(o),!0),N(e,i),at()}xt(`
  .fa-icon.svelte-v67cny {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-v67cny {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-v67cny {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-v67cny {
    color: #fff;
  }
  .fa-pulse.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-v67cny-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);var Nj=gs("<svg><!></svg>"),Ij=gs("<path></path>"),Uj=gs("<polygon></polygon>"),Dj=gs("<!><!><!>",1);function tn(e,t){var r=Zl(t,["children","$$slots","$$events","$$legacy"]),o=Zl(r,["class","data","scale","spin","inverse","pulse","flip","label","style"]);ot(t,!1);var s=v(t,"class",8,""),a=v(t,"data",8),i=P(),l=v(t,"scale",8,1),c=v(t,"spin",8,!1),d=v(t,"inverse",8,!1),u=v(t,"pulse",8,!1),m=v(t,"flip",8,void 0),g=v(t,"label",8,""),h=v(t,"style",8,""),y=P(10),b=P(10),j=P(),x=P();function M(){var q=1;return l()!==void 0&&(q=Number(l())),isNaN(q)||q<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*q}function E(){return n(i)?Math.max(n(i).width,n(i).height)/16:1}W(()=>(p(a()),p(h()),p(l())),()=>{f(i,function(q){var k;if(q){if(!("definition"in q)){if("iconName"in q&&"icon"in q){q.iconName;var A=so(q.icon,5),U=A[0],F=A[1],S=A[4];k={width:U,height:F,paths:(Array.isArray(S)?S:[S]).map(J=>({d:J}))}}else k=q[Object.keys(q)[0]];return k}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(a())),h(),l(),f(y,n(i)?n(i).width/E()*M():0),f(b,n(i)?n(i).height/E()*M():0),f(j,function(){var q="";h()!==null&&(q+=h());var k=M();return k===1?q.length===0?"":q:(q===""||q.endsWith(";")||(q+="; "),"".concat(q,"font-size: ").concat(k,"em"))}()),f(x,n(i)?"0 0 ".concat(n(i).width," ").concat(n(i).height):"0 0 ".concat(n(y)," ").concat(n(b)))}),jn(),kt(),function(q,k){var A=Zl(k,["children","$$slots","$$events","$$legacy"]),U=Zl(A,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),F=v(k,"class",8,""),S=v(k,"width",8),J=v(k,"height",8),Z=v(k,"box",8,"0 0 0 0"),$=v(k,"spin",8,!1),le=v(k,"inverse",8,!1),G=v(k,"pulse",8,!1),qe=v(k,"flip",8,"none"),Me=v(k,"style",8,""),de=v(k,"label",8,""),Ee=Nj();mc(Ee,()=>{var Se;return be(be({version:"1.1",class:"fa-icon ".concat((Se=F())!==null&&Se!==void 0?Se:""),width:S(),height:J(),"aria-label":de(),role:de()?"img":"presentation",viewBox:Z(),style:Me()},U),{},{[oi]:{"fa-spin":$(),"fa-pulse":G(),"fa-inverse":le(),"fa-flip-horizontal":qe()==="horizontal","fa-flip-vertical":qe()==="vertical"}})},void 0,void 0,void 0,"svelte-v67cny"),dr(R(Ee),k,"default",{},null),N(q,Ee)}(e,os({get label(){return g()},get width(){return n(y)},get height(){return n(b)},get box(){return n(x)},get style(){return n(j)},get spin(){return c()},get flip(){return m()},get inverse(){return d()},get pulse(){return u()},get class(){return s()}},()=>o,{children:(q,k)=>{var A=ir();dr(dt(A),t,"default",{},U=>{var F=Dj(),S=dt(F);lr(S,1,()=>(n(i),T(()=>{var le;return((le=n(i))===null||le===void 0?void 0:le.paths)||[]})),br,(le,G)=>{var qe=Ij();mc(qe,()=>be({},n(G))),N(le,qe)});var J=D(S);lr(J,1,()=>(n(i),T(()=>{var le;return((le=n(i))===null||le===void 0?void 0:le.polygons)||[]})),br,(le,G)=>{var qe=Uj();mc(qe,()=>be({},n(G))),N(le,qe)});var Z=D(J),$=le=>{Tj(le,{get data(){return n(i)},set data(G){f(i,G)},$$legacy:!0})};ne(Z,le=>{n(i),T(()=>{var G;return(G=n(i))===null||G===void 0?void 0:G.raw})&&le($)}),N(U,F)}),N(q,A)},$$slots:{default:!0}})),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-boolean-toggle.svelte-eli4ob {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-eli4ob:not(.jse-readonly) {
  cursor: pointer;
}`);var Bj=Y('<div role="checkbox" tabindex="-1"><!></div>');function Jj(e,t){ot(t,!1);var r=v(t,"path",9),o=v(t,"value",9),s=v(t,"readOnly",9),a=v(t,"onPatch",9),i=v(t,"focus",9);kt(!0);var l,c=Bj(),d=R(c),u=De(()=>o()===!0?cp:up);tn(d,{get data(){return n(u)}}),je(()=>{vn(c,"aria-checked",o()===!0),l=wt(c,1,"jse-boolean-toggle svelte-eli4ob",null,l,{"jse-readonly":s()}),vn(c,"title",s()?"Boolean value ".concat(o()):"Click to toggle this boolean value")}),fe("mousedown",c,function(m){m.stopPropagation(),s()||(a()([{op:"replace",path:qt(r()),value:!o()}]),i()())}),N(e,c),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-v77py2 .picker_slider,
.jse-color-picker-popup.svelte-v77py2 .picker_sl,
.jse-color-picker-popup.svelte-v77py2 .picker_editor input,
.jse-color-picker-popup.svelte-v77py2 .picker_sample,
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-v77py2 .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);var Lj=Y('<div class="jse-color-picker-popup svelte-v77py2"></div>');function Wj(e,t){ot(t,!1);var r=v(t,"color",8),o=v(t,"onChange",8),s=v(t,"showOnTop",8),a=P(),i=()=>{};Xr(vt(function*(){var c,d=new((c=yield ug(()=>import("./vendor-DXT3JbXW.js").then(u=>u.di),__vite__mapDeps([0,1])))===null||c===void 0?void 0:c.default)({parent:n(a),color:r(),popup:s()?"top":"bottom",onDone(u){var m=u.rgba[3]===1?u.hex.substring(0,7):u.hex;o()(m)}});d.show(),i=()=>{d.destroy()}})),Do(()=>{i()}),kt();var l=Lj();Hn(l,c=>f(a,c),()=>n(a)),N(e,l),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-button.svelte-13mgyo6 {
  font-size: var(--jse-font-size-mono, 14px);
  width: var(--jse-color-picker-button-size, 1em);
  height: var(--jse-color-picker-button-size, 1em);
  box-sizing: border-box;
  padding: 0;
  margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
  display: inline-flex;
  vertical-align: top;
  border: 1px solid var(--jse-text-color, #4d4d4d);
  border-radius: 2px;
  background: inherit;
  outline: none;
}

.jse-color-picker-button.svelte-13mgyo6:not(.jse-readonly) {
  cursor: pointer;
}`);var Fj=Y('<button type="button"></button>');function _j(e,t){ot(t,!1);var r=P(void 0,!0),o=P(void 0,!0),s=hs("absolute-popup").openAbsolutePopup,a=v(t,"path",9),i=v(t,"value",9),l=v(t,"readOnly",9),c=v(t,"onPatch",9),d=v(t,"focus",9);function u(y){c()([{op:"replace",path:qt(a()),value:y}]),m()}function m(){d()()}W(()=>p(i()),()=>{f(r,Ih(i()))}),W(()=>(p(l()),p(i())),()=>{f(o,l()?"Color ".concat(i()):"Click to open a color picker")}),jn(),kt(!0);var g,h=Fj();je(()=>{var y;g=wt(h,1,"jse-color-picker-button svelte-13mgyo6",null,g,{"jse-readonly":l()}),No(h,"background: ".concat((y=n(r))!==null&&y!==void 0?y:"")),vn(h,"title",n(o)),vn(h,"aria-label",n(o))}),fe("click",h,function(y){var b,j;if(!l()){var x=y.target,M=x.getBoundingClientRect().top,E=((b=(j=Nl(x))===null||j===void 0?void 0:j.innerHeight)!==null&&b!==void 0?b:0)-M<300&&M>300,q={color:i(),onChange:u,showOnTop:E};s(Wj,q,{anchor:x,closeOnOuterClick:!0,onClose:m,offsetTop:18,offsetLeft:-8,height:300})}}),N(e,h),at()}var Bu=1e3,jl=100,tc=100,Ic=2e4,gi=[{start:0,end:jl}],Vj=1048576,$j=1048576,Ju="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",pv="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",Cs="hover-insert-inside",nc="hover-insert-after",jf="hover-collection",Lu="valid",yf="repairable",Ca=336,Oa=260,sl=100,xf={[Eo.asc]:"ascending",[Eo.desc]:"descending"};function Yh(e){for(var t=Pg(e,l=>l.start),r=[t[0]],o=0;o<t.length;o++){var s=r.length-1,a=r[s],i=t[o];i.start<=a.end?r[s]={start:Math.min(a.start,i.start),end:Math.max(a.end,i.end)}:r.push(i)}return r}function qd(e){return Uc(e)+jl}function Uc(e){return Math.floor(e/jl)*jl}function Ed(e){return!!e&&(e.type==="space"||e.space===!0)}function Ha(e){return!!e&&(e.type==="separator"||e.separator===!0)}function wf(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function ka(e){return!!e&&typeof e.onClick=="function"}function Ys(e){return!!e&&e.type==="dropdown-button"&&ka(e.main)&&Array.isArray(e.items)}function kf(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function Sf(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function Cf(e){return rn(e)&&rn(e.parseError)}function Hj(e){return rn(e)&&Array.isArray(e.validationErrors)}function Qj(e){return rn(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function Kj(e){return rn(e)&&Qj(e)&&typeof e.isChildError=="boolean"}function L1(e){return rn(e)&&"component"in e&&rn(e.props)}function Yj(e){return rn(e)&&typeof e.action=="function"&&rn(e.props)}function uo(e){return e!==void 0&&e.type==="object"}function Dr(e){return e!==void 0&&e.type==="array"}function hv(e){return e!==void 0&&e.type==="value"}function Fs(e){return uo(e)||Dr(e)}function Gh(e){return e!==void 0&&Array.isArray(e.searchResults)}function Dc(e){return!!e&&e.type==="tree"}function Of(e){return!!e&&e.type==="text"}function Mf(e){return!!e&&e.type==="mode"}function Ad(e){var t=e.json,r=e.expand,o=function(s){var a=s.json,i=s.factory;return Array.isArray(a)?i.createArrayDocumentState():rn(a)?i.createObjectDocumentState():a!==void 0?i.createValueDocumentState():void 0}({json:t,factory:bv});return r&&o?Lo(t,o,[],r):o}function mv(){return{type:"array",expanded:(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1}).expanded,visibleSections:gi,items:[]}}function gv(){return{type:"object",expanded:(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1}).expanded,properties:{}}}var bv={createObjectDocumentState:gv,createArrayDocumentState:mv,createValueDocumentState:function(){return{type:"value"}}};function Zh(e,t,r,o){var s=o.createObjectDocumentState,a=o.createArrayDocumentState,i=o.createValueDocumentState;return function l(c,d,u){if(Array.isArray(c)){var m=Dr(d)?d:a();if(u.length===0)return m;var g=Yr(u[0]),h=l(c[g],m.items[g],u.slice(1));return xa(m,["items",u[0]],h)}if(rn(c)){var y=uo(d)?d:s();if(u.length===0)return y;var b=u[0],j=l(c[b],y.properties[b],u.slice(1));return xa(y,["properties",b],j)}return hv(d)?d:i()}(e,t,r)}function yo(e,t){return yl(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(r,o)=>{if(r!==void 0&&o!==void 0)return Array.isArray(r)?Dr(o)?o:mv({expanded:!!Fs(o)&&o.expanded}):rn(r)?uo(o)?o:gv({expanded:!!Fs(o)&&o.expanded}):hv(o)?o:void 0},()=>!0)}function yl(e,t,r,o,s){var a=o(e,t,r);if(Array.isArray(e)&&Dr(a)&&s(a)){var i=[];return jv(e,a.visibleSections,c=>{var d=r.concat(String(c)),u=yl(e[c],a.items[c],d,o,s);u!==void 0&&(i[c]=u)}),vf(i,a.items)?a:be(be({},a),{},{items:i})}if(rn(e)&&uo(a)&&s(a)){var l={};return Object.keys(e).forEach(c=>{var d=r.concat(c),u=yl(e[c],a.properties[c],d,o,s);u!==void 0&&(l[c]=u)}),vf(Object.values(l),Object.values(a.properties))?a:be(be({},a),{},{properties:l})}return a}function jv(e,t,r){t.forEach(o=>{var s=o.start,a=o.end;Dh(s,Math.min(e.length,a),r)})}function xl(e,t){for(var r=e,o=[],s=0;s<t.length;){if(Array.isArray(r)){var a=t[s];o.push("items",a),r=r[Yr(a)]}else{if(!rn(r))throw new Error("Cannot convert path: Object or Array expected at index ".concat(s));var i=t[s];o.push("properties",i),r=r[i]}s++}return o}function Lo(e,t,r,o){for(var s=t,a=function(l){var c=r.slice(0,l);s=Pi(e,s,c,(d,u)=>{var m=Fs(u)&&!u.expanded?be(be({},u),{},{expanded:!0}):u;return Dr(m)?function(g,h){if(function(j,x){return j.some(M=>x>=M.start&&x<M.end)}(g.visibleSections,h))return g;var y=Uc(h),b={start:y,end:qd(y)};return be(be({},g),{},{visibleSections:Yh(g.visibleSections.concat(b))})}(m,Yr(r[l])):m})},i=0;i<r.length;i++)a(i);return Pi(e,s,r,(l,c)=>function(d,u,m,g){return yl(d,u,m,(h,y,b)=>Array.isArray(h)&&g(b)?Dr(y)?y.expanded?y:be(be({},y),{},{expanded:!0}):mv({expanded:!0}):rn(h)&&g(b)?uo(y)?y.expanded?y:be(be({},y),{},{expanded:!0}):gv({expanded:!0}):y,h=>Fs(h)&&h.expanded)}(l,c,[],o))}function zf(e,t,r,o){return Pi(e,t,r,(s,a)=>o?function(i,l,c){return yl(i,l,c,(d,u)=>qf(u),()=>!0)}(s,a,r):qf(a))}function qf(e){return Dr(e)&&e.expanded?be(be({},e),{},{expanded:!1,visibleSections:gi}):uo(e)&&e.expanded?be(be({},e),{},{expanded:!1}):e}function Xh(e,t,r){var o={json:e,documentState:t},s=r.reduce((a,i)=>({json:sa(a.json,[i]),documentState:Gj(a.json,a.documentState,i)}),o);return{json:s.json,documentState:yo(s.json,s.documentState)}}function Gj(e,t,r){if(bp(r))return Ef(e,t,r,void 0);if(jp(r))return Af(e,t,r);if(Gd(r)){var o=oa(e,r.path),s=ra(e,t,o);return s?au(e,t,o,{type:"value",enforceString:s}):t}return ad(r)||Rs(r)?function(a,i,l){if(Rs(l)&&l.from===l.path)return i;var c=i,d=oa(a,l.from),u=ta(a,c,d);return Rs(l)&&(c=Af(a,c,{path:l.from})),c=Ef(a,c,{path:l.path},u),c}(e,t,r):t}function ta(e,t,r){try{return Ve(t,xl(e,r))}catch{return}}function yv(e,t,r,o,s){var a=Zh(e,t,r,s);return mg(a,xl(e,r),i=>{var l=Ve(e,r);return o(l,i)})}function au(e,t,r,o){return function(s,a,i,l,c){var d=Zh(s,a,i,c);return xa(d,xl(s,i),l)}(e,t,r,o,bv)}function Pi(e,t,r,o){return yv(e,t,r,o,bv)}function Ef(e,t,r,o){var s=oa(e,r.path),a=t;return a=Pi(e,a,Xt(s),(i,l)=>{if(!Dr(l))return l;var c=Yr(Wt(s)),d=l.items,u=l.visibleSections;return be(be({},l),{},{items:c<d.length?pj(d,c,o!==void 0?[o]:Array(1)):d,visibleSections:em(u,c,1)})}),au(e,a,s,o)}function Af(e,t,r){var o=oa(e,r.path),s=Xt(o),a=Ve(e,s);return Array.isArray(a)?Pi(e,t,s,(i,l)=>{if(!Dr(l))return l;var c=Yr(Wt(o)),d=l.items,u=l.visibleSections;return be(be({},l),{},{items:d.slice(0,c).concat(d.slice(c+1)),visibleSections:em(u,c,-1)})}):function(i,l,c){var d=xl(i,c);return Za(l,d)?Sg(l,xl(i,c)):l}(e,t,o)}function em(e,t,r){return function(o){for(var s=o.slice(0),a=1;a<s.length;)s[a-1].end===s[a].start&&(s[a-1]={start:s[a-1].start,end:s[a].end},s.splice(a)),a++;return s}(e.map(o=>({start:o.start>t?o.start+r:o.start,end:o.end>t?o.end+r:o.end})))}function ra(e,t,r){var o,s=Ve(e,r),a=ta(e,t,r),i=hv(a)?a.enforceString:void 0;return typeof i=="boolean"?i:typeof(o=s)=="string"&&typeof _i(o,JSON)!="string"}function Dl(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=e.indexOf(t);return o!==-1?r?e.slice(o):e.slice(o+1):[]}function xv(e,t){var r=[];return function o(s,a,i){r.push(i),Ar(s)&&Dr(a)&&a.expanded&&jv(s,a.visibleSections,l=>{o(s[l],a.items[l],i.concat(String(l)))}),Jr(s)&&uo(a)&&a.expanded&&Object.keys(s).forEach(l=>{o(s[l],a.properties[l],i.concat(l))})}(e,t,[]),r}function tm(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];return function s(a,i){o.push({path:i,type:Fo.value});var l=ta(e,t,i);if(a&&Fs(l)&&l.expanded){if(r&&o.push({path:i,type:Fo.inside}),Ar(a)){var c=Dr(l)?l.visibleSections:gi;jv(a,c,d=>{var u=i.concat(String(d));s(a[d],u),r&&o.push({path:u,type:Fo.after})})}Jr(a)&&Object.keys(a).forEach(d=>{var u=i.concat(d);o.push({path:u,type:Fo.key}),s(a[d],u),r&&o.push({path:u,type:Fo.after})})}}(e,[]),o}function Wu(e,t,r){var o=xv(e,t),s=o.map(qt).indexOf(qt(r));if(s!==-1&&s<o.length-1)return o[s+1]}function _s(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return Lo(e,t,r,mj({json:Ve(e,r)},o)?il:wv)}function Fu(e,t,r){var o=ta(e,t,r);return Fs(o)&&o.expanded?t:_s(e,t,r)}function il(e){return e.length===0||e.length===1&&e[0]==="0"}function Pd(e){return e.length===0}function wv(){return!0}function bc(){return!1}function vo(e){return e&&e.type===qn.after||!1}function Er(e){return e&&e.type===qn.inside||!1}function Br(e){return e&&e.type===qn.key||!1}function un(e){return e&&e.type===qn.value||!1}function Rn(e){return e&&e.type===qn.multi||!1}function su(e){return Rn(e)&&Lt(e.focusPath,e.anchorPath)}function wl(e){return Rn(e)||vo(e)||Er(e)||Br(e)||un(e)}function _u(e){return e&&e.type===qn.text||!1}function vs(e,t){var r=[];return function(o,s,a){if(s){var i=Us(s),l=$e(s);if(Lt(i,l))return a(i);if(o!==void 0){var c=rm(i,l);if(i.length===c.length||l.length===c.length)return a(c);var d=no(i,l),u=Ma(o,d),m=ss(o,d),g=Ra(o,d,u),h=Ra(o,d,m);if(!(g===-1||h===-1)){var y=Ve(o,c);if(Jr(y)){for(var b=Object.keys(y),j=g;j<=h;j++){var x=a(c.concat(b[j]));if(x!==void 0)return x}return}if(Ar(y)){for(var M=g;M<=h;M++){var E=a(c.concat(String(M)));if(E!==void 0)return E}return}throw new Error("Failed to create selection")}}}}(e,t,o=>{r.push(o)}),r}function nm(e){return Er(e)?e.path:Xt($e(e))}function Ma(e,t){if(!Rn(t))return t.path;var r=Ra(e,t,t.anchorPath);return Ra(e,t,t.focusPath)<r?t.focusPath:t.anchorPath}function ss(e,t){if(!Rn(t))return t.path;var r=Ra(e,t,t.anchorPath);return Ra(e,t,t.focusPath)>r?t.focusPath:t.anchorPath}function Pf(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(r){var s=o?$e(r):Ma(e,r),a=function(c,d,u){var m=xv(c,d),g=m.map(qt),h=qt(u),y=g.indexOf(h);if(y!==-1&&y>0)return m[y-1]}(e,t,s);if(o)return Er(r)||vo(r)?a!==void 0?no(s,s):void 0:a!==void 0?no(Us(r),a):void 0;if(vo(r)||Er(r))return $t(s);if(Br(r)){if(a===void 0||a.length===0)return;var i=Xt(a),l=Ve(e,i);return Array.isArray(l)||dn(a)?$t(a):Ja(a)}return un(r),a!==void 0?$t(a):void 0}}function Rf(e,t,r,o){if(!r)return{caret:void 0,previous:void 0,next:void 0};var s=tm(e,t,o),a=s.findIndex(i=>Lt(i.path,$e(r))&&String(i.type)===String(r.type));return{caret:a!==-1?s[a]:void 0,previous:a!==-1&&a>0?s[a-1]:void 0,next:a!==-1&&a<s.length-1?s[a+1]:void 0}}function Gs(e,t){for(var r=xv(e,t),o=0;o<r.length-1&&r[o+1].length>r[o].length;)o++;var s=r[o];return s===void 0||s.length===0||Array.isArray(Ve(e,Xt(s)))?$t(s):Ja(s)}function Ri(e,t){if(t.length===1){var r=za(t);if(r.op==="replace")return $t(oa(e,r.path))}if(!dn(t)&&t.every(i=>i.op==="move")){var o=za(t),s=t.slice(1);if((ad(o)||Rs(o))&&o.from!==o.path&&s.every(i=>(ad(i)||Rs(i))&&i.from===i.path))return Ja(oa(e,o.path))}var a=t.filter(i=>i.op!=="test"&&i.op!=="remove"&&(i.op!=="move"||i.from!==i.path)&&typeof i.path=="string").map(i=>oa(e,i.path));if(!dn(a))return{type:qn.multi,anchorPath:za(a),focusPath:Wt(a)}}function rm(e,t){for(var r=0;r<e.length&&r<t.length&&e[r]===t[r];)r++;return e.slice(0,r)}function Bc(e){return Br(e)||un(e)||su(e)}function Tf(e,t){return Bc(t)&&sr(Ve(e,$e(t)))?$e(t):Xt($e(t))}function ua(e,t){if(e.length<t.length)return!1;for(var r=0;r<t.length;r++)if(e[r]!==t[r])return!1;return!0}function na(e){return Ur(e)?{type:e.type,path:e.path}:e}function Ja(e){return{type:qn.key,path:e}}function kv(e,t){return{type:qn.key,path:e,edit:!0,initialValue:t}}function $t(e){return{type:qn.value,path:e}}function Jc(e,t){return{type:qn.value,path:e,edit:!0,initialValue:t}}function La(e){return{type:qn.inside,path:e}}function Pa(e){return{type:qn.after,path:e}}function no(e,t){var r=rm(e,t),o=e.length>r.length&&t.length>r.length;return{type:qn.multi,anchorPath:o?r.concat(e[r.length]):r,focusPath:o?r.concat(t[r.length]):r}}function om(e,t,r,o){if(Br(t))return String(Wt(t.path));if(un(t)){var s=Ve(e,t.path);return typeof s=="string"?s:o.stringify(s,null,r)}if(Rn(t)){if(dn(t.focusPath))return o.stringify(e,null,r);var a=nm(t),i=Ve(e,a);if(Array.isArray(i)){if(su(t)){var l=Ve(e,t.focusPath);return o.stringify(l,null,r)}return vs(e,t).map(c=>{var d=Ve(e,c);return"".concat(o.stringify(d,null,r),",")}).join(`
`)}return vs(e,t).map(c=>{var d=Wt(c),u=Ve(e,c);return"".concat(o.stringify(d),": ").concat(o.stringify(u,null,r),",")}).join(`
`)}}function Ur(e){return(Br(e)||un(e))&&e.edit===!0}function di(e){return Br(e)||un(e)||Rn(e)}function rc(e){return Br(e)||un(e)||su(e)}function Rd(e){switch(e.type){case Fo.key:return Ja(e.path);case Fo.value:return $t(e.path);case Fo.after:return Pa(e.path);case Fo.inside:return La(e.path)}}function Nf(e,t){switch(e){case qn.key:return Ja(t);case qn.value:return $t(t);case qn.after:return Pa(t);case qn.inside:return La(t);case qn.multi:case qn.text:return no(t,t)}}function oc(e,t,r){if(t)return kl(e,t,r)||ua(Rn(t)?Xt(t.focusPath):t.path,r)?t:void 0}function kl(e,t,r){if(e===void 0||!t)return!1;if(Br(t)||Er(t)||vo(t))return Lt(t.path,r);if(un(t))return ua(r,t.path);if(Rn(t)){var o=Ma(e,t),s=ss(e,t),a=Xt(t.focusPath);if(!ua(r,a)||r.length<=a.length)return!1;var i=Ra(e,t,o),l=Ra(e,t,s),c=Ra(e,t,r);return c!==-1&&c>=i&&c<=l}return!1}function Ra(e,t,r){var o=Xt(t.focusPath);if(!ua(r,o)||r.length<=o.length)return-1;var s=r[o.length],a=Ve(e,o);if(Jr(a))return Object.keys(a).indexOf(s);if(Ar(a)){var i=Yr(s);if(i<a.length)return i}return-1}function $e(e){return Rn(e)?e.focusPath:e.path}function Us(e){return Rn(e)?e.anchorPath:e.path}function Qo(){for(var e=[],t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];for(var s of r)if(typeof s=="string"&&e.push(s),s&&typeof s=="object")for(var a in s)Object.hasOwnProperty.call(s,a)&&s[a]&&e.push(a);return e.join(" ")}function Lc(e,t,r){return Qo("jse-value","jse-"+iv(e,r),{"jse-url":ou(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":t===Cr.table})}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1r0oryi {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1r0oryi, .jse-value.jse-array.svelte-1r0oryi {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1r0oryi {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1r0oryi {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1r0oryi {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1r0oryi {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1r0oryi {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-1r0oryi {
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  cursor: text !important;
  word-break: normal;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
div.jse-editable-div.jse-short-text.svelte-1r0oryi {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-1r0oryi {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-1r0oryi {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var Zj=Y('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function am(e,t){ot(t,!1);var r=Wr("jsoneditor:EditableDiv"),o=v(t,"value",9),s=v(t,"initialValue",9),a=v(t,"shortText",9,!1),i=v(t,"label",9),l=v(t,"onChange",9),c=v(t,"onCancel",9),d=v(t,"onFind",9),u=v(t,"onPaste",9,Sr),m=v(t,"onValueClass",9,()=>""),g=P(void 0,!0),h=P(void 0,!0),y=!1;function b(){return n(g)?function(M){return M.replace(/\n$/,"")}(n(g).innerText):""}function j(M){n(g)&&xo(g,n(g).innerText=Ai(M))}Xr(()=>{r("onMount",{value:o(),initialValue:s()}),j(s()!==void 0?s():o()),n(g)&&function(M){if(M.firstChild!=null){var E=document.createRange(),q=window.getSelection();E.setStart(M,1),E.collapse(!0),q?.removeAllRanges(),q?.addRange(E)}else M.focus()}(n(g))}),Do(()=>{var M=b();r("onDestroy",{closed:y,value:o(),newValue:M}),y||M===o()||l()(M,as.no)}),W(()=>(p(m()),p(o())),()=>{f(h,m()(o()))}),jn(),kt(!0);var x=Zj();Hn(x,M=>f(g,M),()=>n(g)),je(M=>{vn(x,"aria-label",i()),wt(x,1,M,"svelte-1r0oryi")},[()=>ds((p(Qo),n(h),p(a()),T(()=>Qo("jse-editable-div",n(h),{"jse-short-text":a()}))))]),fe("input",x,function(){var M=b();M===""&&j(""),f(h,m()(M))}),fe("keydown",x,function(M){M.stopPropagation();var E=Ba(M);if(E==="Escape"&&(M.preventDefault(),y=!0,c()()),E==="Enter"||E==="Tab"){M.preventDefault(),y=!0;var q=b();l()(q,as.nextInside)}E==="Ctrl+F"&&(M.preventDefault(),d()(!1)),E==="Ctrl+H"&&(M.preventDefault(),d()(!0))}),fe("paste",x,function(M){if(M.stopPropagation(),u()&&M.clipboardData){var E=M.clipboardData.getData("text/plain");u()(E)}}),fe("blur",x,function(){var M=document.hasFocus(),E=b();r("handleBlur",{hasFocus:M,closed:y,value:o(),newValue:E}),document.hasFocus()&&!y&&(y=!0,E!==o()&&l()(E,as.self))}),N(e,x),at()}function Xj(e,t){ot(t,!1);var r=v(t,"path",9),o=v(t,"value",9),s=v(t,"selection",9),a=v(t,"mode",9),i=v(t,"parser",9),l=v(t,"normalization",9),c=v(t,"enforceString",9),d=v(t,"onPatch",9),u=v(t,"onPasteJson",9),m=v(t,"onSelect",9),g=v(t,"onFind",9),h=v(t,"focus",9),y=v(t,"findNextInside",9);function b(E){return c()?E:_i(E,i())}function j(){m()($t(r())),h()()}kt(!0);var x=De(()=>(p(l()),p(o()),T(()=>l().escapeValue(o())))),M=De(()=>(p(Ur),p(s()),T(()=>Ur(s())?s().initialValue:void 0)));am(e,{get value(){return n(x)},get initialValue(){return n(M)},label:"Edit value",onChange:function(E,q){d()([{op:"replace",path:qt(r()),value:b(l().unescapeValue(E))}],(k,A,U)=>{if(!U||Lt(r(),$e(U)))return{state:A,selection:q===as.nextInside?y()(r()):$t(r())}}),h()()},onCancel:j,onPaste:function(E){try{var q=i().parse(E);sr(q)&&u()({path:r(),contents:q,onPasteAsJson:()=>{j();var k=[{op:"replace",path:qt(r()),value:q}];d()(k,(A,U)=>({state:_s(A,U,r())}))}})}catch{}},get onFind(){return g()},onValueClass:function(E){return Lc(b(l().unescapeValue(E)),a(),i())}}),at()}function vi(e,t,r){var o=Xt(t),s=Ve(e,o);if(Ar(s)){var a=Yr(Wt(t));return r.map((d,u)=>({op:"add",path:qt(o.concat(String(a+u))),value:d.value}))}if(Jr(s)){var i=Wt(t),l=Object.keys(s),c=i!==void 0?Dl(l,i,!0):[];return[...r.map(d=>{var u=Il(d.key,l);return{op:"add",path:qt(o.concat(u)),value:d.value}}),...c.map(d=>fs(o,d))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function Td(e,t,r){var o=Ve(e,t);if(Array.isArray(o)){var s=o.length;return r.map((a,i)=>({op:"add",path:qt(t.concat(String(s+i))),value:a.value}))}return r.map(a=>{var i=Il(a.key,Object.keys(o));return{op:"add",path:qt(t.concat(i)),value:a.value}})}function Bl(e,t,r,o){var s=t.filter(l=>l!==r),a=Il(o,s),i=Dl(t,r,!1);return[{op:"move",from:qt(e.concat(r)),path:qt(e.concat(a))},...i.map(l=>fs(e,l))]}function sm(e,t){var r=Wt(t);if(dn(r))throw new Error("Cannot duplicate root object");var o=Xt(r),s=Wt(r),a=Ve(e,o);if(Ar(a)){var i=Wt(t),l=i?Yr(Wt(i))+1:0;return[...t.map((u,m)=>({op:"copy",from:qt(u),path:qt(o.concat(String(m+l)))}))]}if(Jr(a)){var c=Object.keys(a),d=s!==void 0?Dl(c,s,!1):[];return[...t.map(u=>{var m=Il(Wt(u),c);return{op:"copy",from:qt(u),path:qt(o.concat(m))}}),...d.map(u=>fs(o,u))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function im(e,t){if(un(t))return[{op:"move",from:qt(t.path),path:""}];if(!Rn(t))throw new Error("Cannot create extract operations: parent must be an Object or Array");var r=Xt(t.focusPath),o=Ve(e,r);if(Ar(o)){var s=vs(e,t).map(i=>{var l=Yr(Wt(i));return o[l]});return[{op:"replace",path:"",value:s}]}if(Jr(o)){var a={};return vs(e,t).forEach(i=>{var l=String(Wt(i));a[l]=o[l]}),[{op:"replace",path:"",value:a}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(t))}function lm(e,t,r,o){if(Br(t)){var s=Bh(r,o),a=Xt(t.path),i=Ve(e,a);return Bl(a,Object.keys(i),Wt(t.path),typeof s=="string"?s:r)}if(un(t)||Rn(t)&&dn(t.focusPath))try{return[{op:"replace",path:qt($e(t)),value:Tl(r,A=>Rl(A,o))}]}catch{return[{op:"replace",path:qt($e(t)),value:r}]}if(Rn(t)){var l=Vu(r,o);return function(A,U,F){var S=za(U),J=Xt(S),Z=Ve(A,J);if(Ar(Z)){var $=za(U),le=$?Yr(Wt($)):0;return[...Wc(U),...F.map((Ae,Re)=>({op:"add",path:qt(J.concat(String(Re+le))),value:Ae.value}))]}if(Jr(Z)){var G=Wt(U),qe=Xt(G),Me=Wt(G),de=Object.keys(Z),Ee=Me!==void 0?Dl(de,Me,!1):[],Se=new Set(U.map(Ae=>Wt(Ae))),Ke=de.filter(Ae=>!Se.has(Ae));return[...Wc(U),...F.map(Ae=>{var Re=Il(Ae.key,Ke);return{op:"add",path:qt(qe.concat(Re)),value:Ae.value}}),...Ee.map(Ae=>fs(qe,Ae))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")}(e,vs(e,t),l)}if(vo(t)){var c=Vu(r,o),d=t.path,u=Xt(d),m=Ve(e,u);if(Ar(m)){var g=Yr(Wt(d));return vi(e,u.concat(String(g+1)),c)}if(Jr(m)){var h=String(Wt(d)),y=Object.keys(m);if(dn(y)||Wt(y)===h)return Td(e,u,c);var b=y.indexOf(h),j=y[b+1];return vi(e,u.concat(j),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(Er(t)){var x=Vu(r,o),M=t.path,E=Ve(e,M);if(Ar(E))return vi(e,M.concat("0"),x);if(Jr(E)){var q=Object.keys(E);if(dn(q))return Td(e,M,x);var k=za(q);return vi(e,M.concat(k),x)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(t))}function Wc(e){return e.map(t=>({op:"remove",path:qt(t)})).reverse()}function fs(e,t){return{op:"move",from:qt(e.concat(t)),path:qt(e.concat(t))}}function Vu(e,t){var r=/^\s*{/.test(e),o=/^\s*\[/.test(e),s=Bh(e,t),a=s!==void 0?s:Tl(e,i=>Rl(i,t));return r&&rn(a)||o&&Array.isArray(a)?[{key:"New item",value:a}]:Array.isArray(a)?a.map((i,l)=>({key:"New item "+l,value:i})):rn(a)?Object.keys(a).map(i=>({key:i,value:a[i]})):[{key:"New item",value:a}]}function cm(e,t){if(Br(t)){var r=Xt(t.path),o=Ve(e,r),s=Bl(r,Object.keys(o),Wt(t.path),"");return{operations:s,newSelection:Ri(e,s)}}if(un(t))return{operations:[{op:"replace",path:qt(t.path),value:""}],newSelection:t};if(Rn(t)){var a=vs(e,t),i=Wc(a),l=Wt(a);if(dn(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:$t([])};var c=Xt(l),d=Ve(e,c);if(Ar(d)){var u=za(a),m=Yr(Wt(u));return{operations:i,newSelection:m===0?La(c):Pa(c.concat(String(m-1)))}}if(Jr(d)){var g=Object.keys(d),h=za(a),y=Wt(h),b=g.indexOf(y),j=g[b-1];return{operations:i,newSelection:b===0?La(c):Pa(c.concat(j))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(t))}function um(e,t){var r=function(o,s){if(dn(s)||!s.every(Rs))return s;var a=[];for(var i of s){var l=If(Po(i.from)),c=If(Po(i.path));if(!l||!c)return s;a.push({from:l,path:c,operation:i})}var d=a[0].path.parent,u=Ve(o,d);if(!Jr(u)||!a.every(y=>function(b,j){return Lt(b.from.parent,j)&&Lt(b.path.parent,j)}(y,d)))return s;var m=function(y,b){var j=Object.keys(b),x=j.slice();for(var M of y){var E=x.indexOf(M.from.key);E!==-1&&(x.splice(E,1),x.push(M.path.key))}for(var q=0;q<j.length&&j[q]===x[q];)q++;return x[q]}(a,o),g=y=>y.operation,h=a.filter(y=>y.operation.from!==y.operation.path);return h.some(y=>y.path.key===m)?h.map(g):[fs(d,m),...h.map(g)]}(e,t);return gp(e,r,{before:(o,s,a)=>{if(jp(s)){var i=Po(s.path);return{revertOperations:[...a,...$u(o,i)]}}if(Rs(s)){var l=Po(s.from);return{revertOperations:s.from===s.path?[s,...$u(o,l)]:[...a,...$u(o,l)]}}return{document:o}}})}function If(e){return e.length>0?{parent:Xt(e),key:Wt(e)}:void 0}function $u(e,t){var r=Xt(t),o=Wt(t),s=Ve(e,r);return Jr(s)?Dl(Object.keys(s),o,!1).map(a=>fs(r,a)):[]}function Uf(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,r=e.items[t],o=e.items.map((s,a)=>be(be({},s),{},{active:a===t}));return be(be({},e),{},{items:o,activeItem:r,activeIndex:t})}function Df(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.toLowerCase(),a=(r=o?.maxResults)!==null&&r!==void 0?r:1/0,i=o?.columns,l=[],c=[];function d(j){l.length>=a||l.push(j)}function u(j,x){if(Ar(x)){var M=c.length;c.push("0");for(var E=0;E<x.length;E++)if(c[M]=String(E),u(j,x[E]),l.length>=a)return;c.pop()}else if(Jr(x)){var q=Object.keys(x),k=c.length;for(var A of(c.push(""),q))if(c[k]=A,Bf(A,j,c,Ho.key,d),u(j,x[A]),l.length>=a)return;c.pop()}else Bf(String(x),j,c,Ho.value,d)}if(e==="")return[];if(i){if(!Array.isArray(t))throw new Error("json must be an Array when option columns is defined");for(var m=0;m<t.length;m++){c[0]=String(m);for(var g=t[m],h=0;h<i.length;h++){var y=i[h];if(y.length===1)c[1]=y[0];else for(var b=0;b<y.length;b++)c[b+1]=y[b];for(;c.length>y.length+1;)c.pop();u(s,Ve(g,y))}if(l.length>=a)break}return l}return u(s,t),l}function Bf(e,t,r,o,s){var a=e.toLowerCase(),i=0,l=-1,c=-1;do(c=a.indexOf(t,l))!==-1&&(l=c+t.length,s({path:r.slice(0),field:o,fieldIndex:i,start:c,end:l}),i++);while(c!==-1)}function Nd(e,t,r,o){return e.substring(0,r)+t+e.substring(o)}function Jf(e,t,r){var o=e;return qg(r,s=>{o=Nd(o,t,s.start,s.end)}),o}function e0(e,t,r,o,s){var a=o.field,i=o.path,l=o.start,c=o.end;if(a===Ho.key){var d=Xt(i),u=Ve(e,d),m=Wt(i),g=Bl(d,Object.keys(u),m,Nd(m,r,l,c));return{newSelection:Ri(e,g),operations:g}}if(a===Ho.value){var h=Ve(e,i);if(h===void 0)throw new Error("Cannot replace: path not found ".concat(qt(i)));var y=typeof h=="string"?h:String(h),b=ra(e,t,i),j=Nd(y,r,l,c),x=[{op:"replace",path:qt(i),value:b?j:_i(j,s)}];return{newSelection:Ri(e,x),operations:x}}throw new Error("Cannot replace: unknown type of search result field ".concat(a))}function Lf(e){return e.path.concat(e.field,String(e.fieldIndex))}function Wf(e){var t=Gh(e)?e.searchResults.filter(r=>r.field===Ho.key):void 0;return t&&t.length>0?t:void 0}function Ff(e){var t=Gh(e)?e.searchResults.filter(r=>r.field===Ho.value):void 0;return t&&t.length>0?t:void 0}var t0={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function dm(e,t){return t.reduce((r,o)=>function(s,a,i,l){return yv(s,a,i,l,t0)}(e,r,o.path,(s,a)=>be(be({},a),{},{searchResults:a.searchResults?a.searchResults.concat(o):[o]})),void 0)}function Fc(e){var t,r=(t=e?.searchResults)!==null&&t!==void 0?t:[],o=uo(e)?Object.values(e.properties).flatMap(Fc):Dr(e)?e.items.flatMap(Fc):[];return r.concat(o)}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-highlight.svelte-19qyvy6 {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-19qyvy6 {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-active-outline, var(--jse-search-match-outline, 2px solid #e0be00));
}`);var n0=Y("<span> </span>");function vm(e,t){ot(t,!1);var r=P(),o=v(t,"text",8),s=v(t,"searchResultItems",8);W(()=>(p(o()),p(s())),()=>{f(r,function(i,l){var c=[],d=0;for(var u of l){var m=i.slice(d,u.start);m!==""&&c.push({resultIndex:void 0,type:"normal",text:m,active:!1});var g=i.slice(u.start,u.end);c.push({resultIndex:u.resultIndex,type:"highlight",text:g,active:u.active}),d=u.end}var h=Wt(l);return h&&h.end<i.length&&c.push({type:"normal",text:i.slice(h.end),resultIndex:void 0,active:!1}),c}(String(o()),s()))}),jn(),kt();var a=ir();lr(dt(a),1,()=>n(r),br,(i,l)=>{var c=ir(),d=dt(c),u=g=>{var h=Hr();je(()=>st(h,(n(l),T(()=>n(l).text)))),N(g,h)},m=g=>{var h,y=n0(),b=R(y);je((j,x)=>{h=wt(y,1,"jse-highlight svelte-19qyvy6",null,h,{"jse-active":n(l).active}),vn(y,"data-search-result-index",j),st(b,x)},[()=>(n(l),T(()=>String(n(l).resultIndex))),()=>(p(Ai),n(l),T(()=>Ai(n(l).text)))]),N(g,y)};ne(d,g=>{n(l),T(()=>n(l).type==="normal")?g(u):g(m,-1)}),N(i,c)}),N(e,a),at()}function jc(e){var t=1e3;if(e<900)return e.toFixed()+" B";var r=e/t;if(r<900)return r.toFixed(1)+" KB";var o=r/t;if(o<900)return o.toFixed(1)+" MB";var s=o/t;return s<900?s.toFixed(1)+" GB":(s/t).toFixed(1)+" TB"}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tag.svelte-ubve9r {
  border: none;
  font-size: 80%;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  padding: 0 4px;
  line-height: normal;
  margin: 1px 0;
}
.jse-tag.svelte-ubve9r:hover {
  opacity: 0.8;
}
.jse-tag.disabled.svelte-ubve9r {
  opacity: 0.7;
  cursor: inherit;
}`);var r0=Y('<button type="button"><!></button>');function yc(e,t){ot(t,!0);var r,o=Dt(()=>t.onclick?a=>{a.preventDefault(),a.stopPropagation(),t.onclick()}:void 0),s=r0();(function(a,i){for(var l=arguments.length,c=new Array(l>2?l-2:0),d=2;d<l;d++)c[d-2]=arguments[d];var u=new nu(a);Wi(()=>{var m,g=(m=i())!==null&&m!==void 0?m:null;u.ensure(g,g&&(h=>g(h,...c)))},Js)})(R(s),()=>{var a;return(a=t.children)!==null&&a!==void 0?a:Pp}),je(()=>r=wt(s,1,"jse-tag svelte-ubve9r",null,r,{disabled:!t.onclick})),$o("click",s,function(){for(var a,i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];(a=n(o))===null||a===void 0||a.apply(this,l)}),N(e,s),at()}Pl(["click"]);xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1saqp8c {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1saqp8c, .jse-value.jse-array.svelte-1saqp8c {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1saqp8c {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1saqp8c {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1saqp8c {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1saqp8c {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1saqp8c {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-1saqp8c {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  word-break: normal;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}
.jse-value.jse-table-cell.svelte-1saqp8c {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-1saqp8c {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-1saqp8c::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);var o0=Y('<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>');function a0(e,t){ot(t,!0);var r=ba(!0),o=Dt(()=>n(r)&&typeof t.value=="string"&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(h=>h.active&&h.end>t.truncateTextSize))),s=Dt(()=>n(o)&&typeof t.value=="string"?t.value.substring(0,t.truncateTextSize).trim():t.value),a=Dt(()=>ou(t.value));function i(){f(r,!1)}var l=o0(),c=R(l),d=h=>{var y=Dt(()=>t.normalization.escapeValue(n(s)));vm(h,{get text(){return n(y)},get searchResultItems(){return t.searchResultItems}})},u=h=>{var y=Hr();je(b=>st(y,b),[()=>Ai(t.normalization.escapeValue(n(s)))]),N(h,y)};ne(c,h=>{t.searchResultItems?h(d):h(u,-1)});var m=D(c,2),g=h=>{yc(h,{onclick:i,children:(y,b)=>{var j=Hr();je(x=>st(j,"Show more (".concat(x??"",")")),[()=>jc(t.value.length)]),N(y,j)},$$slots:{default:!0}})};ne(m,h=>{n(o)&&typeof t.value=="string"&&h(g)}),je(h=>{wt(l,1,h,"svelte-1saqp8c"),vn(l,"title",n(a)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>ds(Lc(t.value,t.mode,t.parser))]),$o("click",l,function(h){typeof t.value=="string"&&n(a)&&fv(h)&&(h.preventDefault(),h.stopPropagation(),window.open(t.value,"_blank"))}),$o("dblclick",l,function(h){t.readOnly||(h.preventDefault(),t.onSelect(Jc(t.path)))}),N(e,l),at()}Pl(["click","dblclick"]);xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tooltip.svelte-brt1mq {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);var s0=Y('<div class="jse-tooltip svelte-brt1mq"> </div>');function i0(e,t){var r=v(t,"text",8),o=s0(),s=R(o);je(()=>st(s,r())),N(e,o)}function Ti(e,t){var r,o=t.text,s=t.openAbsolutePopup,a=t.closeAbsolutePopup;function i(){r=s(i0,{text:o},{position:"top",width:10*o.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function l(){a(r)}return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",l)}}}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-timestamp.svelte-1jcpman {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);var l0=Y('<div class="jse-timestamp svelte-1jcpman"><!></div>');function c0(e,t){ot(t,!1);var r=P(void 0,!0),o=hs("absolute-popup"),s=v(t,"value",9);W(()=>p(s()),()=>{f(r,"Time: ".concat(new Date(s()).toString()))}),jn(),kt(!0);var a=l0();tn(R(a),{get data(){return ag}}),oo(a,(i,l)=>Ti?.(i,l),()=>be({text:n(r)},o)),N(e,a),at()}function u0(e){var t=[];return!e.isEditing&&cj(e.value)&&t.push({component:Jj,props:e}),!e.isEditing&&uj(e.value)&&t.push({component:_j,props:e}),e.isEditing&&t.push({component:Xj,props:e}),e.isEditing||t.push({component:a0,props:e}),!e.isEditing&&Cd(e.value)&&t.push({component:c0,props:e}),t}function fo(e){return e.map((t,r)=>iu.test(t)?"["+t+"]":/[.[\]]/.test(t)||t===""?'["'+function(o){return o.replace(/"/g,'\\"')}(t)+'"]':(r>0?".":"")+t).join("")}function d0(e){for(var t=[],r=0;r<e.length;)e[r]==="."&&r++,e[r]==="["?(r++,e[r]==='"'?(r++,t.push(o(a=>a==='"',!0)),s('"')):t.push(o(a=>a==="]")),s("]")):t.push(o(a=>a==="."||a==="["));function o(a){for(var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";r<e.length&&!a(e[r]);)i&&e[r]==="\\"&&e[r+1]==='"'?(l+='"',r+=2):(l+=e[r],r++);return l}function s(a){if(e[r]!==a)throw new SyntaxError("Invalid JSON path: ".concat(a," expected at position ").concat(r));r++}return t}function Qa(e){return{value:e,label:dn(e)?"(item root)":fo(e)}}function v0(e){if(iu.test(e))return"["+e+"]";if(Sv.test(e))return"."+e;var t=JSON.stringify(e);return"['"+t.substring(1,t.length-1).replace(/\\"/g,'"')+"']"}function ea(e){return e.map(t=>iu.test(t)?"?.[".concat(t,"]"):Sv.test(t)?"?.".concat(t):"?.[".concat(JSON.stringify(t),"]")).join("")}var Sv=/^[a-zA-Z$_][a-zA-Z$_\d]*$/,iu=/^\d+$/,f0={},p0={showWizard:!0,showOriginal:!0},_c=Math.min,Ds=Math.max,Vc=Math.round,ac=Math.floor,Ta=e=>({x:e,y:e}),h0={left:"right",right:"left",bottom:"top",top:"bottom"};function lu(e,t){return typeof e=="function"?e(t):e}function Ni(e){return e.split("-")[0]}function cu(e){return e.split("-")[1]}function fm(e){return e==="x"?"y":"x"}function pm(e){return e==="y"?"height":"width"}function ts(e){var t=e[0];return t==="t"||t==="b"?"y":"x"}function hm(e){return fm(ts(e))}function Id(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var _f=["left","right"],Vf=["right","left"],m0=["top","bottom"],g0=["bottom","top"];function b0(e,t,r,o){var s=cu(e),a=function(i,l,c){switch(i){case"top":case"bottom":return c?l?Vf:_f:l?_f:Vf;case"left":case"right":return l?m0:g0;default:return[]}}(Ni(e),r==="start",o);return s&&(a=a.map(i=>i+"-"+s),t&&(a=a.concat(a.map(Id)))),a}function sc(e){var t=Ni(e);return h0[t]+e.slice(t.length)}function $c(e){var t=e.x,r=e.y,o=e.width,s=e.height;return{width:o,height:s,top:r,left:t,right:t+o,bottom:r+s,x:t,y:r}}function $f(e,t,r){var o,s=e.reference,a=e.floating,i=ts(t),l=hm(t),c=pm(l),d=Ni(t),u=i==="y",m=s.x+s.width/2-a.width/2,g=s.y+s.height/2-a.height/2,h=s[c]/2-a[c]/2;switch(d){case"top":o={x:m,y:s.y-a.height};break;case"bottom":o={x:m,y:s.y+s.height};break;case"right":o={x:s.x+s.width,y:g};break;case"left":o={x:s.x-a.width,y:g};break;default:o={x:s.x,y:s.y}}var y=cu(t);return y&&(o[l]+=h*(y==="end"?1:-1)*(r&&u?-1:1)),o}function j0(e,t){return Ud.apply(this,arguments)}function Ud(){return Ud=vt(function*(e,t){var r;t===void 0&&(t={});var o=e.x,s=e.y,a=e.platform,i=e.rects,l=e.elements,c=e.strategy,d=lu(t,e),u=d.boundary,m=u===void 0?"clippingAncestors":u,g=d.rootBoundary,h=g===void 0?"viewport":g,y=d.elementContext,b=y===void 0?"floating":y,j=d.altBoundary,x=j!==void 0&&j,M=d.padding,E=function(J){return typeof J!="number"?function(Z){var $,le,G,qe;return{top:($=Z.top)!=null?$:0,right:(le=Z.right)!=null?le:0,bottom:(G=Z.bottom)!=null?G:0,left:(qe=Z.left)!=null?qe:0}}(J):{top:J,right:J,bottom:J,left:J}}(M===void 0?0:M),q=l[x?b==="floating"?"reference":"floating":b],k=$c(yield a.getClippingRect({element:(r=yield a.isElement==null?void 0:a.isElement(q))==null||r?q:q.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:m,rootBoundary:h,strategy:c})),A=b==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,U=yield a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating),F=(yield a.isElement==null?void 0:a.isElement(U))&&(yield a.getScale==null?void 0:a.getScale(U))||{x:1,y:1},S=$c(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:A,offsetParent:U,strategy:c}):A);return{top:(k.top-S.top+E.top)/F.y,bottom:(S.bottom-k.bottom+E.bottom)/F.y,left:(k.left-S.left+E.left)/F.x,right:(S.right-k.right+E.right)/F.x}}),Ud.apply(this,arguments)}var y0=function(){var e=vt(function*(t,r,o){for(var s=o.placement,a=s===void 0?"bottom":s,i=o.strategy,l=i===void 0?"absolute":i,c=o.middleware,d=c===void 0?[]:c,u=o.platform,m=u.detectOverflow?u:be(be({},u),{},{detectOverflow:j0}),g=yield u.isRTL==null?void 0:u.isRTL(r),h=yield u.getElementRects({reference:t,floating:r,strategy:l}),y=$f(h,a,g),b=y.x,j=y.y,x=a,M=0,E={},q=0;q<d.length;q++){var k=d[q];if(k){var A=k.name,U=k.fn,F=yield U({x:b,y:j,initialPlacement:a,placement:x,strategy:l,middlewareData:E,rects:h,platform:m,elements:{reference:t,floating:r}}),S=F.x,J=F.y,Z=F.data,$=F.reset;if(b=S??b,j=J??j,E[A]=be(be({},E[A]),Z),$&&M<50){if(M++,typeof $=="object"){$.placement&&(x=$.placement),$.rects&&(h=$.rects===!0?yield u.getElementRects({reference:t,floating:r,strategy:l}):$.rects);var le=$f(h,x,g);b=le.x,j=le.y}q=-1}}}return{x:b,y:j,placement:x,strategy:l,middlewareData:E}});return function(t,r,o){return e.apply(this,arguments)}}(),x0=new Set(["left","top"]);function Dd(){return Dd=vt(function*(e,t){var r=e.placement,o=e.platform,s=e.elements,a=yield o.isRTL==null?void 0:o.isRTL(s.floating),i=Ni(r),l=cu(r),c=ts(r)==="y",d=x0.has(i)?-1:1,u=a&&c?-1:1,m=lu(t,e),g=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis},h=g.mainAxis,y=g.crossAxis,b=g.alignmentAxis;return l&&typeof b=="number"&&(y=l==="end"?-1*b:b),c?{x:y*u,y:h*d}:{x:h*d,y:y*u}}),Dd.apply(this,arguments)}function uu(){return typeof window<"u"}function Ii(e){return mm(e)?(e.nodeName||"").toLowerCase():"#document"}function po(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Wa(e){var t;return(t=(mm(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function mm(e){return!!uu()&&(e instanceof Node||e instanceof po(e).Node)}function da(e){return!!uu()&&(e instanceof Element||e instanceof po(e).Element)}function ps(e){return!!uu()&&(e instanceof HTMLElement||e instanceof po(e).HTMLElement)}function Hf(e){return!(!uu()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof po(e).ShadowRoot)}function du(e){var t=va(e),r=t.overflow,o=t.overflowX,s=t.overflowY,a=t.display;return/auto|scroll|overlay|hidden|clip/.test(r+s+o)&&a!=="inline"&&a!=="contents"}function w0(e){return/^(table|td|th)$/.test(Ii(e))}function Hc(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var Hu,k0=/transform|translate|scale|rotate|perspective|filter/,S0=/paint|layout|strict|content/,Os=e=>!!e&&e!=="none";function Bd(e){var t=da(e)?va(e):e;return Os(t.transform)||Os(t.translate)||Os(t.scale)||Os(t.rotate)||Os(t.perspective)||!Cv()&&(Os(t.backdropFilter)||Os(t.filter))||k0.test(t.willChange||"")||S0.test(t.contain||"")}function Cv(){return Hu==null&&(Hu=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Hu}function vl(e){return/^(html|body|#document)$/.test(Ii(e))}function va(e){return po(e).getComputedStyle(e)}function vu(e){return da(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ps(e){if(Ii(e)==="html")return e;var t=e.assignedSlot||e.parentNode||Hf(e)&&e.host||Wa(e);return Hf(t)?t.host:t}function gm(e){var t=Ps(e);return vl(t)?(e.ownerDocument||e).body:ps(t)&&du(t)?t:gm(t)}function Sl(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);var s=gm(e),a=s===((o=e.ownerDocument)==null?void 0:o.body),i=po(s);if(a){var l=Jd(i);return t.concat(i,i.visualViewport||[],du(s)?s:[],l&&r?Sl(l):[])}return t.concat(s,Sl(s,[],r))}function Jd(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function bm(e){var t=va(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,s=ps(e),a=s?e.offsetWidth:r,i=s?e.offsetHeight:o,l=Vc(r)!==a||Vc(o)!==i;return l&&(r=a,o=i),{width:r,height:o,$:l}}function Ov(e){return da(e)?e:e.contextElement}function bi(e){var t=Ov(e);if(!ps(t))return Ta(1);var r=t.getBoundingClientRect(),o=bm(t),s=o.width,a=o.height,i=o.$,l=(i?Vc(r.width):r.width)/s,c=(i?Vc(r.height):r.height)/a;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}var C0=Ta(0);function jm(e){var t=po(e);return Cv()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:C0}function Vs(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);var s=e.getBoundingClientRect(),a=Ov(e),i=Ta(1);t&&(o?da(o)&&(i=bi(o)):i=bi(e));var l=function(k,A,U){return A===void 0&&(A=!1),!!U&&A&&U===po(k)}(a,r,o)?jm(a):Ta(0),c=(s.left+l.x)/i.x,d=(s.top+l.y)/i.y,u=s.width/i.x,m=s.height/i.y;if(a&&o)for(var g=po(a),h=da(o)?po(o):o,y=g,b=Jd(y);b&&h!==y;){var j=bi(b),x=b.getBoundingClientRect(),M=va(b),E=x.left+(b.clientLeft+parseFloat(M.paddingLeft))*j.x,q=x.top+(b.clientTop+parseFloat(M.paddingTop))*j.y;c*=j.x,d*=j.y,u*=j.x,m*=j.y,c+=E,d+=q,b=Jd(y=po(b))}return $c({width:u,height:m,x:c,y:d})}function Qc(e,t){var r=vu(e).scrollLeft;return t?t.left+r:Vs(Wa(e)).left+r}function ym(e,t){var r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-Qc(e,r),y:r.top+t.scrollTop}}function Qf(e,t,r){var o;if(t==="viewport"||t==="layoutViewport")o=function(a,i,l){l===void 0&&(l="viewport");var c=l==="layoutViewport",d=po(a),u=Wa(a),m=d.visualViewport,g=u.clientWidth,h=u.clientHeight,y=0,b=0;if(m){var j=!Cv()||i==="fixed";c?j||(y=-m.offsetLeft,b=-m.offsetTop):(g=m.width,h=m.height,j&&(y=m.offsetLeft,b=m.offsetTop))}if(Qc(u)<=0){var x=u.ownerDocument,M=x.body,E=getComputedStyle(M),q=x.compatMode==="CSS1Compat"&&parseFloat(E.marginLeft)+parseFloat(E.marginRight)||0,k=Math.abs(u.clientWidth-M.clientWidth-q),A=getComputedStyle(u).scrollbarGutter==="stable both-edges"?k/2:k;A<=25&&(g-=A)}return{width:g,height:h,x:y,y:b}}(e,r,t);else if(t==="document")o=function(a){var i=vu(a),l=a.ownerDocument.body,c=Ds(a.scrollWidth,a.clientWidth,l.scrollWidth,l.clientWidth),d=Ds(a.scrollHeight,a.clientHeight,l.scrollHeight,l.clientHeight),u=-i.scrollLeft+Qc(a),m=-i.scrollTop;return va(l).direction==="rtl"&&(u+=Ds(a.clientWidth,l.clientWidth)-c),{width:c,height:d,x:u,y:m}}(Wa(e));else if(da(t))o=function(a,i){var l=Vs(a,!0,i==="fixed"),c=l.top+a.clientTop,d=l.left+a.clientLeft,u=bi(a);return{width:a.clientWidth*u.x,height:a.clientHeight*u.y,x:d*u.x,y:c*u.y}}(t,r);else{var s=jm(e);o={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return $c(o)}function O0(e,t,r){var o=ps(t),s=Wa(t),a=r==="fixed",i=Vs(e,!0,a,t),l={scrollLeft:0,scrollTop:0},c=Ta(0);if((o||!a)&&((Ii(t)!=="body"||du(s))&&(l=vu(t)),o)){var d=Vs(t,!0,a,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}!o&&s&&(c.x=Qc(s));var u=!s||o||a?Ta(0):ym(s,l);return{x:i.left+l.scrollLeft-c.x-u.x,y:i.top+l.scrollTop-c.y-u.y,width:i.width,height:i.height}}function Qu(e){return va(e).position==="static"}function Kf(e,t){if(!ps(e)||va(e).position==="fixed")return null;if(t)return t(e);var r=e.offsetParent;return Wa(e)===r&&(r=r.ownerDocument.body),r}function Yf(e,t){var r=po(e);if(Hc(e))return r;if(!ps(e)){for(var o=Ps(e);o&&!vl(o);){if(da(o)&&!Qu(o))return o;o=Ps(o)}return r}for(var s=Kf(e,t);s&&w0(s)&&Qu(s);)s=Kf(s,t);return s&&vl(s)&&Qu(s)&&!Bd(s)?r:s||function(a){for(var i=Ps(a);ps(i)&&!vl(i);){if(Bd(i))return i;if(Hc(i))return null;i=Ps(i)}return null}(e)||r}var M0={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var t=e.elements,r=e.rect,o=e.offsetParent,s=e.strategy==="fixed",a=Wa(o),i=!!t&&Hc(t.floating);if(o===a||i&&s)return r;var l={scrollLeft:0,scrollTop:0},c=Ta(1),d=Ta(0),u=ps(o);if((u||!s)&&((Ii(o)!=="body"||du(a))&&(l=vu(o)),u)){var m=Vs(o);c=bi(o),d.x=m.x+o.clientLeft,d.y=m.y+o.clientTop}var g=!a||u||s?Ta(0):ym(a,l);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+d.x+g.x,y:r.y*c.y-l.scrollTop*c.y+d.y+g.y}},getDocumentElement:Wa,getClippingRect:function(e){for(var t=e.element,r=e.boundary,o=e.rootBoundary,s=e.strategy,a=r==="clippingAncestors"?Hc(t)?[]:function(y,b){var j=b.get(y);if(j)return j;for(var x=Sl(y,[],!1).filter(F=>da(F)&&Ii(F)!=="body"),M=null,E=va(y).position==="fixed",q=E?Ps(y):y;da(q)&&!vl(q);){var k=va(q),A=Bd(q),U=M?M.position:E?"fixed":"";A||U!=="fixed"&&(U!=="absolute"||k.position!=="static")?M=k:x=x.filter(F=>F!==q),q=Ps(q)}return b.set(y,x),x}(t,this._c):[].concat(r),i=[...a,o],l=Qf(t,i[0],s),c=l.top,d=l.right,u=l.bottom,m=l.left,g=1;g<i.length;g++){var h=Qf(t,i[g],s);c=Ds(h.top,c),d=_c(h.right,d),u=_c(h.bottom,u),m=Ds(h.left,m)}return{width:d-m,height:u-c,x:m,y:c}},getOffsetParent:Yf,getElementRects:function(){var e=vt(function*(t){var r=this.getOffsetParent||Yf,o=this.getDimensions,s=yield o(t.floating);return{reference:O0(t.reference,yield r(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return e.getClientRects?Array.from(e.getClientRects()):[]},getDimensions:function(e){var t=bm(e);return{width:t.width,height:t.height}},getScale:bi,isElement:da,isRTL:function(e){return va(e).direction==="rtl"}};function Gf(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function z0(e,t,r,o){o===void 0&&(o={});var s=o,a=s.ancestorScroll,i=a===void 0||a,l=s.ancestorResize,c=l===void 0||l,d=s.elementResize,u=d===void 0?typeof ResizeObserver=="function":d,m=s.layoutShift,g=m===void 0?typeof IntersectionObserver=="function":m,h=s.animationFrame,y=h!==void 0&&h,b=Ov(e),j=i||c?[...b?Sl(b):[],...t?Sl(t):[]]:[];j.forEach(A=>{i&&A.addEventListener("scroll",r),c&&A.addEventListener("resize",r)});var x,M=b&&g?function(A,U,F){var S,J=null,Z=Wa(A);function $(){var Me;clearTimeout(S),(Me=J)==null||Me.disconnect(),J=null}function le(Me,de){Me===void 0&&(Me=!1),de===void 0&&(de=1),$();var Ee=A.getBoundingClientRect(),Se=Ee.left,Ke=Ee.top,Ae=Ee.width,Re=Ee.height;if(Me||U(),Ae&&Re){var se={rootMargin:-ac(Ke)+"px "+-ac(Z.clientWidth-(Se+Ae))+"px "+-ac(Z.clientHeight-(Ke+Re))+"px "+-ac(Se)+"px",threshold:Ds(0,_c(1,de))||1},ce=!0;try{J=new IntersectionObserver(me,be(be({},se),{},{root:Z.ownerDocument}))}catch{J=new IntersectionObserver(me,se)}J.observe(A)}function me(we){var Ce=we[0].intersectionRatio;if(!Gf(Ee,A.getBoundingClientRect()))return le();if(Ce!==de){if(!ce)return le();Ce?le(!1,Ce):S=setTimeout(()=>{le(!1,1e-7)},1e3)}ce=!1}}var G=po(A),qe=()=>le(F);return G.addEventListener("resize",qe),le(!0),()=>{G.removeEventListener("resize",qe),$()}}(b,r,c):null,E=-1,q=null;u&&(q=new ResizeObserver(A=>{var U=so(A,1)[0];U&&U.target===b&&q&&t&&(q.unobserve(t),cancelAnimationFrame(E),E=requestAnimationFrame(()=>{var F;(F=q)==null||F.observe(t)})),r()}),b&&!y&&q.observe(b),t&&q.observe(t));var k=y?Vs(e):null;return y&&function A(){var U=Vs(e);k&&!Gf(k,U)&&r(),k=U,x=requestAnimationFrame(A)}(),r(),()=>{var A;j.forEach(U=>{i&&U.removeEventListener("scroll",r),c&&U.removeEventListener("resize",r)}),M?.(),(A=q)==null||A.disconnect(),q=null,y&&cancelAnimationFrame(x)}}var q0=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:t=>vt(function*(){var r,o,s=t.x,a=t.y,i=t.placement,l=t.middlewareData,c=yield function(d,u){return Dd.apply(this,arguments)}(t,e);return i===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:a+c.y,data:be(be({},c),{},{placement:i})}})()}},E0=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:t=>vt(function*(){var r=t.x,o=t.y,s=t.placement,a=t.platform,i=lu(e,t),l=i.mainAxis,c=l===void 0||l,d=i.crossAxis,u=d!==void 0&&d,m=i.limiter,g=m===void 0?{fn:A=>({x:A.x,y:A.y})}:m,h=Sp(i,wb),y={x:r,y:o},b=yield a.detectOverflow(t,h),j=ts(s),x=fm(j),M=y[x],E=y[j],q=(A,U)=>{return F=U+b[A==="y"?"top":"left"],S=U,J=U-b[A==="y"?"bottom":"right"],Ds(F,_c(S,J));var F,S,J};c&&(M=q(x,M)),u&&(E=q(j,E));var k=g.fn(be(be({},t),{},{[x]:M,[j]:E}));return be(be({},k),{},{data:{x:k.x-r,y:k.y-o,enabled:{[x]:c,[j]:u}}})})()}},A0=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:t=>vt(function*(){var r,o,s=t.placement,a=t.middlewareData,i=t.rects,l=t.initialPlacement,c=t.platform,d=t.elements,u=lu(e,t),m=u.mainAxis,g=m===void 0||m,h=u.crossAxis,y=h===void 0||h,b=u.fallbackPlacements,j=u.fallbackStrategy,x=j===void 0?"bestFit":j,M=u.fallbackAxisSideDirection,E=M===void 0?"none":M,q=u.flipAlignment,k=q===void 0||q,A=Sp(u,xb);if((r=a.arrow)!=null&&r.alignmentOffset)return{};var U=Ni(s),F=ts(l),S=Ni(l)===l,J=yield c.isRTL==null?void 0:c.isRTL(d.floating),Z=b||(S||!k?[sc(l)]:function(me){var we=sc(me);return[Id(me),we,Id(we)]}(l)),$=E!=="none";!b&&$&&Z.push(...b0(l,k,E,J));var le=[l,...Z],G=yield c.detectOverflow(t,A),qe=[],Me=((o=a.flip)==null?void 0:o.overflows)||[];if(g&&qe.push(G[U]),y){var de=function(me,we,Ce){Ce===void 0&&(Ce=!1);var Ot=cu(me),Qt=hm(me),on=pm(Qt),V=Qt==="x"?Ot===(Ce?"end":"start")?"right":"left":Ot==="start"?"bottom":"top";return we.reference[on]>we.floating[on]&&(V=sc(V)),[V,sc(V)]}(s,i,J);qe.push(G[de[0]],G[de[1]])}if(Me=[...Me,{placement:s,overflows:qe}],!qe.every(me=>me<=0)){var Ee,Se,Ke=(((Ee=a.flip)==null?void 0:Ee.index)||0)+1,Ae=le[Ke];if(Ae&&(!(y==="alignment"&&F!==ts(Ae))||Me.every(me=>ts(me.placement)!==F||me.overflows[0]>0)))return{data:{index:Ke,overflows:Me},reset:{placement:Ae}};var Re=(Se=Me.filter(me=>me.overflows[0]<=0).sort((me,we)=>me.overflows[1]-we.overflows[1])[0])==null?void 0:Se.placement;if(!Re)switch(x){case"bestFit":var se,ce=(se=Me.filter(me=>{if($){var we=ts(me.placement);return we===F||we==="y"}return!0}).map(me=>[me.placement,me.overflows.filter(we=>we>0).reduce((we,Ce)=>we+Ce,0)]).sort((me,we)=>me[1]-we[1])[0])==null?void 0:se[0];ce&&(Re=ce);break;case"initialPlacement":Re=l}if(s!==Re)return{reset:{placement:Re}}}return{}})()}};function P0(e){var t,r,o={autoUpdate:!0},s=e,a=c=>be(be(be({},o),e||{}),c||{}),i=c=>{t&&r&&(s=a(c),((d,u,m)=>{var g=new Map,h=m??{},y=be(be(be({},M0),h.platform),{},{_c:g});return y0(d,u,be(be({},h),{},{platform:y}))})(t,r,s).then(d=>{var u;Object.assign(r.style,{position:d.strategy,left:"".concat(d.x,"px"),top:"".concat(d.y,"px")}),!((u=s)===null||u===void 0)&&u.onComputed&&s.onComputed(d)}))},l=c=>{Do(c.subscribe(d=>{t===void 0?(t=d,i()):(Object.assign(t,d),i())}))};return[c=>{if("subscribe"in c)return l(c),{};t=c,i()},(c,d)=>{var u;r=c,s=a(d),setTimeout(()=>i(d),0),i(d);var m=()=>{u&&(u(),u=void 0)},g=function(){var h=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:s||{}).autoUpdate;m(),h!==!1&&yh().then(()=>z0(t,r,()=>i(s),h===!0?{}:h))};return u=g(),{update(h){i(h),u=g(h)},destroy(){m()}}},i]}function R0(e){var t=e.loadOptions,r=e.filterText,o=e.items,s=e.multiple,a=e.value,i=e.itemId,l=e.groupBy,c=e.filterSelectedItems,d=e.itemFilter,u=e.convertStringItemsToObjects,m=e.filterGroupedItems,g=e.label;if(o&&t)return o;if(!o)return[];o&&o.length>0&&typeof o[0]!="object"&&(o=u(o));var h=o.filter(y=>{var b=d(y[g],r,y);return b&&s&&a!=null&&a.length&&(b=!a.some(j=>!!c&&j[i]===y[i])),b});return l&&(h=m(h)),h}function T0(e){return xm.apply(this,arguments)}function xm(){return(xm=vt(function*(e){var t=e.dispatch,r=e.loadOptions,o=e.convertStringItemsToObjects,s=e.filterText,a=yield r(s).catch(i=>{console.warn("svelte-select loadOptions error :>> ",i),t("error",{type:"loadOptions",details:i})});if(a&&!a.cancelled)return a?(a&&a.length>0&&typeof a[0]!="object"&&(a=o(a)),t("loaded",{items:a})):a=[],{filteredItems:a,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}xt(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var N0=gs(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);xt(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var I0=gs(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function Ku(e){N(e,I0())}xt(`
    .loading.svelte-y9fi5p {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-y9fi5p-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-y9fi5p {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-y9fi5p-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);var U0=gs('<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');xt(`
    .svelte-select.svelte-1ul7oo4 {
        /* deprecating camelCase custom props in favour of kebab-case for v5 */
        --borderRadius: var(--border-radius);
        --clearSelectColor: var(--clear-select-color);
        --clearSelectWidth: var(--clear-select-width);
        --disabledBackground: var(--disabled-background);
        --disabledBorderColor: var(--disabled-border-color);
        --disabledColor: var(--disabled-color);
        --disabledPlaceholderColor: var(--disabled-placeholder-color);
        --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
        --errorBackground: var(--error-background);
        --errorBorder: var(--error-border);
        --groupItemPaddingLeft: var(--group-item-padding-left);
        --groupTitleColor: var(--group-title-color);
        --groupTitleFontSize: var(--group-title-font-size);
        --groupTitleFontWeight: var(--group-title-font-weight);
        --groupTitlePadding: var(--group-title-padding);
        --groupTitleTextTransform: var(--group-title-text-transform);
        --groupTitleBorderColor: var(--group-title-border-color);
        --groupTitleBorderWidth: var(--group-title-border-width);
        --groupTitleBorderStyle: var(--group-title-border-style);
        --indicatorColor: var(--chevron-color);
        --indicatorHeight: var(--chevron-height);
        --indicatorWidth: var(--chevron-width);
        --inputColor: var(--input-color);
        --inputLeft: var(--input-left);
        --inputLetterSpacing: var(--input-letter-spacing);
        --inputMargin: var(--input-margin);
        --inputPadding: var(--input-padding);
        --itemActiveBackground: var(--item-active-background);
        --itemColor: var(--item-color);
        --itemFirstBorderRadius: var(--item-first-border-radius);
        --itemHoverBG: var(--item-hover-bg);
        --itemHoverColor: var(--item-hover-color);
        --itemIsActiveBG: var(--item-is-active-bg);
        --itemIsActiveColor: var(--item-is-active-color);
        --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
        --itemPadding: var(--item-padding);
        --listBackground: var(--list-background);
        --listBorder: var(--list-border);
        --listBorderRadius: var(--list-border-radius);
        --listEmptyColor: var(--list-empty-color);
        --listEmptyPadding: var(--list-empty-padding);
        --listEmptyTextAlign: var(--list-empty-text-align);
        --listMaxHeight: var(--list-max-height);
        --listPosition: var(--list-position);
        --listShadow: var(--list-shadow);
        --listZIndex: var(--list-z-index);
        --multiItemBG: var(--multi-item-bg);
        --multiItemBorderRadius: var(--multi-item-border-radius);
        --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
        --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
        --multiItemHeight: var(--multi-item-height);
        --multiItemMargin: var(--multi-item-margin);
        --multiItemPadding: var(--multi-item-padding);
        --multiSelectInputMargin: var(--multi-select-input-margin);
        --multiSelectInputPadding: var(--multi-select-input-padding);
        --multiSelectPadding: var(--multi-select-padding);
        --placeholderColor: var(--placeholder-color);
        --placeholderOpacity: var(--placeholder-opacity);
        --selectedItemPadding: var(--selected-item-padding);
        --spinnerColor: var(--spinner-color);
        --spinnerHeight: var(--spinner-height);
        --spinnerWidth: var(--spinner-width);

        --internal-padding: 0 0 0 16px;

        border: var(--border, 1px solid #d8dbdf);
        border-radius: var(--border-radius, 6px);
        min-height: var(--height, 42px);
        position: relative;
        display: flex;
        align-items: stretch;
        padding: var(--padding, var(--internal-padding));
        background: var(--background, #fff);
        margin: var(--margin, 0);
        width: var(--width, 100%);
        font-size: var(--font-size, 16px);
        max-height: var(--max-height);
    }

    .svelte-1ul7oo4 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-1ul7oo4:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-1ul7oo4 {
        display: flex;
        flex: 1 1 0%;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        padding: var(--value-container-padding, 5px 0);
        position: relative;
        overflow: var(--value-container-overflow, hidden);
        align-self: stretch;
    }

    .prepend.svelte-1ul7oo4,
    .indicators.svelte-1ul7oo4 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-1ul7oo4 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-1ul7oo4 {
        position: absolute;
        cursor: default;
        border: none;
        color: var(--input-color, var(--item-color));
        padding: var(--input-padding, 0);
        letter-spacing: var(--input-letter-spacing, inherit);
        margin: var(--input-margin, 0);
        min-width: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        font-size: var(--font-size, 16px);
    }

    .svelte-1ul7oo4:not(.multi) > .value-container:where(.svelte-1ul7oo4) > input:where(.svelte-1ul7oo4) {
        width: 100%;
        height: 100%;
    }

    input.svelte-1ul7oo4::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-1ul7oo4:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-1ul7oo4 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-1ul7oo4 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-1ul7oo4 input:where(.svelte-1ul7oo4)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-1ul7oo4 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-1ul7oo4 .selected-item:where(.svelte-1ul7oo4) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-1ul7oo4:focus {
        outline: none;
    }

    .hide-selected-item.svelte-1ul7oo4 {
        opacity: 0;
    }

    .icon.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-1ul7oo4 {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--clear-select-width, 40px);
        height: var(--clear-select-height, 100%);
        color: var(--clear-select-color, var(--icons-color));
        margin: var(--clear-select-margin, 0);
        pointer-events: all;
        flex-shrink: 0;
    }

    .clear-select.svelte-1ul7oo4:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-1ul7oo4 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-1ul7oo4 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-1ul7oo4 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-1ul7oo4 input:where(.svelte-1ul7oo4) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-1ul7oo4 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-1ul7oo4 {
        z-index: 9999;
        border: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        white-space: nowrap;
    }

    .multi-item.svelte-1ul7oo4 {
        background: var(--multi-item-bg, #ebedef);
        margin: var(--multi-item-margin, 0);
        outline: var(--multi-item-outline, 1px solid #ddd);
        border-radius: var(--multi-item-border-radius, 4px);
        height: var(--multi-item-height, 25px);
        line-height: var(--multi-item-height, 25px);
        display: flex;
        cursor: default;
        padding: var(--multi-item-padding, 0 5px);
        overflow: hidden;
        gap: var(--multi-item-gap, 4px);
        outline-offset: -1px;
        max-width: var(--multi-max-width, none);
        color: var(--multi-item-color, var(--item-color));
    }

    .multi-item.disabled.svelte-1ul7oo4:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-1ul7oo4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-1ul7oo4 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-1ul7oo4 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-1ul7oo4 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-1ul7oo4 {
        color: var(--group-title-color, #8f8f8f);
        cursor: default;
        font-size: var(--group-title-font-size, 16px);
        font-weight: var(--group-title-font-weight, 600);
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--group-title-padding, 0 20px);
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
        text-transform: var(--group-title-text-transform, uppercase);
        border-width: var(--group-title-border-width, medium);
        border-style: var(--group-title-border-style, none);
        border-color: var(--group-title-border-color, color);
    }

    .empty.svelte-1ul7oo4 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-1ul7oo4 {
        cursor: default;
        height: var(--item-height, var(--height, 42px));
        line-height: var(--item-line-height, var(--height, 42px));
        padding: var(--item-padding, 0 20px);
        color: var(--item-color, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--item-transition, all 0.2s);
        align-items: center;
        width: 100%;
    }

    .item.group-item.svelte-1ul7oo4 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-1ul7oo4:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-1ul7oo4 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-1ul7oo4 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-1ul7oo4:not(.active) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-1ul7oo4,
    .item.hover.item.not-selectable.svelte-1ul7oo4,
    .item.active.item.not-selectable.svelte-1ul7oo4,
    .item.not-selectable.svelte-1ul7oo4:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-1ul7oo4 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);var D0=Y('<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>'),B0=Y('<div class="empty svelte-1ul7oo4">No options</div>'),J0=Y('<div role="none"><!> <!> <!></div>'),L0=Y('<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>',1),W0=Y('<div class="multi-item-clear svelte-1ul7oo4"><!></div>'),F0=Y('<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>'),_0=Y("<div><!></div>"),V0=Y('<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>'),$0=Y('<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>'),H0=Y('<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>'),Q0=Y('<input type="hidden" class="svelte-1ul7oo4"/>'),K0=Y('<select class="required svelte-1ul7oo4" required="" tabindex="-1" aria-hidden="true"></select>'),Y0=Y('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>');function qs(e,t){var r=function(w){var I={};for(var Q in w.children&&(I.default=!0),w.$$slots)I[Q]=!0;return I}(t);ot(t,!1);var o,s=P(),a=P(),i=P(),l=P(),c=P(),d=P(),u=P(),m=P(),g=P(),h=Qb(),y=v(t,"justValue",12,null),b=v(t,"filter",8,R0),j=v(t,"getItems",8,T0),x=v(t,"id",8,null),M=v(t,"name",8,null),E=v(t,"container",12,void 0),q=v(t,"input",12,void 0),k=v(t,"multiple",8,!1),A=v(t,"multiFullItemClearable",8,!1),U=v(t,"disabled",8,!1),F=v(t,"focused",12,!1),S=v(t,"value",12,null),J=v(t,"filterText",12,""),Z=v(t,"placeholder",8,"Please select"),$=v(t,"placeholderAlwaysShow",8,!1),le=v(t,"items",12,null),G=v(t,"label",8,"label"),qe=v(t,"itemFilter",8,(w,I,Q)=>"".concat(w).toLowerCase().includes(I.toLowerCase())),Me=v(t,"groupBy",8,void 0),de=v(t,"groupFilter",8,w=>w),Ee=v(t,"groupHeaderSelectable",8,!1),Se=v(t,"itemId",8,"value"),Ke=v(t,"loadOptions",8,void 0),Ae=v(t,"containerStyles",8,""),Re=v(t,"hasError",8,!1),se=v(t,"filterSelectedItems",8,!0),ce=v(t,"required",8,!1),me=v(t,"closeListOnChange",8,!0),we=v(t,"clearFilterTextOnBlur",8,!0),Ce=v(t,"createGroupHeaderItem",8,(w,I)=>({value:w,[G()]:w})),Ot=()=>n(u),Qt=v(t,"searchable",8,!0),on=v(t,"inputStyles",8,""),V=v(t,"clearable",8,!0),_=v(t,"loading",12,!1),O=v(t,"listOpen",12,!1),K=v(t,"debounce",8,function(w){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(o),o=setTimeout(w,I)}),te=v(t,"debounceWait",8,300),ze=v(t,"hideEmptyState",8,!1),X=v(t,"inputAttributes",24,()=>({})),B=v(t,"listAutoWidth",8,!0),Be=v(t,"showChevron",8,!1),Bt=v(t,"listOffset",8,5),Ne=v(t,"hoverItemIndex",12,0),tt=v(t,"floatingConfig",24,()=>({})),it=v(t,"class",8,""),ye=P(),nt=P(),Et=P(),mn=P(),Nt=P();function ft(w){return w.map((I,Q)=>({index:Q,value:I,label:"".concat(I)}))}function Kt(w){var I=[],Q={};w.forEach(Pe=>{var Te=Me()(Pe);I.includes(Te)||(I.push(Te),Q[Te]=[],Te&&Q[Te].push(Object.assign(Ce()(Te,Pe),{id:Te,groupHeader:!0,selectable:Ee()}))),Q[Te].push(Object.assign({groupItem:!!Te},Pe))});var Oe=[];return de()(I).forEach(Pe=>{Q[Pe]&&Oe.push(...Q[Pe])}),Oe}function ke(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,I=arguments.length>1?arguments[1]:void 0;Ne(w<0?0:w),!I&&Me()&&n(u)[Ne()]&&!n(u)[Ne()].selectable&&Mt(1)}function He(){var w=!0;if(S()){var I=[],Q=[];S().forEach(Oe=>{I.includes(Oe[Se()])?w=!1:(I.push(Oe[Se()]),Q.push(Oe))}),w||S(Q)}return w}function Je(w){var I=w?w[Se()]:S()[Se()];return le().find(Q=>Q[Se()]===I)}function Ye(w){return Ie.apply(this,arguments)}function Ie(){return(Ie=vt(function*(w){var I=S()[w];S().length===1?S(void 0):S(S().filter(Q=>Q!==I)),h("clear",I)})).apply(this,arguments)}function re(w){if(F())switch(w.stopPropagation(),w.key){case"Escape":w.preventDefault(),Gt();break;case"Enter":if(w.preventDefault(),O()){if(n(u).length===0)break;var I=n(u)[Ne()];if(S()&&!k()&&S()[Se()]===I[Se()]){Gt();break}ut(n(u)[Ne()])}break;case"ArrowDown":w.preventDefault(),O()?Mt(1):(O(!0),f(ye,void 0));break;case"ArrowUp":w.preventDefault(),O()?Mt(-1):(O(!0),f(ye,void 0));break;case"Tab":if(O()&&F()){if(n(u).length===0||S()&&S()[Se()]===n(u)[Ne()][Se()])return Gt();w.preventDefault(),ut(n(u)[Ne()]),Gt()}break;case"Backspace":if(!k()||J().length>0)return;if(k()&&S()&&S().length>0){if(Ye(n(ye)!==void 0?n(ye):S().length-1),n(ye)===0||n(ye)===void 0)break;f(ye,S().length>n(ye)?n(ye)-1:void 0)}break;case"ArrowLeft":if(!S()||!k()||J().length>0)return;n(ye)===void 0?f(ye,S().length-1):S().length>n(ye)&&n(ye)!==0&&f(ye,n(ye)-1);break;case"ArrowRight":if(!S()||!k()||J().length>0||n(ye)===void 0)return;n(ye)===S().length-1?f(ye,void 0):n(ye)<S().length-1&&f(ye,n(ye)+1)}}function Yt(w){var I,Q;F()&&q()===((I=document)===null||I===void 0?void 0:I.activeElement)||(w&&h("focus",w),(Q=q())===null||Q===void 0||Q.focus(),F(!0))}function ue(w){return bt.apply(this,arguments)}function bt(){return(bt=vt(function*(w){var I;Nn||(O()||F())&&(h("blur",w),Gt(),F(!1),f(ye,void 0),(I=q())===null||I===void 0||I.blur())})).apply(this,arguments)}function En(){if(!U())return J().length>0?O(!0):void O(!O())}function tr(){h("clear",S()),S(void 0),Gt(),Yt()}function Gt(){we()&&J(""),O(!1)}Kb(vt(function*(){f(nt,S()),f(Et,J()),f(mn,k())})),Xr(()=>{O()&&F(!0),F()&&q()&&q().focus()});var Ln=v(t,"ariaValues",8,w=>"Option ".concat(w,", selected.")),Tn=v(t,"ariaListOpen",8,(w,I)=>"You are currently focused on option ".concat(w,". There are ").concat(I," results available.")),vr=v(t,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),yr,Xe=P(null);function ct(){clearTimeout(yr),yr=setTimeout(()=>{Nn=!1},100)}Do(()=>{var w;(w=n(Xe))===null||w===void 0||w.remove()});var Nn=!1;function ut(w){w&&w.selectable!==!1&&function(I){if(I){J("");var Q=Object.assign({},I);if(Q.groupHeader&&!Q.selectable)return;S(k()?S()?S().concat([Q]):[Q]:S(Q)),setTimeout(()=>{me()&&Gt(),f(ye,void 0),h("change",S()),h("select",I)})}}(w)}function fn(w){Nn||Ne(w)}function Mt(w){if(n(u).filter(Q=>!Object.hasOwn(Q,"selectable")||Q.selectable===!0).length===0)return Ne(0);w>0&&Ne()===n(u).length-1?Ne(0):w<0&&Ne()===0?Ne(n(u).length-1):Ne(Ne()+w);var I=n(u)[Ne()];I&&I.selectable===!1&&(w!==1&&w!==-1||Mt(w))}function In(w,I,Q){if(!k())return I&&I[Q]===w[Q]}var yn=gn,Rt=gn;function gn(w){return{update(I){I.scroll&&(ct(),w.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var Gn=P({strategy:"absolute",placement:"bottom-start",middleware:[q0(Bt()),A0(),E0()],autoUpdate:!1}),An=so(P0(n(Gn)),3),Un=An[0],Dn=An[1],fr=An[2],jr=P(!0);W(()=>(p(le()),p(S())),()=>{le(),S()&&function(){if(typeof S()=="string"){var w=(le()||[]).find(I=>I[Se()]===S());S(w||{[Se()]:S(),label:S()})}else k()&&Array.isArray(S())&&S().length>0&&S(S().map(I=>typeof I=="string"?{value:I,label:I}:I))}()}),W(()=>(p(X()),p(Qt())),()=>{!X()&&Qt()||(f(Nt,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},X())),x()&&xo(Nt,n(Nt).id=x()),Qt()||xo(Nt,n(Nt).readonly=!0))}),W(()=>p(k()),()=>{k()&&S()&&(Array.isArray(S())?S([...S()]):S([S()]))}),W(()=>(n(mn),p(k())),()=>{n(mn)&&!k()&&S()&&S(null)}),W(()=>(p(k()),p(S())),()=>{k()&&S()&&S().length>1&&He()}),W(()=>p(S()),()=>{S()&&(k()?JSON.stringify(S())!==JSON.stringify(n(nt))&&He()&&h("input",S()):n(nt)&&JSON.stringify(S()[Se()])===JSON.stringify(n(nt)[Se()])||h("input",S()))}),W(()=>(p(S()),p(k()),n(nt)),()=>{!S()&&k()&&n(nt)&&h("input",S())}),W(()=>(p(F()),p(q())),()=>{!F()&&q()&&Gt()}),W(()=>(p(J()),n(Et)),()=>{J()!==n(Et)&&(Ke()||J().length!==0)&&(Ke()?K()(vt(function*(){_(!0);var w=yield j()({dispatch:h,loadOptions:Ke(),convertStringItemsToObjects:ft,filterText:J()});w?(_(w.loading),O(O()?w.listOpen:J().length>0),F(O()&&w.focused),le(Me()?Kt(w.filteredItems):w.filteredItems)):(_(!1),F(!0),O(!0))}),te()):(O(!0),k()&&f(ye,void 0)))}),W(()=>(p(b()),p(Ke()),p(J()),p(le()),p(k()),p(S()),p(Se()),p(Me()),p(G()),p(se()),p(qe())),()=>{f(u,b()({loadOptions:Ke(),filterText:J(),items:le(),multiple:k(),value:S(),itemId:Se(),groupBy:Me(),label:G(),filterSelectedItems:se(),itemFilter:qe(),convertStringItemsToObjects:ft,filterGroupedItems:Kt}))}),W(()=>(p(k()),p(O()),p(S()),n(u)),()=>{!k()&&O()&&S()&&n(u)&&ke(n(u).findIndex(w=>w[Se()]===S()[Se()]),!0)}),W(()=>(p(O()),p(k())),()=>{O()&&k()&&Ne(0)}),W(()=>p(J()),()=>{J()&&Ne(0)}),W(()=>p(Ne()),()=>{var w;w=Ne(),h("hoverItem",w)}),W(()=>(p(k()),p(S())),()=>{f(s,k()?S()&&S().length>0:S())}),W(()=>(n(s),p(J())),()=>{f(a,n(s)&&J().length>0)}),W(()=>(n(s),p(V()),p(U()),p(_())),()=>{f(i,n(s)&&V()&&!U()&&!_())}),W(()=>(p($()),p(k()),p(Z()),p(S())),()=>{var w;f(l,$()&&k()||k()&&((w=S())===null||w===void 0?void 0:w.length)===0?Z():S()?"":Z())}),W(()=>(p(S()),p(k())),()=>{var w,I;f(c,S()?(w=k(),I=void 0,I=w&&S().length>0?S().map(Q=>Q[G()]).join(", "):S()[G()],Ln()(I)):"")}),W(()=>(n(u),p(Ne()),p(F()),p(O())),()=>{f(d,function(){if(!n(u)||n(u).length===0)return"";var w=n(u)[Ne()];if(O()&&w){var I=n(u)?n(u).length:0;return Tn()(w[G()],I)}return vr()()}((n(u),Ne(),F(),O())))}),W(()=>p(le()),()=>{(function(w){w&&w.length!==0&&!w.some(I=>typeof I!="object")&&S()&&(k()?!S().some(I=>!I||!I[Se()]):S()[Se()])&&(Array.isArray(S())?S(S().map(I=>Je(I)||I)):S(Je()||S()))})(le())}),W(()=>(p(k()),p(S()),p(Se())),()=>{y((k(),S(),Se(),k()?S()?S().map(w=>w[Se()]):null:S()?S()[Se()]:S()))}),W(()=>(p(k()),n(nt),p(S())),()=>{k()||!n(nt)||S()||h("input",S())}),W(()=>(p(O()),n(u),p(k()),p(S())),()=>{O()&&n(u)&&!k()&&!S()&&ke()}),W(()=>n(u),()=>{(function(w){O()&&h("filter",w)})(n(u))}),W(()=>(p(E()),p(tt()),n(Gn)),()=>{E()&&tt()&&fr(Object.assign(n(Gn),tt()))}),W(()=>n(Xe),()=>{f(m,!!n(Xe))}),W(()=>(n(Xe),p(O())),()=>{(function(w,I){if(!w||!I)return f(jr,!0);setTimeout(()=>{f(jr,!1)},0)})(n(Xe),O())}),W(()=>(p(O()),p(E()),n(Xe)),()=>{var w;O()&&E()&&n(Xe)&&(w=E().getBoundingClientRect().width,xo(Xe,n(Xe).style.width=B()?w+"px":"auto"))}),W(()=>p(Ne()),()=>{f(g,Ne())}),W(()=>(p(q()),p(O()),p(F())),()=>{q()&&O()&&!F()&&Yt()}),W(()=>(p(E()),p(tt())),()=>{var w;E()&&((w=tt())===null||w===void 0?void 0:w.autoUpdate)===void 0&&xo(Gn,n(Gn).autoUpdate=!0)}),jn();var pr={getFilteredItems:Ot,handleClear:tr};kt();var Pn,Wn=Y0();fe("click",Aa,function(w){var I;O()||F()||!E()||E().contains(w.target)||(I=n(Xe))!==null&&I!==void 0&&I.contains(w.target)||ue()}),fe("keydown",Aa,re);var nr=R(Wn),Fr=w=>{var I,Q=J0(),Oe=R(Q),Pe=rt=>{var Ft=ir();dr(dt(Ft),t,"list-prepend",{},null),N(rt,Ft)};ne(Oe,rt=>{T(()=>r["list-prepend"])&&rt(Pe)});var Te=D(Oe,2),Le=rt=>{var Ft=ir();dr(dt(Ft),t,"list",{get filteredItems(){return n(u)}},null),N(rt,Ft)},mt=rt=>{var Ft=ir();lr(dt(Ft),1,()=>n(u),br,(Bn,On,xn)=>{var Qn,Zt=D0(),Fe=R(Zt);dr(R(Fe),t,"item",{get item(){return n(On)},index:xn},an=>{var pt=Hr();je(()=>st(pt,(n(On),p(G()),T(()=>{var or;return(or=n(On))===null||or===void 0?void 0:or[G()]})))),N(an,pt)}),oo(Fe,(an,pt)=>yn?.(an),()=>({scroll:In(n(On),S(),Se()),listDom:n(m)})),oo(Fe,(an,pt)=>Rt?.(an),()=>({scroll:n(g)===xn,listDom:n(m)})),je(an=>Qn=wt(Fe,1,"item svelte-1ul7oo4",null,Qn,an),[()=>{var an,pt;return{"list-group-title":n(On).groupHeader,active:In(n(On),S(),Se()),first:(pt=xn,pt===0),hover:Ne()===xn,"group-item":n(On).groupItem,"not-selectable":((an=n(On))===null||an===void 0?void 0:an.selectable)===!1}}]),fe("mouseover",Zt,()=>fn(xn)),fe("focus",Zt,()=>fn(xn)),fe("click",Zt,wa(()=>function(an){var pt=an.item,or=an.i;if(pt?.selectable!==!1)return S()&&!k()&&S()[Se()]===pt[Se()]?Gt():void(function(ar){return ar.groupHeader&&ar.selectable||ar.selectable||!ar.hasOwnProperty("selectable")}(pt)&&(Ne(or),ut(pt)))}({item:n(On),i:xn}))),fe("keydown",Zt,Va(wa(function(an){al.call(this,t,an)}))),N(Bn,Zt)}),N(rt,Ft)},zt=rt=>{var Ft=ir();dr(dt(Ft),t,"empty",{},Bn=>{N(Bn,B0())}),N(rt,Ft)};ne(Te,rt=>{T(()=>r.list)?rt(Le):(n(u),T(()=>n(u).length>0)?rt(mt,1):ze()||rt(zt,2))});var Ze=D(Te,2),Cn=rt=>{var Ft=ir();dr(dt(Ft),t,"list-append",{},null),N(rt,Ft)};ne(Ze,rt=>{T(()=>r["list-append"])&&rt(Cn)}),oo(Q,rt=>Dn?.(rt)),Hn(Q,rt=>f(Xe,rt),()=>n(Xe)),$r(()=>fe("scroll",Q,ct)),$r(()=>fe("pointerup",Q,Va(wa(function(rt){al.call(this,t,rt)})))),$r(()=>fe("mousedown",Q,Va(wa(function(rt){al.call(this,t,rt)})))),je(()=>I=wt(Q,1,"svelte-select-list svelte-1ul7oo4",null,I,{prefloat:n(jr)})),N(w,Q)};ne(nr,w=>{O()&&w(Fr)});var xr=D(nr,2),oe=R(xr),Jt=w=>{var I=L0(),Q=dt(I),Oe=R(Q),Pe=R(D(Q,2));je(()=>{st(Oe,n(c)),st(Pe,n(d))}),N(w,I)};ne(oe,w=>{F()&&w(Jt)});var rr=D(xr,2);dr(R(rr),t,"prepend",{},null);var It=D(rr,2),Fn=R(It),Rr=w=>{var I=ir(),Q=dt(I),Oe=Te=>{var Le=ir();lr(dt(Le),1,S,br,(mt,zt,Ze)=>{var Cn,rt=F0(),Ft=R(rt);dr(R(Ft),t,"selection",{get selection(){return n(zt)},index:Ze},xn=>{var Qn=Hr();je(()=>st(Qn,(n(zt),p(G()),T(()=>n(zt)[G()])))),N(xn,Qn)});var Bn=D(Ft,2),On=xn=>{var Qn=W0();dr(R(Qn),t,"multi-clear-icon",{},Zt=>{Ku(Zt)}),fe("pointerup",Qn,Va(wa(()=>Ye(Ze)))),N(xn,Qn)};ne(Bn,xn=>{U()||A()||!Ku||xn(On)}),je(()=>Cn=wt(rt,1,"multi-item svelte-1ul7oo4",null,Cn,{active:n(ye)===Ze,disabled:U()})),fe("click",rt,Va(()=>A()?Ye(Ze):{})),fe("keydown",rt,Va(wa(function(xn){al.call(this,t,xn)}))),N(mt,rt)}),N(Te,Le)},Pe=Te=>{var Le,mt=_0();dr(R(mt),t,"selection",{get selection(){return S()}},zt=>{var Ze=Hr();je(()=>st(Ze,(p(S()),p(G()),T(()=>S()[G()])))),N(zt,Ze)}),je(()=>Le=wt(mt,1,"selected-item svelte-1ul7oo4",null,Le,{"hide-selected-item":n(a)})),N(Te,mt)};ne(Q,Te=>{k()?Te(Oe):Te(Pe,-1)}),N(w,I)};ne(Fn,w=>{n(s)&&w(Rr)});var Zn=D(Fn,2);mc(Zn,()=>be(be({readOnly:!Qt()},n(Nt)),{},{placeholder:n(l),style:on(),disabled:U()}),void 0,void 0,void 0,"svelte-1ul7oo4",!0),Hn(Zn,w=>q(w),()=>q());var Or=D(It,2),Tr=R(Or),Mr=w=>{var I=V0();dr(R(I),t,"loading-icon",{},Q=>{(function(Oe){N(Oe,U0())})(Q)}),N(w,I)};ne(Tr,w=>{_()&&w(Mr)});var hr=D(Tr,2),_n=w=>{var I=$0();dr(R(I),t,"clear-icon",{},Q=>{Ku(Q)}),fe("click",I,tr),N(w,I)};ne(hr,w=>{n(i)&&w(_n)});var pn=D(hr,2),At=w=>{var I=H0();dr(R(I),t,"chevron-icon",{get listOpen(){return O()}},Q=>{(function(Oe){N(Oe,N0())})(Q)}),N(w,I)};ne(pn,w=>{Be()&&w(At)});var Ut=D(Or,2);dr(Ut,t,"input-hidden",{get value(){return S()}},w=>{var I=Q0();je(Q=>{vn(I,"name",M()),Ws(I,Q)},[()=>(p(S()),T(()=>S()?JSON.stringify(S()):null))]),N(w,I)});var Mn=D(Ut,2),_t=w=>{var I=ir();dr(dt(I),t,"required",{get value(){return S()}},Q=>{N(Q,K0())}),N(w,I)};return ne(Mn,w=>{p(ce()),p(S()),T(()=>ce()&&(!S()||S().length===0))&&w(_t)}),$r(()=>fe("pointerup",Wn,Va(En))),Hn(Wn,w=>E(w),()=>E()),oo(Wn,w=>Un?.(w)),je(()=>{var w;Pn=wt(Wn,1,"svelte-select ".concat((w=it())!==null&&w!==void 0?w:""),"svelte-1ul7oo4",Pn,{multi:k(),disabled:U(),focused:F(),"list-open":O(),"show-chevron":Be(),error:Re()}),No(Wn,Ae())}),fe("keydown",Zn,re),fe("blur",Zn,ue),fe("focus",Zn,Yt),Tc(Zn,J),N(e,Wn),gt(t,"getFilteredItems",Ot),gt(t,"handleClear",tr),at(pr)}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
table.jse-transform-wizard.svelte-9wqi8y {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-9wqi8y input:where(.svelte-9wqi8y) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) th:where(.svelte-9wqi8y) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);var G0=Y('<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>');function Z0(e,t){var r,o,s,a,i;ot(t,!1);var l=P(void 0,!0),c=P(void 0,!0),d=P(void 0,!0),u=P(void 0,!0),m=P(void 0,!0),g=P(void 0,!0),h=Wr("jsoneditor:TransformWizard"),y=v(t,"json",9),b=v(t,"queryOptions",29,()=>({})),j=v(t,"onChange",9),x=["==","!=","<","<=",">",">="].map(se=>({value:se,label:se})),M=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],E=P((r=b())!==null&&r!==void 0&&(r=r.filter)!==null&&r!==void 0&&r.path?Qa(b().filter.path):void 0,!0),q=P((o=x.find(se=>{var ce;return se.value===((ce=b().filter)===null||ce===void 0?void 0:ce.relation)}))!==null&&o!==void 0?o:x[0],!0),k=P(((s=b())===null||s===void 0||(s=s.filter)===null||s===void 0?void 0:s.value)||"",!0),A=P((a=b())!==null&&a!==void 0&&(a=a.sort)!==null&&a!==void 0&&a.path?Qa(b().sort.path):void 0,!0),U=P((i=M.find(se=>{var ce;return se.value===((ce=b().sort)===null||ce===void 0?void 0:ce.direction)}))!==null&&i!==void 0?i:M[0],!0);W(()=>p(y()),()=>{f(l,Array.isArray(y()))}),W(()=>(n(l),p(y())),()=>{f(c,n(l)?Od(y()):[])}),W(()=>(n(l),p(y())),()=>{f(d,n(l)?Od(y(),!0):[])}),W(()=>(n(c),Qa),()=>{f(u,n(c).map(Qa))}),W(()=>(n(d),Qa),()=>{f(m,n(d)?n(d).map(Qa):[])}),W(()=>(p(b()),n(m),Lt),()=>{var se;f(g,(se=b())!==null&&se!==void 0&&(se=se.projection)!==null&&se!==void 0&&se.paths&&n(m)?b().projection.paths.map(ce=>n(m).find(me=>Lt(me.value,ce))).filter(ce=>!!ce):void 0)}),W(()=>n(E),()=>{var se,ce,me;ce=(se=n(E))===null||se===void 0?void 0:se.value,Lt((me=b())===null||me===void 0||(me=me.filter)===null||me===void 0?void 0:me.path,ce)||(h("changeFilterPath",ce),b(xa(b(),["filter","path"],ce,!0)),j()(b()))}),W(()=>n(q),()=>{var se,ce,me;ce=(se=n(q))===null||se===void 0?void 0:se.value,Lt((me=b())===null||me===void 0||(me=me.filter)===null||me===void 0?void 0:me.relation,ce)||(h("changeFilterRelation",ce),b(xa(b(),["filter","relation"],ce,!0)),j()(b()))}),W(()=>n(k),()=>{var se,ce;se=n(k),Lt((ce=b())===null||ce===void 0||(ce=ce.filter)===null||ce===void 0?void 0:ce.value,se)||(h("changeFilterValue",se),b(xa(b(),["filter","value"],se,!0)),j()(b()))}),W(()=>n(A),()=>{var se,ce,me;ce=(se=n(A))===null||se===void 0?void 0:se.value,Lt((me=b())===null||me===void 0||(me=me.sort)===null||me===void 0?void 0:me.path,ce)||(h("changeSortPath",ce),b(xa(b(),["sort","path"],ce,!0)),j()(b()))}),W(()=>n(U),()=>{var se,ce,me;ce=(se=n(U))===null||se===void 0?void 0:se.value,Lt((me=b())===null||me===void 0||(me=me.sort)===null||me===void 0?void 0:me.direction,ce)||(h("changeSortDirection",ce),b(xa(b(),["sort","direction"],ce,!0)),j()(b()))}),W(()=>n(g),()=>{(function(se){var ce;Lt((ce=b())===null||ce===void 0||(ce=ce.projection)===null||ce===void 0?void 0:ce.paths,se)||(h("changeProjectionPaths",se),b(xa(b(),["projection","paths"],se,!0)),j()(b()))})(n(g)?n(g).map(se=>se.value):void 0)}),jn(),kt(!0);var F=G0(),S=R(F),J=R(S),Z=D(R(J)),$=R(Z),le=R($);qs(le,{class:"jse-filter-path",showChevron:!0,get items(){return n(u)},get value(){return n(E)},set value(se){f(E,se)},$$legacy:!0});var G=D(le,2);qs(G,{class:"jse-filter-relation",showChevron:!0,clearable:!1,get items(){return x},get value(){return n(q)},set value(se){f(q,se)},$$legacy:!0});var qe=D(G,2),Me=D(J),de=D(R(Me)),Ee=R(de),Se=R(Ee);qs(Se,{class:"jse-sort-path",showChevron:!0,get items(){return n(u)},get value(){return n(A)},set value(se){f(A,se)},$$legacy:!0}),qs(D(Se,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,get items(){return M},get value(){return n(U)},set value(se){f(U,se)},$$legacy:!0});var Ke=D(Me),Ae=D(R(Ke)),Re=R(Ae);qs(R(Re),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return n(m)},get value(){return n(g)},set value(se){f(g,se)},$$legacy:!0}),Tc(qe,()=>n(k),se=>f(k,se)),N(e,F),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-select-query-language.svelte-jrd4q2 {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  text-align: left;
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  white-space: nowrap;
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-context-menu-background, #656565);
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);var X0=Y('<button type="button"><!> </button>'),ey=Y('<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>');function ty(e,t){ot(t,!1);var r=v(t,"queryLanguages",8),o=v(t,"queryLanguageId",12),s=v(t,"onChangeQueryLanguage",8);kt();var a=ey();lr(R(a),5,r,br,(i,l)=>{var c,d=X0(),u=R(d),m=y=>{tn(y,{get data(){return cp}})},g=y=>{tn(y,{get data(){return up}})};ne(u,y=>{n(l),p(o()),T(()=>n(l).id===o())?y(m):y(g,-1)});var h=D(u);je(()=>{var y;c=wt(d,1,"jse-query-language svelte-jrd4q2",null,c,{selected:n(l).id===o()}),vn(d,"title",(n(l),T(()=>"Select ".concat(n(l).name," as query language")))),st(h," ".concat((n(l),(y=T(()=>n(l).name))!==null&&y!==void 0?y:"")))}),fe("click",d,()=>{return y=n(l).id,o(y),void s()(y);var y}),N(i,d)}),N(e,a),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-header.svelte-1k211ye {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1k211ye .jse-title:where(.svelte-1k211ye) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye):hover {
  background: rgba(255, 255, 255, 0.1);
}`);var ny=Y('<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>'),ry=Y('<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>');function Kc(e,t){ot(t,!1);var r=v(t,"title",9,"Modal"),o=v(t,"fullScreenButton",9,!1),s=v(t,"fullscreen",13,!1),a=v(t,"onClose",9,void 0);kt(!0);var i=ry(),l=R(i),c=R(l),d=D(l,2);dr(d,t,"actions",{},null);var u=D(d,2),m=h=>{var y=ny(),b=R(y),j=De(()=>s()?dg:vg);tn(b,{get data(){return n(j)}}),fe("click",y,()=>s(!s())),N(h,y)};ne(u,h=>{o()&&h(m)});var g=D(u,2);tn(R(g),{get data(){return Zc}}),je(()=>st(c,r())),fe("click",g,()=>{var h;return(h=a())===null||h===void 0?void 0:h()}),N(e,i),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-config.svelte-5gkegr {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-5gkegr:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-5gkegr {
  display: none;
}`);var oy=Y('<button slot="actions" type="button" title="Select a query language"><!></button>'),Yu=Wr("jsoneditor:AutoScrollHandler");function Zf(e){var t,r;function o(l){return l<20?200:l<50?400:1200}function s(){if(e){var l=.05*(t||0);e.scrollTop+=l}}function a(l){r&&l===t||(i(),Yu("startAutoScroll",l),t=l,r=setInterval(s,50))}function i(){r&&(Yu("stopAutoScroll"),clearInterval(r),r=void 0,t=void 0)}return Yu("createAutoScrollHandler",e),{onDrag:function(l){if(e){var c=l.clientY,d=e.getBoundingClientRect(),u=d.top,m=d.bottom;c<u?a(-o(u-c)):c>m?a(o(c-m)):i()}},onDragEnd:function(){i()}}}var ay=(e,t,r,o)=>(e/=o/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t,wm=()=>{var e,t,r,o,s,a,i,l,c,d,u,m,g;function h(j){return j.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+r}function y(j){e.scrollTo?e.scrollTo(e.scrollLeft,j):e.scrollTop=j}function b(j){d||(d=j),y(a(u=j-d,r,l,c)),g=!0,u<c?requestAnimationFrame(b):function(){y(r+l),t&&i&&(t.setAttribute("tabindex","-1"),t.focus()),typeof m=="function"&&m(),d=0,g=!1}()}return function(j){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,s=x.offset||0,m=x.callback,a=x.easing||ay,i=x.a11y||!1,typeof x.container){case"object":e=x.container;break;case"string":e=document.querySelector(x.container);break;default:e=window.document.documentElement}switch(r=e.scrollTop,typeof j){case"number":t=void 0,i=!1,o=r+j;break;case"object":o=h(t=j);break;case"string":t=document.querySelector(j),o=h(t)}switch(l=o-r+s,typeof x.duration){case"number":c=x.duration;break;case"function":c=x.duration(l)}g?d=0:requestAnimationFrame(b)}};function fi(e,t){var r=Date.now(),o=e();return t(Date.now()-r),o}var ai=Wr("validation"),sy={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function Xf(e,t,r,o){return yv(e,t,r,o,sy)}function km(e,t,r,o){if(ai("validateJSON"),!t)return[];if(r!==o){var s=r.stringify(e);return t(s!==void 0?o.parse(s):void 0)}return t(e)}function iy(e,t,r,o){if(ai("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:Io.info}]};if(e.length!==0)try{var s=fi(()=>r.parse(e),c=>ai("validate: parsed json in ".concat(c," ms")));if(!t)return;var a=r===o?s:fi(()=>o.parse(e),c=>ai("validate: parsed json with the validationParser in ".concat(c," ms"))),i=fi(()=>t(a),c=>ai("validate: validated json in ".concat(c," ms")));return dn(i)?void 0:{validationErrors:i}}catch(c){var l=fi(()=>function(d,u){if(d.length>Vj)return!1;try{return u.parse(aa(d)),!0}catch{return!1}}(e,r),d=>ai("validate: checked whether repairable in ".concat(d," ms")));return{parseError:Ei(e,c.message||c.toString()),isRepairable:l}}}var ic=Wr("jsoneditor:FocusTracker");function Mv(e){var t,r=e.onMount,o=e.onDestroy,s=e.getWindow,a=e.hasFocus,i=e.onFocus,l=e.onBlur,c=!1;function d(){var m=a();m&&(clearTimeout(t),c||(ic("focus"),i(),c=m))}function u(){c&&(clearTimeout(t),t=setTimeout(()=>{a()||(ic("blur"),c=!1,l())}))}r(()=>{ic("mount FocusTracker");var m=s();m&&(m.addEventListener("focusin",d,!0),m.addEventListener("focusout",u,!0))}),o(()=>{ic("destroy FocusTracker");var m=s();m&&(m.removeEventListener("focusin",d,!0),m.removeEventListener("focusout",u,!0))})}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-message.svelte-cbvd26 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-cbvd26 {
  background: var(--jse-message-success-background, var(--message-success-background, #9ac45d));
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-text:where(.svelte-cbvd26) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26) {
  cursor: pointer;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-cbvd26 {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-cbvd26 {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-cbvd26 {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
  color: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);var ly=Y('<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>'),cy=Y('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>');function ko(e,t){ot(t,!1);var r=v(t,"type",9,"success"),o=v(t,"icon",9,void 0),s=v(t,"message",9,void 0),a=v(t,"actions",25,()=>[]),i=v(t,"onClick",9,void 0),l=v(t,"onClose",9,void 0);l()&&Do(l()),kt(!0);var c,d=cy(),u=R(d),m=R(u),g=R(m),h=b=>{tn(b,{get data(){return o()}})};ne(g,b=>{o()&&b(h)});var y=D(g);lr(D(u,2),5,a,br,(b,j)=>{var x=ly(),M=R(x),E=k=>{tn(k,{get data(){return n(j),T(()=>n(j).icon)}})};ne(M,k=>{n(j),T(()=>n(j).icon)&&k(E)});var q=D(M);je(()=>{var k;vn(x,"title",(n(j),T(()=>n(j).title))),x.disabled=(n(j),T(()=>n(j).disabled)),st(q," ".concat((n(j),(k=T(()=>n(j).text))!==null&&k!==void 0?k:"")))}),fe("click",x,()=>{n(j).onClick&&n(j).onClick()}),fe("mousedown",x,()=>{n(j).onMouseDown&&n(j).onMouseDown()}),N(b,x)}),je(()=>{var b,j;wt(d,1,"jse-message jse-".concat((b=r())!==null&&b!==void 0?b:""),"svelte-cbvd26"),c=wt(u,1,"jse-text svelte-cbvd26",null,c,{"jse-clickable":!!i()}),st(y," ".concat((j=s())!==null&&j!==void 0?j:""))}),fe("click",u,function(){i()&&i()()}),N(e,d),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-validation-errors-overview.svelte-1342rh4 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-error:where(.svelte-1342rh4) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-info:where(.svelte-1342rh4) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-icon:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 36px;
  height: 26px;
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) div.jse-validation-errors-expand:where(.svelte-1342rh4) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);var uy=Y('<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>'),dy=Y('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>'),vy=Y('<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>'),fy=Y('<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>'),py=Y('<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>'),hy=Y('<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>');function zv(e,t){ot(t,!1);var r=P(void 0,!0),o=v(t,"validationErrors",9),s=v(t,"selectError",9),a=P(!0,!0);function i(){f(a,!1)}function l(){f(a,!0)}W(()=>p(o()),()=>{f(r,o().length)}),jn(),kt(!0);var c=ir(),d=dt(c),u=g=>{var h=hy(),y=R(h),b=x=>{var M=fy(),E=R(M),q=R(E);lr(q,1,()=>(p(Nc),p(o()),p(tc),T(()=>Nc(o(),tc))),br,(U,F,S)=>{var J=dy(),Z=R(J);tn(R(Z),{get data(){return Bs}});var $=D(Z),le=R($),G=D($),qe=R(G),Me=R(D(G)),de=Ee=>{var Se=uy();tn(R(Se),{get data(){return Og}}),fe("click",Se,wa(i)),N(Ee,Se)};ne(Me,Ee=>{p(o()),T(()=>S===0&&o().length>1)&&Ee(de)}),je(Ee=>{var Se;wt(J,1,"jse-validation-".concat((n(F),(Se=T(()=>n(F).severity))!==null&&Se!==void 0?Se:"")),"svelte-1342rh4"),st(le,Ee),st(qe,(n(F),T(()=>n(F).message)))},[()=>(p(fo),n(F),T(()=>fo(n(F).path)))]),fe("click",J,()=>{setTimeout(()=>s()(n(F)))}),N(U,J)});var k=D(q),A=U=>{var F=vy(),S=D(R(F),2),J=R(S);je(()=>st(J,"(and ".concat(n(r)-tc," more errors)"))),N(U,F)};ne(k,U=>{n(r)>tc&&U(A)}),N(x,M)},j=x=>{var M=py(),E=R(M),q=R(E),k=R(q);tn(R(k),{get data(){return Bs}});var A=R(D(k));tn(R(D(A)),{get data(){return yp}}),je(U=>{var F;wt(q,1,"jse-validation-".concat(U??""),"svelte-1342rh4"),st(A,"".concat((F=n(r))!==null&&F!==void 0?F:""," validation errors "))},[()=>(p(o()),T(()=>{return U=o(),[Io.error,Io.warning,Io.info].find(F=>U.some(S=>S.severity===F));var U}))]),fe("click",q,l),N(x,M)};ne(y,x=>{n(a)||n(r)===1?x(b):x(j,-1)}),N(g,h)},m=Dt(()=>(p(dn),p(o()),T(()=>!dn(o()))));ne(d,g=>{n(m)&&g(u)}),N(e,c),at()}function Yc(e,t){if(e)return e.addEventListener("keydown",r),{destroy(){e.removeEventListener("keydown",r)}};function r(o){o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),t())}}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
dialog.jse-modal.svelte-2aoco4 {
  border-radius: 3px;
  font-size: var(--jse-padding, 10px);
  border: none;
  padding: 0;
  display: flex;
  min-width: 0;
  margin: auto;
  overflow: visible;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}
dialog.jse-modal.jse-sort-modal.svelte-2aoco4 {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-2aoco4 {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-2aoco4 {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-2aoco4 {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-2aoco4 {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-2aoco4::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-2aoco4 {
  animation: svelte-2aoco4-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-2aoco4::backdrop {
  animation: svelte-2aoco4-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-2aoco4 .jse-modal-inner:where(.svelte-2aoco4) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  background: var(--jse-modal-background, #f5f5f5);
  color: var(--jse-text-color, #4d4d4d);
}
@keyframes svelte-2aoco4-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-2aoco4-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-2aoco4 .svelte-select {
  --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
  --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
  --border-radius: var(--jse-svelte-select-border-radius, 3px);
  --background: var(--jse-svelte-select-background, #fff);
  --padding: var(--jse-svelte-select-padding, 0 10px);
  --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
  --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
  --height: 36px;
  --multi-item-height: 28px;
  --multi-item-margin: 2px;
  --multi-item-padding: 2px 8px;
  --multi-item-border-radius: 6px;
  --indicator-top: 8px;
}`);var my=Y('<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>');function Cl(e,t){ot(t,!1);var r=v(t,"className",8,void 0),o=v(t,"fullscreen",8,!1),s=v(t,"onClose",8),a=P();function i(){s()()}Xr(()=>n(a).showModal()),Do(()=>n(a).close()),kt();var l,c=my(),d=R(c);dr(R(d),t,"default",{},null),Hn(c,u=>f(a,u),()=>n(a)),$r(()=>fe("close",c,i)),$r(()=>{return fe("pointerdown",c,(u=i,function(){for(var m=arguments.length,g=new Array(m),h=0;h<m;h++)g[h]=arguments[h];g[0].target===this&&u?.apply(this,g)}));var u}),$r(()=>fe("cancel",c,Va(function(u){al.call(this,t,u)}))),oo(c,(u,m)=>Yc?.(u,m),()=>i),je(u=>l=wt(c,1,u,"svelte-2aoco4",l,{"jse-fullscreen":o()}),[()=>ds((p(Qo),p(r()),T(()=>Qo("jse-modal",r()))))]),N(e,c),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-10a6ob6 {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-10a6ob6 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-10a6ob6 .jse-shortcut:where(.svelte-10a6ob6) .jse-key:where(.svelte-10a6ob6) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);var gy=Y('<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>',1);function Sm(e,t){ot(t,!1);var r=v(t,"onClose",9),o=vv()?"⌘":"Ctrl";kt(!0),Cl(e,{get onClose(){return r()},className:"jse-copy-paste",children:(s,a)=>{var i=gy(),l=dt(i);Kc(l,{title:"Copying and pasting",get onClose(){return r()}});var c=D(l,2),d=D(R(c),2),u=R(d),m=R(u),g=R(m),h=D(u,2),y=R(h),b=R(y),j=R(D(h,2)),x=R(j),M=R(D(d,2));je(()=>{st(g,"".concat(o,"+C")),st(b,"".concat(o,"+X")),st(x,"".concat(o,"+V"))}),fe("click",M,function(){for(var E,q=arguments.length,k=new Array(q),A=0;A<q;A++)k[A]=arguments[A];(E=r())===null||E===void 0||E.apply(this,k)}),N(s,i)},$$slots:{default:!0}}),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-menu.svelte-3erbu0 {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0) {
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5em;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: var(--jse-menu-button-size, 32px);
  height: var(--jse-menu-button-size, 32px);
  padding: calc(0.5 * var(--jse-padding, 10px));
  margin: 0;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):not(.jse-last) {
  border-right: none;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-first:where(.svelte-3erbu0) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-last:where(.svelte-3erbu0) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-selected:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-3erbu0 .jse-space:where(.svelte-3erbu0) {
  flex: 1;
}
.jse-menu.svelte-3erbu0 .jse-separator:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);var by=Y('<div class="jse-separator svelte-3erbu0"></div>'),jy=Y('<div class="jse-space svelte-3erbu0"></div>'),yy=Y('<button type="button"><!> <!></button>'),xy=Y('<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>');function fu(e,t){ot(t,!1);var r=v(t,"items",25,()=>[]);kt(!0);var o=xy(),s=R(o);dr(s,t,"left",{},null);var a=D(s,2);lr(a,1,r,br,(i,l)=>{var c=ir(),d=dt(c),u=x=>{N(x,by())},m=Dt(()=>(p(Ha),n(l),T(()=>Ha(n(l))))),g=x=>{N(x,jy())},h=Dt(()=>(p(Ed),n(l),T(()=>Ed(n(l))))),y=x=>{var M=yy(),E=R(M),q=U=>{tn(U,{get data(){return n(l),T(()=>n(l).icon)}})};ne(E,U=>{n(l),T(()=>n(l).icon)&&U(q)});var k=D(E,2),A=U=>{var F=Hr();je(()=>st(F,(n(l),T(()=>n(l).text)))),N(U,F)};ne(k,U=>{n(l),T(()=>n(l).text)&&U(A)}),je(()=>{var U;wt(M,1,"jse-button ".concat((n(l),(U=T(()=>n(l).className))!==null&&U!==void 0?U:"")),"svelte-3erbu0"),vn(M,"title",(n(l),T(()=>n(l).title))),M.disabled=(n(l),T(()=>n(l).disabled||!1))}),fe("click",M,function(){for(var U,F=arguments.length,S=new Array(F),J=0;J<F;J++)S[J]=arguments[J];(U=n(l).onClick)===null||U===void 0||U.apply(this,S)}),N(x,M)},b=Dt(()=>(p(ka),n(l),T(()=>ka(n(l))))),j=x=>{var M=Hr();je(E=>st(M,E),[()=>(n(l),T(()=>function(E){return console.error("Unknown type of menu item",E),"???"}(n(l))))]),N(x,M)};ne(d,x=>{n(m)?x(u):n(h)?x(g,1):n(b)?x(y,2):x(j,-1)}),N(i,c)}),dr(D(a,2),t,"right",{},null),N(e,o),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-repair-component.svelte-16jv58j {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-16jv58j .jse-info:where(.svelte-16jv58j) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-16jv58j .jse-json-text:where(.svelte-16jv58j) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);var wy=Y('<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>'),ky=Y('<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function Sy(e,t){ot(t,!1);var r=P(void 0,!0),o=P(void 0,!0),s=P(void 0,!0),a=P(void 0,!0),i=P(void 0,!0),l=P(void 0,!0),c=v(t,"text",13,""),d=v(t,"readOnly",9,!1),u=v(t,"onParse",9),m=v(t,"onRepair",9),g=v(t,"onChange",9,void 0),h=v(t,"onApply",9),y=v(t,"onCancel",9),b=Wr("jsoneditor:JSONRepair"),j=P(void 0,!0);function x(){if(n(j)&&n(r)){var Z=n(r).position!==void 0?n(r).position:0;n(j).setSelectionRange(Z,Z),n(j).focus()}}function M(){h()(c())}function E(){try{c(m()(c())),g()&&g()(c())}catch{}}var q=P(void 0,!0);W(()=>p(c()),()=>{f(r,function(Z){try{return void u()(Z)}catch($){return Ei(Z,$.message)}}(c()))}),W(()=>p(c()),()=>{f(o,function(Z){try{return m()(Z),!0}catch{return!1}}(c()))}),W(()=>n(r),()=>{b("error",n(r))}),W(()=>p(y()),()=>{f(q,[{type:"space"},{type:"button",icon:Zc,title:"Cancel repair",className:"jse-cancel",onClick:y()}])}),W(()=>Nv,()=>{f(s,{icon:Nv,text:"Show me",title:"Scroll to the error location",onClick:x})}),W(()=>is,()=>{f(a,{icon:is,text:"Auto repair",title:"Automatically repair JSON",onClick:E})}),W(()=>(n(o),n(s),n(a)),()=>{f(i,n(o)?[n(s),n(a)]:[n(s)])}),W(()=>p(d()),()=>{f(l,[{icon:Yd,text:"Apply",title:"Apply fixed JSON",disabled:d(),onClick:M}])}),jn(),kt(!0);var k=ky(),A=R(k);fu(A,{get items(){return n(q)},$$slots:{left:(Z,$)=>{N(Z,wy())}}});var U=D(A,2),F=Z=>{var $=De(()=>(n(r),T(()=>"Cannot parse JSON: ".concat(n(r).message))));ko(Z,{type:"error",get icon(){return Bs},get message(){return n($)},get actions(){return n(i)}})},S=Z=>{ko(Z,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return n(l)}})};ne(U,Z=>{n(r)?Z(F):Z(S,-1)});var J=D(U,2);Hn(J,Z=>f(j,Z),()=>n(j)),je(()=>{J.readOnly=d(),Ws(J,c())}),fe("input",J,function(Z){b("handleChange");var $=Z.target.value;c()!==$&&(c($),g()&&g()(c()))}),N(e,k),at()}function Cm(e,t){ot(t,!1);var r=v(t,"text",13),o=v(t,"onParse",9),s=v(t,"onRepair",9),a=v(t,"onApply",9),i=v(t,"onClose",9);function l(d){a()(d),i()()}function c(){i()()}kt(!0),Cl(e,{get onClose(){return i()},className:"jse-repair-modal",children:(d,u)=>{Sy(d,{get onParse(){return o()},get onRepair(){return s()},onApply:l,onCancel:c,get text(){return r()},set text(m){r(m)},$$legacy:!0})},$$slots:{default:!0}}),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
div.jse-collapsed-items.svelte-1v6dhm4 {
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  padding: calc(0.5 * var(--jse-padding, 10px));
  border: 8px solid transparent;
  border-width: 8px 0;
  background-color: var(--jse-contents-background-color, transparent);
  background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
  background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
  background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
  background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
  background-clip: padding-box, border-box, border-box, border-box, border-box;
  background-origin: padding-box, border-box, border-box, border-box, border-box;
  display: flex;
}
div.jse-collapsed-items.jse-selected.svelte-1v6dhm4 {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4),
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4) {
  display: inline;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):hover, div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);var Cy=Y('<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>'),Oy=Y('<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>');function My(e,t){ot(t,!1);var r=P(void 0,!0),o=P(void 0,!0),s=P(void 0,!0),a=P(void 0,!0),i=P(void 0,!0),l=v(t,"visibleSections",9),c=v(t,"sectionIndex",9),d=v(t,"total",9),u=v(t,"path",9),m=v(t,"selection",9),g=v(t,"onExpandSection",9),h=v(t,"context",9);W(()=>(p(l()),p(c())),()=>{f(r,l()[c()])}),W(()=>n(r),()=>{f(o,n(r).end)}),W(()=>(p(l()),p(c()),p(d())),()=>{f(s,l()[c()+1]?l()[c()+1].start:d())}),W(()=>(p(h()),p(m()),p(u()),n(o)),()=>{f(a,kl(h().getJson(),m(),u().concat(String(n(o)))))}),W(()=>(n(o),n(s)),()=>{f(i,function(q,k){var A={start:q,end:Math.min(qd(q),k)},U=Math.max(Uc((q+k)/2),q),F={start:U,end:Math.min(qd(U),k)},S=Uc(k),J=S===k?S-jl:S,Z={start:Math.max(J,q),end:k},$=[A],le=F.start>=A.end&&F.end<=Z.start;return le&&$.push(F),Z.start>=(le?F.end:A.end)&&$.push(Z),$}(n(o),n(s)))}),jn(),kt(!0);var y,b,j=Oy(),x=R(j),M=R(x),E=R(M);lr(D(M,2),1,()=>n(i),br,(q,k)=>{var A=Cy(),U=R(A);je(()=>{var F,S;return st(U,"show ".concat((n(k),(F=T(()=>n(k).start))!==null&&F!==void 0?F:""),"-").concat((n(k),(S=T(()=>n(k).end))!==null&&S!==void 0?S:"")))}),fe("click",A,()=>g()(u(),n(k))),N(q,A)}),je(()=>{var q,k;y=wt(j,1,"jse-collapsed-items svelte-1v6dhm4",null,y,{"jse-selected":n(a)}),b=No(j,"",b,{"--level":(p(u()),T(()=>u().length+2))}),st(E,"Items ".concat((q=n(o))!==null&&q!==void 0?q:"","-").concat((k=n(s))!==null&&k!==void 0?k:""))}),fe("mousemove",j,function(q){q.stopPropagation()}),N(e,j),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-context-menu-pointer.svelte-10ijtzr {
  position: absolute;
  top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
  border: none;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-context-menu-pointer.jse-root.svelte-10ijtzr {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-10ijtzr {
  right: -1px;
}
.jse-context-menu-pointer.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);var zy=Y('<button type="button"><!></button>');function $a(e,t){ot(t,!1);var r=v(t,"root",9,!1),o=v(t,"insert",9,!1),s=v(t,"selected",9),a=v(t,"onContextMenu",9);kt(!0);var i,l=zy();tn(R(l),{get data(){return Na}}),je(()=>{i=wt(l,1,"jse-context-menu-pointer svelte-10ijtzr",null,i,{"jse-root":r(),"jse-insert":o(),"jse-selected":s()}),vn(l,"title",pv)}),fe("click",l,function(c){for(var d=c.target;d&&d.nodeName!=="BUTTON";)d=d.parentNode;d&&a()({anchor:d,left:0,top:0,width:Oa,height:Ca,offsetTop:2,offsetLeft:0,showTip:!0})}),N(e,l),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-key.svelte-1n4cez4 {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  color: var(--jse-key-color, #1a1a1a);
  word-break: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.jse-key.jse-empty.svelte-1n4cez4 {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-1n4cez4::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);var qy=Y('<div role="none" data-type="selectable-key"><!></div>'),Ey=Y("<!> <!>",1),Ay=Y('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function Om(e,t){ot(t,!0);var r=Dt(()=>un(t.selection)&&Ur(t.selection)),o=Dt(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:n(r),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),s=ir();lr(dt(s),17,()=>n(o),br,(a,i)=>{var l=ir(),c=dt(l),d=g=>{var h=Dt(()=>n(i).action),y=Ay();oo(y,(b,j)=>{var x;return(x=n(h))===null||x===void 0?void 0:x(b,j)},()=>n(i).props),N(g,y)},u=Dt(()=>Yj(n(i))),m=g=>{var h=Dt(()=>n(i).component),y=ir();Eh(dt(y),()=>n(h),(b,j)=>{j(b,os(()=>n(i).props))}),N(g,y)};ne(c,g=>{n(u)?g(d):g(m,-1)}),N(a,l)}),N(e,s),at()}var Py={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function Gu(e){var t=e.json,r=e.selection,o=e.deltaY,s=e.items;if(!r)return{operations:void 0,updatedSelection:void 0,offset:0};var a=o<0?function(u){for(var m=u.json,g=u.items,h=u.selection,y=u.deltaY,b=Ma(m,h),j=g.findIndex(A=>Lt(A.path,b)),x=()=>{var A;return(A=g[M-1])===null||A===void 0?void 0:A.height},M=j,E=0;x()!==void 0&&Math.abs(y)>E+x()/2;)E+=x(),M-=1;var q=g[M].path,k=M-j;return M!==j&&g[M]!==void 0?{beforePath:q,offset:k}:void 0}({json:t,selection:r,deltaY:o,items:s}):function(u){for(var m,g=u.json,h=u.items,y=u.selection,b=u.deltaY,j=ss(g,y),x=h.findIndex(J=>Lt(J.path,j)),M=0,E=x,q=()=>{var J;return(J=h[E+1])===null||J===void 0?void 0:J.height};q()!==void 0&&Math.abs(b)>M+q()/2;)M+=q(),E+=1;var k=Xt(j),A=Ve(g,k),U=Array.isArray(A)?E:E+1,F=(m=h[U])===null||m===void 0?void 0:m.path,S=E-x;return F?{beforePath:F,offset:S}:{append:!0,offset:S}}({json:t,selection:r,deltaY:o,items:s});if(!a||a.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var i=function(u,m,g){if(!m)return[];var h="beforePath"in g?g.beforePath:void 0,y="append"in g?g.append:void 0,b=Xt($e(m)),j=Ve(u,b);if(!(y||h&&ua(h,b)&&h.length>b.length))return[];var x=Ma(u,m),M=ss(u,m),E=Wt(x),q=Wt(M),k=h?h[b.length]:void 0;if(!Jr(j)){if(Ar(j)){var A=Yr(E),U=Yr(q),F=k!==void 0?Yr(k):j.length;return zg(U-A+1,F<A?le=>({op:"move",from:qt(b.concat(String(A+le))),path:qt(b.concat(String(F+le)))}):()=>({op:"move",from:qt(b.concat(String(A))),path:qt(b.concat(String(F)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var S=Object.keys(j),J=S.indexOf(E),Z=S.indexOf(q),$=y?S.length:k!==void 0?S.indexOf(k):-1;return J!==-1&&Z!==-1&&$!==-1?$>J?[...S.slice(J,Z+1),...S.slice($,S.length)].map(le=>fs(b,le)):[...S.slice($,J),...S.slice(Z+1,S.length)].map(le=>fs(b,le)):[]}(t,r,a),l=Xt(Ma(t,r)),c=Ve(t,l);if(Array.isArray(c)){var d=function(u){var m,g,h=u.items,y=u.json,b=u.selection,j=u.offset,x=Ma(y,b),M=ss(y,b),E=h.findIndex(U=>Lt(U.path,x)),q=h.findIndex(U=>Lt(U.path,M)),k=(m=h[E+j])===null||m===void 0?void 0:m.path,A=(g=h[q+j])===null||g===void 0?void 0:g.path;return no(k,A)}({items:s,json:t,selection:r,offset:a.offset});return{operations:i,updatedSelection:d,offset:a.offset}}return{operations:i,updatedSelection:void 0,offset:a.offset}}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-validation-error.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-error-color, #ee5341);
}

button.jse-validation-info.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-info-color, #4f91ff);
}

button.jse-validation-warning.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-warning-color, #fdc539);
}`);var Ry=Y('<button type="button"><!></button>');function ji(e,t){ot(t,!1);var r=P(),o=hs("absolute-popup"),s=v(t,"validationError",8),a=v(t,"onExpand",8);W(()=>p(s()),()=>{f(r,Kj(s())&&s().isChildError?"Contains invalid data":s().message)}),jn(),kt();var i=Ry();tn(R(i),{get data(){return Bs}}),$r(()=>fe("click",i,function(){for(var l,c=arguments.length,d=new Array(c),u=0;u<c;u++)d[u]=arguments[u];(l=a())===null||l===void 0||l.apply(this,d)})),oo(i,(l,c)=>Ti?.(l,c),()=>be({text:n(r)},o)),je(()=>{var l;return wt(i,1,"jse-validation-".concat((p(s()),(l=T(()=>s().severity))!==null&&l!==void 0?l:"")),"svelte-q6a061")}),N(e,i),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-expand.svelte-1qi6rc1 {
  width: var(--jse-indent-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  font-size: var(--jse-font-size-mono, 14px);
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-expand.svelte-1qi6rc1:hover {
  opacity: 0.8;
}

.jse-meta.svelte-1qi6rc1,
.jse-separator.svelte-1qi6rc1,
.jse-index.svelte-1qi6rc1,
.jse-bracket.svelte-1qi6rc1 {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-1qi6rc1 {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-1qi6rc1 {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-1qi6rc1 {
  padding-right: var(--jse-padding, 10px);
}

.jse-identifier.svelte-1qi6rc1 {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-1qi6rc1 {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-1qi6rc1 {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-1qi6rc1 > .jse-contents-outer:where(.svelte-1qi6rc1) > .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: 0;
}
.jse-json-node.svelte-1qi6rc1 .jse-props:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-items:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header-outer:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) .jse-meta:where(.svelte-1qi6rc1) > .jse-meta-inner:where(.svelte-1qi6rc1) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) .jse-value-outer:where(.svelte-1qi6rc1) {
  display: inline-flex;
}
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area:where(.svelte-1qi6rc1) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-inside:where(.svelte-1qi6rc1) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-after:where(.svelte-1qi6rc1) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-1qi6rc1 .jse-context-menu-pointer-anchor:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area:where(.svelte-1qi6rc1) {
  display: flex;
  position: relative;
  z-index: 1;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  max-width: 250px;
  min-width: 100px;
  height: 0;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
  outline: 1px solid;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-hovered:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer.jse-selected-key:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-1qi6rc1 {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-selected:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);var Yn=ru(()=>Py),Zu=Y('<div class="jse-separator svelte-1qi6rc1">:</div>'),Ty=Y('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;',1),Ny=Y('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>',1),Xu=Y('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),ep=Y('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),el=Y('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),tp=Y('<div data-type="insert-selection-area-inside"><!></div>'),Iy=Y('<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>'),Uy=Y("<!> <!>",1),Dy=Y('<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>',1),By=Y('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),Jy=Y('<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>'),Ly=Y('<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>',1),Wy=Y('<div slot="identifier"><!></div>'),Fy=Y('<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>',1),_y=Y('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>',1),Vy=Y('<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>'),$y=Y('<div data-type="insert-selection-area-after"><!></div>'),Hy=Y('<div role="treeitem" tabindex="-1"><!> <!></div>');function Ld(e,t){ot(t,!1);var r=P(void 0,!0),o=P(void 0,!0),s=v(t,"pointer",9),a=v(t,"value",9),i=v(t,"state",9),l=v(t,"validationErrors",9),c=v(t,"searchResults",9),d=v(t,"selection",9),u=v(t,"context",9),m=v(t,"onDragSelectionStart",9),g=Wr("jsoneditor:JSONNode"),h=P(void 0,!0),y=void 0,b=P(void 0,!0),j=P(void 0,!0),x=P(void 0,!0),M=P(void 0,!0),E=P(void 0,!0),q=P(void 0,!0),k=P(void 0,!0);function A(_){_.stopPropagation();var O=fv(_);u().onExpand(n(j),!n(x),O)}function U(){u().onExpand(n(j),!0)}function F(_,O){var K=Bl(n(j),Object.keys(a()),_,O);return u().onPatch(K),Wt(Po(K[0].path))}function S(_){u().onDrag(_)}function J(_){Yn().selecting&&(Yn(Yn().selecting=!1),_.stopPropagation()),u().onDragEnd(),document.removeEventListener("mousemove",S,!0),document.removeEventListener("mouseup",J)}function Z(){var _;return((_=u().findElement([]))===null||_===void 0||(_=_.getBoundingClientRect())===null||_===void 0?void 0:_.top)||0}function $(_,O){var K=Z()-_.initialContentTop;return O.clientY-_.initialClientY-K}function le(_){if(!u().readOnly&&d()){var O=Xt($e(d()));if(Lt(n(j),O)){var K=function(Be,Bt){var Ne=[];function tt(ke){var He=n(j).concat(ke),Je=u().findElement(He);Je!==void 0&&Ne.push({path:He,height:Je.clientHeight})}if(Array.isArray(a())){var it=u().getJson();if(it===void 0)return;var ye=Ma(it,Be),nt=ss(it,Be),Et=parseInt(Wt(ye),10),mn=parseInt(Wt(nt),10),Nt=Bt.find(ke=>Et>=ke.start&&mn<=ke.end);if(!Nt)return;var ft=Nt.start,Kt=Nt.end;Dh(ft,Math.min(a().length,Kt),ke=>tt(String(ke)))}else Object.keys(a()).forEach(tt);return Ne}(d(),n(E)||gi);if(g("dragSelectionStart",{selection:d(),items:K}),K){var te=u().getJson();if(te!==void 0){var ze=Ma(te,d()),X=K.findIndex(Be=>Lt(Be.path,ze)),B=Gu({json:te,selection:u().getSelection(),deltaY:0,items:K}).offset;f(b,{initialTarget:_.target,initialClientY:_.clientY,initialContentTop:Z(),selectionStartIndex:X,selectionItemsCount:vs(te,d()).length,items:K,offset:B,didMoveItems:!1}),Yn(Yn().dragging=!0),document.addEventListener("mousemove",G,!0),document.addEventListener("mouseup",qe)}}else g("Cannot drag the current selection (probably spread over multiple sections)")}else m()(_)}}function G(_){if(n(b)){var O=u().getJson();if(O===void 0)return;var K=$(n(b),_),te=Gu({json:O,selection:u().getSelection(),deltaY:K,items:n(b).items}).offset;te!==n(b).offset&&(g("drag selection",te,K),f(b,be(be({},n(b)),{},{offset:te,didMoveItems:!0})))}}function qe(_){if(n(b)){var O=u().getJson();if(O===void 0)return;var K=$(n(b),_),te=Gu({json:O,selection:u().getSelection(),deltaY:K,items:n(b).items}),ze=te.operations,X=te.updatedSelection;if(ze)u().onPatch(ze,(Bt,Ne)=>({state:Ne,selection:X??d()}));else if(_.target===n(b).initialTarget&&!n(b).didMoveItems){var B=Du(_.target),Be=Kh(_.target);Be&&u().onSelect(Nf(B,Be))}f(b,void 0),Yn(Yn().dragging=!1),document.removeEventListener("mousemove",G,!0),document.removeEventListener("mouseup",qe)}}function Me(_){_.shiftKey||(_.stopPropagation(),_.preventDefault(),u().onSelect(La(n(j))))}function de(_){_.shiftKey||(_.stopPropagation(),_.preventDefault(),u().onSelect(Pa(n(j))))}function Ee(_){u().onSelect(La(n(j))),Vn(),u().onContextMenu(_)}function Se(_){u().onSelect(Pa(n(j))),Vn(),u().onContextMenu(_)}W(()=>p(s()),()=>{f(j,Po(s()))}),W(()=>p(s()),()=>{f(r,encodeURIComponent(s()))}),W(()=>p(i()),()=>{f(x,!!Fs(i())&&i().expanded)}),W(()=>(p(a()),p(i())),()=>{f(M,ra(a(),i(),[]))}),W(()=>p(i()),()=>{f(E,Dr(i())?i().visibleSections:void 0)}),W(()=>p(l()),()=>{var _;f(q,(_=l())===null||_===void 0?void 0:_.validationError)}),W(()=>(p(u()),p(d()),n(j)),()=>{f(k,kl(u().getJson(),d(),n(j)))}),W(()=>n(j),()=>{f(o,n(j).length===0)}),jn(),kt(!0);var Ke,Ae,Re=Hy(),se=R(Re),ce=_=>{var O=By(),K=dt(O),te=R(K),ze=R(te),X=R(ze),B=ue=>{tn(ue,{get data(){return Na}})},Be=ue=>{tn(ue,{get data(){return pl}})};ne(X,ue=>{n(x)?ue(B):ue(Be,-1)});var Bt=D(ze,2);dr(Bt,t,"identifier",{},null);var Ne=D(Bt,2),tt=ue=>{N(ue,Zu())};ne(Ne,ue=>{n(o)||ue(tt)});var it=D(Ne,2),ye=R(it),nt=R(ye),Et=ue=>{var bt=Ty();yc(D(dt(bt),2),{children:(En,tr)=>{var Gt=Hr();je(()=>{var Ln,Tn;return st(Gt,"".concat((p(a()),(Ln=T(()=>a().length))!==null&&Ln!==void 0?Ln:""),`
                `).concat((p(a()),(Tn=T(()=>a().length===1?"item":"items"))!==null&&Tn!==void 0?Tn:"")))}),N(En,Gt)},$$slots:{default:!0}}),N(ue,bt)},mn=ue=>{var bt=Ny();yc(D(dt(bt),2),{onclick:U,children:(En,tr)=>{var Gt=Hr();je(()=>{var Ln,Tn;return st(Gt,"".concat((p(a()),(Ln=T(()=>a().length))!==null&&Ln!==void 0?Ln:""),`
                `).concat((p(a()),(Tn=T(()=>a().length===1?"item":"items"))!==null&&Tn!==void 0?Tn:"")))}),N(En,Gt)},$$slots:{default:!0}}),N(ue,bt)};ne(nt,ue=>{n(x)?ue(Et):ue(mn,-1)});var Nt=D(it,2),ft=ue=>{var bt=Xu();$a(R(bt),{get root(){return n(o)},selected:!0,get onContextMenu(){return p(u()),T(()=>u().onContextMenu)}}),N(ue,bt)},Kt=Dt(()=>(p(u()),n(k),p(d()),p(un),p(Rn),p(Ur),p(Lt),p($e),n(j),T(()=>!u().readOnly&&n(k)&&d()&&(un(d())||Rn(d()))&&!Ur(d())&&Lt($e(d()),n(j)))));ne(Nt,ue=>{n(Kt)&&ue(ft)});var ke=D(te,2),He=ue=>{ji(ue,{get validationError(){return n(q)},onExpand:U})};ne(ke,ue=>{n(q),n(x),T(()=>n(q)&&(!n(x)||!n(q).isChildError))&&ue(He)});var Je=D(ke,2),Ye=ue=>{var bt=ep();fe("click",bt,Me),N(ue,bt)},Ie=ue=>{var bt=el();fe("click",bt,de),N(ue,bt)};ne(Je,ue=>{n(x)?ue(Ye):ue(Ie,-1)});var re=D(K,2),Yt=ue=>{var bt=Dy(),En=dt(bt),tr=R(En),Gt=Xe=>{var ct,Nn,ut=tp(),fn=R(ut),Mt=De(()=>(n(k),p(Er),p(d()),T(()=>n(k)&&Er(d()))));$a(fn,{insert:!0,get selected(){return n(Mt)},onContextMenu:Ee}),je(In=>{ct=wt(ut,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,ct,In),vn(ut,"title",Ju),Nn=No(ut,"",Nn,{"--level":(n(j),T(()=>n(j).length+1))})},[()=>({"jse-hovered":n(h)===Cs,"jse-selected":n(k)&&Er(d())})]),N(Xe,ut)},Ln=Dt(()=>(p(u()),n(h),p(Cs),n(k),p(Er),p(d()),T(()=>!u().readOnly&&(n(h)===Cs||n(k)&&Er(d())))));ne(tr,Xe=>{n(Ln)&&Xe(Gt)}),lr(D(tr,2),1,()=>n(E)||gi,br,(Xe,ct,Nn)=>{var ut=Uy(),fn=dt(ut);lr(fn,1,()=>(p(a()),n(ct),n(b),T(()=>function(yn,Rt,gn){var Gn=Rt.start,An=Math.min(Rt.end,yn.length),Un=xp(Gn,An);return gn&&gn.offset!==0?hf(Un,gn.selectionStartIndex,gn.selectionItemsCount,gn.offset).map((Dn,fr)=>({index:Dn,gutterIndex:fr})):Un.map(Dn=>({index:Dn,gutterIndex:Dn}))}(a(),n(ct),n(b)))),yn=>yn.index,(yn,Rt)=>{var gn=De(()=>(p(Dr),p(l()),n(Rt),T(()=>Dr(l())?l().items[n(Rt).index]:void 0))),Gn=De(()=>(p(oc),p(u()),p(d()),n(j),n(Rt),T(()=>oc(u().getJson(),d(),n(j).concat(String(n(Rt).index)))))),An=ir(),Un=dt(An),Dn=De(()=>(p(_l),p(s()),n(Rt),T(()=>_l(s(),n(Rt).index)))),fr=De(()=>(p(Dr),p(i()),n(Rt),T(()=>Dr(i())?i().items[n(Rt).index]:void 0))),jr=De(()=>(p(Dr),p(c()),n(Rt),T(()=>Dr(c())?c().items[n(Rt).index]:void 0)));Ld(Un,{get value(){return p(a()),n(Rt),T(()=>a()[n(Rt).index])},get pointer(){return n(Dn)},get state(){return n(fr)},get validationErrors(){return n(gn)},get searchResults(){return n(jr)},get selection(){return n(Gn)},get context(){return u()},onDragSelectionStart:le,$$slots:{identifier:(pr,Pn)=>{var Wn=Iy(),nr=R(Wn),Fr=R(nr);je(()=>st(Fr,(n(Rt),T(()=>n(Rt).gutterIndex)))),N(pr,Wn)}}}),N(yn,An)});var Mt=D(fn,2),In=yn=>{var Rt=De(()=>n(E)||gi);My(yn,{get visibleSections(){return n(Rt)},sectionIndex:Nn,get total(){return p(a()),T(()=>a().length)},get path(){return n(j)},get onExpandSection(){return p(u()),T(()=>u().onExpandSection)},get selection(){return d()},get context(){return u()}})};ne(Mt,yn=>{n(ct),p(a()),T(()=>n(ct).end<a().length)&&yn(In)}),N(Xe,ut)});var Tn=D(En,2),vr=D(R(Tn),2),yr=Xe=>{var ct=el();fe("click",ct,de),N(Xe,ct)};ne(vr,Xe=>{n(o)||Xe(yr)}),N(ue,bt)};ne(re,ue=>{n(x)&&ue(Yt)}),fe("click",ze,A),N(_,O)},me=Dt(()=>(p(a()),T(()=>Array.isArray(a())))),we=_=>{var O=_y(),K=dt(O),te=R(K),ze=R(te),X=R(ze),B=ue=>{tn(ue,{get data(){return Na}})},Be=ue=>{tn(ue,{get data(){return pl}})};ne(X,ue=>{n(x)?ue(B):ue(Be,-1)});var Bt=D(ze,2);dr(Bt,t,"identifier",{},null);var Ne=D(Bt,2),tt=ue=>{N(ue,Zu())};ne(Ne,ue=>{n(o)||ue(tt)});var it=D(Ne,2),ye=R(it),nt=R(ye),Et=ue=>{N(ue,Jy())},mn=ue=>{var bt=Ly();yc(D(dt(bt),2),{onclick:U,children:(En,tr)=>{var Gt=Hr();je((Ln,Tn)=>st(Gt,"".concat(Ln??"",`
                `).concat(Tn??"")),[()=>(p(a()),T(()=>Object.keys(a()).length)),()=>(p(a()),T(()=>Object.keys(a()).length===1?"prop":"props"))]),N(En,Gt)},$$slots:{default:!0}}),N(ue,bt)};ne(nt,ue=>{n(x)?ue(Et):ue(mn,-1)});var Nt=D(it,2),ft=ue=>{var bt=Xu();$a(R(bt),{get root(){return n(o)},selected:!0,get onContextMenu(){return p(u()),T(()=>u().onContextMenu)}}),N(ue,bt)},Kt=Dt(()=>(p(u()),n(k),p(d()),p(un),p(Rn),p(Ur),p(Lt),p($e),n(j),T(()=>!u().readOnly&&n(k)&&d()&&(un(d())||Rn(d()))&&!Ur(d())&&Lt($e(d()),n(j)))));ne(Nt,ue=>{n(Kt)&&ue(ft)});var ke=D(te,2),He=ue=>{ji(ue,{get validationError(){return n(q)},onExpand:U})};ne(ke,ue=>{n(q),n(x),T(()=>n(q)&&(!n(x)||!n(q).isChildError))&&ue(He)});var Je=D(ke,2),Ye=ue=>{var bt=ep();fe("click",bt,Me),N(ue,bt)},Ie=ue=>{var bt=el();fe("click",bt,de),N(ue,bt)};ne(Je,ue=>{n(x)?ue(Ye):n(o)||ue(Ie,1)});var re=D(K,2),Yt=ue=>{var bt=Fy(),En=dt(bt),tr=R(En),Gt=Xe=>{var ct,Nn,ut=tp(),fn=R(ut),Mt=De(()=>(n(k),p(Er),p(d()),T(()=>n(k)&&Er(d()))));$a(fn,{insert:!0,get selected(){return n(Mt)},onContextMenu:Ee}),je(In=>{ct=wt(ut,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,ct,In),vn(ut,"title",Ju),Nn=No(ut,"",Nn,{"--level":(n(j),T(()=>n(j).length+1))})},[()=>({"jse-hovered":n(h)===Cs,"jse-selected":n(k)&&Er(d())})]),N(Xe,ut)},Ln=Dt(()=>(p(u()),n(h),p(Cs),n(k),p(Er),p(d()),T(()=>!u().readOnly&&(n(h)===Cs||n(k)&&Er(d())))));ne(tr,Xe=>{n(Ln)&&Xe(Gt)}),lr(D(tr,2),1,()=>(p(a()),n(b),T(()=>function(Xe,ct){var Nn=Object.keys(Xe);return ct&&ct.offset!==0?hf(Nn,ct.selectionStartIndex,ct.selectionItemsCount,ct.offset):Nn}(a(),n(b)))),br,(Xe,ct)=>{var Nn=De(()=>(p(_l),p(s()),n(ct),T(()=>_l(s(),n(ct))))),ut=De(()=>(p(uo),p(c()),n(ct),T(()=>uo(c())?c().properties[n(ct)]:void 0))),fn=De(()=>(p(uo),p(l()),n(ct),T(()=>uo(l())?l().properties[n(ct)]:void 0))),Mt=De(()=>(n(j),n(ct),T(()=>n(j).concat(n(ct))))),In=De(()=>(p(oc),p(u()),p(d()),p(n(Mt)),T(()=>oc(u().getJson(),d(),n(Mt))))),yn=ir(),Rt=dt(yn),gn=De(()=>(p(uo),p(i()),n(ct),T(()=>uo(i())?i().properties[n(ct)]:void 0)));Ld(Rt,{get value(){return p(a()),n(ct),T(()=>a()[n(ct)])},get pointer(){return n(Nn)},get state(){return n(gn)},get validationErrors(){return n(fn)},get searchResults(){return n(ut)},get selection(){return n(In)},get context(){return u()},onDragSelectionStart:le,$$slots:{identifier:(Gn,An)=>{var Un,Dn=Wy(),fr=R(Dn),jr=De(()=>(p(Wf),p(n(ut)),T(()=>Wf(n(ut)))));(function(pr,Pn){ot(Pn,!1);var Wn=P(void 0,!0),nr=P(void 0,!0),Fr=v(Pn,"pointer",9),xr=v(Pn,"key",9),oe=v(Pn,"selection",9),Jt=v(Pn,"searchResultItems",9),rr=v(Pn,"onUpdateKey",9),It=v(Pn,"context",9),Fn=P(void 0,!0);function Rr(Ut){n(nr)||It().readOnly||(Ut.preventDefault(),It().onSelect(kv(n(Fn))))}function Zn(Ut,Mn){var _t=rr()(xr(),It().normalization.unescapeValue(Ut)),w=Xt(n(Fn)).concat(_t);It().onSelect(Mn===as.nextInside?$t(w):Ja(w)),Mn!==as.self&&It().focus()}function Or(){It().onSelect(Ja(n(Fn))),It().focus()}W(()=>p(Fr()),()=>{f(Fn,Po(Fr()))}),W(()=>(p(oe()),n(Fn)),()=>{f(Wn,Br(oe())&&Lt(oe().path,n(Fn)))}),W(()=>(n(Wn),p(oe())),()=>{f(nr,n(Wn)&&Ur(oe()))}),jn(),kt(!0);var Tr=Ey(),Mr=dt(Tr),hr=Ut=>{var Mn=De(()=>(p(It()),p(xr()),T(()=>It().normalization.escapeValue(xr())))),_t=De(()=>(p(Ur),p(oe()),T(()=>Ur(oe())?oe().initialValue:void 0)));am(Ut,{get value(){return n(Mn)},get initialValue(){return n(_t)},label:"Edit key",shortText:!0,onChange:Zn,onCancel:Or,get onFind(){return p(It()),T(()=>It().onFind)}})},_n=Ut=>{var Mn,_t=qy(),w=R(_t),I=Oe=>{var Pe=De(()=>(p(It()),p(xr()),T(()=>It().normalization.escapeValue(xr()))));vm(Oe,{get text(){return n(Pe)},get searchResultItems(){return Jt()}})},Q=Oe=>{var Pe=Hr();je(Te=>st(Pe,Te),[()=>(p(Ai),p(It()),p(xr()),T(()=>Ai(It().normalization.escapeValue(xr()))))]),N(Oe,Pe)};ne(w,Oe=>{Jt()?Oe(I):Oe(Q,-1)}),je(()=>Mn=wt(_t,1,"jse-key svelte-1n4cez4",null,Mn,{"jse-empty":xr()===""})),fe("dblclick",_t,Rr),N(Ut,_t)};ne(Mr,Ut=>{p(It()),n(nr),T(()=>!It().readOnly&&n(nr))?Ut(hr):Ut(_n,-1)});var pn=D(Mr,2),At=Ut=>{$a(Ut,{selected:!0,get onContextMenu(){return p(It()),T(()=>It().onContextMenu)}})};ne(pn,Ut=>{p(It()),n(Wn),n(nr),T(()=>!It().readOnly&&n(Wn)&&!n(nr))&&Ut(At)}),N(pr,Tr),at()})(fr,{get pointer(){return n(Nn)},get key(){return n(ct)},get selection(){return n(In)},get searchResultItems(){return n(jr)},get context(){return u()},onUpdateKey:F}),je(pr=>Un=wt(Dn,1,"jse-key-outer svelte-1qi6rc1",null,Un,pr),[()=>({"jse-selected-key":Br(n(In))&&Lt(n(In).path,n(Mt))})]),N(Gn,Dn)}}}),N(Xe,yn)});var Tn=D(En,2),vr=D(R(Tn),2),yr=Xe=>{var ct=el();fe("click",ct,de),N(Xe,ct)};ne(vr,Xe=>{n(o)||Xe(yr)}),N(ue,bt)};ne(re,ue=>{n(x)&&ue(Yt)}),fe("click",ze,A),N(_,O)},Ce=Dt(()=>(p(rn),p(a()),T(()=>rn(a())))),Ot=_=>{var O=Vy(),K=R(O),te=R(K);dr(te,t,"identifier",{},null);var ze=D(te,2),X=ft=>{N(ft,Zu())};ne(ze,ft=>{n(o)||ft(X)});var B=D(ze,2),Be=R(B),Bt=De(()=>n(k)?d():void 0),Ne=De(()=>(p(Ff),p(c()),T(()=>Ff(c()))));Om(Be,{get path(){return n(j)},get value(){return a()},get enforceString(){return n(M)},get selection(){return n(Bt)},get searchResultItems(){return n(Ne)},get context(){return u()}});var tt=D(B,2),it=ft=>{var Kt=Xu();$a(R(Kt),{get root(){return n(o)},selected:!0,get onContextMenu(){return p(u()),T(()=>u().onContextMenu)}}),N(ft,Kt)},ye=Dt(()=>(p(u()),n(k),p(d()),p(un),p(Rn),p(Ur),p(Lt),p($e),n(j),T(()=>!u().readOnly&&n(k)&&d()&&(un(d())||Rn(d()))&&!Ur(d())&&Lt($e(d()),n(j)))));ne(tt,ft=>{n(ye)&&ft(it)});var nt=D(K,2),Et=ft=>{ji(ft,{get validationError(){return n(q)},onExpand:U})};ne(nt,ft=>{n(q)&&ft(Et)});var mn=D(nt,2),Nt=ft=>{var Kt=el();fe("click",Kt,de),N(ft,Kt)};ne(mn,ft=>{n(o)||ft(Nt)}),N(_,O)};ne(se,_=>{n(me)?_(ce):n(Ce)?_(we,1):_(Ot,-1)});var Qt=D(se,2),on=_=>{var O,K=$y(),te=R(K),ze=De(()=>(n(k),p(vo),p(d()),T(()=>n(k)&&vo(d()))));$a(te,{insert:!0,get selected(){return n(ze)},onContextMenu:Se}),je(X=>{O=wt(K,1,"jse-insert-area jse-after svelte-1qi6rc1",null,O,X),vn(K,"title",Ju)},[()=>({"jse-hovered":n(h)===nc,"jse-selected":n(k)&&vo(d())})]),N(_,K)},V=Dt(()=>(p(u()),n(h),p(nc),n(k),p(vo),p(d()),T(()=>!u().readOnly&&(n(h)===nc||n(k)&&vo(d())))));ne(Qt,_=>{n(V)&&_(on)}),je((_,O)=>{Ke=wt(Re,1,_,"svelte-1qi6rc1",Ke,O),vn(Re,"data-path",n(r)),vn(Re,"aria-selected",n(k)),Ae=No(Re,"",Ae,{"--level":(n(j),T(()=>n(j).length))})},[()=>ds((p(Qo),n(x),p(u()),n(j),p(a()),T(()=>Qo("jse-json-node",{"jse-expanded":n(x)},u().onClassName(n(j),a()))))),()=>({"jse-root":n(o),"jse-selected":n(k)&&Rn(d()),"jse-selected-value":n(k)&&un(d()),"jse-readonly":u().readOnly,"jse-hovered":n(h)===jf})]),fe("mousedown",Re,function(_){if((_.buttons===1||_.buttons===2)&&!((O=_.target).nodeName==="DIV"&&O.contentEditable==="true"||_.buttons===1&&Hh(_.target,"BUTTON"))){var O;_.stopPropagation(),_.preventDefault(),u().focus(),document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",J);var K=Du(_.target),te=u().getJson(),ze=u().getDocumentState();if(!d()||K===qn.after||K===qn.inside||d().type!==K&&d().type!==qn.multi||!kl(te,d(),n(j)))if(Yn(Yn().selecting=!0),Yn(Yn().selectionAnchor=n(j)),Yn(Yn().selectionAnchorType=K),Yn(Yn().selectionFocus=n(j)),_.shiftKey){var X=u().getSelection();X&&u().onSelect(no(Us(X),n(j)))}else if(K===qn.multi)if(n(o)&&_.target.hasAttribute("data-path")){var B=Wt(tm(a(),ze));u().onSelect(Rd(B))}else u().onSelect(no(n(j),n(j)));else te!==void 0&&u().onSelect(Nf(K,n(j)));else _.button===0&&m()(_)}}),fe("mousemove",Re,function(_){if(Yn().selecting){_.preventDefault(),_.stopPropagation(),Yn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var O=Du(_.target);Lt(n(j),Yn().selectionFocus)&&O===Yn().selectionAnchorType||(Yn(Yn().selectionFocus=n(j)),Yn(Yn().selectionAnchorType=O),u().onSelect(no(Yn().selectionAnchor||Yn().selectionFocus,Yn().selectionFocus)))}}),fe("mouseover",Re,function(_){Yn().selecting||Yn().dragging||(_.stopPropagation(),es(_.target,"data-type","selectable-value")?f(h,jf):es(_.target,"data-type","selectable-key")?f(h,void 0):es(_.target,"data-type","insert-selection-area-inside")?f(h,Cs):es(_.target,"data-type","insert-selection-area-after")&&f(h,nc),clearTimeout(y))}),fe("mouseout",Re,function(_){_.stopPropagation(),y=window.setTimeout(()=>f(h,void 0))}),N(e,Re),at()}var Mm={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},zm={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},np={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},Qy={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-welcome.svelte-1lhnan {
  flex: 1;
  overflow: auto;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan .jse-space.jse-before:where(.svelte-1lhnan) {
  flex: 1;
}
.jse-welcome.svelte-1lhnan .jse-space.jse-after:where(.svelte-1lhnan) {
  flex: 2;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) .jse-welcome-info:where(.svelte-1lhnan) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);var Ky=Y('<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>',1),Yy=Y('<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>');function Wd(e,t){var r=typeof e=="string"?e.toLowerCase():e,o=typeof t=="string"?t.toLowerCase():t;return Mg(r,o)}function qm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=Ve(e,t);if(Ar(s)){if(r===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,d=function(m,g){var h={boolean:0,number:1,string:2,undefined:4},y=3;return function(b,j){var x=Ve(b,m),M=Ve(j,m);if(typeof x!=typeof M){var E,q,k=(E=h[typeof x])!==null&&E!==void 0?E:y,A=(q=h[typeof M])!==null&&q!==void 0?q:y;return k>A?g:k<A?-g:0}return typeof x=="number"||typeof x=="boolean"?x>M?g:x<M?-g:0:sr(x)?0:g*Wd(x,M)}}(l,c),u=Ve(a,i);return[{op:"replace",path:qt(i),value:u.slice(0).sort(d)}]}(e,t,r,o)}if(rn(s))return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=Ve(a,i),d=Object.keys(c).slice();d.sort((m,g)=>l*Wd(m,g));var u={};return d.forEach(m=>u[m]=c[m]),[{op:"replace",path:qt(i),value:u}]}(e,t,o);throw new Error("Cannot sort: no array or object")}Pl(["click"]);xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-dropdown.svelte-1k47orx {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  min-width: 80px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):focus, .jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-1k47orx) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);var Gy=Y('<button type="button"> </button>'),Zy=Y('<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>'),Xy=Y('<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>');function ex(e,t){ot(t,!1);var r=v(t,"items",9),o=v(t,"selectedItem",9),s=v(t,"onSelect",9);kt(!0);var a=Xy(),i=R(a);lr(i,1,()=>(p(Nc),p(r()),T(()=>Nc(r(),100))),d=>d,(d,u)=>{var m,g=Gy(),h=R(g);je((y,b)=>{m=wt(g,1,"jse-navigation-bar-dropdown-item svelte-1k47orx",null,m,{"jse-selected":n(u)===o()}),vn(g,"title",y),st(h,b)},[()=>(n(u),T(()=>n(u).toString())),()=>(p(Sa),n(u),T(()=>Sa(n(u).toString(),30)))]),fe("click",g,wa(()=>s()(n(u)))),N(d,g)});var l=D(i,2),c=d=>{var u=Zy();vn(u,"title","Limited to 100 items"),N(d,u)};ne(l,d=>{p(r()),T(()=>r().length>100)&&d(c)}),N(e,a),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-item.svelte-13sijxb {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb) {
  font-family: inherit;
  font-size: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  min-width: 2em;
  white-space: nowrap;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):focus, .jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--jse-panel-button-color-highlight, var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d)));
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-13sijxb) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-13sijxb) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-13sijxb:last-child {
  padding-right: var(--jse-padding, 10px);
}`);var tx=Y('<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>'),nx=Y('<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>');function rp(e,t){ot(t,!1);var r,o=P(void 0,!0),s=P(void 0,!0),a=hs("absolute-popup"),i=a.openAbsolutePopup,l=a.closeAbsolutePopup,c=v(t,"path",9),d=v(t,"index",9),u=v(t,"onSelect",9),m=v(t,"getItems",9),g=P(void 0,!0),h=P(!1,!0);function y(q){l(r),u()(n(o).concat(q))}W(()=>(p(c()),p(d())),()=>{f(o,c().slice(0,d()))}),W(()=>(p(c()),p(d())),()=>{f(s,c()[d()])}),jn(),kt(!0);var b,j=nx(),x=R(j);tn(R(x),{get data(){return yp}});var M=D(x,2),E=q=>{var k=tx(),A=R(k);je(()=>st(A,n(s))),fe("click",k,()=>y(n(s))),N(q,k)};ne(M,q=>{n(s)!==void 0&&q(E)}),Hn(j,q=>f(g,q),()=>n(g)),je(()=>b=wt(x,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb",null,b,{"jse-open":n(h)})),fe("click",x,function(){if(n(g)){f(h,!0);var q={items:m()(n(o)),selectedItem:n(s),onSelect:y};r=i(ex,q,{anchor:n(g),closeOnOuterClick:!0,onClose:()=>{f(h,!1)}})}}),N(e,j),at()}function qv(e){var t,r;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(r=document).queryCommandSupported)!==null&&t!==void 0&&t.call(r,"copy")){var o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(s){console.error(s)}finally{document.body.removeChild(o)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-path-editor.svelte-uyexy4 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button:where(.svelte-uyexy4) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-copy.copied:where(.svelte-uyexy4) {
  color: var(--jse-message-success-background, var(--message-success-background, #9ac45d));
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-validation-error:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 .jse-copied-text:where(.svelte-uyexy4) {
  background: var(--jse-message-success-background, var(--message-success-background, #9ac45d));
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var rx=Y('<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>'),ox=Y('<div class="jse-copied-text svelte-uyexy4">Copied!</div>'),ax=Y('<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function sx(e,t){ot(t,!1);var r=P(),o=hs("absolute-popup"),s=v(t,"path",8),a=v(t,"pathParser",8),i=v(t,"onChange",8),l=v(t,"onClose",8),c=v(t,"onError",8),d=v(t,"pathExists",8),u=P(),m=P(),g=P(!1),h=void 0,y=P(!1);function b(){n(u).focus()}function j(J){try{var Z=a().parse(J);return function($){if(!d()($))throw new Error("Path does not exist in current document")}(Z),{path:Z,error:void 0}}catch($){return{path:void 0,error:$}}}Xr(()=>{b()}),Do(()=>{clearTimeout(h)}),W(()=>(p(a()),p(s())),()=>{f(m,a().stringify(s()))}),W(()=>(n(g),n(m)),()=>{f(r,n(g)?j(n(m)).error:void 0)}),jn(),kt();var x,M=ax(),E=R(M);Hn(E,J=>f(u,J),()=>n(u));var q=D(E,2),k=J=>{var Z=rx();tn(R(Z),{get data(){return Bs}}),oo(Z,($,le)=>Ti?.($,le),()=>be({text:String(n(r)||"")},o)),N(J,Z)};ne(q,J=>{n(r)&&J(k)});var A=D(q,2),U=J=>{N(J,ox())};ne(A,J=>{n(y)&&J(U)});var F,S=D(A,2);tn(R(S),{get data(){return Ga}}),je(()=>{x=wt(M,1,"jse-navigation-bar-path-editor svelte-uyexy4",null,x,{error:n(r)}),Ws(E,n(m)),F=wt(S,1,"jse-navigation-bar-copy svelte-uyexy4",null,F,{copied:n(y)})}),fe("keydown",E,wa(function(J){var Z=Ba(J);if(Z==="Escape"&&(J.preventDefault(),l()()),Z==="Enter"){J.preventDefault(),f(g,!0);var $=j(n(m));$.path!==void 0?i()($.path):c()($.error)}})),fe("input",E,function(J){f(m,J.currentTarget.value)}),fe("click",S,function(){qv(n(m)),f(y,!0),h=window.setTimeout(()=>f(y,!1),1e3),b()}),N(e,M),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar.svelte-hjhal6 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-button-color, inherit);
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.flex:where(.svelte-hjhal6) {
  flex: 1;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):focus, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):hover, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.editing:where(.svelte-hjhal6) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--jse-panel-button-color-highlight, var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d)));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) .jse-navigation-bar-space:where(.svelte-hjhal6) {
  flex: 1;
  text-align: left;
}`);var ix=Y("<!> <!>",1),lx=Y('<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>');function cx(e,t){ot(t,!1);var r=P(void 0,!0),o=P(void 0,!0),s=Wr("jsoneditor:NavigationBar"),a=v(t,"json",9),i=v(t,"selection",9),l=v(t,"onSelect",9),c=v(t,"onError",9),d=v(t,"pathParser",9),u=P(void 0,!0),m=P(!1,!0);function g(Z){s("get items for path",Z);var $=Ve(a(),Z);if(Array.isArray($))return xp(0,$.length).map(String);if(rn($)){var le=Object.keys($).slice(0);return le.sort(Wd),le}return[]}function h(Z){return Za(a(),Z)}function y(Z){s("select path",JSON.stringify(Z)),l()(no(Z,Z))}function b(){f(m,!1)}function j(Z){b(),y(Z)}W(()=>(p(i()),$e),()=>{f(r,i()?$e(i()):[])}),W(()=>(p(a()),n(r)),()=>{f(o,sr(Ve(a(),n(r))))}),W(()=>n(r),()=>{n(r),setTimeout(()=>{if(n(u)&&n(u).scrollTo){var Z=n(u).scrollWidth-n(u).clientWidth;Z>0&&(s("scrollTo ",Z),n(u).scrollTo({left:Z,behavior:"smooth"}))}})}),jn(),kt(!0);var x=lx(),M=R(x),E=Z=>{var $=ix(),le=dt($);lr(le,1,()=>n(r),br,(Me,de,Ee)=>{rp(Me,{getItems:g,get path(){return n(r)},index:Ee,onSelect:y})});var G=D(le,2),qe=Me=>{rp(Me,{getItems:g,get path(){return n(r)},get index(){return n(r),T(()=>n(r).length)},onSelect:y})};ne(G,Me=>{n(o)&&Me(qe)}),N(Z,$)},q=Z=>{sx(Z,{get path(){return n(r)},onClose:b,onChange:j,get onError(){return c()},pathExists:h,get pathParser(){return d()}})};ne(M,Z=>{n(m)?Z(q,-1):Z(E)});var k,A=D(M,2),U=R(A),F=R(U),S=D(U,2),J=De(()=>n(m)?bg:jg);tn(S,{get data(){return n(J)}}),Hn(x,Z=>f(u,Z),()=>n(u)),je(Z=>{k=wt(A,1,"jse-navigation-bar-edit svelte-hjhal6",null,k,{flex:!n(m),editing:n(m)}),vn(A,"title",n(m)?"Cancel editing the selected path":"Edit the selected path"),st(F,Z)},[()=>(p(sr),p(a()),n(m),T(()=>sr(a())||n(m)?" ":"Navigation bar"))]),fe("click",A,function(){f(m,!n(m))}),N(e,x),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-search-box.svelte-1x1x8q0 {
  border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-radius: 3px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: inline-block;
  width: 400px;
  max-width: 100%;
  overflow: auto;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0),
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0):hover {
  color: var(--jse-panel-button-color-highlight, var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d)));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: 3px;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  height: 28px;
  padding: 0 5px;
  margin: 0;
  flex: 1;
  width: 0;
  min-width: 50px;
  outline: none;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-replace-toggle:where(.svelte-1x1x8q0) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-icon:where(.svelte-1x1x8q0) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) label.jse-search-input-label:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count:where(.svelte-1x1x8q0) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count.jse-visible:where(.svelte-1x1x8q0) {
  visibility: visible;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  width: auto;
}`);var ux=Y('<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),dx=Y('<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>'),vx=Y('<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function Em(e,t){ot(t,!1);var r=P(void 0,!0),o=P(void 0,!0),s=P(void 0,!0),a=Wr("jsoneditor:SearchBox"),i=v(t,"json",9),l=v(t,"documentState",9),c=v(t,"parser",9),d=v(t,"showSearch",9),u=v(t,"showReplace",13),m=v(t,"readOnly",9),g=v(t,"columns",9),h=v(t,"onSearch",9),y=v(t,"onFocus",9),b=v(t,"onPatch",9),j=v(t,"onClose",9),x=P("",!0),M="",E=P("",!0),q=P(!1,!0),k=P(void 0,!0),A=xc(function(O){return me.apply(this,arguments)},300),U=xc(function(O){return we.apply(this,arguments)},300);function F(){u(!u()&&!m())}function S(O){O.stopPropagation();var K=Ba(O);K==="Enter"&&(O.preventDefault(),n(x)!==M?A.flush():Ee()),K==="Shift+Enter"&&(O.preventDefault(),Ke()),K==="Ctrl+Enter"&&(O.preventDefault(),u()?le():Ee()),K==="Ctrl+H"&&(O.preventDefault(),F()),K==="Escape"&&(O.preventDefault(),Qt())}function J(O){Ba(O)==="Enter"&&(O.preventDefault(),O.stopPropagation(),le())}function Z(){return $.apply(this,arguments)}function $(){return($=vt(function*(){Vn(),yield A.flush()})).apply(this,arguments)}function le(){return G.apply(this,arguments)}function G(){return(G=vt(function*(){var O;if(!m()){var K=(O=n(k))===null||O===void 0?void 0:O.activeItem;if(a("handleReplace",{replaceText:n(E),activeItem:K}),n(k)&&K&&i()!==void 0){f(k,be(be({},Uf(n(k))),{},{activeIndex:n(o)}));var te=e0(i(),l(),n(E),K,c()),ze=te.operations,X=te.newSelection;b()(ze,(B,Be)=>({state:Be,selection:X})),Vn(),yield U.flush(),yield Re()}}})).apply(this,arguments)}function qe(){return Me.apply(this,arguments)}function Me(){return(Me=vt(function*(){if(!m()){a("handleReplaceAll",{text:n(x),replaceText:n(E)});var O=function(ze,X,B,Be,Bt){for(var Ne=Df(B,ze,{maxResults:1/0}),tt=[],it=0;it<Ne.length;it++){var ye=Ne[it-1],nt=Ne[it];it!==0&&nt.field===ye.field&&Lt(nt.path,ye.path)?Wt(tt).items.push(nt):tt.push({path:nt.path,field:nt.field,items:[nt]})}tt.sort((Nt,ft)=>Nt.field!==ft.field?Nt.field===Ho.key?1:-1:ft.path.length-Nt.path.length);var Et,mn=[];return tt.forEach(Nt=>{var ft=Nt.field,Kt=Nt.path,ke=Nt.items;if(ft===Ho.key){var He=Xt(Kt),Je=Ve(ze,He),Ye=Wt(Kt),Ie=Bl(He,Object.keys(Je),Ye,Jf(Ye,Be,ke));mn=mn.concat(Ie),Et=Ri(ze,Ie)}else{if(ft!==Ho.value)throw new Error("Cannot replace: unknown type of search result field ".concat(ft));var re=Ve(ze,Kt);if(re===void 0)throw new Error("Cannot replace: path not found ".concat(qt(Kt)));var Yt=typeof re=="string"?re:String(re),ue=ra(ze,X,Kt),bt=Jf(Yt,Be,ke),En=[{op:"replace",path:qt(Kt),value:ue?bt:_i(bt,Bt)}];mn=mn.concat(En),Et=Ri(ze,En)}}),{operations:mn,newSelection:Et}}(i(),l(),n(x),n(E),c()),K=O.operations,te=O.newSelection;b()(K,(ze,X)=>({state:X,selection:te})),yield Re()}})).apply(this,arguments)}function de(O){O.select()}function Ee(){return Se.apply(this,arguments)}function Se(){return(Se=vt(function*(){f(k,n(k)?Uf(n(k)):void 0),yield Re()})).apply(this,arguments)}function Ke(){return Ae.apply(this,arguments)}function Ae(){return Ae=vt(function*(){f(k,n(k)?function(O){var K=O.activeIndex>0?O.activeIndex-1:O.items.length-1,te=O.items[K],ze=O.items.map((X,B)=>be(be({},X),{},{active:B===K}));return be(be({},O),{},{items:ze,activeItem:te,activeIndex:K})}(n(k)):void 0),yield Re()}),Ae.apply(this,arguments)}function Re(){return se.apply(this,arguments)}function se(){return(se=vt(function*(){var O;a("handleFocus",n(k));var K=(O=n(k))===null||O===void 0?void 0:O.activeItem;K&&i()!==void 0&&(yield y()(K.path,K.resultIndex))})).apply(this,arguments)}function ce(){return ce=vt(function*(O){yield Ce(O,n(x),i())}),ce.apply(this,arguments)}function me(){return me=vt(function*(O){yield Ce(d(),O,i()),yield Re()}),me.apply(this,arguments)}function we(){return we=vt(function*(O){yield Ce(d(),n(x),O)}),we.apply(this,arguments)}function Ce(O,K,te){return Ot.apply(this,arguments)}function Ot(){return Ot=vt(function*(O,K,te){return O?(a("applySearch",{showSearch:O,text:K}),K===""?(a("clearing search result"),n(k)!==void 0&&f(k,void 0),Promise.resolve()):(M=K,f(q,!0),new Promise(ze=>{setTimeout(()=>{var X=Df(K,te,{maxResults:Bu,columns:g()});f(k,function(B,Be){var Bt=Be!=null&&Be.activeItem?Lf(Be.activeItem):void 0,Ne=B.findIndex(ye=>Lt(Bt,Lf(ye))),tt=Ne!==-1?Ne:Be?.activeIndex!==void 0&&Be?.activeIndex<B.length?Be?.activeIndex:B.length>0?0:-1,it=B.map((ye,nt)=>be(be({resultIndex:nt},ye),{},{active:nt===tt}));return{items:it,activeItem:it[tt],activeIndex:tt}}(X,n(k))),f(q,!1),ze()})}))):(n(k)&&f(k,void 0),Promise.resolve())}),Ot.apply(this,arguments)}function Qt(){a("handleClose"),A.cancel(),U.cancel(),Ce(!1,n(x),i()),j()()}W(()=>n(k),()=>{var O;f(r,((O=n(k))===null||O===void 0||(O=O.items)===null||O===void 0?void 0:O.length)||0)}),W(()=>n(k),()=>{var O;f(o,((O=n(k))===null||O===void 0?void 0:O.activeIndex)||0)}),W(()=>(n(r),Bu),()=>{f(s,n(r)>=Bu?"".concat(999,"+"):String(n(r)))}),W(()=>(p(h()),n(k)),()=>{h()(n(k))}),W(()=>p(d()),()=>{(function(O){ce.apply(this,arguments)})(d())}),W(()=>n(x),()=>{A(n(x))}),W(()=>p(i()),()=>{U(i())}),jn(),kt(!0);var on=ir(),V=dt(on),_=O=>{var K=vx(),te=R(K),ze=R(te),X=Je=>{var Ye=ux(),Ie=R(Ye),re=De(()=>u()?Na:pl);tn(Ie,{get data(){return n(re)}}),fe("click",Ye,F),N(Je,Ye)};ne(ze,Je=>{m()||Je(X)});var B=R(D(ze,2)),Be=R(B),Bt=R(Be),Ne=Je=>{tn(Je,{get data(){return Cg},spin:!0})},tt=Je=>{tn(Je,{get data(){return Xc}})};ne(Bt,Je=>{n(q)?Je(Ne):Je(tt,-1)});var it=D(Be,2),ye=R(it);$r(()=>Tc(ye,()=>n(x),Je=>f(x,Je))),oo(ye,Je=>de?.(Je)),$r(()=>fe("paste",ye,Z));var nt,Et=D(it,2),mn=R(Et),Nt=D(Et,2);tn(R(Nt),{get data(){return wg}});var ft=D(Nt,2);tn(R(ft),{get data(){return kg}});var Kt=D(ft,2);tn(R(Kt),{get data(){return Zc}});var ke=D(B,2),He=Je=>{var Ye=dx(),Ie=R(Ye),re=D(Ie,2),Yt=D(re,2);Tc(Ie,()=>n(E),ue=>f(E,ue)),fe("keydown",Ie,J),fe("click",re,le),fe("click",Yt,qe),N(Je,Ye)};ne(ke,Je=>{u()&&!m()&&Je(He)}),je(()=>{var Je;nt=wt(Et,1,"jse-search-count svelte-1x1x8q0",null,nt,{"jse-visible":n(x)!==""}),st(mn,"".concat(n(o)!==-1&&n(o)<n(r)?"".concat(n(o)+1,"/"):"").concat((Je=n(s))!==null&&Je!==void 0?Je:""))}),fe("click",Nt,Ee),fe("click",ft,Ke),fe("click",Kt,Qt),fe("keydown",te,S),N(O,K)};ne(V,O=>{d()&&O(_)}),N(e,on),at()}var Ol=Symbol("path");function fx(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,o={};Array.isArray(e)&&function(a,i,l){if(a.length<i)a.forEach(l);else for(var c=i>1?(a.length-1)/(i-1):a.length,d=0;d<i;d++){var u=Math.floor(d*c);l(a[u],u,a)}}(e,r,a=>{rn(a)?Am(a,o,t):o[Ol]=!0});var s=[];return Ol in o&&s.push([]),Pm(o,[],s,t),s}function Am(e,t,r){for(var o in e){var s=e[o],a=t[o]||(t[o]={});rn(s)&&r?Am(s,a,r):a[Ol]===void 0&&(a[Ol]=!0)}}function Pm(e,t,r,o){for(var s in e){var a=t.concat(s),i=e[s];i&&i[Ol]===!0&&r.push(a),Jr(i)&&o&&Pm(i,a,r,o)}}function px(e,t,r,o,s,a){for(var i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=Ar(r)?r.length:0,c=function(M,E){var q=Object.values(M);if(dn(q))return E;var k=(A,U)=>A+U;return q.reduce(k)/q.length}(o,s),d=e-i,u=t+2*i,m=M=>o[M]||s,g=0,h=a;h<d&&g<l;)h+=m(g),g++;g>0&&(h-=m(--g));for(var y=g,b=0;b<u&&y<l;)b+=m(y),y++;for(var j=0,x=y;x<l;x++)j+=m(x);return{startIndex:g,endIndex:y,startHeight:h,endHeight:j,averageItemHeight:c,visibleHeight:b,visibleItems:Ar(r)?r.slice(g,y):[]}}function op(e,t,r,o){for(var s=zo(e,t).rowIndex,a=0,i=0;i<s;i++)a+=r[i]||o;return a}function zo(e,t){var r=kb(e),o=r[0],s=id(r).slice(1),a=parseInt(o,10);return{rowIndex:isNaN(a)?-1:a,columnIndex:t.findIndex(i=>ua(s,i))}}function Ms(e,t){var r=e.rowIndex,o=e.columnIndex;return[String(r),...t[o]]}function hx(e,t){var r=so(fb(e,l=>sv(l.path[0])),2),o=r[0],s=r[1],a=pb(o,mx),i=hb(a,l=>{var c={row:[],columns:{}};return l.forEach(d=>{var u=function(m,g){var h=zo(m.path,g);return h.columnIndex!==-1?h.columnIndex:-1}(d,t);u!==-1?(c.columns[u]===void 0&&(c.columns[u]=[]),c.columns[u].push(d)):c.row.push(d)}),c});return{root:s,rows:i}}function Zs(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:"Multiple validation issues: "+t.map(r=>fo(r.path)+" "+r.message).join(", "),severity:Io.warning}}function mx(e){return parseInt(e.path[0],10)}function gx(e,t,r){var o=t.some(s=>function(a,i,l){if(!a)return!1;if(i.op==="replace"){var c=zo(Po(i.path),l),d=c.rowIndex,u=c.columnIndex,m=l.findIndex(g=>Lt(g,a.path));if(d!==-1&&u!==-1&&u!==m)return!1}return!0}(e,s,r));return o?void 0:e}var ro=Wr("jsoneditor:actions");function Rm(e){return Fd.apply(this,arguments)}function Fd(){return Fd=vt(function*(e){var t=e.json,r=e.selection,o=e.indentation,s=e.readOnly,a=e.parser,i=e.onPatch;if(!s&&t!==void 0&&r&&di(r)){var l=om(t,r,o,a);if(l!==void 0){ro("cut",{selection:r,clipboard:l,indentation:o}),yield qv(l);var c=cm(t,r),d=c.operations,u=c.newSelection;i(d,(m,g)=>({state:g,selection:u}))}}}),Fd.apply(this,arguments)}function Tm(e){return _d.apply(this,arguments)}function _d(){return _d=vt(function*(e){var t=e.json,r=e.selection,o=e.indentation,s=om(t,r,o,e.parser);s!==void 0&&(ro("copy",{clipboard:s,indentation:o}),yield qv(s))}),_d.apply(this,arguments)}function Nm(e){var t=e.clipboardText,r=e.json,o=e.selection,s=e.readOnly,a=e.parser,i=e.onPatch,l=e.onChangeText,c=e.onPasteMultilineText,d=e.openRepairModal;if(!s)try{u(t)}catch{d(t,g=>{ro("repaired pasted text: ",g),u(g)})}function u(m){if(r!==void 0){var g=o||$t([]),h=lm(r,g,m,a),y=function(b,j,x){var M=arguments.length>3&&arguments[3]!==void 0?arguments[3]:$j;if(b.length>M)return!1;var E=/\n/.test(b);if(!E)return!1;var q=j.some(A=>A.op==="replace"&&Array.isArray(A.value)),k=j.filter(A=>A.op==="add").length>1;if(!q&&!k)return!1;try{return Tl(b,x.parse),!1}catch{return!0}}(t,h,a);ro("paste",{pastedText:m,operations:h,ensureSelection:g,pasteMultilineText:y}),i(h,(b,j)=>{var x=j;return h.filter(M=>(bp(M)||Gd(M))&&sr(M.value)).forEach(M=>{var E=oa(r,M.path);x=_s(b,x,E)}),{state:x}}),y&&c(m)}else ro("paste text",{pastedText:m}),l(t,(b,j)=>{if(b)return{state:_s(b,j,[])}})}}function Im(e){var t=e.json,r=e.text,o=e.selection,s=e.keepSelection,a=e.readOnly,i=e.onChange,l=e.onPatch;if(!a&&o){var c=t!==void 0&&(Br(o)||un(o))?no(o.path,o.path):o;if(dn($e(o)))ro("remove root",{selection:o}),i&&i({text:"",json:void 0},t!==void 0?{text:void 0,json:t}:{text:r||"",json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var d=cm(t,c),u=d.operations,m=d.newSelection;ro("remove",{operations:u,selection:o,newSelection:m}),l(u,(g,h)=>({state:h,selection:s?o:m}))}}}function Gc(e){var t=e.insertType,r=e.selectInside,o=e.initialValue,s=e.json,a=e.selection,i=e.readOnly,l=e.parser,c=e.onPatch,d=e.onReplaceJson;if(!i){var u=function(b,j,x){if(x==="object")return{};if(x==="array")return[];if(x==="structure"&&b!==void 0){var M=j?nm(j):[],E=Ve(b,M);if(Array.isArray(E)&&!dn(E)){var q=za(E);return sr(q)?gg(q,k=>Array.isArray(k)?[]:rn(k)?void 0:""):""}}return""}(s,a,t);if(s!==void 0){var m=l.stringify(u),g=lm(s,a,m,l);ro("onInsert",{insertType:t,operations:g,newValue:u,data:m});var h=Wt(g.filter(b=>b.op==="add"||b.op==="replace"));c(g,(b,j,x)=>{if(h){var M=oa(b,h.path);if(sr(u))return{state:Lo(b,j,M,wv),selection:r?La(M):x};if(u===""){var E=dn(M)?void 0:Ve(b,Xt(M));return{state:Lo(b,j,M,bc),selection:rn(E)?kv(M,o):Jc(M,o)}}}}),ro("after patch")}else{ro("onInsert",{insertType:t,newValue:u});var y=[];d(u,(b,j)=>({state:_s(b,j,y),selection:sr(u)?La(y):Jc(y)}))}}}function Um(e){return Vd.apply(this,arguments)}function Vd(){return Vd=vt(function*(e){var t=e.char,r=e.selectInside,o=e.json,s=e.selection,a=e.readOnly,i=e.parser,l=e.onPatch,c=e.onReplaceJson,d=e.onSelect;a||(Br(s)?d(be(be({},s),{},{edit:!0,initialValue:t})):t==="{"?Gc({insertType:"object",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):t==="["?Gc({insertType:"array",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):un(s)&&o!==void 0?sr(Ve(o,s.path))||d(be(be({},s),{},{edit:!0,initialValue:t})):(ro("onInsertValueWithCharacter",{char:t}),yield function(u){return $d.apply(this,arguments)}({char:t,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c})))}),Vd.apply(this,arguments)}function $d(){return $d=vt(function*(e){var t=e.char,r=e.json,o=e.selection,s=e.readOnly,a=e.parser,i=e.onPatch,l=e.onReplaceJson;s||Gc({insertType:"value",selectInside:!1,initialValue:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l})}),$d.apply(this,arguments)}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-preview.svelte-25xmyd {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  padding: 2px;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}`);var bx=Y('<div class="jse-json-preview svelte-25xmyd"> </div>');function Dm(e,t){ot(t,!1);var r=P(),o=P(),s=v(t,"text",8),a=v(t,"json",8),i=v(t,"indentation",8),l=v(t,"parser",8);W(()=>(p(a()),p(s())),()=>{f(r,a()!==void 0?{json:a()}:{text:s()||""})}),W(()=>(n(r),p(i()),p(l()),Ic),()=>{f(o,Sa(Md(n(r),i(),l()),Ic))}),jn(),kt();var c=bx(),d=R(c);je(()=>st(d,n(o))),N(e,c),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-16jz6ui {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-16jz6ui:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-16jz6ui:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-16jz6ui:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-16jz6ui {
  text-align: left;
}
button.jse-context-menu-button.svelte-16jz6ui svg {
  width: 16px;
}`);var jx=Y('<button type="button"><!> <!></button>');function ed(e,t){ot(t,!1);var r=v(t,"item",8),o=v(t,"className",8,void 0),s=v(t,"onRequestClose",8);kt();var a=jx(),i=R(a),l=u=>{tn(u,{get data(){return p(r()),T(()=>r().icon)}})};ne(i,u=>{p(r()),T(()=>r().icon)&&u(l)});var c=D(i,2),d=u=>{var m=Hr();je(()=>st(m,(p(r()),T(()=>r().text)))),N(u,m)};ne(c,u=>{p(r()),T(()=>r().text)&&u(d)}),je(u=>{wt(a,1,u,"svelte-16jz6ui"),vn(a,"title",(p(r()),T(()=>r().title))),a.disabled=(p(r()),T(()=>r().disabled||!1))},[()=>ds((p(Qo),p(o()),p(r()),T(()=>Qo("jse-context-menu-button",o(),r().className))))]),fe("click",a,u=>{s()(),r().onClick(u)}),N(e,a),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-dropdown-button.svelte-bov1j6 {
  flex: 1;
  line-height: normal;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  position: relative;
  padding: 0;
  display: flex;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) li:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 2em;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  border-radius: 0;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown.jse-visible:where(.svelte-bov1j6) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items.jse-visible:where(.svelte-bov1j6) {
  display: block;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: var(--jse-padding, 10px);
  margin: 0;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);var yx=Y('<li class="svelte-bov1j6"><button type="button"><!> </button></li>'),xx=Y('<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>');xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1y5l9l1 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1y5l9l1:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1y5l9l1:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1y5l9l1:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1y5l9l1 {
  text-align: left;
}
button.jse-context-menu-button.svelte-1y5l9l1 svg {
  width: 16px;
}`);var wx=Y('<button type="button" slot="defaultItem"><!> </button>');function td(e,t){ot(t,!1);var r=P(),o=v(t,"item",8),s=v(t,"className",8,void 0),a=v(t,"onRequestClose",8);W(()=>(p(o()),p(a())),()=>{f(r,o().items.map(i=>be(be({},i),{},{onClick:l=>{a()(),i.onClick(l)}})))}),jn(),kt(),function(i,l){ot(l,!1);var c=P(void 0,!0),d=v(l,"items",25,()=>[]),u=v(l,"title",9,void 0),m=v(l,"width",9,"120px"),g=P(!1,!0);function h(){f(g,!1)}function y(k){Ba(k)==="Escape"&&(k.preventDefault(),f(g,!1))}Xr(()=>{document.addEventListener("click",h),document.addEventListener("keydown",y)}),Do(()=>{document.removeEventListener("click",h),document.removeEventListener("keydown",y)}),W(()=>p(d()),()=>{f(c,d().every(k=>k.disabled===!0))}),jn(),kt(!0);var b=xx(),j=R(b);dr(j,l,"defaultItem",{},null);var x,M=D(j,2);tn(R(M),{get data(){return Na}});var E,q=D(M,2);lr(R(q),5,d,br,(k,A)=>{var U=yx(),F=R(U),S=R(F),J=$=>{tn($,{get data(){return n(A),T(()=>n(A).icon)}})};ne(S,$=>{n(A),T(()=>n(A).icon)&&$(J)});var Z=D(S);je(()=>{var $;vn(F,"title",(n(A),T(()=>n(A).title))),F.disabled=(n(A),T(()=>n(A).disabled)),wt(F,1,ds((n(A),T(()=>n(A).className))),"svelte-bov1j6"),st(Z," ".concat((n(A),($=T(()=>n(A).text))!==null&&$!==void 0?$:"")))}),fe("click",F,$=>n(A).onClick($)),N(k,U)}),je(()=>{var k;vn(b,"title",u()),x=wt(M,1,"jse-open-dropdown svelte-bov1j6",null,x,{"jse-visible":n(g)}),M.disabled=n(c),E=wt(q,1,"jse-dropdown-items svelte-bov1j6",null,E,{"jse-visible":n(g)}),No(q,"width: ".concat((k=m())!==null&&k!==void 0?k:"",";"))}),fe("click",M,function(){var k=n(g);setTimeout(()=>f(g,!k))}),fe("click",b,h),N(i,b),at()}(e,{get width(){return p(o()),T(()=>o().width)},get items(){return n(r)},$$slots:{defaultItem:(i,l)=>{var c=wx(),d=R(c),u=g=>{tn(g,{get data(){return p(o()),T(()=>o().main.icon)}})};ne(d,g=>{p(o()),T(()=>o().main.icon)&&g(u)});var m=D(d);je(g=>{var h;wt(c,1,g,"svelte-1y5l9l1"),vn(c,"title",(p(o()),T(()=>o().main.title))),c.disabled=(p(o()),T(()=>o().main.disabled||!1)),st(m," ".concat((p(o()),(h=T(()=>o().main.text))!==null&&h!==void 0?h:"")))},[()=>ds((p(Qo),p(s()),p(o()),T(()=>Qo("jse-context-menu-button",s(),o().main.className))))]),fe("click",c,g=>{a()(),o().main.onClick(g)}),N(i,c)}}}),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-contextmenu.svelte-1shjn02 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-label:where(.svelte-1shjn02) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) {
  flex: 1;
  background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
  color: var(--jse-context-menu-tip-color, var(--context-menu-tip-color, inherit));
  margin: calc(0.5 * var(--jse-padding, 10px));
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  font-size: 80%;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--jse-padding, 10px);
  border-radius: 3px;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) div.jse-tip-icon:where(.svelte-1shjn02) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-1shjn02 .jse-separator:where(.svelte-1shjn02) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var nd=Y('<div class="jse-separator svelte-1shjn02"></div>'),kx=Y('<div class="jse-label svelte-1shjn02"> </div>'),Sx=Y('<div class="jse-column svelte-1shjn02"></div>'),Cx=Y('<div class="jse-row svelte-1shjn02"></div>'),Ox=Y('<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>'),Mx=Y('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>');function Bm(e,t){ot(t,!1);var r=v(t,"items",9),o=v(t,"onRequestClose",9),s=v(t,"tip",9),a=P(void 0,!0);Xr(()=>{var g=Array.from(n(a).querySelectorAll("button")).find(h=>!h.disabled);g&&g.focus()});var i={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(g){return console.error("Unknown type of context menu item",g),"???"}kt(!0);var c=Mx(),d=R(c);lr(d,1,r,br,(g,h)=>{var y=ir(),b=dt(y),j=S=>{ed(S,{get item(){return n(h)},get onRequestClose(){return o()}})},x=Dt(()=>(p(ka),n(h),T(()=>ka(n(h))))),M=S=>{td(S,{get item(){return n(h)},get onRequestClose(){return o()}})},E=Dt(()=>(p(Ys),n(h),T(()=>Ys(n(h))))),q=S=>{var J=Cx();lr(J,5,()=>(n(h),T(()=>n(h).items)),br,(Z,$)=>{var le=ir(),G=dt(le),qe=ce=>{ed(ce,{get item(){return n($)},get onRequestClose(){return o()}})},Me=Dt(()=>(p(ka),n($),T(()=>ka(n($))))),de=ce=>{td(ce,{get item(){return n($)},get onRequestClose(){return o()}})},Ee=Dt(()=>(p(Ys),n($),T(()=>Ys(n($))))),Se=ce=>{var me=Sx();lr(me,5,()=>(n($),T(()=>n($).items)),br,(we,Ce)=>{var Ot=ir(),Qt=dt(Ot),on=Be=>{ed(Be,{className:"left",get item(){return n(Ce)},get onRequestClose(){return o()}})},V=Dt(()=>(p(ka),n(Ce),T(()=>ka(n(Ce))))),_=Be=>{td(Be,{className:"left",get item(){return n(Ce)},get onRequestClose(){return o()}})},O=Dt(()=>(p(Ys),n(Ce),T(()=>Ys(n(Ce))))),K=Be=>{N(Be,nd())},te=Dt(()=>(p(Ha),n(Ce),T(()=>Ha(n(Ce))))),ze=Be=>{var Bt=kx(),Ne=R(Bt);je(()=>st(Ne,(n(Ce),T(()=>n(Ce).text)))),N(Be,Bt)},X=Dt(()=>(p(wf),n(Ce),T(()=>wf(n(Ce))))),B=Be=>{var Bt=Hr();je(Ne=>st(Bt,Ne),[()=>(n(Ce),T(()=>l(n(Ce))))]),N(Be,Bt)};ne(Qt,Be=>{n(V)?Be(on):n(O)?Be(_,1):n(te)?Be(K,2):n(X)?Be(ze,3):Be(B,-1)}),N(we,Ot)}),N(ce,me)},Ke=Dt(()=>(p(Sf),n($),T(()=>Sf(n($))))),Ae=ce=>{N(ce,nd())},Re=Dt(()=>(p(Ha),n($),T(()=>Ha(n($))))),se=ce=>{var me=Hr();je(we=>st(me,we),[()=>(n($),T(()=>l(n($))))]),N(ce,me)};ne(G,ce=>{n(Me)?ce(qe):n(Ee)?ce(de,1):n(Ke)?ce(Se,2):n(Re)?ce(Ae,3):ce(se,-1)}),N(Z,le)}),N(S,J)},k=Dt(()=>(p(kf),n(h),T(()=>kf(n(h))))),A=S=>{N(S,nd())},U=Dt(()=>(p(Ha),n(h),T(()=>Ha(n(h))))),F=S=>{var J=Hr();je(Z=>st(J,Z),[()=>(n(h),T(()=>l(n(h))))]),N(S,J)};ne(b,S=>{n(x)?S(j):n(E)?S(M,1):n(k)?S(q,2):n(U)?S(A,3):S(F,-1)}),N(g,y)});var u=D(d,2),m=g=>{var h=Ox(),y=R(h),b=R(y);tn(R(b),{get data(){return yg}});var j=R(D(b,2));je(()=>st(j,s())),N(g,h)};ne(u,g=>{s()&&g(m)}),Hn(c,g=>f(a,g),()=>n(a)),fe("keydown",c,function(g){var h=Ba(g),y=i[h];if(y&&g.target){g.preventDefault();var b=Oj({allElements:Array.from(n(a).querySelectorAll("button:not([disabled])")),currentElement:g.target,direction:y,hasPrio:j=>j.getAttribute("data-type")!=="jse-open-dropdown"});b&&b.focus()}}),N(e,c),at()}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1htmvf1 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1htmvf1, .jse-value.jse-array.svelte-1htmvf1 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1htmvf1 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1htmvf1 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1htmvf1 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1htmvf1 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1htmvf1 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-1htmvf1 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-1htmvf1 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-1htmvf1:focus {
  color: var(--jse-text-color, #4d4d4d);
}`);var zx=Y("<option> </option>"),qx=Y("<select></select>");function Ex(e,t){ot(t,!1);var r=v(t,"path",9),o=v(t,"value",9),s=v(t,"mode",9),a=v(t,"parser",9),i=v(t,"readOnly",9),l=v(t,"selection",9),c=v(t,"onPatch",9),d=v(t,"options",9),u=P(void 0,!0),m=P(o(),!0);W(()=>p(o()),()=>{f(m,o())}),W(()=>p(l()),()=>{(function(y){y&&n(u)&&n(u).focus()})(l())}),jn(),kt(!0);var g,h=qx();lr(h,5,d,br,(y,b)=>{var j=zx(),x=R(j),M={};je(()=>{var E;st(x,(n(b),T(()=>n(b).text))),M!==(n(b),M=T(()=>n(b).value))&&(j.value=(E=j.__value=(n(b),T(()=>n(b).value)))!==null&&E!==void 0?E:"")}),N(y,j)}),Hn(h,y=>f(u,y),()=>n(u)),je((y,b)=>g=wt(h,1,y,"svelte-1htmvf1",g,b),[()=>(p(Lc),n(m),p(s()),p(a()),T(()=>"jse-enum-value ".concat(Lc(n(m),s(),a())))),()=>({"jse-selected":un(l())})]),function(y,b){var j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:b,x=new WeakSet,M=!0;Vp(y,"change",E=>{var q,k=E?"[selected]":":checked";if(y.multiple)q=[].map.call(y.querySelectorAll(k),dl);else{var A,U=(A=y.querySelector(k))!==null&&A!==void 0?A:y.querySelector("option:not([disabled])");q=U&&dl(U)}j(q),y.__value=q,en!==null&&x.add(en)}),$r(()=>{var E=b();if(y===document.activeElement){var q=en;if(x.has(q))return}if(Rc(y,E,M),M&&E===void 0){var k=y.querySelector(":checked");k!==null&&(E=dl(k),j(E))}y.__value=E,M=!1}),Ph(y)}(h,()=>n(m),y=>f(m,y)),fe("change",h,function(y){y.stopPropagation(),i()||c()([{op:"replace",path:qt(r()),value:n(m)}])}),fe("mousedown",h,function(y){y.stopPropagation()}),N(e,h),at()}function Ax(e,t,r){var o=si(e,t||{},r);return o?function(s){if(Array.isArray(s.enum))return s.enum;var a=s.oneOf||s.anyOf||s.allOf;if(Array.isArray(a)){var i=a.filter(l=>l.enum);if(i.length>0)return i[0].enum}}(o):void 0}function si(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e,s=r.slice(1,r.length),a=r[0],i=[o];for(var l of[o.oneOf,o.anyOf,o.allOf])Array.isArray(l)&&(i=i.concat(l));for(var c of i){if("$ref"in(o=c)&&typeof o.$ref=="string"){var d,u=o.$ref;if(u in t)o=t[u];else{if(!u.startsWith("#/")){if(((d=u.match(/#\//g))===null||d===void 0?void 0:d.length)===1){var m=so(u.split("#/"),2),g=m[0],h=m[1];if(g in t){var y=t[g],b={$ref:"#/".concat(h)},j=[];return j.push(a),s.length>0&&j.push(...s),si(y,t,j,b)}throw Error("Unable to resolve reference ".concat(u))}throw Error("Unable to resolve reference ".concat(u))}var x=u.substring(2).split("/");for(var M of(o=e,x)){if(!(M in o))throw Error("Unable to resolve reference ".concat(u));o=o[M]}}}if(a===void 0)return o;if(typeof o.properties=="object"&&o.properties&&a in o.properties)return si(e,t,s,o=o.properties[a]);if(typeof o.patternProperties=="object"&&o.patternProperties){for(var E in o.patternProperties)if(a.match(E))return si(e,t,s,o=o.patternProperties[E])}if(typeof o.additionalProperties=="object")return si(e,t,s,o=o.additionalProperties);if(typeof o.items=="object"&&o.items)return si(e,t,s,o=o.items)}}function W1(e,t,r){var o=Ax(t,r,e.path);if(o){var s=o.map(i=>({value:i,text:i})),a=o.includes(e.value)?s:[{value:e.value,text:e.value}].concat(s);return[{component:Ex,props:be(be({},e),{},{options:a})}]}}function F1(e){return Wm(Lm(e).compile(e.schema),e)}function _1(e){return Jm.apply(this,arguments)}function Jm(){return(Jm=vt(function*(e){var t=Lm(e);return Wm(yield t.compileAsync(e.schema),e)})).apply(this,arguments)}function Lm(e){var t,r,o=e.schemaDefinitions,s=e.ajvOptions,a=new og(be({allErrors:!0,verbose:!0,$data:!0},s));if(o&&Object.keys(o).forEach(i=>{a.addSchema(o[i],i)}),(a=(t=(r=e.onCreateAjv)===null||r===void 0?void 0:r.call(e,a))!==null&&t!==void 0?t:a).opts.verbose===!1)throw new Error("Ajv must be configured with the option verbose=true");return a}function Wm(e,t){if(e.errors)throw e.errors[0];return function(r){var o;return e(r),((o=e.errors)!==null&&o!==void 0?o:[]).map(Px).map(s=>function(a,i,l){var c,d;return{path:oa(a,i.instancePath),message:(c=i.message)!==null&&c!==void 0?c:"Unknown error",severity:(d=l.errorSeverity)!==null&&d!==void 0?d:Io.warning}}(r,s,t))}}function Px(e){var t=void 0;if(e.keyword==="enum"&&Array.isArray(e.schema)){var r=e.schema;if(r){if((r=r.map(s=>JSON.stringify(s))).length>5){var o=["("+(r.length-5)+" more...)"];(r=r.slice(0,5)).push(o)}t="should be equal to one of: "+r.join(", ")}}return e.keyword==="additionalProperties"&&(t="should NOT have additional property: "+e.params.additionalProperty),t?be(be({},e),{},{message:t}):e}var V1={id:"jmespath",name:"JMESPath",description:`
<p>
  Enter a <a href="https://jmespath.org" target="_blank" rel="noopener noreferrer">JMESPath</a> query 
  to filter, sort, or transform the JSON data.
 To learn JMESPath, go to <a href="https://jmespath.org/tutorial.html" target="_blank" rel="noopener noreferrer">the interactive tutorial</a>.
</p>
`,createQuery:function(e,t){var r=t.sort,o=t.filter,s=t.projection,a="";if(o&&o.path&&o.relation&&o.value){var i=["0"].concat(o.path),l=Ve(e,i),c=Ul(o.value),d=typeof l=="string"&&c!=null?'"'.concat(o.value,'"'):c;a+="[? "+tl(o.path)+" "+o.relation+" `"+d+"`]"}else a+=Array.isArray(e)?"[*]":"@";if(r&&r.path&&r.direction&&(r.direction==="desc"?a+=" | reverse(sort_by(@, &"+tl(r.path)+"))":a+=" | sort_by(@, &"+tl(r.path)+")"),s&&s.paths)if(a[a.length-1]!=="]"&&(a+=" | [*]"),s.paths.length===1){var u=s.paths[0];a+=u.length===0?"":"."+tl(u)}else s.paths.length>1&&(a+=".{"+s.paths.map(m=>Fm(m[m.length-1])+": "+tl(m)).join(", ")+"}");return a},executeQuery:function(e,t,r){var o=lv(r,JSON)?e:function(s){var a=r.stringify(s);return a!==void 0?JSON.parse(a):void 0}(e);return Zm.search(o,t)}};function tl(e){if(e.length===0)return"@";var t=e.map(r=>typeof r=="number"?"["+r+"]":"."+Fm(String(r))).join("");return t[0]==="."?t.slice(1):t}function Fm(e){return e.match(/^[A-Za-z\d_$]+$/)?e:JSON.stringify(e)}var $1={id:"jsonpath",name:"JSONPath",description:`
<p>
  Enter a <a href="https://github.com/JSONPath-Plus/JSONPath" target="_blank" 
  rel="noopener noreferrer"><code>JSONPath</code></a> expression to filter, sort, or transform the data.
</p>`,createQuery:function(e,t){var r=t.filter,o=t.sort,s=t.projection,a="$";if(r&&r.path&&r.relation&&r.value){var i=Ul(r.value),l=JSON.stringify(i);a+="[?(@".concat(ap(r.path)," ").concat(r.relation," ").concat(l,")]")}if(o&&o.path&&o.direction)throw new Error("Sorting is not supported by JSONPath. Please clear the sorting fields");if(s&&s.paths){if(s.paths.length>1)throw new Error("Picking multiple fields is not supported by JSONPath. Please select only one field");a.endsWith("]")||(a+="[*]"),a+="".concat(ap(s.paths[0])).replace(/^\.\.\./,"..")}return a},executeQuery:function(e,t){var r=ng({json:e,path:t});return r!==void 0?r:null}};function ap(e){var t=/^[A-z]+$/;return e.map(r=>t.test(r)?".".concat(r):JSON.stringify([r])).join("")}var H1={id:"lodash",name:"Lodash",description:`
<p>
  Enter a JavaScript function to filter, sort, or transform the data.
  You can use <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">Lodash</a>
  functions like <code>_.map</code>, <code>_.filter</code>,
  <code>_.orderBy</code>, <code>_.sortBy</code>, <code>_.groupBy</code>,
  <code>_.pick</code>, <code>_.uniq</code>, <code>_.get</code>, etcetera.
</p>
`,createQuery:function(e,t){var r=t.filter,o=t.sort,s=t.projection,a=[`  return _.chain(data)
`];if(r&&r.path&&r.relation&&r.value){var i="item => item".concat(ea(r.path)),l=Ul(r.value),c=typeof l=="string"?"'".concat(r.value,"'"):Uh(r.value)&&!Number.isSafeInteger(l)?"".concat(r.value,"n"):r.value;a.push("    .filter(".concat(i," ").concat(r.relation," ").concat(c,`)
`))}if(o&&o.path&&o.direction&&a.push("    .orderBy([".concat(function(m){return m.length===0?"":m.every(g=>iu.test(g)||Sv.test(g))?"'"+m.map(v0).join("").replace(/^\./,"")+"'":JSON.stringify(m)}(o.path),"], ['").concat(o.direction,`'])
`)),s&&s.paths)if(s.paths.length>1){var d=s.paths.map(m=>{var g=Wt(m)||"item";return"      ".concat(JSON.stringify(g),": item").concat(ea(m))});a.push(`    .map(item => ({
`.concat(d.join(`,
`),`
    }))
`))}else{var u=s.paths[0];a.push("    .map(item => item".concat(ea(u),`)
`))}return a.push(`    .value()
`),`function query (data) {
`.concat(a.join(""),"}")},executeQuery:function(e,t){(function(o){var s,a,i=(s=o.match(/_\.chain\(/g))===null||s===void 0?void 0:s.length,l=(a=o.match(/\.value\(\)/g))===null||a===void 0?void 0:a.length;if(i!==l)throw new Error("Cannot execute query: Lodash _.chain(...) must end with .value()")})(t);var r=new Function("_",`"use strict";

`+t+`

if (typeof query !== "function") {
  throw new Error("Cannot execute query: expecting a function named 'query' but is undefined")
}

return query;
`)(rg)(e);return r!==void 0?r:null}},lc,cc,Q1={id:"javascript",name:"JavaScript",description:`
<p>
  Enter a JavaScript function to filter, sort, or transform the data.
</p>
`,createQuery:function(e,t){var r=t.filter,o=t.sort,s=t.projection,a=[`  return data
`];if(r&&r.path&&r.relation&&r.value){var i="item => item".concat(ea(r.path)),l=Ul(r.value),c=typeof l=="string"?"'".concat(r.value,"'"):Uh(r.value)&&!Number.isSafeInteger(l)?"".concat(r.value,"n"):r.value;a.push("    .filter(".concat(i," ").concat(r.relation," ").concat(c,`)
`))}if(o&&o.path&&o.direction&&(o.direction==="desc"?a.push(`    .slice()
    .sort((a, b) => {
      // sort descending
`+"      const valueA = a".concat(ea(o.path),`
`)+"      const valueB = b".concat(ea(o.path),`
`)+`      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0
    })
`):a.push(`    .slice()
    .sort((a, b) => {
      // sort ascending
`+"      const valueA = a".concat(ea(o.path),`
`)+"      const valueB = b".concat(ea(o.path),`
`)+`      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0
    })
`)),s&&s.paths)if(s.paths.length>1){var d=s.paths.map(m=>{var g=m[m.length-1]||"item",h="item".concat(ea(m));return"      ".concat(JSON.stringify(g),": ").concat(h)});a.push(`    .map(item => ({
`.concat(d.join(`,
`),`})
    )
`))}else{var u="item".concat(ea(s.paths[0]));a.push("    .map(item => ".concat(u,`)
`))}return`function query (data) {
`.concat(a.join(""),"}")},executeQuery:function(e,t){var r=new Function(`"use strict";

`+t+`

if (typeof query !== "function") {
  throw new Error("Cannot execute query: expecting a function named 'query' but is undefined")
}

return query;
`)()(e);return r!==void 0?r:null}};function uc(e,t){return lc||(cc=new WeakMap,lc=new ResizeObserver(r=>{for(var o of r){var s=cc.get(o.target);s&&s(o.target)}})),cc.set(e,t),lc.observe(e),{destroy:()=>{cc.delete(e),lc.unobserve(e)}}}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tree-mode.svelte-10mlrw4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-tree-mode.svelte-10mlrw4 .jse-hidden-input-label:where(.svelte-10mlrw4) .jse-hidden-input:where(.svelte-10mlrw4) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-10mlrw4 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-search-box-container:where(.svelte-10mlrw4) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading-space:where(.svelte-10mlrw4) {
  flex: 1;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading:where(.svelte-10mlrw4) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-search-box-background:where(.svelte-10mlrw4) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);var Rx=Y("<!> <!>",1),Tx=Y('<div class="jse-search-box-background svelte-10mlrw4"></div>'),Nx=Y('<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>',1),Ix=Y('<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" aria-hidden="true" class="jse-hidden-input svelte-10mlrw4"/></label> <!>',1),Ux=Y('<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>'),Dx=Y('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function Hd(e,t){ot(t,!1);var r=P(void 0,!0),o=Wr("jsoneditor:TreeMode"),s=typeof window>"u";o("isSSR:",s);var a=yi(),i=yi(),l=hs("absolute-popup"),c=l.openAbsolutePopup,d=l.closeAbsolutePopup,u=P(void 0,!0),m=P(void 0,!0),g=P(void 0,!0),h=!1,y=wm(),b=v(t,"readOnly",9),j=v(t,"ariaLabel",9,void 0),x=v(t,"externalContent",9),M=v(t,"externalSelection",9),E=v(t,"history",9),q=v(t,"truncateTextSize",9),k=v(t,"mainMenuBar",9),A=v(t,"navigationBar",9),U=v(t,"escapeControlCharacters",9),F=v(t,"escapeUnicodeCharacters",9),S=v(t,"parser",9),J=v(t,"parseMemoizeOne",9),Z=v(t,"validator",9),$=v(t,"validationParser",9),le=v(t,"pathParser",9),G=v(t,"indentation",9),qe=v(t,"onError",9),Me=v(t,"onChange",9),de=v(t,"onChangeMode",9),Ee=v(t,"onSelect",9),Se=v(t,"onUndo",9),Ke=v(t,"onRedo",9),Ae=v(t,"onRenderValue",9),Re=v(t,"onRenderMenu",9),se=v(t,"onRenderContextMenu",9),ce=v(t,"onClassName",9),me=v(t,"onFocus",9),we=v(t,"onBlur",9),Ce=v(t,"onSortModal",9),Ot=v(t,"onTransformModal",9),Qt=v(t,"onJSONEditorModal",9),on=!1,V=P(!1,!0),_=P(void 0,!0);Mv({onMount:Xr,onDestroy:Do,getWindow:()=>Nl(n(g)),hasFocus:()=>on&&document.hasFocus()||dv(n(g)),onFocus:()=>{h=!0,me()&&me()()},onBlur:()=>{h=!1,we()&&we()()}});var O=P(void 0,!0),K=P(void 0,!0),te=void 0,ze=!1,X=P(Ad({json:n(O)}),!0),B=P(wl(M())?M():void 0,!0);function Be(z){f(B,z)}Xr(()=>{if(n(B)){var z=$e(n(B));f(X,Lo(n(O),n(X),z,bc)),setTimeout(()=>Ut(z))}});var Bt,Ne=P(void 0,!0),tt=P(void 0,!0),it=P(void 0,!0),ye=P(void 0,!0),nt=P(!1,!0),Et=P(!1,!0);function mn(z){f(ye,(Bt=z)?dm(n(O),Bt.items):void 0)}function Nt(z,L){return ft.apply(this,arguments)}function ft(){return(ft=vt(function*(z,L){f(X,Lo(n(O),n(X),z,bc));var ve=At(L);yield hr(z,{element:ve})})).apply(this,arguments)}function Kt(){f(nt,!1),f(Et,!1),pt()}function ke(z){o("select validation error",z),f(B,$t(z.path)),hr(z.path)}function He(z){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Pd;o("expand"),f(X,Lo(n(O),n(X),z,L))}function Je(z,L){f(X,zf(n(O),n(X),z,L)),n(B)&&function(ve,We){return ua($e(ve),We)&&($e(ve).length>We.length||Er(ve))}(n(B),z)&&f(B,void 0)}var Ye=P(!1,!0),Ie=P([],!0),re=P(void 0,!0),Yt=fl(km);function ue(z,L,ve,We){fi(()=>{var ae;try{ae=Yt(z,L,ve,We)}catch(he){ae=[{path:[],message:"Failed to validate: "+he.message,severity:Io.warning}]}Lt(ae,n(Ie))||(o("validationErrors changed:",ae),f(Ie,ae),f(re,function(he,et){var ht;return et.forEach(Tt=>{ht=Xf(he,ht,Tt.path,(ln,Vt)=>be(be({},Vt),{},{validationError:Tt}))}),et.forEach(Tt=>{for(var ln=Tt.path;ln.length>0;)ln=Xt(ln),ht=Xf(he,ht,ln,(Vt,Jn)=>Jn.validationError?Jn:be(be({},Jn),{},{validationError:{isChildError:!0,path:ln,message:"Contains invalid data",severity:Io.warning}}))}),ht}(z,n(Ie))))},ae=>o("validationErrors updated in ".concat(ae," ms")))}function bt(){return o("validate"),te?{parseError:te,isRepairable:!1}:(ue(n(O),Z(),S(),$()),dn(n(Ie))?void 0:{validationErrors:n(Ie)})}function En(){return n(O)}function tr(){return n(X)}function Gt(){return n(B)}function Ln(z){o("applyExternalContent",{updatedContent:z}),bl(z)?function(L){if(L!==void 0){var ve=!Lt(n(O),L);if(o("update external json",{isChanged:ve,currentlyText:n(O)===void 0}),!!ve){var We={documentState:n(X),selection:n(B),json:n(O),text:n(K),textIsRepaired:n(Ye)};f(O,L),f(X,yo(L,n(X))),Tn(n(O)),f(K,void 0),f(Ye,!1),te=void 0,vr(n(O)),yr(We)}}}(z.json):gl(z)&&function(L){if(!(L===void 0||bl(x()))){var ve=L!==n(K);if(o("update external text",{isChanged:ve}),!!ve){var We={documentState:n(X),selection:n(B),json:n(O),text:n(K),textIsRepaired:n(Ye)};try{f(O,J()(L)),f(X,yo(n(O),n(X))),Tn(n(O)),f(K,L),f(Ye,!1),te=void 0}catch(ae){try{f(O,J()(aa(L))),f(X,yo(n(O),n(X))),Tn(n(O)),f(K,L),f(Ye,!0),te=void 0,vr(n(O))}catch{f(O,void 0),f(X,void 0),f(K,x().text),f(Ye,!1),te=n(K)!==void 0&&n(K)!==""?Ei(n(K),ae.message||String(ae)):void 0}}vr(n(O)),yr(We)}}}(z.text)}function Tn(z){ze||(ze=!0,f(X,_s(z,n(X),[])))}function vr(z){n(B)&&(Za(z,Us(n(B)))&&Za(z,$e(n(B)))||(o("clearing selection: path does not exist anymore",n(B)),f(B,Gs(z,n(X)))))}function yr(z){if(z.json!==void 0||z.text!==void 0){var L=n(O)!==void 0&&z.json!==void 0;E().add({type:"tree",undo:{patch:L?[{op:"replace",path:"",value:z.json}]:void 0,json:z.json,text:z.text,documentState:z.documentState,textIsRepaired:z.textIsRepaired,selection:na(z.selection),sortedColumn:void 0},redo:{patch:L?[{op:"replace",path:"",value:n(O)}]:void 0,json:n(O),text:n(K),documentState:n(X),textIsRepaired:n(Ye),selection:na(n(B)),sortedColumn:void 0}})}}function Xe(z,L){var ve;if(o("patch",z,L),n(O)===void 0)throw new Error("Cannot apply patch: no JSON");var We=n(O),ae={json:void 0,text:n(K),documentState:n(X),selection:na(n(B)),textIsRepaired:n(Ye),sortedColumn:void 0},he=um(n(O),z),et=Xh(n(O),n(X),z),ht=(ve=Ri(n(O),z))!==null&&ve!==void 0?ve:n(B),Tt=typeof L=="function"?L(et.json,et.documentState,ht):void 0;return f(O,Tt?.json!==void 0?Tt.json:et.json),f(X,Tt?.state!==void 0?Tt.state:et.documentState),f(B,Tt?.selection!==void 0?Tt.selection:ht),f(K,void 0),f(Ye,!1),f(tt,void 0),f(it,void 0),te=void 0,vr(n(O)),E().add({type:"tree",undo:be({patch:he},ae),redo:{patch:z,json:void 0,text:n(K),documentState:n(X),selection:na(n(B)),sortedColumn:void 0,textIsRepaired:n(Ye)}}),{json:n(O),previousJson:We,undo:he,redo:z}}function ct(){!b()&&n(B)&&f(B,kv($e(n(B))))}function Nn(){if(!b()&&n(B)){var z=$e(n(B)),L=Ve(n(O),z);sr(L)?function(ve,We){o("openJSONEditorModal",{path:ve,value:We}),on=!0,Qt()({content:{json:We},path:ve,onPatch:n(_r).onPatch,onClose:()=>{on=!1,setTimeout(pt)}})}(z,L):f(B,Jc(z))}}function ut(){if(!b()&&un(n(B))){var z=$e(n(B)),L=qt(z),ve=Ve(n(O),z),We=!ra(n(O),n(X),z),ae=We?String(ve):_i(String(ve),S());o("handleToggleEnforceString",{enforceString:We,value:ve,updatedValue:ae}),_t([{op:"replace",path:L,value:ae}],(he,et)=>({state:au(n(O),et,z,{type:"value",enforceString:We})}))}}function fn(){return n(Ye)&&n(O)!==void 0&&w(n(O)),n(O)!==void 0?{json:n(O)}:{text:n(K)||""}}function Mt(){return In.apply(this,arguments)}function In(){return In=vt(function*(){var z=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield Rm({json:n(O),selection:n(B),indentation:z?G():void 0,readOnly:b(),parser:S(),onPatch:_t})}),In.apply(this,arguments)}function yn(){return Rt.apply(this,arguments)}function Rt(){return Rt=vt(function*(){var z=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(O)!==void 0&&(yield Tm({json:n(O),selection:n(B),indentation:z?G():void 0,parser:S()}))}),Rt.apply(this,arguments)}function gn(z){var L;z.preventDefault(),Un((L=z.clipboardData)===null||L===void 0?void 0:L.getData("text/plain"))}function Gn(){return An.apply(this,arguments)}function An(){return(An=vt(function*(){try{Un(yield navigator.clipboard.readText())}catch(z){console.error(z),f(V,!0)}})).apply(this,arguments)}function Un(z){z!==void 0&&Nm({clipboardText:z,json:n(O),selection:n(B),readOnly:b(),parser:S(),onPatch:_t,onChangeText:I,onPasteMultilineText:zt,openRepairModal:Dn})}function Dn(z,L){f(_,{text:z,onParse:ve=>Tl(ve,We=>Rl(We,S())),onRepair:Jh,onApply:L,onClose:pt})}function fr(){Im({json:n(O),text:n(K),selection:n(B),keepSelection:!1,readOnly:b(),onChange:Me(),onPatch:_t})}function jr(){!b()&&n(O)!==void 0&&n(B)&&di&&!dn($e(n(B)))&&(o("duplicate",{selection:n(B)}),_t(sm(n(O),vs(n(O),n(B)))))}function pr(){b()||!n(B)||!Rn(n(B))&&!un(n(B))||dn($e(n(B)))||(o("extract",{selection:n(B)}),_t(im(n(O),n(B)),(z,L)=>{if(sr(z))return{state:Fu(z,L,[])}}))}function Pn(z){Gc({insertType:z,selectInside:!0,initialValue:void 0,json:n(O),selection:n(B),readOnly:b(),parser:S(),onPatch:_t,onReplaceJson:w})}function Wn(z){Br(n(B))&&f(B,$t(n(B).path)),n(B)||f(B,Gs(n(O),n(X))),Pn(z)}function nr(z){if(!b()&&n(B))if(rc(n(B)))try{var L=Us(n(B)),ve=Ve(n(O),L),We=function(he,et,ht){if(et==="array"){if(Array.isArray(he))return he;if(rn(he))return pf(he);if(typeof he=="string")try{var Tt=ht.parse(he);if(Array.isArray(Tt))return Tt;if(rn(Tt))return pf(Tt)}catch{return[he]}return[he]}if(et==="object"){if(Array.isArray(he))return ff(he);if(rn(he))return he;if(typeof he=="string")try{var ln=ht.parse(he);if(rn(ln))return ln;if(Array.isArray(ln))return ff(ln)}catch{return{value:he}}return{value:he}}if(et==="value")return sr(he)?ht.stringify(he):he;throw new Error("Cannot convert ".concat(iv(he,ht)," to ").concat(et))}(ve,z,S());if(We===ve)return;var ae=[{op:"replace",path:qt(L),value:We}];o("handleConvert",{selection:n(B),path:L,type:z,operations:ae}),_t(ae,(he,et)=>({state:n(B)?_s(he,et,$e(n(B))):n(X)}))}catch(he){qe()(he)}else qe()(new Error("Cannot convert current selection to ".concat(z)))}function Fr(){if(n(B)){var z=Pf(n(O),n(X),n(B),!1),L=Xt($e(n(B)));z&&!dn($e(z))&&Lt(L,Xt($e(z)))?f(B,Pa($e(z))):f(B,La(L)),o("insert before",{selection:n(B),selectionBefore:z,parentPath:L}),Vn(),Cn()}}function xr(){if(n(B)){var z=ss(n(O),n(B));o("insert after",z),f(B,Pa(z)),Vn(),Cn()}}function oe(z){return Jt.apply(this,arguments)}function Jt(){return(Jt=vt(function*(z){yield Um({char:z,selectInside:!0,json:n(O),selection:n(B),readOnly:b(),parser:S(),onPatch:_t,onReplaceJson:w,onSelect:Be})})).apply(this,arguments)}function rr(){if(!b()&&E().canUndo){var z=E().undo();if(Dc(z)){var L={json:n(O),text:n(K)};f(O,z.undo.patch?sa(n(O),z.undo.patch):z.undo.json),f(X,z.undo.documentState),f(B,z.undo.selection),f(K,z.undo.text),f(Ye,z.undo.textIsRepaired),te=void 0,o("undo",{item:z,json:n(O),documentState:n(X),selection:n(B)}),Mn(L,z.undo.patch&&z.redo.patch?{json:n(O),previousJson:L.json,redo:z.undo.patch,undo:z.redo.patch}:void 0),pt(),n(B)&&hr($e(n(B)),{scrollToWhenVisible:!1})}else Se()(z)}}function It(){if(!b()&&E().canRedo){var z=E().redo();if(Dc(z)){var L={json:n(O),text:n(K)};f(O,z.redo.patch?sa(n(O),z.redo.patch):z.redo.json),f(X,z.redo.documentState),f(B,z.redo.selection),f(K,z.redo.text),f(Ye,z.redo.textIsRepaired),te=void 0,o("redo",{item:z,json:n(O),documentState:n(X),selection:n(B)}),Mn(L,z.undo.patch&&z.redo.patch?{json:n(O),previousJson:L.json,redo:z.redo.patch,undo:z.undo.patch}:void 0),pt(),n(B)&&hr($e(n(B)),{scrollToWhenVisible:!1})}else Ke()(z)}}function Fn(z){var L;b()||n(O)===void 0||(on=!0,Ce()({id:a,json:n(O),rootPath:z,onSort:(L=vt(function*(ve){var We=ve.operations;o("onSort",z,We),_t(We,(ae,he)=>({state:Fu(ae,he,z),selection:$t(z)}))}),function(ve){return L.apply(this,arguments)}),onClose:()=>{on=!1,setTimeout(pt)}}))}function Rr(){n(B)&&Fn(Tf(n(O),n(B)))}function Zn(){Fn([])}function Or(z){if(n(O)!==void 0){var L=z.id,ve=z.onTransform,We=z.onClose,ae=z.rootPath||[];on=!0,Ot()({id:L||i,json:n(O),rootPath:ae,onTransform:he=>{ve?ve({operations:he,json:n(O),transformedJson:sa(n(O),he)}):(o("onTransform",ae,he),_t(he,(et,ht)=>({state:Fu(et,ht,ae),selection:$t(ae)})))},onClose:()=>{on=!1,setTimeout(pt),We&&We()}})}}function Tr(){n(B)&&Or({rootPath:Tf(n(O),n(B))})}function Mr(){Or({rootPath:[]})}function hr(z){return _n.apply(this,arguments)}function _n(){return _n=vt(function*(z){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ve=L.scrollToWhenVisible,We=ve===void 0||ve,ae=L.element;f(X,Lo(n(O),n(X),z,bc));var he=ae??pn(z);if(o("scrollTo",{path:z,elem:he,refContents:n(u)}),!he||!n(u))return Promise.resolve();var et=n(u).getBoundingClientRect(),ht=he.getBoundingClientRect();if(!We&&ht.bottom>et.top&&ht.top<et.bottom)return Promise.resolve();var Tt=-et.height/4;return new Promise(ln=>{y(he,{container:n(u),offset:Tt,duration:300,callback:()=>ln()})})}),_n.apply(this,arguments)}function pn(z){var L,ve;return Vn(),(L=(ve=n(u))===null||ve===void 0?void 0:ve.querySelector('div[data-path="'.concat(gc(z),'"]')))!==null&&L!==void 0?L:void 0}function At(z){var L,ve;return Vn(),(L=(ve=n(u))===null||ve===void 0?void 0:ve.querySelector('span[data-search-result-index="'.concat(z,'"]')))!==null&&L!==void 0?L:void 0}function Ut(z){var L=pn(z);if(L&&n(u)){var ve=n(u).getBoundingClientRect(),We=L.getBoundingClientRect(),ae=sr(Ve(n(O),z))?20:We.height;We.top<ve.top+20?y(L,{container:n(u),offset:-20,duration:0}):We.top+ae>ve.bottom-20&&y(L,{container:n(u),offset:-(ve.height-ae-20),duration:0})}}function Mn(z,L){if(z.json!==void 0||z?.text!==void 0){if(n(K)!==void 0){var ve,We={text:n(K),json:void 0};(ve=Me())===null||ve===void 0||ve(We,z,{contentErrors:bt(),patchResult:L})}else if(n(O)!==void 0){var ae,he={text:void 0,json:n(O)};(ae=Me())===null||ae===void 0||ae(he,z,{contentErrors:bt(),patchResult:L})}}}function _t(z,L){o("handlePatch",z,L);var ve={json:n(O),text:n(K)},We=Xe(z,L);return Mn(ve,We),We}function w(z,L){var ve={json:n(O),text:n(K)},We={documentState:n(X),selection:n(B),json:n(O),text:n(K),textIsRepaired:n(Ye)},ae=Lo(n(O),yo(z,n(X)),[],il),he=typeof L=="function"?L(z,ae,n(B)):void 0;f(O,he?.json!==void 0?he.json:z),f(X,he?.state!==void 0?he.state:ae),f(B,he?.selection!==void 0?he.selection:n(B)),f(K,void 0),f(Ye,!1),te=void 0,vr(n(O)),yr(We),Mn(ve,void 0)}function I(z,L){o("handleChangeText");var ve={json:n(O),text:n(K)},We={documentState:n(X),selection:n(B),json:n(O),text:n(K),textIsRepaired:n(Ye)};try{f(O,J()(z)),f(X,Lo(n(O),yo(n(O),n(X)),[],il)),f(K,void 0),f(Ye,!1),te=void 0}catch(he){try{f(O,J()(aa(z))),f(X,Lo(n(O),yo(n(O),n(X)),[],il)),f(K,z),f(Ye,!0),te=void 0}catch{f(O,void 0),f(X,Ad({json:n(O),expand:il})),f(K,z),f(Ye,!1),te=n(K)!==""?Ei(n(K),he.message||String(he)):void 0}}if(typeof L=="function"){var ae=L(n(O),n(X),n(B));f(O,ae?.json!==void 0?ae.json:n(O)),f(X,ae?.state!==void 0?ae.state:n(X)),f(B,ae?.selection!==void 0?ae.selection:n(B))}vr(n(O)),yr(We),Mn(ve,void 0)}function Q(z,L){var ve=arguments.length>2&&arguments[2]!==void 0&&arguments[2];o("handleExpand",{path:z,expanded:L,recursive:ve}),L?He(z,ve?wv:Pd):Je(z,ve),pt()}function Oe(){Q([],!0,!0)}function Pe(){Q([],!1,!0)}function Te(z){o("openFind",{findAndReplace:z}),f(nt,!1),f(Et,!1),Vn(),f(nt,!0),f(Et,z)}function Le(z,L){o("handleExpandSection",z,L),f(X,function(ve,We,ae,he){return Pi(ve,We,ae,(et,ht)=>{if(!Dr(ht))return ht;var Tt=Yh(ht.visibleSections.concat(he));return be(be({},ht),{},{visibleSections:Tt})})}(n(O),n(X),z,L))}function mt(z){o("pasted json as text",z),f(tt,z)}function zt(z){o("pasted multiline text",{pastedText:z}),f(it,z)}function Ze(z){var L,ve=z.anchor,We=z.left,ae=z.top,he=z.width,et=z.height,ht=z.offsetTop,Tt=z.offsetLeft,ln=z.showTip,Vt=function(Ct){var Kn=Ct.json,bn=Ct.documentState,lt=Ct.selection,nn=Ct.readOnly,zn=Ct.onEditKey,ur=Ct.onEditValue,mr=Ct.onToggleEnforceString,Qe=Ct.onCut,Pt=Ct.onCopy,er=Ct.onPaste,Vr=Ct.onRemove,to=Ct.onDuplicate,gr=Ct.onExtract,Qr=Ct.onInsertBefore,pa=Ct.onInsert,mo=Ct.onConvert,Bo=Ct.onInsertAfter,Yo=Ct.onSort,Jo=Ct.onTransform,Nr=Kn!==void 0,qr=!!lt,lo=!!lt&&dn($e(lt)),Co=lt?Ve(Kn,$e(lt)):void 0,ha=Array.isArray(Co)?"Edit array":rn(Co)?"Edit object":"Edit value",hn=Nr&&(Rn(lt)||Br(lt)||un(lt)),wr=lt&&!lo?Ve(Kn,Xt($e(lt))):void 0,go=!nn&&Nr&&Bc(lt)&&!lo&&!Array.isArray(wr),Fa=!nn&&Nr&&lt!==void 0&&Bc(lt),$s=Fa&&!sr(Co),bs=!nn&&hn,js=hn,Jl=!nn&&qr,pu=!nn&&Nr&&hn&&!lo,hu=!nn&&Nr&&lt!==void 0&&(Rn(lt)||un(lt))&&!lo,Go=hn,ys=Go?"Convert to:":"Insert:",mu=!nn&&(Er(lt)&&Array.isArray(Co)||vo(lt)&&Array.isArray(wr)),gu=!nn&&(Go?rc(lt)&&!rn(Co):qr),bu=!nn&&(Go?rc(lt)&&!Array.isArray(Co):qr),ju=!nn&&(Go?rc(lt)&&sr(Co):qr),kr=lt!==void 0&&ra(Kn,bn,$e(lt));function ao(xs){hn?xs!=="structure"&&mo(xs):pa(xs)}return[{type:"row",items:[{type:"button",onClick:()=>zn(),icon:pi,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!go},{type:"dropdown-button",main:{type:"button",onClick:()=>ur(),icon:pi,text:ha,title:"Edit the value (Double-click on the value)",disabled:!Fa},width:"11em",items:[{type:"button",icon:pi,text:ha,title:"Edit the value (Double-click on the value)",onClick:()=>ur(),disabled:!Fa},{type:"button",icon:kr?vp:fp,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>mr(),disabled:!$s}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>Qe(!0),icon:hi,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!bs},width:"10em",items:[{type:"button",icon:hi,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>Qe(!0),disabled:!bs},{type:"button",icon:hi,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>Qe(!1),disabled:!bs}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Pt(!0),icon:Ga,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!js},width:"12em",items:[{type:"button",icon:Ga,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>Pt(!0),disabled:!js},{type:"button",icon:Ga,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>Pt(!1),disabled:!js}]},{type:"button",onClick:()=>er(),icon:pp,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!Jl}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>to(),icon:hp,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!pu},{type:"button",onClick:()=>gr(),icon:fg,text:"Extract",title:"Extract selected contents",disabled:!hu},{type:"button",onClick:()=>Yo(),icon:wc,text:"Sort",title:"Sort array or object contents",disabled:nn||!hn},{type:"button",onClick:()=>Jo(),icon:kc,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:nn||!hn},{type:"button",onClick:()=>Vr(),icon:od,text:"Remove",title:"Remove selected contents (Delete)",disabled:nn||!hn}]},{type:"column",items:[{type:"label",text:ys},{type:"button",onClick:()=>ao("structure"),icon:Go?Wl:ii,text:"Structure",title:ys+" structure like the first item in the array",disabled:!mu},{type:"button",onClick:()=>ao("object"),icon:Go?Wl:ii,text:"Object",title:ys+" object",disabled:!gu},{type:"button",onClick:()=>ao("array"),icon:Go?Wl:ii,text:"Array",title:ys+" array",disabled:!bu},{type:"button",onClick:()=>ao("value"),icon:Go?Wl:ii,text:"Value",title:ys+" value",disabled:!ju}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>Qr(),icon:pg,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:nn||!hn||lo},{type:"button",onClick:()=>Bo(),icon:hg,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:nn||!hn||lo}]}]}({json:n(O),documentState:n(X),selection:n(B),readOnly:b(),onEditKey:ct,onEditValue:Nn,onToggleEnforceString:ut,onCut:Mt,onCopy:yn,onPaste:Gn,onRemove:fr,onDuplicate:jr,onExtract:pr,onInsertBefore:Fr,onInsert:Wn,onInsertAfter:xr,onConvert:nr,onSort:Rr,onTransform:Tr}),Jn=(L=se()(Vt))!==null&&L!==void 0?L:Vt;if(Jn!==!1){var St={left:We,top:ae,offsetTop:ht,offsetLeft:Tt,width:he,height:et,anchor:ve,closeOnOuterClick:!0,onClose:()=>{on=!1,pt()}};on=!0;var Xn=c(Bm,{tip:ln?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Jn,onRequestClose:()=>d(Xn)},St)}}function Cn(z){if(!Ur(n(B)))if(z&&(z.stopPropagation(),z.preventDefault()),z&&z.type==="contextmenu"&&z.target!==n(m))Ze({left:z.clientX,top:z.clientY,width:Oa,height:Ca,showTip:!1});else{var L,ve=(L=n(u))===null||L===void 0?void 0:L.querySelector(".jse-context-menu-pointer.jse-selected");if(ve)Ze({anchor:ve,offsetTop:2,width:Oa,height:Ca,showTip:!1});else{var We,ae=(We=n(u))===null||We===void 0?void 0:We.getBoundingClientRect();ae&&Ze({top:ae.top+2,left:ae.left+2,width:Oa,height:Ca,showTip:!1})}}}function rt(z){Ze({anchor:Qh(z.target,"BUTTON"),offsetTop:0,width:Oa,height:Ca,showTip:!0})}function Ft(){return Bn.apply(this,arguments)}function Bn(){return(Bn=vt(function*(){if(o("apply pasted json",n(tt)),n(tt)){var z=n(tt).onPasteAsJson;f(tt,void 0),z(),setTimeout(pt)}})).apply(this,arguments)}function On(){return xn.apply(this,arguments)}function xn(){return(xn=vt(function*(){o("apply pasted multiline text",n(it)),n(it)&&(Un(JSON.stringify(n(it))),setTimeout(pt))})).apply(this,arguments)}function Qn(){o("clear pasted json"),f(tt,void 0),pt()}function Zt(){o("clear pasted multiline text"),f(it,void 0),pt()}function Fe(){de()(Cr.text)}function an(z){f(B,z),pt(),hr($e(z))}function pt(){o("focus"),n(m)&&(n(m).focus({preventScroll:!0}),n(m).select())}function or(z){return function(L,ve,We){var ae=Xt(We),he=[Wt(We)],et=Ve(L,ae),ht=et?Wu(et,ve,he):void 0;return ht?$t(ae.concat(ht)):Pa(We)}(n(O),n(X),z)}function ar(z){n(r)&&n(r).onDrag(z)}function zr(){n(r)&&n(r).onDragEnd()}var _r=P(void 0,!0);W(()=>n(B),()=>{var z;z=n(B),Lt(z,M())||(o("onSelect",z),Ee()(z))}),W(()=>(p(U()),p(F())),()=>{f(Ne,cv({escapeControlCharacters:U(),escapeUnicodeCharacters:F()}))}),W(()=>n(nt),()=>{(function(z){n(u)&&z&&n(u).scrollTop===0&&(xo(u,n(u).style.overflowAnchor="none"),xo(u,n(u).scrollTop+=sl),setTimeout(()=>{n(u)&&xo(u,n(u).style.overflowAnchor="")}))})(n(nt))}),W(()=>p(x()),()=>{Ln(x())}),W(()=>p(M()),()=>{(function(z){Lt(n(B),z)||(o("applyExternalSelection",{selection:n(B),externalSelection:z}),wl(z)&&f(B,z))})(M())}),W(()=>(n(O),p(Z()),p(S()),p($())),()=>{ue(n(O),Z(),S(),$())}),W(()=>(n(u),Zf),()=>{f(r,n(u)?Zf(n(u)):void 0)}),W(()=>(p(b()),p(q()),p(S()),n(Ne),p(Ae()),p(ce())),()=>{f(_r,{mode:Cr.tree,readOnly:b(),truncateTextSize:q(),parser:S(),normalization:n(Ne),getJson:En,getDocumentState:tr,getSelection:Gt,findElement:pn,findNextInside:or,focus:pt,onPatch:_t,onInsert:Pn,onExpand:Q,onSelect:Be,onFind:Te,onExpandSection:Le,onPasteJson:mt,onRenderValue:Ae(),onContextMenu:Ze,onClassName:ce()||(()=>{}),onDrag:ar,onDragEnd:zr})}),W(()=>n(_r),()=>{o("context changed",n(_r))}),jn();var io={expand:He,collapse:Je,validate:bt,getJson:En,patch:Xe,acceptAutoRepair:fn,openTransformModal:Or,scrollTo:hr,findElement:pn,findSearchResult:At,focus:pt};kt(!0);var eo=Dx();fe("mousedown",Aa,function(z){!Vi(z.target,L=>L===n(g))&&Ur(n(B))&&(o("click outside the editor, exit edit mode"),f(B,na(n(B))),h&&n(m)&&(n(m).focus({preventScroll:!0}),n(m).blur()),o("blur (outside editor)"),n(m)&&n(m).blur())});var C,H=dt(eo),pe=R(H),xe=z=>{(function(L,ve){ot(ve,!1);var We=P(void 0,!0),ae=P(void 0,!0),he=P(void 0,!0),et=v(ve,"json",9),ht=v(ve,"selection",9),Tt=v(ve,"readOnly",9),ln=v(ve,"showSearch",13,!1),Vt=v(ve,"history",9),Jn=v(ve,"onExpandAll",9),St=v(ve,"onCollapseAll",9),Xn=v(ve,"onUndo",9),Ct=v(ve,"onRedo",9),Kn=v(ve,"onSort",9),bn=v(ve,"onTransform",9),lt=v(ve,"onContextMenu",9),nn=v(ve,"onCopy",9),zn=v(ve,"onRenderMenu",9);function ur(){ln(!ln())}var mr=P(void 0,!0),Qe=P(void 0,!0),Pt=P(void 0,!0),er=P(void 0,!0);W(()=>p(et()),()=>{f(We,et()!==void 0)}),W(()=>(n(We),p(ht()),un),()=>{f(ae,n(We)&&(Rn(ht())||Br(ht())||un(ht())))}),W(()=>(p(Jn()),p(et())),()=>{f(mr,{type:"button",icon:Mm,title:"Expand all",className:"jse-expand-all",onClick:Jn(),disabled:!sr(et())})}),W(()=>(p(St()),p(et())),()=>{f(Qe,{type:"button",icon:zm,title:"Collapse all",className:"jse-collapse-all",onClick:St(),disabled:!sr(et())})}),W(()=>p(et()),()=>{f(Pt,{type:"button",icon:Xc,title:"Search (Ctrl+F)",className:"jse-search",onClick:ur,disabled:et()===void 0})}),W(()=>(p(Tt()),n(mr),n(Qe),p(Kn()),p(et()),p(bn()),n(Pt),p(lt()),p(Xn()),p(Vt()),p(Ct()),p(nn()),n(ae)),()=>{f(er,Tt()?[n(mr),n(Qe),{type:"separator"},{type:"button",icon:Ga,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:nn(),disabled:!n(ae)},{type:"separator"},n(Pt),{type:"space"}]:[n(mr),n(Qe),{type:"separator"},{type:"button",icon:wc,title:"Sort",className:"jse-sort",onClick:Kn(),disabled:Tt()||et()===void 0},{type:"button",icon:kc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:bn(),disabled:Tt()||et()===void 0},n(Pt),{type:"button",icon:mp,title:pv,className:"jse-contextmenu",onClick:lt()},{type:"separator"},{type:"button",icon:Qd,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Xn(),disabled:!Vt().canUndo},{type:"button",icon:Kd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Ct(),disabled:!Vt().canRedo},{type:"space"}])}),W(()=>(p(zn()),n(er)),()=>{f(he,zn()(n(er))||n(er))}),jn(),kt(!0),fu(L,{get items(){return n(he)}}),at()})(z,{get json(){return n(O)},get selection(){return n(B)},get readOnly(){return b()},get history(){return E()},onExpandAll:Oe,onCollapseAll:Pe,onUndo:rr,onRedo:It,onSort:Zn,onTransform:Mr,onContextMenu:rt,onCopy:yn,get onRenderMenu(){return Re()},get showSearch(){return n(nt)},set showSearch(L){f(nt,L)},$$legacy:!0})};ne(pe,z=>{k()&&z(xe)});var ie=D(pe,2),Ue=z=>{cx(z,{get json(){return n(O)},get selection(){return n(B)},onSelect:an,get onError(){return qe()},get pathParser(){return le()}})};ne(ie,z=>{A()&&z(Ue)});var jt=D(ie,2),ge=z=>{var L=Ix(),ve=dt(L),We=R(ve);We.readOnly=!0,Hn(We,ht=>f(m,ht),()=>n(m));var ae=D(ve,2),he=ht=>{var Tt=ir(),ln=dt(Tt),Vt=St=>{(function(Xn,Ct){function Kn(mr){mr.stopPropagation(),Ct.onCreateObject()}function bn(mr){mr.stopPropagation(),Ct.onCreateArray()}ot(Ct,!0);var lt=Yy(),nn=D(R(lt),2),zn=D(R(nn),2),ur=mr=>{var Qe=Ky(),Pt=D(dt(Qe),2);vn(Pt,"title","Create an empty JSON object (press '{')");var er=D(Pt,2);vn(er,"title","Create an empty JSON array (press '[')"),$o("click",Pt,Kn),$o("click",er,bn),N(mr,Qe)};ne(zn,mr=>{Ct.readOnly||mr(ur)}),$o("click",lt,()=>Ct.onClick()),N(Xn,lt),at()})(St,{get readOnly(){return b()},onCreateObject:()=>{pt(),oe("{")},onCreateArray:()=>{pt(),oe("[")},onClick:()=>{pt()}})},Jn=St=>{var Xn=Rx(),Ct=dt(Xn),Kn=De(()=>b()?[]:[{icon:Sc,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:Fe}]);ko(Ct,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(Kn)}}),Dm(D(Ct,2),{get text(){return n(K)},get json(){return n(O)},get indentation(){return G()},get parser(){return S()}}),N(St,Xn)};ne(ln,St=>{n(K)===""||n(K)===void 0?St(Vt):St(Jn,-1)}),N(ht,Tt)},et=ht=>{var Tt=Nx(),ln=dt(Tt);Em(R(ln),{get json(){return n(O)},get documentState(){return n(X)},get parser(){return S()},get showSearch(){return n(nt)},get showReplace(){return n(Et)},get readOnly(){return b()},columns:void 0,onSearch:mn,onFocus:Nt,onPatch:_t,onClose:Kt});var Vt=D(ln,2);vn(Vt,"data-jsoneditor-scrollable-contents",!0);var Jn=R(Vt),St=zn=>{N(zn,Tx())};ne(Jn,zn=>{n(nt)&&zn(St)}),Ld(D(Jn,2),{get value(){return n(O)},pointer:"",get state(){return n(X)},get validationErrors(){return n(re)},get searchResults(){return n(ye)},get selection(){return n(B)},get context(){return n(_r)},get onDragSelectionStart(){return Sr}}),Hn(Vt,zn=>f(u,zn),()=>n(u));var Xn=D(Vt,2),Ct=zn=>{var ur=De(()=>(n(tt),T(()=>"You pasted a JSON ".concat(Array.isArray(n(tt).contents)?"array":"object"," as text")))),mr=De(()=>[{icon:is,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:Ft},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:Qn}]);ko(zn,{type:"info",get message(){return n(ur)},get actions(){return n(mr)}})};ne(Xn,zn=>{n(tt)&&zn(Ct)});var Kn=D(Xn,2),bn=zn=>{var ur=De(()=>[{icon:is,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:On},{text:"Leave as is",title:"Keep the pasted array",onClick:Zt}]);ko(zn,{type:"info",message:"Multiline text was pasted as array",get actions(){return n(ur)}})};ne(Kn,zn=>{n(it)&&zn(bn)});var lt=D(Kn,2),nn=zn=>{var ur=De(()=>b()?[]:[{icon:Yd,text:"Ok",title:"Accept the repaired document",onClick:fn},{icon:Sc,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:Fe}]);ko(zn,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(ur)},onClose:pt})};ne(lt,zn=>{n(Ye)&&zn(nn)}),zv(D(lt,2),{get validationErrors(){return n(Ie)},selectError:ke}),N(ht,Tt)};ne(ae,ht=>{n(O)===void 0?ht(he):ht(et,-1)}),fe("paste",We,gn),N(z,L)},_e=z=>{N(z,Ux())};ne(jt,z=>{s?z(_e,-1):z(ge)}),Hn(H,z=>f(g,z),()=>n(g));var Ge=D(H,2),yt=z=>{Sm(z,{onClose:()=>f(V,!1)})};ne(Ge,z=>{n(V)&&z(yt)});var sn=D(Ge,2),cr=z=>{Cm(z,os(()=>n(_),{onClose:()=>{var L;(L=n(_))===null||L===void 0||L.onClose(),f(_,void 0)}}))};return ne(sn,z=>{n(_)&&z(cr)}),je(()=>{vn(H,"aria-label",j()),C=wt(H,1,"jse-tree-mode svelte-10mlrw4",null,C,{"no-main-menu":!k()})}),fe("keydown",H,function(z){var L=Ba(z),ve=z.shiftKey;if(o("keydown",{combo:L,key:z.key}),L==="Ctrl+X"&&(z.preventDefault(),Mt(!0)),L==="Ctrl+Shift+X"&&(z.preventDefault(),Mt(!1)),L==="Ctrl+C"&&(z.preventDefault(),yn(!0)),L==="Ctrl+Shift+C"&&(z.preventDefault(),yn(!1)),L==="Ctrl+D"&&(z.preventDefault(),jr()),L!=="Delete"&&L!=="Backspace"||(z.preventDefault(),fr()),L==="Insert"&&(z.preventDefault(),Pn("structure")),L==="Ctrl+A"&&(z.preventDefault(),f(B,$t([]))),L==="Ctrl+Q"&&Cn(z),L==="ArrowUp"||L==="Shift+ArrowUp"){z.preventDefault();var We=n(B)?Pf(n(O),n(X),n(B),ve)||n(B):Gs(n(O),n(X));f(B,We),Ut($e(We))}if(L==="ArrowDown"||L==="Shift+ArrowDown"){z.preventDefault();var ae=n(B)?function(Vt,Jn,St){var Xn=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(St){var Ct=Xn?$e(St):ss(Vt,St),Kn=sr(Ve(Vt,Ct))?zf(Vt,Jn,Ct,!0):Jn,bn=Wu(Vt,Jn,Ct),lt=Wu(Vt,Kn,Ct);if(Xn)return Er(St)?bn!==void 0?no(bn,bn):void 0:vo(St)?lt!==void 0?no(lt,lt):void 0:lt!==void 0?no(Us(St),lt):void 0;if(vo(St))return lt!==void 0?$t(lt):void 0;if(Er(St)||un(St))return bn!==void 0?$t(bn):void 0;if(Br(St)){if(bn===void 0||bn.length===0)return;var nn=Xt(bn),zn=Ve(Vt,nn);return Array.isArray(zn)?$t(bn):Ja(bn)}return Rn(St)?lt!==void 0?$t(lt):bn!==void 0?$t(bn):void 0:void 0}}(n(O),n(X),n(B),ve)||n(B):Gs(n(O),n(X));f(B,ae),Ut($e(ae))}if(L==="ArrowLeft"||L==="Shift+ArrowLeft"){z.preventDefault();var he=n(B)?function(Vt,Jn,St){var Xn=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(St){var Ct=Rf(Vt,Jn,St,!(arguments.length>4&&arguments[4]!==void 0)||arguments[4]),Kn=Ct.caret,bn=Ct.previous;if(Xn)return Rn(St)?void 0:no(St.path,St.path);if(Kn&&bn)return Rd(bn);var lt=Xt($e(St)),nn=Ve(Vt,lt);return un(St)&&Array.isArray(nn)?no(St.path,St.path):Rn(St)&&!Array.isArray(nn)?Ja(St.focusPath):void 0}}(n(O),n(X),n(B),ve,!b())||n(B):Gs(n(O),n(X));f(B,he),Ut($e(he))}if(L==="ArrowRight"||L==="Shift+ArrowRight"){z.preventDefault();var et=n(B)&&n(O)!==void 0?function(Vt,Jn,St){var Xn=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(St){var Ct=Rf(Vt,Jn,St,!(arguments.length>4&&arguments[4]!==void 0)||arguments[4]),Kn=Ct.caret,bn=Ct.next;return Xn?Rn(St)?void 0:no(St.path,St.path):Kn&&bn?Rd(bn):Rn(St)?$t(St.focusPath):void 0}}(n(O),n(X),n(B),ve,!b())||n(B):Gs(n(O),n(X));f(B,et),Ut($e(et))}if(L==="Enter"&&n(B)){if(su(n(B))){var ht=n(B).focusPath,Tt=Ve(n(O),Xt(ht));Array.isArray(Tt)&&(z.preventDefault(),f(B,$t(ht)))}Br(n(B))&&(z.preventDefault(),f(B,be(be({},n(B)),{},{edit:!0}))),un(n(B))&&(z.preventDefault(),sr(Ve(n(O),n(B).path))?Q(n(B).path,!0):f(B,be(be({},n(B)),{},{edit:!0})))}if(L.replace(/^Shift\+/,"").length===1&&n(B))return z.preventDefault(),void oe(z.key);if(L==="Enter"&&(vo(n(B))||Er(n(B))))return z.preventDefault(),void oe("");if(L==="Ctrl+Enter"&&un(n(B))){var ln=Ve(n(O),n(B).path);ou(ln)&&window.open(String(ln),"_blank")}L==="Escape"&&n(B)&&(z.preventDefault(),f(B,void 0)),L==="Ctrl+F"&&(z.preventDefault(),Te(!1)),L==="Ctrl+H"&&(z.preventDefault(),Te(!0)),L==="Ctrl+Z"&&(z.preventDefault(),rr()),L==="Ctrl+Shift+Z"&&(z.preventDefault(),It())}),fe("mousedown",H,function(z){o("handleMouseDown",z);var L=z.target;Hh(L,"BUTTON")||L.isContentEditable||(pt(),n(B)||n(O)!==void 0||n(K)!==""&&n(K)!==void 0||(o("createDefaultSelection"),f(B,$t([]))))}),fe("contextmenu",H,Cn),N(e,eo),gt(t,"expand",He),gt(t,"collapse",Je),gt(t,"validate",bt),gt(t,"getJson",En),gt(t,"patch",Xe),gt(t,"acceptAutoRepair",fn),gt(t,"openTransformModal",Or),gt(t,"scrollTo",hr),gt(t,"findElement",pn),gt(t,"findSearchResult",At),gt(t,"focus",pt),at(io)}function _m(e){return typeof(t=e)!="object"||t===null?e:new Proxy(e,{get:(r,o,s)=>_m(Reflect.get(r,o,s)),set:()=>!1,deleteProperty:()=>!1});var t}var dc=Wr("jsoneditor:History");function Vm(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,r=[],o=0;function s(){return o<r.length}function a(){return o>0}function i(){return{canUndo:s(),canRedo:a(),items:()=>r.slice().reverse(),add:c,undo:u,redo:m,clear:d}}function l(){e.onChange&&e.onChange(i())}function c(g){dc("add",g),r=[g].concat(r.slice(o)).slice(0,t),o=0,l()}function d(){dc("clear"),r=[],o=0,l()}function u(){if(s()){var g=r[o];return o+=1,dc("undo",g),l(),g}}function m(){if(a())return dc("redo",r[o-=1]),l(),r[o]}return{get:i}}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-transform-modal-inner.svelte-lta8xm {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .query-error:where(.svelte-lta8xm) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data.jse-hide:where(.svelte-lta8xm) {
  flex: none;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents.jse-hide-original-data:where(.svelte-lta8xm) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm),
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
    flex: unset;
  }
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) button:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  font-weight: bold;
  padding: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm),
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):focus,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):read-only,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-preview.jse-error:where(.svelte-lta8xm) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-lta8xm a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);var nl=ru(()=>f0),Xs=ru(()=>p0),Bx=Y('<div class="query-error svelte-lta8xm"> </div>'),Jx=Y("<!> <!>",1),Lx=Y('<div class="jse-preview jse-error svelte-lta8xm"> </div>'),Wx=Y('<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>',1),Fx=Y('<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>');function _x(e,t){var r,o,s;ot(t,!1);var a=Wr("jsoneditor:TransformModal"),i=v(t,"id",25,()=>"transform-modal-"+ui()),l=v(t,"json",9),c=v(t,"rootPath",25,()=>[]),d=v(t,"indentation",9),u=v(t,"truncateTextSize",9),m=v(t,"escapeControlCharacters",9),g=v(t,"escapeUnicodeCharacters",9),h=v(t,"parser",9),y=v(t,"parseMemoizeOne",9),b=v(t,"validationParser",9),j=v(t,"pathParser",9),x=v(t,"queryLanguages",9),M=v(t,"queryLanguageId",13),E=v(t,"onChangeQueryLanguage",9),q=v(t,"onRenderValue",9),k=v(t,"onRenderMenu",9),A=v(t,"onRenderContextMenu",9),U=v(t,"onClassName",9),F=v(t,"onTransform",9),S=v(t,"onClose",9),J=P(void 0,!0),Z=P(Vm({onChange:te=>f(Z,te)}).get(),!0),$=P(void 0,!0),le=P(void 0,!0),G=P(!1,!0),qe="".concat(i(),":").concat(qt(c())),Me=(r=nl()[qe])!==null&&r!==void 0?r:{},de=P(Xs().showWizard!==!1,!0),Ee=P(Xs().showOriginal!==!1,!0),Se=P((o=Me.queryOptions)!==null&&o!==void 0?o:{},!0),Ke=P(M()===Me.queryLanguageId&&Me.query?Me.query:"",!0),Ae=P((s=Me.isManual)!==null&&s!==void 0&&s,!0),Re=P(void 0,!0),se=P(void 0,!0),ce=P({text:""},!0);function me(te){var ze;return(ze=x().find(X=>X.id===te))!==null&&ze!==void 0?ze:x()[0]}function we(te){try{f(Se,te),f(Ke,me(M()).createQuery(n($),te)),f(Re,void 0),f(Ae,!1),a("updateQueryByWizard",{queryOptions:n(Se),query:n(Ke),isManual:n(Ae)})}catch(ze){f(Re,String(ze))}}function Ce(te){f(Ke,te.target.value),f(Ae,!0),a("handleChangeQuery",{query:n(Ke),isManual:n(Ae)})}n(Ae)||we(n(Se)),Xr(()=>{var te;(te=n(J))===null||te===void 0||te.focus()});var Ot=xc(function(te,ze){if(te===void 0)return f(ce,{text:""}),void f(se,"Error: No JSON");if(ze.trim()!=="")try{a("previewTransform",{query:ze});var X=me(M()).executeQuery(te,ze,h());f(ce,{json:X}),f(se,void 0)}catch(B){f(ce,{text:""}),f(se,String(B))}else f(ce,{json:te})},300);function Qt(){if(n($)===void 0)return f(ce,{text:""}),void f(se,"Error: No JSON");try{a("handleTransform",{query:n(Ke)});var te=me(M()).executeQuery(n($),n(Ke),h());F()([{op:"replace",path:qt(c()),value:te}]),S()()}catch(ze){console.error(ze),f(ce,{text:""}),f(se,String(ze))}}function on(){f(de,!n(de)),Xs(Xs().showWizard=n(de))}function V(){f(Ee,!n(Ee)),Xs(Xs().showOriginal=n(Ee))}function _(te){te.focus()}function O(te){a("handleChangeQueryLanguage",te),M(te),E()(te),we(n(Se))}function K(){n(G)?f(G,!n(G)):S()()}W(()=>(p(l()),p(c())),()=>{f($,_m(Ve(l(),c())))}),W(()=>n($),()=>{f(le,n($)?{json:n($)}:{text:""})}),W(()=>(n($),n(Ke)),()=>{Ot(n($),n(Ke))}),W(()=>(nl(),n(Se),n(Ke),p(M()),n(Ae)),()=>{nl(nl()[qe]={queryOptions:n(Se),query:n(Ke),queryLanguageId:M(),isManual:n(Ae)}),a("store state in memory",qe,nl()[qe])}),jn(),kt(!0),Cl(e,{get onClose(){return S()},className:"jse-transform-modal",get fullscreen(){return n(G)},children:(te,ze)=>{var X=Fx();zd(R(X),{children:(B,Be)=>{var Bt=Wx(),Ne=dt(Bt);(function(ut,fn){ot(fn,!1);var Mt,In=v(fn,"queryLanguages",9),yn=v(fn,"queryLanguageId",9),Rt=v(fn,"fullscreen",13),gn=v(fn,"onChangeQueryLanguage",9),Gn=v(fn,"onClose",9),An=P(void 0,!0),Un=hs("absolute-popup"),Dn=Un.openAbsolutePopup,fr=Un.closeAbsolutePopup;function jr(){var pr={queryLanguages:In(),queryLanguageId:yn(),onChangeQueryLanguage:Pn=>{fr(Mt),gn()(Pn)}};Mt=Dn(ty,pr,{offsetTop:-2,offsetLeft:0,anchor:n(An),closeOnOuterClick:!0})}kt(!0),Kc(ut,{title:"Transform",fullScreenButton:!0,get onClose(){return Gn()},get fullscreen(){return Rt()},set fullscreen(pr){Rt(pr)},$$slots:{actions:(pr,Pn)=>{var Wn,nr=oy();tn(R(nr),{get data(){return Eg}}),Hn(nr,Fr=>f(An,Fr),()=>n(An)),je(()=>Wn=wt(nr,1,"jse-config svelte-5gkegr",null,Wn,{hide:In().length<=1})),fe("click",nr,jr),N(pr,nr)}},$$legacy:!0}),at()})(Ne,{get queryLanguages(){return x()},get queryLanguageId(){return M()},onChangeQueryLanguage:O,get onClose(){return S()},get fullscreen(){return n(G)},set fullscreen(ut){f(G,ut)},$$legacy:!0});var tt=R(D(Ne,2)),it=R(tt),ye=D(R(it),2);qh(ye,()=>(p(M()),T(()=>me(M()).description)),!0);var nt=D(ye,4),Et=D(nt,2),mn=R(Et),Nt=R(mn),ft=R(Nt),Kt=De(()=>n(de)?Na:pl);tn(ft,{get data(){return n(Kt)}});var ke=D(Et,2),He=ut=>{var fn=ir(),Mt=dt(fn),In=gn=>{var Gn=Jx(),An=dt(Gn);Z0(An,{get queryOptions(){return n(Se)},get json(){return n($)},onChange:we});var Un=D(An,2),Dn=fr=>{var jr=Bx(),pr=R(jr);je(()=>st(pr,n(Re))),N(fr,jr)};ne(Un,fr=>{n(Re)&&fr(Dn)}),N(gn,Gn)},yn=Dt(()=>(n($),T(()=>Array.isArray(n($))))),Rt=gn=>{N(gn,Hr("(Only available for arrays, not for objects)"))};ne(Mt,gn=>{n(yn)?gn(In):gn(Rt,-1)}),N(ut,fn)};ne(ke,ut=>{n(de)&&ut(He)});var Je=D(ke,4);Hn(Je,ut=>f(J,ut),()=>n(J));var Ye,Ie,re=D(it,2),Yt=R(re),ue=R(Yt),bt=R(ue),En=R(bt),tr=R(En),Gt=De(()=>n(Ee)?Na:pl);tn(tr,{get data(){return n(Gt)}});var Ln=D(ue,2),Tn=ut=>{Hd(ut,{get externalContent(){return n(le)},externalSelection:void 0,get history(){return n(Z)},readOnly:!0,get truncateTextSize(){return u()},mainMenuBar:!1,navigationBar:!1,get indentation(){return d()},get escapeControlCharacters(){return m()},get escapeUnicodeCharacters(){return g()},get parser(){return h()},get parseMemoizeOne(){return y()},get onRenderValue(){return q()},get onRenderMenu(){return k()},get onRenderContextMenu(){return A()},onError:T(()=>console.error),get onChange(){return Sr},get onChangeMode(){return Sr},get onSelect(){return Sr},get onUndo(){return Sr},get onRedo(){return Sr},get onFocus(){return Sr},get onBlur(){return Sr},get onSortModal(){return Sr},get onTransformModal(){return Sr},get onJSONEditorModal(){return Sr},get onClassName(){return U()},validator:void 0,get validationParser(){return b()},get pathParser(){return j()}})};ne(Ln,ut=>{n(Ee)&&ut(Tn)});var vr=D(Yt,2),yr=D(R(vr),2),Xe=ut=>{Hd(ut,{get externalContent(){return n(ce)},externalSelection:void 0,get history(){return n(Z)},readOnly:!0,get truncateTextSize(){return u()},mainMenuBar:!1,navigationBar:!1,get indentation(){return d()},get escapeControlCharacters(){return m()},get escapeUnicodeCharacters(){return g()},get parser(){return h()},get parseMemoizeOne(){return y()},get onRenderValue(){return q()},get onRenderMenu(){return k()},get onRenderContextMenu(){return A()},onError:T(()=>console.error),get onChange(){return Sr},get onChangeMode(){return Sr},get onSelect(){return Sr},get onUndo(){return Sr},get onRedo(){return Sr},get onFocus(){return Sr},get onBlur(){return Sr},get onSortModal(){return Sr},get onTransformModal(){return Sr},get onJSONEditorModal(){return Sr},get onClassName(){return U()},validator:void 0,get validationParser(){return b()},get pathParser(){return j()}})},ct=ut=>{var fn=Lx(),Mt=R(fn);je(()=>st(Mt,n(se))),N(ut,fn)};ne(yr,ut=>{n(se)?ut(ct,-1):ut(Xe)});var Nn=R(D(tt,2));$r(()=>fe("click",Nn,Qt)),oo(Nn,ut=>_?.(ut)),je(ut=>{Ws(nt,ut),Ws(Je,n(Ke)),Ye=wt(re,1,"jse-data-contents svelte-lta8xm",null,Ye,{"jse-hide-original-data":!n(Ee)}),Ie=wt(Yt,1,"jse-original-data svelte-lta8xm",null,Ie,{"jse-hide":!n(Ee)}),Nn.disabled=!!n(se)},[()=>(p(dn),p(c()),p(fo),T(()=>dn(c())?"(document root)":fo(c())))]),fe("click",Nt,on),fe("input",Je,Ce),fe("click",En,V),N(B,Bt)},$$slots:{default:!0}}),oo(X,(B,Be)=>Yc?.(B,Be),()=>K),N(te,X)},$$slots:{default:!0}}),at()}function qo(){}var Vx=0;class Gr{constructor(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=Vx++,this.perNode=!!t.perNode,this.deserialize=t.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=t.combine||null}add(t){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof t!="function"&&(t=Ml.match(t)),r=>{var o=t(r);return o===void 0?null:[this,o]}}}Gr.closedBy=new Gr({deserialize:e=>e.split(" ")}),Gr.openedBy=new Gr({deserialize:e=>e.split(" ")}),Gr.group=new Gr({deserialize:e=>e.split(" ")}),Gr.isolate=new Gr({deserialize:e=>{if(e&&e!="rtl"&&e!="ltr"&&e!="auto")throw new RangeError("Invalid value for isolate: "+e);return e||"auto"}}),Gr.contextHash=new Gr({perNode:!0}),Gr.lookAhead=new Gr({perNode:!0}),Gr.mounted=new Gr({perNode:!0});var sp,$x=Object.create(null);class Ml{constructor(t,r,o){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=t,this.props=r,this.id=o,this.flags=s}static define(t){var r=t.props&&t.props.length?Object.create(null):$x,o=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),s=new Ml(t.name||"",r,t.id,o);if(t.props){for(var a of t.props)if(Array.isArray(a)||(a=a(s)),a){if(a[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");r[a[0].id]=a[1]}}return s}prop(t){return this.props[t.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(t){if(typeof t=="string"){if(this.name==t)return!0;var r=this.prop(Gr.group);return!!r&&r.indexOf(t)>-1}return this.id==t}static match(t){var r=Object.create(null);for(var o in t)for(var s of o.split(" "))r[s]=t[o];return a=>{for(var i=a.prop(Gr.group),l=-1;l<(i?i.length:0);l++){var c=r[l<0?a.name:i[l]];if(c)return c}}}}Ml.none=new Ml("",Object.create(null),0,8),function(e){e[e.ExcludeBuffers=1]="ExcludeBuffers",e[e.IncludeAnonymous=2]="IncludeAnonymous",e[e.IgnoreMounts=4]="IgnoreMounts",e[e.IgnoreOverlays=8]="IgnoreOverlays",e[e.EnterBracketed=16]="EnterBracketed"}(sp||(sp={})),new Gr({perNode:!0});xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-status-bar.svelte-1pmgv9j {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  margin: 0;
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-status-bar.svelte-1pmgv9j:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1pmgv9j .jse-status-bar-info:where(.svelte-1pmgv9j) {
  padding: 2px;
}`);var rd=Y('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),Hx=Y('<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>'),Ev=sg.define([{tag:Qi.propertyName,color:"var(--internal-key-color)"},{tag:Qi.number,color:"var(--internal-value-color-number)"},{tag:Qi.bool,color:"var(--internal-value-color-boolean)"},{tag:Qi.string,color:"var(--internal-value-color-string)"},{tag:Qi.keyword,color:"var(--internal-value-color-null)"}]),Qx=dp(Ev),Kx=Ev.style;Ev.style=e=>Kx(e||[]);var Yx=[ig.fromClass(class{constructor(e){this.view=e,this.indentUnit=Tv(e.state),this.initialPaddingLeft=null,this.isChrome=window?.navigator.userAgent.includes("Chrome"),this.generate(e.state)}update(e){var t=Tv(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new lg;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:r=>{var o=r.contentDOM.querySelector(".cm-line");o&&(this.initialPaddingLeft=window.getComputedStyle(o).getPropertyValue("padding-left"),this.addStyleToBuilder(t,r.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,r){var o=this.getVisibleLines(t);for(var s of o){var a=this.numColumns(s.text,t.tabSize),i=a.numColumns,l=a.containsTab,c="calc(".concat(i+this.indentUnit,"ch + ").concat(r,")"),d=this.isChrome?"calc(-".concat(i+this.indentUnit,"ch - ").concat(l?1:0,"px)"):"-".concat(i+this.indentUnit,"ch");e.add(s.from,s.from,cg.line({attributes:{style:"padding-left: ".concat(c,"; text-indent: ").concat(d,";")}}))}}getVisibleLines(e){var t=new Set,r=null;for(var o of this.view.visibleRanges)for(var s=o.from,a=o.to,i=s;i<=a;){var l=e.doc.lineAt(i);r!==l&&(t.add(l),r=l),i=l.to+1}return t}numColumns(e,t){var r=0,o=!1;e:for(var s=0;s<e.length;s++)switch(e[s]){case" ":r+=1;continue e;case"	":r+=t-r%t,o=!0;continue e;case"\r":continue e;default:break e}return{numColumns:r,containsTab:o}}},{decorations:e=>e.decorations})];xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-text-mode.svelte-k2b9e6 {
  --internal-key-color: var(--jse-key-color, #1a1a1a);
  --internal-value-color-number: var(--jse-value-color-number, #ee422e);
  --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
  --internal-value-color-string: var(--jse-value-color-string, #008000);
  --internal-value-color-null: var(--jse-value-color-null, #004ed0);
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
}
.jse-text-mode.no-main-menu.svelte-k2b9e6 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-hidden:where(.svelte-k2b9e6) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-active-outline, var(--jse-search-match-outline, 2px solid #e0be00));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  margin: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button:hover {
  color: var(--jse-panel-button-color-highlight, var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d)));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button[name='close'] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading-space:where(.svelte-k2b9e6) {
  flex: 1;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading:where(.svelte-k2b9e6) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-preview:where(.svelte-k2b9e6) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--jse-background-color, #fff);
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-tip:where(.svelte-k2b9e6) {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-track:where(.svelte-k2b9e6) {
  flex: 1;
  height: 6px;
  background: var(--jse-panel-background, #ebebeb);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-fill:where(.svelte-k2b9e6) {
  height: 100%;
  background: linear-gradient(90deg, var(--jse-theme-color, #3883fa), var(--jse-theme-color-highlight, #5f9dff));
  border-radius: 2px;
  transition: width 0.1s ease;
  min-width: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6) {
  padding: 4px 12px;
  font-size: 12px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  background: var(--jse-theme-color, #3883fa);
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  border: 1px solid var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6):hover {
  background: var(--jse-theme-color-highlight, #5f9dff);
  color: #fff;
}`);var Gx=Y('<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>'),Zx=Y('<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>',1),Xx=Y("<!> <!> <!> <!>",1),e1=Y("<div></div> <!> <!>",1),t1=Y('<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>'),n1=Y("<div><!> <!> <!></div>");function r1(e,t){ot(t,!1);var r=P(void 0,!0),o=P(void 0,!0),s=v(t,"readOnly",9),a=v(t,"ariaLabel",9,void 0),i=v(t,"mainMenuBar",9),l=v(t,"statusBar",9),c=v(t,"askToFormat",9),d=v(t,"externalContent",9),u=v(t,"externalSelection",9),m=v(t,"history",9),g=v(t,"indentation",9),h=v(t,"tabSize",9),y=v(t,"escapeUnicodeCharacters",9),b=v(t,"maxDocumentSize",9),j=v(t,"parser",9),x=v(t,"validator",9),M=v(t,"validationParser",9),E=v(t,"onChange",9),q=v(t,"onChangeMode",9),k=v(t,"onSelect",9),A=v(t,"onUndo",9),U=v(t,"onRedo",9),F=v(t,"onError",9),S=v(t,"onFocus",9),J=v(t,"onBlur",9),Z=v(t,"onRenderMenu",9),$=v(t,"onSortModal",9),le=v(t,"onTransformModal",9),G=Wr("jsoneditor:TextMode"),qe={key:"Mod-i",run:Ie,shift:re,preventDefault:!0},Me=typeof window>"u";G("isSSR:",Me);var de,Ee=P(void 0,!0),Se=P(void 0,!0),Ke=P(void 0,!0),Ae=P(!1,!0),Re=P(c(),!0),se=P([],!0),ce=P(!1,!0),me=P(0,!0),we=P(0,!0),Ce=null,Ot=new Qs,Qt=new Qs,on=new Qs,V=new Qs,_=new Qs,O=new Qs,K=d(),te=P(Md(K,g(),j()),!0),ze=ub.define(),X=null;function B(){if(!X||X.length===0)return!1;var w=X[0].startState,I=X[X.length-1].state,Q=X.map(Pe=>Pe.changes).reduce((Pe,Te)=>Pe.compose(Te)),Oe={type:"text",undo:{changes:Q.invert(w.doc).toJSON(),selection:Fr(w.selection)},redo:{changes:Q.toJSON(),selection:Fr(I.selection)}};return G("add history item",Oe),m().add(Oe),X=null,!0}var Be=P(y(),!0);Xr(vt(function*(){if(!Me)try{de=function(w){var I=w.target,Q=w.initialText,Oe=w.readOnly,Pe=w.indentation;G("Create CodeMirror editor",{readOnly:Oe,indentation:Pe});var Te=function(mt,zt){return _u(mt)?mt.ranges.every(Ze=>Ze.anchor<zt.length&&Ze.head<zt.length):!1}(u(),Q)?gn(u()):void 0,Le=Hs.create({doc:Q,selection:Te,extensions:[Iv.of([Rg,qe]),Ot.of(ut()),Tg(),Ng(),Ig(),Ug(),Dg(),ye(),Bg(),Jg(),Hs.allowMultipleSelections.of(!0),Lg(),dp(Wg,{fallback:!0}),Fg(),_g(),Vg(),$g(),Hg(),Qg(),Kg(),Iv.of([...Yg,...Gg,...Zg,{key:"Mod-z",run:Gt,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:Ln,preventDefault:!0},{key:"Ctrl-Shift-z",run:Ln,preventDefault:!0},...Xg,...eb,...tb]),Qx,nb({hideFirstIndent:!0}),ws.domEventHandlers({dblclick:Nn}),ws.updateListener.of(mt=>{f(Ke,mt.state),mt.docChanged&&(mt.transactions.some(zt=>!!zt.annotation(ze))||(X=[...X??[],mt]),pr()),mt.selectionSet&&nr()}),rb(),ob({top:!0}),ws.lineWrapping,Qt.of(Hs.readOnly.of(Oe)),V.of(Hs.tabSize.of(h())),on.of(jr(Pe)),_.of(ws.theme({},{dark:fn()})),O.of(Dn(a()))]});return de=new ws({state:Le,parent:I}),Te&&de.dispatch(de.state.update({selection:Te.main,scrollIntoView:!0})),de}({target:n(Ee),initialText:xr(n(te),b(),n(Ae))?"":n(r).escapeValue(n(te)),readOnly:s(),indentation:g()})}catch(w){console.error(w)}})),Do(()=>{Pn(),de&&(G("Destroy CodeMirror editor"),de.destroy()),Nt()});var Bt=yi(),Ne=yi();function tt(){de&&(G("focus"),de.focus())}function it(w,I){if(de)try{(function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],Oe=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],Pe=de.state,Te=Pe.doc.length,Le=Uv(Pe,Te,1/0);if(Le){var mt=[];if(Q.length===0)mt=Et(Le,Pe,void 0,Oe);else{var zt=Iu(n(r).escapeValue(n(te)),Q).from;zt!==void 0&&zt!==0&&(mt=Et(Le,Pe,zt,Oe))}mt.length>0&&function(Ze){mn.apply(this,arguments)}(mt)}})(w,I)}catch(Q){F()(Q)}}function ye(){return ab.of((w,I,Q)=>{var Oe=Uv(w,w.doc.length,1/0);if(!Oe||Oe.length<Q)return null;for(var Pe=null,Te=Oe.resolveStack(Q,1);Te;Te=Te.next){var Le=Te.node;if(!(Le.to<=Q||Le.from>Q)){if(Pe&&Le.from<I)break;var mt=Le.type.prop(sb);if(mt&&(Le.to<Oe.length-50||Oe.length==w.doc.length||!nt(Le))){var zt=mt(Le,w);zt&&zt.from<=Q&&zt.from>=I&&zt.to>Q&&(Pe=zt)}}}return Pe})}function nt(w){var I=w.lastChild;return I&&I.to==w.to&&I.type.isError}function Et(w,I,Q){var Oe=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],Pe=[],Te=new Set;return w.iterate({enter(Le){if(Q===void 0||Le.from>=Q){var mt=bb(I,Le.from,Le.to);if(mt){var zt="".concat(mt.from,"-").concat(mt.to);if(!Te.has(zt))if(Oe)Pe.push({from:mt.from,to:mt.to}),Te.add(zt);else{var Ze=Pe.some(Cn=>Cn.from<=mt.from&&Cn.to>=mt.to);Ze||(Pe.push({from:mt.from,to:mt.to}),Te.add(zt))}}}}}),Pe}function mn(){return mn=vt(function*(w){if(w.length!==0){var I=w.length>5e3;I&&(f(ce,!0),f(me,0),f(we,w.length),Ce=new AbortController);var Q=Oe=>new Promise(Pe=>{var Te;I&&(Te=Ce)!==null&&Te!==void 0&&Te.signal.aborted?Pe():requestAnimationFrame(()=>{var Le=Math.min(Oe+100,w.length),mt=w.slice(Oe,Le);de.dispatch({effects:mt.map(zt=>jb.of({from:zt.from,to:zt.to}))}),I&&f(me,Le),Le<w.length?Q(Le).then(Pe):Pe()})});yield Q(0),I&&(f(ce,!1),f(me,0),f(we,0),Ce=null)}}),mn.apply(this,arguments)}function Nt(){Ce&&Ce.abort()}function ft(w){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Pd;if(de)try{if(w&&w.length>0){var Q=Iu(n(r).escapeValue(n(te)),w).from;Q!==void 0&&(de.dispatch({selection:{anchor:Q,head:Q}}),db(de))}else vb(de);I?.(w)}catch(Oe){F()(Oe)}}function Kt(){ft([],()=>!0)}function ke(){it([],!0)}var He=!1;function Je(w){return Ye(w,!1)}function Ye(w,I){G("handlePatch",w,I);var Q=j().parse(n(te)),Oe=sa(Q,w),Pe=gp(Q,w);return Rt({text:j().stringify(Oe,null,g())},I,!1),{json:Oe,previousJson:Q,undo:Pe,redo:w}}function Ie(){if(G("format"),s())return!1;try{var w=j().parse(n(te));return Rt({text:j().stringify(w,null,g())},!0,!1),f(Re,c()),!0}catch(I){F()(I)}return!1}function re(){if(G("compact"),s())return!1;try{var w=j().parse(n(te));return Rt({text:j().stringify(w)},!0,!1),f(Re,!1),!0}catch(I){F()(I)}return!1}function Yt(){if(G("repair"),!s())try{Rt({text:aa(n(te))},!0,!1),f(oe,Lu),f(Jt,void 0)}catch(w){F()(w)}}function ue(){var w;if(!s())try{var I=j().parse(n(te));He=!0,$()({id:Bt,json:I,rootPath:[],onSort:(w=vt(function*(Q){var Oe=Q.operations;G("onSort",Oe),Ye(Oe,!0)}),function(Q){return w.apply(this,arguments)}),onClose:()=>{He=!1,tt()}})}catch(Q){F()(Q)}}function bt(w){var I=w.id,Q=w.rootPath,Oe=w.onTransform,Pe=w.onClose;try{var Te=j().parse(n(te));He=!0,le()({id:I||Ne,json:Te,rootPath:Q||[],onTransform:Le=>{Oe?Oe({operations:Le,json:Te,transformedJson:sa(Te,Le)}):(G("onTransform",Le),Ye(Le,!0))},onClose:()=>{He=!1,tt(),Pe&&Pe()}})}catch(Le){F()(Le)}}function En(){s()||bt({rootPath:[]})}function tr(){de&&(n(Ee)&&n(Ee).querySelector(".cm-search")?mb(de):gb(de))}function Gt(){if(s())return!1;Pn();var w=m().undo();return G("undo",w),Of(w)?(de.dispatch({annotations:ze.of("undo"),changes:Dv.fromJSON(w.undo.changes),selection:xu.fromJSON(w.undo.selection),scrollIntoView:!0}),!0):(A()(w),!1)}function Ln(){if(s())return!1;Pn();var w=m().redo();return G("redo",w),Of(w)?(de.dispatch({annotations:ze.of("redo"),changes:Dv.fromJSON(w.redo.changes),selection:xu.fromJSON(w.redo.selection),scrollIntoView:!0}),!0):(U()(w),!1)}function Tn(){f(Ae,!0),Rt(d(),!0,!0)}function vr(){q()(Cr.tree)}function yr(){Un()}function Xe(w){G("select validation error",w);var I=Mt(w),Q=I.from,Oe=I.to;Q!==void 0&&Oe!==void 0&&(ct(Q,Oe),tt())}function ct(w,I){G("setSelection",{anchor:w,head:I}),de&&de.dispatch(de.state.update({selection:{anchor:w,head:I},scrollIntoView:!0}))}function Nn(w,I){if(I.state.selection.ranges.length===1){var Q=I.state.selection.ranges[0],Oe=n(te).slice(Q.from,Q.to);if(Oe==="{"||Oe==="["){var Pe=wp.parse(n(te)),Te=Object.keys(Pe.pointers).find(mt=>{var zt;return((zt=Pe.pointers[mt].value)===null||zt===void 0?void 0:zt.pos)===Q.from}),Le=Pe.pointers[Te];Te&&Le&&Le.value&&Le.valueEnd&&(G("pointer found, selecting inner contents of path:",Te,Le),ct(Le.value.pos+1,Le.valueEnd.pos-1))}}}function ut(){return ib(rr,{delay:300})}function fn(){return!!n(Ee)&&getComputedStyle(n(Ee)).getPropertyValue("--jse-theme").includes("dark")}function Mt(w){var I=w.path,Q=w.message,Oe=w.severity,Pe=Iu(n(r).escapeValue(n(te)),I);return{path:I,line:Pe.line,column:Pe.column,from:Pe.from,to:Pe.to,message:Q,severity:Oe,actions:[]}}function In(w,I){var Q=w.line,Oe=w.column,Pe=w.position,Te=w.message;return{path:[],line:Q,column:Oe,from:Pe,to:Pe,severity:Io.error,message:Te,actions:I&&!s()?[{name:"Auto repair",apply:()=>Yt()}]:void 0}}function yn(w){return{from:w.from||0,to:w.to||0,message:w.message||"",actions:w.actions,severity:w.severity}}function Rt(w,I,Q){var Oe=Md(w,g(),j()),Pe=!Lt(w,K),Te=K;G("setCodeMirrorContent",{isChanged:Pe,emitChange:I,forceUpdate:Q}),de&&(Pe||Q)&&(K=w,f(te,Oe),xr(n(te),b(),n(Ae))||de.dispatch({changes:{from:0,to:de.state.doc.length,insert:n(r).escapeValue(n(te))}}),B(),Pe&&I&&Wn(K,Te))}function gn(w){return _u(w)?xu.fromJSON(w):void 0}function Gn(){return An.apply(this,arguments)}function An(){return An=vt(function*(){G("refresh"),yield function(){return fr.apply(this,arguments)}()}),An.apply(this,arguments)}function Un(){if(de){var w=de?n(r).unescapeValue(de.state.doc.toString()):"",I=w!==n(te);if(G("onChangeCodeMirrorValue",{isChanged:I}),I){var Q=K;f(te,w),K={text:n(te)},B(),Wn(K,Q),Vn(),nr()}}}function Dn(w){return ws.contentAttributes.of(w?{"aria-label":w}:{})}function fr(){return(fr=vt(function*(){if(Vn(),de){var w=fn();return G("updateTheme",{dark:w}),de.dispatch({effects:[_.reconfigure(ws.theme({},{dark:w}))]}),new Promise(I=>setTimeout(I))}return Promise.resolve()})).apply(this,arguments)}function jr(w){var I=lb.of(typeof w=="number"?" ".repeat(w):w);return w==="	"?[I]:[I,Yx]}Mv({onMount:Xr,onDestroy:Do,getWindow:()=>Nl(n(Se)),hasFocus:()=>He&&document.hasFocus()||dv(n(Se)),onFocus:S(),onBlur:()=>{Pn(),J()()}});var pr=xc(Un,300);function Pn(){pr.flush()}function Wn(w,I){E()&&E()(w,I,{contentErrors:It(),patchResult:void 0})}function nr(){k()(Fr(n(Ke).selection))}function Fr(w){return be({type:qn.text},w.toJSON())}function xr(w,I,Q){return!!w&&w.length>I&&!Q}var oe=P(Lu,!0),Jt=P(void 0,!0);function rr(){if(xr(n(te),b(),n(Ae)))return[];var w=It();return Cf(w)?[yn(In(w.parseError,w.isRepairable))]:Hj(w)?w.validationErrors.map(Mt).map(yn):[]}function It(){G("validate:start"),Pn();var w=Fn(n(r).escapeValue(n(te)),x(),j(),M());return Cf(w)?(f(oe,w.isRepairable?yf:"invalid"),f(Jt,w.parseError),f(se,[])):(f(oe,Lu),f(Jt,void 0),f(se,w?.validationErrors||[])),G("validate:end"),w}var Fn=fl(iy);function Rr(){n(Jt)&&function(w){G("select parse error",w);var I=In(w,!1);ct(I.from!=null?I.from:0,I.to!=null?I.to:0),tt()}(n(Jt))}var Zn={icon:cb,text:"Show me",title:"Move to the parse error location",onClick:Rr};W(()=>p(y()),()=>{f(r,cv({escapeControlCharacters:!1,escapeUnicodeCharacters:y()}))}),W(()=>p(d()),()=>{Rt(d(),!1,!1)}),W(()=>p(u()),()=>{(function(w){if(_u(w)){var I=gn(w);!de||!I||n(Ke)&&n(Ke).selection.eq(I)||(G("applyExternalSelection",I),de.dispatch({selection:I}))}})(u())}),W(()=>p(x()),()=>{(function(w){G("updateLinter",w),de&&de.dispatch({effects:Ot.reconfigure(ut())})})(x())}),W(()=>p(g()),()=>{(function(w){de&&(G("updateIndentation",w),de.dispatch({effects:on.reconfigure(jr(w))}))})(g())}),W(()=>p(h()),()=>{(function(w){de&&(G("updateTabSize",w),de.dispatch({effects:V.reconfigure(Hs.tabSize.of(w))}))})(h())}),W(()=>p(s()),()=>{(function(w){de&&(G("updateReadOnly",w),de.dispatch({effects:[Qt.reconfigure(Hs.readOnly.of(w))]}))})(s())}),W(()=>p(a()),()=>{(function(w){de&&(G("updateAriaLabel",w),de.dispatch({effects:[O.reconfigure(Dn(w))]}))})(a())}),W(()=>(n(Be),p(y())),()=>{n(Be)!==y()&&(f(Be,y()),G("forceUpdateText",{escapeUnicodeCharacters:y()}),de&&de.dispatch({changes:{from:0,to:de.state.doc.length,insert:n(r).escapeValue(n(te))}}))}),W(()=>(n(oe),p(s()),is),()=>{f(o,n(oe)!==yf||s()?[Zn]:[{icon:is,text:"Auto repair",title:"Automatically repair JSON",onClick:Yt},Zn])}),jn();var Or={focus:tt,collapse:it,expand:ft,patch:Je,handlePatch:Ye,openTransformModal:bt,refresh:Gn,flush:Pn,validate:It};kt(!0);var Tr,Mr=n1(),hr=R(Mr),_n=w=>{var I=De(()=>(n(te),T(()=>n(te).length===0))),Q=De(()=>!n(I)),Oe=De(()=>!n(I)),Pe=De(()=>!n(I)),Te=De(()=>!n(I)),Le=De(()=>!n(I)),mt=De(()=>!n(I));(function(zt,Ze){ot(Ze,!1);var Cn=P(void 0,!0),rt=v(Ze,"readOnly",9,!1),Ft=v(Ze,"onExpandAll",9),Bn=v(Ze,"onCollapseAll",9),On=v(Ze,"onFormat",9),xn=v(Ze,"onCompact",9),Qn=v(Ze,"onSort",9),Zt=v(Ze,"onTransform",9),Fe=v(Ze,"onToggleSearch",9),an=v(Ze,"onUndo",9),pt=v(Ze,"onRedo",9),or=v(Ze,"canExpandAll",9),ar=v(Ze,"canCollapseAll",9),zr=v(Ze,"canUndo",9),_r=v(Ze,"canRedo",9),io=v(Ze,"canFormat",9),eo=v(Ze,"canCompact",9),C=v(Ze,"canSort",9),H=v(Ze,"canTransform",9),pe=v(Ze,"onRenderMenu",9),xe=P(void 0,!0),ie=P(void 0,!0),Ue={type:"button",icon:Xc,title:"Search (Ctrl+F)",className:"jse-search",onClick:Fe()},jt=P(void 0,!0);W(()=>(p(Ft()),p(or())),()=>{f(xe,{type:"button",icon:Mm,title:"Expand all",className:"jse-expand-all",onClick:Ft(),disabled:!or()})}),W(()=>(p(Bn()),p(ar())),()=>{f(ie,{type:"button",icon:zm,title:"Collapse all",className:"jse-collapse-all",onClick:Bn(),disabled:!ar()})}),W(()=>(p(rt()),n(xe),n(ie),p(On()),p(io()),p(xn()),p(eo()),p(Qn()),p(C()),p(Zt()),p(H()),p(an()),p(zr()),p(pt()),p(_r())),()=>{f(jt,rt()?[n(xe),n(ie),{type:"separator"},Ue,{type:"space"}]:[n(xe),n(ie),{type:"separator"},{type:"button",icon:np,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:On(),disabled:rt()||!io()},{type:"button",icon:Qy,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:xn(),disabled:rt()||!eo()},{type:"separator"},{type:"button",icon:wc,title:"Sort",className:"jse-sort",onClick:Qn(),disabled:rt()||!C()},{type:"button",icon:kc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:Zt(),disabled:rt()||!H()},Ue,{type:"separator"},{type:"button",icon:Qd,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:an(),disabled:!zr()},{type:"button",icon:Kd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:pt(),disabled:!_r()},{type:"space"}])}),W(()=>(p(pe()),n(jt)),()=>{f(Cn,pe()(n(jt))||n(jt))}),jn(),kt(!0),fu(zt,{get items(){return n(Cn)}}),at()})(w,{get readOnly(){return s()},onExpandAll:Kt,onCollapseAll:ke,onFormat:Ie,onCompact:re,onSort:ue,onTransform:En,onToggleSearch:tr,onUndo:Gt,onRedo:Ln,get canExpandAll(){return n(Q)},get canCollapseAll(){return n(Oe)},get canFormat(){return n(Pe)},get canCompact(){return n(Te)},get canSort(){return n(Le)},get canTransform(){return n(mt)},get canUndo(){return p(m()),T(()=>m().canUndo)},get canRedo(){return p(m()),T(()=>m().canRedo)},get onRenderMenu(){return Z()}})};ne(hr,w=>{i()&&w(_n)});var pn=D(hr,2),At=w=>{var I=Gx(),Q=D(R(I),2),Oe=R(Q),Pe=D(Q,2);je(()=>No(Oe,"width: ".concat(n(we)>0?n(me)/n(we)*100:0,"%"))),fe("click",Pe,Nt),N(w,I)};ne(pn,w=>{n(ce)&&w(At)});var Ut=D(pn,2),Mn=w=>{var I,Q=De(()=>(n(te),p(b()),n(Ae),T(()=>xr(n(te),b(),n(Ae))))),Oe=e1(),Pe=dt(Oe);Hn(Pe,Ze=>f(Ee,Ze),()=>n(Ee));var Te=D(Pe,2),Le=Ze=>{var Cn=Zx(),rt=dt(Cn),Ft=De(()=>(p(jc),p(b()),n(te),T(()=>"The JSON document is larger than ".concat(jc(b()),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(jc(n(te).length),"."))));ko(rt,{get icon(){return Bs},type:"error",get message(){return n(Ft)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:Tn},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:vr},{text:"Cancel",title:"Cancel opening this large document.",onClick:yr}],onClose:tt});var Bn=R(D(rt,2));je(On=>st(Bn,On),[()=>(p(Sa),n(te),p(Ic),T(()=>Sa(n(te)||"",Ic)))]),N(Ze,Cn)};ne(Te,Ze=>{n(Q)&&Ze(Le)});var mt=D(Te,2),zt=Ze=>{var Cn=Xx(),rt=dt(Cn),Ft=Fe=>{(function(an,pt){ot(pt,!1);var or=v(pt,"editorState",8),ar=P(),zr=P(),_r=P(),io=P(),eo=P();W(()=>p(or()),()=>{var ge;f(ar,(ge=or())===null||ge===void 0||(ge=ge.selection)===null||ge===void 0||(ge=ge.main)===null||ge===void 0?void 0:ge.head)}),W(()=>(n(ar),p(or())),()=>{var ge;f(zr,n(ar)!==void 0?(ge=or())===null||ge===void 0||(ge=ge.doc)===null||ge===void 0?void 0:ge.lineAt(n(ar)):void 0)}),W(()=>n(zr),()=>{f(_r,n(zr)!==void 0?n(zr).number:void 0)}),W(()=>(n(zr),n(ar)),()=>{f(io,n(zr)!==void 0&&n(ar)!==void 0?n(ar)-n(zr).from+1:void 0)}),W(()=>p(or()),()=>{var ge;f(eo,(ge=or())===null||ge===void 0||(ge=ge.selection)===null||ge===void 0||(ge=ge.ranges)===null||ge===void 0?void 0:ge.reduce((_e,Ge)=>_e+Ge.to-Ge.from,0))}),jn(),kt();var C=Hx(),H=R(C),pe=ge=>{var _e=rd(),Ge=R(_e);je(()=>{var yt;return st(Ge,"Line: ".concat((yt=n(_r))!==null&&yt!==void 0?yt:""))}),N(ge,_e)};ne(H,ge=>{n(_r)!==void 0&&ge(pe)});var xe=D(H,2),ie=ge=>{var _e=rd(),Ge=R(_e);je(()=>{var yt;return st(Ge,"Column: ".concat((yt=n(io))!==null&&yt!==void 0?yt:""))}),N(ge,_e)};ne(xe,ge=>{n(io)!==void 0&&ge(ie)});var Ue=D(xe,2),jt=ge=>{var _e=rd(),Ge=R(_e);je(()=>{var yt;return st(Ge,"Selection: ".concat((yt=n(eo))!==null&&yt!==void 0?yt:""," characters"))}),N(ge,_e)};ne(Ue,ge=>{n(eo)!==void 0&&n(eo)>0&&ge(jt)}),N(an,C),at()})(Fe,{get editorState(){return n(Ke)}})};ne(rt,Fe=>{l()&&Fe(Ft)});var Bn=D(rt,2),On=Fe=>{ko(Fe,{type:"error",get icon(){return Bs},get message(){return n(Jt),T(()=>n(Jt).message)},get actions(){return n(o)},onClick:Rr,onClose:tt})};ne(Bn,Fe=>{n(Jt)&&Fe(On)});var xn=D(Bn,2),Qn=Fe=>{var an=De(()=>[{icon:np,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:Ie},{icon:Zc,text:"No thanks",title:"Close this message",onClick:()=>f(Re,!1)}]);ko(Fe,{type:"success",message:"Do you want to format the JSON?",get actions(){return n(an)},onClose:tt})},Zt=Dt(()=>(n(Jt),n(Re),p(bf),n(te),T(()=>!n(Jt)&&n(Re)&&bf(n(te)))));ne(xn,Fe=>{n(Zt)&&Fe(Qn)}),zv(D(xn,2),{get validationErrors(){return n(se)},selectError:Xe}),N(Ze,Cn)};ne(mt,Ze=>{n(Q)||Ze(zt)}),je(()=>I=wt(Pe,1,"jse-contents svelte-k2b9e6",null,I,{"jse-hidden":n(Q)})),N(w,Oe)},_t=w=>{N(w,t1())};return ne(Ut,w=>{Me?w(_t,-1):w(Mn)}),Hn(Mr,w=>f(Se,w),()=>n(Se)),je(()=>Tr=wt(Mr,1,"jse-text-mode svelte-k2b9e6",null,Tr,{"no-main-menu":!i()})),N(e,Mr),gt(t,"focus",tt),gt(t,"collapse",it),gt(t,"expand",ft),gt(t,"patch",Je),gt(t,"handlePatch",Ye),gt(t,"openTransformModal",bt),gt(t,"refresh",Gn),gt(t,"flush",Pn),gt(t,"validate",It),at(Or)}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-inline-value.svelte-1jv89ui {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-1jv89ui {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-1jv89ui {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-active-outline, var(--jse-search-match-outline, 2px solid #e0be00));
}`);var o1=Y('<button type="button"> </button>');xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-5pxwfq {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-5pxwfq:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-5pxwfq:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-5pxwfq span.jse-column-sort-icon:where(.svelte-5pxwfq) {
  height: 1em;
}`);var a1=Y('<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>'),s1=Y('<button type="button"><span class="jse-column-name"> </span> <!></button>');xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode-welcome.svelte-1b9gnk8 {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-before:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 400px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-arrays-info:where(.svelte-1b9gnk8) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) {
  display: flex;
  align-items: center;
  gap: var(--jse-padding, 10px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) .jse-nested-property-count:where(.svelte-1b9gnk8) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8) {
  text-align: left;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-after:where(.svelte-1b9gnk8) {
  flex: 2;
}`);var i1=Y(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),l1=Y('<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>'),c1=Y('<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>'),u1=Y('<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>');function d1(e,t){ot(t,!0);var r=Dt(()=>t.json?function(x){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,E=[];return function q(k,A){Jr(k)&&A.length<M&&Object.keys(k).forEach(U=>{q(k[U],A.concat(U))}),Ar(k)&&E.push(A)}(x,[]),E}(t.json).slice(0,99).filter(x=>x.length>0):[]),o=Dt(()=>!dn(n(r))),s=Dt(()=>t.json===void 0&&(t.text===""||t.text===void 0)),a=Dt(()=>n(o)?"Object with nested arrays":n(s)?"An empty document":Jr(t.json)?"An object":Ar(t.json)?"An empty array":"A ".concat(iv(t.json,t.parser))),i=u1(),l=D(R(i),2),c=R(l),d=R(c),u=D(c,2),m=R(u),g=x=>{N(x,Hr(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},h=x=>{N(x,i1())},y=x=>{var M=Hr();je(()=>{var E;return st(M,"".concat((E=n(a))!==null&&E!==void 0?E:""," cannot be opened in table mode. You can open the document in tree mode instead."))}),N(x,M)};ne(m,x=>{n(o)?x(g):n(s)&&!t.readOnly?x(h,1):x(y,-1)});var b=D(u,2);lr(b,17,()=>n(r),br,(x,M)=>{var E=Dt(()=>function($){return Ve(t.json,$).length}(n(M))),q=c1(),k=R(q),A=R(k),U=R(D(A)),F=D(k,2),S=R(F),J=D(F,2),Z=$=>{var le=l1();$o("click",le,()=>t.extractPath(n(M))),N($,le)};ne(J,$=>{t.readOnly||$(Z)}),je($=>{var le;st(A,'"'.concat($??"",'" ')),st(U,"(".concat((le=n(E))!==null&&le!==void 0?le:""," ").concat(n(E)!==1?"items":"item",")")),st(S,t.readOnly?"View":"Edit")},[()=>fo(n(M))]),$o("click",F,()=>t.openJSONEditorModal(n(M))),N(x,q)});var j=D(b,2);je(()=>st(d,n(a))),$o("click",i,()=>t.onClick()),$o("click",j,()=>t.onChangeMode(Cr.tree)),N(e,i),at()}Pl(["click"]);xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-1wgrwv3 {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-1wgrwv3:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-1wgrwv3:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);var v1=Y('<button type="button"><!></button>');xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode.svelte-1p86y3c {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.no-main-menu.svelte-1p86y3c {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-search-box-container:where(.svelte-1p86y3c) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) .jse-hidden-input:where(.svelte-1p86y3c) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) {
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-start-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c),
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-search-box-background:where(.svelte-1p86y3c) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c), .jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) .jse-table-root-error:where(.svelte-1p86y3c) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer.jse-selected-value:where(.svelte-1p86y3c) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-context-menu-anchor:where(.svelte-1p86y3c) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) {
  align-items: unset;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading-space:where(.svelte-1p86y3c) {
  flex: 1;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading:where(.svelte-1p86y3c) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);var f1=Y('<div class="jse-table-root-error svelte-1p86y3c"><!></div>'),ip=Y('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),p1=Y('<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>'),h1=Y('<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>'),m1=Y('<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>'),g1=Y('<td class="jse-table-cell svelte-1p86y3c"></td>'),b1=Y('<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>'),j1=Y('<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>',1),y1=Y("<!> <!>",1),x1=Y('<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" aria-hidden="true" class="jse-hidden-input svelte-1p86y3c"/></label> <!>',1),w1=Y('<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>'),k1=Y('<div role="table"><!> <!></div> <!> <!>',1);function S1(e,t){ot(t,!1);var r=P(void 0,!0),o=P(void 0,!0),s=P(void 0,!0),a=Wr("jsoneditor:TableMode"),i=hs("absolute-popup"),l=i.openAbsolutePopup,c=i.closeAbsolutePopup,d=wm(),u=yi(),m=yi(),g=typeof window>"u";a("isSSR:",g);var h=v(t,"readOnly",9),y=v(t,"ariaLabel",9,void 0),b=v(t,"externalContent",9),j=v(t,"externalSelection",9),x=v(t,"history",9),M=v(t,"truncateTextSize",9),E=v(t,"mainMenuBar",9),q=v(t,"escapeControlCharacters",9),k=v(t,"escapeUnicodeCharacters",9),A=v(t,"flattenColumns",9),U=v(t,"parser",9),F=v(t,"parseMemoizeOne",9),S=v(t,"validator",9),J=v(t,"validationParser",9),Z=v(t,"indentation",9),$=v(t,"onChange",9),le=v(t,"onChangeMode",9),G=v(t,"onSelect",9),qe=v(t,"onUndo",9),Me=v(t,"onRedo",9),de=v(t,"onRenderValue",9),Ee=v(t,"onRenderMenu",9),Se=v(t,"onRenderContextMenu",9),Ke=v(t,"onFocus",9),Ae=v(t,"onBlur",9),Re=v(t,"onSortModal",9),se=v(t,"onTransformModal",9),ce=v(t,"onJSONEditorModal",9),me=P(void 0,!0),we=P(void 0,!0),Ce=P(void 0,!0),Ot=P(void 0,!0),Qt=P(void 0,!0);Mv({onMount:Xr,onDestroy:Do,getWindow:()=>Nl(n(we)),hasFocus:()=>Et&&document.hasFocus()||dv(n(we)),onFocus:()=>{mn=!0,Ke()&&Ke()()},onBlur:()=>{mn=!1,Ae()&&Ae()()}});var on,V=P(void 0,!0),_=P(void 0,!0),O=P(void 0,!0),K=P(void 0,!0),te=P(void 0,!0),ze=P(void 0,!0),X=P(!1,!0),B=P(!1,!0);function Be(C){f(ze,(on=C)?dm(n(V),on.items):void 0)}function Bt(C){return Ne.apply(this,arguments)}function Ne(){return(Ne=vt(function*(C){f(re,void 0),yield gn(C)})).apply(this,arguments)}function tt(){f(X,!1),f(B,!1),Mt()}var it=P(1e4,!0),ye=P([],!0),nt=P(void 0,!0),Et=!1,mn=!1,Nt=P(!1,!0),ft=P({},!0),Kt=P(600,!0),ke=P(0,!0),He=18;function Je(C){f(re,C)}function Ye(C){n(re)&&C!==void 0&&(Za(C,Us(n(re)))&&Za(C,$e(n(re)))||(a("clearing selection: path does not exist anymore",n(re)),f(re,void 0)))}var Ie=P(n(V)!==void 0?Ad({json:n(V)}):void 0,!0),re=P(wl(j())?j():void 0,!0),Yt=P(void 0,!0),ue=P(!1,!0);function bt(C){if(!h()){a("onSortByHeader",C);var H=C.sortDirection===Eo.desc?-1:1;Xe(qm(n(V),[],C.path,H),(pe,xe)=>({state:xe,sortedColumn:C}))}}Xr(()=>{n(re)&&An($e(n(re)))});var En=P(void 0,!0);function tr(C){if(C.json!==void 0||C.text!==void 0){var H=n(V)!==void 0&&C.json!==void 0;x().add({type:"tree",undo:{patch:H?[{op:"replace",path:"",value:C.json}]:void 0,json:C.json,text:C.text,documentState:C.documentState,textIsRepaired:C.textIsRepaired,selection:na(C.selection),sortedColumn:C.sortedColumn},redo:{patch:H?[{op:"replace",path:"",value:n(V)}]:void 0,json:n(V),text:n(_),documentState:n(Ie),textIsRepaired:n(ue),selection:na(n(re)),sortedColumn:n(Yt)}})}}var Gt=P([],!0),Ln=fl(km);function Tn(C,H,pe,xe){fi(()=>{var ie;try{ie=Ln(C,H,pe,xe)}catch(Ue){ie=[{path:[],message:"Failed to validate: "+Ue.message,severity:Io.warning}]}Lt(ie,n(Gt))||(a("validationErrors changed:",ie),f(Gt,ie))},ie=>a("validationErrors updated in ".concat(ie," ms")))}function vr(){return a("validate"),n(O)?{parseError:n(O),isRepairable:!1}:(Tn(n(V),S(),U(),J()),dn(n(Gt))?void 0:{validationErrors:n(Gt)})}function yr(C,H){if(a("patch",C,H),n(V)===void 0)throw new Error("Cannot apply patch: no JSON");var pe=n(V),xe={json:void 0,text:n(_),documentState:n(Ie),selection:na(n(re)),sortedColumn:n(Yt),textIsRepaired:n(ue)},ie=um(n(V),C),Ue=Xh(n(V),n(Ie),C),jt=gx(n(Yt),C,n(ye)),ge=typeof H=="function"?H(Ue.json,Ue.documentState,n(re)):void 0;return f(V,ge?.json!==void 0?ge.json:Ue.json),f(Ie,ge?.state!==void 0?ge.state:Ue.documentState),f(re,ge?.selection!==void 0?ge.selection:n(re)),f(Yt,ge?.sortedColumn!==void 0?ge.sortedColumn:jt),f(_,void 0),f(ue,!1),f(K,void 0),f(te,void 0),f(O,void 0),x().add({type:"tree",undo:be({patch:ie},xe),redo:{patch:C,json:void 0,text:void 0,documentState:n(Ie),selection:na(n(re)),sortedColumn:n(Yt),textIsRepaired:n(ue)}}),{json:n(V),previousJson:pe,undo:ie,redo:C}}function Xe(C,H){a("handlePatch",C,H);var pe={json:n(V),text:n(_)},xe=yr(C,H);return ct(pe,xe),xe}function ct(C,H){if((C.json!==void 0||C?.text!==void 0)&&$()){if(n(_)!==void 0){var pe={text:n(_),json:void 0};$()(pe,C,{contentErrors:vr(),patchResult:H})}else if(n(V)!==void 0){var xe={text:void 0,json:n(V)};$()(xe,C,{contentErrors:vr(),patchResult:H})}}}function Nn(C){a("pasted json as text",C),f(K,C)}function ut(C){a("pasted multiline text",{pastedText:C}),f(te,C)}function fn(C){var H=parseInt(C[0],10),pe=[String(H+1),...C.slice(1)];return Za(n(V),pe)?$t(pe):$t(C)}function Mt(){a("focus"),n(Ot)&&(n(Ot).focus({preventScroll:!0}),n(Ot).select())}function In(C){f(ke,C.target.scrollTop)}function yn(){n(re)||f(re,function(){if(Ar(n(V))&&!dn(n(V))&&!dn(n(ye)))return $t(["0",...n(ye)[0]])}())}function Rt(){if(n(ue)&&n(V)!==void 0){var C={json:n(V),text:n(_)},H={json:n(V),documentState:n(Ie),selection:n(re),sortedColumn:n(Yt),text:n(_),textIsRepaired:n(ue)};f(_,void 0),f(ue,!1),Ye(n(V)),tr(H),ct(C,void 0)}return{json:n(V),text:n(_)}}function gn(C){var H=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).scrollToWhenVisible,pe=H===void 0||H,xe=n(X)?sl:0,ie=op(C,n(ye),ft,He),Ue=ie-n(ke)+xe+He,jt=Un(C);if(a("scrollTo",{path:C,top:ie,scrollTop:n(ke),elem:jt}),!n(Ce))return Promise.resolve();var ge=n(Ce).getBoundingClientRect();if(jt&&!pe){var _e=jt.getBoundingClientRect();if(_e.bottom>ge.top&&_e.top<ge.bottom)return Promise.resolve()}var Ge=-Math.max(xe+2*He,ge.height/4);return new Promise(jt?yt=>{d(jt,{container:n(Ce),offset:Ge,duration:300,callback:()=>{Gn(C),yt()}})}:yt=>{d(Ue,{container:n(Ce),offset:Ge,duration:300,callback:()=>{Vn(),Gn(C),yt()}})})}function Gn(C){var H=Un(C);if(H&&n(Ce)){var pe=n(Ce).getBoundingClientRect(),xe=H.getBoundingClientRect();if(xe.right>pe.right){var ie=xe.right-pe.right;xo(Ce,n(Ce).scrollLeft+=ie)}if(xe.left<pe.left){var Ue=pe.left-xe.left;xo(Ce,n(Ce).scrollLeft-=Ue)}}}function An(C){(function(H){if(n(Ce)){var pe=zo(H,n(ye)).rowIndex,xe=op(H,n(ye),ft,He),ie=xe+(ft[pe]||He),Ue=He,jt=n(Ce).getBoundingClientRect(),ge=n(ke),_e=n(ke)+jt.height-Ue;if(ie>_e){var Ge=ie-_e;xo(Ce,n(Ce).scrollTop+=Ge)}if(xe<ge){var yt=ge-xe;xo(Ce,n(Ce).scrollTop-=yt)}}})(C),Gn(C)}function Un(C){var H,pe,xe=n(ye).find(Ue=>ua(C.slice(1),Ue)),ie=xe?C.slice(0,1).concat(xe):C;return(H=(pe=n(Ce))===null||pe===void 0?void 0:pe.querySelector('td[data-path="'.concat(gc(ie),'"]')))!==null&&H!==void 0?H:void 0}function Dn(C){var H,pe=C.anchor,xe=C.left,ie=C.top,Ue=C.width,jt=C.height,ge=C.offsetTop,_e=C.offsetLeft,Ge=C.showTip,yt=function(L){var ve=L.json,We=L.documentState,ae=L.selection,he=L.readOnly,et=L.onEditValue,ht=L.onEditRow,Tt=L.onToggleEnforceString,ln=L.onCut,Vt=L.onCopy,Jn=L.onPaste,St=L.onRemove,Xn=L.onDuplicateRow,Ct=L.onInsertBeforeRow,Kn=L.onInsertAfterRow,bn=L.onRemoveRow,lt=ve!==void 0,nn=!!ae,zn=ve!==void 0&&ae?Ve(ve,$e(ae)):void 0,ur=lt&&(Rn(ae)||Br(ae)||un(ae)),mr=!he&&lt&&ae!==void 0&&Bc(ae),Qe=mr&&!sr(zn),Pt=!he&&ur,er=ae!==void 0&&ra(ve,We,$e(ae));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>et(),icon:pi,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!mr},width:"11em",items:[{type:"button",icon:pi,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>et(),disabled:!mr},{type:"button",icon:er?vp:fp,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>Tt(),disabled:!Qe}]},{type:"dropdown-button",main:{type:"button",onClick:()=>ln(!0),icon:hi,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!Pt},width:"10em",items:[{type:"button",icon:hi,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>ln(!0),disabled:he||!ur},{type:"button",icon:hi,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>ln(!1),disabled:he||!ur}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Vt(!0),icon:Ga,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!ur},width:"12em",items:[{type:"button",icon:Ga,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>Vt(!1),disabled:!ur},{type:"button",icon:Ga,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>Vt(!1),disabled:!ur}]},{type:"button",onClick:()=>Jn(),icon:pp,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:he||!nn},{type:"button",onClick:()=>St(),icon:od,text:"Remove",title:"Remove selected contents (Delete)",disabled:he||!ur}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>ht(),icon:pi,text:"Edit row",title:"Edit the current row",disabled:he||!nn||!lt},{type:"button",onClick:()=>Xn(),icon:hp,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:he||!nn||!lt},{type:"button",onClick:()=>Ct(),icon:ii,text:"Insert before",title:"Insert a row before the current row",disabled:he||!nn||!lt},{type:"button",onClick:()=>Kn(),icon:ii,text:"Insert after",title:"Insert a row after the current row",disabled:he||!nn||!lt},{type:"button",onClick:()=>bn(),icon:od,text:"Remove row",title:"Remove current row",disabled:he||!nn||!lt}]}]}]}({json:n(V),documentState:n(Ie),selection:n(re),readOnly:h(),onEditValue:pr,onEditRow:Pn,onToggleEnforceString:Wn,onCut:Zn,onCopy:Tr,onPaste:xr,onRemove:hr,onDuplicateRow:pn,onInsertBeforeRow:At,onInsertAfterRow:Ut,onRemoveRow:Mn}),sn=(H=Se()(yt))!==null&&H!==void 0?H:yt;if(sn!==!1){var cr={left:xe,top:ie,offsetTop:ge,offsetLeft:_e,width:Ue,height:jt,anchor:pe,closeOnOuterClick:!0,onClose:()=>{Et=!1,Mt()}};Et=!0;var z=l(Bm,{tip:Ge?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:sn,onRequestClose(){c(z),Mt()}},cr)}}function fr(C){if(!Ur(n(re)))if(C&&(C.stopPropagation(),C.preventDefault()),C&&C.type==="contextmenu"&&C.target!==n(Ot))Dn({left:C.clientX,top:C.clientY,width:Oa,height:Ca,showTip:!1});else{var H,pe=(H=n(Ce))===null||H===void 0?void 0:H.querySelector(".jse-table-cell.jse-selected-value");if(pe)Dn({anchor:pe,offsetTop:2,width:Oa,height:Ca,showTip:!1});else{var xe,ie=(xe=n(Ce))===null||xe===void 0?void 0:xe.getBoundingClientRect();ie&&Dn({top:ie.top+2,left:ie.left+2,width:Oa,height:Ca,showTip:!1})}}}function jr(C){Dn({anchor:Qh(C.target,"BUTTON"),offsetTop:0,width:Oa,height:Ca,showTip:!0})}function pr(){if(!h()&&n(re)){var C=$e(n(re));sr(Ve(n(V),C))?Le(C):f(re,$t(C))}}function Pn(){!h()&&n(re)&&Le($e(n(re)).slice(0,1))}function Wn(){if(!h()&&un(n(re))){var C=n(re).path,H=qt(C),pe=Ve(n(V),C),xe=!ra(n(V),n(Ie),C),ie=xe?String(pe):_i(String(pe),U());a("handleToggleEnforceString",{enforceString:xe,value:pe,updatedValue:ie}),Xe([{op:"replace",path:H,value:ie}],(Ue,jt)=>({state:au(n(V),jt,C,{type:"value",enforceString:xe})}))}}function nr(){return Fr.apply(this,arguments)}function Fr(){return(Fr=vt(function*(){a("apply pasted json",n(K)),n(K)&&((0,n(K).onPasteAsJson)(),setTimeout(Mt))})).apply(this,arguments)}function xr(){return oe.apply(this,arguments)}function oe(){return(oe=vt(function*(){try{I(yield navigator.clipboard.readText())}catch(C){console.error(C),f(Nt,!0)}})).apply(this,arguments)}function Jt(){return rr.apply(this,arguments)}function rr(){return(rr=vt(function*(){a("apply pasted multiline text",n(te)),n(te)&&(I(JSON.stringify(n(te))),setTimeout(Mt))})).apply(this,arguments)}function It(){a("clear pasted json"),f(K,void 0),Mt()}function Fn(){a("clear pasted multiline text"),f(te,void 0),Mt()}function Rr(){le()(Cr.text)}function Zn(C){return Or.apply(this,arguments)}function Or(){return(Or=vt(function*(C){yield Rm({json:n(V),selection:n(re),indentation:C?Z():void 0,readOnly:h(),parser:U(),onPatch:Xe})})).apply(this,arguments)}function Tr(){return Mr.apply(this,arguments)}function Mr(){return Mr=vt(function*(){var C=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(V)!==void 0&&(yield Tm({json:n(V),selection:n(re),indentation:C?Z():void 0,parser:U()}))}),Mr.apply(this,arguments)}function hr(){Im({json:n(V),text:n(_),selection:n(re),keepSelection:!0,readOnly:h(),onChange:$(),onPatch:Xe})}function _n(C){h()||(a("extract",{path:C}),Xe(im(n(V),$t(C))))}function pn(){(function(C){var H=C.json,pe=C.selection,xe=C.columns,ie=C.readOnly,Ue=C.onPatch;if(!ie&&H!==void 0&&pe&&di(pe)){var jt=zo($e(pe),xe),ge=jt.rowIndex,_e=jt.columnIndex;ro("duplicate row",{rowIndex:ge});var Ge=[String(ge)];Ue(sm(H,[Ge]),(yt,sn)=>({state:sn,selection:$t(Ms({rowIndex:ge<H.length?ge+1:ge,columnIndex:_e},xe))}))}})({json:n(V),selection:n(re),columns:n(ye),readOnly:h(),onPatch:Xe})}function At(){(function(C){var H=C.json,pe=C.selection,xe=C.columns,ie=C.readOnly,Ue=C.onPatch;if(!ie&&H!==void 0&&pe&&di(pe)){var jt=zo($e(pe),xe).rowIndex;ro("insert before row",{rowIndex:jt}),Ue(vi(H,[String(jt)],[{key:"",value:Jr(H[0])?{}:""}]))}})({json:n(V),selection:n(re),columns:n(ye),readOnly:h(),onPatch:Xe})}function Ut(){(function(C){var H=C.json,pe=C.selection,xe=C.columns,ie=C.readOnly,Ue=C.onPatch;if(!ie&&H!==void 0&&pe&&di(pe)){var jt=zo($e(pe),xe),ge=jt.rowIndex,_e=jt.columnIndex;ro("insert after row",{rowIndex:ge});var Ge=ge+1,yt=[String(Ge)],sn=[{key:"",value:Jr(H[0])?{}:""}];Ue(Ge<H.length?vi(H,yt,sn):Td(H,[],sn),(cr,z)=>({state:z,selection:$t(Ms({rowIndex:Ge,columnIndex:_e},xe))}))}})({json:n(V),selection:n(re),columns:n(ye),readOnly:h(),onPatch:Xe})}function Mn(){(function(C){var H=C.json,pe=C.selection,xe=C.columns,ie=C.readOnly,Ue=C.onPatch;if(!ie&&H!==void 0&&pe&&di(pe)){var jt=zo($e(pe),xe),ge=jt.rowIndex,_e=jt.columnIndex;ro("remove row",{rowIndex:ge}),Ue(Wc([[String(ge)]]),(Ge,yt)=>{var sn=ge<Ge.length?ge:ge>0?ge-1:void 0,cr=sn!==void 0?$t(Ms({rowIndex:sn,columnIndex:_e},xe)):void 0;return ro("remove row new selection",{rowIndex:ge,newRowIndex:sn,newSelection:cr}),{state:yt,selection:cr}})}})({json:n(V),selection:n(re),columns:n(ye),readOnly:h(),onPatch:Xe})}function _t(){return(_t=vt(function*(C){yield Um({char:C,selectInside:!1,json:n(V),selection:n(re),readOnly:h(),parser:U(),onPatch:Xe,onReplaceJson:Q,onSelect:Je})})).apply(this,arguments)}function w(C){var H;C.preventDefault(),I((H=C.clipboardData)===null||H===void 0?void 0:H.getData("text/plain"))}function I(C){C!==void 0&&Nm({clipboardText:C,json:n(V),selection:n(re),readOnly:h(),parser:U(),onPatch:Xe,onChangeText:Oe,onPasteMultilineText:ut,openRepairModal:mt})}function Q(C,H){var pe={json:n(V),text:n(_)},xe={json:n(V),documentState:n(Ie),selection:n(re),sortedColumn:n(Yt),text:n(_),textIsRepaired:n(ue)},ie=yo(C,n(Ie)),Ue=typeof H=="function"?H(C,ie,n(re)):void 0;f(V,Ue?.json!==void 0?Ue.json:C),f(Ie,Ue?.state!==void 0?Ue.state:ie),f(re,Ue?.selection!==void 0?Ue.selection:n(re)),f(Yt,void 0),f(_,void 0),f(ue,!1),f(O,void 0),Ye(n(V)),tr(xe),ct(pe,void 0)}function Oe(C,H){a("handleChangeText");var pe={json:n(V),text:n(_)},xe={json:n(V),documentState:n(Ie),selection:n(re),sortedColumn:n(Yt),text:n(_),textIsRepaired:n(ue)};try{f(V,F()(C)),f(Ie,yo(n(V),n(Ie))),f(_,void 0),f(ue,!1),f(O,void 0)}catch(Ue){try{f(V,F()(aa(C))),f(Ie,yo(n(V),n(Ie))),f(_,C),f(ue,!0),f(O,void 0)}catch{f(V,void 0),f(Ie,void 0),f(_,C),f(ue,!1),f(O,n(_)!==""?Ei(n(_),Ue.message||String(Ue)):void 0)}}if(typeof H=="function"){var ie=H(n(V),n(Ie),n(re));f(V,ie?.json!==void 0?ie.json:n(V)),f(Ie,ie?.state!==void 0?ie.state:n(Ie)),f(re,ie?.selection!==void 0?ie.selection:n(re))}Ye(n(V)),tr(xe),ct(pe,void 0)}function Pe(C){a("select validation error",C),f(re,$t(C.path)),gn(C.path)}function Te(C){if(n(V)!==void 0){var H=C.id,pe=C.onTransform,xe=C.onClose,ie=C.rootPath||[];Et=!0,se()({id:H||m,json:n(V),rootPath:ie||[],onTransform:Ue=>{pe?pe({operations:Ue,json:n(V),transformedJson:sa(n(V),Ue)}):(a("onTransform",ie,Ue),Xe(Ue))},onClose:()=>{Et=!1,setTimeout(Mt),xe&&xe()}})}}function Le(C){a("openJSONEditorModal",{path:C}),Et=!0,ce()({content:{json:Ve(n(V),C)},path:C,onPatch:Xe,onClose:()=>{Et=!1,setTimeout(Mt)}})}function mt(C,H){f(Qt,{text:C,onParse:pe=>Tl(pe,xe=>Rl(xe,U())),onRepair:Jh,onApply:H,onClose:Mt})}function zt(){(function(C){h()||n(V)===void 0||(Et=!0,Re()({id:u,json:n(V),rootPath:C,onSort:H=>{var pe=H.operations,xe=H.itemPath,ie=H.direction;a("onSort",pe,C,xe,ie),Xe(pe,(Ue,jt)=>({state:jt,sortedColumn:{path:xe,sortDirection:ie===-1?Eo.desc:Eo.asc}}))},onClose:()=>{Et=!1,setTimeout(Mt)}}))})([])}function Ze(){Te({rootPath:[]})}function Cn(C){a("openFind",{findAndReplace:C}),f(X,!1),f(B,!1),Vn(),f(X,!0),f(B,C)}function rt(){if(!h()&&x().canUndo){var C=x().undo();if(Dc(C)){var H={json:n(V),text:n(_)};f(V,C.undo.patch?sa(n(V),C.undo.patch):C.undo.json),f(Ie,C.undo.documentState),f(re,C.undo.selection),f(Yt,C.undo.sortedColumn),f(_,C.undo.text),f(ue,C.undo.textIsRepaired),f(O,void 0),a("undo",{item:C,json:n(V)}),ct(H,C.undo.patch&&C.redo.patch?{json:n(V),previousJson:H.json,redo:C.undo.patch,undo:C.redo.patch}:void 0),Mt(),n(re)&&gn($e(n(re)),{scrollToWhenVisible:!1})}else qe()(C)}}function Ft(){if(!h()&&x().canRedo){var C=x().redo();if(Dc(C)){var H={json:n(V),text:n(_)};f(V,C.redo.patch?sa(n(V),C.redo.patch):C.redo.json),f(Ie,C.redo.documentState),f(re,C.redo.selection),f(Yt,C.redo.sortedColumn),f(_,C.redo.text),f(ue,C.redo.textIsRepaired),f(O,void 0),a("redo",{item:C,json:n(V)}),ct(H,C.undo.patch&&C.redo.patch?{json:n(V),previousJson:H.json,redo:C.redo.patch,undo:C.undo.patch}:void 0),Mt(),n(re)&&gn($e(n(re)),{scrollToWhenVisible:!1})}else Me()(C)}}function Bn(C){f(Kt,C.getBoundingClientRect().height)}W(()=>(p(q()),p(k())),()=>{f(me,cv({escapeControlCharacters:q(),escapeUnicodeCharacters:k()}))}),W(()=>n(X),()=>{(function(C){if(n(Ce)){var H=C?sl:-100;n(Ce).scrollTo({top:xo(Ce,n(Ce).scrollTop+=H),left:n(Ce).scrollLeft})}})(n(X))}),W(()=>p(b()),()=>{(function(C){var H={json:n(V)},pe=gl(C)?C.text!==n(_):!Lt(H.json,C.json);if(a("update external content",{isChanged:pe}),pe){var xe={json:n(V),documentState:n(Ie),selection:n(re),sortedColumn:n(Yt),text:n(_),textIsRepaired:n(ue)};if(gl(C))try{f(V,F()(C.text)),f(Ie,yo(n(V),n(Ie))),f(_,C.text),f(ue,!1),f(O,void 0)}catch(ie){try{f(V,F()(aa(C.text))),f(Ie,yo(n(V),n(Ie))),f(_,C.text),f(ue,!0),f(O,void 0)}catch{f(V,void 0),f(Ie,void 0),f(_,C.text),f(ue,!1),f(O,n(_)!==""?Ei(n(_),ie.message||String(ie)):void 0)}}else f(V,C.json),f(Ie,yo(n(V),n(Ie))),f(_,void 0),f(ue,!1),f(O,void 0);Ye(n(V)),f(Yt,void 0),tr(xe)}})(b())}),W(()=>p(j()),()=>{(function(C){Lt(n(re),C)||(a("applyExternalSelection",{selection:n(re),externalSelection:C}),wl(C)&&f(re,C))})(j())}),W(()=>(n(ye),n(V),p(A()),n(it)),()=>{f(ye,Ar(n(V))?function(C,H){var pe=new Set(H.map(qt)),xe=new Set(C.map(qt));for(var ie of pe)xe.has(ie)||pe.delete(ie);for(var Ue of xe)pe.has(Ue)||pe.add(Ue);return[...pe].map(Po)}(fx(n(V),A(),n(it)),n(ye)):[])}),W(()=>(n(V),n(ye)),()=>{f(nt,!(!n(V)||dn(n(ye))))}),W(()=>(n(V),n(it)),()=>{f(r,Array.isArray(n(V))&&n(V).length>n(it))}),W(()=>(n(ke),n(Kt),n(V),n(X),sl),()=>{f(o,px(n(ke),n(Kt),n(V),ft,He,n(X)?sl:0))}),W(()=>n(V),()=>{n(V),n(Ce)&&n(Ce).scrollTo({top:n(Ce).scrollTop,left:n(Ce).scrollLeft})}),W(()=>n(re),()=>{var C;C=n(re),Lt(C,j())||(a("onSelect",C),G()(C))}),W(()=>(p(h()),p(M()),p(U()),n(me),n(V),n(Ie),p(de())),()=>{f(En,{mode:Cr.table,readOnly:h(),truncateTextSize:M(),parser:U(),normalization:n(me),getJson:()=>n(V),getDocumentState:()=>n(Ie),findElement:Un,findNextInside:fn,focus:Mt,onPatch:(C,H)=>Xe(function(pe,xe){return pe.flatMap(ie=>{if(Gd(ie)){var Ue=Po(ie.path);if(Ue.length>0){for(var jt=[ie],ge=Xt(Ue);ge.length>0&&!Za(xe,ge);)jt.unshift({op:"add",path:qt(ge),value:{}}),ge=Xt(ge);return jt}}return ie})}(C,n(V)),H),onSelect:Je,onFind:Cn,onPasteJson:Nn,onRenderValue:de()})}),W(()=>(n(V),p(S()),p(U()),p(J())),()=>{Tn(n(V),S(),U(),J())}),W(()=>(n(Gt),n(ye)),()=>{f(s,hx(n(Gt),n(ye)))}),jn();var On={validate:vr,patch:yr,focus:Mt,acceptAutoRepair:Rt,scrollTo:gn,findElement:Un,openTransformModal:Te};kt(!0);var xn=k1();fe("mousedown",Aa,function(C){!Vi(C.target,H=>H===n(we))&&Ur(n(re))&&(a("click outside the editor, exit edit mode"),f(re,na(n(re))),mn&&n(Ot)&&(n(Ot).focus({preventScroll:!0}),n(Ot).blur()),a("blur (outside editor)"),n(Ot)&&n(Ot).blur())});var Qn,Zt=dt(xn),Fe=R(Zt),an=C=>{(function(H,pe){ot(pe,!1);var xe=v(pe,"containsValidArray",9),ie=v(pe,"readOnly",9),Ue=v(pe,"showSearch",13,!1),jt=v(pe,"history",9),ge=v(pe,"onSort",9),_e=v(pe,"onTransform",9),Ge=v(pe,"onContextMenu",9),yt=v(pe,"onUndo",9),sn=v(pe,"onRedo",9),cr=v(pe,"onRenderMenu",9);function z(){Ue(!Ue())}var L=P(void 0,!0),ve=P(void 0,!0);W(()=>(p(ie()),p(ge()),p(xe()),p(_e()),p(Ge()),p(yt()),p(jt()),p(sn())),()=>{f(L,ie()?[{type:"space"}]:[{type:"button",icon:wc,title:"Sort",className:"jse-sort",onClick:ge(),disabled:ie()||!xe()},{type:"button",icon:kc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:_e(),disabled:ie()||!xe()},{type:"button",icon:Xc,title:"Search (Ctrl+F)",className:"jse-search",onClick:z,disabled:!xe()},{type:"button",icon:mp,title:pv,className:"jse-contextmenu",onClick:Ge()},{type:"separator"},{type:"button",icon:Qd,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:yt(),disabled:!jt().canUndo},{type:"button",icon:Kd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:sn(),disabled:!jt().canRedo},{type:"space"}])}),W(()=>(p(cr()),n(L)),()=>{f(ve,cr()(n(L))||n(L))}),jn(),kt(!0),fu(H,{get items(){return n(ve)}}),at()})(C,{get containsValidArray(){return n(nt)},get readOnly(){return h()},get history(){return x()},onSort:zt,onTransform:Ze,onUndo:rt,onRedo:Ft,onContextMenu:jr,get onRenderMenu(){return Ee()},get showSearch(){return n(X)},set showSearch(H){f(X,H)},$$legacy:!0})};ne(Fe,C=>{E()&&C(an)});var pt=D(Fe,2),or=C=>{var H=x1(),pe=dt(H),xe=R(pe);xe.readOnly=!0,Hn(xe,_e=>f(Ot,_e),()=>n(Ot));var ie=D(pe,2),Ue=_e=>{var Ge=j1(),yt=dt(Ge);Em(R(yt),{get json(){return n(V)},get documentState(){return n(Ie)},get parser(){return U()},get showSearch(){return n(X)},get showReplace(){return n(B)},get readOnly(){return h()},get columns(){return n(ye)},onSearch:Be,onFocus:Bt,onPatch:Xe,onClose:tt});var sn=D(yt,2),cr=R(sn),z=R(cr),L=R(z),ve=R(L),We=R(ve),ae=Qe=>{var Pt=De(()=>(p(Zs),n(s),T(()=>{var gr;return Zs([],(gr=n(s))===null||gr===void 0?void 0:gr.root)}))),er=ir(),Vr=dt(er),to=gr=>{var Qr=f1();ji(R(Qr),{get validationError(){return n(Pt)},get onExpand(){return qo}}),N(gr,Qr)};ne(Vr,gr=>{n(Pt)&&gr(to)}),N(Qe,er)},he=Dt(()=>(p(dn),n(s),T(()=>{var Qe;return!dn((Qe=n(s))===null||Qe===void 0?void 0:Qe.root)})));ne(We,Qe=>{n(he)&&Qe(ae)});var et=D(ve);lr(et,1,()=>n(ye),br,(Qe,Pt)=>{var er=ip();(function(Vr,to){ot(to,!1);var gr=P(void 0,!0),Qr=P(void 0,!0),pa=P(void 0,!0),mo=v(to,"path",9),Bo=v(to,"sortedColumn",9),Yo=v(to,"readOnly",9),Jo=v(to,"onSort",9);W(()=>(p(mo()),fo),()=>{f(gr,dn(mo())?"values":fo(mo()))}),W(()=>(p(Bo()),p(mo())),()=>{var wr;f(Qr,Bo()&&Lt(mo(),(wr=Bo())===null||wr===void 0?void 0:wr.path)?Bo().sortDirection:void 0)}),W(()=>(n(Qr),xf),()=>{f(pa,n(Qr)?xf[n(Qr)]:void 0)}),jn(),kt(!0);var Nr,qr=s1(),lo=R(qr),Co=R(lo),ha=D(lo,2),hn=wr=>{var go=a1(),Fa=R(go),$s=De(()=>(n(Qr),p(Eo),p(Na),p(Bv),T(()=>n(Qr)===Eo.asc?Na:Bv)));tn(Fa,{get data(){return n($s)}}),je(()=>vn(go,"title","Currently sorted in ".concat(n(pa)," order"))),N(wr,go)};ne(ha,wr=>{n(Qr)!==void 0&&wr(hn)}),je(wr=>{Nr=wt(qr,1,"jse-column-header svelte-5pxwfq",null,Nr,{"jse-readonly":Yo()}),vn(qr,"title",Yo()?n(gr):n(gr)+" (Click to sort the data by this column)"),st(Co,wr)},[()=>(p(Sa),n(gr),p(50),T(()=>Sa(n(gr),50)))]),fe("click",qr,function(){Yo()||Jo()({path:mo(),sortDirection:n(Qr)===Eo.asc?Eo.desc:Eo.asc})}),N(Vr,qr),at()})(R(er),{get path(){return n(Pt)},get sortedColumn(){return n(Yt)},get readOnly(){return h()},onSort:bt}),N(Qe,er)});var ht=D(et),Tt=Qe=>{var Pt=ip(),er=R(Pt),Vr=De(()=>(n(V),T(()=>Array.isArray(n(V))?n(V).length:0)));(function(to,gr){ot(gr,!1);var Qr=v(gr,"count",9),pa=v(gr,"maxSampleCount",9),mo=v(gr,"readOnly",9),Bo=v(gr,"onRefresh",9);kt(!0);var Yo,Jo=v1();tn(R(Jo),{get data(){return yb}}),je(()=>{Yo=wt(Jo,1,"jse-column-header svelte-1wgrwv3",null,Yo,{"jse-readonly":mo()}),vn(Jo,"title","The Columns are created by sampling ".concat(pa()," items out of ").concat(Qr(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")}),fe("click",Jo,()=>Bo()()),N(to,Jo),at()})(er,{get count(){return n(Vr)},get maxSampleCount(){return n(it)},get readOnly(){return h()},onRefresh:()=>f(it,1/0)}),N(Qe,Pt)};ne(ht,Qe=>{n(r)&&Qe(Tt)});var ln,Vt,Jn=D(L),St=R(Jn),Xn=D(Jn);lr(Xn,1,()=>(n(o),T(()=>n(o).visibleItems)),br,(Qe,Pt,er)=>{var Vr=De(()=>(n(o),T(()=>n(o).startIndex+er))),to=De(()=>(n(s),p(n(Vr)),T(()=>n(s).rows[n(Vr)]))),gr=De(()=>(p(Zs),p(n(Vr)),p(n(to)),T(()=>{var Nr;return Zs([String(n(Vr))],(Nr=n(to))===null||Nr===void 0?void 0:Nr.row)}))),Qr=De(()=>(p(ta),n(V),n(ze),p(n(Vr)),T(()=>ta(n(V),n(ze),[String(n(Vr))])))),pa=b1(),mo=R(pa);zh(mo,()=>n(Vr),Nr=>{var qr=p1(),lo=R(qr),Co=D(lo),ha=hn=>{ji(hn,{get validationError(){return n(gr)},get onExpand(){return qo}})};ne(Co,hn=>{n(gr)&&hn(ha)}),oo(qr,(hn,wr)=>uc?.(hn,wr),()=>hn=>function(wr,go){ft[go]=wr.getBoundingClientRect().height}(hn,n(Vr))),je(()=>{var hn;return st(lo,"".concat((hn=n(Vr))!==null&&hn!==void 0?hn:""," "))}),N(Nr,qr)});var Bo=D(mo);lr(Bo,1,()=>n(ye),br,(Nr,qr,lo,Co)=>{var ha,hn=De(()=>(p(n(Vr)),n(qr),T(()=>[String(n(Vr))].concat(n(qr))))),wr=De(()=>(p(Ve),n(Pt),n(qr),T(()=>Ve(n(Pt),n(qr))))),go=De(()=>(p(un),n(re),p(ua),p(n(hn)),T(()=>un(n(re))&&ua(n(re).path,n(hn))))),Fa=De(()=>(p(n(to)),T(()=>{var kr;return(kr=n(to))===null||kr===void 0?void 0:kr.columns[lo]}))),$s=De(()=>(p(Zs),p(n(hn)),p(n(Fa)),T(()=>Zs(n(hn),n(Fa))))),bs=m1(),js=R(bs),Jl=R(js),pu=kr=>{var ao=De(()=>(p(Fc),p(ta),n(Pt),p(n(Qr)),n(qr),T(()=>Fc(ta(n(Pt),n(Qr),n(qr)))))),xs=De(()=>(p(n(ao)),T(()=>!!n(ao)&&n(ao).some($i=>$i.active)))),yu=De(()=>(p(dn),p(n(ao)),T(()=>!dn(n(ao)))));(function($i,Oo){ot(Oo,!1);var $m=v(Oo,"path",9),Av=v(Oo,"value",9),Pv=v(Oo,"parser",9),Hm=v(Oo,"isSelected",9),Qm=v(Oo,"containsSearchResult",9),Km=v(Oo,"containsActiveSearchResult",9),Ym=v(Oo,"onEdit",9);kt(!0);var Rv,Ll=o1(),Gm=R(Ll);je(Hi=>{Rv=wt(Ll,1,"jse-inline-value svelte-1jv89ui",null,Rv,{"jse-selected":Hm(),"jse-highlight":Qm(),"jse-active":Km()}),st(Gm,Hi)},[()=>(p(Sa),p(Pv()),p(Av()),p(50),T(()=>{var Hi;return Sa((Hi=Pv().stringify(Av()))!==null&&Hi!==void 0?Hi:"",50)}))]),fe("dblclick",Ll,()=>Ym()($m())),N($i,Ll),at()})(kr,{get path(){return n(hn)},get value(){return n(wr)},get parser(){return U()},get isSelected(){return n(go)},get containsSearchResult(){return n(yu)},get containsActiveSearchResult(){return n(xs)},onEdit:Le})},hu=Dt(()=>(p(sr),p(n(wr)),T(()=>sr(n(wr))))),Go=kr=>{var ao=De(()=>(p(ta),n(V),n(ze),p(n(hn)),T(()=>{var Oo;return(Oo=ta(n(V),n(ze),n(hn)))===null||Oo===void 0?void 0:Oo.searchResults}))),xs=De(()=>n(wr)!==void 0?n(wr):""),yu=De(()=>(p(ra),n(V),n(Ie),p(n(hn)),T(()=>ra(n(V),n(Ie),n(hn))))),$i=De(()=>n(go)?n(re):void 0);Om(kr,{get path(){return n(hn)},get value(){return n(xs)},get enforceString(){return n(yu)},get selection(){return n($i)},get searchResultItems(){return n(ao)},get context(){return n(En)}})};ne(Jl,kr=>{n(hu)?kr(pu):kr(Go,-1)});var ys=D(Jl),mu=kr=>{var ao=h1();$a(R(ao),{selected:!0,onContextMenu:Dn}),N(kr,ao)},gu=Dt(()=>(p(h()),p(n(go)),p(Ur),n(re),T(()=>!h()&&n(go)&&!Ur(n(re)))));ne(ys,kr=>{n(gu)&&kr(mu)});var bu=D(js,2),ju=kr=>{ji(kr,{get validationError(){return n($s)},get onExpand(){return qo}})};ne(bu,kr=>{n($s)&&kr(ju)}),je(kr=>{vn(bs,"data-path",kr),ha=wt(js,1,"jse-value-outer svelte-1p86y3c",null,ha,{"jse-selected-value":n(go)})},[()=>(p(gc),p(n(hn)),T(()=>gc(n(hn))))]),N(Nr,bs)});var Yo=D(Bo),Jo=Nr=>{N(Nr,g1())};ne(Yo,Nr=>{n(r)&&Nr(Jo)}),N(Qe,pa)});var Ct,Kn=R(D(Xn));Hn(sn,Qe=>f(Ce,Qe),()=>n(Ce)),oo(sn,(Qe,Pt)=>uc?.(Qe,Pt),()=>Bn),$r(()=>fe("scroll",sn,In));var bn=D(sn,2),lt=Qe=>{var Pt=De(()=>(n(K),T(()=>"You pasted a JSON ".concat(Array.isArray(n(K).contents)?"array":"object"," as text")))),er=De(()=>[{icon:is,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:nr},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:It}]);ko(Qe,{type:"info",get message(){return n(Pt)},get actions(){return n(er)}})};ne(bn,Qe=>{n(K)&&Qe(lt)});var nn=D(bn,2),zn=Qe=>{var Pt=De(()=>[{icon:is,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:Jt},{text:"Leave as is",title:"Keep the pasted array",onClick:Fn}]);ko(Qe,{type:"info",message:"Multiline text was pasted as array",get actions(){return n(Pt)}})};ne(nn,Qe=>{n(te)&&Qe(zn)});var ur=D(nn,2),mr=Qe=>{var Pt=De(()=>h()?[]:[{icon:Yd,text:"Ok",title:"Accept the repaired document",onClick:Rt},{icon:Sc,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:Rr}]);ko(Qe,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(Pt)},onClose:Mt})};ne(ur,Qe=>{n(ue)&&Qe(mr)}),zv(D(ur,2),{get validationErrors(){return n(Gt)},selectError:Pe}),je(()=>{ln=wt(Jn,1,"jse-table-invisible-start-section svelte-1p86y3c",null,ln,{"jse-search-box-background":n(X)}),vn(St,"colspan",(n(ye),T(()=>n(ye).length))),Vt=No(St,"",Vt,{height:(n(o),T(()=>n(o).startHeight+"px"))}),vn(Kn,"colspan",(n(ye),T(()=>n(ye).length))),Ct=No(Kn,"",Ct,{height:(n(o),T(()=>n(o).endHeight+"px"))})}),N(_e,Ge)},jt=_e=>{var Ge=y1(),yt=dt(Ge),sn=De(()=>h()?[]:[{icon:Sc,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:Rr}]);ko(yt,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(sn)}}),Dm(D(yt,2),{get text(){return n(_)},get json(){return n(V)},get indentation(){return Z()},get parser(){return U()}}),N(_e,Ge)},ge=_e=>{d1(_e,{get text(){return n(_)},get json(){return n(V)},get readOnly(){return h()},get parser(){return U()},openJSONEditorModal:Le,extractPath:_n,get onChangeMode(){return le()},onClick:()=>{Mt()}})};ne(ie,_e=>{n(nt)?_e(Ue):n(O)&&n(_)!==void 0&&n(_)!==""?_e(jt,1):_e(ge,-1)}),fe("paste",xe,w),N(C,H)},ar=C=>{N(C,w1())};ne(pt,C=>{g?C(ar,-1):C(or)}),Hn(Zt,C=>f(we,C),()=>n(we));var zr=D(Zt,2),_r=C=>{Sm(C,{onClose:()=>f(Nt,!1)})};ne(zr,C=>{n(Nt)&&C(_r)});var io=D(zr,2),eo=C=>{Cm(C,os(()=>n(Qt),{onClose:()=>{var H;(H=n(Qt))===null||H===void 0||H.onClose(),f(Qt,void 0)}}))};return ne(io,C=>{n(Qt)&&C(eo)}),je(()=>{vn(Zt,"aria-label",y()),Qn=wt(Zt,1,"jse-table-mode svelte-1p86y3c",null,Qn,{"no-main-menu":!E()})}),fe("mousedown",Zt,function(C){if(C.buttons===1||C.buttons===2){var H=C.target;H.isContentEditable||Mt();var pe=Kh(H);if(pe){if(Ur(n(re))&&kl(n(V),n(re),pe))return;f(re,$t(pe)),C.preventDefault()}}}),fe("keydown",Zt,function(C){var H=Ba(C);if(a("keydown",{combo:H,key:C.key}),H==="Ctrl+X"&&(C.preventDefault(),Zn(!0)),H==="Ctrl+Shift+X"&&(C.preventDefault(),Zn(!1)),H==="Ctrl+C"&&(C.preventDefault(),Tr(!0)),H==="Ctrl+Shift+C"&&(C.preventDefault(),Tr(!1)),H==="Ctrl+D"&&(C.preventDefault(),pn()),H!=="Delete"&&H!=="Backspace"||(C.preventDefault(),hr()),H==="Insert"&&C.preventDefault(),H==="Ctrl+A"&&C.preventDefault(),H==="Ctrl+Q"&&fr(C),H==="ArrowLeft"&&(C.preventDefault(),yn(),n(re))){var pe=function(_e,Ge){var yt=zo($e(Ge),_e),sn=yt.rowIndex,cr=yt.columnIndex;return cr>0?$t(Ms({rowIndex:sn,columnIndex:cr-1},_e)):Ge}(n(ye),n(re));f(re,pe),An($e(pe))}if(H==="ArrowRight"&&(C.preventDefault(),yn(),n(re))){var xe=function(_e,Ge){var yt=zo($e(Ge),_e),sn=yt.rowIndex,cr=yt.columnIndex;return cr<_e.length-1?$t(Ms({rowIndex:sn,columnIndex:cr+1},_e)):Ge}(n(ye),n(re));f(re,xe),An($e(xe))}if(H==="ArrowUp"&&(C.preventDefault(),yn(),n(re))){var ie=function(_e,Ge){var yt=zo($e(Ge),_e),sn=yt.rowIndex,cr=yt.columnIndex;return sn>0?$t(Ms({rowIndex:sn-1,columnIndex:cr},_e)):Ge}(n(ye),n(re));f(re,ie),An($e(ie))}if(H==="ArrowDown"&&(C.preventDefault(),yn(),n(re))){var Ue=function(_e,Ge,yt){var sn=zo($e(yt),Ge),cr=sn.rowIndex,z=sn.columnIndex;return cr<_e.length-1?$t(Ms({rowIndex:cr+1,columnIndex:z},Ge)):yt}(n(V),n(ye),n(re));f(re,Ue),An($e(Ue))}if(H==="Enter"&&n(re)&&un(n(re))){C.preventDefault();var jt=n(re).path;sr(Ve(n(V),jt))?Le(jt):h()||f(re,be(be({},n(re)),{},{edit:!0}))}if(H.replace(/^Shift\+/,"").length===1&&n(re))return C.preventDefault(),void function(_e){_t.apply(this,arguments)}(C.key);if(H==="Ctrl+Enter"&&un(n(re))){C.preventDefault();var ge=Ve(n(V),n(re).path);ou(ge)&&window.open(String(ge),"_blank")}H==="Escape"&&n(re)&&(C.preventDefault(),f(re,void 0)),H==="Ctrl+F"&&(C.preventDefault(),Cn(!1)),H==="Ctrl+H"&&(C.preventDefault(),Cn(!0)),H==="Ctrl+Z"&&(C.preventDefault(),rt()),H==="Ctrl+Shift+Z"&&(C.preventDefault(),Ft())}),fe("contextmenu",Zt,fr),N(e,xn),gt(t,"validate",vr),gt(t,"patch",yr),gt(t,"focus",Mt),gt(t,"acceptAutoRepair",Rt),gt(t,"scrollTo",gn),gt(t,"findElement",Un),gt(t,"openTransformModal",Te),at(On)}function lp(e,t){ot(t,!1);var r=v(t,"content",8),o=v(t,"selection",12),s=v(t,"readOnly",8),a=v(t,"indentation",8),i=v(t,"tabSize",8),l=v(t,"truncateTextSize",8),c=v(t,"externalMode",8),d=v(t,"ariaLabel",8,void 0),u=v(t,"mainMenuBar",8),m=v(t,"navigationBar",8),g=v(t,"statusBar",8),h=v(t,"askToFormat",8),y=v(t,"escapeControlCharacters",8),b=v(t,"escapeUnicodeCharacters",8),j=v(t,"maxDocumentSizeTextMode",8),x=v(t,"flattenColumns",8),M=v(t,"parser",8),E=v(t,"parseMemoizeOne",8),q=v(t,"validator",8),k=v(t,"validationParser",8),A=v(t,"pathParser",8),U=v(t,"insideModal",8),F=v(t,"onChange",8),S=v(t,"onChangeMode",8),J=v(t,"onSelect",8),Z=v(t,"onRenderValue",8),$=v(t,"onClassName",8),le=v(t,"onRenderMenu",8),G=v(t,"onRenderContextMenu",8),qe=v(t,"onError",8),Me=v(t,"onFocus",8),de=v(t,"onBlur",8),Ee=v(t,"onSortModal",8),Se=v(t,"onTransformModal",8),Ke=v(t,"onJSONEditorModal",8),Ae=P(),Re=P(),se=P(),ce=Wr("jsoneditor:JSONEditorRoot"),me=P(Vm({onChange:ke=>f(me,ke)}).get()),we=P(c());function Ce(ke){if(Mf(ke)){f(we,ke.undo.mode);var He=n(me).items(),Je=He.findIndex(Ie=>Ie===ke),Ye=Je!==-1?He[Je-1]:void 0;ce("handleUndo",{index:Je,item:ke,items:He,prevItem:Ye}),Ye&&o(Ye.redo.selection),S()(n(we))}}function Ot(ke){if(Mf(ke)){f(we,ke.redo.mode);var He=n(me).items(),Je=He.findIndex(Ie=>Ie===ke),Ye=Je!==-1?He[Je+1]:void 0;ce("handleRedo",{index:Je,item:ke,items:He,nextItem:Ye}),Ye&&o(Ye.undo.selection),S()(n(we))}}var Qt=P(),on={type:"separator"},V=P(),_=P();function O(ke){if(n(Ae))return n(Ae).patch(ke);if(n(Re))return n(Re).patch(ke);if(n(se))return n(se).patch(ke);throw new Error('Method patch is not available in mode "'.concat(n(we),'"'))}function K(ke,He){if(n(Ae))return n(Ae).expand(ke,He);if(n(se))return n(se).expand(ke,He);throw new Error('Method expand is not available in mode "'.concat(n(we),'"'))}function te(ke,He){if(n(Ae))return n(Ae).collapse(ke,He);if(n(se))return n(se).collapse(ke,He);throw new Error('Method collapse is not available in mode "'.concat(n(we),'"'))}function ze(ke){if(n(se))n(se).openTransformModal(ke);else if(n(Ae))n(Ae).openTransformModal(ke);else{if(!n(Re))throw new Error('Method transform is not available in mode "'.concat(n(we),'"'));n(Re).openTransformModal(ke)}}function X(){if(n(se))return n(se).validate();if(n(Ae))return n(Ae).validate();if(n(Re))return n(Re).validate();throw new Error('Method validate is not available in mode "'.concat(n(we),'"'))}function B(){return n(Ae)?n(Ae).acceptAutoRepair():r()}function Be(ke){if(n(Ae))return n(Ae).scrollTo(ke);if(n(Re))return n(Re).scrollTo(ke);throw new Error('Method scrollTo is not available in mode "'.concat(n(we),'"'))}function Bt(ke){if(n(Ae))return n(Ae).findElement(ke);if(n(Re))return n(Re).findElement(ke);throw new Error('Method findElement is not available in mode "'.concat(n(we),'"'))}function Ne(){n(se)?n(se).focus():n(Ae)?n(Ae).focus():n(Re)&&n(Re).focus()}function tt(){return it.apply(this,arguments)}function it(){return(it=vt(function*(){n(se)&&(yield n(se).refresh())})).apply(this,arguments)}W(()=>p(c()),()=>{(function(ke){if(ke!==n(we)){var He={type:"mode",undo:{mode:n(we),selection:void 0},redo:{mode:ke,selection:void 0}};n(we)==="text"&&n(se)&&n(se).flush(),ce("add history item",He),n(me).add(He),f(we,ke)}})(c())}),W(()=>(n(we),p(S())),()=>{f(Qt,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(n(we),")"),className:"jse-group-button jse-first"+(n(we)===Cr.text?" jse-selected":""),onClick:()=>S()(Cr.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(n(we),")"),className:"jse-group-button "+(n(we)===Cr.tree?" jse-selected":""),onClick:()=>S()(Cr.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(n(we),")"),className:"jse-group-button jse-last"+(n(we)===Cr.table?" jse-selected":""),onClick:()=>S()(Cr.table)}])}),W(()=>(n(Qt),p(le()),n(we),p(U()),p(s())),()=>{f(V,ke=>{var He=Ed(ke[0])?n(Qt).concat(ke):n(Qt).concat(on,ke),Je=sd(He);return le()(He,{mode:n(we),modal:U(),readOnly:s()})||Je})}),W(()=>(p(G()),n(we),p(U()),p(s()),p(o())),()=>{f(_,ke=>{var He,Je=sd(ke);return(He=G()(ke,{mode:n(we),modal:U(),readOnly:s(),selection:o()}))!==null&&He!==void 0?He:!s()&&Je})}),jn();var ye={patch:O,expand:K,collapse:te,transform:ze,validate:X,acceptAutoRepair:B,scrollTo:Be,findElement:Bt,focus:Ne,refresh:tt};kt();var nt=ir(),Et=dt(nt),mn=ke=>{Hn(r1(ke,{get externalContent(){return r()},get externalSelection(){return o()},get ariaLabel(){return d()},get history(){return n(me)},get readOnly(){return s()},get indentation(){return a()},get tabSize(){return i()},get mainMenuBar(){return u()},get statusBar(){return g()},get askToFormat(){return h()},get escapeUnicodeCharacters(){return b()},get maxDocumentSize(){return j()},get parser(){return M()},get validator(){return q()},get validationParser(){return k()},get onChange(){return F()},get onChangeMode(){return S()},get onSelect(){return J()},onUndo:Ce,onRedo:Ot,get onError(){return qe()},get onFocus(){return Me()},get onBlur(){return de()},get onRenderMenu(){return n(V)},get onSortModal(){return Ee()},get onTransformModal(){return Se()},$$legacy:!0}),He=>f(se,He),()=>n(se))},Nt=Dt(()=>(n(we),p(Cr),T(()=>n(we)===Cr.text||String(n(we))==="code"))),ft=ke=>{Hn(S1(ke,{get externalContent(){return r()},get externalSelection(){return o()},get ariaLabel(){return d()},get history(){return n(me)},get readOnly(){return s()},get truncateTextSize(){return l()},get mainMenuBar(){return u()},get escapeControlCharacters(){return y()},get escapeUnicodeCharacters(){return b()},get flattenColumns(){return x()},get parser(){return M()},get parseMemoizeOne(){return E()},get validator(){return q()},get validationParser(){return k()},get indentation(){return a()},get onChange(){return F()},get onChangeMode(){return S()},get onSelect(){return J()},onUndo:Ce,onRedo:Ot,get onRenderValue(){return Z()},get onFocus(){return Me()},get onBlur(){return de()},get onRenderMenu(){return n(V)},get onRenderContextMenu(){return n(_)},get onSortModal(){return Ee()},get onTransformModal(){return Se()},get onJSONEditorModal(){return Ke()},$$legacy:!0}),He=>f(Re,He),()=>n(Re))},Kt=ke=>{Hn(Hd(ke,{get externalContent(){return r()},get externalSelection(){return o()},get ariaLabel(){return d()},get history(){return n(me)},get readOnly(){return s()},get indentation(){return a()},get truncateTextSize(){return l()},get mainMenuBar(){return u()},get navigationBar(){return m()},get escapeControlCharacters(){return y()},get escapeUnicodeCharacters(){return b()},get parser(){return M()},get parseMemoizeOne(){return E()},get validator(){return q()},get validationParser(){return k()},get pathParser(){return A()},get onError(){return qe()},get onChange(){return F()},get onChangeMode(){return S()},get onSelect(){return J()},onUndo:Ce,onRedo:Ot,get onRenderValue(){return Z()},get onClassName(){return $()},get onFocus(){return Me()},get onBlur(){return de()},get onRenderMenu(){return n(V)},get onRenderContextMenu(){return n(_)},get onSortModal(){return Ee()},get onTransformModal(){return Se()},get onJSONEditorModal(){return Ke()},$$legacy:!0}),He=>f(Ae,He),()=>n(Ae))};return ne(Et,ke=>{n(Nt)?ke(mn):(n(we),p(Cr),T(()=>n(we)===Cr.table)?ke(ft,1):ke(Kt,-1))}),N(e,nt),gt(t,"patch",O),gt(t,"expand",K),gt(t,"collapse",te),gt(t,"transform",ze),gt(t,"validate",X),gt(t,"acceptAutoRepair",B),gt(t,"scrollTo",Be),gt(t,"findElement",Bt),gt(t,"focus",Ne),gt(t,"refresh",tt),at(ye)}xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-wrapper.svelte-t4zsk3 {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) .jse-label-inner:where(.svelte-t4zsk3) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-modal-inline-editor:where(.svelte-t4zsk3) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) .jse-error:where(.svelte-t4zsk3) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-secondary-background, #d3d3d3);
  color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);var C1=Y('<div class="jse-error svelte-t4zsk3"> </div>'),O1=Y('<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>'),M1=Y('<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>'),z1=Y('<button type="button" class="jse-primary svelte-t4zsk3">Close</button>'),q1=Y('<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>',1),E1=Y('<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>'),A1={};xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-lwzlls {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) th:where(.svelte-lwzlls),
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) td:where(.svelte-lwzlls) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls input.jse-path:where(.svelte-lwzlls) {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  font-family: inherit;
  font-size: inherit;
  background: inherit;
  background: var(--jse-input-background-readonly, transparent);
  color: inherit;
  outline: none;
}
.jse-modal-contents.svelte-lwzlls .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) {
  height: 200px;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) .jse-error:where(.svelte-lwzlls) {
  color: var(--jse-error-color, #ee5341);
}`);var ei=ru(()=>A1),P1=Y('<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>'),R1=Y('<div class="jse-error svelte-lwzlls"> </div>'),T1=Y('<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>',1);xt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-main.svelte-1l55585 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 150px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  position: relative;
  display: flex;
  flex-direction: row;
}
.jse-main.svelte-1l55585:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var N1=Y('<div role="none"><!></div> <!> <!> <!>',1);function I1(e,t){ot(t,!1);var r=P(void 0,!0),o=Wr("jsoneditor:JSONEditor"),s={text:""},a=void 0,i=!1,l=Cr.tree,c="JSON editor",d=!0,u=!0,m=!0,g=!0,h=!1,y=!1,b=10485760,j=!0,x=JSON,M=void 0,E=JSON,q={parse:d0,stringify:fo},k=[Pj],A=k[0].id,U=qo,F=void 0,S=void 0,J=u0,Z=qo,$=qo,le=qo,G=qo,qe=oe=>{console.error(oe),alert(oe.toString())},Me=qo,de=qo,Ee=v(t,"content",13,s),Se=v(t,"selection",13,a),Ke=v(t,"readOnly",13,i),Ae=v(t,"indentation",13,2),Re=v(t,"tabSize",13,4),se=v(t,"truncateTextSize",13,1e3),ce=v(t,"mode",13,l),me=v(t,"ariaLabel",13,c),we=v(t,"mainMenuBar",13,d),Ce=v(t,"navigationBar",13,u),Ot=v(t,"statusBar",13,m),Qt=v(t,"askToFormat",13,g),on=v(t,"escapeControlCharacters",13,h),V=v(t,"escapeUnicodeCharacters",13,y),_=v(t,"maxDocumentSizeTextMode",13,b),O=v(t,"flattenColumns",13,j),K=v(t,"parser",13,x),te=v(t,"validator",13,M),ze=v(t,"validationParser",13,E),X=v(t,"pathParser",13,q),B=v(t,"queryLanguages",13,k),Be=v(t,"queryLanguageId",13,A),Bt=v(t,"onChangeQueryLanguage",13,U),Ne=v(t,"onChange",13,F),tt=v(t,"onSelect",13,S),it=v(t,"onRenderValue",13,J),ye=v(t,"onClassName",13,Z),nt=v(t,"onRenderMenu",13,$),Et=v(t,"onRenderContextMenu",13,le),mn=v(t,"onChangeMode",13,G),Nt=v(t,"onError",13,qe),ft=v(t,"onFocus",13,Me),Kt=v(t,"onBlur",13,de),ke=P(ui(),!0),He=P(!1,!0),Je=P(void 0,!0),Ye=P(void 0,!0),Ie=P(void 0,!0),re=P(void 0,!0),Yt=P(K(),!0);function ue(){return Ee()}function bt(oe){o("set");var Jt=Uu(oe);if(Jt)throw new Error(Jt);f(ke,ui()),Ee(oe),Vn()}function En(oe){o("update");var Jt=Uu(oe);if(Jt)throw new Error(Jt);Ee(oe),Vn()}function tr(oe){var Jt=n(Je).patch(oe);return Vn(),Jt}function Gt(oe){Se(oe),Vn()}function Ln(oe,Jt){n(Je).expand(oe,Jt),Vn()}function Tn(oe){var Jt=arguments.length>1&&arguments[1]!==void 0&&arguments[1];n(Je).collapse(oe,Jt),Vn()}function vr(){var oe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n(Je).transform(oe),Vn()}function yr(){return n(Je).validate()}function Xe(){var oe=n(Je).acceptAutoRepair();return Vn(),oe}function ct(oe){return Nn.apply(this,arguments)}function Nn(){return(Nn=vt(function*(oe){yield n(Je).scrollTo(oe)})).apply(this,arguments)}function ut(oe){return n(Je).findElement(oe)}function fn(){n(Je).focus(),Vn()}function Mt(){return In.apply(this,arguments)}function In(){return(In=vt(function*(){yield n(Je).refresh()})).apply(this,arguments)}function yn(oe){var Jt,rr,It,Fn,Rr,Zn,Or,Tr,Mr,hr,_n,pn,At,Ut,Mn,_t,w,I,Q,Oe,Pe,Te,Le,mt,zt,Ze,Cn,rt,Ft,Bn,On,xn,Qn,Zt=Object.keys(oe);for(var Fe of Zt)switch(Fe){case"content":Ee((Jt=oe[Fe])!==null&&Jt!==void 0?Jt:s);break;case"selection":Se((rr=oe[Fe])!==null&&rr!==void 0?rr:a);break;case"readOnly":Ke((It=oe[Fe])!==null&&It!==void 0?It:i);break;case"indentation":Ae((Fn=oe[Fe])!==null&&Fn!==void 0?Fn:2);break;case"tabSize":Re((Rr=oe[Fe])!==null&&Rr!==void 0?Rr:4);break;case"truncateTextSize":se((Zn=oe[Fe])!==null&&Zn!==void 0?Zn:1e3);break;case"mode":ce((Or=oe[Fe])!==null&&Or!==void 0?Or:l);break;case"ariaLabel":me((Tr=oe[Fe])!==null&&Tr!==void 0?Tr:c);break;case"mainMenuBar":we((Mr=oe[Fe])!==null&&Mr!==void 0?Mr:d);break;case"navigationBar":Ce((hr=oe[Fe])!==null&&hr!==void 0?hr:u);break;case"statusBar":Ot((_n=oe[Fe])!==null&&_n!==void 0?_n:m);break;case"askToFormat":Qt((pn=oe[Fe])!==null&&pn!==void 0?pn:g);break;case"escapeControlCharacters":on((At=oe[Fe])!==null&&At!==void 0?At:h);break;case"escapeUnicodeCharacters":V((Ut=oe[Fe])!==null&&Ut!==void 0?Ut:y);break;case"maxDocumentSizeTextMode":_((Mn=oe[Fe])!==null&&Mn!==void 0?Mn:b);break;case"flattenColumns":O((_t=oe[Fe])!==null&&_t!==void 0?_t:j);break;case"parser":K((w=oe[Fe])!==null&&w!==void 0?w:x);break;case"validator":te((I=oe[Fe])!==null&&I!==void 0?I:M);break;case"validationParser":ze((Q=oe[Fe])!==null&&Q!==void 0?Q:E);break;case"pathParser":X((Oe=oe[Fe])!==null&&Oe!==void 0?Oe:q);break;case"queryLanguages":B((Pe=oe[Fe])!==null&&Pe!==void 0?Pe:k);break;case"queryLanguageId":Be((Te=oe[Fe])!==null&&Te!==void 0?Te:A);break;case"onChangeQueryLanguage":Bt((Le=oe[Fe])!==null&&Le!==void 0?Le:U);break;case"onChange":Ne((mt=oe[Fe])!==null&&mt!==void 0?mt:F);break;case"onRenderValue":it((zt=oe[Fe])!==null&&zt!==void 0?zt:J);break;case"onClassName":ye((Ze=oe[Fe])!==null&&Ze!==void 0?Ze:Z);break;case"onRenderMenu":nt((Cn=oe[Fe])!==null&&Cn!==void 0?Cn:$);break;case"onRenderContextMenu":Et((rt=oe[Fe])!==null&&rt!==void 0?rt:le);break;case"onChangeMode":mn((Ft=oe[Fe])!==null&&Ft!==void 0?Ft:G);break;case"onSelect":tt((Bn=oe[Fe])!==null&&Bn!==void 0?Bn:S);break;case"onError":Nt((On=oe[Fe])!==null&&On!==void 0?On:qe);break;case"onFocus":ft((xn=oe[Fe])!==null&&xn!==void 0?xn:Me);break;case"onBlur":Kt((Qn=oe[Fe])!==null&&Qn!==void 0?Qn:de);break;default:an(Fe)}function an(pt){o('Unknown property "'.concat(pt,'"'))}B().some(pt=>pt.id===Be())||Be(B()[0].id),Vn()}function Rt(){return gn.apply(this,arguments)}function gn(){return(gn=vt(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function Gn(oe,Jt,rr){Ee(oe),Ne()&&Ne()(oe,Jt,rr)}function An(oe){Se(oe),tt()&&tt()(sd(oe))}function Un(){f(He,!0),ft()&&ft()()}function Dn(){f(He,!1),Kt()&&Kt()()}function fr(oe){return jr.apply(this,arguments)}function jr(){return(jr=vt(function*(oe){ce()!==oe&&(ce(oe),Vn(),fn(),mn()(oe))})).apply(this,arguments)}function pr(oe){o("handleChangeQueryLanguage",oe),Be(oe),Bt()(oe)}function Pn(oe){var Jt=oe.id,rr=oe.json,It=oe.rootPath,Fn=oe.onTransform,Rr=oe.onClose;Ke()||f(re,{id:Jt,json:rr,rootPath:It,indentation:Ae(),truncateTextSize:se(),escapeControlCharacters:on(),escapeUnicodeCharacters:V(),parser:K(),parseMemoizeOne:n(r),validationParser:ze(),pathParser:X(),queryLanguages:B(),queryLanguageId:Be(),onChangeQueryLanguage:pr,onRenderValue:it(),onRenderMenu:Zn=>nt()(Zn,{mode:ce(),modal:!0,readOnly:Ke()}),onRenderContextMenu:Zn=>Et()(Zn,{mode:ce(),modal:!0,readOnly:Ke(),selection:Se()}),onClassName:ye(),onTransform:Fn,onClose:Rr})}function Wn(oe){Ke()||f(Ie,oe)}function nr(oe){var Jt=oe.content,rr=oe.path,It=oe.onPatch,Fn=oe.onClose;o("onJSONEditorModal",{content:Jt,path:rr}),f(Ye,{content:Jt,path:rr,onPatch:It,readOnly:Ke(),indentation:Ae(),tabSize:Re(),truncateTextSize:se(),mainMenuBar:we(),navigationBar:Ce(),statusBar:Ot(),askToFormat:Qt(),escapeControlCharacters:on(),escapeUnicodeCharacters:V(),maxDocumentSizeTextMode:_(),flattenColumns:O(),parser:K(),validator:void 0,validationParser:ze(),pathParser:X(),onRenderValue:it(),onClassName:ye(),onRenderMenu:nt(),onRenderContextMenu:Et(),onSortModal:Wn,onTransformModal:Pn,onClose:Fn})}function Fr(oe){oe.stopPropagation()}W(()=>(p(K()),n(Yt),p(Ee()),ui),()=>{if(!lv(K(),n(Yt))){if(o("parser changed, recreate editor"),bl(Ee())){var oe=n(Yt).stringify(Ee().json);Ee({json:oe!==void 0?K().parse(oe):void 0})}f(Yt,K()),f(ke,ui())}}),W(()=>p(Ee()),()=>{var oe=Uu(Ee());oe&&console.error("Error: "+oe)}),W(()=>p(Se()),()=>{Se()===null&&console.warn("selection is invalid: it is null but should be undefined")}),W(()=>p(K()),()=>{f(r,fl(K().parse))}),W(()=>p(ce()),()=>{o("mode changed to",ce())}),jn();var xr={get:ue,set:bt,update:En,patch:tr,select:Gt,expand:Ln,collapse:Tn,transform:vr,validate:yr,acceptAutoRepair:Xe,scrollTo:ct,findElement:ut,focus:fn,refresh:Mt,updateProps:yn,destroy:Rt};return kt(!0),zd(e,{children:(oe,Jt)=>{var rr,It=N1(),Fn=dt(It);zh(R(Fn),()=>n(ke),_n=>{Hn(lp(_n,{get externalMode(){return ce()},get content(){return Ee()},get selection(){return Se()},get readOnly(){return Ke()},get indentation(){return Ae()},get tabSize(){return Re()},get truncateTextSize(){return se()},get ariaLabel(){return me()},get statusBar(){return Ot()},get askToFormat(){return Qt()},get mainMenuBar(){return we()},get navigationBar(){return Ce()},get maxDocumentSizeTextMode(){return _()},get escapeControlCharacters(){return on()},get escapeUnicodeCharacters(){return V()},get flattenColumns(){return O()},get parser(){return K()},get parseMemoizeOne(){return n(r)},get validator(){return te()},get validationParser(){return ze()},get pathParser(){return X()},insideModal:!1,get onError(){return Nt()},onChange:Gn,onChangeMode:fr,onSelect:An,get onRenderValue(){return it()},get onClassName(){return ye()},onFocus:Un,onBlur:Dn,get onRenderMenu(){return nt()},get onRenderContextMenu(){return Et()},onSortModal:Wn,onTransformModal:Pn,onJSONEditorModal:nr,$$legacy:!0}),pn=>f(Je,pn),()=>n(Je))});var Rr=D(Fn,2),Zn=_n=>{(function(pn,At){var Ut,Mn;ot(At,!1);var _t=P(void 0,!0),w=P(void 0,!0),I=P(void 0,!0),Q=P(void 0,!0),Oe=Wr("jsoneditor:SortModal"),Pe=v(At,"id",9),Te=v(At,"json",9),Le=v(At,"rootPath",9),mt=v(At,"onSort",9),zt=v(At,"onClose",9),Ze={value:1,label:"ascending"},Cn=[Ze,{value:-1,label:"descending"}],rt="".concat(Pe(),":").concat(qt(Le())),Ft=P((Ut=ei()[rt])===null||Ut===void 0?void 0:Ut.selectedProperty,!0),Bn=P(((Mn=ei()[rt])===null||Mn===void 0?void 0:Mn.selectedDirection)||Ze,!0),On=P(void 0,!0);function xn(){try{var Zt,Fe,an;f(On,void 0);var pt=((Zt=n(Ft))===null||Zt===void 0?void 0:Zt.value)||((Fe=n(Q))===null||Fe===void 0||(Fe=Fe[0])===null||Fe===void 0?void 0:Fe.value)||[],or=(an=n(Bn))===null||an===void 0?void 0:an.value,ar=qm(Te(),Le(),pt,or);mt()!==void 0&&Le()!==void 0&&mt()({operations:ar,rootPath:Le(),itemPath:pt,direction:or}),zt()()}catch(zr){f(On,String(zr))}}function Qn(Zt){Zt.focus()}W(()=>(p(Te()),p(Le())),()=>{f(_t,Ve(Te(),Le()))}),W(()=>n(_t),()=>{f(w,Array.isArray(n(_t)))}),W(()=>(n(w),n(_t)),()=>{f(I,n(w)?Od(n(_t)):void 0)}),W(()=>(n(I),Qa),()=>{f(Q,n(I)?n(I).map(Qa):void 0)}),W(()=>(ei(),n(Ft),n(Bn)),()=>{ei(ei()[rt]={selectedProperty:n(Ft),selectedDirection:n(Bn)}),Oe("store state in memory",rt,ei()[rt])}),jn(),kt(!0),Cl(pn,{get onClose(){return zt()},className:"jse-sort-modal",children:(Zt,Fe)=>{var an=T1(),pt=dt(an),or=De(()=>n(w)?"Sort array items":"Sort object keys");Kc(pt,{get title(){return n(or)},get onClose(){return zt()}});var ar=R(D(pt,2)),zr=D(R(ar)),_r=R(zr),io=D(R(_r)),eo=R(io),C=D(_r),H=_e=>{var Ge=P1(),yt=D(R(Ge));qs(R(yt),{showChevron:!0,get items(){return n(Q)},get value(){return n(Ft)},set value(sn){f(Ft,sn)},$$legacy:!0}),N(_e,Ge)};ne(C,_e=>{n(w),n(Q),T(()=>{var Ge;return n(w)&&n(Q)&&((Ge=n(Q))===null||Ge===void 0?void 0:Ge.length)>1})&&_e(H)});var pe=D(C),xe=D(R(pe));qs(R(xe),{showChevron:!0,clearable:!1,get items(){return Cn},get value(){return n(Bn)},set value(_e){f(Bn,_e)},$$legacy:!0});var ie=D(ar,2),Ue=R(ie),jt=_e=>{var Ge=R1(),yt=R(Ge);je(()=>st(yt,n(On))),N(_e,Ge)};ne(Ue,_e=>{n(On)&&_e(jt)});var ge=R(D(ie,2));$r(()=>fe("click",ge,xn)),oo(ge,_e=>Qn?.(_e)),je(_e=>{Ws(eo,_e),ge.disabled=(n(w),n(Q),n(Ft),T(()=>{var Ge;return!!(n(w)&&n(Q)&&((Ge=n(Q))===null||Ge===void 0?void 0:Ge.length)>1)&&!n(Ft)}))},[()=>(p(Le()),p(dn),p(fo),T(()=>Le()&&!dn(Le())?fo(Le()):"(document root)"))]),N(Zt,an)},$$slots:{default:!0}}),at()})(_n,os(()=>n(Ie),{onClose:()=>{var pn;(pn=n(Ie))===null||pn===void 0||pn.onClose(),f(Ie,void 0)}}))};ne(Rr,_n=>{n(Ie)&&_n(Zn)});var Or=D(Rr,2),Tr=_n=>{_x(_n,os(()=>n(re),{onClose:()=>{var pn;(pn=n(re))===null||pn===void 0||pn.onClose(),f(re,void 0)}}))};ne(Or,_n=>{n(re)&&_n(Tr)});var Mr=D(Or,2),hr=_n=>{(function(pn,At){ot(At,!1);var Ut=P(void 0,!0),Mn=P(void 0,!0),_t=P(void 0,!0),w=P(void 0,!0),I=Wr("jsoneditor:JSONEditorModal"),Q=v(At,"content",9),Oe=v(At,"path",9),Pe=v(At,"onPatch",9),Te=v(At,"readOnly",9),Le=v(At,"indentation",9),mt=v(At,"tabSize",9),zt=v(At,"truncateTextSize",9),Ze=v(At,"mainMenuBar",9),Cn=v(At,"navigationBar",9),rt=v(At,"statusBar",9),Ft=v(At,"askToFormat",9),Bn=v(At,"escapeControlCharacters",9),On=v(At,"escapeUnicodeCharacters",9),xn=v(At,"maxDocumentSizeTextMode",9),Qn=v(At,"flattenColumns",9),Zt=v(At,"parser",9),Fe=v(At,"validator",9),an=v(At,"validationParser",9),pt=v(At,"pathParser",9),or=v(At,"onRenderValue",9),ar=v(At,"onClassName",9),zr=v(At,"onRenderMenu",9),_r=v(At,"onRenderContextMenu",9),io=v(At,"onSortModal",9),eo=v(At,"onTransformModal",9),C=v(At,"onClose",9),H=P(void 0,!0),pe=P(void 0,!0),xe={mode:jt(Q()),content:Q(),selection:void 0,relativePath:Oe()},ie=P([xe],!0),Ue=P(void 0,!0);function jt(ae){return bl(ae)&&Ar(ae.json)?Cr.table:Cr.tree}function ge(){var ae,he=(ae=Wt(n(ie)))===null||ae===void 0?void 0:ae.selection;wl(he)&&n(H).scrollTo($e(he))}function _e(){if(I("handleApply"),!Te())try{f(Ue,void 0);var ae=n(Ut).relativePath,he=n(Ut).content,et=[{op:"replace",path:qt(ae),value:mf(he,Zt()).json}];if(n(ie).length>1){var ht=mf(n(ie)[n(ie).length-2].content,Zt()).json,Tt={json:sa(ht,et)},ln=be(be({},n(ie)[n(ie).length-2]||xe),{},{content:Tt});f(ie,[...n(ie).slice(0,n(ie).length-2),ln]),Vn(),ge()}else Pe()(et),C()()}catch(Vt){f(Ue,String(Vt))}}function Ge(){var ae;I("handleClose"),n(ie).length>1?(f(ie,Xt(n(ie))),Vn(),(ae=n(H))===null||ae===void 0||ae.focus(),ge(),f(Ue,void 0)):C()()}function yt(ae){I("handleChange",ae),z(he=>be(be({},he),{},{content:ae}))}function sn(ae){I("handleChangeSelection",ae),z(he=>be(be({},he),{},{selection:ae}))}function cr(ae){I("handleChangeMode",ae),z(he=>be(be({},he),{},{mode:ae}))}function z(ae){var he=ae(Wt(n(ie)));f(ie,[...Xt(n(ie)),he])}function L(ae){f(Ue,ae.toString()),console.error(ae)}function ve(ae){var he,et=ae.content,ht=ae.path;I("handleJSONEditorModal",{content:et,path:ht});var Tt={mode:jt(et),content:et,selection:void 0,relativePath:ht};f(ie,[...n(ie),Tt]),Vn(),(he=n(H))===null||he===void 0||he.focus()}function We(ae){ae.focus()}Xr(()=>{var ae;(ae=n(H))===null||ae===void 0||ae.focus()}),W(()=>n(ie),()=>{f(Ut,Wt(n(ie))||xe)}),W(()=>n(ie),()=>{f(Mn,n(ie).flatMap(ae=>ae.relativePath))}),W(()=>(n(Mn),fo),()=>{f(_t,dn(n(Mn))?"(document root)":fo(n(Mn)))}),W(()=>p(Zt()),()=>{f(w,fl(Zt().parse))}),jn(),kt(!0),Cl(pn,{onClose:Ge,className:"jse-jsoneditor-modal",get fullscreen(){return n(pe)},children:(ae,he)=>{var et=E1();zd(R(et),{children:(ht,Tt)=>{var ln=q1(),Vt=dt(ln),Jn=De(()=>(n(ie),T(()=>n(ie).length>1?" (".concat(n(ie).length,")"):"")));Kc(Vt,{get title(){var Qe;return"Edit nested content ".concat((Qe=n(Jn))!==null&&Qe!==void 0?Qe:"")},fullScreenButton:!0,onClose:Ge,get fullscreen(){return n(pe)},set fullscreen(Qe){f(pe,Qe)},$$legacy:!0});var St=D(Vt,2),Xn=D(R(St),2),Ct=D(Xn,4);Hn(lp(R(Ct),{get externalMode(){return n(Ut),T(()=>n(Ut).mode)},get content(){return n(Ut),T(()=>n(Ut).content)},get selection(){return n(Ut),T(()=>n(Ut).selection)},get readOnly(){return Te()},get indentation(){return Le()},get tabSize(){return mt()},get truncateTextSize(){return zt()},get statusBar(){return rt()},get askToFormat(){return Ft()},get mainMenuBar(){return Ze()},get navigationBar(){return Cn()},get escapeControlCharacters(){return Bn()},get escapeUnicodeCharacters(){return On()},get maxDocumentSizeTextMode(){return xn()},get flattenColumns(){return Qn()},get parser(){return Zt()},get parseMemoizeOne(){return n(w)},get validator(){return Fe()},get validationParser(){return an()},get pathParser(){return pt()},insideModal:!0,onError:L,onChange:yt,onChangeMode:cr,onSelect:sn,get onRenderValue(){return or()},get onClassName(){return ar()},get onFocus(){return qo},get onBlur(){return qo},get onRenderMenu(){return zr()},get onRenderContextMenu(){return _r()},get onSortModal(){return io()},get onTransformModal(){return eo()},onJSONEditorModal:ve,$$legacy:!0}),Qe=>f(H,Qe),()=>n(H));var Kn=R(D(Ct,2)),bn=Qe=>{var Pt=C1(),er=R(Pt);je(()=>st(er,n(Ue))),N(Qe,Pt)};ne(Kn,Qe=>{n(Ue)&&Qe(bn)});var lt=D(Kn,2),nn=Qe=>{var Pt=O1();tn(R(Pt),{get data(){return Ag}}),fe("click",Pt,Ge),N(Qe,Pt)};ne(lt,Qe=>{n(ie),T(()=>n(ie).length>1)&&Qe(nn)});var zn=D(lt,2),ur=Qe=>{var Pt=M1();$r(()=>fe("click",Pt,_e)),oo(Pt,er=>We?.(er)),N(Qe,Pt)},mr=Qe=>{var Pt=z1();fe("click",Pt,Ge),N(Qe,Pt)};ne(zn,Qe=>{Te()?Qe(mr,-1):Qe(ur)}),je(()=>Ws(Xn,n(_t))),N(ht,ln)},$$slots:{default:!0}}),N(ae,et)},$$slots:{default:!0}}),at()})(_n,os(()=>n(Ye),{onClose:()=>{var pn;(pn=n(Ye))===null||pn===void 0||pn.onClose(),f(Ye,void 0)}}))};ne(Mr,_n=>{n(Ye)&&_n(hr)}),je(()=>rr=wt(Fn,1,"jse-main svelte-1l55585",null,rr,{"jse-focus":n(He)})),fe("keydown",Fn,Fr),N(oe,It)},$$slots:{default:!0}}),gt(t,"get",ue),gt(t,"set",bt),gt(t,"update",En),gt(t,"patch",tr),gt(t,"select",Gt),gt(t,"expand",Ln),gt(t,"collapse",Tn),gt(t,"transform",vr),gt(t,"validate",yr),gt(t,"acceptAutoRepair",Xe),gt(t,"scrollTo",ct),gt(t,"findElement",ut),gt(t,"focus",fn),gt(t,"refresh",Mt),gt(t,"updateProps",yn),gt(t,"destroy",Rt),at(xr)}function U1(e){var t=$b(I1,{target:e.target,props:e.props});return t.destroy=vt(function*(){return function(r,o){var s=Sd.get(r);return s?(Sd.delete(r),s(o)):Promise.resolve()}(t)}),Vn(),t}function K1(e){var t=e.target,r=e.props;return console.warn('WARNING: the constructor "new JSONEditor(...)" is deprecated since v1. Please use "createJSONEditor(...)" instead.'),U1({target:t,props:r})}export{Jj as BooleanToggle,Fo as CaretType,_j as ColorPicker,Xj as EditableValue,Ex as EnumValue,K1 as JSONEditor,I1 as JsonEditor,Cr as Mode,a0 as ReadonlyValue,Ho as SearchField,qn as SelectionType,Eo as SortDirection,c0 as TimestampTag,as as UpdateSelectionAfterChange,Io as ValidationSeverity,Pa as createAfterSelection,F1 as createAjvValidator,_1 as createAjvValidatorAsync,kv as createEditKeySelection,Jc as createEditValueSelection,La as createInsideSelection,U1 as createJSONEditor,Ja as createKeySelection,no as createMultiSelection,$t as createValueSelection,gj as estimateSerializedSize,wv as expandAll,il as expandMinimal,bc as expandNone,Pd as expandSelf,Us as getAnchorPath,ss as getEndPath,$e as getFocusPath,vs as getSelectionPaths,Ma as getStartPath,Lc as getValueClass,Gh as hasSearchResults,vo as isAfterSelection,Dr as isArrayRecursiveState,cj as isBoolean,uj as isColor,J1 as isContent,Cf as isContentParseError,Hj as isContentValidationErrors,Sf as isContextMenuColumn,kf as isContextMenuRow,Ur as isEditingSelection,lv as isEqualParser,Fs as isExpandableState,Er as isInsideSelection,bl as isJSONContent,Br as isKeySelection,mj as isLargeContent,ka as isMenuButton,Ys as isMenuDropDownButton,wf as isMenuLabel,Ha as isMenuSeparator,Ed as isMenuSpace,Mf as isModeHistoryItem,Rn as isMultiSelection,Kj as isNestedValidationError,rn as isObject,sr as isObjectOrArray,uo as isObjectRecursiveState,Yj as isSvelteActionRenderer,L1 as isSvelteComponentRenderer,gl as isTextContent,Of as isTextHistoryItem,Cd as isTimestamp,Dc as isTreeHistoryItem,ou as isUrl,Qj as isValidationError,hv as isValueRecursiveState,un as isValueSelection,Q1 as javascriptQueryLanguage,V1 as jmespathQueryLanguage,Pj as jsonQueryLanguage,$1 as jsonpathQueryLanguage,Ba as keyComboFromEvent,H1 as lodashQueryLanguage,Yc as onEscape,d0 as parseJSONPath,W1 as renderJSONSchemaEnum,u0 as renderValue,uc as resizeObserver,_i as stringConvert,fo as stringifyJSONPath,mf as toJSONContent,hj as toTextContent,iv as valueType};
