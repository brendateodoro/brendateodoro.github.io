const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //   console.table(jsonObject);  // temporary checking for valid response and data parsing
 const prophets = jsonObject['prophets'];
 for (let i = 0; i < prophets.length; i++ ) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let p = document.createElement("p");
  let place = document.createElement("place");
  let img = document.createElement("img");

h2.innerHTML = `<span class="purple"> ${prophets[i].name} ${prophets[i].lastname}</span>`;
img.setAttribute('src', prophets[i].imageurl);
img.setAttribute("alt", "The official portrait ${prophets[i].name} $prophets[i].lastname}!");
p.innerHTML = 'Date of Birth: ' + `${prophets[i].birthdate}`;
place.innerHTML = 'Place of Birth: ' + `${prophets[i].birthplace}`;
  card.append(h2);
  card.append(p);
  card.append(place);
  card.append(img);

  document.querySelector('div.cards').appendChild(card);
}
  });
