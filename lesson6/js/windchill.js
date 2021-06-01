
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(){
    buttons.forEach (btn=>btn.classList.remove("active"));
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

 



  var date = new Date();
  var dayOfWeek = date.getDay();

  if (dayOfWeek !== 6 ) {   //0 is Sunday, 6 is Saturday

    document.getElementById("pancake").style.display="none";

} 
else {
  document.querySelector("#pancake");
  }
  
  function doInputOutput(tempF, speed){
    let t = tempF;
    let s = speed;
   let windChill = (35.74 + .6215 * t -  35.75 * Math.pow(s , .16 ) + .4275 * t * Math.pow(s , .16));
     let result= windChill;

   

      if (t <= 50 && s > 3.0){
        return function windChill(t,s);
      } else{
        document.getElementById("output").style.display="none";
 }
 }