(this.webpackJsonpit_resource=this.webpackJsonpit_resource||[]).push([[1],{16:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={baseParticipants:function(t){return t.participants},isUserAuth:function(t){return t.participants.isUserAuth},currentUser:function(t){return t.participants.currentUser},participants:function(t){return t.participants.participants},participantsIds:function(t){return Object.keys(t.participants.participants)},loading:function(t){return t.participants.loading}}},22:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return T}));var n=a(24),r=a(46),c=a(11),i=a(26),s=a(42),o=a(4),u=a(9);function p(t){var e=t.getFullYear(),a=t.getMonth()+1,n=a<=9?"0"+a:a,r=t.getDate(),c=r<=9?"0"+r:r;return"".concat(e,"-").concat(n,"-").concat(c)}var l={userId:null,FIO:"",birthday:new Date,date:p(new Date),email:"",phone:"",distance:3,payment:100,password:""},b={currentUser:l,participants:{},loading:!1,isUserAuth:!1,error:{isError:!1,message:""}},j=Object(n.b)({participants:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.payload;switch(a){case u.a.SET_PARTICIPANTS_DATA_TYPE:return Array.isArray(n.participants)&&n.participants.length>0?Object(o.a)(Object(o.a)({},t),{},{participants:Object(o.a)(Object(o.a)({},t.participants),Object.assign({},Object(s.a)(n.participants)))}):t;case u.a.PUSH_NEW_PARTICIPANT_TYPE:return Object(o.a)(Object(o.a)({},t),{},{participants:Object(o.a)(Object(o.a)({},t.participants),{},Object(i.a)({},Object.keys(t.participants).length,Object(o.a)(Object(o.a)({},n.participant),{},{date:p(new Date)})))});case u.a.SET_CURRENT_USER_TYPE:return Object(o.a)(Object(o.a)({},t),{},{currentUser:Object(o.a)(Object(o.a)({},n.user),{},{userId:Object.keys(t.participants).length-1}),isUserAuth:!0});case u.a.UPDATE_CURRENT_PARTICIPANT_TYPE:return null!==t.currentUser.userId?Object(o.a)(Object(o.a)({},t),{},{participants:Object(o.a)(Object(o.a)({},t.participants),{},Object(i.a)({},t.currentUser.userId,Object(o.a)(Object(o.a)({},t.participants[t.currentUser.userId]),n.user)))}):t;case u.a.LOGOUT_USER_TYPE:return Object(o.a)(Object(o.a)({},t),{},{currentUser:Object(o.a)({},l),isUserAuth:!1});case u.a.SET_LOADING_TYPE:return Object(o.a)(Object(o.a)({},t),{},{loading:n.loading});default:return t}}}),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n.c,d=Object(n.d)(j,O(Object(n.a)(r.a)));function T(){var t=Object(c.b)();return function(e){return t(e)}}window.store=d},23:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(9),r={setParticipantsDataAC:function(t){return{type:n.a.SET_PARTICIPANTS_DATA_TYPE,payload:{participants:t}}},pushNewParticipantAC:function(t){return{type:n.a.PUSH_NEW_PARTICIPANT_TYPE,payload:{participant:t}}},setCurrentUserAC:function(t){return{type:n.a.SET_CURRENT_USER_TYPE,payload:{user:t}}},updateCurrentParticipantAC:function(t){return{type:n.a.UPDATE_CURRENT_PARTICIPANT_TYPE,payload:{user:t}}},logoutUserAC:function(){return{type:n.a.LOGOUT_USER_TYPE}},setLoadingAC:function(t){return{type:n.a.SET_LOADING_TYPE,payload:{loading:t}}}}},44:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a(0);var n=a(67),r=a(68),c=a(2),i=function(){return Object(c.jsx)(n.a,{children:Object(c.jsx)(r.a,{animation:"border",variant:"primary"})})}},60:function(t,e,a){},66:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),s=a(11),o=a(13);a(60),a(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u,p=a(22),l=a(7),b=a(67),j=a(38),O=a.n(j),d=a(47),T=a(20),h=a(28),f=a(23),P=[{FIO:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u044b\u0447",birthday:"1967-7-28",date:"1997-05-08",email:"fake@mail.com",phone:"79222222222",distance:3,payment:100,agreement:!0,password:"asdfg"},{FIO:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041f\u0435\u0442\u0440 \u0418\u0432\u0430\u043d\u044b\u0447",birthday:"1986-5-27",date:"1992-05-08",email:"fake@mail.com",phone:"79222222222",distance:5,payment:200,agreement:!1},{FIO:"\u0421\u0438\u0434\u043e\u0440\u043e\u0432 \u0410\u043b\u0435\u043a\u0441\u0435\u0439 \u0418\u0432\u0430\u043d\u044b\u0447",birthday:"1981-6-27",date:"1912-05-08",email:"fake@mail.com",phone:"79222222222",distance:10,payment:300,agreement:!1},{FIO:"\u041f\u0435\u0442\u0440\u043e\u0432\u0430 \u0418\u0440\u0438\u043d\u0430 \u0418\u0432\u0430\u043d\u043e\u0432\u043d\u0430",birthday:"1986-5-27",date:"2000-05-08",email:"fake@mail.com",phone:"79222222222",distance:5,payment:200,agreement:!1},{FIO:"\u0421\u0438\u0434\u043e\u0440\u043e\u0432\u0430 \u0422\u0430\u0442\u044c\u044f\u043d\u0430 \u0418\u0432\u0430\u043d\u043e\u0432\u043d\u0430",birthday:"1981-6-27",date:"2002-05-08",email:"fake@mail.com",phone:"79222222222",distance:10,payment:300,agreement:!1}],_=function t(){Object(T.a)(this,t),this.returnPromiseWithData=function(t,e){return new Promise((function(a,n){setTimeout((function(){Math.random()>1?n(new Error("\u041f\u043e\u0445\u043e\u0436\u0435, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :(")):(console.log("\u041e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: \u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b"),a(t))}),e)}))}},m=function(){function t(){Object(T.a)(this,t)}return Object(h.a)(t,null,[{key:"getParticipants",value:function(){var t=new _,e={code:200,status:"OK",data:{participants:P}};return t.returnPromiseWithData(e,1e3)}}]),t}(),E=function(){function t(){Object(T.a)(this,t)}return Object(h.a)(t,null,[{key:"fetchParticipants",value:function(){return function(){var t=Object(d.a)(O.a.mark((function t(e){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(f.a.setLoadingAC(!0)),t.prev=1,t.next=4,m.getParticipants();case 4:200===(a=t.sent).code&&(console.log("\u041e\u0442\u0432\u0435\u0442 \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430: \u0414\u0430\u043d\u043d\u044b\u0435 \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u044b"),e(f.a.setParticipantsDataAC(a.data.participants))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),new Error("\u041f\u043e\u0445\u043e\u0436\u0435, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(t.t0));case 11:return t.prev=11,e(f.a.setLoadingAC(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()}}]),t}(),A=a(16),g=a(2),U=[{link:"/",title:"Home",exact:!0,component:(u=r.a.lazy((function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,376))})),function(t){return Object(s.c)(A.a.baseParticipants).isUserAuth?Object(g.jsx)(l.a,{to:{pathname:"/profile",state:{from:t.location}}}):Object(g.jsx)(u,{})})},{link:"/participants",title:"Participants",exact:!1,component:r.a.lazy((function(){return Promise.all([a.e(7),a.e(4)]).then(a.bind(null,377))}))},{link:"/profile",title:"Profile",exact:!1,component:function(t){return function(e){return Object(s.c)(A.a.baseParticipants).isUserAuth?Object(g.jsx)(t,{}):Object(g.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}})}}(r.a.lazy((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,378))})))}],I=a(4),x=a(44);var y=a(71),v=a(72),R=a(70),N=a.p+"static/media/logo.b2e5a01e.svg",C=function(){var t=Object(s.c)(A.a.baseParticipants),e=t.isUserAuth,a=t.currentUser,n=Object(p.b)(),r=Object(l.g)();return Object(g.jsx)("header",{className:"header",children:Object(g.jsx)(y.a,{bg:"light",expand:"lg",children:Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(o.b,{className:"navbar-brand",to:"/",children:[Object(g.jsx)("img",{alt:"IT-Resource",src:N,width:"30",height:"30",className:"d-inline-block align-top"})," ","IT-Resource"]}),Object(g.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(y.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsxs)(v.a,{className:"me-auto",children:[Object(g.jsx)(o.b,{className:"nav-link",to:"/participants",children:"Participants"}),e&&Object(g.jsx)(o.b,{className:"nav-link",to:"/profile",children:"Profile"})]}),e&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(y.a.Text,{style:{marginRight:24},children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",a.FIO,"!"]}),Object(g.jsx)(R.a,{onClick:function(){n(f.a.logoutUserAC()),r.push("/")},variant:"outline-secondary",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})})})},S=function(){var t=Object(s.c)(A.a.participants),e=Object(p.b)();return Object(n.useEffect)((function(){0===Object.keys(t).length&&e(E.fetchParticipants())}),[e,t]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C,{}),Object(g.jsx)("main",{children:Object(g.jsxs)(l.d,{children:[U.map((function(t){return Object(g.jsx)(l.b,{exact:t.exact,path:t.link,component:(e=t.component,function(t){return Object(g.jsx)(r.a.Suspense,{fallback:Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(x.a,{})}),children:Object(g.jsx)(e,Object(I.a)({},t))})})},t.title);var e})),Object(g.jsx)(l.b,{component:function(){return Object(g.jsx)(b.a,{children:"404! Not Found!"})}})]})})]})};i.a.render(Object(g.jsx)(s.a,{store:p.a,children:Object(g.jsx)(o.a,{children:Object(g.jsx)(S,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n;!function(t){t[t.SET_PARTICIPANTS_DATA_TYPE=0]="SET_PARTICIPANTS_DATA_TYPE",t[t.PUSH_NEW_PARTICIPANT_TYPE=1]="PUSH_NEW_PARTICIPANT_TYPE",t[t.SET_CURRENT_USER_TYPE=2]="SET_CURRENT_USER_TYPE",t[t.UPDATE_CURRENT_PARTICIPANT_TYPE=3]="UPDATE_CURRENT_PARTICIPANT_TYPE",t[t.LOGOUT_USER_TYPE=4]="LOGOUT_USER_TYPE",t[t.SET_LOADING_TYPE=5]="SET_LOADING_TYPE"}(n||(n={}))}},[[66,2,6]]]);
//# sourceMappingURL=main.ad65eeef.chunk.js.map