"use strict";(self.webpackChunk_1_first=self.webpackChunk_1_first||[]).push([[793],{6793:function(s,t,e){e.r(t),e.d(t,{default:function(){return D}});var i=e(8683),o=e(5671),r=e(3144),n=e(136),a=e(5716),l=e(2791),c=e(364),u=e(6871),d=e(7781),p=e(6868),f=e(1103),h=e(704),m=e(6139),j=e(5304),x=e(9231),_="MyPosts_postsBlock__FrXXy",v="MyPosts_posts__mjHK3",g="Post_item__vwSeO",b="Post_deleteButton__6fFMP",P=e(184),k=function(s){return(0,P.jsxs)("div",{className:g,children:[(0,P.jsx)("img",{src:"https://i.pinimg.com/600x315/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg",alt:"ava"}),s.message,(0,P.jsx)("div",{children:(0,P.jsx)("span",{children:s.like>1?s.like+" likes":s.like+" like"})}),(0,P.jsx)("span",{className:b,onClick:function(){s.deletePost(s.id)},children:"Delete"})]})},N=(0,j.DT)(10),y=l.memo((function(s){var t=s.posts.map((function(t){return(0,P.jsx)(k,{message:t.name,like:t.like,id:t.id,deletePost:s.deletePost},t.id)}));return(0,P.jsxs)("div",{className:_,children:[(0,P.jsx)("h2",{children:"My posts"}),(0,P.jsx)(S,{onSubmit:function(t){s.addPost(t.newPostText)}}),(0,P.jsx)("div",{children:"New posts"}),(0,P.jsx)("div",{className:v,children:t})]})})),S=(0,h.Z)({form:"addNewPostForm"})((function(s){return(0,P.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,P.jsx)("div",{children:(0,P.jsx)(m.Z,{component:x.Kx,name:"newPostText",validate:[j.C1,N]})}),(0,P.jsx)("div",{children:(0,P.jsx)("button",{children:"Add button"})})]})})),Z=y,w=(0,c.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),{addPost:p.q2,deletePost:p.fR})(Z),A={},I=e(8992),M={bigphoto:"ProfileInfo_bigphoto__x-vgf",descriptionBlock:"ProfileInfo_descriptionBlock__z22tq",describe:"ProfileInfo_describe__dJquU",description:"ProfileInfo_description__6jjZt",name:"ProfileInfo_name__MRkB9",aboutMe:"ProfileInfo_aboutMe__eVjON",contacts:"ProfileInfo_contacts__+0myL"},q=e(885),B=function(s){var t=(0,l.useState)(!1),e=(0,q.Z)(t,2),i=e[0],o=e[1],r=(0,l.useState)(s.status),n=(0,q.Z)(r,2),a=n[0],c=n[1];return(0,l.useEffect)((function(){c(s.status)}),[s.status]),(0,P.jsxs)("div",{children:[!i&&(0,P.jsx)("div",{children:(0,P.jsx)("span",{onDoubleClick:function(){o(!0)},children:s.status||"No status"})}),i&&(0,P.jsx)("div",{children:(0,P.jsx)("input",{autoFocus:!0,onChange:function(s){c(s.currentTarget.value)},value:a,onBlur:function(){o(!1),s.updateStatus(a)}})})]})},C=function(s){return s.profile?(0,P.jsxs)("div",{className:M.profile,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("img",{className:M.bigphoto,alt:"bigphoto",src:s.profile.photos.large?s.profile.photos.large:"https://www.burgessyachts.com/sitefiles/burgess/medialibrary/destinations/corsica-sardinia/beach_panorama_in_maddalena_islands_sardinia_italy_vb770115.jpg?width=2000&height=900&mode=crop&format=jpeg&quality=80"}),(0,P.jsx)(B,{status:s.status,updateStatus:s.updateStatus})]}),(0,P.jsxs)("div",{className:M.descriptionBlock,children:[(0,P.jsx)("div",{className:M.smallAva,children:(0,P.jsx)("img",{src:s.profile.photos.small?s.profile.photos.small:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnD_TgRXHqfB2NP_huv4Wqwb2E7l8XzV0HrWRByrFFJ4KZ4v-6FRAZUeLV_zX9zp0gptA&usqp=CAU",alt:"user"+s.profile.id})}),(0,P.jsxs)("div",{className:M.describe,children:[(0,P.jsxs)("div",{className:M.description,children:[(0,P.jsx)("div",{className:M.name,children:s.profile.fullName}),(0,P.jsx)("div",{className:M.aboutMe,children:s.profile.aboutMe}),s.profile.lookingForAJobDescription]}),(0,P.jsxs)("div",{className:M.contacts,children:[(0,P.jsx)("div",{children:"My contacts:"}),(0,P.jsx)("div",{children:s.profile.contacts.facebook}),(0,P.jsx)("div",{children:s.profile.contacts.github}),(0,P.jsx)("div",{children:s.profile.contacts.vk})]})]})]})]}):(0,P.jsx)(I.Z,{})},F=function(s){return(0,P.jsxs)("div",{className:A.profile,children:[(0,P.jsx)(C,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,P.jsx)(w,{})]})},U=function(s){(0,n.Z)(e,s);var t=(0,a.Z)(e);function e(){return(0,o.Z)(this,e),t.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(this.props.params.userId),this.props.getStatus(this.props.params.userId)}},{key:"render",value:function(){return(0,P.jsx)(F,(0,i.Z)((0,i.Z)({},this.props),{},{profile:this.props.profile,isAuth:this.props.isAuth,updateStatus:this.props.updateStatus,status:this.props.status}))}}]),e}(l.Component),D=(0,d.qC)((0,c.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:p.et,getStatus:p.lR,updateStatus:p.Nf}),f.D)((function(s){var t=(0,u.UO)();return(0,P.jsx)(U,(0,i.Z)((0,i.Z)({},s),{},{params:t,isAuth:s.isAuth}))}))}}]);
//# sourceMappingURL=793.83bc84f7.chunk.js.map