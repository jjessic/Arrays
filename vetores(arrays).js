// Arrays são como caixas com outras caixas dentro, que podem ser acessadas através do seu índice entre colchetes []. O primeiro índice sempre começa do 0, portanto um array de 4 posições terá o índice de 0 a 3.

// O array é heterogenio, ou seja, podemos colocar qualquer valor dentro dele, ou seja, tipos de dados diferentes. Int, String, double, booleam....

// Realizando a criação de um array:

const arr = []

arr.push("qualquer coisa");
arr.push("Girafa");

// ${arr.length};

// ----------------- Método 01 - Push --------------93729-----
// Permite adivionar valores no final do array
const pushArray = ['Leão', 'tartaruga', 'papagaio']
console.log(pushArray);

pushArray[1] = 'Borboleta'
console.log(pushArray)

pushArray.push('escorpião')
console.log(pushArray)

pushArray.push('dragão')
console.log(pushArray)

//unshift -> adiciona elementos no início do array
pushArray.unshift('Coelho')
console.log(pushArray)

//****************** */ Método 02 - POP ********************
// POP remove o último valor de um determinado array
const popArray = ["Fernando", "Mara", "Eric", "Gabriel"]
console.log(popArray)

// Elimina o último valor do array
popArray.pop()

// Remover o primeiro valor de um array ???
popArray.shift()

console.log(popArray)

//******************** Método 03 - splice ****************
// O método splice permite selecionar um indice e adicionar e remover valores (substituição)
//      indices   =     0      1      2      3
const spliceArray =  ['jan', 'fev', 'abr', 'jun']
console.log(spliceArray);

spliceArray.splice(2, 0, 'mar')
spliceArray.splice(4, 0, 'maio')

console.log(spliceArray)

//*********************** Método 04 - filter ***********************

const filterArray = [ "guilherme", "amanda", "rogerio", "gabrielll", "renata" ]
console.log(filterArray)

const novoArray = filterArray.filter((qualquerCoisa) => {

    return qualquerCoisa == "guilherme"
})

console.log(novoArray)

//*********************** Método 05 - map ***********************
// Map não modifica o array original, somente a função de callback poderá fazer isso! Ou seja, ela criará um novo array
//     indice  =  0  1  2  3  4
const arrayMap = [1, 2, 3, 4, 5]

const arrayModificado = arrayMap.map((multiplicador) => {
    return multiplicador * multiplicador
} )

//*********************** Método 06 - for each ***********************

const foreachArray = ['Carlos', 'Andre', 'Julia', 'Akira']
console.log(foreachArray)

foreachArray.forEach( (nome) => {

    console.log(nome)
} )