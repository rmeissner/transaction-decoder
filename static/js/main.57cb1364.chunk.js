(this["webpackJsonptransaction-decoder"]=this["webpackJsonptransaction-decoder"]||[]).push([[0],{111:function(e,t,a){},131:function(e,t){},137:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(0),c=a.n(n),s=a(17),u=a.n(s),i=a(94),o=(a(111),a(14)),l=a.n(o),p=a(20),b=a(43),d=a(196),f=a(191),v=a(180),h=a(93),j=a(185),x=a(92),g=a.n(x),O=a(184),m=a(186),k=a(190),w=a(192),y=a(179),C=a(5),S=a(88),T=a.n(S),D=a(187),E=a(24),M=a(71),B=["Multisend","Deprecated Multisend"],I=new D.a([]),F=function(){var e=Object(p.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&0!=t.length){e.next=2;break}return e.abrupt("return",void 0);case 2:return a=t.slice(0,10),e.next=5,T.a.get("https://www.4byte.directory/api/v1/signatures/?ordering=created_at&hex_signature="+a);case 5:if(0!=(r=e.sent).data.results.length){e.next=8;break}return e.abrupt("return",void 0);case 8:return e.abrupt("return",r.data.results.map((function(e){return e.text_signature})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(p.a)(l.a.mark((function e(t,a){var r,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(B.indexOf(t)>=0)){e.next=4;break}return e.next=3,H(t,a);case 3:return e.abrupt("return",e.sent);case 4:return r=E.e.fromString(t),n=I.decodeFunctionData(r,a),e.next=8,V(r,n);case 8:return c=e.sent,e.abrupt("return",{label:t,params:c});case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=function(){var e=Object(p.a)(l.a.mark((function e(t,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("0x8d80ff0a"!==(r=D.a.getSighash(t).toLocaleLowerCase())||1!=a.length){e.next=3;break}return e.abrupt("return",[G(a[0])]);case 3:if("0x6a761202"!==r||10!=a.length){e.next=14;break}return e.prev=4,e.next=7,_(a);case 7:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 11:e.prev=11,e.t1=e.catch(4),console.error(e.t1);case 14:return e.abrupt("return",a.map((function(e){return{value:e}})));case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,a){return e.apply(this,arguments)}}(),G=function(e){return{value:e,canCollapse:!0,signatures:B}},H=function(){var e=Object(p.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="Multisend"===e.t0?3:"Deprecated Multisend"===e.t0?6:9;break;case 3:return e.next=5,N(a);case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,P(a);case 8:return e.abrupt("return",e.sent);case 9:throw Error("Unknown function signature: "+t);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(l.a.mark((function e(t){var a,r,n,c,s,u,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=2,r=[];case 2:if(!(a<t.length)){e.next=14;break}return n=parseInt(t.slice(a,a+=2),16),c="0x"+t.slice(a,a+=40),s=M.a.from("0x"+t.slice(a,a+=64)).toHexString(),u=2*parseInt(t.slice(a,a+=64),16),i="0x"+t.slice(a,a+=u),e.next=10,F(i);case 10:o=e.sent,r.push({value:void 0,decoded:{label:"Transaction "+(r.length+1),params:[{label:"Operation",value:n},{label:"To",value:c},{label:"Value",value:s},{label:"Data",value:i,signatures:o,canCollapse:!0}]}}),e.next=2;break;case 14:return e.abrupt("return",{label:"Multisend transactions",params:r});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(l.a.mark((function e(t){var a,r,n,c,s,u,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=2,r=[];case 2:if(!(a<t.length)){e.next=15;break}return n=parseInt(t.slice(a,a+=64),16),c="0x"+t.slice(a+24,a+=64),s=M.a.from("0x"+t.slice(a,a+=64)).toHexString(),u=2*parseInt(t.slice(a+=64,a+=64),16),i="0x"+t.slice(a,a+=u),e.next=10,F(i);case 10:o=e.sent,a+=64-u%64,r.push({value:void 0,decoded:{label:"Transaction "+(r.length+1),params:[{label:"Operation",value:n},{label:"To",value:c},{label:"Value",value:s},{label:"Data",value:i,signatures:o,canCollapse:!0}]}}),e.next=2;break;case 15:return e.abrupt("return",{label:"Deprecated Multisend transactions",params:r});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=void 0,e.t1={label:"To",value:t[0]},e.t2={label:"Value",value:t[1]},e.t3=t[2],e.next=6,F(t[2]);case 6:return e.t4=e.sent,e.t5={label:"Data",value:e.t3,signatures:e.t4,canCollapse:!0},e.t6={label:"Operation",value:t[3]},e.t7={label:"SafeTxGas",value:t[4]},e.t8={label:"BaseGas",value:t[5]},e.t9={label:"GasPrice",value:t[6]},e.t10={label:"GasToken",value:t[7]},e.t11={label:"RefundReceiver",value:t[8]},e.t12={label:"Signatures",value:t[9]},e.t13=[e.t1,e.t2,e.t5,e.t6,e.t7,e.t8,e.t9,e.t10,e.t11,e.t12],e.t14={label:"Safe transaction",params:e.t13},e.abrupt("return",{value:e.t0,decoded:e.t14});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=a(193),J=a(181),U=a(188),W=a(195),$=Object(C.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}})(k.a),q=Object(C.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}}})(w.a),z=Object(C.a)((function(e){return{root:{flexDirection:"column"}}}))(y.a),A=Object(v.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},values:{padding:"4px 16px 4px 16px",display:"block",wordBreak:"break-all"}}})),K=function(e){var t=e.param,a=e.hideValue,c=A(),s=Object(n.useState)(!1),u=Object(b.a)(s,2),i=u[0],o=u[1],d=Object(n.useState)(void 0),v=Object(b.a)(d,2),h=v[0],j=v[1],x=Object(n.useState)(""),g=Object(b.a)(x,2),O=g[0],m=g[1],k=Object(n.useCallback)(function(){var e=Object(p.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=j,e.next=4,L(a,t.value);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 8:e.prev=8,e.t2=e.catch(0),j(void 0),console.error(e.t2);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[t.value,j]),w=Object(n.useCallback)(function(){var e=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,m(a||""),e.next=4,k(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[m,k]);return Object(n.useEffect)((function(){var e=t.signatures&&t.signatures[0];m(e||""),j(t.decoded),o(!!t.canCollapse&&t.value.toString().length>100),!t.decoded&&e&&k(e)}),[t,m,k]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{children:[void 0!==t.label&&Object(r.jsx)("b",{children:t.label}),"\xa0",void 0!==t.canCollapse&&Object(r.jsx)(f.a,{onClick:function(){return o(!i)},color:"inherit",children:i?"Expand":"Collapse"})]}),void 0!==t.value&&!a&&Object(r.jsx)("span",{className:c.values,children:i?t.value.toString().slice(0,90)+"...":t.value.toString()}),t.signatures&&t.signatures.length>1&&Object(r.jsxs)(J.a,{className:c.formControl,children:[Object(r.jsx)(R.a,{children:"Signature/ Encoding"}),Object(r.jsx)(U.a,{value:O,onChange:w,children:t.signatures.map((function(e){return Object(r.jsx)(W.a,{value:e,children:e})}))})]}),h&&Object(r.jsx)(Q,{decoded:h})]})},Q=function(e){var t=e.decoded;return Object(r.jsxs)($,{children:[Object(r.jsx)(q,{children:t.label}),Object(r.jsx)(z,{children:t.params.map((function(e){return Object(r.jsx)(K,{param:e})}))})]})},X=a(18),Y=Object(v.a)((function(e){return{content:{padding:"4px"},input:{width:"100%"}}}));var Z=function(){var e=Object(X.d)(),t=new URLSearchParams(Object(X.e)().search),a=Y(),s=t.get("data"),u=Object(n.useState)(s),i=Object(b.a)(u,2),o=i[0],v=i[1],x=Object(n.useState)(void 0),k=Object(b.a)(x,2),w=k[0],y=k[1],C=Object(n.useCallback)(function(){var e=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("loadDataInfo",t),!(t.length<10)){e.next=4;break}return y(void 0),e.abrupt("return");case 4:return e.prev=4,e.next=7,F(t);case 7:a=e.sent,y({value:t,signatures:a}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),y(void 0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),[y]);Object(n.useEffect)((function(){console.log("Effect",s),s&&C(s)}),[s]);var S=Object(n.useCallback)(function(){var t=Object(p.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(a),e.replace({pathname:"/",search:"?data="+a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]),T=Object(O.a)("(prefers-color-scheme: dark)"),D=c.a.useMemo((function(){return Object(h.a)({palette:{type:T?"dark":"light",primary:g.a}})}),[T]);return Object(r.jsxs)(j.a,{theme:D,children:[Object(r.jsx)(m.a,{}),Object(r.jsxs)("div",{className:a.content,children:[Object(r.jsxs)("h1",{children:["Transaction decoder via ",Object(r.jsx)(f.a,{href:"https://www.4byte.directory",color:"inherit",target:"_blank",children:"4byte.directory"})]}),Object(r.jsx)(d.a,{placeholder:"Enter transaction data (e.g. 0x6a7612020000...)",color:"primary",className:a.input,value:o,onChange:function(e){S(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),w&&Object(r.jsx)(K,{param:w,hideValue:!0})]})]})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,198)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i.a,{children:Object(r.jsx)(Z,{})})}),document.getElementById("root")),ee()}},[[137,1,2]]]);
//# sourceMappingURL=main.57cb1364.chunk.js.map