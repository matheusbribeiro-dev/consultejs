//IIFE -> Immediately Invoked Function Expression:
//Assim os códigos não 'tocam' o escopo global.
(function () {
  console.log('Será executado na hora.')
  console.log('Foge do escopo global.')
})()

