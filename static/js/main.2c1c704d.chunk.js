(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{22:function(e,t,a){},53:function(e,t,a){e.exports=a(65)},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=(a(22),a(23),a(7)),s=a(67),i=a(68),o=a(42),u=a(72),m=a(73),p=a(12),f=a.n(p),h=a(19),E=Object(n.createContext)(),v=function(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),r=a[0],s=a[1],i=function(){var e=Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=spiderman");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),l.a.createElement(E.Provider,{value:[r,s]},e.children)};function g(e){var t=Object(n.useContext)(E),a=Object(c.a)(t,2);a[0],a[1];return l.a.createElement(s.a,{fluid:"xs"},l.a.createElement(i.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{bg:"dark",variant:"dark"},l.a.createElement(u.a.Brand,{href:"/movie/#/"},"MoviesForYou"),l.a.createElement(m.a,{className:"mr-auto"},l.a.createElement(m.a.Link,{href:"/movie/#/"},"Home"),l.a.createElement(m.a.Link,{href:"/movie/#/review"},"Reviews"),l.a.createElement(m.a.Link,{href:"/movie/#/search"},"search"))))))}function d(){var e=Object(n.useContext)(E),t=Object(c.a)(e,2);t[0],t[1];return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(o.a,null,l.a.createElement("h1",null,"welcome to movies for you")),l.a.createElement(o.a,null,l.a.createElement("p",null," movies for you.com is india's no1 movie review site .which is used by millions of users in and across india"))),l.a.createElement(m.a,null))}var b=a(26),O=a(5),j=a(74);function w(){var e=Object(n.useContext)(E),t=Object(c.a)(e,2),a=t[0];t[1],Object(O.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"review-cards"},a.results?a.results.map((function(e,t){return l.a.createElement("div",{className:"cards",key:e.id},l.a.createElement(j.a,{style:{width:"18rem",height:"fit-content"}},l.a.createElement(j.a.Img,{variant:"top",src:"http://image.tmdb.org/t/p/w185"+e.poster_path,style:{height:"20vh"}}),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,e.title," "),l.a.createElement(j.a.Text,null,e.overview.substring(0,100)),l.a.createElement("a",{href:"/movie/#/"+e.id}," see more"))))})):"loading"))}function y(){var e=Object(O.g)().id,t=Object(n.useContext)(E),a=Object(c.a)(t,2),r=a[0],s=(a[1],Object(n.useState)()),i=Object(c.a)(s,2),o=i[0],u=i[1],m=Object(n.useState)(),p=Object(c.a)(m,2),f=p[0],h=p[1],v=Object(n.useState)(),g=Object(c.a)(v,2),d=g[0],b=g[1],j=Object(n.useState)(),w=Object(c.a)(j,2),y=w[0],C=w[1],T=Object(n.useState)(),S=Object(c.a)(T,2),R=S[0],x=S[1],A=Object(n.useState)(),N=Object(c.a)(A,2),Q=N[0],k=N[1],H=Object(n.useState)(),U=Object(c.a)(H,2),X=U[0],I=U[1],W=Object(n.useState)(),K=Object(c.a)(W,2),z=(K[0],K[1]),B=Object(n.useState)(),F=Object(c.a)(B,2),V=F[0],L=F[1];return Object(n.useEffect)((function(){r.results?r.results.map((function(t){return t.id==e?L(t.adult):console.log("no")})):console.log()})),Object(n.useEffect)((function(){r.results?r.results.map((function(t){return t.id==e?C(t.original_language):console.log("no")})):console.log()})),Object(n.useEffect)((function(){r.results?r.results.map((function(t){return t.id==e?h(t.title):console.log("no")})):console.log()})),Object(n.useEffect)((function(){r.results?r.results.map((function(t){return t.id==e?u(t.overview):console.log("no")})):console.log()})),Object(n.useEffect)((function(){r.results?r.results.map((function(t){return t.id==e?x(t.release_date):console.log("no")})):console.log()})),Object(n.useEffect)((function(){r.results?r.results.map((function(t){return t.id==e?k(t.vote_count):console.log("no")})):console.log()})),Object(n.useEffect)((function(){r.results?r.results.map((function(t){return t.id==e?I(t.poster_path):console.log("no")})):console.log()})),Object(n.useEffect)((function(){r.results?r.results.map((function(t){return t.id==e?z(t.backdrop_path):console.log("no")})):console.log()})),Object(n.useEffect)((function(){r.results?r.results.map((function(t){return t.id==e?b(t.popularity):console.log("no")})):console.log()})),l.a.createElement("div",null,l.a.createElement("div",{className:"movie-container"},l.a.createElement("div",null,l.a.createElement("img",{src:"http://image.tmdb.org/t/p/w185/"+X,alt:"image",className:"img-container"})),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"inf-item"},l.a.createElement("h1",null,f)),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("h5",null,"Popularity:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,d,"%"))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("h5",null,"Release date:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,R))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("h5",null,"Votes:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,Q," votes"))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("h5",null,"Language:")),l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("p",null,"en"===y?"English":y))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("h5",null,"PG-rating:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,V?"18+":"13+"))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("h5",null,"Overview:")),l.a.createElement("div",{className:"inf-item-li"},"  ",l.a.createElement("p",null,""===o?"this movie has no overview":o))))))}var C=a(48),T=a(49),S=a(17),R=a(52),x=a(51),A=a(71),N=a(69),Q=a(70),k=a(50),H=function(e){Object(R.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={search:"",loading:!0,movie:null,searchcopy:"",totalpages:null,currentpage:null},n.handlechange=n.handlechange.bind(Object(S.a)(n)),n.handlesubmit=n.handlesubmit.bind(Object(S.a)(n)),n.nextpage=n.nextpage.bind(Object(S.a)(n)),n.prevpage=n.prevpage.bind(Object(S.a)(n)),n}return Object(T.a)(a,[{key:"handlechange",value:function(e){e.preventDefault(),this.setState({search:e.target.value})}},{key:"handlesubmit",value:function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query="+this.state.search,e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:l=e.sent,console.log(l),this.setState({movie:l,loading:!1,searchcopy:this.state.search,totalpages:l.total_pages,currentpage:l.page+1,search:""}),console.log(this.state.totalpages,this.state.currentpage);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"nextpage",value:function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query="+this.state.search+"&page="+this.state.currentpage,e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:l=e.sent,console.log(l),this.setState({movie:l,loading:!1,searchcopy:this.state.search,currentpage:l.page+1});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"prevpage",value:function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query="+this.state.search+"&page="+this.state.currentpage,e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:l=e.sent,console.log(l),this.setState({movie:l,loading:!1,searchcopy:this.state.search,currentpage:l.page-1});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(s.a,{fluid:!0,style:{backgroundColor:"#7B8788",height:"fit-content",minHeight:"100vh"}},l.a.createElement(i.a,{style:{justifyContent:"center",padding:"15px"}},l.a.createElement(A.a,null,l.a.createElement(A.a.Group,{controlId:"formBasicEmail"},l.a.createElement(A.a.Control,{type:"text",placeholder:"Search",onChange:this.handlechange,value:this.state.search})),l.a.createElement(N.a,{variant:"primary",type:"submit",onClick:this.handlesubmit,style:{marginLeft:"30%"}},"search"))),l.a.createElement(i.a,null,this.state.loading?"":l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"search-result"},'search results for "',this.state.searchcopy,'"'),l.a.createElement("div",{className:"review-cards"},this.state.movie.results.map((function(e){return l.a.createElement("div",{className:"cards",key:e.id},l.a.createElement(j.a,{style:{width:"18rem"}},l.a.createElement(j.a.Img,{variant:"top",src:null===e.poster_path?"data:image/png;base64,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":"http://image.tmdb.org/t/p/w185"+e.poster_path,alt:"no preview"}),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,e.title),l.a.createElement(j.a.Text,null,e.overview.substring(0,100))),l.a.createElement(Q.a,{className:"list-group-flush"},l.a.createElement(k.a,null,l.a.createElement("h6",null,"release date:"),l.a.createElement("p",null,e.release_date)),l.a.createElement(k.a,null,l.a.createElement("h6",null,"language:"),l.a.createElement("p",null,e.original_language)),l.a.createElement(k.a,null,l.a.createElement("h6",null,"Rating:"),l.a.createElement("p",null,e.vote_average)))))})))))))}}]),a}(l.a.Component);function U(){return l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement(v,null,l.a.createElement(s.a,{fluid:!0,style:{padding:"0"}},l.a.createElement(o.a,{style:{padding:"0"}},l.a.createElement(g,null)),l.a.createElement(O.c,null,l.a.createElement(O.a,{exact:!0,path:"/"},l.a.createElement(o.a,{style:{padding:"0"}},l.a.createElement(d,null))),l.a.createElement(O.a,{exact:!0,path:"/review"},l.a.createElement(o.a,{style:{padding:"0"}},l.a.createElement(w,null))),l.a.createElement(O.a,{exact:!0,strict:!0,path:"/search"},l.a.createElement(o.a,{style:{padding:"0"}},l.a.createElement(H,null))),l.a.createElement(O.a,{exact:!0,path:"/:id"},l.a.createElement(o.a,{style:{padding:"0"}},l.a.createElement(y,null))))))))}Object(r.render)(l.a.createElement(U,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.2c1c704d.chunk.js.map