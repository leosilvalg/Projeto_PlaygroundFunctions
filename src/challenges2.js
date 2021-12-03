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
  var numero = array.replace;
  
    if (array.length === 11) {
      var resultado = array.replace(/(\d{ 2 })(\d{ 5 })(\d{ 4 })/g, "($1)-$2-$3");
    } else 
       return "Array com tamanho incorreto."
    
    return resultado
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
