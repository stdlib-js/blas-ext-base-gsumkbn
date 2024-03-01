"use strict";var c=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var q=c(function(h,m){
var o=require('@stdlib/math-base-special-abs/dist');function y(a,e,s){var u,r,i,v,n,t;if(a<=0)return 0;if(a===1||s===0)return e[0];for(s<0?r=(1-a)*s:r=0,u=0,n=0,t=0;t<a;t++)i=e[r],v=u+i,o(u)>=o(i)?n+=u-v+i:n+=i-v+u,u=v,r+=s;return u+n}m.exports=y
});var p=c(function(j,l){
var b=require('@stdlib/math-base-special-abs/dist');function g(a,e,s,u){var r,i,v,n,t,f;if(a<=0)return 0;if(a===1||s===0)return e[u];for(i=u,r=0,t=0,f=0;f<a;f++)v=e[i],n=r+v,b(r)>=b(v)?t+=r-n+v:t+=v-n+r,r=n,i+=s;return r+t}l.exports=g
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=q(),O=p();k(x,"ndarray",O);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
