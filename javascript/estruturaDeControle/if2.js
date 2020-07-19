function teste1(num) {
  if(num > 7) 
    console.log(num)
  //Quando só tem uma linha no seu if as {}(chaves) são opcionais. OBS: Adotamos sempre colocar chave
  console.log('Final')
}

teste1(8)
teste1(6)

function teste2(num) {
  if(num > 7); { // cuidado com ';', não usar com as estruturas de controle
    console.log(num)
  }
}

teste2(8)
teste2(6)