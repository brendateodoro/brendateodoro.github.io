
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
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
   
   for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name ==  towns[i].name == "Preston") {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
   

    h2.innerHTML = `<br><span class="box"> ${towns[i].events}</span></br>`;

    
      card.append(h2);

      document.querySelector('div.cards').appendChild(card);
    }}
  });