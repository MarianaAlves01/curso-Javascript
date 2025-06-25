// um objeto fallback de outro objeto
// quando um obj recebe uma requisicao de una prop que ela n tem, ela procura na ptototype deste obj
// o prototype de um obj criado do zero é o Object, que tem os métodos nativos da linguagem

let pessoa = {
    maos: 2
}


console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype)


let pessoaNova = Object.create(pessoa)
console.log(pessoaNova.maos)
console.log(Object.getPrototypeOf(pessoaNova) == pessoa)