(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[104],{2157:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a.n(n),l=a(132),i=a(9),s=a(10),o=a(12),c=a(11),d=a(0),u=a.n(d),m=a(807),p=a(808),f=a(809),h=a(810),g=a(811),E=a(873),v=a(812),b=a(908),y=a(831),N=a(821),O=a(819),w=a(805),S=a(583),C=a(579),j=a(145),x=a(582),T=a(43),k=a.n(T),A=a(102),z=a(827),D=a(316),M=a(450),P=a(273),R=a(413),F=a(201),V=a(281),G=a(407),I=a(312),L=a(4),Q=a.n(L),U=a(18),B=(a(823),a(818),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:null,pageSize:20,isVisible:!0,reload:!1,collapse:!0,status:"Opened",role:"All",selectStatus:"All",verified:"All",department:"All",defaultColDef:{sortable:!0},searchVal:"",columnDefs:[{headerName:"ID",field:"id",width:150,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Username",field:"username",filter:!0,width:250,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer",onClick:function(){return U.a.push("/app/user/edit")}},u.a.createElement("img",{className:"rounded-circle mr-50",src:e.data.avatar,alt:"user avatar",height:"30",width:"30"}),u.a.createElement("span",null,e.data.name))}},{headerName:"Email",field:"email",filter:!0,width:250},{headerName:"Name",field:"name",filter:!0,width:200},{headerName:"Country",field:"country",filter:!0,width:200},{headerName:"Role",field:"role",filter:!0,width:150},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"active"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-light-success"},e.value):"blocked"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-light-danger"},e.value):"deactivated"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-light-warning"},e.value):null}},{headerName:"Verified",field:"is_verified",filter:!0,width:125,cellRendererFramework:function(e){return!0===e.value?u.a.createElement("div",{className:"bullet bullet-sm bullet-primary"}):!1===e.value?u.a.createElement("div",{className:"bullet bullet-sm bullet-secondary"}):null}},{headerName:"Department",field:"department",filter:!0,width:160},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(D.a,{className:"mr-50",size:15,onClick:function(){return U.a.push("/app/user/edit")}}),u.a.createElement(M.a,{size:15,onClick:function(){var t=e.gridApi.getSelectedRows();e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi},e.filterData=function(t,a){var n=null;"all"!==a&&(n={type:"equals",filter:a}),e.gridApi.getFilterInstance(t).setModel(n),e.gridApi.onFilterChanged()},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({pageSize:t}))},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t),e.setState({searchVal:t})},e.refreshCard=function(){e.setState({reload:!0}),setTimeout((function(){e.setState({reload:!1,role:"All",selectStatus:"All",verified:"All",department:"All"})}),500)},e.toggleCollapse=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.onEntered=function(){e.setState({status:"Opened"})},e.onEntering=function(){e.setState({status:"Opening..."})},e.onEntered=function(){e.setState({status:"Opened"})},e.onExiting=function(){e.setState({status:"Closing..."})},e.onExited=function(){e.setState({status:"Closed"})},e.removeCard=function(){e.setState({isVisible:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("api/users/list").then((function(e){var a=e.data;t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef,l=t.pageSize;return u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(p.a,{sm:"12"},u.a.createElement(f.a,{className:Q()("card-action card-reload",{"d-none":!1===this.state.isVisible,"card-collapsed":"Closed"===this.state.status,closing:"Closing..."===this.state.status,opening:"Opening..."===this.state.status,refreshing:this.state.reload})},u.a.createElement(h.a,null,u.a.createElement(g.a,null,"Filters"),u.a.createElement("div",{className:"actions"},u.a.createElement(P.a,{className:"collapse-icon mr-50",size:15,onClick:this.toggleCollapse}),u.a.createElement(R.a,{className:"mr-50",size:15,onClick:function(){e.refreshCard(),e.gridApi.setFilterModel(null)}}),u.a.createElement(F.a,{size:15,onClick:this.removeCard}))),u.a.createElement(E.a,{isOpen:this.state.collapse,onExited:this.onExited,onEntered:this.onEntered,onExiting:this.onExiting,onEntering:this.onEntering},u.a.createElement(v.a,null,this.state.reload?u.a.createElement(b.a,{color:"primary",className:"reload-spinner"}):"",u.a.createElement(m.a,null,u.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},u.a.createElement(y.a,{className:"mb-0"},u.a.createElement(N.a,{for:"role"},"Role"),u.a.createElement(O.a,{type:"select",name:"role",id:"role",value:this.state.role,onChange:function(t){e.setState({role:t.target.value},(function(){return e.filterData("role",e.state.role.toLowerCase())}))}},u.a.createElement("option",{value:"All"},"All"),u.a.createElement("option",{value:"User"},"User"),u.a.createElement("option",{value:"Staff"},"Staff"),u.a.createElement("option",{value:"Admin"},"Admin")))),u.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},u.a.createElement(y.a,{className:"mb-0"},u.a.createElement(N.a,{for:"status"},"Status"),u.a.createElement(O.a,{type:"select",name:"status",id:"status",value:this.state.selectStatus,onChange:function(t){e.setState({selectStatus:t.target.value},(function(){return e.filterData("status",e.state.selectStatus.toLowerCase())}))}},u.a.createElement("option",{value:"All"},"All"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Blocked"},"Blocked"),u.a.createElement("option",{value:"Deactivated"},"Deactivated")))),u.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},u.a.createElement(y.a,{className:"mb-0"},u.a.createElement(N.a,{for:"verified"},"Verified"),u.a.createElement(O.a,{type:"select",name:"verified",id:"verified",value:this.state.verified,onChange:function(t){e.setState({verified:t.target.value},(function(){return e.filterData("is_verified",e.state.verified.toLowerCase())}))}},u.a.createElement("option",{value:"All"},"All"),u.a.createElement("option",{value:"True"},"True"),u.a.createElement("option",{value:"False"},"False")))),u.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},u.a.createElement(y.a,{className:"mb-0"},u.a.createElement(N.a,{for:"department"},"Department"),u.a.createElement(O.a,{type:"select",name:"department",id:"department",value:this.state.department,onChange:function(t){e.setState({department:t.target.value},(function(){return e.filterData("department",e.state.department.toLowerCase())}))}},u.a.createElement("option",{value:"All"},"All"),u.a.createElement("option",{value:"Sales"},"Sales"),u.a.createElement("option",{value:"Development"},"Development"),u.a.createElement("option",{value:"Management"},"Management"))))))))),u.a.createElement(p.a,{sm:"12"},u.a.createElement(f.a,null,u.a.createElement(v.a,null,u.a.createElement("div",{className:"ag-theme-material ag-grid-table"},u.a.createElement("div",{className:"ag-grid-actions d-flex justify-content-between flex-wrap mb-1"},u.a.createElement("div",{className:"sort-dropdown"},u.a.createElement(w.a,{className:"ag-dropdown p-1"},u.a.createElement(S.a,{tag:"div"},"1 - ",l," of 150",u.a.createElement(P.a,{className:"ml-50",size:15})),u.a.createElement(C.a,{right:!0},u.a.createElement(j.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(j.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(j.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(j.a,{tag:"div",onClick:function(){return e.filterSize(150)}},"150")))),u.a.createElement("div",{className:"filter-actions d-flex"},u.a.createElement(O.a,{className:"w-50 mr-1 mb-1 mb-sm-0",type:"text",placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.searchVal}),u.a.createElement("div",{className:"dropdown actions-dropdown"},u.a.createElement(x.a,null,u.a.createElement(S.a,{className:"px-2 py-75",color:"white"},"Actions",u.a.createElement(P.a,{className:"ml-50",size:15})),u.a.createElement(C.a,{right:!0},u.a.createElement(j.a,{tag:"a"},u.a.createElement(M.a,{size:15}),u.a.createElement("span",{className:"align-middle ml-50"},"Delete")),u.a.createElement(j.a,{tag:"a"},u.a.createElement(V.a,{size:15}),u.a.createElement("span",{className:"align-middle ml-50"},"Archive")),u.a.createElement(j.a,{tag:"a"},u.a.createElement(G.a,{size:15}),u.a.createElement("span",{className:"align-middle ml-50"},"Print")),u.a.createElement(j.a,{tag:"a"},u.a.createElement(I.a,{size:15}),u.a.createElement("span",{className:"align-middle ml-50"},"CSV"))))))),null!==this.state.rowData?u.a.createElement(A.a.Consumer,null,(function(t){return u.a.createElement(z.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,pivotPanelShow:"always",paginationPageSize:l,resizable:!0,enableRtl:"rtl"===t.state.direction})})):null)))))}}]),a}(u.a.Component));t.default=B},818:function(e,t,a){},821:function(e,t,a){"use strict";var n=a(5),r=a(6),l=a(0),i=a.n(l),s=a(1),o=a.n(s),c=a(4),d=a.n(c),u=a(3),m=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),f={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,l=e.hidden,s=e.widths,o=e.tag,c=e.check,m=e.size,p=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];s.forEach((function(t,n){var r=e[t];if(delete f[t],r||""===r){var l,i=!n;if(Object(u.isObject)(r)){var s,o=i?"-":"-"+t+"-";l=g(i,t,r.size),h.push(Object(u.mapToCssModules)(d()(((s={})[l]=r.size||""===r.size,s["order"+o+r.order]=r.order||0===r.order,s["offset"+o+r.offset]=r.offset||0===r.offset,s))),a)}else l=g(i,t,r),h.push(l)}}));var E=Object(u.mapToCssModules)(d()(t,!!l&&"sr-only",!!c&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),a);return i.a.createElement(o,Object(n.a)({htmlFor:p},f,{className:E}))};E.propTypes=f,E.defaultProps=h,t.a=E},831:function(e,t,a){"use strict";var n=a(5),r=a(6),l=a(0),i=a.n(l),s=a(1),o=a.n(s),c=a(4),d=a.n(c),u=a(3),m={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,l=e.row,s=e.disabled,o=e.check,c=e.inline,m=e.tag,p=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.mapToCssModules)(d()(t,!!l&&"row",o?"form-check":"form-group",!(!o||!c)&&"form-check-inline",!(!o||!s)&&"disabled"),a);return"fieldset"===m&&(p.disabled=s),i.a.createElement(m,Object(n.a)({},p,{className:f}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},873:function(e,t,a){"use strict";var n,r=a(5),l=a(6),i=a(15),s=a(17),o=a(33),c=a(0),d=a.n(c),u=a(1),m=a.n(u),p=a(4),f=a.n(p),h=a(103),g=a(3);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=v(v({},h.Transition.propTypes),{},{isOpen:m.a.bool,children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:g.tagPropType,className:m.a.node,navbar:m.a.bool,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])}),y=v(v({},h.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:g.TransitionTimeouts.Collapse}),N=((n={})[g.TransitionStatuses.ENTERING]="collapsing",n[g.TransitionStatuses.ENTERED]="collapse show",n[g.TransitionStatuses.EXITING]="collapsing",n[g.TransitionStatuses.EXITED]="collapse",n);function O(e){return e.scrollHeight}var w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(i.a)(a))})),a}Object(s.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:O(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:O(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,i=t.className,s=t.navbar,o=t.cssModule,c=t.children,u=(t.innerRef,Object(l.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),m=this.state.height,p=Object(g.pick)(u,g.TransitionPropTypeKeys),E=Object(g.omit)(u,g.TransitionPropTypeKeys);return d.a.createElement(h.Transition,Object(r.a)({},p,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return N[e]||"collapse"}(t),l=Object(g.mapToCssModules)(f()(i,n,s&&"navbar-collapse"),o),u=null===m?null:{height:m};return d.a.createElement(a,Object(r.a)({},E,{style:v(v({},E.style),u),className:l,ref:e.props.innerRef}),c)}))},t}(c.Component);w.propTypes=b,w.defaultProps=y,t.a=w},908:function(e,t,a){"use strict";var n=a(5),r=a(6),l=a(0),i=a.n(l),s=a(1),o=a.n(s),c=a(4),d=a.n(c),u=a(3),m={tag:u.tagPropType,type:o.a.string,size:o.a.string,color:o.a.string,className:o.a.string,cssModule:o.a.object,children:o.a.string},p=function(e){var t=e.className,a=e.cssModule,l=e.type,s=e.size,o=e.color,c=e.children,m=e.tag,p=Object(r.a)(e,["className","cssModule","type","size","color","children","tag"]),f=Object(u.mapToCssModules)(d()(t,!!s&&"spinner-"+l+"-"+s,"spinner-"+l,!!o&&"text-"+o),a);return i.a.createElement(m,Object(n.a)({role:"status"},p,{className:f}),c&&i.a.createElement("span",{className:Object(u.mapToCssModules)("sr-only",a)},c))};p.propTypes=m,p.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=p}}]);
//# sourceMappingURL=104.3b882253.chunk.js.map