const reg1 = new RegExp("bola");
console.log(reg1.test("Tem bola"));
console.log(reg1.test("Não tem"));

const reg2 = /queijo/;
console.log(reg2.test("tem queijo?"));
console.log(reg2.test("não tem"));

console.log(/raio/.test("tem raio"));
console.log(/raio/.test("não tem!"));
