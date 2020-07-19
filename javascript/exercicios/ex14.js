const frutas = fruta => {
  switch (fruta) {
    case 'Maçã':
      console.log('Não vendemos esta fruta aqui')
      break
    case 'Kiwi':
      console.log('Estamos com escassez de kiwis')
      break
    case 'Melancia':
      console.log('Aqui está, são 3 reais o quilo')
    default:
      console.log('Erro: conteúdo inválido')
      break;
  }
}

frutas('Maçã')
frutas('Kiwi')
frutas('Melancia')
frutas('eu')