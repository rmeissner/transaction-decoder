(this["webpackJsonptransaction-decoder"]=this["webpackJsonptransaction-decoder"]||[]).push([[0],{101:function(e,t,a){},121:function(e,t){},128:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(0),c=a.n(n),s=a(17),u=a.n(s),i=(a(101),a(15)),o=a.n(i),l=a(20),p=a(39),b=a(187),d=a(182),f=a(171),v=a(84),x=a(176),h=a(83),j=a.n(h),g=a(175),O=a(177),m=a(181),k=a(183),w=a(170),y=a(5),C=a(79),S=a.n(C),T=a(178),D=a(21),M=a(64),B=["Multisend","Deprecated Multisend"],E=new T.a([]),F=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&0!=t.length){e.next=2;break}return e.abrupt("return",void 0);case 2:return a=t.slice(0,10),e.next=5,S.a.get("https://www.4byte.directory/api/v1/signatures/?ordering=created_at&hex_signature="+a);case 5:if(0!=(r=e.sent).data.results.length){e.next=8;break}return e.abrupt("return",void 0);case 8:return e.abrupt("return",r.data.results.map((function(e){return e.text_signature})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var r,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(B.indexOf(t)>=0)){e.next=4;break}return e.next=3,H(t,a);case 3:return e.abrupt("return",e.sent);case 4:return r=D.e.fromString(t),n=E.decodeFunctionData(r,a),e.next=8,V(r,n);case 8:return c=e.sent,e.abrupt("return",{label:t,params:c});case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("0x8d80ff0a"!==(r=T.a.getSighash(t).toLocaleLowerCase())||1!=a.length){e.next=3;break}return e.abrupt("return",[G(a[0])]);case 3:if("0x6a761202"!==r||10!=a.length){e.next=14;break}return e.prev=4,e.next=7,_(a);case 7:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 11:e.prev=11,e.t1=e.catch(4),console.error(e.t1);case 14:return e.abrupt("return",a.map((function(e){return{value:e}})));case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,a){return e.apply(this,arguments)}}(),G=function(e){return{value:e,canCollapse:!0,signatures:B}},H=function(){var e=Object(l.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="Multisend"===e.t0?3:"Deprecated Multisend"===e.t0?6:9;break;case 3:return e.next=5,L(a);case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,N(a);case 8:return e.abrupt("return",e.sent);case 9:throw Error("Unknown function signature: "+t);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,r,n,c,s,u,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=2,r=[];case 2:if(!(a<t.length)){e.next=14;break}return n=parseInt(t.slice(a,a+=2),16),c="0x"+t.slice(a,a+=40),s=M.a.from("0x"+t.slice(a,a+=64)).toHexString(),u=2*parseInt(t.slice(a,a+=64),16),i="0x"+t.slice(a,a+=u),e.next=10,F(i);case 10:l=e.sent,r.push({value:void 0,decoded:{label:"Transaction "+(r.length+1),params:[{label:"Operation",value:n},{label:"To",value:c},{label:"Value",value:s},{label:"Data",value:i,signatures:l,canCollapse:!0}]}}),e.next=2;break;case 14:return e.abrupt("return",{label:"Multisend transactions",params:r});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,r,n,c,s,u,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=2,r=[];case 2:if(!(a<t.length)){e.next=15;break}return n=parseInt(t.slice(a,a+=64),16),c="0x"+t.slice(a+24,a+=64),s=M.a.from("0x"+t.slice(a,a+=64)).toHexString(),u=2*parseInt(t.slice(a+=64,a+=64),16),i="0x"+t.slice(a,a+=u),e.next=10,F(i);case 10:l=e.sent,a+=64-u%64,r.push({value:void 0,decoded:{label:"Transaction "+(r.length+1),params:[{label:"Operation",value:n},{label:"To",value:c},{label:"Value",value:s},{label:"Data",value:i,signatures:l,canCollapse:!0}]}}),e.next=2;break;case 15:return e.abrupt("return",{label:"Deprecated Multisend transactions",params:r});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=void 0,e.t1={label:"To",value:t[0]},e.t2={label:"Value",value:t[1]},e.t3=t[2],e.next=6,F(t[2]);case 6:return e.t4=e.sent,e.t5={label:"Data",value:e.t3,signatures:e.t4,canCollapse:!0},e.t6={label:"Operation",value:t[3]},e.t7={label:"SafeTxGas",value:t[4]},e.t8={label:"BaseGas",value:t[5]},e.t9={label:"GasPrice",value:t[6]},e.t10={label:"GasToken",value:t[7]},e.t11={label:"RefundReceiver",value:t[8]},e.t12={label:"Signatures",value:t[9]},e.t13=[e.t1,e.t2,e.t5,e.t6,e.t7,e.t8,e.t9,e.t10,e.t11,e.t12],e.t14={label:"Safe transaction",params:e.t13},e.abrupt("return",{value:e.t0,decoded:e.t14});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=a(184),J=a(172),R=a(179),U=a(186),W=Object(y.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}})(m.a),$=Object(y.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}}})(k.a),q=Object(y.a)((function(e){return{root:{flexDirection:"column"}}}))(w.a),z=Object(f.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},values:{padding:"4px 16px 4px 16px",display:"block",wordBreak:"break-all"}}})),A=function(e){var t=e.param,a=e.hideValue,c=z(),s=Object(n.useState)(!1),u=Object(p.a)(s,2),i=u[0],b=u[1],f=Object(n.useState)(void 0),v=Object(p.a)(f,2),x=v[0],h=v[1],j=Object(n.useState)(""),g=Object(p.a)(j,2),O=g[0],m=g[1],k=Object(n.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=h,e.next=4,I(a,t.value);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 8:e.prev=8,e.t2=e.catch(0),h(void 0),console.error(e.t2);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[t.value,h]),w=Object(n.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,m(a||""),e.next=4,k(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[m,k]);return Object(n.useEffect)((function(){var e=t.signatures&&t.signatures[0];m(e||""),h(t.decoded),b(!!t.canCollapse&&t.value.toString().length>100),!t.decoded&&e&&k(e)}),[t,m,k]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{children:[void 0!==t.label&&Object(r.jsx)("b",{children:t.label}),"\xa0",void 0!==t.canCollapse&&Object(r.jsx)(d.a,{onClick:function(){return b(!i)},color:"inherit",children:i?"Expand":"Collapse"})]}),void 0!==t.value&&!a&&Object(r.jsx)("span",{className:c.values,children:i?t.value.toString().slice(0,90)+"...":t.value.toString()}),t.signatures&&t.signatures.length>1&&Object(r.jsxs)(J.a,{className:c.formControl,children:[Object(r.jsx)(P.a,{children:"Signature/ Encoding"}),Object(r.jsx)(R.a,{value:O,onChange:w,children:t.signatures.map((function(e){return Object(r.jsx)(U.a,{value:e,children:e})}))})]}),x&&Object(r.jsx)(K,{decoded:x})]})},K=function(e){var t=e.decoded;return Object(r.jsxs)(W,{children:[Object(r.jsx)($,{children:t.label}),Object(r.jsx)(q,{children:t.params.map((function(e){return Object(r.jsx)(A,{param:e})}))})]})},Q=Object(f.a)((function(e){return{content:{padding:"4px"},input:{width:"100%"}}}));var X=function(){var e=Q(),t=Object(n.useState)(""),a=Object(p.a)(t,2),s=a[0],u=a[1],i=Object(n.useState)(void 0),f=Object(p.a)(i,2),h=f[0],m=f[1],k=Object(n.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(t),!(t.length<10)){e.next=4;break}return m(void 0),e.abrupt("return");case 4:return e.prev=4,e.next=7,F(t);case 7:a=e.sent,m({value:t,signatures:a}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),m(void 0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),[]),w=Object(g.a)("(prefers-color-scheme: dark)"),y=c.a.useMemo((function(){return Object(v.a)({palette:{type:w?"dark":"light",primary:j.a}})}),[w]);return Object(r.jsxs)(x.a,{theme:y,children:[Object(r.jsx)(O.a,{}),Object(r.jsxs)("div",{className:e.content,children:[Object(r.jsxs)("h1",{children:["Transaction decoder via ",Object(r.jsx)(d.a,{href:"https://www.4byte.directory",color:"inherit",target:"_blank",children:"4byte.directory"})]}),Object(r.jsx)(b.a,{placeholder:"Enter transaction data (e.g. 0x6a7612020000...)",color:"primary",className:e.input,value:s,onChange:function(e){k(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),h&&Object(r.jsx)(A,{param:h,hideValue:!0})]})]})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,189)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(X,{})}),document.getElementById("root")),Y()}},[[128,1,2]]]);
//# sourceMappingURL=main.c99d5a60.chunk.js.map