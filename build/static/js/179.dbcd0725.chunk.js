(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[179],{2139:function(e,t,a){"use strict";a.r(t);var n=a(9),o=a(10),r=a(12),s=a(11),i=a(0),c=a.n(i),l=a(809),d=a(807),m=a(808),u=a(189),p=a(812),b=a(827),h=(a(901),a(922)),f=a(1002),E=a(934),C=a.n(E),N=(a(978),a(888),a(816)),S=a(18),g=a(929),k=a.n(g),y=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).onEditorStateChange=function(e){o.setState({editorState:e,description:C()(Object(h.convertToRaw)(e.getCurrentContent()))})},o.submitHandler=function(e){e.preventDefault(),N.a.post("/addTermscondition",o.state).then((function(e){console.log(e),o.props.history.push("/app/termsAndCondition/tAndCList"),k()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},o.state={description:"",editorState:h.EditorState.createEmpty()},o}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(l.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Term And Condition")),c.a.createElement(m.a,null,c.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return S.a.push("/app/termsAndCondition/tAndCList")}},"Back"))),c.a.createElement(p.a,null,c.a.createElement(b.a,{onSubmit:this.submitHandler},c.a.createElement(f.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),c.a.createElement("br",null),c.a.createElement(u.a,{color:"primary"},"Add New T&C"))))}}]),a}(c.a.Component);t.default=y},816:function(e,t,a){"use strict";var n=a(43),o=a.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});t.a=o},888:function(e,t,a){}}]);
//# sourceMappingURL=179.dbcd0725.chunk.js.map