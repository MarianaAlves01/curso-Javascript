// ler arquivo
let { readFile } = require("fs");

readFile("arquivo.txt", "utf8", (error, texto) => {
  if (error) {
    throw error;
  } else {
    console.log(texto);
  }
});

//escrever no arquivo
wwriteFile("arquivo.txt", "Inserir esse texto", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Escreveu no arquivo!");
  }
});
