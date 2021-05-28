
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

 function check() {
  var now = new Date();
  var month = now.getMonth();
  var dayOfMonth = now.getDate();
  var dayOfWeek = now.getDay();
  let output = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";

  if (dayOfWeek == 3 ) {   //0 is Sunday, 6 is Saturday
   output = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";

} else {
     
  }
  
  document.getElementById("output").innerHTML = output;
}
 