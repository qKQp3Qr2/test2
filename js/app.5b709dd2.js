(function(){"use strict";var t={5307:function(t,e,n){var o=n(9242),r=n(3396);const i=(0,r._)("p",null,"App",-1);function c(t,e,n,o,c,a){return(0,r.wg)(),(0,r.iD)("div",null,[i,(0,r._)("button",{onClick:e[0]||(e[0]=(...t)=>a.login&&a.login(...t))},"login")])}n(2062);var a=n(4161),s={methods:{login(){let t="https://access.line.me/oauth2/v2.1/authorize?";t+="response_type=code",t+="&client_id=1661441879",t+="&redirect_uri=https://qkqp3qr2.github.io/test2/",t+="&state=test",t+="&scope=openid%20profile",window.location.href=t,console.log("start login")},beforeMount(){this.handleLoginCallback()},methods:{async handleLoginCallback(){const t=new URLSearchParams(window.location.search).get("code");if(t){const e=await this.getAccessToken(t);await this.getUserProfile(e)}else console.error("Authorization code not found.")},async getAccessToken(t){try{const e=await a.Z.post("https://api.line.me/oauth2/v2.1/token",new URLSearchParams({grant_type:"authorization_code",code:t,client_id:"1661441879",client_secret:"4f03d9065b14f7d6e394a0f20b0c53e3",redirect_uri:"https://qkqp3qr2.github.io/test2/"}).toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});return e.data.access_token}catch(e){throw console.error("Failed to get access token:",e),e}},async getUserProfile(t){try{const e=await a.Z.get("https://api.line.me/v2/profile",{headers:{Authorization:`Bearer ${t}`}}),n=e.data;console.log(n)}catch(e){console.error("Failed to get user profile:",e)}}}}},u=n(89);const l=(0,u.Z)(s,[["render",c]]);var f=l;const h=(0,o.ri)(f);h.mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var c=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||c>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(a=!1,i<c&&(c=i));if(a){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,c=o[0],a=o[1],s=o[2],u=0;if(c.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var l=s(n)}for(e&&e(o);u<c.length;u++)i=c[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunktest"]=self["webpackChunktest"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5307)}));o=n.O(o)})();
//# sourceMappingURL=app.5b709dd2.js.map