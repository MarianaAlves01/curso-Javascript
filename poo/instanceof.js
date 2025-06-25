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

console.log(new Cao instanceof Mamifero);
