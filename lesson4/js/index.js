document.querySelector("#lastmod").textContent=document.lastModified;
document.querySelector("#theyear").textContent = new Date().getFullYear();
function toggleMenu(){
  
 document.getElementById("primaryNav").classList.toggle("hide");
}
const datefield = document.querySelector("date");
const now = new Date();
datefield.textContent = now;
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle:"full" }).format(now);
datefield.innerHTML = '<em>${fulldate}</em>';