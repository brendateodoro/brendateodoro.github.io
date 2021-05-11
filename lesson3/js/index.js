document.querySelector("#lastmod").textContent=document.lastModified;
document.querySelector("#theyear").textContent = new Date().getFullYear();
function toggleMenu(){
  
 document.getElementById("primaryNav").classList.toggle("hide");
}