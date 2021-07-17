
fetch("./directorydata.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //   console.table(jsonObject);  // temporary checking for valid response and data parsing
 const businesses = jsonObject['businesses'];
 for (let i = 0; i < businesses.length; i++ ) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let p = document.createElement("p");
  let place = document.createElement("place");
  let site = document.createElement("site");
  let img = document.createElement("img");

h2.innerHTML = `<br><span class="purple"> ${businesses[i].name} </span></br>`;
img.setAttribute('src', businesses[i].logo);
img.setAttribute("alt", "The logo ${businesses[i].name} !");
p.innerHTML = '<br> Telephone: ' + `${businesses[i].telephone}</br>`;
place.innerHTML = '<br> Address: ' + `${businesses[i].address}</br>`;
site.innerHTML = '<br> Site: ' + `${businesses[i].site}</br>`;
  card.append(h2);
  card.append(p);
  card.append(place);
  card.append(img);
  card.append(site);

  document.querySelector('div.cards').appendChild(card);
}
  });
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