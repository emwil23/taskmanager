(this.webpackJsonptaskmanager=this.webpackJsonptaskmanager||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);s(5);var c=s(1),a=s(4),n=s.n(a),i=s(2),r=s(0);var l=function(e){var t=Object(c.useState)(""),s=Object(i.a)(t,2),a=s[0],n=s[1],l=Object(c.useState)(""),o=Object(i.a)(l,2),d=o[0],u=o[1];return Object(r.jsx)("div",{children:Object(r.jsx)("form",{className:"form__createTask",onSubmit:function(t){return function(t){t.preventDefault();var s=new Date,c=s.getDate()+"/"+s.getMonth()+"/"+s.getFullYear()+"  "+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),n=JSON.parse(localStorage.getItem("lists"))||[];n.push({id:n.length+1,title:a,description:d,date:c,doneTask:0,task:[]}),localStorage.setItem("lists",JSON.stringify(n)),e.setList(JSON.parse(localStorage.getItem("lists")))}(t)},children:Object(r.jsxs)("div",{className:"createTask__input",children:[Object(r.jsx)("input",{name:"title",className:"createTask__input-title",type:"text",required:!0,placeholder:"Title",value:a,onChange:function(e){return n(e.target.value)}}),Object(r.jsx)("input",{name:"description",className:"createTask__input-description",type:"text",required:!0,placeholder:"Description",value:d,onChange:function(e){return u(e.target.value)}}),Object(r.jsx)("button",{className:"createTask__input-submit",children:"Create Task"})]})})})};var o=function(e){return Object(r.jsx)("div",{className:"header__container",children:Object(r.jsxs)("ul",{className:"header__ul",children:[Object(r.jsx)("li",{onClick:function(){return e.setSelected("")},className:"header__li",children:"New Task"}),Object(r.jsx)("li",{onClick:function(){return e.setSelected("inprogress")},className:"header__li",children:"Inprogress Task"}),Object(r.jsx)("li",{onClick:function(){return e.setSelected("completed")},className:"header__li",children:"Completed"}),Object(r.jsx)("li",{onClick:function(){return e.setSelected("archieve")},className:"header__li",children:"Archieve Task"})]})})};var d=function(e){return Object(r.jsxs)("div",{onClick:function(){return function(){var t=JSON.parse(localStorage.getItem("lists"));if(0!==t[e.id-1].task[e.subIndex].checked)throw alert("COMPLETED!");t[e.id-1].task[e.subIndex].checked=1,localStorage.setItem("lists",JSON.stringify(t)),e.setCounter(e.counter+1)}()},className:"sub__task",children:[e.subIndex+1," : ",e.subTask.sub]})};var u=function(e){var t=Object(c.useState)(!1),s=Object(i.a)(t,2),a=s[0],n=s[1],l=Object(c.useState)(""),o=Object(i.a)(l,2),u=o[0],j=o[1],b=Object(c.useState)(0),O=Object(i.a)(b,2),_=O[0],m=O[1],h=e.list,x=h.id,v=h.title,N=h.description,p=h.date,g=h.task,k=h.doneTask,S=function(e){var t=[];(t=JSON.parse(localStorage.getItem("lists")))[x-1].task.push({sub:u,checked:0}),localStorage.setItem("lists",JSON.stringify(t))};return Object(c.useEffect)((function(){if(g.length>0&&g.length===_){var t=[];(t=JSON.parse(localStorage.getItem("lists")))[x-1].doneTask=1,localStorage.setItem("lists",JSON.stringify(t));var s=JSON.parse(localStorage.getItem("lists"));e.updateList(s)}}),[_]),e.progressToken&&0!==g.length&&g.length>_&&1!==k?Object(r.jsxs)("div",{className:"task__list",children:[Object(r.jsxs)("div",{className:"task__title",children:["Title: ",v]}),Object(r.jsxs)("div",{className:"task__description",children:["Description: ",N]}),Object(r.jsxs)("div",{className:"task__date",children:["Date/Time: ",p]}),Object(r.jsxs)("div",{className:"task__sub",children:["Subtasks",console.log(_),g.map((function(e,t){return Object(r.jsx)(d,{id:x,subTask:e,subIndex:t,taskLength:g.length,setCounter:m,counter:_},e.value)}))]}),Object(r.jsx)("button",{className:"task__addsub",onClick:function(){return n(!a)},children:a?"-":"+"}),a?Object(r.jsx)("div",{className:"sub__container",children:Object(r.jsxs)("form",{className:"form__sub",onSubmit:function(e){return S()},children:[Object(r.jsx)("input",{className:"sub__input",type:"text",required:!0,placeholder:"ADD SUBTASKS",value:u,onChange:function(e){return j(e.target.value)}}),Object(r.jsx)("button",{className:"task__addsub",children:"+"})]})}):null]},x):e.progressToken||0!==g.length?null:Object(r.jsxs)("div",{className:"task__list",children:[Object(r.jsxs)("div",{className:"task__title",children:["Title: ",v]}),Object(r.jsxs)("div",{className:"task__description",children:["Description: ",N]}),Object(r.jsxs)("div",{className:"task__date",children:["Date/Time: ",p]}),Object(r.jsx)("button",{className:"task__addsub",onClick:function(){return n(!a)},children:a?"-":"+"}),a?Object(r.jsx)("div",{className:"sub__container",children:Object(r.jsxs)("form",{className:"form__sub",onSubmit:function(e){return S()},children:[Object(r.jsx)("input",{className:"sub__input",type:"text",required:!0,placeholder:"ADD SUBTASKS",value:u,onChange:function(e){return j(e.target.value)}}),Object(r.jsx)("button",{className:"sub__submit",children:"+"})]})}):null]},x)};var j=function(e){return 0===Object.keys(e.list).length?Object(r.jsx)("div",{className:"loader",children:"No List"}):Object(r.jsxs)("div",{className:"task__container",children:["NEW TASK LIST",e.list.map((function(e){return 0===e.task.length?Object(r.jsx)(u,{list:e},e.id):null}))]})};var b=function(e){var t=function(t){e.setList(t)};return 0===Object.keys(e.list).length?Object(r.jsx)("div",{className:"loader",children:"No Task in Progres"}):Object(r.jsx)("div",{className:"task__container",children:e.list.map((function(e){return Object(r.jsx)(u,{list:e,progressToken:!0,updateList:t})}))})};var O=function(){var e=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("lists"))||[]})),t=Object(i.a)(e,1)[0];return 0===Object.keys(t).length?Object(r.jsx)("div",{children:"NO TASKS PRESENT"}):Object(r.jsxs)("div",{className:"task__container",children:["COMPLETED TASK LIST",t.reverse().slice(0,10).map((function(e){return 1===e.doneTask?Object(r.jsxs)("div",{className:"done__content",children:[Object(r.jsxs)("div",{className:"done__title",children:["Title: ",e.title]}),Object(r.jsxs)("div",{className:"done__description",children:["Description: ",e.description]}),Object(r.jsxs)("div",{className:"done__date",children:["Date/Time: ",e.date]}),Object(r.jsx)("div",{className:"done__text",children:"Task Completed"})]}):null}))]})};var _=function(){var e=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("lists"))||[]})),t=Object(i.a)(e,1)[0];return 0===Object.keys(t).length?Object(r.jsx)("div",{children:"NO LIST FOUND"}):Object.keys(t).length>2?Object(r.jsx)("div",{className:"task__container",children:t.reverse().filter((function(e,t){return t>1})).map((function(e){return Object(r.jsxs)("div",{className:"done__content",children:[Object(r.jsxs)("div",{className:"done__title",children:["Title: ",e.title]}),Object(r.jsxs)("div",{className:"done__description",children:["Description: ",e.description]}),Object(r.jsxs)("div",{className:"done__date",children:["Date/Time: ",e.date]}),Object(r.jsx)("div",{className:"done__text",children:"ARCHIVE TASK"})]})}))}):null};var m=function(){var e=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("lists"))||[]})),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),d=Object(i.a)(n,2),u=d[0],m=d[1];return Object(r.jsxs)("div",{className:"main__container",children:[Object(r.jsx)(l,{list:s,setList:a}),Object(r.jsx)(o,{setSelected:m}),""===u?Object(r.jsx)(j,{list:s,setList:a}):"inprogress"===u?Object(r.jsx)(b,{list:s,setList:a}):"completed"===u?Object(r.jsx)(O,{}):Object(r.jsx)(_,{})]})};n.a.render(Object(r.jsx)(m,{}),document.querySelector("#root"))},5:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.7f97d38f.chunk.js.map