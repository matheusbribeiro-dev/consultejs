//Igual a 
console.log('01)', '1' == 1)//Mais abrangente(não leva em conta o tipo)
console.log('02)', '1' === 1)//comparação mais restrita, levando em conta o tipo.

//Diferente
console.log('03)', '3' != 3)//Mais abrangente(não leva em conta o tipo)
console.log('04)', '3' !== 3)//comparação mais restrita, levando em conta o tipo.

//Maior quê, Menor quê, maior-igual, menor-igual
console.log('05)', 3 > 2)
console.log('06)', 3 < 2)
console.log('07)', 3 >= 2)
console.log('08)', 3 <= 2)

const d2 = new Date(0)
const d1 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1.getTime() === d2.getTime())