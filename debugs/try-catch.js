// o bloco vai executar um código, caso ñ consiga ele pode retornar o erro que esse código gerou
// muito útil para o debug

let b = 2;

try {
  let a = 2 + b;
} catch (error) {
  // throw new Error(error)
  console.log(error);
}

// finally é executada independente do resultado do trycatch
// podendo existir com o try e catch ou só o try

try {
  let c = a + b;
} catch (error) {
  // throw new Error(error)
  console.log(error);
} finally {
  console.log("Executou");
}
