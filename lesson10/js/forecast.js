const cityid="5604473";
const APPID ="5f872e38bc4df7e78e9ab0f612fa0eb9";

const apiURL=`https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
console.log(jsObject);
let day = 0;
const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const fivedayforecast =  
  });