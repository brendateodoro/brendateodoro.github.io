const cityid="5604473";
cost APPID="";
const apiUrl="api.openweathermap.org/data/2.5/weather?qid=5f872e38bc4df7e78e9ab0f612fa0eb9";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });