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

function randomize(arr) {
  const item = Math.floor(Math.random() * arr.length - 5);
  const value = arr.splice(item, 1);
  arr.push(value);

  return value;
}

function setColor(id) {
  id.style.setProperty('--color', randomize(colors));
}

function setChange() {
  for (var i = 0; i < elementWord.length; i++) {
    elementWord[i].addEventListener('click', function () {
      setColor(this);

      const word = randomize(sources[this.id]);
      this.innerHTML = word;
    }, false);

    elementWord[i].click();
  }
}

window.onload = () => setChange();
