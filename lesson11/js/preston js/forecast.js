const cityid="5604473";
const APPID ="5f872e38bc4df7e78e9ab0f612fa0eb9";

const forecast=`https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

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
