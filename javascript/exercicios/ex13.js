const dia = (numDia) => {

  switch (numDia) {
    case 1: case 7:
      console.log('Fim de semana')
      break;
    case 2: case 3: case 4: case 5: case 6:  
      console.log('Útil')
      break;
    default:
      console.log('Dia inválido!')
      break;
  }
}

dia(1)//Fim de semana
dia(7)//Fim de semana
dia(2)//Util
dia(5)//Util
dia(8)//invalido