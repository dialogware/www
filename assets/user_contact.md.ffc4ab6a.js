import{k as i,o as p,c as h,a as e,b as v,t as f,l as u,v as c,_ as g,p as b,m as x}from"./app.c8e022d0.js";const l=o=>(b("data-v-8b567859"),o=o(),x(),o),w={id:"frontmatter-title",tabindex:"-1"},S=l(()=>e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1)),k={method:"get",action:""},I=l(()=>e("div",null,"Name:",-1)),U=l(()=>e("div",null,"E-mail:",-1)),V=l(()=>e("div",null,"Message:",-1)),y=l(()=>e("hr",null,null,-1)),D=l(()=>e("ul",null,[e("li",null,[e("a",{href:"http://www.dialogware.com/",target:"_blank",rel:"noreferrer"},"Home")]),e("li",null,[e("a",{href:"http://docs.dialogware.com/",target:"_blank",rel:"noreferrer"},"Documentation")])],-1)),C=JSON.parse('{"title":"Contact Form","description":"","frontmatter":{"layout":"doc","title":"Contact Form","lang":"en-US","tags":["configuration","theme","indexing"]},"headers":[],"relativePath":"user/contact.md"}'),N={name:"user/contact.md"},$=Object.assign(N,{setup(o){const n=i(""),s=i(""),m=i(""),r=i("");function _(){var d=`https://email.dialogware.com/?name=${r.value}&message=${n.value}&email=${s.value}`;fetch(d,{method:"get"}).then(t=>t.json()).then(t=>{console.log(t),n.value=t.message,s.value=t.email,m.value=t.text,r.value=t.name})}return(d,t)=>(p(),h("div",null,[e("h1",w,[v(f(d.$frontmatter.title)+" ",1),S]),e("form",k,[e("div",null,[e("fieldset",null,[e("label",null,[I,u(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),placeholder:"name"},null,512),[[c,r.value]])])]),e("fieldset",null,[e("label",null,[U,u(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>s.value=a),placeholder:"@"},null,512),[[c,s.value]])])]),e("fieldset",null,[e("label",null,[V,u(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=a=>n.value=a),placeholder:"message"},null,512),[[c,n.value]])])])])]),e("p",null,[e("button",{onClick:_},"Send Message")]),y,D]))}}),M=g($,[["__scopeId","data-v-8b567859"]]);export{C as __pageData,M as default};
