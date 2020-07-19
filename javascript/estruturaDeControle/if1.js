function soBoaNoticia(nota) {
  if(nota >= 7) {
    console.log(`Aprovado com ${nota}`)
  }
}

soBoaNoticia(8.1)//Aprovado com 8.1
soBoaNoticia(6.1)//

function seForVerdadeEuFalo(valor) {
  if(valor) {
    console.log(`É verdade... ${valor}`)
  }
}

seForVerdadeEuFalo()//false - não entrará no if
seForVerdadeEuFalo(null)//false - não entrará no if
seForVerdadeEuFalo(undefined)//false - não entrará no if
seForVerdadeEuFalo(NaN)//false - não entrará no if
seForVerdadeEuFalo('')//false - não entrará no if
seForVerdadeEuFalo(0)//false - não entrará no if
seForVerdadeEuFalo(-1)//true - entrará no if
seForVerdadeEuFalo(' ')//true - entrará no if
seForVerdadeEuFalo('?')//true - entrará no if
seForVerdadeEuFalo([])//true - entrará no if
seForVerdadeEuFalo([1, 2])//true - entrará no if
seForVerdadeEuFalo({})//true - entrará no if