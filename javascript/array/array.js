console.log(typeof Array, typeof [])

//Formas de declaração
let aprovados = new Array('Bia', 'Carlos', 'Ana')//Não recomendada
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] //Forma recomendada e literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//undefined -> PQ não tem esse valor 

aprovados.push('Matheus')//Uma forma de atribuir valores ao final do array

console.log(`\nPosições: ${aprovados.length}`)//Para saber o tamanho do array

aprovados[9] = 'zeca'//Funcionará ? sim, ele preencherá o intervalo com espaços vazios até a posição em questão
console.log(`\nPosições: ${aprovados.length}`)

//Algumas funções de array
aprovados.sort()//Ordena o array
console.log('Depois do .sort(): ', aprovados)

delete aprovados[1]//Não reordena o array e essa posição deletada se torna undefined

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')/*Serve para adicionar elementos, remover e add e remover ao mesmo tempo
1 parâmetro: indice no qual se quer 'trabalhar'
2 parâmetro: quantidade de elementos que será excluído
3 parâmetro e assim por diante: Elementos a serem adicionados*/
console.log(aprovados)