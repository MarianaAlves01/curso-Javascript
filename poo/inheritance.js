class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}


class Cao extends Mamifero {
    constructor(patas, raca){
        super(patas, patas)
        this.raca = raca
    }
}

let pug = new Cao(4, 'Pug')
console.log(pug);

