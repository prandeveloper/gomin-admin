(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[167],{2146:function(e,a,t){"use strict";t.r(a);var n=t(77),r=t.n(n),i=t(128),l=t(13),c=t(14),o=t(16),s=t(15),u=t(0),d=t.n(u),m=t(183),p=t(1141),f=t(1142),g=t(1143),h=t(1146),v=t(794),w=t(796),E=t(792),S=t(791),b=t(802),z=t(798),N=t(179),P=t(809),k=t(445),D=t(265),y=t(22),A=(t(806),t(800),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Seller",field:"seller",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.seller))}},{headerName:"Description",field:"description",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.description))}},{headerName:"Subscription Plan",field:"sub_plan",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.sub_plan))}},{headerName:"Duration ",field:"duration",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.duration))}},{headerName:"Subscription Plan ",field:"sub_plan",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.sub_plan))}},{headerName:"Sort Order ",field:"sortorder",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.sortorder))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Inactive"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(a){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(k.a,{size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}),d.a.createElement(m.a,{color:"primary",outline:!0,className:"mr-2"},"Approve"))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/Getsubscription").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,z.a.get("/del_subscription/".concat(a)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return console.log(t),d.a.createElement(p.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"}),d.a.createElement(f.a,{sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{sm:"6",className:"float-left"},"Seller Subscription Details")),d.a.createElement(f.a,null,d.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/sellerSubs/addSub")}},"Add Subscription plan"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(D.a,{className:"ml-50",size:15})),d.a.createElement(E.a,{right:!0},d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(b.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(N.a.Consumer,null,(function(a){return d.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(d.a.Component));a.default=A},798:function(e,a,t){"use strict";var n=t(41),r=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=r},800:function(e,a,t){}}]);
//# sourceMappingURL=167.9dd6bf55.chunk.js.map