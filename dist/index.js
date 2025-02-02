"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=q(function(D,l){
var m=require('@stdlib/math-base-special-abs/dist');function j(e,r,v,o){var a,n,u,s,t,i,c,f;if(a=r.data,n=r.accessors[0],s=o,v===0)return e*n(a,s);for(u=0,c=0,f=0;f<e;f++)t=n(a,s),i=u+t,m(u)>=m(t)?c+=u-i+t:c+=t-i+u,u=i,s+=v;return u+c}l.exports=j
});var b=q(function(E,k){
var g=require('@stdlib/math-base-special-abs/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),P=y();function R(e,r,v,o){var a,n,u,s,t,i,c;if(e<=0)return 0;if(u=O(r),u.accessorProtocol)return P(e,u,v,o);if(n=o,v===0)return e*r[n];for(a=0,i=0,c=0;c<e;c++)s=r[n],t=a+s,g(a)>=g(s)?i+=a-t+s:i+=s-t+a,a=t,n+=v;return a+i}k.exports=R
});var x=q(function(F,p){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=b();function z(e,r,v){return w(e,r,v,h(e,v))}p.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),B=b();A(d,"ndarray",B);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
