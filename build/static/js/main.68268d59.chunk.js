(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{162:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(57),s=a.n(l),c=(a(67),a(8)),o=a(9),i=a(11),d=a(10),m=a(12),u=a(13),p=a(20),f=a(58),h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],E={maintainAspectRatio:!1,legend:{display:!1},title:{},scales:{xAxes:[{gridLines:{color:"rgb(234, 236, 244)",zeroLineColor:"rgb(234, 236, 244)",drawBorder:!1,drawTicks:!1,borderDash:["2"],zeroLineBorderDash:["2"],drawOnChartArea:!1},ticks:{fontColor:"#858796",padding:20}}],yAxes:[{gridLines:{color:"rgb(234, 236, 244)",zeroLineColor:"rgb(234, 236, 244)",drawBorder:!1,drawTicks:!1,borderDash:["2"],zeroLineBorderDash:["2"]},ticks:{fontColor:"#858796",padding:20}}]}},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).errorFunction=function(){alert("This function is not supported at this time. It will be added in a future release.")},a.renderChart=function(e){var t=[],n=[];e.map(function(e,a){t.push(h[e._id-1]),n.push(Math.round(e.avg/1e3))});var r={labels:t,datasets:[{label:"Duration (seconds)",fill:!0,data:n,backgroundColor:"rgba(78, 115, 223, 0.05)",borderColor:"rgba(78, 115, 223, 1)"}]};a.setState({rendered:r})},a.componentDidMount=function(){fetch("http://192.99.148.130:5010/api/v1/analytics/").then(function(e){return e.json()}).then(function(e){a.setState({avgt:e.data[0].avg})}),fetch("http://192.99.148.130:5010/api/v1/analytics?month=-1").then(function(e){return e.json()}).then(function(e){a.setState({avgm:e.data[0].avg})}),fetch("http://192.99.148.130:5010/api/v1/viewUsers?count=1").then(function(e){return e.json()}).then(function(e){a.setState({usercount:e.count})}),fetch("http://192.99.148.130:5010/api/v1/analytics?month=0").then(function(e){return e.json()}).then(function(e){a.renderChart(e.data)})},a.state={avgm:"...",avgt:"...",usercount:"...",rendered:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"millisToMinutesAndSeconds",value:function(e){if(isNaN(e))return e;var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return t+":"+(a<10?"0":"")+a}},{key:"render",value:function(){return r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"d-sm-flex justify-content-between align-items-center mb-4"},r.a.createElement("h3",{class:"text-dark mb-0"},"McMillen Digital Hall Pass"),r.a.createElement("a",{onClick:this.errorFunction,class:"btn btn-primary btn-sm d-none d-sm-inline-block",role:"button",href:"#"},r.a.createElement("i",{class:"fas fa-download fa-sm text-white-50"}),"\xa0Generate Report")),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-6 col-xl-3 mb-4"},r.a.createElement("div",{class:"card shadow border-left-primary py-2"},r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"row align-items-center no-gutters"},r.a.createElement("div",{class:"col mr-2"},r.a.createElement("div",{class:"text-uppercase text-primary font-weight-bold text-xs mb-1"},r.a.createElement("span",null,"Average Time OUT (Monthly)")),r.a.createElement("div",{class:"text-dark font-weight-bold h5 mb-0"},r.a.createElement("span",null,this.millisToMinutesAndSeconds(this.state.avgm)))),r.a.createElement("div",{class:"col-auto"},r.a.createElement("i",{class:"fas fa-calendar fa-2x text-gray-300"})))))),r.a.createElement("div",{class:"col-md-6 col-xl-3 mb-4"},r.a.createElement("div",{class:"card shadow border-left-primary py-2"},r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"row align-items-center no-gutters"},r.a.createElement("div",{class:"col mr-2"},r.a.createElement("div",{class:"text-uppercase text-primary font-weight-bold text-xs mb-1"},r.a.createElement("span",null,"Average Time OUT (Holistic)")),r.a.createElement("div",{class:"text-dark font-weight-bold h5 mb-0"},r.a.createElement("span",null,this.millisToMinutesAndSeconds(this.state.avgt)))),r.a.createElement("div",{class:"col-auto"},r.a.createElement("i",{class:"fas fa-calendar fa-2x text-gray-300"})))))),r.a.createElement("div",{class:"col-md-6 col-xl-3 mb-4"},r.a.createElement("div",{class:"card shadow border-left-info py-2"},r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"row align-items-center no-gutters"},r.a.createElement("div",{class:"col mr-2"},r.a.createElement("div",{class:"text-uppercase text-info font-weight-bold text-xs mb-1"},r.a.createElement("span",null,"NUmber of students")),r.a.createElement("div",{class:"row no-gutters align-items-center"},r.a.createElement("div",{class:"col-auto"},r.a.createElement("div",{class:"text-dark font-weight-bold h5 mb-0 mr-3"},r.a.createElement("span",null,this.state.usercount))))),r.a.createElement("div",{class:"col-auto"},r.a.createElement("i",{class:"fas fa-clipboard-list fa-2x text-gray-300"})))))),r.a.createElement("div",{class:"col-md-6 col-xl-3 mb-4"},r.a.createElement("div",{class:"card shadow border-left-warning py-2"},r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"row align-items-center no-gutters"},r.a.createElement("div",{class:"col mr-2"},r.a.createElement("div",{class:"text-uppercase text-warning font-weight-bold text-xs mb-1"},r.a.createElement("span",null,"NOTIFICATIONS / ALERTS")),r.a.createElement("div",{class:"text-dark font-weight-bold h5 mb-0"},r.a.createElement("span",null,"0"))),r.a.createElement("div",{class:"col-auto"},r.a.createElement("i",{class:"fas fa-comments fa-2x text-gray-300"}))))))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-12 col-xl-12"},r.a.createElement("div",{class:"card shadow mb-4"},r.a.createElement("div",{class:"card-header d-flex justify-content-between align-items-center"},r.a.createElement("h6",{class:"text-primary font-weight-bold m-0"},"Duration Overview"),r.a.createElement("div",{class:"dropdown no-arrow"},r.a.createElement("button",{class:"btn btn-link btn-sm dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false",type:"button"},r.a.createElement("i",{class:"fas fa-ellipsis-v text-gray-400"})),r.a.createElement("div",{class:"dropdown-menu shadow dropdown-menu-right animated--fade-in",role:"menu"},r.a.createElement("p",{class:"text-center dropdown-header"},"dropdown header:"),r.a.createElement("a",{onClick:this.errorFunction,class:"dropdown-item",role:"presentation",href:"#"},"\xa0Action"),r.a.createElement("a",{onClick:this.errorFunction,class:"dropdown-item",role:"presentation",href:"#"},"\xa0Another action"),r.a.createElement("div",{class:"dropdown-divider"}),r.a.createElement("a",{onClick:this.errorFunction,class:"dropdown-item",role:"presentation",href:"#"},"\xa0Something else here")))),r.a.createElement("div",{class:"card-body"},""==this.state.rendered?null:r.a.createElement("div",{class:"chart-area"},r.a.createElement(f.a,{data:this.state.rendered,width:1458,height:640,options:E})))))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).errorFunction=function(){alert("This function is not supported at this time. It will be added in a future release.")},a.componentDidMount=function(){fetch("http://192.99.148.130:5010/api/v1/viewUsers").then(function(e){return e.json()}).then(function(e){a.setState({studentList:e})})},a.updateUsers=function(e){void 0!==e&&e.preventDefault(),fetch("http://192.99.148.130:5010/api/v1/viewUsers").then(function(e){return e.json()}).then(function(e){a.setState({studentList:e})})},a.processRegister=function(e){e.preventDefault(),fetch("http://192.99.148.130:5010/api/v1/users/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,grade:parseInt(a.state.grade),id:parseInt(a.state.id)})}).then(function(e){return e.json()}).then(function(e){console.log(e),void 0!==e.error&&alert(e.error),void 0!==e.message&&(alert(e.message),a.updateUsers(),a.setState({name:"",id:"",grade:""}))})},a.deleteUser=function(e,t){e.preventDefault(),fetch("http://192.99.148.130:5010/api/v1/users/delete/".concat(t)).then(function(e){return e.json()}).then(function(e){console.log(e),void 0!==e.error&&alert(e.error),a.updateUsers()})},a.handleName=function(e){a.setState({name:e.target.value})},a.handleGrade=function(e){a.setState({grade:e.target.value})},a.handleID=function(e){a.setState({id:e.target.value})},a.renderUsers=function(){if(void 0!=a.state.studentList){var e=[];return a.state.studentList.map(function(t,n){e.push(r.a.createElement("li",{class:"list-group-item"},r.a.createElement("div",{class:"row align-items-center no-gutters"},r.a.createElement("div",{class:"col mr-2"},r.a.createElement("h6",{class:"mb-0"},r.a.createElement("strong",null,t.name)),r.a.createElement("span",{class:"text-xs"},"ID: "+t._id+" | Grade: "+t.grade)),r.a.createElement("div",{class:"col-auto"},r.a.createElement("a",{href:"/",onClick:function(e){a.deleteUser(e,t._id)}},r.a.createElement("i",{class:"fas fa-trash"}))))))}),e}},a.state={name:"",grade:"",id:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"d-sm-flex justify-content-between align-items-center mb-4"},r.a.createElement("h3",{class:"text-dark mb-0"},"McMillen Digital Hall Pass"),r.a.createElement("a",{onClick:this.errorFunction,class:"btn btn-primary btn-sm d-none d-sm-inline-block",role:"button",href:"#"},r.a.createElement("i",{class:"fas fa-download fa-sm text-white-50"}),"\xa0Generate Report")),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-12 col-xl-12 mb-4"},r.a.createElement("div",{class:"card shadow border-left-info py-2"},r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"row align-items-center no-gutters"},r.a.createElement("div",{class:"col mr-2"},r.a.createElement("div",{class:"text-uppercase text-info font-weight-bold text-xs mb-1"},r.a.createElement("span",null,"Number of students")),r.a.createElement("div",{class:"row no-gutters align-items-center"},r.a.createElement("div",{class:"col-auto"},r.a.createElement("div",{class:"text-dark font-weight-bold h5 mb-0 mr-3"},r.a.createElement("span",null,this.state.studentList?this.state.studentList.length:"..."))))),r.a.createElement("div",{class:"col-auto"},r.a.createElement("i",{class:"fas fa-clipboard-list fa-2x text-gray-300"})))))),r.a.createElement("div",{class:"col-md-12 col-xl-12 mb-4"},r.a.createElement("div",{class:"card shadow border-left-info py-2"},r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"row align-items-center no-gutters"},r.a.createElement("div",{class:"col mr-2"},r.a.createElement("div",{class:"text-uppercase text-info font-weight-bold text-xs mb-1"},r.a.createElement("span",null,"Create a user")),r.a.createElement("div",{class:"row no-gutters align-items-center"},r.a.createElement("div",{class:"col-auto"},r.a.createElement("form",{class:"form-inline d-none d-sm-inline-block mr-auto my-2 my-md-0 mw-100 navbar-search",onSubmit:this.processRegister},r.a.createElement("div",{class:"input-group mb-2 mt-2"},r.a.createElement("input",{onChange:this.handleName,value:this.state.name,class:"bg-light form-control border-0 small",type:"text",placeholder:"Student Name"})),r.a.createElement("div",{class:"input-group mb-2"},r.a.createElement("input",{onChange:this.handleGrade,value:this.state.grade,class:"bg-light form-control border-0 small",type:"text",placeholder:"Student Grade"})),r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{onChange:this.handleID,value:this.state.id,class:"bg-light form-control border-0 small",type:"text",placeholder:"Student ID"}),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("button",{class:"btn btn-primary py-0",type:"submit"},r.a.createElement("i",{class:"fas fa-plus"})))))))),r.a.createElement("div",{class:"col-auto"},r.a.createElement("i",{class:"fas fa-pen fa-2x text-gray-300"}))))))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-12 mb-4"},r.a.createElement("div",{class:"card shadow mb-4"},r.a.createElement("div",{class:"card-header d-flex py-3 justify-content-between align-items-center"},r.a.createElement("h6",{class:"text-primary font-weight-bold m-0"},"User List"),r.a.createElement("a",{href:"/",onClick:this.updateUsers},r.a.createElement("i",{class:"fas fa-sync-alt"}))),r.a.createElement("ul",{class:"list-group list-group-flush"},this.renderUsers())))))}}]),t}(n.Component),g=(a(162),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).errorFunction=function(){alert("This function is not supported at this time. It will be added in a future release.")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"wrapper"},r.a.createElement("nav",{class:"navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"},r.a.createElement("div",{class:"container-fluid d-flex flex-column p-0"},r.a.createElement("a",{class:"navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0",href:"#"},r.a.createElement("div",{class:"sidebar-brand-icon rotate-n-15"}),r.a.createElement("div",{class:"sidebar-brand-text mx-3"},r.a.createElement("span",null,"Administration"))),r.a.createElement("hr",{class:"sidebar-divider my-0"}),r.a.createElement("ul",{class:"nav navbar-nav text-light",id:"accordionSidebar"},r.a.createElement("li",{class:"nav-item",role:"presentation"},r.a.createElement(p.b,{to:"/",exact:!0,class:"nav-link active"},r.a.createElement("i",{class:"fas fa-tachometer-alt"}),r.a.createElement("span",null,"Dashboard")))),r.a.createElement("ul",{class:"nav navbar-nav text-light",id:"accordionSidebar"},r.a.createElement("li",{class:"nav-item",role:"presentation"},r.a.createElement(p.b,{to:"/users",exact:!0,class:"nav-link active"},r.a.createElement("i",{class:"fas fa-user-friends"}),r.a.createElement("span",null,"Users")))),r.a.createElement("div",{class:"text-center d-none d-md-inline"},r.a.createElement("button",{class:"btn rounded-circle border-0",id:"sidebarToggle",type:"button"})))),r.a.createElement("div",{class:"d-flex flex-column",id:"content-wrapper"},r.a.createElement("div",{id:"content"},r.a.createElement("nav",{class:"navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("button",{class:"btn btn-link d-md-none rounded-circle mr-3",id:"sidebarToggleTop",type:"button"},r.a.createElement("i",{class:"fas fa-bars"})),r.a.createElement("form",{class:"form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"},r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{class:"bg-light form-control border-0 small",type:"text",placeholder:"Find a student..."}),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("button",{class:"btn btn-primary py-0",type:"button"},r.a.createElement("i",{class:"fas fa-search"}))))),r.a.createElement("ul",{class:"nav navbar-nav flex-nowrap ml-auto"},r.a.createElement("li",{class:"nav-item dropdown d-sm-none no-arrow"},r.a.createElement("a",{class:"dropdown-toggle nav-link","data-toggle":"dropdown","aria-expanded":"false",href:"#"},r.a.createElement("i",{class:"fas fa-search"})),r.a.createElement("div",{class:"dropdown-menu dropdown-menu-right p-3 animated--grow-in",role:"menu","aria-labelledby":"searchDropdown"},r.a.createElement("form",{class:"form-inline mr-auto navbar-search w-100",onSubmit:this.errorFunction},r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{class:"bg-light form-control border-0 small",type:"text",placeholder:"Search for ..."}),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("button",{onClick:this.errorFunction,class:"btn btn-primary py-0",type:"submit"},r.a.createElement("i",{class:"fas fa-search"}))))))),r.a.createElement("div",{class:"d-none d-sm-block topbar-divider"}),r.a.createElement("li",{class:"nav-item dropdown no-arrow",role:"presentation"},r.a.createElement("li",{class:"nav-item dropdown no-arrow"},r.a.createElement("a",{class:"dropdown-toggle nav-link","data-toggle":"dropdown","aria-expanded":"false",href:"#"},r.a.createElement("span",{class:"d-none d-lg-inline mr-2 text-gray-600 small"},"Ethan Sayre"),r.a.createElement("img",{class:"border rounded-circle img-profile",src:"assets/img/avatars/avatar1.jpeg"})),r.a.createElement("div",{class:"dropdown-menu shadow dropdown-menu-right animated--grow-in",role:"menu"},r.a.createElement("a",{onClick:this.errorFunction,class:"dropdown-item",role:"presentation",href:"#"},r.a.createElement("i",{class:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"\xa0Profile"),r.a.createElement("a",{class:"dropdown-item",role:"presentation",href:"#"},r.a.createElement("i",{class:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),"\xa0Settings"),r.a.createElement("a",{onClick:this.errorFunction,class:"dropdown-item",role:"presentation",href:"#"},r.a.createElement("i",{class:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),"\xa0Activity log"),r.a.createElement("div",{class:"dropdown-divider"}),r.a.createElement("a",{onClick:this.errorFunction,class:"dropdown-item",role:"presentation",href:"#"},r.a.createElement("i",{class:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"\xa0Logout"))))))),this.props.toRender),r.a.createElement("footer",{class:"bg-white sticky-footer"},r.a.createElement("div",{class:"container my-auto"},r.a.createElement("div",{class:"text-center my-auto copyright"},r.a.createElement("span",null,"Developed by Ethan Sayre 2019"))))),r.a.createElement("a",{class:"border rounded d-inline scroll-to-top",href:"#page-top"},r.a.createElement("i",{class:"fas fa-angle-up"}))))}}]),t}(n.Component)),w=function(e){var t=e.exact,a=e.path,n=e.component;return r.a.createElement(u.a,{exact:t,path:a,render:function(e){return r.a.createElement("div",null,r.a.createElement(g,{toRender:n}))}})},x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(u.c,null,r.a.createElement(w,{exact:!0,component:r.a.createElement(v,null),path:"/"}),r.a.createElement(w,{component:r.a.createElement(b,null),path:"/users"}),r.a.createElement(w,{component:r.a.createElement(v,null)})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){e.exports=a(165)},67:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.68268d59.chunk.js.map