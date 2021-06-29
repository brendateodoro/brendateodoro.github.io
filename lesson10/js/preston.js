
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
const requestURL = `https://api.openweathermap.org/data/2.5/wheater?id=${cityid}&APPID=${APPID}&units=imperial`;
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const wheater = jsonObject['wheater'];
   
   for (let i = 0; i < wheater.length; i++ ) {

    let wheater = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement("p");
    let high = document.createElement("p");
    let wind = document.createElement("p");
    let humidity = document.createElement("p");
    let speed = document.createElement("p");

    h2.innerHTML = `<br><span class="box"> ${wheater[i].name}</span></br>`;
    p.innerHTML =  `<br><span class="motto"> ${wheater[i].motto}</span></br>`;
    high.innerHTML = '<br> High: ' + `${wheater[i].yearFounded}</br>`;
    wind.innerHTML = '<br> Wind Chill: ' + `${wheater[i].currentPopulation}</br>`;
 
    humidity.innerHTML = '<br> Humidity: ' + `${towns[i].averageRainfall}</br></span>`;
    speed.innerHTML = '<br> Wind Speed: ' + `${towns[i].averageRainfall}</br></span>`;
    
      card.append(h2);
      card.append(p);
      card.append(year);
      card.append(population);
      card.append(annual);
      card.append(img);
      document.querySelector('div.cards').appendChild(card);
    }}
  );