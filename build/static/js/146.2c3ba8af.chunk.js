(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[146],{2103:function(e,a,t){"use strict";t.r(a);var r=t(78),n=t.n(r),i=t(132),l=t(9),c=t(10),o=t(12),d=t(11),u=t(0),s=t.n(u),m=t(807),f=t(808),g=t(809),p=t(189),h=t(812),v=t(805),w=t(583),E=t(579),N=t(145),S=t(819),b=t(816),k=t(102),y=t(826),z=t(319),R=t(316),A=t(450),C=t(273),P=t(18),D=(t(823),t(818),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Product Image",field:"product_img",filter:!1,width:150,setColumnVisible:!1,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("img",{className:" rounded-circle  mr-3",src:e.data.product_img,alt:"user avatar",height:"40",width:"40"}))}},{headerName:"Activity Logs Name",field:"item_name",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.item_name))}},{headerName:"Activity Logs Code",field:"code",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.code))}},{headerName:"Short Description",field:"short_desc",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.short_desc))}},{headerName:"Description",field:"desc",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.desc))}},{headerName:"HSN Code",field:"hsn_code",filter:!0,width:180,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.hsn_code))}},{headerName:"Brand",field:"brand",filter:!0,width:200,cellRendererFramework:function(e){var a;return s.a.createElement("div",null,s.a.createElement("span",null,null===(a=e.data.brand)||void 0===a?void 0:a.name))}},{headerName:"Product Category",field:"productcategory?.name",filter:!0,width:200,cellRendererFramework:function(e){var a;return s.a.createElement("div",null,s.a.createElement("span",null,null===(a=e.data.productcategory)||void 0===a?void 0:a.name))}},{headerName:"Product Sub-Category",field:"productsubcategory",filter:!0,width:200,cellRendererFramework:function(e){var a;return s.a.createElement("div",null,s.a.createElement("span",null,null===(a=e.data.productsubcategory)||void 0===a?void 0:a.name))}},{headerName:"Stock Quantity",field:"stock_qty",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.stock_qty))}},{headerName:"Size",field:"size",filter:!0,width:150,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.size))}},{headerName:"Colour",field:"colour",filter:!0,width:180,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.colour))}},{headerName:"Material",field:"material",filter:!0,width:180,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.material))}},{headerName:"Barcode",field:"barcode",filter:!0,width:180,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.barcode))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Inactive"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(z.a,{className:"mr-50",size:20,onClick:function(){return P.a.push("/app/activity/viewActivityLogs/".concat(a.data._id))}}),s.a.createElement(R.a,{className:"mr-50",size:20,onClick:function(){return P.a.push("/app/user/edit")}}),s.a.createElement(A.a,{size:20,onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/allproduct").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("/delproduct/".concat(a)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return console.log(t),s.a.createElement(m.a,{className:"app-user-list"},s.a.createElement(f.a,{sm:"12"}),s.a.createElement(f.a,{sm:"12"},s.a.createElement(g.a,null,s.a.createElement(m.a,{className:"m-2"},s.a.createElement(f.a,null,s.a.createElement("h1",{sm:"6",className:"float-left"},"Activity Logs")),s.a.createElement(f.a,null,s.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return P.a.push("/app/activity/addActivityLogs")}},"Add Activity logs"))),s.a.createElement(h.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(v.a,{className:"p-1 ag-dropdown"},s.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(C.a,{className:"ml-50",size:15})),s.a.createElement(E.a,{right:!0},s.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(S.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(k.a.Consumer,null,(function(a){return s.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(s.a.Component));a.default=D},816:function(e,a,t){"use strict";var r=t(43),n=t.n(r).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=n},818:function(e,a,t){}}]);
//# sourceMappingURL=146.2c3ba8af.chunk.js.map