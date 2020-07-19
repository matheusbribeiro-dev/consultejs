function pessoa() {
  this.idade = 0

  setInterval(function (){
    this.idade++
    console.log(this.idade)
  }.bind(this), 1000)/*A cada 1000mlseg essa função será disparada 
  edit1: com o bind o this passa a se amarrar com a function*/
}

new pessoa /*Será disparado 'NaN', pois o this não está apontando para a function pessoa
edit1: com o bind o this será amarrado*/