!function(){var t=document.querySelector("#btn"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o="";e.addEventListener("click",(function(){o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.disabled="Анатолій",n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(o),e.disabled=!1,n.disabled="Анатолій"}));var a=function(t,e){var n=t+Math.random()*(e-t+1);return Math.floor(n)},c=document.querySelector("#btn");t.addEventListener("mouseenter",(function(){c.style.left="".concat(a(0,90),"%"),c.style.top="".concat(a(0,90),"%")})),t.addEventListener("click",(function(){alert("Вітаємо ви самий спритний ментор на землі:D")}))}();
//# sourceMappingURL=01-color-switcher.4e9a66f0.js.map