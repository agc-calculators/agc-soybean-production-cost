/*! Built with http://stenciljs.com */
const{h:e}=window.AgcSoybeanProductionCost,t=(e,t)=>{let a=e.querySelector(`[name="${t}"]`),l=e.querySelector(`[data-validates="${t}"`);return a.checkValidity()?(a.className=a.className.replace(" invalid",""),l.style.display="none",!0):(-1===a.className.indexOf("invalid")&&(a.className+=" invalid"),l.style.display="block",!1)},a=(e,t)=>e.matches.call(e,t),l=e=>l=>{let s=document.querySelector(":focus"),c=Array.from(e.querySelectorAll("input, a, select, button, textarea")).map(e=>e);s&&!s.classList.contains("agc-wizard__actions-next")&&(()=>{if(13===l.which&&!a(s,"textarea")){!c.indexOf(s)||a(s,"a")||a(s,"button")||l.preventDefault();var i=c[c.indexOf(s)+(l.shiftKey?-1:1)];i?i.focus():c[0].focus();let n=i;n&&"select"in n&&n.select();let r=s;r&&r.willValidate&&t(e,r.name)}})()},s=(e,t)=>+(Math.round(new Number(`${e}e+${t}`).valueOf())+"e-"+t),c=e=>{let t=e.toFixed(2).toString().split("."),a=t[1];return{dollars:(e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))(t[0])||"0",cents:a,toString:(e="$")=>{}}};export{t as a,s as b,l as c,c as d};