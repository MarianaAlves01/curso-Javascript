// get: serve para resgatas o valor de uma propriedade
// set: serve para alterar o valor de uma propriedade

class Cachorro {
    constructor(raca){
        this.raca = raca
    }

    get verRaca(){
        return 'A raca eh' + this.raca
    }
    set novaRaca(value){
        this.raca = value
    }
}

let golden = new Cachorro('Golden Retriever')
console.log(golden.verRaca);


golden.novaRaca = 'Labrador'
console.log(golden.verRaca);
