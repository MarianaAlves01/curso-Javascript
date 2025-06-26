console.log("Ainda nao chamou o callback");

setTimeout(function () {
  console.log("Chamou o callback!");
}, 2000);

console.log("Ainda nao chamou o callback");
