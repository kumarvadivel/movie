(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{24:function(e,t,a){},40:function(e,t,a){e.exports=a(54)},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=(a(24),a(25),a(7)),i=a(56),s=a(57),m=a(58),o=a(59),u=a(60),E=a(27),f=a.n(E),v=a(33),d=Object(n.createContext)(),b=function(e){var t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],i=a[1],s=function(){var e=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=spiderman");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),l.a.createElement(d.Provider,{value:[c,i]},e.children)};function p(e){var t=Object(n.useContext)(d),a=Object(r.a)(t,2);a[0],a[1];return l.a.createElement(i.a,{fluid:"xs"},l.a.createElement(s.a,null,l.a.createElement(m.a,null,l.a.createElement(o.a,{bg:"dark",variant:"dark"},l.a.createElement(o.a.Brand,{href:"/movie/movies"},"MoviesForYou"),l.a.createElement(u.a,{className:"mr-auto"},l.a.createElement(u.a.Link,{href:"/"},"Home"),l.a.createElement(u.a.Link,{href:"/review"},"Reviews"))))))}function g(){var e=Object(n.useContext)(d),t=Object(r.a)(e,2),a=t[0];t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement("h1",null,"welcome to movies for you")),l.a.createElement(m.a,null,l.a.createElement("p",null," movies for you.com is india's no1 movie review site .which is used by millions of users in and across india"))),l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement("h1",null,"Datas for users")),l.a.createElement(m.a,null,"we have a collection of reviews of ",a.total_result," movies "),l.a.createElement(m.a,null,"our list of movie reviews"),l.a.createElement(m.a,null,"  ",a.results?a.results.map((function(e,t){return l.a.createElement("li",{key:t},e.title)})):"loading")))}var h=a(16),j=a(5),O=a(61);function N(){var e=Object(n.useContext)(d),t=Object(r.a)(e,2),a=t[0];t[1],Object(j.e)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,null,l.a.createElement("div",{className:"review-cards"},a.results?a.results.map((function(e,t){return l.a.createElement("div",{className:"cards",key:e.id},l.a.createElement(O.a,{style:{width:"18rem",height:"fit-content"}},l.a.createElement(O.a.Img,{variant:"top",src:"http://image.tmdb.org/t/p/w185"+e.poster_path,style:{height:"20vh"}}),l.a.createElement(O.a.Body,null,l.a.createElement(O.a.Title,null,e.title," "),l.a.createElement(O.a.Text,null,e.overview.substring(0,100)),l.a.createElement("a",{href:"movie/movies/"+e.id}," see more"))))})):"loading")))}function w(){var e=Object(j.f)().id,t=Object(n.useContext)(d),a=Object(r.a)(t,2),c=a[0],i=(a[1],Object(n.useState)()),s=Object(r.a)(i,2),m=s[0],o=s[1],u=Object(n.useState)(),E=Object(r.a)(u,2),f=E[0],v=E[1],b=Object(n.useState)(),p=Object(r.a)(b,2),g=p[0],h=p[1],O=Object(n.useState)(),N=Object(r.a)(O,2),w=N[0],x=N[1],y=Object(n.useState)(),k=Object(r.a)(y,2),S=k[0],_=k[1],C=Object(n.useState)(),B=Object(r.a)(C,2),F=B[0],L=B[1],P=Object(n.useState)(),I=Object(r.a)(P,2),J=I[0],R=I[1],T=Object(n.useState)(),q=Object(r.a)(T,2),D=(q[0],q[1]),G=Object(n.useState)(),H=Object(r.a)(G,2),M=H[0],U=H[1];return Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?U(t.adult):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?x(t.original_language):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?v(t.title):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?o(t.overview):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?_(t.release_date):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?L(t.vote_count):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?R(t.poster_path):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?D(t.backdrop_path):console.log("no")})):console.log()})),Object(n.useEffect)((function(){c.results?c.results.map((function(t){return t.id==e?h(t.popularity):console.log("no")})):console.log()})),l.a.createElement("div",null,l.a.createElement("div",{className:"movie-container"},l.a.createElement("div",null,l.a.createElement("img",{src:"http://image.tmdb.org/t/p/w185/"+J,alt:"image",className:"img-container"})),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"inf-item"},l.a.createElement("h1",null,f)),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("h5",null,"Popularity:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,g,"%"))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("h5",null,"Release date:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,S))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("h5",null,"Votes:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,F," votes"))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("h5",null,"Language:")),l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("p",null,"en"===w?"English":w))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"},l.a.createElement("h5",null,"PG-rating:")),l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("p",null,M?"18+":"13+"))),l.a.createElement("div",{className:"inf-item"},l.a.createElement("div",{className:"inf-item-li"}," ",l.a.createElement("h5",null,"Overview:")),l.a.createElement("div",{className:"inf-item-li"},"  ",l.a.createElement("p",null,""===m?"this movie has no overview":m))))))}function x(){return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement(b,null,l.a.createElement(i.a,{fluid:!0},l.a.createElement(m.a,null,l.a.createElement(p,null)),l.a.createElement(j.a,{exact:!0,strict:!0,path:"/movie/"},l.a.createElement(m.a,null,l.a.createElement(g,null))),l.a.createElement(j.a,{exact:!0,strict:!0,path:"/review/"},l.a.createElement(m.a,null,l.a.createElement(N,null))),l.a.createElement(j.a,{exact:!0,strict:!0,path:"/movie/search"}),l.a.createElement(j.a,{exact:!0,path:"movie/movies/:id"},l.a.createElement(m.a,null,l.a.createElement(w,null)))))))}Object(c.render)(l.a.createElement(x,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d4cf2c9d.chunk.js.map