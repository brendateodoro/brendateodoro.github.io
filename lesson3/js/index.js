document.querySelector("#lastmod").textContent=document.lastModified;
document.querySelector("#theyear").textContent = new Date().getFullYear();
function toggleMenu(){
  console.log(document.getElementById("primaryNav").classList);
 document.getElementById("primaryNav").classList.toggle("hide");
}