const lojaDeAutomovel = opcao => {
  switch (opcao) {
    case 'hatch':
      console.log('Compra efetuada com sucesso !')
      break
    case 'sendan': case 'motocicleta': case 'caminhonete':
      console.log('Tem certeza que não prefere este modelo ?')
      break
    default:
      console.log('Não trabalhamos com este tipo de automóvel aqui')
      break
  }
}

lojaDeAutomovel('hatch')
lojaDeAutomovel('motocicleta')
lojaDeAutomovel('camelo')