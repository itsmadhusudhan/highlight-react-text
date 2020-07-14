"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,r=(e=require("react"))&&"object"==typeof e&&"default"in e?e.default:e;
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
***************************************************************************** */var t=function(e,t,n){if(void 0===n&&(n=!0),!e)return t;for(var i,a=new RegExp(e,(n?"i":"")+"g"),u=[];null!==(i=a.exec(t));)u.push(i);var o=0,s=u.reduce((function(e,n,i){var a=n.index,s=t.substring(o,a),l=n[0].length,g=t.substr(a,l),h=t.substring(a+l);o=a+l;var c=[s,r.createElement("mark",{key:a},g)];return i===u.length-1&&h&&c.push(h),function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var n=Array(e),i=0;for(r=0;r<t;r++)for(var a=arguments[r],u=0,o=a.length;u<o;u++,i++)n[i]=a[u];return n}(e,c)}),[]);return s.length>0?s:t},n=function(e){var r=e.searchText,n=e.text,i=e.ignoreCase,a=void 0===i||i,u=function(e){return Array.isArray(e)?e.filter((function(e){return Boolean(e)})).join("|"):e}(r);return{highlights:t(u,n,a)}};exports.Highlighter=function(e){var t=e.children,i=e.searchText,a=e.parentTag,u=void 0===a?"p":a,o=e.ignoreCase,s=n({searchText:i,text:t,ignoreCase:void 0===o||o}).highlights;return r.createElement(u,null,s)},exports.useHighlighter=n;
//# sourceMappingURL=index.js.map
