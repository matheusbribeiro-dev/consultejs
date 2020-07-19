const fabricante = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir)//O forEach é um 'recurso' de arrays em JS. 
//OU:
fabricante.forEach(imprime => console.log(imprime))