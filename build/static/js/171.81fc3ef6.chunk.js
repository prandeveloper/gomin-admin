(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[171],{2071:function(e,a,t){"use strict";t.r(a);var l=t(9),n=t(10),s=t(12),c=t(11),r=t(0),m=t.n(r),i=t(807),o=t(808),d=t(809),u=t(189),E=t(812),f=t(804),h=t(816),v=(t(818),t(18)),N=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;h.a.get("/viewoneseller/".concat(a)).then((function(a){console.log(a.data),console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(i.a,null,m.a.createElement(o.a,{sm:"12"},m.a.createElement(d.a,null,m.a.createElement(i.a,{className:"m-2"},m.a.createElement(o.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Seller Detail")),m.a.createElement(o.a,null,m.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/seller/sellerList")}},"Back"))),m.a.createElement(E.a,null,m.a.createElement(i.a,{className:"mx-0",col:"12"},m.a.createElement(o.a,{className:"pl-0",sm:"12",lg:"6"},m.a.createElement(f.a,{className:"d-sm-flex d-block"},m.a.createElement(f.a,{body:!0},m.a.createElement(i.a,{className:"ml-4"},m.a.createElement(o.a,{sm:"9",md:"12",lg:"12"},m.a.createElement("div",{className:"users-page-view-table"},m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Seller Name"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.name))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Seller Email"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.email))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Mobile"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.mobile))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Role Name"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.rolename)))))))))))))))}}]),t}(m.a.Component);a.default=N},816:function(e,a,t){"use strict";var l=t(43),n=t.n(l).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=n},818:function(e,a,t){}}]);
//# sourceMappingURL=171.81fc3ef6.chunk.js.map