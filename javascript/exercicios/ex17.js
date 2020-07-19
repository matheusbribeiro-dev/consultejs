function planoAumento (plano, salario) {
  switch (plano) {
    case 'A':
      console.log(`Seu novo salário: ${(salario*0.10) + salario}`)
      break
    case 'B':
      console.log(`Seu novo salário: ${(salario*0.15) + salario}`)
      break
    case 'C':
      console.log(`Seu novo salário: ${(salario*0.20) + salario}`)
      break
    default:
      console.log('Plano inválido')
      break
  }
}

planoAumento('A', 1500)
planoAumento('B', 1500)
planoAumento('C', 1500)
planoAumento('E', 1500)//invalido