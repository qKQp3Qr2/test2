(function(){var e={4810:function(e,n,t){"use strict";var o=t(9242),r=t(3396);function i(e,n,t,o,i,c){const a=(0,r.up)("RouterLink"),l=(0,r.up)("RouterView");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(a,{to:"/home"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(a,{to:"/index"},{default:(0,r.w5)((()=>[(0,r.Uk)("Index")])),_:1})]),(0,r.Wm)(l)],64)}var c=t(2483),a={name:"App",components:{RouterLink:c.rH,RouterView:c.MA}},l=t(89);const s=(0,l.Z)(a,[["render",i]]);var u=s;const f=(0,r._)("p",null,"index",-1),d=[f];function p(e,n,t,o,i,c){return(0,r.wg)(),(0,r.iD)("div",null,d)}var h={name:"IndexPage",created(){console.log("Index created")}};const g=(0,l.Z)(h,[["render",p]]);var v=g;const m=(0,r._)("p",null,"Home",-1);function k(e,n,t,o,i,c){return(0,r.wg)(),(0,r.iD)("div",null,[m,(0,r._)("button",{onClick:n[0]||(n[0]=(...e)=>c.login&&c.login(...e))},"login")])}t(2062);var b=t(4161),w=t(5410),_=t.n(w),y={name:"HomePage",beforeMount(){this.checkLineLoginCallBack()},methods:{login(){let e="https://access.line.me/oauth2/v2.1/authorize?";e+="response_type=code",e+="&client_id=1661441879",e+="&redirect_uri=https://qkqp3qr2.github.io/test2/",e+="&state=abcde",e+="&scope=openid%20profile",window.location.href=e,console.log("start login")},checkLineLoginCallBack(){console.log("checkLineLoginCallBack");const e=new URLSearchParams(window.location.search);if(e.has("state")&&e.has("code")){const n=e.get("state"),t=e.get("code");if("abcde"===n){const e="https://api.line.me/oauth2/v2.1/token?",n=`${e}`,o=_().stringify({grant_type:"authorization_code",code:t,redirect_uri:"https://qkqp3qr2.github.io/test2/",client_id:"1661441879",client_secret:"4f03d9065b14f7d6e394a0f20b0c53e3"});b.Z.post(n,o).then((e=>{const n=e.data.access_token,t=e.data.id_token;console.log(e);const o="https://api.line.me/v2/profile";(0,b.Z)({method:"GET",url:o,responseType:"json",headers:{Authorization:`Bearer ${n}`}}).then((e=>{alert(`line user id: ${e.data.userId}, display name:${e.data.displayName}`),console.log(JSON.stringify(e));const n="https://api.line.me/oauth2/v2.1/verify",o=_().stringify({client_id:"1656034758",id_token:t});b.Z.post(n,o).then((e=>{alert(`line email: ${e.data.email}`),console.log(JSON.stringify(e))})).catch((e=>{console.log(`錯誤: ${e}`)}))})).catch((e=>{console.log(`錯誤: ${e}`)}))})).catch((e=>{console.log(e),alert(e)}))}}}}};const O=(0,l.Z)(y,[["render",k]]);var x=O;const L=(0,c.p7)({history:(0,c.PO)(),routes:[{path:"/index",component:v},{path:"/home",component:x}]}),j=(0,o.ri)(u);j.use(L),j.mount("#app")},4654:function(){}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var c=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(a=!1,i<c&&(c=i));if(a){e.splice(u--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,c=o[0],a=o[1],l=o[2],s=0;if(c.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(l)var u=l(t)}for(n&&n(o);s<c.length;s++)i=c[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},o=self["webpackChunktest"]=self["webpackChunktest"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4810)}));o=t.O(o)})();
//# sourceMappingURL=app.eb2f0507.js.map