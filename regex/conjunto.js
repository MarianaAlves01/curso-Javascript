// pode-se definir um conjunto de caracteres para encontar por regex
// basta colocar entre []
// e com um traço, pode-se definir um intervalo

console.log(/[123]/.test("Existe 123 aqui?"));
console.log(/[0-9]/.test("O número 8 se faz presente aqui?"));
