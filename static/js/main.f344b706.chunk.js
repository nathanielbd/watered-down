(this["webpackJsonpWatered-Down"]=this["webpackJsonpWatered-Down"]||[]).push([[0],{49:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var r=t(3),c=t(0),a=t(20),i=t.n(a),o=(t(49),t(15)),s=t(16),u=t(19),d=t(17),l=t(21),j=t(38),h=t(40),p=t(24),f={background:"#B6DCFE"},b=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=n.call.apply(n,[this].concat(c))).state={},e}return Object(s.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(h.a,{style:f,children:[Object(r.jsx)("h1",{children:"Welcome to Watered Down!"}),Object(r.jsx)("p",{children:"Description."}),Object(r.jsx)("p",{children:Object(r.jsx)(p.a,{children:"Learn More"})})]})})}}]),t}(c.Component),O=t(42),x=t(6),w=t(37),v=t(22),g=t.n(v),m=t(33),k=t(34),y=t.p+"static/media/gallon.e4a1883c.png",W=t(29),A=t(23),L=t(41),C={background:"#B6DCFE"},D={"font-size":"2em"};function B(e){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(g.a.mark((function e(n){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).state={isLoading:!0},r}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(g.a.mark((function e(){var n,t,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("https://watered-down.zeet.app/api/user/".concat(this.props.userId));case 2:n=e.sent,t=n.reduce((function(e,n){return e+n.gallons}),0),r=n.reduce((function(e,n){return e.includes(n.application_id)?e:e.concat([n.application_id])}),[]),c=r.map((function(e){return n.reduce((function(n,t){return t.application_id==e?n+t.gallons:n}),0)})),this.setState({gallons:t,appliances:r,galPerApp:c,isLoading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.isLoading?Object(r.jsx)(L.a,{}):Object(r.jsxs)("div",{children:[Object(w.a)(Array(this.state.gallons)).map((function(e,n){return Object(r.jsx)(k.a,{src:y,fluid:!0,width:"200",height:"300"})})),Object(r.jsxs)("div",{style:D,children:[" Total Water Usage is ",this.state.gallons," Gallons "]}),Object(r.jsx)("h5",{children:" Select option below to view water usage for specific appliance: "}),Object(r.jsx)("div",{children:Object(r.jsx)(W.a,{children:this.state.appliances.map((function(n,t){return Object(r.jsxs)(A.a,{children:[Object(r.jsx)(A.a.Header,{children:Object(r.jsx)(W.a.Toggle,{as:A.a.Header,eventKey:n,children:n})}),Object(r.jsx)(W.a.Collapse,{eventKey:n,children:Object(r.jsx)(A.a.Body,{children:Object(w.a)(Array(e.state.galPerApp[t])).map((function(e,n){return Object(r.jsx)(k.a,{src:y,fluid:!0,width:"200",height:"300"})}))})})]})}))})}),Object(r.jsx)(p.a,{href:"".concat("/watered-down","/2"),style:C,children:"Add Appliance"})]})}}]),t}(c.Component),H=[{path:"/",exact:!0,main:function(){return Object(r.jsx)(I,{})}},{path:"/1",main:function(){return Object(r.jsx)(T,{})}},{path:"/2",main:function(){return Object(r.jsx)(U,{})}},{path:"/3",main:function(){return Object(r.jsx)(_,{})}}];function I(){return Object(r.jsx)(b,{})}function T(){return Object(r.jsx)(M,{userId:"bob"})}function U(){return Object(r.jsx)("h2",{children:" second page "})}function _(){return Object(r.jsx)("h2",{children:" third page "})}function z(){return document.title="Watered Down",Object(r.jsx)(O.a,{basename:"".concat("/watered-down","/"),children:Object(r.jsxs)("div",{children:[Object(r.jsxs)(j.a,{children:[Object(r.jsx)(j.a.Brand,{children:"Watered Down"}),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(l.a.Link,{href:"/",children:"Home"}),Object(r.jsx)(l.a.Link,{href:"/1",children:"View Water Use"}),Object(r.jsx)(l.a.Link,{href:"/2",children:"Add Appliance"}),Object(r.jsx)(l.a.Link,{href:"/3",children:"Meet the Creators"})]})]}),Object(r.jsx)(x.c,{children:Object(r.jsx)("div",{style:{paddingTop:20},children:H.map((function(e,n){return Object(r.jsx)(x.a,{path:e.path,exact:e.exact,children:Object(r.jsx)(e.main,{})},n)}))})})]})})}t(59),t(60);var F=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(e){return Object(o.a)(this,t),n.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(z,{}),"Created for Minnehack 2021"]})}}]),t}(c.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(r.jsx)(F,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/watered-down",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/watered-down","/service-worker.js");J?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):K(e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.f344b706.chunk.js.map