"use strict";var l=function(t,u){return function(){return u||t((u={exports:{}}).exports,u),u.exports}};var m=l(function(F,k){
var g=require('@stdlib/math-base-special-abs/dist');function P(t,u,i,b){var a,n,r,o,e,v,f,s,c;if(a=u.data,n=u.accessors[0],e=b,i===0)return t*n(a,e);if(v=n(a,e),e+=i,r=v,r===0)for(c=1;c<t;c++){if(v=n(a,e),v!==0){o=!0;break}r+=v,e+=i}else o=!0,c=1;for(s=0;c<t;c++)v=n(a,e),f=r+v,g(r)>=g(v)?s+=r-f+v:s+=v-f+r,r=f,e+=i;return o?r+s:r}k.exports=P
});var q=l(function(G,p){
var y=require('@stdlib/math-base-special-abs/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),h=m();function w(t,u,i,b){var a,n,r,o,e,v,f,s;if(t<=0)return 0;if(o=R(u),o.accessorProtocol)return h(t,o,i,b);if(r=b,i===0)return t*u[r];if(e=u[r],r+=i,a=e,a===0)for(s=1;s<t;s++){if(e=u[r],e!==0){n=!0;break}a+=e,r+=i}else n=!0,s=1;for(f=0;s<t;s++)e=u[r],v=a+e,y(a)>=y(e)?f+=a-v+e:f+=e-v+a,a=v,r+=i;return n?a+f:a}p.exports=w
});var j=l(function(H,x){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=q();function B(t,u,i){return A(t,u,i,z(t,i))}x.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=j(),D=q();C(O,"ndarray",D);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
