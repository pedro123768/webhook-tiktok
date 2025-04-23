// Simples endpoint de Webhook para TikTok (Node.js + Express)
// Pode ser usado no Render, Vercel, Netlify Functions ou qualquer servidor Node

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('🔔 Webhook recebido do TikTok:', req.body);

  // Aqui você pode tratar os dados recebidos
  // Exemplo: salvar log, ativar uma função, atualizar banco de dados etc.

  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('Servidor de Webhook está rodando!');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
