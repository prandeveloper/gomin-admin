(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[233],{2164:function(e,a,t){"use strict";t.r(a);var i=t(9),r=t(10),n=t(12),l=t(11),o=t(0),c=t.n(o),s=t(809),d=t(812),m=t(805),u=t(583),g=t(579),f=t(145),h=t(819),p=t(189),S=t(826),w=t(102),b=t(273),v=t(43),z=t.n(v),y=(t(823),t(101)),C=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"First Name",field:"firstname",width:175,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Last Name",field:"lastname",filter:!0,width:175},{headerName:"Email",field:"email",filter:!0,width:250,pinned:window.innerWidth>992&&"left"},{headerName:"Company",field:"company",filter:!0,width:250},{headerName:"City",field:"city",filter:!0,width:150},{headerName:"Country",field:"country",filter:!0,width:150},{headerName:"State",field:"state",filter:!0,width:125},{headerName:"Zip",field:"zip",filter:"agNumberColumnFilter",width:140},{headerName:"Followers",field:"followers",filter:"agNumberColumnFilter",width:140}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;z.a.get("/api/aggrid/data").then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,i=a.columnDefs,r=a.defaultColDef;return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{breadCrumbTitle:"Aggrid Table",breadCrumbParent:"Forms & Tables",breadCrumbActive:"Aggrid Table"}),c.a.createElement(s.a,{className:"overflow-hidden agGrid-card"},c.a.createElement(d.a,{className:"py-0"},null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(m.a,{className:"p-1 ag-dropdown"},c.a.createElement(u.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(b.a,{className:"ml-50",size:15})),c.a.createElement(g.a,{right:!0},c.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(h.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(w.a.Consumer,null,(function(a){return c.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:i,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(c.a.Component);a.default=C}}]);
//# sourceMappingURL=233.97f6be02.chunk.js.map