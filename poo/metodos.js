let cachorro = {
    latir: function() {
        console.log("Auau");
    },
    rosnar: function() {
        console.log("grrrr");
        
    }
}

cachorro.latir()
cachorro.rosnar()

let pessoa = {
    nome: '',
    getNome: function() {
        return this.nome
    },
    setNome: function(novoNome) {
        this.nome = novoNome
    }
}

pessoa.setNome("Harry")
console.log(pessoa.getNome);
