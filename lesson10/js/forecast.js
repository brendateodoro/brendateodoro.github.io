const cityid="5604473";
const APPID ="5f872e38bc4df7e78e9ab0f612fa0eb9";

const forecast=`https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
console.log(jsObject);
let day = 0;
const dayofWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const fiveday =  jsObject.list.filter ( forecast => forecast.dt_txt.includes('18:00:00'));
console.log(fiveday);
fiveday.forEach( x => {
  let d = new Date(x.dt_txt);
  //console.log(d);
   document.getElementById("dayofWeek").textContent = dayofWeek[d.getDay()];
   document.getElementById('forecast').textContent = x.main.temp;
   day++
 })
 const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
 
 document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
 
   });