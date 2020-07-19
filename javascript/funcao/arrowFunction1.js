let dobro = function (a) {
  return 2 * a
}

//Arrow
dobro = (a) => {
  return 2 * a
}

//Ainda mais reduzida
/*Pode-se descartar os parênteses quando se tem somente um parâmetro*/
dobro = a => 2 * a//retorno implícito, geralmente usado em funções de uma linha
console.log(dobro(Math.PI))

//Função numa variável(padrão)
let ola = function () {
  return 'Olá'
}


//Arrow(Colocando delimitação com bloco({}) o 'return' seria obrigatório)
ola = () => 'Olá'
console.log(ola())