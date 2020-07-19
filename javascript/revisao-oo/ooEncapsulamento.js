
class Tv {
  constructor() {
    this._relacaoCanais = [2, 4, 5, 7, 10]/*O '_' diz para quem estiver lendo o código que aquele é um atributo privado, o _ não impede de se acessar diretamente, só o usa por uma convenção já que JS ainda não suporta o operador 'private'*/
    this._canalAtivo = 5
    this._volume = 5
  }

  //getters e setters
  get canalAtivo() {
    return this._canalAtivo/*Forma de ter acesso a um atributo "privado"*/
  }

  set canalAtivo(canal) {
    this._canalAtivo = canal
  }
}

const tv = new Tv()
tv.canalAtivo = 7
console.log(tv.canalAtivo)