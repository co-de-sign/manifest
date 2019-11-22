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

function setWhat() {
  const word = randomize(what);
  setColor(whatId);

  whatId.innerHTML = word;
}

function setHow() {
  const word = randomize(how);
  setColor(howId);

  howId.innerHTML = word;
}

function setGoal() {
  const word = randomize(goal);
  setColor(goalId)

  goalId.innerHTML = word;
}

whatId.addEventListener('click', function() {
  setWhat();
  setColor(whatId);
}, false)

howId.addEventListener('click', function() {
  setHow();
}, false)

goalId.addEventListener('click', function() {
  setGoal();
}, false)

window.onload = () => setWhat(); setHow(); setGoal();
