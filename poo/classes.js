// o prototype do JavaScript pode ser chamado de classe
// pois uma Class e um molde de um objeto
// ou seja, pode-se criar varios objetos em cima desse prototype

let cachorro = {
    patas: 4,
    raca: "Bullterrier",
    latir: function() {
        console.log("Auau");
    },
    rosnar: function() {
        console.log("grrrr");
        
    }
}


let labrador = Object.create(cachorro)

labrador.latir();



// INSTANCIANDO CLASSER POR FUNCAO //

function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
}

let doberman = Cachorro("Doberman", 4, "Preto")
console.log(doberman)


// INSTANCIANDO CLASSER POR NEW //

let pitbull = new Cachorro("pitbull", 4, "Pintado")

console.log(pitbull.raca);


// METODO NO PROTOTYPE //
function Dog(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
}

Dog.prototype.latir = function() {
    console.log("Auauauuuu");
}

let husky = new Dog("husky", 4, "cinza")

husky.latir()


// CONSTRUCTOR NA CLASSE (ES6) //
class Gato {
    constructor(cor){
        this.cor = cor
    }
}

let frajola = new Gato('Frajola')
console.log(frajola.cor);

// CLASSE METODOS //
class Cat {
    constructor(cor, patas){
        this.cor = cor
        this.patas = patas
    }

    miar(){
        console.log("Miau miau cara***!");
        
    }
}

Cat.prototype.olhos = "Amarelo"

let rajado = new Cat('rajado', 4)
console.log(rajado.cor);

rajado.miar()
