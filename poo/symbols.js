// propriedades unicas, que n podem ser alteradas e nem criadas duas vezes
// pode-se utilizar como uma constante so que para propriedade de objeto

class Cat {
    constructor(cor){
        this.cor = cor
        
    }

    miar(){
        console.log("Miau miau cara***!");
        
    }
}

let patas = Symbol()
Cat.prototype[patas] = 4

let rajado = new Cat('rajado')
console.log(rajado.cor);

rajado.miar()
