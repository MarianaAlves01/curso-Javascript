// sempre que adicionamos uma propriedade a um obj, eh criada uma identica no Prototype
// pode-se substituir a do prototype

class Cat {
    constructor(cor, patas){
        this.cor = cor
        this.patas = patas
    }

    miar(){
        console.log("Miau miau cara***!");
        
    }
}

Cat.prototype.cor = "SRD"
Cat.prototype.olhos = "Amarelo"


let rajado = new Cat('rajado', 4)
console.log(rajado.cor);

rajado.miar()

console.log(Cat.prototype.raca);
