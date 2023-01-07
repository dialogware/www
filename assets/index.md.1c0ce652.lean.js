import{_ as T,r as a,o as s,c as r,b as e,j as O,v as W,k as m,p as I,i as R,d as n,e as o,w as f,u as l,a as S,g as k,f as y,h as x}from"./app.49d855de.js";const d=h=>(I("data-v-df0ef695"),h=h(),R(),h),D={class:"newsletter"},P={key:0,method:"get",class:"email_form",id:"email_form",action:"#",onsubmit:"return false;"},L={key:0},V={key:1,class:"tip custom-block info_message"},N=d(()=>e("p",{class:"custom-block-title"},"Info",-1)),G=d(()=>e("p",null,[n("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),j=[N,G],B={key:2,class:"warning custom-block warning_message"},M=d(()=>e("p",{class:"custom-block-title"},"Error",-1)),q=d(()=>e("p",null,"Please fill the fields with min. 6 characters",-1)),C=[M,q],z={key:3,class:"warning custom-block error_message"},H=d(()=>e("p",{class:"custom-block-title"},"Error",-1)),$=d(()=>e("p",null,[n("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),J=[H,$],Y={__name:"Newsletter",setup(h){const u=a(""),i=a(""),g=a(""),c=a(""),p=a(!1),w=a(!1),v=a(!1),_=a(!0);function A(){if(c.value="DIALOGWARE-ian",u.value="Thank You  for a registration on DIALOGWARE NEWSLETTER.",w.value=!1,p.value=!1,c.value.length<2||i.value.length<4||u.value.length<4)p.value=!0;else{p.value=!1;var b=`https://email.dialogware.com/?type=NEWSLETTER&name=${c.value}&message=${u.value}&email=${i.value}`;fetch(b,{method:"get"}).then(t=>t.json()).then(t=>{i.value=t.email,g.value=t.text,c.value=t.name,t.found>5?w.value=!0:(w.value=!1,p.value=!1,_.value=!1,v.value=!0)})}}return(b,t)=>(s(),r("div",D,[_.value?(s(),r("form",P,[e("div",null,[e("fieldset",null,[O(e("input",{"onUpdate:modelValue":t[0]||(t[0]=E=>i.value=E),placeholder:"@"},null,512),[[W,i.value]])])]),_.value?(s(),r("div",L,[e("fieldset",{class:"button_send"},[e("button",{onClick:A},"Subscribe")])])):m("",!0)])):m("",!0),v.value?(s(),r("div",V,j)):m("",!0),p.value?(s(),r("div",B,C)):m("",!0),w.value?(s(),r("div",z,J)):m("",!0)]))}},U=T(Y,[["__scopeId","data-v-df0ef695"]]),Q=S("",24),F=e("h2",{id:"our-story",tabindex:"-1"},[n("Our Story "),e("a",{class:"header-anchor",href:"#our-story","aria-hidden":"true"},"#")],-1),K=e("p",null,"We started in 2019 as Software House with an idea to build developer tools. During the Years we have created modularized tools for frontend and backend development. Today we want to bring the software development to the next level.",-1),X=e("p",null,"Our goal is building software in minutes with humanless software development systems.",-1),Z=e("h2",{id:"our-team",tabindex:"-1"},[n("Our Team "),e("a",{class:"header-anchor",href:"#our-team","aria-hidden":"true"},"#")],-1),ee=e("p",null,"The development of DIALOGWARE is guided by an international team, some of whom have chosen to be featured below.",-1),te=e("h2",{id:"our-partners",tabindex:"-1"},[n("Our Partners "),e("a",{class:"header-anchor",href:"#our-partners","aria-hidden":"true"},"#")],-1),ae=e("p",null,"Organization they support our project",-1),ie=e("h2",{id:"our-hashtags",tabindex:"-1"},[n("Our Hashtags "),e("a",{class:"header-anchor",href:"#our-hashtags","aria-hidden":"true"},"#")],-1),oe=e("ul",null,[e("li",null,"text2software"),e("li",null,"text2app"),e("li",null,"text2srs"),e("li",null,"text2api"),e("li",null,"domain-specific language")],-1),le=JSON.parse(`{"title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","description":"","frontmatter":{"layout":"docs","title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","lang":"en-US"},"headers":[{"level":2,"title":"Build any software in minutes with these simple steps","slug":"build-any-software-in-minutes-with-these-simple-steps","link":"#build-any-software-in-minutes-with-these-simple-steps","children":[]},{"level":2,"title":"How it work's?","slug":"how-it-work-s","link":"#how-it-work-s","children":[]},{"level":2,"title":"Benefits?","slug":"benefits","link":"#benefits","children":[]},{"level":2,"title":"Try it!","slug":"try-it","link":"#try-it","children":[]},{"level":2,"title":"Why DIALOGWARE?","slug":"why-dialogware","link":"#why-dialogware","children":[{"level":3,"title":"Video presentation","slug":"video-presentation","link":"#video-presentation","children":[]}]},{"level":2,"title":"NEWSLETTER","slug":"newsletter","link":"#newsletter","children":[]},{"level":2,"title":"Our Story","slug":"our-story","link":"#our-story","children":[]},{"level":2,"title":"Our Team","slug":"our-team","link":"#our-team","children":[]},{"level":2,"title":"Our Partners","slug":"our-partners","link":"#our-partners","children":[]},{"level":2,"title":"Our Hashtags","slug":"our-hashtags","link":"#our-hashtags","children":[]}],"relativePath":"index.md"}`),se={name:"index.md"},ne=Object.assign(se,{setup(h){const u=[{avatar:"https://avatars.githubusercontent.com/u/5669657?s=96&v=4",name:"Tom Sapletta",title:"Creator",links:[{icon:"linkedin",link:"https://www.linkedin.com/in/tom-sapletta-com"}]},{avatar:"https://logo.dialogware.com/dialogware-logo-pivot.png",name:"Join us!",title:"Software Developer",links:[{icon:"linkedin",link:"https://www.linkedin.com/showcase/dialogware/"}]}],i=[{avatar:"https://img.dialogware.com/ionos.png",name:"Ionos",title:"Service provider",links:[{icon:"linkedin",link:"https://www.ionos.de"}]},{avatar:"https://softreck.pl/wp-content/uploads/2020/10/softreck-logo-kwadrat-biale-tlo-1024x1024.png",name:"softreck.com",title:"DevOps",links:[{icon:"linkedin",link:"https://softreck.pl"}]}];return(g,c)=>(s(),r("div",null,[Q,o(U),F,K,X,Z,ee,o(l(x),null,{default:f(()=>[o(l(k),null,{members:f(()=>[o(l(y),{size:"small",members:u})]),_:1})]),_:1}),te,ae,o(l(x),null,{default:f(()=>[o(l(k),null,{members:f(()=>[o(l(y),{size:"small",members:i})]),_:1})]),_:1}),ie,oe]))}});export{le as __pageData,ne as default};