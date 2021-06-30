const apiURL='//api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    

  
   //   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const wheater = jsonObject['wheater'];
   
   for (let i = 0; i < wheater.length; i++ ) {

    let wheater = jsonObject;
   
    let p = wheater.description;
    let high = wheater.main.temp_max;
    let wind = wind.speed;
    let humidity = main.humidity;
    let speed = wind.speed;

   
    p.innerHTML =  `<br><span class="motto"> ${wheater[i].description}</span></br>`;
    high.innerHTML = '<br> High: ' + `${wheater[i].main.temp_max}</br>`;
    wind.innerHTML = '<br> Wind Chill: ' + `${wind[i].speed}</br>`;
 
    humidity.innerHTML = '<br> Humidity: ' + `${main[i].humidity}</br></span>`;
    speed.innerHTML = '<br> Wind Speed: ' + `${wind[i].speed}</br></span>`;
    
      card.append(h2);
      card.append(p);
      card.append(year);
      card.append(population);
      card.append(annual);
      card.append(img);
      document.querySelector('div.cards').appendChild(card);
    }}
  );