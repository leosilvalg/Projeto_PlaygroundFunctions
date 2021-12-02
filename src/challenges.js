// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true){
    return true;
  } else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area
}

// Desafio 3
function splitSentence(string) {
  let array = [];

  string = string.split(' ');

  return string
}

// Desafio 4
function concatName(array) {
  let primeiraPalavra = array.shift();

  let ultimaPalavra = array.pop();

  let palavrasConcatenadas = ultimaPalavra + ', ' + primeiraPalavra;

  return palavrasConcatenadas
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;

  let empates = ties * 1;

  return vitorias + empates
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  
  let resultado = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      resultado.push('buzz');
    } else if (array[i] % 3 === 0){
      resultado.push('fizz')
    } else {
      resultado.push('bug!')
    }
    
  }
  return resultado
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
