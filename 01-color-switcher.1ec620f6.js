const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o="";t.addEventListener("click",(()=>{o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(o),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1ec620f6.js.map
