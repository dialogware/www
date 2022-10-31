import{r as o,o as s,c as l,a as e,i as k,v as y,j as h,e as n,w as f,u as i,_ as A,d as I,g as x,f as E,h as T,p as V,k as D,b as r}from"./app.b4140963.js";const t=p=>(V("data-v-8bf4ea6c"),p=p(),D(),p),N=I("",11),L={class:"newsletter"},R={key:0,method:"get",class:"email_form",id:"email_form"},j=t(()=>e("div",null,"Name:",-1)),M=t(()=>e("div",null,"E-mail:",-1)),z={key:1},C={key:2,class:"tip custom-block info_message"},G=t(()=>e("p",{class:"custom-block-title"},"Info",-1)),B=t(()=>e("p",null,[r("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),q=[G,B],H={key:3,class:"warning custom-block warning_message"},J=t(()=>e("p",{class:"custom-block-title"},"Error",-1)),U=t(()=>e("p",null,"Please fill the fields with min. 6 characters",-1)),$=[J,U],Y={key:4,class:"warning custom-block error_message"},F=t(()=>e("p",{class:"custom-block-title"},"Error",-1)),K=t(()=>e("p",null,[r("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),Q=[F,K],X=t(()=>e("h2",{id:"our-story",tabindex:"-1"},[r("Our Story "),e("a",{class:"header-anchor",href:"#our-story","aria-hidden":"true"},"#")],-1)),Z=t(()=>e("p",null,"We started in 2019 as Software House with an idea to build developer tools. During the Years we have created modularized tools for frontend and backend development. Today we want to bring the software development to the next level.",-1)),ee=t(()=>e("p",null,"Our goal is building software in minutes with humanless software development systems.",-1)),te=t(()=>e("h2",{id:"our-team",tabindex:"-1"},[r("Our Team "),e("a",{class:"header-anchor",href:"#our-team","aria-hidden":"true"},"#")],-1)),ae=t(()=>e("p",null,"The development of DIALOGWARE is guided by an international team, some of whom have chosen to be featured below.",-1)),oe=t(()=>e("h2",{id:"our-partners",tabindex:"-1"},[r("Our Partners "),e("a",{class:"header-anchor",href:"#our-partners","aria-hidden":"true"},"#")],-1)),se=t(()=>e("p",null,"Organization they support our project",-1)),le=t(()=>e("h2",{id:"our-hashtags",tabindex:"-1"},[r("Our Hashtags "),e("a",{class:"header-anchor",href:"#our-hashtags","aria-hidden":"true"},"#")],-1)),ne=t(()=>e("ul",null,[e("li",null,"text2software"),e("li",null,"text2app"),e("li",null,"text2srs"),e("li",null,"text2api"),e("li",null,"domain-specific language")],-1)),ce=JSON.parse('{"title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","description":"","frontmatter":{"layout":"docs","title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","lang":"en-US"},"headers":[{"level":2,"title":"NEWSLETTER","slug":"newsletter","link":"#newsletter","children":[]},{"level":2,"title":"Our Story","slug":"our-story","link":"#our-story","children":[]},{"level":2,"title":"Our Team","slug":"our-team","link":"#our-team","children":[]},{"level":2,"title":"Our Partners","slug":"our-partners","link":"#our-partners","children":[]},{"level":2,"title":"Our Hashtags","slug":"our-hashtags","link":"#our-hashtags","children":[]}],"relativePath":"index.md"}'),ie={name:"index.md"},re=Object.assign(ie,{setup(p){const S=[{avatar:"https://avatars.githubusercontent.com/u/5669657?s=96&v=4",name:"Tom Sapletta",title:"Creator",links:[{icon:"linkedin",link:"https://www.linkedin.com/in/tom-sapletta-com"}]},{avatar:"https://logo.dialogware.com/dialogware-logo-pivot.png",name:"Join us!",title:"Software Developer",links:[{icon:"linkedin",link:"https://www.linkedin.com/showcase/dialogware/"}]}],O=[{avatar:"/assets/ionos.png",name:"Ionos",title:"Service provider",links:[{icon:"linkedin",link:"https://www.ionos.de"}]},{avatar:"https://softreck.pl/wp-content/uploads/2020/10/softreck-logo-kwadrat-biale-tlo-1024x1024.png",name:"softreck.com",title:"DevOps",links:[{icon:"linkedin",link:"https://softreck.pl"}]}],_=o(""),d=o(""),P=o(""),c=o(""),u=o(!1),m=o(!1),g=o(!1),v=o(!0);function W(){if(_.value="NEWSLETTER",m.value=!1,u.value=!1,c.value.length<2||d.value.length<4||_.value.length<4)u.value=!0;else{u.value=!1;var b=`https://email.dialogware.com/?type=NEWSLETTER&name=${c.value}&message=${_.value}&email=${d.value}`;fetch(b,{method:"get"}).then(a=>a.json()).then(a=>{d.value=a.email,P.value=a.text,c.value=a.name,a.found>5?m.value=!0:(m.value=!1,u.value=!1,v.value=!1,g.value=!0)})}}return(b,a)=>(s(),l("div",null,[N,e("div",L,[v.value?(s(),l("form",R,[e("div",null,[e("fieldset",null,[e("label",null,[j,k(e("input",{"onUpdate:modelValue":a[0]||(a[0]=w=>c.value=w),placeholder:"name"},null,512),[[y,c.value]])])]),e("fieldset",null,[e("label",null,[M,k(e("input",{"onUpdate:modelValue":a[1]||(a[1]=w=>d.value=w),placeholder:"@"},null,512),[[y,d.value]])])])])])):h("",!0),v.value?(s(),l("div",z,[e("fieldset",{class:"button_send"},[e("p",null,[e("button",{onClick:W},"get updates about project")])])])):h("",!0),g.value?(s(),l("div",C,q)):h("",!0),u.value?(s(),l("div",H,$)):h("",!0),m.value?(s(),l("div",Y,Q)):h("",!0)]),X,Z,ee,te,ae,n(i(T),null,{default:f(()=>[n(i(x),null,{members:f(()=>[n(i(E),{size:"small",members:S})]),_:1})]),_:1}),oe,se,n(i(T),null,{default:f(()=>[n(i(x),null,{members:f(()=>[n(i(E),{size:"small",members:O})]),_:1})]),_:1}),le,ne]))}}),ue=A(re,[["__scopeId","data-v-8bf4ea6c"]]);export{ce as __pageData,ue as default};
