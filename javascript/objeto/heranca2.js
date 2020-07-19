//Cadeia de protótipo(prototype chain)
//__proto__ serve para referenciar outros objetos fazendo com que os referenciandos herdem características
const avo = {
  attr1: 'A'
}

const pai = {
  __proto__: avo,
  attr2: 'B'
}

const filho = {
  __proto__: pai,
  attr3: 'C'
}

console.log(filho.attr1)