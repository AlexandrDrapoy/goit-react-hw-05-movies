"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[768],{350:function(e,r,n){n.d(r,{Df:function(){return o},M1:function(){return l},YJ:function(){return u},tx:function(){return f},uP:function(){return d}});var t=n(861),a=n(757),s=n.n(a),c=n(388),i="7e0fc0f40a1f522dce260b9a97593bef";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day",{params:{api_key:i}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getMoviesById",r),e.next=3,c.Z.get("/movie/".concat(r),{params:{api_key:i}});case 3:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),e.next=3,c.Z.get("/movie/".concat(r,"/credits"),{params:{api_key:i}});case 3:return n=e.sent,console.log(n),e.abrupt("return",n.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),e.next=3,c.Z.get("/movie/".concat(r,"/reviews"),{params:{api_key:i}});case 3:return n=e.sent,console.log(n),e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),e.next=3,c.Z.get("/search/movie",{params:{api_key:i,query:r}});case 3:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},768:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var t=n(885),a=n(731),s=n(184),c=function(e){var r=e.location;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{children:"Addititonal information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"cast",state:{from:r},children:"Cast"})},"cast"),(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"reviews",state:{from:r},children:"Reviews"})},"reviews")]})]})},i=function(e){var r=e.backLinkHref;return(0,s.jsx)("div",{children:(0,s.jsx)(a.rU,{to:r,children:"Go back"})})},o=n(350),u=function(e){var r=e.movie,n=r.title,t=r.name,a=r.overview,c=r.genres,i=r.release_date,o=r.first_air_date,u=r.poster_path,l=r.vote_average;console.log(r);var f=u?"https://image.tmdb.org/t/p/w500".concat(u):"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:f,alt:n||t,width:"200"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{children:[n||t," (",(o||i).slice(0,4),")"]}),(0,s.jsxs)("p",{children:["User Score: ",Math.round(10*l),"%"]}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("p",{children:a}),(0,s.jsx)("h3",{children:"Genres"}),(0,s.jsx)("p",{children:c.map((function(e){return e.name})).join(", ")})]})]})})},l=n(791),f=n(739),d=function(){var e,r,n=(0,l.useState)(),a=(0,t.Z)(n,2),d=a[0],p=a[1],v=(0,f.UO)().movieId,h=null!==(e=null===(r=(0,f.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";if((0,l.useEffect)((function(){console.log("moviesDetals",v),(0,o.YJ)(v).then((function(e){p(e)})).catch(console.log)}),[v]),d)return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{backLinkHref:h}),(0,s.jsx)(u,{movie:d}),(0,s.jsx)(c,{location:h}),(0,s.jsx)(l.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading page ..."}),children:(0,s.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=768.2592105b.chunk.js.map