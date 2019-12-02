const sources = {
  what: [
    'uma comunidade',
    'um rolê',
    'um movimento'
  ],
  how: [
    'anárquica',
    'assíncrona',
    'remota',
    'online',
    'antifascista',
    'pós-gênero',
    'coletivista',
    'democrática',
    'transparente'
  ],
  goal: [
    'revolucionar',
    'destruir',
    'doutrinar',
    'compartilhar'
  ],
}

const colors = [
  '#FF6699',
  '#FF9966',
  '#FFC107',
  '#00BD97',
  '#99CCFF',
  '#9966CC'
];

const elementWord = document.querySelectorAll(".word");

function randomize(arr, last) {
  const filteredArr = arr.filter((value) => value !== last)
  const item = Math.floor(Math.random() * filteredArr.length);

  return filteredArr[item];
}

function intToHex(c) {
  const hex = c.toString(16).toUpperCase();
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
  const arr = eval('[' + rgb.slice(4,-1) + ']')
  return "#" + intToHex(arr[0]) + intToHex(arr[1]) + intToHex(arr[2]);
}

function setColor(id) {
  const currentColor = rgbToHex(getComputedStyle(id).backgroundColor)
  id.style.backgroundColor = randomize(colors, currentColor);
}

function populate(element) {
  setColor(element);  
  element.textContent = randomize(sources[element.id], element.textContent);
}

function setChange() {
  for (var i = 0; i < elementWord.length; i++) {
    const currentElement = elementWord[i]
    populate(currentElement);
    elementWord[i].addEventListener('click', () => populate(currentElement), false);
  }
}

window.onload = () => setChange();
