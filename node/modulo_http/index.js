const { createServer } = require("http");

let server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`
        <h1>Hello World!</h1>
        <p>Primeira Pagina com node.js</p>
        `);
  response.end();
});

server.listen(800);

console.log("Ouvindo a porta 8000");
