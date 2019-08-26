var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://github.com/pablo94810/Pablo/blob/master/asignaciones/asignacion9/Toro.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
var superHeroes = request.response;
populateHeader(superHeroes);
showHeroes(superHeroes);
}
function populateHeader(jsonObj) {
var myH1 = document.createElement('h1');
myH1.textContent = jsonObj['squadName'];
header.appendChild(myH1);

var myPara = document.createElement('p');
myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
header.appendChild(myPara);
}
function showHeroes(jsonObj) {
var gastronomia = jsonObj['members'];
  
for (var i = 0; i < gastronomia.length; i++) {
var myArticle = document.createElement('article');
var myH2 = document.createElement('h2');
var myPara1 = document.createElement('p');
var myList = document.createElement('ul');

myH2.textContent = gastronomia[i].name;
myPara1.textContent = 'descripcion : ' + gastronomia[i].descripcion;

    
var atractivos = gastronomia[i].powers;
for (var j = 0; j < atractivos.length; j++) {
  var listItem = document.createElement('li');
  listItem.textContent = atractivos[j];
  myList.appendChild(listItem);
}

myArticle.appendChild(myH2);
myArticle.appendChild(myPara1);
myArticle.appendChild(myList);

section.appendChild(myArticle);
}
}
