(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[76],{1693:function(e,a,t){},2147:function(e,a,t){"use strict";t.r(a),t.d(a,"UserProfile",(function(){return E}));var n=t(864),r=t(44),s=t(9),l=t(10),o=t(12),i=t(11),c=t(0),m=t.n(c),d=t(807),u=t(808),p=t(809),f=t(812),h=t(827),b=t(821),g=t(819),y=t(189),v=(t(1693),t(816)),E=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",l.state.name),a.append("email",l.state.email),a.append("password",l.state.password),a.append("cnfrm_password",l.state.cnfrm_password),a.append("mobile",l.state.mobile),a.append("country",l.state.country),a.append("state",l.state.state),a.append("city",l.state.city),null!==l.state.selectedFile&&a.append("image",l.state.selectedFile,l.state.selectedName);var t,r=Object(n.a)(a.values());try{for(r.s();!(t=r.n()).done;){var s=t.value;console.log(s)}}catch(m){r.e(m)}finally{r.f()}var o,i=Object(n.a)(a.values());try{for(i.s();!(o=i.n()).done;){s=o.value;console.log(s)}}catch(m){i.e(m)}finally{i.f()}var c=l.props.match.params.id;v.a.post("/editadmin/".concat(c),a).then((function(e){console.log(e.data)})).then((function(e){console.log(e),window.location.reload()})).catch((function(e){console.log(e.response)}))},l.state={name:"",mobile:"",email:"",country:"",state:"",city:"",password:"",cnfmPassword:"",selectedName:"",selectedFile:null,image:""},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=JSON.parse(localStorage.getItem("userData"));v.a.get("/getoneadmin/".concat(a._id)).then((function(a){console.log(a),e.setState({name:a.data.data.name,email:a.data.data.email,mobile:a.data.data.mobile,password:a.data.data.password,cnfrm_password:a.data.data.cnfrm_password,image:a.data.data.image,country:a.data.data.country,state:a.data.data.state,city:a.data.data.city})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(d.a,null,m.a.createElement(u.a,{lg:"12"},m.a.createElement(p.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(u.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Profile"))),m.a.createElement(f.a,null,m.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(d.a,null,m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Name:"),m.a.createElement(g.a,{required:!0,type:"text",placeholder:"Name",name:"name",value:this.state.name,onChange:this.changeHandler})),m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null," Email:"),m.a.createElement(g.a,{required:!0,type:"email",name:"email",value:this.state.email,onChange:this.changeHandler,placeholder:"Enter Email"}))),m.a.createElement(d.a,null,m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Mobile:"),m.a.createElement(g.a,{required:!0,type:"text",placeholder:"Mobile Number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler}))),m.a.createElement(d.a,null,m.a.createElement(u.a,{lg:"4",md:"2",sm:"2",className:"mb-2"},m.a.createElement(b.a,null,"Country:"),m.a.createElement(g.a,{required:!0,type:"text",placeholder:"Country",name:"country",value:this.state.country,onChange:this.changeHandler})),m.a.createElement(u.a,{lg:"4",md:"2",sm:"2",className:"mb-2"},m.a.createElement(b.a,null,"State:"),m.a.createElement(g.a,{required:!0,type:"text",placeholder:"State",name:"state",value:this.state.state,onChange:this.changeHandler})),m.a.createElement(u.a,{lg:"4",md:"2",sm:"2",className:"mb-2"},m.a.createElement(b.a,null,"City :"),m.a.createElement(g.a,{required:!0,type:"text",placeholder:"City",name:"city",value:this.state.city,onChange:this.changeHandler}))),m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"User Image"),m.a.createElement(g.a,{required:!0,type:"file",name:"image",onChange:this.onChangeHandler}),m.a.createElement("img",{src:this.state.image,style:{width:"50px",height:"50px"}})),m.a.createElement(d.a,null,m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Password:"),m.a.createElement(g.a,{required:!0,type:"text",name:"password",id:"show_hide_password",value:this.state.password,onChange:this.changeHandler,placeholder:"Set Password For User"})),m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Confirm Password:"),m.a.createElement(g.a,{required:!0,type:"text",name:"cnfmPassword",value:this.state.cnfmPassword,onChange:this.changeHandler,placeholder:"Set Password For User"}))),m.a.createElement(d.a,null,m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(y.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))))}}]),t}(c.Component);a.default=E},816:function(e,a,t){"use strict";var n=t(43),r=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=r},819:function(e,a,t){"use strict";var n=t(5),r=t(6),s=t(15),l=t(17),o=t(0),i=t.n(o),c=t(1),m=t.n(c),d=t(4),u=t.n(d),p=t(3),f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,o=e.valid,c=e.invalid,m=e.tag,d=e.addon,f=e.plaintext,h=e.innerRef,b=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),v=m||("select"===s||"textarea"===s?s:"input"),E="form-control";f?(E+="-plaintext",v=m||"input"):"file"===s?E+="-file":"range"===s?E+="-range":g&&(E=d?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var w=Object(p.mapToCssModules)(u()(a,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,E),t);return("input"===v||m&&"function"===typeof m)&&(b.type=s),b.children&&!f&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(v,Object(n.a)({},b,{ref:h,className:w,"aria-invalid":c}))},a}(i.a.Component);h.propTypes=f,h.defaultProps={type:"text"},a.a=h},821:function(e,a,t){"use strict";var n=t(5),r=t(6),s=t(0),l=t.n(s),o=t(1),i=t.n(o),c=t(4),m=t.n(c),d=t(3),u=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:u,order:u,offset:u})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,s=e.hidden,o=e.widths,i=e.tag,c=e.check,u=e.size,p=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];o.forEach((function(a,n){var r=e[a];if(delete f[a],r||""===r){var s,l=!n;if(Object(d.isObject)(r)){var o,i=l?"-":"-"+a+"-";s=b(l,a,r.size),h.push(Object(d.mapToCssModules)(m()(((o={})[s]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o))),t)}else s=b(l,a,r),h.push(s)}}));var g=Object(d.mapToCssModules)(m()(a,!!s&&"sr-only",!!c&&"form-check-label",!!u&&"col-form-label-"+u,h,!!h.length&&"col-form-label"),t);return l.a.createElement(i,Object(n.a)({htmlFor:p},f,{className:g}))};g.propTypes=f,g.defaultProps=h,a.a=g},827:function(e,a,t){"use strict";var n=t(5),r=t(6),s=t(15),l=t(17),o=t(0),i=t.n(o),c=t(1),m=t.n(c),d=t(4),u=t.n(d),p=t(3),f={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,o=e.innerRef,c=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(p.mapToCssModules)(u()(a,!!s&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},c,{ref:o,className:m}))},a}(o.Component);h.propTypes=f,h.defaultProps={tag:"form"},a.a=h},864:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(105);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){o=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=76.7cd98055.chunk.js.map