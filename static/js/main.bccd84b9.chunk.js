(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},32:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a,l=n(0),c=n.n(l),r=n(13),o=n.n(r),i=n(3),u=(n(32),n(10)),d=n(2),s=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("h1",null,"Todo'ist"),c.a.createElement("div",{className:"links"},c.a.createElement(u.b,{to:"/"},"Home"),c.a.createElement(u.b,{to:"/completed",style:{color:"white",backgroundColor:"green",borderRadius:"8px"}},"Completed"),c.a.createElement(u.b,{to:"/trash",style:{color:"black",backgroundColor:"#F1356D",borderRadius:"8px"}},"Trash")))},m=n(22);!function(e){e.ADD_TODO="ADD_TODO",e.ADD_TO_COMPLETED="COMPLETED",e.ADD_TO_TRASH="TRASH",e.ADD_BACK_TO_PENDING="REVERSE",e.UNDO_DELETE="UNDO_DELETE"}(a||(a={}));var E=function(){var e=Object(l.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(i.b)();return c.a.createElement("div",{className:"create"},c.a.createElement("h2",null,"Add a Todo"),c.a.createElement("label",null,"Add Item:"),c.a.createElement("input",{type:"text",required:!0,title:"addTodoInput",value:n,onChange:function(e){return function(e){r(e.target.value)}(e)}}),c.a.createElement("button",{title:"addButton",className:"create button",onClick:function(){return o((e=n,console.log(e),{type:a.ADD_TODO,payload:{id:(new Date).getTime().toString(),text:e,isPending:!0}})),r("");var e}},"Add Item"))},D=function(e){var t=e.TodoList,n=e.handleClick,l=Object(i.b)();return c.a.createElement("div",{className:"blog-list"},t&&(null===t||void 0===t?void 0:t.map((function(e,t){var r;return c.a.createElement("div",{className:"blog-preview",key:e.id},c.a.createElement("h4",null,e.text),c.a.createElement("p",null,null===(r=e.dueDate)||void 0===r?void 0:r.toDateString()),c.a.createElement("p",null,"created at ",e.completedDate),n?c.a.createElement("span",{role:"button",style:{color:"white",backgroundColor:"green",borderRadius:"8px",paddingRight:"20px",paddingLeft:"20px"},onClick:function(e){return n(t)}},"undo"):c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return l(function(e){return console.log(e),{type:a.ADD_TO_TRASH,index:e}}(t))}},"delete todo"),c.a.createElement("input",{type:"radio",style:{float:"right"},id:"f-option",name:"selector",onChange:function(){return l(function(e){return{type:a.ADD_TO_COMPLETED,index:e}}(t))}})))}))))},b=function(){var e=Object(i.c)((function(e){return e.filter((function(e){return e.isPending}))}));return c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement(D,{TodoList:e}),";")};var O=function(){var e=Object(i.c)((function(e){return console.log(e),e.filter((function(e){return e.isCompleted}))})),t=Object(i.b)();return c.a.createElement("div",null,c.a.createElement(D,{TodoList:e,handleClick:function(e){t(function(e){return console.log(e),{type:a.ADD_BACK_TO_PENDING,index:e}}(e))}}),";")},p=function(){var e=Object(i.c)((function(e){return console.log(e),e.filter((function(e){return e.isDeleted}))})),t=Object(i.b)();return c.a.createElement("div",null,c.a.createElement(D,{TodoList:e,handleClick:function(e){t(function(e){return console.log(e),{type:a.UNDO_DELETE,index:e}}(e))}}),";")};var g=function(){return c.a.createElement(u.a,{basename:"/todo-list"},c.a.createElement("div",{className:"App"},c.a.createElement(s,null),c.a.createElement("div",{className:"content"},c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/"},c.a.createElement(b,null)),c.a.createElement(d.a,{path:"/completed"},c.a.createElement(O,null)),c.a.createElement(d.a,{path:"/trash"},c.a.createElement(p,null))))))},f=n(37),v=n(21),T=n(23),_=n(8),x=Object(f.a)((function(e,t){var n,l;switch(e=null!==(n=null===(l=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}())||void 0===l?void 0:l.todos)&&void 0!==n?n:[],t.type){case a.ADD_TODO:var c=null===t||void 0===t?void 0:t.payload;return console.log(c),[].concat(Object(_.a)(e),[Object(T.a)({},c)]);case a.ADD_TO_COMPLETED:return console.log(e),[].concat(Object(_.a)(e.slice(0,t.index)),[Object.assign({},e[t.index],{isCompleted:!0,isPending:!1,isDeleted:!1})],Object(_.a)(e.slice(t.index+1)));case a.ADD_BACK_TO_PENDING:return[].concat(Object(_.a)(e.slice(0,t.index)),[Object.assign({},e[t.index],{isCompleted:!1,isPending:!0,isDeleted:!1})],Object(_.a)(e.slice(t.index+1)));case a.ADD_TO_TRASH:return[].concat(Object(_.a)(e.slice(0,t.index)),[Object.assign({},e[t.index],{isDeleted:!0,isPending:!1})],Object(_.a)(e.slice(t.index+1)));case a.UNDO_DELETE:return[].concat(Object(_.a)(e.slice(0,t.index)),[Object.assign({},e[t.index],{isCompleted:!1,isPending:!0,isDeleted:!1})],Object(_.a)(e.slice(t.index+1)));default:return e}}));console.log(x),x.subscribe(Object(v.throttle)((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log("unable to save")}}({todos:x.getState()}),console.log(x.getState())}),1e3)),o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:x},c.a.createElement(g,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.bccd84b9.chunk.js.map