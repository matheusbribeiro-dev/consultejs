//Exemplo
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {/*Recebe dois parametros, um para a resolução dessa
    promessa e outro para rejeição*/
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

falarDepoisDe(3, 'Que legal')
  .then(frase => console.log(frase))