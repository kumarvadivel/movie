(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{21:function(e,t,a){},50:function(e,t,a){e.exports=a(63)},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=(a(21),a(22),a(7)),i=a(65),s=a(66),u=a(67),m=a(69),o=a(70),E=a(17),f=a.n(E),v=a(24),d=Object(n.createContext)(),h=function(e){var t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],i=a[1],s=function(){var e=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=spiderman");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),l.a.createElement(d.Provider,{value:[c,i]},e.children)};function p(e){var t=Object(n.useContext)(d),a=Object(r.a)(t,2);a[0],a[1];return l.a.createElement(i.a,{fluid:"xs"},l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement(m.a,{bg:"dark",variant:"dark"},l.a.createElement(m.a.Brand,{href:"/movie/#/"},"MoviesForYou"),l.a.createElement(o.a,{className:"mr-auto"},l.a.createElement(o.a.Link,{href:"/movie/#/"},"Home"),l.a.createElement(o.a.Link,{href:"/movie/#/review"},"Reviews"),l.a.createElement(o.a.Link,{href:"/movie/#/search"},"search"))))))}function b(){var e=Object(n.useContext)(d),t=Object(r.a)(e,2);t[0],t[1];return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement(u.a,null,l.a.createElement("h1",null,"welcome to movies for you")),l.a.createElement(u.a,null,l.a.createElement("p",null," movies for you.com is india's no1 movie review site .which is used by millions of users in and across india"))),l.a.createElement(o.a,null))}var g=a(23),j=a(5),O=a(71);function N(){var e=Object(n.useContext)(d),t=Object(r.a)(e,2),a=t[0];t[1],Object(j.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"review-cards"},a.results?a.results.map((function(e,t){return l.a.createElement("div",{className:"cards",key:e.id},l.a.createElement(O.a,{style:{width:"18rem",height:"fit-content"}},l.a.createElement(O.a.Img,{variant:"top",src:"http://image.tmdb.org/t/p/w185"+e.poster_path,style:{height:"20vh"}}),l.a.createElement(O.a.Body,null,l.a.createElement(O.a.Title,null,e.title," "),l.a.createElement(O.a.Text,null,e.overview.substring(0,100)),l.a.createElement("a",{href:"/movie/#/"+e.id}," see more"))))})):"loading"))}function w(){var e=Object(j.g)().id,t=Object(n.useContext)(d),a=Object(r.a)(t,2),c=a[0],i=(a[1],Object(n.useState)()),s=Object(r.a)(i,2),u=s[0],m=s[1],o=Object(n.useState)(),E=Object(r.a)(o,2),f=E[0],v=E[1],h=Object(n.useState)(),p=Object(r.a)(h,2),b=p[0],g=p[1],O=Object(n.useState)(),N=Object(r.a)(O,2),w=N[0],y=N[1],x=Object(n.useState)(),k=Object(r.a)(x,2),S=k[0],_=k[1],C=Object(n.useState)(),B=Object(r.a)(C,2),L=B[0],T=B[1],F=Object(n.useState)(),I=Object(r.a)(F,2),P=I[0],R=I[1],q=Object(n.useState)(),D=Object(r.a)(q,2),J=(D[0],D[1]),U=Object(n.useState)(),G=Object(r.a)(U,2),H=G[0],M=G[1];return Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?M(t.adult):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?y(t.original_language):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?v(t.title):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?m(t.overview):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?_(t.release_date):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?T(t.vote_count):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?R(t.poster_path):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?J(t.backdrop_path):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?g(t.popularity):console.log("no")})):console.log()})),l.a.createElement("div",null,l.a.createElement("div",{className:"movie-container"},l.a.createElement("div",null,l.a.createElement("img",{src:"http://image.tmdb.org/t/p/w185/"+P,alt:"image",className:"img-container"})),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"inf-item"},l.a.createElement("h1",null,f)),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("h5",null,"Popularity:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,b,"%"))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("h5",null,"Release date:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,S))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("h5",null,"Votes:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,L," votes"))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("h5",null,"Language:")),l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("p",null,"en"===w?"English":w))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("h5",null,"PG-rating:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,H?"18+":"13+"))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("h5",null,"Overview:")),l.a.createElement("div",{className:"inf-item-li"},"  ",l.a.createElement("p",null,""===u?"this movie has no overview":u))))))}var y=a(45),x=a(46),k=a(18),S=a(49),_=a(48),C=a(68),B=a(47),L=function(e){Object(S.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={search:"",loading:!0,movie:null},n.handlechange=n.handlechange.bind(Object(k.a)(n)),n.handlesubmit=n.handlesubmit.bind(Object(k.a)(n)),n}return Object(x.a)(a,[{key:"handlechange",value:function(e){e.preventDefault(),this.setState({search:e.target.value})}},{key:"handlesubmit",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query="+this.state.search,e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:l=e.sent,console.log(l),this.setState({movie:l,loading:!1}),console.log(this.state.movie);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement("input",{type:"text",onChange:this.handlechange,value:this.state.value}),l.a.createElement("button",{onClick:this.handlesubmit},"search")),l.a.createElement(s.a,null,this.state.loading?"":l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,'search results for "',this.state.search,'"'),l.a.createElement("div",{className:"review-cards"},this.state.movie.results.map((function(e){return l.a.createElement("div",{className:"cards",key:e.id},l.a.createElement(O.a,{style:{width:"18rem"}},l.a.createElement(O.a.Img,{variant:"top",src:"http://image.tmdb.org/t/p/w185"+e.poster_path,alt:"no preview"}),l.a.createElement(O.a.Body,null,l.a.createElement(O.a.Title,null,e.title),l.a.createElement(O.a.Text,null,e.overview.substring(0,100))),l.a.createElement(C.a,{className:"list-group-flush"},l.a.createElement(B.a,null,l.a.createElement("h6",null,"release date:"),l.a.createElement("p",null,e.release_date)),l.a.createElement(B.a,null,l.a.createElement("h6",null,"language:"),l.a.createElement("p",null,e.original_language)),l.a.createElement(B.a,null,l.a.createElement("h6",null,"Rating:"),l.a.createElement("p",null,e.vote_average)))))})))))))}}]),a}(l.a.Component);function T(){return l.a.createElement("div",null,l.a.createElement(g.a,null,l.a.createElement(h,null,l.a.createElement(i.a,{fluid:!0},l.a.createElement(u.a,null,l.a.createElement(p,null)),l.a.createElement(j.c,null,l.a.createElement(j.a,{exact:!0,path:"/"},l.a.createElement(u.a,null,l.a.createElement(b,null))),l.a.createElement(j.a,{exact:!0,path:"/review"},l.a.createElement(u.a,null,l.a.createElement(N,null))),l.a.createElement(j.a,{exact:!0,strict:!0,path:"/search"},l.a.createElement(u.a,null,l.a.createElement(L,null))),l.a.createElement(j.a,{exact:!0,path:"/:id"},l.a.createElement(u.a,null,l.a.createElement(w,null))))))))}Object(c.render)(l.a.createElement(T,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f6b3e4d7.chunk.js.map