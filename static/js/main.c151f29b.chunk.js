(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],{101:function(e,n,t){},103:function(e,n,t){},223:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"userLogin",(function(){return h}));var a=t(5),c=t(0),i=t.n(c),s=t(37),o=t.n(s),l=(t(101),t(102),t(103),t(14)),u=t(56),d=t.n(u),b=t(91),j=t(92),m=t.n(j),f="user-login",h=function(e){return function(){var n=Object(b.a)(d.a.mark((function n(t){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.post("/api/login",e);case 2:n.sent,t({type:f,payload:!0});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},p=t(225),O=t(224),x=t(57),v=t.n(x),g=[{label:"Email",name:"email",type:"text"},{label:"Password",name:"password",type:"password"}],y=t(60),w=function(e){var n=e.input,t=e.label,r=e.type,c=e.meta,i=c.error,s=c.touched;return Object(a.jsxs)("div",{className:"form-field",children:[Object(a.jsx)("label",{children:t}),Object(a.jsx)("input",Object(y.a)(Object(y.a)({},n),{},{type:r})),Object(a.jsx)("div",{className:"form-validation",children:s&&i})]})},F=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,N=Object(O.a)({validate:function(e){var n={};return v.a.each(g,(function(t){var r=t.name;e[r]||(n[r]="This field is mandatory")})),0==F.test(e.email)&&(n.email="Please enter a valid email address"),n},form:"loginForm",destroyOnUnmount:!0})(Object(l.b)(null,r)((function(e){var n=e.userLogin,t=e.handleSubmit;return Object(a.jsx)("div",{className:"form-login",children:Object(a.jsxs)("form",{onSubmit:t((function(e){return n(e)})),children:[Object(a.jsx)("h3",{children:"Sign In"}),v.a.map(g,(function(e){var n=e.label,t=e.name,r=e.type;return Object(a.jsx)(p.a,{type:r,component:w,label:n,name:t},t)})),Object(a.jsxs)("div",{className:"form-checkbox",children:[Object(a.jsx)("input",{id:"remember-login",type:"checkbox",tabIndex:"0"}),Object(a.jsx)("label",{htmlFor:"remember-login",children:"Remember Me?"})]}),Object(a.jsx)("button",{className:"form-submit",type:"submit",children:"Sign In"}),Object(a.jsxs)("div",{className:"form-help",children:[Object(a.jsx)("a",{href:"#",children:"Forgot your password?"}),Object(a.jsxs)("p",{children:["Don't have an account? ",Object(a.jsx)("a",{href:"#",children:"Sign up"})]}),Object(a.jsx)("a",{href:"#",children:"Resend Email Confirmation"})]})]})})})));var S=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(N,{})})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,227)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))},k=t(6),C=t(94),L=t(226),P=Object(k.c)({loggedIn:function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return e.payload;default:return!1}},form:L.a}),A=Object(k.d)(P,{},Object(k.a)(C.a));o.a.render(Object(a.jsx)(l.a,{store:A,children:Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(S,{})})}),document.getElementById("root")),I()}},[[223,1,2]]]);
//# sourceMappingURL=main.c151f29b.chunk.js.map