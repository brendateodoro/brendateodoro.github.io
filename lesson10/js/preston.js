
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
const cityid="5604473";
const APPID ="5f872e38bc4df7e78e9ab0f612fa0eb9";

const apiURL=`https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    const temperature = document.querySelector('#temperature');
  temperature.textContent = jsObject.main.temp.toFixed(0);
    const currently = document.querySelector('#currently');
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    currently.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;




    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation

document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc.toUpperCase);
   
  });