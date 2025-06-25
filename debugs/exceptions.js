// pode-se criar erros no programa, caso alguma condição ñ seja atendida
// Porém as exceptions ñ abortam o programa, apenas geram o erro

let a = 1;

if (a != 2) {
  throw new Error("O valor de a não pode ser 1");
}
