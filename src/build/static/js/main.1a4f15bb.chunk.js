(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(18),u=n.n(a),c=(n(24),n(25),n(26),n(8)),r=n(2),l=n(0),o=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Hello to the Blog!"}),Object(l.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda sequi eligendi deleniti dolores, aliquam molestiae ipsa esse, asperiores eius deserunt dicta maiores nihil minima provident sint accusantium aliquid dolore."})]})},m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"About Us"}),Object(l.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda sequi eligendi deleniti dolores, aliquam molestiae ipsa esse, asperiores eius deserunt dicta maiores nihil minima provident sint accusantium aliquid dolore."})]})},d=n(7),p=n.n(d),b=n(10),j=n(12),h=function(e){var t=e.articleName,n=e.setArticleInfo,s=Object(i.useState)(""),a=Object(j.a)(s,2),u=a[0],c=a[1],r=Object(i.useState)(""),o=Object(j.a)(r,2),m=o[0],d=o[1],h=function(){var e=Object(b.a)(p.a.mark((function e(){var i,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:u,text:m}),headers:{"Content-type":"application/json"}});case 2:return i=e.sent,e.next=5,i.json();case 5:s=e.sent,n(s),c(""),d("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"add-comment-form",children:[Object(l.jsx)("h3",{children:"Add a comment"}),Object(l.jsxs)("label",{children:["Name:",Object(l.jsx)("input",{type:"text",value:u,onChange:function(e){return c(e.target.value)}})]}),Object(l.jsxs)("label",{children:["Comment:",Object(l.jsx)("textarea",{cols:50,rows:4,value:m,onChange:function(e){return d(e.target.value)}})]}),Object(l.jsx)("button",{onClick:h,children:"Add Comment"})]})},v=function(e){var t=e.articles;return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsxs)(c.b,{className:"article-list-item",to:"/article/".concat(e.name),children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsxs)("p",{children:[e.content[0].substring(0,150),"..."]})]},t)}))})},f=function(e){var t=e.comments;return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsx)("h4",{children:e.username}),Object(l.jsx)("p",{children:e.text})]},t)}))})},g=function(e){var t=e.articleName,n=e.upvotes,i=e.setArticleInfo,s=function(){var e=Object(b.a)(p.a.mark((function e(){var n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,i(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"upvotes-section",children:[Object(l.jsx)("button",{onClick:s,children:"Add Upvote"}),Object(l.jsxs)("p",{children:["This post has been upvoted ",n," times"]})]})},x=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}],O=function(){return Object(l.jsx)("h1",{children:"Error 404! Page not found!"})},q=function(e){var t=e.match.params.name,n=x.find((function(e){return e.name===t})),s=Object(i.useState)({upvotes:0,comments:[]}),a=Object(j.a)(s,2),u=a[0],c=a[1];if(Object(i.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var n,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:i=e.sent,c(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!n)return Object(l.jsx)(O,{});var r=x.filter((function(e){return e.name!==t}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:null===n||void 0===n?void 0:n.title}),Object(l.jsx)(g,{articleName:t,upvotes:u.upvotes,setArticleInfo:c}),null===n||void 0===n?void 0:n.content.map((function(e,t){return Object(l.jsx)("p",{children:e},t)})),u.comments&&Object(l.jsx)(f,{comments:u.comments}),Object(l.jsx)(h,{articleName:t,setArticleInfo:c}),Object(l.jsx)("h2",{children:"Other Articles:"}),Object(l.jsx)(v,{articles:r})]})},N=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Articles List:"}),Object(l.jsx)(v,{articles:x})]})},A=function(){return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/articles-list",children:"Articles"})})]})})};var y=function(){return Object(l.jsx)(c.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(A,{}),Object(l.jsx)("div",{id:"page-body",children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",component:o,exact:!0}),Object(l.jsx)(r.a,{path:"/about",component:m}),Object(l.jsx)(r.a,{path:"/article/:name",component:q}),Object(l.jsx)(r.a,{path:"/articles-list",component:N}),Object(l.jsx)(r.a,{component:O})]})})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),i(e),s(e),a(e),u(e)}))};u.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),w()}},[[34,1,2]]]);
//# sourceMappingURL=main.1a4f15bb.chunk.js.map