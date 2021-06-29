const cityid="5604473";
const APPID ="5f872e38bc4df7e78e9ab0f612fa0eb9";

const apiURL=`https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
console.log(jsObject);
let day = 0;
const dayofWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const fiveday =  jsObject.list.filter ( forecast => forecast.dt_txt.includes('12:00:00'));
console.log(fiveday);
fiveday.forEach( x => {
  const d = new Date(x.dt_txt);
  const weekDay = dayofWeek[d.getDay()];
  const dayHigh = Math.round(x.main.temp_max);
  const imagesrc = 'https://openweathermap.org/img/wn/' + x.weather[0].icon + '.png';

  let dayContainer = document.createElement('div');
  let weekDayContainer = document.createElement('p');
  let forecastImg = document.createElement('img');
  let dayHighTemp = document.createElement('p');

  weekDayContainer.textContent = weekDay;
  forecastImg.setAttribute('src', imagesrc);
  forecastImg.setAttribute('alt', "Weather Icon");
  dayHighTemp.textContent = dayHigh + ' °F';

  dayContainer.classList.add("five-day");
  dayContainer.appendChild(weekDayContainer);
  dayContainer.appendChild(forecastImg);
  dayContainer.appendChild(dayHighTemp);

  document.querySelector('div.five-wrap').appendChild(weekdayContainer);

  console.log(forecastImg)

});



});