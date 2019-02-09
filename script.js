//title construction:
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


var titlewords = ["wow","cats", "standing by", "meow", "good", "friends", "furry", "so soft", "call now", "available"]

var title = [
  titlewords[getRandomInt(0, titlewords.length)], 
  titlewords[getRandomInt(0, titlewords.length)], 
  titlewords[getRandomInt(0, titlewords.length)]].join(" ");

var number = `1-800-${titlewords[getRandomInt(0, titlewords.length)]}-${titlewords[getRandomInt(0, titlewords.length)]}`.replace(/\s+/g, '-').toUpperCase();
const app = document.getElementById('root');
const logo = document.createElement('img')
const header = document.createElement('h1');
const subtitle = document.createElement('h2');
const subsubtitle = document.createElement('h3');

logo.src = faker.image.cats();
const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

container.appendChild(header);
header.textContent = title;

container.appendChild(subtitle);
subtitle.textContent = `Call NOW ${number}`;

container.appendChild(logo);

container.appendChild(subsubtitle);
subsubtitle.textContent = 'Good cats are standing by to take your call NOW'

for(var i = 0; i < 18; i++){
  const card = document.createElement("div");
  card.setAttribute("class","card");

  const h1 = document.createElement("h1");
  h1.textContent = `${faker.name.firstName()}`;

  const img = document.createElement("img");

  container.appendChild(card);
  
  card.appendChild(h1);
  card.appendChild(img);
}

var images = document.getElementsByTagName("img")

for(var i = 0; i < images.length; i++){
  let src = faker.image.cats();
  images[i].src = src;
}



