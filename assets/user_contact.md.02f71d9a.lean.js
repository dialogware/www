import{_ as x,r as a,o,c as n,b as e,j as v,v as p,k as _,p as y,i as S,d as f,t as C,e as N}from"./app.a2e54df5.js";const s=c=>(y("data-v-0092a3ae"),c=c(),S(),c),V={class:"contact"},$={key:0,method:"get",class:"email_form",id:"email_form"},E=s(()=>e("div",null,"Name:",-1)),I=s(()=>e("div",null,"E-mail:",-1)),U=s(()=>e("div",null,"Message:",-1)),j={key:1},B={key:2,class:"tip custom-block info_message"},D=s(()=>e("p",{class:"custom-block-title"},"Info",-1)),M=s(()=>e("p",null,[f("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),O=[D,M],T={key:3,class:"warning custom-block warning_message"},F=s(()=>e("p",{class:"custom-block-title"},"Error",-1)),J=s(()=>e("p",null,"Please fill the fields with min. 3 characters",-1)),P=[F,J],W={key:4,class:"warning custom-block error_message"},Q=s(()=>e("p",{class:"custom-block-title"},"Error",-1)),q=s(()=>e("p",null,[f("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),z=[Q,q],A={__name:"Contact",setup(c){const l=a(""),i=a(""),b=a(""),u=a(""),r=a(!1),m=a(!1),g=a(!1),h=a(!0);function w(){if(m.value=!1,r.value=!1,u.value.length<2||i.value.length<5||l.value.length<3)r.value=!0;else{r.value=!1;var k=`https://email.dialogware.com/?type=QUESTION&name=${u.value}&message=${l.value}&email=${i.value}`;fetch(k,{method:"get"}).then(t=>t.json()).then(t=>{l.value=t.message,i.value=t.email,b.value=t.text,u.value=t.name,t.found>5?m.value=!0:(m.value=!1,r.value=!1,h.value=!1,g.value=!0)})}}return(k,t)=>(o(),n("div",V,[h.value?(o(),n("form",$,[e("div",null,[e("fieldset",null,[e("label",null,[E,v(e("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>u.value=d),placeholder:"name"},null,512),[[p,u.value]])])]),e("fieldset",null,[e("label",null,[I,v(e("input",{"onUpdate:modelValue":t[1]||(t[1]=d=>i.value=d),placeholder:"@"},null,512),[[p,i.value]])])]),e("fieldset",null,[e("label",null,[U,v(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=d=>l.value=d),placeholder:"message"},null,512),[[p,l.value]])])])])])):_("",!0),h.value?(o(),n("div",j,[e("fieldset",{class:"button_send"},[e("button",{onClick:w},"Send Message")])])):_("",!0),g.value?(o(),n("div",B,O)):_("",!0),r.value?(o(),n("div",T,P)):_("",!0),m.value?(o(),n("div",W,z)):_("",!0)]))}},G=x(A,[["__scopeId","data-v-0092a3ae"]]),H={id:"frontmatter-title",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),X=JSON.parse('{"title":"Contact Form","description":"","frontmatter":{"title":"Contact Form","lang":"en-US","tags":["configuration","theme","contact"]},"headers":[],"relativePath":"user/contact.md"}'),L={name:"user/contact.md"},Y=Object.assign(L,{setup(c){return(l,i)=>(o(),n("div",null,[e("h1",H,[f(C(l.$frontmatter.title)+" ",1),K]),N(G)]))}});export{X as __pageData,Y as default};
