var Ab="isObject,isNaN".split(","),Bb="keys,values,each,merge,isEmpty,clone,equal,watch,tap,has".split(",");
function V(a){o.merge(this,a)}V.prototype.constructor=o;function Cb(a,b,c,d){var e=/^(.+?)(\[.*\])$/,g,f,i;if(d!==m&&(f=b.match(e))){i=f[1];b=f[2].replace(/^\[|\]$/g,"").split("][");b.forEach(function(h){g=!h||h.match(/^\d+$/);if(!i&&oa(a))i=a.length;a[i]||(a[i]=g?[]:{});a=a[i];i=h});if(!i&&g)i=a.length.toString();Cb(a,i,c)}else a[b]=c.match(/^[\d.]+$/)?parseFloat(c):c==="true"?j:c==="false"?m:c}
y(o,m,j,{watch:function(a,b,c){if(ca){var d=a[b];o.defineProperty(a,b,{enumerable:j,configurable:j,get:function(){return d},set:function(e){d=c.call(a,b,d,e)}})}}});y(o,m,function(a,b){return K(b)},{keys:function(a,b){var c=o.keys(a);o.keys(a).forEach(function(d){b.call(a,d,a[d])});return c}});
y(o,m,m,{isObject:function(a){return ja(a)},isNaN:function(a){return L(a)&&a.valueOf()!==a.valueOf()},equal:function(a,b){return H(a)===H(b)},extended:function(a){return new V(a)},merge:function(a,b,c,d){var e,g;if(a&&typeof b!="string")for(e in b)if(o.prototype.hasOwnProperty.call(b,e)&&a){g=b[e];if(a[e]!==void 0){if(d===m)continue;if(K(d))g=d.call(b,e,a[e],b[e])}if(c===j&&g&&ka(g))if(pa(g))g=new s(g.getTime());else if(N(g))g=new q(g);else{a[e]||(a[e]=p.isArray(g)?[]:{});o.merge(a[e],b[e],c,d);continue}a[e]=
g}return a},values:function(a,b){var c=[];z(a,function(d,e){c.push(e);b&&b.call(a,e)});return c},each:function(a,b){b&&z(a,function(c,d){b.call(a,c,d,a)});return a},isEmpty:function(a){if(!ka(a))return!(a&&a.length>0);return o.keys(a).length==0},clone:function(a,b){if(!ka(a))return a;if(p.isArray(a))return a.concat();var c=a instanceof V?new V:{};return o.merge(c,a,b)},fromQueryString:function(a,b){var c=o.extended();a=a&&a.toString?a.toString():"";decodeURIComponent(a.replace(/^.*?\?/,"")).split("&").forEach(function(d){d=
d.split("=");d.length===2&&Cb(c,d[0],d[1],b)});return c},tap:function(a,b){var c=b;K(b)||(c=function(){b&&a[b]()});c.call(a,a);return a},has:function(a,b){return o.prototype.hasOwnProperty.call(a,b)}});B(o,m,m,I,function(a,b){var c="is"+b;Ab.push(c);a[c]=function(d){return ia(d,b)}});(function(){y(o,m,function(){return arguments.length===0},{extend:function(){la(Ab.concat(Bb),o)}})})();la(Bb,V);