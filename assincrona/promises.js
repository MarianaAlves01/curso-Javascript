let p = Promise.resolve(5);
console.log("Uns codigos a mais aqui...");

console.log(p);

p.then((value) => {
  console.log("O valor e ${value}");
});

// falha nas promises

let promiseErrada = Promise.resolve(new Error("Algo deu errado"));

promiseErrada
  .then((value) => console.log(value))
  .catch((reason) => console.log(reason));

// rejeitando promises

function verificarAlgo(numero) {
  return new Promise((resolve, reject) => {
    if ((numero = 2)) {
      resolve(console.log("O numero e dois"));
    } else {
      reject(new Error("Falhou!"));
    }
  });
}

verificarAlgo(3);
verificarAlgo(2);

// resolvendo varias promises

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(100);
  }, 2500);
});

const p2 = Promise.resolve(5);

const p3 = new Promise(function (resolve, reject) {
  resolve(10);
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));
