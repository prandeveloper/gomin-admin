(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[166],{2140:function(e,a,t){"use strict";t.r(a);var o=t(9),n=t(10),r=t(12),c=t(11),i=t(0),s=t.n(i),l=t(809),d=t(807),m=t(808),p=t(189),u=t(812),b=t(827),h=(t(901),t(922)),y=t(1002),f=t(934),E=t.n(f),N=(t(978),t(888),t(816)),v=t(18),S=t(929),g=t.n(S),k=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onEditorStateChange=function(e){n.setState({editorState:e,description:E()(Object(h.convertToRaw)(e.getCurrentContent()))})},n.submitHandler=function(e){e.preventDefault(),N.a.post("/addprivacy_policy",n.state).then((function(e){console.log(e),n.props.history.push("/app/privacyPolicy/privacyPolicy"),g()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},n.state={description:"",editorState:h.EditorState.createEmpty()},n}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(l.a,null,s.a.createElement(d.a,{className:"m-2"},s.a.createElement(m.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Privacy Policy")),s.a.createElement(m.a,null,s.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/privacyPolicy/privacyPolicy")}},"Back"))),s.a.createElement(u.a,null,s.a.createElement(b.a,{onSubmit:this.submitHandler},s.a.createElement(y.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),s.a.createElement("br",null),s.a.createElement(p.a,{color:"primary"},"Add New Policy"))))}}]),t}(s.a.Component);a.default=k},816:function(e,a,t){"use strict";var o=t(43),n=t.n(o).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=n},888:function(e,a,t){}}]);
//# sourceMappingURL=166.8a03fe33.chunk.js.map