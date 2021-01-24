(this["webpackJsonpWatered-Down"]=this["webpackJsonpWatered-Down"]||[]).push([[0],{58:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(10),i=n(0),r=n(25),o=n.n(r),c=(n(58),n(3)),s=n(6),l=n(4),d=n(5),u=n(26),h=n(46),j=n(49),p={background:"#B6DCFE"},b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(j.a,{style:p,children:[Object(a.jsx)("h1",{children:"Welcome to Watered Down!"}),Object(a.jsx)("p",{children:"Watered Down helps households meter their water usage. According to the EPA, the act of metering alone can reduce consumption by 20-40%. Our web-app allows users to easily print stickers to put on their water-consuming facilities like toilets, faucets, showers, and dishwashers. These stickers have a QR code which interfaces with our API to track the user's water usage whenever they are scanned. The web-app also comes with a dashboard to monitor the user's water usage visually."}),Object(a.jsx)("p",{children:"A Minnehack 2021 project by William Chan, Evan Tredal, Lynh Tran, and Nathaniel Budijono"})]})})}}]),n}(i.Component),f=n(27),x=(n(59),n(50)),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={config:{type:"bar",backgroundColor:"#fff",borderWidth:"5px",borderColor:"#CDEDFD",width:"96%",height:"90%",x:"2%",y:"3%",title:{text:"Water Usage Per Weekday by Gallons",marginTop:"7px",marginLeft:"20px",backgroundColor:"none",fontColor:"#1B263B",fontFamily:"Arial",fontSize:"20px",fontWeight:"bold",shadow:!1,textAlign:"left"},plot:{tooltip:{padding:"5px 10px",backgroundColor:"#707e94",borderRadius:"6px",fontColor:"#1B263B",fontFamily:"Arial",fontSize:"11px",shadow:!1},animation:{delay:500,effect:"ANIMATION_SLIDE_BOTTOM"},barWidth:"33px",hoverState:{visible:!1}},plotarea:{margin:"45px 20px 38px 45px"},scaleX:{values:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],guide:{visible:!1},item:{paddingTop:"2px",fontColor:"#1B263B",fontFamily:"Arial",fontSize:"15px"},itemsOverlap:!0,lineColor:"#d2dae2",maxItems:9999,offsetY:"1px",tick:{lineColor:"#d2dae2",visible:!1}},scaleY:{values:"0:10000:500",guide:{rules:[{lineWidth:"0px",rule:"%i == 0"},{alpha:.4,lineColor:"#d2dae2",lineStyle:"solid",lineWidth:"1px",rule:"%i > 0"}]},item:{paddingRight:"5px",fontColor:"#1B263B",fontFamily:"Arial",fontSize:"10px"},lineColor:"none",maxItems:11,maxTicks:4,tick:{visible:!1}},series:[{values:[1500,4650,1730,2001,5805,8905,9602,1050],styles:[{backgroundColor:"#4dbac0"},{backgroundColor:"#25a6f7"},{backgroundColor:"#ad6bae"},{backgroundColor:"#707d94"},{backgroundColor:"#f3950d"},{backgroundColor:"#e62163"},{backgroundColor:"#4e74c0"},{backgroundColor:"#9dc012"}]}]}},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(x.a,{ref:this.chart,data:this.state.config})})}}]),n}(i.Component),O=n.p+"static/media/Watered_Down_Logo.6d95c46e.png",v=n(23),w=n(13),m=n(45),y=n(28),k=n.n(y),C=n(42),A=n.p+"static/media/gallon.e4a1883c.png",W=n(37),S=n(29),B=n(51),L={"font-size":"2em"};function T(e){return D.apply(this,arguments)}function D(){return(D=Object(C.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={isLoading:!0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(C.a)(k.a.mark((function e(){var t,n,a,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("https://watered-down.zeet.app/api/user/".concat(this.props.userId));case 2:t=e.sent,n=t.reduce((function(e,t){return e+t.gallons}),0),a=t.reduce((function(e,t){return e.includes(t.application_id)?e:e.concat([t.application_id])}),[]),i=a.map((function(e){return t.reduce((function(t,n){return n.application_id==e?t+n.gallons:t}),0)})),this.setState({gallons:n,appliances:a,galPerApp:i,isLoading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.isLoading?Object(a.jsx)(B.a,{}):Object(a.jsxs)("div",{children:[Object(m.a)(Array(this.state.gallons)).map((function(e,t){return Object(a.jsx)(f.a,{src:A,fluid:!0,width:"200",height:"300"})})),Object(a.jsxs)("div",{style:L,children:[" Total Water Usage is ",this.state.gallons," Gallons "]}),Object(a.jsx)("h5",{children:" Select option below to view water usage for specific appliance: "}),Object(a.jsx)("div",{children:Object(a.jsx)(W.a,{children:this.state.appliances.map((function(t,n){return Object(a.jsxs)(S.a,{children:[Object(a.jsx)(S.a.Header,{children:Object(a.jsx)(W.a.Toggle,{as:S.a.Header,eventKey:t,children:t})}),Object(a.jsx)(W.a.Collapse,{eventKey:t,children:Object(a.jsx)(S.a.Body,{children:Object(m.a)(Array(e.state.galPerApp[n])).map((function(e,t){return Object(a.jsx)(f.a,{src:A,fluid:!0,width:"200",height:"300"})}))})})]})}))})})]})}}]),n}(i.Component),F=n(8),I=n(22),_=n(31),E=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={url:"https://watered-down.zeet.app/api/record/",id:"Evan",facility:"",gallons:""},a.handleFacilityChange=a.handleFacilityChange.bind(Object(F.a)(a)),a.handleGallonsChange=a.handleGallonsChange.bind(Object(F.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(F.a)(a)),a}return Object(s.a)(n,[{key:"handleFacilityChange",value:function(e){this.setState({facility:e.target.value})}},{key:"handleGallonsChange",value:function(e){this.setState({gallons:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.facility),e.preventDefault()}},{key:"render",value:function(){return Object(a.jsxs)(I.a,{as:"form",id:"rs",onSubmit:this.handleSubmit,children:[Object(a.jsxs)(I.a.Group,{controlId:"appliance_id",children:[Object(a.jsx)(I.a.Label,{children:"Choose a name for your appliance"}),Object(a.jsx)(I.a.Control,{type:"text",value:this.state.facility,onChange:this.handleFacilityChange,required:!0})]}),Object(a.jsxs)(I.a.Group,{controlId:"gallons_total",children:[Object(a.jsx)(I.a.Label,{children:"How many gallons in a single use?"}),Object(a.jsx)(I.a.Control,{type:"text",value:this.state.gallons,onChange:this.handleGallonsChange,required:!0})]}),Object(a.jsx)(_.a,{type:"submit",href:"http://api.qrserver.com/v1/create-qr-code/?data=".concat(this.state.url,"?user_id=").concat(this.state.id,"%26application_id=").concat(this.state.facility,"%26gallons=").concat(this.state.gallons,"&size=200x200"),children:"Get QR Code"})]})}}]),n}(i.Component),z={height:"50px",width:"215px"},N=[{path:"/",exact:!0,main:function(){return Object(a.jsx)(M,{})}},{path:"/Stats",main:function(){return Object(a.jsx)(P,{})}},{path:"/AddNew",main:function(){return Object(a.jsx)(R,{})}},{path:"/Graph",main:function(){return Object(a.jsx)(q,{})}}];function M(){return Object(a.jsx)(b,{})}function P(){return Object(a.jsx)(G,{userId:"bob"})}function R(){return Object(a.jsx)(E,{})}function q(){return Object(a.jsx)(g,{})}function H(){return document.title="Watered Down",Object(a.jsx)(v.a,{basename:"".concat("/watered-down","/"),children:Object(a.jsxs)("div",{children:[Object(a.jsxs)(h.a,{children:[Object(a.jsx)(h.a.Brand,{children:Object(a.jsx)(f.a,{src:O,style:z})}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)(u.a.Link,{children:Object(a.jsx)(v.b,{to:"/",children:"Home"})}),Object(a.jsx)(u.a.Link,{children:Object(a.jsx)(v.b,{to:"/Stats",children:"View Water Use"})}),Object(a.jsx)(u.a.Link,{children:Object(a.jsx)(v.b,{to:"/AddNew",children:"Add Appliance"})}),Object(a.jsx)(u.a.Link,{children:Object(a.jsx)(v.b,{to:"/Graph",children:"Graph"})})]})]}),Object(a.jsx)(w.c,{children:Object(a.jsx)("div",{style:{paddingTop:20},children:N.map((function(e,t){return Object(a.jsx)(w.a,{path:e.path,exact:e.exact,children:Object(a.jsx)(e.main,{})},t)}))})})]})})}n(67),n(68);var U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(H,{}),"Created for Minnehack 2021"]})}}]),n}(i.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(a.jsx)(U,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/watered-down",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/watered-down","/service-worker.js");J?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):K(e)}))}}()}},[[69,1,2]]]);
//# sourceMappingURL=main.afa01e6d.chunk.js.map