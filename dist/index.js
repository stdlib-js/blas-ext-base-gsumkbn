"use strict";var l=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var m=l(function(F,k){
var g=require('@stdlib/math-base-special-abs/dist');function P(i,a,v,b){var u,n,r,o,e,t,f,s,c;if(u=a.data,n=a.accessors[0],e=b,v===0)return i*n(u,e);if(t=n(u,e),e+=v,r=t,r===0)for(c=1;c<i;c++){if(t=n(u,e),t!==0){o=!0;break}r+=t,e+=v}else o=!0,c=1;for(s=0;c<i;c++)t=n(u,e),f=r+t,g(r)>=g(t)?s+=r-f+t:s+=t-f+r,r=f,e+=v;return o?r+s:r}k.exports=P
});var q=l(function(G,p){
var y=require('@stdlib/math-base-special-abs/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),h=m();function w(i,a,v,b){var u,n,r,o,e,t,f,s;if(i<=0)return 0;if(o=R(a),o.accessorProtocol)return h(i,o,v,b);if(r=b,v===0)return i*a[r];if(e=a[r],r+=v,u=e,u===0)for(s=1;s<i;s++){if(e=a[r],e!==0){n=!0;break}u+=e,r+=v}else n=!0,s=1;for(f=0;s<i;s++)e=a[r],t=u+e,y(u)>=y(e)?f+=u-t+e:f+=e-t+u,u=t,r+=v;return n?u+f:u}p.exports=w
});var j=l(function(H,x){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=q();function B(i,a,v){return A(i,a,v,z(i,v))}x.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=j(),D=q();C(O,"ndarray",D);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
