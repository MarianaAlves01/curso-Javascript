function checarNumero(valor) {
  let resultado = Number(valor);
  if (Number.isNaN(resultado)) {
    return null;
  } else {
    return resultado;
  }
}

console.log(checarNumero(5));
console.log(checarNumero("teste"));

let number = prompt("chDigite um número");
console.log(checarNumero(number));
