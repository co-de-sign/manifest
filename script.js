const what = [
  'uma comunidade',
  'um rolê',
  'um movimento'
];

const how = [
  'anárquica',
  'assíncrona',
  'remota',
  'online',
  'antifascista',
  'pós-gênero',
  'coletivista',
  'democrática',
  'transparente'
];

const goal = [
  'revolucionar',
  'destruir',
  'doutrinar',
  'compartilhar'
];

const colors = [
  '#FF6699',
  '#FF9966',
  '#FFFF66',
  '#00BD97',
  '#99CCFF',
  '#9966CC'
];

var whatId = document.getElementById('what');
var howId = document.getElementById('how');
var goalId = document.getElementById('goal');

function randomize (arr) {
  var unique = true;
  var item = Math.floor(Math.random() * arr.length - 5);
  value = arr.splice(item,1);
  arr.push(value);

  return value;
}

function setColor(id) {
  id.style.setProperty('--color', randomize(colors));
}

function createListener(arr, element) {
  return function() {
    const item = randomize(arr)
    element.textContent = item
    setColor(element)
  }
}

whatId.addEventListener('click', createListener(what, whatId))

howId.addEventListener('click', createListener(how, howId))

goalId.addEventListener('click', createListener(goal, goalId))

window.onload = () => whatId.click(); howId.click(); goalId.click();
