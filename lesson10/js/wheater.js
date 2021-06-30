const apiURL=`https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    

  
 
   


    let wheater = jsonObject;
   
    let p = wheater.description;
    let high = wheater.main;
    let chill = wheater.wind.speed;
    let humidity = wheater.main.humidity;
    let speed = wheater.wind.speed;

   
    p.innerHTML =  `<br><span class="motto"> ${wheater[i].description}</span></br>`;
    high.innerHTML = '<br> High: ' + `${wheater[i].main.temp_max}</br>`;
    chill.innerHTML = '<br> Wind Chill: ' + `${wind[i].speed}</br>`;
 
    humidity.innerHTML = '<br> Humidity: ' + `${main[i].humidity}</br></span>`;
    speed.innerHTML = '<br> Wind Speed: ' + `${wind[i].speed}</br></span>`;
    
      
    }
  );