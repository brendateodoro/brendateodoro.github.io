const apiURL=`https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e1152c63e19e94b2fda13991af004565`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  
 console.log(jsObject)
   


    let wheater = jsObject;
   
    let p = wheater.wheater.description;
    let high = wheater.main.temp_max;
    let chill = wind.speed;
    let humidity = wheater.main.humidity;
    let quick = wheater.speed;

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

   document.getElementById("currently").textContent = p;
   document.getElementById("high").textContent = high;
   document.getElementById("wind").textContent = chill;
   document.getElementById("humidity").textContent = humidity;
    document.getElementById("speed").textContent = quick;
      
    }
  );