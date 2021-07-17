var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
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
 const apiURL=`https://api.openweathermap.org/data/2.5/weather?id=3472287&appid=e1152c63e19e94b2fda13991af004565&units=metric`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  
 console.log(jsObject)
   


    let wheater = jsObject;
   
    let p = wheater.weather[0].description;
    let high = wheater.main.temp_max;
    
    let humidity = wheater.main.humidity;
   

    

  

   document.getElementById("currently").textContent = p;
   document.getElementById("high").textContent = high;
  
   document.getElementById("humidity").textContent = humidity;
  
      
    }
  );
  const cityid="3472287";
const APPID ="5f872e38bc4df7e78e9ab0f612fa0eb9";

const forecast=`https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=metric`;

fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
console.log(jsObject);
const fiveDayForecast =  jsObject.list.filter ( forecast => forecast.dt_txt.includes('18:00:00'));
let day = 1;
const dayofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


console.log(fiveDayForecast);
fiveDayForecast.forEach(x => {  
  let d = new Date(x.dt_txt);

  //console.log(d);
   document.getElementById(`dayofweek${day}`).textContent = dayofweek[d.getDay()];
   document.getElementById(`forecast${day}`).textContent = x.main.temp;
   document.getElementById(`icon${day}`).src = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;  
   day++

  
  
 
   
 });

});