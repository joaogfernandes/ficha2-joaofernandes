const express = require("express");
const app = express();

const PORT = 3000;

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Raio Carmesim", type: "Feitiço", attack: 6, defense: 0 },
  { name: "Muralha de Granito", type: "Estrutura", attack: 0, defense: 10 },
  { name: "Lobo das Cinzas", type: "Criatura", attack: 5, defense: 3 },
];

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.get("/cartas", (req, res) => {
  const items = cards.map(card => `<li>${card.name}</li>`).join("");
  res.send(`
    <h1>Cartas</h1>
    <ul>${items}</ul>
  `);
});

app.get("/", (req, res) => {
  res.send(`
    <h1>A minha coleção de cartas</h1>
    <p>Bem-vindo à minha coleção de cartas de fantasia.</p>
    <p>Tenho ${cards.length} cartas.</p>
  `);
});

app.get("/sobre", (req, res) => {
  res.send(`
    <h1>Sobre</h1>
    <p>Nome: [O teu nome]</p>
    <p>Turma: [A tua turma]</p>
  `);
});


app.get("/agora", (req, res) => {
  const now = new Date().toLocaleString("pt-PT");
  res.send(`
    <h1>Agora</h1>
    <p>${now}</p>
  `);
});

app.get("/cartas/aleatoria", (req, res) => {
  const card = cards[Math.floor(Math.random() * cards.length)];
  res.send(`
    <h1>${card.name}</h1>
    <p>Tipo: ${card.type}</p>
    <p>Ataque: ${card.attack}</p>
    <p>Defesa: ${card.defense}</p>
  `);
});

app.use((req, res) => {
  res.status(404).send(`
    <h1>404</h1>
    <p>Página não encontrada.</p>
  `);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
