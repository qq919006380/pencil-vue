import{r as n,o as s,c as a,w as t,b as p,a as o,d as c}from"./app.f6d497cd.js";const e={methods:{openHTML(){this.$toast("<strong>这是 <i>HTML</i> 片段</strong>",{enableHtml:!0})}}},l=p("使用HTML片段");e.render=function(p,o,c,e,u,k){const i=n("Button");return s(),a(i,{onClick:k.openHTML},{default:t((()=>[l])),_:1},8,["onClick"])};const u={methods:{open(){this.$toast("这是一个需要手动关闭的消息框！",{enableHtml:!0,autoClose:!1,showClose:!0,onClose:()=>{alert("消息框关闭了！")}})}}},k=p("打开弹出");u.render=function(p,o,c,e,l,u){const i=n("Button");return s(),a(i,{onClick:u.open},{default:t((()=>[k])),_:1},8,["onClick"])};const i=o("h2",{id:"基本用法"},"基本用法",-1),r=p("顶部弹出"),d=p("中间弹出"),g=p("下面弹出"),_=c('',2),h=c('',2),m=c('',3),T='{"title":"基本用法","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法"},{"level":2,"title":"使用 HTML 片段","slug":"使用-html-片段"},{"level":2,"title":"设置关闭事件","slug":"设置关闭事件"},{"level":2,"title":"Options","slug":"options"}],"relativePath":"components/toast.md","lastUpdated":1622714055490}',f={};const v=Object.assign(f,{expose:[],setup:function(p){return(p,c)=>{const l=n("Button");return s(),a("div",null,[i,o(l,{onClick:c[1]||(c[1]=n=>p.$toast("点击弹出提示",{position:"top"}))},{default:t((()=>[r])),_:1}),o(l,{onClick:c[2]||(c[2]=n=>p.$toast("点击弹出提示",{position:"middle"}))},{default:t((()=>[d])),_:1}),o(l,{onClick:c[3]||(c[3]=n=>p.$toast("点击弹出提示",{position:"bottom"}))},{default:t((()=>[g])),_:1}),_,o("p",null,[o(e)]),h,o("p",null,[o(u)]),m])}}});export default v;export{T as __pageData};