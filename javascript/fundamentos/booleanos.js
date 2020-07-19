let  isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//convertendo valores normais em booleanos:
console.log(!isAtivo);// '!' significa negação.

//valores não booleanos que se comportam como true OU false:
console.log('Verdadeiros: ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

console.log("Falsos: ");
console.log(!!0);
console.log(!!'');//string vazia.
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);