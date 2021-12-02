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
function encode(string) {

  let resultado = '';

  let array = [];

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      array[i] = '1';
    } else if (string[i] === 'e'){
      array[i] = '2';
    } else if (string[i] === 'i'){
      array[i] = '3';
    } else if (string[i] === 'o'){
      array[i] = '4';
    } else if (string[i] === 'u'){
      array[i] = '5';
    } else {
      array[i] = string[i];
    }
    resultado = array.join('');
  }
  
  return resultado;
}

function decode(stringCripto) {
  let resultado = '';

  let array = [];

  for (let i = 0; i < stringCripto.length; i += 1) {
    if (stringCripto[i] === '1') {
      array[i] = 'a';
    } else if (stringCripto[i] === '2'){
      array[i] = 'e';
    } else if (stringCripto[i] === '3'){
      array[i] = 'i';
    } else if (stringCripto[i] === '4'){
      array[i] = 'o';
    } else if (stringCripto[i] === '5'){
      array[i] = 'u';
    } else {
      array[i] = stringCripto[i];
    }
    resultado = array.join('');
  }
  
  return resultado;
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
