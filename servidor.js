const http = require("http");

const PORT = 3000;

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Raio Carmesim", type: "Feitiço", attack: 6, defense: 0 },
  { name: "Muralha de Granito", type: "Estrutura", attack: 0, defense: 10 },
  { name: "Lobo das Cinzas", type: "Criatura", attack: 5, defense: 3 },
];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>A minha coleção de cartas</h1>
      <p>Bem-vindo à minha coleção de cartas de fantasia.</p>
      <p>Tenho ${cards.length} cartas.</p>
    `);
    return;
  }

  if (req.url === "/sobre") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Sobre</h1>
      <p>Nome: [O teu nome]</p>
      <p>Turma: [A tua turma]</p>
    `);
    return;
  }

  if (req.url === "/cartas") {
    const items = cards.map(card => `<li>${card.name}</li>`).join("");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Cartas</h1>
      <ul>${items}</ul>
    `);
    return;
  }

  if (req.url === "/agora") {
    const now = new Date().toLocaleString("pt-PT");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Agora</h1>
      <p>${now}</p>
    `);
    return;
  }

  if (req.url === "/cartas/aleatoria") {
    const card = cards[Math.floor(Math.random() * cards.length)];
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>${card.name}</h1>
      <p>Tipo: ${card.type}</p>
      <p>Ataque: ${card.attack}</p>
      <p>Defesa: ${card.defense}</p>
    `);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <h1>404</h1>
    <p>Página não encontrada.</p>
  `);
});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});
