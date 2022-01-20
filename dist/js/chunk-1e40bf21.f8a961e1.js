(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e40bf21"],{"9a89":function(e,t,a){"use strict";a.r(t);var c=a("7a23");function o(e,t,a,o,l,n){var r=Object(c["resolveComponent"])("KTModalCard"),d=Object(c["resolveComponent"])("KTCreateAPIKeyModal");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(r,{title:"Create API Key Modal Example",description:"Click on the below buttons to launch <br/>a new API Key creation example.",image:"/media/illustrations/sketchy-1/16.png","button-text":"Create API Key","modal-id":"kt_modal_create_api_key"}),Object(c["createVNode"])(d)],64)}var l=a("ffed"),n={class:"modal fade",id:"kt_modal_create_api_key",ref:"createAPIKeyModalRef",tabindex:"-1","aria-hidden":"true"},r={class:"modal-dialog modal-dialog-centered mw-650px"},d={class:"modal-content"},s={class:"modal-header",id:"kt_modal_create_api_key_header"},i=Object(c["createElementVNode"])("h2",null,"Create API Key",-1),m={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},b={class:"svg-icon svg-icon-1"},u={class:"modal-body py-10 px-lg-17"},p={class:"scroll-y me-n7 pe-7",id:"kt_modal_create_api_key_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_create_api_key_header","data-kt-scroll-wrappers":"#kt_modal_create_api_key_scroll","data-kt-scroll-offset":"300px"},f={class:"notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6"},O={class:"svg-icon svg-icon-2tx svg-icon-warning me-4"},j=Object(c["createElementVNode"])("div",{class:"d-flex flex-stack flex-grow-1"},[Object(c["createElementVNode"])("div",{class:"fw-bold"},[Object(c["createElementVNode"])("h4",{class:"text-gray-800 fw-bolder"},"Please Note!"),Object(c["createElementVNode"])("div",{class:"fs-6 text-gray-600"},[Object(c["createTextVNode"])(" Adding new API key may afftect to your "),Object(c["createElementVNode"])("a",{href:"#"},"Affiliate Income")])])],-1),v={class:"mb-5 fv-row"},V=Object(c["createElementVNode"])("label",{class:"required fs-5 fw-bold mb-2"},"API Name",-1),N={class:"fv-plugins-message-container"},g={class:"fv-help-block"},E={class:"d-flex flex-column mb-5 fv-row"},h=Object(c["createElementVNode"])("label",{class:"required fs-5 fw-bold mb-2"},"Short Description",-1),y={class:"fv-plugins-message-container"},_={class:"fv-help-block"},k={class:"d-flex flex-column mb-10 fv-row"},x=Object(c["createElementVNode"])("label",{class:"required fs-5 fw-bold mb-2"},"Category",-1),w=Object(c["createElementVNode"])("option",{value:""},"Select a Category...",-1),C=Object(c["createElementVNode"])("option",{value:"1"},"CRM",-1),A=Object(c["createElementVNode"])("option",{value:"2"},"Project Alice",-1),I=Object(c["createElementVNode"])("option",{value:"3"},"Keenthemes",-1),D=Object(c["createElementVNode"])("option",{value:"4"},"General",-1),S={class:"fv-plugins-message-container"},M={class:"fv-help-block"},P={class:"mb-10"},T=Object(c["createElementVNode"])("div",{class:"mb-3"},[Object(c["createElementVNode"])("label",{class:"d-flex align-items-center fs-5 fw-bold"},[Object(c["createElementVNode"])("span",{class:"required"},"Specify Your API Method"),Object(c["createElementVNode"])("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Your billing numbers will be calculated based on your API method"})]),Object(c["createElementVNode"])("div",{class:"fs-7 fw-bold text-gray-400"}," If you need more info, please check budget planning ")],-1),B={class:"fv-row"},K=Object(c["createElementVNode"])("option",{value:""},"Select a API method...",-1),q=Object(c["createElementVNode"])("option",{value:"1"},"Open API",-1),R=Object(c["createElementVNode"])("option",{value:"2"},"SQL Call",-1),U=Object(c["createElementVNode"])("option",{value:"3"},"UI/UX",-1),F=Object(c["createElementVNode"])("option",{value:"4"},"Docs",-1),L={class:"fv-plugins-message-container"},Y={class:"fv-help-block"},H={class:"modal-footer flex-center"},J=Object(c["createElementVNode"])("button",{type:"reset",id:"kt_modal_create_api_key_cancel",class:"btn btn-white me-3"}," Discard ",-1),G={ref:"submitButtonRef",type:"submit",id:"kt_modal_create_api_key_submit",class:"btn btn-primary"},Q=Object(c["createElementVNode"])("span",{class:"indicator-label"}," Submit ",-1),X=Object(c["createElementVNode"])("span",{class:"indicator-progress"},[Object(c["createTextVNode"])(" Please wait... "),Object(c["createElementVNode"])("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),z=[Q,X];function W(e,t,a,o,l,Q){var X=Object(c["resolveComponent"])("inline-svg"),W=Object(c["resolveComponent"])("Field"),Z=Object(c["resolveComponent"])("ErrorMessage"),$=Object(c["resolveComponent"])("Form");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("div",s,[i,Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("span",b,[Object(c["createVNode"])(X,{src:"/media/icons/duotune/arrows/arr061.svg"})])])]),Object(c["createVNode"])($,{id:"kt_modal_create_api_key_form",class:"form",onSubmit:e.submit,"validation-schema":e.validationSchema},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("div",f,[Object(c["createElementVNode"])("span",O,[Object(c["createVNode"])(X,{src:"/media/icons/duotune/general/gen044.svg"})]),j]),Object(c["createElementVNode"])("div",v,[V,Object(c["createVNode"])(W,{type:"text",class:"form-control form-control-solid",placeholder:"Your API Name",name:"apiName",modelValue:e.apiData.apiName,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.apiData.apiName=t})},null,8,["modelValue"]),Object(c["createElementVNode"])("div",N,[Object(c["createElementVNode"])("div",g,[Object(c["createVNode"])(Z,{name:"apiName"})])])]),Object(c["createElementVNode"])("div",E,[h,Object(c["createVNode"])(W,{type:"text",class:"form-control form-control-solid",rows:"3",name:"shortDescription",placeholder:"Describe your API",modelValue:e.apiData.shortDescription,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.apiData.shortDescription=t})},null,8,["modelValue"]),Object(c["createElementVNode"])("div",y,[Object(c["createElementVNode"])("div",_,[Object(c["createVNode"])(Z,{name:"shortDescription"})])])]),Object(c["createElementVNode"])("div",k,[x,Object(c["createVNode"])(W,{name:"category","data-control":"select2","data-hide-search":"true","data-placeholder":"Select a Category...",class:"form-select form-select-solid",as:"select",modelValue:e.apiData.category,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.apiData.category=t})},{default:Object(c["withCtx"])((function(){return[w,C,A,I,D]})),_:1},8,["modelValue"]),Object(c["createElementVNode"])("div",S,[Object(c["createElementVNode"])("div",M,[Object(c["createVNode"])(Z,{name:"category"})])])]),Object(c["createElementVNode"])("div",P,[T,Object(c["createElementVNode"])("div",B,[Object(c["createVNode"])(W,{name:"apiMethod","data-control":"select2","data-hide-search":"true","data-placeholder":"Select a Category...",class:"form-select form-select-solid",as:"select",modelValue:e.apiData.apiMethod,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.apiData.apiMethod=t})},{default:Object(c["withCtx"])((function(){return[K,q,R,U,F]})),_:1},8,["modelValue"]),Object(c["createElementVNode"])("div",L,[Object(c["createElementVNode"])("div",Y,[Object(c["createVNode"])(Z,{name:"apiMethod"})])])])])])]),Object(c["createElementVNode"])("div",H,[J,Object(c["createElementVNode"])("button",G,z,512)])]})),_:1},8,["onSubmit","validation-schema"])])])],512)}var Z=a("fc1a"),$=a("7bb1"),ee=a("506a"),te=a("3dd1"),ae=a.n(te),ce=Object(c["defineComponent"])({name:"create-api-key-modal",components:{ErrorMessage:$["a"],Field:$["b"],Form:$["c"]},setup:function(){var e=Object(c["ref"])(null),t=Object(c["ref"])(null),a=Object(c["ref"])(null),o=Object(c["ref"])({apiName:"",shortDescription:"",category:"",apiMethod:""}),l=ee["a"]().shape({apiName:ee["c"]().required().label("API name"),shortDescription:ee["c"]().required().label("Description"),category:ee["c"]().required().label("Category"),apiMethod:ee["c"]().required().label("API method")}),n=function(){e.value&&(e.value.disabled=!0,e.value.setAttribute("data-kt-indicator","on"),setTimeout((function(){var t;e.value&&(e.value.disabled=!1,null===(t=e.value)||void 0===t||t.removeAttribute("data-kt-indicator")),ae.a.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(){Object(Z["a"])(a.value)}))}),2e3))};return{apiData:o,validationSchema:l,submit:n,submitButtonRef:e,modalRef:t,createAPIKeyModalRef:a}}}),oe=a("6b0d"),le=a.n(oe);const ne=le()(ce,[["render",W]]);var re=ne,de=a("fd34"),se=Object(c["defineComponent"])({name:"create-api-key",components:{KTModalCard:l["a"],KTCreateAPIKeyModal:re},setup:function(){Object(c["onMounted"])((function(){Object(de["a"])("Create API Key",["Modals","Forms"])}))}});const ie=le()(se,[["render",o]]);t["default"]=ie},fc1a:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o}));var c=a("7b17"),o=function(e){if(e){var t=c["a"].getInstance(e);t.hide()}},l=function(){document.querySelectorAll(".modal-backdrop.fade.show").length&&document.querySelectorAll(".modal-backdrop.fade.show").forEach((function(e){e.remove()}))}},fd34:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return n}));var c=a("0613"),o=a("38e0"),l=function(e,t){c["a"].dispatch(o["a"].SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})},n=function(e){c["a"].dispatch(o["a"].SET_BREADCRUMB_ACTION,{title:e})}},ffed:function(e,t,a){"use strict";var c=a("7a23"),o={class:"card"},l={class:"card-body p-0"},n={class:"card-px text-center py-20 my-10"},r={class:"fs-2x fw-bolder mb-10"},d={class:"text-gray-400 fs-5 fw-bold mb-13"},s=["innerHTML"],i=["data-bs-target"],m={class:"text-center px-5"},b=["src"];function u(e,t,a,u,p,f){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("h2",r,Object(c["toDisplayString"])(e.title),1),Object(c["createElementVNode"])("p",d,[Object(c["createElementVNode"])("span",{innerHTML:e.description},null,8,s)]),Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":"#"+e.modalId},Object(c["toDisplayString"])(e.buttonText),9,i)]),Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("img",{src:e.image,alt:"",class:"mw-100 mh-300px"},null,8,b)])])])}var p=Object(c["defineComponent"])({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),f=a("6b0d"),O=a.n(f);const j=O()(p,[["render",u]]);t["a"]=j}}]);
//# sourceMappingURL=chunk-1e40bf21.f8a961e1.js.map