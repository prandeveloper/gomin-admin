(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[112,1],{2128:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a.n(n),i=a(132),l=a(9),c=a(10),s=a(12),o=a(11),u=a(0),m=a.n(u),d=a(807),g=a(808),f=a(809),p=a(189),h=a(812),w=a(805),v=a(583),E=a(579),S=a(145),N=a(819),b=a(816),z=a(102),P=a(826),k=(a(872),a(316)),A=a(450),C=a(273),D=a(18),y=(a(823),a(818),a(997)),x=a.n(y),R=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.no",valueGetter:"node.rowIndex + 1",field:"sortorder",width:100,filter:!0},{headerName:"Posted Date",field:"createdAt",filter:"agSetColumnFilter",width:240,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("div",{className:""},m.a.createElement("span",null,m.a.createElement(x.a,{format:"llll"},e.data.createdAt))))}},{headerName:"Image",field:"news_img",filter:!0,width:120,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("img",{className:"rounded-circle mr-50",src:e.data.news_img,alt:"user avatar",height:"40",width:"40"}))}},{headerName:"News Title",field:"news_title",filter:"agSetColumnFilter",width:180,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("div",{className:""},m.a.createElement("span",null,e.data.news_title)))}},{headerName:"Description",field:"description",filter:"agSetColumnFilter",width:180,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("div",{className:""},m.a.createElement("span",null,e.data.description)))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(k.a,{className:"mr-50",size:20}),m.a.createElement(A.a,{size:20,onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/allblognews").then((function(e){var a=e.data.data;t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,b.a.get("/delblognews/".concat(t)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return m.a.createElement(d.a,{className:"app-user-list"},m.a.createElement(g.a,{sm:"12"}),m.a.createElement(g.a,{sm:"12"},m.a.createElement(f.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(g.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"News List")),m.a.createElement(g.a,null,m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return D.a.push("/app/website/news/addNews")}},"Add New News"))),m.a.createElement(h.a,null,null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(w.a,{className:"p-1 ag-dropdown"},m.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(C.a,{className:"ml-50",size:15})),m.a.createElement(E.a,{right:!0},m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(N.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),m.a.createElement("div",{className:"export-btn"},m.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(z.a.Consumer,null,(function(t){return m.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(m.a.Component);t.default=R},816:function(e,t,a){"use strict";var n=a(43),r=a.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});t.a=r},818:function(e,t,a){},823:function(e,t,a){}}]);
//# sourceMappingURL=112.70ba1aa3.chunk.js.map