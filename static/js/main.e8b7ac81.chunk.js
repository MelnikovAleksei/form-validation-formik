(this["webpackJsonpform-validation-formik"]=this["webpackJsonpform-validation-formik"]||[]).push([[0],{60:function(e,t,r){"use strict";r.r(t);var c=r(12),a=r(40),l=r(41),n=r(1),i=(r(0),r(56)),b=r.n(i),o=r(24),j=r(17),s=(r(69),function(e){var t=e.label,r=Object(l.a)(e,["label"]),i=Object(o.c)(r),b=Object(a.a)(i,2),j=b[0],s=b[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{htmlFor:r.id||r.name,children:t}),Object(n.jsx)("input",Object(c.a)(Object(c.a)({},j),r)),s.touched&&s.error?Object(n.jsx)("div",{children:s.error}):null]})}),u=function(e){var t=e.label,r=Object(l.a)(e,["label"]),i=Object(o.c)(r),b=Object(a.a)(i,2),j=b[0],s=b[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{htmlFor:r.id||r.name,children:t}),Object(n.jsx)("textarea",Object(c.a)(Object(c.a)({},j),r)),s.touched&&s.error?Object(n.jsx)("div",{children:s.error}):null]})},d=function(e){var t=e.children,r=Object(l.a)(e,["children"]),i=Object(o.c)(Object(c.a)(Object(c.a)({},r),{},{type:"checkbox"})),b=Object(a.a)(i,2),j=b[0],s=b[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{children:[Object(n.jsx)("input",Object(c.a)(Object(c.a)({type:"checkbox"},j),r)),t]}),s.touched&&s.error?Object(n.jsx)("div",{children:s.error}):null]})},m=function(e){var t=e.label,r=Object(l.a)(e,["label"]),i=Object(o.c)(r),b=Object(a.a)(i,2),j=b[0],s=b[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{htmlFor:r.id||r.name,children:t}),Object(n.jsx)("select",Object(c.a)(Object(c.a)({},j),r)),s.touched&&s.error?Object(n.jsx)("div",{children:s.error}):null]})},O=function(){return Object(n.jsx)(o.b,{initialValues:{firstName:"",lastName:"",email:"",url:"",text:"",color:"",acceptedTerms:!1},validationSchema:j.b({firstName:j.c().min(1,"Must be 1 character or more").max(20,"Must be 20 characters or less").required("Required"),lastName:j.c().min(1,"Must be 1 character or more").max(20,"Must be 20 characters or less").required("Required"),email:j.c().email("Invalid email").required("Required"),url:j.c().url("Invalid url").required("Required"),text:j.c().min(2,"Must be 2 character or more").required("Required"),color:j.c().oneOf(["red","blue","green"],"Invalid color").required("Required"),acceptedTerms:j.a().required("Required").oneOf([!0],"You must accept the terms and conditions.")}),onSubmit:function(e,t){var r=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),r(!1)}),400)},onReset:function(){setTimeout((function(){alert("Reset")}),400)},children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(s,{label:"First Name",name:"firstName",type:"text",placeholder:"Ivan"}),Object(n.jsx)(s,{label:"Last Name",name:"lastName",type:"text",placeholder:"Ivanov"}),Object(n.jsx)(s,{label:"Email",name:"email",type:"email",placeholder:"ivan.ivanov@domain.abc"}),Object(n.jsx)(s,{label:"URL",name:"url",type:"url",placeholder:"https://example.domain"}),Object(n.jsx)(u,{label:"Text",name:"text",placeholder:"Your text here"}),Object(n.jsx)(d,{name:"acceptedTerms",children:"I accept the terms and conditions"}),Object(n.jsxs)(m,{label:"Your color",name:"color",children:[Object(n.jsx)("option",{value:""}),Object(n.jsx)("option",{value:"red",children:"Red"}),Object(n.jsx)("option",{value:"green",children:"Green"}),Object(n.jsx)("option",{value:"blue",children:"Blue"})]}),Object(n.jsx)("button",{type:"submit",disabled:o.b.isSubmitting,children:"Submit"}),Object(n.jsx)("button",{type:"reset",children:"Reset"})]})})};function h(){return Object(n.jsx)(O,{})}var x=document.getElementById("root");b.a.render(Object(n.jsx)(h,{}),x)},69:function(e,t,r){}},[[60,1,2]]]);
//# sourceMappingURL=main.e8b7ac81.chunk.js.map