(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],{101:function(e,n,t){},103:function(e,n,t){},223:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"userLogin",(function(){return h}));var c=t(5),a=t(0),i=t.n(a),o=t(37),s=t.n(o),l=(t(101),t(102),t(103),t(14)),u=t(56),b=t.n(u),j=t(91),d=t(92),m=t.n(d),f="user-login",h=function(e){return function(){var n=Object(j.a)(b.a.mark((function n(t){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.post("/api/login",e);case 2:n.sent,t({type:f,payload:!0});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},p=t(225),O=t(224),x=t(57),v=t.n(x),g=[{label:"Email",name:"email"},{label:"Password",name:"password"}],y=t(60),w=function(e){var n=e.input,t=e.label,r=e.meta,a=r.error,i=r.touched;return Object(c.jsxs)("div",{className:"form-field",children:[Object(c.jsx)("label",{children:t}),Object(c.jsx)("input",Object(y.a)(Object(y.a)({},n),{},{type:"text"})),Object(c.jsx)("div",{className:"form-validation",children:i&&a})]})},F=Object(O.a)({validate:function(e){var n={};return v.a.each(g,(function(t){var r=t.name;e[r]||(n[r]="This field is mandatory")})),n},form:"loginForm",destroyOnUnmount:!0})(Object(l.b)(null,r)((function(e){var n=e.userLogin,t=e.handleSubmit;return Object(c.jsx)("div",{className:"form-login",children:Object(c.jsxs)("form",{onSubmit:t((function(e){return n(e)})),children:[Object(c.jsx)("h3",{children:"Sign In"}),v.a.map(g,(function(e){var n=e.label,t=e.name;return Object(c.jsx)(p.a,{type:"text",component:w,label:n,name:t},t)})),Object(c.jsxs)("div",{className:"form-checkbox",children:[Object(c.jsx)("input",{id:"remember-login",type:"checkbox",tabIndex:"0"}),Object(c.jsx)("label",{htmlFor:"remember-login",children:"Remember Me?"})]}),Object(c.jsx)("button",{className:"form-submit",type:"submit",children:"Sign In"}),Object(c.jsxs)("div",{className:"form-help",children:[Object(c.jsx)("a",{href:"#",children:"Forgot your password?"}),Object(c.jsxs)("p",{children:["Don't have an account? ",Object(c.jsx)("a",{href:"#",children:"Sign up"})]}),Object(c.jsx)("a",{href:"#",children:"Resend Email Confirmation"})]})]})})})));var N=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(F,{})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,227)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))},I=t(6),k=t(94),C=t(226),L=Object(I.c)({loggedIn:function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return e.payload;default:return!1}},form:C.a}),E=Object(I.d)(L,{},Object(I.a)(k.a));s.a.render(Object(c.jsx)(l.a,{store:E,children:Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),S()}},[[223,1,2]]]);
//# sourceMappingURL=main.94aee282.chunk.js.map