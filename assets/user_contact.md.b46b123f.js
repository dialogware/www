import{k as l,o as u,c,a as e,b,t as x,l as _,v as p,m as v,_ as k,p as y,n as S}from"./app.9461818c.js";const a=s=>(y("data-v-d3098b56"),s=s(),S(),s),I={id:"frontmatter-title",tabindex:"-1"},V=a(()=>e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1)),N={key:0,method:"get",class:"email_form",id:"email_form"},U=a(()=>e("div",null,"Name:",-1)),C=a(()=>e("div",null,"E-mail:",-1)),$=a(()=>e("div",null,"Message:",-1)),w={key:1},B={key:2,class:"tip custom-block"},D=a(()=>e("p",{class:"custom-block-title"},"Info",-1)),E=a(()=>e("p",null,"We got your Email!",-1)),M=[D,E],P=JSON.parse('{"title":"Contact Form","description":"","frontmatter":{"layout":"doc","title":"Contact Form","lang":"en-US","tags":["configuration","theme","indexing"]},"headers":[],"relativePath":"user/contact.md"}'),j={name:"user/contact.md"},F=Object.assign(j,{setup(s){const n=l(""),i=l(""),h=l(""),d=l(""),f=l(!1),r=l(!0);function g(){var m=`https://email.dialogware.com/?name=${d.value}&message=${n.value}&email=${i.value}`;fetch(m,{method:"get"}).then(t=>t.json()).then(t=>{console.log(t),n.value=t.message,i.value=t.email,h.value=t.text,d.value=t.name,r.value=!1,f.value=!0})}return(m,t)=>(u(),c("div",null,[e("h1",I,[b(x(m.$frontmatter.title)+" ",1),V]),r.value?(u(),c("form",N,[e("div",null,[e("fieldset",null,[e("label",null,[U,_(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>d.value=o),placeholder:"name"},null,512),[[p,d.value]])])]),e("fieldset",null,[e("label",null,[C,_(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>i.value=o),placeholder:"@"},null,512),[[p,i.value]])])]),e("fieldset",null,[e("label",null,[$,_(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=o=>n.value=o),placeholder:"message"},null,512),[[p,n.value]])])])])])):v("",!0),r.value?(u(),c("div",w,[e("fieldset",null,[e("button",{onClick:g},"Send Message")])])):v("",!0),f.value?(u(),c("div",B,M)):v("",!0)]))}}),T=k(F,[["__scopeId","data-v-d3098b56"]]);export{P as __pageData,T as default};