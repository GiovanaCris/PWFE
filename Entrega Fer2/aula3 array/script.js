//variaveis: espaços em memoria que armazenam valores
//let: valores variaveis que recebo em meio a execução
//const: valores fixos no código (valor de pi)
//var: é a primeira forma de declarar uma variável, porém hoje é obsoleta
//escopo diz respeito a como eu vou usar as variaveis criadas
//quando criada uma variavel dentro de uma função, ela é usada somente dentro dela
//Ainda temos mais  1 tipo de variavel em JS, O Array (conjunto de dados numa mesma variavel)

/*BLOCO DE CÓDIGO*/
//Usando os "[]" eu posso criar esse array, lembrando que ele é indexado, começando em "0"
let numeros = [5,10,15,20,25,30,35,40,45,50]

//Para ver os valores armazenados no indice
for (let valor of numeros) {
    document.write(`${valor}, `)
}

//Indices para saber os indices do array
for (let indice in numeros) {
    document.write(indice)
}

//Foreach é uma função para a manipulação de u array
numeros.forEach(function(valor){
    document.write(`<p>${valor} `)
})

//inserir um elemento no final da lista eu uso o comando push
numeros.push(60)
document.write(`${numeros}<p>`)

//Inserir no início do Array
numeros.unshift(0)
document.write(`${numeros}<p>`)

//excluir no inicio do Array
numeros.shift()
document.write(`${numeros}<p>`)

//Excluir no final do array
numeros.pop()
document.write(`${numeros}<p>`)

//Funções callback: eu interajo com o array trato a informação e guardo o resultado em uma nova variável (array)

//Map percorro todo o array, faço algo com o valor e guardo na variável de retorno (funcao callback)
let numerosDobraos = numeros.map(function(numero){
    return numero * 2
})
document.write(`${numerosDobrados} <p>`)

//Filter: ele também percorre o array, e guarda no array de retorno o valor correspondente a uma condição
//retornar todos os valores do array que seja divisível por 3
let numerosdiv3 = numeros.filter(function(numero){
    return numero % 3 === 0
})
document.write(`${numerosdiv3} <p>`)

//Find: percorro o array e paro assim que achar oq eu procuro
let primeiroPar = numeros.find(function(numero){
    return numero % 2 === 0
})
document.write(`${primeiroPar}`)