// Desafio 10
function techList(array, name) {
  tecnologia = [];
 
  for(let i of array.sort()){
    let objeto = {
      tech: i,
      name: name,
    };

    tecnologia.push(objeto)
  }

  if (array.length === 0){
    return 'Vazio!'
  }
    
  return tecnologia
}

// Desafio 11
function generatePhoneNumber(array) {
    let contador = 0;
    if (array.length !== 11) {
      return 'Array com tamanho incorreto.'
    }
    for(let i in array){
      for(let key in array){
        if(array[i] === array[key])
          contador += 1
      if (array[i] > 9 || array[i] < 0 || contador >= 3){
      return 'não é possível gerar um número de telefone com esses valores'
      }
      }
      contador = 0
    }
    let numero = array.join('');
    let numeroFormatado = numero.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
    return numeroFormatado
}

// Desafio 12
function triangleCheck(LineA, LineB, LineC) {
  let resultado = false

  if (LineA < (LineB + LineC) && LineA > Math.abs(LineB - LineC) || LineB < (LineA + LineC) && LineB > Math.abs(LineA - LineC) || LineC < (LineA + LineB) && LineC > Math.abs(LineA - LineB)) {
     resultado = true;
  }
  return resultado
}

// Desafio 13
function hydrate(string) {
   let copos = 0;
   var numero = string.match(/\d+/g).map(Number);

   for(let i of numero){
     copos += i
   }

   if(copos === 1){
     return copos + ' ' + 'copo de água'
   }

  return copos + ' ' + 'copos de água'
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
