const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

console.log(valores[4]);//Índice não existente, ele resultará em 'undefined'

//Porém, eu posso definir mais um índice assim: 
valores[4] = 10;
console.log(valores);//exibindo todos os valores do array.

//exibir a quantidade de elementos em um array.
console.log(`Elementos : ${valores.length}`);

//para adicionar mais elementos no array basta usar(.push) :
valores.push({id: 3}, false, null, 'teste');
console.log(valores)

//Retira e retorna o ultimo valor do array:
console.log(valores.pop());

//deleta valores do  array:
delete valores[5];
console.log(valores);

