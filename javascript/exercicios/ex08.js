
function comparadorPontos() {
  let MelhorPior = [0, 0]
  let pontuacao = ['10','20','20','8','25','3','0','30','1']

  for(let i = 1; i <= pontuacao.length; i++){

    if(pontuacao[i] > pontuacao[i - 1] ){
      MelhorPior[0] += 1
    }
    if(pontuacao[i] < pontuacao[i - 1]){
      MelhorPior[1] = i
      
    }
    
  }
  return MelhorPior
}



console.log(comparadorPontos())