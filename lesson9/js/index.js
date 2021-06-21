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
 const imagesToLoad = document.querySelectorAll('img[data-src]');


const imgOptions = {
  rootMargin: "0px 0px 50px 0px",
  threshold: 1
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
   const name = towns.filter(x=>x.name == "Preston" || x.name == "Soda Springs" || x.name == "Fish Haven");
   for (let i = 0; i < name.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement("p");
    let year = document.createElement("year");
    let population = document.createElement("population");
    let annual = document.createElement("annual");
    let img = document.createElement("img");
    h2.innerHTML = `<span class="box"> ${towns[i].name}</span>`;
    p.innerHTML =  `<span class="motto"> ${towns[i].motto}</span>`;
    year.innerHTML = '<br> Year Founded: ' + `${towns[i].yearFounded}</br>`;
    population.innerHTML = '<br> Population: ' + `${towns[i].currentPopulation}</br>`;
    annual.innerHTML = '<br> Annual Rain Fall: ' + `${towns[i].averageRainfall}</br>`;
    img.setAttribute('src', `images/${towns.photo}`);
img.setAttribute("alt",  `Photos of the towns ${towns.name}!`);
      card.append(h2);
      card.append(p);
      card.append(year);
      card.append(population);
      card.append(annual);
      card.append(img);
      document.querySelector('div.cards').appendChild(card);
    }
      });