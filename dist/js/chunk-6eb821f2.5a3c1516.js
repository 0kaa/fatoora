(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eb821f2"],{f014:function(e,a,t){"use strict";t.r(a);var c=t("7a23");function n(e,a,t,n,s,l){var o=Object(c["resolveComponent"])("KTModalCard"),r=Object(c["resolveComponent"])("KTInviteFriendsModal");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(o,{title:"Invite Friends Modal Example",description:"Click on the below buttons\n  to launch <br />\n  a friend invitation example.",image:"/media/illustrations/sketchy-1/1.png","button-text":"Invite Friends","modal-id":"kt_modal_invite_friends"}),Object(c["createVNode"])(r)],64)}var s=t("ffed"),l={class:"modal fade",id:"kt_modal_invite_friends",tabindex:"-1","aria-hidden":"true"},o={class:"modal-dialog mw-650px"},r={class:"modal-content"},i={class:"modal-header pb-0 border-0 justify-content-end"},m={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},d={class:"svg-icon svg-icon-1"},b={class:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15"},p=Object(c["createStaticVNode"])('<div class="text-center mb-13"><h1 class="mb-3">Invite a Friend</h1><div class="text-gray-400 fw-bold fs-5"> If you need more info, please check out <a href="#" class="link-primary fw-bolder">FAQ Page</a>. </div></div><div class="btn btn-light-primary fw-bolder w-100 mb-8"><img alt="Logo" src="/media/svg/brand-logos/google-icon.svg" class="h-20px me-3"> Invite Gmail Contacts </div><div class="separator d-flex flex-center mb-8"><span class="text-uppercase bg-white fs-7 fw-bold text-gray-400 px-3">or</span></div><textarea class="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here">\n          </textarea>',4),v={class:"mb-10"},f=Object(c["createElementVNode"])("div",{class:"fs-6 fw-bold mb-2"},"Your Invitations",-1),u={class:"mh-300px scroll-y me-n7 pe-7"},j={class:"d-flex align-items-center"},g={class:"symbol symbol-35px symbol-circle"},O=["src"],h={class:"ms-5"},x={href:"#",class:"fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"},y={class:"fw-bold text-gray-400"},k={class:"ms-2 w-100px"},E=["onUpdate:modelValue"],w=Object(c["createElementVNode"])("option",{value:"1"},"Guest",-1),N=Object(c["createElementVNode"])("option",{value:"2"},"Owner",-1),V=Object(c["createElementVNode"])("option",{value:"3"},"Can Edit",-1),B=[w,N,V],C=Object(c["createStaticVNode"])('<div class="d-flex flex-stack"><div class="me-5 fw-bold"><label class="fs-6">Adding Users by Team Members</label><div class="fs-7 text-gray-400"> If you need more info, please check budget planning </div></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="1" checked="checked"><span class="form-check-label fw-bold text-gray-400"> Allowed </span></label></div>',1);function M(e,a,t,n,s,w){var N=Object(c["resolveComponent"])("inline-svg");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("span",d,[Object(c["createVNode"])(N,{src:"/media/icons/duotune/arrows/arr061.svg"})])])]),Object(c["createElementVNode"])("div",b,[p,Object(c["createElementVNode"])("div",v,[f,Object(c["createElementVNode"])("div",u,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.users,(function(e,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:a,class:"d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed"},[Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("div",g,[e.avatar?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:0,alt:"Pic",src:e.avatar},null,8,O)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:1,class:Object(c["normalizeClass"])(["bg-light-"+e.state+" text-"+e.state,"symbol-label fw-bold"])},Object(c["toDisplayString"])(e.name.charAt(0)),3))]),Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("a",x,Object(c["toDisplayString"])(e.name),1),Object(c["createElementVNode"])("div",y,Object(c["toDisplayString"])(e.email),1)])]),Object(c["createElementVNode"])("div",k,[Object(c["withDirectives"])(Object(c["createElementVNode"])("select",{"onUpdate:modelValue":function(a){return e.access=a},class:"form-select form-select-solid form-select-sm","data-control":"select2","data-hide-search":"true"},B,8,E),[[c["vModelSelect"],e.access]])])])})),128))])]),C])])])])}var S=Object(c["defineComponent"])({name:"invite-friends-modal",components:{},setup:function(){var e=[{avatar:"/media/avatars/150-1.jpg",name:"Emma Smith",email:"e.smith@kpmg.com.au",access:"1"},{state:"danger",name:"Melody Macy",email:"melody@altbox.com",access:"1"},{avatar:"/media/avatars/150-2.jpg",name:"Max Smith",email:"max@kt.com",access:"3"},{avatar:"/media/avatars/150-2.jpg",name:"Sean Bean",email:"sean@dellito.com",access:"2"},{avatar:"/media/avatars/150-15.jpg",name:"Brian Cox",email:"brian@exchange.com",access:"3"},{state:"warning",name:"Mikaela Collins",email:"mikaela@pexcom.com",access:"2"},{avatar:"/media/avatars/150-8.jpg",name:"Francis Mitcham",email:"f.mitcham@kpmg.com.au",access:"3"},{state:"danger",name:"Olivia Wild",email:"olivia@corpmail.com",access:"2"},{state:"info",name:"Neil Owen",email:"owen.neil@gmail.com",access:"1"},{avatar:"/media/avatars/150-6.jpg",name:"Dan Wilson",email:"dam@consilting.com",access:"3"},{state:"danger",name:"Emma Bold",email:"emma@intenso.com",access:"2"},{avatar:"/media/avatars/150-7.jpg",name:"Ana Crown",email:"ana.cf@limtel.com",access:"1"},{state:"primary",name:"Robert Doe",email:"robert@benko.com",access:"3"},{avatar:"/media/avatars/150-17.jpg",name:"John Miller",email:"miller@mapple.com",access:"3"},{state:"success",name:"Lucy Kunic",email:"lucy.m@fentech.com",access:"2"},{state:"/media/avatars/150-10.jpg",name:"Ethan Wilder",email:"ethan@loop.com.au",access:"1"},{state:"/media/avatars/150-7.jpg",name:"Ana Crown",email:"ana.cf@limtel.com",access:"3"}];return{users:e}}}),I=t("6b0d"),T=t.n(I);const A=T()(S,[["render",M]]);var D=A,F=t("fd34"),_=Object(c["defineComponent"])({name:"invite-friends",components:{KTModalCard:s["a"],KTInviteFriendsModal:D},setup:function(){Object(c["onMounted"])((function(){Object(F["a"])("Invite Friends",["Modals","General"])}))}});const K=T()(_,[["render",n]]);a["default"]=K},fd34:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return l}));var c=t("0613"),n=t("38e0"),s=function(e,a){c["a"].dispatch(n["a"].SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:a})},l=function(e){c["a"].dispatch(n["a"].SET_BREADCRUMB_ACTION,{title:e})}},ffed:function(e,a,t){"use strict";var c=t("7a23"),n={class:"card"},s={class:"card-body p-0"},l={class:"card-px text-center py-20 my-10"},o={class:"fs-2x fw-bolder mb-10"},r={class:"text-gray-400 fs-5 fw-bold mb-13"},i=["innerHTML"],m=["data-bs-target"],d={class:"text-center px-5"},b=["src"];function p(e,a,t,p,v,f){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("h2",o,Object(c["toDisplayString"])(e.title),1),Object(c["createElementVNode"])("p",r,[Object(c["createElementVNode"])("span",{innerHTML:e.description},null,8,i)]),Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":"#"+e.modalId},Object(c["toDisplayString"])(e.buttonText),9,m)]),Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("img",{src:e.image,alt:"",class:"mw-100 mh-300px"},null,8,b)])])])}var v=Object(c["defineComponent"])({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),f=t("6b0d"),u=t.n(f);const j=u()(v,[["render",p]]);a["a"]=j}}]);
//# sourceMappingURL=chunk-6eb821f2.5a3c1516.js.map