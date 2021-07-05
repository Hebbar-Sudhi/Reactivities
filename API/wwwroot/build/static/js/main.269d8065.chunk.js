(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{201:function(e,t,c){},202:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(41),a=c.n(n),r=c(214),s=c(217),o=c(223),j=c(13),l=c(3);var d=function(){return Object(l.jsx)(s.a,{inverted:!0,fixed:"top",secondary:!0,children:Object(l.jsxs)(r.a,{children:[Object(l.jsxs)(s.a.Item,{as:j.c,to:"/",exact:!0,header:!0,children:[Object(l.jsx)("img",{src:"/assests/logo.png",alt:"logo",style:{marginRight:"10px"}}),"Reactivities"]}),Object(l.jsx)(s.a.Item,{as:j.c,to:"/activities",name:"Activities"}),Object(l.jsx)(s.a.Item,{children:Object(l.jsx)(o.a,{as:j.c,to:"/createActivity",style:{background:"#B4DBC0"},content:"Create Activity"})})]})})},b=c(18),u=c(227),h=c(221),O=c(215);function x(e){var t=e.inverted,c=void 0===t||t,i=e.content,n=void 0===i?"Loading...":i;return Object(l.jsx)(h.a,{active:!0,inverted:c,children:Object(l.jsx)(O.a,{content:n})})}var v=c(150),g=c(26),p=c.n(g),f=c(57),y=c(147),m=c(148),A=c(10),w=c(63),C=c.n(w);C.a.defaults.baseURL="/api",C.a.interceptors.response.use(function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,e.next=4;break;case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.next=12,Promise.reject(e.t0);case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}());var k=function(e){return e.data},F=function(e){return C.a.get(e).then(k)},B=function(e,t){return C.a.post(e,t).then(k)},E=function(e,t){return C.a.put(e,t).then(k)},I=function(e){return C.a.delete(e).then(k)},L={Activities:{list:function(){return F("/activities")},details:function(e){return F("/activities/".concat(e))},create:function(e){return B("/activities",e)},update:function(e){return E("/activities/".concat(e.id),e)},delete:function(e){return I("/activities/".concat(e))}}},R=c(222),T={activityStore:new(function(){function e(){var t=this;Object(y.a)(this,e),this.activityRegister=new Map,this.selectedActivity=void 0,this.editMode=!1,this.loading=!1,this.initialLoading=!0,this.loadActivities=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.initialLoading=!0,e.prev=1,e.next=4,L.Activities.list();case 4:e.sent.forEach((function(e){t.setActivity(e)})),t.setInitialLoading(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t.setInitialLoading(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),this.loadActivity=function(){var e=Object(f.a)(p.a.mark((function e(c){var i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=t.getActivity(c))){e.next=6;break}return t.selectedActivity=i,e.abrupt("return",i);case 6:return t.setInitialLoading(!0),e.prev=7,e.next=10,L.Activities.details(c);case 10:return i=e.sent,t.setActivity(i),Object(A.g)((function(){t.selectedActivity=i})),t.setInitialLoading(!1),e.abrupt("return",i);case 17:e.prev=17,e.t0=e.catch(7),console.log(e.t0),t.setInitialLoading(!1);case 21:case"end":return e.stop()}}),e,null,[[7,17]])})));return function(t){return e.apply(this,arguments)}}(),this.getActivity=function(e){return t.activityRegister.get(e)},this.setActivity=function(e){e.date=e.date.split("T")[0],t.activityRegister.set(e.id,e)},this.setInitialLoading=function(e){t.initialLoading=e},this.createActivity=function(){var e=Object(f.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,c.id=Object(R.a)(),e.prev=2,e.next=5,L.Activities.create(c);case 5:Object(A.g)((function(){t.activityRegister.set(c.id,c),t.selectedActivity=c,t.editMode=!1,t.loading=!1})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0),Object(A.g)((function(){t.loading=!1}));case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),this.updateActivity=function(){var e=Object(f.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,L.Activities.update(c);case 4:Object(A.g)((function(){t.activityRegister.set(c.id,c),t.loading=!1,t.editMode=!1})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),Object(A.g)((function(){t.loading=!1}));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),this.deleteActivity=function(){var e=Object(f.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,L.Activities.delete(c);case 4:Object(A.g)((function(){t.activityRegister.delete(c),t.loading=!1})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),Object(A.g)((function(){t.loading=!1}));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),Object(A.d)(this)}return Object(m.a)(e,[{key:"activitiesByDate",get:function(){return Array.from(this.activityRegister.values()).sort((function(e,t){return Date.parse(e.date)-Date.parse(t.date)}))}},{key:"groupedActivities",get:function(){return Object.entries(this.activitiesByDate.reduce((function(e,t){var c=t.date;return e[c]=e[c]?[].concat(Object(v.a)(e[c]),[t]):[t],e}),{}))}}]),e}())},z=Object(i.createContext)(T);function D(){return Object(i.useContext)(z)}var H=c(149),S=c(225);function M(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(s.a,{vertical:!0,size:"large",style:{width:"100%",marginTop:27},children:[Object(l.jsx)(S.a,{icon:"filter",attached:!0,content:"Filters",style:{color:"#E14658"}}),Object(l.jsx)(s.a.Item,{content:"All Activities"}),Object(l.jsx)(s.a.Item,{content:"I'm going"}),Object(l.jsx)(s.a.Item,{content:"I'm hosting"})]}),Object(l.jsx)(S.a,{}),Object(l.jsx)(H.a,{})]})}var G=c(111),P=c(226),J=c(219),V=c(54);var N=function(e){var t=e.activity;return Object(l.jsxs)(P.a.Group,{children:[Object(l.jsx)(P.a,{children:Object(l.jsx)(J.a.Group,{children:Object(l.jsxs)(J.a,{children:[Object(l.jsx)(J.a.Image,{size:"tiny",circular:!0,src:"/assests/user.png"}),Object(l.jsxs)(J.a.Content,{children:[Object(l.jsx)(J.a.Header,{as:j.b,to:"/activities/".concat(t.id),children:t.title}),Object(l.jsx)(J.a.Description,{children:"Hosted by Hebbar"})]})]})})}),Object(l.jsx)(P.a,{children:Object(l.jsxs)("span",{children:[Object(l.jsx)(V.a,{name:"calendar alternate outline"})," ",t.date,Object(l.jsx)(V.a,{name:"map marker alternate"})," ",t.venue]})}),Object(l.jsx)(P.a,{secondary:!0,children:"Attendees go here..."}),Object(l.jsxs)(P.a,{clearing:!0,children:[Object(l.jsxs)("span",{children:[" ",t.description," "]}),Object(l.jsx)(o.a,{as:j.b,to:"/activities/".concat(t.id),style:{background:"#416A59",color:"white"},floated:"right",content:"View"})]})]})},U=Object(b.a)((function(){var e=D().activityStore.groupedActivities;return Object(l.jsx)(l.Fragment,{children:e.map((function(e){var t=Object(G.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)(i.Fragment,{children:[Object(l.jsx)(S.a,{sub:!0,style:{color:"#AF473C"},children:c}),n.map((function(e){return Object(l.jsx)(N,{activity:e},e.id)}))]},c)}))})}));var W=Object(b.a)((function(){var e=D().activityStore,t=e.loadActivities,c=e.activityRegister;return Object(i.useEffect)((function(){c.size<=1&&t()}),[c.size,t]),e.initialLoading?Object(l.jsx)(x,{content:"Loading Activities..."}):Object(l.jsxs)(u.a,{children:[Object(l.jsx)(u.a.Column,{width:"10",children:Object(l.jsx)(U,{})}),Object(l.jsx)(u.a.Column,{width:"6",children:Object(l.jsx)(M,{})})]})})),q=c(151);function K(){return Object(l.jsx)(P.a,{inverted:!0,textAlign:"center",vertical:!0,className:"masthead",children:Object(l.jsxs)(r.a,{text:!0,children:[Object(l.jsxs)(S.a,{as:"h1",inverted:!0,children:[Object(l.jsx)(q.a,{size:"massive",src:"/assests/logo.png",alt:"logo",style:{marginBottom:12}}),"Reactivities"]}),Object(l.jsx)(S.a,{as:"h2",inverted:!0,content:"Welcome to Reactivities"}),Object(l.jsx)(o.a,{as:j.b,to:"/activities",size:"huge",inverted:!0,children:"Take to me the Activities!"})]})})}var Q=c(11),X=c(109),Y=c(88),Z=c(216),$=Object(b.a)((function(){var e=Object(Q.e)(),t=D().activityStore,c=t.createActivity,n=t.updateActivity,a=t.loading,r=t.loadActivity,s=t.initialLoading,d=Object(Q.g)().id,b=Object(i.useState)({id:"",title:"",category:"",description:"",date:"",city:"",venue:""}),u=Object(G.a)(b,2),h=u[0],O=u[1];function v(e){var t=e.target,c=t.name,i=t.value;O(Object(Y.a)(Object(Y.a)({},h),{},Object(X.a)({},c,i)))}return Object(i.useEffect)((function(){d&&r(d).then((function(e){return O(e)}))}),[d,r]),s?Object(l.jsx)(x,{content:"Loading activity..."}):Object(l.jsx)(P.a,{clearing:!0,style:{background:"#F2F2F2"},children:Object(l.jsxs)(Z.a,{onSubmit:function(){if(0===h.id.length){var t=Object(Y.a)(Object(Y.a)({},h),{},{id:Object(R.a)()});c(t).then((function(){return e.push("/activities/".concat(t.id))}))}else n(h).then((function(){return e.push("/activities/".concat(h.id))}))},autoComplete:"off",children:[Object(l.jsxs)(Z.a.Field,{children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{placeholder:"Title",value:h.title,name:"title",onChange:v})]}),Object(l.jsxs)(Z.a.Field,{children:[Object(l.jsx)("label",{children:"Description"}),Object(l.jsx)("textarea",{placeholder:"Description",value:h.description,name:"description",onChange:v})]}),Object(l.jsxs)(Z.a.Field,{children:[Object(l.jsx)("label",{children:"Category"}),Object(l.jsx)("input",{placeholder:"Category",value:h.category,name:"category",onChange:v})]}),Object(l.jsxs)(Z.a.Field,{children:[Object(l.jsx)("label",{children:"Date"}),Object(l.jsx)("input",{type:"date",placeholder:"Date",value:h.date,name:"date",onChange:v})]}),Object(l.jsxs)(Z.a.Field,{children:[Object(l.jsx)("label",{children:"City"}),Object(l.jsx)("input",{placeholder:"City",value:h.city,name:"city",onChange:v})]}),Object(l.jsxs)(Z.a.Field,{children:[Object(l.jsx)("label",{children:"Venue"}),Object(l.jsx)("input",{placeholder:"Venue",value:h.venue,name:"venue",onChange:v})]}),Object(l.jsx)(o.a,{loading:a,floated:"right",type:"submit",content:"Submit",style:{background:"#636B46",color:"white"}}),Object(l.jsx)(o.a,{as:j.b,to:"/activities",floated:"right",type:"button",content:"Cancel",style:{background:"#AF473C",color:"white"}})]})})})),_=c(218),ee=Object(b.a)((function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P.a,{textAlign:"center",attached:"top",inverted:!0,style:{border:"none",background:"#01ABAA",color:"white"},children:Object(l.jsx)(S.a,{children:"Chat about this event"})}),Object(l.jsx)(P.a,{attached:!0,children:Object(l.jsxs)(_.a.Group,{children:[Object(l.jsxs)(_.a,{children:[Object(l.jsx)(_.a.Avatar,{src:"/assests/user.png"}),Object(l.jsxs)(_.a.Content,{children:[Object(l.jsx)(_.a.Author,{as:"a",children:"Matt"}),Object(l.jsx)(_.a.Metadata,{children:Object(l.jsx)("div",{children:"Today at 5:42PM"})}),Object(l.jsx)(_.a.Text,{children:"How artistic!"}),Object(l.jsx)(_.a.Actions,{children:Object(l.jsx)(_.a.Action,{children:"Reply"})})]})]}),Object(l.jsxs)(_.a,{children:[Object(l.jsx)(_.a.Avatar,{src:"/assests/user.png"}),Object(l.jsxs)(_.a.Content,{children:[Object(l.jsx)(_.a.Author,{as:"a",children:"Joe Henderson"}),Object(l.jsx)(_.a.Metadata,{children:Object(l.jsx)("div",{children:"5 days ago"})}),Object(l.jsx)(_.a.Text,{children:"Dude, this is awesome. Thanks so much"}),Object(l.jsx)(_.a.Actions,{children:Object(l.jsx)(_.a.Action,{children:"Reply"})})]})]}),Object(l.jsxs)(Z.a,{reply:!0,children:[Object(l.jsx)(Z.a.TextArea,{}),Object(l.jsx)(o.a,{content:"Add Reply",labelPosition:"left",icon:"edit",style:{background:"#328CC1",color:"white"}})]})]})})]})})),te={filter:"brightness(50%)"},ce={position:"absolute",bottom:"5%",left:"5%",width:"100%",height:"auto",color:"white"},ie=Object(b.a)((function(e){var t=e.activity;return Object(l.jsxs)(P.a.Group,{children:[Object(l.jsxs)(P.a,{basic:!0,attached:"top",style:{padding:"0"},children:[Object(l.jsx)(q.a,{src:"/assests/categoryImages/".concat(t.category,".jpg"),fluid:!0,style:te}),Object(l.jsx)(P.a,{style:ce,basic:!0,children:Object(l.jsx)(J.a.Group,{children:Object(l.jsx)(J.a,{children:Object(l.jsxs)(J.a.Content,{children:[Object(l.jsx)(S.a,{size:"huge",content:t.title,style:{color:"white"}}),Object(l.jsx)("p",{children:t.date}),Object(l.jsxs)("p",{children:["Hosted by ",Object(l.jsx)("strong",{children:"Hebbar"})]})]})})})})]}),Object(l.jsxs)(P.a,{clearing:!0,attached:"bottom",children:[Object(l.jsx)(o.a,{style:{background:"#3B945E",color:"white"},children:"Join Activity"}),Object(l.jsx)(o.a,{style:{background:"#6B6E70",color:"white"},children:"Cancel attendance"}),Object(l.jsx)(o.a,{style:{background:"#EB6B40",color:"white"},floated:"right",children:"Manage Event"})]})]})})),ne=Object(b.a)((function(e){var t=e.activity;return Object(l.jsxs)(P.a.Group,{children:[Object(l.jsx)(P.a,{attached:"top",children:Object(l.jsxs)(u.a,{children:[Object(l.jsx)(u.a.Column,{width:1,children:Object(l.jsx)(V.a,{size:"large",style:{color:"#373F27"},name:"info"})}),Object(l.jsx)(u.a.Column,{width:15,children:Object(l.jsx)("p",{children:t.description})})]})}),Object(l.jsx)(P.a,{attached:!0,children:Object(l.jsxs)(u.a,{verticalAlign:"middle",children:[Object(l.jsx)(u.a.Column,{width:1,children:Object(l.jsx)(V.a,{name:"calendar alternate outline",size:"large",style:{color:"#373F27"}})}),Object(l.jsx)(u.a.Column,{width:15,children:Object(l.jsx)("span",{children:t.date})})]})}),Object(l.jsx)(P.a,{attached:!0,children:Object(l.jsxs)(u.a,{verticalAlign:"middle",children:[Object(l.jsx)(u.a.Column,{width:1,children:Object(l.jsx)(V.a,{name:"map marker alternate",size:"large",style:{color:"#373F27"}})}),Object(l.jsx)(u.a.Column,{width:11,children:Object(l.jsxs)("span",{children:[t.venue,", ",t.city]})})]})})]})})),ae=c(220),re=c(113),se=Object(b.a)((function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P.a,{textAlign:"center",style:{border:"none",background:"#01ABAA",color:"white"},attached:"top",secondary:!0,inverted:!0,children:"3 People Going"}),Object(l.jsx)(P.a,{attached:!0,children:Object(l.jsxs)(ae.a,{relaxed:!0,divided:!0,children:[Object(l.jsxs)(J.a,{style:{position:"relative"},children:[Object(l.jsx)(re.a,{style:{position:"absolute",background:"#EB6B40",color:"white"},ribbon:"right",children:"Host"}),Object(l.jsx)(q.a,{size:"tiny",src:"/assests/user.png"}),Object(l.jsxs)(J.a.Content,{verticalAlign:"middle",children:[Object(l.jsx)(J.a.Header,{as:"h3",children:Object(l.jsx)(j.b,{to:"#",children:"Hebbar"})}),Object(l.jsx)(J.a.Extra,{style:{color:"#EEAA7B"},children:"Following"})]})]}),Object(l.jsxs)(J.a,{style:{position:"relative"},children:[Object(l.jsx)(q.a,{size:"tiny",src:"/assests/user.png"}),Object(l.jsxs)(J.a.Content,{verticalAlign:"middle",children:[Object(l.jsx)(J.a.Header,{as:"h3",children:Object(l.jsx)(j.b,{to:"#",children:"Tom"})}),Object(l.jsx)(J.a.Extra,{style:{color:"#EEAA7B"},children:"Following"})]})]}),Object(l.jsxs)(J.a,{style:{position:"relative"},children:[Object(l.jsx)(q.a,{size:"tiny",src:"/assests/user.png"}),Object(l.jsx)(J.a.Content,{verticalAlign:"middle",children:Object(l.jsx)(J.a.Header,{as:"h3",children:Object(l.jsx)(j.b,{to:"#",children:"Sally"})})})]})]})})]})})),oe=Object(b.a)((function(){var e=D().activityStore,t=e.selectedActivity,c=e.loadActivity,n=e.initialLoading,a=Object(Q.g)().id;return Object(i.useEffect)((function(){a&&c(a)}),[a,c]),n||!t?Object(l.jsx)(x,{}):Object(l.jsxs)(u.a,{children:[Object(l.jsxs)(u.a.Column,{width:10,children:[Object(l.jsx)(ie,{activity:t}),Object(l.jsx)(ne,{activity:t}),Object(l.jsx)(ee,{})]}),Object(l.jsx)(u.a.Column,{width:6,children:Object(l.jsx)(se,{})})]})}));var je=Object(b.a)((function(){var e=Object(Q.f)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Q.a,{exact:!0,path:"/",component:K}),Object(l.jsx)(Q.a,{path:"/(.+)",render:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(r.a,{style:{marginTop:"6em",marginBottom:"6em"},children:[Object(l.jsx)(Q.a,{exact:!0,path:"/activities",component:W}),Object(l.jsx)(Q.a,{path:"/activities/:id",component:oe}),Object(l.jsx)(Q.a,{path:["/createActivity","/manage/:id"],component:$},e.key)]})]})}})]})})),le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,228)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),a(e),r(e)}))};c(199),c(200),c(201);function de(){var e=Object(Q.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}a.a.render(Object(l.jsx)(z.Provider,{value:T,children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(de,{}),Object(l.jsx)(je,{})]})}),document.getElementById("root")),le()}},[[202,1,2]]]);
//# sourceMappingURL=main.269d8065.chunk.js.map