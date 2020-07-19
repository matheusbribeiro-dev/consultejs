const calculadora = (num1, num2, operacao) => {
  switch (operacao) {
    case 'Soma':
      console.log(`${num1} + ${num2}: ${num1+num2}`)
      break
    case 'Subtração':
      console.log(`${num1} - ${num2}: ${num1-num2}`)
      break
    case 'Divisão':
      console.log(`${num1} / ${num2}: ${num1/num2}`)
      break
    case 'Multiplicação':
      console.log(`${num1} . ${num2}: ${num1*num2}`)
      break
    default:
      console.log(`${operacao}: É uma operção inválida`)
      break
  }
}

calculadora(3, 2, 'Soma')
calculadora(3, 2, 'Subtração')
calculadora(3, 2, 'Divisão')
calculadora(3, 2, 'Multiplicação')
calculadora(3, 2, 'Mod')