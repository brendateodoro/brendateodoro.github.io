
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(){
    buttons.forEach(btn.classList.remove('active'));
    this.classList.add('active');
  })
})
function toggleMenu(){
  
  document.getElementById("primaryNav").classList.toggle("hide");
 }
 
 const datefield = document.querySelector("#date");
 const now = new Date();
 
 const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle:"full" }).format(now);
 datefield.innerHTML = `<em>${fulldate}</em>`;

 