(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(22)},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(3),c=n.n(s),o=n(8),u=n(9),l=n(1),i=n.n(l),m=n(4),p=n(5),d=n(10),f=n(6),h=n(11),E=n(12),g=(n(19),n(7)),v=n.n(g);function b(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",null,e.user.name),a.a.createElement("li",null,e.user.email),a.a.createElement("li",null,e.user.address.street))}function y(e){var t=e.comment;return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",null,t.name),a.a.createElement("li",null,t.email))}var w=function(e){return e.comments.map(function(e){return a.a.createElement(y,{comment:e,key:e.id})})};function j(e){var t=e.post;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Title: ",t.title),a.a.createElement("h4",null,"Body: ",t.body),a.a.createElement("h4",null,a.a.createElement(b,{user:t.user})),a.a.createElement("h4",null,a.a.createElement(w,{comments:t.commentsArray})),a.a.createElement("br",null))}var A=function(e){return e.posts.map(function(e){return a.a.createElement(j,{post:e,key:e.id})})},C="https://jsonplaceholder.typicode.com/";function F(e,t,n){return e.map(function(e){return Object(E.a)({},e,{user:t.find(function(t){return e.userId===t.id}),commentsArray:n.filter(function(t){return t.postId===e.id})})})}var O=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={loading:!1,postsWithUsersAndComment:[]},n.setQueryWithDebounce=v.a.debounce(function(e){n.findTitle(e)},1e3),n.LoadPosts=function(){return i.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.t0=n,e.next=4,i.a.awrap(n.getPostsList());case 4:e.t1=e.sent,e.t2={postsWithUsersAndComment:e.t1},e.t0.setState.call(e.t0,e.t2);case 7:case"end":return e.stop()}})},n.getPostsList=function(){var e,t,r,a,s;return i.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,i.a.awrap(Promise.all([n.getDataFromServer("posts"),n.getDataFromServer("users"),n.getDataFromServer("comments")]));case 2:return e=c.sent,t=Object(u.a)(e,3),r=t[0],a=t[1],s=t[2],c.abrupt("return",F(r,a,s));case 8:case"end":return c.stop()}})},n.getDataFromServer=function(e){var t;return i.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(fetch("".concat(C).concat(e)));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}})},n.findTitle=function(e){n.setState(function(t){return{postsWithUsersAndComment:Object(o.a)(t.postsWithUsersAndComment).filter(function(t){return(t.title+t.body).includes(e)})}})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.postsWithUsersAndComment,r=t.loading;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Dunamic list of posts"),!r&&a.a.createElement("button",{type:"button",onClick:this.LoadPosts},"Load"),r&&!n.length?"loading...":"",r&&n.length?a.a.createElement("input",{onChange:function(t){return e.setQueryWithDebounce(t.target.value)}}):"",n.length&&r?a.a.createElement(A,{posts:n}):""))}}]),t}(a.a.Component);c.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3e8f54af.chunk.js.map