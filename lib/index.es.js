import r from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var e=function(e,n,t){if(void 0===t&&(t=!0),!e)return n;for(var i,a=new RegExp(e,(t?"i":"")+"g"),o=[];null!==(i=a.exec(n));)o.push(i);var u=0,g=o.reduce((function(e,t,i){var a=t.index,g=n.substring(u,a),h=t[0].length,l=n.substr(a,h),s=n.substring(a+h);u=a+h;var c=[g,r.createElement("mark",{key:a},l)];return i===o.length-1&&s&&c.push(s),function(){for(var r=0,e=0,n=arguments.length;e<n;e++)r+=arguments[e].length;var t=Array(r),i=0;for(e=0;e<n;e++)for(var a=arguments[e],o=0,u=a.length;o<u;o++,i++)t[i]=a[o];return t}(e,c)}),[]);return g.length>0?g:n},n=function(r){var n=r.searchText,t=r.text,i=r.ignoreCase,a=void 0===i||i,o=function(r){return Array.isArray(r)?r.filter((function(r){return Boolean(r)})).join("|"):r}(n);return{highlights:e(o,t,a)}},t=function(e){var t=e.children,i=e.searchText,a=e.parentTag,o=void 0===a?"p":a,u=e.ignoreCase,g=n({searchText:i,text:t,ignoreCase:void 0===u||u}).highlights;return r.createElement(o,null,g)};export{t as Highlighter,n as useHighlighter};
//# sourceMappingURL=index.es.js.map
