"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=o(function(h,q){
var c=require('@stdlib/math-base-special-abs/dist');function p(e,r,u,d){var a,i,t,n,s,v;if(e<=0)return 0;if(i=d,u===0)return e*r[i];for(a=0,s=0,v=0;v<e;v++)t=r[i],n=a+t,c(a)>=c(t)?s+=a-n+t:s+=t-n+a,a=n,i+=u;return a+s}q.exports=p
});var y=o(function(j,m){
var x=require('@stdlib/strided-base-stride2offset/dist'),g=f();function k(e,r,u){return g(e,r,u,x(e,u))}m.exports=k
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=y(),O=f();l(b,"ndarray",O);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
