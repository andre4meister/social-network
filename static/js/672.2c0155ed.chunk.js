"use strict";(self.webpackChunk_1_first=self.webpackChunk_1_first||[]).push([[672],{5672:function(s,a,e){e.r(a),e.d(a,{default:function(){return w}});var i=e(364),n=e(7781),d=e(7370),o=e(1103),l="Dialogs_dialogs__+M+Zo",r="Dialogs_dialog__NkKeJ",t="Dialogs_dialogsItems__-2cB+",c="Dialogs_active__2WZRV",g="Dialogs_messages__286Of",m="Dialogs_message__YkZco",u="Dialogs_ava__MkDDn",_="Dialogs_name__t73wW",f=(e(2791),e(3504)),v=e(184),j=function(s){var a="/dialogs/"+s.id;return(0,v.jsxs)("div",{className:r+" "+c,children:[(0,v.jsx)("img",{src:s.ava,className:u,alt:"FriendAva"}),(0,v.jsx)(f.OL,{className:_,to:a,children:s.name})]})},x=function(s){return(0,v.jsx)("div",{className:g,children:(0,v.jsx)("div",{className:m,children:s.message})})},D=e(6139),h=e(704),N=e(9231),k=e(5304),M=(0,k.DT)(10),p=(0,h.Z)({form:"dialogAddMessageForm"})((function(s){return(0,v.jsx)("form",{onSubmit:s.handleSubmit,children:(0,v.jsxs)("div",{children:[(0,v.jsx)(D.Z,{component:N.Kx,name:"newMessageBody",placeholder:"Write your message",validate:[k.C1,M]}),(0,v.jsx)("button",{children:"Send"})]})})})),b=function(s){var a=s.dialogsData.map((function(s){return(0,v.jsx)(j,{name:s.name,id:s.id,ava:s.ava},s.id)})),e=s.messages.map((function(s){return(0,v.jsx)(x,{message:s.message,id:s.id},s.id)}));return(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("div",{className:t,children:a}),(0,v.jsx)("div",{className:g,children:e}),(0,v.jsx)(p,{onSubmit:function(a){console.log(a.newMessageBody),s.addMessage(a.newMessageBody)}})]})},w=(0,n.qC)((0,i.$j)((function(s){return{dialogsData:s.messagesPage.dialogsData,messages:s.messagesPage.messagesData}}),(function(s){return{addMessage:function(a){var e=(0,d.k)(a);s(e)}}})),o.D)(b)}}]);
//# sourceMappingURL=672.2c0155ed.chunk.js.map