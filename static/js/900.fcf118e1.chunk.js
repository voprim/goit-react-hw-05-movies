"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[900],{900:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(861),a=e(885),c=e(757),u=e.n(c),s=e(791),i=e(739),o="Cast_castList__ARoWn",p="Cast_castItem__-Jcfe",f=e(207),l=e(184);function v(){var t=(0,i.UO)().movieId,n=(0,s.useState)([]),e=(0,a.Z)(n,2),c=e[0],v=e[1],d=(0,s.useState)(null),h=(0,a.Z)(d,2),g=h[0],m=h[1],_=(0,s.useState)(!1),w=(0,a.Z)(_,2),x=w[0],k=w[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),n.next=4,(0,f.fU)(t);case 4:e=n.sent,v(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),m("Ooops. Something went wrong...");case 11:return n.prev=11,k(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,l.jsxs)(l.Fragment,{children:[x&&"Loading...",g&&(0,l.jsx)("div",{children:g}),(0,l.jsx)("ul",{className:o,children:c.map((function(t){return(0,l.jsxs)("li",{className:p,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:"".concat(t.name," portrait")}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["Name: ",t.name]}),(0,l.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)}))})]})}},207:function(t,n,e){e.d(n,{Hq:function(){return d},XT:function(){return v},fU:function(){return g},l2:function(){return h},sv:function(){return m}});var r=e(861),a=e(757),c=e.n(a),u=e(388),s="91f9ab18c89e86fca0699a0f3031794a";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="/trending/movie/week",o="/search/movie",p="/movie",f="/credits",l="/reviews",v=function(){var t=(0,r.Z)(c().mark((function t(){var n,e,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,u.Z.get("".concat(i,"?api_key=").concat(s,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("".concat(o,"?api_key=").concat(s,"&page=").concat(e,"&query=").concat(n,"&language=en-US&include_adult=false"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(p,"/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n).concat(f,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("/movie/".concat(n).concat(l,"?api_key=").concat(s,"&language=en-US&page=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=900.fcf118e1.chunk.js.map