(this["webpackJsonpreact-18"]=this["webpackJsonpreact-18"]||[]).push([[5],{107:function(e,a,t){"use strict";t.r(a);var n=t(2),s=t(33),l=t(34),r=t(36),c=t(35),i=t(0),o=t(9),h=t(8),b=t(1),u=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,l=t.value;e.setState(Object(n.a)({},s,l))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({email:"",password:""})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"Form",children:[Object(b.jsxs)("label",{className:"Form__lable",children:["Mail",Object(b.jsx)("input",{type:"email",name:"email",value:a,onChange:this.handleChange})]}),Object(b.jsxs)("label",{className:"Form__lable",children:["Password",Object(b.jsx)("input",{type:"password",name:"password",value:t,onChange:this.handleChange})]}),Object(b.jsx)("button",{type:"submit",children:"Enter"})]})]})}}]),t}(i.Component),j={onLogin:h.a.logIn};a.default=Object(o.b)(null,j)(u)}}]);
//# sourceMappingURL=5.a305df34.chunk.js.map