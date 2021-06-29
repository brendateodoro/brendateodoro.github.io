
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

  let tempF = parseFloat(document.querySelector("#tempF").textContent);
  let speed = parseFloat(document.querySelector("#speed").textContent);
 

  if (tempF <= 50 && speed > 3.0){
    let result = windChill(tempF, speed);
    document.querySelector("#output").textContent = result.toFixed(2) + " °F";
  } else{
    document.querySelector("#output").textContent = "N/A";
  }

function windChill(t, s){
  let windChill = (35.74 + .6215 * t -  35.75 * Math.pow(s , .16 ) + .4275 * t * Math.pow(s , .16));
  return windChill;
}
