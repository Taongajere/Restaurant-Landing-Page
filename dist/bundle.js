(()=>{"use strict";function e(){!function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.id="homepage";const n=document.createElement("h2");n.textContent="Welcome to Our Restaurant!";const o=document.createElement("img");o.src="",o.alt="Restaurant Image";const c=document.createElement("p");c.textContent="Experience the best dining experience in town at our restaurant. Our delicious food, friendly staff, and cozy atmosphere will make your visit memorable.",t.appendChild(n),t.appendChild(o),t.appendChild(c),e.appendChild(t)}()}console.log("Hello from index.js!"),document.addEventListener("DOMContentLoaded",(()=>{e();const t=document.getElementById("homeBtn"),n=document.getElementById("contactBtn"),o=document.getElementById("menuBtn");t.addEventListener("click",(()=>{e()})),n.addEventListener("click",(()=>{!function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.textContent="Contact Page Content",e.appendChild(t)}()})),o.addEventListener("click",(()=>{!function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.textContent="Menu Page Content",e.appendChild(t)}()}))}))})();